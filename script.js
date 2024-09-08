const count = document.querySelector('.count');
const decrement = document.querySelector('.minus-btn');
const increment = document.querySelector('.plus-btn');
const changeBy = document.querySelector('#changeBy');
const reset = document.querySelector('.reset');

decrement.addEventListener('click', () => {
    const countValue = parseInt(count.textContent);
    const changeByValue = parseInt(changeBy.value);
    count.textContent = countValue - changeByValue;
});

increment.addEventListener('click', () => {
    const countValue = parseInt(count.textContent);
    const changeByValue = parseInt(changeBy.value);
    count.textContent = countValue + changeByValue;
});

reset.addEventListener('click', () => {
    count.textContent = 0;
})