import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Checkout() {
    return (
        <>
            <Header />
            {/* probably make a own "use client" component here - Header needs to be SSR'd because it uses getServerSession
            might think about conditional rendering though, to make this 100% CSR'd for maximum performance :) BUT TEST THROUGH LOGGING THAT THE HEADER THEN REALLY IS ONLY CSR'd */}
            {/* don't forget to clear both cart and checkout cookies in the end */}
            <Footer />
        </>
    );
}