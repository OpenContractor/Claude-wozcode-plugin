---
name: code-free
description: WOZCODE free-plan fallback agent — active when the monthly free-plan cap is exhausted. Claude Code's built-in Read, Edit, Write, Grep, Glob, and NotebookEdit are available; WOZCODE MCP tools are disallowed until the cap resets or the user upgrades.
model: inherit
disallowedTools: mcp__plugin_woz_code__Search, mcp__plugin_woz_code__Edit, mcp__plugin_woz_code__Sql
---
