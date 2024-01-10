
import iconTwitter from '../images/Twitter.svg';
import iconHome from '../images/Home.svg';
import iconYes from '../images/Explore.svg';
import iconNotifications from '../images/Notifications.svg';
import iconMessage from '../images/Messages.svg';
import iconBook from '../images/Bookmarks.svg';
import iconList from '../images/Lists.svg';
import iconProfile from '../images/Profile.svg';
import iconMore from '../images/More.svg';
import iconTweetButon from '../images/Tweet-Buton.svg';
import iconPhoto from '../images/profile-photo.png';
import iconPrivate from '../images/Private.svg';
import iconMore2 from '../images/More-2.svg';



function Sidebare({props}) {
  return (
<div className='sidebar'>
  <ul className='sidebar-navbar'>
    <li>
      <a href="#">
        <img src={iconTwitter} alt="icon" />
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconHome} alt="icon" />
        <span>Home</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconYes} alt="icon" />
        <span>Explore</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconNotifications} alt="icon" />
        <span>Notifications</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconMessage} alt ="icon" />
        <span>Messages</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconBook} alt="icon" />
        <span>Bookmarks</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconList} alt="icon" />
        <span>Lists</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconProfile} alt="icon" />
        <span>Profile</span>
      </a>
    </li> 
    <li>
      <a href="#">
        <img src={iconMore} alt="icon" />
        <span>More</span>
      </a>
    </li> 
  </ul>
      <a href="TweetButon">
         <img src={iconTweetButon} alt="icon" />
      </a>
  <div>
    <img src={iconPhoto} alt="icon" />
    <span>Bradley Ortiz</span>
    <img src={iconPrivate} alt="icon" />
    <img src={iconMore2} alt="icon" />
    <p>@bradley_</p>
  </div>  
   
</div>
     
  )
}
export default Sidebare;