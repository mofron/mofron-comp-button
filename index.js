/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
let mf = require('mofron');
let Text  = require("mofron-comp-text");
let Click = require("mofron-event-click");
/**
 * @class Button
 * @brief button component class
 */
mf.comp.Button = class extends mf.Component {
    
    constructor (po) {
        try {
            super();
            this.name('Button');
            this.prmOpt(po);
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
            /* init top of tag */
            super.initDomConts('button');
            
            /* set contents */
            this.addChild(
                new Text({
                    text : (null === prm) ? '' : prm
                })
            );
            
            /* set style */
            this.style({ 'cursor' : 'pointer' });
            this.height(25);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            /* set text component */
            let txt = this.theme().component('mofron-comp-text');
            if (null !== txt) {
                txt.execOption(this.text().getOption());
                this.text(txt);
            }
            /* set color */
            let clr = this.theme().color(0);
            if (null !== clr) {
                this.color(clr);
            }
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
                return mf.func.getColor(this.style('background'));
            }
            /* setter */
            if (false  === mf.func.isObject(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            
            var rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.child()[0].color(new mf.Color(255, 255, 255));
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
                return this.child()[0];
            }
            /* setter */
            if (true === mf.func.isInclude(txt, 'Text')) {
                if (0 === this.m_child.length) {
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
    
    height (val, tflg) {
        try {
            let ret = super.height(val);
            if (undefined === ret) {
                if ((false !== tflg) && (val !== 25)) {
                    this.text().size(val/2);
                }
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.button = {};
module.exports = mofron.comp.Button;
