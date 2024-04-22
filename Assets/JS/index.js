const header = document.querySelector('header');
const logo = document.querySelector('header img');
const homeNav = document.getElementById('home-nav');
const martinVilleHomesUnitB = document.getElementById('martin-ville-homes-unit-b');
const martinVilleOpenHouseUnitB = document.getElementById('matin-ville-open-house-unit-b');
const seeAllNewsAndEvents = document.getElementById('see-all');


logo.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

homeNav.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

martinVilleHomesUnitB.addEventListener('click',function(){
    window.location.href="../Modules/Our properties/For Sale/martinvillehomes.html"
});

martinVilleOpenHouseUnitB.addEventListener('click',function(){
    window.location.href="../Modules/News and Events/Contents/martin-ville-open-house.html"
});

seeAllNewsAndEvents.addEventListener('click',function(){
    window.location.href="../Modules/News and Events/newsandevent.html"
});


window.addEventListener('scroll', function() {
    var section2 = document.getElementById('second');
    var section3 = document.getElementById('third');

    // Get the positions of the sections relative to the viewport
    var section2Bottom = section2.getBoundingClientRect().bottom;
    var section3Bottom = section3.getBoundingClientRect().bottom;
   
      // Check if the bottom of section 1 is in view
    if (section2Bottom<= window.innerHeight && section2Bottom >= 0||
            section3Bottom <= window.innerHeight && section3Bottom >= 0) {
                
        // If section 1 bottom is in view, change the color of the nav
        header.style.backgroundColor = "#003399";
    } else {
        // If section 1 bottom is not in view, revert to the original color
        header.style.backgroundColor = "transparent";
    }
  });

  let firstTitleValue = document.getElementById('first-title');
  let secondTitleValue = document.getElementById('second-title');

  firstTitleValue.style.display = 'flex';
  secondTitleValue.style.disply = 'none';

 

  function changeTextFirstValue(){
    firstTitleValue.style.display = 'flex';
    secondTitleValue.style.display = "none";
  }

  function changeTextSecondValue(){
    secondTitleValue.style.display = "flex"
    firstTitleValue.style.display = 'none';

  }

  window.setInterval(changeTextFirstValue, 4000);
  window.setInterval(changeTextSecondValue, 8000);


//Section 2
let isDown = false;
let startX;
let scrollLeft;

document.querySelector('.content-container').addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - document.querySelector('.content-container').offsetLeft;
    scrollLeft = document.querySelector('.content-container').scrollLeft;
});

document.querySelector('.content-container').addEventListener('mouseleave', () => {
    isDown = false;
});

document.querySelector('.content-container').addEventListener('mouseup', () => {
    isDown = false;
});

document.querySelector('.content-container').addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - document.querySelector('.content-container').offsetLeft;
    const walk = (x - startX) * 3; // Adjust this multiplier for desired drag speed
    document.querySelector('.content-container').scrollLeft = scrollLeft - walk;
});

//Section 3

let isDownS3 = false;
let startXS3;
let scrollLeftS3;

document.querySelector('.news-and-events-container').addEventListener('mousedown', (e) => {
    isDownS3 = true;
    startXS3 = e.pageX - document.querySelector('.news-and-events-container').offsetLeft;
    scrollLeftS3 = document.querySelector('.news-and-events-container').scrollLeft;
});

document.querySelector('.news-and-events-container').addEventListener('mouseleave', () => {
    isDownS3 = false;
});

document.querySelector('.news-and-events-container').addEventListener('mouseup', () => {
    isDownS3 = false;
});

document.querySelector('.news-and-events-container').addEventListener('mousemove', (e) => {
    if (!isDownS3) return;
    e.preventDefault();
    const x = e.pageX - document.querySelector('.news-and-events-container').offsetLeft;
    const walk = (x - startXS3) * 3; // Adjust this multiplier for desired drag speed
    document.querySelector(' .news-and-events-container').scrollLeft = scrollLeftS3 - walk;
});

