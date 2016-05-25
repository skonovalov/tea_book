$(document).ready(function() {
	console.time('loading...');

	preparePage();

	console.timeEnd('loading...');
});

function preparePage() {
    if( $('#main').length > 0) {
        openMenu();
        closeMain();
    }

    if($('.filter-cats')) {
        lightBox();
        easyTabs();
    }
}

/* open menu on main page*/

function openMenu() {
    var btn, menu;

    btn = $('.hamb'),
    menu = $('header');

    btn.on('click', function() {
        menu.addClass('open-menu');

        setTimeout(function() {
            $('.menu').addClass('menuFadeIn');
        }, 300);
    });

    
}

/* close menu on main page*/

function closeMain() {
    var btn, menu;

    btn = $('.icon-close'),
    menu = $('header');

    btn.on('click', function() {
        setTimeout(function() {
            menu.removeClass('open-menu');
        }, 1000);

        
        $('.menu').removeClass('menuFadeIn');

    });

    
}


function lightBox() {
    $(".fancybox").fancybox();
}

function easyTabs() {
    $('#tab-container').easytabs();
}



