import React from 'react';
import iconSearch from '../images/Search-Icon.svg';


function Trends({ props, table }) {
  return (
    <div className='trends'>
      <div className = "Search">
        <img src = {iconSearch} alt = "icon" />
        <form className = "Search-text">
          <input className="Text" type="text" placeholder ="Serach Twitter" />
        </form>
      </div>
      <div className = "Trends-lists">
        {props.map((element, index) => (
         <div key={index}>
          <div className = "trends-infos">
            <div className = "trends-element">
              <span className="trends-destination">{element.destination} </span>         
              <span className="trends-clé">{element.clé}</span>
              <span className="trends-number">{element.nombre}</span>
            </div>
              <img src ={element.icon} alt="" />
           </div>
                
           
          </div>

      ))}
      </div>     
      
  <div className='trends-compte'>
        {table.map((user, id) => (
    <div key={id}>
            <span>
              <h2>{user.identity}</h2>
            </span>
       <div className = "trends-profil">
            <div className = "trends-photo">
             <img src ={user.profil} alt="photo" />
            </div>
         <div className = "trends-desty">
           <div className = "trends-message">
            <span>{user.titre}</span>
            <img src ={user.icon1} alt="photo" />
            <span>{user.mail}</span>
             </div>
            <img src ={user.icon2} alt="" />
             
         </div>
         </div>
        
   </div>
        ))}
  </div>
    </div>

  )
}
export default Trends;