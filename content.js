const date = new Date();
const hours = date.getHours();

const pageToRedirect = "https://stackoverflow.com/users/6352772/kartik-chauhan";

const inRange = (target, min, max) => (target >= min && target <= max) ? true : false;
const isNull = (val) => (val === String(false) || val === false || val === "null" || val === null) ? true : false;

let count = localStorage.getItem('count');
console.log(count);

if((inRange(hours, 13, 14) || inRange(hours, 17, 18)) && isNull(localStorage.getItem('visitedSO'))) {
    localStorage.setItem('visitedSO', true);
    window.location.href = pageToRedirect;
    let counter = isNull(localStorage.getItem('count')) ? 0 : localStorage.getItem('count');
    localStorage.setItem('count', ++counter);
} else {
    console.log(localStorage.getItem('count'));
}
