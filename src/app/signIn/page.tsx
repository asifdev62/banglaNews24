
'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { data, error } = await authClient.signIn.email({
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
      router.push('/');

    toast.success('Login successful!');
    }
  };

  return (
    <div className="flex justify-center mt-15">
      <form onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold text-red-700 text-center mb-5">
          সাইন ইন
        </h2>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label text-gray-700">ইমেইল</label>

          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label text-gray-700">পাসওয়ার্ড</label>

          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn bg-red-700 btn-neutral mt-4 border-none"
          >
            সাইন ইন করুন
          </button>
        </fieldset>

        <div className="text-center mt-2">
          <p>
            অ্যাকাউন্ট নেই?{' '}
            <Link
              href="/sign-up"
              className="text-red-600 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
