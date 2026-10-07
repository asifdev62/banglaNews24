import Image from 'next/image';
import UserInfo from './userInfo';


const HeaderPage = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })
    return (
        <div className="max-w-7xl mx-auto px-4 py-4">

            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">

                {/* Empty space - Desktop */}
                <div className="hidden md:block"></div>

                {/* Logo + Title */}
                <div className="flex items-center justify-center gap-2">
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        width={30}
                        height={30}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0"
                    />

                    <div>
                        <h1 className="text-2xl md:text-2xl font-bold text-red-700 whitespace-nowrap">
                            Bangla News 24
                        </h1>

                        <p className="text-sm md:text-base text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
        
               <UserInfo />

            </div>

        </div>
    );
};

export default HeaderPage;



