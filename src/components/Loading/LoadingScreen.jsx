import logo from "../../assets/e-gala-logo.png";

export default function LoadingScreen() {
    return (
        <div className="relative h-dvh flex flex-col items-center justify-center bg-[#c7dda8]">

            <img
                src={logo}
                alt="e-Gala Logo"
                className="h-12 animate-pulse"
            />

            <p className="mt-2 text-[10px] text-[#1a6859]/80 font-bold">
                Your Digital Travel Companion to Marinduque
            </p>

            <div className="mt-4 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1a6859] animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-[#1a6859] animate-bounce delay-150"></span>
                <span className="w-2 h-2 rounded-full bg-[#1a6859] animate-bounce delay-300"></span>
            </div>

            {/* Beta Notice */}
            <div className="absolute bottom-6 text-center">
                <span className="inline-block rounded-full bg-[#1a6859] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                    Beta
                </span>

                <p className="mt-2 text-[10px] text-[#1a6859]/70">
                    This application is currently in beta testing.
                </p>
            </div>

        </div>
    );
}