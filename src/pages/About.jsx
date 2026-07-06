export default function About() {
    return (
        <main className="min-h-screen bg-[#f8f8f5]">
            <div className="max-w-4xl mx-auto px-6 py-16">

                <h1 className="text-4xl font-bold text-[#2F5233] mb-6">
                    About e-Gala
                </h1>

                <p className="text-gray-700 leading-8 mb-6">
                    e-Gala is an independent web application designed to help
                    travelers discover tourist destinations across the Philippines.
                    Its goal is to make tourism information more accessible while
                    promoting local attractions through a simple and modern
                    browsing experience.
                </p>

                <p className="text-gray-700 leading-8 mb-6">
                    The project is currently in its Beta phase and is continuously
                    being improved based on user feedback. Future updates will
                    introduce user accounts, business listings, reviews, and
                    booking features.
                </p>

                <hr className="my-10" />

                <h2 className="text-2xl font-semibold text-[#2F5233] mb-4">
                    Disclaimer
                </h2>

                <p className="text-gray-700 leading-8 mb-4">
                    e-Gala is an independent personal project created and
                    maintained by John Mark Larga.
                </p>

                <p className="text-gray-700 leading-8 mb-4">
                    This website is not affiliated with, endorsed by, or officially
                    connected to any government agency, Local Government Unit
                    (LGU), tourism office, business establishment, or private
                    organization unless explicitly stated.
                </p>

                <p className="text-gray-700 leading-8 mb-4">
                    Every effort is made to provide accurate and up-to-date
                    information. However, destination details, operating hours,
                    entrance fees, contact information, and other content may
                    change without prior notice. Visitors are encouraged to verify
                    important information with the appropriate establishment
                    before making travel plans.
                </p>

                <p className="text-gray-700 leading-8">
                    By using e-Gala, you acknowledge that the information
                    provided is for general informational purposes only.
                </p>

            </div>
        </main>
    );
}