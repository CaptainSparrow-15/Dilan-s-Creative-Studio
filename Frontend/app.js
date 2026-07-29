/* ==========================================================================
   Dilan's Creative Studio - Premium Handcrafted Studio Client Script
   ========================================================================== */

// 1. Static Products Database
// --------------------------------------------------------------------------
// HOW TO ADD YOUR OWN PRODUCTS AND IMAGES:
// 1. Save your new image file inside the "assets" folder.
// 2. Add a new product block inside the PRODUCTS array below.
// 3. Make sure the properties are correctly formatted:
//    - id: A unique number (e.g. 5, 6, 7...)
//    - name: The title of the product
//    - category: Choose one of: "rakhi", "candle", "crochet", "stationery"
//    - price: Price in Rupees (number)
//    - rating: Rating out of 5 (e.g. 4.8)
//    - reviewsCount: Number of reviews (number)
//    - image: The path to your image (e.g. "assets/lavender_candle.png")
//    - badge: Optional badge like "Bestseller", "New Launch" (leave empty string "" if none)
//    - description: Full product description
//    - materials: Array of bullet points for materials list
//    - size: Size descriptor string
//    - shipping: Shipping timeframe string
// --------------------------------------------------------------------------
let PRODUCTS = [
    {
        "id": 1,
        "name": "Aura Floral Lumba & Rakhi Set",
        "category": "rakhi",
        "price": 280,
        "rating": 5,
        "reviewsCount": 1,
        "image": "assets/rakhi_purple.jpg",
        "badge": "New Arrival",
        "description": "Elevate your festive traditions with our Aura Floral set. Beautifully designed matching brother-sister-in-law pairs (Rakhi & Lumba) featuring crystalline transparent floral centerpieces, premium white pearls, shiny rhinestones, and hand-woven silk ties. Available in 5 stunning colors to match your style.",
        "materials": [
            "Hand-carved Acrylic Florals",
            "Premium Glass Pearls",
            "Rhinestone Cluster Center",
            "Silk Resham Tassels"
        ],
        "size": "Rakhi: Adjustable / Lumba: 6.5\" length",
        "shipping": "Ships within 24 hours",
        "images": {
            "Lavender": "assets/rakhi_purple.jpg",
            "Gold": "assets/rakhi_gold.jpg",
            "White": "assets/rakhi_white.jpg",
            "Coral": "assets/rakhi_coral.jpg",
            "Mint": "assets/rakhi_mint.jpg"
        },
        "colors": [
            "Lavender",
            "Gold",
            "White",
            "Coral",
            "Mint"
        ],
        "variantType": "colors",
        "priceUnit": "each"
    },
    {
        "name": "Couple Rakhi",
        "category": "rakhi",
        "price": 120,
        "image": "assets/couple (6).jpeg",
        "description": "Celebrate the sacred bond of protection and love with this beautiful handcrafted Evil Eye Couple Rakhi Set. Featuring matching thread and bracelet designs embellished with protective evil eye charms, premium beads, and delicate threads. Made with love for the perfect brother-sister pair.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "id": 2,
        "colors": [
            "Couple Rakhi",
            "Couple Rakhi",
            "Couple Rakhi",
            "Couple Rakhi",
            "Couple Rakhi",
            "Couple Rakhi",
            "Couple Rakhi"
        ],
        "images": {
            "Couple Rakhi": "assets/couple (8).jpeg"
        },
        "variantType": "gallery",
        "priceUnit": "each"
    },
    {
        "name": "Couple Rakhi",
        "category": "rakhi",
        "price": 150,
        "image": "assets/Couple 150 (1).jpeg",
        "description": "Celebrate the joy of Raksha Bandhan with this exquisite handcrafted floral Couple Rakhi. Each piece features delicate, translucent flower petals crafted with precision, centered with a premium pearl, and elegantly finished with smooth silk threads and a matching tassel. A truly beautiful and modern take on festive traditions, designed perfectly for a beloved brother and sister-in-law.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Blue",
            "Pink",
            "Purple"
        ],
        "images": {
            "Blue": "assets/Couple 150 (1).jpeg",
            "Pink": "assets/Couple 150 (2).jpeg",
            "Purple": "assets/Couple 150 (3).jpeg"
        },
        "id": 3,
        "priceUnit": "each"
    },
    {
        "name": "Mor Pankh Couple Rakhi",
        "category": "rakhi",
        "price": 180,
        "image": "assets/Mor Pankh.jpeg",
        "description": "Embrace the divine blessings of Lord Krishna this Raksha Bandhan with our beautifully crafted Mor Pankh Couple Rakhi Set. Featuring a stunning gold-rimmed peacock feather centerpiece, this bhaiya-bhabhi set is intricately designed with layers of pristine pearls and vibrant green bead accents. Packaged beautifully on a festive Krishna-themed card, it is the perfect traditional gift to protect and celebrate the eternal bond you share with your brother and sister-in-law.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 4,
        "priceUnit": "each"
    },
    {
        "name": "Enchanted Ocean Couple Rakhi",
        "category": "rakhi",
        "price": 180,
        "image": "assets/Enchanted Ocean Couple Rakhi.jpeg",
        "description": "Bring a touch of magic to your festivities with our Enchanted Ocean Couple Rakhi Set. Both rakhis feature a stunning pink and white ombre charm adorned with delicate gold seashells and starfish. The bhaiya rakhi is crafted with a sleek, premium golden snake chain, while the matching bhabhi lumba is designed as an elegant bracelet with multiple strands of twisted white seed pearls and charming pink bead accents. A truly unique and modern way to celebrate the bond of love and protection.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 5
    },
    {
        "name": "Hand-beaded Evil Eye Couple Rakhi",
        "category": "rakhi",
        "price": 120,
        "image": "assets/Hand-beaded Evil Eye Couple Rakhi red.jpeg",
        "description": "Protect your beloved brother and sister-in-law from negative energy with our Hand-beaded Evil Eye Couple Rakhi Set. Featuring intricately crafted circular evil eye centerpieces made from tiny seed beads and bordered with sparkling rhinestones. The set includes a bhaiya rakhi with a thick, beautifully braided multi-colored thread, and a matching bhabhi lumba finished with an elegant silk tassel. Available in vibrant Red and Green variations.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Green",
            "Red",
            "Pink"
        ],
        "images": {
            "Green": "assets/Hand-beaded Evil Eye Couple Rakhi green.jpeg",
            "Red": "assets/Hand-beaded Evil Eye Couple Rakhi red.jpeg",
            "Pink": "assets/Hand-beaded Evil Eye Couple Rakhi pink.jpeg"
        },
        "id": 6,
        "priceUnit": ""
    },
    {
        "name": "Divine Om Ombre Resin Rakhi",
        "category": "rakhi",
        "price": 50,
        "image": "assets/Divine Om Ombre Resin Rakhi.jpeg",
        "description": "Invoke peace and divine blessings for your brother with our beautiful Divine Om Ombre Resin Rakhi. Each rakhi features a unique, handcrafted resin centerpiece in a mesmerizing blue and green oceanic swirl, adorned with a sacred golden 'Om' (ॐ) symbol. Delicately accented with premium crystal beads, sparkling silver spacers, and tied with a matching dual-toned thread, this rakhi perfectly blends modern aesthetics with heartfelt traditions.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 7,
        "priceUnit": "each"
    },
    {
        "name": "King Bro & Queen Bhabhi Resin Rakhi",
        "category": "rakhi",
        "price": 120,
        "image": "assets/King Bro & Queen Bhabhi Resin Rakhi.jpeg",
        "description": "Make this Raksha Bandhan truly royal for your favorite couple with our 'King Bro & Queen Bhabhi' Resin Rakhi Set! Handcrafted from beautiful blue and green ombre resin, these unique pieces feature golden crown motifs and fun inscriptions inside. Finished with premium glass beads, delicate silver spacers, and an elegant blue silk tassel for the Bhabhi Lumba, this trendy set perfectly celebrates the kings and queens of your heart.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 8
    },
    {
        "name": "Playful Cartoon Kids Rakhi",
        "category": "rakhi",
        "price": 80,
        "image": "assets/Playful Cartoon Kids Rakhi.jpeg",
        "description": "Bring a huge smile to your little brother or sister's face with our Playful Cartoon Kids Rakhi Collection! Featuring their favorite classic characters like Mickey and Minnie Mouse, alongside a fun 'Explore the World' airplane design. Each premium enamel charm is beautifully crafted and tied with soft, colorful braided pastel threads, accented with golden beads and delicate pearls. Packaged on a fun, illustrated festive card, it's the perfect sweet surprise for the little ones!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "id": 9,
        "colors": [
            "Blue Mickey Mouse",
            "Pink Minnie Mouse",
            "Explore rakhi"
        ],
        "images": {
            "Blue Mickey Mouse": "assets/Playful Cartoon Kids Rakhi.jpeg",
            "Pink Minnie Mouse": "assets/Playful Cartoon Kids Rakhi.jpeg",
            "Explore rakhi": "assets/Playful Cartoon Kids Rakhi.jpeg"
        },
        "priceUnit": "each"
    },
    {
        "name": "Premium Watch Lumba Rakhi",
        "category": "rakhi",
        "price": 320,
        "image": "assets/Watch Lumba.jpeg",
        "description": "Gift your beloved sister-in-law a piece of timeless elegance with our Premium Watch Lumba. Merging the functionality of a beautiful golden watch with the rich traditions of Raksha Bandhan, each piece features a high-quality dial and a luxurious, intricately handcrafted bracelet. Adorned with delicate pearls, premium beads, and cultural motifs, this Watch Lumba is a stunning accessory she can proudly wear all year round.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Evil Eye & Pearl Watch Lumba",
            "Green Enamel Lotus Watch Lumba",
            "Royal Blue Charm Watch Lumba",
            "Square Dial Meenakari Lotus Watch Lumba",
            "Divine Peacock Kundan Watch Lumba"
        ],
        "images": {
            "Evil Eye & Pearl Watch Lumba": "assets/Watch Lumba.jpeg",
            "Green Enamel Lotus Watch Lumba": "assets/Watch Lumba.jpeg",
            "Royal Blue Charm Watch Lumba": "assets/Watch Lumba.jpeg",
            "Square Dial Meenakari Lotus Watch Lumba": "assets/Watch Lumba.jpeg",
            "Divine Peacock Kundan Watch Lumba": "assets/Watch Lumba.jpeg"
        },
        "id": 10,
        "priceUnit": "each"
    },
    {
        "name": "Golden Heart Beautiful Bhabhi & Bhaiya Rakhi Set",
        "category": "rakhi",
        "price": 280,
        "image": "assets/Golden Heart Beautiful Bhabhi & Bhaiya Rakhi Set.jpeg",
        "description": " Make your brother and sister-in-law feel truly special with this incredibly detailed Couple Rakhi Set. The Bhaiya rakhi features an elegant golden engraved centerpiece flanked by vibrant pink and blue crystal beads. The showstopper is the exquisite Bhabhi Lumba, featuring a large golden heart mirror with the loving inscription 'Most Beautiful Bhabhi'. It is lavishly adorned with dangling pearl chains, colorful petal charms, and a beautiful divine illustration charm at the bottom. A true statement piece for a wonderful couple!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 11
    },
    {
        "name": "Sparkling 'Veera' Rhinestone Rakhi",
        "category": "rakhi",
        "price": 120,
        "image": "assets/Sparkling 'Veera' Rhinestone Rakhi.jpeg",
        "description": "Express your heartfelt love for your beloved brother with this elegant 'Veera' rakhi. It features a delicate square centerpiece with the word 'Veera' crafted in gold, beautifully bordered by sparkling rhinestones. Tied with a classic, vibrant red traditional thread, this lightweight and stylish rakhi is perfect for the modern brother.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 12,
        "priceUnit": "each"
    },
    {
        "name": "Rakhi",
        "category": "rakhi",
        "price": 120,
        "image": "assets/aaa.jpeg",
        "description": "Make this Raksha Bandhan truly unforgettable with our Premium Handcrafted Couple Rakhi Set. Designed especially for your beloved brother and sister-in-law, this matching set features uniquely styled artisan centerpieces with beautiful, heartfelt inscriptions. Elegantly finished with premium beads, delicate spacers, and luxurious tassels or dangling charms, this beautifully packaged set is the perfect way to tie a knot of love and protection.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Royal Blue & Green Crown Couple Rakhi",
            "Purple Cloud Golden Ghungroo Couple Rakhi",
            "Pure Pearl Floral Elegance Couple Rakhi"
        ],
        "images": {
            "Royal Blue & Green Crown Couple Rakhi": "assets/aaa.jpeg",
            "Purple Cloud Golden Ghungroo Couple Rakhi": "assets/aaa.jpeg",
            "Pure Pearl Floral Elegance Couple Rakhi": "assets/aaa.jpeg"
        },
        "id": 13,
        "priceUnit": "each"
    },
    {
        "name": "Divine Spiritual Blessings Portrait Rakhi (Shree Premanand ji Maharaj Rakhi)",
        "category": "rakhi",
        "price": 80,
        "image": "assets/Divine Spiritual Blessings Portrait Rakhi.jpeg",
        "description": "Seek divine blessings and lifelong protection for your brother with our Sacred Spiritual Portrait Rakhi. This highly auspicious rakhi features a beautiful oval centerpiece displaying a revered spiritual figure, elegantly encircled by a halo of sparkling rhinestones. Tied securely with a thick, traditional red and yellow braided Mauli thread, this rakhi perfectly combines deep spiritual significance with classic festive beauty.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 14,
        "priceUnit": "each"
    },
    {
        "name": "Divine Shivling & Rudraksha Bracelet Rakhi",
        "category": "rakhi",
        "price": 80,
        "image": "assets/Divine Shivling & Rudraksha Bracelet Rakhi.jpeg",
        "description": "Bless your brother with the ultimate protection and grace of Lord Shiva. This exceptionally auspicious bracelet-style rakhi features a beautifully detailed miniature 'Shivling' centerpiece with golden accents. It is securely woven into an elegant golden chain interspersed with sacred 'Rudraksha' beads, renowned for their powerful spiritual and healing energies. Packaged on a beautiful peacock-feather card, this rakhi isn't just a thread—it's a sacred, lifelong blessing.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 15,
        "priceUnit": "each"
    },
    {
        "name": " The Premium Festive Trio: Pearl, Evil Eye & Rudraksha Bhaiya-Bhabhi Rakhi Set",
        "category": "rakhi",
        "price": 150,
        "image": "assets/The Premium Festive Trio Pearl, Evil Eye  Rudraksha Bhaiya-Bhabhi Rakhi Set.jpeg",
        "description": "Celebrate the beautiful bond of love and protection with our exclusive Premium 3-in-1 Bhaiya-Bhabhi Rakhi Combo. This carefully curated collection features three uniquely handcrafted designs to bring joy, style, and divine blessings to your brother and sister-in-law",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 16,
        "priceUnit": "each"
    },
    {
        "name": "The Divine Om & Rudraksha Golden Bracelet Rakhi",
        "category": "rakhi",
        "price": 80,
        "priceUnit": "each",
        "image": "assets/The Divine Om & Rudraksha Golden Bracelet Rakhi.jpeg",
        "description": "Invoke divine blessings and protection for your beloved brother with this stunning Sacred Om & Rudraksha Rakhi. It features a dazzling circular centerpiece set with sparkling stones surrounding a golden 'Om' (ॐ) motif. Intricately strung on an elegant gold-toned chain with authentic Rudraksha beads, this rakhi seamlessly blends heartfelt tradition with modern elegance. Finished with an adjustable clasp, it can be worn long after the festivities as a beautiful bracelet.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 17
    },
    {
        "name": " The Enchanted Butterfly Bhaiya-Bhabhi Rakhi Set",
        "category": "rakhi",
        "price": 180,
        "priceUnit": "each",
        "image": "assets/The Enchanted Butterfly Bhaiya-Bhabhi Rakhi Set Red.jpeg",
        "description": "Celebrate the beautiful bond with your brother and sister-in-law with this elegant Enchanted Butterfly Couple Rakhi Set. Both rakhis feature a stunning crystal-studded clover centerpiece with a delicate, colorful butterfly nestled inside. The Bhaiya rakhi is tied with a premium, intricately braided silk thread, while the matching Bhabhi Lumba is designed as a beautiful dual-strand beaded bracelet with an adjustable golden chain. Available in elegant color variations, this unique set perfectly blends modern charm with heartfelt tradition.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Red",
            "Black",
            "Green"
        ],
        "images": {
            "Red": "assets/The Enchanted Butterfly Bhaiya-Bhabhi Rakhi Set Red.jpeg",
            "Black": "assets/The Enchanted Butterfly Bhaiya-Bhabhi Rakhi Set Black.jpeg",
            "Green": "assets/The Enchanted Butterfly Bhaiya-Bhabhi Rakhi Set Green.jpeg"
        },
        "id": 18
    },
    {
        "name": "The Divine Lotus (Kamal) Bhaiya-Bhabhi Rakhi Set",
        "category": "rakhi",
        "price": 120,
        "priceUnit": "each",
        "image": "assets/The Divine Lotus (Kamal) Bhaiya-Bhabhi Rakhi Set blue.jpeg",
        "description": "Celebrate the sacred bond of love with our exquisite Divine Lotus Couple Rakhi Set. Each rakhi features a beautifully crafted, premium enamel lotus (Kamal) centerpiece, symbolizing purity, prosperity, and divine blessings. The Bhaiya rakhi is tied with an intricately braided, premium silk thread with golden accents, while the matching Bhabhi Lumba is elegantly finished with delicate pearls and complementary dangling beads. Available in a variety of vibrant festive colors—such as elegant teal, bright yellow, and deep green—this set perfectly captures the essence of traditional elegance and modern design. Elegantly packaged on our signature traditional card, it's a beautiful gift for your brother and sister-in-law.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Blue",
            "Gold",
            "Green"
        ],
        "images": {
            "Blue": "assets/The Divine Lotus (Kamal) Bhaiya-Bhabhi Rakhi Set blue.jpeg",
            "Gold": "assets/The Divine Lotus (Kamal) Bhaiya-Bhabhi Rakhi Set gold and green.jpeg",
            "Green": "assets/The Divine Lotus (Kamal) Bhaiya-Bhabhi Rakhi Set gold and green.jpeg"
        },
        "id": 19
    },
    {
        "name": "The Entwined Hearts Macrame Rakhi",
        "category": "rakhi",
        "price": 90,
        "priceUnit": "",
        "image": "assets/The Entwined Hearts Macrame Rakhi.jpeg",
        "description": "Express your pure and timeless love for your brother with this beautiful Entwined Hearts Macrame Rakhi. It features a stunning rhinestone-studded open heart gracefully interlocked with a vibrant, solid enamel heart. Handcrafted on a soft, cream-colored braided macrame cord, it is elegantly accented with premium pearls and golden cylindrical beads. Available in an array of beautiful enamel colors, this chic and minimalist design perfectly balances modern aesthetics with heartfelt tradition.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 20
    },
    {
        "name": "The Modern \"BRO\" Evil Eye Rakhi",
        "category": "rakhi",
        "price": 80,
        "priceUnit": "each",
        "image": "assets/The Modern BRO Evil Eye Rakhi.jpeg",
        "description": "Express your love and keep your brother protected from negativity with this trendy \"BRO\" Evil Eye Rakhi. This stylish piece features a striking golden \"BR\" followed by a protective enamel Evil Eye bead as the 'O', resting elegantly above a sparkling rhinestone bar. Handcrafted on a cool blue and white braided macrame cord, it is beautifully finished with lustrous pearls and golden cylindrical beads. A perfect blend of modern style and traditional protection for the coolest brother in the world.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 21
    },
    {
        "name": "The Divine Vighnaharta Ganesha Rakhi",
        "category": "rakhi",
        "price": 60,
        "priceUnit": "each",
        "image": "assets/The Divine Vighnaharta Ganesha Rakhi.jpeg",
        "description": "Start the festivities with the divine blessings of Lord Ganesha, the remover of obstacles. This elegant Rakhi features a stunning square crystal-studded centerpiece that beautifully frames a miniature portrait of Lord Ganesha. Available in a variety of uniquely handcrafted thread designs—ranging from classic red silk with golden rose beads and rich velvet accents, to delicate pearl strands and intricate pink braided cords. Meticulously designed to bring prosperity, joy, and divine protection to your beloved brother this Raksha Bandhan.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 22
    },
    {
        "name": "The Radiant Hexagon Evil Eye Bhaiya-Bhabhi Rakhi Set",
        "category": "rakhi",
        "price": 120,
        "priceUnit": "each",
        "image": "assets/The Radiant Hexagon Evil Eye Bhaiya-Bhabhi Rakhi Set.jpeg",
        "description": "Protect your beloved brother and sister-in-law from negative energy while adding a pop of vibrant color to their wrists. This stunning Couple Rakhi set features a unique, bright yellow hexagonal enamel centerpiece adorned with a central protective Evil Eye and bordered by sparkling rhinestones. The Bhaiya rakhi is crafted on a cheerful yellow thread accented with sleek blue beads and rhinestone spacers, while the matching Bhabhi Lumba is designed as an elegant, adjustable golden chain bracelet finished with a beautiful dangling pearl. A perfect blend of vibrant modern style and traditional protection.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 23
    },
    {
        "name": "The Vibrant Hexagon Evil Eye Rakhi",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/The Vibrant Hexagon Evil Eye Rakhi.jpeg",
        "description": "Protect your brother from negative energy with a brilliant pop of color. This vibrant Rakhi features a stunning hexagonal enamel centerpiece adorned with a traditional protective Evil Eye and bordered by sparkling rhinestones. Available in a striking array of festive colors—including soft pink, classic red, vivid sky blue, and deep royal blue—each piece is uniquely handcrafted on a matching thread. Beautifully accented with complementary beads, lustrous pearls, and golden spacers, this rakhi perfectly balances modern style with meaningful protection for the contemporary brother.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Pink",
            "Dark Blue",
            "Sky Blue",
            "Red"
        ],
        "images": {
            "Pink": "assets/The Vibrant Hexagon Evil Eye Rakhi.jpeg",
            "Dark Blue": "assets/The Vibrant Hexagon Evil Eye Rakhi.jpeg",
            "Sky Blue": "assets/The Vibrant Hexagon Evil Eye Rakhi.jpeg",
            "Red": "assets/The Vibrant Hexagon Evil Eye Rakhi.jpeg"
        },
        "id": 24
    },
    {
        "name": "The Playful Enamel Charms Kids Rakhi Bracelet",
        "category": "rakhi",
        "price": 150,
        "priceUnit": "",
        "image": "assets/The Playful Enamel Charms Kids Rakhi Bracelet.jpeg",
        "description": "Bring a huge smile to your little brother or sister's face with this playful and vibrant kids rakhi! Designed as a stylish golden chain bracelet, it features a delightful collection of colorful enamel dangling charms—including a beautiful blue butterfly, a sweet red apple, a cute cartoon flower, and a playful daisy. Lightweight, fun, and easy to wear with an adjustable clasp, it doubles as a stylish everyday bracelet that the little ones will love showing off long after the festivities are over.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 25
    },
    {
        "name": "The Playful Little Heroes Kids Rakhi Collection",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/The Playful Little Heroes Kids Rakhi Collection.jpeg",
        "description": " Bring boundless joy to your little brother's face with our Playful Little Heroes Rakhi Collection! Specially designed for children, these adorable rakhis feature all their favorite characters—from cute little deities like Bal Krishna and Hanuman to action-packed superheroes like Spiderman. Each rakhi is crafted with vibrant, soft braided threads and accented with gentle pearls, ensuring it is skin-friendly and comfortable for little wrists. Packaged on fun, colorful cards, it's the perfect sweet surprise to make his Raksha Bandhan extra special and fun!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 26
    },
    {
        "name": "The Majestic Peacock Crystal Rakhi",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/The Majestic Peacock Crystal Rakhi.jpeg",
        "description": "Celebrate your brother's regal spirit with this beautifully crafted Majestic Peacock Rakhi. The centerpiece features a highly detailed, vibrant enamel peacock motif, set within a sparkling circular frame studded with delicate crystals. Handcrafted on a premium, dark twisted cord for a bold and elegant look, this rakhi perfectly captures the grace and beauty of the majestic bird. A vibrant and meaningful symbol of love, joy, and protection for your beloved brother.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 27
    },
    {
        "name": "The Playful Rainbow Infinity Kids Rakhi",
        "category": "rakhi",
        "price": 90,
        "priceUnit": "each",
        "image": "assets/The Playful Rainbow Infinity Kids Rakhi.jpeg",
        "description": "Add a splash of color and endless fun to your little brother's Raksha Bandhan! This adorable kids rakhi features a vibrant, multi-colored infinity loop centerpiece adorned with playful tiny bead details and dangling pastel charms. Designed specially for children, it is crafted on a soft, skin-friendly braided pink and blue cord and beautifully finished with golden accents and gentle white pearls. Packaged on a fun cartoon-themed card, it's the perfect joyful surprise to make his day extra special.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 28
    },
    {
        "name": "The Elegant Floral Enamel Rakhi",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/The Elegant Floral Enamel Rakhi.jpeg",
        "description": "Celebrate the blooming bond of sibling love with our Elegant Floral Enamel Rakhi. This beautiful piece features a delicate, vibrant floral motif set within a sparkling, crystal-studded circular frame. Available in three stunning variations—royal purple, vivid pink, and classic silver—each rakhi is carefully handcrafted on a matching dual-strand thread. Elegantly accented with complementary beads, lustrous pearls, and sparkling rhinestone spacers, it perfectly blends graceful modern charm with timeless tradition.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "colors",
        "colors": [
            "Purple",
            "Red",
            "Silver"
        ],
        "images": {
            "Purple": "assets/The Elegant Floral Enamel Rakhi.jpeg",
            "Red": "assets/The Elegant Floral Enamel Rakhi.jpeg",
            "Silver": "assets/The Elegant Floral Enamel Rakhi.jpeg"
        },
        "id": 29
    },
    {
        "name": "The Protective Evil Eye Charm Rakhi Collection",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/The Protective Evil Eye Charm Rakhi Collection.jpeg",
        "description": "Shield your brother from negativity with our Protective Evil Eye Charm Rakhi Collection. This unique assortment features a variety of beautifully crafted centerpieces—ranging from elegant golden hexagons with pristine white enamel and peacock feather accents, to sparkling rhinestone-bordered ovals in deep royal blue. Handcrafted on vibrant threads in shades of green, sky blue, and navy, each rakhi is thoughtfully adorned with complementary pearls, matching glass beads, and sparkling rhinestone spacers. A stylish, modern, and deeply meaningful token of love and protection for your beloved brother.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 30
    },
    {
        "name": "Reusable eraser spinner rakhi",
        "category": "rakhi",
        "price": 80,
        "priceUnit": "each",
        "image": "assets/Reusable Eraser Spinner Rakhi.jpeg",
        "description": "Make Raksha Bandhan extra fun and playful for your little brother or sister with our Reusable Eraser Spinner Rakhi! Designed with kids in mind, this unique and interactive rakhi features a fun spinner base topped with an adorable, detachable 3D rubber eraser—available in super cute shapes like cupcakes, laughing emojis, magical unicorns, and hearts. Tied with a soft, vibrant multi-colored thread and adorned with bright beads and gentle pearls, it is comfortable to wear and provides endless entertainment. Long after the festivities are over, the cute eraser can be detached and used for schoolwork, making this a truly fun, memorable, and practical gift!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 31
    },
    {
        "name": "Spinner Rakhis",
        "category": "rakhi",
        "price": 80,
        "priceUnit": "each",
        "image": "assets/Spinner Rakhis.jpeg",
        "description": "Make Raksha Bandhan a fun and playful celebration for your little sibling with our Musical Spinner Eraser Rakhi! Designed especially for kids, this interactive and highly entertaining rakhi features a fun, spinning wooden base topped with an adorable, detachable 3D rubber eraser. Available in cute, vibrant shapes like cool rock guitars, classical violins, and magical unicorns. Tied with a soft, multi-colored thread and adorned with bright, translucent beads and gentle pearls, it is comfortable to wear all day long. Long after the festivities are over, the cute eraser can be detached and used for schoolwork, making this a truly memorable, fun, and practical gift!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 32
    },
    {
        "name": "The Amber Blossom Bhaiya-Bhabhi Rakhi Set",
        "category": "rakhi",
        "price": 180,
        "priceUnit": "",
        "image": "assets/The Amber Blossom Bhaiya-Bhabhi Rakhi Set.jpeg",
        "description": "Celebrate the joyous bond with your brother and sister-in-law with this breathtaking Amber Blossom Couple Rakhi Set. The Bhaiya rakhi features an elegant oval amber-toned centerpiece adorned with a delicate cluster of pearls and sparkling rhinestones, intricately set on a vibrant orange thread with golden rose bead accents. The matching Bhabhi Lumba is a true statement piece—showcasing a stunning, large translucent amber flower with a matching pearl and crystal core, elegantly finished with a luxurious, sweeping golden silk tassel. A perfect blend of vibrant festive colors and timeless floral elegance.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 33
    },
    {
        "name": "The Playful Braided Name Charm Bracelet Rakhi",
        "category": "rakhi",
        "price": 120,
        "priceUnit": "",
        "image": "assets/The Playful Braided Charm Bracelet Rakhi.jpeg",
        "description": "Make this Raksha Bandhan extra special and fun with our Playful Braided Charm Rakhi. Beautifully crafted with a soft, thick macrame braid in vibrant magenta and natural beige tones, it serves as a comfortable and stylish wristband. The true highlight of this beautiful piece is the eclectic collection of miniature dangling charms—featuring magical wands, cute cartoon characters, personalized initials, and sparkling hearts. Perfect for younger siblings and teenagers alike, this unique rakhi doubles as a trendy everyday charm bracelet they’ll never want to take off!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 34
    },
    {
        "name": "The \"Most Beautiful Bhabhi & Bhaiya\" Golden Chandelier Rakhi Set",
        "category": "rakhi",
        "price": 280,
        "priceUnit": "",
        "image": "assets/The Most Beautiful Bhabhi & Bhaiya Golden Chandelier Rakhi Set.jpeg",
        "description": "Express your heartfelt love and appreciation with this stunning, personalized Couple Rakhi Set. The showstopping Bhabhi Lumba features a bold golden centerpiece beautifully declaring \"Most Beautiful Bhabhi,\" accented with cascading pearl chains that elegantly end in delicate, multi-colored pastel leaves and a charming central butterfly. The complementing Bhaiya rakhi features an elegant, golden scalloped \"BHAIYA\" plate, handcrafted on a premium braided cord and adorned with matching pastel leaf charms. A truly personalized, stylish, and unforgettable gift set to celebrate your favorite couple!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 35
    },
    {
        "name": "The Marble Diamond Evil Eye Rakhi Set",
        "category": "rakhi",
        "price": 120,
        "priceUnit": "",
        "image": "assets/The Marble Diamond Evil Eye Rakhi Set.jpeg",
        "description": "Celebrate your special bond while warding off negative energy with this elegant Marble Diamond Evil Eye Rakhi Set. Both rakhis feature a stunning white marble-like centerpiece showcasing a uniquely painted diamond-shaped Evil Eye, perfectly framed by a delicate golden filigree border. The set includes a masculine design featuring cool blue accents on a soft braided cord, alongside a complementary piece with soft pink accents, handcrafted on a beautiful multi-strand pastel thread adorned with elegant clusters of white pearls. A perfect blend of traditional protection and soothing, modern elegance.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 36
    },
    {
        "name": "The Golden Script \"Bhai & Beautiful Bhabhi\" Rakhi Set",
        "category": "rakhi",
        "price": 180,
        "priceUnit": "",
        "image": "assets/The Golden Script Bhai & Beautiful Bhabhi Rakhi Set.jpeg",
        "description": "Celebrate your favorite couple with this beautifully personalized \"Bhai & Beautiful Bhabhi\" Rakhi Set. The elegant Bhabhi Lumba features a chic square golden frame enclosing a bold \"MOST BEAUTIFUL BHABHI\" declaration, gracefully strung on a delicate golden chain adorned with lustrous pearls. The matching Bhaiya rakhi showcases an oval golden centerpiece with \"bhai\" written in a stylish, modern script, flanked by authentic, protective Rudraksha beads on a premium golden chain. A perfect combination of traditional blessings, personalized sentiment, and modern elegance.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 37
    },
    {
        "name": "The Playful Sister Charm Bracelet Rakhi",
        "category": "rakhi",
        "price": 180,
        "priceUnit": "each",
        "image": "assets/The Playful Sister Charm Bracelet Rakhi.jpeg",
        "description": "Celebrate the special bond with your sister or sister-in-law with our enchanting Playful Sister Charm Bracelet Rakhi! Designed as a trendy, wearable accessory, these beautiful pieces feature an eclectic collection of adorable dangling enamel charms—including magical unicorns, vibrant butterflies, sweet cherries, planets, and playful personalized \"SIS\" letter charms. Available in both elegant silver chain styles and luxurious golden dual-chains accented with delicate pearls, these rakhis double as fun, stylish everyday charm bracelets she will absolutely adore long after the festivities!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 38
    },
    {
        "name": "The Magical Charms Silver Bracelet Rakhi",
        "category": "rakhi",
        "price": 150,
        "priceUnit": "",
        "image": "assets/The Magical Charms Silver Bracelet Rakhi.jpeg",
        "description": "Delight your sister or sister-in-law with this whimsical Magical Charms Silver Bracelet Rakhi! Designed as a trendy, wearable accessory, this beautiful dual-chain silver bracelet features an adorable collection of playful dangling enamel charms—including a vibrant red butterfly, a magical unicorn, a lucky four-leaf clover, sweet cherries, and a cute little planet. Lightweight and stylish with an adjustable clasp, it doubles as a fun everyday charm bracelet that she will absolutely adore wearing long after the Raksha Bandhan festivities are over!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 39
    },
    {
        "name": "Funny Cartoons Resin Kids Rakhi Collection",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/Funny Cartoons Resin Kids Rakhi Collection.jpeg",
        "description": "Bring a huge smile to your little brother's face with our Fun Character Resin Kids Rakhi Collection! Specially designed for children, these vibrant rakhis feature smooth, skin-friendly resin centerpieces showcasing all his favorite characters—from action-packed superheroes like Spiderman to playful Minions, divine deities, and even a cute \"LITTLE BRO\" design. Available in a variety of soft, colorful threads and adorned with fun wooden beads, bright stars, and gentle pearls, they are lightweight and super comfortable for little wrists. A playful and exciting surprise for the coolest little brother in town!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 40
    },
    {
        "name": "The Quirky Printed Resin Rakhi Collection",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "each",
        "image": "assets/The Quirky Printed Resin Rakhi Collection.jpeg",
        "description": "Celebrate your brother's unique personality with our Quirky Printed Resin Rakhi Collection! This fun and modern assortment features smooth, clear resin centerpieces showcasing a variety of trendy and personalized graphics—ranging from sweet quotes like \"One in a Billion Bhai\" and professional themes like \"CA India\", to quirky coffee cups and beloved cartoon characters like Shin-chan. Handcrafted on vibrant multi-strand pastel and classic bright threads, and beautifully adorned with gentle pearls and golden beads, these lightweight rakhis are the perfect way to match your brother's unique vibe this Raksha Bandhan!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 41
    },
    {
        "name": "The Enchanted White Butterfly Braided Rakhi",
        "category": "rakhi",
        "price": 80,
        "priceUnit": "",
        "image": "assets/The Enchanted White Butterfly Braided Rakhi.jpeg",
        "description": "Tie a knot of love and elegance with this stunning Enchanted Butterfly Rakhi. The centerpiece features a delicate, white enameled butterfly resting beautifully inside a dazzling, crystal-studded clover frame. It is meticulously handcrafted on a premium two-tone thread—featuring a soft cream cord that transitions into a vibrant teal braided center, elegantly accented with fine golden zari wrapping. A perfect blend of sophisticated modern charm and heartfelt tradition for your beloved brother.",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 42
    },
    {
        "name": "The Sunshine Yellow Seashell Kids Rakhi",
        "category": "rakhi",
        "price": 100,
        "priceUnit": "",
        "image": "assets/The Sunshine Yellow Seashell Kids Rakhi.jpeg",
        "description": "Brighten up your little sibling's Raksha Bandhan with this adorable Sunshine Yellow Seashell Rakhi! Designed for maximum cuteness, it features a smooth, translucent resin centerpiece with a shiny, iridescent yellow seashell embedded inside. Strung on a vibrant, soft yellow thread, it is delightfully accented with fun details—including a cheerful smiling star bead, tiny gentle pearls, and sparkling yellow glass beads. Lightweight, bright, and perfectly skin-friendly, it’s a joyful little surprise that will definitely make their day shine!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 43
    },
    {
        "name": "The Hand-in-Hand Sibling Bond Rakhi",
        "category": "rakhi",
        "price": 50,
        "priceUnit": "",
        "image": "assets/The Hand-in-Hand Sibling Bond Rakhi.jpeg",
        "description": "Celebrate the purest bond of love with our heartwarming Hand-in-Hand Sibling Rakhi. This beautiful piece features a clear, smooth resin centerpiece showcasing a sweet, custom illustration of a sister and her little brother happily holding hands. Handcrafted on a gentle, multi-strand twisted thread in soothing pastel shades of green and peach, and elegantly accented with delicate white pearls, it perfectly captures the innocent love, protection, and lifelong friendship shared between siblings. A truly touching and memorable gift for your beloved brother!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 44
    },
    {
        "name": "Tilak Plate with Couple Rakhi Combo",
        "category": "rakhi",
        "price": 350,
        "priceUnit": "",
        "image": "assets/Tilak plate with couple rakhi combo.jpeg",
        "description": "Complete your Raksha Bandhan rituals with elegance using this beautifully coordinated Purple Floral Combo Set! This all-inclusive package features a stunning matching Bhaiya-Bhabhi Rakhi set, highlighting translucent purple floral centerpieces adorned with delicate pearls and a luxurious sweeping silk tassel on the Bhabhi Lumba. To make your celebration truly perfect, the set includes a matching deep purple handcrafted resin Tilak plate, luxuriously decorated with intricate golden leaf motifs, a miniature Lord Ganesha idol for divine blessings, and a protective Evil Eye charm. An absolutely perfect, all-in-one gifting solution that beautifully blends devotion, modern style, and exceptional value!",
        "rating": 5,
        "reviewsCount": 1,
        "badge": "New Arrival",
        "variantType": "gallery",
        "id": 45
    }
];
// 2. State variables
let cart = [];
const SHIPPING_THRESHOLD = 499;
const SHIPPING_CHARGE = 50;
const COD_CHARGE = 40;

// 3. Elements Selectors
const productsGrid = document.getElementById("products-grid");
const filterTabs = document.getElementById("filter-tabs");
const productSearchInput = document.getElementById("product-search");
const searchDropdown = document.getElementById("search-dropdown");
const searchToggle = document.getElementById("search-toggle");
const clearSearchBtn = document.getElementById("clear-search-btn");

// Cart Elements
const cartTriggerBtn = document.getElementById("cart-trigger-btn");
const cartDrawerPanel = document.getElementById("cart-drawer-panel");
const cartDrawerClose = document.getElementById("cart-drawer-close");
const cartBackdropOverlay = document.getElementById("cart-backdrop-overlay");
const cartBadgeCount = document.getElementById("cart-badge-count");
const cartTotalCountSpan = document.getElementById("cart-total-count");
const cartItemsListContainer = document.getElementById("cart-drawer-items-list");
const cartTotalPriceVal = document.getElementById("cart-total-price-val");
const cartDrawerFooterActions = document.getElementById("cart-drawer-footer-actions");

// Mobile Drawer Elements
const mobileMenuToggleBtn = document.getElementById("mobile-menu-toggle-btn");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const mobileDrawerClose = document.getElementById("mobile-drawer-close");
const drawerBackdrop = document.getElementById("drawer-backdrop");

// Modals
const quickviewModalOverlay = document.getElementById("quickview-modal-overlay");
const quickviewModalClose = document.getElementById("quickview-modal-close");
const quickviewContentWrapper = document.getElementById("quickview-content-wrapper");

const checkoutModalOverlay = document.getElementById("checkout-modal-overlay");
const checkoutModalClose = document.getElementById("checkout-modal-close");
const checkoutCartBtn = document.getElementById("cart-checkout-btn");

// Checkout Steps & Forms
const shippingForm = document.getElementById("shipping-details-form");
const giftCheckbox = document.getElementById("gift-checkbox");
const giftNotesGroup = document.getElementById("gift-notes-group");
const cancelCheckoutBtn = document.getElementById("cancel-checkout-btn");

const backToShippingBtn = document.getElementById("back-to-shipping-btn");
const placeOrderBtn = document.getElementById("place-order-btn");
const successCloseBtn = document.getElementById("success-close-btn");

const checkStep1 = document.getElementById("checkout-step-1-form");
const checkStep2 = document.getElementById("checkout-step-2-payment");
const checkStep3 = document.getElementById("checkout-step-3-success");

const stepInd1 = document.getElementById("step-ind-1");
const stepInd2 = document.getElementById("step-ind-2");
const stepInd3 = document.getElementById("step-ind-3");
const connector1 = document.getElementById("connector-1");
const connector2 = document.getElementById("connector-2");

// Payment variables
const paymentRadioButtons = document.getElementsByName("payment-method");
const upiPanel = document.getElementById("upi-method-panel");
const cardPanel = document.getElementById("card-method-panel");
const codPanel = document.getElementById("cod-method-panel");

// 4. Initial Launch Actions
document.addEventListener("DOMContentLoaded", async () => {
    loadCartFromStorage();
    
    // Fetch block removed as products are hardcoded.
    
    renderProducts(PRODUCTS);
    setupEventListeners();
    updateCartUI();
    initHeroParticles();
    initScrollReveal();
});

// 5. Setup Listeners
function setupEventListeners() {
    // Sticky Header Scroll state
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }

        // Highlight active nav links on scroll
        highlightNavLinks();
    });

    // Mobile Navigation toggles
    mobileMenuToggleBtn.addEventListener("click", openMobileDrawer);
    mobileDrawerClose.addEventListener("click", closeMobileDrawer);
    drawerBackdrop.addEventListener("click", closeMobileDrawer);
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", closeMobileDrawer);
    });

    // Cart Drawer toggles
    cartTriggerBtn.addEventListener("click", openCartDrawer);
    cartDrawerClose.addEventListener("click", closeCartDrawer);
    cartBackdropOverlay.addEventListener("click", closeCartDrawer);
    document.querySelectorAll(".close-drawer-action").forEach(btn => {
        btn.addEventListener("click", closeCartDrawer);
    });

    // Lightbox toggles
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    if(lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
    if(lightboxOverlay) {
        lightboxOverlay.addEventListener("click", (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });
    }

    // Search Box Dropdown Toggle
    searchToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        searchDropdown.classList.toggle("active");
        if (searchDropdown.classList.contains("active")) {
            productSearchInput.focus();
        }
    });

    // Close search dropdown on click outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-box-wrapper")) {
            searchDropdown.classList.remove("active");
        }
    });

    // Product Search Input Filter
    productSearchInput.addEventListener("keyup", (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterProducts(query, getActiveCategory());

        if (query.length > 0) {
            clearSearchBtn.classList.remove("hidden");
        } else {
            clearSearchBtn.classList.add("hidden");
        }
    });

    // Clear Search Action
    clearSearchBtn.addEventListener("click", () => {
        productSearchInput.value = "";
        clearSearchBtn.classList.add("hidden");
        filterProducts("", getActiveCategory());
        productSearchInput.focus();
    });

    // Category Tabs Filter
    filterTabs.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-tab")) {
            document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
            e.target.classList.add("active");

            const category = e.target.getAttribute("data-filter");
            filterProducts(productSearchInput.value.toLowerCase().trim(), category);
        }
    });

    // Accordion FAQs toggle
    document.querySelectorAll(".faq-trigger").forEach(trigger => {
        trigger.addEventListener("click", () => {
            const faqItem = trigger.closest(".faq-item");
            const isOpen = faqItem.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));

            if (!isOpen) {
                faqItem.classList.add("active");
                trigger.setAttribute("aria-expanded", "true");
            } else {
                trigger.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Quick View Modal Close
    quickviewModalClose.addEventListener("click", closeQuickviewModal);
    quickviewModalOverlay.addEventListener("click", (e) => {
        if (e.target === quickviewModalOverlay) closeQuickviewModal();
    });

    // Checkout Modals open/close
    checkoutCartBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Your cart is empty. Please add items to checkout.", "error");
            return;
        }
        
        let message = "Hi Dilan's Creative Studio! I would like to place an order:\n\n";
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Quantity: ${item.quantity}\n`;
            if (item.color) {
                message += `   Variant: ${item.color}\n`;
            }
            message += `   Price: ₹${item.price * item.quantity}\n`;
            const imgUrl = window.location.origin + '/' + item.image.replace(/\\\\/g, '/');
            message += `   Image: ${imgUrl}\n\n`;
        });
        
        message += `*Total Order Value: ₹${subtotal}*\n\n`;
        message += `Please confirm my order and let me know the payment/shipping details. Thank you!`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918237927007?text=${encodedMessage}`;
        
        closeCartDrawer();
        window.open(whatsappUrl, '_blank');
    });
    checkoutModalClose.addEventListener("click", closeCheckoutModal);
    checkoutModalOverlay.addEventListener("click", (e) => {
        if (e.target === checkoutModalOverlay && !checkStep3.classList.contains("active")) {
            closeCheckoutModal();
        }
    });

    // Shipping gift toggle
    giftCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
            giftNotesGroup.classList.remove("hidden");
        } else {
            giftNotesGroup.classList.add("hidden");
            document.getElementById("gift-notes").value = "";
        }
    });

    // Checkout Flow Buttons Navigation
    cancelCheckoutBtn.addEventListener("click", () => {
        closeCheckoutModal();
        openCartDrawer();
    });

    // Shipping Submit: Step 1 -> Step 2
    shippingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        goToCheckoutStep2();
    });

    // Payment Radio button changes
    paymentRadioButtons.forEach(radio => {
        radio.addEventListener("change", (e) => {
            document.querySelectorAll(".payment-option-card").forEach(c => c.classList.remove("active"));
            e.target.closest(".payment-option-card").classList.add("active");

            const method = e.target.value;
            togglePaymentPanels(method);
            updateCheckoutTotalsSummary();
        });
    });

    // Back to Shipping: Step 2 -> Step 1
    backToShippingBtn.addEventListener("click", () => {
        goToCheckoutStep1();
    });

    // Pay & Place Order: Step 2 -> Step 3 (Success)
    placeOrderBtn.addEventListener("click", () => {
        completeOrderPlacement();
    });

    // Success Close Button
    successCloseBtn.addEventListener("click", () => {
        closeCheckoutModal();
    });

    // Newsletter Signup Form
    const newsletterForm = document.getElementById("newsletter-signup-form");
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("newsletter-email");
        const statusMsg = document.getElementById("newsletter-status");

        statusMsg.textContent = "Subscribing...";
        statusMsg.className = "newsletter-status-message";

        setTimeout(() => {
            statusMsg.textContent = `Success! Thank you for joining our circle. Check ${emailInput.value} for details.`;
            statusMsg.classList.add("success");
            emailInput.value = "";
            showToast("Successfully joined our festive newsletter circle!", "success");
        }, 1000);
    });
}

// 6. Navigation Helpers
function openMobileDrawer() {
    mobileNavDrawer.classList.add("active");
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileDrawer() {
    mobileNavDrawer.classList.remove("active");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
}

function openCartDrawer() {
    cartDrawerPanel.classList.add("active");
    cartBackdropOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    cartDrawerPanel.classList.remove("active");
    cartBackdropOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function openQuickviewModal() {
    quickviewModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeQuickviewModal() {
    quickviewModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function openCheckoutModal() {
    // Reset to step 1
    goToCheckoutStep1();
    checkoutModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
    checkoutModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox-overlay");
    const lightboxImg = document.getElementById("lightbox-main-img");
    if(lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.classList.add("active");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox-overlay");
    if(lightbox) {
        lightbox.classList.remove("active");
    }
}

// Active Nav highlight scroll spy helper
function highlightNavLinks() {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach(currSection => {
        const top = currSection.offsetTop;
        const height = currSection.offsetHeight;
        const id = currSection.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll(".nav-link").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Filter category helper
function getActiveCategory() {
    const activeTab = document.querySelector(".filter-tab.active");
    return activeTab ? activeTab.getAttribute("data-filter") : "all";
}

// 7. Product Catalog Rendering & Filtering
function renderProducts(productsList) {
    productsGrid.innerHTML = "";

    if (productsList.length === 0) {
        productsGrid.innerHTML = `
            <div class="grid-loading">
                <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 16px; opacity: 0.8;"></i>
                <p>New handmade creations are coming soon! Please stay tuned.</p>
            </div>
        `;
        return;
    }

    productsList.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card reveal-element";
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;

        card.innerHTML = `
            <div class="product-image-box" onclick="showProductDetails(${product.id})">
                ${product.badge ? `<span class="product-badge" data-badge="${product.badge}">${product.badge}</span>` : ''}
                <img src="${product.image.replace(/\\\\/g, '/')}" alt="${product.name}" onclick="event.stopPropagation(); openLightbox(this.src)">
                <div class="product-actions-overlay">
                    <button class="btn-quickview" onclick="event.stopPropagation(); showProductDetails(${product.id})" aria-label="Quick View"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info-box">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" onclick="showProductDetails(${product.id})">${product.name}</h3>
                <div class="product-price-row">
                    <span class="product-price">₹${product.price}${product.priceUnit ? ` ${product.priceUnit}` : ''}</span>
                    <button class="btn-add-cart-card" onclick="addToCart(${product.id}, 1)" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Re-bind intersection observer to newly rendered dynamic product cards
    if (typeof initScrollReveal === "function") {
        initScrollReveal();
    }
}

function filterProducts(searchQuery, category) {
    let filtered = PRODUCTS;

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (searchQuery !== "") {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery)
        );
    }

    renderProducts(filtered);
}

// 8. Shopping Cart Operations
function loadCartFromStorage() {
    const saved = localStorage.getItem("dilans_studio_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

function saveCartToStorage() {
    localStorage.setItem("dilans_studio_cart", JSON.stringify(cart));
}

function addToCart(productId, quantity, color) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const selectedColor = color || (product.colors ? product.colors[0] : null);
    const selectedImage = selectedColor ? product.images[selectedColor] : product.image;

    const existingItem = cart.find(item => item.id === productId && item.color === selectedColor);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            color: selectedColor,
            name: product.name + (selectedColor ? ` (${selectedColor})` : ''),
            price: product.price,
            priceUnit: product.priceUnit,
            image: selectedImage,
            quantity: quantity
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`Added ${quantity} x "${product.name} (${selectedColor})" to cart!`, "success");
}

function removeFromCart(productId, color) {
    const item = cart.find(i => i.id === productId && i.color === color);
    cart = cart.filter(i => !(i.id === productId && i.color === color));
    saveCartToStorage();
    updateCartUI();
    if (item) {
        showToast(`Removed "${item.name}" from cart.`, "info");
    }
}

function updateQuantity(productId, color, delta) {
    const item = cart.find(i => i.id === productId && i.color === color);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId, color);
    } else {
        saveCartToStorage();
        updateCartUI();
    }
}

function updateCartUI() {
    // Totals count badge
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadgeCount.textContent = totalCount;
    cartTotalCountSpan.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsListContainer.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty.</p>
                <a href="#collection" class="btn btn-primary close-drawer-action" id="empty-cart-shop-btn">Shop Collection</a>
            </div>
        `;
        // Setup listener again on newly generated empty shop button
        document.getElementById("empty-cart-shop-btn").addEventListener("click", closeCartDrawer);
        cartTotalPriceVal.textContent = "₹0";
        cartDrawerFooterActions.classList.add("hidden");
    } else {
        cartDrawerFooterActions.classList.remove("hidden");
        cartItemsListContainer.innerHTML = "";

        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;

            const card = document.createElement("div");
            card.className = "cart-item";
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">₹${item.price}${item.priceUnit ? ` ${item.priceUnit}` : ''}</span>
                    <div class="cart-item-quantity-row">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.color ? `'${item.color}'` : 'null'}, -1)"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.color ? `'${item.color}'` : 'null'}, 1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="cart-item-remove-btn" onclick="removeFromCart(${item.id}, ${item.color ? `'${item.color}'` : 'null'})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsListContainer.appendChild(card);
        });

        cartTotalPriceVal.textContent = `₹${subtotal}`;
    }
}

// 9. Product Details Modal Generation
function showProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let materialsHTML = "";
    if (product.materials && Array.isArray(product.materials)) {
        product.materials.forEach(mat => {
            materialsHTML += `<li><i class="fa-solid fa-circle-check"></i> ${mat}</li>`;
        });
    }

    let selectedColor = product.colors ? product.colors[0] : null;

    // Generate thumbnails HTML if there are multiple colors/images
    let thumbnailsHTML = "";
    if (product.colors) {
        thumbnailsHTML = `
            <div class="quickview-thumbnails">
                ${product.colors.map(col => `
                    <div class="thumbnail-item ${col === selectedColor ? 'active' : ''}" data-color="${col}">
                        <img src="${product.images[col].replace(/\\\\/g, '/')}" alt="${col}">
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Generate color buttons HTML (if not just a gallery)
    let colorSelectorHTML = "";
    if (product.colors && product.variantType !== 'gallery') {
        colorSelectorHTML = `
            <div class="color-selector-wrapper">
                <span class="color-selector-label">Select Color Option:</span>
                <div class="color-options-row">
                    ${product.colors.map(col => `
                        <button class="color-option-btn ${col === selectedColor ? 'active' : ''}" data-color="${col}">
                            ${col}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    quickviewContentWrapper.innerHTML = `
        <div class="quickview-image-panel">
            <div class="quickview-main-image-container">
                <img id="modal-main-img" src="${product.image.replace(/\\\\/g, '/')}" alt="${product.name}" onclick="openLightbox(this.src)">
            </div>
            ${thumbnailsHTML}
        </div>
        <div class="quickview-info-panel">
            <span class="product-category">${product.category}</span>
            <h2 class="quickview-title">${product.name}</h2>
            <div class="quickview-meta-row">
                <span class="quickview-price">₹${product.price}${product.priceUnit ? ` ${product.priceUnit}` : ''}</span>
            </div>
            <p class="quickview-description">${product.description}</p>
            
            ${colorSelectorHTML}

            <ul class="details-list">
                ${materialsHTML}
            </ul>
            <div class="quickview-actions">
                <div class="qty-control-wrapper">
                    <label for="modal-qty-select">Quantity</label>
                    <div class="qty-selector">
                        <button class="qty-btn" id="modal-qty-dec"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-val" id="modal-qty-val">1</span>
                        <button class="qty-btn" id="modal-qty-inc"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <button class="btn btn-primary" style="margin-top: 24px; flex-grow: 1;" id="modal-add-to-cart-btn">Add to Shopping Bag</button>
            </div>
        </div>
    `;

    // Function to switch selected color/image
    function selectColor(colorName) {
        selectedColor = colorName;
        
        // Update main image
        const mainImg = document.getElementById("modal-main-img");
        mainImg.src = product.images[colorName];
        
        // Update thumbnails active state
        document.querySelectorAll(".thumbnail-item").forEach(item => {
            if (item.getAttribute("data-color") === colorName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Update color buttons active state (if they exist)
        document.querySelectorAll(".color-option-btn").forEach(btn => {
            if (btn.getAttribute("data-color") === colorName) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    // Add listeners to thumbnails and buttons
    if (product.colors) {
        document.querySelectorAll(".thumbnail-item").forEach(item => {
            item.addEventListener("click", () => {
                selectColor(item.getAttribute("data-color"));
            });
        });

        document.querySelectorAll(".color-option-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                selectColor(btn.getAttribute("data-color"));
            });
        });
    }

    // Modal Qty bindings
    let quantitySelected = 1;
    const qVal = document.getElementById("modal-qty-val");
    document.getElementById("modal-qty-dec").addEventListener("click", () => {
        if (quantitySelected > 1) {
            quantitySelected--;
            qVal.textContent = quantitySelected;
        }
    });
    document.getElementById("modal-qty-inc").addEventListener("click", () => {
        quantitySelected++;
        qVal.textContent = quantitySelected;
    });

    document.getElementById("modal-add-to-cart-btn").addEventListener("click", () => {
        addToCart(product.id, quantitySelected, selectedColor);
        closeQuickviewModal();
        openCartDrawer();
    });

    openQuickviewModal();
}

// 10. Multi-step Checkout Flow Logic
function goToCheckoutStep1() {
    checkStep1.classList.add("active");
    checkStep2.classList.remove("active");
    checkStep3.classList.remove("active");

    stepInd1.classList.add("active");
    stepInd2.classList.remove("active");
    stepInd3.classList.remove("active");
    connector1.style.backgroundColor = "var(--border-color)";
    connector2.style.backgroundColor = "var(--border-color)";
}

function goToCheckoutStep2() {
    checkStep1.classList.remove("active");
    checkStep2.classList.add("active");
    checkStep3.classList.remove("active");

    stepInd1.classList.add("active");
    stepInd2.classList.add("active");
    stepInd3.classList.remove("active");
    connector1.style.backgroundColor = "var(--primary)";
    connector2.style.backgroundColor = "var(--border-color)";

    updateCheckoutTotalsSummary();
}

function togglePaymentPanels(method) {
    upiPanel.classList.add("hidden");
    cardPanel.classList.add("hidden");
    codPanel.classList.add("hidden");

    if (method === "upi") {
        upiPanel.classList.remove("hidden");
    } else if (method === "card") {
        cardPanel.classList.remove("hidden");
    } else if (method === "cod") {
        codPanel.classList.remove("hidden");
    }
}

function updateCheckoutTotalsSummary() {
    const summaryContainer = document.getElementById("summary-items-container");
    summaryContainer.innerHTML = "";

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const row = document.createElement("div");
        row.className = "summary-item-row";
        row.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        `;
        summaryContainer.appendChild(row);
    });

    // Check shipping charges
    let shipping = SHIPPING_CHARGE;
    if (subtotal >= SHIPPING_THRESHOLD) {
        shipping = 0;
    }

    // Check COD charges
    let codFee = 0;
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (selectedMethod === "cod") {
        codFee = COD_CHARGE;
    }

    const grandTotal = subtotal + shipping + codFee;

    document.getElementById("summary-subtotal").textContent = `₹${subtotal}`;

    if (shipping === 0) {
        document.getElementById("summary-shipping").textContent = "FREE";
    } else {
        document.getElementById("summary-shipping").textContent = `₹${shipping}`;
    }

    // Update Grand total
    document.getElementById("summary-grandtotal").textContent = `₹${grandTotal}`;

    // If COD fee applies, append to rows or show in shipping line
    if (codFee > 0) {
        const codRow = document.createElement("div");
        codRow.className = "summary-item-row";
        codRow.style.color = "var(--primary)";
        codRow.innerHTML = `
            <span>COD Convenience Fee</span>
            <span>₹${codFee}</span>
        `;
        summaryContainer.appendChild(codRow);
    }
}

function completeOrderPlacement() {
    // Validate card inputs if card method selected
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (selectedMethod === "card") {
        const cardNum = document.getElementById("card-num").value.trim();
        const cardExpiry = document.getElementById("card-expiry").value.trim();
        const cardCvv = document.getElementById("card-cvv").value.trim();

        if (cardNum === "" || cardExpiry === "" || cardCvv === "") {
            showToast("Please enter credit card billing details.", "error");
            return;
        }
    }

    // Transition to Step 3
    checkStep1.classList.remove("active");
    checkStep2.classList.remove("active");
    checkStep3.classList.add("active");

    stepInd1.classList.add("active");
    stepInd2.classList.add("active");
    stepInd3.classList.add("active");
    connector1.style.backgroundColor = "var(--primary)";
    connector2.style.backgroundColor = "var(--primary)";

    // Update confirmation text fields
    const orderId = "DLST-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("success-order-id").textContent = `#${orderId}`;

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 4); // 4 days estimate
    document.getElementById("success-delivery-date").textContent = deliveryDate.toLocaleDateString("en-US", dateOptions);

    const name = document.getElementById("cust-name").value;
    document.getElementById("success-cust-name").textContent = name;

    // Reset shopping cart state
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showToast(`Order successfully placed! ID: #${orderId}`, "success");
}

// 11. Custom Notification Toasts System
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === "error") {
        icon = '<i class="fa-solid fa-circle-exclamation"></i>';
    } else if (type === "info") {
        icon = '<i class="fa-solid fa-circle-info"></i>';
    }

    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;
    container.appendChild(toast);

    // Fade out and remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px) scale(0.9)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// 12. Interactive Gold Sparkles Particle System in Hero Section
function initHeroParticles() {
    const canvas = document.getElementById("hero-particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    
    const particles = [];
    const maxParticles = 60;
    
    // Handle resize
    window.addEventListener("resize", () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });
    
    class GoldParticle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 2 + 1;
            this.speedY = -(Math.random() * 0.7 + 0.3);
            this.speedX = Math.random() * 0.4 - 0.2;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.opacity -= this.fadeSpeed;
            
            if (this.opacity <= 0 || this.y < 0 || this.x < 0 || this.x > width) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.shadowBlur = this.size * 2;
            ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new GoldParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.shadowBlur = 0; // reset for performance
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 13. Intersection Observer Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-element");
    
    const observerOptions = {
        root: null, // viewport
        threshold: 0.05, // trigger when 5% visible
        rootMargin: "0px 0px -40px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target); // trigger animation only once
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// 14. Lightbox Zoom Functionality
document.addEventListener("DOMContentLoaded", () => {
    const lightboxImg = document.getElementById("lightbox-main-img");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    
    let isZoomed = false;
    
    if(lightboxImg) {
        lightboxImg.style.transition = "transform 0.3s ease";
        lightboxImg.style.cursor = "zoom-in";
        
        lightboxImg.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent closing lightbox on click
            if(!isZoomed) {
                // Calculate click position for transform origin
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                
                lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                lightboxImg.style.transform = "scale(2.5)";
                lightboxImg.style.cursor = "zoom-out";
                isZoomed = true;
            } else {
                resetZoom();
            }
        });

        // Add pan effect when zoomed in
        lightboxImg.addEventListener("mousemove", (e) => {
            if(isZoomed) {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            }
        });
    }
    
    function resetZoom() {
        if(lightboxImg) {
            lightboxImg.style.transform = "scale(1)";
            lightboxImg.style.cursor = "zoom-in";
            isZoomed = false;
        }
    }
    
    if(lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            resetZoom();
            closeLightbox();
        });
    }
    
    if(lightboxOverlay) {
        lightboxOverlay.addEventListener("click", (e) => {
            if(e.target === lightboxOverlay) {
                resetZoom();
                closeLightbox();
            }
        });
    }
});
