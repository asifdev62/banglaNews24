
import Link from "next/link";

interface Items {
    slug: string;
    title: string;
    topicid: string | null;
    url: string;
    scrapable: boolean;
}

const Navbar = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/categories"
    );

    const data = await res.json();
    const items: Items[] = data.data;

    const filteredItems = items.filter((item) => item.scrapable);

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center gap-4 md:gap-6 py-3 overflow-x-auto whitespace-nowrap">

                    <Link
                        className="hover:text-red-700 font-medium shrink-0 text-gray-700"
                        href="/"
                    >
                        হোম
                    </Link>

                    {filteredItems.map((item) => (
                        <Link
                            className="hover:text-red-700 font-medium shrink-0 text-gray-700"
                            key={item.slug}
                            href={`/categoryes/${item.slug}`}
                        >
                            {item.title}
                        </Link>
                    ))}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
