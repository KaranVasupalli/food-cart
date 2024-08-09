import React from 'react';
import './footer.css'

const Footer = () => (
    <>
        <footer className='  bg-green-300 py-3 mt-10'>
            <div className=' flex  justify-around'>
                <div className=' flex flex-col gap-2 '>
                    <h2 className=' text-2xl'>Company</h2>
                    <div className=' flex flex-col gap-1 cursor-pointer  '>
                        <p className=''>About us</p>
                        <p>Team</p>
                        <p>careers</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-2'>
                    <h2 className='text-2xl text-center'>Legal</h2>
                    <div className=' flex flex-col gap-1 cursor-pointer '>
                        <p>Terms & conditions</p>
                        <p>Refund & Cancellation</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-2 '>
                    <h2 className='text-2xl'>Follow us</h2>
                    <div className=' flex flex-col gap-1 cursor-pointer'>
                        <p>Recieve exclusive offers in your mailbox</p>
                        <div className=' flex gap-3'>
                            <input className=' border border-green-200 rounded-md' type="text" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
)

export default Footer;
