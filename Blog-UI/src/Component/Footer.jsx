import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-24 text-white bg-[#181A2A]'>
            <div>
                <h1 className='font-semibold font-sans text-[18px] text-white'>About</h1><br />
                <div className='text-[#97989F] font-sans text-[16px]'>
                    <p>A passionate developer who just</p>
                    <p>created their first blog site,</p> 
                    <p>showcasing their journey, insights,</p>
                    <p>and knowledge in the tech world.</p>
                    <p>Combining clean design with intuitive</p>
                    <p>functionality, the blog serves as a</p>
                    <p>platform to share projects, tutorials,</p>
                    <p>and thoughts, reflecting their enthusiasm</p> 
                    <p>for coding and continuous learning.</p><br />
                    <p><span>Email:</span>abexstar@gmail.com</p>
                    <p><span>Phone:</span>08106810920</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold font-sans text-[18px] text-white'>Quick Link</h1><br />
                <div className='text-[#97989F] font-sans text-[16px]'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Archived</p>
                    <p>Author</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold font-sans text-[18px] text-white'>Category</h1><br />
                <div className='text-[#97989F] font-sans text-[16px]'>
                    <p>Lifestyle</p>
                    <p>Technology</p>
                    <p>Travel</p>
                    <p>Business</p>
                    <p>Economy</p>
                    <p>Sport</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold font-sans text-[18px] text-white'>Weekly Newsletter</h1><br />
                <div>
                    <p className='text-[#97989F] font-sans text-[16px]'>Get blog article and offers via email</p><br />
                    <input
                        className="w-[300px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]"
                        type="text" placeholder='Your Email' />
                </div>
                <button className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black bg-blue-700'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer
