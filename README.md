# Whack-a-Mole Game 🎮

## Project Overview
A browser-based Whack-a-Mole game implemented using HTML5 Canvas and vanilla JavaScript, featuring a 10x10 grid with dynamic mole and pumpkin spawning.

## Key Technical Highlights

### 1. Grid Management
```javascript
let righe = new Array();
// 10x10 grid initialization
for(let i=0; i<10; i++){
    righe[i] = new Array();
    for(let j=0; j<10; j++){
        righe[i][j] = 0;
    }
}
```
- Uses a 2D array `righe` to manage game grid state
- Grid cell states:
  - `0`: Empty
  - `1`: Mole
  - `-1`: Pumpkin

### 2. Intelligent Spawning Mechanism
```javascript
let addMole = function(e,l){
    let talpaOrNot = Math.floor(Math.random()*10);
    if(talpaOrNot >= 3) { 
        // 70% chance of spawning a mole
        righe[e][l] = 1;
        context.drawImage(moleImg, NLATO * e, NLATO * l);
    } else { 
        // 30% chance of spawning a pumpkin
        righe[e][l] = -1;
        context.drawImage(zuccaImg, NLATO * e, NLATO * l);
    }
}
```
- Probabilistic spawning system
- 70% chance of mole, 30% chance of pumpkin
- Uses random number generation for dynamic gameplay

### 3. Interactive Scoring System
```javascript
canvas.addEventListener('click', function() {
    if(punti < 0 || punti >= 1000) return;
    
    // Calculate clicked grid coordinates
    mousex = Math.floor(event.pageX - canvas.getBoundingClientRect().left / NLATO);
    mousey = Math.floor(event.pageY - canvas.getBoundingClientRect().top / NLATO);

    // Score logic
    if(righe[mousex][mousey] === 1){
        punti += 100; // Mole hit
    }
    if(righe[mousex][mousey] === -1){
        punti -= 200; // Pumpkin hit
    }
}, false);
```
- Click event handling
- Dynamic score calculation
- Mole hit: +100 points
- Pumpkin hit: -200 points

### 4. Continuous Game Progression
```javascript
let timer1 = setInterval(displayNewMole, 2700);
let timer2 = setInterval(function(){
    let p1 = document.getElementById("xp");
    p1.textContent = "punti : "+ punti;
},100);
```
- `timer1`: Spawns new moles every 2.7 seconds
- `timer2`: Updates score display every 0.1 seconds
- Ensures continuous game dynamics

## Technical Specifications
- **Language**: JavaScript
- **Rendering**: HTML5 Canvas
- **Grid**: 10x10
- **Assets**: Ground, Mole, and Pumpkin images

## Game Rules
- Click on moles to gain points
- Avoid clicking pumpkins
- Game ends when points are negative or exceed 1000

## Setup & Run
1. Clone repository
2. Ensure `ground.png`, `mole.png`, `zucca.png` are in project directory
3. Open `index.html` in a modern browser

## Potential Improvements
- Add sound effects
- Implement difficulty levels
- Create responsive design
- Add high score tracking

## Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange)

## License
MIT License

## Contributions
Pull requests welcome! 🚀
