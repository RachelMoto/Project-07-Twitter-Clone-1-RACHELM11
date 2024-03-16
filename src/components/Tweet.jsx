import React from 'react';
import IncrementTweet from '../components/IncrementTweet.jsx';
import { Link } from 'react-router-dom';
import {useTweetContext} from '../models/TweetContext'
import iconLikes from '../images/Likes.svg';
import iconLikes1 from '../images/ViceVersa.svg';
import iconLove from '../images/Love.svg';
import iconExport from '../images/Export.svg';
import iconOK from '../images/Verified.svg';

function Tweet() {
  const {tweets} = useTweetContext()
  return (
    <div className=''>
      <div className=''>
        {tweets.map((element) => (
          <div className="flex justify-start items-start gap-5 py-6 px-4 rounded-r-sm" key={element.id}>
            <aside className=''>
              <Link to={`/${element.compte.name}`}>
              <img src={element.photo} className='w-12' alt="photo" />
              </Link>
            </aside>
            <div className="flex flex-col items-start justify-start gap-2.5 w-full">
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className='flex gap-1'>
                    <span>{element.compte.name}</span>
                    <img src={iconOK} alt="icon" />
                    <span className=''>{element.compte.mail}</span>
                    <span className=''>{element.compte.time}</span>
                  </h2>
                
                </div>
                <div className=''>
                  <p className="text-base">{element.description}</p>
                </div>
                <img className="w-full" src={element.photoTweet} alt="" />
              </div>



              <div className="flex justify-between items-center gap-20 text-base flex-nowrap flex-row w-full">
                <IncrementTweet icon={iconLikes} number={element.numberMessage} />
                <IncrementTweet icon={iconLikes1} number={element.numberRepost} />
                <IncrementTweet icon={iconLove} number={element.numberLike} />
                <div>
                  <img src={iconExport} alt="icon" />

                </div>

              </div>


            </div>

          </div>


        ))}
      </div>
    </div>

  )
}

export default Tweet;