import React from 'react';
import Tweet from './Tweet';
import {TweetTable} from './TweetObject';


 function Tweets() {
  return (
<div>
  <Tweet props={TweetTable} />
</div>
  )
}

export default Tweets;