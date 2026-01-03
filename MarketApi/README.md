# MarketForm API
A js library to generate the correct form buttons layout for Market Form UI.
This is important in order to make the category buttons and shop items with prices to show.

# Installation:
1. Download the marketform.js library
2. Import the marketform.js library to your behavior pack's script folder
3. Import the api on your main script file using
   ```js
   import {MarketForm} from "path/to/marketform.js"
   //replace the path with the path to the marketform.js
   ```

# Constructor
``new MarketForm(title, categories[])``

  > **title** : *string* - The title of the market form
  
  > **categories[]** : [categories[]](#categories) - An array of all categories and its items

# Categories
``Array<{name: string, icon: string, items: Item[] }>``

  > **name** : *string* - The name of the category
  
  > **icon** : *string* - The texture path for the category's display icon
  
  > **items** : [items[]](#items) - An array of items in this category

# Items
``Array<{name: string, icon: string, price: number, func: void()}>``

  > **name** : *string* - The display name or description for the item
  
  > **icon** : *string* - The texture path for the item's display icon
  
  > **price** : *number* - The price amount to display for the item
  
  > **func** : *void()* - The functin to call when the user clicked this item

# Show
``new MarketForm(...).show(player: Player, categoryIndex: number)``

After finishing the setup of categories and items, you need to show it using this ``show`` method
  > **player** : *Player* - The instance of player where you want to show the form
  
  > **categoryIndex** : *number* - The index of category you want to show, starts at 0 to 6 (1st to 7th category)

# Example Usage
Market form with 2 categories, opens on using an item

```js
const categories = [
  {
    name: "Category 1",
    icon: "textures/items/emerald",
    items: [
      {
        name: "Coal\n§7Click to buy",
        icon:"textures/items/coal",
        price:2,
        func: (player)=>player.sendMessage("You bought a Coal!")
      },
      {
        name: "Diamond\n§7Click to buy",
        icon:"textures/items/diamond",
        price:2,
        func: (player)=>player.sendMessage("You bought a Diamond!")
      }
    ]
  },
  {
    name: "Category 2",
    icon: "textures/items/carrot",
    items: [
      {
        name: "Carrot\n§7Click to buy",
        icon:"textures/items/carrot",
        price:2,
        func: (player)=>player.sendMessage("You bought a Carrot!")
      },
      {
        name: "Wheat\n§7Click to buy",
        icon:"textures/items/wheat",
        price:2,
        func: (player)=>player.sendMessage("You bought a Wheat!")
      }
    ]
  }
]

const shop = new MarketForm("Market Form", categories)

world.afterEvents.itemUse.subscribe(data => {
  const {itemStack: item, source: player} = data;
  
  if(item.typeId === "minecraft:emerald"){
    if(player.isSneaking){
      shop.show(player, 0) //shows the first category
    }else{
      shop.show(player, 1) //shows the second category
    }
  }
})
```

# Download
 - [Download here](./marketform.js)
 - [Example Script](./MarketApi.mcpack)

