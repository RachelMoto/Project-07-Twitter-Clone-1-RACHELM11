import React from 'react';
import profilPhoto from '../images/profile-photo.png';
import iconPhoto from '../images/Photo.svg';
import iconGif from '../images/Gif.svg';
import iconMessage from '../images/message.svg';
import iconEmoji from '../images/emoji.svg';
import iconHorloge from '../images/horloge.svg';
import buttonTweet from '../images/Tweet.svg';
import { Link } from 'react-router-dom';
import { UsersProfile } from '../components/UserProfil';

export default function TweetEditor() {

  const oneUser = UsersProfile.find((user) => user.isLogin === true)
  return (
<div className='tweet-editor'>
  <Link to={`/${oneUser.displayName}`}>
      <img className='avatar' src={profilPhoto} alt="photo" />
  </Link>
  <div className='tweet-editor-form'>
      <input type="text" placeholder="What's happening ?" className="tweet-editor-input"/>
  <div className='tweet-editor-buttons'>
    <div className='tweet-editor-actions'>
     <img src= {iconPhoto} alt="photo" />
      <img src= {iconGif} alt="gif" />
      <img src= {iconMessage} alt="message" />
      <img src= {iconEmoji} alt="emoji" />
      <img src= {iconHorloge} alt="horloge" />
      </div>
    <div className='button'>
    <img src={buttonTweet} alt="icon" />
    </div>
    </div>
   </div>
</div>
   
  
      
)
      }
