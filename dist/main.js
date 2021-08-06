const navBtn = document.querySelector('#nav-button');
const nav = document.querySelector('.nav-list');

const plusBtn = document.getElementById('plus-button');
const blogPlus = document.getElementById('blog-list')

navBtn.addEventListener('click',function(){
nav.classList.toggle('open');
})

plusBtn.addEventListener('click',function(){
    blogPlus.classList.toggle('open-plus')
})

const section1 = document.getElementById('features');


const obsCallback = function(enteries,observer){
enteries.forEach(entry => 
    {
        console.log(entry);
    }
    )
};

const obsOptions ={
root:null,
threshold : 0.1,
};

const observer = new IntersectionObserver(obsCallback,obsOptions);

observer.observe(section1);