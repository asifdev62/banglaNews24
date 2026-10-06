interface MostReadNews{
    id:string,
    title:string
}


const MostRead =async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')

const data = await res.json();

const allNews:MostReadNews[] = data.data;

console.log(allNews)
    return (
        <div className="card bg-base-100 w-full shadow-sm p-4 sm:p-5">
            <h2 className="text-xl font-bold text-red-600 mb-5">সর্বাধিক পঠিত</h2>
        
        <div className="grid gap-4">
            {
                allNews.map((news, i) => <div className="flex gap-3 border-b border-gray-200 pb-3 last:border-none" key={news.id}>

                    <p className="text-red-600 font-bold text-lg">{i+1}</p>

                <h2 className="font-bold text-sm sm:text-base">{news.title}</h2>
                </div>)
            }
        </div>
        </div>
    );
};

export default MostRead;