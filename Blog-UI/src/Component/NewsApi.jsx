import React from 'react'
import { Link } from 'react-router-dom'

const NewsApi = ({urlToImage, author, publishedAt ,title}) => {
//   const { title, description, price, category, image } = NewsApi

  return (
    <div className='w-[300px] relative border ml-[50px] mt-[80px] border-black rounded-lg overflow-hidden'>
      <div className='h-[300px] overflow-hidden'>
        <img src={urlToImage} alt="" />
      </div>
      <div>
        <p className='font-semibold text-2xl '>{title}</p>
      </div>
      <div className="flex gap-5 justify-between px-3 absolute bottom-3 w-full">
        <Link  className='w-full border-2 rounded-md hover:text-white bg-transparent border-black hover:bg-black duration-200'>
          <button>{publishedAt}</button></Link>
        <p>

            {author}
        </p>
      </div>
    </div>
  )
}

export default NewsApi;