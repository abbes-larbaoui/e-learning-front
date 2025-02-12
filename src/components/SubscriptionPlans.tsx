export default function SubscriptionPlans() {
    return (
        <section id="plans" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800">Choose Your Plan</h2>
                <p className="text-gray-600 mt-2">Select the best plan that fits your needs</p>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <div className="bg-white p-6 shadow-md rounded-lg w-80">
                        <h3 className="text-xl font-semibold text-gray-800">Basic Plan</h3>
                        <p className="text-gray-600 mt-2">Access to all free courses</p>
                        <p className="text-gray-800 font-bold mt-4">$10/month</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg w-80 border-2 border-sky-500">
                        <h3 className="text-xl font-semibold text-gray-800">Pro Plan</h3>
                        <p className="text-gray-600 mt-2">Unlimited access to all courses</p>
                        <p className="text-gray-800 font-bold mt-4">$30/month</p>
                    </div>
                </div>
            </div>
        </section>
    );
}