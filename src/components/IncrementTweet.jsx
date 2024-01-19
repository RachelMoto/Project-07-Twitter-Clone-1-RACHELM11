import React, { useState } from 'react';

function IncrementTweet({ icon, number }) {

  const [count, setCount] = useState(number);
  const [isCount, setIsCount] = useState(false);

  const handleClick = () => {
    if (isCount) {
      setCount(count - 1);
      setIsCount(false);
    } else {
      setCount(count + 1);
      setIsCount(true);
    }
  }

  return (
    <div onClick={(event) => handleClick()} className='actions-tweets-div'>
      <img src={icon} alt="icon" />
      <span>{count}</span>

    </div>
  )
}
export default IncrementTweet;