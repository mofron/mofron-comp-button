/**
 * @file  mofron-comp-button/index.js
 * @brief button component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Text   = require("mofron-comp-text");
const Click  = require("mofron-event-click");
const SynHei = require("mofron-effect-synchei");

mf.comp.Button = class extends mf.Component {
    /**
     * constructor
     * 
     * @param (mixed) string: text parameter
     *                object: component option
     * @param (function) clickEvent parameter
     * @pmap text,clickEvent
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.name('Button');
            this.prmMap(['text', 'clickEvent']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts('button');
            this.addChild(this.text());  // set button text
            /* set style */
            this.style({ 'cursor' : 'pointer' });
            this.height('0.25rem');
	    this.text().effect(new SynHei(this));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text contents
     *
     * @param (mixed) string: button text contents
     *                mofron-comp-text: button text component
     * @return (string) button text
     * @type parameter
     */
    text (txt) {
        try {
            if ('string' === typeof txt) {
                this.text().option({ text : txt });
                return;
            }
            return this.innerComp('text', txt, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button click event
     *
     * @param (function) click event function
     * @param (mixed) function parameter
     * @return (array) [[function, parameter], ...]
     * @type parameter
     */
    clickEvent (func, prm) {
        try {
            let ev = this.event(["Click", arguments.callee.name]);
            if (undefined === func) {
                /* getter */
                return (null === ev) ? null : ev.handler();
            }
            /* setter */
            if (null === ev) {
                ev = new Click({ tag:arguments.callee.name });
                this.event(ev);
            }
            ev.handler(func, prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button color
     * 
     * @param (mixed (color)) string: button color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) button color 
     * @return (null) not set
     * @type parameter
     */
    mainColor (clr, opt) {
        try {
	    return mf.func.cmpColor(this, 'background', [clr,opt]);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button border color
     * 
     * @param (mixed (color)) string: button border color, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) button border color
     * @return (null) not set
     * @type parameter
     */
    accentColor (clr, opt) {
        try { return mf.func.cmpColor(this, 'border-color', [clr, opt]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change disable mode
     * change this button to grayout and it will be can not click.
     *
     * @type function
     */
    disabled () {
        try { this.status(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change enable mode
     *
     * @type function
     */
    enabled () {
        try { this.status(true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button status
     *
     * @param (boolean) change enable/disable mode
     * @return (boolean) current status
     * @type parameter
     */
    status (sts) {
        try {
            if (undefined === sts) {
                /* getter */
                return ('disabled' === this.target().attr('disabled')) ? false : true;
            }
            /* setter */
            if ('boolean' !== typeof sts) {
                throw new Error('invalid parameter');
            }
            this.target().attr({
                'disabled' : (true === sts) ? null : 'disabled'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Button;
/* end of file */
