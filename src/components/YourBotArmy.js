import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({myBots,updateCollection,deleteBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {myBots.map(function (bot) {
          return (
            <BotCard key={bot.id} bot={bot} updateCollection={updateCollection} deleteBot={deleteBot}/>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
