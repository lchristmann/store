import { useState } from "react";

export default function CheckoutSecondForm({ data, handleChange, handleDeliveryMethodChange, handleBack, handleSubmit }) {
    const [deliveryMethod, setDeliveryMethod] = useState(data.deliveryMethod);
    const [dataIsMissing, setDataIsMissing] = useState(false);

    function validateAndSubmit() {
        if (isDataComplete()) handleSubmit();
        else setDataIsMissing(true);
    }

    function isDataComplete() {
        return !Object.values(data).some(value => !value)
    }

    return (
        <form>
            <fieldset>
                <legend className="text-lg font-medium text-gray-900">Delivery method</legend>

                <div className="mt-4 grid grid-cols-2 gap-y-6 gap-x-4">
                    <label onClick={() => { setDeliveryMethod("standard"); handleDeliveryMethodChange("standard") }} className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${deliveryMethod === "standard" ? "ring-2 ring-indigo-500 border-transparent" : "border border-gray-300"}`}>
                        <span className="flex flex-1">
                            <span className="flex flex-col">
                                <span className="block text-sm font-medium text-gray-900">Standard</span>
                                <span className="mt-1 flex items-center text-sm text-gray-500">4-10 business days</span>
                                <span className="mt-6 text-sm font-medium text-gray-900">$5.00</span>
                            </span>
                        </span>
                        <svg className={`h-5 w-5 text-indigo-600 ${deliveryMethod === "standard" ? "" : "hidden"}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </label>
                    <label onClick={() => { setDeliveryMethod("express"); handleDeliveryMethodChange("express") }} className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${deliveryMethod === "express" ? "ring-2 ring-indigo-500 border-transparent" : "border border-gray-300"}`}>
                        <span className="flex flex-1">
                            <span className="flex flex-col">
                                <span className="block text-sm font-medium text-gray-900">Express</span>
                                <span className="mt-1 flex items-center text-sm text-gray-500">2-5 business days</span>
                                <span className="mt-6 text-sm font-medium text-gray-900">$16.00</span>
                            </span>
                        </span>
                        <svg className={`h-5 w-5 text-indigo-600 ${deliveryMethod === "express" ? "" : "hidden"}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </fieldset>

            <h2 className="mt-10 border-t border-gray-200 pt-10 text-lg font-medium text-gray-900">Payment</h2>

            <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="col-span-4">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
                    <div className="mt-1">
                        <input type="text" id="card-number" name="creditCardNumber" autoComplete="cc-number" value={data.creditCardNumber} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                    </div>
                </div>

                <div className="col-span-4">
                    <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">Name on card</label>
                    <div className="mt-1">
                        <input type="text" id="name-on-card" name="creditCardName" autoComplete="cc-name" value={data.creditCardName} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                    </div>
                </div>

                <div className="col-span-3">
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                    <div className="mt-1">
                        <input type="text" id="expiration-date" name="creditCardExpiration" autoComplete="cc-exp" value={data.creditCardExpiration} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                    <div className="mt-1">
                        <input type="text" id="cvc" name="creditCardCVC" autoComplete="csc" value={data.creditCardCVC} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-6 flex items-center justify-between">
                <button type="button" onClick={handleBack} className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Back</button>
                <button type="button" onClick={validateAndSubmit} className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Pay {data.total} $</button>
            </div>

            {dataIsMissing && (
            <div className="mt-6 rounded-md bg-red-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L8.93934 10L7.21967 11.7197C6.92678 12.0126 6.92678 12.4874 7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803L10 11.0607L11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803C13.0732 12.4874 13.0732 12.0126 12.7803 11.7197L11.0607 10L12.7803 8.28033C13.0732 7.98744 13.0732 7.51256 12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967L10 8.93934L8.28033 7.21967Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">All fields must be populated.</h3>
                    </div>
                </div>
            </div>
            )}
        </form>
    );
}