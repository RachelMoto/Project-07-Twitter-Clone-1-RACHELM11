import React from 'react';
import iconTweetProphil from '../images/tweet-profile-photo.png';
import iconImageTweet from '../images/tweet-image.png';
import iconProfil1 from '../images/TweetProfil1.svg';
import iconProfil2 from '../images/TweetProfil2.svg';


export const TweetTable = [
  {
    userId:2,
    id : 0,
    photo: iconTweetProphil,
    compte: {
      name: "CNN",
      mail: "@CNN .",
      time: "7m"
    },
    description: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    photoTweet: null, 
    numberMessage: 57,
    numberRepost: 144,
    numberLike: 184,
  },

  {
    userId:3,
    id : 1,
    photo: iconProfil1,
    compte: {
      name: "The New York Times",
      mail: "@nytimes .",
      time: "2h"
    },
    description: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    photoTweet: iconImageTweet,

    
    numberMessage: 30,

    
    numberRepost: 150,

    
    numberLike: 200,

    

  },

  {
    userId:4,
    id : 2,
    photo: iconProfil2,
    compte: {
      name: "Twitter",
      mail: "@Twitter .",
      time: "Oct 29 "
    },
    description: "BIG NEWS lol jk still Twitter",
    photoTweet: null,

    
    numberMessage: 71,

    
    numberRepost: 100,

    
    numberLike: 90,

    
  },

  {
    userId:4,
    id : 3,
    photo: iconProfil2,
    compte: {
      name: "Twitter",
      mail: "@Twitter .",
      time: "Oct 4 "
    },
    description: "hello literally everyone",
    photoTweet: null,

    
    numberMessage: 60,

    
    numberRepost: 85,

    
    numberLike: 112,

    
  },


]