import Image from 'next/image';
import Link from 'next/link';

interface News {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
}

const NewsCard = ({news}: {news: News}) => {
    return (
        <Link href={`/news/${news.id}`}>
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    src={news.imageUrl}
                    alt="news"
                    width={400}
                    height={400} />
            </figure>
            <div className="card-body ">
                <p className="text-red-600 font-semibold">{news.category}</p>
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
            </div>
        </div>
        </Link>
    );
};

export default NewsCard;