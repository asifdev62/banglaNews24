
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center max-w-xl">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-red-700">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-800">
                    Page Not Found!
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-500 leading-7">
                    দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
                    পেজটি সরিয়ে ফেলা হতে পারে অথবা URL টি ভুল হতে পারে।
                </p>

                {/* Home Button */}
                <Link
                    href="/"
                    className="inline-block mt-8 rounded-lg bg-red-700 px-7 py-3 font-semibold text-white transition hover:bg-red-600 hover:shadow-lg"
                >
                    ← Back to Home
                </Link>

                {/* Website Name */}
                <p className="mt-10 text-sm text-gray-500">
                    Bangla News 24
                </p>

            </div>
        </main>
    );
};

export default NotFound;
