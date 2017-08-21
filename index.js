/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
require("mofron-comp-text");
let Click = require("mofron-event-click");

/**
 * @class Button
 * @brief button component class
 */
mofron.comp.Button = class extends mofron.Component {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Button');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     *
     * @param prm : (string) button contents
     * @param prm : (object) component object of button contents
     */
    initDomConts (prm) {
        try {
            /* init contents */
            this.vdom().addChild(
                new mofron.Dom('button', this)
            );
            
            /* set button contents */
            this.text((null === prm) ? '' : prm);
            this.text().size(20);
            
            /* set style */
            this.style({'cursor' : 'pointer'});
            this.height(25);
            let thm_clr = this.theme().color(0);
            this.color( (null === thm_clr) ? undefined : thm_clr );
            
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
                new Click(
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
            if (false === mofron.func.isInclude(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            
            var rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                /* set text color */
                this.child()[0].color(new mofron.Color(255, 255, 255));
            }
            
            this.style({'background' : clr.getStyle()});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (txt) {
        try {
            if (undefined === txt) {
                /* getter */
                if (false === mofron.func.isObject(this.child()[0], 'Text')) {
                    var txt = this.theme().component('mofron-comp-text');
                    this.text(new txt(''));
                }
                return this.child()[0];
            }
            /* setter */
            if (true === mofron.func.isInclude(txt, 'Text')) {
                if (0 === this.child().length) {
                    this.addChild(txt);
                } else {
                    this.updChild(this.child()[0], txt);
                }
            } else if ('string' === typeof txt) {
                this.text().text(txt);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.button = {};
module.exports = mofron.comp.Button;
