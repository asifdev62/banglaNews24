
import Image from "next/image";

interface NewsBodyItem {
    type: string;
    text?: string;
    url?: string;
    width?: number;
    height?: number;
    caption?: string;
    altText?: string;
}

interface News {
    id: string;
    title: string;
    description?: {
        blocks?: {
            model?: {
                blocks?: {
                    model?: {
                        text?: string;
                    };
                }[];
            };
        }[];
    };
    imageUrl: string;
    firstPublished?: string;
    byline?: {
        name?: string;
        role?: string;
    }[];
    source?: string;
    sourceUrl?: string;
    wordCount?: number;
    body?: NewsBodyItem[];
}

interface NewsDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
    const { id } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${id}`
    );

    const data = await res.json();

    const news: News = data.data;

    if (!news) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-red-600">
                    News not found
                </h2>
            </div>
        );
    }

    // Description
    const description =
        news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

    // Author
    const author = news.byline?.[0]?.name;

    // Date
    const date = news.firstPublished
        ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        : "";

    return (
        <main className="max-w-5xl mx-auto px-4 py-8">

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                {news.title}
            </h1>

            {/* Description */}
            {description && (
                <p className="text-lg md:text-xl text-gray-600 leading-9 mt-6">
                    {description}
                </p>
            )}

            {/* Author / Date / Word Count */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-y py-4 mt-6">

                {author && (
                    <span>{author}</span>
                )}

                {author && date && (
                    <span>•</span>
                )}

                {date && (
                    <span>{date}</span>
                )}

                {news.wordCount && (
                    <>
                        <span>•</span>
                        <span>{news.wordCount} শব্দ</span>
                    </>
                )}

            </div>

            {/* Main Image */}
            <figure className="mt-8">

                <div className="relative w-full aspect-video">

                    <Image
                        src={news.imageUrl}
                        alt={news.title}
                        fill
                        priority
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 1024px"
                    />

                </div>

            </figure>

            {/* News Body */}

            <article className="mt-10">

                {news.body?.map((item, index) => {

                    // Body-এর প্রথম image বাদ দিচ্ছি
                    // কারণ সেটা Main Image হিসেবে উপরে already দেখানো হয়েছে
                    const firstImageIndex = news.body?.findIndex(
                        (bodyItem) => bodyItem.type === "image"
                    );

                    if (
                        item.type === "image" &&
                        index === firstImageIndex
                    ) {
                        return null;
                    }

                    // Text
                    if (item.type === "text") {
                        return (
                            <p
                                key={index}
                                className="text-lg leading-9 text-gray-800 mb-6"
                            >
                                {item.text}
                            </p>
                        );
                    }

                    // Subheading
                    if (item.type === "subheading") {
                        return (
                            <h2
                                key={index}
                                className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5"
                            >
                                {item.text}
                            </h2>
                        );
                    }

                    // Other Images
                    if (item.type === "image" && item.url) {
                        return (
                            <figure
                                key={index}
                                className="my-8"
                            >
                                <Image
                                    src={item.url}
                                    alt={item.altText || news.title}
                                    width={item.width || 1200}
                                    height={item.height || 700}
                                    className="w-full h-auto rounded-xl"
                                />

                                {item.caption && (
                                    <figcaption className="text-sm text-gray-500 mt-2">
                                        {item.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    return null;
                })}

            </article>

        </main>
    );
};

export default NewsDetailPage;