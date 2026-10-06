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
        <div className="flex flex-col md:flex-row gap-5">
        <div className="card bg-base-100 w-full md:flex-1 shadow-sm">
            <figure>
                <Image
                    src={firstNews.imageUrl}
                    alt="news"
                    width={500}
                    height={500} 
                    className="w-full h-60 sm:h-72 md:h-80 object-cover"/>
            </figure>
            <div className="card-body">
                <p className="text-red-600 font-semibold">{firstNews.category}</p>
                <h2 className="card-title">{firstNews.title}</h2>
                <p>{firstNews.description}</p>
            </div>
        </div>


            <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-sm ">
                {
                    othersNews.slice(0,5).map(otherNews => <div className="p-4 rounded-b-none border-b border-gray-300 last:border-none"  key={otherNews.id}>
                          <p className="text-red-600 font-semibold mb-2 ">{firstNews.category}</p>
                        <h2 className="font-bold text-sm sm:text-base">{otherNews.title}</h2>
                    </div>  )
                }
            </div>
        </div>
    );
};

export default MainNews;