$(document).ready(function() {
	console.time('loading...');

	initLeftMenu($('.aside-nav ul li'), '.sub-menu', 'open');
    selectMenuItem( $('.sub-menu ul li a'), '.sub-menu');
    selectActiveMenu();
    preparePage();

	console.timeEnd('loading...');
});

function preparePage() {
    if( $('.feedback').length > 0) {
        app.form.init( $('.feedback-left form') );
        app.form.init( $('.feedback-right form') );
    }
}

function selectActiveMenu() {
    var href = location.href.substr(86),
        a    = $('.header-menu ul li a');

    console.log(href);    
    a.each(function() {
      if( $(this).attr('href') == href) {
        if( $(this).attr('href') == 'index.html') {
            return;
        }

         if(!$(this).hasClass('selected')) {
          $(this).parent().parent().find('.selected').removeClass('selected');
          $(this).parent().addClass('selected');
         }
      }
    });    
}

function initLeftMenu(li, sub, cls) {
    li.on('click', function(e) {
        e.stopPropagation();

        if( !$(this).hasClass(cls) ) {
            $(this).addClass(cls)
                   .children(sub)
                   .show();
        } else {
            $(this).removeClass(cls)
                   .children(sub)
                   .hide();
        }
    });
}

function selectMenuItem(a) {
    a.on('click', function(e) {
        e.preventDefault(); 


        if( !$(this).hasClass('selected') );
        $(this).parent()
               .parent()
               .find('.selected')
               .removeClass('selected');    
        $(this).addClass('selected');
    });
}

var app = {};

app.form = (function() {

    var f, e = 0;
        

    function _checkInput(elem) {
        if( elem.val() === '') {
            elem.addClass('error');
            e += 1;
        } else {
            elem.removeClass('error');
            e -= 1;
        }       
    }


    function _checkVals(elem) {
        elem.find('input').each(function() {
            _checkInput( $(this) );
        });   
    }

    function _eraseVals(elem) {
        elem.find('input').each(function() {
            $(this).val('');
        });   
    }

    function _showMsg() {
        $('.popup-feedback').fadeIn(200);
    }

    function _hideMsg() {
        $('.popup-feedback').fadeOut(200);
    }


    function _initHandlers() {
        f.find('input').on('blur', function() {

            _checkInput( $(this) );
        });

        f.find('button').on('click', function(ev) {
            ev.preventDefault();
            _checkVals( $(this).parent() );

            if( e > 0) {
                
                e = 0;
                return;

            } else {
                   _showMsg(); 
                   _eraseVals( $(this).parent() );

                /*$(this).parent()
                       .parent()
                       .find('.popup-feedback')
                       .fadeIn(200);*/

                e = 0;       
            }
 
            
            
        });

        $('.icon-close').on('click', function() {
            _hideMsg();
        });
    }

    return {
        init: function(form) {
            f = form;

            _initHandlers();
        }
    };
})();
