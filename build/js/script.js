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
    lightbox.option({
      'positionFromTop': 130,
      'resizeDuration': 200,
      'wrapAround': true
    });
}

function easyTabs() {
    $('#tab-container').easytabs();
}



