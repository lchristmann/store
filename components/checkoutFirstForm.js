export default function CheckoutFirstForm({ data, handleChange, handleContinue }) {

    return (
        <form>
            <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

            <div className="mt-4">
                <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                    <input type="email" id="email-address" name="email" autocomplete="email" value={data.email} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                <div className="mt-4 grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                        <label for="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                        <div className="mt-1">
                            <input type="text" id="first-name" name="firstname" autocomplete="given-name" value={data.firstname} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>

                    <div>
                        <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                        <div className="mt-1">
                            <input type="text" id="last-name" name="lastname" autocomplete="family-name" value={data.lastname} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label for="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <div className="mt-1">
                            <input type="text" name="address" id="address" autocomplete="street-address" value={data.address} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>

                    <div>
                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                        <div className="mt-1">
                            <input type="text" name="city" id="city" autocomplete="address-level2" value={data.city} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>

                    <div>
                        <label for="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <div className="mt-1">
                            <select id="country" name="country" autocomplete="country-name" value={data.country} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
                                <option value="">Select country</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="USA">United States</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label for="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                        <div className="mt-1">
                            <input type="text" name="region" id="region" autocomplete="address-level1" value={data.region} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>

                    <div>
                        <label for="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
                        <div className="mt-1">
                            <input type="text" name="postalCode" id="postal-code" autocomplete="postal-code" value={data.postalCode} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label for="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <div className="mt-1">
                            <input type="text" name="phone" id="phone" autocomplete="tel" value={data.phone} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-6 flex items-center justify-between">
                <button type="button" onClick={handleContinue}  className="w-auto rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 order-last ml-6">Continue</button>
                <p className="text-sm text-gray-500 text-left">You won&apos;t be charged until the next step.</p>
            </div>
        </form>
    );
}