import { Outlet, Link } from "react-router-dom";

function GameModeDescription() {
  // Trouble Brewing description static data will go here
  const gameplayDesc = `Trouble Brewing has a little bit of everything. Some characters passively receive information, some need to take action to learn who is who, while some simply want to bait the Demon into attacking them. Both good and evil can gain the upper hand by making well-timed sacrifices. Trouble Brewing is a relatively straightforward Demon-hunt, but evil has a number of dastardly misinformation tricks up their sleeves, so the good players best question what they think they know if they hope to survive.
 
  Beginner. Recommended for players and Storytellers new to Blood on the Clocktower or to social deception games.
  
  Good players will need to figure out who is good and who is evil by using logic and intuition. Some players may want to reveal which character they are and share their information immediately (such as the Chef or Investigator), while others may want to lie about their identity so that the Imp avoids attacking them (such as the Undertaker or Fortune Teller). Some may lie about who they are so that the Imp does attack them (such as the Ravenkeeper or Soldier)!
  
  Other good characters gain information by doing something and noticing the effect. Sacrificing one’s life by nominating a Virgin, attempting to kill the Imp as a Slayer and noticing what happens, or deliberately killing good players so that the Undertaker can confirm which character they were—these are all ways to sacrifice life and power to gain information and achieve victory.
  
  Evil players will need to pretend to be good characters and do so well, giving false information to confuse the good team if necessary. With only true information, the good team will usually find out who is evil with enough time to spare. But with even a little believable falsehood in the air, evil has a chance. The Poisoner and Spy, if they pay attention, can cause huge confusion in the good team’s ranks by using their abilities sneakily. Evil will also need to decide when to make sacrifices. Will the Scarlet Woman kill the Imp to save their team? Will the Imp kill themselves to turn a more trustworthy player into the Demon? Will the evil team vote to execute a suspicious Minion in order to look like honourable members of the town? Or will the Baron give obviously false information to make it look like a Poisoner is in the game? Causing confusion about which Minions are in play can be the difference between victory and defeat.
  
  `;

  return (
    <>
      <div className="flex flex-col items-center justify-center antialiased">
        <div className="font-display">
          <p className="p-5 text-center text-3xl font-bold">Trouble Brewing</p>
          <p className=" mb-1 text-center text-2xl font-bold sm:underline">Gameplay</p>
          <p className="p-5 ml-1 text-2xl tracking-wide leading-snug text-left break-words font-bold whitespace-pre-line">
            {gameplayDesc}
          </p>
        </div>
        <div className="flex flex-row space-x-10 text-lg font-bold mb-1">
          <Link to={"/"}>
            <p className="p-2 border-spacing-6 border-2 border-black rounded-xl cursor-pointer">Back</p>
          </Link>
          <p className="p-2 border-spacing-6 border-2 border-black rounded-xl shadow-xl bg cursor-pointer">
            Continue To Set-Up
          </p>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default GameModeDescription;
