(function(){
  
var counter = 0, counter1 = 0, counter2= 0, counter3=0;
    $items = document.querySelectorAll('.diy-slideshow figure'),
    $items1 = document.querySelectorAll('.diy-slideshow2 figure'),
    $items2 = document.querySelectorAll('.diy-slideshow3 figure'),
    $items3 = document.querySelectorAll('.diy-slideshow4 figure'),

    numItems = $items.length;
    numItems1 = $items1.length;
    numItems2 = $items2.length;
    numItems3 = $items3.length;

var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
    [].forEach.call( $items, function(el){
    el.classList.remove('show');
    });

    $items[itemToShow].classList.add('show');
};

var showCurrent1 = function(){
    var itemToShow = Math.abs(counter1%numItems1);
    [].forEach.call( $items1, function(el){
    el.classList.remove('show');
    });

    $items1[itemToShow].classList.add('show');
}

var showCurrent2 = function(){
    var itemToShow = Math.abs(counter2%numItems2);
    [].forEach.call( $items2, function(el){
    el.classList.remove('show');
    });

    $items2[itemToShow].classList.add('show');
}

var showCurrent3 = function(){
    var itemToShow = Math.abs(counter3%numItems3);
    [].forEach.call( $items3, function(el){
    el.classList.remove('show');
    });

    $items3[itemToShow].classList.add('show');
}


setInterval(function(){
    counter++, counter1++, counter2++, counter3++;
    showCurrent();showCurrent1();showCurrent2();showCurrent3();
}, 5000);



document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);



document.querySelector('.next1').addEventListener('click', function() {
     counter1++;
     showCurrent1();
  }, false);

document.querySelector('.prev1').addEventListener('click', function() {
     counter1--;
     showCurrent1();
  }, false);



document.querySelector('.next2').addEventListener('click', function() {
     counter2++;
     showCurrent2();
  }, false);

document.querySelector('.prev2').addEventListener('click', function() {
     counter2--;
     showCurrent2();
  }, false);



document.querySelector('.next3').addEventListener('click', function() {
     counter3++;
     showCurrent3();
  }, false);

document.querySelector('.prev3').addEventListener('click', function() {
     counter3--;
     showCurrent3();
  }, false);
  
})();  