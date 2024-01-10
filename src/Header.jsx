import React from 'react';
import startIcon from './images/Group.svg'



export default function Header() {
  return (
    <div className='header'>
      <h1 className='page-title'>Home</h1>
      <img className='top-tweets' src={startIcon} alt="icon" />

    </div>
  )
}