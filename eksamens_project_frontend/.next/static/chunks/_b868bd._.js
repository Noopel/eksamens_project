(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_b868bd._.js", {

"[project]/src/hooks/queries/useSpacecraftQuery.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSpacecraftQuery": (()=>useSpacecraftQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useSpacecraftQuery = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "spacecraftQuery"
        ],
        staleTime: 1000 * 60 * 1,
        queryFn: {
            "useSpacecraftQuery.useQuery": async ()=>{
                const response = await fetch("http://localhost:4444/spacecraft");
                return await response.json();
            }
        }["useSpacecraftQuery.useQuery"]
    });
};
_s(useSpacecraftQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Container.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Container = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ...props,
        className: `mx-auto w-full xl:max-w-[100rem] px-6 xl:px-0 ${props.className}`,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/components/Container.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Container;
const __TURBOPACK__default__export__ = Container;
var _c;
__turbopack_refresh__.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/WhyUsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Error.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$queries$2f$useSpacecraftQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/queries/useSpacecraftQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const WhyUsSection = ()=>{
    _s();
    const { data, isError, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$queries$2f$useSpacecraftQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpacecraftQuery"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "flex justify-between mt-40 mb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "w-[47%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/om-os.jpg",
                    width: 1000,
                    height: 500,
                    alt: "Billede fra rummet for Om Os"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyUsSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WhyUsSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[45%] flex flex-col gap-10 my-auto",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/WhyUsSection.tsx",
                        lineNumber: 20,
                        columnNumber: 23
                    }, this),
                    isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/WhyUsSection.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "text-6xl font-bold",
                                text: "Hvorfor vælge os"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WhyUsSection.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-y-3 justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "w-full text-lightseagreen uppercase",
                                        text: data.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyUsSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2 h-1 bg-lightseagreen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyUsSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2 h-[0.175rem] mt-auto bg-neutral-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyUsSection.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WhyUsSection.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(data.content)
                            }, void 0, false, {
                                fileName: "[project]/src/components/WhyUsSection.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WhyUsSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhyUsSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(WhyUsSection, "OEXqYfirstlRhPUuH65Ms2TjKn0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$queries$2f$useSpacecraftQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpacecraftQuery"]
    ];
});
_c = WhyUsSection;
const __TURBOPACK__default__export__ = WhyUsSection;
var _c;
__turbopack_refresh__.register(_c, "WhyUsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(home)/rumfaergen/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_require__("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[{"hostname":"localhost","port":"4444","protocol":"http"}]}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/domelementtype/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */ var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */ exports.Root = ElementType.Root;
/** Type for Text */ exports.Text = ElementType.Text;
/** Type for <? ... ?> */ exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */ exports.Comment = ElementType.Comment;
/** Type for <script> tags */ exports.Script = ElementType.Script;
/** Type for <style> tags */ exports.Style = ElementType.Style;
/** Type for Any tag */ exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */ exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */ exports.Doctype = ElementType.Doctype;
}}),
"[project]/node_modules/domhandler/lib/node.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __turbopack_require__("[project]/node_modules/domelementtype/lib/index.js [app-client] (ecmascript)");
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ var Node = function() {
    function Node() {
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.parent;
        },
        set: function(parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.prev;
        },
        set: function(prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.next;
        },
        set: function(next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ Node.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) {
            recursive = false;
        }
        return cloneNode(this, recursive);
    };
    return Node;
}();
exports.Node = Node;
/**
 * A node that contains some data.
 */ var DataNode = function(_super) {
    __extends(DataNode, _super);
    /**
     * @param data The content of the data node
     */ function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.data;
        },
        set: function(data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node);
exports.DataNode = DataNode;
/**
 * Text within the document.
 */ var Text = function(_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function() {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode);
exports.Text = Text;
/**
 * Comments within the document.
 */ var Comment = function(_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function() {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode);
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */ var ProcessingInstruction = function(_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function() {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode);
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */ var NodeWithChildren = function(_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */ get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */ get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.children;
        },
        set: function(children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node);
exports.NodeWithChildren = NodeWithChildren;
var CDATA = function(_super) {
    __extends(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function() {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren);
exports.CDATA = CDATA;
/**
 * The root node of the document.
 */ var Document = function(_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function() {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren);
exports.Document = Document;
/**
 * An element within the DOM.
 */ var Element = function(_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ function Element(name, attribs, children, type) {
        if (children === void 0) {
            children = [];
        }
        if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function() {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */ get: function() {
            return this.name;
        },
        set: function(name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
                var _a, _b;
                return {
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren);
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */ function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */ function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */ function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */ function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */ function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ function cloneNode(node, recursive) {
    if (recursive === void 0) {
        recursive = false;
    }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    } else if (isComment(node)) {
        result = new Comment(node.data);
    } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
            return child.parent = clone_1;
        });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function(child) {
            return child.parent = clone_2;
        });
        result = clone_2;
    } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
            return child.parent = clone_3;
        });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function(child) {
        return cloneNode(child, true);
    });
    for(var i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}
}}),
"[project]/node_modules/domhandler/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DomHandler = void 0;
var domelementtype_1 = __turbopack_require__("[project]/node_modules/domelementtype/lib/index.js [app-client] (ecmascript)");
var node_js_1 = __turbopack_require__("[project]/node_modules/domhandler/lib/node.js [app-client] (ecmascript)");
__exportStar(__turbopack_require__("[project]/node_modules/domhandler/lib/node.js [app-client] (ecmascript)"), exports);
// Default options
var defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
var DomHandler = function() {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new node_js_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function(parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function() {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function(error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_js_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function(data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function() {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function() {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function() {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}();
exports.DomHandler = DomHandler;
exports.default = DomHandler;
}}),
"[project]/node_modules/html-dom-parser/lib/client/constants.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CARRIAGE_RETURN_PLACEHOLDER_REGEX = exports.CARRIAGE_RETURN_PLACEHOLDER = exports.CARRIAGE_RETURN_REGEX = exports.CARRIAGE_RETURN = exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES = void 0;
/**
 * SVG elements are case-sensitive.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element#svg_elements_a_to_z
 */ exports.CASE_SENSITIVE_TAG_NAMES = [
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'linearGradient',
    'radialGradient',
    'textPath'
];
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES.reduce(function(accumulator, tagName) {
    accumulator[tagName.toLowerCase()] = tagName;
    return accumulator;
}, {});
exports.CARRIAGE_RETURN = '\r';
exports.CARRIAGE_RETURN_REGEX = new RegExp(exports.CARRIAGE_RETURN, 'g');
exports.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(), "__");
exports.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(exports.CARRIAGE_RETURN_PLACEHOLDER, 'g'); //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/html-dom-parser/lib/client/utilities.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAttributes = formatAttributes;
exports.escapeSpecialCharacters = escapeSpecialCharacters;
exports.revertEscapedCharacters = revertEscapedCharacters;
exports.formatDOM = formatDOM;
var domhandler_1 = __turbopack_require__("[project]/node_modules/domhandler/lib/index.js [app-client] (ecmascript)");
var constants_1 = __turbopack_require__("[project]/node_modules/html-dom-parser/lib/client/constants.js [app-client] (ecmascript)");
/**
 * Gets case-sensitive tag name.
 *
 * @param tagName - Tag name in lowercase.
 * @returns - Case-sensitive tag name.
 */ function getCaseSensitiveTagName(tagName) {
    return constants_1.CASE_SENSITIVE_TAG_NAMES_MAP[tagName];
}
/**
 * Formats DOM attributes to a hash map.
 *
 * @param attributes - List of attributes.
 * @returns - Map of attribute name to value.
 */ function formatAttributes(attributes) {
    var map = {};
    var index = 0;
    var attributesLength = attributes.length;
    // `NamedNodeMap` is array-like
    for(; index < attributesLength; index++){
        var attribute = attributes[index];
        map[attribute.name] = attribute.value;
    }
    return map;
}
/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param tagName - Lowercase tag name.
 * @returns - Formatted tag name.
 */ function formatTagName(tagName) {
    tagName = tagName.toLowerCase();
    var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
    if (caseSensitiveTagName) {
        return caseSensitiveTagName;
    }
    return tagName;
}
/**
 * Escapes special characters before parsing.
 *
 * @param html - The HTML string.
 * @returns - HTML string with escaped special characters.
 */ function escapeSpecialCharacters(html) {
    return html.replace(constants_1.CARRIAGE_RETURN_REGEX, constants_1.CARRIAGE_RETURN_PLACEHOLDER);
}
/**
 * Reverts escaped special characters back to actual characters.
 *
 * @param text - The text with escaped characters.
 * @returns - Text with escaped characters reverted.
 */ function revertEscapedCharacters(text) {
    return text.replace(constants_1.CARRIAGE_RETURN_PLACEHOLDER_REGEX, constants_1.CARRIAGE_RETURN);
}
/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param nodes - DOM nodes.
 * @param parent - Parent node.
 * @param directive - Directive.
 * @returns - Nodes.
 */ function formatDOM(nodes, parent, directive) {
    if (parent === void 0) {
        parent = null;
    }
    var domNodes = [];
    var current;
    var index = 0;
    var nodesLength = nodes.length;
    for(; index < nodesLength; index++){
        var node = nodes[index];
        // set the node data given the type
        switch(node.nodeType){
            case 1:
                {
                    var tagName = formatTagName(node.nodeName);
                    // script, style, or tag
                    current = new domhandler_1.Element(tagName, formatAttributes(node.attributes));
                    current.children = formatDOM(// template children are on content
                    tagName === 'template' ? node.content.childNodes : node.childNodes, current);
                    break;
                }
            case 3:
                current = new domhandler_1.Text(revertEscapedCharacters(node.nodeValue));
                break;
            case 8:
                current = new domhandler_1.Comment(node.nodeValue);
                break;
            default:
                continue;
        }
        // set previous node next
        var prev = domNodes[index - 1] || null;
        if (prev) {
            prev.next = current;
        }
        // set properties for current node
        current.parent = parent;
        current.prev = prev;
        current.next = null;
        domNodes.push(current);
    }
    if (directive) {
        current = new domhandler_1.ProcessingInstruction(directive.substring(0, directive.indexOf(' ')).toLowerCase(), directive);
        current.next = domNodes[0] || null;
        current.parent = parent;
        domNodes.unshift(current);
        if (domNodes[1]) {
            domNodes[1].prev = domNodes[0];
        }
    }
    return domNodes;
} //# sourceMappingURL=utilities.js.map
}}),
"[project]/node_modules/html-dom-parser/lib/client/domparser.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = domparser;
var utilities_1 = __turbopack_require__("[project]/node_modules/html-dom-parser/lib/client/utilities.js [app-client] (ecmascript)");
// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
// match-all-characters in case of newlines (DOTALL)
var HEAD_TAG_REGEX = /<head[^]*>/i;
var BODY_TAG_REGEX = /<body[^]*>/i;
// falls back to `parseFromString` if `createHTMLDocument` cannot be used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromDocument = function(html, tagName) {
    /* istanbul ignore next */ throw new Error('This browser does not support `document.implementation.createHTMLDocument`');
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var parseFromString = function(html, tagName) {
    /* istanbul ignore next */ throw new Error('This browser does not support `DOMParser.prototype.parseFromString`');
};
var DOMParser = typeof window === 'object' && window.DOMParser;
/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */ if (typeof DOMParser === 'function') {
    var domParser_1 = new DOMParser();
    var mimeType_1 = 'text/html';
    /**
     * Creates an HTML document using `DOMParser.parseFromString`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document.
     */ parseFromString = function(html, tagName) {
        if (tagName) {
            /* istanbul ignore next */ html = "<".concat(tagName, ">").concat(html, "</").concat(tagName, ">");
        }
        return domParser_1.parseFromString(html, mimeType_1);
    };
    parseFromDocument = parseFromString;
}
/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */ if (typeof document === 'object' && document.implementation) {
    var htmlDocument_1 = document.implementation.createHTMLDocument();
    /**
     * Use HTML document created by `document.implementation.createHTMLDocument`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document
     */ parseFromDocument = function(html, tagName) {
        if (tagName) {
            var element = htmlDocument_1.documentElement.querySelector(tagName);
            if (element) {
                element.innerHTML = html;
            }
            return htmlDocument_1;
        }
        htmlDocument_1.documentElement.innerHTML = html;
        return htmlDocument_1;
    };
}
/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */ var template = typeof document === 'object' && document.createElement('template');
var parseFromTemplate;
if (template && template.content) {
    /**
     * Uses a template element (content fragment) to parse HTML.
     *
     * @param html - HTML string.
     * @returns - Nodes.
     */ parseFromTemplate = function(html) {
        template.innerHTML = html;
        return template.content.childNodes;
    };
}
/**
 * Parses HTML string to DOM nodes.
 *
 * @param html - HTML markup.
 * @returns - DOM nodes.
 */ function domparser(html) {
    var _a, _b;
    // Escape special characters before parsing
    html = (0, utilities_1.escapeSpecialCharacters)(html);
    var match = html.match(FIRST_TAG_REGEX);
    var firstTagName = match && match[1] ? match[1].toLowerCase() : '';
    switch(firstTagName){
        case HTML:
            {
                var doc = parseFromString(html);
                // the created document may come with filler head/body elements,
                // so make sure to remove them if they don't actually exist
                if (!HEAD_TAG_REGEX.test(html)) {
                    var element = doc.querySelector(HEAD);
                    (_a = element === null || element === void 0 ? void 0 : element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
                }
                if (!BODY_TAG_REGEX.test(html)) {
                    var element = doc.querySelector(BODY);
                    (_b = element === null || element === void 0 ? void 0 : element.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(element);
                }
                return doc.querySelectorAll(HTML);
            }
        case HEAD:
        case BODY:
            {
                var elements = parseFromDocument(html).querySelectorAll(firstTagName);
                // if there's a sibling element, then return both elements
                if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
                    return elements[0].parentNode.childNodes;
                }
                return elements;
            }
        // low-level tag or text
        default:
            {
                if (parseFromTemplate) {
                    return parseFromTemplate(html);
                }
                var element = parseFromDocument(html, BODY).querySelector(BODY);
                return element.childNodes;
            }
    }
} //# sourceMappingURL=domparser.js.map
}}),
"[project]/node_modules/html-dom-parser/lib/client/html-to-dom.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HTMLDOMParser;
var domparser_1 = __importDefault(__turbopack_require__("[project]/node_modules/html-dom-parser/lib/client/domparser.js [app-client] (ecmascript)"));
var utilities_1 = __turbopack_require__("[project]/node_modules/html-dom-parser/lib/client/utilities.js [app-client] (ecmascript)");
var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>
/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param html - HTML markup.
 * @returns - DOM elements.
 */ function HTMLDOMParser(html) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    // match directive
    var match = html.match(DIRECTIVE_REGEX);
    var directive = match ? match[1] : undefined;
    return (0, utilities_1.formatDOM)((0, domparser_1.default)(html), null, directive);
} //# sourceMappingURL=html-to-dom.js.map
}}),
"[project]/node_modules/react-property/lib/possibleStandardNamesOptimized.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;
// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;
exports.possibleStandardNames = {
    accept: 0,
    acceptCharset: 1,
    'accept-charset': 'acceptCharset',
    accessKey: 1,
    action: 0,
    allowFullScreen: 1,
    alt: 0,
    as: 0,
    async: 0,
    autoCapitalize: 1,
    autoComplete: 1,
    autoCorrect: 1,
    autoFocus: 1,
    autoPlay: 1,
    autoSave: 1,
    capture: 0,
    cellPadding: 1,
    cellSpacing: 1,
    challenge: 0,
    charSet: 1,
    checked: 0,
    children: 0,
    cite: 0,
    class: 'className',
    classID: 1,
    className: 1,
    cols: 0,
    colSpan: 1,
    content: 0,
    contentEditable: 1,
    contextMenu: 1,
    controls: 0,
    controlsList: 1,
    coords: 0,
    crossOrigin: 1,
    dangerouslySetInnerHTML: 1,
    data: 0,
    dateTime: 1,
    default: 0,
    defaultChecked: 1,
    defaultValue: 1,
    defer: 0,
    dir: 0,
    disabled: 0,
    disablePictureInPicture: 1,
    disableRemotePlayback: 1,
    download: 0,
    draggable: 0,
    encType: 1,
    enterKeyHint: 1,
    for: 'htmlFor',
    form: 0,
    formMethod: 1,
    formAction: 1,
    formEncType: 1,
    formNoValidate: 1,
    formTarget: 1,
    frameBorder: 1,
    headers: 0,
    height: 0,
    hidden: 0,
    high: 0,
    href: 0,
    hrefLang: 1,
    htmlFor: 1,
    httpEquiv: 1,
    'http-equiv': 'httpEquiv',
    icon: 0,
    id: 0,
    innerHTML: 1,
    inputMode: 1,
    integrity: 0,
    is: 0,
    itemID: 1,
    itemProp: 1,
    itemRef: 1,
    itemScope: 1,
    itemType: 1,
    keyParams: 1,
    keyType: 1,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: 0,
    low: 0,
    manifest: 0,
    marginWidth: 1,
    marginHeight: 1,
    max: 0,
    maxLength: 1,
    media: 0,
    mediaGroup: 1,
    method: 0,
    min: 0,
    minLength: 1,
    multiple: 0,
    muted: 0,
    name: 0,
    noModule: 1,
    nonce: 0,
    noValidate: 1,
    open: 0,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: 1,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 1,
    readOnly: 1,
    referrerPolicy: 1,
    rel: 0,
    required: 0,
    reversed: 0,
    role: 0,
    rows: 0,
    rowSpan: 1,
    sandbox: 0,
    scope: 0,
    scoped: 0,
    scrolling: 0,
    seamless: 0,
    selected: 0,
    shape: 0,
    size: 0,
    sizes: 0,
    span: 0,
    spellCheck: 1,
    src: 0,
    srcDoc: 1,
    srcLang: 1,
    srcSet: 1,
    start: 0,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 1,
    target: 0,
    title: 0,
    type: 0,
    useMap: 1,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,
    about: 0,
    accentHeight: 1,
    'accent-height': 'accentHeight',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 1,
    'alignment-baseline': 'alignmentBaseline',
    allowReorder: 1,
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 1,
    'arabic-form': 'arabicForm',
    ascent: 0,
    attributeName: 1,
    attributeType: 1,
    autoReverse: 1,
    azimuth: 0,
    baseFrequency: 1,
    baselineShift: 1,
    'baseline-shift': 'baselineShift',
    baseProfile: 1,
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 1,
    capHeight: 1,
    'cap-height': 'capHeight',
    clip: 0,
    clipPath: 1,
    'clip-path': 'clipPath',
    clipPathUnits: 1,
    clipRule: 1,
    'clip-rule': 'clipRule',
    color: 0,
    colorInterpolation: 1,
    'color-interpolation': 'colorInterpolation',
    colorInterpolationFilters: 1,
    'color-interpolation-filters': 'colorInterpolationFilters',
    colorProfile: 1,
    'color-profile': 'colorProfile',
    colorRendering: 1,
    'color-rendering': 'colorRendering',
    contentScriptType: 1,
    contentStyleType: 1,
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    datatype: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 1,
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 1,
    'dominant-baseline': 'dominantBaseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 1,
    elevation: 0,
    enableBackground: 1,
    'enable-background': 'enableBackground',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 1,
    fill: 0,
    fillOpacity: 1,
    'fill-opacity': 'fillOpacity',
    fillRule: 1,
    'fill-rule': 'fillRule',
    filter: 0,
    filterRes: 1,
    filterUnits: 1,
    floodOpacity: 1,
    'flood-opacity': 'floodOpacity',
    floodColor: 1,
    'flood-color': 'floodColor',
    focusable: 0,
    fontFamily: 1,
    'font-family': 'fontFamily',
    fontSize: 1,
    'font-size': 'fontSize',
    fontSizeAdjust: 1,
    'font-size-adjust': 'fontSizeAdjust',
    fontStretch: 1,
    'font-stretch': 'fontStretch',
    fontStyle: 1,
    'font-style': 'fontStyle',
    fontVariant: 1,
    'font-variant': 'fontVariant',
    fontWeight: 1,
    'font-weight': 'fontWeight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 1,
    'glyph-name': 'glyphName',
    glyphOrientationHorizontal: 1,
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    glyphOrientationVertical: 1,
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    glyphRef: 1,
    gradientTransform: 1,
    gradientUnits: 1,
    hanging: 0,
    horizAdvX: 1,
    'horiz-adv-x': 'horizAdvX',
    horizOriginX: 1,
    'horiz-origin-x': 'horizOriginX',
    ideographic: 0,
    imageRendering: 1,
    'image-rendering': 'imageRendering',
    in2: 0,
    in: 0,
    inlist: 0,
    intercept: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k: 0,
    kernelMatrix: 1,
    kernelUnitLength: 1,
    kerning: 0,
    keyPoints: 1,
    keySplines: 1,
    keyTimes: 1,
    lengthAdjust: 1,
    letterSpacing: 1,
    'letter-spacing': 'letterSpacing',
    lightingColor: 1,
    'lighting-color': 'lightingColor',
    limitingConeAngle: 1,
    local: 0,
    markerEnd: 1,
    'marker-end': 'markerEnd',
    markerHeight: 1,
    markerMid: 1,
    'marker-mid': 'markerMid',
    markerStart: 1,
    'marker-start': 'markerStart',
    markerUnits: 1,
    markerWidth: 1,
    mask: 0,
    maskContentUnits: 1,
    maskUnits: 1,
    mathematical: 0,
    mode: 0,
    numOctaves: 1,
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 1,
    'overline-position': 'overlinePosition',
    overlineThickness: 1,
    'overline-thickness': 'overlineThickness',
    paintOrder: 1,
    'paint-order': 'paintOrder',
    panose1: 0,
    'panose-1': 'panose1',
    pathLength: 1,
    patternContentUnits: 1,
    patternTransform: 1,
    patternUnits: 1,
    pointerEvents: 1,
    'pointer-events': 'pointerEvents',
    points: 0,
    pointsAtX: 1,
    pointsAtY: 1,
    pointsAtZ: 1,
    prefix: 0,
    preserveAlpha: 1,
    preserveAspectRatio: 1,
    primitiveUnits: 1,
    property: 0,
    r: 0,
    radius: 0,
    refX: 1,
    refY: 1,
    renderingIntent: 1,
    'rendering-intent': 'renderingIntent',
    repeatCount: 1,
    repeatDur: 1,
    requiredExtensions: 1,
    requiredFeatures: 1,
    resource: 0,
    restart: 0,
    result: 0,
    results: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    security: 0,
    seed: 0,
    shapeRendering: 1,
    'shape-rendering': 'shapeRendering',
    slope: 0,
    spacing: 0,
    specularConstant: 1,
    specularExponent: 1,
    speed: 0,
    spreadMethod: 1,
    startOffset: 1,
    stdDeviation: 1,
    stemh: 0,
    stemv: 0,
    stitchTiles: 1,
    stopColor: 1,
    'stop-color': 'stopColor',
    stopOpacity: 1,
    'stop-opacity': 'stopOpacity',
    strikethroughPosition: 1,
    'strikethrough-position': 'strikethroughPosition',
    strikethroughThickness: 1,
    'strikethrough-thickness': 'strikethroughThickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 1,
    'stroke-dasharray': 'strokeDasharray',
    strokeDashoffset: 1,
    'stroke-dashoffset': 'strokeDashoffset',
    strokeLinecap: 1,
    'stroke-linecap': 'strokeLinecap',
    strokeLinejoin: 1,
    'stroke-linejoin': 'strokeLinejoin',
    strokeMiterlimit: 1,
    'stroke-miterlimit': 'strokeMiterlimit',
    strokeWidth: 1,
    'stroke-width': 'strokeWidth',
    strokeOpacity: 1,
    'stroke-opacity': 'strokeOpacity',
    suppressContentEditableWarning: 1,
    suppressHydrationWarning: 1,
    surfaceScale: 1,
    systemLanguage: 1,
    tableValues: 1,
    targetX: 1,
    targetY: 1,
    textAnchor: 1,
    'text-anchor': 'textAnchor',
    textDecoration: 1,
    'text-decoration': 'textDecoration',
    textLength: 1,
    textRendering: 1,
    'text-rendering': 'textRendering',
    to: 0,
    transform: 0,
    typeof: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 1,
    'underline-position': 'underlinePosition',
    underlineThickness: 1,
    'underline-thickness': 'underlineThickness',
    unicode: 0,
    unicodeBidi: 1,
    'unicode-bidi': 'unicodeBidi',
    unicodeRange: 1,
    'unicode-range': 'unicodeRange',
    unitsPerEm: 1,
    'units-per-em': 'unitsPerEm',
    unselectable: 0,
    vAlphabetic: 1,
    'v-alphabetic': 'vAlphabetic',
    values: 0,
    vectorEffect: 1,
    'vector-effect': 'vectorEffect',
    version: 0,
    vertAdvY: 1,
    'vert-adv-y': 'vertAdvY',
    vertOriginX: 1,
    'vert-origin-x': 'vertOriginX',
    vertOriginY: 1,
    'vert-origin-y': 'vertOriginY',
    vHanging: 1,
    'v-hanging': 'vHanging',
    vIdeographic: 1,
    'v-ideographic': 'vIdeographic',
    viewBox: 1,
    viewTarget: 1,
    visibility: 0,
    vMathematical: 1,
    'v-mathematical': 'vMathematical',
    vocab: 0,
    widths: 0,
    wordSpacing: 1,
    'word-spacing': 'wordSpacing',
    writingMode: 1,
    'writing-mode': 'writingMode',
    x1: 0,
    x2: 0,
    x: 0,
    xChannelSelector: 1,
    xHeight: 1,
    'x-height': 'xHeight',
    xlinkActuate: 1,
    'xlink:actuate': 'xlinkActuate',
    xlinkArcrole: 1,
    'xlink:arcrole': 'xlinkArcrole',
    xlinkHref: 1,
    'xlink:href': 'xlinkHref',
    xlinkRole: 1,
    'xlink:role': 'xlinkRole',
    xlinkShow: 1,
    'xlink:show': 'xlinkShow',
    xlinkTitle: 1,
    'xlink:title': 'xlinkTitle',
    xlinkType: 1,
    'xlink:type': 'xlinkType',
    xmlBase: 1,
    'xml:base': 'xmlBase',
    xmlLang: 1,
    'xml:lang': 'xmlLang',
    xmlns: 0,
    'xml:space': 'xmlSpace',
    xmlnsXlink: 1,
    'xmlns:xlink': 'xmlnsXlink',
    xmlSpace: 1,
    y1: 0,
    y2: 0,
    y: 0,
    yChannelSelector: 1,
    z: 0,
    zoomAndPan: 1
};
}}),
"[project]/node_modules/react-property/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */ // A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
const RESERVED = 0;
// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
const STRING = 1;
// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
const BOOLEANISH_STRING = 2;
// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
const BOOLEAN = 3;
// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
const OVERLOADED_BOOLEAN = 4;
// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
const NUMERIC = 5;
// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
const POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
    return properties.hasOwnProperty(name) ? properties[name] : null;
}
function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
    this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
    this.attributeName = attributeName;
    this.attributeNamespace = attributeNamespace;
    this.mustUseProperty = mustUseProperty;
    this.propertyName = name;
    this.type = type;
    this.sanitizeURL = sanitizeURL;
    this.removeEmptyString = removeEmptyString;
}
// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
const properties = {};
// These props are reserved by React. They shouldn't be written to the DOM.
const reservedProps = [
    'children',
    'dangerouslySetInnerHTML',
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    'defaultValue',
    'defaultChecked',
    'innerHTML',
    'suppressContentEditableWarning',
    'suppressHydrationWarning',
    'style'
];
reservedProps.forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
});
// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[
    [
        'acceptCharset',
        'accept-charset'
    ],
    [
        'className',
        'class'
    ],
    [
        'htmlFor',
        'for'
    ],
    [
        'httpEquiv',
        'http-equiv'
    ]
].forEach(([name, attributeName])=>{
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
});
// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
[
    'contentEditable',
    'draggable',
    'spellCheck',
    'value'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
});
// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
});
// These are HTML boolean attributes.
[
    'allowFullScreen',
    'async',
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    'autoFocus',
    'autoPlay',
    'controls',
    'default',
    'defer',
    'disabled',
    'disablePictureInPicture',
    'disableRemotePlayback',
    'formNoValidate',
    'hidden',
    'loop',
    'noModule',
    'noValidate',
    'open',
    'playsInline',
    'readOnly',
    'required',
    'reversed',
    'scoped',
    'seamless',
    // Microdata
    'itemScope'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
});
// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
[
    'checked',
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    'multiple',
    'muted',
    'selected'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
});
// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
[
    'capture',
    'download'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
});
// These are HTML attributes that must be positive numbers.
[
    'cols',
    'rows',
    'size',
    'span'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
});
// These are HTML attributes that must be numbers.
[
    'rowSpan',
    'start'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
});
const CAMELIZE = /[\-\:]([a-z])/g;
const capitalize = (token)=>token[1].toUpperCase();
// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
[
    'accent-height',
    'alignment-baseline',
    'arabic-form',
    'baseline-shift',
    'cap-height',
    'clip-path',
    'clip-rule',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'dominant-baseline',
    'enable-background',
    'fill-opacity',
    'fill-rule',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'glyph-name',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'horiz-adv-x',
    'horiz-origin-x',
    'image-rendering',
    'letter-spacing',
    'lighting-color',
    'marker-end',
    'marker-mid',
    'marker-start',
    'overline-position',
    'overline-thickness',
    'paint-order',
    'panose-1',
    'pointer-events',
    'rendering-intent',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'strikethrough-position',
    'strikethrough-thickness',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'underline-position',
    'underline-thickness',
    'unicode-bidi',
    'unicode-range',
    'units-per-em',
    'v-alphabetic',
    'v-hanging',
    'v-ideographic',
    'v-mathematical',
    'vector-effect',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'word-spacing',
    'writing-mode',
    'xmlns:xlink',
    'x-height'
].forEach((attributeName)=>{
    const name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
});
// String SVG attributes with the xlink namespace.
[
    'xlink:actuate',
    'xlink:arcrole',
    'xlink:role',
    'xlink:show',
    'xlink:title',
    'xlink:type'
].forEach((attributeName)=>{
    const name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/1999/xlink', false, false);
});
// String SVG attributes with the xml namespace.
[
    'xml:base',
    'xml:lang',
    'xml:space'
].forEach((attributeName)=>{
    const name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/XML/1998/namespace', false, false);
});
// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
[
    'tabIndex',
    'crossOrigin'
].forEach((attributeName)=>{
    properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
});
// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
const xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, 'xlink:href', 'http://www.w3.org/1999/xlink', true, false);
[
    'src',
    'href',
    'action',
    'formAction'
].forEach((attributeName)=>{
    properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
});
// 
const { CAMELCASE, SAME, possibleStandardNames: possibleStandardNamesOptimized } = __turbopack_require__("[project]/node_modules/react-property/lib/possibleStandardNamesOptimized.js [app-client] (ecmascript)");
const ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
 *
 * @type {(attribute: string) => boolean}
 */ const isCustomAttribute = RegExp.prototype.test.bind(// eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
/**
 * @type {Record<string, string>}
 */ const possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce((accumulator, standardName)=>{
    const propName = possibleStandardNamesOptimized[standardName];
    if (propName === SAME) {
        accumulator[standardName] = standardName;
    } else if (propName === CAMELCASE) {
        accumulator[standardName.toLowerCase()] = standardName;
    } else {
        accumulator[standardName] = propName;
    }
    return accumulator;
}, {});
exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;
}}),
"[project]/node_modules/inline-style-parser/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;
// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */ module.exports = function(style, options) {
    if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!style) return [];
    options = options || {};
    /**
   * Positional.
   */ var lineno = 1;
    var column = 1;
    /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */ function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
    }
    /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */ function position() {
        var start = {
            line: lineno,
            column: column
        };
        return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */ function Position(start) {
        this.start = start;
        this.end = {
            line: lineno,
            column: column
        };
        this.source = options.source;
    }
    /**
   * Non-enumerable source string.
   */ Position.prototype.content = style;
    var errorsList = [];
    /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */ function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) {
            errorsList.push(err);
        } else {
            throw err;
        }
    }
    /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */ function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
    }
    /**
   * Parse whitespace.
   */ function whitespace() {
        match(WHITESPACE_REGEX);
    }
    /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */ function comments(rules) {
        var c;
        rules = rules || [];
        while(c = comment()){
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */ function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){
            ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
            type: TYPE_COMMENT,
            comment: str
        });
    }
    /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */ function declaration() {
        var pos = position();
        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");
        // val
        var val = match(VALUE_REGEX);
        var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        // ;
        match(SEMICOLON_REGEX);
        return ret;
    }
    /**
   * Parse declarations.
   *
   * @return {Object[]}
   */ function declarations() {
        var decls = [];
        comments(decls);
        // declarations
        var decl;
        while(decl = declaration()){
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        return decls;
    }
    whitespace();
    return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */ function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
}}),
"[project]/node_modules/style-to-object/cjs/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StyleToObject;
var inline_style_parser_1 = __importDefault(__turbopack_require__("[project]/node_modules/inline-style-parser/index.js [app-client] (ecmascript)"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */ function StyleToObject(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === 'function';
    declarations.forEach(function(declaration) {
        if (declaration.type !== 'declaration') {
            return;
        }
        var property = declaration.property, value = declaration.value;
        if (hasIterator) {
            iterator(property, value, declaration);
        } else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/style-to-js/cjs/utilities.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */ var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */ var capitalize = function(match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */ var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
};
/**
 * CamelCases a CSS property.
 */ var camelCase = function(property, options) {
    if (options === void 0) {
        options = {};
    }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase; //# sourceMappingURL=utilities.js.map
}}),
"[project]/node_modules/style-to-js/cjs/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var style_to_object_1 = __importDefault(__turbopack_require__("[project]/node_modules/style-to-object/cjs/index.js [app-client] (ecmascript)"));
var utilities_1 = __turbopack_require__("[project]/node_modules/style-to-js/cjs/utilities.js [app-client] (ecmascript)");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */ function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function(property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/html-react-parser/lib/utilities.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.returnFirstArg = exports.canTextBeChildOfNode = exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports.PRESERVE_CUSTOM_ATTRIBUTES = void 0;
exports.isCustomComponent = isCustomComponent;
exports.setStyleProp = setStyleProp;
var react_1 = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var style_to_js_1 = __importDefault(__turbopack_require__("[project]/node_modules/style-to-js/cjs/index.js [app-client] (ecmascript)"));
var RESERVED_SVG_MATHML_ELEMENTS = new Set([
    'annotation-xml',
    'color-profile',
    'font-face',
    'font-face-src',
    'font-face-uri',
    'font-face-format',
    'font-face-name',
    'missing-glyph'
]);
/**
 * Check if a tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param tagName - Tag name.
 * @param props - Props passed to the element.
 * @returns - Whether the tag is custom component.
 */ function isCustomComponent(tagName, props) {
    if (!tagName.includes('-')) {
        return Boolean(props && typeof props.is === 'string');
    }
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
        return false;
    }
    return true;
}
var styleOptions = {
    reactCompat: true
};
/**
 * Sets style prop.
 *
 * @param style - Inline style.
 * @param props - Props object.
 */ function setStyleProp(style, props) {
    if (typeof style !== 'string') {
        return;
    }
    if (!style.trim()) {
        props.style = {};
        return;
    }
    try {
        props.style = (0, style_to_js_1.default)(style, styleOptions);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        props.style = {};
    }
}
/**
 * @see https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
 */ exports.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split('.')[0]) >= 16;
/**
 * @see https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
 */ exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
    'tr',
    'tbody',
    'thead',
    'tfoot',
    'colgroup',
    'table',
    'head',
    'html',
    'frameset'
]);
/**
 * Checks if the given node can contain text nodes
 *
 * @param node - Element node.
 * @returns - Whether the node can contain text nodes.
 */ var canTextBeChildOfNode = function(node) {
    return !exports.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
};
exports.canTextBeChildOfNode = canTextBeChildOfNode;
/**
 * Returns the first argument as is.
 *
 * @param arg - The argument to be returned.
 * @returns - The input argument `arg`.
 */ var returnFirstArg = function(arg) {
    return arg;
};
exports.returnFirstArg = returnFirstArg; //# sourceMappingURL=utilities.js.map
}}),
"[project]/node_modules/html-react-parser/lib/attributes-to-props.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = attributesToProps;
var react_property_1 = __turbopack_require__("[project]/node_modules/react-property/lib/index.js [app-client] (ecmascript)");
var utilities_1 = __turbopack_require__("[project]/node_modules/html-react-parser/lib/utilities.js [app-client] (ecmascript)");
// https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
// https://developer.mozilla.org/docs/Web/HTML/Attributes
var UNCONTROLLED_COMPONENT_ATTRIBUTES = [
    'checked',
    'value'
];
var UNCONTROLLED_COMPONENT_NAMES = [
    'input',
    'select',
    'textarea'
];
var valueOnlyInputs = {
    reset: true,
    submit: true
};
/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param attributes - HTML/SVG DOM attributes.
 * @param nodeName - DOM node name.
 * @returns - React props.
 */ function attributesToProps(attributes, nodeName) {
    if (attributes === void 0) {
        attributes = {};
    }
    var props = {};
    var isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
    for(var attributeName in attributes){
        var attributeValue = attributes[attributeName];
        // ARIA (aria-*) or custom data (data-*) attribute
        if ((0, react_property_1.isCustomAttribute)(attributeName)) {
            props[attributeName] = attributeValue;
            continue;
        }
        // convert HTML/SVG attribute to React prop
        var attributeNameLowerCased = attributeName.toLowerCase();
        var propName = getPropName(attributeNameLowerCased);
        if (propName) {
            var propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
            // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
            if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) && UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) && !isInputValueOnly) {
                propName = getPropName('default' + attributeNameLowerCased);
            }
            props[propName] = attributeValue;
            switch(propertyInfo && propertyInfo.type){
                case react_property_1.BOOLEAN:
                    props[propName] = true;
                    break;
                case react_property_1.OVERLOADED_BOOLEAN:
                    if (attributeValue === '') {
                        props[propName] = true;
                    }
                    break;
            }
            continue;
        }
        // preserve custom attribute if React >=16
        if (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES) {
            props[attributeName] = attributeValue;
        }
    }
    // transform inline style to object
    (0, utilities_1.setStyleProp)(attributes.style, props);
    return props;
}
/**
 * Gets prop name from lowercased attribute name.
 *
 * @param attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */ function getPropName(attributeName) {
    return react_property_1.possibleStandardNames[attributeName];
} //# sourceMappingURL=attributes-to-props.js.map
}}),
"[project]/node_modules/html-react-parser/lib/dom-to-react.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = domToReact;
var react_1 = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var attributes_to_props_1 = __importDefault(__turbopack_require__("[project]/node_modules/html-react-parser/lib/attributes-to-props.js [app-client] (ecmascript)"));
var utilities_1 = __turbopack_require__("[project]/node_modules/html-react-parser/lib/utilities.js [app-client] (ecmascript)");
var React = {
    cloneElement: react_1.cloneElement,
    createElement: react_1.createElement,
    isValidElement: react_1.isValidElement
};
/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param nodes - DOM nodes.
 * @param options - Options.
 * @returns - String or JSX element(s).
 */ function domToReact(nodes, options) {
    if (options === void 0) {
        options = {};
    }
    var reactElements = [];
    var hasReplace = typeof options.replace === 'function';
    var transform = options.transform || utilities_1.returnFirstArg;
    var _a = options.library || React, cloneElement = _a.cloneElement, createElement = _a.createElement, isValidElement = _a.isValidElement;
    var nodesLength = nodes.length;
    for(var index = 0; index < nodesLength; index++){
        var node = nodes[index];
        // replace with custom React element (if present)
        if (hasReplace) {
            var replaceElement = options.replace(node, index);
            if (isValidElement(replaceElement)) {
                // set "key" prop for sibling elements
                // https://react.dev/learn/rendering-lists#rules-of-keys
                if (nodesLength > 1) {
                    replaceElement = cloneElement(replaceElement, {
                        key: replaceElement.key || index
                    });
                }
                reactElements.push(transform(replaceElement, node, index));
                continue;
            }
        }
        if (node.type === 'text') {
            var isWhitespace = !node.data.trim().length;
            // We have a whitespace node that can't be nested in its parent
            // so skip it
            if (isWhitespace && node.parent && !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
                continue;
            }
            // Trim is enabled and we have a whitespace node
            // so skip it
            if (options.trim && isWhitespace) {
                continue;
            }
            // We have a text node that's not whitespace and it can be nested
            // in its parent so add it to the results
            reactElements.push(transform(node.data, node, index));
            continue;
        }
        var element = node;
        var props = {};
        if (skipAttributesToProps(element)) {
            (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
            props = element.attribs;
        } else if (element.attribs) {
            props = (0, attributes_to_props_1.default)(element.attribs, element.name);
        }
        var children = void 0;
        switch(node.type){
            case 'script':
            case 'style':
                // prevent text in <script> or <style> from being escaped
                // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
                if (node.children[0]) {
                    props.dangerouslySetInnerHTML = {
                        __html: node.children[0].data
                    };
                }
                break;
            case 'tag':
                // setting textarea value in children is an antipattern in React
                // https://react.dev/reference/react-dom/components/textarea#caveats
                if (node.name === 'textarea' && node.children[0]) {
                    props.defaultValue = node.children[0].data;
                } else if (node.children && node.children.length) {
                    // continue recursion of creating React elements (if applicable)
                    children = domToReact(node.children, options);
                }
                break;
            // skip all other cases (e.g., comment)
            default:
                continue;
        }
        // set "key" prop for sibling elements
        // https://react.dev/learn/rendering-lists#rules-of-keys
        if (nodesLength > 1) {
            props.key = index;
        }
        reactElements.push(transform(createElement(node.name, props, children), node, index));
    }
    return reactElements.length === 1 ? reactElements[0] : reactElements;
}
/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param node - Element node.
 * @returns - Whether the node attributes should be converted to props.
 */ function skipAttributesToProps(node) {
    return utilities_1.PRESERVE_CUSTOM_ATTRIBUTES && node.type === 'tag' && (0, utilities_1.isCustomComponent)(node.name, node.attribs);
} //# sourceMappingURL=dom-to-react.js.map
}}),
"[project]/node_modules/html-react-parser/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
exports.default = HTMLReactParser;
var html_dom_parser_1 = __importDefault(__turbopack_require__("[project]/node_modules/html-dom-parser/lib/client/html-to-dom.js [app-client] (ecmascript)"));
exports.htmlToDOM = html_dom_parser_1.default;
var attributes_to_props_1 = __importDefault(__turbopack_require__("[project]/node_modules/html-react-parser/lib/attributes-to-props.js [app-client] (ecmascript)"));
exports.attributesToProps = attributes_to_props_1.default;
var dom_to_react_1 = __importDefault(__turbopack_require__("[project]/node_modules/html-react-parser/lib/dom-to-react.js [app-client] (ecmascript)"));
exports.domToReact = dom_to_react_1.default;
var domhandler_1 = __turbopack_require__("[project]/node_modules/domhandler/lib/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Comment", {
    enumerable: true,
    get: function() {
        return domhandler_1.Comment;
    }
});
Object.defineProperty(exports, "Element", {
    enumerable: true,
    get: function() {
        return domhandler_1.Element;
    }
});
Object.defineProperty(exports, "ProcessingInstruction", {
    enumerable: true,
    get: function() {
        return domhandler_1.ProcessingInstruction;
    }
});
Object.defineProperty(exports, "Text", {
    enumerable: true,
    get: function() {
        return domhandler_1.Text;
    }
});
var domParserOptions = {
    lowerCaseAttributeNames: false
};
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */ function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions), options);
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/html-react-parser/lib/index.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}}),
"[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/html-react-parser/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=_b868bd._.js.map