import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';

const Feed = () => {
 const [feeds, setfeeds] = useState([]);
 const [loading, setLoading] = useState(true)

 const fetchFeeds = async() => {
  setfeeds(dummyPostsData)
 }

 useEffect(()=>{
  fetchFeeds()
  setLoading(false);
 }, [])

 useEffect(()=>{})

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>

      {/* stories and post list */}
      <div>
        <StoriesBar />
        <div>
          List of Posts
        </div>
      </div>

      {/* right side */}
      <div>
        <div> 
          <h1>Sponsered</h1>
        </div>
        <h1>Recent Messages</h1>
      </div>
      
    </div>
  ): <Loading/>
}

export default Feed