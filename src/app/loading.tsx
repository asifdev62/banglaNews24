
const Loading = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-md text-center">

                {/* Spinner */}
                <div className="flex justify-center">
                    <div
                        className="
                            h-12 w-12
                            sm:h-14 sm:w-14
                            md:h-16 md:w-16
                            rounded-full
                            border-4
                            border-gray-200
                            border-t-red-600
                            animate-spin
                        "
                    ></div>
                </div>

                {/* Loading Text */}
                <h2
                    className="
                        mt-5
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        font-bold
                        text-gray-800
                    "
                >
                    Loading...
                </h2>

                {/* Description */}
                <p
                    className="
                        mt-2
                        text-xs
                        sm:text-sm
                        md:text-base
                        leading-6
                        text-gray-500
                        px-2
                    "
                >
                    খবর লোড হচ্ছে, একটু অপেক্ষা করুন...
                </p>

                {/* Skeleton */}
                <div className="mt-8 space-y-3">

                    <div className="h-3 sm:h-4 w-full rounded bg-gray-200 animate-pulse"></div>

                    <div className="h-3 sm:h-4 w-5/6 mx-auto rounded bg-gray-200 animate-pulse"></div>

                    <div className="h-3 sm:h-4 w-2/3 mx-auto rounded bg-gray-200 animate-pulse"></div>

                </div>

                {/* Website Name */}
                <p
                    className="
                        mt-8
                        text-xs
                        sm:text-sm
                        font-medium
                        text-gray-400
                    "
                >
                    Bangla News 24
                </p>

            </div>
        </main>
    );
};

export default Loading;
