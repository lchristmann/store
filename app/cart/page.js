import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { MongoClient } from "mongodb";
import CheckoutButton from "@/components/checkoutButton";

export const dynamic = 'force-dynamic';

// e.g. [{product: 1, quantity: 3}, {product: 3, quantity: 2}] -> [{product: 1, quantity: 3, name: "bottle", price: 23}, {...}]
async function enrichAndAdjustCart(cart) {
    const items = JSON.parse(cart.value);

    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.DB_URI);
        await mongoClient.connect();
        const db = mongoClient.db('woodruff-woodstore');
    
        // iterate in reverse because the array is re-indexed when I do splice() to remove a product
        for (let i = items.length - 1; i >= 0; i--) {
            const product = await db.collection('products').findOne({ id: items[i].product }, { projection: { name: 1, inStock: 1, imageSrc: 1, price: 1, _id: 0 } });
            
            // enrich the item with more information
            items[i].name = product.name;
            items[i].imageSrc = product.imageSrc;
            items[i].price = product.price;

            // if the user had more products in the cart than in stock, reduce the amount to the ones in stock | if 0, remove the item
            if (items[i].quantity > product.inStock) items[i].quantity = product.inStock;
            if (product.inStock === 0) items.splice(i, 1);
        }

        return items;        
      } catch (error) {
        console.log(error);
      } finally {
        await mongoClient.close();
      }
}

function calculateTotal(items) {
    return items.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
}

export default async function Cart() {
    const cart = cookies().get('cart');
    const cartIsNotEmpty = !!cart;

    let items, total;
    if (cartIsNotEmpty) {
        items = await enrichAndAdjustCart(cart);
        total = calculateTotal(items);
    }

    return (
        <>
            <Header />
            <main className="mx-auto max-w-2xl pt-4">
                {cartIsNotEmpty && (<>
                    <ul className="divide-y divide-gray-200 border-b border-gray-200">
                    {items.map(item => (
                        <li className="flex py-6" key={item.product}>
                            <Image src={item.imageSrc} width={128} height={128} alt={item.name} className="rounded-md object-cover object-center h-32 w-32"/>

                            <div className="flex flex-1 flex-col ml-6">
                                <div className="flex justify-between">
                                    <h4 className="text-sm">
                                        <Link href={`/products/${item.product}`} className="font-medium text-gray-700 hover:text-gray-800">{item.name}</Link>
                                    </h4>
                                    <p className="text-sm font-medium text-gray-900">${item.price}</p>
                                </div>

                                <div className="flex flex-1 items-end">
                                    <p className="flex items-center space-x-2 text-sm text-gray-700">
                                        <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item.quantity}x</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>

                    <div className="flex items-center justify-between mt-10">
                        <p className="text-base font-medium text-gray-900">Total</p>
                        <p className="text-base font-medium text-gray-900">${total}</p>
                    </div>

                    <CheckoutButton items={items} />
                </>)}
                <p className="mt-6 text-center text-sm text-gray-500">
                    <Link href="/products" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continue Shopping<span> &rarr;</span>
                    </Link>
                </p>
            </main>
            <Footer />
        </>
    );
}