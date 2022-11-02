const readMoreRefill = document.querySelector('.read-more-refill');
const text1 = document.querySelector('.text1');

readMoreRefill.addEventListener('click',()=>{
    text1.classList.toggle('show-more');
    if(readMoreRefill.innerText == 'Read More'){
        readMoreRefill.innerText = 'Read Less';
    }else {
        readMoreRefill.innerText = 'Read More';
    }
})


const readMoreFour = document.querySelector('.read-more-four');
const text4 = document.querySelector('.text4');

readMoreFour.addEventListener('click',()=>{
    text4.classList.toggle('show-more');
    if(readMoreFour.innerText == 'Read More'){
        readMoreFour.innerText = 'Read Less';
    }else {
        readMoreFour.innerText = 'Read More';
    }
})