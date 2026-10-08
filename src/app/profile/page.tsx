
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const UserProfilePage = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    if (!user) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">
                        Please sign in first
                    </h2>
                </div>
            </div>
        );
    }

    const openEditModal = () => {
        setName(user.name || "");
        setImage(user.image || "");
        setIsEditOpen(true);
    };

const handleUpdateProfile = async () => {
    setLoading(true);

    try {
        const { error } = await authClient.updateUser({
            name,
            image,
        });

        if (error) {
            toast.error("Failed to update profile.");
            console.log(error);
            return;
        }

        toast.success("Profile updated successfully!");
        setIsEditOpen(false);

    } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
};

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

                {/* Header */}
                <div className="bg-red-700 text-white px-6 py-8 text-center">

                    <h1 className="text-2xl font-bold mb-6">
                        Profile
                    </h1>

                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full ring-4 ring-white overflow-hidden">
                            <Image
                                src={user.image || "/default-avatar.png"}
                                alt={user.name || "User"}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-5">
                        {user.name}
                    </h2>

                    <p className="text-sm text-red-100 mt-1">
                        {user.email}
                    </p>

                    <button
                        onClick={openEditModal}
                        className="mt-5 bg-white text-red-700 px-5 py-2 rounded-lg font-semibold text-sm"
                    >
                        প্রোফাইল সম্পাদনা করুন
                    </button>
                </div>

                {/* Account Information */}
                <div className="p-6">

                    <h3 className="text-lg font-semibold mb-5">
                        Account Information
                    </h3>

                    <div className="flex justify-between border-b border-gray-300  py-4">
                        <span className="text-gray-500">
                            Name
                        </span>

                        <span className="font-medium">
                            {user.name}
                        </span>
                    </div>

                    <div className="flex justify-between border-b border-gray-300  py-4">
                        <span className="text-gray-500">
                            Email
                        </span>

                        <span className="font-medium text-sm">
                            {user.email}
                        </span>
                    </div>

                    <div className="flex justify-between border-b border-gray-300 py-4">
                        <span className="text-gray-500">
                            Account Type
                        </span>

                        <span className="font-medium">
                            Email / Google
                        </span>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="w-full mt-6 bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold"
                    >
                        সাইন আউট
                    </button>
                </div>
            </div>

            {/* Edit Modal */}
            {isEditOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

                    <div className="bg-white w-full max-w-md rounded-xl p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">
                                প্রোফাইল সম্পাদনা করুন
                            </h2>

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Profile Image URL
                            </label>

                            <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="px-5 py-2 border rounded-lg"
                            >
                             বাতিল
                            </button>

                            <button
                                onClick={handleUpdateProfile}
                                disabled={loading}
                                className="px-5 py-2 bg-red-700 text-white rounded-lg"
                            >
                                {loading ? "Updating..." : "পরিবর্তন সংরক্ষণ করুন"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;