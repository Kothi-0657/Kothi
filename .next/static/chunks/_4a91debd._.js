(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/blog/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPost,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const blogContent = {
    "home-painting-renovation-guide": {
        title: "Transform Your Home: The Ultimate Guide to Painting & Renovation",
        content: "\n      <h3>Step 1: Plan Your Design</h3>\n      <p>Start with a clear theme — whether modern, classic, or luxury.</p>\n\n      <h3>Step 2: Choose Quality Paint</h3>\n      <p>Use washable, low-VOC paints for long-lasting and safe interiors.</p>\n\n      <h3>Step 3: Hire Professionals</h3>\n      <p>Expert painters and renovators ensure a flawless finish.</p>\n\n      <hr />\n      <p><strong>✨ Pro Tip:</strong> Always do a patch test for colors before applying them across your walls.</p>\n    "
    },
    "budget-friendly-home-makeovers": {
        title: "Top 5 Budget-Friendly Home Makeover Ideas",
        content: "\n      <ol>\n        <li>Repaint your walls with light, bright colors.</li>\n        <li>Upgrade lighting fixtures for instant luxury.</li>\n        <li>Add wall art or texture.</li>\n        <li>Declutter and rearrange furniture.</li>\n        <li>Add indoor plants for freshness.</li>\n      </ol>\n      <p>These simple steps make a big visual impact without heavy spending.</p>\n    "
    }
};
function BlogPost() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const post = blogContent[slug];
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center text-gray-500",
            children: "Blog not found."
        }, void 0, false, {
            fileName: "[project]/src/app/blog/[slug]/page.tsx",
            lineNumber: 42,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto py-20 px-6 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-[#FE904E] mb-6",
                children: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-lg",
                dangerouslySetInnerHTML: {
                    __html: post.content
                }
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[slug]/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(BlogPost, "DpOdpe+T7d3Ytb7f6neHj0L13w0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = BlogPost;
async function generateStaticParams() {
    return [
        {
            slug: "home-painting-renovation-guide"
        },
        {
            slug: "budget-friendly-home-makeovers"
        }
    ];
}
var _c;
__turbopack_context__.k.register(_c, "BlogPost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_4a91debd._.js.map