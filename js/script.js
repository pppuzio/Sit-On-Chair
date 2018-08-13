document.addEventListener("DOMContentLoaded", function(event) {

    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var headerImages = document.querySelectorAll('.headerImage');
    var dropDown = document.querySelector('.dropdown');
    var navLists = document.querySelectorAll('.navList li a');
    var oFirmieButton = document.querySelector('.oFirmie');
    var images = document.querySelectorAll('.img');



    var index = 0;

    headerImages[index].classList.add('visible');

    next.addEventListener('click', function(){



        headerImages[index].classList.remove('visible');
        index++;

        if (index === headerImages.length){

            index = 0;
        }
        headerImages[index].classList.add('visible');


    });

    prev.addEventListener('click', function(){



        headerImages[index].classList.remove('visible');
        index--;

        if (index < 0 ){

            index = 2;
        }
        headerImages[index].classList.add('visible');

        headerImages[index].classList.add('visible');


    });

    oFirmieButton.addEventListener('click',function () {

        if (dropDown.style.display === 'none') {
            dropDown.style.display = 'block';
        } else {
            dropDown.style.display = 'none'
        }

    });


    navLists.forEach(function(element){

        element.addEventListener('mouseover',function () {
           /* debugger;*/
            this.style.color = '#2dba9e';

        })

    });

    navLists.forEach(function(element){

        element.addEventListener('mouseout',function () {
            /* debugger;*/
            this.style.color = 'white';

        })

    });

    images.forEach(function(element){

        element.addEventListener('mouseover',function () {

            this.firstChild.style.visibility = 'hidden';

        })

    });

    images.forEach(function(element){

        element.addEventListener('mouseout',function () {
            /* debugger;*/

            this.firstChild.style.visibility = 'visible';

        })

    })



});