$(document).ready(function() {
    $('.deposit').click(function() {
        $('#modal-add-card').arcticmodal();
    });
    
    $('.header__mobile-button').click(function() {
        $('.mobile-menu-overlay').fadeIn();
        $('.mobile-menu-body').fadeIn();
    });

    $('.mobile-menu-overlay').click(function() {
        $('.mobile-menu-overlay').fadeOut();
        $('.mobile-menu-body').fadeOut();
    });

    $('.mobile-menu-body .top .mobile-menu-close').click(function() {
        $('.mobile-menu-overlay').fadeOut();
        $('.mobile-menu-body').fadeOut();
    });

    $('.title__h3, .title__statements').click(function() {
        $(this).toggleClass('opened');
        $(this).next('.wrap, .wrap__statements').slideToggle();
    });
});

function CopyToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
};