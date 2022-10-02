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
    // console.log(bots.filter(bot => bot.id === id));
    setMyBots(
      [...myBots,bots.filter(bot => bot.id === id)[0]]
    )
    // console.log(myBots);
  }
  return (
    <div>
      <YourBotArmy myBots={myBots}/>
      <BotCollection bots={bots} updateCollection={updateCollection}/>
    </div>
  )
}

export default BotsPage;
