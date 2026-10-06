import NewsCard from '@/app/components/home/NewsCard';
interface CategoryPageProps {
    params: Promise<{
        id: string;
    }>;
}

interface News {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    category: string;
}

const CategoryPage =async ({params}:CategoryPageProps) => {

    const {id} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
    const data = await res.json()
    const categoryNews:News[] = data.data
    console.log(data)
    return (
        <div>
            <h2 className='text-2xl font-bold border-b-2 border-red-600 mt-5 m-5 p-4'>{data.title}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-5'>
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;