(function(){
  
var counter = 0, counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0;
    $items = document.querySelectorAll('.diy-slideshow figure'),
    $items1 = document.querySelectorAll('.diy-slideshow2 figure'),
    $items2 = document.querySelectorAll('.diy-slideshow3 figure'),
    $items3 = document.querySelectorAll('.diy-slideshow4 figure'),
    $items4 = document.querySelectorAll('.diy-slideshow5 figure'),
    $items5 = document.querySelectorAll('.diy-slideshow6 figure'),
    $items6 = document.querySelectorAll('.diy-slideshow7 figure'),
    numItems = $items.length;
    numItems1 = $items1.length;
    numItems2 = $items2.length;
    numItems3 = $items3.length;
    numItems4 = $items4.length;
    numItems5 = $items5.length;
    numItems6 = $items6.length;


var showCurrent = function(){
    var itemToShow = Math.abs(counter);
    [].forEach.call( $items, function(el){
    el.classList.remove('show');
    });

    $items[itemToShow].classList.add('show');
};

var showCurrent1 = function(){
    var itemToShow = Math.abs(counter1);
    [].forEach.call( $items1, function(el){
    el.classList.remove('show');
    });

    $items1[itemToShow].classList.add('show');
}

var showCurrent2 = function(){
    var itemToShow = Math.abs(counter2);
    [].forEach.call( $items2, function(el){
    el.classList.remove('show');
    });

    $items2[itemToShow].classList.add('show');
}

var showCurrent3 = function(){
    var itemToShow = Math.abs(counter3);
    [].forEach.call( $items3, function(el){
    el.classList.remove('show');
    });

    $items3[itemToShow].classList.add('show');
}

var showCurrent4 = function(){
    var itemToShow = Math.abs(counter4);
    [].forEach.call( $items4, function(el){
    el.classList.remove('show');
    });

    $items4[itemToShow].classList.add('show');
}

var showCurrent5 = function(){
    var itemToShow = Math.abs(counter5);
    [].forEach.call( $items5, function(el){
    el.classList.remove('show');
    });

    $items5[itemToShow].classList.add('show');
}


var showCurrent6 = function(){
    var itemToShow = Math.abs(counter6);
    [].forEach.call( $items6, function(el){
    el.classList.remove('show');
    });

    $items6[itemToShow].classList.add('show');
}

/*
setInterval(function(){
    counter++;
    counter1++;
    counter2++;
    counter3++;
    showCurrent();showCurrent1();showCurrent2();showCurrent3();
}, 5000);
*/


document.querySelector('.next').addEventListener('click', function() {
     counter++;
     counter = (counter + numItems)%numItems;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     counter = (counter + numItems)%numItems;
     showCurrent();
  }, false);



document.querySelector('.next1').addEventListener('click', function() {
     counter1++;
     counter1 = (counter1 + numItems1)%numItems1;
     showCurrent1();
  }, false);

document.querySelector('.prev1').addEventListener('click', function() {
     counter1--;
     counter1 = (counter1 + numItems1)%numItems1;
     showCurrent1();
  }, false);



document.querySelector('.next2').addEventListener('click', function() {
     counter2++;
     counter2 = (counter2 + numItems2)%numItems2;
     showCurrent2();
  }, false);

document.querySelector('.prev2').addEventListener('click', function() {
     counter2--;
     counter2 = (counter2 + numItems2)%numItems2;
     showCurrent2();
  }, false);



document.querySelector('.next3').addEventListener('click', function() {
     counter3++;
     counter3 = (counter3 + numItems3)%numItems3;
     showCurrent3();
  }, false);

document.querySelector('.prev3').addEventListener('click', function() {
     counter3--;
     counter3 = (counter3 + numItems3)%numItems3;
     showCurrent3();
  }, false);


document.querySelector('.next4').addEventListener('click', function() {
     counter4++;
     counter4 = (counter4 + numItems4)%numItems4;
     showCurrent4();
  }, false);

document.querySelector('.prev4').addEventListener('click', function() {
     counter4--;
     counter4 = (counter4 + numItems4)%numItems4;
     showCurrent4();
  }, false);


document.querySelector('.next5').addEventListener('click', function() {
     counter5++;
     counter5 = (counter5 + numItems5)%numItems5;
     showCurrent5();
  }, false);

document.querySelector('.prev5').addEventListener('click', function() {
     counter5--;
     counter5 = (counter5 + numItems5)%numItems5;
     showCurrent5();
  }, false);

  document.querySelector('.next6').addEventListener('click', function() {
     counter6++;
     counter6 = (counter6 + numItems6)%numItems6;
     showCurrent6();
  }, false);

document.querySelector('.prev6').addEventListener('click', function() {
     counter6--;
     counter6 = (counter6 + numItems6)%numItems6;
     showCurrent6();
  }, false);
  
})();  