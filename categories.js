const products = [
    {
        id: "industrial-felt",
        name: "Industrial Felt",
        image: "./assets/categories img/Industrial Felt.png",
        description:
            "Industrial felt is known for its durability and versatility. Ideal for use in demanding industrial environments, our industrial felt products are designed to provide reliable performance in a range of applications. From machinery padding to filtration and insulation, industrial felt delivers long-lasting results.",
        specifications: {
            material: "100% Merino Wool and Blended with other Natural Fiber",
            composition: "",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.20 to 0.60 g/cm³",
            thickness: "2 mm to 50 mm",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "Free between 1.6 m to 1.8 m (Fixed can be up-to 2.0 m)",
            length: "Free between 6 m to 9 m",
            colorAvail:
                "Natural white / White / Grey / Black & Customized colors",
            texture: "",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Gaskets & Seals",
                "Filtration",
                "Soundproofing & Vibration Damping",
                "Padding & Lining",
                "Polishing & Buffing",
                "Customised uses",
            ],
            kitSize: [],
        },
        applicationIDs: [1, 2, 3],
    },
    {
        id: "engineering-felt",
        name: "Engineering Felt",
        image: "./assets/categories img/Engineering Felt.png",
        description:
            "Engineering Felt refers to specialized felt materials used in industrial and engineering applications. This type of felt is typically made from natural wool, synthetic fibers (such as polyester, viscose), or a blend of both, and is manufactured through needling, pressing, or chemical treatments to achieve specific properties.",
        specifications: {
            material: "",
            composition:
                "100% Merino Wool and Blended with other Natural Fiber",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.20 to 0.60 g/cm³",
            thickness: "2 mm to 50 mm",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "Free between 1.6 m to 1.8 m (Fixed can be up-to 2.0 m)",
            length: "Free between 6 m to 9 m",
            colorAvail:
                "Natural white / White / Grey / Black & Customized colors",
            texture: "",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Gaskets & Seals",
                "Polishing & Buffing",
                "Vibration Damping & Soundproofing",
                "Lubrication & Wicking, Filtration",
                "Padding & Cushioning",
                "Heat Insulation",
                "Customised uses",
            ],
            kitSize: [],
        },
        applicationIDs: [1, 2, 3],
    },
    {
        id: "felt-rolls-sheets",
        name: "Wool Felts Rolls & Sheets",
        image: "./assets/categories img/Pressed Wool Felt Rolls & Sheets.png",
        applicationIDs: [],
        subcategories: [
            {
                id: "felts-rolls",
                name: "Wool Felts Rolls",
                image: "./assets/categories img/Wool Felts Rolls & Sheets Sub 1.png", // New subcategory image
                description:
                    "Wool felt rolls are continuous sheets of compressed wool fibers, often sold in roll form for various applications. Wool felt is created through a process of matting, condensing, and pressing wool fibers together, rather than weaving them. It is known for its durability, density, and versatility.",
                specifications: {
                    material:
                        "100% Merino Wool and Blended with other Natural Fiber",
                    composition: "",
                    types: [],
                    shapes: [],
                    spindles: [],
                    grades: [],
                    cutMeth: [],
                    density: "0.20 to 0.60 g/cm³",
                    thickness: "2 mm to 50 mm",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "",
                    width: "Free between 1.6 m to 1.8 m (Fixed can be up-to 2.0 m)",
                    length: "Free between 6 m to 9 m",
                    colorAvail:
                        "Natural white / White / Grey / Black & Customized colors",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs: "",
                    commonAppli: [
                        "Gaskets & Seals",
                        "Filteration",
                        "Soundproofing & Vibration Damping",
                        "Padding & Lining",
                        "Polishing & Buffing Pads",
                    ],
                    kitSize: [],
                },
                applicationIDs: [4, 2, 3],
            },
            {
                id: "felts-sheets",
                name: "Wool Felts Sheets",
                image: "./assets/categories img/Wool Felts Rolls & Sheets Sub 2.png", // New subcategory image
                description:
                    "Wool felt is a fabric made from wool fibers that are pressed, matted, and condensed together to create a durable material. It's one of the oldest known textiles, and is used in many industries.",
                specifications: {
                    material:
                        "100% Merino Wool and Blended with other Natural Fiber",
                    composition: "",
                    types: [],
                    shapes: [],
                    spindles: [],
                    grades: [],
                    cutMeth: [],
                    density: "0.20 to 0.60 g/cm³",
                    thickness: "2 mm to 60 mm",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "",
                    width: "Fixed up-to 1000 mm",
                    length: "Up-to 1500 mm",
                    colorAvail: "",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs: "",
                    commonAppli: [
                        "Insulation",
                        "Sound absorption",
                        "Water resistance",
                        "Resilience",
                        "Biodegradability",
                        "Flame retardancy",
                        "Chemical resistance",
                        "Gaskets & Seals",
                    ],
                    kitSize: [],
                },
                applicationIDs: [1, 2, 5],
            },
        ],
    },
    {
        id: "carbonised-felt",
        name: "Carbonized Felt",
        image: "./assets/categories img/Carbonized Felt.png",
        description:
            "Carbonized felt is a type of high-performance felt made by treating organic or wool-based felt at high temperatures to remove impurities and enhance its thermal and electrical properties. It is commonly used in applications requiring high-temperature resistance, insulation, and chemical stability.",
        specifications: {
            material: "",
            composition: "100% Carbonized Wool & Fine Micron Wool Fibers",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.20 to 0.40 g/cm³",
            thickness: "2 mm to 25 mm",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "Free between 1.6 m to 1.8 m (Fixed can be up-to 2 m)",
            length: "Free between 6 m to 9 m",
            colorAvail: "White",
            texture: "Shearing Both the surface of the sheets",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "For Empty Hard Gelatine Capsules manufacturing process",
                "Used in biomedical applications, such as tissue scaffolding",
                "Laboratory insulation for sensitive experiments",
            ],
            kitSize: [],
        },
        applicationIDs: [1, 6, 7],
    },
    {
        id: "color-felt",
        name: "Color Felt",
        image: "./assets/categories img/Carbonized Felt.png",
        description:
            "Colored wool felt is a soft, dense textile made from natural wool fibers that have been matted and pressed together. It is available in a wide range of colors and is commonly used for crafts, sewing projects, appliqué, toy-making, and home decor. Wool felt is known for its durability, non-fraying edges, and slightly fuzzy texture.",
        specifications: {
            material: "",
            composition: "100% Merino Dyed Wool & Fine Micron Dying Fibre",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.20 to 0.40 g/cm³",
            thickness: "2 mm to 25 mm",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "Free between 1.6 m to 1.8 m (Fixed can be up-to 2 m)",
            length: "Free between 6 m to 9 m",
            colorAvail:
                "Available in a wide spectrum, including, blue, green, yellow, black, & pastel shades. Customised colors available.",
            texture: "Shearing Both the surface of the sheets",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Colored Felt Is A Versatile Material With Many Uses Across Different Crafts, Decor, And Functional Applications",
                "Arts & Crafts",
                "Sewing & Embroidery",
                "Home Decor",
                "Educational Uses",
                "Fashion & Accessories",
                "Functional Uses",
            ],
            kitSize: [],
        },
        applicationIDs: [8, 9, 10],
    },
    {
        id: "felt-wheels",
        name: "Felt Wheels",
        image: "./assets/categories img/Felt Wheels.png",
        description:
            "Felt wheels are precision-engineered polishing and buffing tools made from compressed wool or synthetic felt. These wheels are widely used for polishing, buffing, deburring, and finishing a variety of materials, including metal, glass, stone, wood, and plastic. Felt wheels hold polishing compounds effectively, providing uniform and consistent surface finishing.",
        specifications: {
            material: "",
            composition: "100% Merino Wool",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.20 to 0.60 g/cm³",
            thickness: "6 mm, 10 mm, 20 mm, 25 mm, 50 mm, 75 mm (customised)",
            outerDia: "10 mm to 500 mm (custom sizes available)",
            innerBoreDia: "6 mm, 10 mm, 16 mm, 20 mm, 25 mm (or customized)",
            bore: "",
            diameter: "",
            width: "",
            length: "",
            colorAvail: "Bleached White / Natural White / Grey",
            texture: "Shearing Both the surface of the sheets",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Metal Polishing",
                "Glass & Optical Lens Polishing",
                "Jewelry & Watch Polishing",
                "Stone & Marble Polishing",
                "Woodworking & Furniture Finishing",
                "Automotive & Aerospace Polishing",
                "Industrial & Precision Engineering",
            ],
            kitSize: [],
        },
        applicationIDs: [3, 2, 11],
    },
    {
        id: "needle-punch-felt",
        name: "Non-Woven Needle Punch Felt",
        image: "./assets/categories img/Needle Punch Felt.png",
        description:
            "Non-woven needle punch felt is a durable fabric created by mechanically interlocking fibers using a needling process, rather than weaving or knitting. This technique enhances strength, durability, and versatility, making it suitable for filtration, insulation, padding, and industrial applications.",
        specifications: {
            material:
                "Combination Of Wool And Synthetic Materials, 100% Wool, Wool And Polyester Blend,100% Polyester",
            composition: "",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "100 GSM to 4000 GSM",
            thickness: "2 mm to 20 mm (Customised)",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "",
            length: "",
            colorAvail:
                "White / Grey / Black / Brown / Camel and other colours as per individual requirements",
            texture: "Shearing Both the surface of the sheets",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Lightweight (100–300 Gsm) – Used For Clothing, Craft, And Filtration.",
                "Medium Weight (300–800 Gsm) – Suitable For Padding, Soundproofing, And Automotive Applications.",
                "Heavyweight (800–4000 Gsm) – Used For Industrial Insulation, Geotextiles, And Filtration.",
            ],
            kitSize: [],
        },
        applicationIDs: [4, 2, 11],
    },
    {
        id: "polishing-felt",
        name: "Polishing felt",
        image: "./assets/categories img/Polishing Felt.png",
        applicationIDs: [],
        subcategories: [
            {
                id: "square-edge-felt",
                name: "Square Edge Felt Wheels & Rings",
                image: "./assets/categories img/Polishing felt Sub 1(Square Edge Felt).png", // New subcategory image
                description:
                    "Square edge felt wheels and rings are specialized polishing tools with a sharp, straight edge rather than the typical rounded edge found in standard felt wheels. These tools are typically made from high-density wool or synthetic fibers and are used in a variety of applications that require precise, sharp polishing or deburring of surfaces. The square edge provides greater contact area and control for detailed polishing tasks, especially in intricate areas of the workpiece.",
                specifications: {
                    material:
                        "100% Merino Wool and Blended with other Natural Fiber",
                    composition: "",
                    types: [],
                    shapes: [],
                    spindles: [],
                    grades: [],
                    cutMeth: [],
                    density: "0.36 to 0.90 g/cm³",
                    thickness: "10 mm to 75 mm",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "As per requirement",
                    diameter: "75 mm and + (customised)",
                    width: "",
                    length: "",
                    colorAvail: "Natural White / Bleached White / Grey",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs:
                        "Square edge felt wheels have a sharp, well-defined edge that provides a uniform surface finish for tasks requiring precise control",
                    commonAppli: [],
                    kitSize: [],
                },
                applicationIDs: [],
            },
            {
                id: "mounted-felt-bobs",
                name: "Mounted Felt Bobs",
                image: "./assets/categories img/Polishing felt Sub 2(Mounted Felt Bobs).png", // New subcategory image
                description:
                    "Mounted felt bobs are small, precision polishing tools designed for use in rotary tools like Dremel, flex shafts, or high-speed rotary machines. These tools consist of a felt head that is mounted on a mandrel or shaft, making them ideal for detailed polishing, cleaning, and deburring tasks. Mounted felt bobs come in various sizes, shapes, and hardness levels to suit different types of workpieces, such as metal, glass, jewelry, or wood.",
                specifications: {
                    material: "100% Merino Dyed Wool & Fine Micron Dying Fibre",
                    composition: "",
                    types: [],
                    shapes: [
                        "Cylindrical",
                        "Conical and other Shapes",
                        "Special Shapes as per specific requirements",
                    ],
                    spindles: ['2/32", 1/8", 1/4"', "3 mm and 6 mm"],
                    grades: "Soft, Medium, Hard, Rock Hard",
                    cutMeth: [],
                    density: "",
                    thickness: "",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "",
                    width: "",
                    length: "",
                    colorAvail: "",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs: "",
                    commonAppli: [],
                    kitSize: [],
                },
                applicationIDs: [],
            },
            {
                id: "unmounted-felt-bobs",
                name: "Un-mounted Felt Bobs",
                image: "./assets/categories img/Polishing felt Sub 3(Un-mounted Felt Bobs).png", // New subcategory image
                description:
                    "Un-mounted felt bobs are individual felt polishing heads without a mandrel or shaft. These felt heads are typically used in polishing applications where they can be mounted on custom or specialized shafts or in rotary tools with adapters. Un-mounted felt bobs come in a variety of shapes, sizes, and hardness levels, and are commonly used for detailed polishing, deburring, and fine finishing on metal, glass, jewelry, and other materials.",
                specifications: {
                    material:
                        "100% Merino Wool and Blended with other Natural Fiber",
                    composition: "",
                    types: [],
                    shapes: ["Cylindrical"],
                    spindles: [],
                    grades: "Soft, Medium, Hard, Rock Hard",
                    cutMeth: [],
                    density: "",
                    thickness: "10 mm to 100 mm",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "6 mm to 75 mm",
                    width: "",
                    length: "",
                    colorAvail: "",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs: "",
                    commonAppli: [],
                    kitSize: [],
                },
                applicationIDs: [],
            },
            {
                id: "felt-cones",
                name: "Felt Cones",
                image: "./assets/categories img/Polishing felt Sub 4(Felt Cones).png", // New subcategory image
                description:
                    "Felt cones are a type of polishing tool that feature a cone-shaped felt head. These tools are typically used for precision polishing, deburring, and cleaning in narrow or conical spaces. Felt cones are particularly useful in applications where controlled polishing is needed on edges, grooves, or small recesses. They are commonly mounted on rotary tools, such as Dremel or flex shafts, and are available in various sizes, hardnesses, and materials.",
                specifications: {
                    material:
                        "100% Merino Wool and Blended with other Natural Fiber",
                    composition: "",
                    types: [],
                    shapes: ["Conical", "Bull Nose"],
                    spindles: [],
                    grades: "Soft, Medium, Hard, Rock Hard",
                    cutMeth: [],
                    density: "",
                    thickness: "10 mm to 100 mm",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "6 mm to 75 mm",
                    width: "",
                    length: "",
                    colorAvail: "",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs: "",
                    commonAppli: [],
                    kitSize: [],
                },
                applicationIDs: [],
            },
            {
                id: "felt-discs",
                name: "Felt Discs",
                image: "./assets/categories img/Polishing felt Sub 5(Felt Discs).png", // New subcategory image
                description:
                    "Felt discs are circular pieces of felt, often used in polishing, buffing, and finishing tasks. They come in a variety of sizes, hardness levels, and materials, making them highly versatile for different polishing applications. Felt discs are commonly mounted on rotary tools, such as Dremel, flex shafts, and other machines, to achieve fine finishes on materials like metal, wood, glass, plastics, and stone.",
                specifications: {
                    material:
                        "100% Merino Wool and Blended with other Natural Fiber",
                    composition: "",
                    types: [],
                    shapes: ["Cylindrical"],
                    spindles: [],
                    grades: "Soft, Medium, Hard, Rock Hard",
                    cutMeth: [],
                    density: "",
                    thickness: "3 mm to 12 mm",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "12 mm to 40 mm (customised)",
                    width: "",
                    length: "",
                    colorAvail: "",
                    texture: "",
                    specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
                    specialSpecs: "",
                    commonAppli: [],
                    kitSize: [],
                },
                applicationIDs: [],
            },
            {
                id: "felt-polishing-kits",
                name: "Felt Polishing Kits",
                image: "./assets/categories img/Polishing felt Sub 6(Felt Polishing Kits).png", // New subcategory image
                description:
                    "Felt polishing kits are comprehensive sets that include various types of felt polishing tools (such as discs, cones, bobs, wheels, and felts) along with polishing compounds. These kits are designed to provide everything needed for polishing, buffing, and finishing a wide range of materials, including metal, glass, wood, and stone. They are commonly used in industries like jewelry making, automotive detailing, woodworking, and crafting.",
                specifications: {
                    material: "",
                    composition: "",
                    types: [],
                    shapes: [],
                    spindles: [],
                    grades: [],
                    cutMeth: [],
                    density: "",
                    thickness: "",
                    outerDia: "",
                    innerBoreDia: "",
                    bore: "",
                    diameter: "",
                    width: "",
                    length: "",
                    colorAvail: "",
                    texture: "",
                    specs: [],
                    specialSpecs: "",
                    commonAppli: [],
                    kitSize: ["17 pcs", "11 pcs", "5 pcs"],
                },
                applicationIDs: [],
            },
        ],
    },
    {
        id: "felt-cords",
        name: "Felt Cords",
        image: "./assets/categories img/Felt Cord.png",
        description:
            "Felt cords are versatile, durable, and flexible components made from high-quality wool or synthetic fibers. They are used for sealing, padding, vibration dampening, and decorative applications across various industries.",
        specifications: {
            material: "100% Merino Wool and Blended with other Natural Fiber",
            composition: "",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.44 to 0.60 g/cm³",
            thickness: "",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "3 mm to 60 mm",
            width: "",
            length: "Maximum possible 1200 mm",
            colorAvail: "White & Grey",
            texture: "",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [],
            kitSize: [],
        },
        applicationIDs: [],
    },
    {
        id: "felt-components",
        name: "Felt Cut Parts",
        image: "./assets/categories img/Felt Components.png",
        description:
            "Felt cords are versatile, durable, and flexible components made from high-quality wool or synthetic fibers. They are used for sealing, padding, vibration dampening, and decorative applications across various industries.",
        specifications: {
            material: "100% Merino Wool and Blended with other Natural Fiber",
            composition: "",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [
                "Die Cutting – For mass production of identical shapes.",
                "Laser Cutting – For precise and intricate designs with clean edges.",
            ],
            density: "",
            thickness: "",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "",
            length: "",
            colorAvail: "",
            texture: "",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Arts & Crafts – Used in DIY projects, sewing, scrapbooking, and toy making.",
                "Decorations – Used for seasonal decorations, party banners, and appliqués.",
                "Clothing & Accessories – Found in patches, badges, and custom fashion designs.",
                "Industrial & Technical Applications – Used for gaskets, padding, insulation, and soundproofing.",
                "Educational Materials – Used in felt boards, storytelling kits, and learning tools, Black Board Dusters.",
            ],
            kitSize: [],
        },
        applicationIDs: [9, 10, 11],
    },
    {
        id: "felt-rollers-tubes",
        name: "Felt Rollers & Tubes",
        image: "./assets/categories img/Felt Roller & Tubes.png",
        description:
            "Felt rollers and tubes are cylindrical components made from high-quality felt, designed for industrial and mechanical uses. They provide cushioning, polishing, and thermal insulation while ensuring durability and performance in demanding applications.",
        specifications: {
            material: "100% Merino Wool and Blended with other Natural Fiber",
            composition: "",
            types: [],
            shapes: [],
            spindles: [],
            grades: [],
            cutMeth: [],
            density: "0.44 to 0.60 g/cm³",
            thickness: "",
            outerDia: "12 mm to 110 mm",
            innerBoreDia: "As per requirement",
            bore: "",
            diameter: "",
            width: "",
            length: "Maximum possible 400 mm",
            colorAvail: "White & Grey",
            texture: "",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [],
            kitSize: [],
        },
        applicationIDs: [4, 2, 3],
    },
    {
        id: "jewellery-polishing-felt",
        name: "Jewelry Polishing Felts",
        image: "./assets/categories img/Jewellery Polishing Felt.png",
        description:
            "Jewelry polishing felts are specialized tools used to enhance the shine, finish, and smoothness of jewelry pieces. These felts are typically made from high-density wool or synthetic fibers and are commonly used with polishing compounds or pastes. The needled or compressed structure allows them to hold the polishing compounds well, providing an even and fine finish on metals like gold, silver, platinum, and other precious materials.",
        specifications: {
            material: [
                "100% Merino Wool – Most common, providing superior polish and a fine finish",
                "Blended Felt – 100% Merino Wool combined with other fibers for durability and efficiency",
            ],
            composition: "",
            types: [
                "Ring Buffs",
                "Combination Buffs",
                "Solid Ring Buffs",
                "Split & Bevel Laps",
                "Knife-Edge Felt Discs",
                "Felt Cones",
                "Hand File (Wooden Sander)",
            ],
            shapes: [],
            spindles: [],
            grades: [
                "Soft Felt – For light polishing and finishing delicate surfaces without scratching.",
                "Medium Felt – Used for general polishing and cleaning of jewelry.",
                "Hard Felt – For more aggressive polishing and high-shine finishes, often used for larger, more robust jewelry pieces",
            ],
            cutMeth: [],
            density: "0.20 to 0.40 g/cm³",
            thickness:
                "3 mm to 25 mm thickness options available based on the application",
            outerDia: "",
            innerBoreDia: "",
            bore: "",
            diameter: "",
            width: "",
            length: "",
            colorAvail: "",
            texture: "Shearing Both the surface of the sheets",
            specs: ["German DIN-61200", "U.S. SAE-J341B and CF-206"],
            commonAppli: [
                "Polishing Precious Metals",
                "Gemstone Setting Polishing",
                "Jewelry Cleaning",
                "Detailing & Finishing",
                "Restoration & Repair",
            ],
            kitSize: [],
        },
        applicationIDs: [12, 13, 14],
    },
];
const applicationCards = [
    {
        id: 1,
        image: "./assets/categories img/Application Cards/Seals & Gaskets.jpeg",
        title: "Seals & Gaskets",
        description:
            "Used for creating tight seals in machinery, automotive parts, and equipment to prevent leaks and improve efficiency",
    },
    {
        id: 2,
        image: "./assets/categories img/Application Cards/Noise & Vibration Dampening.jpeg",
        title: "Noise & Vibration Dampening",
        description:
            "Ideal for soundproofing and reducing vibrations in automotive, machinery, and industrial equipment",
    },
    {
        id: 3,
        image: "./assets/categories img/Application Cards/Polishing and buffing.jpeg",
        title: "Polishing and buffing",
        description:
            "Felt is ideal for providing a smooth finish on metals, glass, and other surfaces. Its soft yet durable texture ensures precision without causing scratches",
    },
    {
        id: 4,
        image: "./assets/categories img/Application Cards/Filtration.png",
        title: "Filtration",
        description:
            "Felt is widely used in filtration systems due to its ability to trap fine particles and absorb liquids efficiently",
    },
    {
        id: 5,
        image: "./assets/categories img/Application Cards/Water Resistance.png",
        title: "Water Resistance",
        description:
            "Specially treated felt repels water, making it ideal for outdoor and industrial uses where moisture resistance is crucial",
    },
    {
        id: 6,
        image: "./assets/categories img/Application Cards/Laboratory.png",
        title: "Laboratory",
        description:
            "Felt provides thermal and noise insulation in labs, ensuring precise and controlled experimental environments",
    },
    {
        id: 7,
        image: "./assets/categories img/Application Cards/Heat Insulation.png",
        title: "Heat Insulation",
        description:
            "High-density felt serves as a thermal insulator, ideal for industrial and household applications requiring heat resistance",
    },
    {
        id: 8,
        image: "./assets/categories img/Application Cards/Sewing & Embroidery.png",
        title: "Sewing & Embroidery",
        description:
            "Felt adds texture and vibrancy to sewing and embroidery projects, offering a flexible and easy-to-stitch material",
    },
    {
        id: 9,
        image: "./assets/categories img/Application Cards/Educational Uses.png",
        title: "Educational Uses",
        description:
            "Felt provides thermal and noise insulation in labs, ensuring precise and controlled experimental environments",
    },
    {
        id: 10,
        image: "./assets/categories img/Application Cards/Home Decor.png",
        title: "Home Decor",
        description:
            "Used in table runners, coasters, and wall art, felt enhances any space with its soft texture and customizable designs",
    },
    {
        id: 11,
        image: "./assets/categories img/Application Cards/Fashion & Accessories.png",
        title: "Fashion & Accessories",
        description:
            "Felt is used to make hats, bags, and other fashion accessories, combining style and functional",
    },
    {
        id: 12,
        image: "./assets/categories img/Application Cards/Jewellery & Watch Polishing.png",
        title: "Jewellery & Watch Polishing",
        description:
            "Felt tools are perfect for jewelry and watch polishing, restoring shine and removing tarnish",
    },
    {
        id: 13,
        image: "./assets/categories img/Application Cards/Woodworking Finishing.png",
        title: "Woodworking Finishing",
        description:
            "Felt is widely used in woodworking and furniture finishing to achieve smooth, scratch-free surfaces",
    },
    {
        id: 14,
        image: "./assets/categories img/Application Cards/Stone & Marble Polishing.png",
        title: "Stone & Marble Polishing",
        description:
            "Felt is used for stone and marble polishing to achieve a smooth, glossy finish",
    },
];
// Mapping object for friendly specification names.
const specNameMapping = {
    material: "Material",
    composition: "Composition",
    types: "Types",
    shapes: "Shapes",
    spindles: "Spindles",
    grades: "Grades",
    cutMeth: "Cut Method",
    density: "Density (g/cm³)",
    thickness: "Thickness (mm)",
    outerDia: "Outer Diameter",
    innerBoreDia: "Inner Bore Diameter",
    bore: "Bore",
    diameter: "Diameter",
    width: "Width (m)",
    length: "Length (m)",
    colorAvail: "Available Colors",
    texture: "Texture",
    specs: "Specifications",
    specialSpecs: "Special Specification",
    commonAppli: "Common Applications",
    kitSize: "Kit Size",
};
/////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    // Inject custom CSS for transitions and active mobile accordion styling.
    function injectCSS() {
        const style = document.createElement("style");
        style.innerHTML = `
      #product-image {
        transition: opacity 0.3s ease;
      }
      .tab-content {
        transition: opacity 0.3s ease;
      }
      .mobile-accordion-header[aria-expanded="true"] {
        background-color: rgb(255, 255, 255);
        color: var(--tag-line);
      }
    `;
        document.head.appendChild(style);
    }
    injectCSS();

    // Render a specifications table from an object of key/value pairs.
    function renderSpecificationsTable(specs) {
        let tableHTML =
            '<table class="specs-table"><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody>';
        for (const [key, value] of Object.entries(specs)) {
            if (value && (Array.isArray(value) ? value.length > 0 : true)) {
                const displayKey = specNameMapping[key] || key;
                let displayValue;
                if (key === "specs" && Array.isArray(value)) {
                    displayValue = `<p>Indian IS-1719 – 2000, Also Equivalent to specifications:</p>
            <ul style="list-style: none; margin: 0; padding: 0;">
              ${value.map((item) => `<li>${item}</li>`).join("")}
            </ul>`;
                } else if (key === "commonAppli" && Array.isArray(value)) {
                    displayValue = `<ul>${value
                        .map((item) => `<li>${item}</li>`)
                        .join("")}</ul>`;
                } else {
                    displayValue = Array.isArray(value)
                        ? value.join(", ")
                        : value;
                }
                tableHTML += `<tr><th>${displayKey}</th><td>${displayValue}</td></tr>`;
            }
        }
        tableHTML += "</tbody></table>";
        return tableHTML;
    }

    // Render application cards for a given array of IDs.
    function renderAppCardsForIDs(ids) {
        const cardsToDisplay = applicationCards
            .filter((card) => ids.includes(card.id))
            .slice(0, 3);
        let cardsHTML = '<div class="app-cards">';
        cardsToDisplay.forEach((cardData) => {
            cardsHTML += `
        <div class="app-card">
          <img src="${cardData.image}" alt="${cardData.title}" class="app-card-image" />
          <h3 class="app-card-title">${cardData.title}</h3>
          <p class="app-card-description">${cardData.description}</p>
        </div>
      `;
        });
        cardsHTML += "</div>";
        return cardsHTML;
    }

    // Update the application cards container based on provided IDs.
    function updateAppCards(appIDs) {
        const appCardsContainer = document.getElementById("app-cards");
        const applicationsSection = document.querySelector(
            ".applications-section"
        );
        if (appIDs && Array.isArray(appIDs) && appIDs.length > 0) {
            appCardsContainer.innerHTML = renderAppCardsForIDs(appIDs);
            applicationsSection.style.display = "";
        } else {
            applicationsSection.style.display = "none";
        }
    }

    // Generate the mobile accordion layout from the product subcategories.
    function generateMobileAccordion(product) {
        const accordionContainer = document.querySelector(".mobile-accordion");
        if (
            !accordionContainer ||
            !product.subcategories ||
            product.subcategories.length === 0
        )
            return;
        accordionContainer.innerHTML = "";

        product.subcategories.forEach((subcat, index) => {
            const tableHTML = renderSpecificationsTable(subcat.specifications);
            const accordionItem = document.createElement("div");
            accordionItem.className = "mobile-accordion-item";
            accordionItem.innerHTML = `
        <button class="mobile-accordion-header" aria-expanded="false">
          <span>${subcat.name}</span>
          <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="mobile-accordion-content">
          <img src="${subcat.image}" alt="${subcat.name}" style="max-width: 100%; height: auto;">
          <h3>Description</h3>
          <p>${subcat.description}</p>
          ${tableHTML}
        </div>
      `;
            accordionContainer.appendChild(accordionItem);
        });

        const accordionItems = document.querySelectorAll(
            ".mobile-accordion-item"
        );
        accordionItems.forEach((item, index) => {
            const header = item.querySelector(".mobile-accordion-header");
            header.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                // Remove active state from all items.
                accordionItems.forEach((accItem) => {
                    accItem.classList.remove("active");
                    const btn = accItem.querySelector(
                        ".mobile-accordion-header"
                    );
                    if (btn) btn.setAttribute("aria-expanded", "false");
                });
                if (!isActive) {
                    item.classList.add("active");
                    header.setAttribute("aria-expanded", "true");
                    // Update main image with fade effect.
                    const mainImageEl =
                        document.getElementById("product-image");
                    if (mainImageEl) {
                        mainImageEl.style.opacity = 0;
                        setTimeout(() => {
                            mainImageEl.src =
                                product.subcategories[index].image;
                            mainImageEl.style.opacity = 1;
                        }, 300);
                    }
                    const subcat = product.subcategories[index];
                    const newAppIDs =
                        subcat.applicationIDs &&
                        subcat.applicationIDs.length > 0
                            ? subcat.applicationIDs
                            : product.applicationIDs;
                    updateAppCards(newAppIDs);
                }
            });
        });

        // Open the first accordion item by default.
        if (accordionItems.length > 0) {
            const firstItem = accordionItems[0];
            const firstHeader = firstItem.querySelector(
                ".mobile-accordion-header"
            );
            firstItem.classList.add("active");
            firstHeader.setAttribute("aria-expanded", "true");
            // Update main image and application cards for the first subcategory.
            const mainImageEl = document.getElementById("product-image");
            if (mainImageEl) {
                mainImageEl.style.opacity = 0;
                setTimeout(() => {
                    mainImageEl.src = product.subcategories[0].image;
                    mainImageEl.style.opacity = 1;
                }, 300);
            }
            const firstSubcat = product.subcategories[0];
            const newAppIDs =
                firstSubcat.applicationIDs &&
                firstSubcat.applicationIDs.length > 0
                    ? firstSubcat.applicationIDs
                    : product.applicationIDs;
            updateAppCards(newAppIDs);
        }
    }

    // Set up tab events for desktop view.
    function setupTabEvents(product) {
        const tabHeaders = document.querySelectorAll(".tab-header");
        tabHeaders.forEach((header) => {
            header.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                // Remove active state from all tab headers.
                tabHeaders.forEach((h) => h.classList.remove("active"));
                // Fade out current visible tab content.
                const currentContent = document.querySelector(
                    ".tab-content[style*='display: block']"
                );
                if (currentContent) {
                    currentContent.style.opacity = 0;
                    setTimeout(() => {
                        currentContent.style.display = "none";
                    }, 300);
                }
                // Activate clicked tab header and show new content.
                this.classList.add("active");
                const newContent = document.querySelector(
                    `.tab-content[data-index="${index}"]`
                );
                newContent.style.display = "block";
                setTimeout(() => {
                    newContent.style.opacity = 1;
                }, 10);
                // Update main image.
                const mainImageEl = document.getElementById("product-image");
                if (mainImageEl) {
                    mainImageEl.style.opacity = 0;
                    setTimeout(() => {
                        mainImageEl.src = product.subcategories[index].image;
                        mainImageEl.style.opacity = 1;
                    }, 300);
                }
                const subcat = product.subcategories[index];
                const newAppIDs =
                    subcat.applicationIDs && subcat.applicationIDs.length > 0
                        ? subcat.applicationIDs
                        : product.applicationIDs;
                updateAppCards(newAppIDs);
            });
        });
    }

    // Render product details based on the viewport.
    function renderProductDetails() {
        let html = `<div class="product-details-container">
      <h1 class="products-name">${product.name}</h1>`;
        if (product.subcategories && product.subcategories.length > 0) {
            if (window.innerWidth >= 768) {
                // Desktop view: show main image.
                const mainImage = product.subcategories[0].image;
                html += `<img id="product-image" src="${mainImage}" alt="${product.name}" class="detail-image" />`;
            }
            if (window.innerWidth < 768) {
                // Mobile view: include accordion container.
                html += `<div class="mobile-accordion"></div>`;
            } else {
                // Desktop view: set up tab layout.
                html += `<div class="tabs">
          <ul class="tab-headers">`;
                product.subcategories.forEach((subcat, index) => {
                    html += `<li class="tab-header ${
                        index === 0 ? "active" : ""
                    }" data-index="${index}">${subcat.name}</li>`;
                });
                html += `</ul>
          <div class="tab-contents">`;
                product.subcategories.forEach((subcat, index) => {
                    html += `<div class="tab-content" data-index="${index}" style="display: ${
                        index === 0 ? "block" : "none"
                    }; opacity: ${index === 0 ? "1" : "0"};">
              <div class="details-content">
                <div class="description-section">
                  <h3>Description</h3>
                  <p>${subcat.description}</p>
                </div>
                <div class="specs-section">
                  ${renderSpecificationsTable(subcat.specifications)}
                </div>
              </div>
            </div>`;
                });
                html += `</div></div>`;
            }
        } else {
            // For products without subcategories.
            html += `<img id="product-image" src="${product.image}" alt="${product.name}" class="detail-image" />`;
            html += `<div class="details-content">
          <div class="description-section">
            <h3>Description</h3>
            <p>${product.description}</p>
          </div>
          <div class="specs-section">
            ${renderSpecificationsTable(product.specifications)}
          </div>
        </div>`;
        }
        html += `</div>`;
        detailsContainer.innerHTML = html;

        // Initialize interactivity based on viewport.
        if (product.subcategories && product.subcategories.length > 0) {
            if (window.innerWidth < 768) {
                generateMobileAccordion(product);
            } else {
                setupTabEvents(product);
            }
        } else {
            updateAppCards(product.applicationIDs);
        }
    }

    // Retrieve product information from URL and render details.
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = products.find((p) => p.id === productId);
    const detailsContainer = document.getElementById("product-details");

    if (product) {
        renderProductDetails();
    } else {
        detailsContainer.innerHTML = `<h1>Product Not Found</h1>
      <p>Sorry, the product you're looking for does not exist. <a href="index.html">Go back to homepage</a></p>`;
    }

    // Re-render layout on window resize when crossing the mobile breakpoint.
    let currentIsMobile = window.innerWidth < 768;
    window.addEventListener("resize", () => {
        const isMobile = window.innerWidth < 768;
        if (isMobile !== currentIsMobile) {
            currentIsMobile = isMobile;
            renderProductDetails();
        }
    });
});
