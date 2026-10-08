



import Image from "next/image";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    category: string;
}

interface MainNewsProps {
    news: News[];
}

const MainNews = ({ news = [] }: MainNewsProps) => {
    const [firstNews, ...othersNews] = news;
    console.log("FIRST NEWS ID:", firstNews?.id);
console.log("FIRST NEWS OBJECT:", firstNews);

    if (!firstNews) {
        return <p>No news available</p>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-5">

            {/* Main News */}
            <Link
                href={`/news/${firstNews.id}`}
                className="w-full md:flex-1"
            >
                <div className="card bg-base-100 shadow-sm h-full hover:shadow-md transition cursor-pointer">

                    <figure>
                        <Image
                            src={firstNews.imageUrl}
                            alt={firstNews.title}
                            width={800}
                            height={500}
                            loading="eager"
                            className="w-full h-60 sm:h-72 md:h-80 object-cover"
                        />
                    </figure>

                    <div className="card-body">

                        <p className="text-red-600 font-semibold">
                            {firstNews.category}
                        </p>

                        <h2 className="card-title text-xl md:text-2xl">
                            {firstNews.title}
                        </h2>

                        {firstNews.description && (
                            <p className="text-gray-600">
                                {firstNews.description}
                            </p>
                        )}

                    </div>
                </div>
            </Link>

            {/* Other News */}
            <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-sm">

                {othersNews.slice(0, 5).map((otherNews) => (

                    <Link
                        href={`/news/${otherNews.id}`}
                        key={otherNews.id}
                        className="block"
                    >
                        <div className="p-4 border-b border-gray-300 last:border-none hover:bg-gray-50 transition">

                            <p className="text-red-600 font-semibold mb-2">
                                {otherNews.category}
                            </p>

                            <h2 className="font-bold text-sm sm:text-base leading-6">
                                {otherNews.title}
                            </h2>

                        </div>
                    </Link>

                ))}

            </div>

        </div>
    );
};

export default MainNews;