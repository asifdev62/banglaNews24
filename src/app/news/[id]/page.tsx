// import Image from "next/image";

// interface NewsBodyItem {
//     type: string;
//     text?: string;
//     url?: string;
//     width?: number;
//     height?: number;
//     caption?: string;
//     altText?: string;
// }

// interface News {
//     id: string;
//     title: string;
//     description?: {
//         blocks?: {
//             model?: {
//                 blocks?: {
//                     model?: {
//                         text?: string;
//                     };
//                 }[];
//             };
//         }[];
//     };
//     imageUrl: string;
//     firstPublished?: string;
//     byline?: {
//         name?: string;
//         role?: string;
//     }[];
//     source?: string;
//     wordCount?: number;
//     body?: NewsBodyItem[];
// }

// interface NewsDetailPageProps {
//     params: Promise<{
//         id: string;
//     }>;
// }

// const NewsDetailPage = async ({
//     params,
// }: NewsDetailPageProps) => {

//     const { id } = await params;

//     console.log("News ID:", id);

//     const res = await fetch(
//         `https://news-api-v2.vercel.app/api/article/${id}`
//     );

// const res = await fetch(
//     `https://news-api-v2.vercel.app/api/article/${id}`,
//     {
//         cache: "no-store",
//     }
// );

// const data = await res.json();

// console.log("API Response:", data);

// const news: News | undefined = data?.data;

// if (!news) {
//     return (
//         <div className="max-w-5xl mx-auto px-4 py-10">
//             <h2 className="text-2xl font-bold text-red-600">
//                 News not found
//             </h2>

//             <p className="mt-3 text-gray-500">
//                 ID: {id}
//             </p>
//         </div>
//     );
// }
//         return (
//             <div className="max-w-5xl mx-auto px-4 py-10">
//                 <h2 className="text-2xl font-bold text-red-600">
//                     News not found
//                 </h2>

//                 <p className="mt-3 text-gray-500">
//                     ID: {id}
//                 </p>
//             </div>
//         );
//     }

//     const description =
//         news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

//     const author = news.byline?.[0]?.name;

//     const date = news.firstPublished
//         ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
//               day: "numeric",
//               month: "long",
//               year: "numeric",
//           })
//         : "";

//     const firstImageIndex =
//         news.body?.findIndex(
//             (item) => item.type === "image"
//         ) ?? -1;

//     return (
//         <main className="max-w-5xl mx-auto px-4 py-8">

//             {/* Title */}
//             <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//                 {news.title}
//             </h1>

//             {/* Description */}
//             {description && (
//                 <p className="text-lg md:text-xl text-gray-600 leading-9 mt-6">
//                     {description}
//                 </p>
//             )}

//             {/* Author / Date */}
//             <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-y py-4 mt-6">

//                 {author && <span>{author}</span>}

//                 {author && date && <span>•</span>}

//                 {date && <span>{date}</span>}

//                 {news.wordCount && (
//                     <>
//                         <span>•</span>
//                         <span>{news.wordCount} শব্দ</span>
//                     </>
//                 )}

//             </div>

//             {/* Main Image */}
//             <div className="relative w-full aspect-video mt-8">
//                 <Image
//                     src={news.imageUrl}
//                     alt={news.title}
//                     fill
//                     priority
//                     className="object-cover rounded-xl"
//                     sizes="(max-width: 768px) 100vw, 1024px"
//                 />
//             </div>

//             {/* Body */}
//             <article className="mt-10">

//                 {news.body?.map((item, index) => {

//                     // প্রথম image বাদ
//                     if (
//                         item.type === "image" &&
//                         index === firstImageIndex
//                     ) {
//                         return null;
//                     }

//                     // Text
//                     if (item.type === "text") {
//                         return (
//                             <p
//                                 key={index}
//                                 className="text-lg leading-9 text-gray-800 mb-6"
//                             >
//                                 {item.text}
//                             </p>
//                         );
//                     }

//                     // Subheading
//                     if (item.type === "subheading") {
//                         return (
//                             <h2
//                                 key={index}
//                                 className="text-2xl md:text-3xl font-bold mt-10 mb-5"
//                             >
//                                 {item.text}
//                             </h2>
//                         );
//                     }

//                     // Other images
//                     if (item.type === "image" && item.url) {
//                         return (
//                             <figure
//                                 key={index}
//                                 className="my-8"
//                             >
//                                 <Image
//                                     src={item.url}
//                                     alt={
//                                         item.altText ||
//                                         news.title
//                                     }
//                                     width={item.width || 1200}
//                                     height={item.height || 700}
//                                     className="w-full h-auto rounded-xl"
//                                 />

//                                 {item.caption && (
//                                     <figcaption className="text-sm text-gray-500 mt-2">
//                                         {item.caption}
//                                     </figcaption>
//                                 )}
//                             </figure>
//                         );
//                     }

//                     return null;
//                 })}

//             </article>

//         </main>
//     );
// };

// export default NewsDetailPage;








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
    wordCount?: number;
    body?: NewsBodyItem[];
}

interface NewsDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const NewsDetailPage = async ({
    params,
}: NewsDetailPageProps) => {

    const { id } = await params;

    console.log("News ID:", id);

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${id}`,
        {
            cache: "no-store",
        }
    );

    const data = await res.json();

    console.log("API Response:", data);

    const news: News | undefined = data?.data;

    if (!news) {
        return (
            <div className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-red-600">
                    News not found
                </h2>

                <p className="mt-3 text-gray-500">
                    ID: {id}
                </p>
            </div>
        );
    }


    const description =
        news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

    const author = news.byline?.[0]?.name;

    const date = news.firstPublished
        ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
          })
        : "";

    const firstImageIndex =
        news.body?.findIndex(
            (item) => item.type === "image"
        ) ?? -1;

    return (
        <main className="max-w-5xl mx-auto px-4 py-8">

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {news.title}
            </h1>

            {/* Description */}
            {description && (
                <p className="text-lg md:text-xl text-gray-600 leading-9 mt-6">
                    {description}
                </p>
            )}

            {/* Author / Date */}
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
            <div className="relative w-full aspect-video mt-8">

                <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill
                    priority
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 1024px"
                />

            </div>

            {/* Body */}
            <article className="mt-10">

                {news.body?.map((item, index) => {

                    // প্রথম image বাদ
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
                                className="text-2xl md:text-3xl font-bold mt-10 mb-5"
                            >
                                {item.text}
                            </h2>
                        );
                    }

                    // Other images
                    if (
                        item.type === "image" &&
                        item.url
                    ) {
                        return (
                            <figure
                                key={index}
                                className="my-8"
                            >

                                <Image
                                    src={item.url}
                                    alt={
                                        item.altText ||
                                        news.title
                                    }
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


