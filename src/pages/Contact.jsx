import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaTag,
    FaCommentDots,
    FaPaperPlane
} from "react-icons/fa";
import API_URL from "../config/api";
import toast from "react-hot-toast";

function FormField({
    icon,
    textarea = false,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div className="relative">
            <span
                className={`absolute left-4 text-gray-400 ${
                    textarea
                        ? "top-5"
                        : "top-1/2 -translate-y-1/2"
                }`}
            >
                {icon}
            </span>

            {textarea ? (
                <textarea
                    rows={6}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    placeholder={placeholder}
                    className="w-full border rounded-xl pl-11 pr-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#1a6859]"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    placeholder={placeholder}
                    className="w-full border rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a6859]"
                />
            )}
        </div>
    );
}
export default function Contact() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
	});

	const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			const response = await fetch(`${API_URL}/e-gala/v1/contact`, {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify(form),
				});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Failed to send message.");
			}

			toast.success(
				data.message || "Thank you! Your message has been sent."
			);

			setForm({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

		} catch (error) {
			console.error(error);

			toast.error(
				error.message || "Something went wrong. Please try again."
			);
		} finally {
			setLoading(false);
		}
	};
    return (
        <main className="min-h-screen bg-[#f8f8f5]">
            <div className="max-w-6xl mx-auto px-6 py-16">

                <h1 className="text-4xl font-bold text-[#2F5233] mb-4">
                    Contact Us
                </h1>
			
                <p className="text-gray-700 mb-10">
                    Have questions, suggestions, or found incorrect information?
                    We'd love to hear from you.
                </p>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Contact Form */}

                    <div className="bg-white rounded-2xl shadow-md p-8">

                        <h2 className="text-2xl font-semibold text-[#2F5233] mb-6">
                            Send a Message
                        </h2>
						<form onSubmit={handleSubmit} className="space-y-5">

    <FormField
        icon={<FaUser />}
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
    />

    <FormField
        icon={<FaEnvelope />}
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
    />

    <FormField
        icon={<FaTag />}
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
    />

    <FormField
        textarea
        icon={<FaCommentDots />}
        name="message"
        placeholder="Type your message..."
        value={form.message}
        onChange={handleChange}
    />

    <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1a6859] hover:bg-[#155447] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
    >
        <FaPaperPlane />

        {loading ? "Sending..." : "Send Message"}
    </button>

</form>

                    </div>

                    {/* Contact Information */}

                    <div className="space-y-6">

                        <div className="bg-white rounded-2xl shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-[#2F5233] mb-4">
                                Get in Touch
                            </h2>

                            <p className="text-gray-700 leading-8">
                                Thank you for helping improve e-Gala.
                                Whether you're reporting incorrect destination
                                information, suggesting new features, or simply
                                sharing feedback, every message is appreciated.
                            </p>
                        </div>

                        <div className="bg-[#EAF5E2] rounded-2xl p-8 border border-[#7db168]/30">

                            <h3 className="font-semibold text-[#2F5233] text-xl mb-3">
                                Developer
                            </h3>

                            <p className="text-gray-700">
                                John Mark Larga
                            </p>

                            <p className="text-gray-700 mt-2">
                                e-Gala is currently in Beta and is continuously
                                improving through community feedback.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}
