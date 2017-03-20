/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
require("mofron-comp-text");
require("mofron-event-click");

/**
 * @class Button
 * @brief button component class
 */
mofron.comp.Button = class extends mofron.Component {
    
    /**
     * initialize DOM contents
     *
     * @param prm : (string) button contents
     * @param prm : (object) component object of button contents
     */
    initDomConts (prm) {
        try {
            this.name('Button');
            
            /* init contents */
            this.vdom().addChild(
                new mofron.Dom('button', this)
            );
            
            /* set button contents */
            this.addChild(
                ('string' === typeof prm) ? new mofron.comp.Text(prm) : prm
            );
            
            /* set style */
            this.style({'cursor' : 'pointer'});
            this.height(25);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            /* set theme color */
            this.color(
                (null === this.theme().getColor(0)) ? undefined : this.theme().getColor(0)
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    /**
     * button click event setter / getter
     * 
     * @param func : (function) function for click event listener
     * @param prm : (mixed) function parameter (not required)
     * @return (object) [0] -> event function
     *                  [1] -> function parameter
     * @note do not specify parameters, if use as getter
     */
    clickEvent (func, prm) {
        try {
            if (undefined === func) {
                /* getter */
                var evt = this.event();
                for (var idx in evt) {
                    if ('Click' === evt[idx].name()) {
                        return evt[idx].eventFunc();
                    }
                }
                return new Array(null,null);
            }
            /* setter */
            if ( (null       === func)  ||
                 ('function' !== typeof func) ) {
                throw new Error('invalid parameter');
            }
            this.addEvent(
                new mofron.event.Click(
                    func,
                    (prm === undefined) ? null : prm
                )
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button width getter / setter
     * 
     * @param val : (number) button width (px)
     * @param val : (string) button width (manual)
     * @return (string) button width
     * @note do not specify parameters, if use as getter
     */
    width (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mofron.func.getLength(this.style('width'));
            }
            /* setter */
            this.style({
                'width' : ('number' === typeof val) ? (val + 'px') : val
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button height getter / setter
     * 
     * @param val : (number) button height (px)
     * @param val : (string) button height (manual)
     * @return (string) button height
     * @note do not specify parameters, if use as getter
     */
    height (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mofron.func.getLength(this.style('height'));
            }
            /* setter */
            this.style({
                'height' : ('number' === typeof val) ? (val + 'px') : val
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button color setter / getter
     *
     * @param clr : (object) mofron.util.Color object
     * @return (null) no setting color
     * @return (object) mofron.util.Color object
     * @note do not specify parameters, if use as getter
     */
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mofron.func.getColor(this.style('background'));
            }
            /* setter */
            if (false  === mofron.func.isObject(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            
            var rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.getChild(0).color(new mofron.Color(255, 255, 255));
            }
            
            this.style({'background' : clr.getStyle()});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.button = {};
module.exports = mofron.comp.Button;
