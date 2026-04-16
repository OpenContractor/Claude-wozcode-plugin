#!/usr/bin/env node
/*
 * WozCode savings-check — read-only analysis.
 *
 * What it does: scans ~/.claude/projects/*.jsonl for batching patterns and
 * prints a cost estimate. Runs entirely on your machine.
 *
 * No network calls. No writes. No telemetry. No child processes.
 * Only reads: CLAUDE_CONFIG_DIR (defaults to ~/.claude) and the .jsonl
 * transcript files inside it.
 *
 * Source (unobfuscated, auditable):
 *   https://github.com/WithWoz/wozcode-plugin/blob/main/standalone/savings-check.js
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/common/baseline/baseline-scanner.ts
var import_child_process3 = require("child_process");
var fs3 = __toESM(require("fs"), 1);
var path4 = __toESM(require("path"), 1);

// src/common/config/config.ts
var fsSync = __toESM(require("fs"), 1);
var fs = __toESM(require("fs/promises"), 1);
var os2 = __toESM(require("os"), 1);
var path2 = __toESM(require("path"), 1);

// src/common/claude-env.ts
var os = __toESM(require("os"), 1);
var path = __toESM(require("path"), 1);
function getClaudeHomePath(useEnv = true) {
  const configPath = (useEnv ? process.env.CLAUDE_CONFIG_DIR : void 0) ?? path.join(os.homedir(), ".claude");
  return configPath;
}
function getProjectsPath() {
  return path.join(getClaudeHomePath(), "projects");
}

// node_modules/zod/v4/classic/external.js
var external_exports = {};
__export(external_exports, {
  $brand: () => $brand,
  $input: () => $input,
  $output: () => $output,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMAC: () => ZodMAC,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRealError: () => ZodRealError,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  ZodXor: () => ZodXor,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  clone: () => clone,
  codec: () => codec,
  coerce: () => coerce_exports,
  config: () => config,
  core: () => core_exports2,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  decode: () => decode2,
  decodeAsync: () => decodeAsync2,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  encode: () => encode2,
  encodeAsync: () => encodeAsync2,
  endsWith: () => _endsWith,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  file: () => file,
  flattenError: () => flattenError,
  float32: () => float32,
  float64: () => float64,
  formatError: () => formatError,
  fromJSONSchema: () => fromJSONSchema,
  function: () => _function,
  getErrorMap: () => getErrorMap,
  globalRegistry: () => globalRegistry,
  gt: () => _gt,
  gte: () => _gte,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  includes: () => _includes,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  iso: () => iso_exports,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  length: () => _length,
  literal: () => literal,
  locales: () => locales_exports,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  mac: () => mac2,
  map: () => map,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  meta: () => meta2,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  negative: () => _negative,
  never: () => never,
  nonnegative: () => _nonnegative,
  nonoptional: () => nonoptional,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  overwrite: () => _overwrite,
  parse: () => parse2,
  parseAsync: () => parseAsync2,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  positive: () => _positive,
  prefault: () => prefault,
  preprocess: () => preprocess,
  prettifyError: () => prettifyError,
  promise: () => promise,
  property: () => _property,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  regex: () => _regex,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode2,
  safeDecodeAsync: () => safeDecodeAsync2,
  safeEncode: () => safeEncode2,
  safeEncodeAsync: () => safeEncodeAsync2,
  safeParse: () => safeParse2,
  safeParseAsync: () => safeParseAsync2,
  set: () => set,
  setErrorMap: () => setErrorMap,
  size: () => _size,
  slugify: () => _slugify,
  startsWith: () => _startsWith,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  toJSONSchema: () => toJSONSchema,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  transform: () => transform,
  treeifyError: () => treeifyError,
  trim: () => _trim,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  uppercase: () => _uppercase,
  url: () => url,
  util: () => util_exports,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// node_modules/zod/v4/core/index.js
var core_exports2 = {};
__export(core_exports2, {
  $ZodAny: () => $ZodAny,
  $ZodArray: () => $ZodArray,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodBase64: () => $ZodBase64,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBoolean: () => $ZodBoolean,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCUID: () => $ZodCUID,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCatch: () => $ZodCatch,
  $ZodCheck: () => $ZodCheck,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCodec: () => $ZodCodec,
  $ZodCustom: () => $ZodCustom,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodDate: () => $ZodDate,
  $ZodDefault: () => $ZodDefault,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodE164: () => $ZodE164,
  $ZodEmail: () => $ZodEmail,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEnum: () => $ZodEnum,
  $ZodError: () => $ZodError,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodFile: () => $ZodFile,
  $ZodFunction: () => $ZodFunction,
  $ZodGUID: () => $ZodGUID,
  $ZodIPv4: () => $ZodIPv4,
  $ZodIPv6: () => $ZodIPv6,
  $ZodISODate: () => $ZodISODate,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISOTime: () => $ZodISOTime,
  $ZodIntersection: () => $ZodIntersection,
  $ZodJWT: () => $ZodJWT,
  $ZodKSUID: () => $ZodKSUID,
  $ZodLazy: () => $ZodLazy,
  $ZodLiteral: () => $ZodLiteral,
  $ZodMAC: () => $ZodMAC,
  $ZodMap: () => $ZodMap,
  $ZodNaN: () => $ZodNaN,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNever: () => $ZodNever,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNull: () => $ZodNull,
  $ZodNullable: () => $ZodNullable,
  $ZodNumber: () => $ZodNumber,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodObject: () => $ZodObject,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodOptional: () => $ZodOptional,
  $ZodPipe: () => $ZodPipe,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPromise: () => $ZodPromise,
  $ZodReadonly: () => $ZodReadonly,
  $ZodRealError: () => $ZodRealError,
  $ZodRecord: () => $ZodRecord,
  $ZodRegistry: () => $ZodRegistry,
  $ZodSet: () => $ZodSet,
  $ZodString: () => $ZodString,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodSuccess: () => $ZodSuccess,
  $ZodSymbol: () => $ZodSymbol,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodTransform: () => $ZodTransform,
  $ZodTuple: () => $ZodTuple,
  $ZodType: () => $ZodType,
  $ZodULID: () => $ZodULID,
  $ZodURL: () => $ZodURL,
  $ZodUUID: () => $ZodUUID,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUnion: () => $ZodUnion,
  $ZodUnknown: () => $ZodUnknown,
  $ZodVoid: () => $ZodVoid,
  $ZodXID: () => $ZodXID,
  $ZodXor: () => $ZodXor,
  $brand: () => $brand,
  $constructor: () => $constructor,
  $input: () => $input,
  $output: () => $output,
  Doc: () => Doc,
  JSONSchema: () => json_schema_exports,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  _any: () => _any,
  _array: () => _array,
  _base64: () => _base64,
  _base64url: () => _base64url,
  _bigint: () => _bigint,
  _boolean: () => _boolean,
  _catch: () => _catch,
  _check: () => _check,
  _cidrv4: () => _cidrv4,
  _cidrv6: () => _cidrv6,
  _coercedBigint: () => _coercedBigint,
  _coercedBoolean: () => _coercedBoolean,
  _coercedDate: () => _coercedDate,
  _coercedNumber: () => _coercedNumber,
  _coercedString: () => _coercedString,
  _cuid: () => _cuid,
  _cuid2: () => _cuid2,
  _custom: () => _custom,
  _date: () => _date,
  _decode: () => _decode,
  _decodeAsync: () => _decodeAsync,
  _default: () => _default,
  _discriminatedUnion: () => _discriminatedUnion,
  _e164: () => _e164,
  _email: () => _email,
  _emoji: () => _emoji2,
  _encode: () => _encode,
  _encodeAsync: () => _encodeAsync,
  _endsWith: () => _endsWith,
  _enum: () => _enum,
  _file: () => _file,
  _float32: () => _float32,
  _float64: () => _float64,
  _gt: () => _gt,
  _gte: () => _gte,
  _guid: () => _guid,
  _includes: () => _includes,
  _int: () => _int,
  _int32: () => _int32,
  _int64: () => _int64,
  _intersection: () => _intersection,
  _ipv4: () => _ipv4,
  _ipv6: () => _ipv6,
  _isoDate: () => _isoDate,
  _isoDateTime: () => _isoDateTime,
  _isoDuration: () => _isoDuration,
  _isoTime: () => _isoTime,
  _jwt: () => _jwt,
  _ksuid: () => _ksuid,
  _lazy: () => _lazy,
  _length: () => _length,
  _literal: () => _literal,
  _lowercase: () => _lowercase,
  _lt: () => _lt,
  _lte: () => _lte,
  _mac: () => _mac,
  _map: () => _map,
  _max: () => _lte,
  _maxLength: () => _maxLength,
  _maxSize: () => _maxSize,
  _mime: () => _mime,
  _min: () => _gte,
  _minLength: () => _minLength,
  _minSize: () => _minSize,
  _multipleOf: () => _multipleOf,
  _nan: () => _nan,
  _nanoid: () => _nanoid,
  _nativeEnum: () => _nativeEnum,
  _negative: () => _negative,
  _never: () => _never,
  _nonnegative: () => _nonnegative,
  _nonoptional: () => _nonoptional,
  _nonpositive: () => _nonpositive,
  _normalize: () => _normalize,
  _null: () => _null2,
  _nullable: () => _nullable,
  _number: () => _number,
  _optional: () => _optional,
  _overwrite: () => _overwrite,
  _parse: () => _parse,
  _parseAsync: () => _parseAsync,
  _pipe: () => _pipe,
  _positive: () => _positive,
  _promise: () => _promise,
  _property: () => _property,
  _readonly: () => _readonly,
  _record: () => _record,
  _refine: () => _refine,
  _regex: () => _regex,
  _safeDecode: () => _safeDecode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeEncode: () => _safeEncode,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeParse: () => _safeParse,
  _safeParseAsync: () => _safeParseAsync,
  _set: () => _set,
  _size: () => _size,
  _slugify: () => _slugify,
  _startsWith: () => _startsWith,
  _string: () => _string,
  _stringFormat: () => _stringFormat,
  _stringbool: () => _stringbool,
  _success: () => _success,
  _superRefine: () => _superRefine,
  _symbol: () => _symbol,
  _templateLiteral: () => _templateLiteral,
  _toLowerCase: () => _toLowerCase,
  _toUpperCase: () => _toUpperCase,
  _transform: () => _transform,
  _trim: () => _trim,
  _tuple: () => _tuple,
  _uint32: () => _uint32,
  _uint64: () => _uint64,
  _ulid: () => _ulid,
  _undefined: () => _undefined2,
  _union: () => _union,
  _unknown: () => _unknown,
  _uppercase: () => _uppercase,
  _url: () => _url,
  _uuid: () => _uuid,
  _uuidv4: () => _uuidv4,
  _uuidv6: () => _uuidv6,
  _uuidv7: () => _uuidv7,
  _void: () => _void,
  _xid: () => _xid,
  _xor: () => _xor,
  clone: () => clone,
  config: () => config,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  describe: () => describe,
  encode: () => encode,
  encodeAsync: () => encodeAsync,
  extractDefs: () => extractDefs,
  finalize: () => finalize,
  flattenError: () => flattenError,
  formatError: () => formatError,
  globalConfig: () => globalConfig,
  globalRegistry: () => globalRegistry,
  initializeContext: () => initializeContext,
  isValidBase64: () => isValidBase64,
  isValidBase64URL: () => isValidBase64URL,
  isValidJWT: () => isValidJWT,
  locales: () => locales_exports,
  meta: () => meta,
  parse: () => parse,
  parseAsync: () => parseAsync,
  prettifyError: () => prettifyError,
  process: () => process2,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  toDotPath: () => toDotPath,
  toJSONSchema: () => toJSONSchema,
  treeifyError: () => treeifyError,
  util: () => util_exports,
  version: () => version
});

// node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer3(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i2 = 0; i2 < keys.length; i2++) {
      const k2 = keys[i2];
      if (!(k2 in inst)) {
        inst[k2] = proto[k2].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a2;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $brand = /* @__PURE__ */ Symbol("zod_brand");
var $ZodAsyncError = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
};
var globalConfig = {};
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}

// node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k2, _]) => numericValues.indexOf(+k2) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set2 = false;
  return {
    get value() {
      if (!set2) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepString = step.toString();
  let stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
    const match = stepString.match(/\d?e-(\d?)/);
    if (match?.[1]) {
      stepDecCount = Number.parseInt(match[1]);
    }
  }
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object2, key, getter) {
  let value = void 0;
  Object.defineProperty(object2, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path5) {
  if (!path5)
    return obj;
  return path5.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises3 = keys.map((key) => promisesObj[key]);
  return Promise.all(promises3).then((results) => {
    const resolvedObj = {};
    for (let i2 = 0; i2 < keys.length; i2++) {
      resolvedObj[keys[i2]] = results[i2];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i2 = 0; i2 < length; i2++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k2) => {
    return shape[k2]._zod.optin === "optional" && shape[k2]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a2, b2) {
  const def = mergeDefs(a2._zod.def, {
    get shape() {
      const _shape = { ...a2._zod.def.shape, ...b2._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b2._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return clone(a2, def);
}
function partial(Class2, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class2, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x2, startIndex = 0) {
  if (x2.aborted === true)
    return true;
  for (let i2 = startIndex; i2 < x2.issues.length; i2++) {
    if (x2.issues[i2]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path5, issues) {
  return issues.map((iss) => {
    var _a2;
    (_a2 = iss).path ?? (_a2.path = []);
    iss.path.unshift(path5);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k2, _]) => {
    return Number.isNaN(Number.parseInt(k2, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base643) {
  const binaryString = atob(base643);
  const bytes = new Uint8Array(binaryString.length);
  for (let i2 = 0; i2 < binaryString.length; i2++) {
    bytes[i2] = binaryString.charCodeAt(i2);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i2 = 0; i2 < bytes.length; i2++) {
    binaryString += String.fromCharCode(bytes[i2]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url3) {
  const base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base643.length % 4) % 4);
  return base64ToUint8Array(base643 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex3) {
  const cleanHex = hex3.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i2 = 0; i2 < cleanHex.length; i2 += 2) {
    bytes[i2 / 2] = Number.parseInt(cleanHex.slice(i2, i2 + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};

// node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error48, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error48.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error48, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error49) => {
    for (const issue2 of error49.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i2 = 0;
        while (i2 < issue2.path.length) {
          const el = issue2.path[i2];
          const terminal = i2 === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i2++;
        }
      }
    }
  };
  processError(error48);
  return fieldErrors;
}
function treeifyError(error48, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error49, path5 = []) => {
    var _a2, _b;
    for (const issue2 of error49.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, issue2.path));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, issue2.path);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, issue2.path);
      } else {
        const fullpath = [...path5, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i2 = 0;
        while (i2 < fullpath.length) {
          const el = fullpath[i2];
          const terminal = i2 === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a2 = curr.properties)[el] ?? (_a2[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i2++;
        }
      }
    }
  };
  processError(error48);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path5 = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path5) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error48) {
  const lines = [];
  const issues = [...error48.issues].sort((a2, b2) => (a2.path ?? []).length - (b2.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(`\u2716 ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
  }
  return lines.join("\n");
}

// node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  if (result.issues.length) {
    const e2 = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e2, _params?.callee);
    throw e2;
  }
  return result.value;
};
var parse = /* @__PURE__ */ _parse($ZodRealError);
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e2 = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e2, params?.callee);
    throw e2;
  }
  return result.value;
};
var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
var encode = /* @__PURE__ */ _encode($ZodRealError);
var _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
var decode = /* @__PURE__ */ _decode($ZodRealError);
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
var encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
var decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

// node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hex: () => hex,
  hostname: () => hostname,
  html5Email: () => html5Email,
  idnEmail: () => idnEmail,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  mac: () => mac,
  md5_base64: () => md5_base64,
  md5_base64url: () => md5_base64url,
  md5_hex: () => md5_hex,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  sha1_base64: () => sha1_base64,
  sha1_base64url: () => sha1_base64url,
  sha1_hex: () => sha1_hex,
  sha256_base64: () => sha256_base64,
  sha256_base64url: () => sha256_base64url,
  sha256_hex: () => sha256_hex,
  sha384_base64: () => sha384_base64,
  sha384_base64url: () => sha384_base64url,
  sha384_hex: () => sha384_hex,
  sha512_base64: () => sha512_base64,
  sha512_base64url: () => sha512_base64url,
  sha512_hex: () => sha512_hex,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
var cuid = /^[cC][^\s-]{8,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version2) => {
  if (!version2)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time3 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time3}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
};
var bigint = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a2;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a2 = inst._zod).onattach ?? (_a2.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a2;
    (_a2 = inst2._zod.bag).multipleOf ?? (_a2.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (input < minimum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size <= def.maximum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size >= def.minimum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.size;
    bag.maximum = def.size;
    bag.size = def.size;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size === def.size)
      return;
    const tooBig = size > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a2, _b;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a2 = inst._zod).check ?? (_a2.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    const result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise) {
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    }
    handleCheckPropertyResult(result, payload, def.property);
    return;
  };
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  const mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  });
  inst._zod.check = (payload) => {
    if (mimeSet.has(payload.value.type))
      return;
    payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
var Doc = class {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x2) => x2);
    const minIndent = Math.min(...lines.map((x2) => x2.length - x2.trimStart().length));
    const dedented = lines.map((x2) => x2.slice(minIndent)).map((x2) => " ".repeat(this.indent * 2) + x2);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x2) => `  ${x2}`)];
    return new F(...args, lines.join("\n"));
  }
};

// node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 3,
  patch: 6
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a2;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url2 = new URL(trimmed);
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url2.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: def.hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.normalize) {
        payload.value = url2.href;
      } else {
        payload.value = trimmed;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv6`;
  inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
  def.pattern ?? (def.pattern = mac(def.delimiter));
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `mac`;
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    const parts = payload.value.split("/");
    try {
      if (parts.length !== 2)
        throw new Error();
      const [address, prefix] = parts;
      if (!prefix)
        throw new Error();
      const prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error();
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error();
      new URL(`http://[${address}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base643 = data.replace(/[-_]/g, (c2) => c2 === "-" ? "+" : "/");
  const padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (def.fn(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {
      }
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def);
  $ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "symbol")
      return payload;
    payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _undefined;
  inst._zod.values = /* @__PURE__ */ new Set([void 0]);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = /* @__PURE__ */ new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {
      }
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i2 = 0; i2 < input.length; i2++) {
      const item = input[i2];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i2)));
      } else {
        handleArrayResult(result, payload, i2);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
  if (result.issues.length) {
    if (isOptionalOut && !(key in input)) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (result.value === void 0) {
    if (key in input) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k2 of keys) {
    if (!def.shape?.[k2]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k2}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.keys) {
      const el = shape[key];
      const isOptionalOut = el._zod.optout === "optional";
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalOut);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const generateFastpass = (shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k2 = esc(key);
      return `shape[${k2}]._zod.run({ value: input[${k2}], issues: [] }, ctx)`;
    };
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {};`);
    for (const key of normalized.keys) {
      const id = ids[key];
      const k2 = esc(key);
      const schema = shape[key];
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(key)};`);
      if (isOptionalOut) {
        doc.write(`
        if (${id}.issues.length) {
          if (${k2} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k2}, ...iss.path] : [${k2}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k2} in input) {
            newResult[${k2}] = undefined;
          }
        } else {
          newResult[${k2}] = ${id}.value;
        }
        
      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k2}, ...iss.path] : [${k2}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k2} in input) {
            newResult[${k2}] = undefined;
          }
        } else {
          newResult[${k2}] = ${id}.value;
        }
        
      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p2) => cleanRegex(p2.source)).join("|")})$`);
    }
    return void 0;
  });
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
  $ZodUnion.init(inst, def);
  def.inclusive = false;
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        results.push(result);
      }
    }
    if (!async)
      return handleExclusiveUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleExclusiveUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    const propValues = {};
    for (const option of def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
      for (const [k2, v] of Object.entries(pv)) {
        if (!propValues[k2])
          propValues[k2] = /* @__PURE__ */ new Set();
        for (const val of v) {
          propValues[k2].add(val);
        }
      }
    }
    return propValues;
  });
  const disc = cached(() => {
    const opts = def.options;
    const map2 = /* @__PURE__ */ new Map();
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map2.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map2.set(v, o);
      }
    }
    return map2;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback) {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a2, b2) {
  if (a2 === b2) {
    return { valid: true, data: a2 };
  }
  if (a2 instanceof Date && b2 instanceof Date && +a2 === +b2) {
    return { valid: true, data: a2 };
  }
  if (isPlainObject(a2) && isPlainObject(b2)) {
    const bKeys = Object.keys(b2);
    const sharedKeys = Object.keys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a2) && Array.isArray(b2)) {
    if (a2.length !== b2.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k2 of iss.keys) {
        if (!unrecKeys.has(k2))
          unrecKeys.set(k2, {});
        unrecKeys.get(k2).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k2 of iss.keys) {
        if (!unrecKeys.has(k2))
          unrecKeys.set(k2, {});
        unrecKeys.get(k2).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k2]) => k2);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  const items = def.items;
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      });
      return payload;
    }
    payload.value = [];
    const proms = [];
    const reversedIndex = [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
    const optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
    if (!def.rest) {
      const tooBig = input.length > items.length;
      const tooSmall = input.length < optStart - 1;
      if (tooBig || tooSmall) {
        payload.issues.push({
          ...tooBig ? { code: "too_big", maximum: items.length, inclusive: true } : { code: "too_small", minimum: items.length },
          input,
          inst,
          origin: "array"
        });
        return payload;
      }
    }
    let i2 = -1;
    for (const item of items) {
      i2++;
      if (i2 >= input.length) {
        if (i2 >= optStart)
          continue;
      }
      const result = item._zod.run({
        value: input[i2],
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleTupleResult(result2, payload, i2)));
      } else {
        handleTupleResult(result, payload, i2);
      }
    }
    if (def.rest) {
      const rest = input.slice(items.length);
      for (const el of rest) {
        i2++;
        const result = def.rest._zod.run({
          value: el,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleTupleResult(result2, payload, i2)));
        } else {
          handleTupleResult(result, payload, i2);
        }
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      const recordKeys = /* @__PURE__ */ new Set();
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[key] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[key] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          unrecognized = unrecognized ?? [];
          unrecognized.push(key);
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized
        });
      }
    } else {
      payload.value = {};
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[keyResult.value] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[keyResult.value] = result.value;
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Map)) {
      payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Map();
    for (const [key, value] of input) {
      const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
      const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      if (keyResult instanceof Promise || valueResult instanceof Promise) {
        proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        }));
      } else {
        handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Set)) {
      payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Set();
    for (const item of input) {
      const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleSetResult(result2, payload)));
      } else
        handleSetResult(result, payload);
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(`^(${values.filter((k2) => propertyKeyTypes.has(typeof k2)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  if (def.values.length === 0) {
    throw new Error("Cannot create literal schema with no valid values");
  }
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input instanceof File)
      return payload;
    payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (result.issues.length && input === void 0) {
    return { issues: [], value: void 0 };
  }
  return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r) => handleOptionalResult(r, payload.value));
      return handleOptionalResult(result, payload.value);
    }
    if (payload.value === void 0) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x2) => x2 !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError("ZodSuccess");
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.issues.length === 0;
        return payload;
      });
    }
    payload.value = result.issues.length === 0;
    return payload;
  };
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "nan",
        code: "invalid_type"
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handleCodecAResult(left2, def, ctx));
      }
      return handleCodecAResult(left, def, ctx);
    } else {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handleCodecAResult(right2, def, ctx));
      }
      return handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const regexParts = [];
  for (const part of def.parts) {
    if (typeof part === "object" && part !== null) {
      if (!part._zod.pattern) {
        throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
      }
      const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(`Invalid template literal part: ${part._zod.traits}`);
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part)) {
      regexParts.push(escapeRegex(`${part}`));
    } else {
      throw new Error(`Invalid template literal part: ${part}`);
    }
  }
  inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "string") {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "string",
        code: "invalid_type"
      });
      return payload;
    }
    inst._zod.pattern.lastIndex = 0;
    if (!inst._zod.pattern.test(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        code: "invalid_format",
        format: def.format ?? "template_literal",
        pattern: inst._zod.pattern.source
      });
      return payload;
    }
    return payload;
  };
});
var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
  $ZodType.init(inst, def);
  inst._def = def;
  inst._zod.def = def;
  inst.implement = (func) => {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    return function(...args) {
      const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
      const result = Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return parse(inst._def.output, result);
      }
      return result;
    };
  };
  inst.implementAsync = (func) => {
    if (typeof func !== "function") {
      throw new Error("implementAsync() must be called with a function");
    }
    return async function(...args) {
      const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
      const result = await Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return await parseAsync(inst._def.output, result);
      }
      return result;
    };
  };
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "function") {
      payload.issues.push({
        code: "invalid_type",
        expected: "function",
        input: payload.value,
        inst
      });
      return payload;
    }
    const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
    if (hasPromiseOutput) {
      payload.value = inst.implementAsync(payload.value);
    } else {
      payload.value = inst.implement(payload.value);
    }
    return payload;
  };
  inst.input = (...args) => {
    const F = inst.constructor;
    if (Array.isArray(args[0])) {
      return new F({
        type: "function",
        input: new $ZodTuple({
          type: "tuple",
          items: args[0],
          rest: args[1]
        }),
        output: inst._def.output
      });
    }
    return new F({
      type: "function",
      input: args[0],
      output: inst._def.output
    });
  };
  inst.output = (output) => {
    const F = inst.constructor;
    return new F({
      type: "function",
      input: inst._def.input,
      output
    });
  };
  return inst;
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
  };
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => def.getter());
  defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
  defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
  defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
  defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}

// node_modules/zod/v4/locales/index.js
var locales_exports = {};
__export(locales_exports, {
  ar: () => ar_default,
  az: () => az_default,
  be: () => be_default,
  bg: () => bg_default,
  ca: () => ca_default,
  cs: () => cs_default,
  da: () => da_default,
  de: () => de_default,
  en: () => en_default,
  eo: () => eo_default,
  es: () => es_default,
  fa: () => fa_default,
  fi: () => fi_default,
  fr: () => fr_default,
  frCA: () => fr_CA_default,
  he: () => he_default,
  hu: () => hu_default,
  hy: () => hy_default,
  id: () => id_default,
  is: () => is_default,
  it: () => it_default,
  ja: () => ja_default,
  ka: () => ka_default,
  kh: () => kh_default,
  km: () => km_default,
  ko: () => ko_default,
  lt: () => lt_default,
  mk: () => mk_default,
  ms: () => ms_default,
  nl: () => nl_default,
  no: () => no_default,
  ota: () => ota_default,
  pl: () => pl_default,
  ps: () => ps_default,
  pt: () => pt_default,
  ru: () => ru_default,
  sl: () => sl_default,
  sv: () => sv_default,
  ta: () => ta_default,
  th: () => th_default,
  tr: () => tr_default,
  ua: () => ua_default,
  uk: () => uk_default,
  ur: () => ur_default,
  uz: () => uz_default,
  vi: () => vi_default,
  yo: () => yo_default,
  zhCN: () => zh_CN_default,
  zhTW: () => zh_TW_default
});

// node_modules/zod/v4/locales/ar.js
var error = () => {
  const Sizable = {
    string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0645\u062F\u062E\u0644",
    email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    url: "\u0631\u0627\u0628\u0637",
    emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
    ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
    cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
    cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
    base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
    base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
    json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
    e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
    jwt: "JWT",
    template_literal: "\u0645\u062F\u062E\u0644"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${issue2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
        }
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"}`;
        return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${issue2.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${issue2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${issue2.keys.length > 1 ? "\u0629" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}

// node_modules/zod/v4/locales/az.js
var error2 = () => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${issue2.expected}, daxil olan ${received}`;
        }
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${expected}, daxil olan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${stringifyPrimitive(issue2.values[0])}`;
        return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
        if (_issue.format === "ends_with")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.suffix}" il\u0259 bitm\u0259lidir`;
        if (_issue.format === "includes")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.includes}" daxil olmal\u0131d\u0131r`;
        if (_issue.format === "regex")
          return `Yanl\u0131\u015F m\u0259tn: ${_issue.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
        return `Yanl\u0131\u015F ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${issue2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return `Yanl\u0131\u015F d\u0259y\u0259r`;
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}

// node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error3 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0443\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0430\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0447\u0430\u0441",
    duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
    cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
    base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
    json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
    e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0443\u0432\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u043B\u0456\u043A",
    array: "\u043C\u0430\u0441\u0456\u045E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${issue2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
        }
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${issue2.origin}`;
      default:
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434`;
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}

// node_modules/zod/v4/locales/bg.js
var error4 = () => {
  const Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0445\u043E\u0434",
    email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    json_string: "JSON \u043D\u0438\u0437",
    e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
        }
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
        return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_issue.pattern}`;
        let invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
        if (_issue.format === "emoji")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "datetime")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "date")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
        if (_issue.format === "time")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "duration")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
        return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${issue2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434`;
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}

// node_modules/zod/v4/locales/ca.js
var error5 = () => {
  const Sizable = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "adre\xE7a electr\xF2nica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adre\xE7a IPv4",
    ipv6: "adre\xE7a IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipus inv\xE0lid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
        }
        return `Tipus inv\xE0lid: s'esperava ${expected}, s'ha rebut ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Valor inv\xE0lid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
        return `Opci\xF3 inv\xE0lida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a m\xE0xim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingu\xE9s ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Massa petit: s'esperava que ${issue2.origin} contingu\xE9s ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Format inv\xE0lid: ha de comen\xE7ar amb "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Format inv\xE0lid: ha d'acabar amb "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Format inv\xE0lid: ha d'incloure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_issue.pattern}`;
        return `Format inv\xE0lid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element inv\xE0lid a ${issue2.origin}`;
      default:
        return `Entrada inv\xE0lida`;
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}

// node_modules/zod/v4/locales/cs.js
var error6 = () => {
  const Sizable = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regul\xE1rn\xED v\xFDraz",
    email: "e-mailov\xE1 adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a \u010Das ve form\xE1tu ISO",
    date: "datum ve form\xE1tu ISO",
    time: "\u010Das ve form\xE1tu ISO",
    duration: "doba trv\xE1n\xED ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
    base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
    json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
    e164: "\u010D\xEDslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u010D\xEDslo",
    string: "\u0159et\u011Bzec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${issue2.expected}, obdr\u017Eeno ${received}`;
        }
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${expected}, obdr\u017Eeno ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${stringifyPrimitive(issue2.values[0])}`;
        return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
        }
        return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
        }
        return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_issue.pattern}`;
        return `Neplatn\xFD form\xE1t ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${issue2.origin}`;
      default:
        return `Neplatn\xFD vstup`;
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}

// node_modules/zod/v4/locales/da.js
var error7 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkesl\xE6t",
    date: "ISO-dato",
    time: "ISO-klokkesl\xE6t",
    duration: "ISO-varighed",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "s\xE6t",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
        }
        return `Ugyldigt input: forventede ${expected}, fik ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig v\xE6rdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldigt valg: forventede en af f\xF8lgende ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: skal matche m\xF8nsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal v\xE6re deleligt med ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8gle i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig v\xE6rdi i ${issue2.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}

// node_modules/zod/v4/locales/de.js
var error8 = () => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ung\xFCltige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
        }
        return `Ung\xFCltige Eingabe: erwartet ${expected}, erhalten ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ung\xFCltige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ung\xFCltige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
        return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
        }
        return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ung\xFCltiger String: muss mit "${_issue.prefix}" beginnen`;
        if (_issue.format === "ends_with")
          return `Ung\xFCltiger String: muss mit "${_issue.suffix}" enden`;
        if (_issue.format === "includes")
          return `Ung\xFCltiger String: muss "${_issue.includes}" enthalten`;
        if (_issue.format === "regex")
          return `Ung\xFCltiger String: muss dem Muster ${_issue.pattern} entsprechen`;
        return `Ung\xFCltig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${issue2.origin}`;
      default:
        return `Ung\xFCltige Eingabe`;
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}

// node_modules/zod/v4/locales/en.js
var error9 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error9()
  };
}

// node_modules/zod/v4/locales/eo.js
var error10 = () => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emo\u011Dio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-da\u016Dro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nevalida enigo: atendi\u011Dis instanceof ${issue2.expected}, ricevi\u011Dis ${received}`;
        }
        return `Nevalida enigo: atendi\u011Dis ${expected}, ricevi\u011Dis ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nevalida enigo: atendi\u011Dis ${stringifyPrimitive(issue2.values[0])}`;
        return `Nevalida opcio: atendi\u011Dis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
        return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nevalida karaktraro: devas komenci\u011Di per "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nevalida karaktraro: devas fini\u011Di per "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
        return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} \u015Dlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida \u015Dlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
function eo_default() {
  return {
    localeError: error10()
  };
}

// node_modules/zod/v4/locales/es.js
var error11 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "direcci\xF3n de correo electr\xF3nico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duraci\xF3n ISO",
    ipv4: "direcci\xF3n IPv4",
    ipv6: "direcci\xF3n IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "n\xFAmero",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "n\xFAmero grande",
    symbol: "s\xEDmbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "funci\xF3n",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeraci\xF3n",
    union: "uni\xF3n",
    literal: "literal",
    promise: "promesa",
    void: "vac\xEDo",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrada inv\xE1lida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
        }
        return `Entrada inv\xE1lida: se esperaba ${expected}, recibido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inv\xE1lida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
        return `Opci\xF3n inv\xE1lida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `Demasiado peque\xF1o: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Demasiado peque\xF1o: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cadena inv\xE1lida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cadena inv\xE1lida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cadena inv\xE1lida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_issue.pattern}`;
        return `Inv\xE1lido ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return `Entrada inv\xE1lida`;
    }
  };
};
function es_default() {
  return {
    localeError: error11()
  };
}

// node_modules/zod/v4/locales/fa.js
var error12 = () => {
  const Sizable = {
    string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u06CC",
    email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
    url: "URL",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
    time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    ipv4: "IPv4 \u0622\u062F\u0631\u0633",
    ipv6: "IPv6 \u0622\u062F\u0631\u0633",
    cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
    cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
    base64: "base64-encoded \u0631\u0634\u062A\u0647",
    base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
    json_string: "JSON \u0631\u0634\u062A\u0647",
    e164: "E.164 \u0639\u062F\u062F",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u06CC"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0622\u0631\u0627\u06CC\u0647"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${issue2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
        }
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${stringifyPrimitive(issue2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
        }
        return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${joinValues(issue2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
        }
        return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0628\u0627\u0634\u062F`;
        }
        return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
        }
        if (_issue.format === "ends_with") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
        }
        if (_issue.format === "includes") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_issue.includes}" \u0628\u0627\u0634\u062F`;
        }
        if (_issue.format === "regex") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_issue.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${issue2.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${issue2.origin}`;
      case "invalid_union":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${issue2.origin}`;
      default:
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
    }
  };
};
function fa_default() {
  return {
    localeError: error12()
  };
}

// node_modules/zod/v4/locales/fi.js
var error13 = () => {
  const Sizable = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "s\xE4\xE4nn\xF6llinen lauseke",
    email: "s\xE4hk\xF6postiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
        }
        return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Virheellinen sy\xF6te: t\xE4ytyy olla ${stringifyPrimitive(issue2.values[0])}`;
        return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian suuri: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian suuri: arvon t\xE4ytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian pieni: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian pieni: arvon t\xE4ytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_issue.includes}"`;
        if (_issue.format === "regex") {
          return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_issue.pattern}`;
        }
        return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen sy\xF6te`;
    }
  };
};
function fi_default() {
  return {
    localeError: error13()
  };
}

// node_modules/zod/v4/locales/fr.js
var error14 = () => {
  const Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombre",
    array: "tableau"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entr\xE9e invalide : instanceof ${issue2.expected} attendu, ${received} re\xE7u`;
        }
        return `Entr\xE9e invalide : ${expected} attendu, ${received} re\xE7u`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entr\xE9e invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : ${issue2.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xE9l\xE9ment(s)"}`;
        return `Trop grand : ${issue2.origin ?? "valeur"} doit \xEAtre ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : ${issue2.origin} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : ${issue2.origin} doit \xEAtre ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entr\xE9e invalide`;
    }
  };
};
function fr_default() {
  return {
    localeError: error14()
  };
}

// node_modules/zod/v4/locales/fr-CA.js
var error15 = () => {
  const Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entr\xE9e invalide : attendu instanceof ${issue2.expected}, re\xE7u ${received}`;
        }
        return `Entr\xE9e invalide : attendu ${expected}, re\xE7u ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entr\xE9e invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u2264" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u2265" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cha\xEEne invalide : doit correspondre au motif ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entr\xE9e invalide`;
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error15()
  };
}

// node_modules/zod/v4/locales/he.js
var error16 = () => {
  const TypeNames = {
    string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
    number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
    boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
    array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
    object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
    null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
    undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" },
    symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
    function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
    map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
    set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
    file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
    value: { label: "\u05E2\u05E8\u05DA", gender: "m" }
  };
  const Sizable = {
    string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" },
    file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }
    // no unit
  };
  const typeEntry = (t) => t ? TypeNames[t] : void 0;
  const typeLabel = (t) => {
    const e2 = typeEntry(t);
    if (e2)
      return e2.label;
    return t ?? TypeNames.unknown.label;
  };
  const withDefinite = (t) => `\u05D4${typeLabel(t)}`;
  const verbFor = (t) => {
    const e2 = typeEntry(t);
    const gender = e2?.gender ?? "m";
    return gender === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
  };
  const getSizing = (origin) => {
    if (!origin)
      return null;
    return Sizable[origin] ?? null;
  };
  const FormatDictionary = {
    regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
    url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
    time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
    duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
    ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
    ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
    cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
    cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
    base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
    base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
    e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expectedKey = issue2.expected;
        const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${issue2.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
        }
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1) {
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${stringifyPrimitive(issue2.values[0])}`;
        }
        const stringified = issue2.values.map((v) => stringifyPrimitive(v));
        if (issue2.values.length === 2) {
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified[0]} \u05D0\u05D5 ${stringified[1]}`;
        }
        const lastValue = stringified[stringified.length - 1];
        const restValues = stringified.slice(0, -1).join(", ");
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${restValues} \u05D0\u05D5 ${lastValue}`;
      }
      case "too_big": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${issue2.maximum}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${issue2.maximum} ${sizing?.unit ?? ""}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? "<=" : "<";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.longLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${issue2.minimum}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          if (issue2.minimum === 1 && issue2.inclusive) {
            const singularPhrase = issue2.origin === "set" ? "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${singularPhrase}`;
          }
          const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${issue2.minimum} ${sizing?.unit ?? ""}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? ">=" : ">";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.shortLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_issue.pattern}`;
        const nounEntry = FormatDictionary[_issue.format];
        const noun = nounEntry?.label ?? _issue.format;
        const gender = nounEntry?.gender ?? "m";
        const adjective = gender === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
        return `${noun} \u05DC\u05D0 ${adjective}`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${issue2.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key": {
        return `\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8`;
      }
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element": {
        const place = withDefinite(issue2.origin ?? "array");
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${place}`;
      }
      default:
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
    }
  };
};
function he_default() {
  return {
    localeError: error16()
  };
}

// node_modules/zod/v4/locales/hu.js
var error17 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "bemenet",
    email: "email c\xEDm",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO id\u0151b\xE9lyeg",
    date: "ISO d\xE1tum",
    time: "ISO id\u0151",
    duration: "ISO id\u0151intervallum",
    ipv4: "IPv4 c\xEDm",
    ipv6: "IPv6 c\xEDm",
    cidrv4: "IPv4 tartom\xE1ny",
    cidrv6: "IPv6 tartom\xE1ny",
    base64: "base64-k\xF3dolt string",
    base64url: "base64url-k\xF3dolt string",
    json_string: "JSON string",
    e164: "E.164 sz\xE1m",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "sz\xE1m",
    array: "t\xF6mb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${issue2.expected}, a kapott \xE9rt\xE9k ${received}`;
        }
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${expected}, a kapott \xE9rt\xE9k ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${stringifyPrimitive(issue2.values[0])}`;
        return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `T\xFAl nagy: ${issue2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
        return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${issue2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} m\xE9rete t\xFAl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} t\xFAl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\xC9rv\xE9nytelen string: "${_issue.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
        if (_issue.format === "ends_with")
          return `\xC9rv\xE9nytelen string: "${_issue.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
        if (_issue.format === "includes")
          return `\xC9rv\xE9nytelen string: "${_issue.includes}" \xE9rt\xE9ket kell tartalmaznia`;
        if (_issue.format === "regex")
          return `\xC9rv\xE9nytelen string: ${_issue.pattern} mint\xE1nak kell megfelelnie`;
        return `\xC9rv\xE9nytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${issue2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${issue2.origin}`;
      default:
        return `\xC9rv\xE9nytelen bemenet`;
    }
  };
};
function hu_default() {
  return {
    localeError: error17()
  };
}

// node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "\u0576" : "\u0568");
}
var error18 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0576\u0577\u0561\u0576",
        many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    file: {
      unit: {
        one: "\u0562\u0561\u0575\u0569",
        many: "\u0562\u0561\u0575\u0569\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    array: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    set: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0574\u0578\u0582\u057F\u0584",
    email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
    url: "URL",
    emoji: "\u0567\u0574\u0578\u057B\u056B",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
    date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
    time: "ISO \u056A\u0561\u0574",
    duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
    ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
    ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
    cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    json_string: "JSON \u057F\u0578\u0572",
    e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
    jwt: "JWT",
    template_literal: "\u0574\u0578\u0582\u057F\u0584"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0569\u056B\u057E",
    array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${issue2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
        }
        return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${stringifyPrimitive(issue2.values[1])}`;
        return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056C\u056B\u0576\u056B ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_issue.prefix}"-\u0578\u057E`;
        if (_issue.format === "ends_with")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_issue.suffix}"-\u0578\u057E`;
        if (_issue.format === "includes")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_issue.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
        return `\u054D\u056D\u0561\u056C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${issue2.divisor}-\u056B`;
      case "unrecognized_keys":
        return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${issue2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      case "invalid_union":
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
      case "invalid_element":
        return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      default:
        return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574`;
    }
  };
};
function hy_default() {
  return {
    localeError: error18()
  };
}

// node_modules/zod/v4/locales/id.js
var error19 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak valid: harus menyertakan "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
function id_default() {
  return {
    localeError: error19()
  };
}

// node_modules/zod/v4/locales/is.js
var error20 = () => {
  const Sizable = {
    string: { unit: "stafi", verb: "a\xF0 hafa" },
    file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
    array: { unit: "hluti", verb: "a\xF0 hafa" },
    set: { unit: "hluti", verb: "a\xF0 hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefsl\xF3\xF0",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og t\xEDmi",
    date: "ISO dagsetning",
    time: "ISO t\xEDmi",
    duration: "ISO t\xEDmalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 t\xF6lugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera instanceof ${issue2.expected}`;
        }
        return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Rangt gildi: gert r\xE1\xF0 fyrir ${stringifyPrimitive(issue2.values[0])}`;
        return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
        return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} s\xE9 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} s\xE9 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_issue.pattern}`;
        return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\xD3\xFEekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill \xED ${issue2.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi \xED ${issue2.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
function is_default() {
  return {
    localeError: error20()
  };
}

// node_modules/zod/v4/locales/it.js
var error21 = () => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
        }
        return `Input non valido: atteso ${expected}, ricevuto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
        return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
        return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Stringa non valida: deve includere "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
function it_default() {
  return {
    localeError: error21()
  };
}

// node_modules/zod/v4/locales/ja.js
var error22 = () => {
  const Sizable = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u5165\u529B\u5024",
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    url: "URL",
    emoji: "\u7D75\u6587\u5B57",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u6642",
    date: "ISO\u65E5\u4ED8",
    time: "ISO\u6642\u523B",
    duration: "ISO\u671F\u9593",
    ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
    ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
    cidrv4: "IPv4\u7BC4\u56F2",
    cidrv6: "IPv6\u7BC4\u56F2",
    base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    json_string: "JSON\u6587\u5B57\u5217",
    e164: "E.164\u756A\u53F7",
    jwt: "JWT",
    template_literal: "\u5165\u529B\u5024"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5024",
    array: "\u914D\u5217"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${issue2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
        }
        return `\u7121\u52B9\u306A\u5165\u529B: ${expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u7121\u52B9\u306A\u5165\u529B: ${stringifyPrimitive(issue2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
        return `\u7121\u52B9\u306A\u9078\u629E: ${joinValues(issue2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${sizing.unit ?? "\u8981\u7D20"}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${sizing.unit}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "ends_with")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "includes")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "regex")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_issue.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u7121\u52B9\u306A${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${issue2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${issue2.keys.length > 1 ? "\u7FA4" : ""}: ${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return `\u7121\u52B9\u306A\u5165\u529B`;
    }
  };
};
function ja_default() {
  return {
    localeError: error22()
  };
}

// node_modules/zod/v4/locales/ka.js
var error23 = () => {
  const Sizable = {
    string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
    email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    url: "URL",
    emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
    date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
    time: "\u10D3\u10E0\u10DD",
    duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
    ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    json_string: "JSON \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
    jwt: "JWT",
    template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
    string: "\u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
    boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
    function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
    array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${issue2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
        }
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${joinValues(issue2.values, "|")}-\u10D3\u10D0\u10DC`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.prefix}"-\u10D8\u10D7`;
        }
        if (_issue.format === "ends_with")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.suffix}"-\u10D8\u10D7`;
        if (_issue.format === "includes")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_issue.includes}"-\u10E1`;
        if (_issue.format === "regex")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_issue.pattern}`;
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${issue2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
      case "unrecognized_keys":
        return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${issue2.origin}-\u10E8\u10D8`;
      case "invalid_union":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
      case "invalid_element":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${issue2.origin}-\u10E8\u10D8`;
      default:
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0`;
    }
  };
};
function ka_default() {
  return {
    localeError: error23()
  };
}

// node_modules/zod/v4/locales/km.js
var error24 = () => {
  const Sizable = {
    string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    url: "URL",
    emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
    date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
    time: "\u1798\u17C9\u17C4\u1784 ISO",
    duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
    ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
    base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
    json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
    e164: "\u179B\u17C1\u1781 E.164",
    jwt: "JWT",
    template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u179B\u17C1\u1781",
    array: "\u17A2\u17B6\u179A\u17C1 (Array)",
    null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${issue2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
        }
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${stringifyPrimitive(issue2.values[0])}`;
        return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
        return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_issue.pattern}`;
        return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      case "invalid_union":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      default:
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
    }
  };
};
function km_default() {
  return {
    localeError: error24()
  };
}

// node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}

// node_modules/zod/v4/locales/ko.js
var error25 = () => {
  const Sizable = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\uC785\uB825",
    email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    url: "URL",
    emoji: "\uC774\uBAA8\uC9C0",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
    date: "ISO \uB0A0\uC9DC",
    time: "ISO \uC2DC\uAC04",
    duration: "ISO \uAE30\uAC04",
    ipv4: "IPv4 \uC8FC\uC18C",
    ipv6: "IPv6 \uC8FC\uC18C",
    cidrv4: "IPv4 \uBC94\uC704",
    cidrv6: "IPv6 \uBC94\uC704",
    base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    json_string: "JSON \uBB38\uC790\uC5F4",
    e164: "E.164 \uBC88\uD638",
    jwt: "JWT",
    template_literal: "\uC785\uB825"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${issue2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
        }
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${stringifyPrimitive(issue2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
        return `\uC798\uBABB\uB41C \uC635\uC158: ${joinValues(issue2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        const adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC";
        const suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "\uC694\uC18C";
        if (sizing)
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
        return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC";
        const suffix = adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "\uC694\uC18C";
        if (sizing) {
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
        }
        return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
        }
        if (_issue.format === "ends_with")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
        if (_issue.format === "includes")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
        if (_issue.format === "regex")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_issue.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
        return `\uC798\uBABB\uB41C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${issue2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${issue2.origin}`;
      case "invalid_union":
        return `\uC798\uBABB\uB41C \uC785\uB825`;
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${issue2.origin}`;
      default:
        return `\uC798\uBABB\uB41C \uC785\uB825`;
    }
  };
};
function ko_default() {
  return {
    localeError: error25()
  };
}

// node_modules/zod/v4/locales/lt.js
var capitalizeFirstCharacter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number4) {
  const abs = Math.abs(number4);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
var error26 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simboli\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
          notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
          notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "bait\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne didesnis kaip",
          notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
          notInclusive: "turi b\u016Bti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    const result = Sizable[origin] ?? null;
    if (result === null)
      return result;
    return {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  const FormatDictionary = {
    regex: "\u012Fvestis",
    email: "el. pa\u0161to adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukm\u0117",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 u\u017Ekoduota eilut\u0117",
    base64url: "base64url u\u017Ekoduota eilut\u0117",
    json_string: "JSON eilut\u0117",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "\u012Fvestis"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "skai\u010Dius",
    bigint: "sveikasis skai\u010Dius",
    string: "eilut\u0117",
    boolean: "login\u0117 reik\u0161m\u0117",
    undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulin\u0117 reik\u0161m\u0117"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Gautas tipas ${received}, o tik\u0117tasi - instanceof ${issue2.expected}`;
        }
        return `Gautas tipas ${received}, o tik\u0117tasi - ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Privalo b\u016Bti ${stringifyPrimitive(issue2.values[0])}`;
        return `Privalo b\u016Bti vienas i\u0161 ${joinValues(issue2.values, "|")} pasirinkim\u0173`;
      case "too_big": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "element\u0173"}`;
        const adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
      }
      case "too_small": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "element\u0173"}`;
        const adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Eilut\u0117 privalo prasid\u0117ti "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Eilut\u0117 privalo pasibaigti "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Eilut\u0117 privalo \u012Ftraukti "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Eilut\u0117 privalo atitikti ${_issue.pattern}`;
        return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Skai\u010Dius privalo b\u016Bti ${issue2.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpa\u017Eint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga \u012Fvestis";
      case "invalid_element": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
      }
      default:
        return "Klaidinga \u012Fvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error26()
  };
}

// node_modules/zod/v4/locales/mk.js
var error27 = () => {
  const Sizable = {
    string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u043D\u0435\u0441",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u045F\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0443\u043C",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
    cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
    cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
    base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    json_string: "JSON \u043D\u0438\u0437\u0430",
    e164: "E.164 \u0431\u0440\u043E\u0458",
    jwt: "JWT",
    template_literal: "\u0432\u043D\u0435\u0441"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0431\u0440\u043E\u0458",
    array: "\u043D\u0438\u0437\u0430"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${issue2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
        }
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
        return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${issue2.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${issue2.origin}`;
      default:
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441`;
    }
  };
};
function mk_default() {
  return {
    localeError: error27()
  };
}

// node_modules/zod/v4/locales/ms.js
var error28 = () => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
function ms_default() {
  return {
    localeError: error28()
  };
}

// node_modules/zod/v4/locales/nl.js
var error29 = () => {
  const Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
        }
        return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
        return `Ongeldige optie: verwacht \xE9\xE9n van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        if (sizing)
          return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
        return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        if (sizing) {
          return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
        }
        if (_issue.format === "ends_with")
          return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
        if (_issue.format === "includes")
          return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
        if (_issue.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
        return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
function nl_default() {
  return {
    localeError: error29()
  };
}

// node_modules/zod/v4/locales/no.js
var error30 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
        }
        return `Ugyldig input: forventet ${expected}, fikk ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: m\xE5 starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: m\xE5 ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: m\xE5 inneholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function no_default() {
  return {
    localeError: error30()
  };
}

// node_modules/zod/v4/locales/ota.js
var error31 = () => {
  const Sizable = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "giren",
    email: "epostag\xE2h",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO heng\xE2m\u0131",
    date: "ISO tarihi",
    time: "ISO zaman\u0131",
    duration: "ISO m\xFCddeti",
    ipv4: "IPv4 ni\u015F\xE2n\u0131",
    ipv6: "IPv6 ni\u015F\xE2n\u0131",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-\u015Fifreli metin",
    base64url: "base64url-\u015Fifreli metin",
    json_string: "JSON metin",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "giren"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `F\xE2sit giren: umulan instanceof ${issue2.expected}, al\u0131nan ${received}`;
        }
        return `F\xE2sit giren: umulan ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `F\xE2sit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
        return `F\xE2sit tercih: m\xFBteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
        return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmal\u0131yd\u0131.`;
        }
        return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `F\xE2sit metin: "${_issue.prefix}" ile ba\u015Flamal\u0131.`;
        if (_issue.format === "ends_with")
          return `F\xE2sit metin: "${_issue.suffix}" ile bitmeli.`;
        if (_issue.format === "includes")
          return `F\xE2sit metin: "${_issue.includes}" ihtiv\xE2 etmeli.`;
        if (_issue.format === "regex")
          return `F\xE2sit metin: ${_issue.pattern} nak\u015F\u0131na uymal\u0131.`;
        return `F\xE2sit ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${issue2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${issue2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return `K\u0131ymet tan\u0131namad\u0131.`;
    }
  };
};
function ota_default() {
  return {
    localeError: error31()
  };
}

// node_modules/zod/v4/locales/ps.js
var error32 = () => {
  const Sizable = {
    string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
    array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u064A",
    email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
    date: "\u0646\u06D0\u067C\u0647",
    time: "\u0648\u062E\u062A",
    duration: "\u0645\u0648\u062F\u0647",
    ipv4: "\u062F IPv4 \u067E\u062A\u0647",
    ipv6: "\u062F IPv6 \u067E\u062A\u0647",
    cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
    cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
    base64: "base64-encoded \u0645\u062A\u0646",
    base64url: "base64url-encoded \u0645\u062A\u0646",
    json_string: "JSON \u0645\u062A\u0646",
    e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u064A"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0627\u0631\u06D0"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${issue2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
        }
        return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${stringifyPrimitive(issue2.values[0])} \u0648\u0627\u06CC`;
        }
        return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${joinValues(issue2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
        }
        return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0648\u064A`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0648\u0644\u0631\u064A`;
        }
        return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0648\u064A`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
        }
        if (_issue.format === "ends_with") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
        }
        if (_issue.format === "includes") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_issue.includes}" \u0648\u0644\u0631\u064A`;
        }
        if (_issue.format === "regex") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_issue.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
      }
      case "not_multiple_of":
        return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${issue2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
      case "unrecognized_keys":
        return `\u0646\u0627\u0633\u0645 ${issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      case "invalid_union":
        return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
      case "invalid_element":
        return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      default:
        return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
    }
  };
};
function ps_default() {
  return {
    localeError: error32()
  };
}

// node_modules/zod/v4/locales/pl.js
var error33 = () => {
  const Sizable = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "wyra\u017Cenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
    base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
    json_string: "ci\u0105g znak\xF3w w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wej\u015Bcie"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
        }
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${expected}, otrzymano ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
        return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element\xF3w"}`;
        }
        return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "element\xF3w"}`;
        }
        return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_issue.pattern}`;
        return `Nieprawid\u0142ow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${issue2.origin}`;
      default:
        return `Nieprawid\u0142owe dane wej\u015Bciowe`;
    }
  };
};
function pl_default() {
  return {
    localeError: error33()
  };
}

// node_modules/zod/v4/locales/pt.js
var error34 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "padr\xE3o",
    email: "endere\xE7o de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "dura\xE7\xE3o ISO",
    ipv4: "endere\xE7o IPv4",
    ipv6: "endere\xE7o IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmero",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipo inv\xE1lido: esperado instanceof ${issue2.expected}, recebido ${received}`;
        }
        return `Tipo inv\xE1lido: esperado ${expected}, recebido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inv\xE1lida: esperado ${stringifyPrimitive(issue2.values[0])}`;
        return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Texto inv\xE1lido: deve come\xE7ar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Texto inv\xE1lido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Texto inv\xE1lido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${issue2.origin}`;
      default:
        return `Campo inv\xE1lido`;
    }
  };
};
function pt_default() {
  return {
    localeError: error34()
  };
}

// node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error35 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u044F",
    duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
    base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
    json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0432\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
        }
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0438" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435`;
    }
  };
};
function ru_default() {
  return {
    localeError: error35()
  };
}

// node_modules/zod/v4/locales/sl.js
var error36 = () => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "vnos",
    email: "e-po\u0161tni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in \u010Das",
    date: "ISO datum",
    time: "ISO \u010Das",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 \u0161tevilka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0161tevilo",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neveljaven vnos: pri\u010Dakovano instanceof ${issue2.expected}, prejeto ${received}`;
        }
        return `Neveljaven vnos: pri\u010Dakovano ${expected}, prejeto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neveljaven vnos: pri\u010Dakovano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
        return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Neveljaven niz: mora se za\u010Deti z "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Neveljaven niz: mora se kon\u010Dati z "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
        return `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error36()
  };
}

// node_modules/zod/v4/locales/sv.js
var error37 = () => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regulj\xE4rt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad str\xE4ng",
    base64url: "base64url-kodad str\xE4ng",
    json_string: "JSON-str\xE4ng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${issue2.expected}, fick ${received}`;
        }
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${expected}, fick ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ogiltig inmatning: f\xF6rv\xE4ntat ${stringifyPrimitive(issue2.values[0])}`;
        return `Ogiltigt val: f\xF6rv\xE4ntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `F\xF6r stor(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        }
        return `F\xF6r stor(t): f\xF6rv\xE4ntat ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ogiltig str\xE4ng: m\xE5ste sluta med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${_issue.pattern}"`;
        return `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${issue2.origin ?? "v\xE4rdet"}`;
      default:
        return `Ogiltig input`;
    }
  };
};
function sv_default() {
  return {
    localeError: error37()
  };
}

// node_modules/zod/v4/locales/ta.js
var error38 = () => {
  const Sizable = {
    string: { unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    file: { unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    array: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    set: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
    email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
    time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
    ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
    e164: "E.164 \u0B8E\u0BA3\u0BCD",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0B8E\u0BA3\u0BCD",
    array: "\u0B85\u0BA3\u0BBF",
    null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${issue2.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
        }
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${joinValues(issue2.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "ends_with")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "includes")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "regex")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${_issue.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${issue2.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${issue2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1`;
    }
  };
};
function ta_default() {
  return {
    localeError: error38()
  };
}

// node_modules/zod/v4/locales/th.js
var error39 = () => {
  const Sizable = {
    string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
    url: "URL",
    emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
    time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
    ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
    cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
    cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
    base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
    base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
    json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
    e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
    jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
    template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
    array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
    null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${issue2.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
        }
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`;
        return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${_issue.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`;
        if (_issue.format === "regex")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${_issue.pattern}`;
        return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${issue2.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      default:
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07`;
    }
  };
};
function th_default() {
  return {
    localeError: error39()
  };
}

// node_modules/zod/v4/locales/tr.js
var error40 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmal\u0131" },
    file: { unit: "bayt", verb: "olmal\u0131" },
    array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO s\xFCre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aral\u0131\u011F\u0131",
    cidrv6: "IPv6 aral\u0131\u011F\u0131",
    base64: "base64 ile \u015Fifrelenmi\u015F metin",
    base64url: "base64url ile \u015Fifrelenmi\u015F metin",
    json_string: "JSON dizesi",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "\u015Eablon dizesi"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${issue2.expected}, al\u0131nan ${received}`;
        }
        return `Ge\xE7ersiz de\u011Fer: beklenen ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ge\xE7ersiz de\u011Fer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
        return `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xF6\u011Fe"}`;
        return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ge\xE7ersiz metin: "${_issue.prefix}" ile ba\u015Flamal\u0131`;
        if (_issue.format === "ends_with")
          return `Ge\xE7ersiz metin: "${_issue.suffix}" ile bitmeli`;
        if (_issue.format === "includes")
          return `Ge\xE7ersiz metin: "${_issue.includes}" i\xE7ermeli`;
        if (_issue.format === "regex")
          return `Ge\xE7ersiz metin: ${_issue.pattern} desenine uymal\u0131`;
        return `Ge\xE7ersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ge\xE7ersiz say\u0131: ${issue2.divisor} ile tam b\xF6l\xFCnebilmeli`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz anahtar`;
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      default:
        return `Ge\xE7ersiz de\u011Fer`;
    }
  };
};
function tr_default() {
  return {
    localeError: error40()
  };
}

// node_modules/zod/v4/locales/uk.js
var error41 = () => {
  const Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
    date: "\u0434\u0430\u0442\u0430 ISO",
    time: "\u0447\u0430\u0441 ISO",
    duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
    ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
    ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
    cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
    cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
    base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
    base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
    json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${issue2.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
        }
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`;
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} \u0431\u0443\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0456" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456`;
    }
  };
};
function uk_default() {
  return {
    localeError: error41()
  };
}

// node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}

// node_modules/zod/v4/locales/ur.js
var error42 = () => {
  const Sizable = {
    string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
    file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
    array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
    set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0627\u0646 \u067E\u0679",
    email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
    uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
    nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
    ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
    xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
    ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
    date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
    time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
    duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
    ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
    cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
    base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
    e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
    jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
    template_literal: "\u0627\u0646 \u067E\u0679"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0646\u0645\u0628\u0631",
    array: "\u0622\u0631\u06D2",
    null: "\u0646\u0644"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${issue2.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
        }
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${stringifyPrimitive(issue2.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        return `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${joinValues(issue2.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
        return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${adj}${issue2.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u06D2 ${adj}${issue2.minimum.toString()} ${sizing.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
        }
        return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u0627 ${adj}${issue2.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        }
        if (_issue.format === "ends_with")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        if (_issue.format === "includes")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        if (_issue.format === "regex")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${_issue.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        return `\u063A\u0644\u0637 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${issue2.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${issue2.keys.length > 1 ? "\u0632" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679`;
    }
  };
};
function ur_default() {
  return {
    localeError: error42()
  };
}

// node_modules/zod/v4/locales/uz.js
var error43 = () => {
  const Sizable = {
    string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
    file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
    array: { unit: "element", verb: "bo\u2018lishi kerak" },
    set: { unit: "element", verb: "bo\u2018lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}`;
        }
        return `Noto\u2018g\u2018ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Noto\u2018g\u2018ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}`;
        return `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}`;
        return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Noto\u2018g\u2018ri satr: "${_issue.prefix}" bilan boshlanishi kerak`;
        if (_issue.format === "ends_with")
          return `Noto\u2018g\u2018ri satr: "${_issue.suffix}" bilan tugashi kerak`;
        if (_issue.format === "includes")
          return `Noto\u2018g\u2018ri satr: "${_issue.includes}" ni o\u2018z ichiga olishi kerak`;
        if (_issue.format === "regex")
          return `Noto\u2018g\u2018ri satr: ${_issue.pattern} shabloniga mos kelishi kerak`;
        return `Noto\u2018g\u2018ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Noto\u2018g\u2018ri raqam: ${issue2.divisor} ning karralisi bo\u2018lishi kerak`;
      case "unrecognized_keys":
        return `Noma\u2019lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} dagi kalit noto\u2018g\u2018ri`;
      case "invalid_union":
        return "Noto\u2018g\u2018ri kirish";
      case "invalid_element":
        return `${issue2.origin} da noto\u2018g\u2018ri qiymat`;
      default:
        return `Noto\u2018g\u2018ri kirish`;
    }
  };
};
function uz_default() {
  return {
    localeError: error43()
  };
}

// node_modules/zod/v4/locales/vi.js
var error44 = () => {
  const Sizable = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0111\u1EA7u v\xE0o",
    email: "\u0111\u1ECBa ch\u1EC9 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ng\xE0y gi\u1EDD ISO",
    date: "ng\xE0y ISO",
    time: "gi\u1EDD ISO",
    duration: "kho\u1EA3ng th\u1EDDi gian ISO",
    ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
    ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
    cidrv4: "d\u1EA3i IPv4",
    cidrv6: "d\u1EA3i IPv6",
    base64: "chu\u1ED7i m\xE3 h\xF3a base64",
    base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
    json_string: "chu\u1ED7i JSON",
    e164: "s\u1ED1 E.164",
    jwt: "JWT",
    template_literal: "\u0111\u1EA7u v\xE0o"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "s\u1ED1",
    array: "m\u1EA3ng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${issue2.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
        }
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${stringifyPrimitive(issue2.values[0])}`;
        return `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "ph\u1EA7n t\u1EED"}`;
        return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      default:
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7`;
    }
  };
};
function vi_default() {
  return {
    localeError: error44()
  };
}

// node_modules/zod/v4/locales/zh-CN.js
var error45 = () => {
  const Sizable = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u8F93\u5165",
    email: "\u7535\u5B50\u90AE\u4EF6",
    url: "URL",
    emoji: "\u8868\u60C5\u7B26\u53F7",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u671F\u65F6\u95F4",
    date: "ISO\u65E5\u671F",
    time: "ISO\u65F6\u95F4",
    duration: "ISO\u65F6\u957F",
    ipv4: "IPv4\u5730\u5740",
    ipv6: "IPv6\u5730\u5740",
    cidrv4: "IPv4\u7F51\u6BB5",
    cidrv6: "IPv6\u7F51\u6BB5",
    base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
    base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
    json_string: "JSON\u5B57\u7B26\u4E32",
    e164: "E.164\u53F7\u7801",
    jwt: "JWT",
    template_literal: "\u8F93\u5165"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5B57",
    array: "\u6570\u7EC4",
    null: "\u7A7A\u503C(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${issue2.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
        }
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${stringifyPrimitive(issue2.values[0])}`;
        return `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u4E2A\u5143\u7D20"}`;
        return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.prefix}" \u5F00\u5934`;
        if (_issue.format === "ends_with")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.suffix}" \u7ED3\u5C3E`;
        if (_issue.format === "includes")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${_issue.pattern}`;
        return `\u65E0\u6548${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${issue2.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return `\u65E0\u6548\u8F93\u5165`;
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error45()
  };
}

// node_modules/zod/v4/locales/zh-TW.js
var error46 = () => {
  const Sizable = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u8F38\u5165",
    email: "\u90F5\u4EF6\u5730\u5740",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u65E5\u671F\u6642\u9593",
    date: "ISO \u65E5\u671F",
    time: "ISO \u6642\u9593",
    duration: "ISO \u671F\u9593",
    ipv4: "IPv4 \u4F4D\u5740",
    ipv6: "IPv6 \u4F4D\u5740",
    cidrv4: "IPv4 \u7BC4\u570D",
    cidrv6: "IPv6 \u7BC4\u570D",
    base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
    base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
    json_string: "JSON \u5B57\u4E32",
    e164: "E.164 \u6578\u503C",
    jwt: "JWT",
    template_literal: "\u8F38\u5165"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${issue2.expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
        }
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${stringifyPrimitive(issue2.values[0])}`;
        return `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u500B\u5143\u7D20"}`;
        return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.prefix}" \u958B\u982D`;
        }
        if (_issue.format === "ends_with")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.suffix}" \u7D50\u5C3E`;
        if (_issue.format === "includes")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${_issue.pattern}`;
        return `\u7121\u6548\u7684 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${issue2.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${issue2.keys.length > 1 ? "\u5011" : ""}\uFF1A${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return `\u7121\u6548\u7684\u8F38\u5165\u503C`;
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error46()
  };
}

// node_modules/zod/v4/locales/yo.js
var error47 = () => {
  const Sizable = {
    string: { unit: "\xE0mi", verb: "n\xED" },
    file: { unit: "bytes", verb: "n\xED" },
    array: { unit: "nkan", verb: "n\xED" },
    set: { unit: "nkan", verb: "n\xED" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
    email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\xE0k\xF3k\xF2 ISO",
    date: "\u1ECDj\u1ECD\u0301 ISO",
    time: "\xE0k\xF3k\xF2 ISO",
    duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
    ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
    ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
    cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
    cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
    base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
    base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
    json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
    e164: "n\u1ECD\u0301mb\xE0 E.164",
    jwt: "JWT",
    template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\u1ECD\u0301mb\xE0",
    array: "akop\u1ECD"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${issue2.expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
        }
        return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${stringifyPrimitive(issue2.values[0])}`;
        return `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}`;
        return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.maximum}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}`;
        return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.minimum}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${_issue.pattern}`;
        return `A\u1E63\xEC\u1E63e: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${issue2.divisor}`;
      case "unrecognized_keys":
        return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      case "invalid_union":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      case "invalid_element":
        return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      default:
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
    }
  };
};
function yo_default() {
  return {
    localeError: error47()
  };
}

// node_modules/zod/v4/core/registries.js
var _a;
var $output = /* @__PURE__ */ Symbol("ZodOutput");
var $input = /* @__PURE__ */ Symbol("ZodInput");
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta3 = _meta[0];
    this._map.set(schema, meta3);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.set(meta3.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta3 = this._map.get(schema);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.delete(meta3.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p2 = schema._zod.parent;
    if (p2) {
      const pm = { ...this.get(p2) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _positive(params) {
  return /* @__PURE__ */ _gt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _negative(params) {
  return /* @__PURE__ */ _lt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonpositive(params) {
  return /* @__PURE__ */ _lte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonnegative(params) {
  return /* @__PURE__ */ _gte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
// @__NO_SIDE_EFFECTS__
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
// @__NO_SIDE_EFFECTS__
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
// @__NO_SIDE_EFFECTS__
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
// @__NO_SIDE_EFFECTS__
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
// @__NO_SIDE_EFFECTS__
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
// @__NO_SIDE_EFFECTS__
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// @__NO_SIDE_EFFECTS__
function describe(description) {
  const ch = new $ZodCheck({ check: "describe" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ];
  ch._zod.check = () => {
  };
  return ch;
}
// @__NO_SIDE_EFFECTS__
function meta(metadata) {
  const ch = new $ZodCheck({ check: "meta" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ];
  ch._zod.check = () => {
  };
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Codec = Classes.Codec ?? $ZodCodec;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const stringSchema = new _String({ type: "string", error: params.error });
  const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
  const codec2 = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: ((input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: codec2,
          continue: false
        });
        return {};
      }
    }),
    reverseTransform: ((input, _payload) => {
      if (input === true) {
        return truthyArray[0] || "true";
      } else {
        return falsyArray[0] || "false";
      }
    }),
    error: params.error
  });
  return codec2;
}
// @__NO_SIDE_EFFECTS__
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}

// node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
function process2(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a2;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process2(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta3 = ctx.metadataRegistry.get(schema);
  if (meta3)
    Object.assign(result.schema, meta3);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        Object.assign(schema2, refSchema);
      }
      Object.assign(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process2(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process2(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};

// node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  json2.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minLength = minimum;
  if (typeof maximum === "number")
    json2.maxLength = maximum;
  if (format) {
    json2.format = formatMap[format] ?? format;
    if (json2.format === "")
      delete json2.format;
    if (format === "time") {
      delete json2.format;
    }
  }
  if (contentEncoding)
    json2.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1)
      json2.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json2.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json2.type = "integer";
  else
    json2.type = "number";
  if (typeof exclusiveMinimum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.minimum = exclusiveMinimum;
      json2.exclusiveMinimum = true;
    } else {
      json2.exclusiveMinimum = exclusiveMinimum;
    }
  }
  if (typeof minimum === "number") {
    json2.minimum = minimum;
    if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMinimum >= minimum)
        delete json2.minimum;
      else
        delete json2.exclusiveMinimum;
    }
  }
  if (typeof exclusiveMaximum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.maximum = exclusiveMaximum;
      json2.exclusiveMaximum = true;
    } else {
      json2.exclusiveMaximum = exclusiveMaximum;
    }
  }
  if (typeof maximum === "number") {
    json2.maximum = maximum;
    if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMaximum <= maximum)
        delete json2.maximum;
      else
        delete json2.exclusiveMaximum;
    }
  }
  if (typeof multipleOf === "number")
    json2.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("BigInt cannot be represented in JSON Schema");
  }
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Symbols cannot be represented in JSON Schema");
  }
};
var nullProcessor = (_schema, ctx, json2, _params) => {
  if (ctx.target === "openapi-3.0") {
    json2.type = "string";
    json2.nullable = true;
    json2.enum = [null];
  } else {
    json2.type = "null";
  }
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Undefined cannot be represented in JSON Schema");
  }
};
var voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Void cannot be represented in JSON Schema");
  }
};
var neverProcessor = (_schema, _ctx, json2, _params) => {
  json2.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {
};
var dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Date cannot be represented in JSON Schema");
  }
};
var enumProcessor = (schema, _ctx, json2, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json2.type = "number";
  if (values.every((v) => typeof v === "string"))
    json2.type = "string";
  json2.enum = values;
};
var literalProcessor = (schema, ctx, json2, _params) => {
  const def = schema._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (ctx.unrepresentable === "throw") {
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else {
      }
    } else if (typeof val === "bigint") {
      if (ctx.unrepresentable === "throw") {
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      } else {
        vals.push(Number(val));
      }
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json2.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.enum = [val];
    } else {
      json2.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json2.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json2.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json2.type = "boolean";
    if (vals.every((v) => v === null))
      json2.type = "null";
    json2.enum = vals;
  }
};
var nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("NaN cannot be represented in JSON Schema");
  }
};
var templateLiteralProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const file2 = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== void 0)
    file2.minLength = minimum;
  if (maximum !== void 0)
    file2.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file2.contentMediaType = mime[0];
      Object.assign(_json, file2);
    } else {
      Object.assign(_json, file2);
      _json.anyOf = mime.map((m2) => ({ contentMediaType: m2 }));
    }
  } else {
    Object.assign(_json, file2);
  }
};
var successProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
var functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Function types cannot be represented in JSON Schema");
  }
};
var transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
var mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Map cannot be represented in JSON Schema");
  }
};
var setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Set cannot be represented in JSON Schema");
  }
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minItems = minimum;
  if (typeof maximum === "number")
    json2.maxItems = maximum;
  json2.type = "array";
  json2.items = process2(def.element, ctx, { ...params, path: [...params.path, "items"] });
};
var objectProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  json2.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json2.properties[key] = process2(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v.optin === void 0;
    } else {
      return v.optout === void 0;
    }
  }));
  if (requiredKeys.size > 0) {
    json2.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json2.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json2.additionalProperties = false;
  } else if (def.catchall) {
    json2.additionalProperties = process2(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x2, i2) => process2(x2, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i2]
  }));
  if (isExclusive) {
    json2.oneOf = options;
  } else {
    json2.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const a2 = process2(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b2 = process2(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a2) ? a2.allOf : [a2],
    ...isSimpleIntersection(b2) ? b2.allOf : [b2]
  ];
  json2.allOf = allOf;
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x2, i2) => process2(x2, ctx, {
    ...params,
    path: [...params.path, prefixPath, i2]
  }));
  const rest = def.rest ? process2(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  if (ctx.target === "draft-2020-12") {
    json2.prefixItems = prefixItems;
    if (rest) {
      json2.items = rest;
    }
  } else if (ctx.target === "openapi-3.0") {
    json2.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json2.items.anyOf.push(rest);
    }
    json2.minItems = prefixItems.length;
    if (!rest) {
      json2.maxItems = prefixItems.length;
    }
  } else {
    json2.items = prefixItems;
    if (rest) {
      json2.additionalItems = rest;
    }
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minItems = minimum;
  if (typeof maximum === "number")
    json2.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json2.patternProperties = {};
    for (const pattern of patterns) {
      json2.patternProperties[pattern.source] = valueSchema;
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json2.propertyNames = process2(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json2.additionalProperties = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json2.required = validKeyValues;
    }
  }
};
var nullableProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const inner = process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json2.nullable = true;
  } else {
    json2.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json2.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema] = entry;
      process2(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      schemas[key] = finalize(ctx2, schema);
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process2(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}

// node_modules/zod/v4/core/json-schema-generator.js
var JSONSchemaGenerator = class {
  /** @deprecated Access via ctx instead */
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  /** @deprecated Access via ctx instead */
  get target() {
    return this.ctx.target;
  }
  /** @deprecated Access via ctx instead */
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  /** @deprecated Access via ctx instead */
  get override() {
    return this.ctx.override;
  }
  /** @deprecated Access via ctx instead */
  get io() {
    return this.ctx.io;
  }
  /** @deprecated Access via ctx instead */
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  /** @deprecated Access via ctx instead */
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4")
      normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7")
      normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  /**
   * Process a schema to prepare it for JSON Schema generation.
   * This must be called before emit().
   */
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process2(schema, this.ctx, _params);
  }
  /**
   * Emit the final JSON Schema after processing.
   * Must call process() first.
   */
  emit(schema, _params) {
    if (_params) {
      if (_params.cycles)
        this.ctx.cycles = _params.cycles;
      if (_params.reused)
        this.ctx.reused = _params.reused;
      if (_params.external)
        this.ctx.external = _params.external;
    }
    extractDefs(this.ctx, schema);
    const result = finalize(this.ctx, schema);
    const { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
};

// node_modules/zod/v4/core/json-schema.js
var json_schema_exports = {};

// node_modules/zod/v4/classic/schemas.js
var schemas_exports2 = {};
__export(schemas_exports2, {
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFunction: () => ZodFunction,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodIntersection: () => ZodIntersection,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMAC: () => ZodMAC,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  ZodXor: () => ZodXor,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  codec: () => codec,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  file: () => file,
  float32: () => float32,
  float64: () => float64,
  function: () => _function,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  literal: () => literal,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  mac: () => mac2,
  map: () => map,
  meta: () => meta2,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  never: () => never,
  nonoptional: () => nonoptional,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  prefault: () => prefault,
  preprocess: () => preprocess,
  promise: () => promise,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  set: () => set,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  transform: () => transform,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  url: () => url,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// node_modules/zod/v4/classic/checks.js
var checks_exports2 = {};
__export(checks_exports2, {
  endsWith: () => _endsWith,
  gt: () => _gt,
  gte: () => _gte,
  includes: () => _includes,
  length: () => _length,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  negative: () => _negative,
  nonnegative: () => _nonnegative,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  overwrite: () => _overwrite,
  positive: () => _positive,
  property: () => _property,
  regex: () => _regex,
  size: () => _size,
  slugify: () => _slugify,
  startsWith: () => _startsWith,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  trim: () => _trim,
  uppercase: () => _uppercase
});

// node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
};
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode2 = /* @__PURE__ */ _encode(ZodRealError);
var decode2 = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  Object.assign(inst["~standard"], {
    jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    }
  });
  inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
  inst.def = def;
  inst.type = def.type;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks) => {
    return inst.clone(util_exports.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), {
      parent: true
    });
  };
  inst.with = inst.check;
  inst.clone = (def2, params) => clone(inst, def2, params);
  inst.brand = () => inst;
  inst.register = ((reg, meta3) => {
    reg.add(inst, meta3);
    return inst;
  });
  inst.parse = (data, params) => parse2(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse2(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.encode = (data, params) => encode2(inst, data, params);
  inst.decode = (data, params) => decode2(inst, data, params);
  inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params);
  inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params);
  inst.safeEncode = (data, params) => safeEncode2(inst, data, params);
  inst.safeDecode = (data, params) => safeDecode2(inst, data, params);
  inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params);
  inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params);
  inst.refine = (check2, params) => inst.check(refine(check2, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(_overwrite(fn));
  inst.optional = () => optional(inst);
  inst.exactOptional = () => exactOptional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx));
  inst.default = (def2) => _default2(inst, def2);
  inst.prefault = (def2) => prefault(inst, def2);
  inst.catch = (params) => _catch2(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry.get(inst);
    }
    const cl = inst.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(void 0).success;
  inst.isNullable = () => inst.safeParse(null).success;
  inst.apply = (fn) => fn(inst);
  return inst;
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => stringProcessor(inst, ctx, json2, params);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
  inst.regex = (...args) => inst.check(_regex(...args));
  inst.includes = (...args) => inst.check(_includes(...args));
  inst.startsWith = (...args) => inst.check(_startsWith(...args));
  inst.endsWith = (...args) => inst.check(_endsWith(...args));
  inst.min = (...args) => inst.check(_minLength(...args));
  inst.max = (...args) => inst.check(_maxLength(...args));
  inst.length = (...args) => inst.check(_length(...args));
  inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
  inst.lowercase = (params) => inst.check(_lowercase(params));
  inst.uppercase = (params) => inst.check(_uppercase(params));
  inst.trim = () => inst.check(_trim());
  inst.normalize = (...args) => inst.check(_normalize(...args));
  inst.toLowerCase = () => inst.check(_toLowerCase());
  inst.toUpperCase = () => inst.check(_toUpperCase());
  inst.slugify = () => inst.check(_slugify());
});
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
  inst.email = (params) => inst.check(_email(ZodEmail, params));
  inst.url = (params) => inst.check(_url(ZodURL, params));
  inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
  inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
  inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
  inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
  inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
  inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
  inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
  inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
  inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
  inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
  inst.xid = (params) => inst.check(_xid(ZodXID, params));
  inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
  inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
  inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
  inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
  inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
  inst.e164 = (params) => inst.check(_e164(ZodE164, params));
  inst.datetime = (params) => inst.check(datetime2(params));
  inst.date = (params) => inst.check(date2(params));
  inst.time = (params) => inst.check(time2(params));
  inst.duration = (params) => inst.check(duration2(params));
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, {
    protocol: /^https?$/,
    hostname: regexes_exports.domain,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
  $ZodMAC.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function mac2(params) {
  return _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", regexes_exports.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", regexes_exports.hex, _params);
}
function hash(alg, params) {
  const enc = params?.enc ?? "hex";
  const format = `${alg}_${enc}`;
  const regex = regexes_exports[format];
  if (!regex)
    throw new Error(`Unrecognized hash format: ${format}`);
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => numberProcessor(inst, ctx, json2, params);
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.int = (params) => inst.check(int(params));
  inst.safe = (params) => inst.check(int(params));
  inst.positive = (params) => inst.check(_gt(0, params));
  inst.nonnegative = (params) => inst.check(_gte(0, params));
  inst.negative = (params) => inst.check(_lt(0, params));
  inst.nonpositive = (params) => inst.check(_lte(0, params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  inst.step = (value, params) => inst.check(_multipleOf(value, params));
  inst.finite = () => inst;
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => booleanProcessor(inst, ctx, json2, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => bigintProcessor(inst, ctx, json2, params);
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.positive = (params) => inst.check(_gt(BigInt(0), params));
  inst.negative = (params) => inst.check(_lt(BigInt(0), params));
  inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
  inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def);
  ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => symbolProcessor(inst, ctx, json2, params);
});
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => undefinedProcessor(inst, ctx, json2, params);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nullProcessor(inst, ctx, json2, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => anyProcessor(inst, ctx, json2, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => unknownProcessor(inst, ctx, json2, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => neverProcessor(inst, ctx, json2, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
  $ZodVoid.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => voidProcessor(inst, ctx, json2, params);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => dateProcessor(inst, ctx, json2, params);
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  const c2 = inst._zod.bag;
  inst.minDate = c2.minimum ? new Date(c2.minimum) : null;
  inst.maxDate = c2.maximum ? new Date(c2.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => arrayProcessor(inst, ctx, json2, params);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
  inst.nonempty = (params) => inst.check(_minLength(1, params));
  inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(_length(len, params));
  inst.unwrap = () => inst.element;
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema) {
  const shape = schema._zod.def.shape;
  return _enum2(Object.keys(shape));
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => objectProcessor(inst, ctx, json2, params);
  util_exports.defineLazy(inst, "shape", () => {
    return def.shape;
  });
  inst.keyof = () => _enum2(Object.keys(inst._zod.def.shape));
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: void 0 });
  inst.extend = (incoming) => {
    return util_exports.extend(inst, incoming);
  };
  inst.safeExtend = (incoming) => {
    return util_exports.safeExtend(inst, incoming);
  };
  inst.merge = (other) => util_exports.merge(inst, other);
  inst.pick = (mask) => util_exports.pick(inst, mask);
  inst.omit = (mask) => util_exports.omit(inst, mask);
  inst.partial = (...args) => util_exports.partial(ZodOptional, inst, args[0]);
  inst.required = (...args) => util_exports.required(ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...util_exports.normalizeParams(params)
  });
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...util_exports.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodXor.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params);
  inst.options = def.options;
});
function xor(options, params) {
  return new ZodXor({
    type: "union",
    options,
    inclusive: false,
    ...util_exports.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util_exports.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => intersectionProcessor(inst, ctx, json2, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
  $ZodTuple.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => tupleProcessor(inst, ctx, json2, params);
  inst.rest = (rest) => inst.clone({
    ...inst._zod.def,
    rest
  });
});
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...util_exports.normalizeParams(params)
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => recordProcessor(inst, ctx, json2, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
function partialRecord(keyType, valueType, params) {
  const k2 = clone(keyType);
  k2._zod.values = void 0;
  return new ZodRecord({
    type: "record",
    keyType: k2,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...util_exports.normalizeParams(params)
  });
}
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
  $ZodMap.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => mapProcessor(inst, ctx, json2, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
  $ZodSet.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => setProcessor(inst, ctx, json2, params);
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => enumProcessor(inst, ctx, json2, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => literalProcessor(inst, ctx, json2, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
  $ZodFile.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => fileProcessor(inst, ctx, json2, params);
  inst.min = (size, params) => inst.check(_minSize(size, params));
  inst.max = (size, params) => inst.check(_maxSize(size, params));
  inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
  return _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => transformProcessor(inst, ctx, json2, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(util_exports.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nullableProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => defaultProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => prefaultProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nonoptionalProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => successProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => catchProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
  $ZodNaN.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nanProcessor(inst, ctx, json2, params);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => pipeProcessor(inst, ctx, json2, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
  ZodPipe.init(inst, def);
  $ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => readonlyProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => templateLiteralProcessor(inst, ctx, json2, params);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => lazyProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
  $ZodPromise.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => promiseProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
  $ZodFunction.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => functionProcessor(inst, ctx, json2, params);
});
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
    output: params?.output ?? unknown()
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => customProcessor(inst, ctx, json2, params);
});
function check(fn) {
  const ch = new $ZodCheck({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  ch._zod.check = fn;
  return ch;
}
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return _superRefine(fn);
}
var describe2 = describe;
var meta2 = meta;
function _instanceof(cls, params = {}) {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...util_exports.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}
var stringbool = (...args) => _stringbool({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...args);
function json(params) {
  const jsonSchema = lazy(() => {
    return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]);
  });
  return jsonSchema;
}
function preprocess(fn, schema) {
  return pipe(transform(fn), schema);
}

// node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodFirstPartyTypeKind;
/* @__PURE__ */ (function(ZodFirstPartyTypeKind2) {
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));

// node_modules/zod/v4/classic/from-json-schema.js
var z = {
  ...schemas_exports2,
  ...checks_exports2,
  iso: iso_exports
};
var RECOGNIZED_KEYS = /* @__PURE__ */ new Set([
  // Schema identification
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  // Core schema keywords
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  // Type
  "type",
  "enum",
  "const",
  // Composition
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  // Object
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  // Array
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  // String
  "minLength",
  "maxLength",
  "pattern",
  "format",
  // Number
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  // Already handled metadata
  "description",
  "default",
  // Content
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  // Unsupported (error-throwing)
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  // OpenAPI
  "nullable",
  "readOnly"
]);
function detectVersion(schema, defaultTarget) {
  const $schema = schema.$schema;
  if ($schema === "https://json-schema.org/draft/2020-12/schema") {
    return "draft-2020-12";
  }
  if ($schema === "http://json-schema.org/draft-07/schema#") {
    return "draft-7";
  }
  if ($schema === "http://json-schema.org/draft-04/schema#") {
    return "draft-4";
  }
  return defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
  if (!ref.startsWith("#")) {
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  }
  const path5 = ref.slice(1).split("/").filter(Boolean);
  if (path5.length === 0) {
    return ctx.rootSchema;
  }
  const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
  if (path5[0] === defsKey) {
    const key = path5[1];
    if (!key || !ctx.defs[key]) {
      throw new Error(`Reference not found: ${ref}`);
    }
    return ctx.defs[key];
  }
  throw new Error(`Reference not found: ${ref}`);
}
function convertBaseSchema(schema, ctx) {
  if (schema.not !== void 0) {
    if (typeof schema.not === "object" && Object.keys(schema.not).length === 0) {
      return z.never();
    }
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (schema.unevaluatedItems !== void 0) {
    throw new Error("unevaluatedItems is not supported");
  }
  if (schema.unevaluatedProperties !== void 0) {
    throw new Error("unevaluatedProperties is not supported");
  }
  if (schema.if !== void 0 || schema.then !== void 0 || schema.else !== void 0) {
    throw new Error("Conditional schemas (if/then/else) are not supported");
  }
  if (schema.dependentSchemas !== void 0 || schema.dependentRequired !== void 0) {
    throw new Error("dependentSchemas and dependentRequired are not supported");
  }
  if (schema.$ref) {
    const refPath = schema.$ref;
    if (ctx.refs.has(refPath)) {
      return ctx.refs.get(refPath);
    }
    if (ctx.processing.has(refPath)) {
      return z.lazy(() => {
        if (!ctx.refs.has(refPath)) {
          throw new Error(`Circular reference not resolved: ${refPath}`);
        }
        return ctx.refs.get(refPath);
      });
    }
    ctx.processing.add(refPath);
    const resolved = resolveRef(refPath, ctx);
    const zodSchema2 = convertSchema(resolved, ctx);
    ctx.refs.set(refPath, zodSchema2);
    ctx.processing.delete(refPath);
    return zodSchema2;
  }
  if (schema.enum !== void 0) {
    const enumValues = schema.enum;
    if (ctx.version === "openapi-3.0" && schema.nullable === true && enumValues.length === 1 && enumValues[0] === null) {
      return z.null();
    }
    if (enumValues.length === 0) {
      return z.never();
    }
    if (enumValues.length === 1) {
      return z.literal(enumValues[0]);
    }
    if (enumValues.every((v) => typeof v === "string")) {
      return z.enum(enumValues);
    }
    const literalSchemas = enumValues.map((v) => z.literal(v));
    if (literalSchemas.length < 2) {
      return literalSchemas[0];
    }
    return z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
  }
  if (schema.const !== void 0) {
    return z.literal(schema.const);
  }
  const type = schema.type;
  if (Array.isArray(type)) {
    const typeSchemas = type.map((t) => {
      const typeSchema = { ...schema, type: t };
      return convertBaseSchema(typeSchema, ctx);
    });
    if (typeSchemas.length === 0) {
      return z.never();
    }
    if (typeSchemas.length === 1) {
      return typeSchemas[0];
    }
    return z.union(typeSchemas);
  }
  if (!type) {
    return z.any();
  }
  let zodSchema;
  switch (type) {
    case "string": {
      let stringSchema = z.string();
      if (schema.format) {
        const format = schema.format;
        if (format === "email") {
          stringSchema = stringSchema.check(z.email());
        } else if (format === "uri" || format === "uri-reference") {
          stringSchema = stringSchema.check(z.url());
        } else if (format === "uuid" || format === "guid") {
          stringSchema = stringSchema.check(z.uuid());
        } else if (format === "date-time") {
          stringSchema = stringSchema.check(z.iso.datetime());
        } else if (format === "date") {
          stringSchema = stringSchema.check(z.iso.date());
        } else if (format === "time") {
          stringSchema = stringSchema.check(z.iso.time());
        } else if (format === "duration") {
          stringSchema = stringSchema.check(z.iso.duration());
        } else if (format === "ipv4") {
          stringSchema = stringSchema.check(z.ipv4());
        } else if (format === "ipv6") {
          stringSchema = stringSchema.check(z.ipv6());
        } else if (format === "mac") {
          stringSchema = stringSchema.check(z.mac());
        } else if (format === "cidr") {
          stringSchema = stringSchema.check(z.cidrv4());
        } else if (format === "cidr-v6") {
          stringSchema = stringSchema.check(z.cidrv6());
        } else if (format === "base64") {
          stringSchema = stringSchema.check(z.base64());
        } else if (format === "base64url") {
          stringSchema = stringSchema.check(z.base64url());
        } else if (format === "e164") {
          stringSchema = stringSchema.check(z.e164());
        } else if (format === "jwt") {
          stringSchema = stringSchema.check(z.jwt());
        } else if (format === "emoji") {
          stringSchema = stringSchema.check(z.emoji());
        } else if (format === "nanoid") {
          stringSchema = stringSchema.check(z.nanoid());
        } else if (format === "cuid") {
          stringSchema = stringSchema.check(z.cuid());
        } else if (format === "cuid2") {
          stringSchema = stringSchema.check(z.cuid2());
        } else if (format === "ulid") {
          stringSchema = stringSchema.check(z.ulid());
        } else if (format === "xid") {
          stringSchema = stringSchema.check(z.xid());
        } else if (format === "ksuid") {
          stringSchema = stringSchema.check(z.ksuid());
        }
      }
      if (typeof schema.minLength === "number") {
        stringSchema = stringSchema.min(schema.minLength);
      }
      if (typeof schema.maxLength === "number") {
        stringSchema = stringSchema.max(schema.maxLength);
      }
      if (schema.pattern) {
        stringSchema = stringSchema.regex(new RegExp(schema.pattern));
      }
      zodSchema = stringSchema;
      break;
    }
    case "number":
    case "integer": {
      let numberSchema = type === "integer" ? z.number().int() : z.number();
      if (typeof schema.minimum === "number") {
        numberSchema = numberSchema.min(schema.minimum);
      }
      if (typeof schema.maximum === "number") {
        numberSchema = numberSchema.max(schema.maximum);
      }
      if (typeof schema.exclusiveMinimum === "number") {
        numberSchema = numberSchema.gt(schema.exclusiveMinimum);
      } else if (schema.exclusiveMinimum === true && typeof schema.minimum === "number") {
        numberSchema = numberSchema.gt(schema.minimum);
      }
      if (typeof schema.exclusiveMaximum === "number") {
        numberSchema = numberSchema.lt(schema.exclusiveMaximum);
      } else if (schema.exclusiveMaximum === true && typeof schema.maximum === "number") {
        numberSchema = numberSchema.lt(schema.maximum);
      }
      if (typeof schema.multipleOf === "number") {
        numberSchema = numberSchema.multipleOf(schema.multipleOf);
      }
      zodSchema = numberSchema;
      break;
    }
    case "boolean": {
      zodSchema = z.boolean();
      break;
    }
    case "null": {
      zodSchema = z.null();
      break;
    }
    case "object": {
      const shape = {};
      const properties = schema.properties || {};
      const requiredSet = new Set(schema.required || []);
      for (const [key, propSchema] of Object.entries(properties)) {
        const propZodSchema = convertSchema(propSchema, ctx);
        shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
      }
      if (schema.propertyNames) {
        const keySchema = convertSchema(schema.propertyNames, ctx);
        const valueSchema = schema.additionalProperties && typeof schema.additionalProperties === "object" ? convertSchema(schema.additionalProperties, ctx) : z.any();
        if (Object.keys(shape).length === 0) {
          zodSchema = z.record(keySchema, valueSchema);
          break;
        }
        const objectSchema2 = z.object(shape).passthrough();
        const recordSchema = z.looseRecord(keySchema, valueSchema);
        zodSchema = z.intersection(objectSchema2, recordSchema);
        break;
      }
      if (schema.patternProperties) {
        const patternProps = schema.patternProperties;
        const patternKeys = Object.keys(patternProps);
        const looseRecords = [];
        for (const pattern of patternKeys) {
          const patternValue = convertSchema(patternProps[pattern], ctx);
          const keySchema = z.string().regex(new RegExp(pattern));
          looseRecords.push(z.looseRecord(keySchema, patternValue));
        }
        const schemasToIntersect = [];
        if (Object.keys(shape).length > 0) {
          schemasToIntersect.push(z.object(shape).passthrough());
        }
        schemasToIntersect.push(...looseRecords);
        if (schemasToIntersect.length === 0) {
          zodSchema = z.object({}).passthrough();
        } else if (schemasToIntersect.length === 1) {
          zodSchema = schemasToIntersect[0];
        } else {
          let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
          for (let i2 = 2; i2 < schemasToIntersect.length; i2++) {
            result = z.intersection(result, schemasToIntersect[i2]);
          }
          zodSchema = result;
        }
        break;
      }
      const objectSchema = z.object(shape);
      if (schema.additionalProperties === false) {
        zodSchema = objectSchema.strict();
      } else if (typeof schema.additionalProperties === "object") {
        zodSchema = objectSchema.catchall(convertSchema(schema.additionalProperties, ctx));
      } else {
        zodSchema = objectSchema.passthrough();
      }
      break;
    }
    case "array": {
      const prefixItems = schema.prefixItems;
      const items = schema.items;
      if (prefixItems && Array.isArray(prefixItems)) {
        const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
        const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : void 0;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (Array.isArray(items)) {
        const tupleItems = items.map((item) => convertSchema(item, ctx));
        const rest = schema.additionalItems && typeof schema.additionalItems === "object" ? convertSchema(schema.additionalItems, ctx) : void 0;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (items !== void 0) {
        const element = convertSchema(items, ctx);
        let arraySchema = z.array(element);
        if (typeof schema.minItems === "number") {
          arraySchema = arraySchema.min(schema.minItems);
        }
        if (typeof schema.maxItems === "number") {
          arraySchema = arraySchema.max(schema.maxItems);
        }
        zodSchema = arraySchema;
      } else {
        zodSchema = z.array(z.any());
      }
      break;
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
  if (schema.description) {
    zodSchema = zodSchema.describe(schema.description);
  }
  if (schema.default !== void 0) {
    zodSchema = zodSchema.default(schema.default);
  }
  return zodSchema;
}
function convertSchema(schema, ctx) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  let baseSchema = convertBaseSchema(schema, ctx);
  const hasExplicitType = schema.type || schema.enum !== void 0 || schema.const !== void 0;
  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    const options = schema.anyOf.map((s2) => convertSchema(s2, ctx));
    const anyOfUnion = z.union(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    const options = schema.oneOf.map((s2) => convertSchema(s2, ctx));
    const oneOfUnion = z.xor(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
  }
  if (schema.allOf && Array.isArray(schema.allOf)) {
    if (schema.allOf.length === 0) {
      baseSchema = hasExplicitType ? baseSchema : z.any();
    } else {
      let result = hasExplicitType ? baseSchema : convertSchema(schema.allOf[0], ctx);
      const startIdx = hasExplicitType ? 0 : 1;
      for (let i2 = startIdx; i2 < schema.allOf.length; i2++) {
        result = z.intersection(result, convertSchema(schema.allOf[i2], ctx));
      }
      baseSchema = result;
    }
  }
  if (schema.nullable === true && ctx.version === "openapi-3.0") {
    baseSchema = z.nullable(baseSchema);
  }
  if (schema.readOnly === true) {
    baseSchema = z.readonly(baseSchema);
  }
  const extraMeta = {};
  const coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (const key of coreMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  const contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (const key of contentMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  for (const key of Object.keys(schema)) {
    if (!RECOGNIZED_KEYS.has(key)) {
      extraMeta[key] = schema[key];
    }
  }
  if (Object.keys(extraMeta).length > 0) {
    ctx.registry.add(baseSchema, extraMeta);
  }
  return baseSchema;
}
function fromJSONSchema(schema, params) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  const version2 = detectVersion(schema, params?.defaultTarget);
  const defs = schema.$defs || schema.definitions || {};
  const ctx = {
    version: version2,
    defs,
    refs: /* @__PURE__ */ new Map(),
    processing: /* @__PURE__ */ new Set(),
    rootSchema: schema,
    registry: params?.registry ?? globalRegistry
  };
  return convertSchema(schema, ctx);
}

// node_modules/zod/v4/classic/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: () => bigint3,
  boolean: () => boolean3,
  date: () => date4,
  number: () => number3,
  string: () => string3
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date4(params) {
  return _coercedDate(ZodDate, params);
}

// node_modules/zod/v4/classic/external.js
config(en_default());

// src/common/config/auth-types.ts
var WozcodeActiveBonusSchema = external_exports.object({
  id: external_exports.string(),
  amountInUsd: external_exports.number(),
  kind: external_exports.string(),
  reason: external_exports.string(),
  endsAt: external_exports.string().nullish().transform((v) => v ?? void 0)
});
var SubscriptionStatusSchema = external_exports.object({
  isValid: external_exports.boolean(),
  message: external_exports.string().nullish().transform((v) => v ?? void 0),
  // Unknown values (new server, old client) silently become undefined for forward-compat.
  plan: external_exports.string().nullish().transform((v) => {
    if (v === "individual" || v === "org") return v;
    return void 0;
  }),
  status: external_exports.string().nullish().transform((v) => {
    if (v === "free" || v === "paid") return v;
    return void 0;
  }),
  monthlySavingsInUsd: external_exports.number().nullish().transform((v) => v ?? void 0),
  monthlyBaseLimitInUsd: external_exports.number().nullish().transform((v) => v ?? void 0),
  monthlyBonusInUsd: external_exports.number().nullish().transform((v) => v ?? void 0),
  monthlyLimitInUsd: external_exports.number().nullish().transform((v) => v ?? void 0),
  activeBonuses: external_exports.array(WozcodeActiveBonusSchema).nullish().transform((v) => v ?? void 0),
  memberCount: external_exports.number().nullish().transform((v) => v ?? void 0),
  resetAt: external_exports.string().nullish().transform((v) => v ?? void 0),
  upgradeUrl: external_exports.string().nullish().transform((v) => v ?? void 0)
});

// package.json
var package_default = {
  name: "wozcode",
  version: "0.3.37",
  description: "WozCode enhanced coding tools \u2014 smart search, batch editing, SQL introspection, and cost-optimized subagent delegation",
  homepage: "https://withwoz.com",
  type: "module",
  main: "dist/plugin/servers/code-stdio.js",
  bin: {
    wozcode: "./dist/plugin/auth/wozcode-cli.js"
  },
  scripts: {
    build: "tsc",
    "build:plugin:prod": "tsc && node dist/plugin/build-plugin.js",
    "build:plugin": "tsc && node dist/plugin/build-plugin.js --no-obfuscate",
    lint: "npx eslint src/",
    compile: "tsc --noEmit",
    format: "npx prettier --write 'src/**/*.{ts,js}'",
    test: "node --import tsx --test 'src/**/*.test.ts'"
  },
  author: "Woz",
  license: "UNLICENSED",
  dependencies: {
    "@anthropic-ai/claude-agent-sdk": "~0.2.74",
    "@anthropic-ai/sdk": "~0.78.0",
    "@modelcontextprotocol/sdk": "^1.27.1",
    "@pg-nano/pg-parser": "~16.1.5",
    "@supabase/supabase-js": "^2.103.0",
    commander: "~14.0.3",
    glob: "^13.0.6",
    "html-validate": "^10.11.2",
    mysql2: "^3.22.0",
    postgres: "~3.4.7",
    "posthog-node": "^5.28.5",
    typescript: "~5.9.2",
    yaml: "^2.8.3",
    zod: "^4.3.6"
  },
  devDependencies: {
    "@eslint/js": "~10.0.1",
    "@types/node": "~25.5.0",
    "@typescript-eslint/utils": "^8.57.2",
    esbuild: "^0.27.4",
    eslint: "~10.1.0",
    "javascript-obfuscator": "^5.4.1",
    playwright: "^1.58.2",
    tsx: "~4.21.0",
    "typescript-eslint": "^8.57.2"
  },
  engines: {
    node: ">=20.10"
  }
};

// src/common/config/constants.ts
var WOZ_CODE_PLUGIN_NAME = "woz";
var WOZCODE_VERSION = package_default.version;
var WOZCODE_CONFIG_DIR_NAME = ".wozcode";
var WOZ_CODE_AGENT_NAME = `${WOZ_CODE_PLUGIN_NAME}:code`;
var BENCHMARK_SCRIPT_KEY = "benchmark";
var BENCHMARK_SCRIPT_NAME = `${BENCHMARK_SCRIPT_KEY}.js`;
var MCP_PLUGIN_PREFIX = "mcp__plugin_woz_code__";
var WOZ_MARKETPLACE_GITHUB_REPO = "WithWoz/wozcode-plugin";
var WOZ_MARKETPLACE_PLUGIN_JSON_URL = `https://raw.githubusercontent.com/${WOZ_MARKETPLACE_GITHUB_REPO}/main/.claude-plugin/plugin.json`;

// src/common/config/config.ts
var LEGACY_CONFIG_DIR = path2.join(os2.homedir(), WOZCODE_CONFIG_DIR_NAME);

// src/common/pricing/model-pricing.ts
var CONTEXT_GROWTH_MULTIPLIER = 1.3;
function pricingFromInput(input, output) {
  return {
    inputPerMillion: input,
    cacheReadPerMillion: input * 0.1,
    cacheWritePerMillion: input * 1.25,
    outputPerMillion: output
  };
}
var MODEL_PRICING = {
  "claude-opus-4-6": pricingFromInput(5, 25),
  "claude-opus-4-5": pricingFromInput(5, 25),
  "claude-opus-4-0": pricingFromInput(15, 75),
  "claude-sonnet-4-6": pricingFromInput(3, 15),
  "claude-sonnet-4-5": pricingFromInput(3, 15),
  "claude-sonnet-4-0": pricingFromInput(3, 15),
  "claude-haiku-4-5": pricingFromInput(0.8, 4),
  "claude-haiku-3-5": pricingFromInput(0.8, 4),
  opus: pricingFromInput(5, 25),
  sonnet: pricingFromInput(3, 15),
  haiku: pricingFromInput(0.8, 4),
  // Cursor Composer family. Pricing per Cursor docs (2026):
  //   Composer 2:      $0.50 in / $2.50 out / $0.20 cache read per million
  //   Composer 2 Fast: $1.50 in / $7.50 out / $0.35 cache read per million
  // Cache-write rate is not published; use input rate as a conservative default.
  // Two key variants per model: hyphenated (CLI flag form, e.g. 'composer-2-fast')
  // and space-separated (display name form, e.g. 'composer 2 fast') so both the
  // --cursor-model flag and the system-init event's `model` field resolve.
  // List Fast variants BEFORE base variants so the includes() fallback picks the
  // more specific match first.
  "composer-2-fast": { inputPerMillion: 1.5, cacheReadPerMillion: 0.35, cacheWritePerMillion: 1.5, outputPerMillion: 7.5 },
  "composer 2 fast": { inputPerMillion: 1.5, cacheReadPerMillion: 0.35, cacheWritePerMillion: 1.5, outputPerMillion: 7.5 },
  "composer-2": { inputPerMillion: 0.5, cacheReadPerMillion: 0.2, cacheWritePerMillion: 0.5, outputPerMillion: 2.5 },
  "composer 2": { inputPerMillion: 0.5, cacheReadPerMillion: 0.2, cacheWritePerMillion: 0.5, outputPerMillion: 2.5 },
  "composer-1.5": pricingFromInput(3.5, 17.5),
  "composer 1.5": pricingFromInput(3.5, 17.5)
};
var DEFAULT_PRICING = pricingFromInput(3, 15);
function getModelPricing(model) {
  if (model == null) return DEFAULT_PRICING;
  const lower = model.toLowerCase();
  if (MODEL_PRICING[lower] != null) return MODEL_PRICING[lower];
  for (const [key, pricing] of Object.entries(MODEL_PRICING)) {
    if (lower.includes(key)) return pricing;
  }
  return DEFAULT_PRICING;
}

// src/common/usage/usage-types.ts
function addTokenUsage(target, source) {
  target.inputTokens += source.inputTokens;
  target.outputTokens += source.outputTokens;
  target.cacheReadTokens += source.cacheReadTokens;
  target.cacheCreationTokens += source.cacheCreationTokens;
}
function emptyTranscriptUsage() {
  return {
    inputTokens: 0,
    outputTokens: 0,
    cacheReadTokens: 0,
    cacheCreationTokens: 0,
    turnCount: 0,
    toolUseCount: 0
  };
}
function addTranscriptUsage(target, source) {
  addTokenUsage(target, source);
  target.turnCount += source.turnCount;
  target.toolUseCount += source.toolUseCount;
}
function emptySavings() {
  return { callsSaved: 0, timeSavedInMs: 0, tokensSaved: 0, costSavedInUsd: 0 };
}
function addSavings(target, source) {
  target.callsSaved += source.callsSaved;
  target.timeSavedInMs += source.timeSavedInMs;
  target.tokensSaved += source.tokensSaved;
  target.costSavedInUsd += source.costSavedInUsd;
}

// src/common/wozcore/session-transcripts.ts
var fs2 = __toESM(require("fs"), 1);
var import_os2 = require("os");
var import_path10 = __toESM(require("path"), 1);
var import_readline2 = __toESM(require("readline"), 1);

// node_modules/@anthropic-ai/claude-agent-sdk/sdk.mjs
var import_path = require("path");
var import_url = require("url");
var import_events = require("events");
var import_child_process = require("child_process");
var import_readline = require("readline");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var import_path3 = require("path");
var import_os = require("os");
var u = __toESM(require("fs"), 1);
var import_promises2 = require("fs/promises");
var import_path4 = require("path");
var import_process = require("process");
var import_fs = require("fs");
var import_crypto2 = require("crypto");
var import_path5 = require("path");
var import_url2 = require("url");
var import_promises3 = require("fs/promises");
var import_promises4 = require("fs/promises");
var import_path6 = require("path");
var import_child_process2 = require("child_process");
var import_util3 = require("util");
var import_path7 = require("path");
var import_promises5 = require("fs/promises");
var import_fs2 = require("fs");
var import_promises6 = require("fs/promises");
var import_path8 = require("path");
var import_promises7 = require("fs/promises");
var import_path9 = require("path");
var import_crypto3 = require("crypto");
var LV = Object.create;
var { getPrototypeOf: FV, defineProperty: yQ, getOwnPropertyNames: NV } = Object;
var OV = Object.prototype.hasOwnProperty;
function DV(Q) {
  return this[Q];
}
var MV;
var wV;
var s7 = (Q, X, Y) => {
  var $ = Q != null && typeof Q === "object";
  if ($) {
    var J = X ? MV ??= /* @__PURE__ */ new WeakMap() : wV ??= /* @__PURE__ */ new WeakMap(), W = J.get(Q);
    if (W) return W;
  }
  Y = Q != null ? LV(FV(Q)) : {};
  let G = X || !Q || !Q.__esModule ? yQ(Y, "default", { value: Q, enumerable: true }) : Y;
  for (let H of NV(Q)) if (!OV.call(G, H)) yQ(G, H, { get: DV.bind(Q, H), enumerable: true });
  if ($) J.set(Q, G);
  return G;
};
var E = (Q, X) => () => (X || Q((X = { exports: {} }).exports, X), X.exports);
var AV = (Q) => Q;
function jV(Q, X) {
  this[Q] = AV.bind(null, X);
}
var gQ = (Q, X) => {
  for (var Y in X) yQ(Q, Y, { get: X[Y], enumerable: true, configurable: true, set: jV.bind(X, Y) });
};
var RV = Symbol.dispose || /* @__PURE__ */ Symbol.for("Symbol.dispose");
var IV = Symbol.asyncDispose || /* @__PURE__ */ Symbol.for("Symbol.asyncDispose");
var X0 = (Q, X, Y) => {
  if (X != null) {
    if (typeof X !== "object" && typeof X !== "function") throw TypeError('Object expected to be assigned to "using" declaration');
    var $;
    if (Y) $ = X[IV];
    if ($ === void 0) $ = X[RV];
    if (typeof $ !== "function") throw TypeError("Object not disposable");
    Q.push([Y, $, X]);
  } else if (Y) Q.push([Y]);
  return X;
};
var Y0 = (Q, X, Y) => {
  var $ = typeof SuppressedError === "function" ? SuppressedError : function(G, H, B, z2) {
    return z2 = Error(B), z2.name = "SuppressedError", z2.error = G, z2.suppressed = H, z2;
  }, J = (G) => X = Y ? new $(G, X, "An error was suppressed during disposal") : (Y = true, G), W = (G) => {
    while (G = Q.pop()) try {
      var H = G[1] && G[1].call(G[2]);
      if (G[0]) return Promise.resolve(H).then(W, (B) => (J(B), W()));
    } catch (B) {
      J(B);
    }
    if (Y) throw X;
  };
  return W();
};
var M4 = E((H3) => {
  Object.defineProperty(H3, "__esModule", { value: true });
  H3.regexpCode = H3.getEsmExportName = H3.getProperty = H3.safeStringify = H3.stringify = H3.strConcat = H3.addCodeArg = H3.str = H3._ = H3.nil = H3._Code = H3.Name = H3.IDENTIFIER = H3._CodeOrName = void 0;
  class a8 {
  }
  H3._CodeOrName = a8;
  H3.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class M9 extends a8 {
    constructor(Q) {
      super();
      if (!H3.IDENTIFIER.test(Q)) throw Error("CodeGen: name must be a valid identifier");
      this.str = Q;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  H3.Name = M9;
  class z1 extends a8 {
    constructor(Q) {
      super();
      this._items = typeof Q === "string" ? [Q] : Q;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return false;
      let Q = this._items[0];
      return Q === "" || Q === '""';
    }
    get str() {
      var Q;
      return (Q = this._str) !== null && Q !== void 0 ? Q : this._str = this._items.reduce((X, Y) => `${X}${Y}`, "");
    }
    get names() {
      var Q;
      return (Q = this._names) !== null && Q !== void 0 ? Q : this._names = this._items.reduce((X, Y) => {
        if (Y instanceof M9) X[Y.str] = (X[Y.str] || 0) + 1;
        return X;
      }, {});
    }
  }
  H3._Code = z1;
  H3.nil = new z1("");
  function W3(Q, ...X) {
    let Y = [Q[0]], $ = 0;
    while ($ < X.length) g$(Y, X[$]), Y.push(Q[++$]);
    return new z1(Y);
  }
  H3._ = W3;
  var y$ = new z1("+");
  function G3(Q, ...X) {
    let Y = [D4(Q[0])], $ = 0;
    while ($ < X.length) Y.push(y$), g$(Y, X[$]), Y.push(y$, D4(Q[++$]));
    return XM(Y), new z1(Y);
  }
  H3.str = G3;
  function g$(Q, X) {
    if (X instanceof z1) Q.push(...X._items);
    else if (X instanceof M9) Q.push(X);
    else Q.push(JM(X));
  }
  H3.addCodeArg = g$;
  function XM(Q) {
    let X = 1;
    while (X < Q.length - 1) {
      if (Q[X] === y$) {
        let Y = YM(Q[X - 1], Q[X + 1]);
        if (Y !== void 0) {
          Q.splice(X - 1, 3, Y);
          continue;
        }
        Q[X++] = "+";
      }
      X++;
    }
  }
  function YM(Q, X) {
    if (X === '""') return Q;
    if (Q === '""') return X;
    if (typeof Q == "string") {
      if (X instanceof M9 || Q[Q.length - 1] !== '"') return;
      if (typeof X != "string") return `${Q.slice(0, -1)}${X}"`;
      if (X[0] === '"') return Q.slice(0, -1) + X.slice(1);
      return;
    }
    if (typeof X == "string" && X[0] === '"' && !(Q instanceof M9)) return `"${Q}${X.slice(1)}`;
    return;
  }
  function $M(Q, X) {
    return X.emptyStr() ? Q : Q.emptyStr() ? X : G3`${Q}${X}`;
  }
  H3.strConcat = $M;
  function JM(Q) {
    return typeof Q == "number" || typeof Q == "boolean" || Q === null ? Q : D4(Array.isArray(Q) ? Q.join(",") : Q);
  }
  function WM(Q) {
    return new z1(D4(Q));
  }
  H3.stringify = WM;
  function D4(Q) {
    return JSON.stringify(Q).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  H3.safeStringify = D4;
  function GM(Q) {
    return typeof Q == "string" && H3.IDENTIFIER.test(Q) ? new z1(`.${Q}`) : W3`[${Q}]`;
  }
  H3.getProperty = GM;
  function HM(Q) {
    if (typeof Q == "string" && H3.IDENTIFIER.test(Q)) return new z1(`${Q}`);
    throw Error(`CodeGen: invalid export name: ${Q}, use explicit $id name mapping`);
  }
  H3.getEsmExportName = HM;
  function BM(Q) {
    return new z1(Q.toString());
  }
  H3.regexpCode = BM;
});
var m$ = E((V3) => {
  Object.defineProperty(V3, "__esModule", { value: true });
  V3.ValueScope = V3.ValueScopeName = V3.Scope = V3.varKinds = V3.UsedValueState = void 0;
  var g0 = M4();
  class z3 extends Error {
    constructor(Q) {
      super(`CodeGen: "code" for ${Q} not defined`);
      this.value = Q.value;
    }
  }
  var e8;
  (function(Q) {
    Q[Q.Started = 0] = "Started", Q[Q.Completed = 1] = "Completed";
  })(e8 || (V3.UsedValueState = e8 = {}));
  V3.varKinds = { const: new g0.Name("const"), let: new g0.Name("let"), var: new g0.Name("var") };
  class f$ {
    constructor({ prefixes: Q, parent: X } = {}) {
      this._names = {}, this._prefixes = Q, this._parent = X;
    }
    toName(Q) {
      return Q instanceof g0.Name ? Q : this.name(Q);
    }
    name(Q) {
      return new g0.Name(this._newName(Q));
    }
    _newName(Q) {
      let X = this._names[Q] || this._nameGroup(Q);
      return `${Q}${X.index++}`;
    }
    _nameGroup(Q) {
      var X, Y;
      if (((Y = (X = this._parent) === null || X === void 0 ? void 0 : X._prefixes) === null || Y === void 0 ? void 0 : Y.has(Q)) || this._prefixes && !this._prefixes.has(Q)) throw Error(`CodeGen: prefix "${Q}" is not allowed in this scope`);
      return this._names[Q] = { prefix: Q, index: 0 };
    }
  }
  V3.Scope = f$;
  class u$ extends g0.Name {
    constructor(Q, X) {
      super(X);
      this.prefix = Q;
    }
    setValue(Q, { property: X, itemIndex: Y }) {
      this.value = Q, this.scopePath = g0._`.${new g0.Name(X)}[${Y}]`;
    }
  }
  V3.ValueScopeName = u$;
  var AM = g0._`\n`;
  class K3 extends f$ {
    constructor(Q) {
      super(Q);
      this._values = {}, this._scope = Q.scope, this.opts = { ...Q, _n: Q.lines ? AM : g0.nil };
    }
    get() {
      return this._scope;
    }
    name(Q) {
      return new u$(Q, this._newName(Q));
    }
    value(Q, X) {
      var Y;
      if (X.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let $ = this.toName(Q), { prefix: J } = $, W = (Y = X.key) !== null && Y !== void 0 ? Y : X.ref, G = this._values[J];
      if (G) {
        let z2 = G.get(W);
        if (z2) return z2;
      } else G = this._values[J] = /* @__PURE__ */ new Map();
      G.set(W, $);
      let H = this._scope[J] || (this._scope[J] = []), B = H.length;
      return H[B] = X.ref, $.setValue(X, { property: J, itemIndex: B }), $;
    }
    getValue(Q, X) {
      let Y = this._values[Q];
      if (!Y) return;
      return Y.get(X);
    }
    scopeRefs(Q, X = this._values) {
      return this._reduceValues(X, (Y) => {
        if (Y.scopePath === void 0) throw Error(`CodeGen: name "${Y}" has no value`);
        return g0._`${Q}${Y.scopePath}`;
      });
    }
    scopeCode(Q = this._values, X, Y) {
      return this._reduceValues(Q, ($) => {
        if ($.value === void 0) throw Error(`CodeGen: name "${$}" has no value`);
        return $.value.code;
      }, X, Y);
    }
    _reduceValues(Q, X, Y = {}, $) {
      let J = g0.nil;
      for (let W in Q) {
        let G = Q[W];
        if (!G) continue;
        let H = Y[W] = Y[W] || /* @__PURE__ */ new Map();
        G.forEach((B) => {
          if (H.has(B)) return;
          H.set(B, e8.Started);
          let z2 = X(B);
          if (z2) {
            let K = this.opts.es5 ? V3.varKinds.var : V3.varKinds.const;
            J = g0._`${J}${K} ${B} = ${z2};${this.opts._n}`;
          } else if (z2 = $ === null || $ === void 0 ? void 0 : $(B)) J = g0._`${J}${z2}${this.opts._n}`;
          else throw new z3(B);
          H.set(B, e8.Completed);
        });
      }
      return J;
    }
  }
  V3.ValueScope = K3;
});
var c = E((h0) => {
  Object.defineProperty(h0, "__esModule", { value: true });
  h0.or = h0.and = h0.not = h0.CodeGen = h0.operators = h0.varKinds = h0.ValueScopeName = h0.ValueScope = h0.Scope = h0.Name = h0.regexpCode = h0.stringify = h0.getProperty = h0.nil = h0.strConcat = h0.str = h0._ = void 0;
  var r = M4(), K1 = m$(), Q6 = M4();
  Object.defineProperty(h0, "_", { enumerable: true, get: function() {
    return Q6._;
  } });
  Object.defineProperty(h0, "str", { enumerable: true, get: function() {
    return Q6.str;
  } });
  Object.defineProperty(h0, "strConcat", { enumerable: true, get: function() {
    return Q6.strConcat;
  } });
  Object.defineProperty(h0, "nil", { enumerable: true, get: function() {
    return Q6.nil;
  } });
  Object.defineProperty(h0, "getProperty", { enumerable: true, get: function() {
    return Q6.getProperty;
  } });
  Object.defineProperty(h0, "stringify", { enumerable: true, get: function() {
    return Q6.stringify;
  } });
  Object.defineProperty(h0, "regexpCode", { enumerable: true, get: function() {
    return Q6.regexpCode;
  } });
  Object.defineProperty(h0, "Name", { enumerable: true, get: function() {
    return Q6.Name;
  } });
  var WQ = m$();
  Object.defineProperty(h0, "Scope", { enumerable: true, get: function() {
    return WQ.Scope;
  } });
  Object.defineProperty(h0, "ValueScope", { enumerable: true, get: function() {
    return WQ.ValueScope;
  } });
  Object.defineProperty(h0, "ValueScopeName", { enumerable: true, get: function() {
    return WQ.ValueScopeName;
  } });
  Object.defineProperty(h0, "varKinds", { enumerable: true, get: function() {
    return WQ.varKinds;
  } });
  h0.operators = { GT: new r._Code(">"), GTE: new r._Code(">="), LT: new r._Code("<"), LTE: new r._Code("<="), EQ: new r._Code("==="), NEQ: new r._Code("!=="), NOT: new r._Code("!"), OR: new r._Code("||"), AND: new r._Code("&&"), ADD: new r._Code("+") };
  class X6 {
    optimizeNodes() {
      return this;
    }
    optimizeNames(Q, X) {
      return this;
    }
  }
  class U3 extends X6 {
    constructor(Q, X, Y) {
      super();
      this.varKind = Q, this.name = X, this.rhs = Y;
    }
    render({ es5: Q, _n: X }) {
      let Y = Q ? K1.varKinds.var : this.varKind, $ = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${Y} ${this.name}${$};` + X;
    }
    optimizeNames(Q, X) {
      if (!Q[this.name.str]) return;
      if (this.rhs) this.rhs = A9(this.rhs, Q, X);
      return this;
    }
    get names() {
      return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
    }
  }
  class p$ extends X6 {
    constructor(Q, X, Y) {
      super();
      this.lhs = Q, this.rhs = X, this.sideEffects = Y;
    }
    render({ _n: Q }) {
      return `${this.lhs} = ${this.rhs};` + Q;
    }
    optimizeNames(Q, X) {
      if (this.lhs instanceof r.Name && !Q[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = A9(this.rhs, Q, X), this;
    }
    get names() {
      let Q = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
      return JQ(Q, this.rhs);
    }
  }
  class L3 extends p$ {
    constructor(Q, X, Y, $) {
      super(Q, Y, $);
      this.op = X;
    }
    render({ _n: Q }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + Q;
    }
  }
  class F3 extends X6 {
    constructor(Q) {
      super();
      this.label = Q, this.names = {};
    }
    render({ _n: Q }) {
      return `${this.label}:` + Q;
    }
  }
  class N3 extends X6 {
    constructor(Q) {
      super();
      this.label = Q, this.names = {};
    }
    render({ _n: Q }) {
      return `break${this.label ? ` ${this.label}` : ""};` + Q;
    }
  }
  class O3 extends X6 {
    constructor(Q) {
      super();
      this.error = Q;
    }
    render({ _n: Q }) {
      return `throw ${this.error};` + Q;
    }
    get names() {
      return this.error.names;
    }
  }
  class D3 extends X6 {
    constructor(Q) {
      super();
      this.code = Q;
    }
    render({ _n: Q }) {
      return `${this.code};` + Q;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(Q, X) {
      return this.code = A9(this.code, Q, X), this;
    }
    get names() {
      return this.code instanceof r._CodeOrName ? this.code.names : {};
    }
  }
  class GQ extends X6 {
    constructor(Q = []) {
      super();
      this.nodes = Q;
    }
    render(Q) {
      return this.nodes.reduce((X, Y) => X + Y.render(Q), "");
    }
    optimizeNodes() {
      let { nodes: Q } = this, X = Q.length;
      while (X--) {
        let Y = Q[X].optimizeNodes();
        if (Array.isArray(Y)) Q.splice(X, 1, ...Y);
        else if (Y) Q[X] = Y;
        else Q.splice(X, 1);
      }
      return Q.length > 0 ? this : void 0;
    }
    optimizeNames(Q, X) {
      let { nodes: Y } = this, $ = Y.length;
      while ($--) {
        let J = Y[$];
        if (J.optimizeNames(Q, X)) continue;
        bM(Q, J.names), Y.splice($, 1);
      }
      return Y.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((Q, X) => E6(Q, X.names), {});
    }
  }
  class Y6 extends GQ {
    render(Q) {
      return "{" + Q._n + super.render(Q) + "}" + Q._n;
    }
  }
  class M3 extends GQ {
  }
  class w4 extends Y6 {
  }
  w4.kind = "else";
  class _1 extends Y6 {
    constructor(Q, X) {
      super(X);
      this.condition = Q;
    }
    render(Q) {
      let X = `if(${this.condition})` + super.render(Q);
      if (this.else) X += "else " + this.else.render(Q);
      return X;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let Q = this.condition;
      if (Q === true) return this.nodes;
      let X = this.else;
      if (X) {
        let Y = X.optimizeNodes();
        X = this.else = Array.isArray(Y) ? new w4(Y) : Y;
      }
      if (X) {
        if (Q === false) return X instanceof _1 ? X : X.nodes;
        if (this.nodes.length) return this;
        return new _1(I3(Q), X instanceof _1 ? [X] : X.nodes);
      }
      if (Q === false || !this.nodes.length) return;
      return this;
    }
    optimizeNames(Q, X) {
      var Y;
      if (this.else = (Y = this.else) === null || Y === void 0 ? void 0 : Y.optimizeNames(Q, X), !(super.optimizeNames(Q, X) || this.else)) return;
      return this.condition = A9(this.condition, Q, X), this;
    }
    get names() {
      let Q = super.names;
      if (JQ(Q, this.condition), this.else) E6(Q, this.else.names);
      return Q;
    }
  }
  _1.kind = "if";
  class w9 extends Y6 {
  }
  w9.kind = "for";
  class w3 extends w9 {
    constructor(Q) {
      super();
      this.iteration = Q;
    }
    render(Q) {
      return `for(${this.iteration})` + super.render(Q);
    }
    optimizeNames(Q, X) {
      if (!super.optimizeNames(Q, X)) return;
      return this.iteration = A9(this.iteration, Q, X), this;
    }
    get names() {
      return E6(super.names, this.iteration.names);
    }
  }
  class A3 extends w9 {
    constructor(Q, X, Y, $) {
      super();
      this.varKind = Q, this.name = X, this.from = Y, this.to = $;
    }
    render(Q) {
      let X = Q.es5 ? K1.varKinds.var : this.varKind, { name: Y, from: $, to: J } = this;
      return `for(${X} ${Y}=${$}; ${Y}<${J}; ${Y}++)` + super.render(Q);
    }
    get names() {
      let Q = JQ(super.names, this.from);
      return JQ(Q, this.to);
    }
  }
  class l$ extends w9 {
    constructor(Q, X, Y, $) {
      super();
      this.loop = Q, this.varKind = X, this.name = Y, this.iterable = $;
    }
    render(Q) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(Q);
    }
    optimizeNames(Q, X) {
      if (!super.optimizeNames(Q, X)) return;
      return this.iterable = A9(this.iterable, Q, X), this;
    }
    get names() {
      return E6(super.names, this.iterable.names);
    }
  }
  class QQ extends Y6 {
    constructor(Q, X, Y) {
      super();
      this.name = Q, this.args = X, this.async = Y;
    }
    render(Q) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(Q);
    }
  }
  QQ.kind = "func";
  class XQ extends GQ {
    render(Q) {
      return "return " + super.render(Q);
    }
  }
  XQ.kind = "return";
  class j3 extends Y6 {
    render(Q) {
      let X = "try" + super.render(Q);
      if (this.catch) X += this.catch.render(Q);
      if (this.finally) X += this.finally.render(Q);
      return X;
    }
    optimizeNodes() {
      var Q, X;
      return super.optimizeNodes(), (Q = this.catch) === null || Q === void 0 || Q.optimizeNodes(), (X = this.finally) === null || X === void 0 || X.optimizeNodes(), this;
    }
    optimizeNames(Q, X) {
      var Y, $;
      return super.optimizeNames(Q, X), (Y = this.catch) === null || Y === void 0 || Y.optimizeNames(Q, X), ($ = this.finally) === null || $ === void 0 || $.optimizeNames(Q, X), this;
    }
    get names() {
      let Q = super.names;
      if (this.catch) E6(Q, this.catch.names);
      if (this.finally) E6(Q, this.finally.names);
      return Q;
    }
  }
  class YQ extends Y6 {
    constructor(Q) {
      super();
      this.error = Q;
    }
    render(Q) {
      return `catch(${this.error})` + super.render(Q);
    }
  }
  YQ.kind = "catch";
  class $Q extends Y6 {
    render(Q) {
      return "finally" + super.render(Q);
    }
  }
  $Q.kind = "finally";
  class R3 {
    constructor(Q, X = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...X, _n: X.lines ? `
` : "" }, this._extScope = Q, this._scope = new K1.Scope({ parent: Q }), this._nodes = [new M3()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(Q) {
      return this._scope.name(Q);
    }
    scopeName(Q) {
      return this._extScope.name(Q);
    }
    scopeValue(Q, X) {
      let Y = this._extScope.value(Q, X);
      return (this._values[Y.prefix] || (this._values[Y.prefix] = /* @__PURE__ */ new Set())).add(Y), Y;
    }
    getScopeValue(Q, X) {
      return this._extScope.getValue(Q, X);
    }
    scopeRefs(Q) {
      return this._extScope.scopeRefs(Q, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(Q, X, Y, $) {
      let J = this._scope.toName(X);
      if (Y !== void 0 && $) this._constants[J.str] = Y;
      return this._leafNode(new U3(Q, J, Y)), J;
    }
    const(Q, X, Y) {
      return this._def(K1.varKinds.const, Q, X, Y);
    }
    let(Q, X, Y) {
      return this._def(K1.varKinds.let, Q, X, Y);
    }
    var(Q, X, Y) {
      return this._def(K1.varKinds.var, Q, X, Y);
    }
    assign(Q, X, Y) {
      return this._leafNode(new p$(Q, X, Y));
    }
    add(Q, X) {
      return this._leafNode(new L3(Q, h0.operators.ADD, X));
    }
    code(Q) {
      if (typeof Q == "function") Q();
      else if (Q !== r.nil) this._leafNode(new D3(Q));
      return this;
    }
    object(...Q) {
      let X = ["{"];
      for (let [Y, $] of Q) {
        if (X.length > 1) X.push(",");
        if (X.push(Y), Y !== $ || this.opts.es5) X.push(":"), (0, r.addCodeArg)(X, $);
      }
      return X.push("}"), new r._Code(X);
    }
    if(Q, X, Y) {
      if (this._blockNode(new _1(Q)), X && Y) this.code(X).else().code(Y).endIf();
      else if (X) this.code(X).endIf();
      else if (Y) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(Q) {
      return this._elseNode(new _1(Q));
    }
    else() {
      return this._elseNode(new w4());
    }
    endIf() {
      return this._endBlockNode(_1, w4);
    }
    _for(Q, X) {
      if (this._blockNode(Q), X) this.code(X).endFor();
      return this;
    }
    for(Q, X) {
      return this._for(new w3(Q), X);
    }
    forRange(Q, X, Y, $, J = this.opts.es5 ? K1.varKinds.var : K1.varKinds.let) {
      let W = this._scope.toName(Q);
      return this._for(new A3(J, W, X, Y), () => $(W));
    }
    forOf(Q, X, Y, $ = K1.varKinds.const) {
      let J = this._scope.toName(Q);
      if (this.opts.es5) {
        let W = X instanceof r.Name ? X : this.var("_arr", X);
        return this.forRange("_i", 0, r._`${W}.length`, (G) => {
          this.var(J, r._`${W}[${G}]`), Y(J);
        });
      }
      return this._for(new l$("of", $, J, X), () => Y(J));
    }
    forIn(Q, X, Y, $ = this.opts.es5 ? K1.varKinds.var : K1.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(Q, r._`Object.keys(${X})`, Y);
      let J = this._scope.toName(Q);
      return this._for(new l$("in", $, J, X), () => Y(J));
    }
    endFor() {
      return this._endBlockNode(w9);
    }
    label(Q) {
      return this._leafNode(new F3(Q));
    }
    break(Q) {
      return this._leafNode(new N3(Q));
    }
    return(Q) {
      let X = new XQ();
      if (this._blockNode(X), this.code(Q), X.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(XQ);
    }
    try(Q, X, Y) {
      if (!X && !Y) throw Error('CodeGen: "try" without "catch" and "finally"');
      let $ = new j3();
      if (this._blockNode($), this.code(Q), X) {
        let J = this.name("e");
        this._currNode = $.catch = new YQ(J), X(J);
      }
      if (Y) this._currNode = $.finally = new $Q(), this.code(Y);
      return this._endBlockNode(YQ, $Q);
    }
    throw(Q) {
      return this._leafNode(new O3(Q));
    }
    block(Q, X) {
      if (this._blockStarts.push(this._nodes.length), Q) this.code(Q).endBlock(X);
      return this;
    }
    endBlock(Q) {
      let X = this._blockStarts.pop();
      if (X === void 0) throw Error("CodeGen: not in self-balancing block");
      let Y = this._nodes.length - X;
      if (Y < 0 || Q !== void 0 && Y !== Q) throw Error(`CodeGen: wrong number of nodes: ${Y} vs ${Q} expected`);
      return this._nodes.length = X, this;
    }
    func(Q, X = r.nil, Y, $) {
      if (this._blockNode(new QQ(Q, X, Y)), $) this.code($).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(QQ);
    }
    optimize(Q = 1) {
      while (Q-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(Q) {
      return this._currNode.nodes.push(Q), this;
    }
    _blockNode(Q) {
      this._currNode.nodes.push(Q), this._nodes.push(Q);
    }
    _endBlockNode(Q, X) {
      let Y = this._currNode;
      if (Y instanceof Q || X && Y instanceof X) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${X ? `${Q.kind}/${X.kind}` : Q.kind}"`);
    }
    _elseNode(Q) {
      let X = this._currNode;
      if (!(X instanceof _1)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = X.else = Q, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let Q = this._nodes;
      return Q[Q.length - 1];
    }
    set _currNode(Q) {
      let X = this._nodes;
      X[X.length - 1] = Q;
    }
  }
  h0.CodeGen = R3;
  function E6(Q, X) {
    for (let Y in X) Q[Y] = (Q[Y] || 0) + (X[Y] || 0);
    return Q;
  }
  function JQ(Q, X) {
    return X instanceof r._CodeOrName ? E6(Q, X.names) : Q;
  }
  function A9(Q, X, Y) {
    if (Q instanceof r.Name) return $(Q);
    if (!J(Q)) return Q;
    return new r._Code(Q._items.reduce((W, G) => {
      if (G instanceof r.Name) G = $(G);
      if (G instanceof r._Code) W.push(...G._items);
      else W.push(G);
      return W;
    }, []));
    function $(W) {
      let G = Y[W.str];
      if (G === void 0 || X[W.str] !== 1) return W;
      return delete X[W.str], G;
    }
    function J(W) {
      return W instanceof r._Code && W._items.some((G) => G instanceof r.Name && X[G.str] === 1 && Y[G.str] !== void 0);
    }
  }
  function bM(Q, X) {
    for (let Y in X) Q[Y] = (Q[Y] || 0) - (X[Y] || 0);
  }
  function I3(Q) {
    return typeof Q == "boolean" || typeof Q == "number" || Q === null ? !Q : r._`!${c$(Q)}`;
  }
  h0.not = I3;
  var EM = b3(h0.operators.AND);
  function PM(...Q) {
    return Q.reduce(EM);
  }
  h0.and = PM;
  var ZM = b3(h0.operators.OR);
  function CM(...Q) {
    return Q.reduce(ZM);
  }
  h0.or = CM;
  function b3(Q) {
    return (X, Y) => X === r.nil ? Y : Y === r.nil ? X : r._`${c$(X)} ${Q} ${c$(Y)}`;
  }
  function c$(Q) {
    return Q instanceof r.Name ? Q : r._`(${Q})`;
  }
});
var a = E((T3) => {
  Object.defineProperty(T3, "__esModule", { value: true });
  T3.checkStrictMode = T3.getErrorPath = T3.Type = T3.useFunc = T3.setEvaluated = T3.evaluatedPropsToName = T3.mergeEvaluated = T3.eachItem = T3.unescapeJsonPointer = T3.escapeJsonPointer = T3.escapeFragment = T3.unescapeFragment = T3.schemaRefOrVal = T3.schemaHasRulesButRef = T3.schemaHasRules = T3.checkUnknownRules = T3.alwaysValidSchema = T3.toHash = void 0;
  var Q0 = c(), vM = M4();
  function TM(Q) {
    let X = {};
    for (let Y of Q) X[Y] = true;
    return X;
  }
  T3.toHash = TM;
  function xM(Q, X) {
    if (typeof X == "boolean") return X;
    if (Object.keys(X).length === 0) return true;
    return C3(Q, X), !S3(X, Q.self.RULES.all);
  }
  T3.alwaysValidSchema = xM;
  function C3(Q, X = Q.schema) {
    let { opts: Y, self: $ } = Q;
    if (!Y.strictSchema) return;
    if (typeof X === "boolean") return;
    let J = $.RULES.keywords;
    for (let W in X) if (!J[W]) v3(Q, `unknown keyword: "${W}"`);
  }
  T3.checkUnknownRules = C3;
  function S3(Q, X) {
    if (typeof Q == "boolean") return !Q;
    for (let Y in Q) if (X[Y]) return true;
    return false;
  }
  T3.schemaHasRules = S3;
  function yM(Q, X) {
    if (typeof Q == "boolean") return !Q;
    for (let Y in Q) if (Y !== "$ref" && X.all[Y]) return true;
    return false;
  }
  T3.schemaHasRulesButRef = yM;
  function gM({ topSchemaRef: Q, schemaPath: X }, Y, $, J) {
    if (!J) {
      if (typeof Y == "number" || typeof Y == "boolean") return Y;
      if (typeof Y == "string") return Q0._`${Y}`;
    }
    return Q0._`${Q}${X}${(0, Q0.getProperty)($)}`;
  }
  T3.schemaRefOrVal = gM;
  function hM(Q) {
    return _3(decodeURIComponent(Q));
  }
  T3.unescapeFragment = hM;
  function fM(Q) {
    return encodeURIComponent(i$(Q));
  }
  T3.escapeFragment = fM;
  function i$(Q) {
    if (typeof Q == "number") return `${Q}`;
    return Q.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  T3.escapeJsonPointer = i$;
  function _3(Q) {
    return Q.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  T3.unescapeJsonPointer = _3;
  function uM(Q, X) {
    if (Array.isArray(Q)) for (let Y of Q) X(Y);
    else X(Q);
  }
  T3.eachItem = uM;
  function P3({ mergeNames: Q, mergeToName: X, mergeValues: Y, resultToName: $ }) {
    return (J, W, G, H) => {
      let B = G === void 0 ? W : G instanceof Q0.Name ? (W instanceof Q0.Name ? Q(J, W, G) : X(J, W, G), G) : W instanceof Q0.Name ? (X(J, G, W), W) : Y(W, G);
      return H === Q0.Name && !(B instanceof Q0.Name) ? $(J, B) : B;
    };
  }
  T3.mergeEvaluated = { props: P3({ mergeNames: (Q, X, Y) => Q.if(Q0._`${Y} !== true && ${X} !== undefined`, () => {
    Q.if(Q0._`${X} === true`, () => Q.assign(Y, true), () => Q.assign(Y, Q0._`${Y} || {}`).code(Q0._`Object.assign(${Y}, ${X})`));
  }), mergeToName: (Q, X, Y) => Q.if(Q0._`${Y} !== true`, () => {
    if (X === true) Q.assign(Y, true);
    else Q.assign(Y, Q0._`${Y} || {}`), n$(Q, Y, X);
  }), mergeValues: (Q, X) => Q === true ? true : { ...Q, ...X }, resultToName: k3 }), items: P3({ mergeNames: (Q, X, Y) => Q.if(Q0._`${Y} !== true && ${X} !== undefined`, () => Q.assign(Y, Q0._`${X} === true ? true : ${Y} > ${X} ? ${Y} : ${X}`)), mergeToName: (Q, X, Y) => Q.if(Q0._`${Y} !== true`, () => Q.assign(Y, X === true ? true : Q0._`${Y} > ${X} ? ${Y} : ${X}`)), mergeValues: (Q, X) => Q === true ? true : Math.max(Q, X), resultToName: (Q, X) => Q.var("items", X) }) };
  function k3(Q, X) {
    if (X === true) return Q.var("props", true);
    let Y = Q.var("props", Q0._`{}`);
    if (X !== void 0) n$(Q, Y, X);
    return Y;
  }
  T3.evaluatedPropsToName = k3;
  function n$(Q, X, Y) {
    Object.keys(Y).forEach(($) => Q.assign(Q0._`${X}${(0, Q0.getProperty)($)}`, true));
  }
  T3.setEvaluated = n$;
  var Z3 = {};
  function mM(Q, X) {
    return Q.scopeValue("func", { ref: X, code: Z3[X.code] || (Z3[X.code] = new vM._Code(X.code)) });
  }
  T3.useFunc = mM;
  var d$;
  (function(Q) {
    Q[Q.Num = 0] = "Num", Q[Q.Str = 1] = "Str";
  })(d$ || (T3.Type = d$ = {}));
  function lM(Q, X, Y) {
    if (Q instanceof Q0.Name) {
      let $ = X === d$.Num;
      return Y ? $ ? Q0._`"[" + ${Q} + "]"` : Q0._`"['" + ${Q} + "']"` : $ ? Q0._`"/" + ${Q}` : Q0._`"/" + ${Q}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return Y ? (0, Q0.getProperty)(Q).toString() : "/" + i$(Q);
  }
  T3.getErrorPath = lM;
  function v3(Q, X, Y = Q.opts.strictSchema) {
    if (!Y) return;
    if (X = `strict mode: ${X}`, Y === true) throw Error(X);
    Q.self.logger.warn(X);
  }
  T3.checkStrictMode = v3;
});
var k1 = E((y3) => {
  Object.defineProperty(y3, "__esModule", { value: true });
  var Z0 = c(), Gw = { data: new Z0.Name("data"), valCxt: new Z0.Name("valCxt"), instancePath: new Z0.Name("instancePath"), parentData: new Z0.Name("parentData"), parentDataProperty: new Z0.Name("parentDataProperty"), rootData: new Z0.Name("rootData"), dynamicAnchors: new Z0.Name("dynamicAnchors"), vErrors: new Z0.Name("vErrors"), errors: new Z0.Name("errors"), this: new Z0.Name("this"), self: new Z0.Name("self"), scope: new Z0.Name("scope"), json: new Z0.Name("json"), jsonPos: new Z0.Name("jsonPos"), jsonLen: new Z0.Name("jsonLen"), jsonPart: new Z0.Name("jsonPart") };
  y3.default = Gw;
});
var A4 = E((u3) => {
  Object.defineProperty(u3, "__esModule", { value: true });
  u3.extendErrors = u3.resetErrorsCount = u3.reportExtraError = u3.reportError = u3.keyword$DataError = u3.keywordError = void 0;
  var t = c(), BQ = a(), k0 = k1();
  u3.keywordError = { message: ({ keyword: Q }) => t.str`must pass "${Q}" keyword validation` };
  u3.keyword$DataError = { message: ({ keyword: Q, schemaType: X }) => X ? t.str`"${Q}" keyword must be ${X} ($data)` : t.str`"${Q}" keyword is invalid ($data)` };
  function Bw(Q, X = u3.keywordError, Y, $) {
    let { it: J } = Q, { gen: W, compositeRule: G, allErrors: H } = J, B = f3(Q, X, Y);
    if ($ !== null && $ !== void 0 ? $ : G || H) g3(W, B);
    else h3(J, t._`[${B}]`);
  }
  u3.reportError = Bw;
  function zw(Q, X = u3.keywordError, Y) {
    let { it: $ } = Q, { gen: J, compositeRule: W, allErrors: G } = $, H = f3(Q, X, Y);
    if (g3(J, H), !(W || G)) h3($, k0.default.vErrors);
  }
  u3.reportExtraError = zw;
  function Kw(Q, X) {
    Q.assign(k0.default.errors, X), Q.if(t._`${k0.default.vErrors} !== null`, () => Q.if(X, () => Q.assign(t._`${k0.default.vErrors}.length`, X), () => Q.assign(k0.default.vErrors, null)));
  }
  u3.resetErrorsCount = Kw;
  function Vw({ gen: Q, keyword: X, schemaValue: Y, data: $, errsCount: J, it: W }) {
    if (J === void 0) throw Error("ajv implementation error");
    let G = Q.name("err");
    Q.forRange("i", J, k0.default.errors, (H) => {
      if (Q.const(G, t._`${k0.default.vErrors}[${H}]`), Q.if(t._`${G}.instancePath === undefined`, () => Q.assign(t._`${G}.instancePath`, (0, t.strConcat)(k0.default.instancePath, W.errorPath))), Q.assign(t._`${G}.schemaPath`, t.str`${W.errSchemaPath}/${X}`), W.opts.verbose) Q.assign(t._`${G}.schema`, Y), Q.assign(t._`${G}.data`, $);
    });
  }
  u3.extendErrors = Vw;
  function g3(Q, X) {
    let Y = Q.const("err", X);
    Q.if(t._`${k0.default.vErrors} === null`, () => Q.assign(k0.default.vErrors, t._`[${Y}]`), t._`${k0.default.vErrors}.push(${Y})`), Q.code(t._`${k0.default.errors}++`);
  }
  function h3(Q, X) {
    let { gen: Y, validateName: $, schemaEnv: J } = Q;
    if (J.$async) Y.throw(t._`new ${Q.ValidationError}(${X})`);
    else Y.assign(t._`${$}.errors`, X), Y.return(false);
  }
  var P6 = { keyword: new t.Name("keyword"), schemaPath: new t.Name("schemaPath"), params: new t.Name("params"), propertyName: new t.Name("propertyName"), message: new t.Name("message"), schema: new t.Name("schema"), parentSchema: new t.Name("parentSchema") };
  function f3(Q, X, Y) {
    let { createErrors: $ } = Q.it;
    if ($ === false) return t._`{}`;
    return qw(Q, X, Y);
  }
  function qw(Q, X, Y = {}) {
    let { gen: $, it: J } = Q, W = [Uw(J, Y), Lw(Q, Y)];
    return Fw(Q, X, W), $.object(...W);
  }
  function Uw({ errorPath: Q }, { instancePath: X }) {
    let Y = X ? t.str`${Q}${(0, BQ.getErrorPath)(X, BQ.Type.Str)}` : Q;
    return [k0.default.instancePath, (0, t.strConcat)(k0.default.instancePath, Y)];
  }
  function Lw({ keyword: Q, it: { errSchemaPath: X } }, { schemaPath: Y, parentSchema: $ }) {
    let J = $ ? X : t.str`${X}/${Q}`;
    if (Y) J = t.str`${J}${(0, BQ.getErrorPath)(Y, BQ.Type.Str)}`;
    return [P6.schemaPath, J];
  }
  function Fw(Q, { params: X, message: Y }, $) {
    let { keyword: J, data: W, schemaValue: G, it: H } = Q, { opts: B, propertyName: z2, topSchemaRef: K, schemaPath: U } = H;
    if ($.push([P6.keyword, J], [P6.params, typeof X == "function" ? X(Q) : X || t._`{}`]), B.messages) $.push([P6.message, typeof Y == "function" ? Y(Q) : Y]);
    if (B.verbose) $.push([P6.schema, G], [P6.parentSchema, t._`${K}${U}`], [k0.default.data, W]);
    if (z2) $.push([P6.propertyName, z2]);
  }
});
var d3 = E((c3) => {
  Object.defineProperty(c3, "__esModule", { value: true });
  c3.boolOrEmptySchema = c3.topBoolOrEmptySchema = void 0;
  var ww = A4(), Aw = c(), jw = k1(), Rw = { message: "boolean schema is false" };
  function Iw(Q) {
    let { gen: X, schema: Y, validateName: $ } = Q;
    if (Y === false) l3(Q, false);
    else if (typeof Y == "object" && Y.$async === true) X.return(jw.default.data);
    else X.assign(Aw._`${$}.errors`, null), X.return(true);
  }
  c3.topBoolOrEmptySchema = Iw;
  function bw(Q, X) {
    let { gen: Y, schema: $ } = Q;
    if ($ === false) Y.var(X, false), l3(Q);
    else Y.var(X, true);
  }
  c3.boolOrEmptySchema = bw;
  function l3(Q, X) {
    let { gen: Y, data: $ } = Q, J = { gen: Y, keyword: "false schema", data: $, schema: false, schemaCode: false, schemaValue: false, params: {}, it: Q };
    (0, ww.reportError)(J, Rw, void 0, X);
  }
});
var r$ = E((i3) => {
  Object.defineProperty(i3, "__esModule", { value: true });
  i3.getRules = i3.isJSONType = void 0;
  var Pw = ["string", "number", "integer", "boolean", "null", "object", "array"], Zw = new Set(Pw);
  function Cw(Q) {
    return typeof Q == "string" && Zw.has(Q);
  }
  i3.isJSONType = Cw;
  function Sw() {
    let Q = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
    return { types: { ...Q, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, Q.number, Q.string, Q.array, Q.object], post: { rules: [] }, all: {}, keywords: {} };
  }
  i3.getRules = Sw;
});
var t$ = E((t3) => {
  Object.defineProperty(t3, "__esModule", { value: true });
  t3.shouldUseRule = t3.shouldUseGroup = t3.schemaHasRulesForType = void 0;
  function kw({ schema: Q, self: X }, Y) {
    let $ = X.RULES.types[Y];
    return $ && $ !== true && o3(Q, $);
  }
  t3.schemaHasRulesForType = kw;
  function o3(Q, X) {
    return X.rules.some((Y) => r3(Q, Y));
  }
  t3.shouldUseGroup = o3;
  function r3(Q, X) {
    var Y;
    return Q[X.keyword] !== void 0 || ((Y = X.definition.implements) === null || Y === void 0 ? void 0 : Y.some(($) => Q[$] !== void 0));
  }
  t3.shouldUseRule = r3;
});
var j4 = E((XH) => {
  Object.defineProperty(XH, "__esModule", { value: true });
  XH.reportTypeError = XH.checkDataTypes = XH.checkDataType = XH.coerceAndCheckDataType = XH.getJSONTypes = XH.getSchemaTypes = XH.DataType = void 0;
  var xw = r$(), yw = t$(), gw = A4(), l = c(), s3 = a(), j9;
  (function(Q) {
    Q[Q.Correct = 0] = "Correct", Q[Q.Wrong = 1] = "Wrong";
  })(j9 || (XH.DataType = j9 = {}));
  function hw(Q) {
    let X = e3(Q.type);
    if (X.includes("null")) {
      if (Q.nullable === false) throw Error("type: null contradicts nullable: false");
    } else {
      if (!X.length && Q.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (Q.nullable === true) X.push("null");
    }
    return X;
  }
  XH.getSchemaTypes = hw;
  function e3(Q) {
    let X = Array.isArray(Q) ? Q : Q ? [Q] : [];
    if (X.every(xw.isJSONType)) return X;
    throw Error("type must be JSONType or JSONType[]: " + X.join(","));
  }
  XH.getJSONTypes = e3;
  function fw(Q, X) {
    let { gen: Y, data: $, opts: J } = Q, W = uw(X, J.coerceTypes), G = X.length > 0 && !(W.length === 0 && X.length === 1 && (0, yw.schemaHasRulesForType)(Q, X[0]));
    if (G) {
      let H = s$(X, $, J.strictNumbers, j9.Wrong);
      Y.if(H, () => {
        if (W.length) mw(Q, X, W);
        else e$(Q);
      });
    }
    return G;
  }
  XH.coerceAndCheckDataType = fw;
  var QH = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function uw(Q, X) {
    return X ? Q.filter((Y) => QH.has(Y) || X === "array" && Y === "array") : [];
  }
  function mw(Q, X, Y) {
    let { gen: $, data: J, opts: W } = Q, G = $.let("dataType", l._`typeof ${J}`), H = $.let("coerced", l._`undefined`);
    if (W.coerceTypes === "array") $.if(l._`${G} == 'object' && Array.isArray(${J}) && ${J}.length == 1`, () => $.assign(J, l._`${J}[0]`).assign(G, l._`typeof ${J}`).if(s$(X, J, W.strictNumbers), () => $.assign(H, J)));
    $.if(l._`${H} !== undefined`);
    for (let z2 of Y) if (QH.has(z2) || z2 === "array" && W.coerceTypes === "array") B(z2);
    $.else(), e$(Q), $.endIf(), $.if(l._`${H} !== undefined`, () => {
      $.assign(J, H), lw(Q, H);
    });
    function B(z2) {
      switch (z2) {
        case "string":
          $.elseIf(l._`${G} == "number" || ${G} == "boolean"`).assign(H, l._`"" + ${J}`).elseIf(l._`${J} === null`).assign(H, l._`""`);
          return;
        case "number":
          $.elseIf(l._`${G} == "boolean" || ${J} === null
              || (${G} == "string" && ${J} && ${J} == +${J})`).assign(H, l._`+${J}`);
          return;
        case "integer":
          $.elseIf(l._`${G} === "boolean" || ${J} === null
              || (${G} === "string" && ${J} && ${J} == +${J} && !(${J} % 1))`).assign(H, l._`+${J}`);
          return;
        case "boolean":
          $.elseIf(l._`${J} === "false" || ${J} === 0 || ${J} === null`).assign(H, false).elseIf(l._`${J} === "true" || ${J} === 1`).assign(H, true);
          return;
        case "null":
          $.elseIf(l._`${J} === "" || ${J} === 0 || ${J} === false`), $.assign(H, null);
          return;
        case "array":
          $.elseIf(l._`${G} === "string" || ${G} === "number"
              || ${G} === "boolean" || ${J} === null`).assign(H, l._`[${J}]`);
      }
    }
  }
  function lw({ gen: Q, parentData: X, parentDataProperty: Y }, $) {
    Q.if(l._`${X} !== undefined`, () => Q.assign(l._`${X}[${Y}]`, $));
  }
  function a$(Q, X, Y, $ = j9.Correct) {
    let J = $ === j9.Correct ? l.operators.EQ : l.operators.NEQ, W;
    switch (Q) {
      case "null":
        return l._`${X} ${J} null`;
      case "array":
        W = l._`Array.isArray(${X})`;
        break;
      case "object":
        W = l._`${X} && typeof ${X} == "object" && !Array.isArray(${X})`;
        break;
      case "integer":
        W = G(l._`!(${X} % 1) && !isNaN(${X})`);
        break;
      case "number":
        W = G();
        break;
      default:
        return l._`typeof ${X} ${J} ${Q}`;
    }
    return $ === j9.Correct ? W : (0, l.not)(W);
    function G(H = l.nil) {
      return (0, l.and)(l._`typeof ${X} == "number"`, H, Y ? l._`isFinite(${X})` : l.nil);
    }
  }
  XH.checkDataType = a$;
  function s$(Q, X, Y, $) {
    if (Q.length === 1) return a$(Q[0], X, Y, $);
    let J, W = (0, s3.toHash)(Q);
    if (W.array && W.object) {
      let G = l._`typeof ${X} != "object"`;
      J = W.null ? G : l._`!${X} || ${G}`, delete W.null, delete W.array, delete W.object;
    } else J = l.nil;
    if (W.number) delete W.integer;
    for (let G in W) J = (0, l.and)(J, a$(G, X, Y, $));
    return J;
  }
  XH.checkDataTypes = s$;
  var cw = { message: ({ schema: Q }) => `must be ${Q}`, params: ({ schema: Q, schemaValue: X }) => typeof Q == "string" ? l._`{type: ${Q}}` : l._`{type: ${X}}` };
  function e$(Q) {
    let X = pw(Q);
    (0, gw.reportError)(X, cw);
  }
  XH.reportTypeError = e$;
  function pw(Q) {
    let { gen: X, data: Y, schema: $ } = Q, J = (0, s3.schemaRefOrVal)(Q, $, "type");
    return { gen: X, keyword: "type", data: Y, schema: $.type, schemaCode: J, schemaValue: J, parentSchema: $, params: {}, it: Q };
  }
});
var GH = E((JH) => {
  Object.defineProperty(JH, "__esModule", { value: true });
  JH.assignDefaults = void 0;
  var R9 = c(), aw = a();
  function sw(Q, X) {
    let { properties: Y, items: $ } = Q.schema;
    if (X === "object" && Y) for (let J in Y) $H(Q, J, Y[J].default);
    else if (X === "array" && Array.isArray($)) $.forEach((J, W) => $H(Q, W, J.default));
  }
  JH.assignDefaults = sw;
  function $H(Q, X, Y) {
    let { gen: $, compositeRule: J, data: W, opts: G } = Q;
    if (Y === void 0) return;
    let H = R9._`${W}${(0, R9.getProperty)(X)}`;
    if (J) {
      (0, aw.checkStrictMode)(Q, `default is ignored for: ${H}`);
      return;
    }
    let B = R9._`${H} === undefined`;
    if (G.useDefaults === "empty") B = R9._`${B} || ${H} === null || ${H} === ""`;
    $.if(B, R9._`${H} = ${(0, R9.stringify)(Y)}`);
  }
});
var e0 = E((zH) => {
  Object.defineProperty(zH, "__esModule", { value: true });
  zH.validateUnion = zH.validateArray = zH.usePattern = zH.callValidateCode = zH.schemaProperties = zH.allSchemaProperties = zH.noPropertyInData = zH.propertyInData = zH.isOwnProperty = zH.hasPropFunc = zH.reportMissingProp = zH.checkMissingProp = zH.checkReportMissingProp = void 0;
  var H0 = c(), Q7 = a(), $6 = k1(), ew = a();
  function QA(Q, X) {
    let { gen: Y, data: $, it: J } = Q;
    Y.if(Y7(Y, $, X, J.opts.ownProperties), () => {
      Q.setParams({ missingProperty: H0._`${X}` }, true), Q.error();
    });
  }
  zH.checkReportMissingProp = QA;
  function XA({ gen: Q, data: X, it: { opts: Y } }, $, J) {
    return (0, H0.or)(...$.map((W) => (0, H0.and)(Y7(Q, X, W, Y.ownProperties), H0._`${J} = ${W}`)));
  }
  zH.checkMissingProp = XA;
  function YA(Q, X) {
    Q.setParams({ missingProperty: X }, true), Q.error();
  }
  zH.reportMissingProp = YA;
  function HH(Q) {
    return Q.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: H0._`Object.prototype.hasOwnProperty` });
  }
  zH.hasPropFunc = HH;
  function X7(Q, X, Y) {
    return H0._`${HH(Q)}.call(${X}, ${Y})`;
  }
  zH.isOwnProperty = X7;
  function $A(Q, X, Y, $) {
    let J = H0._`${X}${(0, H0.getProperty)(Y)} !== undefined`;
    return $ ? H0._`${J} && ${X7(Q, X, Y)}` : J;
  }
  zH.propertyInData = $A;
  function Y7(Q, X, Y, $) {
    let J = H0._`${X}${(0, H0.getProperty)(Y)} === undefined`;
    return $ ? (0, H0.or)(J, (0, H0.not)(X7(Q, X, Y))) : J;
  }
  zH.noPropertyInData = Y7;
  function BH(Q) {
    return Q ? Object.keys(Q).filter((X) => X !== "__proto__") : [];
  }
  zH.allSchemaProperties = BH;
  function JA(Q, X) {
    return BH(X).filter((Y) => !(0, Q7.alwaysValidSchema)(Q, X[Y]));
  }
  zH.schemaProperties = JA;
  function WA({ schemaCode: Q, data: X, it: { gen: Y, topSchemaRef: $, schemaPath: J, errorPath: W }, it: G }, H, B, z2) {
    let K = z2 ? H0._`${Q}, ${X}, ${$}${J}` : X, U = [[$6.default.instancePath, (0, H0.strConcat)($6.default.instancePath, W)], [$6.default.parentData, G.parentData], [$6.default.parentDataProperty, G.parentDataProperty], [$6.default.rootData, $6.default.rootData]];
    if (G.opts.dynamicRef) U.push([$6.default.dynamicAnchors, $6.default.dynamicAnchors]);
    let q = H0._`${K}, ${Y.object(...U)}`;
    return B !== H0.nil ? H0._`${H}.call(${B}, ${q})` : H0._`${H}(${q})`;
  }
  zH.callValidateCode = WA;
  var GA = H0._`new RegExp`;
  function HA({ gen: Q, it: { opts: X } }, Y) {
    let $ = X.unicodeRegExp ? "u" : "", { regExp: J } = X.code, W = J(Y, $);
    return Q.scopeValue("pattern", { key: W.toString(), ref: W, code: H0._`${J.code === "new RegExp" ? GA : (0, ew.useFunc)(Q, J)}(${Y}, ${$})` });
  }
  zH.usePattern = HA;
  function BA(Q) {
    let { gen: X, data: Y, keyword: $, it: J } = Q, W = X.name("valid");
    if (J.allErrors) {
      let H = X.let("valid", true);
      return G(() => X.assign(H, false)), H;
    }
    return X.var(W, true), G(() => X.break()), W;
    function G(H) {
      let B = X.const("len", H0._`${Y}.length`);
      X.forRange("i", 0, B, (z2) => {
        Q.subschema({ keyword: $, dataProp: z2, dataPropType: Q7.Type.Num }, W), X.if((0, H0.not)(W), H);
      });
    }
  }
  zH.validateArray = BA;
  function zA(Q) {
    let { gen: X, schema: Y, keyword: $, it: J } = Q;
    if (!Array.isArray(Y)) throw Error("ajv implementation error");
    if (Y.some((B) => (0, Q7.alwaysValidSchema)(J, B)) && !J.opts.unevaluated) return;
    let G = X.let("valid", false), H = X.name("_valid");
    X.block(() => Y.forEach((B, z2) => {
      let K = Q.subschema({ keyword: $, schemaProp: z2, compositeRule: true }, H);
      if (X.assign(G, H0._`${G} || ${H}`), !Q.mergeValidEvaluated(K, H)) X.if((0, H0.not)(G));
    })), Q.result(G, () => Q.reset(), () => Q.error(true));
  }
  zH.validateUnion = zA;
});
var FH = E((UH) => {
  Object.defineProperty(UH, "__esModule", { value: true });
  UH.validateKeywordUsage = UH.validSchemaType = UH.funcKeywordCode = UH.macroKeywordCode = void 0;
  var v0 = c(), Z6 = k1(), jA = e0(), RA = A4();
  function IA(Q, X) {
    let { gen: Y, keyword: $, schema: J, parentSchema: W, it: G } = Q, H = X.macro.call(G.self, J, W, G), B = qH(Y, $, H);
    if (G.opts.validateSchema !== false) G.self.validateSchema(H, true);
    let z2 = Y.name("valid");
    Q.subschema({ schema: H, schemaPath: v0.nil, errSchemaPath: `${G.errSchemaPath}/${$}`, topSchemaRef: B, compositeRule: true }, z2), Q.pass(z2, () => Q.error(true));
  }
  UH.macroKeywordCode = IA;
  function bA(Q, X) {
    var Y;
    let { gen: $, keyword: J, schema: W, parentSchema: G, $data: H, it: B } = Q;
    PA(B, X);
    let z2 = !H && X.compile ? X.compile.call(B.self, W, G, B) : X.validate, K = qH($, J, z2), U = $.let("valid");
    Q.block$data(U, q), Q.ok((Y = X.valid) !== null && Y !== void 0 ? Y : U);
    function q() {
      if (X.errors === false) {
        if (F(), X.modifying) VH(Q);
        M(() => Q.error());
      } else {
        let O = X.async ? V() : L();
        if (X.modifying) VH(Q);
        M(() => EA(Q, O));
      }
    }
    function V() {
      let O = $.let("ruleErrs", null);
      return $.try(() => F(v0._`await `), (A) => $.assign(U, false).if(v0._`${A} instanceof ${B.ValidationError}`, () => $.assign(O, v0._`${A}.errors`), () => $.throw(A))), O;
    }
    function L() {
      let O = v0._`${K}.errors`;
      return $.assign(O, null), F(v0.nil), O;
    }
    function F(O = X.async ? v0._`await ` : v0.nil) {
      let A = B.opts.passContext ? Z6.default.this : Z6.default.self, R = !("compile" in X && !H || X.schema === false);
      $.assign(U, v0._`${O}${(0, jA.callValidateCode)(Q, K, A, R)}`, X.modifying);
    }
    function M(O) {
      var A;
      $.if((0, v0.not)((A = X.valid) !== null && A !== void 0 ? A : U), O);
    }
  }
  UH.funcKeywordCode = bA;
  function VH(Q) {
    let { gen: X, data: Y, it: $ } = Q;
    X.if($.parentData, () => X.assign(Y, v0._`${$.parentData}[${$.parentDataProperty}]`));
  }
  function EA(Q, X) {
    let { gen: Y } = Q;
    Y.if(v0._`Array.isArray(${X})`, () => {
      Y.assign(Z6.default.vErrors, v0._`${Z6.default.vErrors} === null ? ${X} : ${Z6.default.vErrors}.concat(${X})`).assign(Z6.default.errors, v0._`${Z6.default.vErrors}.length`), (0, RA.extendErrors)(Q);
    }, () => Q.error());
  }
  function PA({ schemaEnv: Q }, X) {
    if (X.async && !Q.$async) throw Error("async keyword in sync schema");
  }
  function qH(Q, X, Y) {
    if (Y === void 0) throw Error(`keyword "${X}" failed to compile`);
    return Q.scopeValue("keyword", typeof Y == "function" ? { ref: Y } : { ref: Y, code: (0, v0.stringify)(Y) });
  }
  function ZA(Q, X, Y = false) {
    return !X.length || X.some(($) => $ === "array" ? Array.isArray(Q) : $ === "object" ? Q && typeof Q == "object" && !Array.isArray(Q) : typeof Q == $ || Y && typeof Q > "u");
  }
  UH.validSchemaType = ZA;
  function CA({ schema: Q, opts: X, self: Y, errSchemaPath: $ }, J, W) {
    if (Array.isArray(J.keyword) ? !J.keyword.includes(W) : J.keyword !== W) throw Error("ajv implementation error");
    let G = J.dependencies;
    if (G === null || G === void 0 ? void 0 : G.some((H) => !Object.prototype.hasOwnProperty.call(Q, H))) throw Error(`parent schema must have dependencies of ${W}: ${G.join(",")}`);
    if (J.validateSchema) {
      if (!J.validateSchema(Q[W])) {
        let B = `keyword "${W}" value is invalid at path "${$}": ` + Y.errorsText(J.validateSchema.errors);
        if (X.validateSchema === "log") Y.logger.error(B);
        else throw Error(B);
      }
    }
  }
  UH.validateKeywordUsage = CA;
});
var MH = E((OH) => {
  Object.defineProperty(OH, "__esModule", { value: true });
  OH.extendSubschemaMode = OH.extendSubschemaData = OH.getSubschema = void 0;
  var R1 = c(), NH = a();
  function vA(Q, { keyword: X, schemaProp: Y, schema: $, schemaPath: J, errSchemaPath: W, topSchemaRef: G }) {
    if (X !== void 0 && $ !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (X !== void 0) {
      let H = Q.schema[X];
      return Y === void 0 ? { schema: H, schemaPath: R1._`${Q.schemaPath}${(0, R1.getProperty)(X)}`, errSchemaPath: `${Q.errSchemaPath}/${X}` } : { schema: H[Y], schemaPath: R1._`${Q.schemaPath}${(0, R1.getProperty)(X)}${(0, R1.getProperty)(Y)}`, errSchemaPath: `${Q.errSchemaPath}/${X}/${(0, NH.escapeFragment)(Y)}` };
    }
    if ($ !== void 0) {
      if (J === void 0 || W === void 0 || G === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: $, schemaPath: J, topSchemaRef: G, errSchemaPath: W };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  OH.getSubschema = vA;
  function TA(Q, X, { dataProp: Y, dataPropType: $, data: J, dataTypes: W, propertyName: G }) {
    if (J !== void 0 && Y !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: H } = X;
    if (Y !== void 0) {
      let { errorPath: z2, dataPathArr: K, opts: U } = X, q = H.let("data", R1._`${X.data}${(0, R1.getProperty)(Y)}`, true);
      B(q), Q.errorPath = R1.str`${z2}${(0, NH.getErrorPath)(Y, $, U.jsPropertySyntax)}`, Q.parentDataProperty = R1._`${Y}`, Q.dataPathArr = [...K, Q.parentDataProperty];
    }
    if (J !== void 0) {
      let z2 = J instanceof R1.Name ? J : H.let("data", J, true);
      if (B(z2), G !== void 0) Q.propertyName = G;
    }
    if (W) Q.dataTypes = W;
    function B(z2) {
      Q.data = z2, Q.dataLevel = X.dataLevel + 1, Q.dataTypes = [], X.definedProperties = /* @__PURE__ */ new Set(), Q.parentData = X.data, Q.dataNames = [...X.dataNames, z2];
    }
  }
  OH.extendSubschemaData = TA;
  function xA(Q, { jtdDiscriminator: X, jtdMetadata: Y, compositeRule: $, createErrors: J, allErrors: W }) {
    if ($ !== void 0) Q.compositeRule = $;
    if (J !== void 0) Q.createErrors = J;
    if (W !== void 0) Q.allErrors = W;
    Q.jtdDiscriminator = X, Q.jtdMetadata = Y;
  }
  OH.extendSubschemaMode = xA;
});
var $7 = E((px, wH) => {
  wH.exports = function Q(X, Y) {
    if (X === Y) return true;
    if (X && Y && typeof X == "object" && typeof Y == "object") {
      if (X.constructor !== Y.constructor) return false;
      var $, J, W;
      if (Array.isArray(X)) {
        if ($ = X.length, $ != Y.length) return false;
        for (J = $; J-- !== 0; ) if (!Q(X[J], Y[J])) return false;
        return true;
      }
      if (X.constructor === RegExp) return X.source === Y.source && X.flags === Y.flags;
      if (X.valueOf !== Object.prototype.valueOf) return X.valueOf() === Y.valueOf();
      if (X.toString !== Object.prototype.toString) return X.toString() === Y.toString();
      if (W = Object.keys(X), $ = W.length, $ !== Object.keys(Y).length) return false;
      for (J = $; J-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(Y, W[J])) return false;
      for (J = $; J-- !== 0; ) {
        var G = W[J];
        if (!Q(X[G], Y[G])) return false;
      }
      return true;
    }
    return X !== X && Y !== Y;
  };
});
var jH = E((dx, AH) => {
  var J6 = AH.exports = function(Q, X, Y) {
    if (typeof X == "function") Y = X, X = {};
    Y = X.cb || Y;
    var $ = typeof Y == "function" ? Y : Y.pre || function() {
    }, J = Y.post || function() {
    };
    zQ(X, $, J, Q, "", Q);
  };
  J6.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true };
  J6.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
  J6.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true };
  J6.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function zQ(Q, X, Y, $, J, W, G, H, B, z2) {
    if ($ && typeof $ == "object" && !Array.isArray($)) {
      X($, J, W, G, H, B, z2);
      for (var K in $) {
        var U = $[K];
        if (Array.isArray(U)) {
          if (K in J6.arrayKeywords) for (var q = 0; q < U.length; q++) zQ(Q, X, Y, U[q], J + "/" + K + "/" + q, W, J, K, $, q);
        } else if (K in J6.propsKeywords) {
          if (U && typeof U == "object") for (var V in U) zQ(Q, X, Y, U[V], J + "/" + K + "/" + hA(V), W, J, K, $, V);
        } else if (K in J6.keywords || Q.allKeys && !(K in J6.skipKeywords)) zQ(Q, X, Y, U, J + "/" + K, W, J, K, $);
      }
      Y($, J, W, G, H, B, z2);
    }
  }
  function hA(Q) {
    return Q.replace(/~/g, "~0").replace(/\//g, "~1");
  }
});
var R4 = E((EH) => {
  Object.defineProperty(EH, "__esModule", { value: true });
  EH.getSchemaRefs = EH.resolveUrl = EH.normalizeId = EH._getFullPath = EH.getFullPath = EH.inlineRef = void 0;
  var fA = a(), uA = $7(), mA = jH(), lA = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function cA(Q, X = true) {
    if (typeof Q == "boolean") return true;
    if (X === true) return !J7(Q);
    if (!X) return false;
    return RH(Q) <= X;
  }
  EH.inlineRef = cA;
  var pA = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function J7(Q) {
    for (let X in Q) {
      if (pA.has(X)) return true;
      let Y = Q[X];
      if (Array.isArray(Y) && Y.some(J7)) return true;
      if (typeof Y == "object" && J7(Y)) return true;
    }
    return false;
  }
  function RH(Q) {
    let X = 0;
    for (let Y in Q) {
      if (Y === "$ref") return 1 / 0;
      if (X++, lA.has(Y)) continue;
      if (typeof Q[Y] == "object") (0, fA.eachItem)(Q[Y], ($) => X += RH($));
      if (X === 1 / 0) return 1 / 0;
    }
    return X;
  }
  function IH(Q, X = "", Y) {
    if (Y !== false) X = I9(X);
    let $ = Q.parse(X);
    return bH(Q, $);
  }
  EH.getFullPath = IH;
  function bH(Q, X) {
    return Q.serialize(X).split("#")[0] + "#";
  }
  EH._getFullPath = bH;
  var dA = /#\/?$/;
  function I9(Q) {
    return Q ? Q.replace(dA, "") : "";
  }
  EH.normalizeId = I9;
  function iA(Q, X, Y) {
    return Y = I9(Y), Q.resolve(X, Y);
  }
  EH.resolveUrl = iA;
  var nA = /^[a-z_][-a-z0-9._]*$/i;
  function oA(Q, X) {
    if (typeof Q == "boolean") return {};
    let { schemaId: Y, uriResolver: $ } = this.opts, J = I9(Q[Y] || X), W = { "": J }, G = IH($, J, false), H = {}, B = /* @__PURE__ */ new Set();
    return mA(Q, { allKeys: true }, (U, q, V, L) => {
      if (L === void 0) return;
      let F = G + q, M = W[L];
      if (typeof U[Y] == "string") M = O.call(this, U[Y]);
      A.call(this, U.$anchor), A.call(this, U.$dynamicAnchor), W[q] = M;
      function O(R) {
        let Z = this.opts.uriResolver.resolve;
        if (R = I9(M ? Z(M, R) : R), B.has(R)) throw K(R);
        B.add(R);
        let C = this.refs[R];
        if (typeof C == "string") C = this.refs[C];
        if (typeof C == "object") z2(U, C.schema, R);
        else if (R !== I9(F)) if (R[0] === "#") z2(U, H[R], R), H[R] = U;
        else this.refs[R] = F;
        return R;
      }
      function A(R) {
        if (typeof R == "string") {
          if (!nA.test(R)) throw Error(`invalid anchor "${R}"`);
          O.call(this, `#${R}`);
        }
      }
    }), H;
    function z2(U, q, V) {
      if (q !== void 0 && !uA(U, q)) throw K(V);
    }
    function K(U) {
      return Error(`reference "${U}" resolves to more than one schema`);
    }
  }
  EH.getSchemaRefs = oA;
});
var E4 = E((lH) => {
  Object.defineProperty(lH, "__esModule", { value: true });
  lH.getData = lH.KeywordCxt = lH.validateFunctionCode = void 0;
  var kH = d3(), ZH = j4(), G7 = t$(), KQ = j4(), Qj = GH(), b4 = FH(), W7 = MH(), v = c(), f = k1(), Xj = R4(), v1 = a(), I4 = A4();
  function Yj(Q) {
    if (xH(Q)) {
      if (yH(Q), TH(Q)) {
        Wj(Q);
        return;
      }
    }
    vH(Q, () => (0, kH.topBoolOrEmptySchema)(Q));
  }
  lH.validateFunctionCode = Yj;
  function vH({ gen: Q, validateName: X, schema: Y, schemaEnv: $, opts: J }, W) {
    if (J.code.es5) Q.func(X, v._`${f.default.data}, ${f.default.valCxt}`, $.$async, () => {
      Q.code(v._`"use strict"; ${CH(Y, J)}`), Jj(Q, J), Q.code(W);
    });
    else Q.func(X, v._`${f.default.data}, ${$j(J)}`, $.$async, () => Q.code(CH(Y, J)).code(W));
  }
  function $j(Q) {
    return v._`{${f.default.instancePath}="", ${f.default.parentData}, ${f.default.parentDataProperty}, ${f.default.rootData}=${f.default.data}${Q.dynamicRef ? v._`, ${f.default.dynamicAnchors}={}` : v.nil}}={}`;
  }
  function Jj(Q, X) {
    Q.if(f.default.valCxt, () => {
      if (Q.var(f.default.instancePath, v._`${f.default.valCxt}.${f.default.instancePath}`), Q.var(f.default.parentData, v._`${f.default.valCxt}.${f.default.parentData}`), Q.var(f.default.parentDataProperty, v._`${f.default.valCxt}.${f.default.parentDataProperty}`), Q.var(f.default.rootData, v._`${f.default.valCxt}.${f.default.rootData}`), X.dynamicRef) Q.var(f.default.dynamicAnchors, v._`${f.default.valCxt}.${f.default.dynamicAnchors}`);
    }, () => {
      if (Q.var(f.default.instancePath, v._`""`), Q.var(f.default.parentData, v._`undefined`), Q.var(f.default.parentDataProperty, v._`undefined`), Q.var(f.default.rootData, f.default.data), X.dynamicRef) Q.var(f.default.dynamicAnchors, v._`{}`);
    });
  }
  function Wj(Q) {
    let { schema: X, opts: Y, gen: $ } = Q;
    vH(Q, () => {
      if (Y.$comment && X.$comment) hH(Q);
      if (Kj(Q), $.let(f.default.vErrors, null), $.let(f.default.errors, 0), Y.unevaluated) Gj(Q);
      gH(Q), Uj(Q);
    });
    return;
  }
  function Gj(Q) {
    let { gen: X, validateName: Y } = Q;
    Q.evaluated = X.const("evaluated", v._`${Y}.evaluated`), X.if(v._`${Q.evaluated}.dynamicProps`, () => X.assign(v._`${Q.evaluated}.props`, v._`undefined`)), X.if(v._`${Q.evaluated}.dynamicItems`, () => X.assign(v._`${Q.evaluated}.items`, v._`undefined`));
  }
  function CH(Q, X) {
    let Y = typeof Q == "object" && Q[X.schemaId];
    return Y && (X.code.source || X.code.process) ? v._`/*# sourceURL=${Y} */` : v.nil;
  }
  function Hj(Q, X) {
    if (xH(Q)) {
      if (yH(Q), TH(Q)) {
        Bj(Q, X);
        return;
      }
    }
    (0, kH.boolOrEmptySchema)(Q, X);
  }
  function TH({ schema: Q, self: X }) {
    if (typeof Q == "boolean") return !Q;
    for (let Y in Q) if (X.RULES.all[Y]) return true;
    return false;
  }
  function xH(Q) {
    return typeof Q.schema != "boolean";
  }
  function Bj(Q, X) {
    let { schema: Y, gen: $, opts: J } = Q;
    if (J.$comment && Y.$comment) hH(Q);
    Vj(Q), qj(Q);
    let W = $.const("_errs", f.default.errors);
    gH(Q, W), $.var(X, v._`${W} === ${f.default.errors}`);
  }
  function yH(Q) {
    (0, v1.checkUnknownRules)(Q), zj(Q);
  }
  function gH(Q, X) {
    if (Q.opts.jtd) return SH(Q, [], false, X);
    let Y = (0, ZH.getSchemaTypes)(Q.schema), $ = (0, ZH.coerceAndCheckDataType)(Q, Y);
    SH(Q, Y, !$, X);
  }
  function zj(Q) {
    let { schema: X, errSchemaPath: Y, opts: $, self: J } = Q;
    if (X.$ref && $.ignoreKeywordsWithRef && (0, v1.schemaHasRulesButRef)(X, J.RULES)) J.logger.warn(`$ref: keywords ignored in schema at path "${Y}"`);
  }
  function Kj(Q) {
    let { schema: X, opts: Y } = Q;
    if (X.default !== void 0 && Y.useDefaults && Y.strictSchema) (0, v1.checkStrictMode)(Q, "default is ignored in the schema root");
  }
  function Vj(Q) {
    let X = Q.schema[Q.opts.schemaId];
    if (X) Q.baseId = (0, Xj.resolveUrl)(Q.opts.uriResolver, Q.baseId, X);
  }
  function qj(Q) {
    if (Q.schema.$async && !Q.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function hH({ gen: Q, schemaEnv: X, schema: Y, errSchemaPath: $, opts: J }) {
    let W = Y.$comment;
    if (J.$comment === true) Q.code(v._`${f.default.self}.logger.log(${W})`);
    else if (typeof J.$comment == "function") {
      let G = v.str`${$}/$comment`, H = Q.scopeValue("root", { ref: X.root });
      Q.code(v._`${f.default.self}.opts.$comment(${W}, ${G}, ${H}.schema)`);
    }
  }
  function Uj(Q) {
    let { gen: X, schemaEnv: Y, validateName: $, ValidationError: J, opts: W } = Q;
    if (Y.$async) X.if(v._`${f.default.errors} === 0`, () => X.return(f.default.data), () => X.throw(v._`new ${J}(${f.default.vErrors})`));
    else {
      if (X.assign(v._`${$}.errors`, f.default.vErrors), W.unevaluated) Lj(Q);
      X.return(v._`${f.default.errors} === 0`);
    }
  }
  function Lj({ gen: Q, evaluated: X, props: Y, items: $ }) {
    if (Y instanceof v.Name) Q.assign(v._`${X}.props`, Y);
    if ($ instanceof v.Name) Q.assign(v._`${X}.items`, $);
  }
  function SH(Q, X, Y, $) {
    let { gen: J, schema: W, data: G, allErrors: H, opts: B, self: z2 } = Q, { RULES: K } = z2;
    if (W.$ref && (B.ignoreKeywordsWithRef || !(0, v1.schemaHasRulesButRef)(W, K))) {
      J.block(() => uH(Q, "$ref", K.all.$ref.definition));
      return;
    }
    if (!B.jtd) Fj(Q, X);
    J.block(() => {
      for (let q of K.rules) U(q);
      U(K.post);
    });
    function U(q) {
      if (!(0, G7.shouldUseGroup)(W, q)) return;
      if (q.type) {
        if (J.if((0, KQ.checkDataType)(q.type, G, B.strictNumbers)), _H(Q, q), X.length === 1 && X[0] === q.type && Y) J.else(), (0, KQ.reportTypeError)(Q);
        J.endIf();
      } else _H(Q, q);
      if (!H) J.if(v._`${f.default.errors} === ${$ || 0}`);
    }
  }
  function _H(Q, X) {
    let { gen: Y, schema: $, opts: { useDefaults: J } } = Q;
    if (J) (0, Qj.assignDefaults)(Q, X.type);
    Y.block(() => {
      for (let W of X.rules) if ((0, G7.shouldUseRule)($, W)) uH(Q, W.keyword, W.definition, X.type);
    });
  }
  function Fj(Q, X) {
    if (Q.schemaEnv.meta || !Q.opts.strictTypes) return;
    if (Nj(Q, X), !Q.opts.allowUnionTypes) Oj(Q, X);
    Dj(Q, Q.dataTypes);
  }
  function Nj(Q, X) {
    if (!X.length) return;
    if (!Q.dataTypes.length) {
      Q.dataTypes = X;
      return;
    }
    X.forEach((Y) => {
      if (!fH(Q.dataTypes, Y)) H7(Q, `type "${Y}" not allowed by context "${Q.dataTypes.join(",")}"`);
    }), wj(Q, X);
  }
  function Oj(Q, X) {
    if (X.length > 1 && !(X.length === 2 && X.includes("null"))) H7(Q, "use allowUnionTypes to allow union type keyword");
  }
  function Dj(Q, X) {
    let Y = Q.self.RULES.all;
    for (let $ in Y) {
      let J = Y[$];
      if (typeof J == "object" && (0, G7.shouldUseRule)(Q.schema, J)) {
        let { type: W } = J.definition;
        if (W.length && !W.some((G) => Mj(X, G))) H7(Q, `missing type "${W.join(",")}" for keyword "${$}"`);
      }
    }
  }
  function Mj(Q, X) {
    return Q.includes(X) || X === "number" && Q.includes("integer");
  }
  function fH(Q, X) {
    return Q.includes(X) || X === "integer" && Q.includes("number");
  }
  function wj(Q, X) {
    let Y = [];
    for (let $ of Q.dataTypes) if (fH(X, $)) Y.push($);
    else if (X.includes("integer") && $ === "number") Y.push("integer");
    Q.dataTypes = Y;
  }
  function H7(Q, X) {
    let Y = Q.schemaEnv.baseId + Q.errSchemaPath;
    X += ` at "${Y}" (strictTypes)`, (0, v1.checkStrictMode)(Q, X, Q.opts.strictTypes);
  }
  class B7 {
    constructor(Q, X, Y) {
      if ((0, b4.validateKeywordUsage)(Q, X, Y), this.gen = Q.gen, this.allErrors = Q.allErrors, this.keyword = Y, this.data = Q.data, this.schema = Q.schema[Y], this.$data = X.$data && Q.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, v1.schemaRefOrVal)(Q, this.schema, Y, this.$data), this.schemaType = X.schemaType, this.parentSchema = Q.schema, this.params = {}, this.it = Q, this.def = X, this.$data) this.schemaCode = Q.gen.const("vSchema", mH(this.$data, Q));
      else if (this.schemaCode = this.schemaValue, !(0, b4.validSchemaType)(this.schema, X.schemaType, X.allowUndefined)) throw Error(`${Y} value must be ${JSON.stringify(X.schemaType)}`);
      if ("code" in X ? X.trackErrors : X.errors !== false) this.errsCount = Q.gen.const("_errs", f.default.errors);
    }
    result(Q, X, Y) {
      this.failResult((0, v.not)(Q), X, Y);
    }
    failResult(Q, X, Y) {
      if (this.gen.if(Q), Y) Y();
      else this.error();
      if (X) {
        if (this.gen.else(), X(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    pass(Q, X) {
      this.failResult((0, v.not)(Q), void 0, X);
    }
    fail(Q) {
      if (Q === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(false);
        return;
      }
      if (this.gen.if(Q), this.error(), this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    fail$data(Q) {
      if (!this.$data) return this.fail(Q);
      let { schemaCode: X } = this;
      this.fail(v._`${X} !== undefined && (${(0, v.or)(this.invalid$data(), Q)})`);
    }
    error(Q, X, Y) {
      if (X) {
        this.setParams(X), this._error(Q, Y), this.setParams({});
        return;
      }
      this._error(Q, Y);
    }
    _error(Q, X) {
      (Q ? I4.reportExtraError : I4.reportError)(this, this.def.error, X);
    }
    $dataError() {
      (0, I4.reportError)(this, this.def.$dataError || I4.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      (0, I4.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(Q) {
      if (!this.allErrors) this.gen.if(Q);
    }
    setParams(Q, X) {
      if (X) Object.assign(this.params, Q);
      else this.params = Q;
    }
    block$data(Q, X, Y = v.nil) {
      this.gen.block(() => {
        this.check$data(Q, Y), X();
      });
    }
    check$data(Q = v.nil, X = v.nil) {
      if (!this.$data) return;
      let { gen: Y, schemaCode: $, schemaType: J, def: W } = this;
      if (Y.if((0, v.or)(v._`${$} === undefined`, X)), Q !== v.nil) Y.assign(Q, true);
      if (J.length || W.validateSchema) {
        if (Y.elseIf(this.invalid$data()), this.$dataError(), Q !== v.nil) Y.assign(Q, false);
      }
      Y.else();
    }
    invalid$data() {
      let { gen: Q, schemaCode: X, schemaType: Y, def: $, it: J } = this;
      return (0, v.or)(W(), G());
      function W() {
        if (Y.length) {
          if (!(X instanceof v.Name)) throw Error("ajv implementation error");
          let H = Array.isArray(Y) ? Y : [Y];
          return v._`${(0, KQ.checkDataTypes)(H, X, J.opts.strictNumbers, KQ.DataType.Wrong)}`;
        }
        return v.nil;
      }
      function G() {
        if ($.validateSchema) {
          let H = Q.scopeValue("validate$data", { ref: $.validateSchema });
          return v._`!${H}(${X})`;
        }
        return v.nil;
      }
    }
    subschema(Q, X) {
      let Y = (0, W7.getSubschema)(this.it, Q);
      (0, W7.extendSubschemaData)(Y, this.it, Q), (0, W7.extendSubschemaMode)(Y, Q);
      let $ = { ...this.it, ...Y, items: void 0, props: void 0 };
      return Hj($, X), $;
    }
    mergeEvaluated(Q, X) {
      let { it: Y, gen: $ } = this;
      if (!Y.opts.unevaluated) return;
      if (Y.props !== true && Q.props !== void 0) Y.props = v1.mergeEvaluated.props($, Q.props, Y.props, X);
      if (Y.items !== true && Q.items !== void 0) Y.items = v1.mergeEvaluated.items($, Q.items, Y.items, X);
    }
    mergeValidEvaluated(Q, X) {
      let { it: Y, gen: $ } = this;
      if (Y.opts.unevaluated && (Y.props !== true || Y.items !== true)) return $.if(X, () => this.mergeEvaluated(Q, v.Name)), true;
    }
  }
  lH.KeywordCxt = B7;
  function uH(Q, X, Y, $) {
    let J = new B7(Q, Y, X);
    if ("code" in Y) Y.code(J, $);
    else if (J.$data && Y.validate) (0, b4.funcKeywordCode)(J, Y);
    else if ("macro" in Y) (0, b4.macroKeywordCode)(J, Y);
    else if (Y.compile || Y.validate) (0, b4.funcKeywordCode)(J, Y);
  }
  var Aj = /^\/(?:[^~]|~0|~1)*$/, jj = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function mH(Q, { dataLevel: X, dataNames: Y, dataPathArr: $ }) {
    let J, W;
    if (Q === "") return f.default.rootData;
    if (Q[0] === "/") {
      if (!Aj.test(Q)) throw Error(`Invalid JSON-pointer: ${Q}`);
      J = Q, W = f.default.rootData;
    } else {
      let z2 = jj.exec(Q);
      if (!z2) throw Error(`Invalid JSON-pointer: ${Q}`);
      let K = +z2[1];
      if (J = z2[2], J === "#") {
        if (K >= X) throw Error(B("property/index", K));
        return $[X - K];
      }
      if (K > X) throw Error(B("data", K));
      if (W = Y[X - K], !J) return W;
    }
    let G = W, H = J.split("/");
    for (let z2 of H) if (z2) W = v._`${W}${(0, v.getProperty)((0, v1.unescapeJsonPointer)(z2))}`, G = v._`${G} && ${W}`;
    return G;
    function B(z2, K) {
      return `Cannot access ${z2} ${K} levels up, current level is ${X}`;
    }
  }
  lH.getData = mH;
});
var VQ = E((dH) => {
  Object.defineProperty(dH, "__esModule", { value: true });
  class pH extends Error {
    constructor(Q) {
      super("validation failed");
      this.errors = Q, this.ajv = this.validation = true;
    }
  }
  dH.default = pH;
});
var P4 = E((nH) => {
  Object.defineProperty(nH, "__esModule", { value: true });
  var z7 = R4();
  class iH extends Error {
    constructor(Q, X, Y, $) {
      super($ || `can't resolve reference ${Y} from id ${X}`);
      this.missingRef = (0, z7.resolveUrl)(Q, X, Y), this.missingSchema = (0, z7.normalizeId)((0, z7.getFullPath)(Q, this.missingRef));
    }
  }
  nH.default = iH;
});
var UQ = E((tH) => {
  Object.defineProperty(tH, "__esModule", { value: true });
  tH.resolveSchema = tH.getCompilingSchema = tH.resolveRef = tH.compileSchema = tH.SchemaEnv = void 0;
  var V1 = c(), Pj = VQ(), C6 = k1(), q1 = R4(), oH = a(), Zj = E4();
  class Z4 {
    constructor(Q) {
      var X;
      this.refs = {}, this.dynamicAnchors = {};
      let Y;
      if (typeof Q.schema == "object") Y = Q.schema;
      this.schema = Q.schema, this.schemaId = Q.schemaId, this.root = Q.root || this, this.baseId = (X = Q.baseId) !== null && X !== void 0 ? X : (0, q1.normalizeId)(Y === null || Y === void 0 ? void 0 : Y[Q.schemaId || "$id"]), this.schemaPath = Q.schemaPath, this.localRefs = Q.localRefs, this.meta = Q.meta, this.$async = Y === null || Y === void 0 ? void 0 : Y.$async, this.refs = {};
    }
  }
  tH.SchemaEnv = Z4;
  function V7(Q) {
    let X = rH.call(this, Q);
    if (X) return X;
    let Y = (0, q1.getFullPath)(this.opts.uriResolver, Q.root.baseId), { es5: $, lines: J } = this.opts.code, { ownProperties: W } = this.opts, G = new V1.CodeGen(this.scope, { es5: $, lines: J, ownProperties: W }), H;
    if (Q.$async) H = G.scopeValue("Error", { ref: Pj.default, code: V1._`require("ajv/dist/runtime/validation_error").default` });
    let B = G.scopeName("validate");
    Q.validateName = B;
    let z2 = { gen: G, allErrors: this.opts.allErrors, data: C6.default.data, parentData: C6.default.parentData, parentDataProperty: C6.default.parentDataProperty, dataNames: [C6.default.data], dataPathArr: [V1.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: G.scopeValue("schema", this.opts.code.source === true ? { ref: Q.schema, code: (0, V1.stringify)(Q.schema) } : { ref: Q.schema }), validateName: B, ValidationError: H, schema: Q.schema, schemaEnv: Q, rootId: Y, baseId: Q.baseId || Y, schemaPath: V1.nil, errSchemaPath: Q.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: V1._`""`, opts: this.opts, self: this }, K;
    try {
      this._compilations.add(Q), (0, Zj.validateFunctionCode)(z2), G.optimize(this.opts.code.optimize);
      let U = G.toString();
      if (K = `${G.scopeRefs(C6.default.scope)}return ${U}`, this.opts.code.process) K = this.opts.code.process(K, Q);
      let V = Function(`${C6.default.self}`, `${C6.default.scope}`, K)(this, this.scope.get());
      if (this.scope.value(B, { ref: V }), V.errors = null, V.schema = Q.schema, V.schemaEnv = Q, Q.$async) V.$async = true;
      if (this.opts.code.source === true) V.source = { validateName: B, validateCode: U, scopeValues: G._values };
      if (this.opts.unevaluated) {
        let { props: L, items: F } = z2;
        if (V.evaluated = { props: L instanceof V1.Name ? void 0 : L, items: F instanceof V1.Name ? void 0 : F, dynamicProps: L instanceof V1.Name, dynamicItems: F instanceof V1.Name }, V.source) V.source.evaluated = (0, V1.stringify)(V.evaluated);
      }
      return Q.validate = V, Q;
    } catch (U) {
      if (delete Q.validate, delete Q.validateName, K) this.logger.error("Error compiling schema, function code:", K);
      throw U;
    } finally {
      this._compilations.delete(Q);
    }
  }
  tH.compileSchema = V7;
  function Cj(Q, X, Y) {
    var $;
    Y = (0, q1.resolveUrl)(this.opts.uriResolver, X, Y);
    let J = Q.refs[Y];
    if (J) return J;
    let W = kj.call(this, Q, Y);
    if (W === void 0) {
      let G = ($ = Q.localRefs) === null || $ === void 0 ? void 0 : $[Y], { schemaId: H } = this.opts;
      if (G) W = new Z4({ schema: G, schemaId: H, root: Q, baseId: X });
    }
    if (W === void 0) return;
    return Q.refs[Y] = Sj.call(this, W);
  }
  tH.resolveRef = Cj;
  function Sj(Q) {
    if ((0, q1.inlineRef)(Q.schema, this.opts.inlineRefs)) return Q.schema;
    return Q.validate ? Q : V7.call(this, Q);
  }
  function rH(Q) {
    for (let X of this._compilations) if (_j(X, Q)) return X;
  }
  tH.getCompilingSchema = rH;
  function _j(Q, X) {
    return Q.schema === X.schema && Q.root === X.root && Q.baseId === X.baseId;
  }
  function kj(Q, X) {
    let Y;
    while (typeof (Y = this.refs[X]) == "string") X = Y;
    return Y || this.schemas[X] || qQ.call(this, Q, X);
  }
  function qQ(Q, X) {
    let Y = this.opts.uriResolver.parse(X), $ = (0, q1._getFullPath)(this.opts.uriResolver, Y), J = (0, q1.getFullPath)(this.opts.uriResolver, Q.baseId, void 0);
    if (Object.keys(Q.schema).length > 0 && $ === J) return K7.call(this, Y, Q);
    let W = (0, q1.normalizeId)($), G = this.refs[W] || this.schemas[W];
    if (typeof G == "string") {
      let H = qQ.call(this, Q, G);
      if (typeof (H === null || H === void 0 ? void 0 : H.schema) !== "object") return;
      return K7.call(this, Y, H);
    }
    if (typeof (G === null || G === void 0 ? void 0 : G.schema) !== "object") return;
    if (!G.validate) V7.call(this, G);
    if (W === (0, q1.normalizeId)(X)) {
      let { schema: H } = G, { schemaId: B } = this.opts, z2 = H[B];
      if (z2) J = (0, q1.resolveUrl)(this.opts.uriResolver, J, z2);
      return new Z4({ schema: H, schemaId: B, root: Q, baseId: J });
    }
    return K7.call(this, Y, G);
  }
  tH.resolveSchema = qQ;
  var vj = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function K7(Q, { baseId: X, schema: Y, root: $ }) {
    var J;
    if (((J = Q.fragment) === null || J === void 0 ? void 0 : J[0]) !== "/") return;
    for (let H of Q.fragment.slice(1).split("/")) {
      if (typeof Y === "boolean") return;
      let B = Y[(0, oH.unescapeFragment)(H)];
      if (B === void 0) return;
      Y = B;
      let z2 = typeof Y === "object" && Y[this.opts.schemaId];
      if (!vj.has(H) && z2) X = (0, q1.resolveUrl)(this.opts.uriResolver, X, z2);
    }
    let W;
    if (typeof Y != "boolean" && Y.$ref && !(0, oH.schemaHasRulesButRef)(Y, this.RULES)) {
      let H = (0, q1.resolveUrl)(this.opts.uriResolver, X, Y.$ref);
      W = qQ.call(this, $, H);
    }
    let { schemaId: G } = this.opts;
    if (W = W || new Z4({ schema: Y, schemaId: G, root: $, baseId: X }), W.schema !== W.root.schema) return W;
    return;
  }
});
var sH = E((ax, hj) => {
  hj.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
});
var QB = E((sx, eH) => {
  var fj = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  eH.exports = { HEX: fj };
});
var BB = E((ex, HB) => {
  var { HEX: uj } = QB(), mj = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function JB(Q) {
    if (GB(Q, ".") < 3) return { host: Q, isIPV4: false };
    let X = Q.match(mj) || [], [Y] = X;
    if (Y) return { host: cj(Y, "."), isIPV4: true };
    else return { host: Q, isIPV4: false };
  }
  function q7(Q, X = false) {
    let Y = "", $ = true;
    for (let J of Q) {
      if (uj[J] === void 0) return;
      if (J !== "0" && $ === true) $ = false;
      if (!$) Y += J;
    }
    if (X && Y.length === 0) Y = "0";
    return Y;
  }
  function lj(Q) {
    let X = 0, Y = { error: false, address: "", zone: "" }, $ = [], J = [], W = false, G = false, H = false;
    function B() {
      if (J.length) {
        if (W === false) {
          let z2 = q7(J);
          if (z2 !== void 0) $.push(z2);
          else return Y.error = true, false;
        }
        J.length = 0;
      }
      return true;
    }
    for (let z2 = 0; z2 < Q.length; z2++) {
      let K = Q[z2];
      if (K === "[" || K === "]") continue;
      if (K === ":") {
        if (G === true) H = true;
        if (!B()) break;
        if (X++, $.push(":"), X > 7) {
          Y.error = true;
          break;
        }
        if (z2 - 1 >= 0 && Q[z2 - 1] === ":") G = true;
        continue;
      } else if (K === "%") {
        if (!B()) break;
        W = true;
      } else {
        J.push(K);
        continue;
      }
    }
    if (J.length) if (W) Y.zone = J.join("");
    else if (H) $.push(J.join(""));
    else $.push(q7(J));
    return Y.address = $.join(""), Y;
  }
  function WB(Q) {
    if (GB(Q, ":") < 2) return { host: Q, isIPV6: false };
    let X = lj(Q);
    if (!X.error) {
      let { address: Y, address: $ } = X;
      if (X.zone) Y += "%" + X.zone, $ += "%25" + X.zone;
      return { host: Y, escapedHost: $, isIPV6: true };
    } else return { host: Q, isIPV6: false };
  }
  function cj(Q, X) {
    let Y = "", $ = true, J = Q.length;
    for (let W = 0; W < J; W++) {
      let G = Q[W];
      if (G === "0" && $) {
        if (W + 1 <= J && Q[W + 1] === X || W + 1 === J) Y += G, $ = false;
      } else {
        if (G === X) $ = true;
        else $ = false;
        Y += G;
      }
    }
    return Y;
  }
  function GB(Q, X) {
    let Y = 0;
    for (let $ = 0; $ < Q.length; $++) if (Q[$] === X) Y++;
    return Y;
  }
  var XB = /^\.\.?\//u, YB = /^\/\.(?:\/|$)/u, $B = /^\/\.\.(?:\/|$)/u, pj = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function dj(Q) {
    let X = [];
    while (Q.length) if (Q.match(XB)) Q = Q.replace(XB, "");
    else if (Q.match(YB)) Q = Q.replace(YB, "/");
    else if (Q.match($B)) Q = Q.replace($B, "/"), X.pop();
    else if (Q === "." || Q === "..") Q = "";
    else {
      let Y = Q.match(pj);
      if (Y) {
        let $ = Y[0];
        Q = Q.slice($.length), X.push($);
      } else throw Error("Unexpected dot segment condition");
    }
    return X.join("");
  }
  function ij(Q, X) {
    let Y = X !== true ? escape : unescape;
    if (Q.scheme !== void 0) Q.scheme = Y(Q.scheme);
    if (Q.userinfo !== void 0) Q.userinfo = Y(Q.userinfo);
    if (Q.host !== void 0) Q.host = Y(Q.host);
    if (Q.path !== void 0) Q.path = Y(Q.path);
    if (Q.query !== void 0) Q.query = Y(Q.query);
    if (Q.fragment !== void 0) Q.fragment = Y(Q.fragment);
    return Q;
  }
  function nj(Q) {
    let X = [];
    if (Q.userinfo !== void 0) X.push(Q.userinfo), X.push("@");
    if (Q.host !== void 0) {
      let Y = unescape(Q.host), $ = JB(Y);
      if ($.isIPV4) Y = $.host;
      else {
        let J = WB($.host);
        if (J.isIPV6 === true) Y = `[${J.escapedHost}]`;
        else Y = Q.host;
      }
      X.push(Y);
    }
    if (typeof Q.port === "number" || typeof Q.port === "string") X.push(":"), X.push(String(Q.port));
    return X.length ? X.join("") : void 0;
  }
  HB.exports = { recomposeAuthority: nj, normalizeComponentEncoding: ij, removeDotSegments: dj, normalizeIPv4: JB, normalizeIPv6: WB, stringArrayToHexStripped: q7 };
});
var LB = E((Qy, UB) => {
  var oj = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, rj = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function zB(Q) {
    return typeof Q.secure === "boolean" ? Q.secure : String(Q.scheme).toLowerCase() === "wss";
  }
  function KB(Q) {
    if (!Q.host) Q.error = Q.error || "HTTP URIs must have a host.";
    return Q;
  }
  function VB(Q) {
    let X = String(Q.scheme).toLowerCase() === "https";
    if (Q.port === (X ? 443 : 80) || Q.port === "") Q.port = void 0;
    if (!Q.path) Q.path = "/";
    return Q;
  }
  function tj(Q) {
    return Q.secure = zB(Q), Q.resourceName = (Q.path || "/") + (Q.query ? "?" + Q.query : ""), Q.path = void 0, Q.query = void 0, Q;
  }
  function aj(Q) {
    if (Q.port === (zB(Q) ? 443 : 80) || Q.port === "") Q.port = void 0;
    if (typeof Q.secure === "boolean") Q.scheme = Q.secure ? "wss" : "ws", Q.secure = void 0;
    if (Q.resourceName) {
      let [X, Y] = Q.resourceName.split("?");
      Q.path = X && X !== "/" ? X : void 0, Q.query = Y, Q.resourceName = void 0;
    }
    return Q.fragment = void 0, Q;
  }
  function sj(Q, X) {
    if (!Q.path) return Q.error = "URN can not be parsed", Q;
    let Y = Q.path.match(rj);
    if (Y) {
      let $ = X.scheme || Q.scheme || "urn";
      Q.nid = Y[1].toLowerCase(), Q.nss = Y[2];
      let J = `${$}:${X.nid || Q.nid}`, W = U7[J];
      if (Q.path = void 0, W) Q = W.parse(Q, X);
    } else Q.error = Q.error || "URN can not be parsed.";
    return Q;
  }
  function ej(Q, X) {
    let Y = X.scheme || Q.scheme || "urn", $ = Q.nid.toLowerCase(), J = `${Y}:${X.nid || $}`, W = U7[J];
    if (W) Q = W.serialize(Q, X);
    let G = Q, H = Q.nss;
    return G.path = `${$ || X.nid}:${H}`, X.skipEscape = true, G;
  }
  function QR(Q, X) {
    let Y = Q;
    if (Y.uuid = Y.nss, Y.nss = void 0, !X.tolerant && (!Y.uuid || !oj.test(Y.uuid))) Y.error = Y.error || "UUID is not valid.";
    return Y;
  }
  function XR(Q) {
    let X = Q;
    return X.nss = (Q.uuid || "").toLowerCase(), X;
  }
  var qB = { scheme: "http", domainHost: true, parse: KB, serialize: VB }, YR = { scheme: "https", domainHost: qB.domainHost, parse: KB, serialize: VB }, LQ = { scheme: "ws", domainHost: true, parse: tj, serialize: aj }, $R = { scheme: "wss", domainHost: LQ.domainHost, parse: LQ.parse, serialize: LQ.serialize }, JR = { scheme: "urn", parse: sj, serialize: ej, skipNormalize: true }, WR = { scheme: "urn:uuid", parse: QR, serialize: XR, skipNormalize: true }, U7 = { http: qB, https: YR, ws: LQ, wss: $R, urn: JR, "urn:uuid": WR };
  UB.exports = U7;
});
var NB = E((Xy, NQ) => {
  var { normalizeIPv6: GR, normalizeIPv4: HR, removeDotSegments: C4, recomposeAuthority: BR, normalizeComponentEncoding: FQ } = BB(), L7 = LB();
  function zR(Q, X) {
    if (typeof Q === "string") Q = I1(T1(Q, X), X);
    else if (typeof Q === "object") Q = T1(I1(Q, X), X);
    return Q;
  }
  function KR(Q, X, Y) {
    let $ = Object.assign({ scheme: "null" }, Y), J = FB(T1(Q, $), T1(X, $), $, true);
    return I1(J, { ...$, skipEscape: true });
  }
  function FB(Q, X, Y, $) {
    let J = {};
    if (!$) Q = T1(I1(Q, Y), Y), X = T1(I1(X, Y), Y);
    if (Y = Y || {}, !Y.tolerant && X.scheme) J.scheme = X.scheme, J.userinfo = X.userinfo, J.host = X.host, J.port = X.port, J.path = C4(X.path || ""), J.query = X.query;
    else {
      if (X.userinfo !== void 0 || X.host !== void 0 || X.port !== void 0) J.userinfo = X.userinfo, J.host = X.host, J.port = X.port, J.path = C4(X.path || ""), J.query = X.query;
      else {
        if (!X.path) if (J.path = Q.path, X.query !== void 0) J.query = X.query;
        else J.query = Q.query;
        else {
          if (X.path.charAt(0) === "/") J.path = C4(X.path);
          else {
            if ((Q.userinfo !== void 0 || Q.host !== void 0 || Q.port !== void 0) && !Q.path) J.path = "/" + X.path;
            else if (!Q.path) J.path = X.path;
            else J.path = Q.path.slice(0, Q.path.lastIndexOf("/") + 1) + X.path;
            J.path = C4(J.path);
          }
          J.query = X.query;
        }
        J.userinfo = Q.userinfo, J.host = Q.host, J.port = Q.port;
      }
      J.scheme = Q.scheme;
    }
    return J.fragment = X.fragment, J;
  }
  function VR(Q, X, Y) {
    if (typeof Q === "string") Q = unescape(Q), Q = I1(FQ(T1(Q, Y), true), { ...Y, skipEscape: true });
    else if (typeof Q === "object") Q = I1(FQ(Q, true), { ...Y, skipEscape: true });
    if (typeof X === "string") X = unescape(X), X = I1(FQ(T1(X, Y), true), { ...Y, skipEscape: true });
    else if (typeof X === "object") X = I1(FQ(X, true), { ...Y, skipEscape: true });
    return Q.toLowerCase() === X.toLowerCase();
  }
  function I1(Q, X) {
    let Y = { host: Q.host, scheme: Q.scheme, userinfo: Q.userinfo, port: Q.port, path: Q.path, query: Q.query, nid: Q.nid, nss: Q.nss, uuid: Q.uuid, fragment: Q.fragment, reference: Q.reference, resourceName: Q.resourceName, secure: Q.secure, error: "" }, $ = Object.assign({}, X), J = [], W = L7[($.scheme || Y.scheme || "").toLowerCase()];
    if (W && W.serialize) W.serialize(Y, $);
    if (Y.path !== void 0) if (!$.skipEscape) {
      if (Y.path = escape(Y.path), Y.scheme !== void 0) Y.path = Y.path.split("%3A").join(":");
    } else Y.path = unescape(Y.path);
    if ($.reference !== "suffix" && Y.scheme) J.push(Y.scheme, ":");
    let G = BR(Y);
    if (G !== void 0) {
      if ($.reference !== "suffix") J.push("//");
      if (J.push(G), Y.path && Y.path.charAt(0) !== "/") J.push("/");
    }
    if (Y.path !== void 0) {
      let H = Y.path;
      if (!$.absolutePath && (!W || !W.absolutePath)) H = C4(H);
      if (G === void 0) H = H.replace(/^\/\//u, "/%2F");
      J.push(H);
    }
    if (Y.query !== void 0) J.push("?", Y.query);
    if (Y.fragment !== void 0) J.push("#", Y.fragment);
    return J.join("");
  }
  var qR = Array.from({ length: 127 }, (Q, X) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(X)));
  function UR(Q) {
    let X = 0;
    for (let Y = 0, $ = Q.length; Y < $; ++Y) if (X = Q.charCodeAt(Y), X > 126 || qR[X]) return true;
    return false;
  }
  var LR = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function T1(Q, X) {
    let Y = Object.assign({}, X), $ = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 }, J = Q.indexOf("%") !== -1, W = false;
    if (Y.reference === "suffix") Q = (Y.scheme ? Y.scheme + ":" : "") + "//" + Q;
    let G = Q.match(LR);
    if (G) {
      if ($.scheme = G[1], $.userinfo = G[3], $.host = G[4], $.port = parseInt(G[5], 10), $.path = G[6] || "", $.query = G[7], $.fragment = G[8], isNaN($.port)) $.port = G[5];
      if ($.host) {
        let B = HR($.host);
        if (B.isIPV4 === false) {
          let z2 = GR(B.host);
          $.host = z2.host.toLowerCase(), W = z2.isIPV6;
        } else $.host = B.host, W = true;
      }
      if ($.scheme === void 0 && $.userinfo === void 0 && $.host === void 0 && $.port === void 0 && $.query === void 0 && !$.path) $.reference = "same-document";
      else if ($.scheme === void 0) $.reference = "relative";
      else if ($.fragment === void 0) $.reference = "absolute";
      else $.reference = "uri";
      if (Y.reference && Y.reference !== "suffix" && Y.reference !== $.reference) $.error = $.error || "URI is not a " + Y.reference + " reference.";
      let H = L7[(Y.scheme || $.scheme || "").toLowerCase()];
      if (!Y.unicodeSupport && (!H || !H.unicodeSupport)) {
        if ($.host && (Y.domainHost || H && H.domainHost) && W === false && UR($.host)) try {
          $.host = URL.domainToASCII($.host.toLowerCase());
        } catch (B) {
          $.error = $.error || "Host's domain name can not be converted to ASCII: " + B;
        }
      }
      if (!H || H && !H.skipNormalize) {
        if (J && $.scheme !== void 0) $.scheme = unescape($.scheme);
        if (J && $.host !== void 0) $.host = unescape($.host);
        if ($.path) $.path = escape(unescape($.path));
        if ($.fragment) $.fragment = encodeURI(decodeURIComponent($.fragment));
      }
      if (H && H.parse) H.parse($, Y);
    } else $.error = $.error || "URI can not be parsed.";
    return $;
  }
  var F7 = { SCHEMES: L7, normalize: zR, resolve: KR, resolveComponents: FB, equal: VR, serialize: I1, parse: T1 };
  NQ.exports = F7;
  NQ.exports.default = F7;
  NQ.exports.fastUri = F7;
});
var MB = E((DB) => {
  Object.defineProperty(DB, "__esModule", { value: true });
  var OB = NB();
  OB.code = 'require("ajv/dist/runtime/uri").default';
  DB.default = OB;
});
var PB = E((x1) => {
  Object.defineProperty(x1, "__esModule", { value: true });
  x1.CodeGen = x1.Name = x1.nil = x1.stringify = x1.str = x1._ = x1.KeywordCxt = void 0;
  var NR = E4();
  Object.defineProperty(x1, "KeywordCxt", { enumerable: true, get: function() {
    return NR.KeywordCxt;
  } });
  var b9 = c();
  Object.defineProperty(x1, "_", { enumerable: true, get: function() {
    return b9._;
  } });
  Object.defineProperty(x1, "str", { enumerable: true, get: function() {
    return b9.str;
  } });
  Object.defineProperty(x1, "stringify", { enumerable: true, get: function() {
    return b9.stringify;
  } });
  Object.defineProperty(x1, "nil", { enumerable: true, get: function() {
    return b9.nil;
  } });
  Object.defineProperty(x1, "Name", { enumerable: true, get: function() {
    return b9.Name;
  } });
  Object.defineProperty(x1, "CodeGen", { enumerable: true, get: function() {
    return b9.CodeGen;
  } });
  var OR = VQ(), IB = P4(), DR = r$(), S4 = UQ(), MR = c(), _4 = R4(), OQ = j4(), O7 = a(), wB = sH(), wR = MB(), bB = (Q, X) => new RegExp(Q, X);
  bB.code = "new RegExp";
  var AR = ["removeAdditional", "useDefaults", "coerceTypes"], jR = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), RR = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, IR = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, AB = 200;
  function bR(Q) {
    var X, Y, $, J, W, G, H, B, z2, K, U, q, V, L, F, M, O, A, R, Z, C, B0, O0, d0, B6;
    let F1 = Q.strict, z6 = (X = Q.code) === null || X === void 0 ? void 0 : X.optimize, y1 = z6 === true || z6 === void 0 ? 1 : z6 || 0, K6 = ($ = (Y = Q.code) === null || Y === void 0 ? void 0 : Y.regExp) !== null && $ !== void 0 ? $ : bB, h = (J = Q.uriResolver) !== null && J !== void 0 ? J : wR.default;
    return { strictSchema: (G = (W = Q.strictSchema) !== null && W !== void 0 ? W : F1) !== null && G !== void 0 ? G : true, strictNumbers: (B = (H = Q.strictNumbers) !== null && H !== void 0 ? H : F1) !== null && B !== void 0 ? B : true, strictTypes: (K = (z2 = Q.strictTypes) !== null && z2 !== void 0 ? z2 : F1) !== null && K !== void 0 ? K : "log", strictTuples: (q = (U = Q.strictTuples) !== null && U !== void 0 ? U : F1) !== null && q !== void 0 ? q : "log", strictRequired: (L = (V = Q.strictRequired) !== null && V !== void 0 ? V : F1) !== null && L !== void 0 ? L : false, code: Q.code ? { ...Q.code, optimize: y1, regExp: K6 } : { optimize: y1, regExp: K6 }, loopRequired: (F = Q.loopRequired) !== null && F !== void 0 ? F : AB, loopEnum: (M = Q.loopEnum) !== null && M !== void 0 ? M : AB, meta: (O = Q.meta) !== null && O !== void 0 ? O : true, messages: (A = Q.messages) !== null && A !== void 0 ? A : true, inlineRefs: (R = Q.inlineRefs) !== null && R !== void 0 ? R : true, schemaId: (Z = Q.schemaId) !== null && Z !== void 0 ? Z : "$id", addUsedSchema: (C = Q.addUsedSchema) !== null && C !== void 0 ? C : true, validateSchema: (B0 = Q.validateSchema) !== null && B0 !== void 0 ? B0 : true, validateFormats: (O0 = Q.validateFormats) !== null && O0 !== void 0 ? O0 : true, unicodeRegExp: (d0 = Q.unicodeRegExp) !== null && d0 !== void 0 ? d0 : true, int32range: (B6 = Q.int32range) !== null && B6 !== void 0 ? B6 : true, uriResolver: h };
  }
  class DQ {
    constructor(Q = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), Q = this.opts = { ...Q, ...bR(Q) };
      let { es5: X, lines: Y } = this.opts.code;
      this.scope = new MR.ValueScope({ scope: {}, prefixes: jR, es5: X, lines: Y }), this.logger = _R(Q.logger);
      let $ = Q.validateFormats;
      if (Q.validateFormats = false, this.RULES = (0, DR.getRules)(), jB.call(this, RR, Q, "NOT SUPPORTED"), jB.call(this, IR, Q, "DEPRECATED", "warn"), this._metaOpts = CR.call(this), Q.formats) PR.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), Q.keywords) ZR.call(this, Q.keywords);
      if (typeof Q.meta == "object") this.addMetaSchema(Q.meta);
      ER.call(this), Q.validateFormats = $;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: Q, meta: X, schemaId: Y } = this.opts, $ = wB;
      if (Y === "id") $ = { ...wB }, $.id = $.$id, delete $.$id;
      if (X && Q) this.addMetaSchema($, $[Y], false);
    }
    defaultMeta() {
      let { meta: Q, schemaId: X } = this.opts;
      return this.opts.defaultMeta = typeof Q == "object" ? Q[X] || Q : void 0;
    }
    validate(Q, X) {
      let Y;
      if (typeof Q == "string") {
        if (Y = this.getSchema(Q), !Y) throw Error(`no schema with key or ref "${Q}"`);
      } else Y = this.compile(Q);
      let $ = Y(X);
      if (!("$async" in Y)) this.errors = Y.errors;
      return $;
    }
    compile(Q, X) {
      let Y = this._addSchema(Q, X);
      return Y.validate || this._compileSchemaEnv(Y);
    }
    compileAsync(Q, X) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let { loadSchema: Y } = this.opts;
      return $.call(this, Q, X);
      async function $(z2, K) {
        await J.call(this, z2.$schema);
        let U = this._addSchema(z2, K);
        return U.validate || W.call(this, U);
      }
      async function J(z2) {
        if (z2 && !this.getSchema(z2)) await $.call(this, { $ref: z2 }, true);
      }
      async function W(z2) {
        try {
          return this._compileSchemaEnv(z2);
        } catch (K) {
          if (!(K instanceof IB.default)) throw K;
          return G.call(this, K), await H.call(this, K.missingSchema), W.call(this, z2);
        }
      }
      function G({ missingSchema: z2, missingRef: K }) {
        if (this.refs[z2]) throw Error(`AnySchema ${z2} is loaded but ${K} cannot be resolved`);
      }
      async function H(z2) {
        let K = await B.call(this, z2);
        if (!this.refs[z2]) await J.call(this, K.$schema);
        if (!this.refs[z2]) this.addSchema(K, z2, X);
      }
      async function B(z2) {
        let K = this._loading[z2];
        if (K) return K;
        try {
          return await (this._loading[z2] = Y(z2));
        } finally {
          delete this._loading[z2];
        }
      }
    }
    addSchema(Q, X, Y, $ = this.opts.validateSchema) {
      if (Array.isArray(Q)) {
        for (let W of Q) this.addSchema(W, void 0, Y, $);
        return this;
      }
      let J;
      if (typeof Q === "object") {
        let { schemaId: W } = this.opts;
        if (J = Q[W], J !== void 0 && typeof J != "string") throw Error(`schema ${W} must be string`);
      }
      return X = (0, _4.normalizeId)(X || J), this._checkUnique(X), this.schemas[X] = this._addSchema(Q, Y, X, $, true), this;
    }
    addMetaSchema(Q, X, Y = this.opts.validateSchema) {
      return this.addSchema(Q, X, true, Y), this;
    }
    validateSchema(Q, X) {
      if (typeof Q == "boolean") return true;
      let Y;
      if (Y = Q.$schema, Y !== void 0 && typeof Y != "string") throw Error("$schema must be a string");
      if (Y = Y || this.opts.defaultMeta || this.defaultMeta(), !Y) return this.logger.warn("meta-schema not available"), this.errors = null, true;
      let $ = this.validate(Y, Q);
      if (!$ && X) {
        let J = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(J);
        else throw Error(J);
      }
      return $;
    }
    getSchema(Q) {
      let X;
      while (typeof (X = RB.call(this, Q)) == "string") Q = X;
      if (X === void 0) {
        let { schemaId: Y } = this.opts, $ = new S4.SchemaEnv({ schema: {}, schemaId: Y });
        if (X = S4.resolveSchema.call(this, $, Q), !X) return;
        this.refs[Q] = X;
      }
      return X.validate || this._compileSchemaEnv(X);
    }
    removeSchema(Q) {
      if (Q instanceof RegExp) return this._removeAllSchemas(this.schemas, Q), this._removeAllSchemas(this.refs, Q), this;
      switch (typeof Q) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          let X = RB.call(this, Q);
          if (typeof X == "object") this._cache.delete(X.schema);
          return delete this.schemas[Q], delete this.refs[Q], this;
        }
        case "object": {
          let X = Q;
          this._cache.delete(X);
          let Y = Q[this.opts.schemaId];
          if (Y) Y = (0, _4.normalizeId)(Y), delete this.schemas[Y], delete this.refs[Y];
          return this;
        }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(Q) {
      for (let X of Q) this.addKeyword(X);
      return this;
    }
    addKeyword(Q, X) {
      let Y;
      if (typeof Q == "string") {
        if (Y = Q, typeof X == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), X.keyword = Y;
      } else if (typeof Q == "object" && X === void 0) {
        if (X = Q, Y = X.keyword, Array.isArray(Y) && !Y.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (vR.call(this, Y, X), !X) return (0, O7.eachItem)(Y, (J) => N7.call(this, J)), this;
      xR.call(this, X);
      let $ = { ...X, type: (0, OQ.getJSONTypes)(X.type), schemaType: (0, OQ.getJSONTypes)(X.schemaType) };
      return (0, O7.eachItem)(Y, $.type.length === 0 ? (J) => N7.call(this, J, $) : (J) => $.type.forEach((W) => N7.call(this, J, $, W))), this;
    }
    getKeyword(Q) {
      let X = this.RULES.all[Q];
      return typeof X == "object" ? X.definition : !!X;
    }
    removeKeyword(Q) {
      let { RULES: X } = this;
      delete X.keywords[Q], delete X.all[Q];
      for (let Y of X.rules) {
        let $ = Y.rules.findIndex((J) => J.keyword === Q);
        if ($ >= 0) Y.rules.splice($, 1);
      }
      return this;
    }
    addFormat(Q, X) {
      if (typeof X == "string") X = new RegExp(X);
      return this.formats[Q] = X, this;
    }
    errorsText(Q = this.errors, { separator: X = ", ", dataVar: Y = "data" } = {}) {
      if (!Q || Q.length === 0) return "No errors";
      return Q.map(($) => `${Y}${$.instancePath} ${$.message}`).reduce(($, J) => $ + X + J);
    }
    $dataMetaSchema(Q, X) {
      let Y = this.RULES.all;
      Q = JSON.parse(JSON.stringify(Q));
      for (let $ of X) {
        let J = $.split("/").slice(1), W = Q;
        for (let G of J) W = W[G];
        for (let G in Y) {
          let H = Y[G];
          if (typeof H != "object") continue;
          let { $data: B } = H.definition, z2 = W[G];
          if (B && z2) W[G] = EB(z2);
        }
      }
      return Q;
    }
    _removeAllSchemas(Q, X) {
      for (let Y in Q) {
        let $ = Q[Y];
        if (!X || X.test(Y)) {
          if (typeof $ == "string") delete Q[Y];
          else if ($ && !$.meta) this._cache.delete($.schema), delete Q[Y];
        }
      }
    }
    _addSchema(Q, X, Y, $ = this.opts.validateSchema, J = this.opts.addUsedSchema) {
      let W, { schemaId: G } = this.opts;
      if (typeof Q == "object") W = Q[G];
      else if (this.opts.jtd) throw Error("schema must be object");
      else if (typeof Q != "boolean") throw Error("schema must be object or boolean");
      let H = this._cache.get(Q);
      if (H !== void 0) return H;
      Y = (0, _4.normalizeId)(W || Y);
      let B = _4.getSchemaRefs.call(this, Q, Y);
      if (H = new S4.SchemaEnv({ schema: Q, schemaId: G, meta: X, baseId: Y, localRefs: B }), this._cache.set(H.schema, H), J && !Y.startsWith("#")) {
        if (Y) this._checkUnique(Y);
        this.refs[Y] = H;
      }
      if ($) this.validateSchema(Q, true);
      return H;
    }
    _checkUnique(Q) {
      if (this.schemas[Q] || this.refs[Q]) throw Error(`schema with key or id "${Q}" already exists`);
    }
    _compileSchemaEnv(Q) {
      if (Q.meta) this._compileMetaSchema(Q);
      else S4.compileSchema.call(this, Q);
      if (!Q.validate) throw Error("ajv implementation error");
      return Q.validate;
    }
    _compileMetaSchema(Q) {
      let X = this.opts;
      this.opts = this._metaOpts;
      try {
        S4.compileSchema.call(this, Q);
      } finally {
        this.opts = X;
      }
    }
  }
  DQ.ValidationError = OR.default;
  DQ.MissingRefError = IB.default;
  x1.default = DQ;
  function jB(Q, X, Y, $ = "error") {
    for (let J in Q) {
      let W = J;
      if (W in X) this.logger[$](`${Y}: option ${J}. ${Q[W]}`);
    }
  }
  function RB(Q) {
    return Q = (0, _4.normalizeId)(Q), this.schemas[Q] || this.refs[Q];
  }
  function ER() {
    let Q = this.opts.schemas;
    if (!Q) return;
    if (Array.isArray(Q)) this.addSchema(Q);
    else for (let X in Q) this.addSchema(Q[X], X);
  }
  function PR() {
    for (let Q in this.opts.formats) {
      let X = this.opts.formats[Q];
      if (X) this.addFormat(Q, X);
    }
  }
  function ZR(Q) {
    if (Array.isArray(Q)) {
      this.addVocabulary(Q);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let X in Q) {
      let Y = Q[X];
      if (!Y.keyword) Y.keyword = X;
      this.addKeyword(Y);
    }
  }
  function CR() {
    let Q = { ...this.opts };
    for (let X of AR) delete Q[X];
    return Q;
  }
  var SR = { log() {
  }, warn() {
  }, error() {
  } };
  function _R(Q) {
    if (Q === false) return SR;
    if (Q === void 0) return console;
    if (Q.log && Q.warn && Q.error) return Q;
    throw Error("logger must implement log, warn and error methods");
  }
  var kR = /^[a-z_$][a-z0-9_$:-]*$/i;
  function vR(Q, X) {
    let { RULES: Y } = this;
    if ((0, O7.eachItem)(Q, ($) => {
      if (Y.keywords[$]) throw Error(`Keyword ${$} is already defined`);
      if (!kR.test($)) throw Error(`Keyword ${$} has invalid name`);
    }), !X) return;
    if (X.$data && !("code" in X || "validate" in X)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function N7(Q, X, Y) {
    var $;
    let J = X === null || X === void 0 ? void 0 : X.post;
    if (Y && J) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: W } = this, G = J ? W.post : W.rules.find(({ type: B }) => B === Y);
    if (!G) G = { type: Y, rules: [] }, W.rules.push(G);
    if (W.keywords[Q] = true, !X) return;
    let H = { keyword: Q, definition: { ...X, type: (0, OQ.getJSONTypes)(X.type), schemaType: (0, OQ.getJSONTypes)(X.schemaType) } };
    if (X.before) TR.call(this, G, H, X.before);
    else G.rules.push(H);
    W.all[Q] = H, ($ = X.implements) === null || $ === void 0 || $.forEach((B) => this.addKeyword(B));
  }
  function TR(Q, X, Y) {
    let $ = Q.rules.findIndex((J) => J.keyword === Y);
    if ($ >= 0) Q.rules.splice($, 0, X);
    else Q.rules.push(X), this.logger.warn(`rule ${Y} is not defined`);
  }
  function xR(Q) {
    let { metaSchema: X } = Q;
    if (X === void 0) return;
    if (Q.$data && this.opts.$data) X = EB(X);
    Q.validateSchema = this.compile(X, true);
  }
  var yR = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function EB(Q) {
    return { anyOf: [Q, yR] };
  }
});
var CB = E((ZB) => {
  Object.defineProperty(ZB, "__esModule", { value: true });
  var fR = { keyword: "id", code() {
    throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  } };
  ZB.default = fR;
});
var xB = E((vB) => {
  Object.defineProperty(vB, "__esModule", { value: true });
  vB.callRef = vB.getValidate = void 0;
  var mR = P4(), SB = e0(), f0 = c(), E9 = k1(), _B = UQ(), MQ = a(), lR = { keyword: "$ref", schemaType: "string", code(Q) {
    let { gen: X, schema: Y, it: $ } = Q, { baseId: J, schemaEnv: W, validateName: G, opts: H, self: B } = $, { root: z2 } = W;
    if ((Y === "#" || Y === "#/") && J === z2.baseId) return U();
    let K = _B.resolveRef.call(B, z2, J, Y);
    if (K === void 0) throw new mR.default($.opts.uriResolver, J, Y);
    if (K instanceof _B.SchemaEnv) return q(K);
    return V(K);
    function U() {
      if (W === z2) return wQ(Q, G, W, W.$async);
      let L = X.scopeValue("root", { ref: z2 });
      return wQ(Q, f0._`${L}.validate`, z2, z2.$async);
    }
    function q(L) {
      let F = kB(Q, L);
      wQ(Q, F, L, L.$async);
    }
    function V(L) {
      let F = X.scopeValue("schema", H.code.source === true ? { ref: L, code: (0, f0.stringify)(L) } : { ref: L }), M = X.name("valid"), O = Q.subschema({ schema: L, dataTypes: [], schemaPath: f0.nil, topSchemaRef: F, errSchemaPath: Y }, M);
      Q.mergeEvaluated(O), Q.ok(M);
    }
  } };
  function kB(Q, X) {
    let { gen: Y } = Q;
    return X.validate ? Y.scopeValue("validate", { ref: X.validate }) : f0._`${Y.scopeValue("wrapper", { ref: X })}.validate`;
  }
  vB.getValidate = kB;
  function wQ(Q, X, Y, $) {
    let { gen: J, it: W } = Q, { allErrors: G, schemaEnv: H, opts: B } = W, z2 = B.passContext ? E9.default.this : f0.nil;
    if ($) K();
    else U();
    function K() {
      if (!H.$async) throw Error("async schema referenced by sync schema");
      let L = J.let("valid");
      J.try(() => {
        if (J.code(f0._`await ${(0, SB.callValidateCode)(Q, X, z2)}`), V(X), !G) J.assign(L, true);
      }, (F) => {
        if (J.if(f0._`!(${F} instanceof ${W.ValidationError})`, () => J.throw(F)), q(F), !G) J.assign(L, false);
      }), Q.ok(L);
    }
    function U() {
      Q.result((0, SB.callValidateCode)(Q, X, z2), () => V(X), () => q(X));
    }
    function q(L) {
      let F = f0._`${L}.errors`;
      J.assign(E9.default.vErrors, f0._`${E9.default.vErrors} === null ? ${F} : ${E9.default.vErrors}.concat(${F})`), J.assign(E9.default.errors, f0._`${E9.default.vErrors}.length`);
    }
    function V(L) {
      var F;
      if (!W.opts.unevaluated) return;
      let M = (F = Y === null || Y === void 0 ? void 0 : Y.validate) === null || F === void 0 ? void 0 : F.evaluated;
      if (W.props !== true) if (M && !M.dynamicProps) {
        if (M.props !== void 0) W.props = MQ.mergeEvaluated.props(J, M.props, W.props);
      } else {
        let O = J.var("props", f0._`${L}.evaluated.props`);
        W.props = MQ.mergeEvaluated.props(J, O, W.props, f0.Name);
      }
      if (W.items !== true) if (M && !M.dynamicItems) {
        if (M.items !== void 0) W.items = MQ.mergeEvaluated.items(J, M.items, W.items);
      } else {
        let O = J.var("items", f0._`${L}.evaluated.items`);
        W.items = MQ.mergeEvaluated.items(J, O, W.items, f0.Name);
      }
    }
  }
  vB.callRef = wQ;
  vB.default = lR;
});
var gB = E((yB) => {
  Object.defineProperty(yB, "__esModule", { value: true });
  var dR = CB(), iR = xB(), nR = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", dR.default, iR.default];
  yB.default = nR;
});
var fB = E((hB) => {
  Object.defineProperty(hB, "__esModule", { value: true });
  var AQ = c(), W6 = AQ.operators, jQ = { maximum: { okStr: "<=", ok: W6.LTE, fail: W6.GT }, minimum: { okStr: ">=", ok: W6.GTE, fail: W6.LT }, exclusiveMaximum: { okStr: "<", ok: W6.LT, fail: W6.GTE }, exclusiveMinimum: { okStr: ">", ok: W6.GT, fail: W6.LTE } }, rR = { message: ({ keyword: Q, schemaCode: X }) => AQ.str`must be ${jQ[Q].okStr} ${X}`, params: ({ keyword: Q, schemaCode: X }) => AQ._`{comparison: ${jQ[Q].okStr}, limit: ${X}}` }, tR = { keyword: Object.keys(jQ), type: "number", schemaType: "number", $data: true, error: rR, code(Q) {
    let { keyword: X, data: Y, schemaCode: $ } = Q;
    Q.fail$data(AQ._`${Y} ${jQ[X].fail} ${$} || isNaN(${Y})`);
  } };
  hB.default = tR;
});
var mB = E((uB) => {
  Object.defineProperty(uB, "__esModule", { value: true });
  var k4 = c(), sR = { message: ({ schemaCode: Q }) => k4.str`must be multiple of ${Q}`, params: ({ schemaCode: Q }) => k4._`{multipleOf: ${Q}}` }, eR = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: sR, code(Q) {
    let { gen: X, data: Y, schemaCode: $, it: J } = Q, W = J.opts.multipleOfPrecision, G = X.let("res"), H = W ? k4._`Math.abs(Math.round(${G}) - ${G}) > 1e-${W}` : k4._`${G} !== parseInt(${G})`;
    Q.fail$data(k4._`(${$} === 0 || (${G} = ${Y}/${$}, ${H}))`);
  } };
  uB.default = eR;
});
var pB = E((cB) => {
  Object.defineProperty(cB, "__esModule", { value: true });
  function lB(Q) {
    let X = Q.length, Y = 0, $ = 0, J;
    while ($ < X) if (Y++, J = Q.charCodeAt($++), J >= 55296 && J <= 56319 && $ < X) {
      if (J = Q.charCodeAt($), (J & 64512) === 56320) $++;
    }
    return Y;
  }
  cB.default = lB;
  lB.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var iB = E((dB) => {
  Object.defineProperty(dB, "__esModule", { value: true });
  var S6 = c(), Y2 = a(), $2 = pB(), J2 = { message({ keyword: Q, schemaCode: X }) {
    let Y = Q === "maxLength" ? "more" : "fewer";
    return S6.str`must NOT have ${Y} than ${X} characters`;
  }, params: ({ schemaCode: Q }) => S6._`{limit: ${Q}}` }, W2 = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: J2, code(Q) {
    let { keyword: X, data: Y, schemaCode: $, it: J } = Q, W = X === "maxLength" ? S6.operators.GT : S6.operators.LT, G = J.opts.unicode === false ? S6._`${Y}.length` : S6._`${(0, Y2.useFunc)(Q.gen, $2.default)}(${Y})`;
    Q.fail$data(S6._`${G} ${W} ${$}`);
  } };
  dB.default = W2;
});
var oB = E((nB) => {
  Object.defineProperty(nB, "__esModule", { value: true });
  var H2 = e0(), RQ = c(), B2 = { message: ({ schemaCode: Q }) => RQ.str`must match pattern "${Q}"`, params: ({ schemaCode: Q }) => RQ._`{pattern: ${Q}}` }, z2 = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: B2, code(Q) {
    let { data: X, $data: Y, schema: $, schemaCode: J, it: W } = Q, G = W.opts.unicodeRegExp ? "u" : "", H = Y ? RQ._`(new RegExp(${J}, ${G}))` : (0, H2.usePattern)(Q, $);
    Q.fail$data(RQ._`!${H}.test(${X})`);
  } };
  nB.default = z2;
});
var tB = E((rB) => {
  Object.defineProperty(rB, "__esModule", { value: true });
  var v4 = c(), V2 = { message({ keyword: Q, schemaCode: X }) {
    let Y = Q === "maxProperties" ? "more" : "fewer";
    return v4.str`must NOT have ${Y} than ${X} properties`;
  }, params: ({ schemaCode: Q }) => v4._`{limit: ${Q}}` }, q2 = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: V2, code(Q) {
    let { keyword: X, data: Y, schemaCode: $ } = Q, J = X === "maxProperties" ? v4.operators.GT : v4.operators.LT;
    Q.fail$data(v4._`Object.keys(${Y}).length ${J} ${$}`);
  } };
  rB.default = q2;
});
var sB = E((aB) => {
  Object.defineProperty(aB, "__esModule", { value: true });
  var T4 = e0(), x4 = c(), L2 = a(), F2 = { message: ({ params: { missingProperty: Q } }) => x4.str`must have required property '${Q}'`, params: ({ params: { missingProperty: Q } }) => x4._`{missingProperty: ${Q}}` }, N2 = { keyword: "required", type: "object", schemaType: "array", $data: true, error: F2, code(Q) {
    let { gen: X, schema: Y, schemaCode: $, data: J, $data: W, it: G } = Q, { opts: H } = G;
    if (!W && Y.length === 0) return;
    let B = Y.length >= H.loopRequired;
    if (G.allErrors) z2();
    else K();
    if (H.strictRequired) {
      let V = Q.parentSchema.properties, { definedProperties: L } = Q.it;
      for (let F of Y) if ((V === null || V === void 0 ? void 0 : V[F]) === void 0 && !L.has(F)) {
        let M = G.schemaEnv.baseId + G.errSchemaPath, O = `required property "${F}" is not defined at "${M}" (strictRequired)`;
        (0, L2.checkStrictMode)(G, O, G.opts.strictRequired);
      }
    }
    function z2() {
      if (B || W) Q.block$data(x4.nil, U);
      else for (let V of Y) (0, T4.checkReportMissingProp)(Q, V);
    }
    function K() {
      let V = X.let("missing");
      if (B || W) {
        let L = X.let("valid", true);
        Q.block$data(L, () => q(V, L)), Q.ok(L);
      } else X.if((0, T4.checkMissingProp)(Q, Y, V)), (0, T4.reportMissingProp)(Q, V), X.else();
    }
    function U() {
      X.forOf("prop", $, (V) => {
        Q.setParams({ missingProperty: V }), X.if((0, T4.noPropertyInData)(X, J, V, H.ownProperties), () => Q.error());
      });
    }
    function q(V, L) {
      Q.setParams({ missingProperty: V }), X.forOf(V, $, () => {
        X.assign(L, (0, T4.propertyInData)(X, J, V, H.ownProperties)), X.if((0, x4.not)(L), () => {
          Q.error(), X.break();
        });
      }, x4.nil);
    }
  } };
  aB.default = N2;
});
var Qz = E((eB) => {
  Object.defineProperty(eB, "__esModule", { value: true });
  var y4 = c(), D2 = { message({ keyword: Q, schemaCode: X }) {
    let Y = Q === "maxItems" ? "more" : "fewer";
    return y4.str`must NOT have ${Y} than ${X} items`;
  }, params: ({ schemaCode: Q }) => y4._`{limit: ${Q}}` }, M2 = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: D2, code(Q) {
    let { keyword: X, data: Y, schemaCode: $ } = Q, J = X === "maxItems" ? y4.operators.GT : y4.operators.LT;
    Q.fail$data(y4._`${Y}.length ${J} ${$}`);
  } };
  eB.default = M2;
});
var IQ = E((Yz) => {
  Object.defineProperty(Yz, "__esModule", { value: true });
  var Xz = $7();
  Xz.code = 'require("ajv/dist/runtime/equal").default';
  Yz.default = Xz;
});
var Jz = E(($z) => {
  Object.defineProperty($z, "__esModule", { value: true });
  var D7 = j4(), E0 = c(), j2 = a(), R2 = IQ(), I2 = { message: ({ params: { i: Q, j: X } }) => E0.str`must NOT have duplicate items (items ## ${X} and ${Q} are identical)`, params: ({ params: { i: Q, j: X } }) => E0._`{i: ${Q}, j: ${X}}` }, b2 = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: I2, code(Q) {
    let { gen: X, data: Y, $data: $, schema: J, parentSchema: W, schemaCode: G, it: H } = Q;
    if (!$ && !J) return;
    let B = X.let("valid"), z2 = W.items ? (0, D7.getSchemaTypes)(W.items) : [];
    Q.block$data(B, K, E0._`${G} === false`), Q.ok(B);
    function K() {
      let L = X.let("i", E0._`${Y}.length`), F = X.let("j");
      Q.setParams({ i: L, j: F }), X.assign(B, true), X.if(E0._`${L} > 1`, () => (U() ? q : V)(L, F));
    }
    function U() {
      return z2.length > 0 && !z2.some((L) => L === "object" || L === "array");
    }
    function q(L, F) {
      let M = X.name("item"), O = (0, D7.checkDataTypes)(z2, M, H.opts.strictNumbers, D7.DataType.Wrong), A = X.const("indices", E0._`{}`);
      X.for(E0._`;${L}--;`, () => {
        if (X.let(M, E0._`${Y}[${L}]`), X.if(O, E0._`continue`), z2.length > 1) X.if(E0._`typeof ${M} == "string"`, E0._`${M} += "_"`);
        X.if(E0._`typeof ${A}[${M}] == "number"`, () => {
          X.assign(F, E0._`${A}[${M}]`), Q.error(), X.assign(B, false).break();
        }).code(E0._`${A}[${M}] = ${L}`);
      });
    }
    function V(L, F) {
      let M = (0, j2.useFunc)(X, R2.default), O = X.name("outer");
      X.label(O).for(E0._`;${L}--;`, () => X.for(E0._`${F} = ${L}; ${F}--;`, () => X.if(E0._`${M}(${Y}[${L}], ${Y}[${F}])`, () => {
        Q.error(), X.assign(B, false).break(O);
      })));
    }
  } };
  $z.default = b2;
});
var Gz = E((Wz) => {
  Object.defineProperty(Wz, "__esModule", { value: true });
  var M7 = c(), P2 = a(), Z2 = IQ(), C2 = { message: "must be equal to constant", params: ({ schemaCode: Q }) => M7._`{allowedValue: ${Q}}` }, S2 = { keyword: "const", $data: true, error: C2, code(Q) {
    let { gen: X, data: Y, $data: $, schemaCode: J, schema: W } = Q;
    if ($ || W && typeof W == "object") Q.fail$data(M7._`!${(0, P2.useFunc)(X, Z2.default)}(${Y}, ${J})`);
    else Q.fail(M7._`${W} !== ${Y}`);
  } };
  Wz.default = S2;
});
var Bz = E((Hz) => {
  Object.defineProperty(Hz, "__esModule", { value: true });
  var g4 = c(), k2 = a(), v2 = IQ(), T2 = { message: "must be equal to one of the allowed values", params: ({ schemaCode: Q }) => g4._`{allowedValues: ${Q}}` }, x2 = { keyword: "enum", schemaType: "array", $data: true, error: T2, code(Q) {
    let { gen: X, data: Y, $data: $, schema: J, schemaCode: W, it: G } = Q;
    if (!$ && J.length === 0) throw Error("enum must have non-empty array");
    let H = J.length >= G.opts.loopEnum, B, z2 = () => B !== null && B !== void 0 ? B : B = (0, k2.useFunc)(X, v2.default), K;
    if (H || $) K = X.let("valid"), Q.block$data(K, U);
    else {
      if (!Array.isArray(J)) throw Error("ajv implementation error");
      let V = X.const("vSchema", W);
      K = (0, g4.or)(...J.map((L, F) => q(V, F)));
    }
    Q.pass(K);
    function U() {
      X.assign(K, false), X.forOf("v", W, (V) => X.if(g4._`${z2()}(${Y}, ${V})`, () => X.assign(K, true).break()));
    }
    function q(V, L) {
      let F = J[L];
      return typeof F === "object" && F !== null ? g4._`${z2()}(${Y}, ${V}[${L}])` : g4._`${Y} === ${F}`;
    }
  } };
  Hz.default = x2;
});
var Kz = E((zz) => {
  Object.defineProperty(zz, "__esModule", { value: true });
  var g2 = fB(), h2 = mB(), f2 = iB(), u2 = oB(), m2 = tB(), l2 = sB(), c2 = Qz(), p2 = Jz(), d2 = Gz(), i2 = Bz(), n2 = [g2.default, h2.default, f2.default, u2.default, m2.default, l2.default, c2.default, p2.default, { keyword: "type", schemaType: ["string", "array"] }, { keyword: "nullable", schemaType: "boolean" }, d2.default, i2.default];
  zz.default = n2;
});
var A7 = E((qz) => {
  Object.defineProperty(qz, "__esModule", { value: true });
  qz.validateAdditionalItems = void 0;
  var _6 = c(), w7 = a(), r2 = { message: ({ params: { len: Q } }) => _6.str`must NOT have more than ${Q} items`, params: ({ params: { len: Q } }) => _6._`{limit: ${Q}}` }, t2 = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: r2, code(Q) {
    let { parentSchema: X, it: Y } = Q, { items: $ } = X;
    if (!Array.isArray($)) {
      (0, w7.checkStrictMode)(Y, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    Vz(Q, $);
  } };
  function Vz(Q, X) {
    let { gen: Y, schema: $, data: J, keyword: W, it: G } = Q;
    G.items = true;
    let H = Y.const("len", _6._`${J}.length`);
    if ($ === false) Q.setParams({ len: X.length }), Q.pass(_6._`${H} <= ${X.length}`);
    else if (typeof $ == "object" && !(0, w7.alwaysValidSchema)(G, $)) {
      let z2 = Y.var("valid", _6._`${H} <= ${X.length}`);
      Y.if((0, _6.not)(z2), () => B(z2)), Q.ok(z2);
    }
    function B(z2) {
      Y.forRange("i", X.length, H, (K) => {
        if (Q.subschema({ keyword: W, dataProp: K, dataPropType: w7.Type.Num }, z2), !G.allErrors) Y.if((0, _6.not)(z2), () => Y.break());
      });
    }
  }
  qz.validateAdditionalItems = Vz;
  qz.default = t2;
});
var j7 = E((Nz) => {
  Object.defineProperty(Nz, "__esModule", { value: true });
  Nz.validateTuple = void 0;
  var Lz = c(), bQ = a(), s2 = e0(), e2 = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(Q) {
    let { schema: X, it: Y } = Q;
    if (Array.isArray(X)) return Fz(Q, "additionalItems", X);
    if (Y.items = true, (0, bQ.alwaysValidSchema)(Y, X)) return;
    Q.ok((0, s2.validateArray)(Q));
  } };
  function Fz(Q, X, Y = Q.schema) {
    let { gen: $, parentSchema: J, data: W, keyword: G, it: H } = Q;
    if (K(J), H.opts.unevaluated && Y.length && H.items !== true) H.items = bQ.mergeEvaluated.items($, Y.length, H.items);
    let B = $.name("valid"), z2 = $.const("len", Lz._`${W}.length`);
    Y.forEach((U, q) => {
      if ((0, bQ.alwaysValidSchema)(H, U)) return;
      $.if(Lz._`${z2} > ${q}`, () => Q.subschema({ keyword: G, schemaProp: q, dataProp: q }, B)), Q.ok(B);
    });
    function K(U) {
      let { opts: q, errSchemaPath: V } = H, L = Y.length, F = L === U.minItems && (L === U.maxItems || U[X] === false);
      if (q.strictTuples && !F) {
        let M = `"${G}" is ${L}-tuple, but minItems or maxItems/${X} are not specified or different at path "${V}"`;
        (0, bQ.checkStrictMode)(H, M, q.strictTuples);
      }
    }
  }
  Nz.validateTuple = Fz;
  Nz.default = e2;
});
var Mz = E((Dz) => {
  Object.defineProperty(Dz, "__esModule", { value: true });
  var XI = j7(), YI = { keyword: "prefixItems", type: "array", schemaType: ["array"], before: "uniqueItems", code: (Q) => (0, XI.validateTuple)(Q, "items") };
  Dz.default = YI;
});
var jz = E((Az) => {
  Object.defineProperty(Az, "__esModule", { value: true });
  var wz = c(), JI = a(), WI = e0(), GI = A7(), HI = { message: ({ params: { len: Q } }) => wz.str`must NOT have more than ${Q} items`, params: ({ params: { len: Q } }) => wz._`{limit: ${Q}}` }, BI = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: HI, code(Q) {
    let { schema: X, parentSchema: Y, it: $ } = Q, { prefixItems: J } = Y;
    if ($.items = true, (0, JI.alwaysValidSchema)($, X)) return;
    if (J) (0, GI.validateAdditionalItems)(Q, J);
    else Q.ok((0, WI.validateArray)(Q));
  } };
  Az.default = BI;
});
var Iz = E((Rz) => {
  Object.defineProperty(Rz, "__esModule", { value: true });
  var Q1 = c(), EQ = a(), KI = { message: ({ params: { min: Q, max: X } }) => X === void 0 ? Q1.str`must contain at least ${Q} valid item(s)` : Q1.str`must contain at least ${Q} and no more than ${X} valid item(s)`, params: ({ params: { min: Q, max: X } }) => X === void 0 ? Q1._`{minContains: ${Q}}` : Q1._`{minContains: ${Q}, maxContains: ${X}}` }, VI = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: KI, code(Q) {
    let { gen: X, schema: Y, parentSchema: $, data: J, it: W } = Q, G, H, { minContains: B, maxContains: z2 } = $;
    if (W.opts.next) G = B === void 0 ? 1 : B, H = z2;
    else G = 1;
    let K = X.const("len", Q1._`${J}.length`);
    if (Q.setParams({ min: G, max: H }), H === void 0 && G === 0) {
      (0, EQ.checkStrictMode)(W, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (H !== void 0 && G > H) {
      (0, EQ.checkStrictMode)(W, '"minContains" > "maxContains" is always invalid'), Q.fail();
      return;
    }
    if ((0, EQ.alwaysValidSchema)(W, Y)) {
      let F = Q1._`${K} >= ${G}`;
      if (H !== void 0) F = Q1._`${F} && ${K} <= ${H}`;
      Q.pass(F);
      return;
    }
    W.items = true;
    let U = X.name("valid");
    if (H === void 0 && G === 1) V(U, () => X.if(U, () => X.break()));
    else if (G === 0) {
      if (X.let(U, true), H !== void 0) X.if(Q1._`${J}.length > 0`, q);
    } else X.let(U, false), q();
    Q.result(U, () => Q.reset());
    function q() {
      let F = X.name("_valid"), M = X.let("count", 0);
      V(F, () => X.if(F, () => L(M)));
    }
    function V(F, M) {
      X.forRange("i", 0, K, (O) => {
        Q.subschema({ keyword: "contains", dataProp: O, dataPropType: EQ.Type.Num, compositeRule: true }, F), M();
      });
    }
    function L(F) {
      if (X.code(Q1._`${F}++`), H === void 0) X.if(Q1._`${F} >= ${G}`, () => X.assign(U, true).break());
      else if (X.if(Q1._`${F} > ${H}`, () => X.assign(U, false).break()), G === 1) X.assign(U, true);
      else X.if(Q1._`${F} >= ${G}`, () => X.assign(U, true));
    }
  } };
  Rz.default = VI;
});
var Sz = E((Pz) => {
  Object.defineProperty(Pz, "__esModule", { value: true });
  Pz.validateSchemaDeps = Pz.validatePropertyDeps = Pz.error = void 0;
  var R7 = c(), UI = a(), h4 = e0();
  Pz.error = { message: ({ params: { property: Q, depsCount: X, deps: Y } }) => {
    let $ = X === 1 ? "property" : "properties";
    return R7.str`must have ${$} ${Y} when property ${Q} is present`;
  }, params: ({ params: { property: Q, depsCount: X, deps: Y, missingProperty: $ } }) => R7._`{property: ${Q},
    missingProperty: ${$},
    depsCount: ${X},
    deps: ${Y}}` };
  var LI = { keyword: "dependencies", type: "object", schemaType: "object", error: Pz.error, code(Q) {
    let [X, Y] = FI(Q);
    bz(Q, X), Ez(Q, Y);
  } };
  function FI({ schema: Q }) {
    let X = {}, Y = {};
    for (let $ in Q) {
      if ($ === "__proto__") continue;
      let J = Array.isArray(Q[$]) ? X : Y;
      J[$] = Q[$];
    }
    return [X, Y];
  }
  function bz(Q, X = Q.schema) {
    let { gen: Y, data: $, it: J } = Q;
    if (Object.keys(X).length === 0) return;
    let W = Y.let("missing");
    for (let G in X) {
      let H = X[G];
      if (H.length === 0) continue;
      let B = (0, h4.propertyInData)(Y, $, G, J.opts.ownProperties);
      if (Q.setParams({ property: G, depsCount: H.length, deps: H.join(", ") }), J.allErrors) Y.if(B, () => {
        for (let z2 of H) (0, h4.checkReportMissingProp)(Q, z2);
      });
      else Y.if(R7._`${B} && (${(0, h4.checkMissingProp)(Q, H, W)})`), (0, h4.reportMissingProp)(Q, W), Y.else();
    }
  }
  Pz.validatePropertyDeps = bz;
  function Ez(Q, X = Q.schema) {
    let { gen: Y, data: $, keyword: J, it: W } = Q, G = Y.name("valid");
    for (let H in X) {
      if ((0, UI.alwaysValidSchema)(W, X[H])) continue;
      Y.if((0, h4.propertyInData)(Y, $, H, W.opts.ownProperties), () => {
        let B = Q.subschema({ keyword: J, schemaProp: H }, G);
        Q.mergeValidEvaluated(B, G);
      }, () => Y.var(G, true)), Q.ok(G);
    }
  }
  Pz.validateSchemaDeps = Ez;
  Pz.default = LI;
});
var vz = E((kz) => {
  Object.defineProperty(kz, "__esModule", { value: true });
  var _z = c(), DI = a(), MI = { message: "property name must be valid", params: ({ params: Q }) => _z._`{propertyName: ${Q.propertyName}}` }, wI = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: MI, code(Q) {
    let { gen: X, schema: Y, data: $, it: J } = Q;
    if ((0, DI.alwaysValidSchema)(J, Y)) return;
    let W = X.name("valid");
    X.forIn("key", $, (G) => {
      Q.setParams({ propertyName: G }), Q.subschema({ keyword: "propertyNames", data: G, dataTypes: ["string"], propertyName: G, compositeRule: true }, W), X.if((0, _z.not)(W), () => {
        if (Q.error(true), !J.allErrors) X.break();
      });
    }), Q.ok(W);
  } };
  kz.default = wI;
});
var I7 = E((Tz) => {
  Object.defineProperty(Tz, "__esModule", { value: true });
  var PQ = e0(), U1 = c(), jI = k1(), ZQ = a(), RI = { message: "must NOT have additional properties", params: ({ params: Q }) => U1._`{additionalProperty: ${Q.additionalProperty}}` }, II = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: RI, code(Q) {
    let { gen: X, schema: Y, parentSchema: $, data: J, errsCount: W, it: G } = Q;
    if (!W) throw Error("ajv implementation error");
    let { allErrors: H, opts: B } = G;
    if (G.props = true, B.removeAdditional !== "all" && (0, ZQ.alwaysValidSchema)(G, Y)) return;
    let z2 = (0, PQ.allSchemaProperties)($.properties), K = (0, PQ.allSchemaProperties)($.patternProperties);
    U(), Q.ok(U1._`${W} === ${jI.default.errors}`);
    function U() {
      X.forIn("key", J, (M) => {
        if (!z2.length && !K.length) L(M);
        else X.if(q(M), () => L(M));
      });
    }
    function q(M) {
      let O;
      if (z2.length > 8) {
        let A = (0, ZQ.schemaRefOrVal)(G, $.properties, "properties");
        O = (0, PQ.isOwnProperty)(X, A, M);
      } else if (z2.length) O = (0, U1.or)(...z2.map((A) => U1._`${M} === ${A}`));
      else O = U1.nil;
      if (K.length) O = (0, U1.or)(O, ...K.map((A) => U1._`${(0, PQ.usePattern)(Q, A)}.test(${M})`));
      return (0, U1.not)(O);
    }
    function V(M) {
      X.code(U1._`delete ${J}[${M}]`);
    }
    function L(M) {
      if (B.removeAdditional === "all" || B.removeAdditional && Y === false) {
        V(M);
        return;
      }
      if (Y === false) {
        if (Q.setParams({ additionalProperty: M }), Q.error(), !H) X.break();
        return;
      }
      if (typeof Y == "object" && !(0, ZQ.alwaysValidSchema)(G, Y)) {
        let O = X.name("valid");
        if (B.removeAdditional === "failing") F(M, O, false), X.if((0, U1.not)(O), () => {
          Q.reset(), V(M);
        });
        else if (F(M, O), !H) X.if((0, U1.not)(O), () => X.break());
      }
    }
    function F(M, O, A) {
      let R = { keyword: "additionalProperties", dataProp: M, dataPropType: ZQ.Type.Str };
      if (A === false) Object.assign(R, { compositeRule: true, createErrors: false, allErrors: false });
      Q.subschema(R, O);
    }
  } };
  Tz.default = II;
});
var hz = E((gz) => {
  Object.defineProperty(gz, "__esModule", { value: true });
  var EI = E4(), xz = e0(), b7 = a(), yz = I7(), PI = { keyword: "properties", type: "object", schemaType: "object", code(Q) {
    let { gen: X, schema: Y, parentSchema: $, data: J, it: W } = Q;
    if (W.opts.removeAdditional === "all" && $.additionalProperties === void 0) yz.default.code(new EI.KeywordCxt(W, yz.default, "additionalProperties"));
    let G = (0, xz.allSchemaProperties)(Y);
    for (let U of G) W.definedProperties.add(U);
    if (W.opts.unevaluated && G.length && W.props !== true) W.props = b7.mergeEvaluated.props(X, (0, b7.toHash)(G), W.props);
    let H = G.filter((U) => !(0, b7.alwaysValidSchema)(W, Y[U]));
    if (H.length === 0) return;
    let B = X.name("valid");
    for (let U of H) {
      if (z2(U)) K(U);
      else {
        if (X.if((0, xz.propertyInData)(X, J, U, W.opts.ownProperties)), K(U), !W.allErrors) X.else().var(B, true);
        X.endIf();
      }
      Q.it.definedProperties.add(U), Q.ok(B);
    }
    function z2(U) {
      return W.opts.useDefaults && !W.compositeRule && Y[U].default !== void 0;
    }
    function K(U) {
      Q.subschema({ keyword: "properties", schemaProp: U, dataProp: U }, B);
    }
  } };
  gz.default = PI;
});
var cz = E((lz) => {
  Object.defineProperty(lz, "__esModule", { value: true });
  var fz = e0(), CQ = c(), uz = a(), mz = a(), CI = { keyword: "patternProperties", type: "object", schemaType: "object", code(Q) {
    let { gen: X, schema: Y, data: $, parentSchema: J, it: W } = Q, { opts: G } = W, H = (0, fz.allSchemaProperties)(Y), B = H.filter((F) => (0, uz.alwaysValidSchema)(W, Y[F]));
    if (H.length === 0 || B.length === H.length && (!W.opts.unevaluated || W.props === true)) return;
    let z2 = G.strictSchema && !G.allowMatchingProperties && J.properties, K = X.name("valid");
    if (W.props !== true && !(W.props instanceof CQ.Name)) W.props = (0, mz.evaluatedPropsToName)(X, W.props);
    let { props: U } = W;
    q();
    function q() {
      for (let F of H) {
        if (z2) V(F);
        if (W.allErrors) L(F);
        else X.var(K, true), L(F), X.if(K);
      }
    }
    function V(F) {
      for (let M in z2) if (new RegExp(F).test(M)) (0, uz.checkStrictMode)(W, `property ${M} matches pattern ${F} (use allowMatchingProperties)`);
    }
    function L(F) {
      X.forIn("key", $, (M) => {
        X.if(CQ._`${(0, fz.usePattern)(Q, F)}.test(${M})`, () => {
          let O = B.includes(F);
          if (!O) Q.subschema({ keyword: "patternProperties", schemaProp: F, dataProp: M, dataPropType: mz.Type.Str }, K);
          if (W.opts.unevaluated && U !== true) X.assign(CQ._`${U}[${M}]`, true);
          else if (!O && !W.allErrors) X.if((0, CQ.not)(K), () => X.break());
        });
      });
    }
  } };
  lz.default = CI;
});
var dz = E((pz) => {
  Object.defineProperty(pz, "__esModule", { value: true });
  var _I = a(), kI = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(Q) {
    let { gen: X, schema: Y, it: $ } = Q;
    if ((0, _I.alwaysValidSchema)($, Y)) {
      Q.fail();
      return;
    }
    let J = X.name("valid");
    Q.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, J), Q.failResult(J, () => Q.reset(), () => Q.error());
  }, error: { message: "must NOT be valid" } };
  pz.default = kI;
});
var nz = E((iz) => {
  Object.defineProperty(iz, "__esModule", { value: true });
  var TI = e0(), xI = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: TI.validateUnion, error: { message: "must match a schema in anyOf" } };
  iz.default = xI;
});
var rz = E((oz) => {
  Object.defineProperty(oz, "__esModule", { value: true });
  var SQ = c(), gI = a(), hI = { message: "must match exactly one schema in oneOf", params: ({ params: Q }) => SQ._`{passingSchemas: ${Q.passing}}` }, fI = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: hI, code(Q) {
    let { gen: X, schema: Y, parentSchema: $, it: J } = Q;
    if (!Array.isArray(Y)) throw Error("ajv implementation error");
    if (J.opts.discriminator && $.discriminator) return;
    let W = Y, G = X.let("valid", false), H = X.let("passing", null), B = X.name("_valid");
    Q.setParams({ passing: H }), X.block(z2), Q.result(G, () => Q.reset(), () => Q.error(true));
    function z2() {
      W.forEach((K, U) => {
        let q;
        if ((0, gI.alwaysValidSchema)(J, K)) X.var(B, true);
        else q = Q.subschema({ keyword: "oneOf", schemaProp: U, compositeRule: true }, B);
        if (U > 0) X.if(SQ._`${B} && ${G}`).assign(G, false).assign(H, SQ._`[${H}, ${U}]`).else();
        X.if(B, () => {
          if (X.assign(G, true), X.assign(H, U), q) Q.mergeEvaluated(q, SQ.Name);
        });
      });
    }
  } };
  oz.default = fI;
});
var az = E((tz) => {
  Object.defineProperty(tz, "__esModule", { value: true });
  var mI = a(), lI = { keyword: "allOf", schemaType: "array", code(Q) {
    let { gen: X, schema: Y, it: $ } = Q;
    if (!Array.isArray(Y)) throw Error("ajv implementation error");
    let J = X.name("valid");
    Y.forEach((W, G) => {
      if ((0, mI.alwaysValidSchema)($, W)) return;
      let H = Q.subschema({ keyword: "allOf", schemaProp: G }, J);
      Q.ok(J), Q.mergeEvaluated(H);
    });
  } };
  tz.default = lI;
});
var XK = E((QK) => {
  Object.defineProperty(QK, "__esModule", { value: true });
  var _Q = c(), ez = a(), pI = { message: ({ params: Q }) => _Q.str`must match "${Q.ifClause}" schema`, params: ({ params: Q }) => _Q._`{failingKeyword: ${Q.ifClause}}` }, dI = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: pI, code(Q) {
    let { gen: X, parentSchema: Y, it: $ } = Q;
    if (Y.then === void 0 && Y.else === void 0) (0, ez.checkStrictMode)($, '"if" without "then" and "else" is ignored');
    let J = sz($, "then"), W = sz($, "else");
    if (!J && !W) return;
    let G = X.let("valid", true), H = X.name("_valid");
    if (B(), Q.reset(), J && W) {
      let K = X.let("ifClause");
      Q.setParams({ ifClause: K }), X.if(H, z2("then", K), z2("else", K));
    } else if (J) X.if(H, z2("then"));
    else X.if((0, _Q.not)(H), z2("else"));
    Q.pass(G, () => Q.error(true));
    function B() {
      let K = Q.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, H);
      Q.mergeEvaluated(K);
    }
    function z2(K, U) {
      return () => {
        let q = Q.subschema({ keyword: K }, H);
        if (X.assign(G, H), Q.mergeValidEvaluated(q, G), U) X.assign(U, _Q._`${K}`);
        else Q.setParams({ ifClause: K });
      };
    }
  } };
  function sz(Q, X) {
    let Y = Q.schema[X];
    return Y !== void 0 && !(0, ez.alwaysValidSchema)(Q, Y);
  }
  QK.default = dI;
});
var $K = E((YK) => {
  Object.defineProperty(YK, "__esModule", { value: true });
  var nI = a(), oI = { keyword: ["then", "else"], schemaType: ["object", "boolean"], code({ keyword: Q, parentSchema: X, it: Y }) {
    if (X.if === void 0) (0, nI.checkStrictMode)(Y, `"${Q}" without "if" is ignored`);
  } };
  YK.default = oI;
});
var WK = E((JK) => {
  Object.defineProperty(JK, "__esModule", { value: true });
  var tI = A7(), aI = Mz(), sI = j7(), eI = jz(), Qb = Iz(), Xb = Sz(), Yb = vz(), $b = I7(), Jb = hz(), Wb = cz(), Gb = dz(), Hb = nz(), Bb = rz(), zb = az(), Kb = XK(), Vb = $K();
  function qb(Q = false) {
    let X = [Gb.default, Hb.default, Bb.default, zb.default, Kb.default, Vb.default, Yb.default, $b.default, Xb.default, Jb.default, Wb.default];
    if (Q) X.push(aI.default, eI.default);
    else X.push(tI.default, sI.default);
    return X.push(Qb.default), X;
  }
  JK.default = qb;
});
var HK = E((GK) => {
  Object.defineProperty(GK, "__esModule", { value: true });
  var D0 = c(), Lb = { message: ({ schemaCode: Q }) => D0.str`must match format "${Q}"`, params: ({ schemaCode: Q }) => D0._`{format: ${Q}}` }, Fb = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: Lb, code(Q, X) {
    let { gen: Y, data: $, $data: J, schema: W, schemaCode: G, it: H } = Q, { opts: B, errSchemaPath: z2, schemaEnv: K, self: U } = H;
    if (!B.validateFormats) return;
    if (J) q();
    else V();
    function q() {
      let L = Y.scopeValue("formats", { ref: U.formats, code: B.code.formats }), F = Y.const("fDef", D0._`${L}[${G}]`), M = Y.let("fType"), O = Y.let("format");
      Y.if(D0._`typeof ${F} == "object" && !(${F} instanceof RegExp)`, () => Y.assign(M, D0._`${F}.type || "string"`).assign(O, D0._`${F}.validate`), () => Y.assign(M, D0._`"string"`).assign(O, F)), Q.fail$data((0, D0.or)(A(), R()));
      function A() {
        if (B.strictSchema === false) return D0.nil;
        return D0._`${G} && !${O}`;
      }
      function R() {
        let Z = K.$async ? D0._`(${F}.async ? await ${O}(${$}) : ${O}(${$}))` : D0._`${O}(${$})`, C = D0._`(typeof ${O} == "function" ? ${Z} : ${O}.test(${$}))`;
        return D0._`${O} && ${O} !== true && ${M} === ${X} && !${C}`;
      }
    }
    function V() {
      let L = U.formats[W];
      if (!L) {
        A();
        return;
      }
      if (L === true) return;
      let [F, M, O] = R(L);
      if (F === X) Q.pass(Z());
      function A() {
        if (B.strictSchema === false) {
          U.logger.warn(C());
          return;
        }
        throw Error(C());
        function C() {
          return `unknown format "${W}" ignored in schema at path "${z2}"`;
        }
      }
      function R(C) {
        let B0 = C instanceof RegExp ? (0, D0.regexpCode)(C) : B.code.formats ? D0._`${B.code.formats}${(0, D0.getProperty)(W)}` : void 0, O0 = Y.scopeValue("formats", { key: W, ref: C, code: B0 });
        if (typeof C == "object" && !(C instanceof RegExp)) return [C.type || "string", C.validate, D0._`${O0}.validate`];
        return ["string", C, O0];
      }
      function Z() {
        if (typeof L == "object" && !(L instanceof RegExp) && L.async) {
          if (!K.$async) throw Error("async format in sync schema");
          return D0._`await ${O}(${$})`;
        }
        return typeof M == "function" ? D0._`${O}(${$})` : D0._`${O}.test(${$})`;
      }
    }
  } };
  GK.default = Fb;
});
var zK = E((BK) => {
  Object.defineProperty(BK, "__esModule", { value: true });
  var Ob = HK(), Db = [Ob.default];
  BK.default = Db;
});
var qK = E((KK) => {
  Object.defineProperty(KK, "__esModule", { value: true });
  KK.contentVocabulary = KK.metadataVocabulary = void 0;
  KK.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
  KK.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
});
var FK = E((LK) => {
  Object.defineProperty(LK, "__esModule", { value: true });
  var Ab = gB(), jb = Kz(), Rb = WK(), Ib = zK(), UK = qK(), bb = [Ab.default, jb.default, (0, Rb.default)(), Ib.default, UK.metadataVocabulary, UK.contentVocabulary];
  LK.default = bb;
});
var MK = E((OK) => {
  Object.defineProperty(OK, "__esModule", { value: true });
  OK.DiscrError = void 0;
  var NK;
  (function(Q) {
    Q.Tag = "tag", Q.Mapping = "mapping";
  })(NK || (OK.DiscrError = NK = {}));
});
var jK = E((AK) => {
  Object.defineProperty(AK, "__esModule", { value: true });
  var P9 = c(), E7 = MK(), wK = UQ(), Pb = P4(), Zb = a(), Cb = { message: ({ params: { discrError: Q, tagName: X } }) => Q === E7.DiscrError.Tag ? `tag "${X}" must be string` : `value of tag "${X}" must be in oneOf`, params: ({ params: { discrError: Q, tag: X, tagName: Y } }) => P9._`{error: ${Q}, tag: ${Y}, tagValue: ${X}}` }, Sb = { keyword: "discriminator", type: "object", schemaType: "object", error: Cb, code(Q) {
    let { gen: X, data: Y, schema: $, parentSchema: J, it: W } = Q, { oneOf: G } = J;
    if (!W.opts.discriminator) throw Error("discriminator: requires discriminator option");
    let H = $.propertyName;
    if (typeof H != "string") throw Error("discriminator: requires propertyName");
    if ($.mapping) throw Error("discriminator: mapping is not supported");
    if (!G) throw Error("discriminator: requires oneOf keyword");
    let B = X.let("valid", false), z2 = X.const("tag", P9._`${Y}${(0, P9.getProperty)(H)}`);
    X.if(P9._`typeof ${z2} == "string"`, () => K(), () => Q.error(false, { discrError: E7.DiscrError.Tag, tag: z2, tagName: H })), Q.ok(B);
    function K() {
      let V = q();
      X.if(false);
      for (let L in V) X.elseIf(P9._`${z2} === ${L}`), X.assign(B, U(V[L]));
      X.else(), Q.error(false, { discrError: E7.DiscrError.Mapping, tag: z2, tagName: H }), X.endIf();
    }
    function U(V) {
      let L = X.name("valid"), F = Q.subschema({ keyword: "oneOf", schemaProp: V }, L);
      return Q.mergeEvaluated(F, P9.Name), L;
    }
    function q() {
      var V;
      let L = {}, F = O(J), M = true;
      for (let Z = 0; Z < G.length; Z++) {
        let C = G[Z];
        if ((C === null || C === void 0 ? void 0 : C.$ref) && !(0, Zb.schemaHasRulesButRef)(C, W.self.RULES)) {
          let O0 = C.$ref;
          if (C = wK.resolveRef.call(W.self, W.schemaEnv.root, W.baseId, O0), C instanceof wK.SchemaEnv) C = C.schema;
          if (C === void 0) throw new Pb.default(W.opts.uriResolver, W.baseId, O0);
        }
        let B0 = (V = C === null || C === void 0 ? void 0 : C.properties) === null || V === void 0 ? void 0 : V[H];
        if (typeof B0 != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${H}"`);
        M = M && (F || O(C)), A(B0, Z);
      }
      if (!M) throw Error(`discriminator: "${H}" must be required`);
      return L;
      function O({ required: Z }) {
        return Array.isArray(Z) && Z.includes(H);
      }
      function A(Z, C) {
        if (Z.const) R(Z.const, C);
        else if (Z.enum) for (let B0 of Z.enum) R(B0, C);
        else throw Error(`discriminator: "properties/${H}" must have "const" or "enum"`);
      }
      function R(Z, C) {
        if (typeof Z != "string" || Z in L) throw Error(`discriminator: "${H}" values must be unique strings`);
        L[Z] = C;
      }
    }
  } };
  AK.default = Sb;
});
var RK = E((ry, kb) => {
  kb.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
});
var Z7 = E((u0, P7) => {
  Object.defineProperty(u0, "__esModule", { value: true });
  u0.MissingRefError = u0.ValidationError = u0.CodeGen = u0.Name = u0.nil = u0.stringify = u0.str = u0._ = u0.KeywordCxt = u0.Ajv = void 0;
  var vb = PB(), Tb = FK(), xb = jK(), IK = RK(), yb = ["/properties"], kQ = "http://json-schema.org/draft-07/schema";
  class f4 extends vb.default {
    _addVocabularies() {
      if (super._addVocabularies(), Tb.default.forEach((Q) => this.addVocabulary(Q)), this.opts.discriminator) this.addKeyword(xb.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let Q = this.opts.$data ? this.$dataMetaSchema(IK, yb) : IK;
      this.addMetaSchema(Q, kQ, false), this.refs["http://json-schema.org/schema"] = kQ;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(kQ) ? kQ : void 0);
    }
  }
  u0.Ajv = f4;
  P7.exports = u0 = f4;
  P7.exports.Ajv = f4;
  Object.defineProperty(u0, "__esModule", { value: true });
  u0.default = f4;
  var gb = E4();
  Object.defineProperty(u0, "KeywordCxt", { enumerable: true, get: function() {
    return gb.KeywordCxt;
  } });
  var Z9 = c();
  Object.defineProperty(u0, "_", { enumerable: true, get: function() {
    return Z9._;
  } });
  Object.defineProperty(u0, "str", { enumerable: true, get: function() {
    return Z9.str;
  } });
  Object.defineProperty(u0, "stringify", { enumerable: true, get: function() {
    return Z9.stringify;
  } });
  Object.defineProperty(u0, "nil", { enumerable: true, get: function() {
    return Z9.nil;
  } });
  Object.defineProperty(u0, "Name", { enumerable: true, get: function() {
    return Z9.Name;
  } });
  Object.defineProperty(u0, "CodeGen", { enumerable: true, get: function() {
    return Z9.CodeGen;
  } });
  var hb = VQ();
  Object.defineProperty(u0, "ValidationError", { enumerable: true, get: function() {
    return hb.default;
  } });
  var fb = P4();
  Object.defineProperty(u0, "MissingRefError", { enumerable: true, get: function() {
    return fb.default;
  } });
});
var TK = E((kK) => {
  Object.defineProperty(kK, "__esModule", { value: true });
  kK.formatNames = kK.fastFormats = kK.fullFormats = void 0;
  function b1(Q, X) {
    return { validate: Q, compare: X };
  }
  kK.fullFormats = { date: b1(ZK, k7), time: b1(S7(true), v7), "date-time": b1(bK(true), SK), "iso-time": b1(S7(), CK), "iso-date-time": b1(bK(), _K), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: nb, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: QE, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: ob, int32: { type: "number", validate: ab }, int64: { type: "number", validate: sb }, float: { type: "number", validate: PK }, double: { type: "number", validate: PK }, password: true, binary: true };
  kK.fastFormats = { ...kK.fullFormats, date: b1(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, k7), time: b1(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, v7), "date-time": b1(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, SK), "iso-time": b1(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, CK), "iso-date-time": b1(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, _K), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i };
  kK.formatNames = Object.keys(kK.fullFormats);
  function lb(Q) {
    return Q % 4 === 0 && (Q % 100 !== 0 || Q % 400 === 0);
  }
  var cb = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, pb = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function ZK(Q) {
    let X = cb.exec(Q);
    if (!X) return false;
    let Y = +X[1], $ = +X[2], J = +X[3];
    return $ >= 1 && $ <= 12 && J >= 1 && J <= ($ === 2 && lb(Y) ? 29 : pb[$]);
  }
  function k7(Q, X) {
    if (!(Q && X)) return;
    if (Q > X) return 1;
    if (Q < X) return -1;
    return 0;
  }
  var C7 = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function S7(Q) {
    return function(Y) {
      let $ = C7.exec(Y);
      if (!$) return false;
      let J = +$[1], W = +$[2], G = +$[3], H = $[4], B = $[5] === "-" ? -1 : 1, z2 = +($[6] || 0), K = +($[7] || 0);
      if (z2 > 23 || K > 59 || Q && !H) return false;
      if (J <= 23 && W <= 59 && G < 60) return true;
      let U = W - K * B, q = J - z2 * B - (U < 0 ? 1 : 0);
      return (q === 23 || q === -1) && (U === 59 || U === -1) && G < 61;
    };
  }
  function v7(Q, X) {
    if (!(Q && X)) return;
    let Y = (/* @__PURE__ */ new Date("2020-01-01T" + Q)).valueOf(), $ = (/* @__PURE__ */ new Date("2020-01-01T" + X)).valueOf();
    if (!(Y && $)) return;
    return Y - $;
  }
  function CK(Q, X) {
    if (!(Q && X)) return;
    let Y = C7.exec(Q), $ = C7.exec(X);
    if (!(Y && $)) return;
    if (Q = Y[1] + Y[2] + Y[3], X = $[1] + $[2] + $[3], Q > X) return 1;
    if (Q < X) return -1;
    return 0;
  }
  var _7 = /t|\s/i;
  function bK(Q) {
    let X = S7(Q);
    return function($) {
      let J = $.split(_7);
      return J.length === 2 && ZK(J[0]) && X(J[1]);
    };
  }
  function SK(Q, X) {
    if (!(Q && X)) return;
    let Y = new Date(Q).valueOf(), $ = new Date(X).valueOf();
    if (!(Y && $)) return;
    return Y - $;
  }
  function _K(Q, X) {
    if (!(Q && X)) return;
    let [Y, $] = Q.split(_7), [J, W] = X.split(_7), G = k7(Y, J);
    if (G === void 0) return;
    return G || v7($, W);
  }
  var db = /\/|:/, ib = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function nb(Q) {
    return db.test(Q) && ib.test(Q);
  }
  var EK = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function ob(Q) {
    return EK.lastIndex = 0, EK.test(Q);
  }
  var rb = -2147483648, tb = 2147483647;
  function ab(Q) {
    return Number.isInteger(Q) && Q <= tb && Q >= rb;
  }
  function sb(Q) {
    return Number.isInteger(Q);
  }
  function PK() {
    return true;
  }
  var eb = /[^\\]\\Z/;
  function QE(Q) {
    if (eb.test(Q)) return false;
    try {
      return new RegExp(Q), true;
    } catch (X) {
      return false;
    }
  }
});
var yK = E((xK) => {
  Object.defineProperty(xK, "__esModule", { value: true });
  xK.formatLimitDefinition = void 0;
  var YE = Z7(), L1 = c(), G6 = L1.operators, vQ = { formatMaximum: { okStr: "<=", ok: G6.LTE, fail: G6.GT }, formatMinimum: { okStr: ">=", ok: G6.GTE, fail: G6.LT }, formatExclusiveMaximum: { okStr: "<", ok: G6.LT, fail: G6.GTE }, formatExclusiveMinimum: { okStr: ">", ok: G6.GT, fail: G6.LTE } }, $E = { message: ({ keyword: Q, schemaCode: X }) => L1.str`should be ${vQ[Q].okStr} ${X}`, params: ({ keyword: Q, schemaCode: X }) => L1._`{comparison: ${vQ[Q].okStr}, limit: ${X}}` };
  xK.formatLimitDefinition = { keyword: Object.keys(vQ), type: "string", schemaType: "string", $data: true, error: $E, code(Q) {
    let { gen: X, data: Y, schemaCode: $, keyword: J, it: W } = Q, { opts: G, self: H } = W;
    if (!G.validateFormats) return;
    let B = new YE.KeywordCxt(W, H.RULES.all.format.definition, "format");
    if (B.$data) z2();
    else K();
    function z2() {
      let q = X.scopeValue("formats", { ref: H.formats, code: G.code.formats }), V = X.const("fmt", L1._`${q}[${B.schemaCode}]`);
      Q.fail$data((0, L1.or)(L1._`typeof ${V} != "object"`, L1._`${V} instanceof RegExp`, L1._`typeof ${V}.compare != "function"`, U(V)));
    }
    function K() {
      let q = B.schema, V = H.formats[q];
      if (!V || V === true) return;
      if (typeof V != "object" || V instanceof RegExp || typeof V.compare != "function") throw Error(`"${J}": format "${q}" does not define "compare" function`);
      let L = X.scopeValue("formats", { key: q, ref: V, code: G.code.formats ? L1._`${G.code.formats}${(0, L1.getProperty)(q)}` : void 0 });
      Q.fail$data(U(L));
    }
    function U(q) {
      return L1._`${q}.compare(${Y}, ${$}) ${vQ[J].fail} 0`;
    }
  }, dependencies: ["format"] };
  var JE = (Q) => {
    return Q.addKeyword(xK.formatLimitDefinition), Q;
  };
  xK.default = JE;
});
var uK = E((u4, fK) => {
  Object.defineProperty(u4, "__esModule", { value: true });
  var C9 = TK(), GE = yK(), y7 = c(), gK = new y7.Name("fullFormats"), HE = new y7.Name("fastFormats"), g7 = (Q, X = { keywords: true }) => {
    if (Array.isArray(X)) return hK(Q, X, C9.fullFormats, gK), Q;
    let [Y, $] = X.mode === "fast" ? [C9.fastFormats, HE] : [C9.fullFormats, gK], J = X.formats || C9.formatNames;
    if (hK(Q, J, Y, $), X.keywords) (0, GE.default)(Q);
    return Q;
  };
  g7.get = (Q, X = "full") => {
    let $ = (X === "fast" ? C9.fastFormats : C9.fullFormats)[Q];
    if (!$) throw Error(`Unknown format "${Q}"`);
    return $;
  };
  function hK(Q, X, Y, $) {
    var J, W;
    (J = (W = Q.opts.code).formats) !== null && J !== void 0 || (W.formats = y7._`require("ajv-formats/dist/formats").${$}`);
    for (let G of X) Q.addFormat(G, Y[G]);
  }
  fK.exports = u4 = g7;
  Object.defineProperty(u4, "__esModule", { value: true });
  u4.default = g7;
});
var CV = typeof global == "object" && global && global.Object === Object && global;
var e7 = CV;
var SV = typeof self == "object" && self && self.Object === Object && self;
var _V = e7 || SV || Function("return this")();
var h6 = _V;
var kV = h6.Symbol;
var f6 = kV;
var Q5 = Object.prototype;
var vV = Q5.hasOwnProperty;
var TV = Q5.toString;
var T9 = f6 ? f6.toStringTag : void 0;
function xV(Q) {
  var X = vV.call(Q, T9), Y = Q[T9];
  try {
    Q[T9] = void 0;
    var $ = true;
  } catch (W) {
  }
  var J = TV.call(Q);
  if ($) if (X) Q[T9] = Y;
  else delete Q[T9];
  return J;
}
var X5 = xV;
var yV = Object.prototype;
var gV = yV.toString;
function hV(Q) {
  return gV.call(Q);
}
var Y5 = hV;
var fV = "[object Null]";
var uV = "[object Undefined]";
var $5 = f6 ? f6.toStringTag : void 0;
function mV(Q) {
  if (Q == null) return Q === void 0 ? uV : fV;
  return $5 && $5 in Object(Q) ? X5(Q) : Y5(Q);
}
var J5 = mV;
function lV(Q) {
  var X = typeof Q;
  return Q != null && (X == "object" || X == "function");
}
var c4 = lV;
var cV = "[object AsyncFunction]";
var pV = "[object Function]";
var dV = "[object GeneratorFunction]";
var iV = "[object Proxy]";
function nV(Q) {
  if (!c4(Q)) return false;
  var X = J5(Q);
  return X == pV || X == dV || X == cV || X == iV;
}
var W5 = nV;
var oV = h6["__core-js_shared__"];
var p4 = oV;
var G5 = (function() {
  var Q = /[^.]+$/.exec(p4 && p4.keys && p4.keys.IE_PROTO || "");
  return Q ? "Symbol(src)_1." + Q : "";
})();
function rV(Q) {
  return !!G5 && G5 in Q;
}
var H5 = rV;
var tV = Function.prototype;
var aV = tV.toString;
function sV(Q) {
  if (Q != null) {
    try {
      return aV.call(Q);
    } catch (X) {
    }
    try {
      return Q + "";
    } catch (X) {
    }
  }
  return "";
}
var B5 = sV;
var eV = /[\\^$.*+?()[\]{}|]/g;
var Qq = /^\[object .+?Constructor\]$/;
var Xq = Function.prototype;
var Yq = Object.prototype;
var $q = Xq.toString;
var Jq = Yq.hasOwnProperty;
var Wq = RegExp("^" + $q.call(Jq).replace(eV, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Gq(Q) {
  if (!c4(Q) || H5(Q)) return false;
  var X = W5(Q) ? Wq : Qq;
  return X.test(B5(Q));
}
var z5 = Gq;
function Hq(Q, X) {
  return Q == null ? void 0 : Q[X];
}
var K5 = Hq;
function Bq(Q, X) {
  var Y = K5(Q, X);
  return z5(Y) ? Y : void 0;
}
var d4 = Bq;
var zq = d4(Object, "create");
var P1 = zq;
function Kq() {
  this.__data__ = P1 ? P1(null) : {}, this.size = 0;
}
var V5 = Kq;
function Vq(Q) {
  var X = this.has(Q) && delete this.__data__[Q];
  return this.size -= X ? 1 : 0, X;
}
var q5 = Vq;
var qq = "__lodash_hash_undefined__";
var Uq = Object.prototype;
var Lq = Uq.hasOwnProperty;
function Fq(Q) {
  var X = this.__data__;
  if (P1) {
    var Y = X[Q];
    return Y === qq ? void 0 : Y;
  }
  return Lq.call(X, Q) ? X[Q] : void 0;
}
var U5 = Fq;
var Nq = Object.prototype;
var Oq = Nq.hasOwnProperty;
function Dq(Q) {
  var X = this.__data__;
  return P1 ? X[Q] !== void 0 : Oq.call(X, Q);
}
var L5 = Dq;
var Mq = "__lodash_hash_undefined__";
function wq(Q, X) {
  var Y = this.__data__;
  return this.size += this.has(Q) ? 0 : 1, Y[Q] = P1 && X === void 0 ? Mq : X, this;
}
var F5 = wq;
function u6(Q) {
  var X = -1, Y = Q == null ? 0 : Q.length;
  this.clear();
  while (++X < Y) {
    var $ = Q[X];
    this.set($[0], $[1]);
  }
}
u6.prototype.clear = V5;
u6.prototype.delete = q5;
u6.prototype.get = U5;
u6.prototype.has = L5;
u6.prototype.set = F5;
var hQ = u6;
function Aq() {
  this.__data__ = [], this.size = 0;
}
var N5 = Aq;
function jq(Q, X) {
  return Q === X || Q !== Q && X !== X;
}
var O5 = jq;
function Rq(Q, X) {
  var Y = Q.length;
  while (Y--) if (O5(Q[Y][0], X)) return Y;
  return -1;
}
var h1 = Rq;
var Iq = Array.prototype;
var bq = Iq.splice;
function Eq(Q) {
  var X = this.__data__, Y = h1(X, Q);
  if (Y < 0) return false;
  var $ = X.length - 1;
  if (Y == $) X.pop();
  else bq.call(X, Y, 1);
  return --this.size, true;
}
var D5 = Eq;
function Pq(Q) {
  var X = this.__data__, Y = h1(X, Q);
  return Y < 0 ? void 0 : X[Y][1];
}
var M5 = Pq;
function Zq(Q) {
  return h1(this.__data__, Q) > -1;
}
var w5 = Zq;
function Cq(Q, X) {
  var Y = this.__data__, $ = h1(Y, Q);
  if ($ < 0) ++this.size, Y.push([Q, X]);
  else Y[$][1] = X;
  return this;
}
var A5 = Cq;
function m6(Q) {
  var X = -1, Y = Q == null ? 0 : Q.length;
  this.clear();
  while (++X < Y) {
    var $ = Q[X];
    this.set($[0], $[1]);
  }
}
m6.prototype.clear = N5;
m6.prototype.delete = D5;
m6.prototype.get = M5;
m6.prototype.has = w5;
m6.prototype.set = A5;
var j5 = m6;
var Sq = d4(h6, "Map");
var R5 = Sq;
function _q() {
  this.size = 0, this.__data__ = { hash: new hQ(), map: new (R5 || j5)(), string: new hQ() };
}
var I5 = _q;
function kq(Q) {
  var X = typeof Q;
  return X == "string" || X == "number" || X == "symbol" || X == "boolean" ? Q !== "__proto__" : Q === null;
}
var b5 = kq;
function vq(Q, X) {
  var Y = Q.__data__;
  return b5(X) ? Y[typeof X == "string" ? "string" : "hash"] : Y.map;
}
var f1 = vq;
function Tq(Q) {
  var X = f1(this, Q).delete(Q);
  return this.size -= X ? 1 : 0, X;
}
var E5 = Tq;
function xq(Q) {
  return f1(this, Q).get(Q);
}
var P5 = xq;
function yq(Q) {
  return f1(this, Q).has(Q);
}
var Z5 = yq;
function gq(Q, X) {
  var Y = f1(this, Q), $ = Y.size;
  return Y.set(Q, X), this.size += Y.size == $ ? 0 : 1, this;
}
var C5 = gq;
function l6(Q) {
  var X = -1, Y = Q == null ? 0 : Q.length;
  this.clear();
  while (++X < Y) {
    var $ = Q[X];
    this.set($[0], $[1]);
  }
}
l6.prototype.clear = I5;
l6.prototype.delete = E5;
l6.prototype.get = P5;
l6.prototype.has = Z5;
l6.prototype.set = C5;
var fQ = l6;
var hq = "Expected a function";
function uQ(Q, X) {
  if (typeof Q != "function" || X != null && typeof X != "function") throw TypeError(hq);
  var Y = function() {
    var $ = arguments, J = X ? X.apply(this, $) : $[0], W = Y.cache;
    if (W.has(J)) return W.get(J);
    var G = Q.apply(this, $);
    return Y.cache = W.set(J, G) || W, G;
  };
  return Y.cache = new (uQ.Cache || fQ)(), Y;
}
uQ.Cache = fQ;
var X1 = uQ;
var c6 = X1(() => {
  return (process.env.CLAUDE_CONFIG_DIR ?? (0, import_path3.join)((0, import_os.homedir)(), ".claude")).normalize("NFC");
}, () => process.env.CLAUDE_CONFIG_DIR);
function x9(Q) {
  if (!Q) return false;
  if (typeof Q === "boolean") return Q;
  let X = Q.toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(X);
}
var k5 = X1((Q) => {
  if (!Q || Q.trim() === "") return null;
  let X = Q.split(",").map((W) => W.trim()).filter(Boolean);
  if (X.length === 0) return null;
  let Y = X.some((W) => W.startsWith("!")), $ = X.some((W) => !W.startsWith("!"));
  if (Y && $) return null;
  let J = X.map((W) => W.replace(/^!/, "").toLowerCase());
  return { include: Y ? [] : J, exclude: Y ? J : [], isExclusive: Y };
});
var YU = { cwd() {
  return process.cwd();
}, existsSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.existsSync(${Q})`, 0);
    return u.existsSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, async stat(Q) {
  return (0, import_promises2.stat)(Q);
}, async readdir(Q) {
  return (0, import_promises2.readdir)(Q, { withFileTypes: true });
}, async unlink(Q) {
  return (0, import_promises2.unlink)(Q);
}, async rmdir(Q) {
  return (0, import_promises2.rmdir)(Q);
}, async rm(Q, X) {
  return (0, import_promises2.rm)(Q, X);
}, async mkdir(Q, X) {
  try {
    await (0, import_promises2.mkdir)(Q, { recursive: true, ...X });
  } catch (Y) {
    if (Y.code !== "EEXIST") throw Y;
  }
}, async readFile(Q, X) {
  return (0, import_promises2.readFile)(Q, { encoding: X.encoding });
}, async rename(Q, X) {
  return (0, import_promises2.rename)(Q, X);
}, statSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.statSync(${Q})`, 0);
    return u.statSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, lstatSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.lstatSync(${Q})`, 0);
    return u.lstatSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, readFileSync(Q, X) {
  let $ = [];
  try {
    const Y = X0($, U0`fs.readFileSync(${Q})`, 0);
    return u.readFileSync(Q, { encoding: X.encoding });
  } catch (J) {
    var W = J, G = 1;
  } finally {
    Y0($, W, G);
  }
}, readFileBytesSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.readFileBytesSync(${Q})`, 0);
    return u.readFileSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, readSync(Q, X) {
  let J = [];
  try {
    const Y = X0(J, U0`fs.readSync(${Q}, ${X.length} bytes)`, 0);
    let $ = void 0;
    try {
      $ = u.openSync(Q, "r");
      let B = Buffer.alloc(X.length), z2 = u.readSync($, B, 0, X.length, 0);
      return { buffer: B, bytesRead: z2 };
    } finally {
      if ($) u.closeSync($);
    }
  } catch (W) {
    var G = W, H = 1;
  } finally {
    Y0(J, G, H);
  }
}, appendFileSync(Q, X, Y) {
  let J = [];
  try {
    const $ = X0(J, U0`fs.appendFileSync(${Q}, ${X.length} chars)`, 0);
    if (Y?.mode !== void 0) try {
      let B = u.openSync(Q, "ax", Y.mode);
      try {
        u.appendFileSync(B, X);
      } finally {
        u.closeSync(B);
      }
      return;
    } catch (B) {
      if (B.code !== "EEXIST") throw B;
    }
    u.appendFileSync(Q, X);
  } catch (W) {
    var G = W, H = 1;
  } finally {
    Y0(J, G, H);
  }
}, copyFileSync(Q, X) {
  let $ = [];
  try {
    const Y = X0($, U0`fs.copyFileSync(${Q} → ${X})`, 0);
    u.copyFileSync(Q, X);
  } catch (J) {
    var W = J, G = 1;
  } finally {
    Y0($, W, G);
  }
}, unlinkSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.unlinkSync(${Q})`, 0);
    u.unlinkSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, renameSync(Q, X) {
  let $ = [];
  try {
    const Y = X0($, U0`fs.renameSync(${Q} → ${X})`, 0);
    u.renameSync(Q, X);
  } catch (J) {
    var W = J, G = 1;
  } finally {
    Y0($, W, G);
  }
}, linkSync(Q, X) {
  let $ = [];
  try {
    const Y = X0($, U0`fs.linkSync(${Q} → ${X})`, 0);
    u.linkSync(Q, X);
  } catch (J) {
    var W = J, G = 1;
  } finally {
    Y0($, W, G);
  }
}, symlinkSync(Q, X, Y) {
  let J = [];
  try {
    const $ = X0(J, U0`fs.symlinkSync(${Q} → ${X})`, 0);
    u.symlinkSync(Q, X, Y);
  } catch (W) {
    var G = W, H = 1;
  } finally {
    Y0(J, G, H);
  }
}, readlinkSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.readlinkSync(${Q})`, 0);
    return u.readlinkSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, realpathSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.realpathSync(${Q})`, 0);
    return u.realpathSync(Q).normalize("NFC");
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, mkdirSync(Q, X) {
  let J = [];
  try {
    const Y = X0(J, U0`fs.mkdirSync(${Q})`, 0);
    let $ = { recursive: true };
    if (X?.mode !== void 0) $.mode = X.mode;
    try {
      u.mkdirSync(Q, $);
    } catch (B) {
      if (B.code !== "EEXIST") throw B;
    }
  } catch (W) {
    var G = W, H = 1;
  } finally {
    Y0(J, G, H);
  }
}, readdirSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.readdirSync(${Q})`, 0);
    return u.readdirSync(Q, { withFileTypes: true });
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, readdirStringSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.readdirStringSync(${Q})`, 0);
    return u.readdirSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, isDirEmptySync(Q) {
  let $ = [];
  try {
    const X = X0($, U0`fs.isDirEmptySync(${Q})`, 0);
    let Y = this.readdirSync(Q);
    return Y.length === 0;
  } catch (J) {
    var W = J, G = 1;
  } finally {
    Y0($, W, G);
  }
}, rmdirSync(Q) {
  let Y = [];
  try {
    const X = X0(Y, U0`fs.rmdirSync(${Q})`, 0);
    u.rmdirSync(Q);
  } catch ($) {
    var J = $, W = 1;
  } finally {
    Y0(Y, J, W);
  }
}, rmSync(Q, X) {
  let $ = [];
  try {
    const Y = X0($, U0`fs.rmSync(${Q})`, 0);
    u.rmSync(Q, X);
  } catch (J) {
    var W = J, G = 1;
  } finally {
    Y0($, W, G);
  }
}, createWriteStream(Q) {
  return u.createWriteStream(Q);
}, async readFileBytes(Q, X) {
  if (X === void 0) return (0, import_promises2.readFile)(Q);
  let Y = await (0, import_promises2.open)(Q, "r");
  try {
    let { size: $ } = await Y.stat(), J = Math.min($, X), W = Buffer.allocUnsafe(J), G = 0;
    while (G < J) {
      let { bytesRead: H } = await Y.read(W, G, J - G, G);
      if (H === 0) break;
      G += H;
    }
    return G < J ? W.subarray(0, G) : W;
  } finally {
    await Y.close();
  }
} };
var $U = YU;
function i6() {
  return $U;
}
function WU() {
  let Q = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof import_fs.realpathSync === "function") Q = (0, import_fs.realpathSync)((0, import_process.cwd)()).normalize("NFC");
  return { originalCwd: Q, projectRoot: Q, totalCostUSD: 0, totalAPIDuration: 0, totalAPIDurationWithoutRetries: 0, totalToolDuration: 0, tokenSaverBytesSaved: 0, tokenSaverHits: 0, turnHookDurationMs: 0, turnToolDurationMs: 0, turnClassifierDurationMs: 0, turnToolCount: 0, turnHookCount: 0, turnClassifierCount: 0, startTime: Date.now(), lastInteractionTime: Date.now(), totalLinesAdded: 0, totalLinesRemoved: 0, hasUnknownModelCost: false, cwd: Q, modelUsage: {}, mainLoopModelOverride: void 0, initialMainLoopModel: null, modelStrings: null, isInteractive: false, kairosActive: false, sdkAgentProgressSummariesEnabled: false, userMsgOptIn: false, clientType: "cli", sessionSource: void 0, questionPreviewFormat: void 0, sessionIngressToken: void 0, oauthTokenFromFd: void 0, apiKeyFromFd: void 0, flagSettingsPath: void 0, flagSettingsInline: null, allowedSettingSources: ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"], meter: null, sessionCounter: null, locCounter: null, prCounter: null, commitCounter: null, costCounter: null, tokenCounter: null, codeEditToolDecisionCounter: null, activeTimeCounter: null, statsStore: null, sessionId: (0, import_crypto2.randomUUID)(), parentSessionId: void 0, loggerProvider: null, eventLogger: null, meterProvider: null, tracerProvider: null, agentColorMap: /* @__PURE__ */ new Map(), agentColorIndex: 0, lastAPIRequest: null, lastClassifierRequests: null, inMemoryErrorLog: [], inlinePlugins: [], chromeFlagOverride: void 0, useCoworkPlugins: false, sessionBypassPermissionsMode: false, scheduledTasksEnabled: false, sessionCronTasks: [], sessionCreatedTeams: /* @__PURE__ */ new Set(), sessionTrustAccepted: false, sessionPersistenceDisabled: false, hasExitedPlanMode: false, needsPlanModeExitAttachment: false, needsAutoModeExitAttachment: false, lspRecommendationShownThisSession: false, initJsonSchema: null, registeredHooks: null, planSlugCache: /* @__PURE__ */ new Map(), teleportedSessionInfo: null, invokedSkills: /* @__PURE__ */ new Map(), slowOperations: [], sdkBetas: void 0, mainThreadAgentType: void 0, isRemoteMode: false, isInWorktree: false, ...{}, directConnectServerUrl: void 0, systemPromptSectionCache: /* @__PURE__ */ new Map(), lastEmittedDate: null, additionalDirectoriesForClaudeMd: [], allowedChannels: [], sessionProjectDir: null, promptCache1hAllowlist: null, promptId: null };
}
var GU = WU();
function y5() {
  return GU.sessionId;
}
var mQ = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 };
var HU = X1(() => {
  let Q = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
  if (Q && Object.hasOwn(mQ, Q)) return Q;
  return "debug";
});
var BU = false;
var l5 = X1(() => {
  return BU || x9(process.env.DEBUG) || x9(process.env.DEBUG_SDK) || process.argv.includes("--debug") || process.argv.includes("-d") || c5() || process.argv.some((Q) => Q.startsWith("--debug=")) || p5() !== null;
});
var zU = X1(() => {
  let Q = process.argv.find((Y) => Y.startsWith("--debug="));
  if (!Q) return null;
  let X = Q.substring(8);
  return k5(X);
});
var c5 = X1(() => {
  return process.argv.includes("--debug-to-stderr") || process.argv.includes("-d2e");
});
var p5 = X1(() => {
  for (let Q = 0; Q < process.argv.length; Q++) {
    let X = process.argv[Q];
    if (X.startsWith("--debug-file=")) return X.substring(13);
    if (X === "--debug-file" && Q + 1 < process.argv.length) return process.argv[Q + 1];
  }
  return null;
});
function d5() {
  return p5() ?? process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? (0, import_path4.join)(c6(), "debug", `${y5()}.txt`);
}
var UU = X1(() => {
  try {
    let Q = d5(), X = (0, import_path4.dirname)(Q), Y = (0, import_path4.join)(X, "latest");
    try {
      i6().mkdirSync(X);
    } catch {
    }
    try {
      i6().unlinkSync(Y);
    } catch {
    }
    i6().symlinkSync(Q, Y);
  } catch {
  }
});
var $C = (() => {
  let Q = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (Q !== void 0) {
    let X = Number(Q);
    if (!Number.isNaN(X) && X >= 0) return X;
  }
  return 1 / 0;
})();
var LU = { [Symbol.dispose]() {
} };
function FU() {
  return LU;
}
var U0 = FU;
var IU = (0, import_util3.promisify)(import_child_process2.execFile);
var i1 = {};
gQ(i1, { void: () => uL, util: () => d, unknown: () => hL, union: () => cL, undefined: () => xL, tuple: () => iL, transformer: () => YF, symbol: () => TL, string: () => MJ, strictObject: () => lL, setErrorMap: () => WL, set: () => rL, record: () => nL, quotelessJson: () => $L, promise: () => XF, preprocess: () => WF, pipeline: () => GF, ostring: () => HF, optional: () => $F, onumber: () => BF, oboolean: () => zF, objectUtil: () => eQ, object: () => YX, number: () => wJ, nullable: () => JF, null: () => yL, never: () => fL, nativeEnum: () => QF, nan: () => _L, map: () => oL, makeIssue: () => m9, literal: () => sL, lazy: () => aL, late: () => CL, isValid: () => m1, isDirty: () => X8, isAsync: () => t6, isAborted: () => Q8, intersection: () => dL, instanceof: () => SL, getParsedType: () => M1, getErrorMap: () => r6, function: () => tL, enum: () => eL, effect: () => YF, discriminatedUnion: () => pL, defaultErrorMap: () => Z1, datetimeRegex: () => NJ, date: () => vL, custom: () => DJ, coerce: () => KF, boolean: () => AJ, bigint: () => kL, array: () => mL, any: () => gL, addIssueToContext: () => b, ZodVoid: () => c9, ZodUnknown: () => l1, ZodUnion: () => Y9, ZodUndefined: () => Q9, ZodType: () => p, ZodTuple: () => A1, ZodTransformer: () => W1, ZodSymbol: () => l9, ZodString: () => Y1, ZodSet: () => O6, ZodSchema: () => p, ZodRecord: () => p9, ZodReadonly: () => z9, ZodPromise: () => D6, ZodPipeline: () => n9, ZodParsedType: () => I, ZodOptional: () => m0, ZodObject: () => L0, ZodNumber: () => c1, ZodNullable: () => S1, ZodNull: () => X9, ZodNever: () => w1, ZodNativeEnum: () => G9, ZodNaN: () => i9, ZodMap: () => d9, ZodLiteral: () => W9, ZodLazy: () => J9, ZodIssueCode: () => w, ZodIntersection: () => $9, ZodFunction: () => s6, ZodFirstPartyTypeKind: () => j, ZodError: () => x0, ZodEnum: () => d1, ZodEffects: () => W1, ZodDiscriminatedUnion: () => Y8, ZodDefault: () => H9, ZodDate: () => F6, ZodCatch: () => B9, ZodBranded: () => $8, ZodBoolean: () => e6, ZodBigInt: () => p1, ZodArray: () => $1, ZodAny: () => N6, Schema: () => p, ParseStatus: () => A0, OK: () => P0, NEVER: () => VF, INVALID: () => x, EMPTY_PATH: () => GL, DIRTY: () => L6, BRAND: () => ZL });
var d;
(function(Q) {
  Q.assertEqual = (J) => {
  };
  function X(J) {
  }
  Q.assertIs = X;
  function Y(J) {
    throw Error();
  }
  Q.assertNever = Y, Q.arrayToEnum = (J) => {
    let W = {};
    for (let G of J) W[G] = G;
    return W;
  }, Q.getValidEnumValues = (J) => {
    let W = Q.objectKeys(J).filter((H) => typeof J[J[H]] !== "number"), G = {};
    for (let H of W) G[H] = J[H];
    return Q.objectValues(G);
  }, Q.objectValues = (J) => {
    return Q.objectKeys(J).map(function(W) {
      return J[W];
    });
  }, Q.objectKeys = typeof Object.keys === "function" ? (J) => Object.keys(J) : (J) => {
    let W = [];
    for (let G in J) if (Object.prototype.hasOwnProperty.call(J, G)) W.push(G);
    return W;
  }, Q.find = (J, W) => {
    for (let G of J) if (W(G)) return G;
    return;
  }, Q.isInteger = typeof Number.isInteger === "function" ? (J) => Number.isInteger(J) : (J) => typeof J === "number" && Number.isFinite(J) && Math.floor(J) === J;
  function $(J, W = " | ") {
    return J.map((G) => typeof G === "string" ? `'${G}'` : G).join(W);
  }
  Q.joinValues = $, Q.jsonStringifyReplacer = (J, W) => {
    if (typeof W === "bigint") return W.toString();
    return W;
  };
})(d || (d = {}));
var eQ;
(function(Q) {
  Q.mergeShapes = (X, Y) => {
    return { ...X, ...Y };
  };
})(eQ || (eQ = {}));
var I = d.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var M1 = (Q) => {
  switch (typeof Q) {
    case "undefined":
      return I.undefined;
    case "string":
      return I.string;
    case "number":
      return Number.isNaN(Q) ? I.nan : I.number;
    case "boolean":
      return I.boolean;
    case "function":
      return I.function;
    case "bigint":
      return I.bigint;
    case "symbol":
      return I.symbol;
    case "object":
      if (Array.isArray(Q)) return I.array;
      if (Q === null) return I.null;
      if (Q.then && typeof Q.then === "function" && Q.catch && typeof Q.catch === "function") return I.promise;
      if (typeof Map < "u" && Q instanceof Map) return I.map;
      if (typeof Set < "u" && Q instanceof Set) return I.set;
      if (typeof Date < "u" && Q instanceof Date) return I.date;
      return I.object;
    default:
      return I.unknown;
  }
};
var w = d.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var $L = (Q) => {
  return JSON.stringify(Q, null, 2).replace(/"([^"]+)":/g, "$1:");
};
var x0 = class _x0 extends Error {
  get errors() {
    return this.issues;
  }
  constructor(Q) {
    super();
    this.issues = [], this.addIssue = (Y) => {
      this.issues = [...this.issues, Y];
    }, this.addIssues = (Y = []) => {
      this.issues = [...this.issues, ...Y];
    };
    let X = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, X);
    else this.__proto__ = X;
    this.name = "ZodError", this.issues = Q;
  }
  format(Q) {
    let X = Q || function(J) {
      return J.message;
    }, Y = { _errors: [] }, $ = (J) => {
      for (let W of J.issues) if (W.code === "invalid_union") W.unionErrors.map($);
      else if (W.code === "invalid_return_type") $(W.returnTypeError);
      else if (W.code === "invalid_arguments") $(W.argumentsError);
      else if (W.path.length === 0) Y._errors.push(X(W));
      else {
        let G = Y, H = 0;
        while (H < W.path.length) {
          let B = W.path[H];
          if (H !== W.path.length - 1) G[B] = G[B] || { _errors: [] };
          else G[B] = G[B] || { _errors: [] }, G[B]._errors.push(X(W));
          G = G[B], H++;
        }
      }
    };
    return $(this), Y;
  }
  static assert(Q) {
    if (!(Q instanceof _x0)) throw Error(`Not a ZodError: ${Q}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, d.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(Q = (X) => X.message) {
    let X = {}, Y = [];
    for (let $ of this.issues) if ($.path.length > 0) {
      let J = $.path[0];
      X[J] = X[J] || [], X[J].push(Q($));
    } else Y.push(Q($));
    return { formErrors: Y, fieldErrors: X };
  }
  get formErrors() {
    return this.flatten();
  }
};
x0.create = (Q) => {
  return new x0(Q);
};
var JL = (Q, X) => {
  let Y;
  switch (Q.code) {
    case w.invalid_type:
      if (Q.received === I.undefined) Y = "Required";
      else Y = `Expected ${Q.expected}, received ${Q.received}`;
      break;
    case w.invalid_literal:
      Y = `Invalid literal value, expected ${JSON.stringify(Q.expected, d.jsonStringifyReplacer)}`;
      break;
    case w.unrecognized_keys:
      Y = `Unrecognized key(s) in object: ${d.joinValues(Q.keys, ", ")}`;
      break;
    case w.invalid_union:
      Y = "Invalid input";
      break;
    case w.invalid_union_discriminator:
      Y = `Invalid discriminator value. Expected ${d.joinValues(Q.options)}`;
      break;
    case w.invalid_enum_value:
      Y = `Invalid enum value. Expected ${d.joinValues(Q.options)}, received '${Q.received}'`;
      break;
    case w.invalid_arguments:
      Y = "Invalid function arguments";
      break;
    case w.invalid_return_type:
      Y = "Invalid function return type";
      break;
    case w.invalid_date:
      Y = "Invalid date";
      break;
    case w.invalid_string:
      if (typeof Q.validation === "object") if ("includes" in Q.validation) {
        if (Y = `Invalid input: must include "${Q.validation.includes}"`, typeof Q.validation.position === "number") Y = `${Y} at one or more positions greater than or equal to ${Q.validation.position}`;
      } else if ("startsWith" in Q.validation) Y = `Invalid input: must start with "${Q.validation.startsWith}"`;
      else if ("endsWith" in Q.validation) Y = `Invalid input: must end with "${Q.validation.endsWith}"`;
      else d.assertNever(Q.validation);
      else if (Q.validation !== "regex") Y = `Invalid ${Q.validation}`;
      else Y = "Invalid";
      break;
    case w.too_small:
      if (Q.type === "array") Y = `Array must contain ${Q.exact ? "exactly" : Q.inclusive ? "at least" : "more than"} ${Q.minimum} element(s)`;
      else if (Q.type === "string") Y = `String must contain ${Q.exact ? "exactly" : Q.inclusive ? "at least" : "over"} ${Q.minimum} character(s)`;
      else if (Q.type === "number") Y = `Number must be ${Q.exact ? "exactly equal to " : Q.inclusive ? "greater than or equal to " : "greater than "}${Q.minimum}`;
      else if (Q.type === "bigint") Y = `Number must be ${Q.exact ? "exactly equal to " : Q.inclusive ? "greater than or equal to " : "greater than "}${Q.minimum}`;
      else if (Q.type === "date") Y = `Date must be ${Q.exact ? "exactly equal to " : Q.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(Q.minimum))}`;
      else Y = "Invalid input";
      break;
    case w.too_big:
      if (Q.type === "array") Y = `Array must contain ${Q.exact ? "exactly" : Q.inclusive ? "at most" : "less than"} ${Q.maximum} element(s)`;
      else if (Q.type === "string") Y = `String must contain ${Q.exact ? "exactly" : Q.inclusive ? "at most" : "under"} ${Q.maximum} character(s)`;
      else if (Q.type === "number") Y = `Number must be ${Q.exact ? "exactly" : Q.inclusive ? "less than or equal to" : "less than"} ${Q.maximum}`;
      else if (Q.type === "bigint") Y = `BigInt must be ${Q.exact ? "exactly" : Q.inclusive ? "less than or equal to" : "less than"} ${Q.maximum}`;
      else if (Q.type === "date") Y = `Date must be ${Q.exact ? "exactly" : Q.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(Q.maximum))}`;
      else Y = "Invalid input";
      break;
    case w.custom:
      Y = "Invalid input";
      break;
    case w.invalid_intersection_types:
      Y = "Intersection results could not be merged";
      break;
    case w.not_multiple_of:
      Y = `Number must be a multiple of ${Q.multipleOf}`;
      break;
    case w.not_finite:
      Y = "Number must be finite";
      break;
    default:
      Y = X.defaultError, d.assertNever(Q);
  }
  return { message: Y };
};
var Z1 = JL;
var VJ = Z1;
function WL(Q) {
  VJ = Q;
}
function r6() {
  return VJ;
}
var m9 = (Q) => {
  let { data: X, path: Y, errorMaps: $, issueData: J } = Q, W = [...Y, ...J.path || []], G = { ...J, path: W };
  if (J.message !== void 0) return { ...J, path: W, message: J.message };
  let H = "", B = $.filter((z2) => !!z2).slice().reverse();
  for (let z2 of B) H = z2(G, { data: X, defaultError: H }).message;
  return { ...J, path: W, message: H };
};
var GL = [];
function b(Q, X) {
  let Y = r6(), $ = m9({ issueData: X, data: Q.data, path: Q.path, errorMaps: [Q.common.contextualErrorMap, Q.schemaErrorMap, Y, Y === Z1 ? void 0 : Z1].filter((J) => !!J) });
  Q.common.issues.push($);
}
var A0 = class _A0 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(Q, X) {
    let Y = [];
    for (let $ of X) {
      if ($.status === "aborted") return x;
      if ($.status === "dirty") Q.dirty();
      Y.push($.value);
    }
    return { status: Q.value, value: Y };
  }
  static async mergeObjectAsync(Q, X) {
    let Y = [];
    for (let $ of X) {
      let J = await $.key, W = await $.value;
      Y.push({ key: J, value: W });
    }
    return _A0.mergeObjectSync(Q, Y);
  }
  static mergeObjectSync(Q, X) {
    let Y = {};
    for (let $ of X) {
      let { key: J, value: W } = $;
      if (J.status === "aborted") return x;
      if (W.status === "aborted") return x;
      if (J.status === "dirty") Q.dirty();
      if (W.status === "dirty") Q.dirty();
      if (J.value !== "__proto__" && (typeof W.value < "u" || $.alwaysSet)) Y[J.value] = W.value;
    }
    return { status: Q.value, value: Y };
  }
};
var x = Object.freeze({ status: "aborted" });
var L6 = (Q) => ({ status: "dirty", value: Q });
var P0 = (Q) => ({ status: "valid", value: Q });
var Q8 = (Q) => Q.status === "aborted";
var X8 = (Q) => Q.status === "dirty";
var m1 = (Q) => Q.status === "valid";
var t6 = (Q) => typeof Promise < "u" && Q instanceof Promise;
var S;
(function(Q) {
  Q.errToObj = (X) => typeof X === "string" ? { message: X } : X || {}, Q.toString = (X) => typeof X === "string" ? X : X?.message;
})(S || (S = {}));
var J1 = class {
  constructor(Q, X, Y, $) {
    this._cachedPath = [], this.parent = Q, this.data = X, this._path = Y, this._key = $;
  }
  get path() {
    if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
    else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
};
var qJ = (Q, X) => {
  if (m1(X)) return { success: true, data: X.value };
  else {
    if (!Q.common.issues.length) throw Error("Validation failed but no issues detected.");
    return { success: false, get error() {
      if (this._error) return this._error;
      let Y = new x0(Q.common.issues);
      return this._error = Y, this._error;
    } };
  }
};
function m(Q) {
  if (!Q) return {};
  let { errorMap: X, invalid_type_error: Y, required_error: $, description: J } = Q;
  if (X && (Y || $)) throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (X) return { errorMap: X, description: J };
  return { errorMap: (G, H) => {
    let { message: B } = Q;
    if (G.code === "invalid_enum_value") return { message: B ?? H.defaultError };
    if (typeof H.data > "u") return { message: B ?? $ ?? H.defaultError };
    if (G.code !== "invalid_type") return { message: H.defaultError };
    return { message: B ?? Y ?? H.defaultError };
  }, description: J };
}
var p = class {
  get description() {
    return this._def.description;
  }
  _getType(Q) {
    return M1(Q.data);
  }
  _getOrReturnCtx(Q, X) {
    return X || { common: Q.parent.common, data: Q.data, parsedType: M1(Q.data), schemaErrorMap: this._def.errorMap, path: Q.path, parent: Q.parent };
  }
  _processInputParams(Q) {
    return { status: new A0(), ctx: { common: Q.parent.common, data: Q.data, parsedType: M1(Q.data), schemaErrorMap: this._def.errorMap, path: Q.path, parent: Q.parent } };
  }
  _parseSync(Q) {
    let X = this._parse(Q);
    if (t6(X)) throw Error("Synchronous parse encountered promise.");
    return X;
  }
  _parseAsync(Q) {
    let X = this._parse(Q);
    return Promise.resolve(X);
  }
  parse(Q, X) {
    let Y = this.safeParse(Q, X);
    if (Y.success) return Y.data;
    throw Y.error;
  }
  safeParse(Q, X) {
    let Y = { common: { issues: [], async: X?.async ?? false, contextualErrorMap: X?.errorMap }, path: X?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: Q, parsedType: M1(Q) }, $ = this._parseSync({ data: Q, path: Y.path, parent: Y });
    return qJ(Y, $);
  }
  "~validate"(Q) {
    let X = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: Q, parsedType: M1(Q) };
    if (!this["~standard"].async) try {
      let Y = this._parseSync({ data: Q, path: [], parent: X });
      return m1(Y) ? { value: Y.value } : { issues: X.common.issues };
    } catch (Y) {
      if (Y?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
      X.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: Q, path: [], parent: X }).then((Y) => m1(Y) ? { value: Y.value } : { issues: X.common.issues });
  }
  async parseAsync(Q, X) {
    let Y = await this.safeParseAsync(Q, X);
    if (Y.success) return Y.data;
    throw Y.error;
  }
  async safeParseAsync(Q, X) {
    let Y = { common: { issues: [], contextualErrorMap: X?.errorMap, async: true }, path: X?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: Q, parsedType: M1(Q) }, $ = this._parse({ data: Q, path: Y.path, parent: Y }), J = await (t6($) ? $ : Promise.resolve($));
    return qJ(Y, J);
  }
  refine(Q, X) {
    let Y = ($) => {
      if (typeof X === "string" || typeof X > "u") return { message: X };
      else if (typeof X === "function") return X($);
      else return X;
    };
    return this._refinement(($, J) => {
      let W = Q($), G = () => J.addIssue({ code: w.custom, ...Y($) });
      if (typeof Promise < "u" && W instanceof Promise) return W.then((H) => {
        if (!H) return G(), false;
        else return true;
      });
      if (!W) return G(), false;
      else return true;
    });
  }
  refinement(Q, X) {
    return this._refinement((Y, $) => {
      if (!Q(Y)) return $.addIssue(typeof X === "function" ? X(Y, $) : X), false;
      else return true;
    });
  }
  _refinement(Q) {
    return new W1({ schema: this, typeName: j.ZodEffects, effect: { type: "refinement", refinement: Q } });
  }
  superRefine(Q) {
    return this._refinement(Q);
  }
  constructor(Q) {
    this.spa = this.safeParseAsync, this._def = Q, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (X) => this["~validate"](X) };
  }
  optional() {
    return m0.create(this, this._def);
  }
  nullable() {
    return S1.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $1.create(this);
  }
  promise() {
    return D6.create(this, this._def);
  }
  or(Q) {
    return Y9.create([this, Q], this._def);
  }
  and(Q) {
    return $9.create(this, Q, this._def);
  }
  transform(Q) {
    return new W1({ ...m(this._def), schema: this, typeName: j.ZodEffects, effect: { type: "transform", transform: Q } });
  }
  default(Q) {
    let X = typeof Q === "function" ? Q : () => Q;
    return new H9({ ...m(this._def), innerType: this, defaultValue: X, typeName: j.ZodDefault });
  }
  brand() {
    return new $8({ typeName: j.ZodBranded, type: this, ...m(this._def) });
  }
  catch(Q) {
    let X = typeof Q === "function" ? Q : () => Q;
    return new B9({ ...m(this._def), innerType: this, catchValue: X, typeName: j.ZodCatch });
  }
  describe(Q) {
    return new this.constructor({ ...this._def, description: Q });
  }
  pipe(Q) {
    return n9.create(this, Q);
  }
  readonly() {
    return z9.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var HL = /^c[^\s-]{8,}$/i;
var BL = /^[0-9a-z]+$/;
var zL = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var KL = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var VL = /^[a-z0-9_-]{21}$/i;
var qL = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var UL = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var LL = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var FL = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
var QX;
var NL = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var OL = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var DL = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ML = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var wL = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var AL = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var LJ = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
var jL = new RegExp(`^${LJ}$`);
function FJ(Q) {
  let X = "[0-5]\\d";
  if (Q.precision) X = `${X}\\.\\d{${Q.precision}}`;
  else if (Q.precision == null) X = `${X}(\\.\\d+)?`;
  let Y = Q.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${X})${Y}`;
}
function RL(Q) {
  return new RegExp(`^${FJ(Q)}$`);
}
function NJ(Q) {
  let X = `${LJ}T${FJ(Q)}`, Y = [];
  if (Y.push(Q.local ? "Z?" : "Z"), Q.offset) Y.push("([+-]\\d{2}:?\\d{2})");
  return X = `${X}(${Y.join("|")})`, new RegExp(`^${X}$`);
}
function IL(Q, X) {
  if ((X === "v4" || !X) && NL.test(Q)) return true;
  if ((X === "v6" || !X) && DL.test(Q)) return true;
  return false;
}
function bL(Q, X) {
  if (!qL.test(Q)) return false;
  try {
    let [Y] = Q.split(".");
    if (!Y) return false;
    let $ = Y.replace(/-/g, "+").replace(/_/g, "/").padEnd(Y.length + (4 - Y.length % 4) % 4, "="), J = JSON.parse(atob($));
    if (typeof J !== "object" || J === null) return false;
    if ("typ" in J && J?.typ !== "JWT") return false;
    if (!J.alg) return false;
    if (X && J.alg !== X) return false;
    return true;
  } catch {
    return false;
  }
}
function EL(Q, X) {
  if ((X === "v4" || !X) && OL.test(Q)) return true;
  if ((X === "v6" || !X) && ML.test(Q)) return true;
  return false;
}
var Y1 = class _Y1 extends p {
  _parse(Q) {
    if (this._def.coerce) Q.data = String(Q.data);
    if (this._getType(Q) !== I.string) {
      let J = this._getOrReturnCtx(Q);
      return b(J, { code: w.invalid_type, expected: I.string, received: J.parsedType }), x;
    }
    let Y = new A0(), $ = void 0;
    for (let J of this._def.checks) if (J.kind === "min") {
      if (Q.data.length < J.value) $ = this._getOrReturnCtx(Q, $), b($, { code: w.too_small, minimum: J.value, type: "string", inclusive: true, exact: false, message: J.message }), Y.dirty();
    } else if (J.kind === "max") {
      if (Q.data.length > J.value) $ = this._getOrReturnCtx(Q, $), b($, { code: w.too_big, maximum: J.value, type: "string", inclusive: true, exact: false, message: J.message }), Y.dirty();
    } else if (J.kind === "length") {
      let W = Q.data.length > J.value, G = Q.data.length < J.value;
      if (W || G) {
        if ($ = this._getOrReturnCtx(Q, $), W) b($, { code: w.too_big, maximum: J.value, type: "string", inclusive: true, exact: true, message: J.message });
        else if (G) b($, { code: w.too_small, minimum: J.value, type: "string", inclusive: true, exact: true, message: J.message });
        Y.dirty();
      }
    } else if (J.kind === "email") {
      if (!LL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "email", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "emoji") {
      if (!QX) QX = new RegExp(FL, "u");
      if (!QX.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "emoji", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "uuid") {
      if (!KL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "uuid", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "nanoid") {
      if (!VL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "nanoid", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "cuid") {
      if (!HL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "cuid", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "cuid2") {
      if (!BL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "cuid2", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "ulid") {
      if (!zL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "ulid", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "url") try {
      new URL(Q.data);
    } catch {
      $ = this._getOrReturnCtx(Q, $), b($, { validation: "url", code: w.invalid_string, message: J.message }), Y.dirty();
    }
    else if (J.kind === "regex") {
      if (J.regex.lastIndex = 0, !J.regex.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "regex", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "trim") Q.data = Q.data.trim();
    else if (J.kind === "includes") {
      if (!Q.data.includes(J.value, J.position)) $ = this._getOrReturnCtx(Q, $), b($, { code: w.invalid_string, validation: { includes: J.value, position: J.position }, message: J.message }), Y.dirty();
    } else if (J.kind === "toLowerCase") Q.data = Q.data.toLowerCase();
    else if (J.kind === "toUpperCase") Q.data = Q.data.toUpperCase();
    else if (J.kind === "startsWith") {
      if (!Q.data.startsWith(J.value)) $ = this._getOrReturnCtx(Q, $), b($, { code: w.invalid_string, validation: { startsWith: J.value }, message: J.message }), Y.dirty();
    } else if (J.kind === "endsWith") {
      if (!Q.data.endsWith(J.value)) $ = this._getOrReturnCtx(Q, $), b($, { code: w.invalid_string, validation: { endsWith: J.value }, message: J.message }), Y.dirty();
    } else if (J.kind === "datetime") {
      if (!NJ(J).test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { code: w.invalid_string, validation: "datetime", message: J.message }), Y.dirty();
    } else if (J.kind === "date") {
      if (!jL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { code: w.invalid_string, validation: "date", message: J.message }), Y.dirty();
    } else if (J.kind === "time") {
      if (!RL(J).test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { code: w.invalid_string, validation: "time", message: J.message }), Y.dirty();
    } else if (J.kind === "duration") {
      if (!UL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "duration", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "ip") {
      if (!IL(Q.data, J.version)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "ip", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "jwt") {
      if (!bL(Q.data, J.alg)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "jwt", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "cidr") {
      if (!EL(Q.data, J.version)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "cidr", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "base64") {
      if (!wL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "base64", code: w.invalid_string, message: J.message }), Y.dirty();
    } else if (J.kind === "base64url") {
      if (!AL.test(Q.data)) $ = this._getOrReturnCtx(Q, $), b($, { validation: "base64url", code: w.invalid_string, message: J.message }), Y.dirty();
    } else d.assertNever(J);
    return { status: Y.value, value: Q.data };
  }
  _regex(Q, X, Y) {
    return this.refinement(($) => Q.test($), { validation: X, code: w.invalid_string, ...S.errToObj(Y) });
  }
  _addCheck(Q) {
    return new _Y1({ ...this._def, checks: [...this._def.checks, Q] });
  }
  email(Q) {
    return this._addCheck({ kind: "email", ...S.errToObj(Q) });
  }
  url(Q) {
    return this._addCheck({ kind: "url", ...S.errToObj(Q) });
  }
  emoji(Q) {
    return this._addCheck({ kind: "emoji", ...S.errToObj(Q) });
  }
  uuid(Q) {
    return this._addCheck({ kind: "uuid", ...S.errToObj(Q) });
  }
  nanoid(Q) {
    return this._addCheck({ kind: "nanoid", ...S.errToObj(Q) });
  }
  cuid(Q) {
    return this._addCheck({ kind: "cuid", ...S.errToObj(Q) });
  }
  cuid2(Q) {
    return this._addCheck({ kind: "cuid2", ...S.errToObj(Q) });
  }
  ulid(Q) {
    return this._addCheck({ kind: "ulid", ...S.errToObj(Q) });
  }
  base64(Q) {
    return this._addCheck({ kind: "base64", ...S.errToObj(Q) });
  }
  base64url(Q) {
    return this._addCheck({ kind: "base64url", ...S.errToObj(Q) });
  }
  jwt(Q) {
    return this._addCheck({ kind: "jwt", ...S.errToObj(Q) });
  }
  ip(Q) {
    return this._addCheck({ kind: "ip", ...S.errToObj(Q) });
  }
  cidr(Q) {
    return this._addCheck({ kind: "cidr", ...S.errToObj(Q) });
  }
  datetime(Q) {
    if (typeof Q === "string") return this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: Q });
    return this._addCheck({ kind: "datetime", precision: typeof Q?.precision > "u" ? null : Q?.precision, offset: Q?.offset ?? false, local: Q?.local ?? false, ...S.errToObj(Q?.message) });
  }
  date(Q) {
    return this._addCheck({ kind: "date", message: Q });
  }
  time(Q) {
    if (typeof Q === "string") return this._addCheck({ kind: "time", precision: null, message: Q });
    return this._addCheck({ kind: "time", precision: typeof Q?.precision > "u" ? null : Q?.precision, ...S.errToObj(Q?.message) });
  }
  duration(Q) {
    return this._addCheck({ kind: "duration", ...S.errToObj(Q) });
  }
  regex(Q, X) {
    return this._addCheck({ kind: "regex", regex: Q, ...S.errToObj(X) });
  }
  includes(Q, X) {
    return this._addCheck({ kind: "includes", value: Q, position: X?.position, ...S.errToObj(X?.message) });
  }
  startsWith(Q, X) {
    return this._addCheck({ kind: "startsWith", value: Q, ...S.errToObj(X) });
  }
  endsWith(Q, X) {
    return this._addCheck({ kind: "endsWith", value: Q, ...S.errToObj(X) });
  }
  min(Q, X) {
    return this._addCheck({ kind: "min", value: Q, ...S.errToObj(X) });
  }
  max(Q, X) {
    return this._addCheck({ kind: "max", value: Q, ...S.errToObj(X) });
  }
  length(Q, X) {
    return this._addCheck({ kind: "length", value: Q, ...S.errToObj(X) });
  }
  nonempty(Q) {
    return this.min(1, S.errToObj(Q));
  }
  trim() {
    return new _Y1({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new _Y1({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new _Y1({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((Q) => Q.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((Q) => Q.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((Q) => Q.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((Q) => Q.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((Q) => Q.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((Q) => Q.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((Q) => Q.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((Q) => Q.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((Q) => Q.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((Q) => Q.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((Q) => Q.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((Q) => Q.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((Q) => Q.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((Q) => Q.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((Q) => Q.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((Q) => Q.kind === "base64url");
  }
  get minLength() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "min") {
      if (Q === null || X.value > Q) Q = X.value;
    }
    return Q;
  }
  get maxLength() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "max") {
      if (Q === null || X.value < Q) Q = X.value;
    }
    return Q;
  }
};
Y1.create = (Q) => {
  return new Y1({ checks: [], typeName: j.ZodString, coerce: Q?.coerce ?? false, ...m(Q) });
};
function PL(Q, X) {
  let Y = (Q.toString().split(".")[1] || "").length, $ = (X.toString().split(".")[1] || "").length, J = Y > $ ? Y : $, W = Number.parseInt(Q.toFixed(J).replace(".", "")), G = Number.parseInt(X.toFixed(J).replace(".", ""));
  return W % G / 10 ** J;
}
var c1 = class _c1 extends p {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(Q) {
    if (this._def.coerce) Q.data = Number(Q.data);
    if (this._getType(Q) !== I.number) {
      let J = this._getOrReturnCtx(Q);
      return b(J, { code: w.invalid_type, expected: I.number, received: J.parsedType }), x;
    }
    let Y = void 0, $ = new A0();
    for (let J of this._def.checks) if (J.kind === "int") {
      if (!d.isInteger(Q.data)) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.invalid_type, expected: "integer", received: "float", message: J.message }), $.dirty();
    } else if (J.kind === "min") {
      if (J.inclusive ? Q.data < J.value : Q.data <= J.value) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.too_small, minimum: J.value, type: "number", inclusive: J.inclusive, exact: false, message: J.message }), $.dirty();
    } else if (J.kind === "max") {
      if (J.inclusive ? Q.data > J.value : Q.data >= J.value) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.too_big, maximum: J.value, type: "number", inclusive: J.inclusive, exact: false, message: J.message }), $.dirty();
    } else if (J.kind === "multipleOf") {
      if (PL(Q.data, J.value) !== 0) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.not_multiple_of, multipleOf: J.value, message: J.message }), $.dirty();
    } else if (J.kind === "finite") {
      if (!Number.isFinite(Q.data)) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.not_finite, message: J.message }), $.dirty();
    } else d.assertNever(J);
    return { status: $.value, value: Q.data };
  }
  gte(Q, X) {
    return this.setLimit("min", Q, true, S.toString(X));
  }
  gt(Q, X) {
    return this.setLimit("min", Q, false, S.toString(X));
  }
  lte(Q, X) {
    return this.setLimit("max", Q, true, S.toString(X));
  }
  lt(Q, X) {
    return this.setLimit("max", Q, false, S.toString(X));
  }
  setLimit(Q, X, Y, $) {
    return new _c1({ ...this._def, checks: [...this._def.checks, { kind: Q, value: X, inclusive: Y, message: S.toString($) }] });
  }
  _addCheck(Q) {
    return new _c1({ ...this._def, checks: [...this._def.checks, Q] });
  }
  int(Q) {
    return this._addCheck({ kind: "int", message: S.toString(Q) });
  }
  positive(Q) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: S.toString(Q) });
  }
  negative(Q) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: S.toString(Q) });
  }
  nonpositive(Q) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: S.toString(Q) });
  }
  nonnegative(Q) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: S.toString(Q) });
  }
  multipleOf(Q, X) {
    return this._addCheck({ kind: "multipleOf", value: Q, message: S.toString(X) });
  }
  finite(Q) {
    return this._addCheck({ kind: "finite", message: S.toString(Q) });
  }
  safe(Q) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: S.toString(Q) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: S.toString(Q) });
  }
  get minValue() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "min") {
      if (Q === null || X.value > Q) Q = X.value;
    }
    return Q;
  }
  get maxValue() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "max") {
      if (Q === null || X.value < Q) Q = X.value;
    }
    return Q;
  }
  get isInt() {
    return !!this._def.checks.find((Q) => Q.kind === "int" || Q.kind === "multipleOf" && d.isInteger(Q.value));
  }
  get isFinite() {
    let Q = null, X = null;
    for (let Y of this._def.checks) if (Y.kind === "finite" || Y.kind === "int" || Y.kind === "multipleOf") return true;
    else if (Y.kind === "min") {
      if (X === null || Y.value > X) X = Y.value;
    } else if (Y.kind === "max") {
      if (Q === null || Y.value < Q) Q = Y.value;
    }
    return Number.isFinite(X) && Number.isFinite(Q);
  }
};
c1.create = (Q) => {
  return new c1({ checks: [], typeName: j.ZodNumber, coerce: Q?.coerce || false, ...m(Q) });
};
var p1 = class _p1 extends p {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte;
  }
  _parse(Q) {
    if (this._def.coerce) try {
      Q.data = BigInt(Q.data);
    } catch {
      return this._getInvalidInput(Q);
    }
    if (this._getType(Q) !== I.bigint) return this._getInvalidInput(Q);
    let Y = void 0, $ = new A0();
    for (let J of this._def.checks) if (J.kind === "min") {
      if (J.inclusive ? Q.data < J.value : Q.data <= J.value) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.too_small, type: "bigint", minimum: J.value, inclusive: J.inclusive, message: J.message }), $.dirty();
    } else if (J.kind === "max") {
      if (J.inclusive ? Q.data > J.value : Q.data >= J.value) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.too_big, type: "bigint", maximum: J.value, inclusive: J.inclusive, message: J.message }), $.dirty();
    } else if (J.kind === "multipleOf") {
      if (Q.data % J.value !== BigInt(0)) Y = this._getOrReturnCtx(Q, Y), b(Y, { code: w.not_multiple_of, multipleOf: J.value, message: J.message }), $.dirty();
    } else d.assertNever(J);
    return { status: $.value, value: Q.data };
  }
  _getInvalidInput(Q) {
    let X = this._getOrReturnCtx(Q);
    return b(X, { code: w.invalid_type, expected: I.bigint, received: X.parsedType }), x;
  }
  gte(Q, X) {
    return this.setLimit("min", Q, true, S.toString(X));
  }
  gt(Q, X) {
    return this.setLimit("min", Q, false, S.toString(X));
  }
  lte(Q, X) {
    return this.setLimit("max", Q, true, S.toString(X));
  }
  lt(Q, X) {
    return this.setLimit("max", Q, false, S.toString(X));
  }
  setLimit(Q, X, Y, $) {
    return new _p1({ ...this._def, checks: [...this._def.checks, { kind: Q, value: X, inclusive: Y, message: S.toString($) }] });
  }
  _addCheck(Q) {
    return new _p1({ ...this._def, checks: [...this._def.checks, Q] });
  }
  positive(Q) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: S.toString(Q) });
  }
  negative(Q) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: S.toString(Q) });
  }
  nonpositive(Q) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: S.toString(Q) });
  }
  nonnegative(Q) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: S.toString(Q) });
  }
  multipleOf(Q, X) {
    return this._addCheck({ kind: "multipleOf", value: Q, message: S.toString(X) });
  }
  get minValue() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "min") {
      if (Q === null || X.value > Q) Q = X.value;
    }
    return Q;
  }
  get maxValue() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "max") {
      if (Q === null || X.value < Q) Q = X.value;
    }
    return Q;
  }
};
p1.create = (Q) => {
  return new p1({ checks: [], typeName: j.ZodBigInt, coerce: Q?.coerce ?? false, ...m(Q) });
};
var e6 = class extends p {
  _parse(Q) {
    if (this._def.coerce) Q.data = Boolean(Q.data);
    if (this._getType(Q) !== I.boolean) {
      let Y = this._getOrReturnCtx(Q);
      return b(Y, { code: w.invalid_type, expected: I.boolean, received: Y.parsedType }), x;
    }
    return P0(Q.data);
  }
};
e6.create = (Q) => {
  return new e6({ typeName: j.ZodBoolean, coerce: Q?.coerce || false, ...m(Q) });
};
var F6 = class _F6 extends p {
  _parse(Q) {
    if (this._def.coerce) Q.data = new Date(Q.data);
    if (this._getType(Q) !== I.date) {
      let J = this._getOrReturnCtx(Q);
      return b(J, { code: w.invalid_type, expected: I.date, received: J.parsedType }), x;
    }
    if (Number.isNaN(Q.data.getTime())) {
      let J = this._getOrReturnCtx(Q);
      return b(J, { code: w.invalid_date }), x;
    }
    let Y = new A0(), $ = void 0;
    for (let J of this._def.checks) if (J.kind === "min") {
      if (Q.data.getTime() < J.value) $ = this._getOrReturnCtx(Q, $), b($, { code: w.too_small, message: J.message, inclusive: true, exact: false, minimum: J.value, type: "date" }), Y.dirty();
    } else if (J.kind === "max") {
      if (Q.data.getTime() > J.value) $ = this._getOrReturnCtx(Q, $), b($, { code: w.too_big, message: J.message, inclusive: true, exact: false, maximum: J.value, type: "date" }), Y.dirty();
    } else d.assertNever(J);
    return { status: Y.value, value: new Date(Q.data.getTime()) };
  }
  _addCheck(Q) {
    return new _F6({ ...this._def, checks: [...this._def.checks, Q] });
  }
  min(Q, X) {
    return this._addCheck({ kind: "min", value: Q.getTime(), message: S.toString(X) });
  }
  max(Q, X) {
    return this._addCheck({ kind: "max", value: Q.getTime(), message: S.toString(X) });
  }
  get minDate() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "min") {
      if (Q === null || X.value > Q) Q = X.value;
    }
    return Q != null ? new Date(Q) : null;
  }
  get maxDate() {
    let Q = null;
    for (let X of this._def.checks) if (X.kind === "max") {
      if (Q === null || X.value < Q) Q = X.value;
    }
    return Q != null ? new Date(Q) : null;
  }
};
F6.create = (Q) => {
  return new F6({ checks: [], coerce: Q?.coerce || false, typeName: j.ZodDate, ...m(Q) });
};
var l9 = class extends p {
  _parse(Q) {
    if (this._getType(Q) !== I.symbol) {
      let Y = this._getOrReturnCtx(Q);
      return b(Y, { code: w.invalid_type, expected: I.symbol, received: Y.parsedType }), x;
    }
    return P0(Q.data);
  }
};
l9.create = (Q) => {
  return new l9({ typeName: j.ZodSymbol, ...m(Q) });
};
var Q9 = class extends p {
  _parse(Q) {
    if (this._getType(Q) !== I.undefined) {
      let Y = this._getOrReturnCtx(Q);
      return b(Y, { code: w.invalid_type, expected: I.undefined, received: Y.parsedType }), x;
    }
    return P0(Q.data);
  }
};
Q9.create = (Q) => {
  return new Q9({ typeName: j.ZodUndefined, ...m(Q) });
};
var X9 = class extends p {
  _parse(Q) {
    if (this._getType(Q) !== I.null) {
      let Y = this._getOrReturnCtx(Q);
      return b(Y, { code: w.invalid_type, expected: I.null, received: Y.parsedType }), x;
    }
    return P0(Q.data);
  }
};
X9.create = (Q) => {
  return new X9({ typeName: j.ZodNull, ...m(Q) });
};
var N6 = class extends p {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(Q) {
    return P0(Q.data);
  }
};
N6.create = (Q) => {
  return new N6({ typeName: j.ZodAny, ...m(Q) });
};
var l1 = class extends p {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(Q) {
    return P0(Q.data);
  }
};
l1.create = (Q) => {
  return new l1({ typeName: j.ZodUnknown, ...m(Q) });
};
var w1 = class extends p {
  _parse(Q) {
    let X = this._getOrReturnCtx(Q);
    return b(X, { code: w.invalid_type, expected: I.never, received: X.parsedType }), x;
  }
};
w1.create = (Q) => {
  return new w1({ typeName: j.ZodNever, ...m(Q) });
};
var c9 = class extends p {
  _parse(Q) {
    if (this._getType(Q) !== I.undefined) {
      let Y = this._getOrReturnCtx(Q);
      return b(Y, { code: w.invalid_type, expected: I.void, received: Y.parsedType }), x;
    }
    return P0(Q.data);
  }
};
c9.create = (Q) => {
  return new c9({ typeName: j.ZodVoid, ...m(Q) });
};
var $1 = class _$1 extends p {
  _parse(Q) {
    let { ctx: X, status: Y } = this._processInputParams(Q), $ = this._def;
    if (X.parsedType !== I.array) return b(X, { code: w.invalid_type, expected: I.array, received: X.parsedType }), x;
    if ($.exactLength !== null) {
      let W = X.data.length > $.exactLength.value, G = X.data.length < $.exactLength.value;
      if (W || G) b(X, { code: W ? w.too_big : w.too_small, minimum: G ? $.exactLength.value : void 0, maximum: W ? $.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: $.exactLength.message }), Y.dirty();
    }
    if ($.minLength !== null) {
      if (X.data.length < $.minLength.value) b(X, { code: w.too_small, minimum: $.minLength.value, type: "array", inclusive: true, exact: false, message: $.minLength.message }), Y.dirty();
    }
    if ($.maxLength !== null) {
      if (X.data.length > $.maxLength.value) b(X, { code: w.too_big, maximum: $.maxLength.value, type: "array", inclusive: true, exact: false, message: $.maxLength.message }), Y.dirty();
    }
    if (X.common.async) return Promise.all([...X.data].map((W, G) => {
      return $.type._parseAsync(new J1(X, W, X.path, G));
    })).then((W) => {
      return A0.mergeArray(Y, W);
    });
    let J = [...X.data].map((W, G) => {
      return $.type._parseSync(new J1(X, W, X.path, G));
    });
    return A0.mergeArray(Y, J);
  }
  get element() {
    return this._def.type;
  }
  min(Q, X) {
    return new _$1({ ...this._def, minLength: { value: Q, message: S.toString(X) } });
  }
  max(Q, X) {
    return new _$1({ ...this._def, maxLength: { value: Q, message: S.toString(X) } });
  }
  length(Q, X) {
    return new _$1({ ...this._def, exactLength: { value: Q, message: S.toString(X) } });
  }
  nonempty(Q) {
    return this.min(1, Q);
  }
};
$1.create = (Q, X) => {
  return new $1({ type: Q, minLength: null, maxLength: null, exactLength: null, typeName: j.ZodArray, ...m(X) });
};
function a6(Q) {
  if (Q instanceof L0) {
    let X = {};
    for (let Y in Q.shape) {
      let $ = Q.shape[Y];
      X[Y] = m0.create(a6($));
    }
    return new L0({ ...Q._def, shape: () => X });
  } else if (Q instanceof $1) return new $1({ ...Q._def, type: a6(Q.element) });
  else if (Q instanceof m0) return m0.create(a6(Q.unwrap()));
  else if (Q instanceof S1) return S1.create(a6(Q.unwrap()));
  else if (Q instanceof A1) return A1.create(Q.items.map((X) => a6(X)));
  else return Q;
}
var L0 = class _L0 extends p {
  constructor() {
    super(...arguments);
    this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let Q = this._def.shape(), X = d.objectKeys(Q);
    return this._cached = { shape: Q, keys: X }, this._cached;
  }
  _parse(Q) {
    if (this._getType(Q) !== I.object) {
      let B = this._getOrReturnCtx(Q);
      return b(B, { code: w.invalid_type, expected: I.object, received: B.parsedType }), x;
    }
    let { status: Y, ctx: $ } = this._processInputParams(Q), { shape: J, keys: W } = this._getCached(), G = [];
    if (!(this._def.catchall instanceof w1 && this._def.unknownKeys === "strip")) {
      for (let B in $.data) if (!W.includes(B)) G.push(B);
    }
    let H = [];
    for (let B of W) {
      let z2 = J[B], K = $.data[B];
      H.push({ key: { status: "valid", value: B }, value: z2._parse(new J1($, K, $.path, B)), alwaysSet: B in $.data });
    }
    if (this._def.catchall instanceof w1) {
      let B = this._def.unknownKeys;
      if (B === "passthrough") for (let z2 of G) H.push({ key: { status: "valid", value: z2 }, value: { status: "valid", value: $.data[z2] } });
      else if (B === "strict") {
        if (G.length > 0) b($, { code: w.unrecognized_keys, keys: G }), Y.dirty();
      } else if (B === "strip") ;
      else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let B = this._def.catchall;
      for (let z2 of G) {
        let K = $.data[z2];
        H.push({ key: { status: "valid", value: z2 }, value: B._parse(new J1($, K, $.path, z2)), alwaysSet: z2 in $.data });
      }
    }
    if ($.common.async) return Promise.resolve().then(async () => {
      let B = [];
      for (let z2 of H) {
        let K = await z2.key, U = await z2.value;
        B.push({ key: K, value: U, alwaysSet: z2.alwaysSet });
      }
      return B;
    }).then((B) => {
      return A0.mergeObjectSync(Y, B);
    });
    else return A0.mergeObjectSync(Y, H);
  }
  get shape() {
    return this._def.shape();
  }
  strict(Q) {
    return S.errToObj, new _L0({ ...this._def, unknownKeys: "strict", ...Q !== void 0 ? { errorMap: (X, Y) => {
      let $ = this._def.errorMap?.(X, Y).message ?? Y.defaultError;
      if (X.code === "unrecognized_keys") return { message: S.errToObj(Q).message ?? $ };
      return { message: $ };
    } } : {} });
  }
  strip() {
    return new _L0({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new _L0({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(Q) {
    return new _L0({ ...this._def, shape: () => ({ ...this._def.shape(), ...Q }) });
  }
  merge(Q) {
    return new _L0({ unknownKeys: Q._def.unknownKeys, catchall: Q._def.catchall, shape: () => ({ ...this._def.shape(), ...Q._def.shape() }), typeName: j.ZodObject });
  }
  setKey(Q, X) {
    return this.augment({ [Q]: X });
  }
  catchall(Q) {
    return new _L0({ ...this._def, catchall: Q });
  }
  pick(Q) {
    let X = {};
    for (let Y of d.objectKeys(Q)) if (Q[Y] && this.shape[Y]) X[Y] = this.shape[Y];
    return new _L0({ ...this._def, shape: () => X });
  }
  omit(Q) {
    let X = {};
    for (let Y of d.objectKeys(this.shape)) if (!Q[Y]) X[Y] = this.shape[Y];
    return new _L0({ ...this._def, shape: () => X });
  }
  deepPartial() {
    return a6(this);
  }
  partial(Q) {
    let X = {};
    for (let Y of d.objectKeys(this.shape)) {
      let $ = this.shape[Y];
      if (Q && !Q[Y]) X[Y] = $;
      else X[Y] = $.optional();
    }
    return new _L0({ ...this._def, shape: () => X });
  }
  required(Q) {
    let X = {};
    for (let Y of d.objectKeys(this.shape)) if (Q && !Q[Y]) X[Y] = this.shape[Y];
    else {
      let J = this.shape[Y];
      while (J instanceof m0) J = J._def.innerType;
      X[Y] = J;
    }
    return new _L0({ ...this._def, shape: () => X });
  }
  keyof() {
    return OJ(d.objectKeys(this.shape));
  }
};
L0.create = (Q, X) => {
  return new L0({ shape: () => Q, unknownKeys: "strip", catchall: w1.create(), typeName: j.ZodObject, ...m(X) });
};
L0.strictCreate = (Q, X) => {
  return new L0({ shape: () => Q, unknownKeys: "strict", catchall: w1.create(), typeName: j.ZodObject, ...m(X) });
};
L0.lazycreate = (Q, X) => {
  return new L0({ shape: Q, unknownKeys: "strip", catchall: w1.create(), typeName: j.ZodObject, ...m(X) });
};
var Y9 = class extends p {
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q), Y = this._def.options;
    function $(J) {
      for (let G of J) if (G.result.status === "valid") return G.result;
      for (let G of J) if (G.result.status === "dirty") return X.common.issues.push(...G.ctx.common.issues), G.result;
      let W = J.map((G) => new x0(G.ctx.common.issues));
      return b(X, { code: w.invalid_union, unionErrors: W }), x;
    }
    if (X.common.async) return Promise.all(Y.map(async (J) => {
      let W = { ...X, common: { ...X.common, issues: [] }, parent: null };
      return { result: await J._parseAsync({ data: X.data, path: X.path, parent: W }), ctx: W };
    })).then($);
    else {
      let J = void 0, W = [];
      for (let H of Y) {
        let B = { ...X, common: { ...X.common, issues: [] }, parent: null }, z2 = H._parseSync({ data: X.data, path: X.path, parent: B });
        if (z2.status === "valid") return z2;
        else if (z2.status === "dirty" && !J) J = { result: z2, ctx: B };
        if (B.common.issues.length) W.push(B.common.issues);
      }
      if (J) return X.common.issues.push(...J.ctx.common.issues), J.result;
      let G = W.map((H) => new x0(H));
      return b(X, { code: w.invalid_union, unionErrors: G }), x;
    }
  }
  get options() {
    return this._def.options;
  }
};
Y9.create = (Q, X) => {
  return new Y9({ options: Q, typeName: j.ZodUnion, ...m(X) });
};
var C1 = (Q) => {
  if (Q instanceof J9) return C1(Q.schema);
  else if (Q instanceof W1) return C1(Q.innerType());
  else if (Q instanceof W9) return [Q.value];
  else if (Q instanceof d1) return Q.options;
  else if (Q instanceof G9) return d.objectValues(Q.enum);
  else if (Q instanceof H9) return C1(Q._def.innerType);
  else if (Q instanceof Q9) return [void 0];
  else if (Q instanceof X9) return [null];
  else if (Q instanceof m0) return [void 0, ...C1(Q.unwrap())];
  else if (Q instanceof S1) return [null, ...C1(Q.unwrap())];
  else if (Q instanceof $8) return C1(Q.unwrap());
  else if (Q instanceof z9) return C1(Q.unwrap());
  else if (Q instanceof B9) return C1(Q._def.innerType);
  else return [];
};
var Y8 = class _Y8 extends p {
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q);
    if (X.parsedType !== I.object) return b(X, { code: w.invalid_type, expected: I.object, received: X.parsedType }), x;
    let Y = this.discriminator, $ = X.data[Y], J = this.optionsMap.get($);
    if (!J) return b(X, { code: w.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [Y] }), x;
    if (X.common.async) return J._parseAsync({ data: X.data, path: X.path, parent: X });
    else return J._parseSync({ data: X.data, path: X.path, parent: X });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(Q, X, Y) {
    let $ = /* @__PURE__ */ new Map();
    for (let J of X) {
      let W = C1(J.shape[Q]);
      if (!W.length) throw Error(`A discriminator value for key \`${Q}\` could not be extracted from all schema options`);
      for (let G of W) {
        if ($.has(G)) throw Error(`Discriminator property ${String(Q)} has duplicate value ${String(G)}`);
        $.set(G, J);
      }
    }
    return new _Y8({ typeName: j.ZodDiscriminatedUnion, discriminator: Q, options: X, optionsMap: $, ...m(Y) });
  }
};
function XX(Q, X) {
  let Y = M1(Q), $ = M1(X);
  if (Q === X) return { valid: true, data: Q };
  else if (Y === I.object && $ === I.object) {
    let J = d.objectKeys(X), W = d.objectKeys(Q).filter((H) => J.indexOf(H) !== -1), G = { ...Q, ...X };
    for (let H of W) {
      let B = XX(Q[H], X[H]);
      if (!B.valid) return { valid: false };
      G[H] = B.data;
    }
    return { valid: true, data: G };
  } else if (Y === I.array && $ === I.array) {
    if (Q.length !== X.length) return { valid: false };
    let J = [];
    for (let W = 0; W < Q.length; W++) {
      let G = Q[W], H = X[W], B = XX(G, H);
      if (!B.valid) return { valid: false };
      J.push(B.data);
    }
    return { valid: true, data: J };
  } else if (Y === I.date && $ === I.date && +Q === +X) return { valid: true, data: Q };
  else return { valid: false };
}
var $9 = class extends p {
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q), $ = (J, W) => {
      if (Q8(J) || Q8(W)) return x;
      let G = XX(J.value, W.value);
      if (!G.valid) return b(Y, { code: w.invalid_intersection_types }), x;
      if (X8(J) || X8(W)) X.dirty();
      return { status: X.value, value: G.data };
    };
    if (Y.common.async) return Promise.all([this._def.left._parseAsync({ data: Y.data, path: Y.path, parent: Y }), this._def.right._parseAsync({ data: Y.data, path: Y.path, parent: Y })]).then(([J, W]) => $(J, W));
    else return $(this._def.left._parseSync({ data: Y.data, path: Y.path, parent: Y }), this._def.right._parseSync({ data: Y.data, path: Y.path, parent: Y }));
  }
};
$9.create = (Q, X, Y) => {
  return new $9({ left: Q, right: X, typeName: j.ZodIntersection, ...m(Y) });
};
var A1 = class _A1 extends p {
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q);
    if (Y.parsedType !== I.array) return b(Y, { code: w.invalid_type, expected: I.array, received: Y.parsedType }), x;
    if (Y.data.length < this._def.items.length) return b(Y, { code: w.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), x;
    if (!this._def.rest && Y.data.length > this._def.items.length) b(Y, { code: w.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), X.dirty();
    let J = [...Y.data].map((W, G) => {
      let H = this._def.items[G] || this._def.rest;
      if (!H) return null;
      return H._parse(new J1(Y, W, Y.path, G));
    }).filter((W) => !!W);
    if (Y.common.async) return Promise.all(J).then((W) => {
      return A0.mergeArray(X, W);
    });
    else return A0.mergeArray(X, J);
  }
  get items() {
    return this._def.items;
  }
  rest(Q) {
    return new _A1({ ...this._def, rest: Q });
  }
};
A1.create = (Q, X) => {
  if (!Array.isArray(Q)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new A1({ items: Q, typeName: j.ZodTuple, rest: null, ...m(X) });
};
var p9 = class _p9 extends p {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q);
    if (Y.parsedType !== I.object) return b(Y, { code: w.invalid_type, expected: I.object, received: Y.parsedType }), x;
    let $ = [], J = this._def.keyType, W = this._def.valueType;
    for (let G in Y.data) $.push({ key: J._parse(new J1(Y, G, Y.path, G)), value: W._parse(new J1(Y, Y.data[G], Y.path, G)), alwaysSet: G in Y.data });
    if (Y.common.async) return A0.mergeObjectAsync(X, $);
    else return A0.mergeObjectSync(X, $);
  }
  get element() {
    return this._def.valueType;
  }
  static create(Q, X, Y) {
    if (X instanceof p) return new _p9({ keyType: Q, valueType: X, typeName: j.ZodRecord, ...m(Y) });
    return new _p9({ keyType: Y1.create(), valueType: Q, typeName: j.ZodRecord, ...m(X) });
  }
};
var d9 = class extends p {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q);
    if (Y.parsedType !== I.map) return b(Y, { code: w.invalid_type, expected: I.map, received: Y.parsedType }), x;
    let $ = this._def.keyType, J = this._def.valueType, W = [...Y.data.entries()].map(([G, H], B) => {
      return { key: $._parse(new J1(Y, G, Y.path, [B, "key"])), value: J._parse(new J1(Y, H, Y.path, [B, "value"])) };
    });
    if (Y.common.async) {
      let G = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let H of W) {
          let B = await H.key, z2 = await H.value;
          if (B.status === "aborted" || z2.status === "aborted") return x;
          if (B.status === "dirty" || z2.status === "dirty") X.dirty();
          G.set(B.value, z2.value);
        }
        return { status: X.value, value: G };
      });
    } else {
      let G = /* @__PURE__ */ new Map();
      for (let H of W) {
        let { key: B, value: z2 } = H;
        if (B.status === "aborted" || z2.status === "aborted") return x;
        if (B.status === "dirty" || z2.status === "dirty") X.dirty();
        G.set(B.value, z2.value);
      }
      return { status: X.value, value: G };
    }
  }
};
d9.create = (Q, X, Y) => {
  return new d9({ valueType: X, keyType: Q, typeName: j.ZodMap, ...m(Y) });
};
var O6 = class _O6 extends p {
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q);
    if (Y.parsedType !== I.set) return b(Y, { code: w.invalid_type, expected: I.set, received: Y.parsedType }), x;
    let $ = this._def;
    if ($.minSize !== null) {
      if (Y.data.size < $.minSize.value) b(Y, { code: w.too_small, minimum: $.minSize.value, type: "set", inclusive: true, exact: false, message: $.minSize.message }), X.dirty();
    }
    if ($.maxSize !== null) {
      if (Y.data.size > $.maxSize.value) b(Y, { code: w.too_big, maximum: $.maxSize.value, type: "set", inclusive: true, exact: false, message: $.maxSize.message }), X.dirty();
    }
    let J = this._def.valueType;
    function W(H) {
      let B = /* @__PURE__ */ new Set();
      for (let z2 of H) {
        if (z2.status === "aborted") return x;
        if (z2.status === "dirty") X.dirty();
        B.add(z2.value);
      }
      return { status: X.value, value: B };
    }
    let G = [...Y.data.values()].map((H, B) => J._parse(new J1(Y, H, Y.path, B)));
    if (Y.common.async) return Promise.all(G).then((H) => W(H));
    else return W(G);
  }
  min(Q, X) {
    return new _O6({ ...this._def, minSize: { value: Q, message: S.toString(X) } });
  }
  max(Q, X) {
    return new _O6({ ...this._def, maxSize: { value: Q, message: S.toString(X) } });
  }
  size(Q, X) {
    return this.min(Q, X).max(Q, X);
  }
  nonempty(Q) {
    return this.min(1, Q);
  }
};
O6.create = (Q, X) => {
  return new O6({ valueType: Q, minSize: null, maxSize: null, typeName: j.ZodSet, ...m(X) });
};
var s6 = class _s6 extends p {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q);
    if (X.parsedType !== I.function) return b(X, { code: w.invalid_type, expected: I.function, received: X.parsedType }), x;
    function Y(G, H) {
      return m9({ data: G, path: X.path, errorMaps: [X.common.contextualErrorMap, X.schemaErrorMap, r6(), Z1].filter((B) => !!B), issueData: { code: w.invalid_arguments, argumentsError: H } });
    }
    function $(G, H) {
      return m9({ data: G, path: X.path, errorMaps: [X.common.contextualErrorMap, X.schemaErrorMap, r6(), Z1].filter((B) => !!B), issueData: { code: w.invalid_return_type, returnTypeError: H } });
    }
    let J = { errorMap: X.common.contextualErrorMap }, W = X.data;
    if (this._def.returns instanceof D6) {
      let G = this;
      return P0(async function(...H) {
        let B = new x0([]), z2 = await G._def.args.parseAsync(H, J).catch((q) => {
          throw B.addIssue(Y(H, q)), B;
        }), K = await Reflect.apply(W, this, z2);
        return await G._def.returns._def.type.parseAsync(K, J).catch((q) => {
          throw B.addIssue($(K, q)), B;
        });
      });
    } else {
      let G = this;
      return P0(function(...H) {
        let B = G._def.args.safeParse(H, J);
        if (!B.success) throw new x0([Y(H, B.error)]);
        let z2 = Reflect.apply(W, this, B.data), K = G._def.returns.safeParse(z2, J);
        if (!K.success) throw new x0([$(z2, K.error)]);
        return K.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...Q) {
    return new _s6({ ...this._def, args: A1.create(Q).rest(l1.create()) });
  }
  returns(Q) {
    return new _s6({ ...this._def, returns: Q });
  }
  implement(Q) {
    return this.parse(Q);
  }
  strictImplement(Q) {
    return this.parse(Q);
  }
  static create(Q, X, Y) {
    return new _s6({ args: Q ? Q : A1.create([]).rest(l1.create()), returns: X || l1.create(), typeName: j.ZodFunction, ...m(Y) });
  }
};
var J9 = class extends p {
  get schema() {
    return this._def.getter();
  }
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q);
    return this._def.getter()._parse({ data: X.data, path: X.path, parent: X });
  }
};
J9.create = (Q, X) => {
  return new J9({ getter: Q, typeName: j.ZodLazy, ...m(X) });
};
var W9 = class extends p {
  _parse(Q) {
    if (Q.data !== this._def.value) {
      let X = this._getOrReturnCtx(Q);
      return b(X, { received: X.data, code: w.invalid_literal, expected: this._def.value }), x;
    }
    return { status: "valid", value: Q.data };
  }
  get value() {
    return this._def.value;
  }
};
W9.create = (Q, X) => {
  return new W9({ value: Q, typeName: j.ZodLiteral, ...m(X) });
};
function OJ(Q, X) {
  return new d1({ values: Q, typeName: j.ZodEnum, ...m(X) });
}
var d1 = class _d1 extends p {
  _parse(Q) {
    if (typeof Q.data !== "string") {
      let X = this._getOrReturnCtx(Q), Y = this._def.values;
      return b(X, { expected: d.joinValues(Y), received: X.parsedType, code: w.invalid_type }), x;
    }
    if (!this._cache) this._cache = new Set(this._def.values);
    if (!this._cache.has(Q.data)) {
      let X = this._getOrReturnCtx(Q), Y = this._def.values;
      return b(X, { received: X.data, code: w.invalid_enum_value, options: Y }), x;
    }
    return P0(Q.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let Q = {};
    for (let X of this._def.values) Q[X] = X;
    return Q;
  }
  get Values() {
    let Q = {};
    for (let X of this._def.values) Q[X] = X;
    return Q;
  }
  get Enum() {
    let Q = {};
    for (let X of this._def.values) Q[X] = X;
    return Q;
  }
  extract(Q, X = this._def) {
    return _d1.create(Q, { ...this._def, ...X });
  }
  exclude(Q, X = this._def) {
    return _d1.create(this.options.filter((Y) => !Q.includes(Y)), { ...this._def, ...X });
  }
};
d1.create = OJ;
var G9 = class extends p {
  _parse(Q) {
    let X = d.getValidEnumValues(this._def.values), Y = this._getOrReturnCtx(Q);
    if (Y.parsedType !== I.string && Y.parsedType !== I.number) {
      let $ = d.objectValues(X);
      return b(Y, { expected: d.joinValues($), received: Y.parsedType, code: w.invalid_type }), x;
    }
    if (!this._cache) this._cache = new Set(d.getValidEnumValues(this._def.values));
    if (!this._cache.has(Q.data)) {
      let $ = d.objectValues(X);
      return b(Y, { received: Y.data, code: w.invalid_enum_value, options: $ }), x;
    }
    return P0(Q.data);
  }
  get enum() {
    return this._def.values;
  }
};
G9.create = (Q, X) => {
  return new G9({ values: Q, typeName: j.ZodNativeEnum, ...m(X) });
};
var D6 = class extends p {
  unwrap() {
    return this._def.type;
  }
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q);
    if (X.parsedType !== I.promise && X.common.async === false) return b(X, { code: w.invalid_type, expected: I.promise, received: X.parsedType }), x;
    let Y = X.parsedType === I.promise ? X.data : Promise.resolve(X.data);
    return P0(Y.then(($) => {
      return this._def.type.parseAsync($, { path: X.path, errorMap: X.common.contextualErrorMap });
    }));
  }
};
D6.create = (Q, X) => {
  return new D6({ type: Q, typeName: j.ZodPromise, ...m(X) });
};
var W1 = class extends p {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === j.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q), $ = this._def.effect || null, J = { addIssue: (W) => {
      if (b(Y, W), W.fatal) X.abort();
      else X.dirty();
    }, get path() {
      return Y.path;
    } };
    if (J.addIssue = J.addIssue.bind(J), $.type === "preprocess") {
      let W = $.transform(Y.data, J);
      if (Y.common.async) return Promise.resolve(W).then(async (G) => {
        if (X.value === "aborted") return x;
        let H = await this._def.schema._parseAsync({ data: G, path: Y.path, parent: Y });
        if (H.status === "aborted") return x;
        if (H.status === "dirty") return L6(H.value);
        if (X.value === "dirty") return L6(H.value);
        return H;
      });
      else {
        if (X.value === "aborted") return x;
        let G = this._def.schema._parseSync({ data: W, path: Y.path, parent: Y });
        if (G.status === "aborted") return x;
        if (G.status === "dirty") return L6(G.value);
        if (X.value === "dirty") return L6(G.value);
        return G;
      }
    }
    if ($.type === "refinement") {
      let W = (G) => {
        let H = $.refinement(G, J);
        if (Y.common.async) return Promise.resolve(H);
        if (H instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return G;
      };
      if (Y.common.async === false) {
        let G = this._def.schema._parseSync({ data: Y.data, path: Y.path, parent: Y });
        if (G.status === "aborted") return x;
        if (G.status === "dirty") X.dirty();
        return W(G.value), { status: X.value, value: G.value };
      } else return this._def.schema._parseAsync({ data: Y.data, path: Y.path, parent: Y }).then((G) => {
        if (G.status === "aborted") return x;
        if (G.status === "dirty") X.dirty();
        return W(G.value).then(() => {
          return { status: X.value, value: G.value };
        });
      });
    }
    if ($.type === "transform") if (Y.common.async === false) {
      let W = this._def.schema._parseSync({ data: Y.data, path: Y.path, parent: Y });
      if (!m1(W)) return x;
      let G = $.transform(W.value, J);
      if (G instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: X.value, value: G };
    } else return this._def.schema._parseAsync({ data: Y.data, path: Y.path, parent: Y }).then((W) => {
      if (!m1(W)) return x;
      return Promise.resolve($.transform(W.value, J)).then((G) => ({ status: X.value, value: G }));
    });
    d.assertNever($);
  }
};
W1.create = (Q, X, Y) => {
  return new W1({ schema: Q, typeName: j.ZodEffects, effect: X, ...m(Y) });
};
W1.createWithPreprocess = (Q, X, Y) => {
  return new W1({ schema: X, effect: { type: "preprocess", transform: Q }, typeName: j.ZodEffects, ...m(Y) });
};
var m0 = class extends p {
  _parse(Q) {
    if (this._getType(Q) === I.undefined) return P0(void 0);
    return this._def.innerType._parse(Q);
  }
  unwrap() {
    return this._def.innerType;
  }
};
m0.create = (Q, X) => {
  return new m0({ innerType: Q, typeName: j.ZodOptional, ...m(X) });
};
var S1 = class extends p {
  _parse(Q) {
    if (this._getType(Q) === I.null) return P0(null);
    return this._def.innerType._parse(Q);
  }
  unwrap() {
    return this._def.innerType;
  }
};
S1.create = (Q, X) => {
  return new S1({ innerType: Q, typeName: j.ZodNullable, ...m(X) });
};
var H9 = class extends p {
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q), Y = X.data;
    if (X.parsedType === I.undefined) Y = this._def.defaultValue();
    return this._def.innerType._parse({ data: Y, path: X.path, parent: X });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
H9.create = (Q, X) => {
  return new H9({ innerType: Q, typeName: j.ZodDefault, defaultValue: typeof X.default === "function" ? X.default : () => X.default, ...m(X) });
};
var B9 = class extends p {
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q), Y = { ...X, common: { ...X.common, issues: [] } }, $ = this._def.innerType._parse({ data: Y.data, path: Y.path, parent: { ...Y } });
    if (t6($)) return $.then((J) => {
      return { status: "valid", value: J.status === "valid" ? J.value : this._def.catchValue({ get error() {
        return new x0(Y.common.issues);
      }, input: Y.data }) };
    });
    else return { status: "valid", value: $.status === "valid" ? $.value : this._def.catchValue({ get error() {
      return new x0(Y.common.issues);
    }, input: Y.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
B9.create = (Q, X) => {
  return new B9({ innerType: Q, typeName: j.ZodCatch, catchValue: typeof X.catch === "function" ? X.catch : () => X.catch, ...m(X) });
};
var i9 = class extends p {
  _parse(Q) {
    if (this._getType(Q) !== I.nan) {
      let Y = this._getOrReturnCtx(Q);
      return b(Y, { code: w.invalid_type, expected: I.nan, received: Y.parsedType }), x;
    }
    return { status: "valid", value: Q.data };
  }
};
i9.create = (Q) => {
  return new i9({ typeName: j.ZodNaN, ...m(Q) });
};
var ZL = /* @__PURE__ */ Symbol("zod_brand");
var $8 = class extends p {
  _parse(Q) {
    let { ctx: X } = this._processInputParams(Q), Y = X.data;
    return this._def.type._parse({ data: Y, path: X.path, parent: X });
  }
  unwrap() {
    return this._def.type;
  }
};
var n9 = class _n9 extends p {
  _parse(Q) {
    let { status: X, ctx: Y } = this._processInputParams(Q);
    if (Y.common.async) return (async () => {
      let J = await this._def.in._parseAsync({ data: Y.data, path: Y.path, parent: Y });
      if (J.status === "aborted") return x;
      if (J.status === "dirty") return X.dirty(), L6(J.value);
      else return this._def.out._parseAsync({ data: J.value, path: Y.path, parent: Y });
    })();
    else {
      let $ = this._def.in._parseSync({ data: Y.data, path: Y.path, parent: Y });
      if ($.status === "aborted") return x;
      if ($.status === "dirty") return X.dirty(), { status: "dirty", value: $.value };
      else return this._def.out._parseSync({ data: $.value, path: Y.path, parent: Y });
    }
  }
  static create(Q, X) {
    return new _n9({ in: Q, out: X, typeName: j.ZodPipeline });
  }
};
var z9 = class extends p {
  _parse(Q) {
    let X = this._def.innerType._parse(Q), Y = ($) => {
      if (m1($)) $.value = Object.freeze($.value);
      return $;
    };
    return t6(X) ? X.then(($) => Y($)) : Y(X);
  }
  unwrap() {
    return this._def.innerType;
  }
};
z9.create = (Q, X) => {
  return new z9({ innerType: Q, typeName: j.ZodReadonly, ...m(X) });
};
function UJ(Q, X) {
  let Y = typeof Q === "function" ? Q(X) : typeof Q === "string" ? { message: Q } : Q;
  return typeof Y === "string" ? { message: Y } : Y;
}
function DJ(Q, X = {}, Y) {
  if (Q) return N6.create().superRefine(($, J) => {
    let W = Q($);
    if (W instanceof Promise) return W.then((G) => {
      if (!G) {
        let H = UJ(X, $), B = H.fatal ?? Y ?? true;
        J.addIssue({ code: "custom", ...H, fatal: B });
      }
    });
    if (!W) {
      let G = UJ(X, $), H = G.fatal ?? Y ?? true;
      J.addIssue({ code: "custom", ...G, fatal: H });
    }
    return;
  });
  return N6.create();
}
var CL = { object: L0.lazycreate };
var j;
(function(Q) {
  Q.ZodString = "ZodString", Q.ZodNumber = "ZodNumber", Q.ZodNaN = "ZodNaN", Q.ZodBigInt = "ZodBigInt", Q.ZodBoolean = "ZodBoolean", Q.ZodDate = "ZodDate", Q.ZodSymbol = "ZodSymbol", Q.ZodUndefined = "ZodUndefined", Q.ZodNull = "ZodNull", Q.ZodAny = "ZodAny", Q.ZodUnknown = "ZodUnknown", Q.ZodNever = "ZodNever", Q.ZodVoid = "ZodVoid", Q.ZodArray = "ZodArray", Q.ZodObject = "ZodObject", Q.ZodUnion = "ZodUnion", Q.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", Q.ZodIntersection = "ZodIntersection", Q.ZodTuple = "ZodTuple", Q.ZodRecord = "ZodRecord", Q.ZodMap = "ZodMap", Q.ZodSet = "ZodSet", Q.ZodFunction = "ZodFunction", Q.ZodLazy = "ZodLazy", Q.ZodLiteral = "ZodLiteral", Q.ZodEnum = "ZodEnum", Q.ZodEffects = "ZodEffects", Q.ZodNativeEnum = "ZodNativeEnum", Q.ZodOptional = "ZodOptional", Q.ZodNullable = "ZodNullable", Q.ZodDefault = "ZodDefault", Q.ZodCatch = "ZodCatch", Q.ZodPromise = "ZodPromise", Q.ZodBranded = "ZodBranded", Q.ZodPipeline = "ZodPipeline", Q.ZodReadonly = "ZodReadonly";
})(j || (j = {}));
var SL = (Q, X = { message: `Input not instance of ${Q.name}` }) => DJ((Y) => Y instanceof Q, X);
var MJ = Y1.create;
var wJ = c1.create;
var _L = i9.create;
var kL = p1.create;
var AJ = e6.create;
var vL = F6.create;
var TL = l9.create;
var xL = Q9.create;
var yL = X9.create;
var gL = N6.create;
var hL = l1.create;
var fL = w1.create;
var uL = c9.create;
var mL = $1.create;
var YX = L0.create;
var lL = L0.strictCreate;
var cL = Y9.create;
var pL = Y8.create;
var dL = $9.create;
var iL = A1.create;
var nL = p9.create;
var oL = d9.create;
var rL = O6.create;
var tL = s6.create;
var aL = J9.create;
var sL = W9.create;
var eL = d1.create;
var QF = G9.create;
var XF = D6.create;
var YF = W1.create;
var $F = m0.create;
var JF = S1.create;
var WF = W1.createWithPreprocess;
var GF = n9.create;
var HF = () => MJ().optional();
var BF = () => wJ().optional();
var zF = () => AJ().optional();
var KF = { string: (Q) => Y1.create({ ...Q, coerce: true }), number: (Q) => c1.create({ ...Q, coerce: true }), boolean: (Q) => e6.create({ ...Q, coerce: true }), bigint: (Q) => p1.create({ ...Q, coerce: true }), date: (Q) => F6.create({ ...Q, coerce: true }) };
var VF = x;
var qF = Object.freeze({ status: "aborted" });
function D(Q, X, Y) {
  function $(H, B) {
    var z2;
    Object.defineProperty(H, "_zod", { value: H._zod ?? {}, enumerable: false }), (z2 = H._zod).traits ?? (z2.traits = /* @__PURE__ */ new Set()), H._zod.traits.add(Q), X(H, B);
    for (let K in G.prototype) if (!(K in H)) Object.defineProperty(H, K, { value: G.prototype[K].bind(H) });
    H._zod.constr = G, H._zod.def = B;
  }
  let J = Y?.Parent ?? Object;
  class W extends J {
  }
  Object.defineProperty(W, "name", { value: Q });
  function G(H) {
    var B;
    let z2 = Y?.Parent ? new W() : this;
    $(z2, H), (B = z2._zod).deferred ?? (B.deferred = []);
    for (let K of z2._zod.deferred) K();
    return z2;
  }
  return Object.defineProperty(G, "init", { value: $ }), Object.defineProperty(G, Symbol.hasInstance, { value: (H) => {
    if (Y?.Parent && H instanceof Y.Parent) return true;
    return H?._zod?.traits?.has(Q);
  } }), Object.defineProperty(G, "name", { value: Q }), G;
}
var n1 = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
};
var J8 = {};
function l0(Q) {
  if (Q) Object.assign(J8, Q);
  return J8;
}
var i = {};
gQ(i, { unwrapMessage: () => o9, stringifyPrimitive: () => H8, required: () => SF, randomString: () => AF, propertyKeyTypes: () => BX, promiseAllObject: () => wF, primitiveTypes: () => jJ, prefixIssues: () => j1, pick: () => bF, partial: () => CF, optionalKeys: () => zX, omit: () => EF, numKeys: () => jF, nullish: () => a9, normalizeParams: () => y, merge: () => ZF, jsonStringifyReplacer: () => JX, joinValues: () => W8, issue: () => VX, isPlainObject: () => V9, isObject: () => K9, getSizableOrigin: () => IJ, getParsedType: () => RF, getLengthableOrigin: () => e9, getEnumValues: () => r9, getElementAtPath: () => MF, floatSafeRemainder: () => WX, finalizeIssue: () => G1, extend: () => PF, escapeRegex: () => o1, esc: () => M6, defineLazy: () => $0, createTransparentProxy: () => IF, clone: () => c0, cleanRegex: () => s9, cleanEnum: () => _F, captureStackTrace: () => G8, cached: () => t9, assignProp: () => GX, assertNotEqual: () => FF, assertNever: () => OF, assertIs: () => NF, assertEqual: () => LF, assert: () => DF, allowsEval: () => HX, aborted: () => w6, NUMBER_FORMAT_RANGES: () => KX, Class: () => bJ, BIGINT_FORMAT_RANGES: () => RJ });
function LF(Q) {
  return Q;
}
function FF(Q) {
  return Q;
}
function NF(Q) {
}
function OF(Q) {
  throw Error();
}
function DF(Q) {
}
function r9(Q) {
  let X = Object.values(Q).filter(($) => typeof $ === "number");
  return Object.entries(Q).filter(([$, J]) => X.indexOf(+$) === -1).map(([$, J]) => J);
}
function W8(Q, X = "|") {
  return Q.map((Y) => H8(Y)).join(X);
}
function JX(Q, X) {
  if (typeof X === "bigint") return X.toString();
  return X;
}
function t9(Q) {
  return { get value() {
    {
      let Y = Q();
      return Object.defineProperty(this, "value", { value: Y }), Y;
    }
    throw Error("cached value already set");
  } };
}
function a9(Q) {
  return Q === null || Q === void 0;
}
function s9(Q) {
  let X = Q.startsWith("^") ? 1 : 0, Y = Q.endsWith("$") ? Q.length - 1 : Q.length;
  return Q.slice(X, Y);
}
function WX(Q, X) {
  let Y = (Q.toString().split(".")[1] || "").length, $ = (X.toString().split(".")[1] || "").length, J = Y > $ ? Y : $, W = Number.parseInt(Q.toFixed(J).replace(".", "")), G = Number.parseInt(X.toFixed(J).replace(".", ""));
  return W % G / 10 ** J;
}
function $0(Q, X, Y) {
  Object.defineProperty(Q, X, { get() {
    {
      let J = Y();
      return Q[X] = J, J;
    }
    throw Error("cached value already set");
  }, set(J) {
    Object.defineProperty(Q, X, { value: J });
  }, configurable: true });
}
function GX(Q, X, Y) {
  Object.defineProperty(Q, X, { value: Y, writable: true, enumerable: true, configurable: true });
}
function MF(Q, X) {
  if (!X) return Q;
  return X.reduce((Y, $) => Y?.[$], Q);
}
function wF(Q) {
  let X = Object.keys(Q), Y = X.map(($) => Q[$]);
  return Promise.all(Y).then(($) => {
    let J = {};
    for (let W = 0; W < X.length; W++) J[X[W]] = $[W];
    return J;
  });
}
function AF(Q = 10) {
  let Y = "";
  for (let $ = 0; $ < Q; $++) Y += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return Y;
}
function M6(Q) {
  return JSON.stringify(Q);
}
var G8 = Error.captureStackTrace ? Error.captureStackTrace : (...Q) => {
};
function K9(Q) {
  return typeof Q === "object" && Q !== null && !Array.isArray(Q);
}
var HX = t9(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return false;
  try {
    return new Function(""), true;
  } catch (Q) {
    return false;
  }
});
function V9(Q) {
  if (K9(Q) === false) return false;
  let X = Q.constructor;
  if (X === void 0) return true;
  let Y = X.prototype;
  if (K9(Y) === false) return false;
  if (Object.prototype.hasOwnProperty.call(Y, "isPrototypeOf") === false) return false;
  return true;
}
function jF(Q) {
  let X = 0;
  for (let Y in Q) if (Object.prototype.hasOwnProperty.call(Q, Y)) X++;
  return X;
}
var RF = (Q) => {
  let X = typeof Q;
  switch (X) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(Q) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(Q)) return "array";
      if (Q === null) return "null";
      if (Q.then && typeof Q.then === "function" && Q.catch && typeof Q.catch === "function") return "promise";
      if (typeof Map < "u" && Q instanceof Map) return "map";
      if (typeof Set < "u" && Q instanceof Set) return "set";
      if (typeof Date < "u" && Q instanceof Date) return "date";
      if (typeof File < "u" && Q instanceof File) return "file";
      return "object";
    default:
      throw Error(`Unknown data type: ${X}`);
  }
};
var BX = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var jJ = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function o1(Q) {
  return Q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function c0(Q, X, Y) {
  let $ = new Q._zod.constr(X ?? Q._zod.def);
  if (!X || Y?.parent) $._zod.parent = Q;
  return $;
}
function y(Q) {
  let X = Q;
  if (!X) return {};
  if (typeof X === "string") return { error: () => X };
  if (X?.message !== void 0) {
    if (X?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    X.error = X.message;
  }
  if (delete X.message, typeof X.error === "string") return { ...X, error: () => X.error };
  return X;
}
function IF(Q) {
  let X;
  return new Proxy({}, { get(Y, $, J) {
    return X ?? (X = Q()), Reflect.get(X, $, J);
  }, set(Y, $, J, W) {
    return X ?? (X = Q()), Reflect.set(X, $, J, W);
  }, has(Y, $) {
    return X ?? (X = Q()), Reflect.has(X, $);
  }, deleteProperty(Y, $) {
    return X ?? (X = Q()), Reflect.deleteProperty(X, $);
  }, ownKeys(Y) {
    return X ?? (X = Q()), Reflect.ownKeys(X);
  }, getOwnPropertyDescriptor(Y, $) {
    return X ?? (X = Q()), Reflect.getOwnPropertyDescriptor(X, $);
  }, defineProperty(Y, $, J) {
    return X ?? (X = Q()), Reflect.defineProperty(X, $, J);
  } });
}
function H8(Q) {
  if (typeof Q === "bigint") return Q.toString() + "n";
  if (typeof Q === "string") return `"${Q}"`;
  return `${Q}`;
}
function zX(Q) {
  return Object.keys(Q).filter((X) => {
    return Q[X]._zod.optin === "optional" && Q[X]._zod.optout === "optional";
  });
}
var KX = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
var RJ = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
function bF(Q, X) {
  let Y = {}, $ = Q._zod.def;
  for (let J in X) {
    if (!(J in $.shape)) throw Error(`Unrecognized key: "${J}"`);
    if (!X[J]) continue;
    Y[J] = $.shape[J];
  }
  return c0(Q, { ...Q._zod.def, shape: Y, checks: [] });
}
function EF(Q, X) {
  let Y = { ...Q._zod.def.shape }, $ = Q._zod.def;
  for (let J in X) {
    if (!(J in $.shape)) throw Error(`Unrecognized key: "${J}"`);
    if (!X[J]) continue;
    delete Y[J];
  }
  return c0(Q, { ...Q._zod.def, shape: Y, checks: [] });
}
function PF(Q, X) {
  if (!V9(X)) throw Error("Invalid input to extend: expected a plain object");
  let Y = { ...Q._zod.def, get shape() {
    let $ = { ...Q._zod.def.shape, ...X };
    return GX(this, "shape", $), $;
  }, checks: [] };
  return c0(Q, Y);
}
function ZF(Q, X) {
  return c0(Q, { ...Q._zod.def, get shape() {
    let Y = { ...Q._zod.def.shape, ...X._zod.def.shape };
    return GX(this, "shape", Y), Y;
  }, catchall: X._zod.def.catchall, checks: [] });
}
function CF(Q, X, Y) {
  let $ = X._zod.def.shape, J = { ...$ };
  if (Y) for (let W in Y) {
    if (!(W in $)) throw Error(`Unrecognized key: "${W}"`);
    if (!Y[W]) continue;
    J[W] = Q ? new Q({ type: "optional", innerType: $[W] }) : $[W];
  }
  else for (let W in $) J[W] = Q ? new Q({ type: "optional", innerType: $[W] }) : $[W];
  return c0(X, { ...X._zod.def, shape: J, checks: [] });
}
function SF(Q, X, Y) {
  let $ = X._zod.def.shape, J = { ...$ };
  if (Y) for (let W in Y) {
    if (!(W in J)) throw Error(`Unrecognized key: "${W}"`);
    if (!Y[W]) continue;
    J[W] = new Q({ type: "nonoptional", innerType: $[W] });
  }
  else for (let W in $) J[W] = new Q({ type: "nonoptional", innerType: $[W] });
  return c0(X, { ...X._zod.def, shape: J, checks: [] });
}
function w6(Q, X = 0) {
  for (let Y = X; Y < Q.issues.length; Y++) if (Q.issues[Y]?.continue !== true) return true;
  return false;
}
function j1(Q, X) {
  return X.map((Y) => {
    var $;
    return ($ = Y).path ?? ($.path = []), Y.path.unshift(Q), Y;
  });
}
function o9(Q) {
  return typeof Q === "string" ? Q : Q?.message;
}
function G1(Q, X, Y) {
  let $ = { ...Q, path: Q.path ?? [] };
  if (!Q.message) {
    let J = o9(Q.inst?._zod.def?.error?.(Q)) ?? o9(X?.error?.(Q)) ?? o9(Y.customError?.(Q)) ?? o9(Y.localeError?.(Q)) ?? "Invalid input";
    $.message = J;
  }
  if (delete $.inst, delete $.continue, !X?.reportInput) delete $.input;
  return $;
}
function IJ(Q) {
  if (Q instanceof Set) return "set";
  if (Q instanceof Map) return "map";
  if (Q instanceof File) return "file";
  return "unknown";
}
function e9(Q) {
  if (Array.isArray(Q)) return "array";
  if (typeof Q === "string") return "string";
  return "unknown";
}
function VX(...Q) {
  let [X, Y, $] = Q;
  if (typeof X === "string") return { message: X, code: "custom", input: Y, inst: $ };
  return { ...X };
}
function _F(Q) {
  return Object.entries(Q).filter(([X, Y]) => {
    return Number.isNaN(Number.parseInt(X, 10));
  }).map((X) => X[1]);
}
var bJ = class {
  constructor(...Q) {
  }
};
var EJ = (Q, X) => {
  Q.name = "$ZodError", Object.defineProperty(Q, "_zod", { value: Q._zod, enumerable: false }), Object.defineProperty(Q, "issues", { value: X, enumerable: false }), Object.defineProperty(Q, "message", { get() {
    return JSON.stringify(X, JX, 2);
  }, enumerable: true });
};
var B8 = D("$ZodError", EJ);
var Q4 = D("$ZodError", EJ, { Parent: Error });
function qX(Q, X = (Y) => Y.message) {
  let Y = {}, $ = [];
  for (let J of Q.issues) if (J.path.length > 0) Y[J.path[0]] = Y[J.path[0]] || [], Y[J.path[0]].push(X(J));
  else $.push(X(J));
  return { formErrors: $, fieldErrors: Y };
}
function UX(Q, X) {
  let Y = X || function(W) {
    return W.message;
  }, $ = { _errors: [] }, J = (W) => {
    for (let G of W.issues) if (G.code === "invalid_union" && G.errors.length) G.errors.map((H) => J({ issues: H }));
    else if (G.code === "invalid_key") J({ issues: G.issues });
    else if (G.code === "invalid_element") J({ issues: G.issues });
    else if (G.path.length === 0) $._errors.push(Y(G));
    else {
      let H = $, B = 0;
      while (B < G.path.length) {
        let z2 = G.path[B];
        if (B !== G.path.length - 1) H[z2] = H[z2] || { _errors: [] };
        else H[z2] = H[z2] || { _errors: [] }, H[z2]._errors.push(Y(G));
        H = H[z2], B++;
      }
    }
  };
  return J(Q), $;
}
var LX = (Q) => (X, Y, $, J) => {
  let W = $ ? Object.assign($, { async: false }) : { async: false }, G = X._zod.run({ value: Y, issues: [] }, W);
  if (G instanceof Promise) throw new n1();
  if (G.issues.length) {
    let H = new (J?.Err ?? Q)(G.issues.map((B) => G1(B, W, l0())));
    throw G8(H, J?.callee), H;
  }
  return G.value;
};
var FX = LX(Q4);
var NX = (Q) => async (X, Y, $, J) => {
  let W = $ ? Object.assign($, { async: true }) : { async: true }, G = X._zod.run({ value: Y, issues: [] }, W);
  if (G instanceof Promise) G = await G;
  if (G.issues.length) {
    let H = new (J?.Err ?? Q)(G.issues.map((B) => G1(B, W, l0())));
    throw G8(H, J?.callee), H;
  }
  return G.value;
};
var OX = NX(Q4);
var DX = (Q) => (X, Y, $) => {
  let J = $ ? { ...$, async: false } : { async: false }, W = X._zod.run({ value: Y, issues: [] }, J);
  if (W instanceof Promise) throw new n1();
  return W.issues.length ? { success: false, error: new (Q ?? B8)(W.issues.map((G) => G1(G, J, l0()))) } : { success: true, data: W.value };
};
var A6 = DX(Q4);
var MX = (Q) => async (X, Y, $) => {
  let J = $ ? Object.assign($, { async: true }) : { async: true }, W = X._zod.run({ value: Y, issues: [] }, J);
  if (W instanceof Promise) W = await W;
  return W.issues.length ? { success: false, error: new Q(W.issues.map((G) => G1(G, J, l0()))) } : { success: true, data: W.value };
};
var j6 = MX(Q4);
var PJ = /^[cC][^\s-]{8,}$/;
var ZJ = /^[0-9a-z]+$/;
var CJ = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var SJ = /^[0-9a-vA-V]{20}$/;
var _J = /^[A-Za-z0-9]{27}$/;
var kJ = /^[a-zA-Z0-9_-]{21}$/;
var vJ = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var TJ = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var wX = (Q) => {
  if (!Q) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${Q}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var xJ = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
function yJ() {
  return new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
var gJ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var hJ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
var fJ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var uJ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var mJ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var AX = /^[A-Za-z0-9_-]*$/;
var lJ = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
var cJ = /^\+(?:[0-9]){6,14}[0-9]$/;
var pJ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
var dJ = new RegExp(`^${pJ}$`);
function iJ(Q) {
  return typeof Q.precision === "number" ? Q.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : Q.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${Q.precision}}` : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function nJ(Q) {
  return new RegExp(`^${iJ(Q)}$`);
}
function oJ(Q) {
  let X = iJ({ precision: Q.precision }), Y = ["Z"];
  if (Q.local) Y.push("");
  if (Q.offset) Y.push("([+-]\\d{2}:\\d{2})");
  let $ = `${X}(?:${Y.join("|")})`;
  return new RegExp(`^${pJ}T(?:${$})$`);
}
var rJ = (Q) => {
  let X = Q ? `[\\s\\S]{${Q?.minimum ?? 0},${Q?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${X}$`);
};
var tJ = /^\d+$/;
var aJ = /^-?\d+(?:\.\d+)?/i;
var sJ = /true|false/i;
var eJ = /null/i;
var QW = /^[^A-Z]*$/;
var XW = /^[^a-z]*$/;
var j0 = D("$ZodCheck", (Q, X) => {
  var Y;
  Q._zod ?? (Q._zod = {}), Q._zod.def = X, (Y = Q._zod).onattach ?? (Y.onattach = []);
});
var YW = { number: "number", bigint: "bigint", object: "date" };
var jX = D("$ZodCheckLessThan", (Q, X) => {
  j0.init(Q, X);
  let Y = YW[typeof X.value];
  Q._zod.onattach.push(($) => {
    let J = $._zod.bag, W = (X.inclusive ? J.maximum : J.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (X.value < W) if (X.inclusive) J.maximum = X.value;
    else J.exclusiveMaximum = X.value;
  }), Q._zod.check = ($) => {
    if (X.inclusive ? $.value <= X.value : $.value < X.value) return;
    $.issues.push({ origin: Y, code: "too_big", maximum: X.value, input: $.value, inclusive: X.inclusive, inst: Q, continue: !X.abort });
  };
});
var RX = D("$ZodCheckGreaterThan", (Q, X) => {
  j0.init(Q, X);
  let Y = YW[typeof X.value];
  Q._zod.onattach.push(($) => {
    let J = $._zod.bag, W = (X.inclusive ? J.minimum : J.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (X.value > W) if (X.inclusive) J.minimum = X.value;
    else J.exclusiveMinimum = X.value;
  }), Q._zod.check = ($) => {
    if (X.inclusive ? $.value >= X.value : $.value > X.value) return;
    $.issues.push({ origin: Y, code: "too_small", minimum: X.value, input: $.value, inclusive: X.inclusive, inst: Q, continue: !X.abort });
  };
});
var $W = D("$ZodCheckMultipleOf", (Q, X) => {
  j0.init(Q, X), Q._zod.onattach.push((Y) => {
    var $;
    ($ = Y._zod.bag).multipleOf ?? ($.multipleOf = X.value);
  }), Q._zod.check = (Y) => {
    if (typeof Y.value !== typeof X.value) throw Error("Cannot mix number and bigint in multiple_of check.");
    if (typeof Y.value === "bigint" ? Y.value % X.value === BigInt(0) : WX(Y.value, X.value) === 0) return;
    Y.issues.push({ origin: typeof Y.value, code: "not_multiple_of", divisor: X.value, input: Y.value, inst: Q, continue: !X.abort });
  };
});
var JW = D("$ZodCheckNumberFormat", (Q, X) => {
  j0.init(Q, X), X.format = X.format || "float64";
  let Y = X.format?.includes("int"), $ = Y ? "int" : "number", [J, W] = KX[X.format];
  Q._zod.onattach.push((G) => {
    let H = G._zod.bag;
    if (H.format = X.format, H.minimum = J, H.maximum = W, Y) H.pattern = tJ;
  }), Q._zod.check = (G) => {
    let H = G.value;
    if (Y) {
      if (!Number.isInteger(H)) {
        G.issues.push({ expected: $, format: X.format, code: "invalid_type", input: H, inst: Q });
        return;
      }
      if (!Number.isSafeInteger(H)) {
        if (H > 0) G.issues.push({ input: H, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: Q, origin: $, continue: !X.abort });
        else G.issues.push({ input: H, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: Q, origin: $, continue: !X.abort });
        return;
      }
    }
    if (H < J) G.issues.push({ origin: "number", input: H, code: "too_small", minimum: J, inclusive: true, inst: Q, continue: !X.abort });
    if (H > W) G.issues.push({ origin: "number", input: H, code: "too_big", maximum: W, inst: Q });
  };
});
var WW = D("$ZodCheckMaxLength", (Q, X) => {
  j0.init(Q, X), Q._zod.when = (Y) => {
    let $ = Y.value;
    return !a9($) && $.length !== void 0;
  }, Q._zod.onattach.push((Y) => {
    let $ = Y._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (X.maximum < $) Y._zod.bag.maximum = X.maximum;
  }), Q._zod.check = (Y) => {
    let $ = Y.value;
    if ($.length <= X.maximum) return;
    let W = e9($);
    Y.issues.push({ origin: W, code: "too_big", maximum: X.maximum, inclusive: true, input: $, inst: Q, continue: !X.abort });
  };
});
var GW = D("$ZodCheckMinLength", (Q, X) => {
  j0.init(Q, X), Q._zod.when = (Y) => {
    let $ = Y.value;
    return !a9($) && $.length !== void 0;
  }, Q._zod.onattach.push((Y) => {
    let $ = Y._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (X.minimum > $) Y._zod.bag.minimum = X.minimum;
  }), Q._zod.check = (Y) => {
    let $ = Y.value;
    if ($.length >= X.minimum) return;
    let W = e9($);
    Y.issues.push({ origin: W, code: "too_small", minimum: X.minimum, inclusive: true, input: $, inst: Q, continue: !X.abort });
  };
});
var HW = D("$ZodCheckLengthEquals", (Q, X) => {
  j0.init(Q, X), Q._zod.when = (Y) => {
    let $ = Y.value;
    return !a9($) && $.length !== void 0;
  }, Q._zod.onattach.push((Y) => {
    let $ = Y._zod.bag;
    $.minimum = X.length, $.maximum = X.length, $.length = X.length;
  }), Q._zod.check = (Y) => {
    let $ = Y.value, J = $.length;
    if (J === X.length) return;
    let W = e9($), G = J > X.length;
    Y.issues.push({ origin: W, ...G ? { code: "too_big", maximum: X.length } : { code: "too_small", minimum: X.length }, inclusive: true, exact: true, input: Y.value, inst: Q, continue: !X.abort });
  };
});
var X4 = D("$ZodCheckStringFormat", (Q, X) => {
  var Y, $;
  if (j0.init(Q, X), Q._zod.onattach.push((J) => {
    let W = J._zod.bag;
    if (W.format = X.format, X.pattern) W.patterns ?? (W.patterns = /* @__PURE__ */ new Set()), W.patterns.add(X.pattern);
  }), X.pattern) (Y = Q._zod).check ?? (Y.check = (J) => {
    if (X.pattern.lastIndex = 0, X.pattern.test(J.value)) return;
    J.issues.push({ origin: "string", code: "invalid_format", format: X.format, input: J.value, ...X.pattern ? { pattern: X.pattern.toString() } : {}, inst: Q, continue: !X.abort });
  });
  else ($ = Q._zod).check ?? ($.check = () => {
  });
});
var BW = D("$ZodCheckRegex", (Q, X) => {
  X4.init(Q, X), Q._zod.check = (Y) => {
    if (X.pattern.lastIndex = 0, X.pattern.test(Y.value)) return;
    Y.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: Y.value, pattern: X.pattern.toString(), inst: Q, continue: !X.abort });
  };
});
var zW = D("$ZodCheckLowerCase", (Q, X) => {
  X.pattern ?? (X.pattern = QW), X4.init(Q, X);
});
var KW = D("$ZodCheckUpperCase", (Q, X) => {
  X.pattern ?? (X.pattern = XW), X4.init(Q, X);
});
var VW = D("$ZodCheckIncludes", (Q, X) => {
  j0.init(Q, X);
  let Y = o1(X.includes), $ = new RegExp(typeof X.position === "number" ? `^.{${X.position}}${Y}` : Y);
  X.pattern = $, Q._zod.onattach.push((J) => {
    let W = J._zod.bag;
    W.patterns ?? (W.patterns = /* @__PURE__ */ new Set()), W.patterns.add($);
  }), Q._zod.check = (J) => {
    if (J.value.includes(X.includes, X.position)) return;
    J.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: X.includes, input: J.value, inst: Q, continue: !X.abort });
  };
});
var qW = D("$ZodCheckStartsWith", (Q, X) => {
  j0.init(Q, X);
  let Y = new RegExp(`^${o1(X.prefix)}.*`);
  X.pattern ?? (X.pattern = Y), Q._zod.onattach.push(($) => {
    let J = $._zod.bag;
    J.patterns ?? (J.patterns = /* @__PURE__ */ new Set()), J.patterns.add(Y);
  }), Q._zod.check = ($) => {
    if ($.value.startsWith(X.prefix)) return;
    $.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: X.prefix, input: $.value, inst: Q, continue: !X.abort });
  };
});
var UW = D("$ZodCheckEndsWith", (Q, X) => {
  j0.init(Q, X);
  let Y = new RegExp(`.*${o1(X.suffix)}$`);
  X.pattern ?? (X.pattern = Y), Q._zod.onattach.push(($) => {
    let J = $._zod.bag;
    J.patterns ?? (J.patterns = /* @__PURE__ */ new Set()), J.patterns.add(Y);
  }), Q._zod.check = ($) => {
    if ($.value.endsWith(X.suffix)) return;
    $.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: X.suffix, input: $.value, inst: Q, continue: !X.abort });
  };
});
var LW = D("$ZodCheckOverwrite", (Q, X) => {
  j0.init(Q, X), Q._zod.check = (Y) => {
    Y.value = X.tx(Y.value);
  };
});
var IX = class {
  constructor(Q = []) {
    if (this.content = [], this.indent = 0, this) this.args = Q;
  }
  indented(Q) {
    this.indent += 1, Q(this), this.indent -= 1;
  }
  write(Q) {
    if (typeof Q === "function") {
      Q(this, { execution: "sync" }), Q(this, { execution: "async" });
      return;
    }
    let Y = Q.split(`
`).filter((W) => W), $ = Math.min(...Y.map((W) => W.length - W.trimStart().length)), J = Y.map((W) => W.slice($)).map((W) => " ".repeat(this.indent * 2) + W);
    for (let W of J) this.content.push(W);
  }
  compile() {
    let Q = Function, X = this?.args, $ = [...(this?.content ?? [""]).map((J) => `  ${J}`)];
    return new Q(...X, $.join(`
`));
  }
};
var NW = { major: 4, minor: 0, patch: 0 };
var e = D("$ZodType", (Q, X) => {
  var Y;
  Q ?? (Q = {}), Q._zod.def = X, Q._zod.bag = Q._zod.bag || {}, Q._zod.version = NW;
  let $ = [...Q._zod.def.checks ?? []];
  if (Q._zod.traits.has("$ZodCheck")) $.unshift(Q);
  for (let J of $) for (let W of J._zod.onattach) W(Q);
  if ($.length === 0) (Y = Q._zod).deferred ?? (Y.deferred = []), Q._zod.deferred?.push(() => {
    Q._zod.run = Q._zod.parse;
  });
  else {
    let J = (W, G, H) => {
      let B = w6(W), z2;
      for (let K of G) {
        if (K._zod.when) {
          if (!K._zod.when(W)) continue;
        } else if (B) continue;
        let U = W.issues.length, q = K._zod.check(W);
        if (q instanceof Promise && H?.async === false) throw new n1();
        if (z2 || q instanceof Promise) z2 = (z2 ?? Promise.resolve()).then(async () => {
          if (await q, W.issues.length === U) return;
          if (!B) B = w6(W, U);
        });
        else {
          if (W.issues.length === U) continue;
          if (!B) B = w6(W, U);
        }
      }
      if (z2) return z2.then(() => {
        return W;
      });
      return W;
    };
    Q._zod.run = (W, G) => {
      let H = Q._zod.parse(W, G);
      if (H instanceof Promise) {
        if (G.async === false) throw new n1();
        return H.then((B) => J(B, $, G));
      }
      return J(H, $, G);
    };
  }
  Q["~standard"] = { validate: (J) => {
    try {
      let W = A6(Q, J);
      return W.success ? { value: W.data } : { issues: W.error?.issues };
    } catch (W) {
      return j6(Q, J).then((G) => G.success ? { value: G.data } : { issues: G.error?.issues });
    }
  }, vendor: "zod", version: 1 };
});
var Y4 = D("$ZodString", (Q, X) => {
  e.init(Q, X), Q._zod.pattern = [...Q?._zod.bag?.patterns ?? []].pop() ?? rJ(Q._zod.bag), Q._zod.parse = (Y, $) => {
    if (X.coerce) try {
      Y.value = String(Y.value);
    } catch (J) {
    }
    if (typeof Y.value === "string") return Y;
    return Y.issues.push({ expected: "string", code: "invalid_type", input: Y.value, inst: Q }), Y;
  };
});
var J0 = D("$ZodStringFormat", (Q, X) => {
  X4.init(Q, X), Y4.init(Q, X);
});
var EX = D("$ZodGUID", (Q, X) => {
  X.pattern ?? (X.pattern = TJ), J0.init(Q, X);
});
var PX = D("$ZodUUID", (Q, X) => {
  if (X.version) {
    let $ = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[X.version];
    if ($ === void 0) throw Error(`Invalid UUID version: "${X.version}"`);
    X.pattern ?? (X.pattern = wX($));
  } else X.pattern ?? (X.pattern = wX());
  J0.init(Q, X);
});
var ZX = D("$ZodEmail", (Q, X) => {
  X.pattern ?? (X.pattern = xJ), J0.init(Q, X);
});
var CX = D("$ZodURL", (Q, X) => {
  J0.init(Q, X), Q._zod.check = (Y) => {
    try {
      let $ = Y.value, J = new URL($), W = J.href;
      if (X.hostname) {
        if (X.hostname.lastIndex = 0, !X.hostname.test(J.hostname)) Y.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: lJ.source, input: Y.value, inst: Q, continue: !X.abort });
      }
      if (X.protocol) {
        if (X.protocol.lastIndex = 0, !X.protocol.test(J.protocol.endsWith(":") ? J.protocol.slice(0, -1) : J.protocol)) Y.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: X.protocol.source, input: Y.value, inst: Q, continue: !X.abort });
      }
      if (!$.endsWith("/") && W.endsWith("/")) Y.value = W.slice(0, -1);
      else Y.value = W;
      return;
    } catch ($) {
      Y.issues.push({ code: "invalid_format", format: "url", input: Y.value, inst: Q, continue: !X.abort });
    }
  };
});
var SX = D("$ZodEmoji", (Q, X) => {
  X.pattern ?? (X.pattern = yJ()), J0.init(Q, X);
});
var _X = D("$ZodNanoID", (Q, X) => {
  X.pattern ?? (X.pattern = kJ), J0.init(Q, X);
});
var kX = D("$ZodCUID", (Q, X) => {
  X.pattern ?? (X.pattern = PJ), J0.init(Q, X);
});
var vX = D("$ZodCUID2", (Q, X) => {
  X.pattern ?? (X.pattern = ZJ), J0.init(Q, X);
});
var TX = D("$ZodULID", (Q, X) => {
  X.pattern ?? (X.pattern = CJ), J0.init(Q, X);
});
var xX = D("$ZodXID", (Q, X) => {
  X.pattern ?? (X.pattern = SJ), J0.init(Q, X);
});
var yX = D("$ZodKSUID", (Q, X) => {
  X.pattern ?? (X.pattern = _J), J0.init(Q, X);
});
var EW = D("$ZodISODateTime", (Q, X) => {
  X.pattern ?? (X.pattern = oJ(X)), J0.init(Q, X);
});
var PW = D("$ZodISODate", (Q, X) => {
  X.pattern ?? (X.pattern = dJ), J0.init(Q, X);
});
var ZW = D("$ZodISOTime", (Q, X) => {
  X.pattern ?? (X.pattern = nJ(X)), J0.init(Q, X);
});
var CW = D("$ZodISODuration", (Q, X) => {
  X.pattern ?? (X.pattern = vJ), J0.init(Q, X);
});
var gX = D("$ZodIPv4", (Q, X) => {
  X.pattern ?? (X.pattern = gJ), J0.init(Q, X), Q._zod.onattach.push((Y) => {
    let $ = Y._zod.bag;
    $.format = "ipv4";
  });
});
var hX = D("$ZodIPv6", (Q, X) => {
  X.pattern ?? (X.pattern = hJ), J0.init(Q, X), Q._zod.onattach.push((Y) => {
    let $ = Y._zod.bag;
    $.format = "ipv6";
  }), Q._zod.check = (Y) => {
    try {
      new URL(`http://[${Y.value}]`);
    } catch {
      Y.issues.push({ code: "invalid_format", format: "ipv6", input: Y.value, inst: Q, continue: !X.abort });
    }
  };
});
var fX = D("$ZodCIDRv4", (Q, X) => {
  X.pattern ?? (X.pattern = fJ), J0.init(Q, X);
});
var uX = D("$ZodCIDRv6", (Q, X) => {
  X.pattern ?? (X.pattern = uJ), J0.init(Q, X), Q._zod.check = (Y) => {
    let [$, J] = Y.value.split("/");
    try {
      if (!J) throw Error();
      let W = Number(J);
      if (`${W}` !== J) throw Error();
      if (W < 0 || W > 128) throw Error();
      new URL(`http://[${$}]`);
    } catch {
      Y.issues.push({ code: "invalid_format", format: "cidrv6", input: Y.value, inst: Q, continue: !X.abort });
    }
  };
});
function SW(Q) {
  if (Q === "") return true;
  if (Q.length % 4 !== 0) return false;
  try {
    return atob(Q), true;
  } catch {
    return false;
  }
}
var mX = D("$ZodBase64", (Q, X) => {
  X.pattern ?? (X.pattern = mJ), J0.init(Q, X), Q._zod.onattach.push((Y) => {
    Y._zod.bag.contentEncoding = "base64";
  }), Q._zod.check = (Y) => {
    if (SW(Y.value)) return;
    Y.issues.push({ code: "invalid_format", format: "base64", input: Y.value, inst: Q, continue: !X.abort });
  };
});
function vF(Q) {
  if (!AX.test(Q)) return false;
  let X = Q.replace(/[-_]/g, ($) => $ === "-" ? "+" : "/"), Y = X.padEnd(Math.ceil(X.length / 4) * 4, "=");
  return SW(Y);
}
var lX = D("$ZodBase64URL", (Q, X) => {
  X.pattern ?? (X.pattern = AX), J0.init(Q, X), Q._zod.onattach.push((Y) => {
    Y._zod.bag.contentEncoding = "base64url";
  }), Q._zod.check = (Y) => {
    if (vF(Y.value)) return;
    Y.issues.push({ code: "invalid_format", format: "base64url", input: Y.value, inst: Q, continue: !X.abort });
  };
});
var cX = D("$ZodE164", (Q, X) => {
  X.pattern ?? (X.pattern = cJ), J0.init(Q, X);
});
function TF(Q, X = null) {
  try {
    let Y = Q.split(".");
    if (Y.length !== 3) return false;
    let [$] = Y;
    if (!$) return false;
    let J = JSON.parse(atob($));
    if ("typ" in J && J?.typ !== "JWT") return false;
    if (!J.alg) return false;
    if (X && (!("alg" in J) || J.alg !== X)) return false;
    return true;
  } catch {
    return false;
  }
}
var pX = D("$ZodJWT", (Q, X) => {
  J0.init(Q, X), Q._zod.check = (Y) => {
    if (TF(Y.value, X.alg)) return;
    Y.issues.push({ code: "invalid_format", format: "jwt", input: Y.value, inst: Q, continue: !X.abort });
  };
});
var V8 = D("$ZodNumber", (Q, X) => {
  e.init(Q, X), Q._zod.pattern = Q._zod.bag.pattern ?? aJ, Q._zod.parse = (Y, $) => {
    if (X.coerce) try {
      Y.value = Number(Y.value);
    } catch (G) {
    }
    let J = Y.value;
    if (typeof J === "number" && !Number.isNaN(J) && Number.isFinite(J)) return Y;
    let W = typeof J === "number" ? Number.isNaN(J) ? "NaN" : !Number.isFinite(J) ? "Infinity" : void 0 : void 0;
    return Y.issues.push({ expected: "number", code: "invalid_type", input: J, inst: Q, ...W ? { received: W } : {} }), Y;
  };
});
var dX = D("$ZodNumber", (Q, X) => {
  JW.init(Q, X), V8.init(Q, X);
});
var iX = D("$ZodBoolean", (Q, X) => {
  e.init(Q, X), Q._zod.pattern = sJ, Q._zod.parse = (Y, $) => {
    if (X.coerce) try {
      Y.value = Boolean(Y.value);
    } catch (W) {
    }
    let J = Y.value;
    if (typeof J === "boolean") return Y;
    return Y.issues.push({ expected: "boolean", code: "invalid_type", input: J, inst: Q }), Y;
  };
});
var nX = D("$ZodNull", (Q, X) => {
  e.init(Q, X), Q._zod.pattern = eJ, Q._zod.values = /* @__PURE__ */ new Set([null]), Q._zod.parse = (Y, $) => {
    let J = Y.value;
    if (J === null) return Y;
    return Y.issues.push({ expected: "null", code: "invalid_type", input: J, inst: Q }), Y;
  };
});
var oX = D("$ZodUnknown", (Q, X) => {
  e.init(Q, X), Q._zod.parse = (Y) => Y;
});
var rX = D("$ZodNever", (Q, X) => {
  e.init(Q, X), Q._zod.parse = (Y, $) => {
    return Y.issues.push({ expected: "never", code: "invalid_type", input: Y.value, inst: Q }), Y;
  };
});
function OW(Q, X, Y) {
  if (Q.issues.length) X.issues.push(...j1(Y, Q.issues));
  X.value[Y] = Q.value;
}
var tX = D("$ZodArray", (Q, X) => {
  e.init(Q, X), Q._zod.parse = (Y, $) => {
    let J = Y.value;
    if (!Array.isArray(J)) return Y.issues.push({ expected: "array", code: "invalid_type", input: J, inst: Q }), Y;
    Y.value = Array(J.length);
    let W = [];
    for (let G = 0; G < J.length; G++) {
      let H = J[G], B = X.element._zod.run({ value: H, issues: [] }, $);
      if (B instanceof Promise) W.push(B.then((z2) => OW(z2, Y, G)));
      else OW(B, Y, G);
    }
    if (W.length) return Promise.all(W).then(() => Y);
    return Y;
  };
});
function K8(Q, X, Y) {
  if (Q.issues.length) X.issues.push(...j1(Y, Q.issues));
  X.value[Y] = Q.value;
}
function DW(Q, X, Y, $) {
  if (Q.issues.length) if ($[Y] === void 0) if (Y in $) X.value[Y] = void 0;
  else X.value[Y] = Q.value;
  else X.issues.push(...j1(Y, Q.issues));
  else if (Q.value === void 0) {
    if (Y in $) X.value[Y] = void 0;
  } else X.value[Y] = Q.value;
}
var q8 = D("$ZodObject", (Q, X) => {
  e.init(Q, X);
  let Y = t9(() => {
    let U = Object.keys(X.shape);
    for (let V of U) if (!(X.shape[V] instanceof e)) throw Error(`Invalid element at key "${V}": expected a Zod schema`);
    let q = zX(X.shape);
    return { shape: X.shape, keys: U, keySet: new Set(U), numKeys: U.length, optionalKeys: new Set(q) };
  });
  $0(Q._zod, "propValues", () => {
    let U = X.shape, q = {};
    for (let V in U) {
      let L = U[V]._zod;
      if (L.values) {
        q[V] ?? (q[V] = /* @__PURE__ */ new Set());
        for (let F of L.values) q[V].add(F);
      }
    }
    return q;
  });
  let $ = (U) => {
    let q = new IX(["shape", "payload", "ctx"]), V = Y.value, L = (A) => {
      let R = M6(A);
      return `shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`;
    };
    q.write("const input = payload.value;");
    let F = /* @__PURE__ */ Object.create(null), M = 0;
    for (let A of V.keys) F[A] = `key_${M++}`;
    q.write("const newResult = {}");
    for (let A of V.keys) if (V.optionalKeys.has(A)) {
      let R = F[A];
      q.write(`const ${R} = ${L(A)};`);
      let Z = M6(A);
      q.write(`
        if (${R}.issues.length) {
          if (input[${Z}] === undefined) {
            if (${Z} in input) {
              newResult[${Z}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${R}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${Z}, ...iss.path] : [${Z}],
              }))
            );
          }
        } else if (${R}.value === undefined) {
          if (${Z} in input) newResult[${Z}] = undefined;
        } else {
          newResult[${Z}] = ${R}.value;
        }
        `);
    } else {
      let R = F[A];
      q.write(`const ${R} = ${L(A)};`), q.write(`
          if (${R}.issues.length) payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${M6(A)}, ...iss.path] : [${M6(A)}]
          })));`), q.write(`newResult[${M6(A)}] = ${R}.value`);
    }
    q.write("payload.value = newResult;"), q.write("return payload;");
    let O = q.compile();
    return (A, R) => O(U, A, R);
  }, J, W = K9, G = !J8.jitless, B = G && HX.value, z2 = X.catchall, K;
  Q._zod.parse = (U, q) => {
    K ?? (K = Y.value);
    let V = U.value;
    if (!W(V)) return U.issues.push({ expected: "object", code: "invalid_type", input: V, inst: Q }), U;
    let L = [];
    if (G && B && q?.async === false && q.jitless !== true) {
      if (!J) J = $(X.shape);
      U = J(U, q);
    } else {
      U.value = {};
      let R = K.shape;
      for (let Z of K.keys) {
        let C = R[Z], B0 = C._zod.run({ value: V[Z], issues: [] }, q), O0 = C._zod.optin === "optional" && C._zod.optout === "optional";
        if (B0 instanceof Promise) L.push(B0.then((d0) => O0 ? DW(d0, U, Z, V) : K8(d0, U, Z)));
        else if (O0) DW(B0, U, Z, V);
        else K8(B0, U, Z);
      }
    }
    if (!z2) return L.length ? Promise.all(L).then(() => U) : U;
    let F = [], M = K.keySet, O = z2._zod, A = O.def.type;
    for (let R of Object.keys(V)) {
      if (M.has(R)) continue;
      if (A === "never") {
        F.push(R);
        continue;
      }
      let Z = O.run({ value: V[R], issues: [] }, q);
      if (Z instanceof Promise) L.push(Z.then((C) => K8(C, U, R)));
      else K8(Z, U, R);
    }
    if (F.length) U.issues.push({ code: "unrecognized_keys", keys: F, input: V, inst: Q });
    if (!L.length) return U;
    return Promise.all(L).then(() => {
      return U;
    });
  };
});
function MW(Q, X, Y, $) {
  for (let J of Q) if (J.issues.length === 0) return X.value = J.value, X;
  return X.issues.push({ code: "invalid_union", input: X.value, inst: Y, errors: Q.map((J) => J.issues.map((W) => G1(W, $, l0()))) }), X;
}
var U8 = D("$ZodUnion", (Q, X) => {
  e.init(Q, X), $0(Q._zod, "optin", () => X.options.some((Y) => Y._zod.optin === "optional") ? "optional" : void 0), $0(Q._zod, "optout", () => X.options.some((Y) => Y._zod.optout === "optional") ? "optional" : void 0), $0(Q._zod, "values", () => {
    if (X.options.every((Y) => Y._zod.values)) return new Set(X.options.flatMap((Y) => Array.from(Y._zod.values)));
    return;
  }), $0(Q._zod, "pattern", () => {
    if (X.options.every((Y) => Y._zod.pattern)) {
      let Y = X.options.map(($) => $._zod.pattern);
      return new RegExp(`^(${Y.map(($) => s9($.source)).join("|")})$`);
    }
    return;
  }), Q._zod.parse = (Y, $) => {
    let J = false, W = [];
    for (let G of X.options) {
      let H = G._zod.run({ value: Y.value, issues: [] }, $);
      if (H instanceof Promise) W.push(H), J = true;
      else {
        if (H.issues.length === 0) return H;
        W.push(H);
      }
    }
    if (!J) return MW(W, Y, Q, $);
    return Promise.all(W).then((G) => {
      return MW(G, Y, Q, $);
    });
  };
});
var aX = D("$ZodDiscriminatedUnion", (Q, X) => {
  U8.init(Q, X);
  let Y = Q._zod.parse;
  $0(Q._zod, "propValues", () => {
    let J = {};
    for (let W of X.options) {
      let G = W._zod.propValues;
      if (!G || Object.keys(G).length === 0) throw Error(`Invalid discriminated union option at index "${X.options.indexOf(W)}"`);
      for (let [H, B] of Object.entries(G)) {
        if (!J[H]) J[H] = /* @__PURE__ */ new Set();
        for (let z2 of B) J[H].add(z2);
      }
    }
    return J;
  });
  let $ = t9(() => {
    let J = X.options, W = /* @__PURE__ */ new Map();
    for (let G of J) {
      let H = G._zod.propValues[X.discriminator];
      if (!H || H.size === 0) throw Error(`Invalid discriminated union option at index "${X.options.indexOf(G)}"`);
      for (let B of H) {
        if (W.has(B)) throw Error(`Duplicate discriminator value "${String(B)}"`);
        W.set(B, G);
      }
    }
    return W;
  });
  Q._zod.parse = (J, W) => {
    let G = J.value;
    if (!K9(G)) return J.issues.push({ code: "invalid_type", expected: "object", input: G, inst: Q }), J;
    let H = $.value.get(G?.[X.discriminator]);
    if (H) return H._zod.run(J, W);
    if (X.unionFallback) return Y(J, W);
    return J.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", input: G, path: [X.discriminator], inst: Q }), J;
  };
});
var sX = D("$ZodIntersection", (Q, X) => {
  e.init(Q, X), Q._zod.parse = (Y, $) => {
    let J = Y.value, W = X.left._zod.run({ value: J, issues: [] }, $), G = X.right._zod.run({ value: J, issues: [] }, $);
    if (W instanceof Promise || G instanceof Promise) return Promise.all([W, G]).then(([B, z2]) => {
      return wW(Y, B, z2);
    });
    return wW(Y, W, G);
  };
});
function bX(Q, X) {
  if (Q === X) return { valid: true, data: Q };
  if (Q instanceof Date && X instanceof Date && +Q === +X) return { valid: true, data: Q };
  if (V9(Q) && V9(X)) {
    let Y = Object.keys(X), $ = Object.keys(Q).filter((W) => Y.indexOf(W) !== -1), J = { ...Q, ...X };
    for (let W of $) {
      let G = bX(Q[W], X[W]);
      if (!G.valid) return { valid: false, mergeErrorPath: [W, ...G.mergeErrorPath] };
      J[W] = G.data;
    }
    return { valid: true, data: J };
  }
  if (Array.isArray(Q) && Array.isArray(X)) {
    if (Q.length !== X.length) return { valid: false, mergeErrorPath: [] };
    let Y = [];
    for (let $ = 0; $ < Q.length; $++) {
      let J = Q[$], W = X[$], G = bX(J, W);
      if (!G.valid) return { valid: false, mergeErrorPath: [$, ...G.mergeErrorPath] };
      Y.push(G.data);
    }
    return { valid: true, data: Y };
  }
  return { valid: false, mergeErrorPath: [] };
}
function wW(Q, X, Y) {
  if (X.issues.length) Q.issues.push(...X.issues);
  if (Y.issues.length) Q.issues.push(...Y.issues);
  if (w6(Q)) return Q;
  let $ = bX(X.value, Y.value);
  if (!$.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify($.mergeErrorPath)}`);
  return Q.value = $.data, Q;
}
var eX = D("$ZodRecord", (Q, X) => {
  e.init(Q, X), Q._zod.parse = (Y, $) => {
    let J = Y.value;
    if (!V9(J)) return Y.issues.push({ expected: "record", code: "invalid_type", input: J, inst: Q }), Y;
    let W = [];
    if (X.keyType._zod.values) {
      let G = X.keyType._zod.values;
      Y.value = {};
      for (let B of G) if (typeof B === "string" || typeof B === "number" || typeof B === "symbol") {
        let z2 = X.valueType._zod.run({ value: J[B], issues: [] }, $);
        if (z2 instanceof Promise) W.push(z2.then((K) => {
          if (K.issues.length) Y.issues.push(...j1(B, K.issues));
          Y.value[B] = K.value;
        }));
        else {
          if (z2.issues.length) Y.issues.push(...j1(B, z2.issues));
          Y.value[B] = z2.value;
        }
      }
      let H;
      for (let B in J) if (!G.has(B)) H = H ?? [], H.push(B);
      if (H && H.length > 0) Y.issues.push({ code: "unrecognized_keys", input: J, inst: Q, keys: H });
    } else {
      Y.value = {};
      for (let G of Reflect.ownKeys(J)) {
        if (G === "__proto__") continue;
        let H = X.keyType._zod.run({ value: G, issues: [] }, $);
        if (H instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (H.issues.length) {
          Y.issues.push({ origin: "record", code: "invalid_key", issues: H.issues.map((z2) => G1(z2, $, l0())), input: G, path: [G], inst: Q }), Y.value[H.value] = H.value;
          continue;
        }
        let B = X.valueType._zod.run({ value: J[G], issues: [] }, $);
        if (B instanceof Promise) W.push(B.then((z2) => {
          if (z2.issues.length) Y.issues.push(...j1(G, z2.issues));
          Y.value[H.value] = z2.value;
        }));
        else {
          if (B.issues.length) Y.issues.push(...j1(G, B.issues));
          Y.value[H.value] = B.value;
        }
      }
    }
    if (W.length) return Promise.all(W).then(() => Y);
    return Y;
  };
});
var QY = D("$ZodEnum", (Q, X) => {
  e.init(Q, X);
  let Y = r9(X.entries);
  Q._zod.values = new Set(Y), Q._zod.pattern = new RegExp(`^(${Y.filter(($) => BX.has(typeof $)).map(($) => typeof $ === "string" ? o1($) : $.toString()).join("|")})$`), Q._zod.parse = ($, J) => {
    let W = $.value;
    if (Q._zod.values.has(W)) return $;
    return $.issues.push({ code: "invalid_value", values: Y, input: W, inst: Q }), $;
  };
});
var XY = D("$ZodLiteral", (Q, X) => {
  e.init(Q, X), Q._zod.values = new Set(X.values), Q._zod.pattern = new RegExp(`^(${X.values.map((Y) => typeof Y === "string" ? o1(Y) : Y ? Y.toString() : String(Y)).join("|")})$`), Q._zod.parse = (Y, $) => {
    let J = Y.value;
    if (Q._zod.values.has(J)) return Y;
    return Y.issues.push({ code: "invalid_value", values: X.values, input: J, inst: Q }), Y;
  };
});
var YY = D("$ZodTransform", (Q, X) => {
  e.init(Q, X), Q._zod.parse = (Y, $) => {
    let J = X.transform(Y.value, Y);
    if ($.async) return (J instanceof Promise ? J : Promise.resolve(J)).then((G) => {
      return Y.value = G, Y;
    });
    if (J instanceof Promise) throw new n1();
    return Y.value = J, Y;
  };
});
var $Y = D("$ZodOptional", (Q, X) => {
  e.init(Q, X), Q._zod.optin = "optional", Q._zod.optout = "optional", $0(Q._zod, "values", () => {
    return X.innerType._zod.values ? /* @__PURE__ */ new Set([...X.innerType._zod.values, void 0]) : void 0;
  }), $0(Q._zod, "pattern", () => {
    let Y = X.innerType._zod.pattern;
    return Y ? new RegExp(`^(${s9(Y.source)})?$`) : void 0;
  }), Q._zod.parse = (Y, $) => {
    if (X.innerType._zod.optin === "optional") return X.innerType._zod.run(Y, $);
    if (Y.value === void 0) return Y;
    return X.innerType._zod.run(Y, $);
  };
});
var JY = D("$ZodNullable", (Q, X) => {
  e.init(Q, X), $0(Q._zod, "optin", () => X.innerType._zod.optin), $0(Q._zod, "optout", () => X.innerType._zod.optout), $0(Q._zod, "pattern", () => {
    let Y = X.innerType._zod.pattern;
    return Y ? new RegExp(`^(${s9(Y.source)}|null)$`) : void 0;
  }), $0(Q._zod, "values", () => {
    return X.innerType._zod.values ? /* @__PURE__ */ new Set([...X.innerType._zod.values, null]) : void 0;
  }), Q._zod.parse = (Y, $) => {
    if (Y.value === null) return Y;
    return X.innerType._zod.run(Y, $);
  };
});
var WY = D("$ZodDefault", (Q, X) => {
  e.init(Q, X), Q._zod.optin = "optional", $0(Q._zod, "values", () => X.innerType._zod.values), Q._zod.parse = (Y, $) => {
    if (Y.value === void 0) return Y.value = X.defaultValue, Y;
    let J = X.innerType._zod.run(Y, $);
    if (J instanceof Promise) return J.then((W) => AW(W, X));
    return AW(J, X);
  };
});
function AW(Q, X) {
  if (Q.value === void 0) Q.value = X.defaultValue;
  return Q;
}
var GY = D("$ZodPrefault", (Q, X) => {
  e.init(Q, X), Q._zod.optin = "optional", $0(Q._zod, "values", () => X.innerType._zod.values), Q._zod.parse = (Y, $) => {
    if (Y.value === void 0) Y.value = X.defaultValue;
    return X.innerType._zod.run(Y, $);
  };
});
var HY = D("$ZodNonOptional", (Q, X) => {
  e.init(Q, X), $0(Q._zod, "values", () => {
    let Y = X.innerType._zod.values;
    return Y ? new Set([...Y].filter(($) => $ !== void 0)) : void 0;
  }), Q._zod.parse = (Y, $) => {
    let J = X.innerType._zod.run(Y, $);
    if (J instanceof Promise) return J.then((W) => jW(W, Q));
    return jW(J, Q);
  };
});
function jW(Q, X) {
  if (!Q.issues.length && Q.value === void 0) Q.issues.push({ code: "invalid_type", expected: "nonoptional", input: Q.value, inst: X });
  return Q;
}
var BY = D("$ZodCatch", (Q, X) => {
  e.init(Q, X), Q._zod.optin = "optional", $0(Q._zod, "optout", () => X.innerType._zod.optout), $0(Q._zod, "values", () => X.innerType._zod.values), Q._zod.parse = (Y, $) => {
    let J = X.innerType._zod.run(Y, $);
    if (J instanceof Promise) return J.then((W) => {
      if (Y.value = W.value, W.issues.length) Y.value = X.catchValue({ ...Y, error: { issues: W.issues.map((G) => G1(G, $, l0())) }, input: Y.value }), Y.issues = [];
      return Y;
    });
    if (Y.value = J.value, J.issues.length) Y.value = X.catchValue({ ...Y, error: { issues: J.issues.map((W) => G1(W, $, l0())) }, input: Y.value }), Y.issues = [];
    return Y;
  };
});
var zY = D("$ZodPipe", (Q, X) => {
  e.init(Q, X), $0(Q._zod, "values", () => X.in._zod.values), $0(Q._zod, "optin", () => X.in._zod.optin), $0(Q._zod, "optout", () => X.out._zod.optout), Q._zod.parse = (Y, $) => {
    let J = X.in._zod.run(Y, $);
    if (J instanceof Promise) return J.then((W) => RW(W, X, $));
    return RW(J, X, $);
  };
});
function RW(Q, X, Y) {
  if (w6(Q)) return Q;
  return X.out._zod.run({ value: Q.value, issues: Q.issues }, Y);
}
var KY = D("$ZodReadonly", (Q, X) => {
  e.init(Q, X), $0(Q._zod, "propValues", () => X.innerType._zod.propValues), $0(Q._zod, "values", () => X.innerType._zod.values), $0(Q._zod, "optin", () => X.innerType._zod.optin), $0(Q._zod, "optout", () => X.innerType._zod.optout), Q._zod.parse = (Y, $) => {
    let J = X.innerType._zod.run(Y, $);
    if (J instanceof Promise) return J.then(IW);
    return IW(J);
  };
});
function IW(Q) {
  return Q.value = Object.freeze(Q.value), Q;
}
var VY = D("$ZodCustom", (Q, X) => {
  j0.init(Q, X), e.init(Q, X), Q._zod.parse = (Y, $) => {
    return Y;
  }, Q._zod.check = (Y) => {
    let $ = Y.value, J = X.fn($);
    if (J instanceof Promise) return J.then((W) => bW(W, Y, $, Q));
    bW(J, Y, $, Q);
    return;
  };
});
function bW(Q, X, Y, $) {
  if (!Q) {
    let J = { code: "custom", input: Y, inst: $, path: [...$._zod.def.path ?? []], continue: !$._zod.def.abort };
    if ($._zod.def.params) J.params = $._zod.def.params;
    X.issues.push(VX(J));
  }
}
var xF = (Q) => {
  let X = typeof Q;
  switch (X) {
    case "number":
      return Number.isNaN(Q) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(Q)) return "array";
      if (Q === null) return "null";
      if (Object.getPrototypeOf(Q) !== Object.prototype && Q.constructor) return Q.constructor.name;
    }
  }
  return X;
};
var yF = () => {
  let Q = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" } };
  function X($) {
    return Q[$] ?? null;
  }
  let Y = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" };
  return ($) => {
    switch ($.code) {
      case "invalid_type":
        return `Invalid input: expected ${$.expected}, received ${xF($.input)}`;
      case "invalid_value":
        if ($.values.length === 1) return `Invalid input: expected ${H8($.values[0])}`;
        return `Invalid option: expected one of ${W8($.values, "|")}`;
      case "too_big": {
        let J = $.inclusive ? "<=" : "<", W = X($.origin);
        if (W) return `Too big: expected ${$.origin ?? "value"} to have ${J}${$.maximum.toString()} ${W.unit ?? "elements"}`;
        return `Too big: expected ${$.origin ?? "value"} to be ${J}${$.maximum.toString()}`;
      }
      case "too_small": {
        let J = $.inclusive ? ">=" : ">", W = X($.origin);
        if (W) return `Too small: expected ${$.origin} to have ${J}${$.minimum.toString()} ${W.unit}`;
        return `Too small: expected ${$.origin} to be ${J}${$.minimum.toString()}`;
      }
      case "invalid_format": {
        let J = $;
        if (J.format === "starts_with") return `Invalid string: must start with "${J.prefix}"`;
        if (J.format === "ends_with") return `Invalid string: must end with "${J.suffix}"`;
        if (J.format === "includes") return `Invalid string: must include "${J.includes}"`;
        if (J.format === "regex") return `Invalid string: must match pattern ${J.pattern}`;
        return `Invalid ${Y[J.format] ?? $.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${$.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${$.keys.length > 1 ? "s" : ""}: ${W8($.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${$.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${$.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function qY() {
  return { localeError: yF() };
}
var L8 = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(Q, ...X) {
    let Y = X[0];
    if (this._map.set(Q, Y), Y && typeof Y === "object" && "id" in Y) {
      if (this._idmap.has(Y.id)) throw Error(`ID ${Y.id} already exists in the registry`);
      this._idmap.set(Y.id, Q);
    }
    return this;
  }
  remove(Q) {
    return this._map.delete(Q), this;
  }
  get(Q) {
    let X = Q._zod.parent;
    if (X) {
      let Y = { ...this.get(X) ?? {} };
      return delete Y.id, { ...Y, ...this._map.get(Q) };
    }
    return this._map.get(Q);
  }
  has(Q) {
    return this._map.has(Q);
  }
};
function _W() {
  return new L8();
}
var r1 = _W();
function UY(Q, X) {
  return new Q({ type: "string", ...y(X) });
}
function LY(Q, X) {
  return new Q({ type: "string", format: "email", check: "string_format", abort: false, ...y(X) });
}
function F8(Q, X) {
  return new Q({ type: "string", format: "guid", check: "string_format", abort: false, ...y(X) });
}
function FY(Q, X) {
  return new Q({ type: "string", format: "uuid", check: "string_format", abort: false, ...y(X) });
}
function NY(Q, X) {
  return new Q({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...y(X) });
}
function OY(Q, X) {
  return new Q({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...y(X) });
}
function DY(Q, X) {
  return new Q({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...y(X) });
}
function MY(Q, X) {
  return new Q({ type: "string", format: "url", check: "string_format", abort: false, ...y(X) });
}
function wY(Q, X) {
  return new Q({ type: "string", format: "emoji", check: "string_format", abort: false, ...y(X) });
}
function AY(Q, X) {
  return new Q({ type: "string", format: "nanoid", check: "string_format", abort: false, ...y(X) });
}
function jY(Q, X) {
  return new Q({ type: "string", format: "cuid", check: "string_format", abort: false, ...y(X) });
}
function RY(Q, X) {
  return new Q({ type: "string", format: "cuid2", check: "string_format", abort: false, ...y(X) });
}
function IY(Q, X) {
  return new Q({ type: "string", format: "ulid", check: "string_format", abort: false, ...y(X) });
}
function bY(Q, X) {
  return new Q({ type: "string", format: "xid", check: "string_format", abort: false, ...y(X) });
}
function EY(Q, X) {
  return new Q({ type: "string", format: "ksuid", check: "string_format", abort: false, ...y(X) });
}
function PY(Q, X) {
  return new Q({ type: "string", format: "ipv4", check: "string_format", abort: false, ...y(X) });
}
function ZY(Q, X) {
  return new Q({ type: "string", format: "ipv6", check: "string_format", abort: false, ...y(X) });
}
function CY(Q, X) {
  return new Q({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...y(X) });
}
function SY(Q, X) {
  return new Q({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...y(X) });
}
function _Y(Q, X) {
  return new Q({ type: "string", format: "base64", check: "string_format", abort: false, ...y(X) });
}
function kY(Q, X) {
  return new Q({ type: "string", format: "base64url", check: "string_format", abort: false, ...y(X) });
}
function vY(Q, X) {
  return new Q({ type: "string", format: "e164", check: "string_format", abort: false, ...y(X) });
}
function TY(Q, X) {
  return new Q({ type: "string", format: "jwt", check: "string_format", abort: false, ...y(X) });
}
function kW(Q, X) {
  return new Q({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...y(X) });
}
function vW(Q, X) {
  return new Q({ type: "string", format: "date", check: "string_format", ...y(X) });
}
function TW(Q, X) {
  return new Q({ type: "string", format: "time", check: "string_format", precision: null, ...y(X) });
}
function xW(Q, X) {
  return new Q({ type: "string", format: "duration", check: "string_format", ...y(X) });
}
function xY(Q, X) {
  return new Q({ type: "number", checks: [], ...y(X) });
}
function yY(Q, X) {
  return new Q({ type: "number", check: "number_format", abort: false, format: "safeint", ...y(X) });
}
function gY(Q, X) {
  return new Q({ type: "boolean", ...y(X) });
}
function hY(Q, X) {
  return new Q({ type: "null", ...y(X) });
}
function fY(Q) {
  return new Q({ type: "unknown" });
}
function uY(Q, X) {
  return new Q({ type: "never", ...y(X) });
}
function N8(Q, X) {
  return new jX({ check: "less_than", ...y(X), value: Q, inclusive: false });
}
function $4(Q, X) {
  return new jX({ check: "less_than", ...y(X), value: Q, inclusive: true });
}
function O8(Q, X) {
  return new RX({ check: "greater_than", ...y(X), value: Q, inclusive: false });
}
function J4(Q, X) {
  return new RX({ check: "greater_than", ...y(X), value: Q, inclusive: true });
}
function D8(Q, X) {
  return new $W({ check: "multiple_of", ...y(X), value: Q });
}
function M8(Q, X) {
  return new WW({ check: "max_length", ...y(X), maximum: Q });
}
function q9(Q, X) {
  return new GW({ check: "min_length", ...y(X), minimum: Q });
}
function w8(Q, X) {
  return new HW({ check: "length_equals", ...y(X), length: Q });
}
function mY(Q, X) {
  return new BW({ check: "string_format", format: "regex", ...y(X), pattern: Q });
}
function lY(Q) {
  return new zW({ check: "string_format", format: "lowercase", ...y(Q) });
}
function cY(Q) {
  return new KW({ check: "string_format", format: "uppercase", ...y(Q) });
}
function pY(Q, X) {
  return new VW({ check: "string_format", format: "includes", ...y(X), includes: Q });
}
function dY(Q, X) {
  return new qW({ check: "string_format", format: "starts_with", ...y(X), prefix: Q });
}
function iY(Q, X) {
  return new UW({ check: "string_format", format: "ends_with", ...y(X), suffix: Q });
}
function R6(Q) {
  return new LW({ check: "overwrite", tx: Q });
}
function nY(Q) {
  return R6((X) => X.normalize(Q));
}
function oY() {
  return R6((Q) => Q.trim());
}
function rY() {
  return R6((Q) => Q.toLowerCase());
}
function tY() {
  return R6((Q) => Q.toUpperCase());
}
function yW(Q, X, Y) {
  return new Q({ type: "array", element: X, ...y(Y) });
}
function aY(Q, X, Y) {
  let $ = y(Y);
  return $.abort ?? ($.abort = true), new Q({ type: "custom", check: "custom", fn: X, ...$ });
}
function sY(Q, X, Y) {
  return new Q({ type: "custom", check: "custom", fn: X, ...y(Y) });
}
var MN = D("ZodMiniType", (Q, X) => {
  if (!Q._zod) throw Error("Uninitialized schema in ZodMiniType.");
  e.init(Q, X), Q.def = X, Q.parse = (Y, $) => FX(Q, Y, $, { callee: Q.parse }), Q.safeParse = (Y, $) => A6(Q, Y, $), Q.parseAsync = async (Y, $) => OX(Q, Y, $, { callee: Q.parseAsync }), Q.safeParseAsync = async (Y, $) => j6(Q, Y, $), Q.check = (...Y) => {
    return Q.clone({ ...X, checks: [...X.checks ?? [], ...Y.map(($) => typeof $ === "function" ? { _zod: { check: $, def: { check: "custom" }, onattach: [] } } : $)] });
  }, Q.clone = (Y, $) => c0(Q, Y, $), Q.brand = () => Q, Q.register = (Y, $) => {
    return Y.add(Q, $), Q;
  };
});
var wN = D("ZodMiniObject", (Q, X) => {
  q8.init(Q, X), MN.init(Q, X), i.defineLazy(Q, "shape", () => X.shape);
});
var W4 = {};
gQ(W4, { time: () => J$, duration: () => W$, datetime: () => Y$, date: () => $$, ZodISOTime: () => lW, ZodISODuration: () => cW, ZodISODateTime: () => uW, ZodISODate: () => mW });
var uW = D("ZodISODateTime", (Q, X) => {
  EW.init(Q, X), z0.init(Q, X);
});
function Y$(Q) {
  return kW(uW, Q);
}
var mW = D("ZodISODate", (Q, X) => {
  PW.init(Q, X), z0.init(Q, X);
});
function $$(Q) {
  return vW(mW, Q);
}
var lW = D("ZodISOTime", (Q, X) => {
  ZW.init(Q, X), z0.init(Q, X);
});
function J$(Q) {
  return TW(lW, Q);
}
var cW = D("ZodISODuration", (Q, X) => {
  CW.init(Q, X), z0.init(Q, X);
});
function W$(Q) {
  return xW(cW, Q);
}
var pW = (Q, X) => {
  B8.init(Q, X), Q.name = "ZodError", Object.defineProperties(Q, { format: { value: (Y) => UX(Q, Y) }, flatten: { value: (Y) => qX(Q, Y) }, addIssue: { value: (Y) => Q.issues.push(Y) }, addIssues: { value: (Y) => Q.issues.push(...Y) }, isEmpty: { get() {
    return Q.issues.length === 0;
  } } });
};
var d_ = D("ZodError", pW);
var G4 = D("ZodError", pW, { Parent: Error });
var dW = LX(G4);
var iW = NX(G4);
var nW = DX(G4);
var oW = MX(G4);
var N0 = D("ZodType", (Q, X) => {
  return e.init(Q, X), Q.def = X, Object.defineProperty(Q, "_def", { value: X }), Q.check = (...Y) => {
    return Q.clone({ ...X, checks: [...X.checks ?? [], ...Y.map(($) => typeof $ === "function" ? { _zod: { check: $, def: { check: "custom" }, onattach: [] } } : $)] });
  }, Q.clone = (Y, $) => c0(Q, Y, $), Q.brand = () => Q, Q.register = (Y, $) => {
    return Y.add(Q, $), Q;
  }, Q.parse = (Y, $) => dW(Q, Y, $, { callee: Q.parse }), Q.safeParse = (Y, $) => nW(Q, Y, $), Q.parseAsync = async (Y, $) => iW(Q, Y, $, { callee: Q.parseAsync }), Q.safeParseAsync = async (Y, $) => oW(Q, Y, $), Q.spa = Q.safeParseAsync, Q.refine = (Y, $) => Q.check(OO(Y, $)), Q.superRefine = (Y) => Q.check(DO(Y)), Q.overwrite = (Y) => Q.check(R6(Y)), Q.optional = () => F0(Q), Q.nullable = () => aW(Q), Q.nullish = () => F0(aW(Q)), Q.nonoptional = (Y) => KO(Q, Y), Q.array = () => n(Q), Q.or = (Y) => W0([Q, Y]), Q.and = (Y) => b8(Q, Y), Q.transform = (Y) => H$(Q, YG(Y)), Q.default = (Y) => HO(Q, Y), Q.prefault = (Y) => zO(Q, Y), Q.catch = (Y) => qO(Q, Y), Q.pipe = (Y) => H$(Q, Y), Q.readonly = () => FO(Q), Q.describe = (Y) => {
    let $ = Q.clone();
    return r1.add($, { description: Y }), $;
  }, Object.defineProperty(Q, "description", { get() {
    return r1.get(Q)?.description;
  }, configurable: true }), Q.meta = (...Y) => {
    if (Y.length === 0) return r1.get(Q);
    let $ = Q.clone();
    return r1.add($, Y[0]), $;
  }, Q.isOptional = () => Q.safeParse(void 0).success, Q.isNullable = () => Q.safeParse(null).success, Q;
});
var sW = D("_ZodString", (Q, X) => {
  Y4.init(Q, X), N0.init(Q, X);
  let Y = Q._zod.bag;
  Q.format = Y.format ?? null, Q.minLength = Y.minimum ?? null, Q.maxLength = Y.maximum ?? null, Q.regex = (...$) => Q.check(mY(...$)), Q.includes = (...$) => Q.check(pY(...$)), Q.startsWith = (...$) => Q.check(dY(...$)), Q.endsWith = (...$) => Q.check(iY(...$)), Q.min = (...$) => Q.check(q9(...$)), Q.max = (...$) => Q.check(M8(...$)), Q.length = (...$) => Q.check(w8(...$)), Q.nonempty = (...$) => Q.check(q9(1, ...$)), Q.lowercase = ($) => Q.check(lY($)), Q.uppercase = ($) => Q.check(cY($)), Q.trim = () => Q.check(oY()), Q.normalize = (...$) => Q.check(nY(...$)), Q.toLowerCase = () => Q.check(rY()), Q.toUpperCase = () => Q.check(tY());
});
var CN = D("ZodString", (Q, X) => {
  Y4.init(Q, X), sW.init(Q, X), Q.email = (Y) => Q.check(LY(SN, Y)), Q.url = (Y) => Q.check(MY(_N, Y)), Q.jwt = (Y) => Q.check(TY(iN, Y)), Q.emoji = (Y) => Q.check(wY(kN, Y)), Q.guid = (Y) => Q.check(F8(rW, Y)), Q.uuid = (Y) => Q.check(FY(I8, Y)), Q.uuidv4 = (Y) => Q.check(NY(I8, Y)), Q.uuidv6 = (Y) => Q.check(OY(I8, Y)), Q.uuidv7 = (Y) => Q.check(DY(I8, Y)), Q.nanoid = (Y) => Q.check(AY(vN, Y)), Q.guid = (Y) => Q.check(F8(rW, Y)), Q.cuid = (Y) => Q.check(jY(TN, Y)), Q.cuid2 = (Y) => Q.check(RY(xN, Y)), Q.ulid = (Y) => Q.check(IY(yN, Y)), Q.base64 = (Y) => Q.check(_Y(cN, Y)), Q.base64url = (Y) => Q.check(kY(pN, Y)), Q.xid = (Y) => Q.check(bY(gN, Y)), Q.ksuid = (Y) => Q.check(EY(hN, Y)), Q.ipv4 = (Y) => Q.check(PY(fN, Y)), Q.ipv6 = (Y) => Q.check(ZY(uN, Y)), Q.cidrv4 = (Y) => Q.check(CY(mN, Y)), Q.cidrv6 = (Y) => Q.check(SY(lN, Y)), Q.e164 = (Y) => Q.check(vY(dN, Y)), Q.datetime = (Y) => Q.check(Y$(Y)), Q.date = (Y) => Q.check($$(Y)), Q.time = (Y) => Q.check(J$(Y)), Q.duration = (Y) => Q.check(W$(Y));
});
function N(Q) {
  return UY(CN, Q);
}
var z0 = D("ZodStringFormat", (Q, X) => {
  J0.init(Q, X), sW.init(Q, X);
});
var SN = D("ZodEmail", (Q, X) => {
  ZX.init(Q, X), z0.init(Q, X);
});
var rW = D("ZodGUID", (Q, X) => {
  EX.init(Q, X), z0.init(Q, X);
});
var I8 = D("ZodUUID", (Q, X) => {
  PX.init(Q, X), z0.init(Q, X);
});
var _N = D("ZodURL", (Q, X) => {
  CX.init(Q, X), z0.init(Q, X);
});
var kN = D("ZodEmoji", (Q, X) => {
  SX.init(Q, X), z0.init(Q, X);
});
var vN = D("ZodNanoID", (Q, X) => {
  _X.init(Q, X), z0.init(Q, X);
});
var TN = D("ZodCUID", (Q, X) => {
  kX.init(Q, X), z0.init(Q, X);
});
var xN = D("ZodCUID2", (Q, X) => {
  vX.init(Q, X), z0.init(Q, X);
});
var yN = D("ZodULID", (Q, X) => {
  TX.init(Q, X), z0.init(Q, X);
});
var gN = D("ZodXID", (Q, X) => {
  xX.init(Q, X), z0.init(Q, X);
});
var hN = D("ZodKSUID", (Q, X) => {
  yX.init(Q, X), z0.init(Q, X);
});
var fN = D("ZodIPv4", (Q, X) => {
  gX.init(Q, X), z0.init(Q, X);
});
var uN = D("ZodIPv6", (Q, X) => {
  hX.init(Q, X), z0.init(Q, X);
});
var mN = D("ZodCIDRv4", (Q, X) => {
  fX.init(Q, X), z0.init(Q, X);
});
var lN = D("ZodCIDRv6", (Q, X) => {
  uX.init(Q, X), z0.init(Q, X);
});
var cN = D("ZodBase64", (Q, X) => {
  mX.init(Q, X), z0.init(Q, X);
});
var pN = D("ZodBase64URL", (Q, X) => {
  lX.init(Q, X), z0.init(Q, X);
});
var dN = D("ZodE164", (Q, X) => {
  cX.init(Q, X), z0.init(Q, X);
});
var iN = D("ZodJWT", (Q, X) => {
  pX.init(Q, X), z0.init(Q, X);
});
var eW = D("ZodNumber", (Q, X) => {
  V8.init(Q, X), N0.init(Q, X), Q.gt = ($, J) => Q.check(O8($, J)), Q.gte = ($, J) => Q.check(J4($, J)), Q.min = ($, J) => Q.check(J4($, J)), Q.lt = ($, J) => Q.check(N8($, J)), Q.lte = ($, J) => Q.check($4($, J)), Q.max = ($, J) => Q.check($4($, J)), Q.int = ($) => Q.check(tW($)), Q.safe = ($) => Q.check(tW($)), Q.positive = ($) => Q.check(O8(0, $)), Q.nonnegative = ($) => Q.check(J4(0, $)), Q.negative = ($) => Q.check(N8(0, $)), Q.nonpositive = ($) => Q.check($4(0, $)), Q.multipleOf = ($, J) => Q.check(D8($, J)), Q.step = ($, J) => Q.check(D8($, J)), Q.finite = () => Q;
  let Y = Q._zod.bag;
  Q.minValue = Math.max(Y.minimum ?? Number.NEGATIVE_INFINITY, Y.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, Q.maxValue = Math.min(Y.maximum ?? Number.POSITIVE_INFINITY, Y.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, Q.isInt = (Y.format ?? "").includes("int") || Number.isSafeInteger(Y.multipleOf ?? 0.5), Q.isFinite = true, Q.format = Y.format ?? null;
});
function s(Q) {
  return xY(eW, Q);
}
var nN = D("ZodNumberFormat", (Q, X) => {
  dX.init(Q, X), eW.init(Q, X);
});
function tW(Q) {
  return yY(nN, Q);
}
var oN = D("ZodBoolean", (Q, X) => {
  iX.init(Q, X), N0.init(Q, X);
});
function w0(Q) {
  return gY(oN, Q);
}
var rN = D("ZodNull", (Q, X) => {
  nX.init(Q, X), N0.init(Q, X);
});
function B$(Q) {
  return hY(rN, Q);
}
var tN = D("ZodUnknown", (Q, X) => {
  oX.init(Q, X), N0.init(Q, X);
});
function K0() {
  return fY(tN);
}
var aN = D("ZodNever", (Q, X) => {
  rX.init(Q, X), N0.init(Q, X);
});
function sN(Q) {
  return uY(aN, Q);
}
var eN = D("ZodArray", (Q, X) => {
  tX.init(Q, X), N0.init(Q, X), Q.element = X.element, Q.min = (Y, $) => Q.check(q9(Y, $)), Q.nonempty = (Y) => Q.check(q9(1, Y)), Q.max = (Y, $) => Q.check(M8(Y, $)), Q.length = (Y, $) => Q.check(w8(Y, $)), Q.unwrap = () => Q.element;
});
function n(Q, X) {
  return yW(eN, Q, X);
}
var QG = D("ZodObject", (Q, X) => {
  q8.init(Q, X), N0.init(Q, X), i.defineLazy(Q, "shape", () => X.shape), Q.keyof = () => y0(Object.keys(Q._zod.def.shape)), Q.catchall = (Y) => Q.clone({ ...Q._zod.def, catchall: Y }), Q.passthrough = () => Q.clone({ ...Q._zod.def, catchall: K0() }), Q.loose = () => Q.clone({ ...Q._zod.def, catchall: K0() }), Q.strict = () => Q.clone({ ...Q._zod.def, catchall: sN() }), Q.strip = () => Q.clone({ ...Q._zod.def, catchall: void 0 }), Q.extend = (Y) => {
    return i.extend(Q, Y);
  }, Q.merge = (Y) => i.merge(Q, Y), Q.pick = (Y) => i.pick(Q, Y), Q.omit = (Y) => i.omit(Q, Y), Q.partial = (...Y) => i.partial($G, Q, Y[0]), Q.required = (...Y) => i.required(JG, Q, Y[0]);
});
function P(Q, X) {
  let Y = { type: "object", get shape() {
    return i.assignProp(this, "shape", { ...Q }), this.shape;
  }, ...i.normalizeParams(X) };
  return new QG(Y);
}
function S0(Q, X) {
  return new QG({ type: "object", get shape() {
    return i.assignProp(this, "shape", { ...Q }), this.shape;
  }, catchall: K0(), ...i.normalizeParams(X) });
}
var XG = D("ZodUnion", (Q, X) => {
  U8.init(Q, X), N0.init(Q, X), Q.options = X.options;
});
function W0(Q, X) {
  return new XG({ type: "union", options: Q, ...i.normalizeParams(X) });
}
var QO = D("ZodDiscriminatedUnion", (Q, X) => {
  XG.init(Q, X), aX.init(Q, X);
});
function z$(Q, X, Y) {
  return new QO({ type: "union", options: X, discriminator: Q, ...i.normalizeParams(Y) });
}
var XO = D("ZodIntersection", (Q, X) => {
  sX.init(Q, X), N0.init(Q, X);
});
function b8(Q, X) {
  return new XO({ type: "intersection", left: Q, right: X });
}
var YO = D("ZodRecord", (Q, X) => {
  eX.init(Q, X), N0.init(Q, X), Q.keyType = X.keyType, Q.valueType = X.valueType;
});
function V0(Q, X, Y) {
  return new YO({ type: "record", keyType: Q, valueType: X, ...i.normalizeParams(Y) });
}
var G$ = D("ZodEnum", (Q, X) => {
  QY.init(Q, X), N0.init(Q, X), Q.enum = X.entries, Q.options = Object.values(X.entries);
  let Y = new Set(Object.keys(X.entries));
  Q.extract = ($, J) => {
    let W = {};
    for (let G of $) if (Y.has(G)) W[G] = X.entries[G];
    else throw Error(`Key ${G} not found in enum`);
    return new G$({ ...X, checks: [], ...i.normalizeParams(J), entries: W });
  }, Q.exclude = ($, J) => {
    let W = { ...X.entries };
    for (let G of $) if (Y.has(G)) delete W[G];
    else throw Error(`Key ${G} not found in enum`);
    return new G$({ ...X, checks: [], ...i.normalizeParams(J), entries: W });
  };
});
function y0(Q, X) {
  let Y = Array.isArray(Q) ? Object.fromEntries(Q.map(($) => [$, $])) : Q;
  return new G$({ type: "enum", entries: Y, ...i.normalizeParams(X) });
}
var $O = D("ZodLiteral", (Q, X) => {
  XY.init(Q, X), N0.init(Q, X), Q.values = new Set(X.values), Object.defineProperty(Q, "value", { get() {
    if (X.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return X.values[0];
  } });
});
function k(Q, X) {
  return new $O({ type: "literal", values: Array.isArray(Q) ? Q : [Q], ...i.normalizeParams(X) });
}
var JO = D("ZodTransform", (Q, X) => {
  YY.init(Q, X), N0.init(Q, X), Q._zod.parse = (Y, $) => {
    Y.addIssue = (W) => {
      if (typeof W === "string") Y.issues.push(i.issue(W, Y.value, X));
      else {
        let G = W;
        if (G.fatal) G.continue = false;
        G.code ?? (G.code = "custom"), G.input ?? (G.input = Y.value), G.inst ?? (G.inst = Q), G.continue ?? (G.continue = true), Y.issues.push(i.issue(G));
      }
    };
    let J = X.transform(Y.value, Y);
    if (J instanceof Promise) return J.then((W) => {
      return Y.value = W, Y;
    });
    return Y.value = J, Y;
  };
});
function YG(Q) {
  return new JO({ type: "transform", transform: Q });
}
var $G = D("ZodOptional", (Q, X) => {
  $Y.init(Q, X), N0.init(Q, X), Q.unwrap = () => Q._zod.def.innerType;
});
function F0(Q) {
  return new $G({ type: "optional", innerType: Q });
}
var WO = D("ZodNullable", (Q, X) => {
  JY.init(Q, X), N0.init(Q, X), Q.unwrap = () => Q._zod.def.innerType;
});
function aW(Q) {
  return new WO({ type: "nullable", innerType: Q });
}
var GO = D("ZodDefault", (Q, X) => {
  WY.init(Q, X), N0.init(Q, X), Q.unwrap = () => Q._zod.def.innerType, Q.removeDefault = Q.unwrap;
});
function HO(Q, X) {
  return new GO({ type: "default", innerType: Q, get defaultValue() {
    return typeof X === "function" ? X() : X;
  } });
}
var BO = D("ZodPrefault", (Q, X) => {
  GY.init(Q, X), N0.init(Q, X), Q.unwrap = () => Q._zod.def.innerType;
});
function zO(Q, X) {
  return new BO({ type: "prefault", innerType: Q, get defaultValue() {
    return typeof X === "function" ? X() : X;
  } });
}
var JG = D("ZodNonOptional", (Q, X) => {
  HY.init(Q, X), N0.init(Q, X), Q.unwrap = () => Q._zod.def.innerType;
});
function KO(Q, X) {
  return new JG({ type: "nonoptional", innerType: Q, ...i.normalizeParams(X) });
}
var VO = D("ZodCatch", (Q, X) => {
  BY.init(Q, X), N0.init(Q, X), Q.unwrap = () => Q._zod.def.innerType, Q.removeCatch = Q.unwrap;
});
function qO(Q, X) {
  return new VO({ type: "catch", innerType: Q, catchValue: typeof X === "function" ? X : () => X });
}
var UO = D("ZodPipe", (Q, X) => {
  zY.init(Q, X), N0.init(Q, X), Q.in = X.in, Q.out = X.out;
});
function H$(Q, X) {
  return new UO({ type: "pipe", in: Q, out: X });
}
var LO = D("ZodReadonly", (Q, X) => {
  KY.init(Q, X), N0.init(Q, X);
});
function FO(Q) {
  return new LO({ type: "readonly", innerType: Q });
}
var WG = D("ZodCustom", (Q, X) => {
  VY.init(Q, X), N0.init(Q, X);
});
function NO(Q, X) {
  let Y = new j0({ check: "custom", ...i.normalizeParams(X) });
  return Y._zod.check = Q, Y;
}
function GG(Q, X) {
  return aY(WG, Q ?? (() => true), X);
}
function OO(Q, X = {}) {
  return sY(WG, Q, X);
}
function DO(Q, X) {
  let Y = NO(($) => {
    return $.addIssue = (J) => {
      if (typeof J === "string") $.issues.push(i.issue(J, $.value, Y._zod.def));
      else {
        let W = J;
        if (W.fatal) W.continue = false;
        W.code ?? (W.code = "custom"), W.input ?? (W.input = $.value), W.inst ?? (W.inst = Y), W.continue ?? (W.continue = !Y._zod.def.abort), $.issues.push(i.issue(W));
      }
    }, Q($.value, $);
  }, X);
  return Y;
}
function K$(Q, X) {
  return H$(YG(Q), X);
}
l0(qY());
var s1 = "io.modelcontextprotocol/related-task";
var P8 = "2.0";
var R0 = GG((Q) => Q !== null && (typeof Q === "object" || typeof Q === "function"));
var BG = W0([N(), s().int()]);
var zG = N();
var Wk = S0({ ttl: W0([s(), B$()]).optional(), pollInterval: s().optional() });
var MO = P({ ttl: s().optional() });
var wO = P({ taskId: N() });
var q$ = S0({ progressToken: BG.optional(), [s1]: wO.optional() });
var p0 = P({ _meta: q$.optional() });
var H4 = p0.extend({ task: MO.optional() });
var I0 = P({ method: N(), params: p0.loose().optional() });
var a0 = P({ _meta: q$.optional() });
var s0 = P({ method: N(), params: a0.loose().optional() });
var b0 = S0({ _meta: q$.optional() });
var Z8 = W0([N(), s().int()]);
var VG = P({ jsonrpc: k(P8), id: Z8, ...I0.shape }).strict();
var qG = P({ jsonrpc: k(P8), ...s0.shape }).strict();
var L$ = P({ jsonrpc: k(P8), id: Z8, result: b0 }).strict();
var T;
(function(Q) {
  Q[Q.ConnectionClosed = -32e3] = "ConnectionClosed", Q[Q.RequestTimeout = -32001] = "RequestTimeout", Q[Q.ParseError = -32700] = "ParseError", Q[Q.InvalidRequest = -32600] = "InvalidRequest", Q[Q.MethodNotFound = -32601] = "MethodNotFound", Q[Q.InvalidParams = -32602] = "InvalidParams", Q[Q.InternalError = -32603] = "InternalError", Q[Q.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(T || (T = {}));
var F$ = P({ jsonrpc: k(P8), id: Z8.optional(), error: P({ code: s().int(), message: N(), data: K0().optional() }) }).strict();
var Gk = W0([VG, qG, L$, F$]);
var Hk = W0([L$, F$]);
var C8 = b0.strict();
var AO = a0.extend({ requestId: Z8.optional(), reason: N().optional() });
var S8 = s0.extend({ method: k("notifications/cancelled"), params: AO });
var jO = P({ src: N(), mimeType: N().optional(), sizes: n(N()).optional(), theme: y0(["light", "dark"]).optional() });
var z4 = P({ icons: n(jO).optional() });
var L9 = P({ name: N(), title: N().optional() });
var FG = L9.extend({ ...L9.shape, ...z4.shape, version: N(), websiteUrl: N().optional(), description: N().optional() });
var RO = b8(P({ applyDefaults: w0().optional() }), V0(N(), K0()));
var IO = K$((Q) => {
  if (Q && typeof Q === "object" && !Array.isArray(Q)) {
    if (Object.keys(Q).length === 0) return { form: {} };
  }
  return Q;
}, b8(P({ form: RO.optional(), url: R0.optional() }), V0(N(), K0()).optional()));
var bO = S0({ list: R0.optional(), cancel: R0.optional(), requests: S0({ sampling: S0({ createMessage: R0.optional() }).optional(), elicitation: S0({ create: R0.optional() }).optional() }).optional() });
var EO = S0({ list: R0.optional(), cancel: R0.optional(), requests: S0({ tools: S0({ call: R0.optional() }).optional() }).optional() });
var PO = P({ experimental: V0(N(), R0).optional(), sampling: P({ context: R0.optional(), tools: R0.optional() }).optional(), elicitation: IO.optional(), roots: P({ listChanged: w0().optional() }).optional(), tasks: bO.optional() });
var ZO = p0.extend({ protocolVersion: N(), capabilities: PO, clientInfo: FG });
var N$ = I0.extend({ method: k("initialize"), params: ZO });
var CO = P({ experimental: V0(N(), R0).optional(), logging: R0.optional(), completions: R0.optional(), prompts: P({ listChanged: w0().optional() }).optional(), resources: P({ subscribe: w0().optional(), listChanged: w0().optional() }).optional(), tools: P({ listChanged: w0().optional() }).optional(), tasks: EO.optional() });
var SO = b0.extend({ protocolVersion: N(), capabilities: CO, serverInfo: FG, instructions: N().optional() });
var O$ = s0.extend({ method: k("notifications/initialized"), params: a0.optional() });
var _8 = I0.extend({ method: k("ping"), params: p0.optional() });
var _O = P({ progress: s(), total: F0(s()), message: F0(N()) });
var kO = P({ ...a0.shape, ..._O.shape, progressToken: BG });
var k8 = s0.extend({ method: k("notifications/progress"), params: kO });
var vO = p0.extend({ cursor: zG.optional() });
var K4 = I0.extend({ params: vO.optional() });
var V4 = b0.extend({ nextCursor: zG.optional() });
var TO = y0(["working", "input_required", "completed", "failed", "cancelled"]);
var q4 = P({ taskId: N(), status: TO, ttl: W0([s(), B$()]), createdAt: N(), lastUpdatedAt: N(), pollInterval: F0(s()), statusMessage: F0(N()) });
var F9 = b0.extend({ task: q4 });
var xO = a0.merge(q4);
var U4 = s0.extend({ method: k("notifications/tasks/status"), params: xO });
var v8 = I0.extend({ method: k("tasks/get"), params: p0.extend({ taskId: N() }) });
var T8 = b0.merge(q4);
var x8 = I0.extend({ method: k("tasks/result"), params: p0.extend({ taskId: N() }) });
var Bk = b0.loose();
var y8 = K4.extend({ method: k("tasks/list") });
var g8 = V4.extend({ tasks: n(q4) });
var h8 = I0.extend({ method: k("tasks/cancel"), params: p0.extend({ taskId: N() }) });
var NG = b0.merge(q4);
var OG = P({ uri: N(), mimeType: F0(N()), _meta: V0(N(), K0()).optional() });
var DG = OG.extend({ text: N() });
var D$ = N().refine((Q) => {
  try {
    return atob(Q), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" });
var MG = OG.extend({ blob: D$ });
var L4 = y0(["user", "assistant"]);
var N9 = P({ audience: n(L4).optional(), priority: s().min(0).max(1).optional(), lastModified: W4.datetime({ offset: true }).optional() });
var wG = P({ ...L9.shape, ...z4.shape, uri: N(), description: F0(N()), mimeType: F0(N()), annotations: N9.optional(), _meta: F0(S0({})) });
var yO = P({ ...L9.shape, ...z4.shape, uriTemplate: N(), description: F0(N()), mimeType: F0(N()), annotations: N9.optional(), _meta: F0(S0({})) });
var f8 = K4.extend({ method: k("resources/list") });
var gO = V4.extend({ resources: n(wG) });
var u8 = K4.extend({ method: k("resources/templates/list") });
var hO = V4.extend({ resourceTemplates: n(yO) });
var M$ = p0.extend({ uri: N() });
var fO = M$;
var m8 = I0.extend({ method: k("resources/read"), params: fO });
var uO = b0.extend({ contents: n(W0([DG, MG])) });
var mO = s0.extend({ method: k("notifications/resources/list_changed"), params: a0.optional() });
var lO = M$;
var cO = I0.extend({ method: k("resources/subscribe"), params: lO });
var pO = M$;
var dO = I0.extend({ method: k("resources/unsubscribe"), params: pO });
var iO = a0.extend({ uri: N() });
var nO = s0.extend({ method: k("notifications/resources/updated"), params: iO });
var oO = P({ name: N(), description: F0(N()), required: F0(w0()) });
var rO = P({ ...L9.shape, ...z4.shape, description: F0(N()), arguments: F0(n(oO)), _meta: F0(S0({})) });
var l8 = K4.extend({ method: k("prompts/list") });
var tO = V4.extend({ prompts: n(rO) });
var aO = p0.extend({ name: N(), arguments: V0(N(), N()).optional() });
var c8 = I0.extend({ method: k("prompts/get"), params: aO });
var w$ = P({ type: k("text"), text: N(), annotations: N9.optional(), _meta: V0(N(), K0()).optional() });
var A$ = P({ type: k("image"), data: D$, mimeType: N(), annotations: N9.optional(), _meta: V0(N(), K0()).optional() });
var j$ = P({ type: k("audio"), data: D$, mimeType: N(), annotations: N9.optional(), _meta: V0(N(), K0()).optional() });
var sO = P({ type: k("tool_use"), name: N(), id: N(), input: V0(N(), K0()), _meta: V0(N(), K0()).optional() });
var eO = P({ type: k("resource"), resource: W0([DG, MG]), annotations: N9.optional(), _meta: V0(N(), K0()).optional() });
var QD = wG.extend({ type: k("resource_link") });
var R$ = W0([w$, A$, j$, QD, eO]);
var XD = P({ role: L4, content: R$ });
var YD = b0.extend({ description: N().optional(), messages: n(XD) });
var $D = s0.extend({ method: k("notifications/prompts/list_changed"), params: a0.optional() });
var JD = P({ title: N().optional(), readOnlyHint: w0().optional(), destructiveHint: w0().optional(), idempotentHint: w0().optional(), openWorldHint: w0().optional() });
var WD = P({ taskSupport: y0(["required", "optional", "forbidden"]).optional() });
var AG = P({ ...L9.shape, ...z4.shape, description: N().optional(), inputSchema: P({ type: k("object"), properties: V0(N(), R0).optional(), required: n(N()).optional() }).catchall(K0()), outputSchema: P({ type: k("object"), properties: V0(N(), R0).optional(), required: n(N()).optional() }).catchall(K0()).optional(), annotations: JD.optional(), execution: WD.optional(), _meta: V0(N(), K0()).optional() });
var p8 = K4.extend({ method: k("tools/list") });
var GD = V4.extend({ tools: n(AG) });
var d8 = b0.extend({ content: n(R$).default([]), structuredContent: V0(N(), K0()).optional(), isError: w0().optional() });
var zk = d8.or(b0.extend({ toolResult: K0() }));
var HD = H4.extend({ name: N(), arguments: V0(N(), K0()).optional() });
var O9 = I0.extend({ method: k("tools/call"), params: HD });
var BD = s0.extend({ method: k("notifications/tools/list_changed"), params: a0.optional() });
var Kk = P({ autoRefresh: w0().default(true), debounceMs: s().int().nonnegative().default(300) });
var F4 = y0(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
var zD = p0.extend({ level: F4 });
var I$ = I0.extend({ method: k("logging/setLevel"), params: zD });
var KD = a0.extend({ level: F4, logger: N().optional(), data: K0() });
var VD = s0.extend({ method: k("notifications/message"), params: KD });
var qD = P({ name: N().optional() });
var UD = P({ hints: n(qD).optional(), costPriority: s().min(0).max(1).optional(), speedPriority: s().min(0).max(1).optional(), intelligencePriority: s().min(0).max(1).optional() });
var LD = P({ mode: y0(["auto", "required", "none"]).optional() });
var FD = P({ type: k("tool_result"), toolUseId: N().describe("The unique identifier for the corresponding tool call."), content: n(R$).default([]), structuredContent: P({}).loose().optional(), isError: w0().optional(), _meta: V0(N(), K0()).optional() });
var ND = z$("type", [w$, A$, j$]);
var E8 = z$("type", [w$, A$, j$, sO, FD]);
var OD = P({ role: L4, content: W0([E8, n(E8)]), _meta: V0(N(), K0()).optional() });
var DD = H4.extend({ messages: n(OD), modelPreferences: UD.optional(), systemPrompt: N().optional(), includeContext: y0(["none", "thisServer", "allServers"]).optional(), temperature: s().optional(), maxTokens: s().int(), stopSequences: n(N()).optional(), metadata: R0.optional(), tools: n(AG).optional(), toolChoice: LD.optional() });
var MD = I0.extend({ method: k("sampling/createMessage"), params: DD });
var N4 = b0.extend({ model: N(), stopReason: F0(y0(["endTurn", "stopSequence", "maxTokens"]).or(N())), role: L4, content: ND });
var b$ = b0.extend({ model: N(), stopReason: F0(y0(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(N())), role: L4, content: W0([E8, n(E8)]) });
var wD = P({ type: k("boolean"), title: N().optional(), description: N().optional(), default: w0().optional() });
var AD = P({ type: k("string"), title: N().optional(), description: N().optional(), minLength: s().optional(), maxLength: s().optional(), format: y0(["email", "uri", "date", "date-time"]).optional(), default: N().optional() });
var jD = P({ type: y0(["number", "integer"]), title: N().optional(), description: N().optional(), minimum: s().optional(), maximum: s().optional(), default: s().optional() });
var RD = P({ type: k("string"), title: N().optional(), description: N().optional(), enum: n(N()), default: N().optional() });
var ID = P({ type: k("string"), title: N().optional(), description: N().optional(), oneOf: n(P({ const: N(), title: N() })), default: N().optional() });
var bD = P({ type: k("string"), title: N().optional(), description: N().optional(), enum: n(N()), enumNames: n(N()).optional(), default: N().optional() });
var ED = W0([RD, ID]);
var PD = P({ type: k("array"), title: N().optional(), description: N().optional(), minItems: s().optional(), maxItems: s().optional(), items: P({ type: k("string"), enum: n(N()) }), default: n(N()).optional() });
var ZD = P({ type: k("array"), title: N().optional(), description: N().optional(), minItems: s().optional(), maxItems: s().optional(), items: P({ anyOf: n(P({ const: N(), title: N() })) }), default: n(N()).optional() });
var CD = W0([PD, ZD]);
var SD = W0([bD, ED, CD]);
var _D = W0([SD, wD, AD, jD]);
var kD = H4.extend({ mode: k("form").optional(), message: N(), requestedSchema: P({ type: k("object"), properties: V0(N(), _D), required: n(N()).optional() }) });
var vD = H4.extend({ mode: k("url"), message: N(), elicitationId: N(), url: N().url() });
var TD = W0([kD, vD]);
var xD = I0.extend({ method: k("elicitation/create"), params: TD });
var yD = a0.extend({ elicitationId: N() });
var gD = s0.extend({ method: k("notifications/elicitation/complete"), params: yD });
var D9 = b0.extend({ action: y0(["accept", "decline", "cancel"]), content: K$((Q) => Q === null ? void 0 : Q, V0(N(), W0([N(), s(), w0(), n(N())])).optional()) });
var hD = P({ type: k("ref/resource"), uri: N() });
var fD = P({ type: k("ref/prompt"), name: N() });
var uD = p0.extend({ ref: W0([fD, hD]), argument: P({ name: N(), value: N() }), context: P({ arguments: V0(N(), N()).optional() }).optional() });
var i8 = I0.extend({ method: k("completion/complete"), params: uD });
var mD = b0.extend({ completion: S0({ values: n(N()).max(100), total: F0(s().int()), hasMore: F0(w0()) }) });
var lD = P({ uri: N().startsWith("file://"), name: N().optional(), _meta: V0(N(), K0()).optional() });
var cD = I0.extend({ method: k("roots/list"), params: p0.optional() });
var E$ = b0.extend({ roots: n(lD) });
var pD = s0.extend({ method: k("notifications/roots/list_changed"), params: a0.optional() });
var Vk = W0([_8, N$, i8, I$, c8, l8, f8, u8, m8, cO, dO, O9, p8, v8, x8, y8, h8]);
var qk = W0([S8, k8, O$, pD, U4]);
var Uk = W0([C8, N4, b$, D9, E$, T8, g8, F9]);
var Lk = W0([_8, MD, xD, cD, v8, x8, y8, h8]);
var Fk = W0([S8, k8, VD, nO, mO, BD, $D, U4, gD]);
var Nk = W0([C8, SO, mD, YD, tO, gO, hO, uO, d8, GD, T8, g8, F9]);
var nD = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var mK = s7(Z7(), 1);
var lK = s7(uK(), 1);
var dK;
(function(Q) {
  Q.Completable = "McpCompletable";
})(dK || (dK = {}));
function aK(Q) {
  let X;
  return () => X ??= Q();
}
var OE = aK(() => i1.object({ session_id: i1.string(), ws_url: i1.string(), work_dir: i1.string().optional(), session_key: i1.string().optional() }));

// src/common/wozcore/session-transcripts.ts
function repoPathToClaudeProjectName(repoDirPathNormalized) {
  const repoDirPathAbs = import_path10.default.resolve(repoDirPathNormalized);
  const repoCcProjectName = repoDirPathAbs.replace(/[\\/:\s~_]/g, "-");
  return repoCcProjectName;
}
async function discoverSessionTranscripts(opts) {
  const sessions = [];
  const sessionsDir = opts.projectsDirPath ?? getProjectsPath();
  const encodedProjectDir = opts.projectDir != null ? repoPathToClaudeProjectName(opts.projectDir) : void 0;
  let projectDirEntries;
  try {
    projectDirEntries = (await fs2.promises.readdir(sessionsDir)).map((d2) => import_path10.default.join(sessionsDir, d2));
  } catch {
    return [];
  }
  for (const dir of projectDirEntries) {
    let stat;
    try {
      stat = await fs2.promises.stat(dir);
    } catch {
      continue;
    }
    if (!stat.isDirectory()) continue;
    const projectPath = dir.split("/").pop() ?? "";
    let filePaths;
    try {
      filePaths = (await fs2.promises.readdir(dir)).filter((f) => f.endsWith(".jsonl"));
    } catch {
      continue;
    }
    for (const filePath of filePaths) {
      const sessionFilePath = import_path10.default.join(dir, filePath);
      const sessionId = import_path10.default.basename(sessionFilePath, ".jsonl");
      let fstat;
      try {
        fstat = await fs2.promises.stat(sessionFilePath);
      } catch {
        continue;
      }
      sessions.push({
        sessionId,
        sessionFilePath,
        projectPath,
        mtimeMs: fstat.mtimeMs,
        sizeBytes: fstat.size
      });
    }
  }
  sessions.sort((a2, b2) => {
    const aMatch = encodedProjectDir != null && a2.projectPath.includes(encodedProjectDir);
    const bMatch = encodedProjectDir != null && b2.projectPath.includes(encodedProjectDir);
    if (aMatch !== bMatch) return bMatch ? 1 : -1;
    return b2.mtimeMs - a2.mtimeMs;
  });
  return opts.maxSessions != null ? sessions.slice(0, opts.maxSessions) : sessions;
}
async function* readLinesFromEnd(filePath, chunkSize = 65536, readFromByteOffset) {
  const fd = await fs2.promises.open(filePath, "r");
  try {
    const stats = await fd.stat();
    const fileSize = readFromByteOffset ?? stats.size;
    if (fileSize <= chunkSize) {
      const buffer = Buffer.alloc(fileSize);
      await fd.read(buffer, 0, fileSize, 0);
      const lines = buffer.toString("utf-8").split("\n");
      for (let i2 = lines.length - 1; i2 >= 0; i2--) {
        yield lines[i2];
      }
      return;
    }
    let position = fileSize;
    let remainder = "";
    while (position > 0) {
      const readSize = Math.min(chunkSize, position);
      position -= readSize;
      const buffer = Buffer.alloc(readSize);
      await fd.read(buffer, 0, readSize, position);
      const text = buffer.toString("utf-8") + remainder;
      const lines = text.split("\n");
      remainder = position > 0 ? lines[0] : "";
      const startIdx = position > 0 ? 1 : 0;
      for (let i2 = lines.length - 1; i2 >= startIdx; i2--) {
        yield lines[i2];
      }
    }
    yield remainder;
  } finally {
    await fd.close();
  }
}
async function* withLastFlag(source) {
  const iterator = source[Symbol.asyncIterator]();
  try {
    let current = await iterator.next();
    while (!current.done) {
      const next = await iterator.next();
      yield [current.value, next.done === true];
      current = next;
    }
  } finally {
    await iterator.return?.();
  }
}
async function* streamTranscriptMessages(sessionJsonlFilePath, options) {
  const readFromEnd = options?.readFromEnd;
  const offset = options?.offset;
  const offsetToMessageId = options?.offsetToMessageId;
  const readFromByteOffset = options?.readFromByteOffset;
  let fileStream;
  let rl;
  let totalLinesSkipped = 0;
  try {
    let lineSource;
    if (readFromEnd) {
      lineSource = readLinesFromEnd(sessionJsonlFilePath, void 0, readFromByteOffset);
    } else {
      fileStream = fs2.createReadStream(sessionJsonlFilePath, {
        ...readFromByteOffset != null ? { start: readFromByteOffset } : {}
      });
      rl = import_readline2.default.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
      lineSource = rl;
    }
    let skipped = 0;
    const skipCount = offset ?? 0;
    let offsetAnchorFound = offsetToMessageId == null;
    for await (const [line, isLastLine] of withLastFlag(lineSource)) {
      if (line.trim()) {
        if (!offsetAnchorFound) {
          if (offsetToMessageId && line.includes(offsetToMessageId)) {
            try {
              const parsed = JSON.parse(line);
              if ("uuid" in parsed && parsed.uuid === offsetToMessageId) {
                offsetAnchorFound = true;
                if (skipCount === 0) {
                  yield [parsed, line, isLastLine];
                } else {
                  skipped = 1;
                }
              }
            } catch {
            }
          }
          totalLinesSkipped++;
          continue;
        }
        if (skipped < skipCount) {
          skipped++;
          totalLinesSkipped++;
          continue;
        }
        try {
          const message = JSON.parse(line);
          yield [message, line, isLastLine];
        } catch (e2) {
          console.warn("Error parsing line:", e2 instanceof Error ? e2.message : e2);
        }
      }
    }
  } catch (error48) {
    if (error48.code === "ENOENT") {
      console.warn(`Session doesn't exist: ${sessionJsonlFilePath}`);
    } else {
      console.error(`Error streaming messages for session ${sessionJsonlFilePath}:`, error48);
    }
  } finally {
    rl?.close();
    fileStream?.destroy();
  }
  return totalLinesSkipped;
}

// src/common/baseline/detection-patterns.ts
function markerFor(turnIndex, toolIdxWithinTurn) {
  return `${turnIndex}:${toolIdxWithinTurn}`;
}
function isReadTool(name) {
  return name === "Read";
}
function isEditTool(name) {
  return name === "Edit" || name === "MultiEdit" || name === "Write";
}
function isGrepTool(name) {
  return name === "Grep";
}
function isGlobTool(name) {
  return name === "Glob";
}
function detectReadBatch(turns, consumed = /* @__PURE__ */ new Set()) {
  const hits = [];
  let runStartTurn = -1;
  let runEndTurn = -1;
  let runReads = 0;
  const runMarkers = [];
  function flush() {
    if (runStartTurn >= 0 && runReads >= 2) {
      hits.push({
        toolType: "read_batch",
        callsSaved: runReads - 1,
        turnRange: [runStartTurn, runEndTurn],
        workflowLength: runReads
      });
      for (const m2 of runMarkers) consumed.add(m2);
    }
    runStartTurn = -1;
    runEndTurn = -1;
    runReads = 0;
    runMarkers.length = 0;
  }
  for (const turn of turns) {
    if (turn.hasRealUserMessage) flush();
    if (turn.toolUses.length === 0) continue;
    const unconsumedReadMarkers = [];
    let hasUnconsumedNonRead = false;
    for (let ui = 0; ui < turn.toolUses.length; ui++) {
      const marker = markerFor(turn.index, ui);
      if (consumed.has(marker)) continue;
      if (isReadTool(turn.toolUses[ui].name)) {
        unconsumedReadMarkers.push(marker);
      } else {
        hasUnconsumedNonRead = true;
      }
    }
    if (hasUnconsumedNonRead) {
      flush();
      continue;
    }
    if (unconsumedReadMarkers.length === 0) continue;
    if (runStartTurn < 0) runStartTurn = turn.index;
    runEndTurn = turn.index;
    runReads += unconsumedReadMarkers.length;
    runMarkers.push(...unconsumedReadMarkers);
  }
  flush();
  return hits;
}
function detectEditBatch(turns, consumed = /* @__PURE__ */ new Set()) {
  const hits = [];
  let runStartTurn = -1;
  let runEndTurn = -1;
  let runToolCount = 0;
  let runEditCount = 0;
  let runReadCount = 0;
  const runMarkers = [];
  function flush() {
    if (runStartTurn >= 0 && runEditCount >= 2) {
      const wozEquivalent = runReadCount > 0 ? 2 : 1;
      const callsSaved = runToolCount - wozEquivalent;
      if (callsSaved > 0) {
        hits.push({
          toolType: "edit_batch",
          callsSaved,
          turnRange: [runStartTurn, runEndTurn],
          workflowLength: runToolCount
        });
        for (const m2 of runMarkers) consumed.add(m2);
      }
    }
    runStartTurn = -1;
    runEndTurn = -1;
    runToolCount = 0;
    runEditCount = 0;
    runReadCount = 0;
    runMarkers.length = 0;
  }
  for (const turn of turns) {
    if (turn.hasRealUserMessage) flush();
    if (turn.toolUses.length === 0) continue;
    let turnEdits = 0;
    let turnReads = 0;
    let hasUnconsumedOther = false;
    const turnMarkers = [];
    for (let ui = 0; ui < turn.toolUses.length; ui++) {
      const marker = markerFor(turn.index, ui);
      if (consumed.has(marker)) continue;
      const tu = turn.toolUses[ui];
      if (isEditTool(tu.name)) {
        turnEdits++;
        turnMarkers.push(marker);
      } else if (isReadTool(tu.name)) {
        turnReads++;
        turnMarkers.push(marker);
      } else {
        hasUnconsumedOther = true;
      }
    }
    if (hasUnconsumedOther) {
      flush();
      continue;
    }
    if (turnEdits === 0 && turnReads === 0) continue;
    const extendWithReadOnly = runStartTurn >= 0 && turnReads > 0 && turnEdits === 0;
    if (turnEdits > 0 || extendWithReadOnly) {
      if (runStartTurn < 0) runStartTurn = turn.index;
      runEndTurn = turn.index;
      runToolCount += turnEdits + turnReads;
      runEditCount += turnEdits;
      runReadCount += turnReads;
      runMarkers.push(...turnMarkers);
    } else {
      flush();
    }
  }
  flush();
  return hits;
}
function detectXRead(turns, consumed, isMatchTool, toolType) {
  const hits = [];
  const WINDOW = 3;
  let i2 = 0;
  while (i2 < turns.length) {
    const turn = turns[i2];
    let matchToolIdx = -1;
    for (let ui = 0; ui < turn.toolUses.length; ui++) {
      const marker = markerFor(turn.index, ui);
      if (consumed.has(marker)) continue;
      if (isMatchTool(turn.toolUses[ui].name)) {
        matchToolIdx = ui;
        break;
      }
    }
    if (matchToolIdx < 0) {
      i2++;
      continue;
    }
    const workflowMarkers = [markerFor(turn.index, matchToolIdx)];
    let followedReads = 0;
    let windowEnd = i2;
    for (let j2 = i2 + 1; j2 < turns.length && j2 <= i2 + WINDOW; j2++) {
      const next = turns[j2];
      if (next.hasRealUserMessage) break;
      if (next.toolUses.length === 0) continue;
      let nextReads = 0;
      let nextOther = 0;
      const nextReadMarkers = [];
      for (let ui = 0; ui < next.toolUses.length; ui++) {
        const m2 = markerFor(next.index, ui);
        if (consumed.has(m2)) continue;
        if (isReadTool(next.toolUses[ui].name)) {
          nextReads++;
          nextReadMarkers.push(m2);
        } else {
          nextOther++;
        }
      }
      if (nextOther > 0) break;
      if (nextReads === 0) break;
      followedReads += nextReads;
      workflowMarkers.push(...nextReadMarkers);
      windowEnd = j2;
    }
    if (followedReads >= 1) {
      const workflowLength = 1 + followedReads;
      hits.push({
        toolType,
        callsSaved: workflowLength - 1,
        turnRange: [turn.index, turns[windowEnd].index],
        workflowLength
      });
      for (const m2 of workflowMarkers) consumed.add(m2);
      i2 = windowEnd + 1;
    } else {
      i2++;
    }
  }
  return hits;
}
function detectGrepRead(turns, consumed = /* @__PURE__ */ new Set()) {
  return detectXRead(turns, consumed, isGrepTool, "grep_read");
}
function detectGlobRead(turns, consumed = /* @__PURE__ */ new Set()) {
  return detectXRead(turns, consumed, isGlobTool, "glob_read");
}
function detectFailedEdit(turns, consumed = /* @__PURE__ */ new Set()) {
  const hits = [];
  const WINDOW = 5;
  for (let ti = 0; ti < turns.length; ti++) {
    const turn = turns[ti];
    for (let ui = 0; ui < turn.toolUses.length; ui++) {
      const marker = markerFor(turn.index, ui);
      if (consumed.has(marker)) continue;
      const tu = turn.toolUses[ui];
      if (!isEditTool(tu.name) || !tu.isError) continue;
      let workflowLength = 1;
      let endTurnIdx = turn.index;
      let foundSuccess = false;
      const markersInWorkflow = [marker];
      outer: for (let fj = ti; fj < turns.length && fj < ti + WINDOW; fj++) {
        const future = turns[fj];
        if (fj > ti && future.hasRealUserMessage) break;
        const startU = fj === ti ? ui + 1 : 0;
        for (let fu = startU; fu < future.toolUses.length; fu++) {
          const fmarker = markerFor(future.index, fu);
          if (consumed.has(fmarker)) continue;
          const ftu = future.toolUses[fu];
          if (isReadTool(ftu.name)) {
            workflowLength++;
            endTurnIdx = future.index;
            markersInWorkflow.push(fmarker);
          } else if (isEditTool(ftu.name)) {
            workflowLength++;
            endTurnIdx = future.index;
            markersInWorkflow.push(fmarker);
            if (!ftu.isError) {
              foundSuccess = true;
              break outer;
            }
          } else {
            break outer;
          }
        }
      }
      if (foundSuccess && workflowLength >= 2) {
        for (const m2 of markersInWorkflow) consumed.add(m2);
        hits.push({
          toolType: "failed_edit",
          callsSaved: workflowLength - 1,
          turnRange: [turn.index, endTurnIdx],
          workflowLength
        });
      }
    }
  }
  return hits;
}
var SQL_REGEX = /\b(psql|sqlite3|mysql|duckdb)\b|DATABASE_URL/i;
function detectBashSql(turns, consumed = /* @__PURE__ */ new Set()) {
  const hits = [];
  const WINDOW = 5;
  let runStart = -1;
  let runEnd = -1;
  let runCount = 0;
  let lastSqlTurnIdx = -1;
  const runMarkers = [];
  function flush() {
    if (runStart >= 0 && runCount >= 2) {
      hits.push({
        toolType: "bash_sql",
        callsSaved: runCount - 1,
        turnRange: [runStart, runEnd],
        workflowLength: runCount
      });
      for (const m2 of runMarkers) consumed.add(m2);
    }
    runStart = -1;
    runEnd = -1;
    runCount = 0;
    lastSqlTurnIdx = -1;
    runMarkers.length = 0;
  }
  for (const turn of turns) {
    if (turn.hasRealUserMessage) flush();
    for (let ui = 0; ui < turn.toolUses.length; ui++) {
      const marker = markerFor(turn.index, ui);
      if (consumed.has(marker)) continue;
      const tu = turn.toolUses[ui];
      if (tu.name !== "Bash") continue;
      const bashInput = tu.input;
      if (!SQL_REGEX.test(bashInput.command)) continue;
      if (runStart >= 0 && turn.index - lastSqlTurnIdx > WINDOW) {
        flush();
      }
      if (runStart < 0) runStart = turn.index;
      runEnd = turn.index;
      runCount++;
      lastSqlTurnIdx = turn.index;
      runMarkers.push(marker);
    }
  }
  flush();
  return hits;
}

// src/common/baseline/baseline-scanner.ts
var MAX_SESSIONS = 200;
var MAX_FILE_BYTES = 50 * 1024 * 1024;
var SCAN_CONCURRENCY = 10;
var BASELINE_AVG_TURN_WALL_MS = 7e3;
var BASELINE_VERSION = 2;
var PER_SESSION_CAP_FRACTION = 0.5;
function initSessionBaseline(opts) {
  return {
    turns: [],
    pendingToolUses: [],
    toolUseById: /* @__PURE__ */ new Map(),
    seenRequestIds: /* @__PURE__ */ new Set(),
    pendingRealUser: false,
    turnIndex: 0,
    model: void 0,
    isVanilla: true,
    usage: emptyTranscriptUsage()
  };
}
function ingestMessage(state, message) {
  switch (message.type) {
    case "assistant":
      ingestAssistantMessage(state, message);
      break;
    case "user":
      ingestUserMessage(state, message);
      break;
  }
}
function ingestUserMessage(state, entry) {
  const msg = entry.message;
  const content = msg.content;
  if (typeof content === "string") {
    if (content.length > 0) state.pendingRealUser = true;
  } else {
    let hasToolResult = false;
    let hasText = false;
    for (const block of content) {
      switch (block.type) {
        case "text":
          hasText = true;
          break;
        case "tool_result":
          {
            hasToolResult = true;
            const ref = state.toolUseById.get(block.tool_use_id);
            if (ref != null) ref.isError = block.is_error === true;
          }
          break;
      }
    }
    if (!hasToolResult && hasText) state.pendingRealUser = true;
  }
}
function ingestAssistantMessage(state, entry) {
  const msg = entry.message;
  for (const block of msg.content) {
    if (block.type === "tool_use") {
      if (block.name.startsWith(MCP_PLUGIN_PREFIX)) state.isVanilla = false;
      const tu = {
        name: block.name,
        input: block.input,
        turnIndex: state.turnIndex,
        isError: false
      };
      state.pendingToolUses.push(tu);
      state.toolUseById.set(block.id, tu);
      state.usage.toolUseCount++;
    }
  }
  if (msg.stop_reason == null) return;
  const requestId = entry.requestId;
  if (typeof requestId === "string") {
    if (state.seenRequestIds.has(requestId)) {
      state.pendingToolUses = [];
      return;
    }
    state.seenRequestIds.add(requestId);
  }
  state.model = msg.model;
  const usage = {
    inputTokens: msg.usage.input_tokens,
    outputTokens: msg.usage.output_tokens,
    cacheReadTokens: msg.usage.cache_read_input_tokens ?? 0,
    cacheCreationTokens: msg.usage.cache_creation_input_tokens ?? 0
  };
  addTokenUsage(state.usage, usage);
  state.usage.turnCount++;
  state.turns.push({
    index: state.turnIndex,
    toolUses: state.pendingToolUses,
    hasRealUserMessage: state.pendingRealUser,
    usage,
    model: state.model
  });
  state.pendingToolUses = [];
  state.pendingRealUser = false;
  state.turnIndex++;
}
function finalizeSessionBaseline(state, opts) {
  const turns = state.turns;
  const usage = state.usage;
  const turnCount = usage.turnCount;
  const consumed = /* @__PURE__ */ new Set();
  const allHits = [
    ...detectFailedEdit(turns, consumed),
    ...detectGrepRead(turns, consumed),
    ...detectGlobRead(turns, consumed),
    ...detectBashSql(turns, consumed),
    ...detectEditBatch(turns, consumed),
    ...detectReadBatch(turns, consumed)
  ];
  const cap = Math.floor(usage.toolUseCount * PER_SESSION_CAP_FRACTION);
  let rawTotal = 0;
  for (const h of allHits) rawTotal += h.callsSaved;
  let cappedHits;
  let totalCallsSaved;
  if (rawTotal <= cap || cap === 0) {
    cappedHits = allHits;
    totalCallsSaved = rawTotal;
  } else {
    const scale = cap / rawTotal;
    cappedHits = [];
    for (const h of allHits) {
      const scaled = Math.max(1, Math.floor(h.callsSaved * scale));
      cappedHits.push({ ...h, callsSaved: scaled });
    }
    totalCallsSaved = cap;
  }
  const avgInput = turnCount > 0 ? usage.inputTokens / turnCount : 0;
  const avgCacheRead = turnCount > 0 ? usage.cacheReadTokens / turnCount : 0;
  const avgCacheCreation = turnCount > 0 ? usage.cacheCreationTokens / turnCount : 0;
  const avgOutput = turnCount > 0 ? usage.outputTokens / turnCount : 0;
  const pricing = getModelPricing(state.model);
  const perCallCostInUsd = avgInput * CONTEXT_GROWTH_MULTIPLIER / 1e6 * pricing.inputPerMillion + avgCacheRead * CONTEXT_GROWTH_MULTIPLIER / 1e6 * pricing.cacheReadPerMillion + avgCacheCreation * CONTEXT_GROWTH_MULTIPLIER / 1e6 * pricing.cacheWritePerMillion + avgOutput / 1e6 * pricing.outputPerMillion;
  const perCallTokens = (avgInput + avgCacheRead + avgCacheCreation) * CONTEXT_GROWTH_MULTIPLIER + avgOutput;
  const savings = {
    callsSaved: totalCallsSaved,
    costSavedInUsd: totalCallsSaved * perCallCostInUsd,
    tokensSaved: Math.round(totalCallsSaved * perCallTokens),
    timeSavedInMs: totalCallsSaved * BASELINE_AVG_TURN_WALL_MS
  };
  const actualCostInUsd = usage.inputTokens / 1e6 * pricing.inputPerMillion + usage.cacheReadTokens / 1e6 * pricing.cacheReadPerMillion + usage.cacheCreationTokens / 1e6 * pricing.cacheWritePerMillion + usage.outputTokens / 1e6 * pricing.outputPerMillion;
  return {
    sessionId: opts.sessionId,
    projectPath: opts.projectPath,
    mtimeMs: opts.mtimeMs,
    isVanilla: state.isVanilla,
    usage: { ...usage },
    actualCostInUsd,
    hits: cappedHits,
    savings,
    model: state.model
  };
}
function aggregateSessions(results, windowDays, nowMs) {
  const vanilla = results.filter((r) => r.isVanilla);
  const vanillaUsage = emptyTranscriptUsage();
  const rawDetected = emptySavings();
  let totalVanillaCostInUsd = 0;
  const toolTypeTotals = /* @__PURE__ */ new Map();
  for (const r of vanilla) {
    addTranscriptUsage(vanillaUsage, r.usage);
    addSavings(rawDetected, r.savings);
    totalVanillaCostInUsd += r.actualCostInUsd;
    const perHitCost = r.savings.callsSaved > 0 ? r.savings.costSavedInUsd / r.savings.callsSaved : 0;
    for (const h of r.hits) {
      const existing = toolTypeTotals.get(h.toolType) ?? {
        workflows: 0,
        callsSaved: 0,
        costSavedInUsd: 0
      };
      existing.workflows += 1;
      existing.callsSaved += h.callsSaved;
      existing.costSavedInUsd += h.callsSaved * perHitCost;
      toolTypeTotals.set(h.toolType, existing);
    }
  }
  const topToolTypes = Array.from(toolTypeTotals.entries()).map(([toolType, v]) => ({
    toolType,
    workflows: v.workflows,
    callsSaved: v.callsSaved,
    costSavedInUsd: v.costSavedInUsd
  })).sort((a2, b2) => b2.costSavedInUsd - a2.costSavedInUsd);
  const estimate = {
    version: BASELINE_VERSION,
    scanCompletedAt: new Date(nowMs).toISOString(),
    windowDays,
    sessionsScanned: results.length,
    vanillaSessions: vanilla.length,
    vanillaUsage,
    totalVanillaCostInUsd,
    rawDetected,
    topToolTypes
  };
  return estimate;
}
async function computeBaselineFromProjects(projectsDir, maxSessionsRaw) {
  const maxSessions = maxSessionsRaw ?? MAX_SESSIONS;
  const allFiles = await discoverSessionTranscripts({
    projectsDirPath: projectsDir
  });
  const candidates = allFiles.filter((f) => f.sizeBytes <= MAX_FILE_BYTES);
  const results = [];
  for (let i2 = 0; i2 < candidates.length && results.length < maxSessions; i2 += SCAN_CONCURRENCY) {
    const batch = candidates.slice(i2, i2 + SCAN_CONCURRENCY);
    const batchResults = await Promise.all(batch.map(scanAndFilter));
    for (const r of batchResults) {
      if (r != null && results.length < maxSessions) results.push(r);
    }
  }
  return results;
}
async function scanAndFilter(file2) {
  try {
    const opts = {
      sessionId: file2.sessionId,
      projectPath: file2.projectPath,
      mtimeMs: file2.mtimeMs
    };
    const state = initSessionBaseline(opts);
    for await (const [message] of streamTranscriptMessages(file2.sessionFilePath)) {
      ingestMessage(state, message);
      if (!state.isVanilla) return void 0;
    }
    const result = finalizeSessionBaseline(state, opts);
    if (result.usage.turnCount === 0) return void 0;
    return result;
  } catch {
    return void 0;
  }
}

// src/plugin/savings-check-standalone.ts
var LAST_MONTH_DAYS = 30;
var MAX_SESSIONS_TO_SCAN = 5e3;
var BRAND = "\u{1F9D9} WOZCODE";
var GREEN = "\x1B[38;2;90;158;31m";
var CYAN = "\x1B[36m";
var DIM = "\x1B[2m";
var BOLD = "\x1B[1m";
var RESET = "\x1B[0m";
var DIVIDER = "\u2500".repeat(58);
async function main() {
  console.log();
  console.log(`${BOLD}${BRAND}${RESET} ${DIM}\u2014 Claude Code Savings Estimator${RESET}`);
  console.log();
  console.log(`${DIM}Scanning ~/.claude/projects/ ...${RESET}`);
  const savedWarn = console.warn;
  const savedError = console.error;
  console.warn = () => {
  };
  console.error = () => {
  };
  const nowMs = Date.now();
  let results;
  try {
    results = await computeBaselineFromProjects(void 0, MAX_SESSIONS_TO_SCAN);
  } finally {
    console.warn = savedWarn;
    console.error = savedError;
  }
  if (results.length === 0) {
    console.log();
    console.log(`${DIM}No Claude Code sessions found in ~/.claude/projects/${RESET}`);
    console.log();
    console.log(`  If you haven't used Claude Code yet, install it first:`);
    console.log(`    ${CYAN}https://claude.ai/code${RESET}`);
    console.log();
    return;
  }
  const vanilla = results;
  console.log(`${DIM}Analyzed ${results.length} sessions.${RESET}`);
  const lastMonthCutoffMs = nowMs - LAST_MONTH_DAYS * 864e5;
  const lastMonthResults = vanilla.filter((r) => r.mtimeMs >= lastMonthCutoffMs);
  const lastMonthEstimate = aggregateSessions(lastMonthResults, LAST_MONTH_DAYS, nowMs);
  const oldestMs = vanilla.length > 0 ? vanilla.reduce((m2, r) => Math.min(m2, r.mtimeMs), Infinity) : nowMs;
  const lifetimeWindowDays = Math.max(1, Math.ceil((nowMs - oldestMs) / 864e5));
  const lifetimeEstimate = aggregateSessions(vanilla, lifetimeWindowDays, nowMs);
  const lastMonthRange = lastMonthResults.length > 0 ? {
    fromMs: lastMonthResults.reduce((m2, r) => Math.min(m2, r.mtimeMs), Infinity),
    toMs: lastMonthResults.reduce((m2, r) => Math.max(m2, r.mtimeMs), -Infinity)
  } : void 0;
  const newestMs = vanilla.length > 0 ? vanilla.reduce((m2, r) => Math.max(m2, r.mtimeMs), -Infinity) : nowMs;
  const lifetimeRange = vanilla.length > 0 ? { fromMs: oldestMs, toMs: newestMs } : void 0;
  const hitLifetimeCap = vanilla.length >= MAX_SESSIONS_TO_SCAN;
  const showLifetime = vanilla.length > lastMonthResults.length;
  console.log();
  printSection(showLifetime ? "LAST 30 DAYS" : "YOUR USAGE", lastMonthEstimate, lastMonthRange);
  if (showLifetime) {
    console.log();
    printSection("LIFETIME", lifetimeEstimate, lifetimeRange);
    if (hitLifetimeCap) {
      console.log(
        `  ${DIM}(capped at the ${MAX_SESSIONS_TO_SCAN} most-recent vanilla sessions \u2014 older sessions excluded)${RESET}`
      );
    }
  }
  console.log();
  printInstallFooter(lastMonthEstimate, lifetimeEstimate);
}
function printSection(title, e2, dateRange) {
  console.log(`${DIM}${DIVIDER}${RESET}`);
  console.log(`  ${BOLD}${title}${RESET}`);
  console.log(`${DIM}${DIVIDER}${RESET}`);
  if (e2.vanillaSessions === 0) {
    console.log(`  ${DIM}No vanilla Claude Code sessions in this window.${RESET}`);
    return;
  }
  if (dateRange != null) {
    console.log(`  Date range:         ${formatDate(dateRange.fromMs)} \u2192 ${formatDate(dateRange.toMs)}`);
  }
  console.log(`  Sessions analyzed:  ${e2.vanillaSessions}`);
  console.log(`  Turns:              ${e2.vanillaUsage.turnCount.toLocaleString()}`);
  console.log(`  Cost spent:         ${formatCost(e2.totalVanillaCostInUsd)}`);
  console.log();
  if (e2.rawDetected.callsSaved === 0) {
    console.log(`  ${DIM}No batchable patterns detected in this window.${RESET}`);
    return;
  }
  const pctSaved = e2.totalVanillaCostInUsd > 0 ? Math.round(e2.rawDetected.costSavedInUsd / e2.totalVanillaCostInUsd * 100) : 0;
  console.log(`  ${BOLD}WozCode would have saved you:${RESET}`);
  console.log(
    `    ${GREEN}${formatCost(e2.rawDetected.costSavedInUsd)}${RESET} on API costs  ${DIM}(~${pctSaved}% of spend)${RESET}`
  );
  console.log(`    ${GREEN}${e2.rawDetected.callsSaved.toLocaleString()}${RESET} tool-call roundtrips avoided`);
  console.log(`    ${GREEN}${formatDuration(e2.rawDetected.timeSavedInMs)}${RESET} of wait time`);
  if (e2.topToolTypes.length > 0) {
    console.log();
    console.log(`  ${DIM}Top batching patterns detected:${RESET}`);
    for (const p2 of e2.topToolTypes.slice(0, 3)) {
      const label = formatToolTypeLabel(p2.toolType);
      console.log(
        `    ${DIM}${label.padEnd(22)}${p2.workflows.toString().padStart(4)} workflows  \u2192  ${p2.callsSaved.toString().padStart(4)} calls saved${RESET}`
      );
    }
  }
}
function printInstallFooter(lastMonth, lifetime) {
  console.log(`${DIM}${DIVIDER}${RESET}`);
  console.log();
  const lastMonthSaved = lastMonth.rawDetected.costSavedInUsd;
  const lastMonthTime = lastMonth.rawDetected.timeSavedInMs;
  const lifetimeSaved = lifetime.rawDetected.costSavedInUsd;
  const lifetimeTime = lifetime.rawDetected.timeSavedInMs;
  if (lastMonthSaved >= 1) {
    const amt = formatCost(lastMonthSaved);
    const dur = formatDuration(lastMonthTime);
    console.log(`  \u{1F9D9}  You just spent ${GREEN}${amt}${RESET} you didn't have to spend.`);
    console.log(`      And waited ${GREEN}${dur}${RESET} you didn't have to wait.`);
    console.log();
    console.log(`      ${BOLD}Don't do it twice.${RESET}`);
  } else if (lifetimeSaved >= 1) {
    const amt = formatCost(lifetimeSaved);
    const dur = formatDuration(lifetimeTime);
    console.log(`  \u{1F9D9}  Your Claude Code history has ${GREEN}${amt}${RESET} and ${GREEN}${dur}${RESET}`);
    console.log(`      of savings you missed.`);
    console.log();
    console.log(`      ${BOLD}The next batch is still yours to grab.${RESET}`);
  } else {
    console.log(`  \u{1F9D9}  No batchable savings detected today \u2014 but install now,`);
    console.log(`      and we'll start tracking what you save from here on out.`);
  }
  console.log();
  console.log(`  ${BOLD}\u2192${RESET}   Create your account:  ${CYAN}https://wozcode.com?ref=savings-check${RESET}`);
  console.log(`      ${DIM}Install in 30 seconds. Works in any Claude Code session.${RESET}`);
  console.log();
  console.log(`  ${DIM}Privacy: ran entirely on your machine. Nothing was uploaded.${RESET}`);
  console.log(
    `  ${DIM}Only analyzes Claude Code sessions (CLI, Desktop, and IDE extensions). Regular chat history is not included.${RESET}`
  );
  console.log();
}
function formatCost(usd) {
  if (usd >= 1e3) return `$${Math.round(usd).toLocaleString()}`;
  if (usd >= 100) return `$${usd.toFixed(0)}`;
  if (usd >= 10) return `$${usd.toFixed(1)}`;
  return `$${usd.toFixed(2)}`;
}
function formatDuration(ms) {
  const sec = Math.round(ms / 1e3);
  if (sec < 60) return `${sec}s`;
  const min = Math.round(sec / 60);
  if (min < 60) return min === 1 ? "1 minute" : `${min} minutes`;
  const hrs = min / 60;
  if (hrs >= 10) {
    const rounded = Math.round(hrs);
    return rounded === 1 ? "1 hour" : `${rounded} hours`;
  }
  const oneDecimal = hrs.toFixed(1);
  return oneDecimal === "1.0" ? "1 hour" : `${oneDecimal} hours`;
}
function formatDate(epochMs) {
  const d2 = new Date(epochMs);
  const y2 = d2.getFullYear();
  const m2 = String(d2.getMonth() + 1).padStart(2, "0");
  const day = String(d2.getDate()).padStart(2, "0");
  return `${y2}-${m2}-${day}`;
}
function formatToolTypeLabel(pattern) {
  switch (pattern) {
    case "read_batch":
      return "Read batching";
    case "edit_batch":
      return "Edit batching";
    case "grep_read":
      return "Grep + Read combos";
    case "glob_read":
      return "Glob + Read combos";
    case "failed_edit":
      return "Failed edit retries";
    case "bash_sql":
      return "Bash SQL sequences";
    default:
      return pattern;
  }
}
main().catch((err) => {
  console.error(`${BRAND} savings check failed:`, err instanceof Error ? err.message : String(err));
  process.exit(1);
});
