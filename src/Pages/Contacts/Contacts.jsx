import React from "react";

const Contacts = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-xl font-semibold mb-4">Address</h3>
                        <p className="text-gray-700">
                            123 Main Street <br />
                            City, State, ZIP
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded shadow mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold mb-4">Phone</h3>
                        <p className="text-gray-700">+1 123-456-7890</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow mt-8 lg:mt-0">
                        <h3 className="text-xl font-semibold mb-4">Email</h3>
                        <p className="text-gray-700">contact@example.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
