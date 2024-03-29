import React, { useState } from "react";

function IncrementTweet({ icon, number }) {
  const [count, setCount] = useState(number);
  const [isCount, setIsCount] = useState(false);

  const handleClick = (event) => {
    console.log(event);
    if (isCount) {
      setCount(count - 1);
      setIsCount(false);
      event.target.parentNode.classList.remove("active");
    } else {
      setCount(count + 1);
      setIsCount(true);
      event.target.parentNode.classList.add("active");
    }
  };

  return (
    <div onClick={(event) => handleClick(event)} className="actions-tweets-div">
      <img src={icon} alt="icon" />
      <span>{count}</span>
    </div>
  );
}
export default IncrementTweet;
