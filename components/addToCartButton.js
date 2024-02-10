"use client";

import cookie from "js-cookie";

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
}

export default function AddToCartButton({ productId }) {
    return (
        <button onClick={() => addToCart(productId)}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
            Add to Cart
        </button>
    );
}