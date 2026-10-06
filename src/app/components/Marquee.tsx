
import MarqueeText from 'react-marquee-text';

interface Headlines{
    id: string,
    title: string
}

const MarqueePage =async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news');
    const data = await res.json();
    const headlines:Headlines[] = data.data;
    console.log(headlines)

    return (
        <div className='bg-red-700 text-white w-full overflow-hidden'>
            <div className='flex items-center w-full'>

                <h2 className='shrink-0 bg-red-800 font-bold px-3 py-2 text-sm sm:text-base'>সর্বশেষ</h2>

                <MarqueeText className='py-1' direction='right' duration={5}>
            {
                headlines.map(headline => <span className="inline-flex items-center whitespace-nowrap" key={headline.id}>
                    <span>{headline.title}</span>
                    <span className='mx-3 sm:mx-4 text-lg sm:text-xl'>⬩</span>
                </span>)
            }

            </MarqueeText>
            </div>
        </div>
    );
};

export default MarqueePage;