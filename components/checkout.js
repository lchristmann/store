import cookie from "js-cookie";
import { notFound } from "next/navigation";
import CheckoutFirstForm from "./checkoutFirstForm";
import CheckoutSecondForm from "./checkoutSecondForm";
import { useState } from "react";
import { checkout } from "@/app/actions";

export default function Checkout() {
    
    function readCheckoutCookie() {
        const checkoutCookie = cookie.get('checkout');
        const checkoutCookieExists = !!checkoutCookie;
    
        if (!checkoutCookieExists) notFound();
    
        const checkout = JSON.parse(checkoutCookie);
    
        return {
            items: checkout.items,
            user: checkout.user,
            total: calculateTotal(checkout.items)
        };
    }
    
    function calculateTotal(items) {
        return items.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
    }

    function splitUsername(name) {
        const username = name.split(" ");
        const lastname = username.pop();
        const firstname = username.join(" ");
        return {
            firstname,
            lastname,
        }
    }

    const { items, user, total } = readCheckoutCookie();

    const { firstname, lastname } = splitUsername(user.name);

    const [activeForm, setActiveForm] = useState(0);

    const [data, setData] = useState({
        total: total,
        email: user.email,
        firstname: firstname,
        lastname: lastname,
        address: "",
        city: "",
        country: "",
        region: "",
        postalCode: "",
        phone: "",
        deliveryMethod: "standard",
        creditCardNumber: "",
        creditCardName: "",
        creditCardExpiration: "",
        creditCardCVC: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleDeliveryMethodChange = (value) => {
        setData({
            ...data,
            deliveryMethod: value,
        });
    };

    return (
        <main className="mx-auto max-w-2xl pt-4">
            {activeForm === 0 ? (
                <CheckoutFirstForm data={data} handleChange={handleChange} handleContinue={() => setActiveForm(1)} />
            ) : (
                <CheckoutSecondForm data={data} handleChange={handleChange} handleDeliveryMethodChange={handleDeliveryMethodChange} handleBack={() => setActiveForm(0)} handleSubmit={() => checkout(items, data)} />
            )}
        </main>
    );
}