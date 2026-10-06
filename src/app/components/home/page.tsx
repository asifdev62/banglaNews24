import MainNews from './MainNews';
import NewsCard from './NewsCard';

 interface IOtherSection{
    curationId: string,
    title: string,
    articles:{
    id: string,
    title:string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string
    }[];
 }


const HomePage =async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');

    const data = await res.json();
    const sections = data.data;
    const mainNews = sections[0].articles 

    const otherSections:IOtherSection[] = sections.slice(1)
    console.log(otherSections)
    return (
        <div className='p-10'>
            <div>
                <MainNews news={mainNews} />
            </div>


            <div className='my-15'>
                {
                    otherSections.map(otherSection => <div key={otherSection.curationId}>
                        <h2 className='font-bold border-b-2 border-red-600 p-2 mb-5'>{otherSection.title}</h2>

                       <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-5 mb-15'>
                         {
                            otherSection.articles.map(news => <NewsCard key={news.id} news={news}></NewsCard> )
                        }
                       </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomePage;