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
            type: 'slide-push',
            addFixedElement: ''
        };
        option = option || d4;
        var type = option.type,
            addFixedElement = option.addFixedElement;

        document.querySelector('body').classList.add(type);

        function openMenu() {
            document.querySelector('#slide-menu').classList.remove('slide-menu-close');
            document.querySelector('#slide-container').classList.add('slide-menu-open');
            // document.querySelector('body').classList.add('push-open');
        }
        // function closeMenu() {
        //     document.querySelector('#slide-menu').classList.add('slide-menu-close');
        //     document.querySelector('#slide-container').classList.remove('slide-menu-open');
        // }
        document.querySelector('#push-open-layer').addEventListener('click', function () {
            document.querySelector('#slide-menu').classList.add('slide-menu-close');
            document.querySelector('#slide-container').classList.remove('slide-menu-open');
            // document.querySelector('body').classList.remove('push-open');
        });
        document.querySelector('#slide-container').addEventListener('transitionend', function (e) {
            console.log(e);
            if (document.querySelector('#slide-container').classList.contains('slide-menu-open')) {
                document.querySelector('body').classList.add('push-open');
            } else {
                document.querySelector('body').classList.remove('push-open');
            }
        }, false);

        this.openMenu = openMenu;
    }
    window.initSlideMenu = initSlideMenu;
})();