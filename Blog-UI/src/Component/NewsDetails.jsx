import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
  const [news, setNews] = useState({
    image: "",
    title: ""
  });
  const {id} = useParams()

  async function gettingNews(){
    try{
      const request = await fetch(`http://localhost:5000/api/post/blog/${id}`);
      const data = await request.json();
      setNews(data.data);
      console.log(data);
      
      console.log(data);
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    gettingNews()
  },[])
  
  return (
    <div>
          {news && (
           <div  className='flex h-full bg-yellow-700  w-full rounded-lg' key={news.url}>
           <div className=' p-1 text-white w-1/2'>
           <h2 className='text-xs'>{news.title}</h2>
            <p className='text-sm'>{news.content}</p>
            <p className='text-white text-xs'>like: {news.like}</p>
           </div>
            <img className=' w-1/2 h-full' src={news.image} target='_blank' />
          </div>
        )}
    </div>
  )
}

export default NewsDetails;