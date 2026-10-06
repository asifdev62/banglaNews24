import React from "react";

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">

                    {/* Copyright */}
                    <p className="text-center sm:text-left">
                        © 2026{" "}
                        <span className="font-semibold text-gray-700">
                            BanglaBulletin
                        </span>
                    </p>

                    {/* Source */}
                    <p className="text-center sm:text-right">
                        Source:{" "}
                        <span className="font-medium text-gray-700">
                            BBC Bangla
                        </span>
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;