// parallax

var rellax = new Rellax('.circle');

//Add active class to the current menu item

var menuItems = document.getElementsByClassName("nav-item-link");
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("nav-item-link--active");
        current[0].className = current[0].className.replace(" nav-item-link--active", "");
        this.className += " nav-item-link--active";
    });
}

//add smooth scroll effect
$(document).ready(function () {
    $('.nav-item a[href^="#"]').on('click', function (event) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

    $('#func').click(function () {
        $('#nav1').toggleClass('change');
        $('#main-menu').toggleClass('block');
        return false;
    });

});

