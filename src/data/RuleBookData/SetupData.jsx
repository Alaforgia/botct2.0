import React from "react";

function SetupData() {
  const gatherPLayers = `Get one chair per player and arrange the chairs facing each other. A rough circle or square is fine, as long as people are sitting in a definite clockwise or counterclockwise order. As the Storyteller, you will need to be able to enter and exit the circle often, so leave a gap between two chairs. The center of this space will need to be mostly empty - no tables or hazards on the floor which can be tripped on.
  `;

  const prepareGrimoire = `Clip the Grimoire by fastening the two metal clips as close as possible to the upper and lower corners of the game box, creating a sturdy book-like container. Unfold and assemble the two-piece Grimoire stand and place the Grimoire upon it, putting it where players that walk around will not accidentally see its contents. Collect supplies of all the info, night, and shroud tokens anywhere you like in the Grimoire. (We recommend the bottom-left corner of the right side.)`;

  const chooseEdition = `This box set comes with three editions: Trouble Brewing, Bad Moon Rising, and Sects & Violets. Choose one to play with. Uncover and add its edition box to the bottom-left part of the Grimoire. (This will let you easily access the character and reminder tokens you need for this game.) Add the night sheet for this edition to the right side of the Grimoire.

  You’ll need five or more players for Trouble Brewing, and seven or more players for other editions. While you can play other editions with fewer than seven players, this is not recommended. (In five- or six-player games of Bad Moon Rising and Sects & Violets characters like the Shabaloth, Goon, Fang Gu, or Evil Twin can give an unfair advantage to one team.)`;

  const editionSubPrompt = `We recommend you start with Trouble Brewing and then move on to other editions. Likewise, we recommend you run a game or two with five to ten players to get the hang of things, then try your hand at larger games.`;

  const prepareTownSquare = `Put the Town Square board on the floor in the center of the chairs. Put one life token per player on the Town Square matching their seating position. Put a pile of vote tokens in the center of the Town Square. Put the Traveller sheet partially under the Town Square, showing the number of Townsfolk, Outsiders, and Minions.`;

  const readRules = `The Rules Explanation describes all the major things that a new player will need to know to start playing. Simply read out the text written on this sheet to the group, or let those who want to read it do so privately.`;
  //NOTE: No rule sheet, I will have to connect some kind of messaging app.
  const readRulesSubPrompt1 = `Part of the rules sheet will prompt you to talk about various hand signals. You’ll want to demonstrate these hand signals as you go, since some players learn visually.`;
  const readRulesSubPrompt2 = `If you wish, you can read out the part of the rules sheet that talks about nominations and executions now, but most players will learn this better if you read it out later on, when the first nomination for execution begins.`;
  const readRulesSubPrompt3 = `There is a duplicate rules sheet on the reverse side of the Traveller sheet, kept under the Town Square. To save time, get a veteran player to read out the rules from this sheet, so you don’t have to. While they are explaining the rules, you can set up the game.`;

  const chooseCharacters = `Take all of the Townsfolk character tokens out of the chosen edition box, and choose the appropriate number for the number of players, as listed on the setup sheet. Put these character tokens in the left side of the Grimoire, and return all remaining Townsfolk character tokens to the edition box. Then, do the same for any Outsiders, Minions, and the Demon. Do this secretly - the players do not know which characters are in the game.

If there are more than fifteen players in this game, then any excess players must volunteer to be Travellers. Travellers have enormous power but less responsibility, and they often help the game go quicker. Give these volunteers the Travellers sheet, so they can choose which Travellers they wish to be. You’ll find more information about them at Travellers.

For your first game, we do not recommend that you include Travellers or Fabled. `;

  const chooseCharsSubPrompt1 = `CHOOSING CHARACTERS. The characters you choose will greatly affect how the game plays. Choose what you think will be fun, what will interact well, or simply what you feel capable of handling. If it is your first game, and you don’t know which characters to include, consider the following (for an eight-player game) or alter one to suit your style:`;
  const chooseCharsSubPrompt2 = `Chef, Empath, Fortune Teller, Undertaker, Virgin, Drunk (Investigator), Scarlet Woman, Imp. This setup has a lot of information for the good team, and is a great way to get people engaged and talking immediately, but also is relatively safe for evil players that are unsure of how to bluff well. It will be a chaotic game that is a blast for new players. Remember to give the drunk Investigator false information, and remember that they cannot die by nominating the Virgin!`;
  const chooseCharsSubPrompt3 = `Empath, Fortune Teller, Ravenkeeper, Slayer, Mayor, Saint, Poisoner, Imp. This will be a much quieter game, as players slowly figure out if the Saint, Slayer, and Mayor are telling the truth. The Poisoner, who has many juicy targets, can certainly cause some chaos. However, the game may be a quick one if the Slayer is savvy, if the Saint is not savvy enough, or if the Poisoner cannot find the Empath and Fortune Teller in time. If the Mayor is attacked at night, remember to kill another player instead - perhaps the Ravenkeeper?
  `;
  const chooseCharsSubPrompt4 = `
  Washerwoman, Fortune Teller, Undertaker, Slayer, Virgin, Recluse, Spy, Imp. This is a more advanced setup, requiring some deeper logic from the players, but can be very rewarding if they figure it out. Remember that the Recluse can register as the Demon to the Fortune Teller, Undertaker, and Slayer! And remember that the Spy can register as a Townsfolk to the Virgin, Undertaker, and Washerwoman!`;

  //TODO: I will have to add some custom rules since this will be done in app.

  return <div>SetupData</div>;
}

export default SetupData;
