import React from 'react';

const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto px-4 py-3'>
            <div className='flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8'>
                <a className='hover:text-red-700' href="">হোম</a>
                <a className='hover:text-red-700' href="">রাজনীতি</a>
                <a className='hover:text-red-700' href="">বিশ্ব</a>
                <a className='hover:text-red-700' href="">অর্থনীতি</a>
                <a className='hover:text-red-700' href="">স্বাস্থ্য</a>
                <a className='hover:text-red-700' href="">খেলা</a>
                <a className='hover:text-red-700' href="">প্রযুক্তি</a>
                <a className='hover:text-red-700' href="">দেখুন</a>
            </div>
        </nav>
    );
};

export default Navbar;








