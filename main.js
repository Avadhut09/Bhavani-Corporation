const categories = [
    {
        id: "industrial-felt",
        name: "Industrial Felt",
        description:
            "Durable, versatile, and designed to withstand industrial demands",
        image: "./assets/categories img/Industrial Felt.png",
    },
    {
        id: "engineering-felt",
        name: "Engineering Felt",
        description:
            "Engineering Felt refers to specialized felt materials used in industrial and engineering applications.",
        image: "./assets/categories img/Engineering Felt.png",
    },
    {
        id: "felt-rolls-sheets",
        name: "Pressed Wool Felt Rolls & Sheets",
        description:
            "Premium, tightly compressed wool felt available in rolls and sheets",
        image: "./assets/categories img/Pressed Wool Felt Rolls & Sheets.png",
    },
    {
        id: "carbonised-felt",
        name: "Carbonised Felt",
        description:
            "Highly durable carbonised felt ideal for extreme conditions",
        image: "./assets/categories img/Carbonized Felt.png",
    },
    {
        id: "color-felt",
        name: "Color Felt",
        description:
            "High-quality, vibrant felt sheets available in a variety of shades",
        image: "./assets/categories img/Color Felt.png",
    },
    {
        id: "felt-wheels",
        name: "Felt Wheels",
        description:
            "Precision-engineered felt wheels for grinding, polishing, & finishing",
        image: "./assets/categories img/Felt Wheels.png",
    },
    {
        id: "needle-punch-felt",
        name: "Needle Punch Felt",
        description:
            "Durable fabric created by mechanically interlocking fibers using a needling process, rather than weaving or knitting",
        image: "./assets/categories img/Needle Punch Felt.png",
    },
    {
        id: "polishing-felt",
        name: "Polishing Felt",
        description:
            "Dense, fine micron wool felt ideal for final polishing of metals, composites, and delicate surfaces",
        image: "./assets/categories img/Polishing Felt.png",
    },
    {
        id: "felt-cords",
        name: "Felt Cords",
        description:
            "Flexible, strong felt cords for sealing and insulation purposes",
        image: "./assets/categories img/Felt Cord.png",
    },
    {
        id: "felt-components",
        name: "Felt Cut Parts",
        description:
            "Precision-crafted felt components for industrial and creative use",
        image: "./assets/categories img/Felt Components.png",
    },
    {
        id: "felt-rollers-tubes",
        name: "Felt Rollers & Tubes",
        description:
            "High-performance felt rollers and tubes designed for diverse uses",
        image: "./assets/categories img/Felt Roller & Tubes.png",
    },
    {
        id: "jewellery-polishing-felt",
        name: "Jewellery Polishing Felts",
        description:
            "Felt specially designed for polishing and maintaining jewelry items",
        image: "./assets/categories img/Jewellery Polishing Felt.png",
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
        image: "./assets/blog card/Pressed Wool Felt.png",
        time: 5,
        category: "Technology",
        title: "Woolen Felts & Industrial Felts: The Perfect Blend of Tradition and Innovation",
        content:
            "Woolen felts have been a staple material for centuries, offering durability, flexibility, and eco-friendliness. In recent years, industrial felts have expanded their use across various sectors, enhancing manufacturing processes and product efficiency.",
    },
    {
        id: "blog-2",
        image: "./assets/blog card/Industrial Felt Manufacturing.png",
        time: 8,
        category: "Felt",
        title: "The Timeless Appeal of Woolen Felts: A Versatile and Sustainable Choice",
        content:
            "Celebrated for their durability, sustainability, and versatility, woolen felts play a vital role in both fashion and industrial applications.",
    },
    {
        id: "blog-3",
        image: "./assets/blog card/Blog-3.png",
        time: 6,
        category: "Design",
        title: "Wool Felt: Redefining Sustainability, Comfort, and Acoustics in Modern Interiors",
        content:
            "Wool felt from Feline Fabrics: the perfect choice for sustainability, quality, and acoustics. If you are looking for sustainable and high-quality fabrics for your next project, wool felt from Feline Fabrics is an excellent choice.",
    },
];

const blogPosts = [
    {
        image: "./assets/blog carousel/1 Mixing.png",
        title: "Mixing",
        description:
            "Fuelled felt consists solely of animal hairs or sheep wool that is also used to produce traditional wool felt. Animal hairs or sheep wool of various wool grades are combined to create a homogeneous mixture. These mixtures are then blown into bunkers or storage chambers and stored there.",
    },
    {
        image: "./assets/blog carousel/2 Felting.png",
        title: "Felting",
        description:
            "The pre-processed fleece materials are felted in a felting machine in the presence of moisture, heat and pressure, and under the action of circular movements. The fibres become matted due to the intertwining of the overlapping scales on their surfaces. A coherent material is formed – this is felt!",
    },
    {
        image: "./assets/blog carousel/3 Fulling.png",
        title: "Fulling",
        description:
            "This is followed by the fulling step, with compression and hammering in various directions. The felted material is kneaded thoroughly here by passing it through a number of pairs of rollers that are operated under pressure. This continues the felting process. Here too, warm water is added in order to speed up the fulling process. Particular attention is paid to the thickness, width and length of the felt in this process step.",
    },
    {
        image: "./assets/blog carousel/4 Natural Drying Process.png",
        title: "Natural Drying Process",
        description:
            "The pre-processed fleece materials are felted in a felting machine in the presence of moisture, heat and pressure, and under the action of circular movements. The fibres become matted due to the intertwining of the overlapping scales on their surfaces. A coherent material is formed – this is felt!",
    },
    {
        image: "./assets/blog carousel/5 Finishing & Despatch.png",
        title: "Finishing & Despatch",
        description:
            "After the fulling process is complete, the felt is again washed and spun, and then dried in drying rooms in sheet form or in drying furnaces in bale form. Drying can take up to several days in the case of very thick sheets (thicknesses above 100 mm). Depending on the client’s wishes, the felt can then be shaved, ground or ironed in a press to ensure a smooth surface finish.",
    },
];

const dynBlog = [
    {
        id: "blog-1",
        title: "Woolen Felts & Industrial Felts: The Perfect Blend of Tradition and Innovation",
        image: "./assets/blog card/Pressed Wool Felt.png",
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
        image: "./assets/blog card/Industrial Felt Manufacturing.png",
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
        image: "./assets/blog card/Blog-3.png",
        excerpt:
            "Wool felt from Feline Fabrics: the perfect choice for sustainability, quality, and acoustics. If you are looking for sustainable and high-quality fabrics for your next project, wool felt from Feline Fabrics is an excellent choice.",
        content: `

## Wool Felt from Feline Fabrics: The Perfect Choice for Sustainability, Quality, and Acoustics

Wool felt, a timeless fabric crafted from natural sheep’s wool, is making a comeback in modern interior design. Its blend of sustainability, comfort, and acoustic properties makes it a top choice for eco-conscious homeowners and designers. Feline Fabrics, a leader in premium wool felt, provides products that enhance both the beauty and functionality of living spaces.

<br>
 
## Sustainability

Sustainability lies at the heart of wool felt’s appeal. Wool is a renewable resource, harvested yearly from sheep without harm. The production process uses minimal resources—just water and soap to mat the fibers—avoiding harsh chemicals. Plus, wool is biodegradable, naturally breaking down at the end of its life, reducing environmental waste.

Feline Fabrics elevates this sustainability by sourcing wool from ethically raised sheep and using green manufacturing methods. Their wool felt meets strict environmental certifications, ensuring every production step is planet-friendly. Choosing Feline Fabrics means supporting a brand dedicated to ecological responsibility.

<br>
 
## Comfort

Wool felt stands out for its incredible comfort. The natural crimps in wool fibers trap air, offering insulation that keeps spaces warm in winter and cool in summer. Its soft texture feels inviting, ideal for cozy interiors. Wool also regulates humidity by absorbing and releasing moisture, enhancing indoor comfort.

In design, wool felt brings comfort to life in various ways. Furniture upholstered with it gains a warm, soft touch, while felt wall coverings or tapestries insulate and quiet rooms. Even small accents like cushions or throws add a snug, welcoming vibe to any space.

<br>
 
## Acoustics

Wool felt’s acoustic benefits are a game-changer. Its dense, fibrous makeup absorbs sound waves, cutting down on echoes and noise. This makes it perfect for improving sound quality in busy offices or tranquil homes, creating calmer, more focused environments with ease.

Feline Fabrics offers wool felt products tailored for acoustics, like stylish panels in diverse colors and designs. These can be installed on walls or ceilings to dampen noise while elevating decor. Felt room dividers also blend privacy with sound control in open layouts.

<br>
 
## Conclusion

Wool felt from Feline Fabrics is a versatile solution for modern interiors, merging sustainability, comfort, and acoustics seamlessly. It meets the needs of today’s designers and homeowners seeking eco-friendly, functional beauty. Discover their collection to transform your space with this remarkable fabric.
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

      @media (max-width: 768px) {
        #blog-container{
            margin: 4rem auto;
        }
        .blog-post-detail {
        gap: 48px;
      }

      /* Blog post image styling */

        .blog-post-detail img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        height: 400px;
        border-radius:16px;
        object-fit: cover;
      }
        /* Center the blog title */
      .blog-post-detail h1 {
        text-align: center;
        margin-bottom: 0;
        font-size:  2rem;
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

        const serviceID = "service_9mpflge";
        const templateID = "template_znl9vv3";

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

document.addEventListener("DOMContentLoaded", () => {
    // Create the floating WhatsApp button anchor element
    const whatsappBtn = document.createElement("a");
    whatsappBtn.href =
        "https://api.whatsapp.com/send?phone=7039600205&text=Hello%2C%20I%20would%20like%20to%20chat%20about%20your%20services!";
    whatsappBtn.target = "_blank";
    whatsappBtn.setAttribute("aria-label", "Chat with us on WhatsApp");
    whatsappBtn.className = "whatsapp-float";

    // Insert inline SVG code for the WhatsApp icon
    whatsappBtn.innerHTML = `<img src="./assets/WhatsApp.svg" alt="WhatsApp icon" class="whatsapp-icon" />`;

    document.body.appendChild(whatsappBtn);

    // Create and inject CSS styles for the floating button
    const style = document.createElement("style");
    style.innerHTML = `
    .whatsapp-float {
      position: fixed;
      width: 48px;
      height: 48px;
      bottom: 40px;
      right: 40px;
      background-color:rgb(255, 255, 255);
      color: #fff;
      border-radius: 50%;
      text-align: center;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      transition: transform 0.3s ease, background-color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .whatsapp-float:hover {
      background-color:rgb(255, 255, 255);
      transform: scale(1.1);
    }
    .whatsapp-icon {
      width: 32px;
      height: 32px;
    }

    /* Tablet styles */
    @media (max-width: 1024px) {
      .whatsapp-float {
        width: 48px;
        height: 48px;
        bottom: 30px;
        right: 30px;
      }
      .whatsapp-icon {
        width: 32px;
        height: 32px;
      }
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
      .whatsapp-float {
        width: 40px;
        height: 40px;
        bottom: 20px;
        right: 10px;
      }
      .whatsapp-icon {
        width: 24px;
        height: 24px;
      }
    }
  `;
    document.head.appendChild(style);
});
