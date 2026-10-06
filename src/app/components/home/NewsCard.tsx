import Image from 'next/image';

interface News {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
}

const NewsCard = ({news}: {news: News}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    src={news.imageUrl}
                    alt="news"
                    width={500}
                    height={500} />
            </figure>
            <div className="card-body">
                <p className="text-red-600 font-semibold">{news.category}</p>
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
            </div>
        </div>
    );
};

export default NewsCard;