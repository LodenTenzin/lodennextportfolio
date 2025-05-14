import React from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="grid grid-cols-10 gap-4">
            <div className='col-span-1 col-start-1'>
            <Link href="/" className="font-ibm font-sm text-[#000000] hover:underline">HOME</Link>
            </div>
            <div className='col-span-1 col-start-2'>
            <Link href="/work" className="font-ibm font-sm text-[#939393] hover:underline" >WORK</Link>
            </div>
            <div className='col-span-1 col-start-3'>
            <Link href="/work" className="font-ibm font-sm text-[#939393] hover:underline" >WRITE</Link>
            </div>
            <div className="col-start-4 col-end-8 justify-items-center">
                <h1 className='text-[#0045A0] text-3xl'>
                    Home
                </h1>
            </div>
                <div id="collection" className="col-span-1 col-start-8 font-ibm text-sm text-gray-700">
                <h4 className="text-[10px] text-[#939393] pb-1">COLLECTION</h4>
                    <ul>
                        <li className='pt-1'>
                            <Link href="/quotes" className="hover:underline">QUOTES</Link>
                        </li>
                        <li className='pt-1'>
                            <Link href="/ihearttibet" className="hover:underline">I<span className="text-[#CD564C] px-1">♥</span>TIBET</Link>
                        </li>
                    </ul>
                </div>
                <div id="creative" className="col-span-1 col-start-9 font-ibm text-sm text-gray-700">
                <h4 className="text-[10px] text-[#939393] pb-1">CREATIVE</h4>
                    <ul>
                        <li className='pt-1'>
                            <Link href="/digi-art" className="hover:underline">
                                ART
                            </Link>
                        </li>
                        <li className='pt-1'>
                            <Link href="/photos" className="hover:underline">
                                PHOTOS
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="connect" className="col-span-1 col-start-10 font-ibm text-sm text-gray-700">
                <h4 className="text-[10px] text-[#939393] pb-1">CONNECT</h4>
                    <ul>
                        <li className='pt-1'>
                            <Link href="/email" className="hover:underline">
                                EMAIL</Link>
                        </li>
                        <li className='pt-1'>
                            <Link href="/linkedin" className="hover:underline">
                                LINKEDIN
                            </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;
