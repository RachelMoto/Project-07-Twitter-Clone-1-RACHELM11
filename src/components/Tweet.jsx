import React from 'react';
import IncrementTweet from '../components/IncrementTweet.jsx';
import { Link } from 'react-router-dom';

function Tweet({ props }) {
  return (
    <div className='timeline'>
      <div className='tweets'>
        {props.map((element, index) => (
          <div className='tweet' key={index}>
            <aside className='tweet-avatar'>
              <Link to={`/${element.compte.name}`}>
              <img src={element.photo} alt="photo" />
              </Link>
            </aside>
            <div className='tweet-content'>
              <div className='tweet-body'>
                <div className='tweet-title'>
                  <h2>
                    <span>{element.compte.name}</span>
                    <img src={element.compte.icon} alt="icon" />
                    <span className='tweet-title-details'>{element.compte.mail}</span>
                    <span className='tweet-title-details'>{element.compte.time}</span>
                  </h2>
                
                </div>
                <div className='tweet-text'>
                  <p className='tweet-title-author'>{element.description}</p>
                </div>
                <img className='tweet-image' src={element.photoTweet} alt="" />
              </div>



              <div className='tweet-actions'>
                <IncrementTweet icon={element.iconMessage} number={element.numberMessage} />
                <IncrementTweet icon={element.iconRepost} number={element.numberRepost} />
                <IncrementTweet icon={element.iconLike} number={element.numberLike} />
                <div>
                  <img src={element.shar} alt="icon" />

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