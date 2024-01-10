import React from 'react';
import Header from '../Header';
import TweetEditor from '../images/tweet-editor';
import Tweets from '../components/Tweets.jsx';
import Sidebare from '../components/Sidebare.jsx';
import Trend from '../components/Trend.jsx';


function Home() {
  return (
    <>
      <Sidebare />
     
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
        
      </main>
       <Trend />
    </>
  );
}

export default Home;