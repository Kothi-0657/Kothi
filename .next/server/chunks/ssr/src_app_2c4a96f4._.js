module.exports = [
"[project]/src/app/utility/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/app/component/ui/hover-border-gradient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverBorderGradient",
    ()=>HoverBorderGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utility/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HoverBorderGradient({ children, containerClassName, className, as: Tag = "button", duration = 1, clockwise = true, ...props }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("TOP");
    const rotateDirection = (currentDirection)=>{
        const directions = [
            "TOP",
            "LEFT",
            "BOTTOM",
            "RIGHT"
        ];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise ? (currentIndex - 1 + directions.length) % directions.length : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };
    const movingMap = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
    };
    const highlight = "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hovered) {
            const interval = setInterval(()=>{
                setDirection((prevState)=>rotateDirection(prevState));
            }, duration * 1000);
            return ()=>clearInterval(interval);
        }
    }, [
        hovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        onMouseEnter: (event)=>{
            setHovered(true);
        },
        onMouseLeave: ()=>setHovered(false),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500  items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit", containerClassName),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/component/ui/hover-border-gradient.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"),
                style: {
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                },
                initial: {
                    background: movingMap[direction]
                },
                animate: {
                    background: hovered ? [
                        movingMap[direction],
                        highlight
                    ] : movingMap[direction]
                },
                transition: {
                    ease: "linear",
                    duration: duration ?? 1
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/ui/hover-border-gradient.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/ui/hover-border-gradient.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/ui/hover-border-gradient.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/component/CityBand/cityband.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const cities = [
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Kolkata",
    "Patna"
];
function CityBand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full py-9 overflow-hidden perspective-[1200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex whitespace-nowrap",
            animate: {
                x: [
                    "0%",
                    "-100%"
                ]
            },
            transition: {
                repeat: Infinity,
                duration: 35,
                ease: "linear"
            },
            children: [
                ...cities,
                ...cities
            ].map((city, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: {
                        rotateY: 15,
                        scale: 1.05
                    },
                    className: "mx-6 px-9 py-3 bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200 rounded-4xl shadow-lg flex items-center gap-5 text-gray-800 font-semibold transition-transform",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                            className: "text-orange-500 text-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/CityBand/cityband.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        city
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/component/CityBand/cityband.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/component/CityBand/cityband.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/CityBand/cityband.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/component/Hero/hero1.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Form$2f$Cxform$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Form/Cxform.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ui$2f$hover$2d$border$2d$gradient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/ui/hover-border-gradient.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CityBand$2f$cityband$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/CityBand/cityband.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Hero1() {
    const [currentWordIndex, setCurrentWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const serviceKeywords = [
        "Maintenance",
        "Renovation",
        "Repairs",
        "Interiors",
        "Landscaping",
        "Plumbing",
        "Electrical"
    ];
    // ✅ Rotate words
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentWordIndex((prevIndex)=>(prevIndex + 1) % serviceKeywords.length);
        }, 4000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen overflow-hidden pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "absolute top-0 left-0 w-full h-full object-cover -z-10",
                src: "/herovideo.mp4",
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true
            }, void 0, false, {
                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full bg-black/10"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20 h-full"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CityBand$2f$cityband$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/component/Hero/hero1.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full bg-black/60"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "lg:w-2/3 text-center lg:text-left text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight",
                                children: [
                                    "Professional",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "textcolor2dark font-semibold",
                                        children: serviceKeywords[currentWordIndex]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Services for Your Property"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0",
                                children: "From routine maintenance to complete renovations, we help clients keep their residential and commercial properties in top condition. Trusted teams, transparent process, and guaranteed quality."
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-center lg:justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/service",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ui$2f$hover$2d$border$2d$gradient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverBorderGradient"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Explore Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/Hero/hero1.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 1,
                            x: 50
                        },
                        animate: {
                            opacity: 1,
                            x: 20
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "mt-15 mb-49 lg:mt-0 w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl p-6 text-black shadow-md border border-white/20 hover:bg-white/40 transition",
                        style: {
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Form$2f$Cxform$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/component/Hero/hero1.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Hero/hero1.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/Hero/hero1.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/Hero/hero1.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Hero1;
}),
"[project]/src/app/component/testomonial/Testomonial.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteMovingTestimonials",
    ()=>InfiniteMovingTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Marketing Director at Sunrise Textiles",
        message: "KothiIndia’s team is professional and responsive. Their work improved our online presence and delivered measurable results.",
        avatar: "/avatar1.png"
    },
    {
        name: "Neha Kapoor",
        role: "Operations Manager at BrightEdge Solutions",
        message: "The team understands our business needs perfectly. Their attention to detail and reliability make them stand out every time.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Rahul S",
        role: "Small Business Owner",
        message: "Working with KothiIndia is seamless and efficient. They provide high-quality service with minimal hassle and great results.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
    },
    {
        name: "Priya Sharma",
        role: "Startup Founder",
        message: "KothiIndia is proactive, creative, and easy to work with. Their solutions are practical, impactful, and delivered on time.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Amit Verma",
        role: "Product Manager",
        message: "The team’s professionalism and responsiveness made a real difference. They consistently exceed expectations in every project.",
        avatar: "/avatar2.png"
    },
    {
        name: "Sneha Reddy",
        role: "Operations Lead",
        message: "Reliable, efficient, and detail-oriented. KothiIndia provides high-quality results and truly understands our requirements.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
    }
];
const InfiniteMovingTestimonials = ({ interval = 4000 })=>{
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [chunkSize, setChunkSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateChunkSize = ()=>{
            const width = window.innerWidth;
            if (width < 640) setChunkSize(1);
            else if (width < 1024) setChunkSize(2);
            else setChunkSize(3);
        };
        updateChunkSize();
        window.addEventListener("resize", updateChunkSize);
        return ()=>window.removeEventListener("resize", updateChunkSize);
    }, []);
    const slides = [];
    for(let i = 0; i < testimonials.length; i += chunkSize){
        slides.push(testimonials.slice(i, i + chunkSize));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrentIndex((prev)=>(prev + 1) % slides.length);
        }, interval);
        return ()=>clearInterval(timer);
    }, [
        slides,
        interval
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex transition-transform duration-700 ease-in-out",
            style: {
                transform: `translateX(-${currentIndex * 100}%)`
            },
            children: slides.map((slide, slideIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-full flex gap-4",
                    children: slide.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-2xl  border-[2px] border-[#b04400] flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#331b0d] italic mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaQuoteLeft"], {
                                                className: "text-[#b04400]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            t.message,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaQuoteRight"], {
                                                className: "text-[#b04400]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[#b04400]",
                                        children: t.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#b04400]",
                                        children: t.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, idx, false, {
                            fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, slideIndex, false, {
                    fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/testomonial/Testomonial.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/component/Whychooseus/Whychooseus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const reasons = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRocket"], {
            className: "text-[#b04400] w-10 h-10"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
            lineNumber: 9,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Fast & Efficient",
        description: "We deliver results quickly without compromising on quality, helping your business grow faster."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUsers"], {
            className: "text-[#b04400] w-10 h-10"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
            lineNumber: 15,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Expert Team",
        description: "Our skilled professionals understand your needs and provide customized solutions every time."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShieldAlt"], {
            className: "text-[#b04400] w-10 h-10"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
            lineNumber: 21,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Trusted & Reliable",
        description: "We prioritize trust and transparency, ensuring your projects are handled with the utmost care."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"], {
            className: "text-[#b04400] w-10 h-10"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
            lineNumber: 27,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Proven Results",
        description: "Our clients consistently see improved performance and satisfaction from our services."
    }
];
function WhyChooseUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-gray-50 py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: "/building.png",
                        alt: "Background",
                        className: "w-full h-full object-cover",
                        initial: {
                            scale: 1.1
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                        className: "text-4xl md:text-5xl font-bold text-center text-white mb-16",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: "Why Choose Us"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10",
                        children: reasons.map((reason, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300",
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: idx * 0.2,
                                    duration: 0.6,
                                    ease: "easeOut"
                                },
                                whileHover: {
                                    scale: 1.05,
                                    y: -5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: reason.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl md:text-2xl font-semibold mb-3 text-gray-900",
                                        children: reason.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm md:text-base leading-relaxed",
                                        children: reason.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/Whychooseus/Whychooseus.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = WhyChooseUs;
}),
"[project]/src/app/About/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function About() {
    const blocks = [
        {
            img: "/Kothi4.png",
            title: "Our Foundation",
            description: "Established with the vision of redefining renovation in India, Kothi India started with small but impactful projects."
        },
        {
            img: "/kothi11.png",
            title: "Growth & Innovation",
            description: "Our growing team embraced modern design, modular solutions, and cutting-edge tools to deliver excellence."
        },
        {
            img: "/kothi.png",
            title: "The Future",
            description: "With a client-first mindset, our goal is to become the most trusted name in Indian home improvement."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 m-0 p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 space-y-20 text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-center space-y-6",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl font-extrabold text-orange-500",
                            children: "Our Story"
                        }, void 0, false, {
                            fileName: "[project]/src/app/About/About.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-2xl mx-auto text-lg leading-relaxed text-gray-300",
                            children: "Kothi India has grown from a small team of passionate builders to a trusted brand in home improvement, transforming spaces with design, trust, and innovation."
                        }, void 0, false, {
                            fileName: "[project]/src/app/About/About.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/About/About.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-16 items-center",
                    children: blocks.map((block, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "rounded-2xl shadow-2xl overflow-hidden",
                                    initial: {
                                        opacity: 0,
                                        x: idx % 2 === 0 ? -50 : 50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: idx * 0.2
                                    },
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: block.img,
                                        className: "w-full h-full object-cover",
                                        alt: block.title,
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/About/About.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/About/About.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "space-y-8",
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: idx * 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-orange-500",
                                            children: block.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/About/About.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300",
                                            children: block.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/About/About.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/About/About.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/app/About/About.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/About/About.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/About/About.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/About/About.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = About;
}),
"[project]/src/app/services/construction/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConstructionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Form$2f$Cxform$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Form/Cxform.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/** Data (Basic plan filled out; copy/adjust for others) */ const packages = [
    {
        name: "Basic Package",
        price: "₹ 1999",
        per: "per sqft",
        sections: [
            {
                title: "Design",
                items: [
                    "SCHEME DRAWING : ALL FLOORS (2D)",
                    "ELEVATION DESIGN : (3D)"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer : One Visit Per Day",
                    "Project Manager : Visit site Once in a Week",
                    "Android/IOS App : Access to APP for Site Status update."
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement Height : Upto 2 feet",
                    "Steel : Any ISI Brand",
                    "AAC : For Partition walls. 8-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
                    "Cement : Penna / Priya",
                    "M Sand : Blockwork & All Masonry Works",
                    "P Sand : Plastering Works",
                    "Concrete Grade : M20 (Manual Mix)",
                    "Ceiling Height : 10 Feet",
                    "Steel Reinforcement : As per Standard",
                    "Parapet Wall : 3 Feet Height | 4\" Thick (Only for Floor with Headroom)"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall Tiles : Upto 7' Height. Size 2'X1' Vitrified Tile. Upto ₹40/Sqft",
                    "Bath & CP Fittings : Cera | Upto ₹12000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer",
                    "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
                    "Overhead Tank : 1000 litres Sintex | 3 Layered | UV Protected | White Colour"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living, Dining, Bedrooms & Kitchen : 2'X2' | Vitrified Tiles Upto ₹45/Sqft. Anuj / Sparrow",
                    "Balcony & Utility : Size 1'X1' | Upto ₹35/Sqft",
                    "Staircase : Size 1'X1' Tile : Upto ₹35/sqft",
                    "Car Parking : 1'X1' Parking Tile | Upto ₹35/Sqft",
                    "Terrace Flooring : Screed Concreting with Waterproofing"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall Tile : Vitrified Tile (2'X1') | Upto ₹45/Sqft",
                    "Sink Faucet : Upto ₹900 / No",
                    "Kitchen Sink : Stainless Steel single bowl Upto ₹2800",
                    "Dining : Wall Mounted Wash Basin",
                    "Kitchen Granite Top : Upto ₹90/Sqft"
                ]
            },
            {
                title: "Door, Windows and Railing",
                items: [
                    "Main Door : Malaysian Teak Door & Teak Frame | 32mm Thickness | 7' Height",
                    "Room Doors : White Panel Door | Sal Wood Frame | 7'X3'",
                    "Bathroom Door : PVC Door | 7'X2.5'",
                    "Windows : Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
                    "Staircase Railing : MS Railing",
                    "Balcony Railing : MS Railing"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Inner Wall Putty : 2 coats of Wall Putty | Any ISI Brand",
                    "Wall Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
                    "Ceiling Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
                    "Exterior Paint : 1 coat of Primer | 2 Coats of Ace | Any ISI Brand"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires – Essar",
                    "Switches – Fybros",
                    "Bedroom : 2 Switch Box(8-Module). One at Entrance and one at Bed-side",
                    "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
                    "Living Room : Upto 4 Switch Box (8 Module)",
                    "Dining : 1 Switch (8-Module)",
                    "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
                    "Utility : 1 Switch Box (4-Module)",
                    "AC Points : 1 for Each Bedroom.",
                    "Entrance : 1 Switch Box (6-Module)",
                    "Balconies : 1 Switch Box (3-Module)"
                ]
            }
        ],
        exclusions: [
            "Compound Wall @ 425/Sqft & Gate",
            "Sump & Septic Tank @ 24/Litre",
            "Lift, Lift Pit and Shaft",
            "Electricity Connection",
            "Building Plan Approval",
            "Elevation Special Materials"
        ]
    },
    // For Standard / Premium / Ultra Luxury: currently reusing Basic sections.
    // Replace or customize sections array below for each plan as needed.
    {
        name: "Standard Package",
        price: "₹ 2199",
        per: "per sqft",
        sections: [
            {
                title: "Design",
                items: [
                    "2199 per sqft",
                    "SCHEME DRAWING : ALL FLOORS (2D)",
                    "ELEVATION DESIGN : (3D)",
                    "HALF LAYOUT : ALL FLOORS (3D)",
                    "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
                    "PLUMBING DRAWING : ALL FLOORS (2D)",
                    "WORKING DRAWING : ALL FLOORS (2D)",
                    "ELEVATION DESIGN : (3D)"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer : Dedicated Full-Time Site Engineer",
                    "Project Manager : Visit site Twice in a Week",
                    "Android/IOS App : Daily Photo Upload. Project Status Monitoring",
                    "Architect : Support Till Design Completion"
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement Height : Upto 3 feet",
                    "Steel : Arun TMT / GBR or Equivalent",
                    "Chamber Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
                    "Cement : Ramco / Dalmia",
                    "M Sand : Blockwork & All Masonry Works",
                    "P Sand : Plastering Works",
                    "Concrete Grade : M20 | RMC for Roof",
                    "Ceiling Height : 10 Feet",
                    "Steel Reinforcement : As per Standard",
                    "Parapet Wall : 3' Feet Height | 6\' Thick (Only for Floor with Headroom)"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall Tiles : Upto Ceiling (Full Height). Size 2'X2' Vitrified Tile. Upto ₹50/Sqft. 1 Colour for 2 Bathrooms",
                    "Bath & CP Fittings : Parryware | Upto ₹17000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer.",
                    "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
                    "Overhead Tank : 2000 litres Sintex | 3 Layered | UV Protected | White Colour"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living, Dining, Bedrooms & Kitchen : 4'X2' | Vitrified Tiles Upto ₹65/Sqft. 1 Model for Living, Dining and Kitchen. KAG / Sunheart or Equivalent",
                    "Balcony & Utility : Size 2'X2' | Upto 50/Sqft | Antiskid",
                    "Staircase : Full Body Tile : Upto ₹110/sqft",
                    "Car Parking : 1'X1' Heavy Duty Tile | Upto ₹50/Sqft",
                    "Terrace Flooring : Screed Concreting with Waterproofing"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall Tile : Vitrified Tile (2'X2') | Upto ₹55/Sqft",
                    "Sink Faucet : Upto ₹2000 / No",
                    "Kitchen Sink : Stainless Steel sink with Drain Upto ₹4000",
                    "Dining : Wall Mounted Wash Basin",
                    "Kitchen Granite Top : Upto ₹140/Sqft"
                ]
            },
            {
                title: "Door, Windows and Railing",
                items: [
                    "Main Door : Malaysian Teak Door & Teak Frame - Readymade | 35mm Thickness | 5\"X3\" Thick Frame | 7' Height 3.5 Feet Width | Upto 22000/nos | 1 Nos only.",
                    "Room Doors : Flush Door| Sal Wood Frame | 7'X3'",
                    "Bathroom Door : WPC Door & Frame | 7'X2.5'",
                    "Windows : UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
                    "Staircase Railing : SS 304 Grade Railing",
                    "Balcony Railing : SS 304 Grade Railing with 8mm Toughened Glass with Posts"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Inner Wall Putty : 2 coats of Wall Putty | Nippon",
                    "Wall Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
                    "Ceiling Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
                    "Exterior Paint : 1 coat of Primer | 2 Coats of Sumo Xtra | Nippon",
                    "Elevation Putty : 2 Coat of Putty for Front Elevation | Nippon Exterior Putty"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires – Orbit (FRLS)",
                    "Switches – Legrand",
                    "Bedroom : 3 Switch Box(8-Module)",
                    "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
                    "Living Room : Upto 4 Switch Box (8 Module)",
                    "Dining : 1 Switch (8-Module)",
                    "Pooja : 1 Switch (3-Module)",
                    "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
                    "Utility : 1 Switch Box (4-Module)",
                    "AC Points : 1 for Each Bedroom. 1 for Living Room",
                    "Entrance : 1 Switch Box (6-Module)",
                    "Balconies : 1 Switch Box (3-Module)"
                ]
            }
        ],
        exclusions: [
            "Compound Wall @ 425/Sqft & Gate",
            "Sump & Septic Tank @ 24/Litre",
            "Lift, Lift Pit and Shaft",
            "Electricity Connection"
        ]
    },
    {
        name: "Premium Package",
        price: "₹ 2499",
        per: "per sqft",
        sections: [
            {
                title: "Design",
                items: [
                    "SCHEME DRAWING : ALL FLOORS (2D)",
                    "ELEVATION DESIGN : (3D)",
                    "HALF LAYOUT : ALL FLOORS (3D)",
                    "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
                    "PLUMBING DRAWING : ALL FLOORS (2D)",
                    "WORKING DRAWING : ALL FLOORS (2D)",
                    "SOIL TEST REPORT",
                    "STRUCTURAL DRAWINGS",
                    "FURNITURE LAYOUT : ALL FLOORS (2D)",
                    "ELEVATION DETAIL DRAWING : (2D)"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer : One Visit Per Day",
                    "Project Manager : Visit site Once in a Week",
                    "Android/IOS App : Access to APP for Site Status update."
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement Height : Upto 2 feet",
                    "Steel : Any ISI Brand",
                    "AAC : For Partition walls. 8-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
                    "Cement : Penna / Priya",
                    "M Sand : Blockwork & All Masonry Works",
                    "P Sand : Plastering Works",
                    "Concrete Grade : M20 (Manual Mix)",
                    "Ceiling Height : 10 Feet",
                    "Steel Reinforcement : As per Standard",
                    "Parapet Wall : 3 Feet Height | 4\" Thick (Only for Floor with Headroom)"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall Tiles : Upto 7' Height. Size 2'X1' Vitrified Tile. Upto ₹40/Sqft",
                    "Bath & CP Fittings : Cera | Upto ₹12000 Per Bathroom | Floor Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer",
                    "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
                    "Overhead Tank : 1000 litres Sintex | 3 Layered | UV Protected | White Colour"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living, Dining, Bedrooms & Kitchen : 2'X2' | Vitrified Tiles Upto ₹45/Sqft. Anuj / Sparrow",
                    "Balcony & Utility : Size 1'X1' | Upto ₹35/Sqft",
                    "Staircase : Size 1'X1' Tile : Upto ₹35/sqft",
                    "Car Parking : 1'X1' Parking Tile | Upto ₹35/Sqft",
                    "Terrace Flooring : Screed Concreting with Waterproofing"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall Tile : Vitrified Tile (2'X1') | Upto ₹45/Sqft",
                    "Sink Faucet : Upto ₹900 / No",
                    "Kitchen Sink : Stainless Steel single bowl Upto ₹2800",
                    "Dining : Wall Mounted Wash Basin",
                    "Kitchen Granite Top : Upto ₹90/Sqft"
                ]
            },
            {
                title: "Door, Windows and Railing",
                items: [
                    "Main Door : Malaysian Teak Door & Teak Frame | 32mm Thickness | 7' Height",
                    "Room Doors : White Panel Door | Sal Wood Frame | 7'X3'",
                    "Bathroom Door : PVC Door | 7'X2.5'",
                    "Windows : Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
                    "Staircase Railing : MS Railing",
                    "Balcony Railing : MS Railing"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Inner Wall Putty : 2 coats of Wall Putty | Any ISI Brand",
                    "Wall Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
                    "Ceiling Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
                    "Exterior Paint : 1 coat of Primer | 2 Coats of Ace | Any ISI Brand"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires – Essar",
                    "Switches – Fybros",
                    "Bedroom : 2 Switch Box(8-Module). One at Entrance and one at Bed-side",
                    "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
                    "Living Room : Upto 4 Switch Box (8 Module)",
                    "Dining : 1 Switch (8-Module)",
                    "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
                    "Utility : 1 Switch Box (4-Module)",
                    "AC Points : 1 for Each Bedroom.",
                    "Entrance : 1 Switch Box (6-Module)",
                    "Balconies : 1 Switch Box (3-Module)"
                ]
            }
        ],
        exclusions: [
            "Compound Wall @ 425/Sqft & Gate"
        ]
    },
    {
        name: "Ultra Luxury",
        price: "₹ 2999",
        per: "per sqft",
        sections: [
            {
                title: "Design",
                items: [
                    "SCHEME DRAWING : ALL FLOORS (2D)",
                    "ELEVATION DESIGN : (3D)",
                    "HALF LAYOUT : ALL FLOORS (3D)",
                    "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
                    "PLUMBING DRAWING : ALL FLOORS (2D)",
                    "WORKING DRAWING : ALL FLOORS (2D)",
                    "SOIL TEST REPORT",
                    "STRUCTURAL DRAWINGS",
                    "FURNITURE LAYOUT : ALL FLOORS (2D)",
                    "ELEVATION DETAIL DRAWING : (2D)",
                    "SITE ASSESSMENT & SITE PLAN",
                    "INTERIOR VIEWS : ALL FLOORS (3D)",
                    "INTERIOR DETAILING : ALL ROOMS (2D)",
                    "INTERIOR 3D WALK-THROUGH",
                    "APPROVAL DRAWING",
                    "LANDSCAPING ARCHITECTURAL DESIGNS"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer : One Visit Per Day",
                    "Project Manager : Visit site Once in a Week",
                    "Android/IOS App : Access to APP for Site Status update."
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement Height : Upto 5 feet",
                    "Steel : TATA Steel",
                    "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
                    "Cement : Ramco / Dalmia / Coramandel",
                    "River Sand : Blockwork & All Masonry Works",
                    "River Sand : Plastering Works",
                    "Concrete Grade : M25 | RMC for Roof",
                    "Ceiling Height : 11 Feet (FFL to FFL)",
                    "Steel Reinforcement : 1.5 times Strength, all as per DEEJOS Structural Drawings and Detailing by DEEJOS Structural Engineer",
                    "Parapet Wall : 3.5 Feet Height | 6\" Thick (Or) Toughened Glass Railing if Required",
                    "RCC Lift Pit: Included (If Required)",
                    "RCC Concrete Slab for Base, Lift Pit & Shaft: Included (If Required)"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall Tiles : Upto Ceiling (Full Height). 4'X2' Vitrified Tile. Upto ₹120/Sqft",
                    "Bath & CP Fittings : Kohler | Upto ₹60000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slab, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
                    "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
                    "RCC Overhead Tank : Upto 6000 litres with Waterproofing.",
                    "Solar Heater Plumbing Lines : Included (If Required)"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living, Dining, Bedrooms & Kitchen : 6'X6' | Quarts Tiles Upto ₹200/Sqft",
                    "Balcony & Utility : Size 2'X2' | Upto 60/Sqft",
                    "Staircase : Marble Upto ₹350/sqft",
                    "Car Parking : Granite| Upto ₹120/Sqft",
                    "Terrace Flooring : 2'X2' Exterior Grade Vitrified Tile. (Any Grade) | with Waterproofing"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall Tile : Vitrified Designer Tile (4'X2') | Upto ₹125/Sqft",
                    "Sink Faucet : Floor Mounter Pull-Out | Upto ₹8000 / No",
                    "Kitchen Sink : Multifunction Sink Upto ₹15000",
                    "Dining : Premium Designer Collection Wash Basin with Marble Counter and Designer Tap.",
                    "Kitchen Top : Quarts Stone Upto ₹350/Sqft"
                ]
            },
            {
                title: "Door, Windows and Railing",
                items: [
                    "Main Door : Designer Wood Door of Height upto 8Feet X 5Feet (or) Security Steel Door of Size (8'X4.5') Pure Stainless Steel with Digital Lock.",
                    "Room Doors : Flush Door with Laminate | Ghana Wood Frame | 8'X3.5'",
                    "Water Proof Flush Door with Designer Laminates | 8'X3'",
                    "Windows : Openable Type | UPVC Coloured | No Restriction on Size and Quantity | Toughened Glass",
                    "Staircase Railing : Toughened Glass with SS or Wood Railing or Aluminium",
                    "Balcony Railing : 10mm Full Toughened Glass with Aluminium Railing."
                ]
            },
            {
                title: "Painting",
                items: [
                    "Inner Wall Putty : 2 coats of Wall Putty | Any ISI Brand",
                    "Wall Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
                    "Ceiling Painting : 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
                    "Exterior Paint : 1 coat of Primer | 2 Coats of Ace | Any ISI Brand"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires – Finolex / Havells (FRLS)",
                    "Switches – Touch Switches with Glass Plates.",
                    "No Restriction on Number of Points. Required power points will be provided for Lifts, DG, Curtain Motors, Swimming Pool, Ro Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems.",
                    "Electricity Panel Board - Upto 2 Service Connection with RLCB Exterior Grade"
                ]
            }
        ],
        exclusions: [
            "Compound Wall @ 425/Sqtft & Gate",
            "Sump & Septic Tank @ 24/Litre",
            "Lift",
            "Electricity Connection",
            "Building Plan Approval",
            "Elevation Special Materials"
        ]
    }
];
function ConstructionPage() {
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleSection = (pkgIndex, secIndex)=>{
        const key = `${pkgIndex}-${secIndex}`;
        setOpenSections((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    };
    const isSectionOpen = (pkgIndex, secIndex)=>!!openSections[`${pkgIndex}-${secIndex}`];
    const whyFeatures = [
        "Custom home design and planning",
        "High-quality materials and finishes",
        "End-to-end project management",
        "On-time delivery assurance",
        "Vastu-compliant layouts"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden m-0 p-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#0b1e3d] via-[#0c2a5a] to-[#122d4a]"
            }, void 0, false, {
                fileName: "[project]/src/app/services/construction/page.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/patterns/geometry.svg')] opacity-10"
            }, void 0, false, {
                fileName: "[project]/src/app/services/construction/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-orange-500 text-center py-16 px-4 bg-gradient-to-br from-[#0b1e3d] to-[#122d4a] shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHardHat"], {
                                className: "mx-auto text-6xl mb-6 drop-shadow-lg animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-extrabold tracking-wide drop-shadow-md",
                                children: "Home Construction Services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-white text-lg font-light max-w-2xl mx-auto opacity-90",
                                children: [
                                    "Build your dream home with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "quality"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 40
                                    }, this),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "transparency"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this),
                                    ", and",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "trust"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/construction/page.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-6 py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-center text-white/50 mb-12",
                                children: "Why Choose Our Services?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                                children: whyFeatures.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: i * 0.12
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 flex items-start gap-4 hover:scale-105 transition-transform border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#0b1e3d] text-white p-3 rounded-full shadow-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium",
                                                children: f
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, f, true, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-center text-orange-500 mb-12",
                                children: "Home Construction Packages"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 552,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-orange-500",
                                children: packages.map((pkg, pkgIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.95
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: pkgIndex * 0.15
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl hover:scale-105 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#0b1e3d] text-white text-center py-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold uppercase text-orange-500",
                                                        children: pkg.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-extrabold mt-2",
                                                        children: pkg.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium ",
                                                        children: pkg.per
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-white/20",
                                                children: [
                                                    pkg.sections.map((section, secIndex)=>{
                                                        const open = isSectionOpen(pkgIndex, secIndex);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>toggleSection(pkgIndex, secIndex),
                                                                    className: "w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/10 text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: section.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 582,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMinus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 583,
                                                                                columnNumber: 41
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 583,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 583,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                                    initial: false,
                                                                    children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        initial: {
                                                                            opacity: 0,
                                                                            height: 0
                                                                        },
                                                                        animate: {
                                                                            opacity: 1,
                                                                            height: "auto"
                                                                        },
                                                                        exit: {
                                                                            opacity: 0,
                                                                            height: 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.3
                                                                        },
                                                                        className: "px-6 py-3 text-sm text-orange-500 bg-white/5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-disc pl-5 space-y-1",
                                                                            children: section.items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: it
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                    lineNumber: 598,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, `${pkgIndex}-${secIndex}-panel`, false, {
                                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                                        lineNumber: 588,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 586,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, secIndex, true, {
                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 23
                                                        }, this);
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "flex justify-between items-center cursor-pointer text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "What’s Not Included"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-white group-open:hidden",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 614,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-white hidden group-open:block",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMinus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 617,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "mt-3 pl-5 list-disc text-sm text-white/80 space-y-1",
                                                                    children: pkg.exclusions.map((exc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: exc
                                                                        }, i, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 622,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, pkg.name, true, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    onClick: ()=>setShowForm(true),
                                    className: "px-8 py-4 rounded-full bg-gradient-to-r from-[#0b1e3d] to-[#122d4a] text-white font-semibold shadow-xl hover:shadow-2xl transition",
                                    children: "Book Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 633,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/construction/page.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9
                            },
                            className: "bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute top-3 right-3 text-gray-500 hover:text-gray-800",
                                    onClick: ()=>setShowForm(false),
                                    children: "✖"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-6 text-[#0b1e3d] text-center",
                                    children: "Book Construction Service"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Form$2f$Cxform$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/construction/page.tsx",
                            lineNumber: 648,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/construction/page.tsx",
                        lineNumber: 647,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/construction/page.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/construction/page.tsx",
        lineNumber: 508,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/component/ConstructionSection/ConstructionSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConstructionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Update the import path below to the correct location of ConstructionPage
// Update the import path below to the correct location of ConstructionPage
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$construction$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/construction/page.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function ConstructionSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "construction",
        className: "py-0 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$construction$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/component/ConstructionSection/ConstructionSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/ConstructionSection/ConstructionSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_2c4a96f4._.js.map