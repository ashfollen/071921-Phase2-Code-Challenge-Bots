import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bot, addToArmy, toggleArmyStatus }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        <BotCard bot={bot} addToArmy={addToArmy} toggleArmyStatus={toggleArmyStatus} />
        {/* <BotSpecs bot={bot} /> */}
        
      </div>
    </div>
  );
}

export default BotCollection;
