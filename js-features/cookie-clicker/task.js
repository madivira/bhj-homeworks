const cookie = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter");
const clicker__v = document.getElementById("clicker__v");

cookie.onclick = () => {
    
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
    if (Number(clicker__counter.textContent)%2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 300;
    }
    
    let date = new Date;
    clicker__v.textContent = (1/ (date.getSeconds()/100)).toFixed(2);
};



