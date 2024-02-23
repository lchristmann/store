'use server';

import { MongoClient } from "mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkout(items, data) {
    
    let mongoClient = new MongoClient(process.env.DB_URI);
    await mongoClient.connect();
    const db = mongoClient.db('woodruff-woodstore');

    async function isTotalPriceValid() {
        // get prices of items from database and validate if the passed price is valid
        let total = 0;
        
        for (let item of items) {
            const price = await db.collection('products').findOne({ id: item.product }, { projection: { price: 1, _id: 0 } });
            total += price * item.quantity;
        }

        return total === data.total;
    }

    if (isTotalPriceValid()) {
        // save the order to the database
        const result = await db.collection('orders').insertOne({ items, data, orderedAt: new Date() });
        console.log(`The order document was inserted with the _id: ${result.insertedId}`);

        cookies().delete('cart');
        cookies().delete('checkout');

        redirect('/checkout/success')
    }

    redirect('/checkout/failure');
}

export async function getProduct(productId) {

    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.DB_URI);
        await mongoClient.connect();
        const db = mongoClient.db('woodruff-woodstore');

        return await db.collection('products').findOne({ id: productId }, { projection: { _id: 0 } });
        
    } catch (error) {
        console.log(error);
    } finally {
        await mongoClient.close();
    }
}