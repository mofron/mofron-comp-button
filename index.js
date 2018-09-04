/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
const mf    = require('mofron');
const Text  = require("mofron-comp-text");
const Click = require("mofron-event-click");
/**
 * @class Button
 * @brief button component class
 */
mf.comp.Button = class extends mf.Component {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Button');
            this.prmMap('text', 'clickEvent');
            this.prmOpt(po, p2);
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
            this.height('0.25rem');
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
                return [null,null];
            }
            /* setter */
            if ('function' !== typeof func) {
                throw new Error('invalid parameter');
            }
            this.event([new Click(new mf.Param(func,prm))]);
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
            
            let rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.child()[0].color(new mf.Color(255, 255, 255));
            }
            this.style({ 'background' : clr.getStyle() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mf.func.getColor(this.style('border-color'));
            }
            /* setter */
            if (false  === mf.func.isObject(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'border-color' : clr.getStyle() });
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
                    size : mf.func.sizeDiff(val, '0.12rem')
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disabled () {
        try { this.status(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enabled () {
        try { this.status(true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    status (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return ('disabled' === this.target().attr('disabled')) ? false : true;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.target().attr({
                'disabled' : (true === prm) ? null : 'disabled'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Button;
/* end of file */
