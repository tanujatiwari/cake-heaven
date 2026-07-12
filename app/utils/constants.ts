export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "cakes" | "pastries" | "cookies" | "gifts";
  tags?: string[];
  featured?: boolean;
  subCategory?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  badge?: string;
  icon?: string;
  actionText?: string;
  actionHref?: string;
  colspan: number; // in grid columns
  bgClass?: string;
}

export interface StoryPillar {
  title: string;
  description: string;
  icon: string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Cakes", href: "/cakes" },
  { label: "Pastries", href: "/pastries" },
  { label: "Cookies & Bread", href: "/cookies" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/about" },
];

export const FOOTER_LINKS: NavigationLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const PRODUCTS: Product[] = [
  {
    id: "anniversary-classic",
    name: "Anniversary Classic",
    price: 2500,
    description: "Timeless elegance with smooth white chocolate ganache and gold-leaf accents.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhH-yxc-EcfLoOt1mwNwjG-6yl0u5M6XEXuteh9TRt3iCDyIbzP7yTBRA&s=10",
    category: "cakes",
    subCategory: "anniversary cake",
    tags: ["Classic", "Ganache", "Gold Leaf"]
  },
  {
    id: "pistachio-lemon",
    name: "Pistachio & Lemon",
    price: 2200,
    description: "Zesty lemon curd paired with earthy Persian pistachio sponge layers.",
    image: "https://plus.unsplash.com/premium_photo-1716647125697-f368f4d31a5c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cakes",
    subCategory: "birthday cakes",
    tags: ["Citrus", "Nutty"]
  },
  {
    id: "sorry-chocolate-fudge",
    name: "Sorry Chocolate Fudge",
    price: 1800,
    description: "Say it with chocolate: a rich Belgian chocolate fudge cake that makes apologies sweet.",
    image: "https://www.giftsmyntra.com/wp-content/uploads/2020/10/sorry-cake.jpg",
    category: "cakes",
    subCategory: "sorry cakes",
    tags: ["Fudge", "Chocolate", "Apology"]
  },
  {
    id: "valentine-rosewood",
    name: "Valentine Rosewood Cake",
    price: 2800,
    description: "Vibrant red velvet sponge layers layered with fresh vanilla bean frosting and rose petals.",
    image: "https://freshknots.in/wp-content/uploads/2026/02/Valentine-Cake-2-540x540.jpg",
    category: "cakes",
    subCategory: "valentine",
    tags: ["Red Velvet", "Rose", "Valentine"]
  },
  {
    id: "rustic-harvest",
    name: "Rustic Harvest",
    price: 2400,
    description: "Multi-tiered celebration cake adorned with fresh seasonal flowers and sweet syrups.",
    image: "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cakes",
    subCategory: "anniversary cake",
    tags: ["Organic", "Seasonal"]
  },
  {
    id: "mango-passionfruit-tart",
    name: "Mango Passionfruit Tart",
    price: 240,
    description: "Sweet pâte sablée shell filled with smooth passionfruit curd and fresh Alphonso mango slices.",
    image: "https://plus.unsplash.com/premium_photo-1764410207224-451168b407d8?q=80&w=1045&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "pastries",
    subCategory: "classic",
    tags: ["Classic", "Tart", "Mango"]
  },
  {
    id: "raspberry-rose-tart",
    name: "Raspberry Rose Tart",
    price: 260,
    description: "French pastry shell filled with vibrant fresh raspberries, pistachio dust, and rosewater cream.",
    image: "https://plus.unsplash.com/premium_photo-1692833836149-7f35c8d9fccb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "pastries",
    subCategory: "classic",
    tags: ["Fruity", "Floral", "Tart"]
  },
  {
    id: "gulab-jamun-mousse",
    name: "Gulab Jamun Pastry",
    price: 220,
    description: "A modern fusion pastry layer of saffron mousse, topped with rose syrup-soaked Gulab Jamun.",
    image: "https://ashbaber.com/wp-content/uploads/2022/08/gulab-jamun-cheesecake-main-small.jpg",
    category: "pastries",
    subCategory: "desi",
    tags: ["Desi", "Mousse", "Fusion"]
  },
  {
    id: "rasmalai-cardamom",
    name: "Rasmalai Cardamom Pastry",
    price: 250,
    description: "Spiced sponge pastry soaked in cardamom saffron milk and topped with soft rasmalai chunks.",
    image: "https://bakewithshivesh.com/wp-content/uploads/2021/04/IMG_3937-scaled.jpg",
    category: "pastries",
    subCategory: "desi",
    tags: ["Desi", "Rasmalai", "Cardamom"]
  },
  {
    id: "sugar-free-matcha",
    name: "Sugar-Free Matcha Roll",
    price: 240,
    description: "Earthy Uji matcha mousse inside an almond flour shell, completely sweetened with monkfruit.",
    image: "https://teakandthyme.com/wp-content/uploads/2024/07/matcha-roll-cake-DSC_9708-1x1-1200.jpg",
    category: "pastries",
    subCategory: "sugar free",
    tags: ["Matcha", "Sugar-Free", "Almond Flour"]
  },
  {
    id: "low-calorie-berry-panna-cotta",
    name: "Low-Calorie Berry Panna Cotta",
    price: 190,
    description: "Silky Madagascar vanilla panna cotta topped with a fresh mixed-berry coulis, only 140 calories.",
    image: "https://theguthealthdoctor.com/wp-content/uploads/2021/12/Panna-Cotta-10.jpg",
    category: "pastries",
    subCategory: "low calorie",
    tags: ["Low-Calorie", "Panna Cotta", "Berry"]
  },
  {
    id: "country-sourdough",
    name: "Country Sourdough Boule",
    price: 250,
    description: "36-hour slow fermented wild yeast sourdough with a dark, blistered crust and open crumb.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    category: "cookies",
    subCategory: "bread",
    tags: ["Sourdough", "Wild Yeast", "Organic"]
  },
  {
    id: "brioche-challah",
    name: "Brioche Challah",
    price: 220,
    description: "Rich, pillowy, braided egg bread with a golden-brown egg wash crust.",
    image: "https://www.onesarcasticbaker.com/wp-content/uploads/2023/01/brioche-Loafs.jpg",
    category: "cookies",
    subCategory: "bread",
    tags: ["Challah", "Brioche", "Sweet"]
  },
  {
    id: "rosemary-focaccia",
    name: "Rosemary Sea Salt Focaccia",
    price: 280,
    description: "Italian flatbread dimpled with organic extra virgin olive oil, fresh rosemary, and Maldon sea salt.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSa4_IX-TIhfPa7tgRP1LXP6J9OFeheR5TTjcR-l4OQpMrebeOiOC9Ng&s=10",
    category: "cookies",
    subCategory: "bread",
    tags: ["Focaccia", "Herbs", "Olive Oil"]
  },
  {
    id: "midnight-sea-salt",
    name: "Midnight Sea Salt",
    price: 220,
    description: "70% dark Valrhona chocolate cookies with smoked Maldon flake salt.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cookies",
    subCategory: "cookies",
    tags: ["Chocolate", "Salty"]
  },
  {
    id: "salted-caramel-pecan",
    name: "Salted Caramel Pecan",
    price: 280,
    description: "Buttery cookies loaded with toasted pecans and gooey house-made salted caramel.",
    image: "https://images.unsplash.com/photo-1743623173731-37b6d72a01c2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cookies",
    subCategory: "cookies",
    tags: ["Caramel", "Pecan", "Sweet-Salty"]
  },
  {
    id: "double-chocolate-chunk",
    name: "Double Chocolate Chunk",
    price: 260,
    description: "Decadent cocoa cookie dough folded with white and milk chocolate chunks.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=80",
    category: "cookies",
    subCategory: "cookies",
    tags: ["Double Chocolate", "Gooey", "Bestseller"]
  },
  {
    id: "sugar-free-oatmeal",
    name: "Sugar-Free Oatmeal Cookie",
    price: 180,
    description: "Hearty rolled oats and plump organic raisins, baked sugar-free using stevia extract.",
    image: "https://plus.unsplash.com/premium_photo-1670895802275-ed748ced4309?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cookies",
    subCategory: "cookies",
    tags: ["Oats", "Sugar-Free", "Stevia"]
  },
  {
    id: "pistachio-butter-shortbread",
    name: "Pistachio Butter Shortbread",
    price: 240,
    description: "Melt-in-your-mouth shortbread cookie studded with toasted Persian pistachios.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADgNe39FPV-lQ9fLyYFvFJ4tAm7cMqR7nvnKEmYe4IlyIgIe391wgK6Ce&s=10",
    category: "cookies",
    subCategory: "cookies",
    tags: ["Pistachio", "Butter", "Shortbread"]
  },
  {
    id: "almond-lace-cookie",
    name: "Almond Lace Cookie",
    price: 200,
    description: "Thin, crispy caramelized almond lace cookie drizzled with fine milk chocolate.",
    image: "https://cdn1.foodviva.com/static-content/food-images/kids-recipes/almond-cookies/almond-cookies.jpg",
    category: "cookies",
    subCategory: "cookies",
    tags: ["Almond", "Caramel", "Chocolate"]
  }
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: "morning-viennoiserie",
    title: "The Morning Viennoiserie",
    description: "Freshly laminated daily at 4:00 AM.",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Bestseller",
    colspan: 8
  },
  {
    id: "celebration-cakes",
    title: "Custom Celebration Cakes",
    description: "Tailored designs for life's most precious milestones. Each cake is a unique masterpiece of flavor and form.",
    icon: "cake",
    actionText: "Inquire Now",
    actionHref: "/contact?type=order",
    colspan: 4,
    bgClass: "bg-surface-container-high border border-outline-variant/30 text-primary"
  },
  {
    id: "artisanal-cakes-showcase",
    title: "Artisanal Cakes",
    description: "Composition of patience and premium ingredients.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=80",
    colspan: 4
  },
  {
    id: "wholesale-partnerships",
    title: "Wholesale Partnerships",
    description: "Supplying the city's finest restaurants and hotels with bread of unparalleled quality.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
    actionText: "Learn More",
    actionHref: "/contact?type=wholesale",
    colspan: 8
  }
];

export const STORY_PILLARS: StoryPillar[] = [
  {
    title: "Artisanal Heritage",
    description: "Preserving the time-honored techniques of French Boulangerie, passed down through generations of master craftsmen.",
    icon: "history_edu"
  },
  {
    title: "Organic Sourcing",
    description: "We partner exclusively with stone-millers and local organic farms that share our commitment to biodiversity and soil health.",
    icon: "eco"
  },
  {
    title: "Slow Fermentation",
    description: "Each loaf undergoes a minimum 72-hour cold fermentation process, ensuring superior digestibility and a complex, nutty crumb.",
    icon: "hourglass_empty"
  }
];

export const TRUSTED_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
];
