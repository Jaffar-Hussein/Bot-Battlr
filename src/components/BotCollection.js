import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,updateCollection,deleteBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map(function (bot) {
          return (
            <BotCard key={bot.id} bot={bot} updateCollection={updateCollection} deleteBot={deleteBot}/>
          )
        })}
      </div>
    </div>
  );
}

export default BotCollection;
