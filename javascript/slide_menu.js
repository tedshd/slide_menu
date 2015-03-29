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

        function openMenu() {
            document.querySelector('#slide-menu').classList.remove('slide-menu-close');
            document.querySelector('#slide-container').classList.add('slide-menu-open');
            document.querySelector('.menu-ico').classList.add('menu-ico-x');
            // document.querySelector('body').classList.add('push-open');
        }
        function closeMenu() {
            if (!document.querySelector('#slide-container').classList.contains('slide-menu-open')) {
                return;
            }
            document.querySelector('#slide-menu').classList.add('slide-menu-close');
            document.querySelector('#slide-container').classList.remove('slide-menu-open');
            document.querySelector('.menu-ico').classList.remove('menu-ico-x');
        }
        document.querySelector('#push-open-layer').addEventListener('click', function () {
            document.querySelector('#slide-menu').classList.add('slide-menu-close');
            document.querySelector('#slide-container').classList.remove('slide-menu-open');
            document.querySelector('.menu-ico').classList.remove('menu-ico-x');
        });
        document.querySelector('#slide-container').addEventListener('transitionend', function (e) {
            if (document.querySelector('#slide-container').classList.contains('slide-menu-open')) {
                document.querySelector('body').classList.add('push-open');
            } else {
                document.querySelector('body').classList.remove('push-open');
            }
        }, false);

        this.openMenu = openMenu;
        this.closeMenu = closeMenu;
    }
    window.initSlideMenu = initSlideMenu;
})();