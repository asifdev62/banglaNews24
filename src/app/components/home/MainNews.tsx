import Image from "next/image";
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

const MainNews = ({ news = []}:MainNewsProps) => {
  const  [firstNews, ...othersNews] = news
  if(!firstNews){
    return <p>No news available</p>
  }
  console.log(firstNews)
    return (
        <div className="flex gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image
                    src={firstNews.imageUrl}
                    alt="news"
                    width={500}
                    height={500} />
            </figure>
            <div className="card-body">
                <p className="text-red-600 font-semibold">{firstNews.category}</p>
                <h2 className="card-title">{firstNews.title}</h2>
                <p>{firstNews.description}</p>
            </div>
        </div>


            <div>
                {
                    othersNews.slice(0,5).map(otherNews => <div className="bg-gray-50 p-5 border border-gray-300 text-sm " key={otherNews.id}>
                          <p className="text-red-600 font-semibold m-2">{firstNews.category}</p>
                        <h2>{otherNews.title}</h2>
                    </div>  )
                }
            </div>
        </div>
    );
};

export default MainNews;