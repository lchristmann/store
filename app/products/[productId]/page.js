import Footer from "@/components/footer";
import Header from "@/components/header";

import dynamic from "next/dynamic";

const ProductClient = dynamic(() => import('@/components/productClient'), { ssr: false })

export default async function Product({ params }) {
  return (
    <>
        <Header />
        <ProductClient productId={params.productId} />
        <Footer />
    </>
  );
}
