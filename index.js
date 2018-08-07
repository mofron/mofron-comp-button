/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
const mf = require('mofron');
const Text  = require("mofron-comp-text");
const Click = require("mofron-event-click");
/**
 * @class Button
 * @brief button component class
 */
mf.comp.Button = class extends mf.Component {
    
    constructor (po) {
        try {
            super();
            this.name('Button');
            this.prmMap('text', 'clickEvent');
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
    initDomConts () {
        try {
            super.initDomConts('button');
            
            /* set contents */
            this.addChild(new Text(''));
            
            /* set style */
            this.style({ 'cursor' : 'pointer' });
            this.height(0.25);
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
                let evt = this.event();
                for (let idx in evt) {
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
    mainColor (clr) {
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
                this.updChild(this.child()[0], txt);
            } else if ('string' === typeof txt) {
                this.text().execOption({
                    text : txt
                });
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            let ret = super.height(val);
            if (undefined === ret) {
                this.text().execOption({
                    size : val - 0.1
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disableSts (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_disable) ? false : this.m_disable;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_disable = prm;
            if (true === prm) {
                this.target().attr({ 'disabled' : 'disabled' });
            } else {
                this.target().attr({ 'disabled' : null });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Button;
/* end of file */
