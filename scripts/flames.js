// let init = "FLAMES".split("");
const btn = document.getElementById("send");
const reload = document.getElementById("reload");
var sound = new Audio("/media/pencil1.mp3");
var para = document.getElementById("para");
var para1 = document.getElementById("para1");
var load = document.getElementById("load");

btn.addEventListener("click", findFlame); //Note No Need For () inside addEventListener()
reload.addEventListener("click", reloadPage);

document.getElementById("you").focus();
/*this function findFlame cancels out the
matching character and gives the total length*/

function findFlame() {
    const you = document.getElementById("you").value;
    const crush = document.getElementById("crush").value;
    let tot_len = you.length + crush.length;
    let youArr = you.toLowerCase().split("");
    let crushArr = crush.toLowerCase().split("");

    load.style.display = "block";
    btn.disabled = true;

    for (let i = 0; i <= youArr.length; i++) {
        for (let j = 0; j <= crushArr.length; j++) {
            if (youArr[i] == crushArr[j]) {
                crushArr.splice(j, 1);
                continue;
            }
        }
    }
    let rem = crush.length - crushArr.length;
    let tot = Math.abs(tot_len - rem * 2);
    console.log(tot);

    find(tot);
}

/* this function find(num) strikes the characters and calls display() with 
last character*/

function find(num) {
    let baseInput = "flames";
    let temp = "";

    if (num > 0) {
        while (baseInput.length !== 1) {
            // console.log(baseInput); use if needed
            let tmpLen = num % baseInput.length; //finding character to strike
            if (tmpLen !== 0) {
                // appending  start from next char to strike and first char to char before strike
                temp = baseInput.substring(tmpLen) + baseInput.substring(0, tmpLen - 1);
            } else {
                temp = baseInput.substring(0, baseInput.length - 1); // if tmplen = 0 removing last character
            }
            baseInput = temp;
        }
    }
    display(baseInput.charAt(0));
}
//============= TRIED WITH ARRAY =========
// let arr = "flames".split("");
// num = parseInt(num);
// while (arr.length !== 1) {
//   if (num > arr.length) {
//     num = parseInt(num % arr.length);
//   }
//   console.log(arr);
//   console.log(arr.splice(num - 1, 1));
// console.log(arr.length);

// let count = num - 1;
// while (count !== 0) {
//   arr.push(arr.shift());
//   count--;
// }
// }
//=========================================


// remember how stupidly you wrote this function with nearly 60 lines ;D

function display(char) {

    let str = 'flames';
    str = str.replace(char, '');
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        setTimeout(() => {
            document.getElementById(str[i]).style.textDecoration = "line-through";
            sound.play();

        }, i * 1000);
    }
    setTimeout(() => {
        load.style.display = "none";
        switch (char) {
            case 'f':
                para.textContent = "Friendship";
                break;
            case 'l':
                para.textContent = "Love";
                break;
            case 'a':
                para.textContent = "Affection";
                break;
            case 'e':
                para.textContent = "Enemies";
                break;
            case 'm':
                para.textContent = "Marriage";
                break;
            case 's':
                para.textContent = "Siblings";
                break;
        }
    }, 6000);
    setTimeout(() => {
        reload.style.display = "block";
    }, 6000);

}

function reloadPage() {
    location.reload();
}