import Link from 'next/link';


const SignUpPage = () => {
    return (
        <div className='flex justify-center mt-15'>
        
            <form action="">
                <h2 className='text-2xl font-bold text-red-700 text-center mb-5'>সাইন আপ</h2>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                   
                     <label className="label text-gray-700">নাম</label>
                    <input type="text" className="input" placeholder="Name" />

                     <label className="label text-gray-700">Image</label>
                    <input type="Url" className="input" placeholder="Image" />

                    <label className="label text-gray-700">ইমেইল</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label text-gray-700">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn bg-red-700 btn-neutral mt-4 border-none">সাইন আপ করুন</button>
                </fieldset>

               <div className='text-center mt-2'>
                 <p> অ্যাকাউন্ট আছে?{" "} <Link href="/sign-in" className="text-red-600 hover:underline "> সাইন ইন করুন </Link> </p>
               </div>
            </form>
        </div>
    );
};

export default SignUpPage;