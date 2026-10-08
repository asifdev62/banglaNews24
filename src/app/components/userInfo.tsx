
"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;
      const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/signIn")
    };

    return (
        <div className="flex justify-center md:justify-end gap-2 md:translate-x-10 lg:translate-x-30 sm:translate-0">
            {user ? (
                <div className="flex gap-2 items-center">
                    {/* Profile Image */}
                    <Link href="/profile">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <Image
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "User"}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                            </div>
                        </div>
                    
                    </Link>

                    {/* User Name */}
                    <h2>{user.name}</h2>

                    {/* Sign Out */}
                    <button
                        onClick={handleSignOut}
                        className="bg-red-700 px-4 md:px-3 py-2 rounded-sm text-white font-semibold text-sm"
                    >
                        সাইন আউট
                    </button>
                </div>
            ) : (
                <div className="flex gap-2">
                    <Link
                        href="/signIn"
                        className="px-4 md:px-3 py-2 rounded-sm font-semibold text-gray-700 text-sm"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signUp"
                        className="bg-red-700 px-4 md:px-3 py-2 rounded-sm text-white font-semibold text-sm"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;

