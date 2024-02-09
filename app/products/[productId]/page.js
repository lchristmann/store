import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

import { MongoClient } from "mongodb";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getProduct(productId) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.DB_URI);
        await mongoClient.connect();
        const db = mongoClient.db('woodruff-woodstore');
    
        return await db.collection('products').findOne({ id: productId });
        
      } catch (error) {
        console.log(error);
      } finally {
        await mongoClient.close();
      }
}

export default async function Product({ params }) {
  const product = await getProduct(params.productId);

  if (!product) notFound();

  return (
    <>
        <Header />
        <main className="pt-4">
            <div className="mx-auto max-w-7xl px-8 grid grid-cols-2 gap-x-16">

                <div className="max-w-lg">

                    <h1 className="font-bold tracking-tight text-gray-900 text-4xl">{product.name}</h1>

                    <section className="mt-4">

                        <p className="text-gray-900 text-xl">${product.price}</p>

                        <div className="mt-6 space-y-6">
                            <p className="text-base text-gray-500">{product.description}</p>
                        </div>

                        <div className="mt-6 flex items-center">
                            {product.inStock > 0 ? (
                                <>
                                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
                                    </svg>
                                    <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
                                </>
                            ) : (
                                <>
                                    <svg class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                                    </svg>
                                    <p className="ml-2 text-sm text-gray-500">Soon available again</p>
                                </>
                            )}
                        </div>

                    </section>

                    <div className="mt-10">
                        <form>
                            <button type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                Add to Cart
                            </button>
                        </form>
                    </div>

                    <section className="mt-12">

                        {product.ratings.map((rating, ratingIndex) => (
                            <article key={ratingIndex} className="py-4 border-t border-gray-200">

                                <div className="flex space-x-4 text-sm text-gray-500">
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">{rating.name}</h3>
                                        <p><time>{rating.date}</time></p>
                                    </div>
                                    <div className="flex items-start">
                                        {Array.from({ length: 5 }, (_, starsIndex) => (
                                            <svg key={starsIndex} className={`h-5 w-5 ${starsIndex < rating.stars ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-sm text-gray-500 mt-2">
                                    <p>{rating.text}</p>
                                </div>

                            </article>
                        ))}

                    </section>

                </div>

                <div className="mt-10">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                        <Image src={product.imageSrc} alt={product.name} height={600} width={400} className="object-cover object-center" priority/>
                    </div>
                </div>

            </div>
        </main>
        <Footer />
    </>
  );
}
