/**
 * @file   button.js
 * @author simpart
 */

/**
 * @class mofron.comp.Button
 * @brief base class of button component
 */
mofron.comp.Button = class extends mofron.Component {
    
    /**
     * initialize button component
     *
     * @param prm (string) button text contents
     * @param opt (object) option
     */
    constructor (prm, opt) {
        try {
            super(prm);
            this.name('Button');
            
            if (null !== opt) {
                this.option(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     *
     * @param prm : (string,mofron.comp.Text) button contents
     */
    initDomConts (prm) {
        try {
            /* set button tag */
            var btn = new mofron.util.Vdom('button', this);
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
     * set button click event
     *
     * @param func : (function) function for click event listener
     * @param prm : (mixed) function parameter (option)
     */
    setClickEvent (func, prm) {
        try {
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
     * button width getter/setter
     * 
     * @param val : (number,string) button width (option)
     * @note for getter, do not specify parameters
     */
    width (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.style('width');
            }
            /* set style */
            if ('number' === (typeof _val)) {
                this.style('width', _val + 'px');
            } else if ('string' === (typeof _val)) {
                this.style('width', _val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button height getter/setter
     * 
     * @param val : (number,string) button height (option)
     * @note for getter, do not specify parameters
     */
    height (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.style('height');
            }
            /* set style */
            if ('number' === (typeof _val)) {
                this.style('height', _val + 'px');
            } else if ('string' === (typeof _val)) {
                this.style('height', _val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button color getter/setter
     *
     * @param clr : (object) color (option)
     * @note for getter, do not specify parameters
     */
    color (clr) {
        try {
            var _clr = (clr === undefined) ? null : clr;
            if (null === _clr) {
                return mofron.func.getColorObj(this.style('background'));
            }
            /* set style */
            if ('object' !== (typeof _clr)) {
                throw new Error('invalid parameter');
            }
            
            var rgb = clr.getRgba();
            if (290 > (rgb[0]+rgb[1]+rgb[2])) {
                this.getChild(0).color(new mofron.util.Color(255, 255, 255));
            }
            
            this.style('background', _clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
