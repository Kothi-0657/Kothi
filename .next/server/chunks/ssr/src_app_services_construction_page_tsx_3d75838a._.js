module.exports = [
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
"use client";
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
        className: "relative min-h-screen overflow-hidden m-0 p-0 mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#0b1e3d] via-[#0c2a5a] to-[#122d4a]"
            }, void 0, false, {
                fileName: "[project]/src/app/services/construction/page.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/patterns/geometry.svg')] opacity-10"
            }, void 0, false, {
                fileName: "[project]/src/app/services/construction/page.tsx",
                lineNumber: 508,
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
                                lineNumber: 513,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-extrabold tracking-wide drop-shadow-md",
                                children: "Home Construction Services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-white text-lg font-light max-w-2xl mx-auto opacity-90",
                                children: [
                                    "Build your dream home with",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "quality"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    ",",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "transparency"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    ", and",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "trust"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/construction/page.tsx",
                        lineNumber: 512,
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
                                lineNumber: 527,
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
                                                    lineNumber: 542,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium",
                                                children: f
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, f, true, {
                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-center text-orange-500 mb-12",
                                children: "Home Construction Packages"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 550,
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
                                                        lineNumber: 565,
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
                                                lineNumber: 564,
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
                                                                                lineNumber: 584,
                                                                                columnNumber: 37
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 584,
                                                                                columnNumber: 61
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
                                                                                    lineNumber: 600,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 598,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, `${pkgIndex}-${secIndex}-panel`, false, {
                                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                                        lineNumber: 590,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 588,
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
                                                                            lineNumber: 614,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-white group-open:hidden",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 616,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 615,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-white hidden group-open:block",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMinus"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/construction/page.tsx",
                                                                                lineNumber: 619,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 618,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "mt-3 pl-5 list-disc text-sm text-white/80 space-y-1",
                                                                    children: pkg.exclusions.map((exc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: exc
                                                                        }, i, false, {
                                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/services/construction/page.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/services/construction/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/construction/page.tsx",
                                                        lineNumber: 611,
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
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/construction/page.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/construction/page.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/construction/page.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/construction/page.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_services_construction_page_tsx_3d75838a._.js.map