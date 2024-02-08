import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

import { MongoClient } from "mongodb";

async function getProducts() {
  let mongoClient;

  try {
    mongoClient = new MongoClient(process.env.DB_URI);
    await mongoClient.connect();
    const db = mongoClient.db('woodruff-woodstore');

    const cursor = db.collection('products')
      .find({})
      .project({ id: 1, name: 1, imageSrc: 1, price: 1, _id: 0 })
      .sort({ id: 1 });

    return await cursor.toArray();
    
  } catch (error) {
    console.log(error);
  } finally {
    await mongoClient.close();
  }
}

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <Header />
      <main className="pt-4">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-y-10 grid-cols-4 gap-x-8">

            {products.map(product => (
              <Link href={`/products/${product.id}`}>
                <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                  <Image src={product.imageSrc} alt={product.name} fill className="hover:opacity-75 object-cover object-center" priority/>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </Link>
            ))}

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}