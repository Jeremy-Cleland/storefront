const initialState = [
  {
    name: '24" iMac® with Retina 4.5K display - Apple M1 - 8GB Memory - 256GB SSD (Latest Model) - Silver',
    category: "Computers & Tablets",
    description:
      "You've never seen a computer like this before. With a strikingly thin design made possible by the Apple M1 chip. An immersive 24-inch 4.5K Retina display with over a billion colors that gives you the big picture in stunning detail.&#185; The best camera and mics ever in a Mac so you look and sound your best. And roomfilling, six-speaker sound that takes movies and music to the next level. It works seamlessly with iPhone so texts and calls go right to your iMac. And with a spectrum of colors to choose from, it's the all-in-one that's all yours.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6450/6450874_sd.jpg",
    regularPrice: 1299.99,
    salePrice: 1499.99,
    inStock: 5,
    sku: "6450918",
  },
  {
    name: '24" iMac® with Retina 4.5K display - Apple M1 - 8GB Memory - 256GB SSD (Latest Model) - Pink',
    category: "Computers & Tablets",
    description:
      "You've never seen a computer like this before. With a strikingly thin design made possible by the Apple M1 chip. An immersive 24-inch 4.5K Retina display with over a billion colors that gives you the big picture in stunning detail.&#185; The best camera and mics ever in a Mac so you look and sound your best. And roomfilling, six-speaker sound that takes movies and music to the next level. It works seamlessly with iPhone so texts and calls go right to your iMac. And with a spectrum of colors to choose from, it's the all-in-one that's all yours.",
    regularPrice: 1299.99,
    salePrice: 1299.99,
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6450/6450918_sd.jpg",
    inStock: 5,
    sku: "6450919",
  },
  {
    name: 'Apple - MacBook Pro 16" Laptop - M2 Pro chip - 16GB Memory - 1TB SSD (Latest Model) - Space Gray',
    category: "MacBooks",
    description:
      "The 16-inch MacBook Pro with M2 Pro and M2 Max takes power and speed to the next level, whether it's on battery or plugged in. With a stunning Liquid Retina XDR display, all the ports you need, and all-day battery life&#8212;this pro laptop goes anywhere you need.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6450/6450866_sd.jpg",
    regularPrice: 2699,
    salePrice: 2699,
    inStock: 5,
    sku: "6450866",
  },
  {
    name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
    category: "MacBooks",
    description:
      "Apple's thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever up to 18 hours.&#185; MacBook Air. Still perfectly portable. Just a lot more powerful.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/5721/5721600_sd.jpg",
    regularPrice: 999.99,
    salePrice: 999.99,
    inStock: 5,
    sku: "123456",
  },
  {
    name: 'MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
    category: "MacBooks",
    description:
      "The Apple M1 chip redefines the 13-inch MacBook Pro. Featuring an 8-core CPU that flies through complex workflows in photography, coding, video editing, and more. Incredible 8-core GPU that crushes graphics-intensive tasks and enables super-smooth gaming. An advanced 16-core Neural Engine for more machine learning power in your favorite apps. Superfast unified memory for fluid performance. And the longest-ever battery life in a Mac at up to 20 hours.&#178; It's Apple's most popular pro notebook. Way more performance and way more pro.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6418/6418601_sd.jpg",
    regularPrice: 1299.99,
    salePrice: 1104.99,
    inStock: 5,
    sku: "6418601",
  },
  {
    name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 1TB SSD - Silver',
    category: "MacBooks",
    description:
      "The new MacBook Pro delivers game-changing performance for pro users. Choose the powerful M1 Pro or the even more powerful M1 Max to supercharge pro-level workflows while getting amazing battery life.&#185; And with an immersive 14-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6450/6450853_sd.jpg",
    regularPrice: 1999,
    salePrice: 1599,
    inStock: 5,
    sku: "6450853",
  },
  {
    name: "Apple - iPad mini (Latest Model) with Wi-Fi - 64GB - Purple",
    category: "Tablets",
    description:
      "The new iPad mini. Featuring an all-screen design with an 8.3-inch Liquid Retina display. Powerful A15 Bionic chip with Neural Engine. A 12MP Ultra Wide front camera with Center Stage. USB-C connectivity. Take notes, mark up documents, or capture your biggest ideas with Apple Pencil (2nd generation) that attaches magnetically and charges wirelessly.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4901/4901905_sd.jpg",
    regularPrice: 499.99,
    salePrice: 499.99,
    inStock: 5,
    sku: "4901905",
  },
  {
    name: "Apple - 11-Inch iPad Pro with Wi-Fi - 2TB - Space Gray",
    category: "Tablets",
    description:
      "iPad Pro features the powerful Apple M1 chip with next-level performance and all-day battery life.The Liquid Retina display on the 11-inch iPad Pro is not only gorgeous, but super portable.&#185; And a front camera with Center Stage keeps you in frame automatically during video calls. iPad Pro has pro cameras and a LiDAR Scanner for stunning photos, videos, and immersive AR. Thunderbolt for connecting to high-performance accessories. And you can add Apple Pencil for note-taking, drawing, and marking up documents, and the Magic Keyboard for a responsive typing experience and trackpad.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4901/4901804_sd.jpg",
    regularPrice: 1899.99,
    salePrice: 1530.99,
    inStock: 5,
    sku: "4901804",
  },
  {
    name: "Apple - AirPods Pro (1st generation) with Magsafe Charging Case - White",
    category: "Headphones",
    description:
      "With the new Wireless Charging Case, charging is as simple as placing your AirPods in the case and laying it on a Qi-compatible charging mat. The case works with all generations of AirPods, and when you're away from a charging mat, you can use the Lightning connector to charge.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/4900/4900942_sd.jpg",
    regularPrice: 219.99,
    salePrice: 219.99,
    inStock: 5,
    sku: "4900942",
  },
  {
    name: "Apple - AirPods Max - Space Gray",
    category: "Headphones",
    description:
      "AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit. Active Noise Cancellation blocks outside noise, while Transparency mode lets it in. And spatial audio with dynamic head tracking provides theater-like sound that surrounds you.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6373/6373460_sd.jpg",
    regularPrice: 499.99,
    salePrice: 479.99,
    inStock: 5,
    sku: "6373460",
  },
  {
    name: "Apple - AirPods Wireless Charging Case - White",
    category: "Headphones",
    description:
      "With the new Wireless Charging Case, charging is as simple as placing your AirPods in the case and laying it on a Qi-compatible charging mat. The case works with all generations of AirPods, and when you're away from a charging mat, you can use the Lightning connector to charge.",
    image:
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6296/6296120_sd.jpg",
    regularPrice: 79.99,
    salePrice: 79.99,
    inStock: 5,
    sku: "6296120",
  },
];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return initialState.filter((product) => product.category === payload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// export const reset = () => {
//   return {
//     type: "RESET",
//     payload: {},
//   };
// };

export default productsReducer;
