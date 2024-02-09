import { MongoClient } from "mongodb";

const productsDocs = [
    {
        id: 1,
        name: "Earthen Bottle",
        description: "Crafted with care, the Earthen Bottle boasts timeless elegance. Perfect for both hot and cold beverages, it's a stylish companion for any journey.",
        inStock: 10,
        imageSrc: "/images/product-1.jpg",
        price: 48,
        ratings: [
            {
                name: "Emily Selman",
                date: "July 16, 2021",
                text: "Absolutely love this bottle! It keeps my drinks at the perfect temperature.",
                stars: 5,
            },
            {
                name: "Hector Gibbons",
                date: "July 12, 2021",
                text: "Great quality and stylish design. Highly recommend!",
                stars: 4,
            }
        ],
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        description: "Adventure awaits with the Nomad Tumbler. Designed for the modern explorer, it keeps drinks at the perfect temperature, whether you're on the move or taking a moment to pause.",
        inStock: 0,
        imageSrc: "/images/product-2.jpg",
        price: 35,
        ratings: [],
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        description: "Elevate your writing experience with the Focus Paper Refill. Smooth and durable, it's the ideal choice for capturing your thoughts and ideas with precision.",
        inStock: 10,
        imageSrc: "/images/product-3.jpg",
        price: 89,
        ratings: [
            {
                name: "Sarah Johnson",
                date: "August 3, 2021",
                text: "The paper refill is smooth and durable. Perfect for writing or sketching.",
                stars: 3,
            }
        ],        
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        description: "Precision meets style with the Machined Mechanical Pencil. Crafted with precision engineering, it offers unparalleled performance for the discerning writer or artist.",
        inStock: 10,
        imageSrc: "/images/product-4.jpg",
        price: 32,
        ratings: [
            {
                name: "David Smith",
                date: "September 10, 2021",
                text: "This pencil is fantastic! It writes smoothly and feels very sturdy.",
                stars: 5,
            }
        ],
    },
    {
        id: 5,
        name: "Card Holder",
        description: "Organize your essentials in style with the sleek Card Holder. Designed for convenience and elegance, it's the perfect accessory for your everyday adventures.",
        inStock: 0,
        imageSrc: "/images/product-5.jpg",
        price: 64,
        ratings: [
            {
                name: "Sophia Adams",
                date: "October 20, 2021",
                text: "Love my new card holder! It's sleek and practical.'",
                stars: 4,
            },
            {
                name: "Alex Johnson",
                date: "October 25, 2021",
                text: "Great quality and holds all my cards securely.",
                stars: 4,
            }
        ],
    },
    {
        id: 6,
        name: "Focus Multi-Pack",
        description: "Versatility meets quality with the Focus Multi-Pack. Whether you're sketching, writing, or planning, this set has you covered with its assortment of high-quality tools.",
        inStock: 10,
        imageSrc: "/images/product-6.jpg",
        price: 28,
        ratings: [],
    },
    {
        id: 7,
        name: "Brass Scissors",
        description: "Add a touch of sophistication to your crafting projects with Brass Scissors. Designed for precision and durability, they're an essential tool for any DIY enthusiast.",
        inStock: 10,
        imageSrc: "/images/product-7.jpg",
        price: 50,
        ratings: [
            {
                name: "Jack Wilson",
                date: "November 5, 2021",
                text: "These scissors are sharp and precise. Perfect for crafting!",
                stars: 5,
            },
            {
                name: "Emma Brown",
                date: "November 12, 2021",
                text: "High-quality scissors. Very satisfied with my purchase.",
                stars: 4,
            }
        ],
    },
    {
        id: 8,
        name: "Carry Case",
        description: "Keep your essentials organized on the go with the Carry Case. Stylish and practical, it's the perfect companion for your daily adventures.",
        inStock: 10,
        imageSrc: "/images/product-8.jpg",
        price: 35,
        ratings: [
            {
                name: "Liam Taylor",
                date: "December 1, 2021",
                text: "The carry case is very practical and stylish. It keeps all my essentials organized on the go.",
                stars: 4,
            }
        ],
    },
];

let mongoClient;

try {
    // connect to database
    mongoClient = new MongoClient("mongodb://localhost:27017");
    await mongoClient.connect();
    const db = mongoClient.db('woodruff-woodstore');

    // seed products collection
    const products = db.collection('products');
    const result = await products.insertMany(productsDocs);
    console.log(`${result.insertedCount} documents were inserted into products collection.`);

} catch (error) {
    console.log(error);
} finally {
    await mongoClient.close();
}