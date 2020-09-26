# Game UI Inventory

## Description

This is Game UI created with Vue.js using Vuex.

![screenshot](https://i.imgur.com/4lWQZrz.png) 

It consists of 4 main parts - the inventory, details, the log and the tabs

Items in the inventory can be selected on mouse click. Once you select an item you can use the arrow keys to select adjacent items.

On hover the item details will be displayed on the right

Items in the inventory can be drag and dropped to be rearanged.

You can switch from light to dark mode in the upper right corner
![switch](https://i.imgur.com/XEfuSvu.png)

Communication of the components happens through the built in EventBus in Vue

## Project Scripts

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

## Project Structure

``` 
- public/
    - index.html
- src/
    - assets/
        - data.json
        - bigData.json
    - components/
        - Armor.vue
        - Details.vue
        - Inventory.vue
        - Item.vue
        - Log.vue
        - Tab.vue
        - Tabs.vue
        - ThemeSwitch.vue
        - Weapon.vue
    - store/
        - index.js
    - utils/
        - event-bus.js
        - itemGenerator.js
    - App.vue
    - main.js
- .gitignore
- babel.config.js
- package.json
- package-lock.json
- README.md
```

## Item Generation Script

You can generate items through the itemGenerator.js 

To run the script, while in the main folder use:

``` 
node .\src\utils\itemGenerator.js 
```

You can change the number of items and the width of the grid from the code:

```
const NUMBER_OF_COLUMNS = 6;
const NUMBER_OF_ITEMS = 10000;
``` 