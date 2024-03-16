import { createContext, useContext, useState } from "react";
import { TweetTable } from "../components/TweetObject";
import { UsersProfile } from "../components/UserProfil";
import Data from "../data/initial-data.json";


const TweetContext = createContext()

export const useTweetContext = () =>{
    return useContext(TweetContext)
}
console.log(Data);
export const TweetProvider = ({children}) =>{

    const [tweets, setTweets] = useState(Data.tweets)
    const [users, setUsers]  = useState(Data.users)

    const addTweet = (newTweet) => {
        setTweets([newTweet, ...tweets])
    }
    return (
        <TweetContext.Provider value={{tweets, users, addTweet}}>
            {children}
        </TweetContext.Provider>
    )
}