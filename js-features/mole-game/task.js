const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let hole = document.getElementsByClassName("hole");
console.log(hole);
  
let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {

    getHole(i).onclick = () => {

        if (hole[i-1].className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }
        

        if (Number(dead.textContent) === 10) {
            alert("Победа!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    
        if (Number(lost.textContent) === 5) {
            alert("Вы проиграли!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    } 
};

