/*! Pushy - v1.1.2 - 2017-05-02
 * Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
 * https://github.com/jamesckemp/pushy-left-right/
 * by Christopher Yee
 * modified by James Kemp */

(function($, document) {

    var pushy = {

        /**
         * Cache
         *
         * Caches common objects and vars
         */
        cache: function() {

            pushy.els = {};
            pushy.vars = {};
            pushy.fallback = {};

            // common elements
            pushy.els.body = $('body');
            pushy.els.html = $('html');
            pushy.els.items = $('[data-pushy]');
            pushy.els.overlay = $('.site-overlay');

            // common vars
            pushy.vars.css_transforms_3d = pushy.css_transforms_3d();
            pushy.vars.classes = {
                active_item: 'pushy-active-item',
                left: {
                    item: 'pushy-left--open',
                    active: 'pushy-active pushy-left-active'
                },
                right: {
                    item: 'pushy-right--open',
                    active: 'pushy-active pushy-right-active'
                },
            };

            // fallback vars
            pushy.fallback.item_showing = false;
            pushy.fallback.speed = 200;

        },

        /**
         * Document Ready
         */
        on_ready: function() {

            pushy.cache();
            pushy.setup_pushy();

        },

        /**
         * Setup Pushy
         */
        setup_pushy: function() {

            pushy.setup_items();
            pushy.setup_triggers();
            pushy.setup_overlay();

        },

        /**
         * Setup Pushy Items
         */
        setup_items: function() {

            if( pushy.els.items.length <= 0 ) { return; }

            pushy.els.items.each(function( index, item ){

                var $item = $( item ),
                    item_data = $item.data('pushy'),
                    item_width = $item.width();

                $item.addClass('pushy-'+item_data.direction);

                $item.data('pushy-direction', item_data.direction);
                $item.data('pushy-width', item_width);

                // Fallback

                if( !pushy.vars.css_transforms_3d ) {

                    var args = {};
                    args[item_data.direction] = -item_width+'px';

                    $item.css( args );

                }

            });

        },

        /**
         * Setup Pushy Trigger
         */
        setup_triggers: function() {

	        $( '[data-pushy-trigger]' ).on( 'click', function(){

		        var $trigger = $( this ),
                    item_id = $trigger.data( 'pushy-trigger' ),
                    $item = $( '#'+item_id );

                if( $item.length <= 0 ) { return false; }

                $trigger.data( 'pushy-item', $( '#'+item_id ) );

                pushy.toggle( $item, $trigger );

                return false;

	        });

        },

        /**
         * Setup Pushy Overlay
         */
        setup_overlay: function() {

            pushy.els.overlay.on('click', function(){

                var $overlay = $(this),
                    $item = $('.'+pushy.vars.classes.active_item);

                pushy.toggle_item( $item );

            });

        },

        /**
         * Toggle Pushy
         *
         * @param obj $item
         * @param obj $trigger
         */
        toggle: function( $item, $trigger ) {

            pushy.toggle_item( $item );

        },

        /**
         * Toggle Item
         *
         * @param obj $item
         */
        toggle_item: function( $item ) {

            pushy.els.body.toggleClass( pushy.vars.classes[ $item.data('pushy-direction') ].active );
            pushy.els.html.toggleClass( pushy.vars.classes[ $item.data('pushy-direction') ].active );

            $item
                .toggleClass( pushy.vars.classes[ $item.data('pushy-direction') ].item )
                .toggleClass( pushy.vars.classes.active_item );

            // Fallback

            if( !pushy.vars.css_transforms_3d ) {

                var item_args = {};

                if( pushy.fallback.item_showing ) {

                    item_args[ $item.data('pushy-direction') ] = -$item.data('pushy-width')+'px';

                    pushy.fallback.item_showing = false;

                } else {

                    item_args[ $item.data('pushy-direction') ] = '0px';

                    pushy.fallback.item_showing = true;

                }

                $item.animate( item_args, pushy.fallback.speed );

            }

        },

        /**
         * Helper: CSS Transforms 3D
         *
         * checks if 3d transforms are supported removing the modernizr dependency
         */
        css_transforms_3d: function() {

            // return false;

            var el = document.createElement('p'),
            supported = false,
            transforms = {
                'webkitTransform':'-webkit-transform',
                'OTransform':'-o-transform',
                'msTransform':'-ms-transform',
                'MozTransform':'-moz-transform',
                'transform':'transform'
            };

            // Add it to the body to get the computed style
            document.body.insertBefore(el, null);

            for(var t in transforms){
                if( el.style[t] !== undefined ){
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (supported !== undefined && supported.length > 0 && supported !== "none");

        }

    }

	$(document).ready( pushy.on_ready );

}(jQuery, document));