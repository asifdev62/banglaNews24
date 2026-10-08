'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUpPage = () => {

    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name") as string;
        const image = formData.get("image") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
        });

        if (error) {
            console.log(error);
            toast.error(error.message)
            return;
        }
        if (data) {
            console.log(data);
            toast.success("Sign Up SuccessFul!")
            router.push('/')

        }

    }

    const handleGoogleSignIn = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Google login failed!");
        }

    };

    const handleGithubSignIn = async () => {
        const { error } = await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Github login failed!");
        }

    };
    return (
        <div className='flex justify-center mt-15'>

            <form onSubmit={onSubmit}>
                <h2 className='text-2xl font-bold text-red-700 text-center mb-5'>সাইন আপ</h2>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label text-gray-700">নাম</label>
                    <input type="text" name='name' className="input" placeholder="Name" />

                    <label className="label text-gray-700">Image</label>
                    <input type="Url" name='image' className="input" placeholder="Image" />

                    <label className="label text-gray-700">ইমেইল</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label text-gray-700">পাসওয়ার্ড</label>
                    <input type="password" className="input"
                        name='password'
                        placeholder="Password" />

                    <button type='submit' className="btn bg-red-700 btn-neutral mt-4 border-none">সাইন আপ করুন</button>
                </fieldset>

                <div className='text-center mt-2'>
                    <p> অ্যাকাউন্ট আছে?{" "} <Link href="/sign-in" className="text-red-600 hover:underline "> সাইন ইন করুন </Link> </p>
                </div>

                <div className="flex flex-col gap-2 mt-4 w-full">
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:shadow-sm"
                    >
                        <FcGoogle className="text-lg" />
                        Google দিয়ে সাইন আপ করুন
                    </button>

                    <button
                        type="button"
                        onClick={handleGithubSignIn}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 hover:shadow-sm"
                    >
                        <FaGithub className="text-lg" />
                        GitHub দিয়ে সাইন আপ করুন
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;