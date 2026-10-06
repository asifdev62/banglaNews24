import Image from 'next/image';
import React from 'react';

const HeaderPage = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })
    return (
        <div className="max-w-7xl mx-auto px-4 py-4">

            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">

                {/* Empty space - Desktop */}
                <div className="hidden md:block"></div>

                {/* Logo + Title */}
                <div className="flex items-center justify-center gap-3">
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-14 h-14 md:w-16 md:h-16"
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
        
                 <div className="flex justify-center md:justify-end gap-2 md:translate-x-10 lg:translate-x-30 sm:translate-0">
                    <button className="px-4 md:px-3 py-2 rounded-sm font-semibold text-gray-700 text-sm">
                        সাইন ইন
                    </button>

                    <button className="bg-red-700 px-4 md:px-3 py-2 rounded-sm text-white font-semibold text-sm">
                        সাইন আপ
                    </button>
                </div>


            </div>

        </div>
    );
};

export default HeaderPage;