import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import mainIMG from '../assets/mainIMG.png';
import NewsApi from './NewsApi';
import { Link } from 'react-router-dom';

const Home = () => {

  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchNewsData = async () => {
    try {
      setLoading(true)

      const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-11-17&sortBy=publishedAt&apiKey=API_KEY")
    } catch (error) {
      console.log(error);

    }
  }
  const fetchDataBackend = async () => {
    try {
      setLoading(true)

      const response = await fetch("http://localhost:5000/api/post/blog")
      const data = await response.json()
      setNewsData(data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchDataBackend()
  }, [])

  const randomNumber = () => {
    const random = Math.round(Math.random() * 10) + 1
    return random
  }


  return (
    <div className='bg-[#181A2A]'>
      <Navbar />

      <div className='static'>
        <img className='ml-[130px] w-[1000px] h-[500]' src={mainIMG} alt="img" />
      </div>

      <div className='w-[450px] h-[200px]  bg-[#242535] overflow-hidden absolute bottom-0 left-0 ml-[180px] mt-[30px] rounded-lg shadow-2xl'>
    
        {newsData && newsData.blogs.map((article, id) => {
          const ran = randomNumber()
          const getId = id + 1
          if (getId === 1) {
            return (
              <Link to={`/blog/${article._id}`}  className='flex h-full w-full rounded-lg' key={id}>
               <div className=' p-1 text-white w-1/2'>
               <h2 className='text-xs'>{article.title}</h2>
                <p className='text-sm'>{article.content}</p>
                <p className='text-white text-xs'>like: {article.like}</p>
               </div>
                <img className=' w-1/2 h-full' src={article.image} target='_blank' />
              </Link>
            )
          }
        })}
      </div>

      <div
        className='flex flex-col items-center mt-[150px] ml-[250px] w-[700px] h-[100px] bg-[#242535] text-[#696A75]'>
        <p className='mt-3'>Advertisement</p>
        <h1>You Can Place Ads</h1>
        <p>750x100</p>
      </div>

      <h1
        className='text-[24px] text-white font-bold font-sans ml-[120px] mt-[100px]'>
        Latest Post
      </h1>


      {/* <NewsApi /> */}

      <div className='grid gap-3 px-2 grid-cols-3'>
        {newsData && newsData.blogs.slice(0, 9).map(article => (
           <Link to={`/blog/${article._id}`} className='flex h-full bg-yellow-700  w-full rounded-lg' key={article._id}>
           <div className=' p-1 text-white w-1/2'>
           <h2 className='text-xs'>{article.title}</h2>
            <p className='text-sm'>{article.content}</p>
            <p className='text-white text-xs'>like: {article.like}</p>
           </div>
            <img className=' w-1/2 h-full' src={article.image} target='_blank' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home