import React from 'react';
import Header from '../Header';
import TweetEditor from '../images/tweet-editor';
import Tweets from '../components/Tweets.jsx';


function Home() {
  return (
    <>
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </main>
    </>
  );
}

export default Home;