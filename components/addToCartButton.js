"use client";

import cookie from "js-cookie";
import { useState } from "react";

export default function AddToCartButton({ productId }) {

    const [added, setAdded] = useState(false);

    function addToCart(productId) {
        const cart = cookie.get('cart');
    
        let items = [];
    
        // e.g. [{product: 1, quantity: 3}, {product: 3, quantity: 2}]
        if (cart) items = JSON.parse(cart);
    
        const index = items.findIndex(item => item.product === productId);
    
        // increase quantity or add product to cookie
        if (index > -1) items[index].quantity++;
        else items.push({product: productId, quantity: 1});
    
        cookie.remove('cart');
        cookie.set('cart', JSON.stringify(items), { expires: 365 });

        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    }

    return (
        <button onClick={() => addToCart(productId)}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
            {added && (
                <svg className="mr-2 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
                </svg>
            )}
            Add{added && "ed"} to Cart
        </button>
    );
}