
const Loading = () => {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center">

                {/* Spinner */}
                <div className="flex justify-center">
                    <div className="w-14 h-14 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
                </div>

                {/* Text */}
                <h2 className="mt-6 text-xl font-semibold text-gray-800">
                    Loading...
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    খবর লোড হচ্ছে, একটু অপেক্ষা করুন...
                </p>

            </div>
        </main>
    );
};

export default Loading;

