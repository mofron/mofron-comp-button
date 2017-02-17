/**
 * @file   index.js
 * @author simpart
 */
require("mofron-comp-text");
require("mofron-event-click");

/**
 * @class comp.Button
 * @brief button component class
 */
mofron.comp.Button = class extends mofron.Component {
    
    /**
     * initialize button component
     *
     * @param prm_opt (string) button text contents
     * @param prm_opt (object) option object of key-value
     */
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
            /* set button tag */
            var btn = new mofron.util.Dom('button', this);
            this.vdom().addChild(btn);
            this.target(btn);
            
            /* set button contents */
            var conts = prm;
            if ('string' === (typeof prm)) {
                conts = new mofron.comp.Text(prm);
            } else if ('object' !== (typeof conts)) {
                throw new Error('invalid parameter');
            }
            this.addChild(conts);
            
            /* set color */
            var clr = this.theme().getColor(0);
            if (null !== clr) {
                this.color(clr);
            }
            
            /* set style */
            this.style('cursor', 'pointer');
            this.height(25);
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
                if (0 ===  evt.length) {
                    return new Array(null,null);
                }
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
                return this.style('width');
            }
            /* setter */
            if ('number' === (typeof val)) {
                this.style('width', val + 'px');
            } else if ('string' === (typeof val)) {
                this.style('width', val);
            } else {
                throw new Error('invalid parameter');
            }
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
                return this.style('height');
            }
            /* setter */
            if ('number' === (typeof val)) {
                this.style('height', val + 'px');
            } else if ('string' === (typeof val)) {
                this.style('height', val);
            } else {
                throw new Error('invalid parameter');
            }
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
                return mofron.func.getColorObj(this.style('background'));
            }
            /* setter */
            if ('object' !== (typeof clr)) {
                throw new Error('invalid parameter');
            }
            
            var rgb = clr.rgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.getChild(0).color(new mofron.util.Color(255, 255, 255));
            }
            
            this.style('background', clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
