const openModal = document.querySelector('.hero_cta');
const moodal = document.querySelector('.modal');
const closeModal= document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
    /*alert('Auch');*/
    e.preventDefault();
    moodal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    /*alert('Auch');*/
    e.preventDefault();
    moodal.classList.remove('modal--show');
});