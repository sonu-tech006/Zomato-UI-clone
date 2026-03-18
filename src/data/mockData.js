export const realImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80",
  "https://images.unsplash.com/photo-1544025162-8315ea07b06b?w=500&q=80",
  "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500&q=80",
  "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&q=80",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&q=80",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  "https://images.unsplash.com/photo-1481070555726-e2fe83477d15?w=500&q=80",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80"
];

export const mockRestaurants = Array.from({ length: 20 }, (_, i) => {
  const isVeg = Math.random() > 0.6;
  return {
    id: (i + 1).toString(),
    name: [
      "A2B - Adyar Ananda Bhavan", "Empire Restaurant", "Leon's Burgers", "Meghana Foods", "The Pizza Bakery", 
      "Glen's Bakehouse", "Toit", "Hole in the Wall", "Truffles", "KFC",
      "McDonald's", "Burger King", "Domino's Pizza", "Pizza Hut", "Subway",
      "Nandhana Palace", "California Burrito", "Third Wave Coffee", "Starbucks", "Rameshwaram Cafe"
    ][i],
    image: realImages[i], // Direct mapping to ensure 20 unique cards!
    rating: parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
    reviews: Math.floor(Math.random() * 50) + "K",
    cuisine: ["South Indian", "North Indian, Mughlai", "Burger, Wraps", "Biryani, Andhra", "Pizza, Italian", "Desserts, Bakery", "Continental, Italian", "Cafe, American", "American, Fast Food", "Burger, Fast Food"][i % 10],
    location: ["Koramangala", "Indiranagar", "Jayanagar", "Residency Road", "BTM", "Whitefield", "HSR Layout"][i % 7] + ", Bangalore",
    priceForTwo: (Math.floor(Math.random() * 15) * 100 + 300).toString(),
    deliveryTimeMins: Math.floor(Math.random() * 30) + 15,
    promoted: Math.random() > 0.7,
    offers: Math.random() > 0.5 ? [`${Math.floor(Math.random() * 4 + 1) * 10}% OFF`] : [],
    pureVeg: isVeg,
    safeAndHygienic: Math.random() > 0.2,
  };
});

export const mockCategories = [
  { id: "dining", name: "Dining Out", image: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" },
  { id: "delivery", name: "Delivery", image: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png", activeImage: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" },
  { id: "nightlife", name: "Nightlife", image: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" }
];

export const mockFilters = [
  { id: "rating", label: "Rating: 4.0+" },
  { id: "pureVeg", label: "Pure Veg" },
  { id: "safeAndHygienic", label: "Safe & Hygienic" },
  { id: "deliveryTime", label: "Fast Delivery" },
  { id: "greatOffers", label: "Great Offers" }
];

export const mockDetailData = {
  id: "1",
  name: "Truffles",
  about: "Cafe, American, Continental, Fast Food, Italian, Beverages",
  address: "Koramangala 5th Block, Bangalore",
  timing: "11am – 11pm (Today)",
  rating: 4.5,
  reviewsCount: "32.4K",
  images: [
    realImages[0],
    realImages[1],
    realImages[2]
  ],
  menu: [
    {
      category: "Recommended",
      items: [
        { id: "m1", name: "All-American Cheese Burger", price: 245, rating: 4.6, votes: 1204, description: "Juicy chicken patty, melt-in-the-mouth cheese, fresh lettuce and our secret sauce.", image: realImages[3] },
        { id: "m2", name: "Ferrero Rocher Shake", price: 195, rating: 4.5, votes: 890, description: "Rich chocolate shake blended with genuine Ferrero Rocher chocolates.", image: realImages[4] },
        { id: "m3", name: "Peri Peri Chicken Pizza", price: 345, rating: 4.3, votes: 450, description: "Spicy peri peri chicken chunks, jalapenos, and mozzarella.", image: realImages[5] }
      ]
    },
    {
      category: "Desserts",
      items: [
        { id: "m4", name: "Chocolate Death Cake", price: 180, rating: 4.7, votes: 320, description: "Triple layered rich chocolate cake.", image: realImages[6] }
      ]
    }
  ]
};