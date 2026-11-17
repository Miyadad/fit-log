import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#090a0d] border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

                <div className="flex items-center gap-2">
                    <span className="text-lime-400 text-xl font-bold">
                        ↔
                    </span>
                    <h2 className="text-white font-bold text-sm tracking-wider">
                        FITLOG
                    </h2>
                </div>
                <p className="text-gray-500 text-xs text-center">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;