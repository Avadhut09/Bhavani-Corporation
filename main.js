const categories = [
    {
        id: "industrial-felt",
        name: "Industrial Felt",
        description:
            "Durable, versatile, and designed to withstand industrial demands",
        image: "/assets/categories img/Industrial Felt.png",
    },
    {
        id: "engineering-felt",
        name: "Engineering Felt",
        description:
            "Engineering Felt refers to specialized felt materials used in industrial and engineering applications.",
        image: "/assets/categories img/Engineering Felt.png",
    },
    {
        id: "felt-rolls-sheets",
        name: "Pressed Wool Felt Rolls & Sheets",
        description:
            "Premium, tightly compressed wool felt available in rolls and sheets",
        image: "/assets/categories img/Pressed Wool Felt Rolls & Sheets.png",
    },
    {
        id: "carbonised-felt",
        name: "Carbonised Felt",
        description:
            "Highly durable carbonised felt ideal for extreme conditions",
        image: "/assets/categories img/Carbonized Felt.png",
    },
    {
        id: "color-felt",
        name: "Color Felt",
        description:
            "High-quality, vibrant felt sheets available in a variety of shades",
        image: "/assets/categories img/Color Felt.png",
    },
    {
        id: "felt-wheels",
        name: "Felt Wheels",
        description:
            "Precision-engineered felt wheels for grinding, polishing, & finishing",
        image: "/assets/categories img/Felt Wheels.png",
    },
    {
        id: "needle-punch-felt",
        name: "Needle Punch Felt",
        description:
            "Durable fabric created by mechanically interlocking fibers using a needling process, rather than weaving or knitting",
        image: "/assets/categories img/Needle Punch Felt.png",
    },
    {
        id: "polishing-felt",
        name: "Polishing Felt",
        description:
            "Dense, fine micron wool felt ideal for final polishing of metals, composites, and delicate surfaces",
        image: "/assets/categories img/Polishing Felt.png",
    },
    {
        id: "felt-cords",
        name: "Felt Cords",
        description:
            "Flexible, strong felt cords for sealing and insulation purposes",
        image: "/assets/categories img/Felt Cord.png",
    },
    {
        id: "felt-components",
        name: "Felt Cut Parts",
        description:
            "Precision-crafted felt components for industrial and creative use",
        image: "/assets/categories img/Felt Components.png",
    },
    {
        id: "felt-rollers-tubes",
        name: "Felt Rollers & Tubes",
        description:
            "High-performance felt rollers and tubes designed for diverse uses",
        image: "/assets/categories img/Felt Roller & Tubes.png",
    },
    {
        id: "jewellery-polishing-felt",
        name: "Jewellery Polishing Felts",
        description:
            "Felt specially designed for polishing and maintaining jewelry items",
        image: "/assets/categories img/Jewellery Polishing Felt.png",
    },
    // Add more categories as needed
];

const accordionData = [
    {
        title: "What industries use your felt products?",
        content:
            "Our felt products are used in industries like automotive, construction, interior design, and heavy machinery.",
    },
    {
        title: "Do you offer customizations?",
        content:
            "Yes, we specialize in custom felt solutions tailored to your specific needs and applications.",
    },
    {
        title: "What is your delivery period?",
        content:
            "Once the order is confirmed, we ensure delivery within 15 days.",
    },
    {
        title: "What payment methods do you accept?",
        content:
            "We accept all major payment methods, including UPI, credit and debit cards, net banking, and international wire transfers.",
    },
    {
        title: "Are bulk orders supported?",
        content:
            "Yes, we specialize in handling bulk orders while maintaining consistent quality and timely delivery.",
    },
    {
        title: "Can you provide technical specifications for your products?",
        content:
            "Absolutely! Technical datasheets and specifications are available on request for all our products.",
    },
    {
        title: "Do you have a minimum order quantity?",
        content:
            "Our minimum order requirements vary by product type. Contact us for details tailored to your needs.",
    },
    {
        title: "What assurance do you provide for product quality?",
        content:
            "Every product undergoes rigorous quality checks to ensure you receive nothing but the best.",
    },
];

const blogData = [
    {
        id: "blog-1",
        image: "/assets/blog card/Pressed Wool Felt.png",
        time: 5,
        category: "Technology",
        title: "Woolen Felts & Industrial Felts: The Perfect Blend of Tradition and Innovation",
        content:
            "Woolen felts have been a staple material for centuries, offering durability, flexibility, and eco-friendliness. In recent years, industrial felts have expanded their use across various sectors, enhancing manufacturing processes and product efficiency.",
    },
    {
        id: "blog-2",
        image: "/assets/blog card/Industrial Felt Manufacturing.png",
        time: 8,
        category: "Felt",
        title: "The Timeless Appeal of Woolen Felts: A Versatile and Sustainable Choice",
        content:
            "Celebrated for their durability, sustainability, and versatility, woolen felts play a vital role in both fashion and industrial applications.",
    },
    {
        id: "blog-3",
        image: "/assets/blog card/Felt Component for Industry.png",
        time: 6,
        category: "Design",
        title: "Wool Felt: Redefining Sustainability, Comfort, and Acoustics in Modern Interiors",
        content:
            "Wool felt from Feline Fabrics: the perfect choice for sustainability, quality, and acoustics. If you are looking for sustainable and high-quality fabrics for your next project, wool felt from Feline Fabrics is an excellent choice.",
    },
];

const blogPosts = [
    {
        image: "/assets/blog carousel/1 Mixing.png",
        title: "Mixing",
        description:
            "Fuelled felt consists solely of animal hairs or sheep wool that is also used to produce traditional wool felt. Animal hairs or sheep wool of various wool grades are combined to create a homogeneous mixture. These mixtures are then blown into bunkers or storage chambers and stored there.",
    },
    {
        image: "/assets/blog carousel/2 Felting.png",
        title: "Felting",
        description:
            "The pre-processed fleece materials are felted in a felting machine in the presence of moisture, heat and pressure, and under the action of circular movements. The fibres become matted due to the intertwining of the overlapping scales on their surfaces. A coherent material is formed – this is felt!",
    },
    {
        image: "/assets/blog carousel/3 Fulling.png",
        title: "Fulling",
        description:
            "This is followed by the fulling step, with compression and hammering in various directions. The felted material is kneaded thoroughly here by passing it through a number of pairs of rollers that are operated under pressure. This continues the felting process. Here too, warm water is added in order to speed up the fulling process. Particular attention is paid to the thickness, width and length of the felt in this process step.",
    },
    {
        image: "/assets/blog carousel/4 Natural Drying Process.png",
        title: "Natural Drying Process",
        description:
            "The pre-processed fleece materials are felted in a felting machine in the presence of moisture, heat and pressure, and under the action of circular movements. The fibres become matted due to the intertwining of the overlapping scales on their surfaces. A coherent material is formed – this is felt!",
    },
    {
        image: "/assets/blog carousel/5 Finishing & Despatch.png",
        title: "Finishing & Despatch",
        description:
            "After the fulling process is complete, the felt is again washed and spun, and then dried in drying rooms in sheet form or in drying furnaces in bale form. Drying can take up to several days in the case of very thick sheets (thicknesses above 100 mm). Depending on the client’s wishes, the felt can then be shaved, ground or ironed in a press to ensure a smooth surface finish.",
    },
];

const dynBlog = [
    {
        id: "blog-1",
        title: "Woolen Felts & Industrial Felts: The Perfect Blend of Tradition and Innovation",
        image: "/assets/blog card/Pressed Wool Felt.png", // update with your actual image path
        excerpt:
            "Woolen felts have been a staple material for centuries, offering durability, flexibility, and eco-friendliness. In recent years, industrial felts have expanded their use across various sectors, enhancing manufacturing processes and product efficiency.",
        content: `
Woolen felts have been a staple material for centuries, offering durability, flexibility, and eco-friendliness. In recent years, industrial felts have expanded their use across various sectors, enhancing manufacturing processes and product efficiency. Whether in fashion, home décor, or industrial applications, felts remain a crucial component in numerous industries.  
  
Let’s explore the unique characteristics, benefits, and diverse applications of woolen and industrial felts.

<br>
 
## What are Woolen and Industrial Felts?

**Woolen Felt**

Woolen felt is a non-woven fabric created by matting, condensing, and pressing wool fibers together. Unlike woven textiles, it has no warp or weft, making it exceptionally strong and resistant to fraying. It is widely used in fashion, décor, and craft applications.

**Industrial Felt**

Industrial felt is a specialized type of felt designed for heavy-duty applications in manufacturing, engineering, and production. Made from high-quality wool or synthetic fibers, industrial felt is engineered to withstand pressure, friction, and extreme temperatures, making it ideal for machinery, filtration, and sealing solutions.

<br>
 
## Key Benefits of Woolen and Industrial Felts

**1. Durability and Strength**  

   Both woolen and industrial felts are known for their resilience. Their dense structure ensures longevity, making them ideal for applications that require wear resistance.
  
**2. Eco-Friendly and Sustainable**  

   Woolen felt is a biodegradable, renewable material, reducing environmental impact. Industrial felts made from natural fibers also support sustainability by offering long-lasting performance without excessive waste.
  
**3. Thermal and Acoustic Insulation**  

   Wool naturally regulates temperature and absorbs sound, making woolen and industrial felts valuable for insulation in buildings, vehicles, and machinery.
  
**4. Moisture and Fire Resistance**  

   Woolen felts repel moisture and resist flames naturally, making them safe for both home and industrial environments.
  
**5. Versatility and Customization**  

   Available in various densities, thicknesses, and compositions, woolen and industrial felts can be customized to meet the specific needs of different industries.

<br>
 
## Common Applications of Woolen and Industrial Felts

**Fashion and Accessories**  

Woolen felts are used in hats, bags, shoes, and apparel, offering a stylish and soft texture for designers and brands.

**Home Décor and Furnishings**  

Felt rugs, cushions, acoustic panels, and furniture protectors enhance aesthetics and functionality in interior spaces.

**Automotive and Mechanical Engineering**  

Industrial felts are widely used in vehicle interiors for insulation, vibration damping, and sealing gaskets. They also serve as lubrication pads in machinery.

**Filtration and Sealing Solutions**  

Industrial felt is used in air, liquid, and gas filtration systems, helping industries maintain clean operations. Its sealing properties prevent leakage in mechanical components.

**Printing and Paper Industries**  

Industrial felts are crucial in paper manufacturing and textile printing, ensuring smooth operations by supporting high-speed printing processes.

<br>
 
## Why Choose Woolen and Industrial Felts?

With their combination of sustainability, durability, and versatility, woolen and industrial felts remain a preferred choice across industries. Whether you need a stylish accessory, effective insulation, or a high-performance industrial solution, felt materials offer unmatched benefits. If you’re looking for premium-quality woolen or industrial felts, explore our collection and find the perfect solution for your needs.  
  
Contact us today to learn more!
      `,
    },
    {
        id: "blog-2",
        title: "The Timeless Appeal of Woolen Felts: A Versatile and Sustainable Choice",
        image: "/assets/blog card/Industrial Felt Manufacturing.png", // update with your actual image path
        excerpt:
            "Celebrated for their durability, sustainability, and versatility, woolen felts play a vital role in both fashion and industrial applications.",
        content: `
Woolen felts have been an essential material for centuries, known for their durability, softness, and versatility. From fashion to industrial applications, this eco-friendly textile continues to play a crucial role in various industries. But what makes woolen felts so special? Let’s explore their unique characteristics, benefits, and uses. 

<br>
 
## What is Woolen Felt?

Woolen felt is a non-woven fabric made by matting, condensing, and pressing wool fibers together. Unlike woven textiles, felt does not have a warp and weft structure, making it highly adaptable and resistant to fraying. The natural felting process enhances wool’s inherent properties, resulting in a strong yet flexible fabric.

<br>
 
## Key Benefits of Woolen Felts

**1. Durability and Longevity**  

   Woolen felt is incredibly resilient, capable of withstanding wear and tear over time.    Its dense structure makes it resistant to stretching and deformation, ensuring that products made from felt last for years.

**2. Eco-Friendly and Sustainable**  

   As a biodegradable and renewable material, woolen felt is an environmentally friendly choice.    Wool is naturally produced by sheep, and when sourced responsibly, it has minimal environmental impact.

**3. Insulating and Soundproofing Properties**  

   Wool is known for its excellent thermal insulation, keeping warmth in during cold weather.    Additionally, its sound-absorbing qualities make it ideal for acoustic panels in homes and workplaces.

**4. Water and Fire Resistance**  

   Wool fibers have a natural resistance to water and fire, making woolen felt a safer and more durable alternative to synthetic materials.

**5. Versatile and Customizable**  

   Available in various thicknesses, densities, and colors, woolen felt is highly versatile.    It can be cut, sewn, or molded into different shapes, making it suitable for a wide range of applications.

<br>
 
## Common Uses of Woolen Felts

**Fashion and Accessories**  

Woolen felt is a favorite in the fashion industry for crafting hats, bags, shoes, and even clothing. Its soft texture and rich color options make it a stylish choice for designers.

**Home Décor and Furnishings**  

From felt rugs and cushions to wall panels and coasters, woolen felt enhances interior spaces with both aesthetic appeal and functional benefits like sound absorption and insulation.

**Industrial and Technical Applications**  

Woolen felts are used in machinery, automotive parts, and filtration systems due to their durability and ability to withstand heavy usage.

**Arts and Crafts**  

Crafters and artists love working with woolen felt due to its ease of handling and ability to hold intricate shapes. It’s perfect for making decorations, toys, and DIY projects.

<br>
 
## Why Choose Woolen Felt?

If you’re looking for a material that combines sustainability, durability, and aesthetic appeal, woolen felt is an excellent choice. Whether used in fashion, home décor, or industrial applications, its versatility and eco-friendliness make it a valuable addition to various industries.

As consumer preferences shift towards sustainable materials, woolen felt stands out as a timeless and responsible choice. Whether you’re a designer, a business owner, or a DIY enthusiast, incorporating woolen felt into your projects can provide both style and function while supporting a greener future.
      `,
    },
    {
        id: "blog-3",
        title: "Wool Felt: Redefining Sustainability, Comfort, and Acoustics in Modern Interiors",
        image: "/assets/blog card/Felt Component for Industry.png", // update with your actual image path
        excerpt:
            "Wool felt from Feline Fabrics: the perfect choice for sustainability, quality, and acoustics. If you are looking for sustainable and high-quality fabrics for your next project, wool felt from Feline Fabrics is an excellent choice.",
        content: `

## Wool felt from Feline Fabrics: the perfect choice for sustainability, quality, and acoustics.

If you are looking for sustainable and high-quality fabrics for your next project, wool felt from Feline Fabrics is an excellent choice. This versatile material is made from natural wool and offers a wide range of benefits, including durability, warmth, and a luxurious look.

At Feline Fabrics, we value sustainability and quality, which is reflected in our products. Our wool felt is made from the highest quality wool and is produced using eco-friendly processes. This ensures that you get a product that is not only beautiful but also friendly to the environment.

Feline Fabrics’ wool felt is available in a wide range of colors and thicknesses, giving you complete freedom to unleash your creativity. Whether you’re looking for a soft and subtle shade or a striking color that really stands out, you’ll find it all with us. Additionally, our wool felt fabrics are available in different thicknesses, from thin and flexible fabrics to sturdier options that are perfect for creating acoustic screens and acoustic designs.

<br>

## Wool felt and well-being

Wool felt is not only durable and stylish, but it also offers numerous benefits for health and well-being. Wool is naturally moisture-regulating and temperature-regulating, which means it keeps you warm in winter and cool in summer. Moreover, wool felt is naturally hypoallergenic and antimicrobial, making it perfect for people with allergies and sensitive skin.

At Feline Fabrics, we believe it’s important to deliver products that are not only beautiful but also functional and sustainable. Our wool felt is an excellent example of this philosophy, and we take pride in providing our customers with the highest quality fabrics on the market. Whether you’re a beginner or an experienced craftsman, our wool felt is the perfect choice for all your projects.

So if you’re looking for high-quality wool felt fabrics, take a look at our range and discover the many benefits of Feline Fabrics.  

We are confident that you’ll fall in love with our beautiful collection of wool felt.

<br>

## Wool felt, the sustainable choice

Wool felt is not only a beautiful fabric to use in interior design, but it’s also a sustainable choice that contributes to a greener future. Below, we delve deeper into the benefits of wool felt as a sustainable interior fabric.

Wool felt is made from natural fibers and is therefore a renewable resource. The material is produced by washing and combing sheep’s wool, and then pressing it together under pressure and heat. This creates a sturdy and durable material that is suitable for various applications in interior design.

Wool felt production doesn’t involve the use of harmful substances or chemicals, making the process less taxing on the environment than the production of synthetic materials, for example.  
Additionally, wool felt is biodegradable, which means that at the end of its lifespan, it can decompose without harming the environment.

Another advantage of wool felt as a sustainable interior fabric is its long lifespan. Wool felt is naturally strong and durable, which means it lasts longer and doesn’t need to be replaced as often. This reduces the burden on the environment and leads to less waste.

<br>

## Wool felt and energy conservation

Wool felt also has excellent insulation properties, making it a contributor to energy conservation in the home. Using wool felt in curtains or upholstery, for example, can retain heat better and result in energy cost savings.

In summary, wool felt is a sustainable choice for interior design. The material is renewable, biodegradable, durable, and has excellent insulating properties. At Feline Fabrics, we have a wide selection of high-quality wool felt fabrics suitable for various applications in interior design.

<br>

## Wool felt and interior design

Wool felt is not only a fantastic choice for crafting projects, but it can also be a striking addition to your interior. Wool felt is available in a wide range of colors and textures, making it perfect for adding warmth and texture to your space.

Wool felt can also be used for wall decor and acoustic panels. Wool felt naturally has sound-absorbing properties, making it perfect for creating a calm and serene environment. Additionally, wool felt can be used as a background for photo frames or as wall covering for a unique and eye-catching look.

Another advantage of using wool felt in interior design is that it is a sustainable and environmentally friendly choice. Wool is a natural material that is biodegradable and has less impact on the environment than synthetic materials. Using wool felt in your interior design can help reduce your ecological footprint.

Whether you have a modern, minimalist interior or prefer a more bohemian style, wool felt is a versatile material that easily adapts to any style. At Feline Fabrics, we have a wide range of high uality wool felt fabrics that are perfect for any interior design.

So if you are looking for a unique and sustainable material for your interior projects, definitely consider wool felt from Feline Fabrics. With our high-quality and extensive color palette, you are sure to find a fabric that fits your interior design.

<br>

## Wool felt and acoustics

Natural materials are becoming increasingly popular in interior design due to their versatility and environmentally friendly properties. Wool felt is a material that has gained a lot of attention in recent years due to its unique acoustic properties. Below, we delve deeper into wool felt and its effects on acoustics.

It has been scientifically proven that wool felt can improve the acoustics of a space. This is because wool felt naturally absorbs and reduces sound waves, improving the acoustics in a space. This makes wool felt an excellent choice for spaces with a lot of noise, such as offices, restaurants, concert halls, and public buildings.

Wool felt is often used for the production of acoustic panels, which can be easily mounted on the wall and provide effective reduction of reverberation and echoes in a space. These panels are available in various sizes and colors and can be designed to seamlessly fit with any interior design.

<br>

## Renewable resource

Another advantage of wool felt is that it is sustainable and environmentally friendly. Wool is a renewable resource, and felt production does not require harmful chemicals or processes that are harmful to the environment. This makes wool felt an excellent choice for people looking for sustainable and environmentally friendly solutions for their interior design.

In short, wool felt is a versatile and environmentally friendly material that can improve the acoustics of a space. It is a great choice for interior designers looking for sustainable and effective solutions for their projects. If you are interested in wool felt for your interior design or acoustic solutions, be sure to check out our range of wool felt fabrics at Feline Fabrics.

<br>

## Wool felt and sound absorption

An important advantage of wool felt is that it naturally absorbs and reduces sound. This is because the material has a fiber structure that can absorb and dampen sound waves. This reduces reverberation and echo in a space, reducing the sound level and improving the acoustics.

Another advantage of wool felt is that it also contributes to the air quality in a space. Wool is a natural material that is naturally moisture-regulating and can regulate humidity. This creates a healthier and more comfortable indoor climate, which is especially important in spaces where many people come together.

Wool felt also has an aesthetic value in interior design. The material has a unique texture and appearance that creates a warm and cozy atmosphere in a space. This makes wool felt an excellent choice for creating a cozy and comfortable ambiance in homes, restaurants, hotels, and other public buildings.

<br>

## So many possibilities

Finally, wool felt is a sustainable choice for interior design. Wool is a renewable resource, and the production process of wool felt is less environmentally damaging than, for example, the use of synthetic materials. This means that by using wool felt, you are contributing to a sustainable future.

In summary, wool felt is a versatile material that offers both aesthetic and practical benefits for interior design and acoustics. At Feline Fabrics, we have a wide selection of high-quality wool felt fabrics that are suitable for various projects and applications. Please feel free to contact us if you would like to learn more about the possibilities of wool felt for your project.
`,
    },
];

document.addEventListener("DOMContentLoaded", () => {
    // Initialize all modules
    initNavBar();
    initCategoriesCards();
    initAccordion();
    initBlogCards();
    initGetDirections();
    initCarousel();
    injectCSS();
});

// ---------------------------
// NavBar Dropdown and Mobile Menu Toggle
// ---------------------------
function initNavBar() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navItems = document.querySelector(".nav-items");

    if (dropdown) {
        dropdown.addEventListener("click", (e) => {
            // If the clicked element is inside an anchor, let the anchor handle navigation
            if (e.target.closest("a")) return;
            e.stopPropagation();
            if (dropdownMenu) dropdownMenu.classList.toggle("active");
            dropdown.classList.toggle("active");
        });
    }

    document.addEventListener("click", () => {
        if (dropdownMenu) dropdownMenu.classList.remove("active");
        if (dropdown) dropdown.classList.remove("active");
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("active");
            if (navItems) navItems.classList.toggle("active");
        });
    }

    if (dropdownMenu) {
        dropdownMenu.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }

    // When clicking an anchor with href="#" close the menu
    document.querySelectorAll('a[href="#"]').forEach((anchor) => {
        anchor.addEventListener("click", () => {
            if (navItems) navItems.classList.remove("active");
            if (dropdownMenu) dropdownMenu.classList.remove("active");
            if (dropdown) dropdown.classList.remove("active");
        });
    });
}

// ---------------------------
// Categories Cards
// ---------------------------
function initCategoriesCards() {
    const gridContainer = document.getElementById("gridContainer");
    const cardTemplateEl = document.getElementById("cardTemplate");

    if (typeof categories !== "undefined" && Array.isArray(categories)) {
        // Update dropdown menu if available
        const dropdownMenu = document.querySelector(".dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.innerHTML = "";
            categories.forEach((category) => {
                const link = document.createElement("a");
                link.href = "#";
                link.classList.add("dropdown-item");
                link.style.pointerEvents = "none";

                const textSpan = document.createElement("span");
                textSpan.textContent = category.name;
                textSpan.style.pointerEvents = "auto";
                textSpan.style.cursor = "pointer";
                textSpan.addEventListener("click", (e) => {
                    e.stopPropagation();
                    window.location.href = `category.html?id=${category.id}`;
                });

                link.appendChild(textSpan);
                dropdownMenu.appendChild(link);
            });
        }

        // Create category cards if container elements exist
        if (gridContainer && cardTemplateEl) {
            const cardTemplate = cardTemplateEl.content;
            categories.forEach((category) => {
                const card = document.importNode(cardTemplate, true);
                const productNameEl = card.querySelector(".product-name");
                const productDescEl = card.querySelector(
                    ".product-description"
                );
                const productImageEl = card.querySelector(".product-image");
                const button = card.querySelector(".product-btn");

                if (productNameEl) productNameEl.textContent = category.name;
                if (productDescEl)
                    productDescEl.textContent = category.description;
                if (productImageEl) productImageEl.src = category.image;

                if (button) {
                    button.setAttribute("data-id", category.id);
                    button.addEventListener("click", () => {
                        window.location.href = `category.html?id=${category.id}`;
                    });
                }
                gridContainer.appendChild(card);
            });
        }
    } else {
        console.warn("Categories data is not available.");
    }
}

// ---------------------------
// Accordion
// ---------------------------
function initAccordion() {
    const accordionContainer = document.querySelector(".accordion");
    if (!accordionContainer) return;

    if (typeof accordionData === "undefined" || !Array.isArray(accordionData)) {
        console.warn("Accordion data is not available.");
        return;
    }

    accordionData.forEach((item) => {
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";
        accordionItem.innerHTML = `
      <button class="accordion-header">
        <span>${item.title}</span>
        <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-content">
        <p>${item.content}</p>
      </div>
    `;
        accordionContainer.appendChild(accordionItem);
    });

    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        if (header) {
            header.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                accordionItems.forEach((accItem) =>
                    accItem.classList.remove("active")
                );
                if (!isActive) item.classList.add("active");
            });
        }
    });
}

// ---------------------------
// Blog Cards
// ---------------------------
function initBlogCards() {
    const blogContainer = document.getElementById("blog-cards-container");
    if (
        blogContainer &&
        typeof blogData !== "undefined" &&
        Array.isArray(blogData)
    ) {
        createBlogCards(blogData, "blog-cards-container");
    }
}

// Function to create the blog cards dynamically.
function createBlogCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    data.forEach((blog) => {
        const card = document.createElement("article");
        card.className = "blog-card";
        card.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" class="blog-image">
      <div class="meta-info">
        <span class="read-time">${blog.time} min read</span>
        <span class="category-badge">${blog.category}</span>
      </div>
      <h3>${blog.title}</h3>
      <p class="blog-card-content">${blog.content}</p>
      <button class="read-more-btn">Read More</button>
    `;
        const btn = card.querySelector(".read-more-btn");
        if (btn) {
            btn.addEventListener("click", () => {
                // Redirect to the dynamic blog page with the blog id as a URL parameter.
                window.location.href = `ProductBlog.html?id=${blog.id}`;
            });
        }
        container.appendChild(card);
    });
}

// ---------------------------
// Blog Pages
// ---------------------------

// marked.setOptions({
//     gfm: true,
//     smartypants: true,
//     headerIds: true,
//     // If you don't need custom heading rendering, omit the custom renderer entirely.
// });

// Inject custom CSS for blog post detail styling.
// Inject custom CSS for blog post detail styling.
function injectCSS() {
    const style = document.createElement("style");
    style.innerHTML = `
      /* Blog container fills the viewport width with no extra margin or padding, but content is centered */
      #blog-container {
        width: 100%;
        margin: 6rem auto;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      }

      /* Flex container for the blog post details with a 64px gap */
      .blog-post-detail {
        display: flex;
        flex-direction: column;
        gap: 64px;
      }
      
      /* Center the blog title */
      .blog-post-detail h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size:  3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 57.6px */
      }
      
      /* Blog post image styling */
      .blog-post-detail img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        height: 738px;
        border-radius:16px;
        object-fit: cover;
      }
      
      /* Blog content styling */
      .blog-content {
        line-height: 1.6;
      }
      
      .blog-content h2{
        color: var(--brand-green);
        font-family: var(--secondary-font);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 0.5rem;
      }

      .blog-content h3{
        color: var(--brand-green);
        font-family: var(--secondary-font);
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .blog-content p{
        color: var(--accent-color);
        font-family: var(--primary-font);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0.375rem;
      }

      .blog-content p strong{
        color: var(--accent-color);
        font-family: var(--primary-font);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 0.313rem;
      }
      
      .blog-content ol{
        list-style-type: decimal;
      }

      @media (max-width: 480px) {
      #blog-container {
        width: 100%;
        margin: 3rem auto;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      }
        /* Flex container for the blog post */
      .blog-post-detail {
        gap: 48px;
      }

      /* Blog post image styling */
      .blog-post-detail img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        height: 232px;
        border-radius:16px;
        object-fit: cover;
      }
        /* Center the blog title */
      .blog-post-detail h1 {
        text-align: center;
        margin-bottom: 0;
        font-size:  1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 57.6px */
      }

      .blog-content h2{
        color: var(--brand-green);
        font-family: var(--secondary-font);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 0.5rem;
      }

      .blog-content h3{
        color: var(--brand-green);
        font-family: var(--secondary-font);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .blog-content p{
        color: var(--accent-color);
        font-family: var(--primary-font);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0.375rem;
      }

      .blog-content p strong{
        color: var(--accent-color);
        font-family: var(--primary-font);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 0.313rem;
      }
    `;
    document.head.appendChild(style);
}

// Function to render a single blog post using Marked to parse Markdown to HTML.
function renderBlogPost(post) {
    const parsedContent = marked.parse(post.content);
    const blogHTML = `
      <div class="blog-post-detail">
        <h1>${post.title}</h1>
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-content">
          ${parsedContent}
        </div>
      </div>
    `;
    blogContainer.innerHTML = blogHTML;
}

// Retrieve the blog id from the URL (e.g., blog.html?id=blog-1)
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get("id");

// Get the container element where the blog post will be rendered.
const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
    if (blogId) {
        const post = dynBlog.find((p) => p.id === blogId);
        if (post) {
            renderBlogPost(post);
        } else {
            blogContainer.innerHTML = `<h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for does not exist. <a href="blog.html">Go back to the blog list</a></p>`;
        }
    } else {
        // Default: Render the first blog post if no id is provided.
        renderBlogPost(dynBlog[0]);
    }
}

// ---------------------------
// Get Directions Button Handler
// ---------------------------
function initGetDirections() {
    document.querySelectorAll(".get-directions-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const address = this.previousElementSibling.textContent;
            const formattedAddress = address
                .replace(/\n/g, ", ")
                .replace(/\s+/g, "+")
                .trim();
            window.open(
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    formattedAddress
                )}`,
                "_blank"
            );
        });
    });
}

// ---------------------------
// Carousel Handler with Progress Bar and Transition Lock
// ---------------------------
function initCarousel() {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselTrackInner = document.querySelector(".carousel-track-inner");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (
        !(
            carouselContainer &&
            carouselTrack &&
            carouselTrackInner &&
            prevBtn &&
            nextBtn &&
            typeof blogPosts !== "undefined" &&
            Array.isArray(blogPosts) &&
            blogPosts.length > 0
        )
    ) {
        console.warn("Carousel elements or blogPosts data not available.");
        return;
    }

    // Create or re-use the progress bar
    let progressBar = document.querySelector(".progress-bar");
    if (!progressBar) {
        progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.pointerEvents = "none";
        carouselContainer.appendChild(progressBar);
    }

    const slideDuration = 5000; // 5 seconds per slide
    let progressStartTime = null;
    let progressPausedAt = 0;
    let progressAnimationFrame;
    let isTransitioning = false;
    let isPaused = false; // flag to track hover state

    // This function drives the progress bar. When it reaches 100%,
    // it automatically advances the slide.
    function updateProgressBar(timestamp) {
        if (!progressStartTime) {
            progressStartTime = timestamp - progressPausedAt;
        }
        const elapsed = timestamp - progressStartTime;
        const progressPercent = Math.min((elapsed / slideDuration) * 100, 100);
        progressBar.style.width = progressPercent + "%";
        if (progressPercent < 100) {
            progressAnimationFrame = requestAnimationFrame(updateProgressBar);
        } else {
            // When 100% is reached, trigger the next slide if not paused.
            if (!isPaused) {
                triggerNextSlide();
            }
        }
    }

    function startProgressBar() {
        cancelAnimationFrame(progressAnimationFrame);
        progressStartTime = null;
        progressPausedAt = 0;
        progressBar.style.width = "0%";
        progressAnimationFrame = requestAnimationFrame(updateProgressBar);
    }

    function pauseProgressBar() {
        cancelAnimationFrame(progressAnimationFrame);
        progressPausedAt = performance.now() - progressStartTime;
    }

    function resumeProgressBar() {
        progressAnimationFrame = requestAnimationFrame((timestamp) => {
            progressStartTime = timestamp - progressPausedAt;
            updateProgressBar(timestamp);
        });
    }

    // Create carousel cards if not already created
    if (!carouselTrackInner.querySelectorAll(".blog-carousel-card").length) {
        blogPosts.forEach((post) => {
            const blogCard = document.createElement("div");
            blogCard.className = "blog-carousel-card";
            blogCard.innerHTML = `
        <div class="carousel-content">
          <img src="${post.image}" alt="${post.title}" />
          <div class="carousel-description">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
          </div>
        </div>
      `;
            carouselTrackInner.appendChild(blogCard);
        });
    }

    // Clone first and last slides for infinite scrolling (if not already cloned)
    let slides = document.querySelectorAll(".blog-carousel-card");
    if (slides.length && !carouselTrackInner.dataset.cloned) {
        const firstSlide = slides[0];
        const lastSlide = slides[slides.length - 1];
        const firstClone = firstSlide.cloneNode(true);
        const lastClone = lastSlide.cloneNode(true);

        carouselTrackInner.appendChild(firstClone);
        carouselTrackInner.insertBefore(lastClone, firstSlide);

        // Mark as cloned so we don't duplicate clones
        carouselTrackInner.dataset.cloned = "true";
    }

    // Update slides collection after cloning
    slides = document.querySelectorAll(".blog-carousel-card");

    // Set starting index (1 because of the clone at the beginning)
    let currentIndex = 1;
    const totalSlides = blogPosts.length;
    carouselTrackInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    function updateCarousel() {
        if (isTransitioning) return;
        isTransitioning = true;
        carouselTrackInner.style.transition = "transform 0.5s ease";
        carouselTrackInner.style.transform = `translateX(-${
            currentIndex * 100
        }%)`;
        startProgressBar();
    }

    function triggerNextSlide() {
        if (isTransitioning) return;
        currentIndex++;
        updateCarousel();
    }

    prevBtn.addEventListener("click", () => {
        if (isTransitioning) return;
        currentIndex--;
        updateCarousel();
    });
    nextBtn.addEventListener("click", () => {
        if (isTransitioning) return;
        currentIndex++;
        updateCarousel();
    });

    carouselTrackInner.addEventListener("transitionend", () => {
        isTransitioning = false;
        if (currentIndex === 0) {
            carouselTrackInner.style.transition = "none";
            currentIndex = totalSlides;
            carouselTrackInner.style.transform = `translateX(-${
                currentIndex * 100
            }%)`;
        } else if (currentIndex === totalSlides + 1) {
            carouselTrackInner.style.transition = "none";
            currentIndex = 1;
            carouselTrackInner.style.transform = `translateX(-${
                currentIndex * 100
            }%)`;
        }
    });

    // Remove the separate auto scroll timer.
    // Instead, we now use the progress bar completion to drive slide transitions.
    carouselTrack.addEventListener("mouseenter", () => {
        isPaused = true;
        pauseProgressBar();
    });
    carouselTrack.addEventListener("mouseleave", () => {
        isPaused = false;
        resumeProgressBar();
    });

    startProgressBar();
}

// =================== EmailJS Script ==================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    if (!form) {
        console.error("Error: Form element not found!");
        return;
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Form submitted, sending email...");

        const templateParams = {
            name: document.getElementById("name")
                ? document.getElementById("name").value
                : "",
            email: document.getElementById("email")
                ? document.getElementById("email").value
                : "",
            contact_no: document.getElementById("contact_no")
                ? document.getElementById("contact_no").value
                : "",
            message: document.getElementById("message")
                ? document.getElementById("message").value
                : "",
        };

        console.log("Template Params:", templateParams);

        const serviceID = "service_40hdqnt";
        const templateID = "template_appewqk";

        emailjs
            .send(serviceID, templateID, templateParams)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Your message was sent successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Error: " + JSON.stringify(error));
            });
    });
});
