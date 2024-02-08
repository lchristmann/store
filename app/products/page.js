import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Header />
      <main className="pt-4">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-y-10 grid-cols-4 gap-x-8">

            <Link href="/products/1">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-1.jpg" alt="Earthen Bottle" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </Link>
            <Link href="/products/2">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-2.jpg" alt="Nomad Tumbler" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </Link>
            <Link href="/products/3">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-3.jpg" alt="Focus Paper Refill" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </Link>
            <Link href="/products/4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-4.jpg" alt="Focus Paper Refill" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </Link>

            <Link href="/products/5">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-5.jpg" alt="Earthen Bottle" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </Link>
            <Link href="/products/6">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-6.jpg" alt="Nomad Tumbler" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </Link>
            <Link href="/products/7">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-7.jpg" alt="Focus Paper Refill" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </Link>
            <Link href="/products/8">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-7 aspect-w-7">
                <Image src="/images/product-8.jpg" alt="Focus Paper Refill" fill className="hover:opacity-75 object-cover object-center" priority/>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </Link>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
