#!/usr/bin/env bash
# Install WozCode into Codex and enable WozCode Codex hooks.
#
# Usage from a cloned/generated artifact:
#   ./wozcode/scripts/install.sh
#
# Optional:
#   CODEX_HOME=/path/to/codex/config ./wozcode/scripts/install.sh

set -euo pipefail

SOURCE_PLUGIN_DIR_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CODEX_HOME_PATH="${CODEX_HOME:-$HOME/.codex}"
AGENTS_HOME_PATH="${AGENTS_HOME:-$HOME/.agents}"
MARKETPLACE_ROOT_PATH="$HOME"
MARKETPLACE_PATH="$AGENTS_HOME_PATH/plugins/marketplace.json"
INSTALLED_PLUGIN_DIR_PATH="$CODEX_HOME_PATH/plugins/wozcode"
PLUGIN_HOOKS_PATH="$INSTALLED_PLUGIN_DIR_PATH/hooks/hooks.json"
PLUGIN_AGENTS_DIR_PATH="$INSTALLED_PLUGIN_DIR_PATH/agents"
USER_HOOKS_PATH="$CODEX_HOME_PATH/hooks.json"
USER_AGENTS_DIR_PATH="$CODEX_HOME_PATH/agents"
CONFIG_PATH="$CODEX_HOME_PATH/config.toml"

if [ ! -f "$SOURCE_PLUGIN_DIR_PATH/hooks/hooks.json" ]; then
  echo "error: plugin hooks.json not found at $SOURCE_PLUGIN_DIR_PATH/hooks/hooks.json"
  exit 1
fi

if [ ! -d "$CODEX_HOME_PATH" ]; then
  echo "error: Codex home does not exist at $CODEX_HOME_PATH"
  echo "       start Codex once, then rerun this installer."
  exit 1
fi

node --input-type=module - "$SOURCE_PLUGIN_DIR_PATH" "$INSTALLED_PLUGIN_DIR_PATH" <<'NODE'
import fs from 'node:fs';
import path from 'node:path';

const [, , sourcePluginDirPath, installedPluginDirPath] = process.argv;
const sourcePluginDirPathReal = fs.realpathSync(sourcePluginDirPath);
const installedPluginDirPathReal = fs.existsSync(installedPluginDirPath) ? fs.realpathSync(installedPluginDirPath) : undefined;

if (installedPluginDirPathReal === sourcePluginDirPathReal) {
  console.log(`wozcode: plugin already installed at ${installedPluginDirPath}`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(installedPluginDirPath), { recursive: true });
fs.rmSync(installedPluginDirPath, { recursive: true, force: true });
fs.cpSync(sourcePluginDirPath, installedPluginDirPath, { recursive: true });
console.log(`wozcode: installed plugin to ${installedPluginDirPath}`);
NODE

node --input-type=module - "$MARKETPLACE_PATH" "$MARKETPLACE_ROOT_PATH" "$CODEX_HOME_PATH" <<'NODE'
import fs from 'node:fs';
import path from 'node:path';

const [, , marketplacePath, marketplaceRootPath, codexHomePath] = process.argv;
const backupSuffix = new Date().toISOString().replace(/[:.]/g, '-');
const marketplaceName = 'wozcode';
const pluginName = 'wozcode';
const pluginPath = path.relative(marketplaceRootPath, path.join(codexHomePath, 'plugins', pluginName));
const pluginPathRel = pluginPath.startsWith('./') ? pluginPath : `./${pluginPath}`;
const pluginEntry = {
  name: pluginName,
  source: {
    source: 'local',
    path: pluginPathRel,
  },
  policy: {
    installation: 'AVAILABLE',
    authentication: 'ON_INSTALL',
  },
  category: 'Productivity',
};

function formatJson(value) {
  return `${JSON.stringify(value, undefined, 2)}\n`;
}

function readMarketplace() {
  if (!fs.existsSync(marketplacePath)) {
    return {
      name: marketplaceName,
      interface: {
        displayName: 'WozCode',
      },
      plugins: [],
    };
  }

  try {
    return JSON.parse(fs.readFileSync(marketplacePath, 'utf8'));
  } catch {
    const backupPath = `${marketplacePath}.invalid.${backupSuffix}`;
    fs.copyFileSync(marketplacePath, backupPath);
    console.log(`wozcode: existing marketplace.json is invalid JSON; backed it up to ${path.basename(backupPath)}`);
    return {
      name: marketplaceName,
      interface: {
        displayName: 'WozCode',
      },
      plugins: [],
    };
  }
}

let marketplace = readMarketplace();
if (!marketplace || typeof marketplace !== 'object' || Array.isArray(marketplace)) {
  const backupPath = `${marketplacePath}.nonobject.${backupSuffix}`;
  fs.copyFileSync(marketplacePath, backupPath);
  console.log(`wozcode: existing marketplace.json is not an object; backed it up to ${path.basename(backupPath)}`);
  marketplace = {
    name: marketplaceName,
    interface: {
      displayName: 'WozCode',
    },
    plugins: [],
  };
}

marketplace.name = typeof marketplace.name === 'string' ? marketplace.name : marketplaceName;
marketplace.interface = marketplace.interface && typeof marketplace.interface === 'object' && !Array.isArray(marketplace.interface)
  ? marketplace.interface
  : {};
marketplace.interface.displayName = marketplace.interface.displayName ?? 'WozCode';
marketplace.plugins = Array.isArray(marketplace.plugins) ? marketplace.plugins : [];

const existingPluginIndex = marketplace.plugins.findIndex((plugin) => plugin?.name === pluginName);
if (existingPluginIndex === -1) {
  marketplace.plugins.push(pluginEntry);
} else {
  marketplace.plugins[existingPluginIndex] = pluginEntry;
}

const nextContent = formatJson(marketplace);
const previousContent = fs.existsSync(marketplacePath) ? fs.readFileSync(marketplacePath, 'utf8') : undefined;
fs.mkdirSync(path.dirname(marketplacePath), { recursive: true });

if (previousContent === nextContent) {
  console.log(`wozcode: marketplace already contains ${pluginName} in ${marketplacePath}`);
} else {
  if (previousContent != null) {
    const backupPath = `${marketplacePath}.bak.${backupSuffix}`;
    fs.copyFileSync(marketplacePath, backupPath);
    console.log(`wozcode: backed up existing marketplace.json to ${path.basename(backupPath)}`);
  }
  fs.writeFileSync(marketplacePath, nextContent);
  console.log(`wozcode: installed marketplace entry for ${pluginName} in ${marketplacePath}`);
}
NODE

node --input-type=module - "$PLUGIN_AGENTS_DIR_PATH" "$USER_AGENTS_DIR_PATH" "$INSTALLED_PLUGIN_DIR_PATH" <<'NODE'
import fs from 'node:fs';
import path from 'node:path';

const [, , pluginAgentsDirPath, userAgentsDirPath, installedPluginDirPath] = process.argv;
const backupSuffix = new Date().toISOString().replace(/[:.]/g, '-');
const agentFileNames = ['code.toml', 'code-free.toml', 'explore.toml'];
const pluginDirPlaceholder = '__WOZCODE_PLUGIN_DIR__';

if (!fs.existsSync(pluginAgentsDirPath)) {
  throw new Error(`plugin agents directory not found at ${pluginAgentsDirPath}`);
}

fs.mkdirSync(userAgentsDirPath, { recursive: true });

let installedCount = 0;
let skippedCount = 0;
let backedUpCount = 0;

for (const agentFileName of agentFileNames) {
  const sourcePath = path.join(pluginAgentsDirPath, agentFileName);
  const targetPath = path.join(userAgentsDirPath, agentFileName);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`plugin agent file not found at ${sourcePath}`);
  }

  const sourceContent = fs.readFileSync(sourcePath, 'utf8');
  const targetContent = sourceContent.split(pluginDirPlaceholder).join(installedPluginDirPath);
  const existingContent = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, 'utf8') : undefined;

  if (existingContent === targetContent) {
    skippedCount += 1;
    continue;
  }

  if (existingContent != null) {
    const backupPath = `${targetPath}.bak.${backupSuffix}`;
    fs.copyFileSync(targetPath, backupPath);
    backedUpCount += 1;
  }

  fs.writeFileSync(targetPath, targetContent);
  installedCount += 1;
}

console.log(`wozcode: installed ${installedCount} Codex agent file${installedCount === 1 ? '' : 's'} into ${userAgentsDirPath}`);

if (skippedCount > 0) {
  console.log(`wozcode: skipped ${skippedCount} unchanged Codex agent file${skippedCount === 1 ? '' : 's'}`);
}

if (backedUpCount > 0) {
  console.log(`wozcode: backed up ${backedUpCount} existing Codex agent file${backedUpCount === 1 ? '' : 's'}`);
}
NODE

node --input-type=module - "$PLUGIN_HOOKS_PATH" "$USER_HOOKS_PATH" <<'NODE'
import fs from 'node:fs';
import path from 'node:path';

const [, , pluginHooksPath, userHooksPath] = process.argv;
const backupSuffix = new Date().toISOString().replace(/[:.]/g, '-');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function formatJson(value) {
  return `${JSON.stringify(value, undefined, 2)}\n`;
}

function hookKey(hook) {
  return JSON.stringify(hook);
}

const pluginConfig = readJson(pluginHooksPath);
const userConfigExists = fs.existsSync(userHooksPath);
let userConfig = { hooks: {} };

if (userConfigExists) {
  try {
    userConfig = readJson(userHooksPath);
  } catch (error) {
    const backupPath = `${userHooksPath}.invalid.${backupSuffix}`;
    fs.copyFileSync(userHooksPath, backupPath);
    console.log(`wozcode: existing hooks.json is invalid JSON; backed it up to ${path.basename(backupPath)}`);
    userConfig = { hooks: {} };
  }
}

if (!pluginConfig || typeof pluginConfig !== 'object' || Array.isArray(pluginConfig)) {
  throw new Error('plugin hooks.json must contain a JSON object');
}

if (!userConfig || typeof userConfig !== 'object' || Array.isArray(userConfig)) {
  const backupPath = `${userHooksPath}.nonobject.${backupSuffix}`;
  fs.copyFileSync(userHooksPath, backupPath);
  console.log(`wozcode: existing hooks.json is not an object; backed it up to ${path.basename(backupPath)}`);
  userConfig = { hooks: {} };
}

const pluginHooks = pluginConfig.hooks ?? {};
const userHooks = userConfig.hooks ?? {};

if (typeof pluginHooks !== 'object' || Array.isArray(pluginHooks)) {
  throw new Error('plugin hooks must be a JSON object keyed by hook event name');
}

if (typeof userHooks !== 'object' || Array.isArray(userHooks)) {
  const backupPath = `${userHooksPath}.unsupported-hooks.${backupSuffix}`;
  fs.copyFileSync(userHooksPath, backupPath);
  console.log(`wozcode: existing hooks field is not mergeable; backed it up to ${path.basename(backupPath)}`);
  userConfig.hooks = {};
}

let addedCount = 0;
let skippedCount = 0;
let matcherConflictCount = 0;
const mergedConfig = { ...userConfig, hooks: { ...userConfig.hooks } };

for (const [eventName, pluginEntries] of Object.entries(pluginHooks)) {
  if (!Array.isArray(pluginEntries)) {
    throw new Error(`plugin hook event ${eventName} must be an array`);
  }

  if (mergedConfig.hooks[eventName] != null && !Array.isArray(mergedConfig.hooks[eventName])) {
    throw new Error(`existing hook event ${eventName} is not an array; resolve ${userHooksPath} manually`);
  }

  const userEntries = mergedConfig.hooks[eventName] ?? [];
  const mergedEntries = [...userEntries];

  for (const pluginEntry of pluginEntries) {
    const matcher = pluginEntry?.matcher;
    const matchingEntry = mergedEntries.find((entry) => entry?.matcher === matcher && Array.isArray(entry?.hooks) && Array.isArray(pluginEntry?.hooks));

    if (!matchingEntry) {
      if (mergedEntries.some((entry) => entry?.matcher === matcher)) {
        matcherConflictCount += 1;
      }
      mergedEntries.push(pluginEntry);
      addedCount += 1;
      continue;
    }

    const existingHookKeys = new Set(matchingEntry.hooks.map(hookKey));
    for (const pluginHook of pluginEntry.hooks) {
      if (existingHookKeys.has(hookKey(pluginHook))) {
        skippedCount += 1;
        continue;
      }
      matchingEntry.hooks.push(pluginHook);
      existingHookKeys.add(hookKey(pluginHook));
      addedCount += 1;
    }
  }

  mergedConfig.hooks[eventName] = mergedEntries;
}

const before = userConfigExists ? fs.readFileSync(userHooksPath, 'utf8') : undefined;
const after = formatJson(mergedConfig);

if (before === after) {
  console.log(`wozcode: ${userHooksPath} already contains all plugin hooks`);
} else {
  if (userConfigExists) {
    const backupPath = `${userHooksPath}.bak.${backupSuffix}`;
    fs.copyFileSync(userHooksPath, backupPath);
    console.log(`wozcode: backed up existing hooks.json to ${path.basename(backupPath)}`);
  }
  fs.writeFileSync(userHooksPath, after);
  console.log(`wozcode: installed ${addedCount} hook entr${addedCount === 1 ? 'y' : 'ies'} into ${userHooksPath}`);
}

if (skippedCount > 0) {
  console.log(`wozcode: skipped ${skippedCount} duplicate hook entr${skippedCount === 1 ? 'y' : 'ies'}`);
}

if (matcherConflictCount > 0) {
  console.log('wozcode: kept existing matcher entries and appended WozCode entries where hook shapes differed');
}
NODE

node --input-type=module - "$CONFIG_PATH" "$MARKETPLACE_ROOT_PATH" <<'NODE'
import fs from 'node:fs';
import path from 'node:path';

const [, , configPath, marketplaceRootPath] = process.argv;
const backupSuffix = new Date().toISOString().replace(/[:.]/g, '-');
let content = fs.existsSync(configPath) ? fs.readFileSync(configPath, 'utf8') : '';
const originalContent = content;
const marketplaceSourcePath = fs.realpathSync(marketplaceRootPath);
const wozAttribution = 'Co-Authored-By: WOZCODE <contact@withwoz.com>';
const featureLineRegex = /^([ \t]*codex_hooks[ \t]*=[ \t]*)false([ \t]*(?:#.*)?)$/m;
const enabledFeatureLineRegex = /^[ \t]*codex_hooks[ \t]*=[ \t]*true[ \t]*(?:#.*)?$/m;
const featuresHeaderRegex = /^\[features\][ \t]*$/m;
const nextHeaderAfterFeaturesRegex = /(^\[features\][ \t]*$)([\s\S]*?)(?=^\[[^\]]+\][ \t]*$|(?![\s\S]))/m;
const marketplaceHeaderRegex = /^\[marketplaces\.wozcode\][ \t]*$/m;
const marketplaceBlockRegex = /^\[marketplaces\.wozcode\][ \t]*\n(?:^(?!\[[^\]]+\][ \t]*$).*(?:\n|$))*/m;
const pluginHeaderRegex = /^\[plugins\."wozcode@wozcode"\][ \t]*$/m;
const pluginBlockRegex = /^\[plugins\."wozcode@wozcode"\][ \t]*\n(?:^(?!\[[^\]]+\][ \t]*$).*(?:\n|$))*/m;
const attributionLineRegex = /^([ \t]*commit_attribution[ \t]*=[ \t]*)(["'])(Co-Authored-By: Claude .*?|🤖 Generated with .*?)\2([ \t]*(?:#.*)?)$/m;
const existingAttributionLineRegex = /^[ \t]*commit_attribution[ \t]*=/m;
const wozAttributionLineRegex = /^[ \t]*commit_attribution[ \t]*=[ \t]*["']Co-Authored-By: WOZCODE <contact@withwoz\.com>["'][ \t]*(?:#.*)?$/m;
const marketplaceBlock = `[marketplaces.wozcode]\nsource_type = "local"\nsource = ${JSON.stringify(marketplaceSourcePath)}\n`;
const pluginBlock = '[plugins."wozcode@wozcode"]\nenabled = true\n';

if (!enabledFeatureLineRegex.test(content)) {
  if (featureLineRegex.test(content)) {
    content = content.replace(featureLineRegex, '$1true$2');
  } else if (featuresHeaderRegex.test(content)) {
    content = content.replace(nextHeaderAfterFeaturesRegex, (_match, header, body) => `${header}${body.endsWith('\n') ? body : `${body}\n`}codex_hooks = true\n`);
  } else {
    content = `${content}${content.endsWith('\n') || content.length === 0 ? '' : '\n'}\n[features]\ncodex_hooks = true\n`;
  }
}

if (marketplaceHeaderRegex.test(content)) {
  content = content.replace(marketplaceBlockRegex, marketplaceBlock);
} else {
  content = `${content}${content.endsWith('\n') || content.length === 0 ? '' : '\n'}\n${marketplaceBlock}`;
}

if (pluginHeaderRegex.test(content)) {
  content = content.replace(pluginBlockRegex, pluginBlock);
} else {
  content = `${content}${content.endsWith('\n') || content.length === 0 ? '' : '\n'}\n${pluginBlock}`;
}

if (!wozAttributionLineRegex.test(content)) {
  if (attributionLineRegex.test(content)) {
    content = content.replace(attributionLineRegex, `$1$2${wozAttribution}$2$3`);
  } else if (!existingAttributionLineRegex.test(content)) {
    content = `${content}${content.endsWith('\n') || content.length === 0 ? '' : '\n'}commit_attribution = ${JSON.stringify(wozAttribution)}\n`;
  }
}

fs.mkdirSync(path.dirname(configPath), { recursive: true });

if (fs.existsSync(configPath) && originalContent !== content) {
  const backupPath = `${configPath}.bak.${backupSuffix}`;
  fs.copyFileSync(configPath, backupPath);
  console.log(`wozcode: backed up existing config.toml to ${path.basename(backupPath)}`);
}

fs.writeFileSync(configPath, content);
if (originalContent === content) {
  console.log(`wozcode: config.toml already enables hooks, plugin, marketplace ${marketplaceSourcePath}, and WozCode commit attribution`);
} else {
  console.log(`wozcode: enabled codex_hooks, enabled WozCode plugin, registered WozCode marketplace, and configured WozCode commit attribution in ${configPath}`);
}
NODE

echo ""
echo "wozcode: WozCode is installed at $INSTALLED_PLUGIN_DIR_PATH"
echo "wozcode: WozCode marketplace is installed at $MARKETPLACE_PATH"
echo "wozcode: Codex hooks are installed in $CODEX_HOME_PATH"
