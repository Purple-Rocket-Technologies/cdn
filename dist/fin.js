/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BASE_TRANSITION": () => (/* reexport */ BASE_TRANSITION),
  "CAMELIZE": () => (/* reexport */ CAMELIZE),
  "CAPITALIZE": () => (/* reexport */ CAPITALIZE),
  "CREATE_BLOCK": () => (/* reexport */ CREATE_BLOCK),
  "CREATE_COMMENT": () => (/* reexport */ CREATE_COMMENT),
  "CREATE_ELEMENT_BLOCK": () => (/* reexport */ CREATE_ELEMENT_BLOCK),
  "CREATE_ELEMENT_VNODE": () => (/* reexport */ CREATE_ELEMENT_VNODE),
  "CREATE_SLOTS": () => (/* reexport */ CREATE_SLOTS),
  "CREATE_STATIC": () => (/* reexport */ CREATE_STATIC),
  "CREATE_TEXT": () => (/* reexport */ CREATE_TEXT),
  "CREATE_VNODE": () => (/* reexport */ CREATE_VNODE),
  "DOMDirectiveTransforms": () => (/* binding */ DOMDirectiveTransforms),
  "DOMNodeTransforms": () => (/* binding */ DOMNodeTransforms),
  "FRAGMENT": () => (/* reexport */ FRAGMENT),
  "GUARD_REACTIVE_PROPS": () => (/* reexport */ GUARD_REACTIVE_PROPS),
  "IS_MEMO_SAME": () => (/* reexport */ IS_MEMO_SAME),
  "IS_REF": () => (/* reexport */ IS_REF),
  "KEEP_ALIVE": () => (/* reexport */ KEEP_ALIVE),
  "MERGE_PROPS": () => (/* reexport */ MERGE_PROPS),
  "NORMALIZE_CLASS": () => (/* reexport */ NORMALIZE_CLASS),
  "NORMALIZE_PROPS": () => (/* reexport */ NORMALIZE_PROPS),
  "NORMALIZE_STYLE": () => (/* reexport */ NORMALIZE_STYLE),
  "OPEN_BLOCK": () => (/* reexport */ OPEN_BLOCK),
  "POP_SCOPE_ID": () => (/* reexport */ POP_SCOPE_ID),
  "PUSH_SCOPE_ID": () => (/* reexport */ PUSH_SCOPE_ID),
  "RENDER_LIST": () => (/* reexport */ RENDER_LIST),
  "RENDER_SLOT": () => (/* reexport */ RENDER_SLOT),
  "RESOLVE_COMPONENT": () => (/* reexport */ RESOLVE_COMPONENT),
  "RESOLVE_DIRECTIVE": () => (/* reexport */ RESOLVE_DIRECTIVE),
  "RESOLVE_DYNAMIC_COMPONENT": () => (/* reexport */ RESOLVE_DYNAMIC_COMPONENT),
  "RESOLVE_FILTER": () => (/* reexport */ RESOLVE_FILTER),
  "SET_BLOCK_TRACKING": () => (/* reexport */ SET_BLOCK_TRACKING),
  "SUSPENSE": () => (/* reexport */ SUSPENSE),
  "TELEPORT": () => (/* reexport */ TELEPORT),
  "TO_DISPLAY_STRING": () => (/* reexport */ TO_DISPLAY_STRING),
  "TO_HANDLERS": () => (/* reexport */ TO_HANDLERS),
  "TO_HANDLER_KEY": () => (/* reexport */ TO_HANDLER_KEY),
  "TRANSITION": () => (/* binding */ TRANSITION),
  "TRANSITION_GROUP": () => (/* binding */ TRANSITION_GROUP),
  "UNREF": () => (/* reexport */ UNREF),
  "V_MODEL_CHECKBOX": () => (/* binding */ V_MODEL_CHECKBOX),
  "V_MODEL_DYNAMIC": () => (/* binding */ V_MODEL_DYNAMIC),
  "V_MODEL_RADIO": () => (/* binding */ V_MODEL_RADIO),
  "V_MODEL_SELECT": () => (/* binding */ V_MODEL_SELECT),
  "V_MODEL_TEXT": () => (/* binding */ V_MODEL_TEXT),
  "V_ON_WITH_KEYS": () => (/* binding */ V_ON_WITH_KEYS),
  "V_ON_WITH_MODIFIERS": () => (/* binding */ V_ON_WITH_MODIFIERS),
  "V_SHOW": () => (/* binding */ V_SHOW),
  "WITH_CTX": () => (/* reexport */ WITH_CTX),
  "WITH_DIRECTIVES": () => (/* reexport */ WITH_DIRECTIVES),
  "WITH_MEMO": () => (/* reexport */ WITH_MEMO),
  "advancePositionWithClone": () => (/* reexport */ advancePositionWithClone),
  "advancePositionWithMutation": () => (/* reexport */ advancePositionWithMutation),
  "assert": () => (/* reexport */ assert),
  "baseCompile": () => (/* reexport */ baseCompile),
  "baseParse": () => (/* reexport */ baseParse),
  "buildDirectiveArgs": () => (/* reexport */ buildDirectiveArgs),
  "buildProps": () => (/* reexport */ buildProps),
  "buildSlots": () => (/* reexport */ buildSlots),
  "checkCompatEnabled": () => (/* reexport */ checkCompatEnabled),
  "compile": () => (/* binding */ compile),
  "createArrayExpression": () => (/* reexport */ createArrayExpression),
  "createAssignmentExpression": () => (/* reexport */ createAssignmentExpression),
  "createBlockStatement": () => (/* reexport */ createBlockStatement),
  "createCacheExpression": () => (/* reexport */ createCacheExpression),
  "createCallExpression": () => (/* reexport */ createCallExpression),
  "createCompilerError": () => (/* reexport */ createCompilerError),
  "createCompoundExpression": () => (/* reexport */ createCompoundExpression),
  "createConditionalExpression": () => (/* reexport */ createConditionalExpression),
  "createDOMCompilerError": () => (/* binding */ createDOMCompilerError),
  "createForLoopParams": () => (/* reexport */ createForLoopParams),
  "createFunctionExpression": () => (/* reexport */ createFunctionExpression),
  "createIfStatement": () => (/* reexport */ createIfStatement),
  "createInterpolation": () => (/* reexport */ createInterpolation),
  "createObjectExpression": () => (/* reexport */ createObjectExpression),
  "createObjectProperty": () => (/* reexport */ createObjectProperty),
  "createReturnStatement": () => (/* reexport */ createReturnStatement),
  "createRoot": () => (/* reexport */ createRoot),
  "createSequenceExpression": () => (/* reexport */ createSequenceExpression),
  "createSimpleExpression": () => (/* reexport */ createSimpleExpression),
  "createStructuralDirectiveTransform": () => (/* reexport */ createStructuralDirectiveTransform),
  "createTemplateLiteral": () => (/* reexport */ createTemplateLiteral),
  "createTransformContext": () => (/* reexport */ createTransformContext),
  "createVNodeCall": () => (/* reexport */ createVNodeCall),
  "extractIdentifiers": () => (/* reexport */ extractIdentifiers),
  "findDir": () => (/* reexport */ findDir),
  "findProp": () => (/* reexport */ findProp),
  "generate": () => (/* reexport */ generate),
  "generateCodeFrame": () => (/* reexport */ shared_esm_bundler.generateCodeFrame),
  "getBaseTransformPreset": () => (/* reexport */ getBaseTransformPreset),
  "getConstantType": () => (/* reexport */ getConstantType),
  "getInnerRange": () => (/* reexport */ getInnerRange),
  "getMemoedVNodeCall": () => (/* reexport */ getMemoedVNodeCall),
  "getVNodeBlockHelper": () => (/* reexport */ getVNodeBlockHelper),
  "getVNodeHelper": () => (/* reexport */ getVNodeHelper),
  "hasDynamicKeyVBind": () => (/* reexport */ hasDynamicKeyVBind),
  "hasScopeRef": () => (/* reexport */ hasScopeRef),
  "helperNameMap": () => (/* reexport */ helperNameMap),
  "injectProp": () => (/* reexport */ injectProp),
  "isBuiltInType": () => (/* reexport */ isBuiltInType),
  "isCoreComponent": () => (/* reexport */ isCoreComponent),
  "isFunctionType": () => (/* reexport */ isFunctionType),
  "isInDestructureAssignment": () => (/* reexport */ isInDestructureAssignment),
  "isMemberExpression": () => (/* reexport */ isMemberExpression),
  "isMemberExpressionBrowser": () => (/* reexport */ isMemberExpressionBrowser),
  "isMemberExpressionNode": () => (/* reexport */ isMemberExpressionNode),
  "isReferencedIdentifier": () => (/* reexport */ isReferencedIdentifier),
  "isSimpleIdentifier": () => (/* reexport */ isSimpleIdentifier),
  "isSlotOutlet": () => (/* reexport */ isSlotOutlet),
  "isStaticArgOf": () => (/* reexport */ isStaticArgOf),
  "isStaticExp": () => (/* reexport */ isStaticExp),
  "isStaticProperty": () => (/* reexport */ isStaticProperty),
  "isStaticPropertyKey": () => (/* reexport */ isStaticPropertyKey),
  "isTemplateNode": () => (/* reexport */ isTemplateNode),
  "isText": () => (/* reexport */ isText$1),
  "isVSlot": () => (/* reexport */ isVSlot),
  "locStub": () => (/* reexport */ locStub),
  "makeBlock": () => (/* reexport */ makeBlock),
  "noopDirectiveTransform": () => (/* reexport */ noopDirectiveTransform),
  "parse": () => (/* binding */ parse),
  "parserOptions": () => (/* binding */ parserOptions),
  "processExpression": () => (/* reexport */ processExpression),
  "processFor": () => (/* reexport */ processFor),
  "processIf": () => (/* reexport */ processIf),
  "processSlotOutlet": () => (/* reexport */ processSlotOutlet),
  "registerRuntimeHelpers": () => (/* reexport */ registerRuntimeHelpers),
  "resolveComponentType": () => (/* reexport */ resolveComponentType),
  "stringifyExpression": () => (/* reexport */ stringifyExpression),
  "toValidAssetId": () => (/* reexport */ toValidAssetId),
  "trackSlotScopes": () => (/* reexport */ trackSlotScopes),
  "trackVForSlotScopes": () => (/* reexport */ trackVForSlotScopes),
  "transform": () => (/* reexport */ transform),
  "transformBind": () => (/* reexport */ transformBind),
  "transformElement": () => (/* reexport */ transformElement),
  "transformExpression": () => (/* reexport */ transformExpression),
  "transformModel": () => (/* reexport */ transformModel),
  "transformOn": () => (/* reexport */ transformOn),
  "transformStyle": () => (/* binding */ transformStyle),
  "traverseNode": () => (/* reexport */ traverseNode),
  "walkBlockDeclarations": () => (/* reexport */ walkBlockDeclarations),
  "walkFunctionParams": () => (/* reexport */ walkFunctionParams),
  "walkIdentifiers": () => (/* reexport */ walkIdentifiers),
  "warnDeprecation": () => (/* reexport */ warnDeprecation)
});

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js



function defaultOnError(error) {
    throw error;
}
function defaultOnWarn(msg) {
    ( false) && 0;
}
function createCompilerError(code, loc, messages, additionalMessage) {
    const msg =  false
        ? 0
        : code;
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
}
const errorMessages = {
    // parse errors
    [0 /* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */]: 'Illegal comment.',
    [1 /* ErrorCodes.CDATA_IN_HTML_CONTENT */]: 'CDATA section is allowed only in XML context.',
    [2 /* ErrorCodes.DUPLICATE_ATTRIBUTE */]: 'Duplicate attribute.',
    [3 /* ErrorCodes.END_TAG_WITH_ATTRIBUTES */]: 'End tag cannot have attributes.',
    [4 /* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */]: "Illegal '/' in tags.",
    [5 /* ErrorCodes.EOF_BEFORE_TAG_NAME */]: 'Unexpected EOF in tag.',
    [6 /* ErrorCodes.EOF_IN_CDATA */]: 'Unexpected EOF in CDATA section.',
    [7 /* ErrorCodes.EOF_IN_COMMENT */]: 'Unexpected EOF in comment.',
    [8 /* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */]: 'Unexpected EOF in script.',
    [9 /* ErrorCodes.EOF_IN_TAG */]: 'Unexpected EOF in tag.',
    [10 /* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */]: 'Incorrectly closed comment.',
    [11 /* ErrorCodes.INCORRECTLY_OPENED_COMMENT */]: 'Incorrectly opened comment.',
    [12 /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13 /* ErrorCodes.MISSING_ATTRIBUTE_VALUE */]: 'Attribute value was expected.',
    [14 /* ErrorCodes.MISSING_END_TAG_NAME */]: 'End tag name was expected.',
    [15 /* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */]: 'Whitespace was expected.',
    [16 /* ErrorCodes.NESTED_COMMENT */]: "Unexpected '<!--' in comment.",
    [17 /* ErrorCodes.UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */]: 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).',
    [18 /* ErrorCodes.UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */]: 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).',
    [19 /* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */]: "Attribute name cannot start with '='.",
    [21 /* ErrorCodes.UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */]: "'<?' is allowed only in XML context.",
    [20 /* ErrorCodes.UNEXPECTED_NULL_CHARACTER */]: `Unexpected null character.`,
    [22 /* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */]: "Illegal '/' in tags.",
    // Vue-specific parse errors
    [23 /* ErrorCodes.X_INVALID_END_TAG */]: 'Invalid end tag.',
    [24 /* ErrorCodes.X_MISSING_END_TAG */]: 'Element is missing end tag.',
    [25 /* ErrorCodes.X_MISSING_INTERPOLATION_END */]: 'Interpolation end sign was not found.',
    [27 /* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */]: 'End bracket for dynamic directive argument was not found. ' +
        'Note that dynamic directive argument cannot contain spaces.',
    [26 /* ErrorCodes.X_MISSING_DIRECTIVE_NAME */]: 'Legal directive name was expected.',
    // transform errors
    [28 /* ErrorCodes.X_V_IF_NO_EXPRESSION */]: `v-if/v-else-if is missing expression.`,
    [29 /* ErrorCodes.X_V_IF_SAME_KEY */]: `v-if/else branches must use unique keys.`,
    [30 /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
    [31 /* ErrorCodes.X_V_FOR_NO_EXPRESSION */]: `v-for is missing expression.`,
    [32 /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */]: `v-for has invalid expression.`,
    [33 /* ErrorCodes.X_V_FOR_TEMPLATE_KEY_PLACEMENT */]: `<template v-for> key should be placed on the <template> tag.`,
    [34 /* ErrorCodes.X_V_BIND_NO_EXPRESSION */]: `v-bind is missing expression.`,
    [35 /* ErrorCodes.X_V_ON_NO_EXPRESSION */]: `v-on is missing expression.`,
    [36 /* ErrorCodes.X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */]: `Unexpected custom directive on <slot> outlet.`,
    [37 /* ErrorCodes.X_V_SLOT_MIXED_SLOT_USAGE */]: `Mixed v-slot usage on both the component and nested <template>. ` +
        `When there are multiple named slots, all slots should use <template> ` +
        `syntax to avoid scope ambiguity.`,
    [38 /* ErrorCodes.X_V_SLOT_DUPLICATE_SLOT_NAMES */]: `Duplicate slot names found. `,
    [39 /* ErrorCodes.X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */]: `Extraneous children found when component already has explicitly named ` +
        `default slot. These children will be ignored.`,
    [40 /* ErrorCodes.X_V_SLOT_MISPLACED */]: `v-slot can only be used on components or <template> tags.`,
    [41 /* ErrorCodes.X_V_MODEL_NO_EXPRESSION */]: `v-model is missing expression.`,
    [42 /* ErrorCodes.X_V_MODEL_MALFORMED_EXPRESSION */]: `v-model value must be a valid JavaScript member expression.`,
    [43 /* ErrorCodes.X_V_MODEL_ON_SCOPE_VARIABLE */]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [44 /* ErrorCodes.X_V_MODEL_ON_PROPS */]: `v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.`,
    [45 /* ErrorCodes.X_INVALID_EXPRESSION */]: `Error parsing JavaScript expression: `,
    [46 /* ErrorCodes.X_KEEP_ALIVE_INVALID_CHILDREN */]: `<KeepAlive> expects exactly one child component.`,
    // generic errors
    [47 /* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [48 /* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */]: `ES module mode is not supported in this build of compiler.`,
    [49 /* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [50 /* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */]: `"scopeId" option is only supported in module mode.`,
    // just to fulfill types
    [51 /* ErrorCodes.__EXTEND_POINT__ */]: ``
};

const FRAGMENT = Symbol(( false) ? 0 : ``);
const TELEPORT = Symbol(( false) ? 0 : ``);
const SUSPENSE = Symbol(( false) ? 0 : ``);
const KEEP_ALIVE = Symbol(( false) ? 0 : ``);
const BASE_TRANSITION = Symbol(( false) ? 0 : ``);
const OPEN_BLOCK = Symbol(( false) ? 0 : ``);
const CREATE_BLOCK = Symbol(( false) ? 0 : ``);
const CREATE_ELEMENT_BLOCK = Symbol(( false) ? 0 : ``);
const CREATE_VNODE = Symbol(( false) ? 0 : ``);
const CREATE_ELEMENT_VNODE = Symbol(( false) ? 0 : ``);
const CREATE_COMMENT = Symbol(( false) ? 0 : ``);
const CREATE_TEXT = Symbol(( false) ? 0 : ``);
const CREATE_STATIC = Symbol(( false) ? 0 : ``);
const RESOLVE_COMPONENT = Symbol(( false) ? 0 : ``);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(( false) ? 0 : ``);
const RESOLVE_DIRECTIVE = Symbol(( false) ? 0 : ``);
const RESOLVE_FILTER = Symbol(( false) ? 0 : ``);
const WITH_DIRECTIVES = Symbol(( false) ? 0 : ``);
const RENDER_LIST = Symbol(( false) ? 0 : ``);
const RENDER_SLOT = Symbol(( false) ? 0 : ``);
const CREATE_SLOTS = Symbol(( false) ? 0 : ``);
const TO_DISPLAY_STRING = Symbol(( false) ? 0 : ``);
const MERGE_PROPS = Symbol(( false) ? 0 : ``);
const NORMALIZE_CLASS = Symbol(( false) ? 0 : ``);
const NORMALIZE_STYLE = Symbol(( false) ? 0 : ``);
const NORMALIZE_PROPS = Symbol(( false) ? 0 : ``);
const GUARD_REACTIVE_PROPS = Symbol(( false) ? 0 : ``);
const TO_HANDLERS = Symbol(( false) ? 0 : ``);
const CAMELIZE = Symbol(( false) ? 0 : ``);
const CAPITALIZE = Symbol(( false) ? 0 : ``);
const TO_HANDLER_KEY = Symbol(( false) ? 0 : ``);
const SET_BLOCK_TRACKING = Symbol(( false) ? 0 : ``);
const PUSH_SCOPE_ID = Symbol(( false) ? 0 : ``);
const POP_SCOPE_ID = Symbol(( false) ? 0 : ``);
const WITH_CTX = Symbol(( false) ? 0 : ``);
const UNREF = Symbol(( false) ? 0 : ``);
const IS_REF = Symbol(( false) ? 0 : ``);
const WITH_MEMO = Symbol(( false) ? 0 : ``);
const IS_MEMO_SAME = Symbol(( false) ? 0 : ``);
// Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
const helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_ELEMENT_VNODE]: `createElementVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [RESOLVE_FILTER]: `resolveFilter`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [NORMALIZE_CLASS]: `normalizeClass`,
    [NORMALIZE_STYLE]: `normalizeStyle`,
    [NORMALIZE_PROPS]: `normalizeProps`,
    [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`,
    [WITH_MEMO]: `withMemo`,
    [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach(s => {
        helperNameMap[s] = helpers[s];
    });
}

// AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.
const locStub = {
    source: '',
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
};
function createRoot(children, loc = locStub) {
    return {
        type: 0 /* NodeTypes.ROOT */,
        children,
        helpers: new Set(),
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: 0,
        temps: 0,
        codegenNode: undefined,
        loc
    };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = locStub) {
    if (context) {
        if (isBlock) {
            context.helper(OPEN_BLOCK);
            context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
        }
        else {
            context.helper(getVNodeHelper(context.inSSR, isComponent));
        }
        if (directives) {
            context.helper(WITH_DIRECTIVES);
        }
    }
    return {
        type: 13 /* NodeTypes.VNODE_CALL */,
        tag,
        props,
        children,
        patchFlag,
        dynamicProps,
        directives,
        isBlock,
        disableTracking,
        isComponent,
        loc
    };
}
function createArrayExpression(elements, loc = locStub) {
    return {
        type: 17 /* NodeTypes.JS_ARRAY_EXPRESSION */,
        loc,
        elements
    };
}
function createObjectExpression(properties, loc = locStub) {
    return {
        type: 15 /* NodeTypes.JS_OBJECT_EXPRESSION */,
        loc,
        properties
    };
}
function createObjectProperty(key, value) {
    return {
        type: 16 /* NodeTypes.JS_PROPERTY */,
        loc: locStub,
        key: (0,shared_esm_bundler.isString)(key) ? createSimpleExpression(key, true) : key,
        value
    };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0 /* ConstantTypes.NOT_CONSTANT */) {
    return {
        type: 4 /* NodeTypes.SIMPLE_EXPRESSION */,
        loc,
        content,
        isStatic,
        constType: isStatic ? 3 /* ConstantTypes.CAN_STRINGIFY */ : constType
    };
}
function createInterpolation(content, loc) {
    return {
        type: 5 /* NodeTypes.INTERPOLATION */,
        loc,
        content: (0,shared_esm_bundler.isString)(content)
            ? createSimpleExpression(content, false, loc)
            : content
    };
}
function createCompoundExpression(children, loc = locStub) {
    return {
        type: 8 /* NodeTypes.COMPOUND_EXPRESSION */,
        loc,
        children
    };
}
function createCallExpression(callee, args = [], loc = locStub) {
    return {
        type: 14 /* NodeTypes.JS_CALL_EXPRESSION */,
        loc,
        callee,
        arguments: args
    };
}
function createFunctionExpression(params, returns = undefined, newline = false, isSlot = false, loc = locStub) {
    return {
        type: 18 /* NodeTypes.JS_FUNCTION_EXPRESSION */,
        params,
        returns,
        newline,
        isSlot,
        loc
    };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
        type: 19 /* NodeTypes.JS_CONDITIONAL_EXPRESSION */,
        test,
        consequent,
        alternate,
        newline,
        loc: locStub
    };
}
function createCacheExpression(index, value, isVNode = false) {
    return {
        type: 20 /* NodeTypes.JS_CACHE_EXPRESSION */,
        index,
        value,
        isVNode,
        loc: locStub
    };
}
function createBlockStatement(body) {
    return {
        type: 21 /* NodeTypes.JS_BLOCK_STATEMENT */,
        body,
        loc: locStub
    };
}
function createTemplateLiteral(elements) {
    return {
        type: 22 /* NodeTypes.JS_TEMPLATE_LITERAL */,
        elements,
        loc: locStub
    };
}
function createIfStatement(test, consequent, alternate) {
    return {
        type: 23 /* NodeTypes.JS_IF_STATEMENT */,
        test,
        consequent,
        alternate,
        loc: locStub
    };
}
function createAssignmentExpression(left, right) {
    return {
        type: 24 /* NodeTypes.JS_ASSIGNMENT_EXPRESSION */,
        left,
        right,
        loc: locStub
    };
}
function createSequenceExpression(expressions) {
    return {
        type: 25 /* NodeTypes.JS_SEQUENCE_EXPRESSION */,
        expressions,
        loc: locStub
    };
}
function createReturnStatement(returns) {
    return {
        type: 26 /* NodeTypes.JS_RETURN_STATEMENT */,
        returns,
        loc: locStub
    };
}

const isStaticExp = (p) => p.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ && p.isStatic;
const isBuiltInType = (tag, expected) => tag === expected || tag === (0,shared_esm_bundler.hyphenate)(expected);
function isCoreComponent(tag) {
    if (isBuiltInType(tag, 'Teleport')) {
        return TELEPORT;
    }
    else if (isBuiltInType(tag, 'Suspense')) {
        return SUSPENSE;
    }
    else if (isBuiltInType(tag, 'KeepAlive')) {
        return KEEP_ALIVE;
    }
    else if (isBuiltInType(tag, 'BaseTransition')) {
        return BASE_TRANSITION;
    }
}
const nonIdentifierRE = /^\d|[^\$\w]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
/**
 * Simple lexer to check if an expression is a member expression. This is
 * lax and only checks validity at the root level (i.e. does not validate exps
 * inside square brackets), but it's ok since these are only used on template
 * expressions and false positives are invalid expressions in the first place.
 */
const isMemberExpressionBrowser = (path) => {
    // remove whitespaces around . or [ first
    path = path.trim().replace(whitespaceRE, s => s.trim());
    let state = 0 /* MemberExpLexState.inMemberExp */;
    let stateStack = [];
    let currentOpenBracketCount = 0;
    let currentOpenParensCount = 0;
    let currentStringType = null;
    for (let i = 0; i < path.length; i++) {
        const char = path.charAt(i);
        switch (state) {
            case 0 /* MemberExpLexState.inMemberExp */:
                if (char === '[') {
                    stateStack.push(state);
                    state = 1 /* MemberExpLexState.inBrackets */;
                    currentOpenBracketCount++;
                }
                else if (char === '(') {
                    stateStack.push(state);
                    state = 2 /* MemberExpLexState.inParens */;
                    currentOpenParensCount++;
                }
                else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
                    return false;
                }
                break;
            case 1 /* MemberExpLexState.inBrackets */:
                if (char === `'` || char === `"` || char === '`') {
                    stateStack.push(state);
                    state = 3 /* MemberExpLexState.inString */;
                    currentStringType = char;
                }
                else if (char === `[`) {
                    currentOpenBracketCount++;
                }
                else if (char === `]`) {
                    if (!--currentOpenBracketCount) {
                        state = stateStack.pop();
                    }
                }
                break;
            case 2 /* MemberExpLexState.inParens */:
                if (char === `'` || char === `"` || char === '`') {
                    stateStack.push(state);
                    state = 3 /* MemberExpLexState.inString */;
                    currentStringType = char;
                }
                else if (char === `(`) {
                    currentOpenParensCount++;
                }
                else if (char === `)`) {
                    // if the exp ends as a call then it should not be considered valid
                    if (i === path.length - 1) {
                        return false;
                    }
                    if (!--currentOpenParensCount) {
                        state = stateStack.pop();
                    }
                }
                break;
            case 3 /* MemberExpLexState.inString */:
                if (char === currentStringType) {
                    state = stateStack.pop();
                    currentStringType = null;
                }
                break;
        }
    }
    return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpressionNode = shared_esm_bundler.NOOP
    ;
const isMemberExpression = isMemberExpressionBrowser
    ;
function getInnerRange(loc, offset, length) {
    const source = loc.source.slice(offset, offset + length);
    const newLoc = {
        source,
        start: advancePositionWithClone(loc.start, loc.source, offset),
        end: loc.end
    };
    if (length != null) {
        newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
}
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation((0,shared_esm_bundler.extend)({}, pos), source, numberOfCharacters);
}
// advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
        if (source.charCodeAt(i) === 10 /* newline char code */) {
            linesCount++;
            lastNewLinePos = i;
        }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column =
        lastNewLinePos === -1
            ? pos.column + numberOfCharacters
            : numberOfCharacters - lastNewLinePos;
    return pos;
}
function assert(condition, msg) {
    /* istanbul ignore if */
    if (!condition) {
        throw new Error(msg || `unexpected compiler condition`);
    }
}
function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 7 /* NodeTypes.DIRECTIVE */ &&
            (allowEmpty || p.exp) &&
            ((0,shared_esm_bundler.isString)(name) ? p.name === name : name.test(p.name))) {
            return p;
        }
    }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 6 /* NodeTypes.ATTRIBUTE */) {
            if (dynamicOnly)
                continue;
            if (p.name === name && (p.value || allowEmpty)) {
                return p;
            }
        }
        else if (p.name === 'bind' &&
            (p.exp || allowEmpty) &&
            isStaticArgOf(p.arg, name)) {
            return p;
        }
    }
}
function isStaticArgOf(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
    return node.props.some(p => p.type === 7 /* NodeTypes.DIRECTIVE */ &&
        p.name === 'bind' &&
        (!p.arg || // v-bind="obj"
            p.arg.type !== 4 /* NodeTypes.SIMPLE_EXPRESSION */ || // v-bind:[_ctx.foo]
            !p.arg.isStatic) // v-bind:[foo]
    );
}
function isText$1(node) {
    return node.type === 5 /* NodeTypes.INTERPOLATION */ || node.type === 2 /* NodeTypes.TEXT */;
}
function isVSlot(p) {
    return p.type === 7 /* NodeTypes.DIRECTIVE */ && p.name === 'slot';
}
function isTemplateNode(node) {
    return (node.type === 1 /* NodeTypes.ELEMENT */ && node.tagType === 3 /* ElementTypes.TEMPLATE */);
}
function isSlotOutlet(node) {
    return node.type === 1 /* NodeTypes.ELEMENT */ && node.tagType === 2 /* ElementTypes.SLOT */;
}
function getVNodeHelper(ssr, isComponent) {
    return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent) {
    return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
const propsHelperSet = new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
    if (props &&
        !(0,shared_esm_bundler.isString)(props) &&
        props.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */) {
        const callee = props.callee;
        if (!(0,shared_esm_bundler.isString)(callee) && propsHelperSet.has(callee)) {
            return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
        }
    }
    return [props, callPath];
}
function injectProp(node, prop, context) {
    let propsWithInjection;
    /**
     * 1. mergeProps(...)
     * 2. toHandlers(...)
     * 3. normalizeProps(...)
     * 4. normalizeProps(guardReactiveProps(...))
     *
     * we need to get the real props before normalization
     */
    let props = node.type === 13 /* NodeTypes.VNODE_CALL */ ? node.props : node.arguments[2];
    let callPath = [];
    let parentCall;
    if (props &&
        !(0,shared_esm_bundler.isString)(props) &&
        props.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */) {
        const ret = getUnnormalizedProps(props);
        props = ret[0];
        callPath = ret[1];
        parentCall = callPath[callPath.length - 1];
    }
    if (props == null || (0,shared_esm_bundler.isString)(props)) {
        propsWithInjection = createObjectExpression([prop]);
    }
    else if (props.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */) {
        // merged props... add ours
        // only inject key to object literal if it's the first argument so that
        // if doesn't override user provided keys
        const first = props.arguments[0];
        if (!(0,shared_esm_bundler.isString)(first) && first.type === 15 /* NodeTypes.JS_OBJECT_EXPRESSION */) {
            // #6631
            if (!hasProp(prop, first)) {
                first.properties.unshift(prop);
            }
        }
        else {
            if (props.callee === TO_HANDLERS) {
                // #2366
                propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
                    createObjectExpression([prop]),
                    props
                ]);
            }
            else {
                props.arguments.unshift(createObjectExpression([prop]));
            }
        }
        !propsWithInjection && (propsWithInjection = props);
    }
    else if (props.type === 15 /* NodeTypes.JS_OBJECT_EXPRESSION */) {
        if (!hasProp(prop, props)) {
            props.properties.unshift(prop);
        }
        propsWithInjection = props;
    }
    else {
        // single v-bind with expression, return a merged replacement
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
        ]);
        // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(props))`,
        // it will be rewritten as `normalizeProps(mergeProps({ key: 0 }, props))`,
        // the `guardReactiveProps` will no longer be needed
        if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
            parentCall = callPath[callPath.length - 2];
        }
    }
    if (node.type === 13 /* NodeTypes.VNODE_CALL */) {
        if (parentCall) {
            parentCall.arguments[0] = propsWithInjection;
        }
        else {
            node.props = propsWithInjection;
        }
    }
    else {
        if (parentCall) {
            parentCall.arguments[0] = propsWithInjection;
        }
        else {
            node.arguments[2] = propsWithInjection;
        }
    }
}
// check existing key to avoid overriding user provided keys
function hasProp(prop, props) {
    let result = false;
    if (prop.key.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        const propKeyName = prop.key.content;
        result = props.properties.some(p => p.key.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ &&
            p.key.content === propKeyName);
    }
    return result;
}
function toValidAssetId(name, type) {
    // see issue#4422, we need adding identifier on validAssetId if variable `name` has specific character
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
        return searchValue === '-' ? '_' : name.charCodeAt(replaceValue).toString();
    })}`;
}
// Check if a node contains expressions that reference current context scope ids
function hasScopeRef(node, ids) {
    if (!node || Object.keys(ids).length === 0) {
        return false;
    }
    switch (node.type) {
        case 1 /* NodeTypes.ELEMENT */:
            for (let i = 0; i < node.props.length; i++) {
                const p = node.props[i];
                if (p.type === 7 /* NodeTypes.DIRECTIVE */ &&
                    (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
                    return true;
                }
            }
            return node.children.some(c => hasScopeRef(c, ids));
        case 11 /* NodeTypes.FOR */:
            if (hasScopeRef(node.source, ids)) {
                return true;
            }
            return node.children.some(c => hasScopeRef(c, ids));
        case 9 /* NodeTypes.IF */:
            return node.branches.some(b => hasScopeRef(b, ids));
        case 10 /* NodeTypes.IF_BRANCH */:
            if (hasScopeRef(node.condition, ids)) {
                return true;
            }
            return node.children.some(c => hasScopeRef(c, ids));
        case 4 /* NodeTypes.SIMPLE_EXPRESSION */:
            return (!node.isStatic &&
                isSimpleIdentifier(node.content) &&
                !!ids[node.content]);
        case 8 /* NodeTypes.COMPOUND_EXPRESSION */:
            return node.children.some(c => (0,shared_esm_bundler.isObject)(c) && hasScopeRef(c, ids));
        case 5 /* NodeTypes.INTERPOLATION */:
        case 12 /* NodeTypes.TEXT_CALL */:
            return hasScopeRef(node.content, ids);
        case 2 /* NodeTypes.TEXT */:
        case 3 /* NodeTypes.COMMENT */:
            return false;
        default:
            if ((false)) {}
            return false;
    }
}
function getMemoedVNodeCall(node) {
    if (node.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */ && node.callee === WITH_MEMO) {
        return node.arguments[1].returns;
    }
    else {
        return node;
    }
}
function makeBlock(node, { helper, removeHelper, inSSR }) {
    if (!node.isBlock) {
        node.isBlock = true;
        removeHelper(getVNodeHelper(inSSR, node.isComponent));
        helper(OPEN_BLOCK);
        helper(getVNodeBlockHelper(inSSR, node.isComponent));
    }
}

const deprecationData = {
    ["COMPILER_IS_ON_ELEMENT" /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */]: {
        message: `Platform-native elements with "is" prop will no longer be ` +
            `treated as components in Vue 3 unless the "is" value is explicitly ` +
            `prefixed with "vue:".`,
        link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
    },
    ["COMPILER_V_BIND_SYNC" /* CompilerDeprecationTypes.COMPILER_V_BIND_SYNC */]: {
        message: key => `.sync modifier for v-bind has been removed. Use v-model with ` +
            `argument instead. \`v-bind:${key}.sync\` should be changed to ` +
            `\`v-model:${key}\`.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
    },
    ["COMPILER_V_BIND_PROP" /* CompilerDeprecationTypes.COMPILER_V_BIND_PROP */]: {
        message: `.prop modifier for v-bind has been removed and no longer necessary. ` +
            `Vue 3 will automatically set a binding as DOM property when appropriate.`
    },
    ["COMPILER_V_BIND_OBJECT_ORDER" /* CompilerDeprecationTypes.COMPILER_V_BIND_OBJECT_ORDER */]: {
        message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript ` +
            `object spread: it will now overwrite an existing non-mergeable attribute ` +
            `that appears before v-bind in the case of conflict. ` +
            `To retain 2.x behavior, move v-bind to make it the first attribute. ` +
            `You can also suppress this warning if the usage is intended.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
    },
    ["COMPILER_V_ON_NATIVE" /* CompilerDeprecationTypes.COMPILER_V_ON_NATIVE */]: {
        message: `.native modifier for v-on has been removed as is no longer necessary.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
    },
    ["COMPILER_V_IF_V_FOR_PRECEDENCE" /* CompilerDeprecationTypes.COMPILER_V_IF_V_FOR_PRECEDENCE */]: {
        message: `v-if / v-for precedence when used on the same element has changed ` +
            `in Vue 3: v-if now takes higher precedence and will no longer have ` +
            `access to v-for scope variables. It is best to avoid the ambiguity ` +
            `with <template> tags or use a computed property that filters v-for ` +
            `data source.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
    },
    ["COMPILER_NATIVE_TEMPLATE" /* CompilerDeprecationTypes.COMPILER_NATIVE_TEMPLATE */]: {
        message: `<template> with no special directives will render as a native template ` +
            `element instead of its inner content in Vue 3.`
    },
    ["COMPILER_INLINE_TEMPLATE" /* CompilerDeprecationTypes.COMPILER_INLINE_TEMPLATE */]: {
        message: `"inline-template" has been removed in Vue 3.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
    },
    ["COMPILER_FILTER" /* CompilerDeprecationTypes.COMPILER_FILTERS */]: {
        message: `filters have been removed in Vue 3. ` +
            `The "|" symbol will be treated as native JavaScript bitwise OR operator. ` +
            `Use method calls or computed properties instead.`,
        link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
    }
};
function getCompatValue(key, context) {
    const config = context.options
        ? context.options.compatConfig
        : context.compatConfig;
    const value = config && config[key];
    if (key === 'MODE') {
        return value || 3; // compiler defaults to v3 behavior
    }
    else {
        return value;
    }
}
function isCompatEnabled(key, context) {
    const mode = getCompatValue('MODE', context);
    const value = getCompatValue(key, context);
    // in v3 mode, only enable if explicitly set to true
    // otherwise enable for any non-false value
    return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
    const enabled = isCompatEnabled(key, context);
    if (false) {}
    return enabled;
}
function warnDeprecation(key, context, loc, ...args) {
    const val = getCompatValue(key, context);
    if (val === 'suppress-warning') {
        return;
    }
    const { message, link } = deprecationData[key];
    const msg = `(deprecation ${key}) ${typeof message === 'function' ? message(...args) : message}${link ? `\n  Details: ${link}` : ``}`;
    const err = new SyntaxError(msg);
    err.code = key;
    if (loc)
        err.loc = loc;
    context.onWarn(err);
}

// The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.
const decodeRE = /&(gt|lt|amp|apos|quot);/g;
const decodeMap = {
    gt: '>',
    lt: '<',
    amp: '&',
    apos: "'",
    quot: '"'
};
const defaultParserOptions = {
    delimiters: [`{{`, `}}`],
    getNamespace: () => 0 /* Namespaces.HTML */,
    getTextMode: () => 0 /* TextModes.DATA */,
    isVoidTag: shared_esm_bundler.NO,
    isPreTag: shared_esm_bundler.NO,
    isCustomElement: shared_esm_bundler.NO,
    decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
    onError: defaultOnError,
    onWarn: defaultOnWarn,
    comments: ("production" !== 'production')
};
function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0 /* TextModes.DATA */, []), getSelection(context, start));
}
function createParserContext(content, rawOptions) {
    const options = (0,shared_esm_bundler.extend)({}, defaultParserOptions);
    let key;
    for (key in rawOptions) {
        // @ts-ignore
        options[key] =
            rawOptions[key] === undefined
                ? defaultParserOptions[key]
                : rawOptions[key];
    }
    return {
        options,
        column: 1,
        line: 1,
        offset: 0,
        originalSource: content,
        source: content,
        inPre: false,
        inVPre: false,
        onWarn: options.onWarn
    };
}
function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns = parent ? parent.ns : 0 /* Namespaces.HTML */;
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
        const s = context.source;
        let node = undefined;
        if (mode === 0 /* TextModes.DATA */ || mode === 1 /* TextModes.RCDATA */) {
            if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
                // '{{'
                node = parseInterpolation(context, mode);
            }
            else if (mode === 0 /* TextModes.DATA */ && s[0] === '<') {
                // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
                if (s.length === 1) {
                    emitError(context, 5 /* ErrorCodes.EOF_BEFORE_TAG_NAME */, 1);
                }
                else if (s[1] === '!') {
                    // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
                    if (startsWith(s, '<!--')) {
                        node = parseComment(context);
                    }
                    else if (startsWith(s, '<!DOCTYPE')) {
                        // Ignore DOCTYPE by a limitation.
                        node = parseBogusComment(context);
                    }
                    else if (startsWith(s, '<![CDATA[')) {
                        if (ns !== 0 /* Namespaces.HTML */) {
                            node = parseCDATA(context, ancestors);
                        }
                        else {
                            emitError(context, 1 /* ErrorCodes.CDATA_IN_HTML_CONTENT */);
                            node = parseBogusComment(context);
                        }
                    }
                    else {
                        emitError(context, 11 /* ErrorCodes.INCORRECTLY_OPENED_COMMENT */);
                        node = parseBogusComment(context);
                    }
                }
                else if (s[1] === '/') {
                    // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
                    if (s.length === 2) {
                        emitError(context, 5 /* ErrorCodes.EOF_BEFORE_TAG_NAME */, 2);
                    }
                    else if (s[2] === '>') {
                        emitError(context, 14 /* ErrorCodes.MISSING_END_TAG_NAME */, 2);
                        advanceBy(context, 3);
                        continue;
                    }
                    else if (/[a-z]/i.test(s[2])) {
                        emitError(context, 23 /* ErrorCodes.X_INVALID_END_TAG */);
                        parseTag(context, 1 /* TagType.End */, parent);
                        continue;
                    }
                    else {
                        emitError(context, 12 /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */, 2);
                        node = parseBogusComment(context);
                    }
                }
                else if (/[a-z]/i.test(s[1])) {
                    node = parseElement(context, ancestors);
                    // 2.x <template> with no directive compat
                    if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE" /* CompilerDeprecationTypes.COMPILER_NATIVE_TEMPLATE */, context) &&
                        node &&
                        node.tag === 'template' &&
                        !node.props.some(p => p.type === 7 /* NodeTypes.DIRECTIVE */ &&
                            isSpecialTemplateDirective(p.name))) {
                        ( false) &&
                            0;
                        node = node.children;
                    }
                }
                else if (s[1] === '?') {
                    emitError(context, 21 /* ErrorCodes.UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */, 1);
                    node = parseBogusComment(context);
                }
                else {
                    emitError(context, 12 /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */, 1);
                }
            }
        }
        if (!node) {
            node = parseText(context, mode);
        }
        if ((0,shared_esm_bundler.isArray)(node)) {
            for (let i = 0; i < node.length; i++) {
                pushNode(nodes, node[i]);
            }
        }
        else {
            pushNode(nodes, node);
        }
    }
    // Whitespace handling strategy like v2
    let removedWhitespace = false;
    if (mode !== 2 /* TextModes.RAWTEXT */ && mode !== 1 /* TextModes.RCDATA */) {
        const shouldCondense = context.options.whitespace !== 'preserve';
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.type === 2 /* NodeTypes.TEXT */) {
                if (!context.inPre) {
                    if (!/[^\t\r\n\f ]/.test(node.content)) {
                        const prev = nodes[i - 1];
                        const next = nodes[i + 1];
                        // Remove if:
                        // - the whitespace is the first or last node, or:
                        // - (condense mode) the whitespace is between twos comments, or:
                        // - (condense mode) the whitespace is between comment and element, or:
                        // - (condense mode) the whitespace is between two elements AND contains newline
                        if (!prev ||
                            !next ||
                            (shouldCondense &&
                                ((prev.type === 3 /* NodeTypes.COMMENT */ &&
                                    next.type === 3 /* NodeTypes.COMMENT */) ||
                                    (prev.type === 3 /* NodeTypes.COMMENT */ &&
                                        next.type === 1 /* NodeTypes.ELEMENT */) ||
                                    (prev.type === 1 /* NodeTypes.ELEMENT */ &&
                                        next.type === 3 /* NodeTypes.COMMENT */) ||
                                    (prev.type === 1 /* NodeTypes.ELEMENT */ &&
                                        next.type === 1 /* NodeTypes.ELEMENT */ &&
                                        /[\r\n]/.test(node.content))))) {
                            removedWhitespace = true;
                            nodes[i] = null;
                        }
                        else {
                            // Otherwise, the whitespace is condensed into a single space
                            node.content = ' ';
                        }
                    }
                    else if (shouldCondense) {
                        // in condense mode, consecutive whitespaces in text are condensed
                        // down to a single space.
                        node.content = node.content.replace(/[\t\r\n\f ]+/g, ' ');
                    }
                }
                else {
                    // #6410 normalize windows newlines in <pre>:
                    // in SSR, browsers normalize server-rendered \r\n into a single \n
                    // in the DOM
                    node.content = node.content.replace(/\r\n/g, '\n');
                }
            }
            // Remove comment nodes if desired by configuration.
            else if (node.type === 3 /* NodeTypes.COMMENT */ && !context.options.comments) {
                removedWhitespace = true;
                nodes[i] = null;
            }
        }
        if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
            // remove leading newline per html spec
            // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
            const first = nodes[0];
            if (first && first.type === 2 /* NodeTypes.TEXT */) {
                first.content = first.content.replace(/^\r?\n/, '');
            }
        }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function pushNode(nodes, node) {
    if (node.type === 2 /* NodeTypes.TEXT */) {
        const prev = last(nodes);
        // Merge if both this and the previous node are text and those are
        // consecutive. This happens for cases like "a < b".
        if (prev &&
            prev.type === 2 /* NodeTypes.TEXT */ &&
            prev.loc.end.offset === node.loc.start.offset) {
            prev.content += node.content;
            prev.loc.end = node.loc.end;
            prev.loc.source += node.loc.source;
            return;
        }
    }
    nodes.push(node);
}
function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3 /* TextModes.CDATA */, ancestors);
    if (context.source.length === 0) {
        emitError(context, 6 /* ErrorCodes.EOF_IN_CDATA */);
    }
    else {
        advanceBy(context, 3);
    }
    return nodes;
}
function parseComment(context) {
    const start = getCursor(context);
    let content;
    // Regular comment.
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
        content = context.source.slice(4);
        advanceBy(context, context.source.length);
        emitError(context, 7 /* ErrorCodes.EOF_IN_COMMENT */);
    }
    else {
        if (match.index <= 3) {
            emitError(context, 0 /* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */);
        }
        if (match[1]) {
            emitError(context, 10 /* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */);
        }
        content = context.source.slice(4, match.index);
        // Advancing with reporting nested comments.
        const s = context.source.slice(0, match.index);
        let prevIndex = 1, nestedIndex = 0;
        while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
            advanceBy(context, nestedIndex - prevIndex + 1);
            if (nestedIndex + 4 < s.length) {
                emitError(context, 16 /* ErrorCodes.NESTED_COMMENT */);
            }
            prevIndex = nestedIndex + 1;
        }
        advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
        type: 3 /* NodeTypes.COMMENT */,
        content,
        loc: getSelection(context, start)
    };
}
function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === '?' ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf('>');
    if (closeIndex === -1) {
        content = context.source.slice(contentStart);
        advanceBy(context, context.source.length);
    }
    else {
        content = context.source.slice(contentStart, closeIndex);
        advanceBy(context, closeIndex + 1);
    }
    return {
        type: 3 /* NodeTypes.COMMENT */,
        content,
        loc: getSelection(context, start)
    };
}
function parseElement(context, ancestors) {
    // Start tag.
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0 /* TagType.Start */, parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
        // #4030 self-closing <pre> tag
        if (isPreBoundary) {
            context.inPre = false;
        }
        if (isVPreBoundary) {
            context.inVPre = false;
        }
        return element;
    }
    // Children.
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    // 2.x inline-template compat
    {
        const inlineTemplateProp = element.props.find(p => p.type === 6 /* NodeTypes.ATTRIBUTE */ && p.name === 'inline-template');
        if (inlineTemplateProp &&
            checkCompatEnabled("COMPILER_INLINE_TEMPLATE" /* CompilerDeprecationTypes.COMPILER_INLINE_TEMPLATE */, context, inlineTemplateProp.loc)) {
            const loc = getSelection(context, element.loc.end);
            inlineTemplateProp.value = {
                type: 2 /* NodeTypes.TEXT */,
                content: loc.source,
                loc
            };
        }
    }
    element.children = children;
    // End tag.
    if (startsWithEndTagOpen(context.source, element.tag)) {
        parseTag(context, 1 /* TagType.End */, parent);
    }
    else {
        emitError(context, 24 /* ErrorCodes.X_MISSING_END_TAG */, 0, element.loc.start);
        if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
            const first = children[0];
            if (first && startsWith(first.loc.source, '<!--')) {
                emitError(context, 8 /* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */);
            }
        }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
        context.inPre = false;
    }
    if (isVPreBoundary) {
        context.inVPre = false;
    }
    return element;
}
const isSpecialTemplateDirective = /*#__PURE__*/ (0,shared_esm_bundler.makeMap)(`if,else,else-if,for,slot`);
function parseTag(context, type, parent) {
    // Tag open.
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    // save current state in case we need to re-parse attributes with v-pre
    const cursor = getCursor(context);
    const currentSource = context.source;
    // check <pre> tag
    if (context.options.isPreTag(tag)) {
        context.inPre = true;
    }
    // Attributes.
    let props = parseAttributes(context, type);
    // check v-pre
    if (type === 0 /* TagType.Start */ &&
        !context.inVPre &&
        props.some(p => p.type === 7 /* NodeTypes.DIRECTIVE */ && p.name === 'pre')) {
        context.inVPre = true;
        // reset context
        (0,shared_esm_bundler.extend)(context, cursor);
        context.source = currentSource;
        // re-parse attrs and filter out v-pre itself
        props = parseAttributes(context, type).filter(p => p.name !== 'v-pre');
    }
    // Tag close.
    let isSelfClosing = false;
    if (context.source.length === 0) {
        emitError(context, 9 /* ErrorCodes.EOF_IN_TAG */);
    }
    else {
        isSelfClosing = startsWith(context.source, '/>');
        if (type === 1 /* TagType.End */ && isSelfClosing) {
            emitError(context, 4 /* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */);
        }
        advanceBy(context, isSelfClosing ? 2 : 1);
    }
    if (type === 1 /* TagType.End */) {
        return;
    }
    // 2.x deprecation checks
    if (false) {}
    let tagType = 0 /* ElementTypes.ELEMENT */;
    if (!context.inVPre) {
        if (tag === 'slot') {
            tagType = 2 /* ElementTypes.SLOT */;
        }
        else if (tag === 'template') {
            if (props.some(p => p.type === 7 /* NodeTypes.DIRECTIVE */ && isSpecialTemplateDirective(p.name))) {
                tagType = 3 /* ElementTypes.TEMPLATE */;
            }
        }
        else if (isComponent(tag, props, context)) {
            tagType = 1 /* ElementTypes.COMPONENT */;
        }
    }
    return {
        type: 1 /* NodeTypes.ELEMENT */,
        ns,
        tag,
        tagType,
        props,
        isSelfClosing,
        children: [],
        loc: getSelection(context, start),
        codegenNode: undefined // to be created during transform phase
    };
}
function isComponent(tag, props, context) {
    const options = context.options;
    if (options.isCustomElement(tag)) {
        return false;
    }
    if (tag === 'component' ||
        /^[A-Z]/.test(tag) ||
        isCoreComponent(tag) ||
        (options.isBuiltInComponent && options.isBuiltInComponent(tag)) ||
        (options.isNativeTag && !options.isNativeTag(tag))) {
        return true;
    }
    // at this point the tag should be a native tag, but check for potential "is"
    // casting
    for (let i = 0; i < props.length; i++) {
        const p = props[i];
        if (p.type === 6 /* NodeTypes.ATTRIBUTE */) {
            if (p.name === 'is' && p.value) {
                if (p.value.content.startsWith('vue:')) {
                    return true;
                }
                else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT" /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */, context, p.loc)) {
                    return true;
                }
            }
        }
        else {
            // directive
            // v-is (TODO Deprecate)
            if (p.name === 'is') {
                return true;
            }
            else if (
            // :is on plain element - only treat as component in compat mode
            p.name === 'bind' &&
                isStaticArgOf(p.arg, 'is') &&
                true &&
                checkCompatEnabled("COMPILER_IS_ON_ELEMENT" /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */, context, p.loc)) {
                return true;
            }
        }
    }
}
function parseAttributes(context, type) {
    const props = [];
    const attributeNames = new Set();
    while (context.source.length > 0 &&
        !startsWith(context.source, '>') &&
        !startsWith(context.source, '/>')) {
        if (startsWith(context.source, '/')) {
            emitError(context, 22 /* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */);
            advanceBy(context, 1);
            advanceSpaces(context);
            continue;
        }
        if (type === 1 /* TagType.End */) {
            emitError(context, 3 /* ErrorCodes.END_TAG_WITH_ATTRIBUTES */);
        }
        const attr = parseAttribute(context, attributeNames);
        // Trim whitespace between class
        // https://github.com/vuejs/core/issues/4251
        if (attr.type === 6 /* NodeTypes.ATTRIBUTE */ &&
            attr.value &&
            attr.name === 'class') {
            attr.value.content = attr.value.content.replace(/\s+/g, ' ').trim();
        }
        if (type === 0 /* TagType.Start */) {
            props.push(attr);
        }
        if (/^[^\t\r\n\f />]/.test(context.source)) {
            emitError(context, 15 /* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */);
        }
        advanceSpaces(context);
    }
    return props;
}
function parseAttribute(context, nameSet) {
    // Name.
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
        emitError(context, 2 /* ErrorCodes.DUPLICATE_ATTRIBUTE */);
    }
    nameSet.add(name);
    if (name[0] === '=') {
        emitError(context, 19 /* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */);
    }
    {
        const pattern = /["'<]/g;
        let m;
        while ((m = pattern.exec(name))) {
            emitError(context, 17 /* ErrorCodes.UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */, m.index);
        }
    }
    advanceBy(context, name.length);
    // Value
    let value = undefined;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
        advanceSpaces(context);
        advanceBy(context, 1);
        advanceSpaces(context);
        value = parseAttributeValue(context);
        if (!value) {
            emitError(context, 13 /* ErrorCodes.MISSING_ATTRIBUTE_VALUE */);
        }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
        const match = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
        let isPropShorthand = startsWith(name, '.');
        let dirName = match[1] ||
            (isPropShorthand || startsWith(name, ':')
                ? 'bind'
                : startsWith(name, '@')
                    ? 'on'
                    : 'slot');
        let arg;
        if (match[2]) {
            const isSlot = dirName === 'slot';
            const startOffset = name.lastIndexOf(match[2]);
            const loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match[2].length + ((isSlot && match[3]) || '').length));
            let content = match[2];
            let isStatic = true;
            if (content.startsWith('[')) {
                isStatic = false;
                if (!content.endsWith(']')) {
                    emitError(context, 27 /* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */);
                    content = content.slice(1);
                }
                else {
                    content = content.slice(1, content.length - 1);
                }
            }
            else if (isSlot) {
                // #1241 special case for v-slot: vuetify relies extensively on slot
                // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
                // supports such usage so we are keeping it consistent with 2.x.
                content += match[3] || '';
            }
            arg = {
                type: 4 /* NodeTypes.SIMPLE_EXPRESSION */,
                content,
                isStatic,
                constType: isStatic
                    ? 3 /* ConstantTypes.CAN_STRINGIFY */
                    : 0 /* ConstantTypes.NOT_CONSTANT */,
                loc
            };
        }
        if (value && value.isQuoted) {
            const valueLoc = value.loc;
            valueLoc.start.offset++;
            valueLoc.start.column++;
            valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
            valueLoc.source = valueLoc.source.slice(1, -1);
        }
        const modifiers = match[3] ? match[3].slice(1).split('.') : [];
        if (isPropShorthand)
            modifiers.push('prop');
        // 2.x compat v-bind:foo.sync -> v-model:foo
        if (dirName === 'bind' && arg) {
            if (modifiers.includes('sync') &&
                checkCompatEnabled("COMPILER_V_BIND_SYNC" /* CompilerDeprecationTypes.COMPILER_V_BIND_SYNC */, context, loc, arg.loc.source)) {
                dirName = 'model';
                modifiers.splice(modifiers.indexOf('sync'), 1);
            }
            if (false) {}
        }
        return {
            type: 7 /* NodeTypes.DIRECTIVE */,
            name: dirName,
            exp: value && {
                type: 4 /* NodeTypes.SIMPLE_EXPRESSION */,
                content: value.content,
                isStatic: false,
                // Treat as non-constant by default. This can be potentially set to
                // other values by `transformExpression` to make it eligible for hoisting.
                constType: 0 /* ConstantTypes.NOT_CONSTANT */,
                loc: value.loc
            },
            arg,
            modifiers,
            loc
        };
    }
    // missing directive name or illegal directive name
    if (!context.inVPre && startsWith(name, 'v-')) {
        emitError(context, 26 /* ErrorCodes.X_MISSING_DIRECTIVE_NAME */);
    }
    return {
        type: 6 /* NodeTypes.ATTRIBUTE */,
        name,
        value: value && {
            type: 2 /* NodeTypes.TEXT */,
            content: value.content,
            loc: value.loc
        },
        loc
    };
}
function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
        // Quoted value.
        advanceBy(context, 1);
        const endIndex = context.source.indexOf(quote);
        if (endIndex === -1) {
            content = parseTextData(context, context.source.length, 4 /* TextModes.ATTRIBUTE_VALUE */);
        }
        else {
            content = parseTextData(context, endIndex, 4 /* TextModes.ATTRIBUTE_VALUE */);
            advanceBy(context, 1);
        }
    }
    else {
        // Unquoted
        const match = /^[^\t\r\n\f >]+/.exec(context.source);
        if (!match) {
            return undefined;
        }
        const unexpectedChars = /["'<=`]/g;
        let m;
        while ((m = unexpectedChars.exec(match[0]))) {
            emitError(context, 18 /* ErrorCodes.UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */, m.index);
        }
        content = parseTextData(context, match[0].length, 4 /* TextModes.ATTRIBUTE_VALUE */);
    }
    return { content, isQuoted, loc: getSelection(context, start) };
}
function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
        emitError(context, 25 /* ErrorCodes.X_MISSING_INTERPOLATION_END */);
        return undefined;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
        advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
        type: 5 /* NodeTypes.INTERPOLATION */,
        content: {
            type: 4 /* NodeTypes.SIMPLE_EXPRESSION */,
            isStatic: false,
            // Set `isConstant` to false by default and will decide in transformExpression
            constType: 0 /* ConstantTypes.NOT_CONSTANT */,
            content,
            loc: getSelection(context, innerStart, innerEnd)
        },
        loc: getSelection(context, start)
    };
}
function parseText(context, mode) {
    const endTokens = mode === 3 /* TextModes.CDATA */ ? [']]>'] : ['<', context.options.delimiters[0]];
    let endIndex = context.source.length;
    for (let i = 0; i < endTokens.length; i++) {
        const index = context.source.indexOf(endTokens[i], 1);
        if (index !== -1 && endIndex > index) {
            endIndex = index;
        }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
        type: 2 /* NodeTypes.TEXT */,
        content,
        loc: getSelection(context, start)
    };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */
function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2 /* TextModes.RAWTEXT */ ||
        mode === 3 /* TextModes.CDATA */ ||
        !rawText.includes('&')) {
        return rawText;
    }
    else {
        // DATA or RCDATA containing "&"". Entity decoding required.
        return context.options.decodeEntities(rawText, mode === 4 /* TextModes.ATTRIBUTE_VALUE */);
    }
}
function getCursor(context) {
    const { column, line, offset } = context;
    return { column, line, offset };
}
function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
        start,
        end,
        source: context.originalSource.slice(start.offset, end.offset)
    };
}
function last(xs) {
    return xs[xs.length - 1];
}
function startsWith(source, searchString) {
    return source.startsWith(searchString);
}
function advanceBy(context, numberOfCharacters) {
    const { source } = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
}
function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
        advanceBy(context, match[0].length);
    }
}
function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}
function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
        loc.offset += offset;
        loc.column += offset;
    }
    context.options.onError(createCompilerError(code, {
        start: loc,
        end: loc,
        source: ''
    }));
}
function isEnd(context, mode, ancestors) {
    const s = context.source;
    switch (mode) {
        case 0 /* TextModes.DATA */:
            if (startsWith(s, '</')) {
                // TODO: probably bad performance
                for (let i = ancestors.length - 1; i >= 0; --i) {
                    if (startsWithEndTagOpen(s, ancestors[i].tag)) {
                        return true;
                    }
                }
            }
            break;
        case 1 /* TextModes.RCDATA */:
        case 2 /* TextModes.RAWTEXT */: {
            const parent = last(ancestors);
            if (parent && startsWithEndTagOpen(s, parent.tag)) {
                return true;
            }
            break;
        }
        case 3 /* TextModes.CDATA */:
            if (startsWith(s, ']]>')) {
                return true;
            }
            break;
    }
    return !s;
}
function startsWithEndTagOpen(source, tag) {
    return (startsWith(source, '</') &&
        source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() &&
        /[\t\r\n\f />]/.test(source[2 + tag.length] || '>'));
}

function hoistStatic(root, context) {
    walk(root, context, 
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    isSingleElementRoot(root, root.children[0]));
}
function isSingleElementRoot(root, child) {
    const { children } = root;
    return (children.length === 1 &&
        child.type === 1 /* NodeTypes.ELEMENT */ &&
        !isSlotOutlet(child));
}
function walk(node, context, doNotHoistNode = false) {
    const { children } = node;
    const originalCount = children.length;
    let hoistedCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // only plain elements & text calls are eligible for hoisting.
        if (child.type === 1 /* NodeTypes.ELEMENT */ &&
            child.tagType === 0 /* ElementTypes.ELEMENT */) {
            const constantType = doNotHoistNode
                ? 0 /* ConstantTypes.NOT_CONSTANT */
                : getConstantType(child, context);
            if (constantType > 0 /* ConstantTypes.NOT_CONSTANT */) {
                if (constantType >= 2 /* ConstantTypes.CAN_HOIST */) {
                    child.codegenNode.patchFlag =
                        -1 /* PatchFlags.HOISTED */ + (( false) ? 0 : ``);
                    child.codegenNode = context.hoist(child.codegenNode);
                    hoistedCount++;
                    continue;
                }
            }
            else {
                // node may contain dynamic children, but its props may be eligible for
                // hoisting.
                const codegenNode = child.codegenNode;
                if (codegenNode.type === 13 /* NodeTypes.VNODE_CALL */) {
                    const flag = getPatchFlag(codegenNode);
                    if ((!flag ||
                        flag === 512 /* PatchFlags.NEED_PATCH */ ||
                        flag === 1 /* PatchFlags.TEXT */) &&
                        getGeneratedPropsConstantType(child, context) >=
                            2 /* ConstantTypes.CAN_HOIST */) {
                        const props = getNodeProps(child);
                        if (props) {
                            codegenNode.props = context.hoist(props);
                        }
                    }
                    if (codegenNode.dynamicProps) {
                        codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
                    }
                }
            }
        }
        // walk further
        if (child.type === 1 /* NodeTypes.ELEMENT */) {
            const isComponent = child.tagType === 1 /* ElementTypes.COMPONENT */;
            if (isComponent) {
                context.scopes.vSlot++;
            }
            walk(child, context);
            if (isComponent) {
                context.scopes.vSlot--;
            }
        }
        else if (child.type === 11 /* NodeTypes.FOR */) {
            // Do not hoist v-for single child because it has to be a block
            walk(child, context, child.children.length === 1);
        }
        else if (child.type === 9 /* NodeTypes.IF */) {
            for (let i = 0; i < child.branches.length; i++) {
                // Do not hoist v-if single child because it has to be a block
                walk(child.branches[i], context, child.branches[i].children.length === 1);
            }
        }
    }
    if (hoistedCount && context.transformHoist) {
        context.transformHoist(children, context, node);
    }
    // all children were hoisted - the entire children array is hoistable.
    if (hoistedCount &&
        hoistedCount === originalCount &&
        node.type === 1 /* NodeTypes.ELEMENT */ &&
        node.tagType === 0 /* ElementTypes.ELEMENT */ &&
        node.codegenNode &&
        node.codegenNode.type === 13 /* NodeTypes.VNODE_CALL */ &&
        (0,shared_esm_bundler.isArray)(node.codegenNode.children)) {
        node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
    }
}
function getConstantType(node, context) {
    const { constantCache } = context;
    switch (node.type) {
        case 1 /* NodeTypes.ELEMENT */:
            if (node.tagType !== 0 /* ElementTypes.ELEMENT */) {
                return 0 /* ConstantTypes.NOT_CONSTANT */;
            }
            const cached = constantCache.get(node);
            if (cached !== undefined) {
                return cached;
            }
            const codegenNode = node.codegenNode;
            if (codegenNode.type !== 13 /* NodeTypes.VNODE_CALL */) {
                return 0 /* ConstantTypes.NOT_CONSTANT */;
            }
            if (codegenNode.isBlock &&
                node.tag !== 'svg' &&
                node.tag !== 'foreignObject') {
                return 0 /* ConstantTypes.NOT_CONSTANT */;
            }
            const flag = getPatchFlag(codegenNode);
            if (!flag) {
                let returnType = 3 /* ConstantTypes.CAN_STRINGIFY */;
                // Element itself has no patch flag. However we still need to check:
                // 1. Even for a node with no patch flag, it is possible for it to contain
                // non-hoistable expressions that refers to scope variables, e.g. compiler
                // injected keys or cached event handlers. Therefore we need to always
                // check the codegenNode's props to be sure.
                const generatedPropsType = getGeneratedPropsConstantType(node, context);
                if (generatedPropsType === 0 /* ConstantTypes.NOT_CONSTANT */) {
                    constantCache.set(node, 0 /* ConstantTypes.NOT_CONSTANT */);
                    return 0 /* ConstantTypes.NOT_CONSTANT */;
                }
                if (generatedPropsType < returnType) {
                    returnType = generatedPropsType;
                }
                // 2. its children.
                for (let i = 0; i < node.children.length; i++) {
                    const childType = getConstantType(node.children[i], context);
                    if (childType === 0 /* ConstantTypes.NOT_CONSTANT */) {
                        constantCache.set(node, 0 /* ConstantTypes.NOT_CONSTANT */);
                        return 0 /* ConstantTypes.NOT_CONSTANT */;
                    }
                    if (childType < returnType) {
                        returnType = childType;
                    }
                }
                // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
                // type, check if any of the props can cause the type to be lowered
                // we can skip can_patch because it's guaranteed by the absence of a
                // patchFlag.
                if (returnType > 1 /* ConstantTypes.CAN_SKIP_PATCH */) {
                    for (let i = 0; i < node.props.length; i++) {
                        const p = node.props[i];
                        if (p.type === 7 /* NodeTypes.DIRECTIVE */ && p.name === 'bind' && p.exp) {
                            const expType = getConstantType(p.exp, context);
                            if (expType === 0 /* ConstantTypes.NOT_CONSTANT */) {
                                constantCache.set(node, 0 /* ConstantTypes.NOT_CONSTANT */);
                                return 0 /* ConstantTypes.NOT_CONSTANT */;
                            }
                            if (expType < returnType) {
                                returnType = expType;
                            }
                        }
                    }
                }
                // only svg/foreignObject could be block here, however if they are
                // static then they don't need to be blocks since there will be no
                // nested updates.
                if (codegenNode.isBlock) {
                    // except set custom directives.
                    for (let i = 0; i < node.props.length; i++) {
                        const p = node.props[i];
                        if (p.type === 7 /* NodeTypes.DIRECTIVE */) {
                            constantCache.set(node, 0 /* ConstantTypes.NOT_CONSTANT */);
                            return 0 /* ConstantTypes.NOT_CONSTANT */;
                        }
                    }
                    context.removeHelper(OPEN_BLOCK);
                    context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
                    codegenNode.isBlock = false;
                    context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
                }
                constantCache.set(node, returnType);
                return returnType;
            }
            else {
                constantCache.set(node, 0 /* ConstantTypes.NOT_CONSTANT */);
                return 0 /* ConstantTypes.NOT_CONSTANT */;
            }
        case 2 /* NodeTypes.TEXT */:
        case 3 /* NodeTypes.COMMENT */:
            return 3 /* ConstantTypes.CAN_STRINGIFY */;
        case 9 /* NodeTypes.IF */:
        case 11 /* NodeTypes.FOR */:
        case 10 /* NodeTypes.IF_BRANCH */:
            return 0 /* ConstantTypes.NOT_CONSTANT */;
        case 5 /* NodeTypes.INTERPOLATION */:
        case 12 /* NodeTypes.TEXT_CALL */:
            return getConstantType(node.content, context);
        case 4 /* NodeTypes.SIMPLE_EXPRESSION */:
            return node.constType;
        case 8 /* NodeTypes.COMPOUND_EXPRESSION */:
            let returnType = 3 /* ConstantTypes.CAN_STRINGIFY */;
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if ((0,shared_esm_bundler.isString)(child) || (0,shared_esm_bundler.isSymbol)(child)) {
                    continue;
                }
                const childType = getConstantType(child, context);
                if (childType === 0 /* ConstantTypes.NOT_CONSTANT */) {
                    return 0 /* ConstantTypes.NOT_CONSTANT */;
                }
                else if (childType < returnType) {
                    returnType = childType;
                }
            }
            return returnType;
        default:
            if ((false)) {}
            return 0 /* ConstantTypes.NOT_CONSTANT */;
    }
}
const allowHoistedHelperSet = new Set([
    NORMALIZE_CLASS,
    NORMALIZE_STYLE,
    NORMALIZE_PROPS,
    GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
    if (value.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */ &&
        !(0,shared_esm_bundler.isString)(value.callee) &&
        allowHoistedHelperSet.has(value.callee)) {
        const arg = value.arguments[0];
        if (arg.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
            return getConstantType(arg, context);
        }
        else if (arg.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */) {
            // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(exp))`
            return getConstantTypeOfHelperCall(arg, context);
        }
    }
    return 0 /* ConstantTypes.NOT_CONSTANT */;
}
function getGeneratedPropsConstantType(node, context) {
    let returnType = 3 /* ConstantTypes.CAN_STRINGIFY */;
    const props = getNodeProps(node);
    if (props && props.type === 15 /* NodeTypes.JS_OBJECT_EXPRESSION */) {
        const { properties } = props;
        for (let i = 0; i < properties.length; i++) {
            const { key, value } = properties[i];
            const keyType = getConstantType(key, context);
            if (keyType === 0 /* ConstantTypes.NOT_CONSTANT */) {
                return keyType;
            }
            if (keyType < returnType) {
                returnType = keyType;
            }
            let valueType;
            if (value.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
                valueType = getConstantType(value, context);
            }
            else if (value.type === 14 /* NodeTypes.JS_CALL_EXPRESSION */) {
                // some helper calls can be hoisted,
                // such as the `normalizeProps` generated by the compiler for pre-normalize class,
                // in this case we need to respect the ConstantType of the helper's arguments
                valueType = getConstantTypeOfHelperCall(value, context);
            }
            else {
                valueType = 0 /* ConstantTypes.NOT_CONSTANT */;
            }
            if (valueType === 0 /* ConstantTypes.NOT_CONSTANT */) {
                return valueType;
            }
            if (valueType < returnType) {
                returnType = valueType;
            }
        }
    }
    return returnType;
}
function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13 /* NodeTypes.VNODE_CALL */) {
        return codegenNode.props;
    }
}
function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, { filename = '', prefixIdentifiers = false, hoistStatic = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = shared_esm_bundler.NOOP, isCustomElement = shared_esm_bundler.NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = shared_esm_bundler.EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
    const nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
    const context = {
        // options
        selfName: nameMatch && (0,shared_esm_bundler.capitalize)((0,shared_esm_bundler.camelize)(nameMatch[1])),
        prefixIdentifiers,
        hoistStatic,
        cacheHandlers,
        nodeTransforms,
        directiveTransforms,
        transformHoist,
        isBuiltInComponent,
        isCustomElement,
        expressionPlugins,
        scopeId,
        slotted,
        ssr,
        inSSR,
        ssrCssVars,
        bindingMetadata,
        inline,
        isTS,
        onError,
        onWarn,
        compatConfig,
        // state
        root,
        helpers: new Map(),
        components: new Set(),
        directives: new Set(),
        hoists: [],
        imports: [],
        constantCache: new Map(),
        temps: 0,
        cached: 0,
        identifiers: Object.create(null),
        scopes: {
            vFor: 0,
            vSlot: 0,
            vPre: 0,
            vOnce: 0
        },
        parent: null,
        currentNode: root,
        childIndex: 0,
        inVOnce: false,
        // methods
        helper(name) {
            const count = context.helpers.get(name) || 0;
            context.helpers.set(name, count + 1);
            return name;
        },
        removeHelper(name) {
            const count = context.helpers.get(name);
            if (count) {
                const currentCount = count - 1;
                if (!currentCount) {
                    context.helpers.delete(name);
                }
                else {
                    context.helpers.set(name, currentCount);
                }
            }
        },
        helperString(name) {
            return `_${helperNameMap[context.helper(name)]}`;
        },
        replaceNode(node) {
            /* istanbul ignore if */
            if ((false)) {}
            context.parent.children[context.childIndex] = context.currentNode = node;
        },
        removeNode(node) {
            if (false) {}
            const list = context.parent.children;
            const removalIndex = node
                ? list.indexOf(node)
                : context.currentNode
                    ? context.childIndex
                    : -1;
            /* istanbul ignore if */
            if (false) {}
            if (!node || node === context.currentNode) {
                // current node removed
                context.currentNode = null;
                context.onNodeRemoved();
            }
            else {
                // sibling node removed
                if (context.childIndex > removalIndex) {
                    context.childIndex--;
                    context.onNodeRemoved();
                }
            }
            context.parent.children.splice(removalIndex, 1);
        },
        onNodeRemoved: () => { },
        addIdentifiers(exp) {
        },
        removeIdentifiers(exp) {
        },
        hoist(exp) {
            if ((0,shared_esm_bundler.isString)(exp))
                exp = createSimpleExpression(exp);
            context.hoists.push(exp);
            const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2 /* ConstantTypes.CAN_HOIST */);
            identifier.hoisted = exp;
            return identifier;
        },
        cache(exp, isVNode = false) {
            return createCacheExpression(context.cached++, exp, isVNode);
        }
    };
    {
        context.filters = new Set();
    }
    return context;
}
function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
        hoistStatic(root, context);
    }
    if (!options.ssr) {
        createRootCodegen(root, context);
    }
    // finalize meta information
    root.helpers = new Set([...context.helpers.keys()]);
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
    {
        root.filters = [...context.filters];
    }
}
function createRootCodegen(root, context) {
    const { helper } = context;
    const { children } = root;
    if (children.length === 1) {
        const child = children[0];
        // if the single child is an element, turn it into a block.
        if (isSingleElementRoot(root, child) && child.codegenNode) {
            // single element root is never hoisted so codegenNode will never be
            // SimpleExpressionNode
            const codegenNode = child.codegenNode;
            if (codegenNode.type === 13 /* NodeTypes.VNODE_CALL */) {
                makeBlock(codegenNode, context);
            }
            root.codegenNode = codegenNode;
        }
        else {
            // - single <slot/>, IfNode, ForNode: already blocks.
            // - single text node: always patched.
            // root codegen falls through via genNode()
            root.codegenNode = child;
        }
    }
    else if (children.length > 1) {
        // root has multiple nodes - return a fragment block.
        let patchFlag = 64 /* PatchFlags.STABLE_FRAGMENT */;
        let patchFlagText = shared_esm_bundler.PatchFlagNames[64];
        // check if the fragment actually contains a single valid child with
        // the rest being comments
        if (false) {}
        root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + (( false) ? 0 : ``), undefined, undefined, true, undefined, false /* isComponent */);
    }
    else ;
}
function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
        i--;
    };
    for (; i < parent.children.length; i++) {
        const child = parent.children[i];
        if ((0,shared_esm_bundler.isString)(child))
            continue;
        context.parent = parent;
        context.childIndex = i;
        context.onNodeRemoved = nodeRemoved;
        traverseNode(child, context);
    }
}
function traverseNode(node, context) {
    context.currentNode = node;
    // apply transform plugins
    const { nodeTransforms } = context;
    const exitFns = [];
    for (let i = 0; i < nodeTransforms.length; i++) {
        const onExit = nodeTransforms[i](node, context);
        if (onExit) {
            if ((0,shared_esm_bundler.isArray)(onExit)) {
                exitFns.push(...onExit);
            }
            else {
                exitFns.push(onExit);
            }
        }
        if (!context.currentNode) {
            // node was removed
            return;
        }
        else {
            // node may have been replaced
            node = context.currentNode;
        }
    }
    switch (node.type) {
        case 3 /* NodeTypes.COMMENT */:
            if (!context.ssr) {
                // inject import for the Comment symbol, which is needed for creating
                // comment nodes with `createVNode`
                context.helper(CREATE_COMMENT);
            }
            break;
        case 5 /* NodeTypes.INTERPOLATION */:
            // no need to traverse, but we need to inject toString helper
            if (!context.ssr) {
                context.helper(TO_DISPLAY_STRING);
            }
            break;
        // for container types, further traverse downwards
        case 9 /* NodeTypes.IF */:
            for (let i = 0; i < node.branches.length; i++) {
                traverseNode(node.branches[i], context);
            }
            break;
        case 10 /* NodeTypes.IF_BRANCH */:
        case 11 /* NodeTypes.FOR */:
        case 1 /* NodeTypes.ELEMENT */:
        case 0 /* NodeTypes.ROOT */:
            traverseChildren(node, context);
            break;
    }
    // exit transforms
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
        exitFns[i]();
    }
}
function createStructuralDirectiveTransform(name, fn) {
    const matches = (0,shared_esm_bundler.isString)(name)
        ? (n) => n === name
        : (n) => name.test(n);
    return (node, context) => {
        if (node.type === 1 /* NodeTypes.ELEMENT */) {
            const { props } = node;
            // structural directive transforms are not concerned with slots
            // as they are handled separately in vSlot.ts
            if (node.tagType === 3 /* ElementTypes.TEMPLATE */ && props.some(isVSlot)) {
                return;
            }
            const exitFns = [];
            for (let i = 0; i < props.length; i++) {
                const prop = props[i];
                if (prop.type === 7 /* NodeTypes.DIRECTIVE */ && matches(prop.name)) {
                    // structural directives are removed to avoid infinite recursion
                    // also we remove them *before* applying so that it can further
                    // traverse itself in case it moves the node around
                    props.splice(i, 1);
                    i--;
                    const onExit = fn(node, prop, context);
                    if (onExit)
                        exitFns.push(onExit);
                }
            }
            return exitFns;
        }
    };
}

const PURE_ANNOTATION = `/*#__PURE__*/`;
const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, { mode = 'function', prefixIdentifiers = mode === 'module', sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = 'vue/server-renderer', ssr = false, isTS = false, inSSR = false }) {
    const context = {
        mode,
        prefixIdentifiers,
        sourceMap,
        filename,
        scopeId,
        optimizeImports,
        runtimeGlobalName,
        runtimeModuleName,
        ssrRuntimeModuleName,
        ssr,
        isTS,
        inSSR,
        source: ast.loc.source,
        code: ``,
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: false,
        map: undefined,
        helper(key) {
            return `_${helperNameMap[key]}`;
        },
        push(code, node) {
            context.code += code;
        },
        indent() {
            newline(++context.indentLevel);
        },
        deindent(withoutNewLine = false) {
            if (withoutNewLine) {
                --context.indentLevel;
            }
            else {
                newline(--context.indentLevel);
            }
        },
        newline() {
            newline(context.indentLevel);
        }
    };
    function newline(n) {
        context.push('\n' + `  `.repeat(n));
    }
    return context;
}
function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated)
        options.onContextCreated(context);
    const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
    const helpers = Array.from(ast.helpers);
    const hasHelpers = helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== 'module';
    const isSetupInlined = !true ;
    // preambles
    // in setup() inline mode, the preamble is generated in a sub context
    // and returned separately.
    const preambleContext = isSetupInlined
        ? createCodegenContext(ast, options)
        : context;
    {
        genFunctionPreamble(ast, preambleContext);
    }
    // enter render function
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
    const signature = args.join(', ');
    {
        push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
        push(`with (_ctx) {`);
        indent();
        // function mode const declarations should be inside with block
        // also they should be renamed to avoid collision with user properties
        if (hasHelpers) {
            push(`const { ${helpers.map(aliasHelper).join(', ')} } = _Vue`);
            push(`\n`);
            newline();
        }
    }
    // generate asset resolution statements
    if (ast.components.length) {
        genAssets(ast.components, 'component', context);
        if (ast.directives.length || ast.temps > 0) {
            newline();
        }
    }
    if (ast.directives.length) {
        genAssets(ast.directives, 'directive', context);
        if (ast.temps > 0) {
            newline();
        }
    }
    if (ast.filters && ast.filters.length) {
        newline();
        genAssets(ast.filters, 'filter', context);
        newline();
    }
    if (ast.temps > 0) {
        push(`let `);
        for (let i = 0; i < ast.temps; i++) {
            push(`${i > 0 ? `, ` : ``}_temp${i}`);
        }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
        push(`\n`);
        newline();
    }
    // generate the VNode tree expression
    if (!ssr) {
        push(`return `);
    }
    if (ast.codegenNode) {
        genNode(ast.codegenNode, context);
    }
    else {
        push(`null`);
    }
    if (useWithBlock) {
        deindent();
        push(`}`);
    }
    deindent();
    push(`}`);
    return {
        ast,
        code: context.code,
        preamble: isSetupInlined ? preambleContext.code : ``,
        // SourceMapGenerator does have toJSON() method but it's not in the types
        map: context.map ? context.map.toJSON() : undefined
    };
}
function genFunctionPreamble(ast, context) {
    const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
    const VueBinding = runtimeGlobalName;
    // Generate const declaration for helpers
    // In prefix mode, we place the const declaration at top so it's done
    // only once; But if we not prefixing, we place the declaration inside the
    // with block so it doesn't incur the `in` check cost for every helper access.
    const helpers = Array.from(ast.helpers);
    if (helpers.length > 0) {
        {
            // "with" mode.
            // save Vue in a separate variable to avoid collision
            push(`const _Vue = ${VueBinding}\n`);
            // in "with" mode, helpers are declared inside the with block to avoid
            // has check cost, but hoists are lifted out of the function - we need
            // to provide the helper here.
            if (ast.hoists.length) {
                const staticHelpers = [
                    CREATE_VNODE,
                    CREATE_ELEMENT_VNODE,
                    CREATE_COMMENT,
                    CREATE_TEXT,
                    CREATE_STATIC
                ]
                    .filter(helper => helpers.includes(helper))
                    .map(aliasHelper)
                    .join(', ');
                push(`const { ${staticHelpers} } = _Vue\n`);
            }
        }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
    const resolver = helper(type === 'filter'
        ? RESOLVE_FILTER
        : type === 'component'
            ? RESOLVE_COMPONENT
            : RESOLVE_DIRECTIVE);
    for (let i = 0; i < assets.length; i++) {
        let id = assets[i];
        // potential component implicit self-reference inferred from SFC filename
        const maybeSelfReference = id.endsWith('__self');
        if (maybeSelfReference) {
            id = id.slice(0, -6);
        }
        push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
        if (i < assets.length - 1) {
            newline();
        }
    }
}
function genHoists(hoists, context) {
    if (!hoists.length) {
        return;
    }
    context.pure = true;
    const { push, newline, helper, scopeId, mode } = context;
    newline();
    for (let i = 0; i < hoists.length; i++) {
        const exp = hoists[i];
        if (exp) {
            push(`const _hoisted_${i + 1} = ${``}`);
            genNode(exp, context);
            newline();
        }
    }
    context.pure = false;
}
function isText(n) {
    return (isString(n) ||
        n.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ ||
        n.type === 2 /* NodeTypes.TEXT */ ||
        n.type === 5 /* NodeTypes.INTERPOLATION */ ||
        n.type === 8 /* NodeTypes.COMPOUND_EXPRESSION */);
}
function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 ||
        ((( false)) && 0);
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if ((0,shared_esm_bundler.isString)(node)) {
            push(node);
        }
        else if ((0,shared_esm_bundler.isArray)(node)) {
            genNodeListAsArray(node, context);
        }
        else {
            genNode(node, context);
        }
        if (i < nodes.length - 1) {
            if (multilines) {
                comma && push(',');
                newline();
            }
            else {
                comma && push(', ');
            }
        }
    }
}
function genNode(node, context) {
    if ((0,shared_esm_bundler.isString)(node)) {
        context.push(node);
        return;
    }
    if ((0,shared_esm_bundler.isSymbol)(node)) {
        context.push(context.helper(node));
        return;
    }
    switch (node.type) {
        case 1 /* NodeTypes.ELEMENT */:
        case 9 /* NodeTypes.IF */:
        case 11 /* NodeTypes.FOR */:
            ( false) &&
                0;
            genNode(node.codegenNode, context);
            break;
        case 2 /* NodeTypes.TEXT */:
            genText(node, context);
            break;
        case 4 /* NodeTypes.SIMPLE_EXPRESSION */:
            genExpression(node, context);
            break;
        case 5 /* NodeTypes.INTERPOLATION */:
            genInterpolation(node, context);
            break;
        case 12 /* NodeTypes.TEXT_CALL */:
            genNode(node.codegenNode, context);
            break;
        case 8 /* NodeTypes.COMPOUND_EXPRESSION */:
            genCompoundExpression(node, context);
            break;
        case 3 /* NodeTypes.COMMENT */:
            genComment(node, context);
            break;
        case 13 /* NodeTypes.VNODE_CALL */:
            genVNodeCall(node, context);
            break;
        case 14 /* NodeTypes.JS_CALL_EXPRESSION */:
            genCallExpression(node, context);
            break;
        case 15 /* NodeTypes.JS_OBJECT_EXPRESSION */:
            genObjectExpression(node, context);
            break;
        case 17 /* NodeTypes.JS_ARRAY_EXPRESSION */:
            genArrayExpression(node, context);
            break;
        case 18 /* NodeTypes.JS_FUNCTION_EXPRESSION */:
            genFunctionExpression(node, context);
            break;
        case 19 /* NodeTypes.JS_CONDITIONAL_EXPRESSION */:
            genConditionalExpression(node, context);
            break;
        case 20 /* NodeTypes.JS_CACHE_EXPRESSION */:
            genCacheExpression(node, context);
            break;
        case 21 /* NodeTypes.JS_BLOCK_STATEMENT */:
            genNodeList(node.body, context, true, false);
            break;
        // SSR only types
        case 22 /* NodeTypes.JS_TEMPLATE_LITERAL */:
            break;
        case 23 /* NodeTypes.JS_IF_STATEMENT */:
            break;
        case 24 /* NodeTypes.JS_ASSIGNMENT_EXPRESSION */:
            break;
        case 25 /* NodeTypes.JS_SEQUENCE_EXPRESSION */:
            break;
        case 26 /* NodeTypes.JS_RETURN_STATEMENT */:
            break;
        /* istanbul ignore next */
        case 10 /* NodeTypes.IF_BRANCH */:
            // noop
            break;
        default:
            if ((false)) {}
    }
}
function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
}
function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
}
function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure)
        push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
}
function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if ((0,shared_esm_bundler.isString)(child)) {
            context.push(child);
        }
        else {
            genNode(child, context);
        }
    }
}
function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8 /* NodeTypes.COMPOUND_EXPRESSION */) {
        push(`[`);
        genCompoundExpression(node, context);
        push(`]`);
    }
    else if (node.isStatic) {
        // only quote keys if necessary
        const text = isSimpleIdentifier(node.content)
            ? node.content
            : JSON.stringify(node.content);
        push(text, node);
    }
    else {
        push(`[${node.content}]`, node);
    }
}
function genComment(node, context) {
    const { push, helper, pure } = context;
    if (pure) {
        push(PURE_ANNOTATION);
    }
    push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
}
function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent } = node;
    if (directives) {
        push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
        push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
        push(PURE_ANNOTATION);
    }
    const callHelper = isBlock
        ? getVNodeBlockHelper(context.inSSR, isComponent)
        : getVNodeHelper(context.inSSR, isComponent);
    push(helper(callHelper) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
        push(`)`);
    }
    if (directives) {
        push(`, `);
        genNode(directives, context);
        push(`)`);
    }
}
function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
        if (args[i] != null)
            break;
    }
    return args.slice(0, i + 1).map(arg => arg || `null`);
}
// JavaScript
function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = (0,shared_esm_bundler.isString)(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
        push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
}
function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
        push(`{}`, node);
        return;
    }
    const multilines = properties.length > 1 ||
        ((( false)) &&
            0);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
        const { key, value } = properties[i];
        // key
        genExpressionAsPropertyKey(key, context);
        push(`: `);
        // value
        genNode(value, context);
        if (i < properties.length - 1) {
            // will only reach this if it's multilines
            push(`,`);
            newline();
        }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
    const { push, indent, deindent } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) {
        // wrap slot functions with owner context
        push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if ((0,shared_esm_bundler.isArray)(params)) {
        genNodeList(params, context);
    }
    else if (params) {
        genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
        push(`{`);
        indent();
    }
    if (returns) {
        if (newline) {
            push(`return `);
        }
        if ((0,shared_esm_bundler.isArray)(returns)) {
            genNodeListAsArray(returns, context);
        }
        else {
            genNode(returns, context);
        }
    }
    else if (body) {
        genNode(body, context);
    }
    if (newline || body) {
        deindent();
        push(`}`);
    }
    if (isSlot) {
        if (node.isNonScopedSlot) {
            push(`, undefined, true`);
        }
        push(`)`);
    }
}
function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        const needsParens = !isSimpleIdentifier(test.content);
        needsParens && push(`(`);
        genExpression(test, context);
        needsParens && push(`)`);
    }
    else {
        push(`(`);
        genNode(test, context);
        push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19 /* NodeTypes.JS_CONDITIONAL_EXPRESSION */;
    if (!isNested) {
        context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
        context.indentLevel--;
    }
    needNewline && deindent(true /* without newline */);
}
function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
        indent();
        push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
        newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
        push(`,`);
        newline();
        push(`${helper(SET_BLOCK_TRACKING)}(1),`);
        newline();
        push(`_cache[${node.index}]`);
        deindent();
    }
    push(`)`);
}

function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = Object.create(null)) {
    {
        return;
    }
}
function isReferencedIdentifier(id, parent, parentStack) {
    {
        return false;
    }
}
function isInDestructureAssignment(parent, parentStack) {
    if (parent &&
        (parent.type === 'ObjectProperty' || parent.type === 'ArrayPattern')) {
        let i = parentStack.length;
        while (i--) {
            const p = parentStack[i];
            if (p.type === 'AssignmentExpression') {
                return true;
            }
            else if (p.type !== 'ObjectProperty' && !p.type.endsWith('Pattern')) {
                break;
            }
        }
    }
    return false;
}
function walkFunctionParams(node, onIdent) {
    for (const p of node.params) {
        for (const id of extractIdentifiers(p)) {
            onIdent(id);
        }
    }
}
function walkBlockDeclarations(block, onIdent) {
    for (const stmt of block.body) {
        if (stmt.type === 'VariableDeclaration') {
            if (stmt.declare)
                continue;
            for (const decl of stmt.declarations) {
                for (const id of extractIdentifiers(decl.id)) {
                    onIdent(id);
                }
            }
        }
        else if (stmt.type === 'FunctionDeclaration' ||
            stmt.type === 'ClassDeclaration') {
            if (stmt.declare || !stmt.id)
                continue;
            onIdent(stmt.id);
        }
    }
}
function extractIdentifiers(param, nodes = []) {
    switch (param.type) {
        case 'Identifier':
            nodes.push(param);
            break;
        case 'MemberExpression':
            let object = param;
            while (object.type === 'MemberExpression') {
                object = object.object;
            }
            nodes.push(object);
            break;
        case 'ObjectPattern':
            for (const prop of param.properties) {
                if (prop.type === 'RestElement') {
                    extractIdentifiers(prop.argument, nodes);
                }
                else {
                    extractIdentifiers(prop.value, nodes);
                }
            }
            break;
        case 'ArrayPattern':
            param.elements.forEach(element => {
                if (element)
                    extractIdentifiers(element, nodes);
            });
            break;
        case 'RestElement':
            extractIdentifiers(param.argument, nodes);
            break;
        case 'AssignmentPattern':
            extractIdentifiers(param.left, nodes);
            break;
    }
    return nodes;
}
const isFunctionType = (node) => {
    return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};
const isStaticProperty = (node) => node &&
    (node.type === 'ObjectProperty' || node.type === 'ObjectMethod') &&
    !node.computed;
const isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;

// these keywords should not appear inside expressions, but operators like
// 'typeof', 'instanceof', and 'in' are allowed
const prohibitedKeywordRE = new RegExp('\\b' +
    ('arguments,await,break,case,catch,class,const,continue,debugger,default,' +
        'delete,do,else,export,extends,finally,for,function,if,import,let,new,' +
        'return,super,switch,throw,try,var,void,while,with,yield')
        .split(',')
        .join('\\b|\\b') +
    '\\b');
// strip strings in expressions
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */
function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    // empty expressions are validated per-directive since some directives
    // do allow empty expressions.
    if (!exp.trim()) {
        return;
    }
    try {
        new Function(asRawStatements
            ? ` ${exp} `
            : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    }
    catch (e) {
        let message = e.message;
        const keywordMatch = exp
            .replace(stripStringRE, '')
            .match(prohibitedKeywordRE);
        if (keywordMatch) {
            message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
        }
        context.onError(createCompilerError(45 /* ErrorCodes.X_INVALID_EXPRESSION */, node.loc, undefined, message));
    }
}

const transformExpression = (node, context) => {
    if (node.type === 5 /* NodeTypes.INTERPOLATION */) {
        node.content = processExpression(node.content, context);
    }
    else if (node.type === 1 /* NodeTypes.ELEMENT */) {
        // handle directives on element
        for (let i = 0; i < node.props.length; i++) {
            const dir = node.props[i];
            // do not process for v-on & v-for since they are special handled
            if (dir.type === 7 /* NodeTypes.DIRECTIVE */ && dir.name !== 'for') {
                const exp = dir.exp;
                const arg = dir.arg;
                // do not process exp if this is v-on:arg - we need special handling
                // for wrapping inline statements.
                if (exp &&
                    exp.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ &&
                    !(dir.name === 'on' && arg)) {
                    dir.exp = processExpression(exp, context, 
                    // slot args must be processed as function params
                    dir.name === 'slot');
                }
                if (arg && arg.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ && !arg.isStatic) {
                    dir.arg = processExpression(arg, context);
                }
            }
        }
    }
};
// Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.
function processExpression(node, context, 
// some expressions like v-slot props & v-for aliases should be parsed as
// function params
asParams = false, 
// v-on handler values may contain multiple statements
asRawStatements = false, localVars = Object.create(context.identifiers)) {
    {
        if ((false)) {}
        return node;
    }
}
function stringifyExpression(exp) {
    if ((0,shared_esm_bundler.isString)(exp)) {
        return exp;
    }
    else if (exp.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        return exp.content;
    }
    else {
        return exp.children
            .map(stringifyExpression)
            .join('');
    }
}

const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        // #1587: We need to dynamically increment the key based on the current
        // node's sibling nodes, since chained v-if/else branches are
        // rendered at the same depth
        const siblings = context.parent.children;
        let i = siblings.indexOf(ifNode);
        let key = 0;
        while (i-- >= 0) {
            const sibling = siblings[i];
            if (sibling && sibling.type === 9 /* NodeTypes.IF */) {
                key += sibling.branches.length;
            }
        }
        // Exit callback. Complete the codegenNode when all children have been
        // transformed.
        return () => {
            if (isRoot) {
                ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
            }
            else {
                // attach this branch's codegen node to the v-if root.
                const parentCondition = getParentCondition(ifNode.codegenNode);
                parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
            }
        };
    });
});
// target-agnostic transform used for both Client and SSR
function processIf(node, dir, context, processCodegen) {
    if (dir.name !== 'else' &&
        (!dir.exp || !dir.exp.content.trim())) {
        const loc = dir.exp ? dir.exp.loc : node.loc;
        context.onError(createCompilerError(28 /* ErrorCodes.X_V_IF_NO_EXPRESSION */, dir.loc));
        dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (false) {}
    if (dir.name === 'if') {
        const branch = createIfBranch(node, dir);
        const ifNode = {
            type: 9 /* NodeTypes.IF */,
            loc: node.loc,
            branches: [branch]
        };
        context.replaceNode(ifNode);
        if (processCodegen) {
            return processCodegen(ifNode, branch, true);
        }
    }
    else {
        // locate the adjacent v-if
        const siblings = context.parent.children;
        const comments = [];
        let i = siblings.indexOf(node);
        while (i-- >= -1) {
            const sibling = siblings[i];
            if (sibling && sibling.type === 3 /* NodeTypes.COMMENT */) {
                context.removeNode(sibling);
                ( false) && 0;
                continue;
            }
            if (sibling &&
                sibling.type === 2 /* NodeTypes.TEXT */ &&
                !sibling.content.trim().length) {
                context.removeNode(sibling);
                continue;
            }
            if (sibling && sibling.type === 9 /* NodeTypes.IF */) {
                // Check if v-else was followed by v-else-if
                if (dir.name === 'else-if' &&
                    sibling.branches[sibling.branches.length - 1].condition === undefined) {
                    context.onError(createCompilerError(30 /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */, node.loc));
                }
                // move the node to the if node's branches
                context.removeNode();
                const branch = createIfBranch(node, dir);
                if (false) {}
                // check if user is forcing same key on different branches
                if (false) {}
                sibling.branches.push(branch);
                const onExit = processCodegen && processCodegen(sibling, branch, false);
                // since the branch was removed, it will not be traversed.
                // make sure to traverse here.
                traverseNode(branch, context);
                // call on exit
                if (onExit)
                    onExit();
                // make sure to reset currentNode after traversal to indicate this
                // node has been removed.
                context.currentNode = null;
            }
            else {
                context.onError(createCompilerError(30 /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */, node.loc));
            }
            break;
        }
    }
}
function createIfBranch(node, dir) {
    const isTemplateIf = node.tagType === 3 /* ElementTypes.TEMPLATE */;
    return {
        type: 10 /* NodeTypes.IF_BRANCH */,
        loc: node.loc,
        condition: dir.name === 'else' ? undefined : dir.exp,
        children: isTemplateIf && !findDir(node, 'for') ? node.children : [node],
        userKey: findProp(node, `key`),
        isTemplateIf
    };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
        return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), 
        // make sure to pass in asBlock: true so that the comment node call
        // closes the current block.
        createCallExpression(context.helper(CREATE_COMMENT), [
            ( false) ? 0 : '""',
            'true'
        ]));
    }
    else {
        return createChildrenCodegenNode(branch, keyIndex, context);
    }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2 /* ConstantTypes.CAN_HOIST */));
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1 /* NodeTypes.ELEMENT */;
    if (needFragmentWrapper) {
        if (children.length === 1 && firstChild.type === 11 /* NodeTypes.FOR */) {
            // optimize away nested fragments when child is a ForNode
            const vnodeCall = firstChild.codegenNode;
            injectProp(vnodeCall, keyProperty, context);
            return vnodeCall;
        }
        else {
            let patchFlag = 64 /* PatchFlags.STABLE_FRAGMENT */;
            let patchFlagText = shared_esm_bundler.PatchFlagNames[64];
            // check if the fragment actually contains a single valid child with
            // the rest being comments
            if (false) {}
            return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + (( false) ? 0 : ``), undefined, undefined, true, false, false /* isComponent */, branch.loc);
        }
    }
    else {
        const ret = firstChild.codegenNode;
        const vnodeCall = getMemoedVNodeCall(ret);
        // Change createVNode to createBlock.
        if (vnodeCall.type === 13 /* NodeTypes.VNODE_CALL */) {
            makeBlock(vnodeCall, context);
        }
        // inject branch key
        injectProp(vnodeCall, keyProperty, context);
        return ret;
    }
}
function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
        return false;
    }
    if (a.type === 6 /* NodeTypes.ATTRIBUTE */) {
        if (a.value.content !== b.value.content) {
            return false;
        }
    }
    else {
        // directive
        const exp = a.exp;
        const branchExp = b.exp;
        if (exp.type !== branchExp.type) {
            return false;
        }
        if (exp.type !== 4 /* NodeTypes.SIMPLE_EXPRESSION */ ||
            exp.isStatic !== branchExp.isStatic ||
            exp.content !== branchExp.content) {
            return false;
        }
    }
    return true;
}
function getParentCondition(node) {
    while (true) {
        if (node.type === 19 /* NodeTypes.JS_CONDITIONAL_EXPRESSION */) {
            if (node.alternate.type === 19 /* NodeTypes.JS_CONDITIONAL_EXPRESSION */) {
                node = node.alternate;
            }
            else {
                return node;
            }
        }
        else if (node.type === 20 /* NodeTypes.JS_CACHE_EXPRESSION */) {
            node = node.value;
        }
    }
}

const transformFor = createStructuralDirectiveTransform('for', (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, forNode => {
        // create the loop render function expression now, and add the
        // iterator on exit after all children have been traversed
        const renderExp = createCallExpression(helper(RENDER_LIST), [
            forNode.source
        ]);
        const isTemplate = isTemplateNode(node);
        const memo = findDir(node, 'memo');
        const keyProp = findProp(node, `key`);
        const keyExp = keyProp &&
            (keyProp.type === 6 /* NodeTypes.ATTRIBUTE */
                ? createSimpleExpression(keyProp.value.content, true)
                : keyProp.exp);
        const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
        const isStableFragment = forNode.source.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ &&
            forNode.source.constType > 0 /* ConstantTypes.NOT_CONSTANT */;
        const fragmentFlag = isStableFragment
            ? 64 /* PatchFlags.STABLE_FRAGMENT */
            : keyProp
                ? 128 /* PatchFlags.KEYED_FRAGMENT */
                : 256 /* PatchFlags.UNKEYED_FRAGMENT */;
        forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag +
            (( false) ? 0 : ``), undefined, undefined, true /* isBlock */, !isStableFragment /* disableTracking */, false /* isComponent */, node.loc);
        return () => {
            // finish the codegen now that all children have been traversed
            let childBlock;
            const { children } = forNode;
            // check <template v-for> key placement
            if (false) {}
            const needFragmentWrapper = children.length !== 1 || children[0].type !== 1 /* NodeTypes.ELEMENT */;
            const slotOutlet = isSlotOutlet(node)
                ? node
                : isTemplate &&
                    node.children.length === 1 &&
                    isSlotOutlet(node.children[0])
                    ? node.children[0] // api-extractor somehow fails to infer this
                    : null;
            if (slotOutlet) {
                // <slot v-for="..."> or <template v-for="..."><slot/></template>
                childBlock = slotOutlet.codegenNode;
                if (isTemplate && keyProperty) {
                    // <template v-for="..." :key="..."><slot/></template>
                    // we need to inject the key to the renderSlot() call.
                    // the props for renderSlot is passed as the 3rd argument.
                    injectProp(childBlock, keyProperty, context);
                }
            }
            else if (needFragmentWrapper) {
                // <template v-for="..."> with text or multi-elements
                // should generate a fragment block for each loop
                childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64 /* PatchFlags.STABLE_FRAGMENT */ +
                    (( false)
                        ? 0
                        : ``), undefined, undefined, true, undefined, false /* isComponent */);
            }
            else {
                // Normal element v-for. Directly use the child's codegenNode
                // but mark it as a block.
                childBlock = children[0]
                    .codegenNode;
                if (isTemplate && keyProperty) {
                    injectProp(childBlock, keyProperty, context);
                }
                if (childBlock.isBlock !== !isStableFragment) {
                    if (childBlock.isBlock) {
                        // switch from block to vnode
                        removeHelper(OPEN_BLOCK);
                        removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                    }
                    else {
                        // switch from vnode to block
                        removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                    }
                }
                childBlock.isBlock = !isStableFragment;
                if (childBlock.isBlock) {
                    helper(OPEN_BLOCK);
                    helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                }
                else {
                    helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                }
            }
            if (memo) {
                const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [
                    createSimpleExpression(`_cached`)
                ]));
                loop.body = createBlockStatement([
                    createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
                    createCompoundExpression([
                        `if (_cached`,
                        ...(keyExp ? [` && _cached.key === `, keyExp] : []),
                        ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
                    ]),
                    createCompoundExpression([`const _item = `, childBlock]),
                    createSimpleExpression(`_item.memo = _memo`),
                    createSimpleExpression(`return _item`)
                ]);
                renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
            }
            else {
                renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true /* force newline */));
            }
        };
    });
});
// target-agnostic transform used for both Client and SSR
function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
        context.onError(createCompilerError(31 /* ErrorCodes.X_V_FOR_NO_EXPRESSION */, dir.loc));
        return;
    }
    const parseResult = parseForExpression(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    dir.exp, context);
    if (!parseResult) {
        context.onError(createCompilerError(32 /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */, dir.loc));
        return;
    }
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
        type: 11 /* NodeTypes.FOR */,
        loc: dir.loc,
        source,
        valueAlias: value,
        keyAlias: key,
        objectIndexAlias: index,
        parseResult,
        children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    // bookkeeping
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
        scopes.vFor--;
        if (onExit)
            onExit();
    };
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
// This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch)
        return;
    const [, LHS, RHS] = inMatch;
    const result = {
        source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
        value: undefined,
        key: undefined,
        index: undefined
    };
    if (false) {}
    let valueContent = LHS.trim().replace(stripParensRE, '').trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
        valueContent = valueContent.replace(forIteratorRE, '').trim();
        const keyContent = iteratorMatch[1].trim();
        let keyOffset;
        if (keyContent) {
            keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
            result.key = createAliasExpression(loc, keyContent, keyOffset);
            if (false) {}
        }
        if (iteratorMatch[2]) {
            const indexContent = iteratorMatch[2].trim();
            if (indexContent) {
                result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key
                    ? keyOffset + keyContent.length
                    : trimmedOffset + valueContent.length));
                if (false) {}
            }
        }
    }
    if (valueContent) {
        result.value = createAliasExpression(loc, valueContent, trimmedOffset);
        if (false) {}
    }
    return result;
}
function createAliasExpression(range, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
    return createParamsList([value, key, index, ...memoArgs]);
}
function createParamsList(args) {
    let i = args.length;
    while (i--) {
        if (args[i])
            break;
    }
    return args
        .slice(0, i + 1)
        .map((arg, i) => arg || createSimpleExpression(`_`.repeat(i + 1), false));
}

const defaultFallback = createSimpleExpression(`undefined`, false);
// A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.
const trackSlotScopes = (node, context) => {
    if (node.type === 1 /* NodeTypes.ELEMENT */ &&
        (node.tagType === 1 /* ElementTypes.COMPONENT */ ||
            node.tagType === 3 /* ElementTypes.TEMPLATE */)) {
        // We are only checking non-empty v-slot here
        // since we only care about slots that introduce scope variables.
        const vSlot = findDir(node, 'slot');
        if (vSlot) {
            vSlot.exp;
            context.scopes.vSlot++;
            return () => {
                context.scopes.vSlot--;
            };
        }
    }
};
// A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }
const trackVForSlotScopes = (node, context) => {
    let vFor;
    if (isTemplateNode(node) &&
        node.props.some(isVSlot) &&
        (vFor = findDir(node, 'for'))) {
        const result = (vFor.parseResult = parseForExpression(vFor.exp, context));
        if (result) {
            const { value, key, index } = result;
            const { addIdentifiers, removeIdentifiers } = context;
            value && addIdentifiers(value);
            key && addIdentifiers(key);
            index && addIdentifiers(index);
            return () => {
                value && removeIdentifiers(value);
                key && removeIdentifiers(key);
                index && removeIdentifiers(index);
            };
        }
    }
};
const buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false /* newline */, true /* isSlot */, children.length ? children[0].loc : loc);
// Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    // If the slot is inside a v-for or another v-slot, force it to be dynamic
    // since it likely uses a scope variable.
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    // 1. Check for slot with slotProps on component itself.
    //    <Comp v-slot="{ prop }"/>
    const onComponentSlot = findDir(node, 'slot', true);
    if (onComponentSlot) {
        const { arg, exp } = onComponentSlot;
        if (arg && !isStaticExp(arg)) {
            hasDynamicSlots = true;
        }
        slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
    }
    // 2. Iterate through children and check for template slots
    //    <template v-slot:foo="{ prop }">
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = new Set();
    let conditionalBranchIndex = 0;
    for (let i = 0; i < children.length; i++) {
        const slotElement = children[i];
        let slotDir;
        if (!isTemplateNode(slotElement) ||
            !(slotDir = findDir(slotElement, 'slot', true))) {
            // not a <template v-slot>, skip.
            if (slotElement.type !== 3 /* NodeTypes.COMMENT */) {
                implicitDefaultChildren.push(slotElement);
            }
            continue;
        }
        if (onComponentSlot) {
            // already has on-component slot - this is incorrect usage.
            context.onError(createCompilerError(37 /* ErrorCodes.X_V_SLOT_MIXED_SLOT_USAGE */, slotDir.loc));
            break;
        }
        hasTemplateSlots = true;
        const { children: slotChildren, loc: slotLoc } = slotElement;
        const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
        // check if name is dynamic.
        let staticSlotName;
        if (isStaticExp(slotName)) {
            staticSlotName = slotName ? slotName.content : `default`;
        }
        else {
            hasDynamicSlots = true;
        }
        const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
        // check if this slot is conditional (v-if/v-for)
        let vIf;
        let vElse;
        let vFor;
        if ((vIf = findDir(slotElement, 'if'))) {
            hasDynamicSlots = true;
            dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
        }
        else if ((vElse = findDir(slotElement, /^else(-if)?$/, true /* allowEmpty */))) {
            // find adjacent v-if
            let j = i;
            let prev;
            while (j--) {
                prev = children[j];
                if (prev.type !== 3 /* NodeTypes.COMMENT */) {
                    break;
                }
            }
            if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
                // remove node
                children.splice(i, 1);
                i--;
                // attach this slot to previous conditional
                let conditional = dynamicSlots[dynamicSlots.length - 1];
                while (conditional.alternate.type === 19 /* NodeTypes.JS_CONDITIONAL_EXPRESSION */) {
                    conditional = conditional.alternate;
                }
                conditional.alternate = vElse.exp
                    ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback)
                    : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
            }
            else {
                context.onError(createCompilerError(30 /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */, vElse.loc));
            }
        }
        else if ((vFor = findDir(slotElement, 'for'))) {
            hasDynamicSlots = true;
            const parseResult = vFor.parseResult ||
                parseForExpression(vFor.exp, context);
            if (parseResult) {
                // Render the dynamic slots as an array and add it to the createSlot()
                // args. The runtime knows how to handle it appropriately.
                dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
                    parseResult.source,
                    createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true /* force newline */)
                ]));
            }
            else {
                context.onError(createCompilerError(32 /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */, vFor.loc));
            }
        }
        else {
            // check duplicate static names
            if (staticSlotName) {
                if (seenSlotNames.has(staticSlotName)) {
                    context.onError(createCompilerError(38 /* ErrorCodes.X_V_SLOT_DUPLICATE_SLOT_NAMES */, dirLoc));
                    continue;
                }
                seenSlotNames.add(staticSlotName);
                if (staticSlotName === 'default') {
                    hasNamedDefaultSlot = true;
                }
            }
            slotsProperties.push(createObjectProperty(slotName, slotFunction));
        }
    }
    if (!onComponentSlot) {
        const buildDefaultSlotProperty = (props, children) => {
            const fn = buildSlotFn(props, children, loc);
            if (context.compatConfig) {
                fn.isNonScopedSlot = true;
            }
            return createObjectProperty(`default`, fn);
        };
        if (!hasTemplateSlots) {
            // implicit default slot (on component)
            slotsProperties.push(buildDefaultSlotProperty(undefined, children));
        }
        else if (implicitDefaultChildren.length &&
            // #3766
            // with whitespace: 'preserve', whitespaces between slots will end up in
            // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
            implicitDefaultChildren.some(node => isNonWhitespaceContent(node))) {
            // implicit default slot (mixed with named slots)
            if (hasNamedDefaultSlot) {
                context.onError(createCompilerError(39 /* ErrorCodes.X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */, implicitDefaultChildren[0].loc));
            }
            else {
                slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
            }
        }
    }
    const slotFlag = hasDynamicSlots
        ? 2 /* SlotFlags.DYNAMIC */
        : hasForwardedSlots(node.children)
            ? 3 /* SlotFlags.FORWARDED */
            : 1 /* SlotFlags.STABLE */;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, 
    // 2 = compiled but dynamic = can skip normalization, but must run diff
    // 1 = compiled and static = can skip normalization AND diff as optimized
    createSimpleExpression(slotFlag + (( false) ? 0 : ``), false))), loc);
    if (dynamicSlots.length) {
        slots = createCallExpression(context.helper(CREATE_SLOTS), [
            slots,
            createArrayExpression(dynamicSlots)
        ]);
    }
    return {
        slots,
        hasDynamicSlots
    };
}
function buildDynamicSlot(name, fn, index) {
    const props = [
        createObjectProperty(`name`, name),
        createObjectProperty(`fn`, fn)
    ];
    if (index != null) {
        props.push(createObjectProperty(`key`, createSimpleExpression(String(index), true)));
    }
    return createObjectExpression(props);
}
function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        switch (child.type) {
            case 1 /* NodeTypes.ELEMENT */:
                if (child.tagType === 2 /* ElementTypes.SLOT */ ||
                    hasForwardedSlots(child.children)) {
                    return true;
                }
                break;
            case 9 /* NodeTypes.IF */:
                if (hasForwardedSlots(child.branches))
                    return true;
                break;
            case 10 /* NodeTypes.IF_BRANCH */:
            case 11 /* NodeTypes.FOR */:
                if (hasForwardedSlots(child.children))
                    return true;
                break;
        }
    }
    return false;
}
function isNonWhitespaceContent(node) {
    if (node.type !== 2 /* NodeTypes.TEXT */ && node.type !== 12 /* NodeTypes.TEXT_CALL */)
        return true;
    return node.type === 2 /* NodeTypes.TEXT */
        ? !!node.content.trim()
        : isNonWhitespaceContent(node.content);
}

// some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.
const directiveImportMap = new WeakMap();
// generate a JavaScript AST for this element's codegen
const transformElement = (node, context) => {
    // perform the work on exit, after all child expressions have been
    // processed and merged.
    return function postTransformElement() {
        node = context.currentNode;
        if (!(node.type === 1 /* NodeTypes.ELEMENT */ &&
            (node.tagType === 0 /* ElementTypes.ELEMENT */ ||
                node.tagType === 1 /* ElementTypes.COMPONENT */))) {
            return;
        }
        const { tag, props } = node;
        const isComponent = node.tagType === 1 /* ElementTypes.COMPONENT */;
        // The goal of the transform is to create a codegenNode implementing the
        // VNodeCall interface.
        let vnodeTag = isComponent
            ? resolveComponentType(node, context)
            : `"${tag}"`;
        const isDynamicComponent = (0,shared_esm_bundler.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
        let vnodeProps;
        let vnodeChildren;
        let vnodePatchFlag;
        let patchFlag = 0;
        let vnodeDynamicProps;
        let dynamicPropNames;
        let vnodeDirectives;
        let shouldUseBlock = 
        // dynamic component may resolve to plain elements
        isDynamicComponent ||
            vnodeTag === TELEPORT ||
            vnodeTag === SUSPENSE ||
            (!isComponent &&
                // <svg> and <foreignObject> must be forced into blocks so that block
                // updates inside get proper isSVG flag at runtime. (#639, #643)
                // This is technically web-specific, but splitting the logic out of core
                // leads to too much unnecessary complexity.
                (tag === 'svg' || tag === 'foreignObject'));
        // props
        if (props.length > 0) {
            const propsBuildResult = buildProps(node, context, undefined, isComponent, isDynamicComponent);
            vnodeProps = propsBuildResult.props;
            patchFlag = propsBuildResult.patchFlag;
            dynamicPropNames = propsBuildResult.dynamicPropNames;
            const directives = propsBuildResult.directives;
            vnodeDirectives =
                directives && directives.length
                    ? createArrayExpression(directives.map(dir => buildDirectiveArgs(dir, context)))
                    : undefined;
            if (propsBuildResult.shouldUseBlock) {
                shouldUseBlock = true;
            }
        }
        // children
        if (node.children.length > 0) {
            if (vnodeTag === KEEP_ALIVE) {
                // Although a built-in component, we compile KeepAlive with raw children
                // instead of slot functions so that it can be used inside Transition
                // or other Transition-wrapping HOCs.
                // To ensure correct updates with block optimizations, we need to:
                // 1. Force keep-alive into a block. This avoids its children being
                //    collected by a parent block.
                shouldUseBlock = true;
                // 2. Force keep-alive to always be updated, since it uses raw children.
                patchFlag |= 1024 /* PatchFlags.DYNAMIC_SLOTS */;
                if (false) {}
            }
            const shouldBuildAsSlots = isComponent &&
                // Teleport is not a real component and has dedicated runtime handling
                vnodeTag !== TELEPORT &&
                // explained above.
                vnodeTag !== KEEP_ALIVE;
            if (shouldBuildAsSlots) {
                const { slots, hasDynamicSlots } = buildSlots(node, context);
                vnodeChildren = slots;
                if (hasDynamicSlots) {
                    patchFlag |= 1024 /* PatchFlags.DYNAMIC_SLOTS */;
                }
            }
            else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
                const child = node.children[0];
                const type = child.type;
                // check for dynamic text children
                const hasDynamicTextChild = type === 5 /* NodeTypes.INTERPOLATION */ ||
                    type === 8 /* NodeTypes.COMPOUND_EXPRESSION */;
                if (hasDynamicTextChild &&
                    getConstantType(child, context) === 0 /* ConstantTypes.NOT_CONSTANT */) {
                    patchFlag |= 1 /* PatchFlags.TEXT */;
                }
                // pass directly if the only child is a text node
                // (plain / interpolation / expression)
                if (hasDynamicTextChild || type === 2 /* NodeTypes.TEXT */) {
                    vnodeChildren = child;
                }
                else {
                    vnodeChildren = node.children;
                }
            }
            else {
                vnodeChildren = node.children;
            }
        }
        // patchFlag & dynamicPropNames
        if (patchFlag !== 0) {
            if ((false)) {}
            else {
                vnodePatchFlag = String(patchFlag);
            }
            if (dynamicPropNames && dynamicPropNames.length) {
                vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
            }
        }
        node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false /* disableTracking */, isComponent, node.loc);
    };
};
function resolveComponentType(node, context, ssr = false) {
    let { tag } = node;
    // 1. dynamic component
    const isExplicitDynamic = isComponentTag(tag);
    const isProp = findProp(node, 'is');
    if (isProp) {
        if (isExplicitDynamic ||
            (isCompatEnabled("COMPILER_IS_ON_ELEMENT" /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */, context))) {
            const exp = isProp.type === 6 /* NodeTypes.ATTRIBUTE */
                ? isProp.value && createSimpleExpression(isProp.value.content, true)
                : isProp.exp;
            if (exp) {
                return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
                    exp
                ]);
            }
        }
        else if (isProp.type === 6 /* NodeTypes.ATTRIBUTE */ &&
            isProp.value.content.startsWith('vue:')) {
            // <button is="vue:xxx">
            // if not <component>, only is value that starts with "vue:" will be
            // treated as component by the parse phase and reach here, unless it's
            // compat mode where all is values are considered components
            tag = isProp.value.content.slice(4);
        }
    }
    // 1.5 v-is (TODO: Deprecate)
    const isDir = !isExplicitDynamic && findDir(node, 'is');
    if (isDir && isDir.exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
            isDir.exp
        ]);
    }
    // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
        // built-ins are simply fallthroughs / have special handling during ssr
        // so we don't need to import their runtime equivalents
        if (!ssr)
            context.helper(builtIn);
        return builtIn;
    }
    // 5. user component (resolve)
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent, isDynamicComponent, ssr = false) {
    const { tag, loc: elementLoc, children } = node;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    const hasChildren = children.length > 0;
    let shouldUseBlock = false;
    // patchFlag analysis
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const pushMergeArg = (arg) => {
        if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
        }
        if (arg)
            mergeArgs.push(arg);
    };
    const analyzePatchFlag = ({ key, value }) => {
        if (isStaticExp(key)) {
            const name = key.content;
            const isEventHandler = (0,shared_esm_bundler.isOn)(name);
            if (isEventHandler &&
                (!isComponent || isDynamicComponent) &&
                // omit the flag for click handlers because hydration gives click
                // dedicated fast path.
                name.toLowerCase() !== 'onclick' &&
                // omit v-model handlers
                name !== 'onUpdate:modelValue' &&
                // omit onVnodeXXX hooks
                !(0,shared_esm_bundler.isReservedProp)(name)) {
                hasHydrationEventBinding = true;
            }
            if (isEventHandler && (0,shared_esm_bundler.isReservedProp)(name)) {
                hasVnodeHook = true;
            }
            if (value.type === 20 /* NodeTypes.JS_CACHE_EXPRESSION */ ||
                ((value.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ ||
                    value.type === 8 /* NodeTypes.COMPOUND_EXPRESSION */) &&
                    getConstantType(value, context) > 0)) {
                // skip if the prop is a cached handler or has constant value
                return;
            }
            if (name === 'ref') {
                hasRef = true;
            }
            else if (name === 'class') {
                hasClassBinding = true;
            }
            else if (name === 'style') {
                hasStyleBinding = true;
            }
            else if (name !== 'key' && !dynamicPropNames.includes(name)) {
                dynamicPropNames.push(name);
            }
            // treat the dynamic class and style binding of the component as dynamic props
            if (isComponent &&
                (name === 'class' || name === 'style') &&
                !dynamicPropNames.includes(name)) {
                dynamicPropNames.push(name);
            }
        }
        else {
            hasDynamicKeys = true;
        }
    };
    for (let i = 0; i < props.length; i++) {
        // static attribute
        const prop = props[i];
        if (prop.type === 6 /* NodeTypes.ATTRIBUTE */) {
            const { loc, name, value } = prop;
            let isStatic = true;
            if (name === 'ref') {
                hasRef = true;
                if (context.scopes.vFor > 0) {
                    properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
                }
            }
            // skip is on <component>, or is="vue:xxx"
            if (name === 'is' &&
                (isComponentTag(tag) ||
                    (value && value.content.startsWith('vue:')) ||
                    (isCompatEnabled("COMPILER_IS_ON_ELEMENT" /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */, context)))) {
                continue;
            }
            properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
        }
        else {
            // directives
            const { name, arg, exp, loc } = prop;
            const isVBind = name === 'bind';
            const isVOn = name === 'on';
            // skip v-slot - it is handled by its dedicated transform.
            if (name === 'slot') {
                if (!isComponent) {
                    context.onError(createCompilerError(40 /* ErrorCodes.X_V_SLOT_MISPLACED */, loc));
                }
                continue;
            }
            // skip v-once/v-memo - they are handled by dedicated transforms.
            if (name === 'once' || name === 'memo') {
                continue;
            }
            // skip v-is and :is on <component>
            if (name === 'is' ||
                (isVBind &&
                    isStaticArgOf(arg, 'is') &&
                    (isComponentTag(tag) ||
                        (isCompatEnabled("COMPILER_IS_ON_ELEMENT" /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */, context))))) {
                continue;
            }
            // skip v-on in SSR compilation
            if (isVOn && ssr) {
                continue;
            }
            if (
            // #938: elements with dynamic keys should be forced into blocks
            (isVBind && isStaticArgOf(arg, 'key')) ||
                // inline before-update hooks need to force block so that it is invoked
                // before children
                (isVOn && hasChildren && isStaticArgOf(arg, 'vue:before-update'))) {
                shouldUseBlock = true;
            }
            if (isVBind && isStaticArgOf(arg, 'ref') && context.scopes.vFor > 0) {
                properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
            }
            // special case for v-bind and v-on with no argument
            if (!arg && (isVBind || isVOn)) {
                hasDynamicKeys = true;
                if (exp) {
                    if (isVBind) {
                        // have to merge early for compat build check
                        pushMergeArg();
                        {
                            // 2.x v-bind object order compat
                            if ((false)) {}
                            if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER" /* CompilerDeprecationTypes.COMPILER_V_BIND_OBJECT_ORDER */, context)) {
                                mergeArgs.unshift(exp);
                                continue;
                            }
                        }
                        mergeArgs.push(exp);
                    }
                    else {
                        // v-on="obj" -> toHandlers(obj)
                        pushMergeArg({
                            type: 14 /* NodeTypes.JS_CALL_EXPRESSION */,
                            loc,
                            callee: context.helper(TO_HANDLERS),
                            arguments: isComponent ? [exp] : [exp, `true`]
                        });
                    }
                }
                else {
                    context.onError(createCompilerError(isVBind
                        ? 34 /* ErrorCodes.X_V_BIND_NO_EXPRESSION */
                        : 35 /* ErrorCodes.X_V_ON_NO_EXPRESSION */, loc));
                }
                continue;
            }
            const directiveTransform = context.directiveTransforms[name];
            if (directiveTransform) {
                // has built-in directive transform.
                const { props, needRuntime } = directiveTransform(prop, node, context);
                !ssr && props.forEach(analyzePatchFlag);
                if (isVOn && arg && !isStaticExp(arg)) {
                    pushMergeArg(createObjectExpression(props, elementLoc));
                }
                else {
                    properties.push(...props);
                }
                if (needRuntime) {
                    runtimeDirectives.push(prop);
                    if ((0,shared_esm_bundler.isSymbol)(needRuntime)) {
                        directiveImportMap.set(prop, needRuntime);
                    }
                }
            }
            else if (!(0,shared_esm_bundler.isBuiltInDirective)(name)) {
                // no built-in transform, this is a user custom directive.
                runtimeDirectives.push(prop);
                // custom dirs may use beforeUpdate so they need to force blocks
                // to ensure before-update gets called before children update
                if (hasChildren) {
                    shouldUseBlock = true;
                }
            }
        }
    }
    let propsExpression = undefined;
    // has v-bind="object" or v-on="object", wrap with mergeProps
    if (mergeArgs.length) {
        // close up any not-yet-merged props
        pushMergeArg();
        if (mergeArgs.length > 1) {
            propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
        }
        else {
            // single v-bind with nothing else - no need for a mergeProps call
            propsExpression = mergeArgs[0];
        }
    }
    else if (properties.length) {
        propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    // patchFlag analysis
    if (hasDynamicKeys) {
        patchFlag |= 16 /* PatchFlags.FULL_PROPS */;
    }
    else {
        if (hasClassBinding && !isComponent) {
            patchFlag |= 2 /* PatchFlags.CLASS */;
        }
        if (hasStyleBinding && !isComponent) {
            patchFlag |= 4 /* PatchFlags.STYLE */;
        }
        if (dynamicPropNames.length) {
            patchFlag |= 8 /* PatchFlags.PROPS */;
        }
        if (hasHydrationEventBinding) {
            patchFlag |= 32 /* PatchFlags.HYDRATE_EVENTS */;
        }
    }
    if (!shouldUseBlock &&
        (patchFlag === 0 || patchFlag === 32 /* PatchFlags.HYDRATE_EVENTS */) &&
        (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
        patchFlag |= 512 /* PatchFlags.NEED_PATCH */;
    }
    // pre-normalize props, SSR is skipped for now
    if (!context.inSSR && propsExpression) {
        switch (propsExpression.type) {
            case 15 /* NodeTypes.JS_OBJECT_EXPRESSION */:
                // means that there is no v-bind,
                // but still need to deal with dynamic key binding
                let classKeyIndex = -1;
                let styleKeyIndex = -1;
                let hasDynamicKey = false;
                for (let i = 0; i < propsExpression.properties.length; i++) {
                    const key = propsExpression.properties[i].key;
                    if (isStaticExp(key)) {
                        if (key.content === 'class') {
                            classKeyIndex = i;
                        }
                        else if (key.content === 'style') {
                            styleKeyIndex = i;
                        }
                    }
                    else if (!key.isHandlerKey) {
                        hasDynamicKey = true;
                    }
                }
                const classProp = propsExpression.properties[classKeyIndex];
                const styleProp = propsExpression.properties[styleKeyIndex];
                // no dynamic key
                if (!hasDynamicKey) {
                    if (classProp && !isStaticExp(classProp.value)) {
                        classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
                    }
                    if (styleProp &&
                        // the static style is compiled into an object,
                        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
                        (hasStyleBinding ||
                            (styleProp.value.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ &&
                                styleProp.value.content.trim()[0] === `[`) ||
                            // v-bind:style and style both exist,
                            // v-bind:style with static literal object
                            styleProp.value.type === 17 /* NodeTypes.JS_ARRAY_EXPRESSION */)) {
                        styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
                    }
                }
                else {
                    // dynamic key binding, wrap with `normalizeProps`
                    propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
                }
                break;
            case 14 /* NodeTypes.JS_CALL_EXPRESSION */:
                // mergeProps call, do nothing
                break;
            default:
                // single v-bind
                propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
                    createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
                        propsExpression
                    ])
                ]);
                break;
        }
    }
    return {
        props: propsExpression,
        directives: runtimeDirectives,
        patchFlag,
        dynamicPropNames,
        shouldUseBlock
    };
}
// Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation
function dedupeProperties(properties) {
    const knownProps = new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
        const prop = properties[i];
        // dynamic keys are always allowed
        if (prop.key.type === 8 /* NodeTypes.COMPOUND_EXPRESSION */ || !prop.key.isStatic) {
            deduped.push(prop);
            continue;
        }
        const name = prop.key.content;
        const existing = knownProps.get(name);
        if (existing) {
            if (name === 'style' || name === 'class' || (0,shared_esm_bundler.isOn)(name)) {
                mergeAsArray(existing, prop);
            }
            // unexpected duplicate, should have emitted error during parse
        }
        else {
            knownProps.set(name, prop);
            deduped.push(prop);
        }
    }
    return deduped;
}
function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17 /* NodeTypes.JS_ARRAY_EXPRESSION */) {
        existing.value.elements.push(incoming.value);
    }
    else {
        existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
}
function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
        // built-in directive with runtime
        dirArgs.push(context.helperString(runtime));
    }
    else {
        {
            // inject statement for resolving directive
            context.helper(RESOLVE_DIRECTIVE);
            context.directives.add(dir.name);
            dirArgs.push(toValidAssetId(dir.name, `directive`));
        }
    }
    const { loc } = dir;
    if (dir.exp)
        dirArgs.push(dir.exp);
    if (dir.arg) {
        if (!dir.exp) {
            dirArgs.push(`void 0`);
        }
        dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
        if (!dir.arg) {
            if (!dir.exp) {
                dirArgs.push(`void 0`);
            }
            dirArgs.push(`void 0`);
        }
        const trueExpression = createSimpleExpression(`true`, false, loc);
        dirArgs.push(createObjectExpression(dir.modifiers.map(modifier => createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
        propsNamesString += JSON.stringify(props[i]);
        if (i < l - 1)
            propsNamesString += ', ';
    }
    return propsNamesString + `]`;
}
function isComponentTag(tag) {
    return tag === 'component' || tag === 'Component';
}

( false)
    ? 0
    : {};
( false) ? 0 : [];
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

const transformSlotOutlet = (node, context) => {
    if (isSlotOutlet(node)) {
        const { children, loc } = node;
        const { slotName, slotProps } = processSlotOutlet(node, context);
        const slotArgs = [
            context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
            slotName,
            '{}',
            'undefined',
            'true'
        ];
        let expectedLen = 2;
        if (slotProps) {
            slotArgs[2] = slotProps;
            expectedLen = 3;
        }
        if (children.length) {
            slotArgs[3] = createFunctionExpression([], children, false, false, loc);
            expectedLen = 4;
        }
        if (context.scopeId && !context.slotted) {
            expectedLen = 5;
        }
        slotArgs.splice(expectedLen); // remove unused arguments
        node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
    }
};
function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = undefined;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 6 /* NodeTypes.ATTRIBUTE */) {
            if (p.value) {
                if (p.name === 'name') {
                    slotName = JSON.stringify(p.value.content);
                }
                else {
                    p.name = camelize(p.name);
                    nonNameProps.push(p);
                }
            }
        }
        else {
            if (p.name === 'bind' && isStaticArgOf(p.arg, 'name')) {
                if (p.exp)
                    slotName = p.exp;
            }
            else {
                if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
                    p.arg.content = camelize(p.arg.content);
                }
                nonNameProps.push(p);
            }
        }
    }
    if (nonNameProps.length > 0) {
        const { props, directives } = buildProps(node, context, nonNameProps, false, false);
        slotProps = props;
        if (directives.length) {
            context.onError(createCompilerError(36 /* ErrorCodes.X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */, directives[0].loc));
        }
    }
    return {
        slotName,
        slotProps
    };
}

const fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const transformOn = (dir, node, context, augmentor) => {
    const { loc, modifiers, arg } = dir;
    if (!dir.exp && !modifiers.length) {
        context.onError(createCompilerError(35 /* ErrorCodes.X_V_ON_NO_EXPRESSION */, loc));
    }
    let eventName;
    if (arg.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        if (arg.isStatic) {
            let rawName = arg.content;
            // TODO deprecate @vnodeXXX usage
            if (rawName.startsWith('vue:')) {
                rawName = `vnode-${rawName.slice(4)}`;
            }
            const eventString = node.tagType !== 0 /* ElementTypes.ELEMENT */ ||
                rawName.startsWith('vnode') ||
                !/[A-Z]/.test(rawName)
                ? // for non-element and vnode lifecycle event listeners, auto convert
                    // it to camelCase. See issue #2249
                    (0,shared_esm_bundler.toHandlerKey)((0,shared_esm_bundler.camelize)(rawName))
                : // preserve case for plain element listeners that have uppercase
                    // letters, as these may be custom elements' custom events
                    `on:${rawName}`;
            eventName = createSimpleExpression(eventString, true, arg.loc);
        }
        else {
            // #2388
            eventName = createCompoundExpression([
                `${context.helperString(TO_HANDLER_KEY)}(`,
                arg,
                `)`
            ]);
        }
    }
    else {
        // already a compound expression.
        eventName = arg;
        eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
        eventName.children.push(`)`);
    }
    // handler processing
    let exp = dir.exp;
    if (exp && !exp.content.trim()) {
        exp = undefined;
    }
    let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
    if (exp) {
        const isMemberExp = isMemberExpression(exp.content);
        const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
        const hasMultipleStatements = exp.content.includes(`;`);
        if (false) {}
        if (isInlineStatement || (shouldCache && isMemberExp)) {
            // wrap inline statement in a function expression
            exp = createCompoundExpression([
                `${isInlineStatement
                    ? `$event`
                    : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
                exp,
                hasMultipleStatements ? `}` : `)`
            ]);
        }
    }
    let ret = {
        props: [
            createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
        ]
    };
    // apply extended compiler augmentor
    if (augmentor) {
        ret = augmentor(ret);
    }
    if (shouldCache) {
        // cache handlers so that it's always the same handler being passed down.
        // this avoids unnecessary re-renders when users use inline handlers on
        // components.
        ret.props[0].value = context.cache(ret.props[0].value);
    }
    // mark the key as handler for props normalization check
    ret.props.forEach(p => (p.key.isHandlerKey = true));
    return ret;
};

// v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.
const transformBind = (dir, _node, context) => {
    const { exp, modifiers, loc } = dir;
    const arg = dir.arg;
    if (arg.type !== 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        arg.children.unshift(`(`);
        arg.children.push(`) || ""`);
    }
    else if (!arg.isStatic) {
        arg.content = `${arg.content} || ""`;
    }
    // .sync is replaced by v-model:arg
    if (modifiers.includes('camel')) {
        if (arg.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
            if (arg.isStatic) {
                arg.content = (0,shared_esm_bundler.camelize)(arg.content);
            }
            else {
                arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
            }
        }
        else {
            arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
            arg.children.push(`)`);
        }
    }
    if (!context.inSSR) {
        if (modifiers.includes('prop')) {
            injectPrefix(arg, '.');
        }
        if (modifiers.includes('attr')) {
            injectPrefix(arg, '^');
        }
    }
    if (!exp ||
        (exp.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ && !exp.content.trim())) {
        context.onError(createCompilerError(34 /* ErrorCodes.X_V_BIND_NO_EXPRESSION */, loc));
        return {
            props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
        };
    }
    return {
        props: [createObjectProperty(arg, exp)]
    };
};
const injectPrefix = (arg, prefix) => {
    if (arg.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        if (arg.isStatic) {
            arg.content = prefix + arg.content;
        }
        else {
            arg.content = `\`${prefix}\${${arg.content}}\``;
        }
    }
    else {
        arg.children.unshift(`'${prefix}' + (`);
        arg.children.push(`)`);
    }
};

// Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.
const transformText = (node, context) => {
    if (node.type === 0 /* NodeTypes.ROOT */ ||
        node.type === 1 /* NodeTypes.ELEMENT */ ||
        node.type === 11 /* NodeTypes.FOR */ ||
        node.type === 10 /* NodeTypes.IF_BRANCH */) {
        // perform the transform on node exit so that all expressions have already
        // been processed.
        return () => {
            const children = node.children;
            let currentContainer = undefined;
            let hasText = false;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (isText$1(child)) {
                    hasText = true;
                    for (let j = i + 1; j < children.length; j++) {
                        const next = children[j];
                        if (isText$1(next)) {
                            if (!currentContainer) {
                                currentContainer = children[i] = createCompoundExpression([child], child.loc);
                            }
                            // merge adjacent text node into current
                            currentContainer.children.push(` + `, next);
                            children.splice(j, 1);
                            j--;
                        }
                        else {
                            currentContainer = undefined;
                            break;
                        }
                    }
                }
            }
            if (!hasText ||
                // if this is a plain element with a single text child, leave it
                // as-is since the runtime has dedicated fast path for this by directly
                // setting textContent of the element.
                // for component root it's always normalized anyway.
                (children.length === 1 &&
                    (node.type === 0 /* NodeTypes.ROOT */ ||
                        (node.type === 1 /* NodeTypes.ELEMENT */ &&
                            node.tagType === 0 /* ElementTypes.ELEMENT */ &&
                            // #3756
                            // custom directives can potentially add DOM elements arbitrarily,
                            // we need to avoid setting textContent of the element at runtime
                            // to avoid accidentally overwriting the DOM elements added
                            // by the user through custom directives.
                            !node.props.find(p => p.type === 7 /* NodeTypes.DIRECTIVE */ &&
                                !context.directiveTransforms[p.name]) &&
                            // in compat mode, <template> tags with no special directives
                            // will be rendered as a fragment so its children must be
                            // converted into vnodes.
                            !(node.tag === 'template'))))) {
                return;
            }
            // pre-convert text nodes into createTextVNode(text) calls to avoid
            // runtime normalization.
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (isText$1(child) || child.type === 8 /* NodeTypes.COMPOUND_EXPRESSION */) {
                    const callArgs = [];
                    // createTextVNode defaults to single whitespace, so if it is a
                    // single space the code could be an empty call to save bytes.
                    if (child.type !== 2 /* NodeTypes.TEXT */ || child.content !== ' ') {
                        callArgs.push(child);
                    }
                    // mark dynamic text with flag so it gets patched inside a block
                    if (!context.ssr &&
                        getConstantType(child, context) === 0 /* ConstantTypes.NOT_CONSTANT */) {
                        callArgs.push(1 /* PatchFlags.TEXT */ +
                            (( false) ? 0 : ``));
                    }
                    children[i] = {
                        type: 12 /* NodeTypes.TEXT_CALL */,
                        content: child,
                        loc: child.loc,
                        codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                    };
                }
            }
        };
    }
};

const seen$1 = new WeakSet();
const transformOnce = (node, context) => {
    if (node.type === 1 /* NodeTypes.ELEMENT */ && findDir(node, 'once', true)) {
        if (seen$1.has(node) || context.inVOnce) {
            return;
        }
        seen$1.add(node);
        context.inVOnce = true;
        context.helper(SET_BLOCK_TRACKING);
        return () => {
            context.inVOnce = false;
            const cur = context.currentNode;
            if (cur.codegenNode) {
                cur.codegenNode = context.cache(cur.codegenNode, true /* isVNode */);
            }
        };
    }
};

const transformModel = (dir, node, context) => {
    const { exp, arg } = dir;
    if (!exp) {
        context.onError(createCompilerError(41 /* ErrorCodes.X_V_MODEL_NO_EXPRESSION */, dir.loc));
        return createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ ? exp.content : rawExp;
    // im SFC <script setup> inline mode, the exp may have been transformed into
    // _unref(exp)
    const bindingType = context.bindingMetadata[rawExp];
    // check props
    if (bindingType === "props" /* BindingTypes.PROPS */ ||
        bindingType === "props-aliased" /* BindingTypes.PROPS_ALIASED */) {
        context.onError(createCompilerError(44 /* ErrorCodes.X_V_MODEL_ON_PROPS */, exp.loc));
        return createTransformProps();
    }
    const maybeRef = !true  ;
    if (!expString.trim() ||
        (!isMemberExpression(expString) && !maybeRef)) {
        context.onError(createCompilerError(42 /* ErrorCodes.X_V_MODEL_MALFORMED_EXPRESSION */, exp.loc));
        return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression('modelValue', true);
    const eventName = arg
        ? isStaticExp(arg)
            ? `onUpdate:${(0,shared_esm_bundler.camelize)(arg.content)}`
            : createCompoundExpression(['"onUpdate:" + ', arg])
        : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    {
        assignmentExp = createCompoundExpression([
            `${eventArg} => ((`,
            exp,
            `) = $event)`
        ]);
    }
    const props = [
        // modelValue: foo
        createObjectProperty(propName, dir.exp),
        // "onUpdate:modelValue": $event => (foo = $event)
        createObjectProperty(eventName, assignmentExp)
    ];
    // modelModifiers: { foo: true, "bar-baz": true }
    if (dir.modifiers.length && node.tagType === 1 /* ElementTypes.COMPONENT */) {
        const modifiers = dir.modifiers
            .map(m => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`)
            .join(`, `);
        const modifiersKey = arg
            ? isStaticExp(arg)
                ? `${arg.content}Modifiers`
                : createCompoundExpression([arg, ' + "Modifiers"'])
            : `modelModifiers`;
        props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2 /* ConstantTypes.CAN_HOIST */)));
    }
    return createTransformProps(props);
};
function createTransformProps(props = []) {
    return { props };
}

const validDivisionCharRE = /[\w).+\-_$\]]/;
const transformFilter = (node, context) => {
    if (!isCompatEnabled("COMPILER_FILTER" /* CompilerDeprecationTypes.COMPILER_FILTERS */, context)) {
        return;
    }
    if (node.type === 5 /* NodeTypes.INTERPOLATION */) {
        // filter rewrite is applied before expression transform so only
        // simple expressions are possible at this stage
        rewriteFilter(node.content, context);
    }
    if (node.type === 1 /* NodeTypes.ELEMENT */) {
        node.props.forEach((prop) => {
            if (prop.type === 7 /* NodeTypes.DIRECTIVE */ &&
                prop.name !== 'for' &&
                prop.exp) {
                rewriteFilter(prop.exp, context);
            }
        });
    }
};
function rewriteFilter(node, context) {
    if (node.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
        parseFilter(node, context);
    }
    else {
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (typeof child !== 'object')
                continue;
            if (child.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */) {
                parseFilter(child, context);
            }
            else if (child.type === 8 /* NodeTypes.COMPOUND_EXPRESSION */) {
                rewriteFilter(node, context);
            }
            else if (child.type === 5 /* NodeTypes.INTERPOLATION */) {
                rewriteFilter(child.content, context);
            }
        }
    }
}
function parseFilter(node, context) {
    const exp = node.content;
    let inSingle = false;
    let inDouble = false;
    let inTemplateString = false;
    let inRegex = false;
    let curly = 0;
    let square = 0;
    let paren = 0;
    let lastFilterIndex = 0;
    let c, prev, i, expression, filters = [];
    for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
            if (c === 0x27 && prev !== 0x5c)
                inSingle = false;
        }
        else if (inDouble) {
            if (c === 0x22 && prev !== 0x5c)
                inDouble = false;
        }
        else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5c)
                inTemplateString = false;
        }
        else if (inRegex) {
            if (c === 0x2f && prev !== 0x5c)
                inRegex = false;
        }
        else if (c === 0x7c && // pipe
            exp.charCodeAt(i + 1) !== 0x7c &&
            exp.charCodeAt(i - 1) !== 0x7c &&
            !curly &&
            !square &&
            !paren) {
            if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
            }
            else {
                pushFilter();
            }
        }
        else {
            switch (c) {
                case 0x22:
                    inDouble = true;
                    break; // "
                case 0x27:
                    inSingle = true;
                    break; // '
                case 0x60:
                    inTemplateString = true;
                    break; // `
                case 0x28:
                    paren++;
                    break; // (
                case 0x29:
                    paren--;
                    break; // )
                case 0x5b:
                    square++;
                    break; // [
                case 0x5d:
                    square--;
                    break; // ]
                case 0x7b:
                    curly++;
                    break; // {
                case 0x7d:
                    curly--;
                    break; // }
            }
            if (c === 0x2f) {
                // /
                let j = i - 1;
                let p;
                // find first non-whitespace prev char
                for (; j >= 0; j--) {
                    p = exp.charAt(j);
                    if (p !== ' ')
                        break;
                }
                if (!p || !validDivisionCharRE.test(p)) {
                    inRegex = true;
                }
            }
        }
    }
    if (expression === undefined) {
        expression = exp.slice(0, i).trim();
    }
    else if (lastFilterIndex !== 0) {
        pushFilter();
    }
    function pushFilter() {
        filters.push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
    }
    if (filters.length) {
        ( false) &&
            0;
        for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i], context);
        }
        node.content = expression;
    }
}
function wrapFilter(exp, filter, context) {
    context.helper(RESOLVE_FILTER);
    const i = filter.indexOf('(');
    if (i < 0) {
        context.filters.add(filter);
        return `${toValidAssetId(filter, 'filter')}(${exp})`;
    }
    else {
        const name = filter.slice(0, i);
        const args = filter.slice(i + 1);
        context.filters.add(name);
        return `${toValidAssetId(name, 'filter')}(${exp}${args !== ')' ? ',' + args : args}`;
    }
}

const seen = new WeakSet();
const transformMemo = (node, context) => {
    if (node.type === 1 /* NodeTypes.ELEMENT */) {
        const dir = findDir(node, 'memo');
        if (!dir || seen.has(node)) {
            return;
        }
        seen.add(node);
        return () => {
            const codegenNode = node.codegenNode ||
                context.currentNode.codegenNode;
            if (codegenNode && codegenNode.type === 13 /* NodeTypes.VNODE_CALL */) {
                // non-component sub tree should be turned into a block
                if (node.tagType !== 1 /* ElementTypes.COMPONENT */) {
                    makeBlock(codegenNode, context);
                }
                node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
                    dir.exp,
                    createFunctionExpression(undefined, codegenNode),
                    `_cache`,
                    String(context.cached++)
                ]);
            }
        };
    }
};

function getBaseTransformPreset(prefixIdentifiers) {
    return [
        [
            transformOnce,
            transformIf,
            transformMemo,
            transformFor,
            ...([transformFilter] ),
            ...(( false)
                    ? 0
                    : []),
            transformSlotOutlet,
            transformElement,
            trackSlotScopes,
            transformText
        ],
        {
            on: transformOn,
            bind: transformBind,
            model: transformModel
        }
    ];
}
// we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.
function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === 'module';
    /* istanbul ignore if */
    {
        if (options.prefixIdentifiers === true) {
            onError(createCompilerError(47 /* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */));
        }
        else if (isModuleMode) {
            onError(createCompilerError(48 /* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */));
        }
    }
    const prefixIdentifiers = !true ;
    if (options.cacheHandlers) {
        onError(createCompilerError(49 /* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */));
    }
    if (options.scopeId && !isModuleMode) {
        onError(createCompilerError(50 /* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */));
    }
    const ast = (0,shared_esm_bundler.isString)(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(ast, (0,shared_esm_bundler.extend)({}, options, {
        prefixIdentifiers,
        nodeTransforms: [
            ...nodeTransforms,
            ...(options.nodeTransforms || []) // user transforms
        ],
        directiveTransforms: (0,shared_esm_bundler.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
        )
    }));
    return generate(ast, (0,shared_esm_bundler.extend)({}, options, {
        prefixIdentifiers
    }));
}

const noopDirectiveTransform = () => ({ props: [] });



;// CONCATENATED MODULE: ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js




const V_MODEL_RADIO = Symbol(( false) ? 0 : ``);
const V_MODEL_CHECKBOX = Symbol(( false) ? 0 : ``);
const V_MODEL_TEXT = Symbol(( false) ? 0 : ``);
const V_MODEL_SELECT = Symbol(( false) ? 0 : ``);
const V_MODEL_DYNAMIC = Symbol(( false) ? 0 : ``);
const V_ON_WITH_MODIFIERS = Symbol(( false) ? 0 : ``);
const V_ON_WITH_KEYS = Symbol(( false) ? 0 : ``);
const V_SHOW = Symbol(( false) ? 0 : ``);
const TRANSITION = Symbol(( false) ? 0 : ``);
const TRANSITION_GROUP = Symbol(( false) ? 0 : ``);
registerRuntimeHelpers({
    [V_MODEL_RADIO]: `vModelRadio`,
    [V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [V_MODEL_TEXT]: `vModelText`,
    [V_MODEL_SELECT]: `vModelSelect`,
    [V_MODEL_DYNAMIC]: `vModelDynamic`,
    [V_ON_WITH_MODIFIERS]: `withModifiers`,
    [V_ON_WITH_KEYS]: `withKeys`,
    [V_SHOW]: `vShow`,
    [TRANSITION]: `Transition`,
    [TRANSITION_GROUP]: `TransitionGroup`
});

/* eslint-disable no-restricted-globals */
let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
    if (!decoder) {
        decoder = document.createElement('div');
    }
    if (asAttr) {
        decoder.innerHTML = `<div foo="${raw.replace(/"/g, '&quot;')}">`;
        return decoder.children[0].getAttribute('foo');
    }
    else {
        decoder.innerHTML = raw;
        return decoder.textContent;
    }
}

const isRawTextContainer = /*#__PURE__*/ (0,shared_esm_bundler.makeMap)('style,iframe,script,noscript', true);
const parserOptions = {
    isVoidTag: shared_esm_bundler.isVoidTag,
    isNativeTag: tag => (0,shared_esm_bundler.isHTMLTag)(tag) || (0,shared_esm_bundler.isSVGTag)(tag),
    isPreTag: tag => tag === 'pre',
    decodeEntities: decodeHtmlBrowser ,
    isBuiltInComponent: (tag) => {
        if (isBuiltInType(tag, `Transition`)) {
            return TRANSITION;
        }
        else if (isBuiltInType(tag, `TransitionGroup`)) {
            return TRANSITION_GROUP;
        }
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
    getNamespace(tag, parent) {
        let ns = parent ? parent.ns : 0 /* DOMNamespaces.HTML */;
        if (parent && ns === 2 /* DOMNamespaces.MATH_ML */) {
            if (parent.tag === 'annotation-xml') {
                if (tag === 'svg') {
                    return 1 /* DOMNamespaces.SVG */;
                }
                if (parent.props.some(a => a.type === 6 /* NodeTypes.ATTRIBUTE */ &&
                    a.name === 'encoding' &&
                    a.value != null &&
                    (a.value.content === 'text/html' ||
                        a.value.content === 'application/xhtml+xml'))) {
                    ns = 0 /* DOMNamespaces.HTML */;
                }
            }
            else if (/^m(?:[ions]|text)$/.test(parent.tag) &&
                tag !== 'mglyph' &&
                tag !== 'malignmark') {
                ns = 0 /* DOMNamespaces.HTML */;
            }
        }
        else if (parent && ns === 1 /* DOMNamespaces.SVG */) {
            if (parent.tag === 'foreignObject' ||
                parent.tag === 'desc' ||
                parent.tag === 'title') {
                ns = 0 /* DOMNamespaces.HTML */;
            }
        }
        if (ns === 0 /* DOMNamespaces.HTML */) {
            if (tag === 'svg') {
                return 1 /* DOMNamespaces.SVG */;
            }
            if (tag === 'math') {
                return 2 /* DOMNamespaces.MATH_ML */;
            }
        }
        return ns;
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
    getTextMode({ tag, ns }) {
        if (ns === 0 /* DOMNamespaces.HTML */) {
            if (tag === 'textarea' || tag === 'title') {
                return 1 /* TextModes.RCDATA */;
            }
            if (isRawTextContainer(tag)) {
                return 2 /* TextModes.RAWTEXT */;
            }
        }
        return 0 /* TextModes.DATA */;
    }
};

// Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.
const transformStyle = node => {
    if (node.type === 1 /* NodeTypes.ELEMENT */) {
        node.props.forEach((p, i) => {
            if (p.type === 6 /* NodeTypes.ATTRIBUTE */ && p.name === 'style' && p.value) {
                // replace p with an expression node
                node.props[i] = {
                    type: 7 /* NodeTypes.DIRECTIVE */,
                    name: `bind`,
                    arg: createSimpleExpression(`style`, true, p.loc),
                    exp: parseInlineCSS(p.value.content, p.loc),
                    modifiers: [],
                    loc: p.loc
                };
            }
        });
    }
};
const parseInlineCSS = (cssText, loc) => {
    const normalized = (0,shared_esm_bundler.parseStringStyle)(cssText);
    return createSimpleExpression(JSON.stringify(normalized), false, loc, 3 /* ConstantTypes.CAN_STRINGIFY */);
};

function createDOMCompilerError(code, loc) {
    return createCompilerError(code, loc,  false ? 0 : undefined);
}
const DOMErrorMessages = {
    [51 /* DOMErrorCodes.X_V_HTML_NO_EXPRESSION */]: `v-html is missing expression.`,
    [52 /* DOMErrorCodes.X_V_HTML_WITH_CHILDREN */]: `v-html will override element children.`,
    [53 /* DOMErrorCodes.X_V_TEXT_NO_EXPRESSION */]: `v-text is missing expression.`,
    [54 /* DOMErrorCodes.X_V_TEXT_WITH_CHILDREN */]: `v-text will override element children.`,
    [55 /* DOMErrorCodes.X_V_MODEL_ON_INVALID_ELEMENT */]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
    [56 /* DOMErrorCodes.X_V_MODEL_ARG_ON_ELEMENT */]: `v-model argument is not supported on plain elements.`,
    [57 /* DOMErrorCodes.X_V_MODEL_ON_FILE_INPUT_ELEMENT */]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
    [58 /* DOMErrorCodes.X_V_MODEL_UNNECESSARY_VALUE */]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
    [59 /* DOMErrorCodes.X_V_SHOW_NO_EXPRESSION */]: `v-show is missing expression.`,
    [60 /* DOMErrorCodes.X_TRANSITION_INVALID_CHILDREN */]: `<Transition> expects exactly one child element or component.`,
    [61 /* DOMErrorCodes.X_IGNORED_SIDE_EFFECT_TAG */]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};

const transformVHtml = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
        context.onError(createDOMCompilerError(51 /* DOMErrorCodes.X_V_HTML_NO_EXPRESSION */, loc));
    }
    if (node.children.length) {
        context.onError(createDOMCompilerError(52 /* DOMErrorCodes.X_V_HTML_WITH_CHILDREN */, loc));
        node.children.length = 0;
    }
    return {
        props: [
            createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression('', true))
        ]
    };
};

const transformVText = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
        context.onError(createDOMCompilerError(53 /* DOMErrorCodes.X_V_TEXT_NO_EXPRESSION */, loc));
    }
    if (node.children.length) {
        context.onError(createDOMCompilerError(54 /* DOMErrorCodes.X_V_TEXT_WITH_CHILDREN */, loc));
        node.children.length = 0;
    }
    return {
        props: [
            createObjectProperty(createSimpleExpression(`textContent`, true), exp
                ? getConstantType(exp, context) > 0
                    ? exp
                    : createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc)
                : createSimpleExpression('', true))
        ]
    };
};

const compiler_dom_esm_bundler_transformModel = (dir, node, context) => {
    const baseResult = transformModel(dir, node, context);
    // base transform has errors OR component v-model (only need props)
    if (!baseResult.props.length || node.tagType === 1 /* ElementTypes.COMPONENT */) {
        return baseResult;
    }
    if (dir.arg) {
        context.onError(createDOMCompilerError(56 /* DOMErrorCodes.X_V_MODEL_ARG_ON_ELEMENT */, dir.arg.loc));
    }
    function checkDuplicatedValue() {
        const value = findProp(node, 'value');
        if (value) {
            context.onError(createDOMCompilerError(58 /* DOMErrorCodes.X_V_MODEL_UNNECESSARY_VALUE */, value.loc));
        }
    }
    const { tag } = node;
    const isCustomElement = context.isCustomElement(tag);
    if (tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        isCustomElement) {
        let directiveToUse = V_MODEL_TEXT;
        let isInvalidType = false;
        if (tag === 'input' || isCustomElement) {
            const type = findProp(node, `type`);
            if (type) {
                if (type.type === 7 /* NodeTypes.DIRECTIVE */) {
                    // :type="foo"
                    directiveToUse = V_MODEL_DYNAMIC;
                }
                else if (type.value) {
                    switch (type.value.content) {
                        case 'radio':
                            directiveToUse = V_MODEL_RADIO;
                            break;
                        case 'checkbox':
                            directiveToUse = V_MODEL_CHECKBOX;
                            break;
                        case 'file':
                            isInvalidType = true;
                            context.onError(createDOMCompilerError(57 /* DOMErrorCodes.X_V_MODEL_ON_FILE_INPUT_ELEMENT */, dir.loc));
                            break;
                        default:
                            // text type
                            ( false) && 0;
                            break;
                    }
                }
            }
            else if (hasDynamicKeyVBind(node)) {
                // element has bindings with dynamic keys, which can possibly contain
                // "type".
                directiveToUse = V_MODEL_DYNAMIC;
            }
            else {
                // text type
                ( false) && 0;
            }
        }
        else if (tag === 'select') {
            directiveToUse = V_MODEL_SELECT;
        }
        else {
            // textarea
            ( false) && 0;
        }
        // inject runtime directive
        // by returning the helper symbol via needRuntime
        // the import will replaced a resolveDirective call.
        if (!isInvalidType) {
            baseResult.needRuntime = context.helper(directiveToUse);
        }
    }
    else {
        context.onError(createDOMCompilerError(55 /* DOMErrorCodes.X_V_MODEL_ON_INVALID_ELEMENT */, dir.loc));
    }
    // native vmodel doesn't need the `modelValue` props since they are also
    // passed to the runtime as `binding.value`. removing it reduces code size.
    baseResult.props = baseResult.props.filter(p => !(p.key.type === 4 /* NodeTypes.SIMPLE_EXPRESSION */ &&
        p.key.content === 'modelValue'));
    return baseResult;
};

const isEventOptionModifier = /*#__PURE__*/ (0,shared_esm_bundler.makeMap)(`passive,once,capture`);
const isNonKeyModifier = /*#__PURE__*/ (0,shared_esm_bundler.makeMap)(
// event propagation management
`stop,prevent,self,` +
    // system modifiers + exact
    `ctrl,shift,alt,meta,exact,` +
    // mouse
    `middle`);
// left & right could be mouse or key modifiers based on event type
const maybeKeyModifier = /*#__PURE__*/ (0,shared_esm_bundler.makeMap)('left,right');
const isKeyboardEvent = /*#__PURE__*/ (0,shared_esm_bundler.makeMap)(`onkeyup,onkeydown,onkeypress`, true);
const resolveModifiers = (key, modifiers, context, loc) => {
    const keyModifiers = [];
    const nonKeyModifiers = [];
    const eventOptionModifiers = [];
    for (let i = 0; i < modifiers.length; i++) {
        const modifier = modifiers[i];
        if (modifier === 'native' &&
            checkCompatEnabled("COMPILER_V_ON_NATIVE" /* CompilerDeprecationTypes.COMPILER_V_ON_NATIVE */, context, loc)) {
            eventOptionModifiers.push(modifier);
        }
        else if (isEventOptionModifier(modifier)) {
            // eventOptionModifiers: modifiers for addEventListener() options,
            // e.g. .passive & .capture
            eventOptionModifiers.push(modifier);
        }
        else {
            // runtimeModifiers: modifiers that needs runtime guards
            if (maybeKeyModifier(modifier)) {
                if (isStaticExp(key)) {
                    if (isKeyboardEvent(key.content)) {
                        keyModifiers.push(modifier);
                    }
                    else {
                        nonKeyModifiers.push(modifier);
                    }
                }
                else {
                    keyModifiers.push(modifier);
                    nonKeyModifiers.push(modifier);
                }
            }
            else {
                if (isNonKeyModifier(modifier)) {
                    nonKeyModifiers.push(modifier);
                }
                else {
                    keyModifiers.push(modifier);
                }
            }
        }
    }
    return {
        keyModifiers,
        nonKeyModifiers,
        eventOptionModifiers
    };
};
const transformClick = (key, event) => {
    const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === 'onclick';
    return isStaticClick
        ? createSimpleExpression(event, true)
        : key.type !== 4 /* NodeTypes.SIMPLE_EXPRESSION */
            ? createCompoundExpression([
                `(`,
                key,
                `) === "onClick" ? "${event}" : (`,
                key,
                `)`
            ])
            : key;
};
const compiler_dom_esm_bundler_transformOn = (dir, node, context) => {
    return transformOn(dir, node, context, baseResult => {
        const { modifiers } = dir;
        if (!modifiers.length)
            return baseResult;
        let { key, value: handlerExp } = baseResult.props[0];
        const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
        // normalize click.right and click.middle since they don't actually fire
        if (nonKeyModifiers.includes('right')) {
            key = transformClick(key, `onContextmenu`);
        }
        if (nonKeyModifiers.includes('middle')) {
            key = transformClick(key, `onMouseup`);
        }
        if (nonKeyModifiers.length) {
            handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
                handlerExp,
                JSON.stringify(nonKeyModifiers)
            ]);
        }
        if (keyModifiers.length &&
            // if event name is dynamic, always wrap with keys guard
            (!isStaticExp(key) || isKeyboardEvent(key.content))) {
            handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
                handlerExp,
                JSON.stringify(keyModifiers)
            ]);
        }
        if (eventOptionModifiers.length) {
            const modifierPostfix = eventOptionModifiers.map(shared_esm_bundler.capitalize).join('');
            key = isStaticExp(key)
                ? createSimpleExpression(`${key.content}${modifierPostfix}`, true)
                : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
        }
        return {
            props: [createObjectProperty(key, handlerExp)]
        };
    });
};

const transformShow = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
        context.onError(createDOMCompilerError(59 /* DOMErrorCodes.X_V_SHOW_NO_EXPRESSION */, loc));
    }
    return {
        props: [],
        needRuntime: context.helper(V_SHOW)
    };
};

const transformTransition = (node, context) => {
    if (node.type === 1 /* NodeTypes.ELEMENT */ &&
        node.tagType === 1 /* ElementTypes.COMPONENT */) {
        const component = context.isBuiltInComponent(node.tag);
        if (component === TRANSITION) {
            return () => {
                if (!node.children.length) {
                    return;
                }
                // warn multiple transition children
                if (hasMultipleChildren(node)) {
                    context.onError(createDOMCompilerError(60 /* DOMErrorCodes.X_TRANSITION_INVALID_CHILDREN */, {
                        start: node.children[0].loc.start,
                        end: node.children[node.children.length - 1].loc.end,
                        source: ''
                    }));
                }
                // check if it's s single child w/ v-show
                // if yes, inject "persisted: true" to the transition props
                const child = node.children[0];
                if (child.type === 1 /* NodeTypes.ELEMENT */) {
                    for (const p of child.props) {
                        if (p.type === 7 /* NodeTypes.DIRECTIVE */ && p.name === 'show') {
                            node.props.push({
                                type: 6 /* NodeTypes.ATTRIBUTE */,
                                name: 'persisted',
                                value: undefined,
                                loc: node.loc
                            });
                        }
                    }
                }
            };
        }
    }
};
function hasMultipleChildren(node) {
    // #1352 filter out potential comment nodes.
    const children = (node.children = node.children.filter(c => c.type !== 3 /* NodeTypes.COMMENT */ &&
        !(c.type === 2 /* NodeTypes.TEXT */ && !c.content.trim())));
    const child = children[0];
    return (children.length !== 1 ||
        child.type === 11 /* NodeTypes.FOR */ ||
        (child.type === 9 /* NodeTypes.IF */ && child.branches.some(hasMultipleChildren)));
}

const ignoreSideEffectTags = (node, context) => {
    if (node.type === 1 /* NodeTypes.ELEMENT */ &&
        node.tagType === 0 /* ElementTypes.ELEMENT */ &&
        (node.tag === 'script' || node.tag === 'style')) {
        context.onError(createDOMCompilerError(61 /* DOMErrorCodes.X_IGNORED_SIDE_EFFECT_TAG */, node.loc));
        context.removeNode();
    }
};

const DOMNodeTransforms = [
    transformStyle,
    ...(( false) ? 0 : [])
];
const DOMDirectiveTransforms = {
    cloak: noopDirectiveTransform,
    html: transformVHtml,
    text: transformVText,
    model: compiler_dom_esm_bundler_transformModel,
    on: compiler_dom_esm_bundler_transformOn,
    show: transformShow
};
function compile(template, options = {}) {
    return baseCompile(template, (0,shared_esm_bundler.extend)({}, parserOptions, options, {
        nodeTransforms: [
            // ignore <script> and <tag>
            // this is not put inside DOMNodeTransforms because that list is used
            // by compiler-ssr to generate vnode fallback branches
            ignoreSideEffectTags,
            ...DOMNodeTransforms,
            ...(options.nodeTransforms || [])
        ],
        directiveTransforms: (0,shared_esm_bundler.extend)({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
        transformHoist: null 
    }));
}
function parse(template, options = {}) {
    return baseParse(template, (0,shared_esm_bundler.extend)({}, parserOptions, options));
}




/***/ }),

/***/ 2262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$y": () => (/* binding */ isReadonly),
/* harmony export */   "B": () => (/* binding */ effectScope),
/* harmony export */   "BK": () => (/* binding */ toRefs),
/* harmony export */   "Bj": () => (/* binding */ EffectScope),
/* harmony export */   "EB": () => (/* binding */ onScopeDispose),
/* harmony export */   "Fl": () => (/* binding */ computed),
/* harmony export */   "IU": () => (/* binding */ toRaw),
/* harmony export */   "Jd": () => (/* binding */ pauseTracking),
/* harmony export */   "OT": () => (/* binding */ readonly),
/* harmony export */   "PG": () => (/* binding */ isReactive),
/* harmony export */   "SU": () => (/* binding */ unref),
/* harmony export */   "Um": () => (/* binding */ shallowReactive),
/* harmony export */   "Vh": () => (/* binding */ toRef),
/* harmony export */   "WL": () => (/* binding */ proxyRefs),
/* harmony export */   "X$": () => (/* binding */ trigger),
/* harmony export */   "X3": () => (/* binding */ isProxy),
/* harmony export */   "XI": () => (/* binding */ shallowRef),
/* harmony export */   "Xl": () => (/* binding */ markRaw),
/* harmony export */   "YS": () => (/* binding */ shallowReadonly),
/* harmony export */   "ZM": () => (/* binding */ customRef),
/* harmony export */   "cE": () => (/* binding */ effect),
/* harmony export */   "dq": () => (/* binding */ isRef),
/* harmony export */   "iH": () => (/* binding */ ref),
/* harmony export */   "j": () => (/* binding */ track),
/* harmony export */   "lk": () => (/* binding */ resetTracking),
/* harmony export */   "nZ": () => (/* binding */ getCurrentScope),
/* harmony export */   "oR": () => (/* binding */ triggerRef),
/* harmony export */   "qj": () => (/* binding */ reactive),
/* harmony export */   "qq": () => (/* binding */ ReactiveEffect),
/* harmony export */   "sT": () => (/* binding */ stop),
/* harmony export */   "yT": () => (/* binding */ isShallow)
/* harmony export */ });
/* unused harmony exports ITERATE_KEY, deferredComputed, enableTracking */
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3577);


function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
    constructor(detached = false) {
        this.detached = detached;
        /**
         * @internal
         */
        this._active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if ((false)) {}
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this._active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((false)) {}
}

const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit; // set was tracked
        }
    }
};
const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
                dep.delete(effect);
            }
            else {
                deps[ptr++] = dep;
            }
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};

const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(( false) ? 0 : '');
const MAP_KEY_ITERATE_KEY = Symbol(( false) ? 0 : '');
class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) {
            return this.fn();
        }
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent) {
            if (parent === this) {
                return;
            }
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
                initDepMarkers(this);
            }
            else {
                cleanupEffect(this);
            }
            return this.fn();
        }
        finally {
            if (effectTrackDepth <= maxMarkerBits) {
                finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
            if (this.deferStop) {
                this.stop();
            }
        }
    }
    stop() {
        // stopped while running itself - defer the cleanup
        if (activeEffect === this) {
            this.deferStop = true;
        }
        else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
                this.onStop();
            }
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) {
        fn = fn.effect.fn;
    }
    const _effect = new ReactiveEffect(fn);
    if (options) {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(_effect, options);
        if (options.scope)
            recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) {
        _effect.run();
    }
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = createDep()));
        }
        const eventInfo = ( false)
            ? 0
            : undefined;
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    }
    else {
        // Full cleanup mode.
        shouldTrack = !dep.has(activeEffect);
    }
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (false) {}
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    let deps = [];
    if (type === "clear" /* TriggerOpTypes.CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        deps = [...depsMap.values()];
    }
    else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newLength) {
                deps.push(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            deps.push(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* TriggerOpTypes.ADD */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
                    // new index added to array -> length changes
                    deps.push(depsMap.get('length'));
                }
                break;
            case "delete" /* TriggerOpTypes.DELETE */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* TriggerOpTypes.SET */:
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const eventInfo = ( false)
        ? 0
        : undefined;
    if (deps.length === 1) {
        if (deps[0]) {
            if ((false)) {}
            else {
                triggerEffects(deps[0]);
            }
        }
    }
    else {
        const effects = [];
        for (const dep of deps) {
            if (dep) {
                effects.push(...dep);
            }
        }
        if ((false)) {}
        else {
            triggerEffects(createDep(effects));
        }
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    const effects = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(dep) ? dep : [...dep];
    for (const effect of effects) {
        if (effect.computed) {
            triggerEffect(effect, debuggerEventExtraInfo);
        }
    }
    for (const effect of effects) {
        if (!effect.computed) {
            triggerEffect(effect, debuggerEventExtraInfo);
        }
    }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
        if (false) {}
        if (effect.scheduler) {
            effect.scheduler();
        }
        else {
            effect.run();
        }
    }
}
function getDepFromReactive(object, key) {
    var _a;
    return (_a = targetMap.get(object)) === null || _a === void 0 ? void 0 : _a.get(key);
}

const isNonTrackableKeys = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
/*#__PURE__*/
Object.getOwnPropertyNames(Symbol)
    // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
    // but accessing them on Symbol leads to TypeError because Symbol is a strict mode
    // function
    .filter(key => key !== 'arguments' && key !== 'caller')
    .map(key => Symbol[key])
    .filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
const get$1 = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
        instrumentations[key] = function (...args) {
            const arr = toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get" /* TrackOpTypes.GET */, i + '');
            }
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) {
                // if that didn't work, run it again using raw values.
                return arr[key](...args.map(toRaw));
            }
            else {
                return res;
            }
        };
    });
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
        instrumentations[key] = function (...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function hasOwnProperty(key) {
    const obj = toRaw(this);
    track(obj, "has" /* TrackOpTypes.HAS */, key);
    return obj.hasOwnProperty(key);
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */) {
            return shallow;
        }
        else if (key === "__v_raw" /* ReactiveFlags.RAW */ &&
            receiver ===
                (isReadonly
                    ? shallow
                        ? shallowReadonlyMap
                        : readonlyMap
                    : shallow
                        ? shallowReactiveMap
                        : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
        if (!isReadonly) {
            if (targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
                return Reflect.get(arrayInstrumentations, key, receiver);
            }
            if (key === 'hasOwnProperty') {
                return hasOwnProperty;
            }
        }
        const res = Reflect.get(target, key, receiver);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* TrackOpTypes.GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - skip unwrap for Array + integer key.
            return targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? res : res.value;
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set$1 = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
            return false;
        }
        if (!shallow) {
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)
            ? Number(key) < target.length
            : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* TriggerOpTypes.ADD */, key, value);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
                trigger(target, "set" /* TriggerOpTypes.SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* TriggerOpTypes.DELETE */, key, undefined, oldValue);
    }
    return result;
}
function has$1(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* TrackOpTypes.HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* TrackOpTypes.ITERATE */, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get: get$1,
    set: set$1,
    deleteProperty,
    has: has$1,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((false)) {}
        return true;
    },
    deleteProperty(target, key) {
        if ((false)) {}
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* ReactiveFlags.RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "get" /* TrackOpTypes.GET */, key);
        }
        track(rawTarget, "get" /* TrackOpTypes.GET */, rawKey);
    }
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
    else if (target !== rawTarget) {
        // #3602 readonly(reactive(Map))
        // ensure that the nested reactive `Map` can do tracking for itself
        target.get(key);
    }
}
function has(key, isReadonly = false) {
    const target = this["__v_raw" /* ReactiveFlags.RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "has" /* TrackOpTypes.HAS */, key);
        }
        track(rawTarget, "has" /* TrackOpTypes.HAS */, rawKey);
    }
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* ReactiveFlags.RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* TrackOpTypes.ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* TriggerOpTypes.ADD */, value, value);
    }
    return this;
}
function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* TriggerOpTypes.ADD */, key, value);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set" /* TriggerOpTypes.SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((false)) {}
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* TriggerOpTypes.DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( false)
        ? 0
        : undefined;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* TriggerOpTypes.CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* ReactiveFlags.RAW */];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* ReactiveFlags.RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((false)) {}
        return type === "delete" /* TriggerOpTypes.DELETE */ ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get(key) {
            return get(this, key);
        },
        get size() {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get(key) {
            return get(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get(key) {
            return get(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */),
        set: createReadonlyMethod("set" /* TriggerOpTypes.SET */),
        delete: createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */),
        clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get(key) {
            return get(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */),
        set: createReadonlyMethod("set" /* TriggerOpTypes.SET */),
        delete: createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */),
        clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
    iteratorMethods.forEach(method => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? isReadonly
            ? shallowReadonlyInstrumentations
            : shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* ReactiveFlags.RAW */) {
            return target;
        }
        return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* TargetType.COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* TargetType.COLLECTION */;
        default:
            return 0 /* TargetType.INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* ReactiveFlags.SKIP */] || !Object.isExtensible(value)
        ? 0 /* TargetType.INVALID */
        : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
        if ((false)) {}
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* ReactiveFlags.RAW */] &&
        !(isReadonly && target["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only specific value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* TargetType.INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* TargetType.COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
    }
    return !!(value && value["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* ReactiveFlags.IS_READONLY */]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
    return value;
}
const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;

function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        if ((false)) {}
        else {
            trackEffects(ref.dep || (ref.dep = createDep()));
        }
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    const dep = ref.dep;
    if (dep) {
        if ((false)) {}
        else {
            triggerEffects(dep);
        }
    }
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref) {
    triggerRefValue(ref, ( false) ? 0 : void 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.dep = undefined;
        this.__v_isRef = true;
        const { get, set } = factory(() => trackRefValue(this), () => triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (false) {}
    const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val)
        ? val
        : new ObjectRefImpl(object, key, defaultValue);
}

var _a$1;
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR) {
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this[_a$1] = false;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* ReactiveFlags.IS_READONLY */] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
_a$1 = "__v_isReadonly" /* ReactiveFlags.IS_READONLY */;
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ( false)
            ? 0
            : _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (false) {}
    return cRef;
}

var _a;
const tick = /*#__PURE__*/ (/* unused pure expression or super */ null && (Promise.resolve()));
const queue = (/* unused pure expression or super */ null && ([]));
let queued = false;
const scheduler = (fn) => {
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = () => {
    for (let i = 0; i < queue.length; i++) {
        queue[i]();
    }
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter) {
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter, (computedTrigger) => {
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                }
                else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler(() => {
                        if (this.effect.active && this._get() !== valueToCompare) {
                            triggerRefValue(this);
                        }
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep) {
                    if (e.computed instanceof DeferredComputedRefImpl) {
                        e.scheduler(true /* computedTrigger */);
                    }
                }
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return (this._value = this.effect.run());
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* ReactiveFlags.IS_READONLY */;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}




/***/ }),

/***/ 6252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$d": () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   "$y": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.$y),
/* harmony export */   "Ah": () => (/* binding */ onUnmounted),
/* harmony export */   "B": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "BK": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.BK),
/* harmony export */   "Bj": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.Bj),
/* harmony export */   "Bz": () => (/* binding */ defineEmits),
/* harmony export */   "C3": () => (/* binding */ transformVNodeArgs),
/* harmony export */   "C_": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass),
/* harmony export */   "Cn": () => (/* binding */ popScopeId),
/* harmony export */   "EB": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EB),
/* harmony export */   "Eo": () => (/* binding */ createHydrationRenderer),
/* harmony export */   "F4": () => (/* binding */ guardReactiveProps),
/* harmony export */   "FN": () => (/* binding */ getCurrentInstance),
/* harmony export */   "Fl": () => (/* binding */ computed),
/* harmony export */   "G": () => (/* binding */ ssrUtils),
/* harmony export */   "HX": () => (/* binding */ withScopeId),
/* harmony export */   "HY": () => (/* binding */ Fragment),
/* harmony export */   "Ho": () => (/* binding */ cloneVNode),
/* harmony export */   "IU": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.IU),
/* harmony export */   "JJ": () => (/* binding */ provide),
/* harmony export */   "Jd": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "KU": () => (/* binding */ callWithErrorHandling),
/* harmony export */   "Ko": () => (/* binding */ renderList),
/* harmony export */   "LL": () => (/* binding */ resolveDynamicComponent),
/* harmony export */   "MW": () => (/* binding */ defineProps),
/* harmony export */   "MX": () => (/* binding */ withMemo),
/* harmony export */   "Mr": () => (/* binding */ initCustomFormatter),
/* harmony export */   "Nv": () => (/* binding */ createSlots),
/* harmony export */   "OT": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.OT),
/* harmony export */   "Ob": () => (/* binding */ KeepAlive),
/* harmony export */   "P$": () => (/* binding */ BaseTransition),
/* harmony export */   "PG": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.PG),
/* harmony export */   "Q2": () => (/* binding */ resolveDirective),
/* harmony export */   "Q6": () => (/* binding */ getTransitionRawChildren),
/* harmony export */   "RC": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "Rh": () => (/* binding */ watchPostEffect),
/* harmony export */   "Rr": () => (/* binding */ useSlots),
/* harmony export */   "S3": () => (/* binding */ handleError),
/* harmony export */   "SU": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.SU),
/* harmony export */   "U2": () => (/* binding */ resolveTransitionHooks),
/* harmony export */   "Uc": () => (/* binding */ ssrContextKey),
/* harmony export */   "Uk": () => (/* binding */ createTextVNode),
/* harmony export */   "Um": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.Um),
/* harmony export */   "Us": () => (/* binding */ createRenderer),
/* harmony export */   "Vh": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.Vh),
/* harmony export */   "WI": () => (/* binding */ renderSlot),
/* harmony export */   "WL": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.WL),
/* harmony export */   "WY": () => (/* binding */ defineExpose),
/* harmony export */   "Wm": () => (/* binding */ createVNode),
/* harmony export */   "Wu": () => (/* binding */ assertNumber),
/* harmony export */   "X3": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.X3),
/* harmony export */   "XI": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.XI),
/* harmony export */   "Xl": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.Xl),
/* harmony export */   "Xn": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "Y1": () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   "Y3": () => (/* binding */ nextTick),
/* harmony export */   "Y8": () => (/* binding */ useTransitionState),
/* harmony export */   "YP": () => (/* binding */ watch),
/* harmony export */   "YS": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.YS),
/* harmony export */   "Yq": () => (/* binding */ onRenderTriggered),
/* harmony export */   "ZK": () => (/* binding */ warn),
/* harmony export */   "ZM": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ZM),
/* harmony export */   "Zq": () => (/* binding */ useSSRContext),
/* harmony export */   "_": () => (/* binding */ createBaseVNode),
/* harmony export */   "_A": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   "aZ": () => (/* binding */ defineComponent),
/* harmony export */   "b9": () => (/* binding */ withDefaults),
/* harmony export */   "bT": () => (/* binding */ onRenderTracked),
/* harmony export */   "bv": () => (/* binding */ onMounted),
/* harmony export */   "cE": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.cE),
/* harmony export */   "d1": () => (/* binding */ onErrorCaptured),
/* harmony export */   "dD": () => (/* binding */ pushScopeId),
/* harmony export */   "dG": () => (/* binding */ mergeProps),
/* harmony export */   "dl": () => (/* binding */ onActivated),
/* harmony export */   "dq": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.dq),
/* harmony export */   "ec": () => (/* binding */ setDevtoolsHook),
/* harmony export */   "eq": () => (/* binding */ resolveFilter),
/* harmony export */   "f3": () => (/* binding */ inject),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "hR": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   "i8": () => (/* binding */ version),
/* harmony export */   "iD": () => (/* binding */ createElementBlock),
/* harmony export */   "iH": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.iH),
/* harmony export */   "ic": () => (/* binding */ onUpdated),
/* harmony export */   "j4": () => (/* binding */ createBlock),
/* harmony export */   "j5": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle),
/* harmony export */   "kC": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   "kq": () => (/* binding */ createCommentVNode),
/* harmony export */   "l1": () => (/* binding */ useAttrs),
/* harmony export */   "lA": () => (/* binding */ isVNode),
/* harmony export */   "lR": () => (/* binding */ Teleport),
/* harmony export */   "m0": () => (/* binding */ watchEffect),
/* harmony export */   "mW": () => (/* binding */ devtools),
/* harmony export */   "mv": () => (/* binding */ withAsyncContext),
/* harmony export */   "mx": () => (/* binding */ toHandlers),
/* harmony export */   "n4": () => (/* binding */ Suspense),
/* harmony export */   "nK": () => (/* binding */ setTransitionHooks),
/* harmony export */   "nQ": () => (/* binding */ isMemoSame),
/* harmony export */   "nZ": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.nZ),
/* harmony export */   "oR": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.oR),
/* harmony export */   "of": () => (/* binding */ isRuntimeOnly),
/* harmony export */   "p1": () => (/* binding */ createPropsRestProxy),
/* harmony export */   "qG": () => (/* binding */ Static),
/* harmony export */   "qZ": () => (/* binding */ setBlockTracking),
/* harmony export */   "qb": () => (/* binding */ queuePostFlushCb),
/* harmony export */   "qj": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.qj),
/* harmony export */   "qq": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.qq),
/* harmony export */   "ry": () => (/* binding */ compatUtils),
/* harmony export */   "sT": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.sT),
/* harmony export */   "se": () => (/* binding */ onDeactivated),
/* harmony export */   "sv": () => (/* binding */ Comment),
/* harmony export */   "uE": () => (/* binding */ createStaticVNode),
/* harmony export */   "u_": () => (/* binding */ mergeDefaults),
/* harmony export */   "up": () => (/* binding */ resolveComponent),
/* harmony export */   "vl": () => (/* binding */ onServerPrefetch),
/* harmony export */   "vs": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeProps),
/* harmony export */   "w5": () => (/* binding */ withCtx),
/* harmony export */   "wF": () => (/* binding */ onBeforeMount),
/* harmony export */   "wg": () => (/* binding */ openBlock),
/* harmony export */   "wy": () => (/* binding */ withDirectives),
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "yT": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.yT),
/* harmony export */   "yX": () => (/* binding */ watchSyncEffect),
/* harmony export */   "zw": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2262);
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3577);





const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    if (true)
        return;
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .pauseTracking */ .Jd)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* ErrorCodes.APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .resetTracking */ .lk)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(value)) {
        value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(value);
        return raw ? value : [`${key}=`, value];
    }
}
/**
 * @internal
 */
function assertNumber(val, type) {
    if (true)
        return;
    if (val === undefined) {
        return;
    }
    else if (typeof val !== 'number') {
        warn(`${type} is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        warn(`${type} is NaN - ` + 'the duration expression might be incorrect.');
    }
}

const ErrorTypeStrings = {
    ["sp" /* LifecycleHooks.SERVER_PREFETCH */]: 'serverPrefetch hook',
    ["bc" /* LifecycleHooks.BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* LifecycleHooks.CREATED */]: 'created hook',
    ["bm" /* LifecycleHooks.BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* LifecycleHooks.MOUNTED */]: 'mounted hook',
    ["bu" /* LifecycleHooks.BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* LifecycleHooks.UPDATED */]: 'updated',
    ["bum" /* LifecycleHooks.BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* LifecycleHooks.UNMOUNTED */]: 'unmounted hook',
    ["a" /* LifecycleHooks.ACTIVATED */]: 'activated hook',
    ["da" /* LifecycleHooks.DEACTIVATED */]: 'deactivated hook',
    ["ec" /* LifecycleHooks.ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* LifecycleHooks.RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* LifecycleHooks.RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* ErrorCodes.SETUP_FUNCTION */]: 'setup function',
    [1 /* ErrorCodes.RENDER_FUNCTION */]: 'render function',
    [2 /* ErrorCodes.WATCH_GETTER */]: 'watcher getter',
    [3 /* ErrorCodes.WATCH_CALLBACK */]: 'watcher callback',
    [4 /* ErrorCodes.WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* ErrorCodes.NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* ErrorCodes.VNODE_HOOK */]: 'vnode hook',
    [8 /* ErrorCodes.DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* ErrorCodes.TRANSITION_HOOK */]: 'transition hook',
    [10 /* ErrorCodes.APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* ErrorCodes.APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* ErrorCodes.FUNCTION_REF */]: 'ref function',
    [13 /* ErrorCodes.ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* ErrorCodes.SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( false) ? 0 : type;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* ErrorCodes.APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((false)) {}
    else {
        // recover in prod to reduce the impact on end-user
        console.error(err);
    }
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? (start = middle + 1) : (end = middle);
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if (!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) {
            queue.push(job);
        }
        else {
            queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
        queue.splice(i, 1);
    }
}
function queuePostFlushCb(cb) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
        if (!activePostFlushCbs ||
            !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
            pendingPostFlushCbs.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
}
function flushPreFlushCbs(seen, 
// if currently flushing, skip the current job itself
i = isFlushing ? flushIndex + 1 : 0) {
    if ((false)) {}
    for (; i < queue.length; i++) {
        const cb = queue[i];
        if (cb && cb.pre) {
            if (false) {}
            queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((false)) {}
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (false) {}
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
    const diff = getId(a) - getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre)
            return -1;
        if (b.pre && !a.pre)
            return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((false)) {}
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort(comparator);
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = ( false)
        ? 0
        : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (false) {}
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* ErrorCodes.SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
            return true;
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if ((false)) {}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
        return;
    }
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [...record.instances].forEach(instance => {
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [...record.instances];
    for (const instance of instances) {
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) {
                updateComponentDef(oldComp, newComp);
            }
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        }
        else if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(() => {
        for (const instance of instances) {
            hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
        }
    });
}
function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
        if (key !== '__file' && !(key in newComp)) {
            delete oldComp[key];
        }
    }
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
    if (devtools) {
        devtools.emit(event, ...args);
    }
    else if (!devtoolsNotInstalled) {
        buffer.push({ event, args });
    }
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
        buffer = [];
    }
    else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== 'undefined' &&
        // some envs mock window but not fully
        window.HTMLElement &&
        // also exclude jsdom
        !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
        const replay = (target.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []);
        replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(() => {
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    }
    else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit$1("app:init" /* DevtoolsHooks.APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* DevtoolsHooks.APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* DevtoolsHooks.COMPONENT_ADDED */);
const devtoolsComponentUpdated = 
/*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* DevtoolsHooks.COMPONENT_UPDATED */);
const _devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* DevtoolsHooks.COMPONENT_REMOVED */);
const devtoolsComponentRemoved = (component) => {
    if (devtools &&
        typeof devtools.cleanupBuffer === 'function' &&
        // remove the component if it wasn't buffered
        !devtools.cleanupBuffer(component)) {
        _devtoolsComponentRemoved(component);
    }
};
function createDevtoolsComponentHook(hook) {
    return (component) => {
        emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ (/* unused pure expression or super */ null && (createDevtoolsPerformanceHook("perf:start" /* DevtoolsHooks.PERFORMANCE_START */)));
const devtoolsPerfEnd = /*#__PURE__*/ (/* unused pure expression or super */ null && (createDevtoolsPerformanceHook("perf:end" /* DevtoolsHooks.PERFORMANCE_END */)));
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit" /* DevtoolsHooks.COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
        return;
    const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if ((false)) {}
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        if (trim) {
            args = rawArgs.map(a => ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(a) ? a.trim() : a));
        }
        if (number) {
            args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber);
        }
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((false)) {}
    let handlerName;
    let handler = props[(handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event))] ||
        // also try camelCase event handler (#2249)
        props[(handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event)))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handler = props[(handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event)))];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            instance.emitted = {};
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) {
        return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        const extendEmits = (raw) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
            cache.set(comp, null);
        }
        return null;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
        cache.set(comp, normalized);
    }
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) ||
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) ||
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = (instance && instance.type.__scopeId) || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */
function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */
const withScopeId = (_id) => withCtx;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx)
        return fn;
    // already normalized
    if (fn._n) {
        return fn;
    }
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) {
            setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        }
        finally {
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) {
                setBlockTracking(1);
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentUpdated(ctx);
        }
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}

/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    if ((false)) {}
    try {
        if (vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (false) {}
            result = normalizeVNode(render.length > 1
                ? render(props, ( false)
                    ? 0
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
    }
    catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* ErrorCodes.RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (false /* PatchFlags.DEV_ROOT_FRAGMENT */) {}
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & (1 /* ShapeFlags.ELEMENT */ | 6 /* ShapeFlags.COMPONENT */)) {
                if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
                    // If a v-model listener (onUpdate:xxx) has a corresponding declared
                    // prop, it indicates this component expects to handle v-model and
                    // it should not fallthrough.
                    // related: #1543, #1643, #1989
                    fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
            }
            else if (false) {}
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (false) {}
        // clone before mutating since the root may be a hoisted vnode
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (false) {}
        root.transition = vnode.transition;
    }
    if (false) {}
    else {
        result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
            // ignore user comment
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) {
                    // has more than 1 non-comment child, return now
                    return;
                }
                else {
                    singleRoot = child;
                }
            }
        }
        else {
            return;
        }
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & (6 /* ShapeFlags.COMPONENT */ | 1 /* ShapeFlags.ELEMENT */) ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (false) {}
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* PatchFlags.DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PatchFlags.PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = (SuspenseImpl
    );
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
        eventListener();
    }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            triggerEvent(n2, 'onPending');
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if (false) {}
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = vnode.props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props.timeout) : undefined;
    if ((false)) {}
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((false)) {}
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* MoveType.ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* MoveType.ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, 'onResolve');
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, 'onFallback');
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
                suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* ErrorCodes.SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((false)) {}
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((false)) {}
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren
        ? normalizeSuspenseSlot(children.fallback)
        : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (false) {}
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) {
        s.dynamicChildren = block.filter(c => c !== s);
    }
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if ((false)) {}
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)
                ? defaultValue.call(instance.proxy)
                : defaultValue;
        }
        else if ((false)) {}
    }
    else if ((false)) {}
}

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, ( false) ? 0 : { flush: 'post' });
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, ( false) ? 0 : { flush: 'sync' });
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (false) {}
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
    if (false) {}
    const warnInvalidSource = (s) => {
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    const instance = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentScope */ .nZ)() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
    // const instance = currentInstance
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(source)) {
        getter = () => source.value;
        forceTrigger = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isShallow */ .yT)(source);
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isReactive */ .PG)(source)) {
        getter = () => source;
        deep = true;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some(s => (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isReactive */ .PG)(s) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isShallow */ .yT)(s));
        getter = () => source.map(s => {
            if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(s)) {
                return s.value;
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isReactive */ .PG)(s)) {
                return traverse(s);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
                return callWithErrorHandling(s, instance, 2 /* ErrorCodes.WATCH_GETTER */);
            }
            else {
                ( false) && 0;
            }
        });
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* ErrorCodes.WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [onCleanup]);
            };
        }
    }
    else {
        getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
        ( false) && 0;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
        cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* ErrorCodes.WATCH_CLEANUP */);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager or sync flush
    let ssrCleanup;
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        if (flush === 'sync') {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        }
        else {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
        }
    }
    let oldValue = isMultiSource
        ? new Array(source.length).fill(INITIAL_WATCHER_VALUE)
        : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!effect.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some((v, i) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i]))
                    : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) ||
                (false  )) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE
                        ? undefined
                        : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE
                            ? []
                            : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            effect.run();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job; // the scheduler function gets called directly
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        job.pre = true;
        if (instance)
            job.id = instance.uid;
        scheduler = () => queueJob(job);
    }
    const effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .ReactiveEffect */ .qq(getter, scheduler);
    if ((false)) {}
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = effect.run();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    }
    else {
        effect.run();
    }
    const unwatch = () => {
        effect.stop();
        if (instance && instance.scope) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.scope.effects, effect);
        }
    };
    if (ssrCleanup)
        ssrCleanup.push(unwatch);
    return unwatch;
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)
        ? source.includes('.')
            ? createPathGetter(publicThis, source)
            : () => publicThis[source]
        : source.bind(publicThis, publicThis);
    let cb;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
        cb = value;
    }
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
        setCurrentInstance(cur);
    }
    else {
        unsetCurrentInstance();
    }
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function traverse(value, seen) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || value["__v_skip" /* ReactiveFlags.SKIP */]) {
        return value;
    }
    seen = seen || new Set();
    if (seen.has(value)) {
        return value;
    }
    seen.add(value);
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(value)) {
        traverse(value.value, seen);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                // locate first non-comment child
                for (const c of children) {
                    if (c.type !== Comment) {
                        if (false) {}
                        child = c;
                        hasFound = true;
                        if (true)
                            break;
                    }
                }
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(props);
            const { mode } = rawProps;
            // check mode
            if (false) {}
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        // #6835
                        // it also needs to be updated when active is undefined
                        if (instance.update.active !== false) {
                            instance.update();
                        }
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out' && innerChild.type !== Comment) {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* ErrorCodes.TRANSITION_HOOK */, args);
    };
    const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook(hook, args);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
            if (hook.every(hook => hook.length <= 1))
                done();
        }
        else if (hook.length <= 1) {
            done();
        }
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                callAsyncHook(hook, [el, done]);
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                callAsyncHook(onLeave, [el, done]);
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // #5360 inherit parent key in case of <template v-for>
        const key = parentKey == null
            ? child.key
            : String(parentKey) + String(child.key != null ? child.key : i);
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* PatchFlags.BAIL */;
        }
    }
    return ret;
}

// implementation, close to no-op
function defineComponent(options) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(err => {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise((resolve, reject) => {
                            const userRetry = () => resolve(retry());
                            const userFail = () => reject(err);
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then((comp) => {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (false) {}
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (false) {}
                    resolvedComp = comp;
                    return comp;
                })));
    };
    return defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved() {
            return resolvedComp;
        },
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ErrorCodes.ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if ((suspensible && instance.suspense) ||
                (isInSSRComponentSetup)) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(false);
            const error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)();
            const delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .iH)(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    // parent is keep-alive, force update so the loaded component's
                    // name is taken into account
                    queueJob(instance.parent.update);
                }
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, parent) {
    const { ref, props, children, ce } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    // pass the custom element callback on to the inner comp
    // and remove it from the async wrapper
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) {
            return () => {
                const children = slots.default && slots.default();
                return children && children.length === 1 ? children[0] : children;
            };
        }
        const cache = new Map();
        const keys = new Set();
        let current = null;
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.__v_cache = cache;
        }
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* MoveType.ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
            if (( false) || __VUE_PROD_DEVTOOLS__) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* MoveType.LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
            if (( false) || __VUE_PROD_DEVTOOLS__) {
                // Update components tree
                devtoolsComponentAdded(instance);
            }
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post', deep: true });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((false)) {}
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode)
                ? vnode.type.__asyncResolved || {}
                : comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
        return pattern.split(',').includes(name);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isRegExp)(pattern)) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* LifecycleHooks.ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* LifecycleHooks.DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            return hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    // bitwise operations to remove keep alive flags
    vnode.shapeFlag &= ~256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */;
    vnode.shapeFlag &= ~512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ? vnode.ssContent : vnode;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .pauseTracking */ .Jd)();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                unsetCurrentInstance();
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .resetTracking */ .lk)();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((false)) {}
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup || lifecycle === "sp" /* LifecycleHooks.SERVER_PREFETCH */) &&
    injectHook(lifecycle, (...args) => hook(...args), target);
const onBeforeMount = createHook("bm" /* LifecycleHooks.BEFORE_MOUNT */);
const onMounted = createHook("m" /* LifecycleHooks.MOUNTED */);
const onBeforeUpdate = createHook("bu" /* LifecycleHooks.BEFORE_UPDATE */);
const onUpdated = createHook("u" /* LifecycleHooks.UPDATED */);
const onBeforeUnmount = createHook("bum" /* LifecycleHooks.BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* LifecycleHooks.UNMOUNTED */);
const onServerPrefetch = createHook("sp" /* LifecycleHooks.SERVER_PREFETCH */);
const onRenderTriggered = createHook("rtg" /* LifecycleHooks.RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* LifecycleHooks.RENDER_TRACKED */);
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* LifecycleHooks.ERROR_CAPTURED */, hook, target);
}

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( false) && 0;
        return vnode;
    }
    const instance = getExposeProxy(internalInstance) ||
        internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ] = directives[i];
        if (dir) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
                dir = {
                    mounted: dir,
                    updated: dir
                };
            }
            if (dir.deep) {
                traverse(value);
            }
            bindings.push({
                dir,
                instance,
                value,
                oldValue: void 0,
                arg,
                modifiers
            });
        }
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .pauseTracking */ .Jd)();
            callWithAsyncErrorHandling(hook, instance, 8 /* ErrorCodes.DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .resetTracking */ .lk)();
        }
    }
}

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false /* do not include inferred name to avoid breaking existing code */);
            if (selfName &&
                (selfName === name ||
                    selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) ||
                    selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) {
            // fallback to implicit self-reference
            return Component;
        }
        if (false) {}
        return res;
    }
    else if ((false)) {}
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] ||
            registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]));
}

/**
 * Actual implementation
 */
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = (cache && cache[index]);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
        }
    }
    else if (typeof source === 'number') {
        if (false) {}
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, (item, i) => renderItem(item, i, undefined, cached && cached[i]));
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    }
    else {
        ret = [];
    }
    if (cache) {
        cache[index] = ret;
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.key
                ? (...args) => {
                    const res = slot.fn(...args);
                    // attach branch key so each conditional branch is considered a
                    // different fragment
                    if (res)
                        res.key = slot.key;
                    return res;
                }
                : slot.fn;
        }
    }
    return slots;
}

/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE ||
        (currentRenderingInstance.parent &&
            isAsyncWrapper(currentRenderingInstance.parent) &&
            currentRenderingInstance.parent.isCE)) {
        if (name !== 'default')
            props.name = name;
        return createVNode('slot', props, fallback && fallback());
    }
    let slot = slots[name];
    if (false) {}
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) {
        slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key ||
            // slot content array of a dynamic conditional slot may have a branch
            // key attached in the `createSlots` helper, respect that
            (validSlotContent && validSlotContent.key) ||
            `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* SlotFlags.STABLE */
        ? 64 /* PatchFlags.STABLE_FRAGMENT */
        : -2 /* PatchFlags.BAIL */);
    if (!noSlotted && rendered.scopeId) {
        rendered.slotScopeIds = [rendered.scopeId + '-s'];
    }
    if (slot && slot._c) {
        slot._d = true;
    }
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(child => {
        if (!isVNode(child))
            return true;
        if (child.type === Comment)
            return false;
        if (child.type === Fragment &&
            !ensureValidVNode(child.children))
            return false;
        return true;
    })
        ? vnodes
        : null;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (false) {}
    for (const key in obj) {
        ret[preserveCaseIfNecessary && /[A-Z]/.test(key)
            ? `on:${key}`
            : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
    }
    return ret;
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => {
    if (!i)
        return null;
    if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = 
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( false) ? 0 : i.props),
    $attrs: i => (( false) ? 0 : i.attrs),
    $slots: i => (( false) ? 0 : i.slots),
    $refs: i => (( false) ? 0 : i.refs),
    $parent: i => getPublicInstance(i.parent),
    $root: i => getPublicInstance(i.root),
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP)
});
const isReservedPrefix = (key) => key === '_' || key === '$';
const hasSetupBinding = (state, key) => state !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && !state.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // for internal formatters to know that this is a Vue instance
        if (false) {}
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 1 /* AccessTypes.SETUP */:
                        return setupState[key];
                    case 2 /* AccessTypes.DATA */:
                        return data[key];
                    case 4 /* AccessTypes.CONTEXT */:
                        return ctx[key];
                    case 3 /* AccessTypes.PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* AccessTypes.SETUP */;
                return setupState[key];
            }
            else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
                accessCache[key] = 2 /* AccessTypes.DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* AccessTypes.PROPS */;
                return props[key];
            }
            else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* AccessTypes.CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
                accessCache[key] = 0 /* AccessTypes.OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .track */ .j)(instance, "get" /* TrackOpTypes.GET */, key);
                ( false) && 0;
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* AccessTypes.CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key))) {
            {
                return globalProperties[key];
            }
        }
        else if (false) {}
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        }
        else if (false) {}
        else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
            data[key] = value;
            return true;
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
            ( false) && 0;
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( false) &&
                0;
            return false;
        }
        else {
            if (false) {}
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (!!accessCache[key] ||
            (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) ||
            hasSetupBinding(setupState, key) ||
            ((normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key));
    },
    defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
            // invalidate key cache of a getter based property #5417
            target._.accessCache[key] = 0;
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(descriptor, 'value')) {
            this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
    }
};
if (false) {}
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);
        if (false) {}
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: NOOP
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach(key => {
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                    `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => setupState[key],
                set: NOOP
            });
        }
    });
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) {
        callHook(options.beforeCreate, instance, "bc" /* LifecycleHooks.BEFORE_CREATE */);
    }
    const { 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, 
    // public API
    expose, inheritAttrs, 
    // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = ( false) ? 0 : null;
    if ((false)) {}
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
                // In dev mode, we use the `createRenderContext` function to define
                // methods to the proxy target, and those are read-only but
                // reconfigurable, so it needs to be redefined here
                if ((false)) {}
                else {
                    ctx[key] = methodHandler.bind(publicThis);
                }
                if ((false)) {}
            }
            else if ((false)) {}
        }
    }
    if (dataOptions) {
        if (false) {}
        const data = dataOptions.call(publicThis, publicThis);
        if (false) {}
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
            ( false) && 0;
        }
        else {
            instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .reactive */ .qj)(data);
            if ((false)) {}
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)
                ? opt.bind(publicThis, publicThis)
                : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
            if (false) {}
            const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set)
                ? opt.set.bind(publicThis)
                : ( false)
                    ? 0
                    : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
            const c = computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((false)) {}
        }
    }
    if (watchOptions) {
        for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
        }
    }
    if (provideOptions) {
        const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions)
            ? provideOptions.call(publicThis)
            : provideOptions;
        Reflect.ownKeys(provides).forEach(key => {
            provide(key, provides[key]);
        });
    }
    if (created) {
        callHook(created, instance, "c" /* LifecycleHooks.CREATED */);
    }
    function registerLifecycleHook(register, hook) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
            hook.forEach(_hook => register(_hook.bind(publicThis)));
        }
        else if (hook) {
            register(hook.bind(publicThis));
        }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach(key => {
                Object.defineProperty(exposed, key, {
                    get: () => publicThis[key],
                    set: val => (publicThis[key] = val)
                });
            });
        }
        else if (!instance.exposed) {
            instance.exposed = {};
        }
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        instance.render = render;
    }
    if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
    }
    // asset options.
    if (components)
        instance.components = components;
    if (directives)
        instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP, unwrapRef = false) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
            if ('default' in opt) {
                injected = inject(opt.from || key, opt.default, true /* treat default function as factory */);
            }
            else {
                injected = inject(opt.from || key);
            }
        }
        else {
            injected = inject(opt);
        }
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    get: () => injected.value,
                    set: v => (injected.value = v)
                });
            }
            else {
                if ((false)) {}
                ctx[key] = injected;
            }
        }
        else {
            ctx[key] = injected;
        }
        if ((false)) {}
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)
        ? hook.map(h => h.bind(instance.proxy))
        : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
        const handler = ctx[raw];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
            watch(getter, handler);
        }
        else if ((false)) {}
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
                watch(getter, handler, raw);
            }
            else if ((false)) {}
        }
    }
    else if ((false)) {}
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
        resolved = cached;
    }
    else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
            resolved = base;
        }
    }
    else {
        resolved = {};
        if (globalMixins.length) {
            globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
        }
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(base)) {
        cache.set(base, resolved);
    }
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
        if (asMixin && key === 'expose') {
            ( false) &&
                0;
        }
        else {
            const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) {
        return to;
    }
    if (!to) {
        return from;
    }
    return function mergedDataFn() {
        return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend))((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
        }
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
    return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to)
        return from;
    if (!from)
        return to;
    const merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to);
    for (const key in from) {
        merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
            props[key] = undefined;
        }
    }
    // validation
    if ((false)) {}
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .shallowReactive */ .Um)(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function isInHmrContext(instance) {
    while (instance) {
        if (instance.type.__hmrId)
            return true;
        instance = instance.parent;
    }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
     true &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* PatchFlags.FULL_PROPS */)) {
        if (patchFlag & 8 /* PatchFlags.PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                let key = propsToUpdate[i];
                // skip if the prop key is a declared emit event listener
                if (isEmitListener(instance.emitsOptions, key)) {
                    continue;
                }
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    }
                    else {
                        const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
                    }
                }
                else {
                    if (value !== attrs[key]) {
                        attrs[key] = value;
                        hasAttrsChanged = true;
                    }
                }
            }
        }
    }
    else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
        }
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true /* isAbsent */);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps ||
                    (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) &&
                        (!false ))) {
                    delete attrs[key];
                    hasAttrsChanged = true;
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .trigger */ .X$)(instance, "set" /* TriggerOpTypes.SET */, '$attrs');
    }
    if ((false)) {}
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
        for (let key in rawProps) {
            // key, ref are reserved and never passed down
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                continue;
            }
            const value = rawProps[key];
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                    props[camelKey] = value;
                }
                else {
                    (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(props);
        const castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) {
                    value = propsDefaults[key];
                }
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* BooleanFlags.shouldCast */]) {
            if (isAbsent && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* BooleanFlags.shouldCastTrue */] &&
                (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
        return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
            cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
        }
        return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (false) {}
            const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        if (false) {}
        for (const key in raw) {
            const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? { type: opt } : Object.assign({}, opt));
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* BooleanFlags.shouldCast */] = booleanIndex > -1;
                    prop[1 /* BooleanFlags.shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    const res = [normalized, needCastKeys];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
        cache.set(comp, res);
    }
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((false)) {}
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
    return match ? match[2] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
        return expectedTypes.findIndex(t => isSameType(t, type));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = isArray(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap('String,Number,Boolean,Function,Symbol,BigInt')));
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else if (expectedType === 'null') {
        valid = value === null;
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(capitalize).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
        // already normalized - #5353
        return rawSlot;
    }
    const normalized = withCtx((...args) => {
        if (false) {}
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if (false) {}
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (false) {}
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(children);
            // make compiler marker non-enumerable
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (false) {}
            else if (optimized && type === 1 /* SlotFlags.STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* SlotFlags.STABLE */) {
                    delete slots._;
                }
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rootComponent)) {
            rootComponent = Object.assign({}, rootComponent);
        }
        if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
            ( false) && 0;
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((false)) {}
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( false) && 0;
                }
                else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((false)) {}
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                    }
                    else if ((false)) {}
                }
                else if ((false)) {}
                return app;
            },
            component(name, component) {
                if ((false)) {}
                if (!component) {
                    return context.components[name];
                }
                if (false) {}
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((false)) {}
                if (!directive) {
                    return context.directives[name];
                }
                if (false) {}
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    // #5571
                    if (false) {}
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((false)) {}
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer, isSVG);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        app._instance = vnode.component;
                        devtoolsInitApp(app, version);
                    }
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
                else if ((false)) {}
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (( false) || __VUE_PROD_DEVTOOLS__) {
                        app._instance = null;
                        devtoolsUnmountApp(app);
                    }
                    delete app._container.__vue_app__;
                }
                else if ((false)) {}
            },
            provide(key, value) {
                if (false) {}
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

/**
 * Function for handling a template ref
 */
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
        // when mounting async components, nothing needs to be done,
        // because the template ref is forwarded to inner component
        return;
    }
    const refValue = vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */
        ? getExposeProxy(vnode.component) || vnode.component.proxy
        : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (false) {}
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(oldRef)) {
            oldRef.value = null;
        }
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
        callWithErrorHandling(ref, owner, 12 /* ErrorCodes.FUNCTION_REF */, [value, refs]);
    }
    else {
        const _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref);
        const _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(ref);
        if (_isString || _isRef) {
            const doSet = () => {
                if (rawRef.f) {
                    const existing = _isString
                        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)
                            ? setupState[ref]
                            : refs[ref]
                        : ref.value;
                    if (isUnmount) {
                        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(existing, refValue);
                    }
                    else {
                        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [refValue];
                                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                                    setupState[ref] = refs[ref];
                                }
                            }
                            else {
                                ref.value = [refValue];
                                if (rawRef.k)
                                    refs[rawRef.k] = ref.value;
                            }
                        }
                        else if (!existing.includes(refValue)) {
                            existing.push(refValue);
                        }
                    }
                }
                else if (_isString) {
                    refs[ref] = value;
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                        setupState[ref] = value;
                    }
                }
                else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k)
                        refs[rawRef.k] = value;
                }
                else if ((false)) {}
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            }
            else {
                doSet();
            }
        }
        else if ((false)) {}
    }
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* DOMNodeTypes.COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (!container.hasChildNodes()) {
            ( false) &&
                0;
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (patchFlag === -2 /* PatchFlags.BAIL */) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* DOMNodeTypes.TEXT */) {
                    // #5728 empty text node inside a slot can cause hydration failure
                    // because the server rendered HTML won't contain a text node
                    if (vnode.children === '') {
                        insert((vnode.el = createText('')), parentNode(node), node);
                        nextNode = node;
                    }
                    else {
                        nextNode = onMismatch();
                    }
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( false) &&
                            0;
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* DOMNodeTypes.COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (isFragmentStart) {
                    // entire template is static but SSRed as a fragment
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 /* DOMNodeTypes.ELEMENT */ || domType === 3 /* DOMNodeTypes.TEXT */) {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children +=
                                nextNode.nodeType === 1 /* DOMNodeTypes.ELEMENT */
                                    ? nextNode.outerHTML
                                    : nextNode.data;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                }
                else {
                    onMismatch();
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {
                    if (domType !== 1 /* DOMNodeTypes.ELEMENT */ ||
                        vnode.type.toLowerCase() !==
                            node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                    }
                }
                else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                    // #4293 teleport as component root
                    if (nextNode &&
                        isComment(nextNode) &&
                        nextNode.data === 'teleport end') {
                        nextNode = nextSibling(nextNode);
                    }
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode
                                ? nextNode.previousSibling
                                : container.lastChild;
                        }
                        else {
                            subTree =
                                node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                        }
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                }
                else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
                    if (domType !== 8 /* DOMNodeTypes.COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                }
                else if ((false)) {}
        }
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = (type === 'input' && dirs) || type === 'option';
        // skip props & children if this is hoisted static nodes
        // #5405 in dev, always hydrate children for HMR
        if (( false) || forcePatchValue || patchFlag !== -1 /* PatchFlags.HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (forcePatchValue ||
                    !optimized ||
                    patchFlag & (16 /* PatchFlags.FULL_PROPS */ | 32 /* PatchFlags.HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if ((forcePatchValue && key.endsWith('value')) ||
                            ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key))) {
                            patchProp(el, key, null, props[key], false, undefined, parentComponent);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (false) {}
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( false) &&
                        0;
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            else if (vnode.type === Text && !vnode.children) {
                continue;
            }
            else {
                hasMismatch = true;
                if (false) {}
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
        hasMismatch = true;
        ( false) &&
            0;
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

/* eslint-disable no-restricted-globals */
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        ( false) && 0;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        ( false) && 0;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {}
}

const queuePostRenderEffect = queueEffectWithSuspense
    ;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
    target.__VUE__ = true;
    if (( false) || __VUE_PROD_DEVTOOLS__) {
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized =  false ? 0 : !!n2.dynamicChildren) => {
        if (n1 === n2) {
            return;
        }
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* PatchFlags.BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((false)) {}
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if ((false)) {}
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
            hostSetElementText(el, vnode.children);
        }
        else if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
            mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'created');
        }
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        // props
        if (props) {
            for (const key in props) {
                if (key !== 'value' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                    hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            /**
             * Special case for setting value on DOM elements:
             * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
             * - it needs to be forced (#1471)
             * #2353 proposes adding another renderer option to configure this, but
             * the properties affects are so finite it is worth special casing it
             * here to reduce the complexity. (Special casing it also should not
             * affect non-DOM renderers)
             */
            if ('value' in props) {
                hostPatchProp(el, 'value', null, props.value);
            }
            if ((vnodeHook = props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHook, parentComponent, vnode);
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
            }
        }
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (false /* PatchFlags.DEV_ROOT_FRAGMENT */) {}
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* PatchFlags.FULL_PROPS */;
        const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        parentComponent && toggleRecurse(parentComponent, true);
        if (false) {}
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (false) {}
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* PatchFlags.CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* PatchFlags.STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PatchFlags.PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* PatchFlags.TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el &&
                // - In the case of a Fragment, we need to provide the actual parent
                // of the Fragment itself so it can move its children.
                (oldVNode.type === Fragment ||
                    // - In the case of different nodes, there is going to be a replacement
                    // which also requires the correct parent container
                    !isSameVNodeType(oldVNode, newVNode) ||
                    // - In the case of a component, it could contain anything.
                    oldVNode.shapeFlag & (6 /* ShapeFlags.COMPONENT */ | 64 /* ShapeFlags.TELEPORT */))
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
                for (const key in oldProps) {
                    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            for (const key in newProps) {
                // empty string is not valid prop
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if ('value' in newProps) {
                hostPatchProp(el, 'value', oldProps.value, newProps.value);
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (false) {}
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                if (false) {}
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if (false) {}
        if ((false)) {}
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        {
            if ((false)) {}
            setupComponent(instance);
            if ((false)) {}
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((false)) {}
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((false)) {}
                updateComponentPreRender(instance, n2, optimized);
                if ((false)) {}
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        const componentUpdateFn = () => {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
                }
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = () => {
                        if ((false)) {}
                        instance.subTree = renderComponentRoot(instance);
                        if ((false)) {}
                        if ((false)) {}
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        if ((false)) {}
                    };
                    if (isAsyncWrapperVNode) {
                        initialVNode.type.__asyncLoader().then(
                        // note: we are moving the render call into an async callback,
                        // which means it won't track dependencies - but it's ok because
                        // a server-rendered async wrapper is already in resolved state
                        // and it will never need to change.
                        () => !instance.isUnmounted && hydrateSubTree());
                    }
                    else {
                        hydrateSubTree();
                    }
                }
                else {
                    if ((false)) {}
                    const subTree = (instance.subTree = renderComponentRoot(instance));
                    if ((false)) {}
                    if ((false)) {}
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((false)) {}
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ||
                    (parent &&
                        isAsyncWrapper(parent.vnode) &&
                        parent.vnode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */)) {
                    instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                }
                instance.isMounted = true;
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentAdded(instance);
                }
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((false)) {}
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                toggleRecurse(instance, true);
                // render
                if ((false)) {}
                const nextTree = renderComponentRoot(instance);
                if ((false)) {}
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((false)) {}
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((false)) {}
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                }
                if (( false) || __VUE_PROD_DEVTOOLS__) {
                    devtoolsComponentUpdated(instance);
                }
                if ((false)) {}
            }
        };
        // create reactive effect for rendering
        const effect = (instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .ReactiveEffect */ .qq(componentUpdateFn, () => queueJob(update), instance.scope // track it in component's effect scope
        ));
        const update = (instance.update = () => effect.run());
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        if ((false)) {}
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .pauseTracking */ .Jd)();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs();
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .resetTracking */ .lk)();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
            else if (patchFlag & 256 /* PatchFlags.UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
        c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (false) {}
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* MoveType.REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* MoveType.REORDER */ &&
            shapeFlag & 1 /* ShapeFlags.ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* MoveType.ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ShapeFlags.ELEMENT */ && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            }
            else if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                patchFlag &
                    (128 /* PatchFlags.KEYED_FRAGMENT */ | 256 /* PatchFlags.UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeUnmounted)) ||
            shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            if (false) {}
            else {
                removeFragment(el, anchor);
            }
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ShapeFlags.ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if (false) {}
        const { bum, scope, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
        }
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container, isSVG) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        }
        flushPreFlushCbs();
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ShapeFlags.ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* PatchFlags.HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // #6852 also inherit for text nodes
            if (c2.type === Text) {
                c2.el = c1.el;
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (false) {}
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const isTargetSVG = (target) => typeof SVGElement !== 'undefined' && target instanceof SVGElement;
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
        if (!select) {
            ( false) &&
                0;
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( false) &&
                    0;
            }
            return target;
        }
    }
    else {
        if (false) {}
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        // #3302
        // HMR updated, force full diff
        if (false) {}
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( false)
                ? 0
                : createText(''));
            const mainAnchor = (n2.anchor = ( false)
                ? 0
                : createText(''));
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            }
            else if (false) {}
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TeleportMoveTypes.TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TeleportMoveTypes.TARGET_CHANGE */);
                    }
                    else if ((false)) {}
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TeleportMoveTypes.TOGGLE */);
                }
            }
        }
        updateCssVars(n2);
    },
    remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) {
            hostRemove(targetAnchor);
        }
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
                }
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* TeleportMoveTypes.REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TeleportMoveTypes.TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* TeleportMoveTypes.REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* MoveType.REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                // lookahead until we find the target anchor
                // we cannot rely on return value of hydrateChildren() because there
                // could be nested teleports
                let targetAnchor = targetNode;
                while (targetAnchor) {
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor &&
                        targetAnchor.nodeType === 8 &&
                        targetAnchor.data === 'teleport anchor') {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa =
                            vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
    // presence of .ut method indicates owner component uses css vars.
    // code path here can assume browser environment.
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while (node !== vnode.targetAnchor) {
            if (node.nodeType === 1)
                node.setAttribute('data-v-owner', ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}

const Fragment = Symbol(( false) ? 0 : undefined);
const Text = Symbol(( false) ? 0 : undefined);
const Comment = Symbol(( false) ? 0 : undefined);
const Static = Symbol(( false) ? 0 : undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren =
        isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
/**
 * @private
 */
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (false) {}
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for }) => {
    return (ref != null
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)
            ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for }
            : ref
        : null);
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ShapeFlags.ELEMENT */, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
            type.normalize(vnode);
        }
    }
    else if (children) {
        // compiled element vnode - if children is passed, only possible types are
        // string or Array.
        vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(children)
            ? 8 /* ShapeFlags.TEXT_CHILDREN */
            : 16 /* ShapeFlags.ARRAY_CHILDREN */;
    }
    // validate key
    if (false) {}
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (vnode.patchFlag > 0 || shapeFlag & 6 /* ShapeFlags.COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        vnode.patchFlag !== 32 /* PatchFlags.HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
const createVNode = (( false) ? 0 : _createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (false) {}
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
                currentBlock[currentBlock.indexOf(type)] = cloned;
            }
            else {
                currentBlock.push(cloned);
            }
        }
        cloned.patchFlag |= -2 /* PatchFlags.BAIL */;
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
            props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isProxy */ .X3)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
                style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
            }
            props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type)
        ? 1 /* ShapeFlags.ELEMENT */
        : isSuspense(type)
            ? 128 /* ShapeFlags.SUSPENSE */
            : isTeleport(type)
                ? 64 /* ShapeFlags.TELEPORT */
                : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type)
                    ? 4 /* ShapeFlags.STATEFUL_COMPONENT */
                    : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type)
                        ? 2 /* ShapeFlags.FUNCTIONAL_COMPONENT */
                        : 0;
    if (false) {}
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props)
        return null;
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isProxy */ .X3)(props) || InternalObjectKey in props
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props)
        : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children:  false
            ? 0
            : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* PatchFlags.FULL_PROPS */
                : patchFlag | 16 /* PatchFlags.FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
        cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
        // fragment
        return createVNode(Fragment, null, 
        // #3666, avoid reference pollution when reusing vnode
        child.slice());
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return cloneIfMounted(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return (child.el === null && child.patchFlag !== -1 /* PatchFlags.HOISTED */) ||
        child.memo
        ? child
        : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
        type = 16 /* ShapeFlags.ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & (1 /* ShapeFlags.ELEMENT */ | 64 /* ShapeFlags.TELEPORT */)) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        }
        else {
            type = 32 /* ShapeFlags.SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* SlotFlags.FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* SlotFlags.STABLE */) {
                    children._ = 1 /* SlotFlags.STABLE */;
                }
                else {
                    children._ = 2 /* SlotFlags.DYNAMIC */;
                    vnode.patchFlag |= 1024 /* PatchFlags.DYNAMIC_SLOTS */;
                }
            }
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* ShapeFlags.SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
            type = 16 /* ShapeFlags.ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* ShapeFlags.TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming &&
                    existing !== incoming &&
                    !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && existing.includes(incoming))) {
                    ret[key] = existing
                        ? [].concat(existing, incoming)
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* ErrorCodes.VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}

const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .EffectScope */ .Bj(true /* detached */),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    if ((false)) {}
    else {
        instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) {
        vnode.ce(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap('slot,component')));
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if ((false)) {}
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .markRaw */ .Xl)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    if ((false)) {}
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        setCurrentInstance(instance);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .pauseTracking */ .Jd)();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* ErrorCodes.SETUP_FUNCTION */, [( false) ? 0 : instance.props, setupContext]);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .resetTracking */ .lk)();
        unsetCurrentInstance();
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult
                    .then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult, isSSR);
                })
                    .catch(e => {
                    handleError(e, instance, 0 /* ErrorCodes.SETUP_FUNCTION */);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
                if (false) {}
            }
        }
        else {
            handleSetupResult(instance, setupResult, isSSR);
        }
    }
    else {
        finishComponentSetup(instance, isSSR);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) {
            // when the function's name is `ssrRender` (compiled by SFC inline mode),
            // set it as ssrRender instead.
            instance.ssrRender = setupResult;
        }
        else {
            instance.render = setupResult;
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
        if (false) {}
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (( false) || __VUE_PROD_DEVTOOLS__) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .proxyRefs */ .WL)(setupResult);
        if ((false)) {}
    }
    else if (false) {}
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = i => {
        if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    };
}
// dev only
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template ||
                resolveMergedOptions(instance).template;
            if (template) {
                if ((false)) {}
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                if ((false)) {}
            }
        }
        instance.render = (Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) {
            installWithProxy(instance);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && !(false )) {
        setCurrentInstance(instance);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .pauseTracking */ .Jd)();
        applyOptions(instance);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .resetTracking */ .lk)();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (false) {}
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, ( false)
        ? 0
        : {
            get(target, key) {
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .track */ .j)(instance, "get" /* TrackOpTypes.GET */, '$attrs');
                return target[key];
            }
        });
}
function createSetupContext(instance) {
    const expose = exposed => {
        if ((false)) {}
        instance.exposed = exposed || {};
    };
    let attrs;
    if ((false)) {}
    else {
        return {
            get attrs() {
                return attrs || (attrs = createAttrsProxy(instance));
            },
            slots: instance.slots,
            emit: instance.emit,
            expose
        };
    }
}
function getExposeProxy(instance) {
    if (instance.exposed) {
        return (instance.exposeProxy ||
            (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .proxyRefs */ .WL)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .markRaw */ .Xl)(instance.exposed)), {
                get(target, key) {
                    if (key in target) {
                        return target[key];
                    }
                    else if (key in publicPropertiesMap) {
                        return publicPropertiesMap[key](instance);
                    }
                },
                has(target, key) {
                    return key in target || key in publicPropertiesMap;
                }
            })));
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
function getComponentName(Component, includeInferred = true) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component)
        ? Component.displayName || Component.name
        : Component.name || (includeInferred && Component.__name);
}
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

const computed = ((getterOrOptions, debugOptions) => {
    // @ts-ignore
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .Fl)(getterOrOptions, debugOptions, isInSSRComponentSetup);
});

// dev only
const warnRuntimeUsage = (method) => warn(`${method}() is a compiler-hint helper that is only usable inside ` +
    `<script setup> of a single file component. Its arguments should be ` +
    `compiled away and passing it at runtime has no effect.`);
// implementation
function defineProps() {
    if ((false)) {}
    return null;
}
// implementation
function defineEmits() {
    if ((false)) {}
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
function defineExpose(exposed) {
    if ((false)) {}
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */
function withDefaults(props, defaults) {
    if ((false)) {}
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (false) {}
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    const props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)
        ? raw.reduce((normalized, p) => ((normalized[p] = {}), normalized), {})
        : raw;
    for (const key in defaults) {
        const opt = props[key];
        if (opt) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if ((false)) {}
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
        if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
                enumerable: true,
                get: () => props[key]
            });
        }
    }
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (false) {}
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(awaitable)) {
        awaitable = awaitable.catch(e => {
            setCurrentInstance(ctx);
            throw e;
        });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( false) ? 0 : ``);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            ( false) &&
                0;
        }
        return ctx;
    }
};

function isShallow(value) {
    return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */]);
}

function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */
    if (true) {
        return;
    }
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isRef */ .dq)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isReactive */ .PG)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, isShallow(obj) ? 'ShallowReactive' : 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isReadonly */ .$y)(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .isReadonly */ .$y)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, isShallow(obj) ? 'ShallowReadonly' : 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(instance.props)));
        }
        if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
            blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
            return ['object', { object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__/* .toRaw */ .IU)(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key)) ||
            ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (isShallow(v)) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
        return cached;
    }
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return (cache[index] = ret);
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
        return false;
    }
    for (let i = 0; i < prev.length; i++) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(prev[i], memo[i])) {
            return false;
        }
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(cached);
    }
    return true;
}

// Core API ------------------------------------------------------------------
const version = "3.2.47";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */
const ssrUtils = (_ssrUtils );
/**
 * @internal only exposed in compat builds
 */
const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */
const compatUtils = (null);




/***/ }),

/***/ 9963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.P$),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.sv),
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Bj),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.HY),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Ob),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.qq),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.qG),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.n4),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.lR),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.xv),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "TransitionGroup": () => (/* binding */ TransitionGroup),
/* harmony export */   "VueElement": () => (/* binding */ VueElement),
/* harmony export */   "assertNumber": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Wu),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KU),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__._A),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.kC),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Ho),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ry),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fl),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.j4),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.kq),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.iD),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Eo),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.p1),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Us),
/* harmony export */   "createSSRApp": () => (/* binding */ createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Nv),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.uE),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Uk),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Wm),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ZM),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.RC),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Bz),
/* harmony export */   "defineExpose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.WY),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.MW),
/* harmony export */   "defineSSRCustomElement": () => (/* binding */ defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mW),
/* harmony export */   "effect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cE),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.FN),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nZ),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Q6),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.F4),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.S3),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Mr),
/* harmony export */   "initDirectivesForSSR": () => (/* binding */ initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.f3),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nQ),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.X3),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.PG),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.$y),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.dq),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.of),
/* harmony export */   "isShallow": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.yT),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.lA),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Xl),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.u_),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.dG),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Y3),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.C_),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.vs),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.j5),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.dl),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.wF),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Jd),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Xn),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.se),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.d1),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.bv),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.bT),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Yq),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.EB),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.vl),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Ah),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ic),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.wg),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Cn),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.JJ),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.WL),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.dD),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.qb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.qj),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.OT),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.iH),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Y1),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.WI),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.up),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Q2),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.LL),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.eq),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.U2),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.qZ),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ec),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nK),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Um),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.YS),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.XI),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Uc),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "stop": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.sT),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.zw),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hR),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mx),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.IU),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Vh),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BK),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.C3),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.oR),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.SU),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.l1),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Zq),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Rr),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Y8),
/* harmony export */   "vModelCheckbox": () => (/* binding */ vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* binding */ vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* binding */ vModelRadio),
/* harmony export */   "vModelSelect": () => (/* binding */ vModelSelect),
/* harmony export */   "vModelText": () => (/* binding */ vModelText),
/* harmony export */   "vShow": () => (/* binding */ vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.i8),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ZK),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.YP),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.m0),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Rh),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.yX),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mv),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.w5),
/* harmony export */   "withDefaults": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.b9),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.wy),
/* harmony export */   "withKeys": () => (/* binding */ withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.MX),
/* harmony export */   "withModifiers": () => (/* binding */ withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.HX)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3577);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6252);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2262);




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const templateContainer = doc && /*#__PURE__*/ doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) {
            // cached
            while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling))
                    break;
            }
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                    template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(' ');
    }
    if (value == null) {
        el.removeAttribute('class');
    }
    else if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next);
    if (next && !isCssString) {
        if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
    }
    else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                style.cssText = next;
            }
        }
        else if (prev) {
            el.removeAttribute('style');
        }
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) {
            style.display = currentDisplay;
        }
    }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (val == null)
            val = '';
        if ((false)) {}
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);
        if (value == null || (isBoolean && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value))) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' &&
        el.tagName !== 'PROGRESS' &&
        // custom elements may use _value internally
        !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue ||
            // #4956: always set for OPTION elements because its value falls back to
            // textContent if no value attribute is present. And setting .value for
            // OPTION has no side effect
            el.tagName === 'OPTION') {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    let needRemove = false;
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value);
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            value = '';
            needRemove = true;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            value = 0;
            needRemove = true;
        }
    }
    // some properties perform value validation and throw,
    // some properties has getter, no setter, will error in 'use strict'
    // eg. <select :type="null"></select> <select :willValidate="null"></select>
    try {
        el[key] = value;
    }
    catch (e) {
        // do not warn if value is auto-coerced from nullish values
        if (false) {}
    }
    needRemove && el.removeAttribute(key);
}

function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ':' ? name.slice(3) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2));
    return [event, options];
}
// To avoid the overhead of repeatedly calling Date.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = /*#__PURE__*/ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => (cachedNow = 0)), (cachedNow = Date.now()));
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case vuejs/vue#6566
        // inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // this no longer happens for templates in Vue 3, but could still be
        // theoretically possible for hand-written render functions.
        // the solution: we save the timestamp when a handler is attached,
        // and also attach the timestamp to any event that was handled by vue
        // for the first time (to avoid inconsistent event timestamp implementations
        // or events fired from iframes, e.g. #2513)
        // The handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        if (!e._vts) {
            e._vts = Date.now();
        }
        else if (e._vts <= invoker.attached) {
            return;
        }
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .callWithAsyncErrorHandling */ .$d)(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* ErrorCodes.NATIVE_EVENT_HANDLER */, [e]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === 'class') {
        patchClass(el, nextValue, isSVG);
    }
    else if (key === 'style') {
        patchStyle(el, prevValue, nextValue);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        // ignore v-model listeners
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
    }
    else if (key[0] === '.'
        ? ((key = key.slice(1)), true)
        : key[0] === '^'
            ? ((key = key.slice(1)), false)
            : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    }
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
            el._trueValue = nextValue;
        }
        else if (key === 'false-value') {
            el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            return true;
        }
        return false;
    }
    // these are enumerated attrs, however their corresponding DOM properties
    // are actually booleans - this leads to setting it with a string "false"
    // value leading it to be coerced to `true`, so we need to always treat
    // them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        return false;
    }
    return key in el;
}

function defineCustomElement(options, hydrate) {
    const Comp = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */ .aZ)(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps) {
            super(Comp, initialProps, hydrate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = ((options) => {
    // @ts-ignore
    return defineCustomElement(options, hydrate);
});
const BaseClass = (typeof HTMLElement !== 'undefined' ? HTMLElement : class {
});
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate) {
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */
        this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate) {
            hydrate(this._createVNode(), this.shadowRoot);
        }
        else {
            if (false) {}
            this.attachShadow({ mode: 'open' });
            if (!this._def.__asyncLoader) {
                // for sync component defs we can immediately resolve props
                this._resolveProps(this._def);
            }
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            if (this._resolved) {
                this._update();
            }
            else {
                this._resolveDef();
            }
        }
    }
    disconnectedCallback() {
        this._connected = false;
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .Y3)(() => {
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */
    _resolveDef() {
        this._resolved = true;
        // set initial attrs
        for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
        }
        // watch future attr changes
        new MutationObserver(mutations => {
            for (const m of mutations) {
                this._setAttr(m.attributeName);
            }
        }).observe(this, { attributes: true });
        const resolve = (def, isAsync = false) => {
            const { props, styles } = def;
            // cast Number-type props set before resolve
            let numberProps;
            if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props)) {
                for (const key in props) {
                    const opt = props[key];
                    if (opt === Number || (opt && opt.type === Number)) {
                        if (key in this._props) {
                            this._props[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(this._props[key]);
                        }
                        (numberProps || (numberProps = Object.create(null)))[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)] = true;
                    }
                }
            }
            this._numberProps = numberProps;
            if (isAsync) {
                // defining getter/setters on prototype
                // for sync defs, this already happened in the constructor
                this._resolveProps(def);
            }
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) {
            asyncDef().then(def => resolve(def, true));
        }
        else {
            resolve(this._def);
        }
    }
    _resolveProps(def) {
        const { props } = def;
        const declaredPropKeys = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props : Object.keys(props || {});
        // check if there are props set pre-upgrade or connect
        for (const key of Object.keys(this)) {
            if (key[0] !== '_' && declaredPropKeys.includes(key)) {
                this._setProp(key, this[key], true, false);
            }
        }
        // defining getter/setters on prototype
        for (const key of declaredPropKeys.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)) {
            Object.defineProperty(this, key, {
                get() {
                    return this._getProp(key);
                },
                set(val) {
                    this._setProp(key, val);
                }
            });
        }
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        const camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
        if (this._numberProps && this._numberProps[camelKey]) {
            value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);
        }
        this._setProp(camelKey, value, false);
    }
    /**
     * @internal
     */
    _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */
    _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
                this._update();
            }
            // reflect
            if (shouldReflect) {
                if (val === true) {
                    this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), '');
                }
                else if (typeof val === 'string' || typeof val === 'number') {
                    this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), val + '');
                }
                else if (!val) {
                    this.removeAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key));
                }
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .Wm)(this._def, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, this._props));
        if (!this._instance) {
            vnode.ce = instance => {
                this._instance = instance;
                instance.isCE = true;
                // HMR
                if ((false)) {}
                const dispatch = (event, args) => {
                    this.dispatchEvent(new CustomEvent(event, {
                        detail: args
                    }));
                };
                // intercept emit
                instance.emit = (event, ...args) => {
                    // dispatch both the raw and hyphenated versions of an event
                    // to match Vue behavior
                    dispatch(event, args);
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event) !== event) {
                        dispatch((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), args);
                    }
                };
                // locate nearest Vue custom element parent for provide/inject
                let parent = this;
                while ((parent =
                    parent && (parent.parentNode || parent.host))) {
                    if (parent instanceof VueElement) {
                        instance.parent = parent._instance;
                        instance.provides = parent._instance.provides;
                        break;
                    }
                }
            };
        }
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) {
            styles.forEach(css => {
                const s = document.createElement('style');
                s.textContent = css;
                this.shadowRoot.appendChild(s);
                // record for HMR
                if ((false)) {}
            });
        }
    }
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentInstance */ .FN)();
        if (!instance) {
            ( false) && 0;
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( false) && 0;
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            ( false) &&
                0;
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentInstance */ .FN)();
    /* istanbul ignore next */
    if (!instance) {
        ( false) &&
            0;
        return;
    }
    const updateTeleports = (instance.ut = (vars = getter(instance.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach(node => setVarsOnNode(node, vars));
    });
    const setVars = () => {
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .watchPostEffect */ .Rh)(setVars);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */ .bv)(() => {
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, { childList: true });
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .onUnmounted */ .Ah)(() => ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ShapeFlags.ELEMENT */ && vnode.el) {
        setVarsOnNode(vnode.el, vars);
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .HY) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .Static */ .qG) {
        let { el, anchor } = vnode;
        while (el) {
            setVarsOnNode(el, vars);
            if (el === anchor)
                break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .BaseTransition */ .P$, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props =
    /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .BaseTransition.props */ .P$.props, DOMTransitionPropsValidators));
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */
const callHook = (hook, args = []) => {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
        hook.forEach(h => h(...args));
    }
    else if (hook) {
        hook(...args);
    }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */
const hasExplicitCallback = (hook) => {
    return hook
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)
            ? hook.some(h => h.length > 1)
            : hook.length > 1
        : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (rawProps.css === false) {
        return baseProps;
    }
    const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook(hook, [el, resolve]);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
        onBeforeEnter(el) {
            callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            el._isLeaving = true;
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                if (!el._isLeaving) {
                    // cancelled
                    return;
                }
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            callHook(onLeave, [el, resolve]);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [el]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
    if ((false)) {}
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentInstance */ .FN)();
        const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .useTransitionState */ .Y8)();
        let prevChildren;
        let children;
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .onUpdated */ .ic)(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__/* .toRaw */ .IU)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */ .HY;
            prevChildren = children;
            children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .getTransitionRawChildren */ .Q6)(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .setTransitionHooks */ .nK)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .resolveTransitionHooks */ .U2)(child, cssTransitionProps, state, instance));
                }
                else if ((false)) {}
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .setTransitionHooks */ .nK)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .resolveTransitionHooks */ .U2)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */ .Wm)(tag, null, children);
        };
    }
};
/**
 * TransitionGroup does not support "mode" so we need to remove it from the
 * props declarations, but direct delete operation is considered a side effect
 * and will make the entire transition feature non-tree-shakeable, so we do it
 * in a function and mark the function's invocation as pure.
 */
const removeMode = (props) => delete props.mode;
/*#__PURE__*/ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1 ? root : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'] ||
        (false );
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event('input'));
    }
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || (vnode.props && vnode.props.type === 'number');
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            if (castToNumber) {
                domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el && el.type !== 'range') {
            if (lazy) {
                return;
            }
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') &&
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
                const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        ( false) &&
            0;
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
                option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
                if (el.selectedIndex !== i)
                    el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function resolveDynamicModel(tagName, type) {
    switch (tagName) {
        case 'SELECT':
            return vModelSelect;
        case 'TEXTAREA':
            return vModelText;
        default:
            switch (type) {
                case 'checkbox':
                    return vModelCheckbox;
                case 'radio':
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value }) => ({ value });
    vModelRadio.getSSRProps = ({ value }, vnode) => {
        if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(vnode.props.value, value)) {
            return { checked: true };
        }
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode) => {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
            if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1) {
                return { checked: true };
            }
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
                return { checked: true };
            }
        }
        else if (value) {
            return { checked: true };
        }
    };
    vModelDynamic.getSSRProps = (binding, vnode) => {
        if (typeof vnode.type !== 'string') {
            return;
        }
        const modelToUse = resolveDynamicModel(
        // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
        }
    };
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event)) {
            return;
        }
        const eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
        if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
        }
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value }) => {
        if (!value) {
            return { style: { display: 'none' } };
        }
    };
}

const rendererOptions = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return (renderer ||
        (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .createRenderer */ .Us)(rendererOptions)));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__/* .createHydrationRenderer */ .Eo)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((false)) {}
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true, container instanceof SVGElement);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return isCustomElement;
            },
            set() {
                warn(`The \`isCustomElement\` config option is deprecated. Use ` +
                    `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` +
            `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
            `Since you are using the runtime-only build, \`compilerOptions\` ` +
            `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
            `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
            `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
            `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get() {
                warn(msg);
                return compilerOptions;
            },
            set() {
                warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
        const res = document.querySelector(container);
        if (false) {}
        return res;
    }
    if (false) {}
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */
const initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
            ssrDirectiveInitialized = true;
            initVModelForSSR();
            initVShowForSSR();
        }
    }
    ;




/***/ }),

/***/ 3577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => (/* binding */ EMPTY_ARR),
/* harmony export */   "EMPTY_OBJ": () => (/* binding */ EMPTY_OBJ),
/* harmony export */   "NO": () => (/* binding */ NO),
/* harmony export */   "NOOP": () => (/* binding */ NOOP),
/* harmony export */   "PatchFlagNames": () => (/* binding */ PatchFlagNames),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "def": () => (/* binding */ def),
/* harmony export */   "escapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "escapeHtmlComment": () => (/* binding */ escapeHtmlComment),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "genPropsAccessExp": () => (/* binding */ genPropsAccessExp),
/* harmony export */   "generateCodeFrame": () => (/* binding */ generateCodeFrame),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "hasChanged": () => (/* binding */ hasChanged),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "includeBooleanAttr": () => (/* binding */ includeBooleanAttr),
/* harmony export */   "invokeArrayFns": () => (/* binding */ invokeArrayFns),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBooleanAttr": () => (/* binding */ isBooleanAttr),
/* harmony export */   "isBuiltInDirective": () => (/* binding */ isBuiltInDirective),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isGloballyWhitelisted": () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   "isHTMLTag": () => (/* binding */ isHTMLTag),
/* harmony export */   "isIntegerKey": () => (/* binding */ isIntegerKey),
/* harmony export */   "isKnownHtmlAttr": () => (/* binding */ isKnownHtmlAttr),
/* harmony export */   "isKnownSvgAttr": () => (/* binding */ isKnownSvgAttr),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isModelListener": () => (/* binding */ isModelListener),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isOn": () => (/* binding */ isOn),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isRegExp": () => (/* binding */ isRegExp),
/* harmony export */   "isReservedProp": () => (/* binding */ isReservedProp),
/* harmony export */   "isSSRSafeAttrName": () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   "isSVGTag": () => (/* binding */ isSVGTag),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isSpecialBooleanAttr": () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isVoidTag": () => (/* binding */ isVoidTag),
/* harmony export */   "looseEqual": () => (/* binding */ looseEqual),
/* harmony export */   "looseIndexOf": () => (/* binding */ looseIndexOf),
/* harmony export */   "looseToNumber": () => (/* binding */ looseToNumber),
/* harmony export */   "makeMap": () => (/* binding */ makeMap),
/* harmony export */   "normalizeClass": () => (/* binding */ normalizeClass),
/* harmony export */   "normalizeProps": () => (/* binding */ normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* binding */ normalizeStyle),
/* harmony export */   "objectToString": () => (/* binding */ objectToString),
/* harmony export */   "parseStringStyle": () => (/* binding */ parseStringStyle),
/* harmony export */   "propsToAttrMap": () => (/* binding */ propsToAttrMap),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "slotFlagsText": () => (/* binding */ slotFlagsText),
/* harmony export */   "stringifyStyle": () => (/* binding */ stringifyStyle),
/* harmony export */   "toDisplayString": () => (/* binding */ toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* binding */ toHandlerKey),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toRawType": () => (/* binding */ toRawType),
/* harmony export */   "toTypeString": () => (/* binding */ toTypeString)
/* harmony export */ });
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* PatchFlags.TEXT */]: `TEXT`,
    [2 /* PatchFlags.CLASS */]: `CLASS`,
    [4 /* PatchFlags.STYLE */]: `STYLE`,
    [8 /* PatchFlags.PROPS */]: `PROPS`,
    [16 /* PatchFlags.FULL_PROPS */]: `FULL_PROPS`,
    [32 /* PatchFlags.HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* PatchFlags.STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* PatchFlags.KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* PatchFlags.UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* PatchFlags.NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* PatchFlags.DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* PatchFlags.DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* PatchFlags.HOISTED */]: `HOISTED`,
    [-2 /* PatchFlags.BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* SlotFlags.STABLE */]: 'STABLE',
    [2 /* SlotFlags.DYNAMIC */]: 'DYNAMIC',
    [3 /* SlotFlags.FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString(value)) {
        return value;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
    const ret = {};
    cssText
        .replace(styleCommentRE, '')
        .split(listDelimiterRE)
        .forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === 'number') {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
        return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return isString(val)
        ? val
        : val == null
            ? ''
            : isArray(val) ||
                (isObject(val) &&
                    (val.toString === objectToString || !isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( false)
    ? 0
    : {};
const EMPTY_ARR = ( false) ? 0 : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => toTypeString(val) === '[object Date]';
const isRegExp = (val) => toTypeString(val) === '[object RegExp]';
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
/**
 * "123-foo" will be parsed to 123
 * This is used for the .number modifier in v-model
 */
const looseToNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
/**
 * Only conerces number-like strings
 * "123-foo" will be returned as-is
 */
const toNumber = (val) => {
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name)
        ? `__props.${name}`
        : `__props[${JSON.stringify(name)}]`;
}




/***/ }),

/***/ 9669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1609);

/***/ }),

/***/ 5448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var settle = __webpack_require__(6026);
var cookies = __webpack_require__(4372);
var buildURL = __webpack_require__(5327);
var buildFullPath = __webpack_require__(4097);
var parseHeaders = __webpack_require__(4109);
var isURLSameOrigin = __webpack_require__(7985);
var createError = __webpack_require__(5061);
var transitionalDefaults = __webpack_require__(7874);
var Cancel = __webpack_require__(5263);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 1609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var bind = __webpack_require__(1849);
var Axios = __webpack_require__(321);
var mergeConfig = __webpack_require__(7185);
var defaults = __webpack_require__(5546);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5263);
axios.CancelToken = __webpack_require__(4972);
axios.isCancel = __webpack_require__(6502);
axios.VERSION = (__webpack_require__(7288).version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(8713);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(6268);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 5263:
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(5263);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 6502:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var buildURL = __webpack_require__(5327);
var InterceptorManager = __webpack_require__(782);
var dispatchRequest = __webpack_require__(3572);
var mergeConfig = __webpack_require__(7185);
var validator = __webpack_require__(4875);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 4097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(1793);
var combineURLs = __webpack_require__(7303);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 5061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(481);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 3572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var transformData = __webpack_require__(8527);
var isCancel = __webpack_require__(6502);
var defaults = __webpack_require__(5546);
var Cancel = __webpack_require__(5263);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 481:
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ 7185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ 6026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(5061);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 8527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var defaults = __webpack_require__(5546);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 5546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var normalizeHeaderName = __webpack_require__(6016);
var enhanceError = __webpack_require__(481);
var transitionalDefaults = __webpack_require__(7874);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5448);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5448);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 7874:
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ 7288:
/***/ ((module) => {

module.exports = {
  "version": "0.26.1"
};

/***/ }),

/***/ 1849:
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 5327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 7303:
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 4372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 1793:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 6268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ 7985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 6016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 8713:
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 4875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(7288).version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 4867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(1849);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 5908:
/***/ ((module) => {

const FIN = {
  US: {
    ENGLISH: "720266168",
    SPANISH: "721138150"
  },
  CA: {
    ENGLISH: "787673868",
    SPANISH: "721138150"
  }
};
const getVideoUrl = (language, isCanadian) => {
  let country = getCountry(isCanadian);
  if (language === "en") {
    return FIN[country].ENGLISH;
  } else {
    return FIN[country].SPANISH;
  }
};
const getCountry = (isCanadian, longName = false) => {
  if (longName) {
    return isCanadian ? "Canada" : "United States";
  }
  return isCanadian ? "CA" : "US";
};
module.exports = {
  getVideoUrl,
  getCountry
};

/***/ }),

/***/ 9009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8903);
/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6461);
/* harmony import */ var _styles_logo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_logo_css__WEBPACK_IMPORTED_MODULE_1__);


const sanitizeFullName = name => {
  if (!name) return name;
  name = name.trim();
  const name_array = name.split(" ").map(e => e.trim()).filter(e => !(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(e));
  if (name_array.length > 2) {
    return `${name_array[0]} ${name_array[name_array.length - 1]}`;
  } else if (name_array.length <= 2) {
    return name;
  }
};
const getNameInitials = name => {
  name = name.trim().split(" ").map(e => e.trim()).filter(e => !(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(e)).map(e => e.charAt(0));
  return `${name[0]}${name[name.length - 1]}`;
};
class Logo {
  constructor(selector, name, bgColor, textColor, circleOnly = true) {
    this.name = name.toUpperCase();
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.circleOnly = circleOnly;
    this.selector = selector;
  }
  __init__() {
    const selectors = document.querySelectorAll(this.selector);
    for (let i = 0; i < selectors.length; i++) {
      const selector = selectors[i];
      selector.innerHTML = `
      <div style="color: ${this.textColor}" class="d-flex items-center position-relative space-x-4">
              <div style="color: ${this.textColor}; border: 2px solid ${this.textColor}" class="d-flex items-center circle__x">
                <span>${getNameInitials(this.name)}</span>
                <div style="background: ${this.bgColor}" class="strip__x"></div>
              </div>
             ${!this.circleOnly ? `<span class="big__name">${sanitizeFullName(this.name)}</span>` : ""}
      </div>
    `;
    }
  }
}

/***/ }),

/***/ 8555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  appointmentUtils
} = __webpack_require__(5636);
const {
  getCompany
} = __webpack_require__(4722);
const {
  url,
  BasePage,
  handleBrokerCheckLinkAndDisclosure
} = __webpack_require__(8903);
const {
  submitForm
} = __webpack_require__(4722);
class AppointmentPage extends BasePage {
  constructor(_object) {
    super(_object);
  }
}
async function initAppointment() {
  let page = new AppointmentPage({
    ...appointmentUtils.initialState,
    USER_URL: url.query.get("id") || url.query.get("user"),
    COMPANY_URL: url.query.get("company"),
    IS_OLD_LINK: url.query.get("company") || false
  });

  /**
   * @description: to fix typos in features list
   */
  const els = document.querySelectorAll(".list-3");
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    el.innerHTML = el.innerHTML.replace(/Fear about your financial/, "Fear about your finances");
    el.innerHTML = el.innerHTML.replace(/Enjoy like more/, "Enjoy life more");
  }

  // read for url and set state
  if (url.query.get("video")) {
    page.IS_VIDEO_APP = true;
    page.IS_DASHBOARD_LINK = true;
  } else {
    page.IS_VIDEO_APP = false;
    page.IS_DASHBOARD_LINK = true;
  }
  try {
    const advisor = await getCompany(page.USER_URL, page.COMPANY_URL);
    page = await appointmentUtils.populatePageData(page, advisor);
    page.track("Prospect visited Appointment Page", {
      rep_name: page.REP_NAME,
      page_type: page.IS_VIDEO_APP ? "Video App" : "FIN App"
    });
    page = appointmentUtils.setupTrackAppointmentButtonClick(page);
    appointmentUtils.mapDataToPage(page);
  } catch (e) {
    console.log(e, "appointment page error");
    if (!page.REP_ID || page.REP_ID === "") {
      window.location.href = "/404";
    }
  }
  appointmentUtils.handleScrollEvent();
  page.on("submit", "#getintouch", function () {
    const {
      REP_ID,
      COMPANY_ID,
      REP_NAME,
      REP_EMAIL
    } = page;
    const prospectFirstName = $("#first_name").val();
    const prospectLastName = $("#last_name").val();
    try {
      submitForm({
        prospectFirstName,
        prospectLastName,
        prospectName: prospectFirstName + " " + prospectLastName,
        prospectEmail: $("#email").val(),
        prospectPhone: $("#phone_no").val(),
        prospectMessage: $("#message").val(),
        userId: REP_ID,
        companyId: COMPANY_ID
      }).then(r => {
        page.track("Prospect filled getInTouch form", {
          rep_name: REP_NAME,
          rep_email: REP_EMAIL,
          page_type: page.IS_VIDEO_APP ? "Video App" : "FIN App",
          prospectName: prospectFirstName + " " + prospectLastName,
          prospectEmail: $("#email").val()
        });
        $(".getintouch").addClass("hide");
        $(".successmessage").addClass("displayshow");
      });
    } catch (e) {
      alert("Oops! Something went wrong. Please try again.");
      console.log(e);
    }
  });
}
module.exports = initAppointment;

/***/ }),

/***/ 3756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let USER_URL = "",
  IS_CANADIAN_LINK = false,
  COMPANY_URL = null,
  COMPANY_ID = null,
  IS_OLD_LINK = false;
const {
  cookies,
  url,
  initiateAdvisorLogo
} = __webpack_require__(8903);
const {
  getUser,
  getProspect,
  getPublicFeatures
} = __webpack_require__(2014);
const {
  onBoarding
} = __webpack_require__(4401);
async function redirectContinuer() {
  try {
    const prospect = await getProspect();
    $(".main_start_div").addClass("show");
    if (prospect) {
      onBoarding.prospect.setCookies(prospect);
      onBoarding.prospect.handleRedirect();
    } else {
      window.location.href = "/404";
    }
  } catch (e) {
    console.log(e);
  }
}
function initFINVideo() {
  onBoarding.videos.handlePlayer(IS_CANADIAN_LINK);
}
async function fetchAdvisor() {
  try {
    const advisor = await getUser(USER_URL, COMPANY_URL);
    COMPANY_ID = advisor.company_id;
    IS_CANADIAN_LINK = advisor.address && advisor.address.country === "Canada";
    try {
      const publicFeatures = await getPublicFeatures(advisor.userId);
      cookies.set("publicFeatures", JSON.stringify(publicFeatures));
    } catch (e) {
      console.log(e);
    }
    onBoarding.advisor.setCookies(advisor, IS_OLD_LINK);
    initiateAdvisorLogo(`${advisor.firstName.trim()} ${advisor.lastName.trim()}`);
    initFINVideo();
  } catch (e) {
    window.location.href = "/404";
    console.log(e);
  }
}
function _FetchAdvisor(user, company = null) {
  USER_URL = user;
  COMPANY_URL = company;
  fetchAdvisor().then(() => {
    console.log("fetchAdvisor");
  });
}
async function init() {
  // read query string from url
  USER_URL = url.query.get("id") || url.query.get("user");
  COMPANY_URL = url.query.get("company");
  IS_OLD_LINK = COMPANY_URL || false;

  // set is old url or not in cookies to support old fin links
  cookies.set("isOldUrl", IS_OLD_LINK);

  // set start over url
  cookies.set("START_OVER_URL", window.location.href);
  cookies.set("INITIAL_LINK", window.location.href);
  $("#start_over").attr("href", window.location.href);
  await fetchAdvisor();

  // check for continue url
  if (USER_URL && url.query.get("prospectEmail")) {
    await redirectContinuer();
  }
}
module.exports = {
  init,
  _FetchAdvisor
};

/***/ }),

/***/ 1067:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  createProspect,
  updateProspectById
} = __webpack_require__(3993);
const {
  cookies,
  isEmail,
  isMobile,
  url,
  initiateAdvisorLogo
} = __webpack_require__(8903);
const {
  getProspect
} = __webpack_require__(2014);
const {
  _FetchAdvisor
} = __webpack_require__(3756);
function handleUserFromFinPath() {
  if (url.query.get("id")) {
    const USER_URL = url.query.get("id") || url.query.get("user");
    const START_OVER_URL = `https://${window.location.hostname}/en?id=${USER_URL}`;
    cookies.set("isOldUrl", false);
    cookies.set("START_OVER_URL", START_OVER_URL);
    cookies.set("INITIAL_LINK", START_OVER_URL);
    $("#start_over").attr("href", START_OVER_URL);
    _FetchAdvisor(USER_URL, null);
  }
}
function questionsPageInit() {
  handleUserFromFinPath();
  $("body").on("scroll mousewheel touchmove", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  let avg_retirement_age = 0;
  let default_death_age = 0;
  const guessedFinEl = $("#guessed_fin");
  $(".button_blocker.email").click(function () {
    alert("Please enter a correct email");
  });
  $(".button_blocker.check").click(function () {
    alert("Please accept the terms and conditions");
  });
  $(".text-field.email").keyup(function () {
    if (isEmail($(this).val())) {
      $(".button_blocker.email").addClass("hide");
    } else {
      $(".button_blocker.email").removeClass("hide");
    }
  });
  guessedFinEl.val("skipped");
  const userNameEl = $("#user_name");
  const ques1Btn = $("#ques_1_btn");
  const ques1Active = $("#ques_1_active");
  const userAgeEl = $("#user_age");
  const ques2Btn = $("#ques_2_btn");
  const userIncomeEl = $("#user_income");
  const emailEl = $("#email");
  const step3Selector = $("#step_3_selector");
  const step5Selector = $("#step_5_selector");
  userNameEl.keyup(function () {
    let var_name = $(this).val();
    if (var_name.length > 1) {
      ques1Active.addClass("active");
      ques1Btn.addClass("go_ahead");
      $(".body").addClass("ques");
    } else {
      ques1Active.removeClass("active");
      ques1Btn.removeClass("go_ahead");
      $(".body").removeClass("ques");
    }
    var_name = var_name.charAt(0).toUpperCase() + var_name.slice(1);
    $(".var_name").html("" + var_name);
  });
  userNameEl.on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if (ques1Btn.hasClass("go_ahead")) {
        ques1Btn[0].click();
      }
    }
  });
  ques1Btn.on("click", function () {
    trackMixPanelEvent("FIN Prospect Started Journey", {
      first_name: userNameEl.val()
    });
  });
  userAgeEl.keyup(function () {
    var var_age = $(this).val();
    if (var_age.length > 1) {
      if (var_age > 17 && var_age < 71) {
        $("#ques_2_active").addClass("active");
        ques2Btn.addClass("go_ahead");
        $(".age_alert").removeClass("alert");
      } else {
        $(".age_alert").addClass("alert");
        ques1Btn.removeClass("go_ahead");
      }
    } else {
      $("#ques_2_active").removeClass("active");
      ques1Btn.removeClass("go_ahead");
    }
  });

  //question two desktop 1
  userAgeEl.on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if (ques2Btn.hasClass("go_ahead")) {
        ques2Btn[0].click();
      }
    }
  });
  //avg retirement age
  $(".options_popup.step_3 .options_container .option").click(function () {
    valueee = $(this).attr("data-age");
    valueee2 = $(this).attr("data-default");
    //alert(valueee);
    avg_retirement_age = parseInt(valueee);
    default_death_age = parseInt(valueee2);
  });

  //Question 4 Validation
  userIncomeEl.keyup(function () {
    var var_income = $(this).val().replace(/,/g, "").replace(/[^\d]/g, "");
    if (var_income > 999) {
      $("#ques_four_active").addClass("active");
      $("#ques_4_btn").addClass("go_ahead");
    } else {
      $("#ques_four_active").removeClass("active");
      $("#ques_4_btn").removeClass("go_ahead");
    }
    if (var_income > 0) {
      $(".dollar").addClass("show");
    } else {
      $(".dollar").removeClass("show");
    }
  });

  // Live Comma
  userIncomeEl.keyup(function () {
    if ($(this).val() !== "") {
      if (parseInt($(this).val()) > 0) {
        var income = parseInt($(this).val().replace(/[^\d]/g, "").replace(/,/g, ""), 10).toLocaleString();
        $(this).val(income);
      } else {
        $(this).val("");
      }
    } else {
      $(this).val("");
    }
  });

  //question four desktop 1
  userIncomeEl.on("keypress", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if ($("#ques_4_btn").hasClass("go_ahead")) {
        $("#ques_4_btn")[0].click();
      }
    }
  });

  //inflation calculation ques_4_btn

  var year_left_in_retirement;
  var fin_factor;
  $("#ques_4_btn").click(function () {
    const incomebi = userIncomeEl.val().replace(/,/g, "");
    const userage = parseInt(userAgeEl.val());
    year_left_in_retirement = avg_retirement_age - userage;
    let inflation_factor = Math.pow(1.025, year_left_in_retirement);
    inflation_factor = Math.round((inflation_factor + 0.00001) * 100) / 100;
    const income_after_inflation = parseInt(incomebi) * inflation_factor;
    $("#ibi").html("$" + addCommas(parseInt(incomebi)));
    $(".income_after_inflation").html(addCommas(parseInt(income_after_inflation)));
    $("#iai").html("$" + addCommas(parseInt(income_after_inflation)));
    $("#income_after_inflation").val(parseInt(income_after_inflation));
    $("#at_age").html(avg_retirement_age);
  });
  $(".options_popup.step_3 .option").click(function () {
    $(".options_popup.step_3 .option").removeClass("active");
    $(this).addClass("active");
    var ans = $(this).children().html();
    step3Selector.addClass("lightup");
    $("#light_arrow_3").addClass("show");
    step3Selector.html(ans);
    $("#retirement_age").val(ans);
    $("#ques_3_active").addClass("active");
    $("#ques_3_btn").addClass("go_ahead");
  });
  $(".options_popup.step_5 .option").click(function () {
    $(".options_popup.step_5 .option").removeClass("active");
    $(this).addClass("active");
    const ans1 = $(this).children().html();
    step5Selector.addClass("lightup");
    $("#light_arrow_5").addClass("show");
    step5Selector.html(ans1);
    $("#ques_5_active").addClass("active");
    $("#ques_5_btn").addClass("go_ahead");
    $("#pension_choice").val(ans1);
    const fin_array = [4.7, 5.5, 6.2, 6.9, 7.7, 8.5, 9.18, 9.86, 10.54, 11.22, 11.9, 12.48, 13.06, 13.64, 14.22, 14.8, 15.3, 15.8, 16.3, 16.8, 17.3, 17.74, 18.18, 18.62, 19.06, 19.5, 19.85, 20.2, 20.55, 20.9, 21.25, 21.6, 21.95, 22.3, 22.65, 23, 23.35, 23.7, 24.05, 24.4, 24.75];
    fin_factor = fin_array[default_death_age - 5];
    let fin_num = $(".income_after_inflation").html().replace(/,/g, "") * fin_factor;
    let selected_ans = parseInt($(this).attr("data-ans"));
    let user_age = parseInt(userAgeEl.val());
    if (user_age > 30 && user_age < 40 && selected_ans === 1 || user_age > 30 && user_age < 40 && selected_ans === 3) {
      fin_num = fin_num - fin_num / 100 * 20;
    } else if (user_age > 40 && selected_ans === 1 || user_age > 40 && selected_ans === 3) {
      fin_num = fin_num - fin_num / 100 * 30;
    } else if (user_age > 30 && selected_ans === 2) {
      fin_num = fin_num - fin_num / 100 * 50;
    }
    $("#fin_number").val(fin_num);
  });
  const guessOptionEl = $(".guess_option");
  const guessBtnEl = $("#guess_btn");
  const skipperEl = $("#skipper");
  const guessbutton1El = $("#guess_1_btn");
  guessOptionEl.click(function () {
    guessOptionEl.removeClass("active");
    $(this).addClass("active");
    guessBtnEl.addClass("active");
    skipperEl.addClass("hidden");
    guessbutton1El.addClass("go_ahead");
    guessedFinEl.val($(this).children().html());
  });
  $("#guess_back").click(function () {
    guessOptionEl.removeClass("active");
    guessBtnEl.removeClass("active");
    skipperEl.removeClass("hidden");
    guessbutton1El.removeClass("go_ahead");
    guessedFinEl.val("skipped");
  });
  const country_val = cookies.get("country");
  const getTranslatedData = async () => {
    let retirement_age = $("#retirement_age").val();
    let pension_choice = $("#pension_choice").val();
    let guessed_fin = guessedFinEl.val();
    if (Weglot.getCurrentLang() === "es") {
      [retirement_age, pension_choice, guessed_fin] = await translateToLanguage([retirement_age, pension_choice, guessed_fin]);
    }
    return [retirement_age, pension_choice, guessed_fin];
  };
  async function createNewProspect() {
    let [retirement_age, pension_choice, guessed_fin] = await getTranslatedData();
    const data = {
      companyId: cookies.get("COMPANY_ID"),
      userId: cookies.get("USER_ID"),
      first_name: userNameEl.val(),
      age: userAgeEl.val(),
      annual_income_after_inflation: parseInt($("#income_after_inflation").val()),
      annual_income_before_inflation: parseInt(userIncomeEl.val().replace(/,/g, "")),
      retirement_age,
      pension_choice,
      guessed_fin,
      email: emailEl.val(),
      fin_number: parseInt($("#fin_number").val()),
      country: country_val
    };
    if (cookies.get("isAffiliateUrl") === "true") {
      data.affiliateId = cookies.get("affiliateId");
    }
    createProspect(cookies.get("COMPANY_ID"), data).then(res => {
      cookies.set("PROSPECT_ID", res._id);
      cookies.set("FIN Number", res.fin_number);
      cookies.set("Name", res.first_name);
      cookies.set("Country", res.country);
      window.location.href = "/result";
      trackMixPanelEvent("FIN Prospect created.");
    }).catch(error => {
      alert(error.response && error.response.data && error.response.data.message);
      throw new SentryError(`Error while creating a prospect email: ${emailEl.val()}`, error);
    });
  }
  async function updateProspect(prospectID) {
    let [retirement_age, pension_choice, guessed_fin] = await getTranslatedData();
    updateProspectById(cookies.get("COMPANY_ID"), prospectID, {
      age: userAgeEl.val(),
      retirement_age,
      annual_income_after_inflation: parseInt($("#income_after_inflation").val()),
      annual_income_before_inflation: parseInt(userIncomeEl.val().replace(/,/g, "")),
      pension_choice,
      guessed_fin,
      fin_number: parseInt($("#fin_number").val())
    }).then(function (response) {
      cookies.set("PROSPECT_ID", response._id);
      cookies.set("FIN Number", "" + response.fin_number);
      cookies.set("Name", response.first_name);
      cookies.set("Country", response.country);
      window.location.href = "/result";
    }).catch(function (error) {
      alert(error.response && error.response.data && error.response.data.message);
      throw new SentryError(`Error while updating prospect: ${prospectID}`, error);
    });
  }
  $("#submit_btn").click(function () {
    const terms = $("#terms").is(":checked");
    const email_address = isEmail(emailEl.val());
    if (email_address) {
      if (!terms) {
        alert("Please accept the terms and conditions");
      } else {
        getProspect(cookies.get("USER_ID"), cookies.get("COMPANY_ID"), emailEl.val()).then(function (response) {
          updateProspect(response._id);
        }).catch(function (error) {
          if (error.success && error.count === 0) {
            createNewProspect();
          } else {
            throw new SentryError(`Error While submitting results: ${emailEl.val()}`, error);
            alert(error.message);
          }
        });
      }
    } else {
      alert("Please enter your email address");
    }
  });
  if (isMobile()) {
    $("*").animate({
      scrollTop: 0
    }, "fast");
    $(".step_btn").click(function () {
      $("*").scrollTop(0);
    });
    const inputEl = $("input");
    inputEl.blur(function () {
      $("*").scrollTop(0);
    });
    inputEl.focusout(function () {
      $("*").scrollTop(0);
    });
  }
}
module.exports = questionsPageInit;

/***/ }),

/***/ 7800:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  cookies,
  initiateAdvisorLogo
} = __webpack_require__(8903);
const {
  routeUtils
} = __webpack_require__(4395);
console.log(routeUtils, "utils");
class RoutePage {
  constructor(COMPANY_ID, PROSPECT_ID, USER_NAME, FIN_NUMBER, ROUTE_SELECTION = "", FIRST_NAME = "") {
    this.route_selection = ROUTE_SELECTION;
    this.user_name = USER_NAME;
    this.fin_number = FIN_NUMBER;
    this.advisor_First_name = FIRST_NAME;
    this.company_id = COMPANY_ID;
    this.PROSPECT_ID = PROSPECT_ID;
  }
  set route_selection(route_selection) {
    this._route_selection = route_selection;
  }
  setPath() {
    routeUtils.setPath(this);
  }
  handlePathSelection() {
    routeUtils.handlePathSelection(this);
  }
}
function init() {
  const page = new RoutePage(cookies.get("COMPANY_ID"), cookies.get("PROSPECT_ID"), cookies.get("Name"), cookies.get("FIN Number"), cookies.get("FIRST_NAME"));
  page.setPath();
  page.handlePathSelection();
  initiateAdvisorLogo(cookies.get("REP_NAME"));
}
module.exports = {
  init
};

/***/ }),

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "init": () => (/* binding */ init)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
// EXTERNAL MODULE: ./src/utils/videomessage.utils.js
var videomessage_utils = __webpack_require__(9827);
// EXTERNAL MODULE: ./src/service/Service.js
var Service = __webpack_require__(3912);
var Service_default = /*#__PURE__*/__webpack_require__.n(Service);
;// CONCATENATED MODULE: ./src/service/videomessages/videomessage.service.js


const getVideoMessage = function (user_id) {
  const type = (0,videomessage_utils.isFinPath)() ? "fin_path" : "fin_link";
  const url = `getVideoMessagingForUserId`;
  const service = new (Service_default())(url);
  const queryParams = [{
    key: "tool",
    value: type
  }, {
    key: "isDeleted",
    value: false
  }, {
    key: "draft",
    value: false
  }, {
    key: "status",
    value: "completed"
  }, {
    key: "sort",
    value: "-createdAt"
  }, {
    key: "limit",
    value: 1
  }, {
    key: "user",
    value: user_id
  }];
  queryParams.forEach(function ({
    key,
    value
  }) {
    service.equals(key, value);
  });
  return new Promise(function (resolve, reject) {
    service.find().then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
};

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8903);
// EXTERNAL MODULE: ./src/styles/videomessages.css
var videomessages = __webpack_require__(8455);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/pages/apps/videomessages/videoComponent.vue?vue&type=template&id=0d4794ad

const _hoisted_1 = {
  id: "video",
  class: "video-container",
  disablepictureinpicture: "",
  playsinline: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("video", _hoisted_1);
}
;// CONCATENATED MODULE: ./src/pages/apps/videomessages/videoComponent.vue?vue&type=template&id=0d4794ad

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/pages/apps/videomessages/videoComponent.vue?vue&type=script&lang=js
/* harmony default export */ const videoComponentvue_type_script_lang_js = ({
  name: "VideoPlayer"
});
;// CONCATENATED MODULE: ./src/pages/apps/videomessages/videoComponent.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/pages/apps/videomessages/videoComponent.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(videoComponentvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const videoComponent = (__exports__);
;// CONCATENATED MODULE: ./src/pages/apps/videomessages/index.js






function init(advisorName = "") {
  (0,runtime_dom_esm_bundler.createApp)({
    data() {
      return {
        player: {},
        videoMessages: [],
        description: "Watch a video message from repname, to learn your next best step.",
        playPauseToggle: false,
        showOverLay: false,
        toggleVideoIcon: "paused",
        muted: false
      };
    },
    computed: {
      firstVideoMessage() {
        return this.videoMessages && this.videoMessages.length > 0 && this.videoMessages[0];
      },
      showPlayButton() {
        return this.toggleVideoIcon;
      }
    },
    components: {
      VideoPlayer: videoComponent
    },
    render() {
      return (0,runtime_core_esm_bundler.h)("div", {
        class: " text-center"
      }, [(0,runtime_core_esm_bundler.h)("span", {
        class: "video-description text-center"
      }, !(0,videomessage_utils.isFinPath)() ? this.description.replace(/repname/g, advisorName || utils.cookies.get("FIRST_NAME") || utils.cookies.get("REP_NAME")) : null), (0,runtime_core_esm_bundler.h)("div", {
        class: {
          "video-overlay": true,
          "mx-center mt-12": !(0,videomessage_utils.isFinPath)()
        },
        onmouseenter: () => this.showOverLay = true,
        onmouseleave: () => this.showOverLay = false,
        // ontouchstart:() => (this.showOverLay = true),
        ontouchend: () => !this.showOverLay
      }, [this.showOverLay ? (0,runtime_core_esm_bundler.h)("div", {
        class: "d-flex   video-overlay position-absolute justify-content-center align-items-center space-x-2"
      }, [this.showPlayButton === "paused" ? (0,runtime_core_esm_bundler.h)("img", {
        onClick: () => {
          this.togglePlayback();
        },
        class: "pointer-cursor index100 bg-white video-controls-icons ",
        src: "https://discoverfin.s3.amazonaws.com/assets/play.svg"
      }) : null, this.showPlayButton === "playing" ? (0,runtime_core_esm_bundler.h)("div", {
        class: "d-flex align-item-center space-x-2"
      }, [(0,runtime_core_esm_bundler.h)("img", {
        onClick: () => {
          this.togglePlayback();
        },
        class: "pointer-cursor index100 video-controls-icons bg-white",
        src: "https://discoverfin.s3.amazonaws.com/assets/pause.svg"
      }), (0,runtime_core_esm_bundler.h)("img", {
        onClick: () => {
          this.toggleAudio();
        },
        class: "pointer-cursor index100 video-controls-icons bg-white",
        src: `https://discoverfin.s3.amazonaws.com/assets/${!this.muted ? "speaker-high" : "speaker-simple-slash"}.svg`
      })]) : null]) : null,
      // h("video", {
      //   id: "video",
      //   class: "video-container",
      //   attrs: {
      //   controls: "false",
      //   autoPlay: "true",
      //   }
      // }),
      (0,runtime_core_esm_bundler.h)(videoComponent)])]);
    },
    methods: {
      getVideoMessage: getVideoMessage,
      handleFINPathButtons(fin_path_first_btn = false) {
        const fin_path_first_btnEL = document.querySelector(".fin-path-one-cta");
        if (fin_path_first_btnEL) {
          fin_path_first_btnEL.style.display = fin_path_first_btn ? "flex" : "none";
        }
      },
      getVideoPlayer() {
        return document.getElementById("video");
      },
      togglePlayback() {
        const video = this.getVideoPlayer();
        if (video.paused) {
          this.toggleVideoIcon = "playing";
          this.playPauseToggle = true;
          video.play();
          console.log(this.showPlayButton, "show button");
        } else {
          this.toggleVideoIcon = "paused";
          this.playPauseToggle = false;
          video.pause();
          console.log(this.showPlayButton, "show button");
        }
      },
      toggleAudio() {
        const video = this.getVideoPlayer();
        video.muted = !video.muted;
        this.muted = video.muted;
      },
      showSettingsOverLay() {
        this.showOverLay = !this.showOverLay;
      }
    },
    async mounted() {
      const USER_URL = utils.cookies.get("USER_ID") || localStorage.getItem("USER_ID");
      this.videoMessages = await this.getVideoMessage(USER_URL);
      const openFinPath = document.querySelectorAll(".open-video");
      const bg_pr_open_fin = document.querySelectorAll(".open-video .bg-primary");
      const showAfterUnlock = document.querySelectorAll(".show-after-unlock");
      const hideAfterUnlock = document.querySelectorAll(".hide-after-unlock");
      const videoSrc = this.firstVideoMessage.onDemandLink;
      this.handleFINPathButtons(!(0,utils.isEmpty)(videoSrc));
      if (videoSrc) {
        const video = document.getElementById("video");
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(`${videoSrc}#t=0.001`);
          hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = `${videoSrc}#t=0.001`;
        }
        // if (isFinPath()) {
        //   video.play();
        // }

        let videoEnded = 0;
        for (let i = 0; i < openFinPath.length; i++) {
          openFinPath[i].onclick = function () {
            if (!videoEnded) {
              video.scrollIntoView({
                inline: "start",
                block: "start",
                behavior: "smooth"
              });
              video.play();
            }
          };
        }
        utils.cookies.set("videomessageavailable", true);
        utils.cookies.set("videoEnded", false);
        video.addEventListener("ended", () => {
          videoEnded = 1;
          utils.cookies.set("videoEnded", true);
          for (let i = 0; i < bg_pr_open_fin.length; i++) {
            bg_pr_open_fin[i].style.background = "#2ad76f";
          }
          if (showAfterUnlock && showAfterUnlock.length) {
            for (let i = 0; i < showAfterUnlock.length; i++) {
              showAfterUnlock[i].style.display = "block";
            }
          }
          if (hideAfterUnlock && hideAfterUnlock.length) {
            for (let i = 0; i < hideAfterUnlock.length; i++) {
              hideAfterUnlock[i].style.display = "none";
            }
          }
        });
        video.addEventListener("play", () => {
          if (showAfterUnlock && showAfterUnlock.length) {
            for (let i = 0; i < showAfterUnlock.length; i++) {
              showAfterUnlock[i].style.display = "none";
            }
          }
          if (hideAfterUnlock && hideAfterUnlock.length) {
            for (let i = 0; i < hideAfterUnlock.length; i++) {
              hideAfterUnlock[i].style.display = "block";
            }
          }
        });
        const show_fin_access = document.getElementById("show_fin_access");
        if (show_fin_access) {
          show_fin_access.style.display = "flex";
        }
      } else {
        utils.cookies.set("videomessageavailable", false);
        if (bg_pr_open_fin && bg_pr_open_fin.length) {
          for (let i = 0; i < bg_pr_open_fin.length; i++) {
            bg_pr_open_fin[i].style.background = "#2ad76f";
          }
        }
        // openFinPath.innerHTML = `<div class="green-cta"><h1 class="heading-29">ACCESS FINPATH</h1></div>`;
        // const hide_me_if_vod = document.getElementById("hide_me_if_vod");
        document.getElementById("video_messages").remove();
        $(".unlock-copy").text("ACCESS MY");
        // if (hide_me_if_vod) {
        //   hide_me_if_vod.style.display = "none";
        // }
      }
    },

    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    }
  }).mount("#video_messages");
}

/***/ }),

/***/ 3912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  isEmpty
} = __webpack_require__(8903);
const axios = __webpack_require__(9669);
class Service {
  constructor(endpoint) {
    if (endpoint.startsWith("/")) {
      endpoint = endpoint.replace("/", "");
    }
    this.axios = axios;
    this.baseUrl = `https://${api_url}/api/v1/users/${endpoint}`;
    this.query = ``;
    this.body = {};
  }
  equals(key, val) {
    this.query = `${this.query}&${key}=${val}`;
  }
  limit(val) {
    this.query = `${this.query}&limit=${val}`;
  }
  async find() {
    const url = !isEmpty(this.query) ? `${this.baseUrl}?${this.query}` : this.baseUrl;
    return await new Promise((resolve, reject) => {
      this.axios.get(url).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  }
  parseResponse(response) {
    return response.data;
  }
  async first() {
    return await this.axios.get(`${this.baseUrl}?${this.query}&limit=1`);
  }
  set(object) {
    this.body = object;
  }
  async create() {
    return await this.axios.post(this.baseUrl, this.body);
  }
  async update(id) {
    return await this.axios.put(`${this.baseUrl}/${id}`, this.body);
  }
}
module.exports = Service;

/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompany": () => (/* reexport safe */ _fin_onboarding_service__WEBPACK_IMPORTED_MODULE_0__.getUser),
/* harmony export */   "submitForm": () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var _fin_onboarding_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2014);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3912);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Service__WEBPACK_IMPORTED_MODULE_1__);


const submitForm = data => {
  const formService = new (_Service__WEBPACK_IMPORTED_MODULE_1___default())("email/send/getInTouch");
  formService.set(data);
  return new Promise((resolve, reject) => {
    formService.create().then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
};


/***/ }),

/***/ 2014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProspect": () => (/* binding */ getProspect),
/* harmony export */   "getPublicFeatures": () => (/* binding */ getPublicFeatures),
/* harmony export */   "getUser": () => (/* binding */ getUser)
/* harmony export */ });
const Service = __webpack_require__(3912);
const {
  isEmpty
} = __webpack_require__(8903);
const getPublicFeatures = async USER_ID => {
  const endpoint = `getPublicPlanFeatures/${USER_ID}`;
  const publicFeatures = new Service(endpoint);
  return await new Promise((resolve, reject) => {
    publicFeatures.find().then(response => {
      resolve(publicFeatures.parseResponse(response));
    }, error => {
      reject(error);
    });
  });
};
const getUser = async (USER_URL, COMPANY_URL) => {
  const endpoint = !isEmpty(COMPANY_URL) ? `/getCompany/name/${COMPANY_URL}/${USER_URL}` : "/getUserByUrl/" + USER_URL;
  const user = new Service(endpoint);
  return await new Promise((resolve, reject) => {
    user.find().then(response => {
      resolve(user.parseResponse(response));
    }, error => {
      reject(error);
    });
  });
};
const getProspect = async (ADVISOR_ID, COMPANY_ID, EMAIL) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const prospect = new Service(endpoint);
  prospect.equals("email", EMAIL);
  prospect.equals("userId", ADVISOR_ID);
  return await new Promise((resolve, reject) => {
    prospect.find().then(response => {
      response.count === 0 || response.error ? reject(response) : resolve(prospect.parseResponse(response).first());
    }, error => {
      reject(error);
    });
  });
};


/***/ }),

/***/ 3993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProspect": () => (/* binding */ createProspect),
/* harmony export */   "updateProspectById": () => (/* binding */ updateProspectById)
/* harmony export */ });
const Service = __webpack_require__(3912);
function createProspect(COMPANY_ID, BODY) {
  return new Promise((resolve, reject) => {
    const prospectService = new Service(`company/${COMPANY_ID}/prospects`);
    prospectService.set(BODY);
    prospectService.create().then(function (response) {
      if (response.error === true) {
        reject(response);
      } else if (response && response.data) {
        resolve(prospectService.parseResponse(response.data));
      } else {
        reject(response);
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}
function updateProspectById(COMPANY_ID, PROSPECT_ID, UPDATE_DATA) {
  return new Promise((resolve, reject) => {
    const prospectService = new Service(`company/${COMPANY_ID}/prospects`);
    prospectService.set(UPDATE_DATA);
    prospectService.update(PROSPECT_ID).then(function (response) {
      if (response && response.data && response.data.data) {
        resolve(prospectService.parseResponse(response.data));
      } else {
        reject(response);
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}


/***/ }),

/***/ 8050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateRoute": () => (/* binding */ updateRoute)
/* harmony export */ });
const Service = __webpack_require__(3912);
const updateRoute = async (COMPANY_ID, PROSPECT_ID, route_choice) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const route = new Service(endpoint);
  route.set({
    route_choice
  });
  return await new Promise((resolve, reject) => {
    route.update(PROSPECT_ID).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};


/***/ }),

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appointmentUtils": () => (/* binding */ appointmentUtils)
/* harmony export */ });
const {
  finBusinessVideoAppLink,
  finFinancialSuccessVideoAppLink,
  finBaseUrl,
  handleBrokerCheckLinkAndDisclosure,
  isMobile,
  isEmpty
} = __webpack_require__(8903);
const appointmentUtils = {
  initialState: {
    APPOINTMENT_LINK: "",
    REP_NAME: "",
    REP_EMAIL: "",
    REP_PHONE: "",
    REP_ID: "",
    REP_IMAGE: "",
    COMPANY_ID: "",
    IS_DASHBOARD_LINK: false,
    IS_VIDEO_APP: false,
    USER_URL: "",
    COMPANY_URL: "",
    IS_OLD_LINK: false,
    IS_CANADIAN_LINK: false,
    ADVISOR: {},
    PROFILE_VIDEO_URL: "",
    APPOINTMENT_BUTTON_CLICKED: false
  },
  openLink(link) {
    let element = document.createElement("a");
    element.setAttribute("href", link);
    element.setAttribute("target", "_parent");
    element.click();
    element.remove();
  },
  setMetaData: function (page) {
    document.title = page.REP_NAME;
    $("head").append(`<meta name="description" content="${page.REP_NAME}"><meta name="og:title" content="${page.REP_NAME}"><meta name="og:image" content="${page.REP_IMAGE}">`);
    $("link[rel='icon']").attr("href", page.REP_IMAGE);
    $("meta[name='description']").attr("content", page.REP_NAME);
    $("meta[name='keywords']").attr("content", page.REP_NAME);
    $("meta[property='og:title']").attr("content", page.REP_NAME);
    $("meta[property='og:description']").attr("content", page.REP_NAME);
    $("meta[property='og:image']").attr("content", page.REP_IMAGE);
    $("meta[property='og:url']").attr("content", window.location.href);
    $("meta[property='twitter:title']").attr("content", page.REP_NAME);
    $("meta[property='twitter:description']").attr("content", page.REP_NAME);
    $("meta[property='twitter:image']").attr("content", page.REP_IMAGE);
    $("meta[property='twitter:url']").attr("content", window.location.href);
    $("meta[name='twitter:title']").attr("content", page.REP_NAME);
    $("meta[name='twitter:description']").attr("content", page.REP_NAME);
    $("meta[name='twitter:image']").attr("content", page.REP_IMAGE);
    $("meta[name='twitter:url']").attr("content", window.location.href);
  },
  handleAppointmentButtonClick: function (page) {
    if (page.APPOINTMENT_BUTTON_CLICKED) {
      return;
    }
    page.track("Clicked Schedule Appointment button", {
      rep_name: page.REP_NAME,
      company_id: page.COMPANY_ID,
      user_id: page.REP_ID,
      page_type: page.IS_VIDEO_APP ? "Video App" : "FIN App",
      rep_email: page.REP_EMAIL
    });
  },
  setupTrackAppointmentButtonClick: function (page) {
    page.APPOINTMENT_BUTTON_CLICKED = false;
    const BUTTONS = ["#aptmt_link1", "#aptmt_link2", "#aptmt_link3"];
    BUTTONS.forEach(button => {
      page.on(`click`, button, () => {
        page.APPOINTMENT_BUTTON_CLICKED = true;
        page.handleAppointmentButtonClick(page);
      });
    });
    return page;
  },
  populatePageData: function (page, data) {
    page.APPOINTMENT_LINK = data.appointmentBookingLink;
    page.REP_NAME = `${data.firstName} ${data.lastName}`;
    page.REP_EMAIL = data.email;
    page.REP_PHONE = data.phone;
    page.REP_ID = data.userId;
    page.REP_IMAGE = data.profilePic;
    page.ADVISOR = data;
    page.COMPANY_ID = data.companyId;
    page.IS_CANADIAN_LINK = data.address && data.address.country === "Canada";
    page.PROFILE_VIDEO_URL = data.videoProfileLink;
    return page;
  },
  mapDataToPage: function (page) {
    console.log("mapDataToPage", page.ADVISOR);
    const repName = $("#rep-name");
    repName.text(page.REP_NAME);
    $("#loading-logo").hide();
    repName.toggleClass("hide");
    this.setMetaData(page);
    const watchVideoWrapper = $("#video-watch-wrapper");
    const profileVideoArea = $("#profile-video-area");
    $("#rep-image-container").css("background-image", `url(${page.REP_IMAGE})`);
    const profileVIDEO_URL = page.PROFILE_VIDEO_URL;
    if (isEmpty(profileVIDEO_URL)) {
      profileVideoArea.css("display", "none");
      watchVideoWrapper.css("opacity", 0);
      watchVideoWrapper.css("cursor", "default");
    } else {
      const profileVideo = $("#profile-video");
      const profileVideoIframe = $("#profile-video iframe");
      page.PROFILE_VIDEO_URL = page.PROFILE_VIDEO_URL.replace(/accelerometer;/i, "");
      function checkIsIframeCode(url) {
        return url.includes("iframe");
      }
      function convertToIframeCode(url) {
        return `<iframe src="${url}" width="100%" height="500px" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
      profileVideo.html(checkIsIframeCode(page.PROFILE_VIDEO_URL) ? page.PROFILE_VIDEO_URL : convertToIframeCode(page.PROFILE_VIDEO_URL));
      profileVideoIframe.attr("class", "appointment-page-video");
      // profileVideoArea.css("display", "flex");
      watchVideoWrapper.css("opacity", 100);
      profileVideoArea.removeClass("hide");
      watchVideoWrapper.css("display", "flex");
      watchVideoWrapper.css("opacity", 100);
      watchVideoWrapper.css("cursor", "pointer");
      console.log("yeah i workrdß=");
      $(".div-block-41.videowatch").css("opacity", 100);
    }
    if (page.IS_CANADIAN_LINK) {
      const logos = $("#logos");
      logos.css("grid-template-columns", "repeat(5, 1fr)");
      logos.css("-ms-grid-columns", "repeat(5, 1fr)");
      $(".american").css("display", "none");
      $(".canadian").css("display", "block");
    } else {
      $(".canadian").css("display", "none");
    }
    $("#appointment-schedule-url .calender-embedd").attr("src", page.APPOINTMENT_LINK);
    $("#phone-btn").click(() => {
      this.openLink(`tel:${page.REP_PHONE}`);
    });
    $("#mail-btn").click(() => {
      this.openLink(`mailto:${page.REP_EMAIL}`);
    });
    const onlyVideoAppElement = $("#only-video-app");
    handleBrokerCheckLinkAndDisclosure(page.ADVISOR);
    if (page.IS_DASHBOARD_LINK) {
      const videos = [{
        id: "financial-video",
        link: finFinancialSuccessVideoAppLink(page.USER_URL, page.COMPANY_URL)
      }, {
        id: "business-video",
        link: finBusinessVideoAppLink(page.USER_URL, page.COMPANY_URL)
      }];
      videos.forEach(video => {
        page.on(`click`, `#${video.id}`, () => {
          window.open(video.link, "_blank");
        });
      });
      onlyVideoAppElement.css("display", "flex");
      $("#only-fin-app").css("display", "grid");
      $("#do-you-know-fin").click(() => {
        window.open(finBaseUrl(page.USER_URL, page.COMPANY_URL, "getBaseUrl", "en"), "_blank");
      });
    }
    if (!page.IS_VIDEO_APP && !page.IS_DASHBOARD_LINK) {
      onlyVideoAppElement.css("display", "none");
      const videos = [{
        id: "financial-video",
        link: finFinancialSuccessVideoAppLink(page.USER_URL, page.COMPANY_URL)
      }, {
        id: "business-video",
        link: finBusinessVideoAppLink(page.USER_URL, page.COMPANY_URL)
      }];
      videos.forEach(video => {
        page.on(`click`, `#${video.id}`, () => {
          window.open(video.link, "_blank");
        });
      });
    } else if (!page.IS_DASHBOARD_LINK) {
      $("#only-fin-app").css("display", "none");
      $("#do-you-know-fin").click(() => {
        window.open(finBaseUrl(page.USER_URL, page.COMPANY_URL, "getBaseUrl", "en"), "_blank");
      });
    }
  },
  handleFinButton: function (page) {
    $("#do-you-know-fin").click(() => {
      window.open(finBaseUrl(page.USER_URL, page.COMPANY_URL, "getBaseUrl", "en"), "_blank");
    });
  },
  handleVideoLinksButtons: function (page) {
    const videos = [{
      id: "financial-video",
      link: finFinancialSuccessVideoAppLink(page.USER_URL, page.COMPANY_URL)
    }, {
      id: "business-video",
      link: finBusinessVideoAppLink(page.USER_URL, page.COMPANY_URL)
    }];
    videos.forEach(video => {
      page.on(`click`, `#${video.id}`, () => {
        window.open(video.link, "_blank");
      });
    });
  },
  handleScrollEvent() {
    let scroll_position = 0;
    let scroll_direction;
    window.addEventListener("scroll", function () {
      scroll_direction = document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
      scroll_position = document.body.getBoundingClientRect().top;
      if (scroll_direction === "up") {
        $(".button-pattern").css("display", "block");
      } else {
        $(".button-pattern").css("display", "none");
      }
    });
  }
};


/***/ }),

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePage": () => (/* binding */ BasePage),
/* harmony export */   "cookies": () => (/* binding */ cookies),
/* harmony export */   "finBaseUrl": () => (/* binding */ finBaseUrl),
/* harmony export */   "finBusinessVideoAppLink": () => (/* binding */ finBusinessVideoAppLink),
/* harmony export */   "finFinancialSuccessVideoAppLink": () => (/* binding */ finFinancialSuccessVideoAppLink),
/* harmony export */   "formatAnswers": () => (/* binding */ formatAnswers),
/* harmony export */   "getBaseUrl": () => (/* binding */ getBaseUrl),
/* harmony export */   "getUrlParameter": () => (/* binding */ getUrlParameter),
/* harmony export */   "getVideoBaseUrl": () => (/* binding */ getVideoBaseUrl),
/* harmony export */   "handleBrokerCheckLinkAndDisclosure": () => (/* binding */ handleBrokerCheckLinkAndDisclosure),
/* harmony export */   "initiateAdvisorLogo": () => (/* binding */ initiateAdvisorLogo),
/* harmony export */   "isAppointmentPage": () => (/* binding */ isAppointmentPage),
/* harmony export */   "isDevEnvironment": () => (/* binding */ isDevEnvironment),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isOnBoardingPage": () => (/* binding */ isOnBoardingPage),
/* harmony export */   "isQuestionPage": () => (/* binding */ isQuestionPage),
/* harmony export */   "isResultPage": () => (/* binding */ isResultPage),
/* harmony export */   "isRouteQuestionPage": () => (/* binding */ isRouteQuestionPage),
/* harmony export */   "isRouteSelectedPage": () => (/* binding */ isRouteSelectedPage),
/* harmony export */   "toDollar": () => (/* binding */ toDollar),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9009);

Array.prototype.first = function () {
  return this && this[0];
};
Array.prototype.last = function () {
  return this && this[this.length - 1];
};
Array.prototype.remove = function (item) {
  const index = this.indexOf(item);
  if (index > -1) {
    this.splice(index, 1);
  }
};
String.prototype.isEmail = function () {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this);
};
class BasePage {
  constructor(object) {
    Object.assign(this, {
      ...object
    });
  }
  track(event, data) {
    trackMixPanelEvent(event, data);
  }
  on(event, selector, callback) {
    $(`${selector}`).on(event, callback);
  }
}
const isOnBoardingPage = () => {
  return window.location.pathname.startsWith("/en");
};
const isRouteSelectedPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/route") && !path.includes("make-more-money") && !path.includes("manage-money-better") && !path.includes("both");
};
const isResultPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/result");
};
const isQuestionPage = () => {
  const path = window.location.pathname;
  return path.startsWith("/questions");
};
const isRouteQuestionPage = checkisVideo => {
  const path = window.location.pathname;
  const baseCondition = path.startsWith("/route") && (path.includes("make-more-money") || path.includes("manage-money-better") || path.includes("both"));
  if (checkisVideo) {
    return baseCondition && path.includes("/video") && checkisVideo;
  } else {
    return baseCondition && !path.includes("/video");
  }
};
const getUrlParameter = name => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};
const url = {
  query: {
    get: getUrlParameter
  }
};
const cookies = {
  get: name => {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const r = document.cookie.match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
  },
  set: (name, value, expires, path = "/", domain, secure) => {
    let cookie = `${name}=${value}`;
    if (expires) {
      cookie += `; expires=${expires}`;
    }
    if (path) {
      cookie += `; path=${path}`;
    }
    if (domain) {
      cookie += `; domain=${domain}`;
    }
    if (secure) {
      cookie += `; secure=${secure}`;
    }
    document.cookie = cookie;
  },
  unset: (name, path, domain, secure) => {
    undefined.set(name, "", new Date(0), path, domain, secure);
  },
  setMultiple: array => {
    array.forEach(({
      key,
      value,
      expires,
      path,
      domain,
      secure
    }) => {
      cookies.set(key, value, expires, path, domain, secure);
    });
  }
};

//ismobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
//formarans
const formatAnswers = list => list.map((question, index) => ({
  [`ques_${index + 1}`]: `${question.question} * ${question.answer.join(" * ")}`
})).reduce((acc, curr) => ({
  ...acc,
  ...curr
}));
const isEmpty = value => {
  if (value === "false") return true;
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  return typeof value === "object" && Object.keys(value).length === 0;
};
const getVideoBaseUrl = () => {
  if (window.location.host === "devvideo.discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://devvideo.discoverfin.io/";
  } else if (window.location.host === "staging.discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://stagingvideo.discoverfin.io/";
  } else if (window.location.host === "discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://video.discoverfin.io/";
  } else if (window.location.host === "qa.discoverfin.io" || window.location.host === "dev.discoverfin.io") {
    return "https://qavideo.discoverfin.io/";
  }
};
const getBaseUrl = () => {
  if (window.location.host === "dev.discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://dev.discoverfin.io/";
  } else if (window.location.host === "staging.discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://staging.discoverfin.io/";
  } else if (window.location.host === "discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://discoverfin.io/";
  } else if (window.location.host === "qa.discoverfin.io" || window.location.host === "devvideo.discoverfin.io") {
    return "https://qa.discoverfin.io/";
  }
};
function finBaseUrl(user, company, type, start) {
  return company ? `${eval(type)(user, company)}${start}?company=${company}&user=${user}` : `${eval(type)(user, company)}${start}?id=${user}`;
}
const videoLink = (user, company, type, videoName) => {
  const url = finBaseUrl(user, company, type, "video_type");
  return url.replace(`video_type`, videoName);
};
const finBusinessVideoAppLink = (user, company) => {
  return videoLink(user, company, "getVideoBaseUrl", "businessOverview");
};
const finFinancialSuccessVideoAppLink = (user, company) => {
  return videoLink(user, company, "getVideoBaseUrl", "financialHouse");
};
const isAppointmentPage = () => {
  return window.location.pathname.startsWith("/appointment");
};
const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const toDollar = value => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
};
const isDevEnvironment = () => {
  return window.location.host === "dev.discoverfin.io" || window.location.host === "devvideo.discoverfin.io";
};
const handleBrokerCheckLinkAndDisclosure = user => {
  console.log("im being called", new Date().toLocaleDateString());
  const broker_check_link = user.brokerCheckLink;
  const disclosure_text = user.companyDisclosure;
  console.log(broker_check_link, disclosure_text);
  console.log(isEmpty(broker_check_link));
  console.log(isEmpty(disclosure_text));
  const broker_check_elem = $("#broker-check");
  const broker_check_text = $("#broker-check-text");
  const disclosure_elem = $("#disclosure");
  if (!isEmpty(broker_check_link) || !isEmpty(disclosure_text)) {
    $("#disc-wrapper").removeClass("hide");
    if (!isEmpty(broker_check_link)) {
      broker_check_text.text(`${user.name}'s FINRA Broker Check`);
      broker_check_elem.attr("href", broker_check_link);
      broker_check_elem.attr("target", "_blank");
      if (!isMobile()) {
        broker_check_elem.css("display", "block");
      }
    } else {
      broker_check_elem.css("display", "none");
    }
    if (!isEmpty(disclosure_text)) {
      disclosure_elem.text(disclosure_text);
      disclosure_elem.css("display", "block");
    } else {
      disclosure_elem.css("display", "none");
    }
  } else {
    $("#disc-wrapper").addClass("hide");
  }
};
const initiateAdvisorLogo = function (name, bg = "#4417c7") {
  const logo = new _logo__WEBPACK_IMPORTED_MODULE_0__.Logo("#logo-container", name, bg, "#fff", false);
  logo.__init__();
};


/***/ }),

/***/ 4401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onBoarding": () => (/* binding */ onBoarding)
/* harmony export */ });
const {
  cookies,
  isEmpty,
  isMobile
} = __webpack_require__(8903);
const {
  getVideoUrl,
  getCountry
} = __webpack_require__(5908);
const onBoarding = {
  advisor: {
    setCookies: function (advisor, IS_OLD_LINK) {
      cookies.setMultiple([{
        key: "isAffiliateUrl",
        value: advisor.isAffiliateUrl
      }, {
        key: "COMPANY_ID",
        value: advisor.companyId
      }, {
        key: "COMPANY_URL",
        value: advisor.companyUrl
      }, {
        key: "USER_ID",
        value: advisor.userId
      }, {
        key: "IS_OLD_LINK",
        value: IS_OLD_LINK
      }, {
        key: "URL_COMPANY",
        value: advisor.companyUrl
      }, {
        key: "URL_USER",
        value: advisor.companies && advisor.companies[0].url
      }, {
        key: "USER_URL",
        value: advisor.companies && advisor.companies[0].url
      }, {
        key: "affiliateId",
        value: advisor.affiliateId
      }, {
        key: "APTMT_LINK",
        value: advisor.appointmentBookingLink
      }, {
        key: "FIRST_NAME",
        value: advisor.firstName
      }, {
        key: "REP_NAME",
        value: advisor.firstName.trim() + " " + advisor.lastName.trim()
      }, {
        key: "PIC",
        value: advisor.profilePic
      }, {
        key: "REP_IMAGE",
        value: advisor.profilePic
      }, {
        key: "PHONE",
        value: advisor.phone
      }, {
        key: "EMAIL",
        value: advisor.email
      }, {
        key: "VIDEO",
        value: advisor.videoProfileLink
      }, {
        key: "brokerCheckLink",
        value: advisor.brokerCheckLink
      }, {
        key: "disclosureLink",
        value: advisor.companyDisclosure
      }, {
        key: "isCanadian",
        value: advisor.address && advisor.address.country === "Canada"
      }]);
    }
  },
  prospect: {
    setCookies: function (prospect) {
      cookies.set("PROSPECT_ID", prospect._id);
      cookies.set("Name", prospect.first_name);
      cookies.set("FIN Number", prospect.fin_number);
    },
    handleRedirect: function (prospect) {
      const ROUTE_CHOICE = prospect.route_choice;
      if (isEmpty(ROUTE_CHOICE)) {
        window.location.href = `/route/${ROUTE_CHOICE.split(" ").join("-").toLowerCase()}`;
      } else {
        window.location.href = "/route";
      }
    }
  },
  videos: {
    player: function () {
      return new Vimeo.Player(document.getElementById("video"));
    },
    handleLang({
      selector,
      language
    }, IS_CANADIAN_LINK) {
      const that = this;
      $(selector).click(function () {
        if (language === "es") {
          $("#temp_en").addClass("hide");
          $("#temp_es").removeClass("hide");
        }
        that.renderVideo(getVideoUrl(language, IS_CANADIAN_LINK));
        Weglot.switchTo(language);
        cookies.set("country", getCountry(IS_CANADIAN_LINK, true));
      });
    },
    setTotalDuration: function () {
      return new Promise(resolve => {
        this.player().getDuration().then(function (duration) {
          resolve(duration);
        });
      });
    },
    renderVideo: function (videoId) {
      const that = this;
      let totalDurationTime = 0;
      let playerinitialized = false;
      this.player().loadVideo(videoId).then(async function (id) {
        totalDurationTime = await that.setTotalDuration();
        playerinitialized = true;
        that.player().pause();
        that.player().muted = true;
      });
      setInterval(function () {
        if (playerinitialized) {
          that.player().getCurrentTime().then(function (seconds) {
            const lockIconEl = $(".show-after-unlock");
            const arrowEl = $(".hide-after-unlock");
            const linkBlock = $(".link-block");
            let watchpercentage = seconds / totalDurationTime * 100;
            if (watchpercentage >= 90) {
              linkBlock.attr("href", "/questions");
              if (!isMobile()) {
                $(".link-block .cta_btn").addClass("active");
              } else {
                $("#unlock-btn .cta_btn").addClass("active");
              }
              lockIconEl.css("display", "block");
              arrowEl.css("display", "none");
            } else {
              linkBlock.on("click", function () {
                that.player().play();
              });
              linkBlock.attr("href", "#");
              lockIconEl.css("display", "none");
              arrowEl.css("display", "block");
              $(".link-block .cta_btn").removeClass("active");
            }
          });
        }
      }, 200);
    },
    handleLanguages: function (IS_CANADIAN_LINK) {
      // handle click on language buttons
      const languages = [{
        selector: "#lang_us",
        language: "en"
      }, {
        selector: "#lang_es",
        language: "es"
      }];
      languages.forEach(lang => {
        onBoarding.videos.handleLang(lang, IS_CANADIAN_LINK);
      });
    },
    handlePlayer: function (IS_CANADIAN_LINK) {
      onBoarding.videos.handleLanguages(IS_CANADIAN_LINK);
    }
  }
};


/***/ }),

/***/ 4395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routeUtils": () => (/* binding */ routeUtils)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8903);

const {
  updateRoute
} = __webpack_require__(8050);
const routeUtils = {
  setPath: function ({
    user_name,
    fin_number
  }) {
    $("#user_name").html("" + user_name);
    $("#fin_num").html((0,___WEBPACK_IMPORTED_MODULE_0__.toDollar)(fin_number));
  },
  handlePathSelection: function ({
    company_id,
    PROSPECT_ID
  }) {
    const paths = [{
      selector: "#route_1",
      path: "I am just starting, or want to start over",
      route: "manage-money-better"
    }, {
      selector: "#route_2",
      path: "I want to make sure I am on the best route",
      route: "make-more-money"
    }, {
      selector: "#route_3",
      path: "I am getting close to my destination",
      route: "both"
    }];
    paths.forEach(path => {
      $(path.selector).click(function () {
        updateRoute(company_id, PROSPECT_ID, path.path).then(r => {
          window.location.href = "/route/" + path.route;
        }).catch(e => {
          console.log(e);
        });
      });
    });
  }
};


/***/ }),

/***/ 4359:
/***/ (() => {

(function () {
  'use strict';

  let isDrawing, lastPoint;
  const container = document.getElementById('js-container'),
    canvas = document.getElementById('js-canvas'),
    canvasWidth = canvas.width,
    canvasHeight = canvas.height,
    ctx = canvas.getContext('2d'),
    image = new Image(),
    brush = new Image();

  // base64 Workaround because Same-Origin-Policy
  image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAABHCAYAAABS+xFmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFCHSURBVHgBpb1Lz23LdR025zrfOffFkIQoiDQl8WVQjOVQMgPEidSIE8SdpGMJ+QFJ2k7DQtKO4T+QBAESpKv8gKQnpGEjUccBrAC09biGqJgSKYsvkxQvwfs851szq6rmGHPM2vtcE8m69zt777VqVc2ajzEfVWtvNzl+6zf/6O8cbn/H7Lw+HeY2X3gcx/rgcbrhWhxhPj5f7a9/3T3m6Qgf1z3v9euu8Jgf0WZcv046hzgsbxj/xLinzucR8zza5GW3lx5Jsp1rSrOrfDtfb9rfO39uF4/t3J0bDxnzZTTZS67jWFy4d/64zp/zdXYyOBg5ON77sQ0gBN9tm0dY9n17xEu59uHH+VMz2l5K8st41URxbOI5hdcv6aJ4uY7Yzve224jgW5ydl/PV7OW8rwmNMfYpH/nmtO12uX5GUcouH7u2nGfv6JQJhnR43pxbHZ6492LiuQsxVnuPYcIXEdJ5jGOiQc00RksL7ywdk1jtmmzO0XJcGwI9v/HB+eK3/+f//St/Zpzxdfy93/jq5x6ePPtfr2a/SmW9+nJHI8fLJNW9WplLRwla6/a4sMQvfsRAs5A7Zls/PIBLDnY5ri5utI+WwGeRp9f7fn5eimTfNcTiikwJ/C5my5FguPpiQ5IzVXECc97rq80aw/d+bkEnrGEyX0dHJb4U7nzldFqPvq6tUcepc+qEu9LeeOTJk1Aq1yyUf41ojwgVG9oU3zmn8Dn+0rTkasg42bdMiP1Gt7OQN+7ioeZN4JNZ0wtT9tnSNZlrLMWVufii6cP4MzuL5Wgdfc45KvU/7bH0MlSekXyJ4v0NL1aLyYdY16Ehs68AcgwojOR6gMap/HnnFKYFdFXGiXNJMLJNogW46gpyEYlVwXFpHeumNZm84JdaTuMvgE2VW3MX9jjQDoLojFhE/4P/4Xe+/A/G5wluT/zZP7o6+lWCkavZJfdMtCJHtmoexJeIbswwsLwfbU0hakFBjTFZNbUlwSrvcQIWFWxFcKOHMmSMs86vew938U0+gobLJ7YxcqCgTfghWuYTBBc/cuaR73O8efJQwxM2ruhSxvM1GXQ6x5rtwpXzXST5+Qja0fz/+jznj4n4rVWpcYI63BPF1yh66w/3ky+UJYiNBJVIUHd4k0aKQ+jrU4SMNRyMu/G/Q3iq/RxG/dG+V3tL8MR8wGOOMQkM6kDSu+hfgMw5K/30uW7tfs5rNVjy1/NqQeFqjcTipNU2fierVGZU0XABv1Kf5F8ybRpp9R2MApbaJllGu5L+HLJeZ0MRZoqp5LSOaPOC+afx17UYWdmkM/Tuceow00F8YTLPDV3xv/9f/se//xvj0/Ff/eYf/mcXEZ+bTIU764w1DYdcIrAipox4RlBD9ocHjMyLAcYRVgAZ7OEwduxLaZ1ckHjuWIKG4YNLgY8Gr1sCd0iqDCkQ1KRwPBQcDgyQpw5PS1jGZcdu1GpEBLFUZKfiurlGOrO7xXTpZzQa400gOkBAMsVhIF4gbgCCtM+MNrONJ4/cyduLh34EPo/32Uc5HkuQAk2HEVSXbMGZjEKSJ6bAYTXv4hWicAE4GlVx3GEGDsNdYIXJdvA3RmBWYmw8r7kM2sOdwOYEn9nPUXPW+VWHQR6OPqkX2QEit8OXEqx710Rdzi1phVOeMhdrryJgz1QX5u5AtZR32c6cCEABEz9SBw6HinjFbcXqAjojLRuOy0Wrk5JMgWlbvGTiAK0ioXXlZLAzr2VQZCJHm+Wp/3a8PvisYU023ngwADHgI+ImPWR7tBsA73ydYaMfB6wKbXn/YV5ZQ3JTYd28uTkot2f0Sz+lGk9Fq3OVoixxVVoABVoTRHthoCfT3Fpm4MqfUEPNvh0pXmxSNsllEOGQdNb9inSkD0wu3OENFtYzNTbhgZBfGVUyRlLBNX2n9HIAp1L1iDboAOgKjuk4o1Kn7O5GZYVhSpQQyjbW/aK7lQhWVOAizDTeEKmYINktbwGeQeioNs0qK9VJNjl7Lo/SZFjOoc+q0XBBR8BfIf0s2SrjAvCCoYAFbpnSLTLX3dCF1eJAUlkim8YGIZURZKkpU3zQKnpYsrkRG3V/jcDwJccKGmQgU+VMnTyOWxth99Hef+7v/idvfvbhOvdx34FIrHPOKz9nLL1CvwXBLXS9d6RsmxcnUIVliO7WjNe7+llJCiFjZbJiTAQJMa6mcKwSJHBVFmOxzYKqt0oBBMY0oKqn1aQWbVRCZAw1E4/y6pF6s26M4rV1cCwDNbShaYywAeCbhRsjYkjFMCsOaWzDrZFi4Z0t/U74DvUVyTcYBSJYiJCjSF0NYAsHMik4KMKygyieFvOjAUlsUSpkzdoabw1xIN28YnMeWpfTKCnJDIk1C8eaGWdmbb2mic8zGltJgTEsC8g3sl5X+sXgZLOkoSMnal4bD6a4znXTchpAfLTHTeEnmWPqSBNiIoFlIZdcL+2lxC2VJhjEKNAp5ML2hM2rbBUmCBo3M3657xkJyIvPPdD1rXaTtzfjYgAIMWEswlyjrHEcB3NRhvbaXQFx+D2ooxJY/ROBUH5BTtY1WKhdM2jgtQaBIqHoybhOQ0+jMJLoYPHTxYlbN6ADns6zP2Gy2f3ibrRon0Zu2vbG2xeJtgyK6a8JoC160lhdTBbIaMm7RW6yVeSDGzOqWw64Kr/Qac8pS6HFEVUDK13nLVFd42GBm4kgJO4JRAXCA99qcnf6vYl4E2ABopHRB52YJ7dDwTTI8WOLfotvTuCTiwFjITg77IbBsXnUOfAQdye76Vxjd1pBXfBywXKODVdP0M0jBWhFWRTPvUX/0b2mNTe4iaS8DxsGFYVjYTzqAse2/Qj70COePPpDoyAXHEAJFi5Lu0hdGkSnd6WDIIxRc3B2opyTBUfqv6eLd13lSeAZwx+MH7yBWtm7KFBfYTSWoyoSMgxLQyQqpRf0e8XOjbctwmZqvXt0v/GmBna4YNOKguwoVpc/gj1F3nBLjQAYFHM69oUoDZmMyrmAGQqL6KTAKgQ8ne2t2SjqloeFhaZGqQcuc4jGnxuXBblI0uNW80ru3nV0nR4jbniDtdXBods7joqsGCEDsE2iIshjNWBeQ51n5FSOR8AGuB/lyo2rhowkmtJ2UGcUqAawzCW3K7Dr6HwCAE2ZwsE7o6mQKDjfqJUTWgJ8scRJeALj4mSCIx2EKbECWHkKIbpbh6nldGQ1uoHduPz4JB6KRFGNyNrhDoVeEwWMZqggyMn/DTOFH3EQZTk163uuEAblbTGrhumZpndLe6IgtcbS6CxNqSimBSBWuDfeHazJTF4e5XSMEUNSDVOyijsUkNasZFIY7daAILIAG5ExWI9qMfqiP/mmClI1LalruIKvcMmVTfnhQKoaaqTaLsqqKPtoIBLVbgKyey3R2/1aESCdNnsjHpMPsdGjEygsnnoRNKVY6B1CfXDk8n6RIJey5laQFIisdnEMiSTnHBotm9lItMb6XwLdGDa35ujs2YdzSwT8VwEarZY6Fx4dAsgc2pgbENMKSABFPrZoKXAn6yVarso3jVG2xgDQGSFYRu62g0wZUhpRzqAUd73e2ct3cKiV0JoUxc7moZdtApyEMXNnaaViWcFzJWrdfvRbxV1gDEMYB2NbyoDqUDlPY+Ebtx4ZUiVQmYZhVKgEvsMqrp889xLKUeFjGZq79aAjI5RlnJXzmRi1zN4PGBR5VFsjPJXWo63wGaYMD5mTFIYuLW6kIbJMPSCPbvNxRofFmxUr5TaISaOn0/Eg7+DJ5py89GFNUKK6ytWC12Vw0p8z4GomQuOkkUDYPltTdNzH7j3D2ENwx43MA1/dJBwS+lz47QywSHgoKOUSqB+e+1DcRX4e7b05wynwfvHNHe/1nhoyRZ2GBeBqegaj41zX9SM9EMEqA4PsloMEEMBXcSTQZxQSCZ/KQcMBFTJA5+FXcZ+baXov77OPG8BivaeVrOxBmHPzZobOLuEkmG0u8NwhNFa2gHApcRTpd4oMsUKaCmSDl1BTklHrjVVYb1oHWp4BHizlEn1a1qZhugYBoqgYdTV2o2uc8nohTFiFT7gjxDjmllsCowsWWq0LrX+PFT3IyCbGc1sCQ30pLYFhGTtUvHfMu6WvVnlItmeAvSaFCwCXM1hj8ponPGxFkY0ZjASV71atMpaTGo9qKSwRHC8eWsbnXtEIw1lyAYsFZiJ4S7tdRmThFV0e0Pe0vx45hDWfUM5PoqzyN4oAYR4V/mWWWV1HljEYqdnycqfOxKoGa5RblS8QDVGMWZivQiRp4qsjHXUWqYhI9clFqDQ/wz0pj5wG3y/VSkDjAgIFLXFMj1jJW77zssO0PShTrwTyyNOx13AsY/HqNPELmrIEJd06RsqB6eHJI2tgAMJZR4ED9lSumgAz6wTLdUOqvxbyMQZoARp4RSRGT0qP3bZOBNoIuTMiyc8VWLuMV5HDagPzVE5nTIcxC9Ec+6wiIySnZSbNqOHx48wF82bSUxMUYGD0Ux2WBAQ05hizVHSkPaP4vBglhphkYcrJ79EM+7yKDJpE3kOPTdmADiEzpkFneqy8PlydVzDKc5ra0kvs0SPfEDl5QHEbjUXf4iP2kGEQWXxhnmSFwAvQvT5SfNANxzgabUyuetO1xo/l5PoiCMskhnTErel+shZzYlRJZLRqmxzzLQZaxCH62qOrYA3VpVOFygKdpCKq3lrHcfe5PWeyyA8MeZzZ2tI+nYt7OcwcvRHucCpu1gyicy1EtbyYJCxySM3KhlNTrCJfmrqbBH/i5LT/ZsAWAJvQKBzZDiUeOVeJAjJFOpwSqbHKoFUzrMVZfisMmTd5kxc4X5EB5JQ0OOhESwBLSyUO7MifAJKGS84XLTiipif0RZEhNb5l93ODoy53mqTl8/Q4JRt7mcLbSkWt0mdlzRoLoIGFB2kiqRNKCLh2MJJm0JYiEPCxxMg0dPQXRC2nrKPNKXKV2au95yZdl2EzHfY7Tk1WV6lfRjvEdbeySbhvh442qUHdXhKHuDau6HypPIFDvJbFBihtVZQKFCw5eD2ViOizYKrogG71TJmLTGP1YYSOsXJAYo3SIXMK7ZnvXGm0js2RaSHvabwvd1iOYBm2FRYRDUSP6YnyOCoKUnplFlCmYkSwfxdwKaBlIGGo7VBWLkZfAQltKtOeQ0BJlG/3T6W4aYdeCEfQTU3Dayl4GYWL/Gv1L2C4+WhMNObAGMEk8x5hrXqbyXy9RRXK25VCLXAglKbIM/ZxR0Sa9Qo+G+WpNzuo0tNkMCtKoXzAGDRqeA/Kv4IY6srU0hDnwpVnOD5G1AVSkXx08s8oM/ITsoEaRQ5MmZm4nwA74ha4IECHT3NGQE6wE0VSdpjQckDCGNJRoukIBppXw6wL8LpEdrWYojfjxRFtKbAhEKrM0ULKDhOCMouMDcay39XPgywxtVkd6GpdwmDQOYTWAkEdZDyrNkgLDY7O3G5uTJUqZqtu5vDK20RsDJgZ6bp0kFwKnLfgfWjhO9uKwkSemKw5pB5BmeS/WgjGLmuvRNUzIgZwSN0ou3DhgUGPmTJQAWXLBFY5uRPeZNncTO0U9YGoWa5RCFJr/thnQlCBbEFMPhiGEsdSKtIo5EetPFY7iKICdvApb1oD4B6xW9Sh5jwOmURGMEjy1PEEple0eSkxjUf0zkQKPQIp1S/eq7AqYqjSZUIu0lEvZQYpWANAvST32G2lSZU1KJ1hfT59PO45NcqJRngqUfQww42b7dbCKjYaZ0VsisO5XWWZr4kQtT6FkfJfaL9RgZAWzG9NcLqTBJ/ISQICTQ09KoQZzDuj+n4yt1TfZqXNg+1I7s6oo/HKa2SHl62cGj6/cgor4Zggyy448ThFg2UNJ2nNkGjpd9yFaOPGS5PVQqM/mZ4ujMQUQMi4QPFGA3jVeGYJWEhdAHNlHi3uLb7lm7UcXlJe6RUcxprzMtlDokSNPjVyg87cjp+AzVBtfVD5ulG3iuQtEsGR6ajWAjEFBl4hwTX5aenRvNXrtLIOOsnvcKlHWWo7+I0oyzFEElKRQItk0puivtmiK+r5BtCIeJLP62F4a2rgGLvosja3DJysFn0om3paQ2iG/NHJYT03c52bmxqjQCKCKIHDEKIdz04CTW7siTVR369QF13TWvMeE7HD2AbwLVcsvJSs7vEhHtzvboEX5DOzBiW1IlNUrzOHyz3ZKOCKrBFfs3DUxjEHyRi8ipgmUQCjPAi0eLbG99oh7rGvxc3nYmMpucrSdSoYnp9W23QP6eWxY5wOzHFywQp2r3ciky2Np+1gHS47XctZsja0NIEss01Awq8btht10dJzB+INtKhwZtnz4voCwyBdZQfU/WxUJSnlZWyqlNFQ6UmPc01W49zYpIrPlZIaDcgZfVZ0uchfZ4+cUNKYm5trTFe6pKRxJNOX3Ly69kLNO66SDHW6HGxkrfs8vGqijKCpxqhdZ9jm87te6JgFbDJaKwA0jVnNNUqlGhsf/s1cMXMQ9BwwKAYfGq3RYKErRU2UWoSyLnWnAc4UkJtZCzZBAF2Ij6/WusZ58mJEWiFIx/6g7fleUsGw3rFX7SDnPaUujo425tpZDpDeAqmbU8dJi89vPFhWEa71HqE7NArgoxeZ+bpJLQRjuWUdoiITCgaiEKKrqGM0J1xkrcYAXREKtOPvSG/utIwaZ5+DW6uxURZOmnuUQ76mpruoD+nfVAXnV/HbovpG1FN7fIxBRcZyjm/b4DzuOBBbAS76LRpTV1TTkr5Jz1GRUg28NN85GQcp+ZHFcSDB7MutotA1Kpvizp1RtTM+u/d86XIDQ11vv8d36IAwwNusJZoDXZ7YGKp/BvAIylJXSMOrKC+zk+wr+zlI6Dx5Rm21AnWMIda9TlaZFV4W+IRcXYPeyd5EM6Ru5w30cj3D9f5IUIcDGseBSI5d+82AMyhRCxFDzy35YbBJC4+mkLWxMoot2QeLtJotZJjtqmzortPmaqgEGlG8A8pWGpd6gNQpTAv0VtrUdc9Jv20EUJ4wASprS429VjXBuwKYCrc9v/cLyuht7n4PKJo3oN+CMpfwHXYgSjPa5m5O8NIrQKmRMQUrnqOe5LIZVUBVhpiji1FXeUH9gIkOAJ4OATny4qgIS1bmanOpQ9Kcsyxe5DzKuME26lz2Q0Ntcnf5s/7qZc9G61NvLzy2xicU8m/7dYZgLrrmrU5rGykmoEu7EJkkZ8wrTfcNv5ueB8LhGkkKyFR7Xd1iY7Lcqgd8NvfY93LVeEUFFTGyjP0Y8RCsnlZI5nwgOjZIQydokyCbHtlRB7B+T4gm6RU3ryTApLgM4YRZbYqFdfZHGZS8/KK/pLBSBpNRkFpGcJOaulbQFRrXBnRa8smMv9fnlmfC5hbxrYazVkvoWEXp1t3pI118l0ywxLd6L4AKQYek48hrmqK68KUYUQgOzVpJgsorlBKcj8WSzXR7WhO2i5xL3mrlVKtM6cvBtZu9I6qmi+gDqaspw6zppG8A3HRQ35vyORngWTU9xDkIeXlLeXqP2ivI9skVlxAHZIFh2J+E+5dMHRiCyoFXfOC6KOc5r4wnpEyR6UowCbUwqsKylVA2Z30Fjbn1Ya4nqOxXY9HvWhwCZ00jtRy/LTbkwl0anWlQUZn9irSE650ImqfRoy7CtDOZiOS+O275djrKTIHIVnWKemIfBU/wOx2HIeVTD096TAqUG4J6zdW4CL/1wajIb5TYWz+InPIVtBg1aX0jyVG7KR3e86ZPNW8v5W9Eo1cxgjnmYUaX7JibGJuJapfHq7EKMAlsG4ktynKAY7Y/9LrfsptRIpialxABVZ9SqzwQJZSMzfo3w2aU5RgbHm6MldsawiW6Ev5SvvZhf3lEstiKN65OERGae0lv8gXjZ0PR1wCQ3OW16zexevXoCYbj+vpWv9JZrgmIvFDgugvK61EdT60c4xzlqERKTBlo/4ly3RbQuzU+g3/Lt4bM0xHCyQkCG8Y6sV05tP8Hu+mffUygYuTCgCxcltenXaDibRI5TNTBbnCHLeRQR2JF6EzZ1qKz2RK6YgEWhkwlsBK+w2WY7ZaTnnJZZ9b9DAGRS8htyKFrjnePCGMqlwwqsDWzqp6yX2pLqbUVtYskFUQf2ftbeH6eY0gl9K+ojYDC1CEjPnYbaLBej6jtCaFz/nCagl0JjMjspDmDkKWq6xSW2eiOYY8E3mw8+L4eG0rq00rXnjISLcMpcMt8vIv3ZQsnKseKmCmpjGpE7laiLP2QZxY3R2oIOmBROX5upJCnppZNzqZt3wGDfcq15F+r2JbIAX6DiFOin+pUFHHJhOY6mXku+14PWINqppKoEREEBaAYJ2HlgNPg2JIurohsTiySGe2raaAd9fFyWLJ/CT2aMW1Mr10IC8diKYHS2tp75LrnR+ak3r8xTieScQZiSkljaJxNyaeWm1R3Jmby4lqNSYOjqXr7hZ9o6LPS08NrK0EsAGxKy1sFjIsCGnhLGw48spUgH2L/IKQovMOitA68nyDqmkpTtyAimEUpJ2R3ZiSHM103dF9YpQkKuGrocT+VKne18mHZ+CpbdcKbI0rUXbmn8D0H3sfVUcMb76q2J+moYfmRBoeFILGq7nHaqubyel2VARLrV6q0BNLY6Tdga8rzJC1TkCmbEI2N2qKjP0gCGa7+FbezBATELHnifSrOjvUst3AvxxqzcwfTuxNdjV8SChd5CnDlKTg/wdhKS5dTdS4sqn2YK2AJlrntI+BeCT1XH4kFrX3qp5diKLLKzENv6Z1FDdiUW1eZ9j6o+eBDeVp6UYTcphhnjGRJM0xOirpOk2lTxZh6rnIlAV285y765rTJFFd+i055pWiKceVhTUE571VyU/GTMbIdYNF/+J25ubB2cWWVATawsBvptoMZkksamW/XniHpwPGfm/WSgMku/PxcXxnhGplDgl7LcS5ppMPzpoct8AKNuJbn8IhY8cY3XgkDPB/tYZ5Rjgg/oVdmRBCNTbUMoRVjB0b0RtrdaoGBtFum+AUWK965lZHLvyTeJNPa73HNVrLjW0BytmN7vzN6oFC/yJ3bHYbOjs2lswsl+Y5xu9DoN6SueVgByyZAYg50G5TYNpnI8Ct0TG1AQ3EZ2xJsTFK1FCKji6Qaip3AFJkohRREl+EJsaUcACqZSGe62xb1haCbIom22d+DzjZvg+LmsOSDLnOHmrDwMHKJF8QAM9U15rVcRGlKDoFZ0aEAmXwAiNGyvXVMuqPNr+5rpFRXSbGVQzFr7W/4CPkt3LNonSZtVrEC4vZQcFoRjfd5lm4pm5fXRJmy5FyR1NShXrFu9Scv+jyK9naIY7NsBtG4eg8Tfq8OGSxB9xPe5oRTr9uPyMgRfesCIqwpNIJSrII82k1gMSk9VCDDKDC4SqNwhqDEfENnzCdN7zH2n+7ZGt65eVlHNCam2t7c1n0kaYM2hur5LLwe1UHbjV7zhneq/o4CBvYlmlP4Fib2mMFxClDAJkw+S+0iDaA5d4Ce3cyRSkuvrtOoDuqv3e/dOS9N0JQXeFACFpSrFZwMFWBdADq0c+5Cl3tb9BVqaw1JXOYFMMz3oUhCJEiw8GjpO8xg4WKiQk6O6NX4tr2HQ2gOBO8PRvR9WuC7ebQgSOXh4SH5K8f2zndvRobyWrR0Dfft9wiQWlbFi08c0yXaKoaOv0hEYgSptCCNNAHUUPNBuiXd3gCGmlO1z/UF8KxUOKRdo9Xa5F0jjIqMXIc0jiGDMbJt/XESupxJZK25eGvk6U1yYKJut4AUBNIvIY7MCHzrptxT3LAQx+J0c+VNq1YQqkzc4NinsHPTGBl5sb/AzGGb5s2Dc27W3CnqOF4R0jq4d0xATzypYxdylFIzmlIMrqnla4KSiaFYyYeFYu7AjtqvUEKcFESL2sqQdSL3hIu2RXP3h4hu3DtvmBZLP7bEWP+Z2R4RNyAyyivcpKBu2zduiOpZ1UmZDSQJCBhvolKTdnwPRfD6HFvJo/paM3bev+lhKZVTq02cRfWRuoLyiHUfbQW6jhNeK51HOrMlb8w3hCz05bKalxfDOv6VxNzE7m42mQpTplAROJjMSKK0hCLf93M9JOg1BXTOs3MUK2aZGpMdU0PWszHz99XKEgKTcAq0eNEQObVS0DbrKptRY1gpfnqhWX9C12xfW6jhQuxQwUoVRDpJg7dgfURBygrMFAx9y6+VjoenHj/3iw/+6uvLbzy+CPvR9x/trR88OjCEAJO88ahHkzRiMpYqyPZaRWL7pFNXZlIqVo+S2FZRTf6sc0PEpyN79lqltM7X8f6Tv/jUPvaJJ/7NP/4g3nvnhDpDabzxnUVGAo995ONP4tOff+pvv/Vof/H15zcMrIjEqF9kiJ7HwcUYv/HBTcdNtl1sgMLIRa54V9EeXVWnBW6EnM5fOnJQTWNJE4JDZ1svWUbnPRxcRNszNwrgXv0IcTXDOVBGQpxbb+ark8aynHEYAT6XKtsq4lJo8G0L66KBpuXTRN53JiRoEY2ToeNHVr0hvRn8Yro+71IJRSEBIixJO6Rm2BwWJkXRAoy61R0gYBtgcU8UReQqYwF9z3HAVI2ajMGeC6DUCk5T1ZoCx1NwkvZUGh37TkR3GaN99t98xR8enLSO47NfMnv3ndP++e+9a++8FfKNlwkQBKIia37aaCYaLzHE7vXrSNxpq6swpvTUc+xUVKadRUVF+pKKXHdfgDWB67vffO7vvVMdc4xI1i2Zknc4njyYf+q6/0cXqA/QcjWbTXYqVCN9JvsALFcjtVwpACS3pf3pnuviVqO/nnNcY0SyPvkRXLm1OyFhWiGdunrOIHiHkcYli3U6t3vAAnJeBCzDhs3ZJt+D5vMmfRM4yG93qG/Jxb0h6ZE6NTofnJDNrtEtzoACybE+MvgivQGX6vU8F0EPyekp3gSVhRUkx01iiG1FqzPdNkNeFO2hdEbPYIvlj6L4rQK1A+7M4Zk8ULEogeUQh0RL1mEjrGU6lUYIKN0DLreeItK7eaWLVrG7NWQXb/PGxw77q//Wq/P0N7/2vr3949Men1s8e939k7/wdF5/fJ4mnXwBwWVocSN0MZJo9MucCljWzAlo6vKu2Xzxb7zir7522Nf+6Xv2/jvnXcCrvvCEQTNyFiTWL46nfML61yuLTEjrFj3dyC1JL4209qRCk+nmMConKyD3zeEvfAYfxfDmfaVVdCAvSR01wk38UbCoKrRH24cFp86WjdfJZ9p/WGxl++UIOiAr2q+hYeaBpyAWJubNuKm+cSAjMHOAm44XMkanhV4PoljvgcnOSD153eTQhilarlTvITtnbaQJCWeDOXjofg5sdGPNyNN3w+sAlNKvMqJnLG27d7Q95VuylL0vTdsDgoCQKkhw6v4NBAV5SJuOrVGridxYrVc/ajC8tJ2DYQ3u/vwXns1T37qih29+7QMD2weZ3/vz5xO03nv3XCfEMDQyUGwoWnrbalGejIoMz7ennHnu4z/zYK+8LjqQvl9pqChBjX8poWdqsh8aqWAjp4J+0CltLBd+11z4KzYoXsc+Bpuqn9wiz84vjVq7Y8iA7Qak4Awaf/uRQR7GNtsNFHSGi7M9C4ABWFl5yiySZYINuODEsa+L6ZykZgIY0DQLqXmkDyaoROljghlm5lEGhpOpX+6MvFoJKs9HAyV00IGScyr5YfWwLM67vgh8opK/mqWIGhIiEAoBpQAbk2nBOLp6t2ifcN9ydczhHcvle0HC+sQBcg79vaPEbsh9DPVAjx1k8JYiSDh3q1wgmpepaZRrFfBY91+1rPn57R8/1m2SBr791tnPWQPloqoNmDPjWPeMoiwfSM30wZH8gYNyx1K3MpnWp/JMgADGcMeQgXjQEnzDRGiU/iGH6M/Yyd3I0XQudaYmHp03niEswNa8pSlxh2SXqQaBztHnLc8j14nUIZjwko0ShEMtApCZbfkVMqm+bqyfES9Qw0qgNdBdYAV9zctqc/KyybgIXVaToBJm0aUFJd5trmh2K1qLQCWAfZFXkWpWPGMhfnGBO91vjuVBxRNp4WQNE/CyOJ8/umAmEVx5CMrGleSKBmxfLUNZqylR4YOJsG82cCeJ1s+zRrbuHK+nbQX1XQBh3Cm+Ad1aqDDWWzy2ccbbn1yF5U986sE+86Vn/pc/eGHP3xGt3oDKMmIZ8/v055/ZRz72xF69IqDnz8N/+J0XV2T2Yt72xkfdP/Gpp/aD69yL52Ejmnvjo4d9/Y/et3d+vB7S+OhVFP/kZ64I6tVjpqQ/+O6Lmfr93C88W5+/89x+7hce7LXXj3jydHHq0194Fs8/OKdIR/Q3IkHQNtpgnAHEP3lr9XEtJPQwNaq+NRYdxvy/9acfXHWuaJph6dW2WH8eI1UdtH/ko0/mpe/PuT+H42A/o4uP/+wT+5lPPkxeDV4Mmr7354/V6jouumfN6tt/es35F5/6kMfj1fZr/+y9aZtjbp/8xWtug9+v+eTPRfPkAYHeujMJK4BZcamA+E0KLp9TqU1AFwsJAe2LarMiI4/N1js9efM8l/2LSKJ1IuUgRGwNPJOwyGgbHD/WIzwUVrCo517BisTQnILV0/Ss9lf4gxoWUlKBh6T/6ahpnWaCIPXF85VWJUejVCzuYLI1o7MJAEvhFa0h2EHueghV7Z7ey63rvXGhwEqx+dP0VkiEaWil0mRqmxuZvUbN073O77NrjTCOuKi+y9+2cRK4LkOJT33m2awZ/bt/+yP2kx+d/tYPX1zGNVYOXxSnMlUZ7X7l11+/0jX9vmGzn70M7eHp+/6tr39wAccFgr/0bI786c89ZTS3yAv/zJdeWdfz+Nhl2J/+wgK5T1wG/t1/+XwaN1b80G6s3uH9AKPvJmh98lr1/MJff0XG8eu+AQZP7ff+4dt2rRZSdz77pWfXtXpaDAD25rXYMPrEMXThdJYAKJMB0v/2f/C6jGX2ib/yYB+/6LxqbmXY1zFqhWORY3QyQHHcO/j0sU889z8ZgMR5PZuSeu31xQfMb6DLlRb7r/za6zM9HqA3+h40j35HH5ejMNo86nkmUQb/vSP+LTUdKnoaFr5FZJZpop73su9ApGM0aQAagyCmoMH8MU6qcNR2g6jaFscXfZ0BVURltAm4eOYQxgwqCVgZnWzo67q6ZJXHCPAtoiQ1VU5eH56P1cN7i7vsZuHUZJhEMzMKyFjDNArzfKhoXWuBkgAGAGtSyLpUGioaOEEM+3VQHCM2NIeOe0bL4zbUJrgJJW7dAykX7p1MnHb57Hf4VhHc0hTkzXMeI0r6/X/8zjTmn7kM6iMfP66/Z5fBD0M77Q/+8Xvx3ruP7PXLv74MaCz9f/3N9+f2gYfLzj55RUgZabHtZ764oqb/5/ffj3ffefT3L8P9uau4PwBrGOCIFv7VFXUcT8N//vOvzMhKZztWLR8ue/7yv7fG/IP/691h/AHZDHm88pr7L/2NtZAwVvW+9y+fx9W3X+encY/VTxeZDMD6iwtYx9hPLuD57C+9MiPN0cfv/aO36YgQ4ZpZi2BHdDZS5jf/8N0R6cz+/uqXX7kir6f21g8fvYD06QSW0faP/u937P0JWsc13jMbq5BXOn7VEV8goZxbTT79hWPWFa+oEyZ6AdYbc+7fupzLN//4fX98cS2SXHMejuPzF1BfQH+dk+f8jMBhL1sxROebIkGdWjRijKaWkwU0tU1PUfedxhSxLvWxPRT8TER+yrhw38vlJ5ChZg3AWf1oRqWYGjK8t7phAgmmHZne9VzF+pYHNpb61nzvD861mFw91JxbH7FNUMDNeX2N7MJwkNlPIIAJANKoR/SHkjfczKV4ACCAul6iQA1jZdpplfYZFUBDvvTkXm1B4w0Zfu99tlTQc723ykF8r1HYlZbF17763rzy0Z95Yp/6zNNpjMOQvvK3XvOv/u4700BXSjVTMxtA9+LFAo73Lw58/a33dlKvdnEBzTv2+IElps9UaL770ytVHBHVvPKO2Z989b0LgF7zATSQzej/xYuS3QDRWj1cUf1nvrQAa4DFlX5SGce2hre+/0hBZ+3Rx5gjTQXj/+SKjj72t9+YoPGRK7X8yY9PeqDpH5FDyLz+6ALTwbPR7/e++Twunvhnv7TAD6A1Po973kzAGvwe91xA7yMyG6nst7/+ohzjdVygZN+4QAt+9mO5ADGirkXzIuX9i69/cYHuiC6vdHKmt+AZi93L1p1pD1QFwYWbLE6UndVqoOm/LnplWb/R4jWwrN1jUeCgdLAZgxpfNsAa/URIL7pswVPukTBqU85IATvQGEOF0gX7W6uGCPDW9a680ScEWhpgzrHPeMgbqgPsjjJGTmSecCsk1smiWG+32q6u8NW8gbDN7iOEt6XoZfSot2WPtyVmGTtEYBxd5mDRoyN9XywWurao7DSU/mpNbWm8hQrp3hFNqjXGj3/4OP9ee+1J/LW/+aqPGtGIGL7+5gfxxkdXqvbdb76w4fGT8eUAtmNEY5nSsM3ob/bx58+tUvNVdh/nFmitNFJrNHdmMM+jv7nhE/OP7ZGVaQMr7Xnr+y+UO6zHjQjw9QQtMl/aBed0Aefb+PKU5XxGTWuAFGgZqeOI9K6+rwjuNSXacX387drz/e88thBlpM3jGKn4l3/ttRYDPDysNhgTfFyc0QjhDmBFsaDOpVES+MTwNVBaYtxlQiPVeZrrvVFOXvyAPmGvscUQ1gkAXBnaeguwLeRj5IOvjbEW6VhRpUC3z0PxSSneLKivQo+xH3PLg62gKVpK54rh2cF6j2okIQwBLZm3TJtLm8mgGVqBiHxKs9LAEO+Suf5g+qEVf6/kOjFdoiU36UsNEKCCaIuRl6QjDTyLJ5x+FKC5cLjOeQGdVwjIiA7r1LHD5Fq29nevlPAv/sUH9ktfedXe+PgEEkcd58XzswACusdhnHGlRkkg5cM+242zi9pWw3PVcvxN47e1g9/E46JROecStfnLoNzEUq0irSgCBhDhPE4/Pu+Ug0+rlnX2GV7nvvPNEwO0msXji7hL0gD+Ed2KBOfrT64U88dXFNZAGn4bzla2kPBVHI0W5Xeb1apxsWep9hlRfhjXIoQvVR6qyYeHAmAGSaObM8qyxz8nQ0bL6GnrLyOd5GmtBGAkmMzKvuZPnc2uYGHGkQwKofBuuX1izcvb7tweodqqaWFKDG9cxmhMMOt7KBQOEBobJnYbsYTYLHYhZTg0Xg8sBLqxqj3vObAdSry5jG5mLBzmd5OVF0S46Mr8fJvG4HfAxJO/7n0xLAlpyoX7GXhIhLaEQP7506crIjCyuoDkSRrfWMkabB51mLHA+7N/5emoxxhYaak3piC0aSxAe6RKI+UZEZUWvseB1FDvspdGWqu/AQqvXgXsUQ+b+8wSdKE6E0wdOt7JAgToaHAip8lCRuwjc8U2WSb9xAKqAdjjCYNB0/jsMjYt060j8nb86IoKR/1v8P9KnzsF3oFHgWt3BgSqqGuFH5vcsoP5AuduWnao+lgUXpAXxohpGRPGRoiWdLTK8Qp5gkW1HJNFdV15xCDLEYWiDdYPULh3gF8xIkcM1KZyfd1ytsWABA4PLe2N41wrFWvfewYstw9M05MXM5PEtTUDc6WxVTp3nrapqJHZUxfxMIpGQHKcmbYsAigSTy9TjdtdargJoRqim9+MQ8OIir7YHgoEKN50vIGVtUgt2jjdsGjDX/n337B/5z9646qNPFR68+BxrYbZz39+rfB9/9svLNM3H3WqUff64lfWLvVsP7dMaISDiUEXweOsY9kXr7RppGS4/wt//dWxCmjtSL4hWvl00jPaj+ckx/s/zw2xn71qW2PrwMOzNfpr/8Yxa0xWeCVeq/guK9OwoVrVyrjRbyXcgKo5mHz3jT9edbMrrZu1QYQf4/0Xr+h1B8K8ORgM2EjVz7nqOMB8rLi+8jq/dsRHzXHwr7xqB9el2ACMW+APzMR2oAs+wSFidFMOYQyXnoAHS4+JP9uApN8Nul2glkFBZ43X3ZHhFgM82Exv26I1U2LLYD1PZYrIyGsbeq0aWk3Mj/xtNArpytP7N5cauAWnVzsHgHL18KKksDkrP9Y1h2CTUrqdNQgrTGGtNpRn05PRVW65WzErCV5Vzix28pJ4Qqa9zYMNPhwiooJgZzRVApEkoYAMXh80Raa0tj3Lh7k9eVgEDvD5ktRevHI+Gyni9wbQXP2MVbk3/8k79st/8/W5Ajb+lJARsX3768+LeuVTerfxwPIrrx0+AGqs2GHlbxwj8rqNti4A+Nr79is/+/rcwvDzuSVgHGOP1Y9+8GICxKgpXYXpufUBNI206p/8w7e9pV0bWCzHF5yvAtK91UPKChGB260+2HrC4LXXxorgs+kURuR1LUg4dvaPRQLsazORdoqao4yFjC//2usz4hp/I1J98nSloCNlXLJZRgx3CEe8LNID5xhxAWo3lrBUhO0DCbQh64yIlJCoRGqmm+zoSR5iJRERVkSNhzQtlKNkRRRdO1jmrkXPkHphgvYJ+18BUcKcZuHEOYSaq/dajIAsVhsU+nN7R1RNG+M9+fVf/rv/+fX6uTXb0gjUZSxjs/H7DAkgy82QdMPTNpORS25e8LtyB088ya9lceP3x5twfrw7QiMZ3BDCSW/Za33gJgz8qg9/sBXQ2D00AYleU/tFG+CmpJDwWtDS7Ks8cNGaar3Onld2dq1C+QCLYeAjxHhx2cDzaxHuh997YX/65vv2nW+8qC0Stq794NsvZhfj/jGXH133f/9bz+07f/YizjNrX9f/P/7BGVcx3q1Nw+2H330+N3OOduO/Mf6/+IP352NDIyUdn7kT/5rS2EQ5VswmyNraODqK9j/63uOIpnPP1ousJS26Zp9/+L69+5PVz7g25jjOj76gvfPaM7n2jpSwZN7jw+hjLC786IeP/fnC6/2zV93f/vHFt3/1wgBmf/m9x7j6wxLzpPUvr+tjJfAq/rPwcUVQ/s5F5w8vvp5n9pjGOOgaCwVX33FFmJO3zz+ISy7P4+rHx3OiSx/oKEtd9nNeBoqxNwzH4K4Sg/pIGKhmYswdKskpHppZpQ9pNkQj1zEzXEAae5O2lhvnwN2d0PQ04NjBOcT+uzOSgAFv3SrSqoaR5e6Js+eL3/b/+j998/+4zv8t9zJrRQUX8hNvCDgckuCUAOE14/X9UWQzvw8rZxqKkavf9CJeXxHCefk248UJrcKtc96wjHTKPKo2ouBlm/AxUNz/7Bq5mfHh6b3eJUqMAW4L8tvhfYBGm3/onXanY+dzY3pIiCaFfbMWKXjVRCp/qYKym4UExP19KabE19mD4fG6OwTFzXw0qtCQl7Uuw63L0ahPb+PvvENUYtvQfSXba8NlXjR0FrdEV/2KZe18rTDMGPVMRjCSBH9Yk815ntb5l2mhsWZVm30Mi1hnRK9TrdB2ruye4Eu2GWFaSHuMbSn8CpccWyGYYYVqTbT7F3MCt7eFgTU0ykCag0bpK1jMqO60/1DXb71ZtolGqSSTGE2F4+66B++dhCXmZFbt1WPZTa4SeOxLyHlf7MosdEb0MZtOKCWmDPANG8qK2a/d9vJygLNbLoRX/JulOSqBhbGGZrfDaPhdEwQfPpwjnR+2QgAZdp+qjMvizKoxAoSajwx9DMXFM6jKuNKXq4KR6HJTEEee5rclllCez+OsxROV0YmJt4jt/iSz9HQbGSx23Tyq076ILpLK2omhfZsCVqQi5utir87ZCLSciQIWrpfORV7PCWS7kElN4Iq4rbNm36faAqiQDEF4T2UpeXH+KkK+R9DC8RpO0G7UAuGMHLjWNqZGcgpm9CCF+MCAQkI06gWcbqaVTD5ZheJNCL0it3RAgDvMJODGJv9qXzcv0CPTpaDJBXNjTi82ThmwL1CvyiGLCWH0XmF2c74RmUa6li/zDszGBV68BGcWApbF0Vsw2tLarEuyirwhlPBk6XYInwpDlzwbb8ouQzpqxd7lke2mztBALAjQjtdTHJReU876KRHVzuttHOnLW71rnEwaSZ86J8iqi7Q7COFHNH0vIDKJStufVRTV7gXMXmfhDCZPTtswbxN9UIvaMqLICBlY6ZUZUG7VwOgMVpvDiWfu4t39Q0L4aQgcs/JPRlO2grZVg3IqyMHiUdW53XaHsiKuEN3sbNDi/bZ6iIoaKExQaIR3AUWh02ogQVFKcIVlUR6CPVXoUcPPNipI53nVW0Foesuxl2V+QyaNGX0SVBW43AjOhqhAwEf+AJhuGuWYdcYKgTSolS5CW2otQtNIAcQWBsf2JwafwFVsT2jl/QlU5+K6pH26cuRYH0fkp0CPongDxvMkfyJu5Fb9mFdRPcMBzlIBvUUBkHcwjiFPwwSYoqWdUDjSgfH5uc4j4OetIcAJQHORBXkWKuIOEJFUh1xXtdCjhupHRaE9wtDtC/g9CF7GhisDjzKdCpV1tj3xuA/AeClRMDBdA+YqXRQNCSROPCbqpDFJXOW8XoqYUyPsRkVjjTHFMX5H0g5r8rn/sEU6pJzUhA5Wo+yOgNTg7CUHlf9mn1tUtmnwTJ3QgKPILR7jOIsnBKTkjIsDbd9Id0q0EAIQFjpoC/O06Z1ZuchC25oYVGTk0CaWRl+vO8haGec+aAdiGTh6hBJWCk2+4h8CAZ1DKFjKfS5vpgwVfFQOChy8JjWaoGJZ6KvOMAxBqsFIc6rFmPGe37xZc19AFsVPC+ZOyvc1x3MZcXMQll9zE7ZtwLbgUl706C2KDovKvaPJGvM/C5BUdxGVxx05705h8g2cw59Zy1hUBFEOeoqn0MaE+VU2kKMwzLw3iOIjdFZBb8/IM+DIEMvFuSQkREpqgyiJgvLbICQ7f/FibC41HRkGn1Fedo4owaupM+Q7JoudkYTU1JJay5B5glRyr4Tu6C8QVSVo32ziA6mW2rnco8mWgagZh1xuNZfmbuuRCtdd9AggNTpcdKPwbxW9IfBxZWMyrhnzbOs38cWN5yWtYaatafwAekRseVmuLzFGv49TAqBwTjWeWYENwChcrlkHoZy3i1gK3MapYwMvyIW7n2t2njru3JFUPJ4fsMoUVCorqthNA3Ap9ZJvPL9FrEuVTJ50KeOEzoujTNk4J5a6tvYeuNwPHiuqFB8jWjo/gXJ+PtP5uPAiR7/SikpTUSwbDc7QlLT+xEnnZ48CrlCy0lNkKryXhEIILx4FQANt4G3U/qOGcO4zjzqlQ2Tz9RXL3hcIHmBbegTTUkWt1ZPURHJSAWFClbAnyrVDMttqtg6GL6Pwgj0VkobMiKZytSt3q9XggBuHonZAIJruYIDHIUrd+bCpaHoS5+L/S8s5M9qEaZa0zSFuPiNVdInZ1Qvr9Q00FI0l7QTnOQW0V11xATKptzXnqYbf2BlNd/Nm5SI6az7H8QznJgbafrqKtqE0K+4cLyjn0FXydCauNbcSiFlZmfeV3gbA0gaEhSxTl50V/eo5rPhnHBvnAdpqC3wJ0lsTGrecWoMtfgfVZgdfgAssbc6A+8aoKkZca0DUwDwanTW7ds5L7EgBzQsj17/aL8C9epQ64eox65QdsMaRv660Tdizm6DCREoOQbuL3dY0JKfVi+aq1HrDyhGRRoV1T2f762KAI6Y8z5iepYXP2ata/GRO0OGtc2EShkOXHEu/7C9iI0UBiwBaCriWmaHIzenXHCKyn/BtdQp1REY2MCS0N9G0gEYEDX6+Bp98Jd979BNlxLH1F6uWGfW9SAJCsf2VTBL3rAEyLoZVJneSaNY7TOgo4IiivzyGWdpc3kq0EjEB7RXxseBorQ40I5mhGyejm404y69vmUhLfrlizGpT91ibTy4uhO5wCqEjFDSs8wJDeDE5dS23M6R8PHTMzvp0RFukZLJ1i4ff2F1hA1TQKUiwt1v6pp/Sud07asUOVHns+nPneIh8HL8M0UoypSjL43pNkM1cSOidrDkkJTgxts1DQdKNM0yUpwujkTLj3quXo1bAmjChp7V3aLVZueXkTS4BqwFwpGO5ARfF/amO5N1yBpHRATEnFyk2TWJ0YFDCEM8erW8rb8yafUIIuO4MwOiQwstDCK0YvkSj4U/S6aziFp18RTfOgC/gIIyiMOtxPuiDlbjWNuxmfo10JTDEs8Q2Kas5py6sdB8UZVkCdBdvQ8SCyzlamLfoZg59YjTrvA27jT50jssZ5ECUF+tzcCKKewUqCCrTcc1zJ30+HJnwBKBotkVhSDet+Ixab+q+lxbOi9t+Mxf7IK8kmwjhT6joljGaI+VMOjztfzc7tlUe51aI8RhPFo0oOtEDA3Y4FpRLAza5pS6rR+bYh+UIk0J8m6lBSyINzQmENGKHlq8r+Q32qbOu/Ku01WtxjPWw4MzER9bhp0evH0kfzbNqeAtdC5Heoj/nY7axiHNJEZdbwBgJduibnfqKUNqmSrMqn+DmTSBdOMmjwD8NjPKGUHJ1ccCgmJ6gIN+4GVYCa/I3cSTsN2r24Hb+hsN8kgGGrLL3NJgoOCE/K1JN4FtWmLzj5zLwNsclZaNI1xRxWdQQzjJtHhGg1N4iP6f7YtvtOCOw4cDJWCldAbyHkPKLEYudJ/uenN14vdhr6pdrYo+IHBtY38CvS/jkbCPgaCZ0s/8+Vx1/BQxner9MU92auQEUUwcFXLJ4NFmbZ69C/HFvhRHUoseIO94tn0cCIhOoYteK09klELZ1sxgQ+VwVZhL4WzpIqAh+KMDSVE+9Vw1EI5V0h0EZrTIy1Ms4mN+xMtqN1aVlXU66JbXx/ZwF5wZauJ1g9noai9EWsIXmPQigHAeePvfshLDAo0cw6DC21IDdVvoXyAVVJgCLimi96EkrW0a0vihjRaolz4WM3tIFxTWLyqBAXgFWLmyQ/6ErWJVJR/I+X7Wv1CmZD4ALKXfJUfpSvjhAbt20V0SMaX77bEyv1ahj05ekZ00f7EIfFvzuNuoEnaHpPjEAmEO9lq2l8DOHi1zJcuX7unw01pJzK8wIa+PovNe00KfygP3XCS6EQXn20TBmSw/Lbqy+pGF184AqvmwYKIBZJLm1awghV2RVu1dZ18tr9WBlIS+WUGNsOsO13Nm8+ssfoswpluA8mZNFa0YKYgOo2XlFAYEJdKSEe1s0WTtrXZureLmYIaszqdA3iwHTO57seUUJovRuQk8I86C5sqxviNoQ8YXsmsGNzE7dkXqTJw2oLGs4nmllVHGU0VuUnJfbZ4SCR0MS8hNwzhRKhBapK2zG2lb3hU1xiW/oynC3Fo95uESkq126+tAozQokdMmXQBESDYfofQ7hYvcp4GaNEIkU/JuiY6pu/QdSm0UnKzwadruVPgnQrQHo9JYKRCJWJPqR/yaR9OlEJlc8Q0SQXYDxFWHJa329DCdfQKgzGoZ9LhBSKac5QaC2ccErqspxPQWdt4EH7k/iYeexAo1l/okvM13KZaxSwXvlL1Sgg5y671qHrNAIxxkmJjty1bEiBnPmnBWVeDCH1zgTaaC67ahnJC3E2BRJGcSxghSNlWUwOfsyLDlf8JqEs2cqU9YhYD/JBSq2WVtVK2pEaUuza7hQj6CaWRDhuuIF+SH1tQL/KuQX1s9b5id2IHQtv+4CqLB3Apmp0I3RUIislgpoKFU3CRBpsF8OB6GCWk+WZ9pqX7XJBCQEOSVlCkxW5gF+Ue6L7xq5eJHe5SbAqMAGljWj5+XY6Nt0bp2vCDgKIGr8PHc2kKMMIQA/t+9MxCRWa0lD1+X0XPnBrHz1agdiHPa/g2Gl7Dvvt4g+hwt5oH2x4nE8ouwqrgqPswfP/uCUW6cm6GulFIachjuuEf6SgW2FDvSh0LjuVMABeHmPRDM8h4Dgn3AOyqo+NqLLrwSK9yK3pJVt6PxCVLGI5FsYWqAioUQbGNCNMUiWA+gs+rWtE7BA6Q+ZUtWk7vEMBq3pB1gnfUcnvVJxeb/Rvbx/oNZ3OgA3hErKyqK+3if6SmzxwYIpu+m2nfWf4zplFGUYQqNGsCb4NMLHUNFgblYpPedaG4ZVXzAWHiTmMSPzU7Lb7HciFrNCD9XPItEokFCjplwlinPyi32tngXsw9u1knVIeMtgLCeX/aRMdW5J8QLfciNLn84gsVt6yOllcS/AOvY7rT+qptuivbFPC4+dmlfgE/ltyImznrltLpaZNbqFLW11IdGxYgMrj0VvFAmMUrAVMBtvD/XS0QIUfPXMivyyBrHQLZuvjs4zeaQML29jZCQT5RaQuciIBfucmYyXTiOiwoRuJMo0vmqCKwEJ2OPlynbaw0BeqBSijNHS3a3JewF40i3OBqwAf1GlM6S+hoGWinhno6akzdnInOPmeqWOUd62DEonjRTG1ubBzA+zP+pOxozcxJyU7VEKkEKJaat7EtnAqSTOtnQQqiNqCya0e9e3LvRG0erEyb/TqigTQTZ7ZXV0di0aDpOyQS3mrB+zVTBf3Z3JlhB6JIxEgNAiolIV285B75QuskH7t7FRNMMR6F8UULRoKAEBc8xy0zx1pYfjVxdhiCAkc5SQX+c5TYTeLZrma1IwS2Ws9UxGH2akNJWQhlsckUW7c2kdYpbUhKlD4RrleS1qrgGkbiPRU451ys+O16jpZa0dEbfCamBVhkbDNEdIC4eTHuNMZWZNRV0PNS+8CrFW2ngb2Ybk+w4+UN7dSOoe4RFsd+FgKpTMC0xbcRTBQVZ1vbBW6Q3rAJUI2OjZdoXe8LkJIjcA10nnTQF0NShHtiAG99qYzs/RN1aaoef1ymxAtCgDlkrzhai9j3LrDjRI8zDqR7btNchIcTc+rT1aqUPgcem9IYNLq1LSzCixSGSFtedYbJ4enwQYfURxzzX1KXdnvBHbAzFX9H6qtiSGdFHHkX0XOCdiPDF/WNqueXFBUuTeJuTzZrqTOXsPAhOVUFlVz+KoFYaTz0v/jR5tjhUQEGtkITUEIyYUMSGKB82kAKLsZdaNF4gsg92NwFLJvGpSS5NTGRUOojQBGlKOUgURKICDBmdun+dqYcGRWmkgiG4zNQqGxUcpfMlFsEpkBWTwDrZpIHxGBuEyge+2T3UUoYDote+D/KAjaIVZs7qPbPB+bQvqc9pR0Uj7TcmFqGuc1aHej+gsbohIw0xnr3NfNNSCT2ygCmZk5QdAtXiR5yqVTS7PLCt1ifSv9wBID9W1DELSOs6ye3XFPKinQfGGyeJR6nSkNjqNqN0HHasIOIBiCF5NIrjSqDQDdR1b8b2MRXRKsNr3iK3HEP4Y6yfETu4vXU/GNIVBOZLAVKCW1w0RVYTkh75iIcNPRzhlaXtGFGKWrgQ7vL9XFORFgYb+8C5lvaGStLCouhiFI0u5lUlZqMsBIUiXg8EeGZH34F0Hm9aJ9lm+rO4yjdZcX6H1JxV7tT3LUXTvDm4KB+GEVtYZ1lcl0wi8DEOvmzP8tQIgAeZQHlRhvfAIAXKF0cof3ZPkxVyoQzlJM+oCHEWcAB7LHDdLO8Edk4rT0PTkdchCRSjkIpLAfjTVnR41pmO7mSsinuxwXDyjp9J8qN7KCRRPkaIumcjKxQrWuNUm7sjAGmC1onoIiGQzht3uVilogaUzsp6ymm1zW5qm9GGNjwsJZH9WG9cIFlmScX5EAwKeRCPtO+KXaVdqCdsvr3OsCeWWHHPbinwTUo6QUaMuEPSoQzTaAi4T2p3+KwFGwYsE5zRPp0FiU1ZbuTGlt3lgTgDKJkruKOo4Q1rvAOPdnVv+eEhlAFKXCDHyPa0xOjBRzgZydGMFwN6vm8RAgfim3JiAbCZnUMLoK4yYSynp2oy8yD0EaXNecDrE4Y1woyMQxSAYc6UO8UwwoM/JmAYK4TR8RDJw/wi0EAWApzQGtyrBFI0hgNScxSn8zGhs1Y7LAZFv4uzFKRYDTiQlxsxBVldBk29Mg3zkNWpbithCUZo/MBEIeeBgK+RD1GS8Nt+uRQQiEIrFnRaOS3g3a4Jy/MBFSP86r3L41TH0GmeAF0hNu64/TGMdQIOoaDNpuhSyaiKWK0pmJGLewsJJX2lJyojkuTeSk1F4Kbvl1qylHbl3noVwGi9ZEVKkyZHpoUoO45/DC0j2iDX7paGFVR3BEggqetkBKduAhTaKgqfWqBY/6KUcdkpFXFh5elVN1oTcK/jJ0JOpSdK19oV5pb610YvnvIHNOM6ezszzc1UtSwPZ7hRFZe2EjAu/xSsqnS8wxU8Wk7WsN63kL/2B3XUtDQhaam8JNCHWC50oy/MbB5Z8TLyjI0K0FFBc9rZ5ipCkdQ1RUasJOANsQrYhcB5JG99XPTT1Ze1rJp7Y2gpQuEKizoB1hD63Y5XeiW4i7dNozGJ3hQQ6mpNGTME6K4BUb1wpN6Mle8mxg59EejjnBWAP5YbWICipIPSsaKV6YOph+lrd+EZCzW55RaZ0Gu/OppHM9arZILYqN+nlyVazjBQq/8vh/CY/VqqrhkhlXf9FRSUJXUx1Ek4lT5KhghH2ii9950sjr3ubAkGrjahTNwOGsiIQjRAqXfG+r8gsl/ElXQ4LZUQaafInlioOmBzgOpd6TNtWjcTI1gwaOj2QU81PZSDpuIXMQegQ3lSNUpS3ApRU3IqxxAFVTXHjF/i05rnOlic1U7DX/hDVhd1EpenN9Z4kXxiY5xuE5pwJduQXkCrnJptTlyghm9jTyWXwixUramTwOvvt4EAgI39oo96AyHEZExXdZd2LQ7tplKX1LNoy2zV6VpQo9Q4vEGcG/AS/MJ2+2qMx3W4epHarQoJZT4+Cq3RQQeSyhi/y8lWRqqCYwpHPx9KaWCkzPVV5Li7ERQIhAc5MbChDcd5fZEJkiCAMBhk7eFSUyHvYQQhgkCF5qUddyVtZncKEmTkLAHndv8QLDC7v0voiXRm9RHdDRgNeKY4CALQWsjQBD9RX7vhdBSrfzt/uYG/mtuYsL8UrNVqm6QqWplMqnvkyEq+6adHhcUOfYLWFCC2jpd7W1JEsTV5RR1ChAlxSJ2YdSyqKT1yM2qpDfdjAHQSgJ2b7cExhTekYLc5Hc04K+cxUYBaimjA6faeETmzB+4RNnaHyyioQvIgXf9IClsGFln327saq4SkK5OWlYuTY/vhkFeIVm5Y81jjBrrzxxyWRD9wflVsm38Wt7hFPRltrdt5YQeMJyK5ga/f4ijgrqJxDwrecbkpCRnc9nt5D1vS03ry1WdFrrBeVgUZnPe/F3WcaKXEBWCWrgcl+Y71m8bjdF+QbrMD6yBnleCbzfmvAcReG7K4C+c35bWVxukanF0k2txSs12nSFl3A2FhczzFdF5xtyXkHEVLZopLe5y6X4jPAu0fDAp5e7+Pe+/mZDiS5znTXJPVF055RjTsSVwT/yh8WwaXe63X58ZOLK1ZYZguwlkBEpyxTsxAAMVEWk/WKHUgbYFmjzszE/Go8YURYZtrLZsAAYPGNHrqZxa2CqjObHx/66ZDbgRyVYbgy0awFu+oArASx6KCLAaFYdVj83ey5alRr2NSJaBGXJSciwRiTSgEicoyoqtASbhSwjnP4ZgEtoo0De2HIuTLG1cOJPpYh2X0DAMckmgIWZPonRtnqcGA0dEBNtWpVBEcKKTuvDY3l1UGbRiW22FTRKy2/QLeKGcVDcoJ9e1euyMURjbyW9TZDhLFkpLDKE6cAi5LpVYQX1aPOnFzpc3iOujv7iG5cgAFZvAlxCBvwNXuVemjV5HLvYBTNmQadWHVW5xEFXDWkKrj1Gl8shQ6qB/iW9c+d7k2nyVAqXyToSfRtVVJoKgfVCpFHd0iZkmJgJzrZDphbfr3I9h6eysD7Mb4j/s8y1MpQhcC9soSuG6ZcziVj8LdcBCKiqhOgQkbCggW8rAUqxSGjxlKCyeD1sgKOKEYS4ZYEs36z2uGxilP61O5P8bDBP5PpRClY5G/JRX5IRT0xD9KMy0kH+zfOk0qh09Y6UmaixQZtv6B7bfjxjmlBg897gj8UMiPINDBey0FCjKBkhDHLuG6UqPWXf/hVHe1T5jF/ICOUhjRiq5++Auct1ShMQplQcF+8DqV5Cmpqs+hutOKx8rN4lIB5Uu1M/8SrUydCToaZ7SCnPAMNJ3RSPElQdkYFzZQwzSxqbtboSiQDaFjBw5pblyWmIrHOihWRxTiCjECwj+6aAZmUMBitzN7gtRwTivXB98yL5gs5CQTeP8YWn4c/O047fjvRKZAmLlCILC6F7+DFHqwYoWcDHpKMXXtNIkQaFe45MCAoBVUAqSuJQZ1IAoO6V2Gw0WJBU2zoq0a4+og0DChFNsD7FV73yYYJ6FmlwKOf/M0CP6kMgmB8W/cgWuF7jB3QRWNTg4MM64AhP9gwH12K6g8ApyCxG+VuoMXC27YK4uSnGjKMLCpiSEEF62VitCJH/Ihr2uz6s94VmXFSeTba5Rz54Epf8QlTNMrBBFSXDtJZ3RlD9VzpOMlzU7WPrt853/rxlTqof4EQvYFb0I6U8Mw2glsflrYU6jj+ii6Jclb0tK6Xcq8vbkUbLx2eOtAuMtqKciyWK2ZEsWA/TaDWju3jOP7P//F3fvkbx3/3v/21373u+l8yEpqA5SbgVcEMKuhgXOW9XOGyWPG1eCQKUUNQgzCjPASRnuTmDL2sl+MNDvC39GLLj6spwX5xcEhxGXaFyWsE9V401hN9U68NYaEIjX8hfYBn4KMaYAJbfz0BcKu541fUAtCUDKmfVVyP+ggFGBK5dghp2V9IGF1t6t467kQBoe9PCW+Sv0x7YusrGn3lyg08mGtMVWtpACT3WfkN8u4e7egf/Dw3hxLtFgXQdDTVd6A/U74RrFdX/MrvPTpLtlnhtxHkcf0kg5wGXZyeBDrHET0PE6KM+kGd4eSW7aW8l/4mI6MHwcK/BiuOZC84npaFuQvAOfwKAtpzmh2YouY6vo4Y6LFFWm3RyOwvT3vyX7Rmv/Wb//y/OSz+/ur39ANPk7i1WowiNk7MQVfGDVBd8FrfIDE7OORXFquK7pSMew2w8C+vYcCajU4tBrELVW0v69/Um8x0jNuD9QNv7v1GttHJmc3Im0VsJ7760OnUfaoGZrZZVgt1pVYHOawK1L3GoG9fwtI53GGHJ9CSH7dHFwmZ0MHmX3ewE9wfpksYdw9l0zZso/eGdr/f/8aun+rQfrS+lZSVHsYN7dxzRfqiGt5HEWK2V9PI/52oKKHLfHOe0WRkgioZfSyXMc7lUwVs1/QvrAFjoP5QbQJhtpGEIDKvVcgsekfjIg2B3Ilt6vPf332MF7/1P/3OV/6p2aaMf+83vvrxp/7qrz7G4+fHl23ptSfX3+OxXtnh8eh+Xu2eDLy83ss947usfF9Xm57icX04nphnKZ4D6HTmd8mfPk5fEHqti1yFxq3NfuDy49bd7MtPt/+fh/6y7Sk06rVze99ouNoe2/lju0f76F919OF0nR/y/t6YZi/vH+2V5nHEfNph5g1uLxnn3vmflvb/L8e9+38aHpt13tybw8uu7dd9PgE6I/8bOf/reI3Do3Tpcbv25M652ee57lE9ZH9nnYu14O2dELWS6/1jH+XxzoCP9ybxOPp/cqnGo5/3iMw2QnW9m3Zt9f2PbW6WuPL8n/33CVY4/l/gzzwhyi8t8gAAAABJRU5ErkJggg==';
  image.onload = function () {
    ctx.drawImage(image, 0, 0);
    // Show the form when Image is loaded.
    document.querySelectorAll('.form')[0].style.visibility = 'visible';
  };
  brush.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAxCAYAAABNuS5SAAAKFklEQVR42u2aCXCcdRnG997NJtlkk83VJE3apEma9CQlNAR60UqrGSqW4PQSO9iiTkE8BxWtlGMqYCtYrLRQtfVGMoJaGRFliijaViwiWgQpyCEdraI1QLXG52V+n/5nzd3ENnX/M8/sJvvt933/533e81ufL7MyK7NOzuXPUDD0FQCZlVn/+xUUQhkXHny8M2TxGsq48MBjXdAhL9/7YN26dd5nI5aVRrvEc0GFEBNKhbDjwsHh3qP/FJK1EdYIedOFlFAOgREhPlICifZDYoBjTna3LYe4xcI4oSpNcf6RvHjuAJRoVszD0qFBGmgMChipZGFxbqzQkJWVZUSOF7JRX3S4LtLTeyMtkkqljMBkPzHRs2aYY5PcZH/qLY1EIo18byQ6hBytIr3WCAXcV4tQHYvFxg3w3N6+Bh3OQolEoqCoqCinlw16JzTFJSE6PYuZKqvztbC2ex7bzGxhKu+rerjJrEEq+r9ieElJSXFDQ0Mh9zYzOzu7FBUWcO4Q9xbD6HYvhXhGLccVD5ZAPyfMqaioyOrBUgEv8FZXV8caGxtz8vLykhCWTnZIKmsKhUJnEYeKcKk2YYERH41G7UYnck1/WvAPOxsdLJm2+bEY0Ay0RNeqkytXQkoBZM4U5oOaoYSUkBGRtvnesrBZK4e4F6ypqSkuLy+v4KI99ZQxkfc6vZ4jNAl1wkbhG8LrhfNBCdkxmhYacvj/GOce+3K9MHHbDHUmicOufREELRIWch/DljzMsglutr+VIJO5KjGrVfZAnpF8mnCd8G5hrnC60Cl8T/iw8C1hKd9P9eDCMcgo5HwBx8BB/g7xeRPkrBbeJ3xTeAxjvRGVV3NcshfPG1JX4tVDQae47GuVOknCi23xHr5nyrxe2C1sFlYJ7xe+Jlwm7BRulItP0ms957RzTMK1ws41jMS8eDxehopaOCYfxc3AIHcIX+K6nxW+ImyVF1i8PQ8DTuwtdC1atCja3NwcHkq5EuXmo85G+jq+yMm28V4q/zcIPxV+K9zPxnbgTi0ocybu6wX66fx/vfAB4T1gHt8xI1wlXMF5zEXnQKC56ruEjwhvEa4WrrXvK/Yt5Pt5I1UveeVKyKmT+lpG2gQ2npMmez8ZzFT3e+HXwj7hKXNf6rFZbDpJUjESLdFsFX4mfFv4Fd/7qPBm4UPCJ4RNwncwym4UfYVUtiAcDk/T+3NRmylwWzAY7BCBCwYYogZPnrJoRNm2IDc3tw4FVKXFm95UmGLzkTTFpog524WnhQPCQeGvwiPCCuFCYmk5GbEJt3tOeF54HPVeLLyXxHOv8BPhYaFLeFU4gsI7OWeZk3g+hpJNvVMGIIqhdRvy+biVISouq2TBqWxoIL1wgBhU5AR1SzJvFR4UnhX+Bl4RfsFGP0npUkTymIQ7fh8Cf4l6F0LgXkj6o3O+buGfwj+ElzGQETaNeJqPhxiahckYq8KJ9V6mP+4pTIATjsGCA8lCQVy9VbhB2CM8itu9IBxlkx6O4nbmmpcSi0KUExa3Psfn23DZC4lhlhRuIWs/R1Y9BrpR4WHcfiOq34bLl5DJm1B7BANPGO4+2OJfDcVwX+RZkL5d+DRqeRJ360IJx1CFp4w/8/lhVGXxay1xKp8asQ31rSbgz2az1aBBWCZsgKTfEFe7uM4xYus9KHWXcBv3eolwJe67hJLIN6yubMVpW1tbbllZWVxtzjRquvQe9981IG3RZHUQttH7hB8IP0cdLwp/YnNHcdsjEP1xsEruO56i2Fy3UWXMskAgYAH/EjOiCD6NDc/XZ4v12RqSy3WQ9rJD3jPClwkZz2Aoy8JnUEjPcwYWfgfHvcIW84h308mABQP4Xp02OY44M4tSZSfx7UXIewU3NpXuxw0vJzauYDP1XM8y8Ttx67fhylYrdlAMW1x7h/BF3NWI+4PwFwjbSha26/xQuBmib6HDqeI+m4m5wzrj9A/xO+O5qbm4yizcbDOKfAjVWeC/WzAFLSeI+4hN9WzQ65EvED7D8Tt4vwE33O64rIfD1JW3k6xeQoX3UN6chyG8In4tcbHuRAyKw2ktVIIM2U5XcA7t2FKy5vWQeBexbbrTpvmZiJwN6e3EwKspW/ajqBuAKfKQk8m7KIce5bgnMNQDkLWPUmkj511DSVV5HJOd417FzrDAK7RjZLMZiURigmLVFCYs5tI2PFhpcUj/n6z6sp72LwJKiU2rUdp62rA7IX4XytpJ3Weh4XfE1/0kk/uoFX8kbCHudZLld5E8vJIs2+mbT8iznaR60DHMBt0EE1DySVlSsOBvyrL6zkZG5qI2T/QSBYTHMYAlq2tw1+0MFO4kVj5GSbSbgvkA8fQQr1uIdfdD5mZ1GhZbP0XfuwlPmOp0SNkYbkQV2JdlEsq69VJS+rTER+NtZVC+TX+NRFq1XGeiHXbGUHMg6lk2/DiZ+mHU8wTueoTXLtS3F5e9l2PNZW9lyrOB5LGSmJokzMQ6OjqCA3wsMXLLhqrWoZgKe3lyZ5YtLiwsLLfMLhJL0ibW3rKa7oMQ+Ajq6gKHcMeHeP8qZcpRMvyt1J97SRabcNP1ZGsbKhSb6lF+5GR6shUnlqTSyPM7LZxV/PUqjOfTH6cvqx+XyN3aCfBPUWh3UZIcxC2/jgu/BJ7Eve/G1R/EXS9gaLCc0dgySqIm7jV4MhEYdAaN4R4eRHkBusJp3GNp56iSOscyYN0DaUch8Ai13X6yrg0PvotCO8nme0geKymBaulc1qO+NbxOOpHZtrcHR+nT6+wePvcnk8k8qv6iNBdyH4/OoGR5gXbv75D4NIX3NoruLSjtKmLlbTwCKER1NmV+QIqfS13aai0izUHsRKksAQE5g0w4fuehj9f+xb25Ym1tbcIhuw2COmkBn2cAcQAFbsclV1BTns49JZio3EQWPkgCySJpFIu8aor0UfeLigDTlUTa/8eimhRGuUiKOZPYtYNabh9EGik3Mkk+A9I8JTWoAiik/LEpzY8tY4uwWc4AJMjxQd8oXRHU8JqbW32orNyAiubZo0WR5wX9KyHrLpLD52nrxhFHa1CVV5w3081cRu/7BYichpEqfafA7/sCzhT7tVkhLZvhTeB8Gv1r6U+ty/gqtWHQCSNTcPOl9NmXM1S4hgRjBjjL1MdUJ8cx3uhe3d3dfh5Meb8qyKWsuJRidwtN/h20XEtxvTwya7tKncU8ACqmXVwLict5fy6TnFhra2uW7xT8dWk2BHptVBOx8GLKjo3g7bhrBQq1sdVsCvEkhLZIac1y/zmUSO0oO8fX/0P2Ub3cwaWpZSITnLnOpDlBWTIfMleJqFb10jXCBJUlMyORSIP14LhqNef6v/05bpZTdHulUyXKsufDNdRxZ4vIhSKwhQFG5vfLfcwZsx2X92Jhje8/P8OI+TK/oO+zeA84WTzkvI/6RuB3y6f68qf11xnyMiuzMms4178AwArmZmkkdGcAAAAASUVORK5CYII=';
  canvas.addEventListener('mousedown', handleMouseDown, false);
  canvas.addEventListener('touchstart', handleMouseDown, false);
  canvas.addEventListener('mousemove', handleMouseMove, false);
  canvas.addEventListener('touchmove', handleMouseMove, false);
  canvas.addEventListener('mouseup', handleMouseUp, false);
  canvas.addEventListener('touchend', handleMouseUp, false);
  function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }
  function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  }

  // Only test every `stride` pixel. `stride`x faster,
  // but might lead to inaccuracy
  function getFilledInPixels(stride) {
    if (!stride || stride < 1) {
      stride = 1;
    }
    let pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
      pdata = pixels.data,
      l = pdata.length,
      total = l / stride,
      count = 0;

    // Iterate over all pixels
    for (var i = count = 0; i < l; i += stride) {
      if (parseInt(pdata[i]) === 0) {
        count++;
      }
    }
    return Math.round(count / total * 100);
  }
  function getMouse(e, canvas) {
    let offsetX = 0,
      offsetY = 0,
      mx,
      my;
    if (canvas.offsetParent !== undefined) {
      do {
        offsetX += canvas.offsetLeft;
        offsetY += canvas.offsetTop;
      } while (canvas = canvas.offsetParent);
    }
    mx = (e.pageX || e.touches[0].clientX) - offsetX;
    my = (e.pageY || e.touches[0].clientY) - offsetY;
    return {
      x: mx,
      y: my
    };
  }
  function handlePercentage(filledInPixels) {
    filledInPixels = filledInPixels || 0;
    console.log(filledInPixels + '%');
    if (filledInPixels > 40) {
      canvas.parentNode.removeChild(canvas);
      //$('.cntext').addClass('cntxt_visible');
      $('.body').addClass('result');
      $('.scratch_legen').addClass('hide');
      const pageWidth = $(window).width();
      if (pageWidth > 1024) {
        setTimeout(function () {
          $('.fin-heading-title').addClass('hide');
          setTimeout(function () {
            $('.fin-body').addClass('active');
          }, 1000);
        }, 2000);
      } else {
        setTimeout(function () {
          $('.fin-heading-title').addClass('hide');
          $('.fin-body').addClass('active');
        }, 1000);
      }
      $('#confetti_btn')[0].click();
      // $("#header_window_frame").attr("src", `${window.location.origin}/appointment?company=${readCookie("URL_COMPANY")}&user=${readCookie("URL_USER")}&video=false`);
      // $(".schedule-btn-header").css("display", "block");
    }
  }

  function handleMouseDown(e) {
    isDrawing = true;
    lastPoint = getMouse(e, canvas);
  }
  function handleMouseMove(e) {
    if (!isDrawing) {
      return;
    }
    e.preventDefault();
    let currentPoint = getMouse(e, canvas),
      dist = distanceBetween(lastPoint, currentPoint),
      angle = angleBetween(lastPoint, currentPoint),
      x,
      y;
    for (let i = 0; i < dist; i++) {
      x = lastPoint.x + Math.sin(angle) * i - 25;
      y = lastPoint.y + Math.cos(angle) * i - 25;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.drawImage(brush, x, y);
    }
    lastPoint = currentPoint;
    handlePercentage(getFilledInPixels(32));
  }
  function handleMouseUp(e) {
    isDrawing = false;
  }
})();

/***/ }),

/***/ 9827:
/***/ ((module) => {

const isFinPath = () => window.location.hostname.toLowerCase().includes("finpath") || window.location.hostname.toLowerCase().includes("localhost");
module.exports = {
  isFinPath
};

/***/ }),

/***/ 5509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Uchen;\n  src: url(https://discoverfin.sfo3.digitaloceanspaces.com/1gc6el9ifp9gfuchenregularttf.ttf)\n    format(truetype);\n  font-weight: 400;\n  font-style: normal;\n  font-display: auto;\n}\n@font-face {\n  font-family: Trenda;\n  src: url(https://uploads-ssl.webflow.com/629e3357919ae1682f65b07c/62a64de45e8f63a8c8bad2ab_trenda_regular.otf)\n    format(opentype);\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n}\n.d-flex {\n  display: flex;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.circle__x {\n  border-radius: 50%;\n  display: flex;\n  font-family: \"Uchen\";\n  width: 45px;\n  justify-content: center;\n  align-items: center;\n  height: 45px;\n  position: relative;\n  z-index: 1;\n}\n\n.strip__x {\n  height: 140%;\n  width: 10px;\n  z-index: 2;\n  transform: rotate(300deg);\n  position: absolute;\n}\n\n.circle__x span {\n  margin-bottom: 0;\n  font-size: 21px;\n  z-index: 3;\n}\n\n.big__name {\n  font-size: 24px;\n  font-family: \"Trenda\", sans-serif;\n}\n\n.space-x-4 > * + * {\n  margin-left: 1.25rem;\n}\n\na[id=\"logo-container\"] {\n  text-decoration: none !important;\n}\n\n@media screen and (max-width: 850px) {\n  .big__name {\n    font-size: 14px;\n  }\n  .sm-flex-col {\n    flex-direction: column;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#profile-video iframe {\n  width: 100% !important;\n  height: 500px !important;\n}\n\n@media screen and (max-width: 850px) {\n  #profile-video iframe {\n    height: 250px !important;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video-container,\n.video-overlay {\n  border-radius: 50%;\n  object-fit: cover;\n  width: 250px;\n  height: 250px;\n}\n.video-container {\n  border: 10px solid rgba(110, 89, 174, 0.5);\n}\n.rounded {\n  border-radius: 50%;\n}\n.bg-white {\n  background-color: white;\n}\n\n.text-black {\n  color: black;\n}\n.video-container::-webkit-media-controls-panel {\n  display: none !important;\n  opacity: 1 !important;\n}\n\nvideo::-webkit-media-controls {\n    display:none !important;\n}\n\n.video-controls-icons {\n  padding: 3px;\n  border-radius: 8px;\n  width: 30px;\n  height: 30px;\n}\n\n.pointer-cursor {\n  cursor: pointer;\n}\n.index100 {\n  z-index: 100;\n}\n\n#video_messages {\n  padding: 1rem 0 0.5rem;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.position-absolute {\n  position: absolute;\n}\n\n.justify-content-between {\n  justify-content: space-between;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.align-items-center {\n  align-items: center;\n}\n.flex-column {\n  flex-direction: column;\n}\n.video-description {\n  margin: 24px 0;\n  color: #fff;\n  font-size: 24px;\n}\n.text-center {\n  text-align: center;\n}\n.w-30px {\n  width: 30px;\n}\n.h-30px {\n  height: 30px;\n}\n.rotate-0 {\n  transform: rotate(0);\n}\n.m-0 {\n  margin: 0;\n}\n@media screen and (max-width: 780px) {\n  .video-description {\n    font-size: 18px;\n  }\n  /* .video-container {\n    width: 355px;\n    height: auto;\n  } */\n  #video_messages {\n    padding: 1rem 0;\n    padding-bottom: 3rem;\n  }\n}\n\n.green-cta {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 40%;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #2ad76f;\n  opacity: 1;\n  outline-color: #555;\n  outline-offset: 0px;\n  color: white;\n  outline-style: none;\n  outline-width: 0px;\n  mix-blend-mode: normal;\n}\n\n.heading-29 {\n  font-size: 28px;\n  line-height: 140%;\n}\n\n.w-42px {\n  width: 42px;\n}\n\n.h-34px {\n  height: 34px;\n}\n.space-x-2 > * + * {\n  margin-left: 1rem;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n.mt-12 {\n  margin-top: 3rem !important;\n}\n\n.mx-center {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n\n@media screen and (max-width: 600px) {\n  .video-message {\n    display: flex;\n    justify-content: center;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 8081:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 6461:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5509);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5346)/* ["default"] */ .Z)
var update = add("7a4e5381", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 5682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8883);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5346)/* ["default"] */ .Z)
var update = add("57bf101d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 8455:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6592);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5346)/* ["default"] */ .Z)
var update = add("0518b8fe", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 5346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 4812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var compilerDom = __webpack_require__(5003);
var runtimeDom = __webpack_require__(9963);
var shared = __webpack_require__(3577);

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    for (var k in e) {
      n[k] = e[k];
    }
  }
  n.default = e;
  return Object.freeze(n);
}

var runtimeDom__namespace = /*#__PURE__*/_interopNamespaceDefault(runtimeDom);

// This entry is the "full-build" that includes both the runtime
const compileCache = Object.create(null);
function compileToFunction(template, options) {
    if (!shared.isString(template)) {
        if (template.nodeType) {
            template = template.innerHTML;
        }
        else {
            return shared.NOOP;
        }
    }
    const key = template;
    const cached = compileCache[key];
    if (cached) {
        return cached;
    }
    if (template[0] === '#') {
        const el = document.querySelector(template);
        // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's rendered
        // by the server, the template should not contain any user data.
        template = el ? el.innerHTML : ``;
    }
    const opts = shared.extend({
        hoistStatic: true,
        onError: undefined,
        onWarn: shared.NOOP
    }, options);
    if (!opts.isCustomElement && typeof customElements !== 'undefined') {
        opts.isCustomElement = tag => !!customElements.get(tag);
    }
    const { code } = compilerDom.compile(template, opts);
    // The wildcard import results in a huge object with every export
    // with keys that cannot be mangled, and can be quite heavy size-wise.
    // In the global build we know `Vue` is available globally so we can avoid
    // the wildcard object.
    const render = (new Function('Vue', code)(runtimeDom__namespace));
    render._rc = true;
    return (compileCache[key] = render);
}
runtimeDom.registerRuntimeCompiler(compileToFunction);

exports.compile = compileToFunction;
Object.keys(runtimeDom).forEach(function(k) {
  if (k !== 'default') exports[k] = runtimeDom[k];
});


/***/ }),

/***/ 6765:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(4812)
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/pages/apps/fin/index.js
var fin = __webpack_require__(3756);
var fin_default = /*#__PURE__*/__webpack_require__.n(fin);
// EXTERNAL MODULE: ./src/pages/apps/fin/route.pages.js
var route_pages = __webpack_require__(7800);
var route_pages_default = /*#__PURE__*/__webpack_require__.n(route_pages);
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8903);
;// CONCATENATED MODULE: ./src/pages/apps/fin/result.pages.js

function resultInit() {
  __webpack_require__(4359);
  (0,utils.initiateAdvisorLogo)(utils.cookies.get("REP_NAME"));
  $("#fin_number").html((0,utils.toDollar)(utils.cookies.get("FIN Number")));
  $(".user_name").each(function () {
    $(this).html(utils.cookies.get("Name"));
  });
}
// EXTERNAL MODULE: ./src/pages/apps/fin/questions.js
var questions = __webpack_require__(1067);
var questions_default = /*#__PURE__*/__webpack_require__.n(questions);
;// CONCATENATED MODULE: ./src/schema/constants.js
const alphabets = (/* unused pure expression or super */ null && (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]));
const colors = {
  blue: "#4417c7",
  darkBlue: "#3d15b2",
  green: "#2AD76F",
  white: "#FFFFFF",
  black: "#000000"
};
const buttonArrowImage = "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/5f01858ae08dc78b0b7926d9_Pointer.svg";
const BASE_QUESTIONS = [
// {
//   question: "Which best describes you in your financial journey?",
//   es: "¿Qué es lo que más te gusta en tu viaje financiero?",
//   answer: [],
//   type: "radio",
//   style: {
//     gridTemplateColumns: "repeat(2, 250px) !important",
//   },
//   options: [
//     {
//       label: "Need to know where to start",
//       value: "Need to know where to start",
//       es: "Necesito saber dónde empezar",
//       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4334b522c266f4260_Group%20294.svg",
//     },
//     {
//       label: "Need a more clear route",
//       value: "Need a more clear route",
//       es: "Necesito una ruta más clara",
//       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4cb718ec356a073b2_Group%20295.svg",
//     },
//     {
//       label: "Got off track. Need help",
//       value: "Got off track. Need help",
//       es: "Me desvié. Necesitas ayuda",
//       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4bec6bf77be327fa6_Group%20296.svg",
//     },
//     {
//       label: "Getting close to my destination",
//       value: "Getting close to my destination",
//       es: "Acercándome a mi destino",
//       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa46b0b64ddecfe609a_Group%20297.svg",
//     },
//   ],
// },
{
  question: "Who is with you on your financial journey?",
  es: "¿Quién está con vos en tu viaje financiero?",
  answer: [],
  type: "radio",
  style: {
    gridTemplateColumns: "repeat(2, 250px) !important"
  },
  options: [{
    label: "My spouse.  I am married",
    value: "My spouse.  I am married",
    es: "Mi cónyuge. Estoy casado",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa43d07080c413621d7_Group%20298.svg"
  }, {
    label: "My fiance.  I am engaged.",
    value: "My fiance.  I am engaged.",
    es: "Mi novio. Estoy comprometido",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa43d07080c413621d7_Group%20298.svg"
  },
  // {
  //   label: "Kids under 18 (or plan to)",
  //   value: "Kids under 18 (or plan to)",
  //   es: "Niños menores de 18 años (o planean hacerlo)",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa508009b48e2c5c553_Group%20299.svg",
  // },
  {
    label: "My domestic partner.  I am unmarried.",
    value: "My domestic partner.  I am unmarried.",
    es: "Mi pareja doméstica. Estoy soltero",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4734cdf3e21d7b805_Group%20300.svg"
  },
  // {
  //   label: "Actively saving for retirement",
  //   value: "Actively saving for retirement",
  //   es: "Ahorro activo para la jubilación",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ce5ba4b9e45399b4_Group%20301.svg",
  // },
  {
    label: "Just me.  I am solely responsible",
    value: "Just me.  I am solely responsible",
    es: "Sólo yo. Estoy solo responsable",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5f9b0b0373efe4cfe_Group%20302.svg"
  }
  // {
  //   label: "Self-Employed",
  //   value: "Self-Employed",
  //   es: "Trabajadores por cuenta propia",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5efe60d8386fb1bfc_Group%20303.svg",
  // },
  // {
  //   label: "None of these",
  //   value: "None of these",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
  //   es: "Ninguno de esos",
  // },
  ]
}, {
  question: "Now, a little about you and/or your partner.",
  es: "Ahora, un poco sobre ti y/o tu pareja.",
  answer: [],
  type: "checkbox",
  style: {
    gridTemplateColumns: "repeat(2, 250px) !important"
  },
  options: [
  // {
  //   label: "Married or have a domestic partner",
  //   value: "Married or have a domestic partner",
  //   es: "Casado o con pareja de hecho",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa43d07080c413621d7_Group%20298.svg",
  // },
  //
  // {
  //   label: "Buying / Own a home",
  //   es: "Comprar / Ser dueño de una casa",
  //   value: "Buying / Own a home",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4734cdf3e21d7b805_Group%20300.svg",
  // },
  {
    label: "Actively saving for retirement",
    value: "Actively saving for retirement",
    es: "Ahorro activo para la jubilación",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ce5ba4b9e45399b4_Group%20301.svg"
  }, {
    label: "Kids under 18 (or plan to)",
    value: "Kids under 18 (or plan to)",
    es: "Niños menores de 18 años (o planean hacerlo)",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa508009b48e2c5c553_Group%20299.svg"
  }, {
    label: "Employee",
    value: "Employee",
    es: "Empleado",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5f9b0b0373efe4cfe_Group%20302.svg"
  }, {
    label: "Self-Employed or Business Owner",
    value: "Self-Employed or Business Owner",
    es: "Propietario de negocio o empleado",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5efe60d8386fb1bfc_Group%20303.svg"
  }
  // {
  //   label: "None of these",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
  //   value: "None of these",
  //   es: "Ninguno de esos",
  // },
  ]
}, {
  question: "What are areas you want to evaluate or know more about?",
  es: "¿Qué áreas te gustaría evaluar o saber más sobre?",
  answer: [],
  type: "checkbox",
  style: {
    gridTemplateColumns: "repeat(4, 250px) !important"
  },
  options: [{
    label: "Roth IRA",
    hasCanadianVersion: true,
    replace: ["Roth IRA#TFSA"],
    es: "Roth IRA",
    value: "Roth IRA",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa507dd8c52fb18c7aa_Group%20304.svg"
  }, {
    label: "Budget / Saving More",
    value: "Budget / Saving More",
    es: "Presupuesto / Ahorro más",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ba9df5ead351661e_Group%20305.svg"
  }, {
    label: "Saving for College",
    value: "Saving for College",
    es: "Ahorro para la universidad",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5bb0d5e4d9f8f84d5_Group%20306.svg"
  }, {
    label: "401k/403b/IRA Investment Choices",
    value: "401k/403b/IRA Investment Choices",
    es: "Opciones de inversión 401k/403b/IRA",
    hasCanadianVersion: true,
    replace: ["401k/403b#RRSP", "IRA#TFSA"],
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ba9df5475851661f_Group%20307.svg"
  }, {
    label: "Will / Trust / Life Insurance",
    es: "Testamento / Confianza / Seguro de vida",
    value: "Will / Trust / Life Insurance",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa53d0708ba1c3621e0_Group%20308.svg"
  }, {
    label: "Eliminating Credit Card Debt",
    value: "Eliminating Credit Card Debt",
    es: "Eliminar la deuda de la tarjeta de crédito",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa569791dd57ee027f7_Group%20309.svg"
  }, {
    label: "Rolling Over Old 401k",
    es: "Rodando sobre la vieja 401k",
    value: "Rolling Over Old 401k",
    hasCanadianVersion: true,
    replace: ["401k#RRSP"],
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa54fe71c93b968bcce_Group%20310.svg"
  }, {
    label: "An Overall Plan For My Future",
    value: "An Overall Plan For My Future",
    es: "Un plan general para mi futuro",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa508009b8754c5c557_Group%20311.svg"
  }
  // {
  //   label: "None of these",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
  //   value: "None of these",
  //   es: "Ninguno de esos",
  // },
  ]
}, {
  question: "What interests you most?",
  es: "¿Qué te interesa más?",
  answer: [],
  type: "checkbox",
  style: {
    gridTemplateColumns: "repeat(2, 250px) !important"
  },
  options: [{
    label: "Part-time Projects",
    es: "Proyectos de parte de tiempo",
    value: "Part-time Projects",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621e20e5ea3b957635659c45_Group%20293.svg"
  }, {
    label: "Be My Own Boss",
    value: "Be My Own Boss",
    es: "Ser mi propio jefe",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5a7d8b4fce3ad4e28_Group%20315.svg"
  }, {
    label: "New Career More Upside",
    es: "Nueva carrera Más ventajas",
    value: "New Career More Upside",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa615e53c24f87d7dac_Group%20313.svg"
  }, {
    label: "I’m just open minded",
    value: "I’m just open minded",
    es: "solo soy de mente abierta",
    icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg"
  }
  // {
  //   label: "None of these",
  //   value: "None of these",
  //   es: "Ninguno de esos",
  //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
  // },
  ]
}];

const constants_questions = {
  BOTH: BASE_QUESTIONS,
  MANAGE_MONEY_BETTER: BASE_QUESTIONS,
  MAKE_MORE_MONEY: BASE_QUESTIONS
};
const getLastSlash = str => str.split("/").pop();

;// CONCATENATED MODULE: ./src/service/fin/routeQuestion.service.js
const Service = __webpack_require__(3912);
const saveAnswers = async (ANSWER, COMPANY_ID, PROSPECT_ID) => {
  const endpoint = `company/${COMPANY_ID}/prospects`;
  const route = new Service(endpoint);
  route.set({
    ...ANSWER
  });
  return await new Promise((resolve, reject) => {
    route.update(PROSPECT_ID).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

;// CONCATENATED MODULE: ./src/pages/apps/fin/routeQuestions.pages.js



function InitRouteQuestions() {
  const {
    createApp,
    h
  } = __webpack_require__(6765);
  const type = getLastSlash(window.location.pathname).replace(/-/g, "_").toUpperCase();
  const getCurrentLanguage = () => {
    return Weglot.getCurrentLang();
  };
  const isCanadian = utils.cookies.get("isCanadian");
  console.log("isCanadian", isCanadian);
  const redirectTo = `${window.location.pathname}/video`;
  if (!(0,utils.isMobile)()) {
    // make header sticky for this screen only
    document.querySelector(".header").style.position = "sticky";
  }
  (0,utils.initiateAdvisorLogo)(utils.cookies.get("REP_NAME"));
  createApp({
    data() {
      return {
        progress: 0,
        currentIndex: 0,
        questions: constants_questions[type]
      };
    },
    computed: {
      selectedAnswers() {
        return this.currentQuestion.answer && this.currentQuestion.answer.length;
      },
      isCheckbox() {
        return this.currentQuestion.type === "checkbox";
      },
      currentQuestion() {
        return this.questions[this.currentIndex];
      },
      buttonsList() {
        return [{
          class: "step_btn back w-inline-block",
          text: "Back",
          style: {
            zIndex: this.currentIndex === 0 ? -1 : 1,
            opacity: this.currentIndex === 0 ? 0 : 100
          },
          onClick: this.goToPreviousQuestion,
          children: [h("div", {
            class: "button_arrow back"
          }, this.buttonChild("back")), h("span", {
            style: {
              marginLeft: "10px",
              fontSize: "20px",
              fontWeight: "600"
            }
          }, getCurrentLanguage() !== "es" ? "Back" : "Atrás")]
        }, {
          class: "step_btn next w-inline-block",
          text: "Next",
          style: {
            zIndex: this.currentQuestion.answer ? 1 : -1
          },
          onClick: this.currentIndex === this.questions.length - 1 && this.selectedAnswers ? this.submitAnswers : this.selectedAnswers ? this.goToNextQuestion : null,
          children: [h("span", {
            style: {
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "600"
            }
          }, this.currentIndex === this.questions.length - 1 ? getCurrentLanguage() !== "es" ? "Submit" : "Enviar" : getCurrentLanguage() !== "es" ? "Next" : "Siguiente"), h("div", {
            class: {
              button_arrow: true
            }
          }, this.buttonChild(""))]
        }];
      }
    },
    watch: {
      currentIndex() {
        this.setProgress();
      }
    },
    render() {
      return h("div", {
        class: "slide"
      }, [this.progressBar(), this.questionsContainer(), this.bottomActions()]);
    },
    methods: {
      buttonChild(className) {
        return [h("img", {
          class: `image-4 ${className}`,
          src: buttonArrowImage
        }), h("div", {
          class: {
            button_active: true,
            active: className !== "back" && this.selectedAnswers
          }
        })];
      },
      progressBar() {
        return h("div", {
          class: "ques_prog_bar absolute w-vw",
          style: {
            width: "100vw",
            zIndex: 999,
            height: (0,utils.isMobile)() ? "6px" : "8px",
            top: (0,utils.isMobile)() ? "9.5%" : "9%",
            position: "fixed"
          }
        }, [h("div", {
          class: "inner_prog_bar",
          style: {
            width: `${this.progress}%`,
            backgroundColor: colors.green
          }
        })]);
      },
      // has element in the array
      has(array, element) {
        return array.indexOf(element) > -1;
      },
      questionItem(question) {
        question = this.changeToCanadianVersion(question);
        return h("div", {
          class: {
            "active-option": this.selectedAnswers && this.has(this.currentQuestion.answer, question.value),
            "ans check": true
          },
          style: {
            backgroundColor: this.selectedAnswers && this.has(this.currentQuestion.answer, question.value) ? colors.green : colors.white,
            color: this.selectedAnswers && this.has(this.currentQuestion.answer, question.value) ? colors.white : colors.blue,
            opacity: question.hidden ? 0 : 100,
            cursor: question.hidden ? "default" : "pointer",
            height: (0,utils.isMobile)() ? "auto" : "170px"
          },
          onClick: () => question.hidden ? null : this.selectOption(question)
        }, [h("img", {
          class: "ans_img",
          style: (0,utils.isMobile)() ? {
            width: "48px",
            height: "48px"
          } : {},
          src: question.icon
        }), h("div", {
          class: "text-block-22 text-center",
          style: !(0,utils.isMobile)() ? {
            fontSize: "18px",
            fontWeight: "bold"
          } : {
            fontWeight: "bold"
          }
        }, getCurrentLanguage() !== "es" ? this.changeToCanadianVersion(question).label : this.changeToCanadianVersion(question).es)]);
      },
      changeToCanadianVersion(question) {
        if (question.hasCanadianVersion && isCanadian && JSON.parse(isCanadian)) {
          const replaceWith = (string, replace, replaceWith) => {
            return string.replace(new RegExp(replace, "gi"), replaceWith);
          };
          const replace = question.replace.map(e => e.split("#"));
          const toReplace = ["label", "es", "value"];
          for (let i = 0; i < replace.length; i++) {
            toReplace.forEach(e => {
              question[e] = replaceWith(question[e], replace[i][0], replace[i][1]);
            });
          }
        }
        return question;
      },
      parseQuestionLabel(question, es = false) {
        let label = question.question;
        if (!label) return "";
        if (!label.includes("partner")) {
          return es ? question.es : label;
        }
        const lastAnswer = this.questions.find(e => e.question === "Who is with you on your financial journey?");
        const answerText = lastAnswer.answer[0];
        if (answerText.includes("Just me")) {
          label = "Now, a little about you";
          question.es = "Ahora, un poco sobre ti";
          return es ? question.es : label;
        }
        const hasSpouseOrFianceorDomesticPartner = answerText.includes("spouse") ? "spouse" : answerText.includes("fiance") ? "fiance" : answerText.includes("domestic partner") ? "domestic partner" : "";
        label = label.replace("partner", hasSpouseOrFianceorDomesticPartner);
        console.log("partner", hasSpouseOrFianceorDomesticPartner, label);
        return es ? this.toEs(label) : label;
      },
      toEs(label) {
        return label.replace("partner", "conyugue").replace("fiance", "novio").replace("domestic partner", "concubino").replace("spouse", "cónyuge");
      },
      questionsContainer() {
        const containerWidth = "1080px";
        const containerStyles = !(0,utils.isMobile)() ? {
          width: containerWidth,
          maxWidth: containerWidth
        } : {};
        return h("div", {
          class: "ques_container",
          style: containerStyles
        }, [h("div", {
          class: "ques_contain",
          style: {
            marginBottom: "20px"
          }
        }, [h("h1", {
          class: "question_text",
          style: {
            marginBottom: "10px"
          }
        }, this.parseQuestionLabel(this.currentQuestion, getCurrentLanguage() === "es")
        // getCurrentLanguage() === "en"
        //   ? this.currentQuestion.question
        //   : this.currentQuestion.es
        ), h("span", {
          style: !(0,utils.isMobile)() ? {
            fontSize: "16px"
          } : {}
        }, getCurrentLanguage() !== "es" ? this.isCheckbox ? "Select all that apply." : "Select One." : this.isCheckbox ? "Selecciona todas las que apliquen." : "Selecciona una.")]), h("div", {
          class: "ans_container",
          style: !(0,utils.isMobile)() ? {
            ...this.currentQuestion.style,
            gridTemplateRows: "170px"
          } : {}
        }, this.currentQuestion.options.filter(elem => (0,utils.isMobile)() ? !elem.hidden : true).map(question => this.questionItem(question)))]);
      },
      bottomActions() {
        return h("div", {
          class: {
            "bottom_container five": (0,utils.isMobile)(),
            bottom_progress_nav: !(0,utils.isMobile)()
          },
          style: {
            background: colors.darkBlue
          }
        }, [h("div", {
          class: "questions_buttons",
          style: (0,utils.isMobile)() ? {
            padding: "10px"
          } : {
            padding: "10px",
            width: "600px",
            maxWidth: "600px"
          }
        }, this.buttonsList.map(button => h("div", {
          class: button.class,
          style: button.style,
          onClick() {
            button.onClick();
          }
        }, button.children)))]);
      },
      goToNextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
        }
      },
      submitAnswers() {
        saveAnswers((0,utils.formatAnswers)(this.questions), utils.cookies.get("COMPANY_ID"), utils.cookies.get("PROSPECT_ID")).then(res => {
          window.location.href = `${redirectTo}`;
        }).catch(err => {
          alert("failed");
        });
      },
      goToPreviousQuestion() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      selectOption(item) {
        if (this.selectedAnswers && this.has(this.currentQuestion.answer, item.value)) {
          if (this.isCheckbox) {
            this.questions[this.currentIndex].answer = [...this.questions[this.currentIndex].answer].filter(ans => ans !== item.value);
          } else {
            this.currentQuestion.answer = null;
          }
        } else {
          if (this.isCheckbox) {
            this.questions[this.currentIndex].answer.push(item.value);
          } else {
            this.questions[this.currentIndex].answer = [item.value];
          }
        }
      },
      setProgress() {
        this.progress = this.questions.filter(question => question.answer !== null && question.answer !== "" && question.answer !== undefined && question.answer.length > 0).length / this.questions.length * 100;
      }
    }
  }).mount("#app");
}
// EXTERNAL MODULE: ./src/service/Service.js
var service_Service = __webpack_require__(3912);
var Service_default = /*#__PURE__*/__webpack_require__.n(service_Service);
;// CONCATENATED MODULE: ./src/pages/apps/fin/finalStep.js
//var height = ($(".video_placeholder").width() / 16) * 9;
//$(".video_placeholder").height(height);



class FinalStep extends utils.BasePage {
  constructor(_object) {
    super(_object);
  }
}
function initFinalStep() {
  let page = new FinalStep({
    URL_COMPANY: utils.cookies.get("URL_COMPANY") !== "undefined" ? utils.cookies.get("URL_COMPANY") : utils.cookies.get("COMPANY_URL"),
    URL_USER: utils.cookies.get("URL_USER") !== "undefined" ? utils.cookies.get("URL_USER") : utils.cookies.get("USER_URL"),
    IS_OLD_LINK: utils.cookies.get("isOldUrl") === "false" ? undefined : utils.cookies.get("isOldUrl"),
    PROSPECT_EMAIL: ""
  });
  page.APPOINTMENT_LINK = !(0,utils.isEmpty)(page.IS_OLD_LINK) ? `https://${window.location.host}/appointment?id=${page.URL_USER}` : `https://${window.location.host}/appointment?id=${page.URL_USER}`;
  (0,utils.initiateAdvisorLogo)(utils.cookies.get("REP_NAME"), !(0,utils.isMobile)() ? "#4417c7" : "#320ba7");
  const IS_CANADIAN = utils.cookies.get("isCanadian");
  if (IS_CANADIAN && JSON.parse(IS_CANADIAN)) {
    const replaceSpanEl = $("#replace-me");
    const text = replaceSpanEl.text();
    replaceSpanEl.text(text.replace(/Roth IRA/g, "TFSA"));
  }
  $("#logo-container").css("text-decoration", "none !important");
  // }

  // Reading name cookie
  const user_name = utils.cookies.get("Name");
  const rep_name = capitalize(utils.cookies.get("REP_NAME"));
  $(".user_name").each(function () {
    $(this).html("" + user_name);
  });
  $("#video-area").css("background-image", `url(${window.location.pathname.includes("make-more-money") ? "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/62447936cd9d3938d09c181d_more_than_buisness.png" : "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/62447935eafc80b0556a88bd_7_steps.png"})`);
  const getTrailerId = () => {
    return window.location.pathname.includes("make-more-money") ? "445443796" : "614514350";
  };
  const videoTitle = () => {
    return window.location.pathname.includes("make-more-money") ? "More than a Business" : "7 Steps To Create A Clear Financial Vision";
  };
  (0,utils.handleBrokerCheckLinkAndDisclosure)({
    brokerCheckLink: utils.cookies.get("brokerCheckLink"),
    companyDisclosure: utils.cookies.get("disclosureLink"),
    name: rep_name
  });
  $("#video-title").text(videoTitle());
  const setTrailerVideo = () => {
    $("#video").each(() => {
      $(this).attr("src", `https://player.vimeo.com/video/${getTrailerId()}`);
    });
  };
  $("#aptmt_link").attr("href", page.APPOINTMENT_LINK);
  function handlePublicFeatures() {
    const publicFeatures = !(0,utils.isEmpty)(utils.cookies.get("publicFeatures")) && JSON.parse(utils.cookies.get("publicFeatures"));
    if (publicFeatures) {
      const finPath = publicFeatures.finPath;
      if (!finPath) {
        const videoMessageEl = $("#video-messages");
        $("#video-messages").remove();
        $("#step-1").before(videoMessageEl);
        $("#step-1").remove();
      }
    }
  }
  if ((0,utils.isDevEnvironment)()) {
    console.log("isDevEnvironment");
    handlePublicFeatures();
  }
  setTrailerVideo();
  /**
   *
   *
   * @param {boolean} [isScrolling=true]
   * @param {*} scrollDirection
   * @param {*} targetElement
   */
  function scrollButtonHandlers(isScrolling = true, scrollDirection, targetElement) {
    if (isScrolling ? scrollDirection === "up" : window.scrollY > targetElement.offsetTop + targetElement.offsetHeight) {
      $(".hide-on-scroll").each(function () {
        $(this).css("display", "block");
      });
      $(".down-arrow").css("display", "none");
    } else {
      $(".hide-on-scroll").each(function () {
        $(this).css("display", "none");
      });
    }
    if (window.scrollY < targetElement.offsetTop + targetElement.offsetHeight) {
      $(".down-arrow").css("display", "grid");
    } else {
      $(".down-arrow").css("display", "none");
    }
  }
  let scroll_position = 0;
  let scroll_direction;

  // Setup isScrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener("scroll", function () {
    scroll_direction = document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
    scroll_position = document.body.getBoundingClientRect().top;
    const elementTarget = document.getElementById("header_area");
    scrollButtonHandlers(true, scroll_direction, elementTarget);
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      scrollButtonHandlers(false, scroll_direction, elementTarget);
    }, 66);
  }, false);
  [$("#rep-name"), $("#rep_name"), $(".rep_name"), $(".rep_name_cta")].forEach(function (el) {
    el.text(utils.cookies.get("FIRST_NAME"));
  });
  const userNameEls = document.querySelectorAll("#user-name");
  userNameEls.forEach(el => {
    el.innerHTML = capitalize(utils.cookies.get("Name"));
  });
  const rep_image = utils.cookies.get("PIC") || utils.cookies.get("REP_IMAGE");
  $("#rep-image").attr("src", rep_image);
  $("#rep-image").removeAttr("loading");
  $("#rep-image").replaceWith((0,utils.isMobile)() ? `<img id="rep-image" src="${rep_image}" alt="" class="image-45" />` : `<img id="rep-image" src="${rep_image}" alt="" class="image-44" />`);
  $(".rep-photo").css("background-image", "url('" + rep_image + "')");
  $("#appointment-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  $("#message-rep").each(function () {
    $(this).attr("href", `sms:${utils.cookies.get("PHONE")}`);
    $(this).attr("target", "_parent");
  });
  const getVideoType = () => {
    return window.location.pathname.includes("make-more-money") ? "businessOverview" : "financialHouse";
  };
  const getPathAnswers = async id => {
    const prospectService = new (Service_default())(`company/${utils.cookies.get("COMPANY_ID")}/prospects/`);
    prospectService.equals("_id", id);
    prospectService.equals("userId", utils.cookies.get("USER_ID"));
    return await new Promise((resolve, reject) => {
      prospectService.find().then(response => {
        if (response.count > 0) {
          resolve(response.data[0]);
        } else {
          reject(response);
        }
      }).catch(error => {
        reject(error);
      });
    });
  };
  const questionAndAnswersOfProspect = prospectAnswers => {
    return [prospectAnswers.ques_1, prospectAnswers.ques_2, prospectAnswers.ques_3, prospectAnswers.ques_4, prospectAnswers.ques_5].filter(answer => answer.toLowerCase().includes("what are areas you want to evaluate or know more about?") && answer !== "").map(currentItem => currentItem ? currentItem.split("*").splice(1, currentItem.split("*").length - 1) : []).reduce((a, b) => a.concat(b), []).map(currentItem => `<div class="${(0,utils.isMobile)() ? "div-block-84" : "div-block-65"}"><img
      class="pointer-image"
      src="https://uploads-ssl.webflow.com/5f2b119ee036c0684f3c3c36/620e98d16dc631d33da9dd03_Group%20272.svg"
      loading="lazy" alt=""><h2 class="${(0,utils.isMobile)() ? "ml-3-2 text-18 font-normal " : "font-normal ml-3"}">${currentItem}</h2></div>`);
  };
  const openFINPath = email => {
    window.open(`https://${finpath_base || "finpath.discoverfin.io"}/${page.URL_USER}/start?email=${email}`, "_blank");
  };
  const openVideoApp = email => {
    window.open(!(0,utils.isEmpty)(page.IS_OLD_LINK) ? `${(0,utils.getVideoBaseUrl)()}${getVideoType()}/?company=${page.IS_OLD_LINK}&user=${page.URL_USER}&fname=${utils.cookies.get("Name")}&email=${email}` : `${(0,utils.getVideoBaseUrl)()}${getVideoType()}/?id=${page.URL_USER}&fname=${utils.cookies.get("Name")}&email=${email}`, "_self");
  };
  async function populatePathOptions() {
    let prospectAnswers;
    try {
      prospectAnswers = await getPathAnswers(utils.cookies.get("PROSPECT_ID"));
    } catch (e) {
      console.log(e);
    }
    const FinNumberEls = document.querySelectorAll("#fin_number");
    FinNumberEls.forEach(el => {
      el.innerHTML = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }).format(prospectAnswers["fin_number"]);
    });

    // $("#video-area").click(() => {
    //   openVideoApp(prospectAnswers["email"]);
    // });

    $(".open-video").each(function () {
      $(this).click(() => {
        const videoEnded = utils.cookies.get("videoEnded");
        const video_message_available = utils.cookies.get("videomessageavailable");
        if (videoEnded && JSON.parse(videoEnded) || !JSON.parse(video_message_available)) {
          openFINPath(prospectAnswers["email"]);
        }
        // openVideoApp(prospectAnswers["email"]);
      });
    });

    // const isMakeMoreMoney =
    //   window.location.pathname.includes("make-more-money");

    // if (!isMakeMoreMoney) {
    //   $(".manage-both").css("display", "block");
    //   parent.html(questionAndAnswersOfProspect(prospectAnswers));
    // } else {
    //   $(".manage-both").css("display", "none");
    // }
    $(".manage-both").css("display", "none");
  }
  populatePathOptions();
  $("#watch-trailer").click(function () {
    new Vimeo.Player($("#video")).play();
    page.track("Clicked Watch FIN Trailer", {
      company: page.URL_COMPANY,
      type: "Fin Prospect",
      page: "FIN APP FINAL STEP",
      fieldTrainer: page.URL_USER
    });
  });
  $(".iframe-back").click(function () {
    $("#appointment-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  });
  $(".closer-last").click(function () {
    // $(".last-popup").removeClass("active");
    $("#appointment-iframe iframe .w-iframe iframe").attr("src", page.APPOINTMENT_LINK);
  });
}
// EXTERNAL MODULE: ./src/pages/apps/appointment/index.js
var appointment = __webpack_require__(8555);
var appointment_default = /*#__PURE__*/__webpack_require__.n(appointment);
// EXTERNAL MODULE: ./src/pages/apps/videomessages/index.js + 6 modules
var videomessages = __webpack_require__(239);
// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(5682);
;// CONCATENATED MODULE: ./src/main.js










if ((0,utils.isOnBoardingPage)()) {
  fin_default().init().then(r => {
    console.log(r);
  });
} else if ((0,utils.isRouteSelectedPage)()) {
  route_pages_default().init();
} else if ((0,utils.isResultPage)()) {
  resultInit();
} else if ((0,utils.isQuestionPage)()) {
  questions_default()();
} else if ((0,utils.isRouteQuestionPage)(false)) {
  InitRouteQuestions();
} else if ((0,utils.isRouteQuestionPage)(true)) {
  initFinalStep();
  (0,videomessages.init)();
} else if ((0,utils.isAppointmentPage)()) {
  appointment_default()().then(r => {
    console.log("");
  });
}
})();

/******/ })()
;