import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Product() {
  return (
    <>
        <Header />
        <main className="pt-4">
            <div className="mx-auto max-w-7xl px-8 grid grid-cols-2 gap-x-16">

                <div className="max-w-lg">

                    <h1 className="font-bold tracking-tight text-gray-900 text-4xl">Earthen Bottle</h1>

                    <section className="mt-4">

                        <p className="text-gray-900 text-xl">$220</p>

                        <div className="mt-6 space-y-6">
                            <p className="text-base text-gray-500">
                            Don&#039;t compromise on snack-carrying capacity with this
                            lightweight and spacious bag. The drawstring top keeps all
                            your favorite chips, crisps, fries, biscuits, crackers, and
                            cookies secure.
                            </p>
                        </div>

                        <div className="mt-6 flex items-center">
                            <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
                            </svg>
                            <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
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

                        <article className="py-4 border-t border-gray-200">

                            <div className="flex space-x-4 text-sm text-gray-500">
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">Emily Selman</h3>
                                    <p><time dateTime="2021-07-16">July 16, 2021</time></p>
                                </div>
                                <div className="flex items-start">
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="text-sm text-gray-500 mt-2">
                                <p>This icon pack is just what I need for my latest project. There&apos;s an icon for just about anything I could ever need. Love the playful look!</p>
                            </div>

                        </article>

                        <article className="py-4 border-t border-gray-200">

                            <div className="flex space-x-4 text-sm text-gray-500">
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">Hector Gibbons</h3>
                                    <p><time dateTime="2021-07-16">July 12, 2021</time></p>
                                </div>
                                <div className="flex items-start">
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-yellow-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="text-gray-300 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="text-sm text-gray-500 mt-2">
                                <p>Really happy with look and options of these icons. I&apos;ve found uses for them everywhere in my recent projects. I hope there will be 20px and 32px versions in the future for further reference and usage!</p>
                            </div>

                        </article>

                    </section>

                </div>

                <div className="mt-10">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                        <Image src="/images/product-1.jpg" alt="Earthen Bottle" height={600} width={400} className="object-cover object-center" priority/>
                    </div>
                </div>

            </div>
        </main>
        <Footer />
    </>
  );
}
