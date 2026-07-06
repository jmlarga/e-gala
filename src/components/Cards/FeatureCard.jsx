export default function FeatureCard({ item }) {
    return (
        <div className="rounded-2xl bg-[#e1c778]/20 p-4 hover:bg-[#7db168]/20 transition">
            <h3 className="font-bold">
                {item.name}
            </h3>

            <p className="text-sm opacity-80">
                {item.desc}
            </p>
        </div>
    );
}