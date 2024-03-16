import React, { useState } from 'react';
import profilPhoto from '../images/profile-photo.png';
import iconPhoto from '../images/Photo.svg';
import iconGif from '../images/Gif.svg';
import iconMessage from '../images/message.svg';
import iconEmoji from '../images/emoji.svg';
import iconHorloge from '../images/horloge.svg';
import buttonTweet from '../images/Tweet.svg';
import { Link } from 'react-router-dom';
import { useTweetContext } from '../models/TweetContext';


export default function TweetEditor() {

  const {users} = useTweetContext() 
  const {addTweet} = useTweetContext() 

  const oneUser = users.find((user) => user.isLogin === true)

  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState(0)
  const [like, setLike] = useState(0)
  const [retweet, setRetweet] = useState(0)

  const handleCreateTweet = () => {
    const id = Math.floor(Math.random() * (1000 - 5))

    const createTweet = {
        userId : oneUser.userId,
        id : id, 
        photo: oneUser.profil,
        compte: {
          name:oneUser.displayName,
          mail: oneUser.userName,
          time: new Date().toISOString()
        },
        description : text,
        photoTweet : image,
        numberMessage: message,
        numberRepost : retweet,
        numberLike : like
    }
    addTweet(createTweet) 
    setText("")
    setImage(null)

    
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        setImage(reader.result);
    };

    if (selectedImage) {
        reader.readAsDataURL(selectedImage);


    }

};


  return (
<div className='tweet-editor'>
  <Link to={`/${oneUser.displayName}`}>
      <img className='avatar' src={profilPhoto} alt="photo" />
  </Link>
  <div className='tweet-editor-form'>
      <input type="text" placeholder="What's happening ?" className="tweet-editor-input" value={text} onChange={(event) =>{setText(event.target.value)} }/>
  <div className='tweet-editor-buttons'>
    <div className='tweet-editor-actions'>
      <label htmlFor={"file-input"} className='relative cursor-pointer'>
        <input type="file" id={"file-input"} className='absolute w-0 h-0 overflow-hidden' onChange={handleImageChange}/>
        <img src= {iconPhoto} alt="photo" className='w-4.5 h-4.5' />
      </label>
     
      <img src= {iconGif} alt="gif" />
      <img src= {iconMessage} alt="message" />
      <img src= {iconEmoji} alt="emoji" />
      <img src= {iconHorloge} alt="horloge" />
      </div>
   <button onClick={handleCreateTweet} className='button '>
    Tweet
   </button>
    </div>
   </div>
</div>
   
  
      
)
      }
