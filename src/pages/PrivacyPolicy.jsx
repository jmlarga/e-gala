export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#f8f8f5]">
            <div className="max-w-5xl mx-auto px-6 py-16">

                <h1 className="text-4xl font-bold text-[#2F5233] mb-4">
                    Privacy Policy
                </h1>

                <p className="text-gray-700 leading-8 mb-10">
                    Your privacy is important to us. This Privacy Policy explains
                    how e-Gala collects, uses, and protects information while you
                    use the platform.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-[#2F5233] mb-3">
                            Information We Collect
                        </h2>

                        <p className="text-gray-700 leading-7">
                            During the Beta phase, e-Gala does not require users
                            to create an account. Basic technical information,
                            such as browser type, device information, and
                            anonymous usage statistics, may be collected to
                            improve the website.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-[#2F5233] mb-3">
                            How We Use Information
                        </h2>

                        <p className="text-gray-700 leading-7">
                            Information collected is used solely to improve user
                            experience, enhance website performance, identify
                            bugs, and continue developing new features for
                            e-Gala.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-[#2F5233] mb-3">
                            Third-Party Services
                        </h2>

                        <p className="text-gray-700 leading-7">
                            e-Gala may integrate trusted third-party services,
                            such as mapping or analytics providers. These
                            services operate under their own privacy policies.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-[#2F5233] mb-3">
                            Policy Updates
                        </h2>

                        <p className="text-gray-700 leading-7">
                            This Privacy Policy may be updated as e-Gala
                            continues to evolve. Any changes will be reflected
                            on this page with the latest revision date.
                        </p>
                    </div>

                </div>

                <div className="mt-12 bg-[#EAF5E2] border border-[#7db168]/30 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-[#2F5233] mb-3">
                        Questions?
                    </h2>

                    <p className="text-gray-700 leading-7">
                        If you have questions about this Privacy Policy or how
                        your information is handled, please visit the Contact
                        page and get in touch with the developer.
                    </p>
                </div>

            </div>
        </main>
    );
}