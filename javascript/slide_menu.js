/*global $, jQuery, alert, console, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-03-28 15:04:52
 * @version $Id$
 */


(function () {
    function initSlideMenu(option) {
        var d4 = {
            type: 'slide-push'
        };
        option = option || d4;
        var type = option.type;

        document.querySelector('body').classList.add(type);
        var slideMenu = document.querySelector('#slide-menu'),
            slideContainer = document.querySelector('#slide-container'),
            meniIco = document.querySelector('.menu-ico');

        function openMenu() {
            slideMenu.classList.remove('slide-menu-close');
            slideContainer.classList.add('slide-menu-open');
            meniIco.classList.add('menu-ico-x');
            // document.querySelector('body').classList.add('push-open');
        }
        function closeMenu() {
            if (!slideContainer.classList.contains('slide-menu-open')) {
                return;
            }
            slideMenu.classList.add('slide-menu-close');
            slideContainer.classList.remove('slide-menu-open');
            meniIco.classList.remove('menu-ico-x');
        }
        document.querySelector('#push-open-layer').addEventListener('click', function () {
            slideMenu.classList.add('slide-menu-close');
            slideContainer.classList.remove('slide-menu-open');
            meniIco.classList.remove('menu-ico-x');
        });
        slideContainer.addEventListener('transitionend', function (e) {
            if (slideContainer.classList.contains('slide-menu-open')) {
                document.body.classList.add('push-open');
            } else {
                document.body.classList.remove('push-open');
            }
        }, false);

        this.openMenu = openMenu;
        this.closeMenu = closeMenu;
    }
    window.initSlideMenu = initSlideMenu;
})();