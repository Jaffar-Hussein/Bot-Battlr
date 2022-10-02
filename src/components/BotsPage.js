import React, {useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const URL = "http://localhost:8002/bots"
  const [bots, setBots] = useState([]);
  const [myBots,setMyBots] = useState([]);


  useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(data => setBots(data))
  },[])
  const updateCollection = (id) => {
    if (myBots.find(bot => bot.id === id)){
      setMyBots(
        myBots.filter(bot => bot.id !== id)
      )
    }else{
      setMyBots(
        [...myBots,bots.filter(bot => bot.id === id)[0]]
      )
    }
  }
  return (
    <div>
      <YourBotArmy myBots={myBots} updateCollection={updateCollection}/>
      <BotCollection bots={bots} updateCollection={updateCollection}/>
    </div>
  )
}

export default BotsPage;
