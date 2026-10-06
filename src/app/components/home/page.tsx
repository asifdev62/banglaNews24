import MainNews from './MainNews';

const HomePage =async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');

    const data = await res.json();
    const sections = data.data;
    const mainNews = sections[0].articles 
    console.log(mainNews)
    return (
        <div className='p-10'>
            <div>
                <MainNews news={mainNews} />
            </div>
        </div>
    );
};

export default HomePage;