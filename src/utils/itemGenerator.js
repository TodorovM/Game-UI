 const fs = require('fs');


 const NUMBER_OF_COLUMNS = 6;
 const NUMBER_OF_ITEMS = 10000;
 const TYPES = ['weapon', 'armor'];
 const RARITY = ['white', 'green', 'purple', 'blue', 'red', 'gold'];
 const ITEMS = {
     weapon: ['flail', 'sword', 'hammer', 'axe', 'knife', 'katana', 'spear'],
     armor: ['armor', 'helmet', 'gauntlet', 'shield']
 }
 const MATERIALS = {
     white: ['bronze', 'wood', 'stone'],
     green: ['steel', 'copper', 'glass', 'obsidian'],
     purple: ['tungsten'],
     blue: ['titanium', 'diamond'],
     red: ['cursed'],
     gold: ['lava', 'light']
 }

 const COST = {
     white: [1, 10],
     green: [10, 50],
     blue: [50, 150],
     purple: [150, 350],
     red: [350, 700],
     gold: [700, 1300]
 }

 const result = {
     player: {
         inventoryview: {
             width: 6,
             height: 'auto',
             layout: []
         },
         inventoryitems: []
     }
 }

 function randomArrayItem(arr) {
     return arr[Math.floor(Math.random() * arr.length)]
 }

 function randomCost(rarity) {
     return Math.floor(Math.random() * COST[rarity][0]) + COST[rarity][1] 
 }


 for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
     const objRarity = randomArrayItem(RARITY);
     const objType = randomArrayItem(TYPES);
     const item = {
         id: i,
         type: objType,
         rarity: objRarity,
         cost: randomCost(objRarity),
         titleid: `${randomArrayItem(MATERIALS[objRarity])} ${randomArrayItem(ITEMS[objType])}`
     };
     const itemPosition = {
         itemid: i,
         positionX: (i % NUMBER_OF_COLUMNS) + 1,
         positionY: (Math.floor(i / 6)) + 1
     }
     result.player.inventoryitems.push(item);
     result.player.inventoryview.layout.push(itemPosition);

 }

 fs.writeFile('src/assets/bigData.json', JSON.stringify(result), (err) => {
     if (err) throw err;
     console.log('File created successfully')
 } )