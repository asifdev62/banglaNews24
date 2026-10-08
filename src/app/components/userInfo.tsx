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
        router.push("/signIn");
    };

    return (
        <div className="w-full flex justify-center md:justify-end">
            {user ? (
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Profile Image */}
                    <Link href="/profile" className="shrink-0">
                        <div className="avatar">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden">
                                <Image
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "User"}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </Link>

                    {/* User Name */}
                    <h2 className="max-w-25 sm:max-w-35 md:max-w-45 truncate text-sm sm:text-base font-medium">
                        {user.name}
                    </h2>

                    {/* Sign Out */}
                    <button
                        onClick={handleSignOut}
                        className="bg-red-700 hover:bg-red-800 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-sm text-white font-semibold text-xs sm:text-xs whitespace-nowrap"
                    >
                        সাইন আউট
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <Link
                        href="/signIn"
                        className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-sm font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signUp"
                        className="bg-red-700 hover:bg-red-800 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-sm text-white font-semibold text-xs sm:text-sm whitespace-nowrap"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;