import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [ bots, setBots ] = useState([]);
  const [ armyBots, setArmyBots ] = useState([]);
  const [ armyStatus, setArmyStatus ] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(resp => resp.json())
    .then(data => setBots(data))
  }, [])

  
  function toggleArmyStatus(id) {
    setArmyStatus(!armyStatus);
    setArmyBots(bots.map((bot) => bot.id === id ? {...bot, armyBot: armyStatus} : bot))
  }

  return (
    <div>
      {armyBots.map((bot) => 
      (bot.armyBot) ? <YourBotArmy toggleArmyStatus={toggleArmyStatus} key={bot.id} bot={bot} /> : null)}

      {bots.map((bot) => <BotCollection key={bot.id} bot={bot} toggleArmyStatus={toggleArmyStatus} />)}
    </div>
  )
}

export default BotsPage;
