import React from 'react';
import iconTweetProphil from '../images/tweet-profile-photo.png';
import iconOK from '../images/Verified.svg';
import iconLikes from '../images/Likes.svg';
import iconLikes1 from '../images/ViceVersa.svg';
import iconLove from '../images/Love.svg';
import iconExport from '../images/Export.svg';
import iconImageTweet from '../images/tweet-image.png';
import iconProfil1 from '../images/TweetProfil1.svg';
import iconProfil2 from '../images/TweetProfil2.svg';


export const TweetTable = [
  {
    photo: iconTweetProphil,
    compte: {
      name: "CNN",
      icon: iconOK,
      mail: "@CNN .",
      time: "7m"
    },
    description: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    photoTweet: null,

    iconMessage: iconLikes,
    numberMessage: 57,

    iconRepost: iconLikes1,
    numberRepost: 144,

    iconLike: iconLove,
    numberLike: 184,

    shar: iconExport


  },

  {
    photo: iconProfil1,
    compte: {
      name: "The New York Times",
      icon: iconOK,
      mail: "@nytimes .",
      time: "2h"
    },
    description: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    photoTweet: iconImageTweet,

    iconMessage: iconLikes,
    numberMessage: 30,

    iconRepost: iconLikes1,
    numberRepost: 150,

    iconLike: iconLove,
    numberLike: 200,

    shar: iconExport

  },

  {
    photo: iconProfil2,
    compte: {
      name: "Twitter",
      icon: iconOK,
      mail: "@Twitter .",
      time: "Oct 29 "
    },
    description: "BIG NEWS lol jk still Twitter",
    photoTweet: null,

    iconMessage: iconLikes,
    numberMessage: 71,

    iconRepost: iconLikes1,
    numberRepost: 100,

    iconLike: iconLove,
    numberLike: 90,

    shar: iconExport
  },

  {
    photo: iconProfil2,
    compte: {
      name: "Twitter",
      icon: iconOK,
      mail: "@Twitter .",
      time: "Oct 4 "
    },
    description: "hello literally everyone",
    photoTweet: null,

    iconMessage: iconLikes,
    numberMessage: 60,

    iconRepost: iconLikes1,
    numberRepost: 85,

    iconLike: iconLove,
    numberLike: 112,

    shar: iconExport
  },


]