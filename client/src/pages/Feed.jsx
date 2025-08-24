import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading';

const Feed = () => {
 const [feeds, setfeeds] = useState([]);
 const [loading, setLoading] = useState(true)

 const fetchFeeds = async() => {
  setfeeds(dummyPostsData)
 }

 useEffect(()=>{
  fetchFeeds()
 }, [])

 useEffect(()=>{})

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>

      {/* stories and post list */}
      <div>
        <h1 className='p-4 space-y-6'>Stories</h1>
        <div>
          
        </div>
      </div>

      {/* right side */}
      
    </div>
  ): <Loading/>
}

export default Feed