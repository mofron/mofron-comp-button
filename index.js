/**
 * @file  mofron-comp-button/index.js
 * @brief button component for mofron
 * @license MIT
 */
const Text   = require("mofron-comp-text");
const Click  = require("mofron-event-click");
const SynHei = require("mofron-effect-synchei");
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * constructor
     * 
     * @param (mixed) string: text parameter
     *                object: component config
     * @param (mixed) clickEvent parameter
     * @short text,clickEvent
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname('Button');
            this.shortForm('text', 'clickEvent');
            
            if (0 < arguments.length) {
                this.config(p1,p2);
            }
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
	    /* set button text */
            this.child(this.text());
            /* set default config */
            this.height('0.25rem');
	    this.status(true);
	    this.text().effect(new SynHei(this,'-0.1rem'));
	    this.style({ 'border-width' : '0.01rem' });
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
     * @param (mixed) text component config
     * @return (mofron-comp-text) button text
     * @type parameter
     */
    text (txt, cnf) {
        try {
            if ('string' === typeof txt) {
                this.text().text(txt);
                return;
            }
	    if (undefined !== cnf) {
                this.text().config(cnf);
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
     * @type parameter
     */
    clickEvent (func, prm) {
        try {
            let ev = this.event({ name: "Click", tag: arguments.callee.name });
            if (null === ev) {
                ev = new Click({ tag:arguments.callee.name });
                this.event(ev);
            }
            ev.listener(func, prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text color
     * 
     * @param (mixed (color)) string: button text color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) style option
     * @return (mixed) button text color
     *                 null: not set yet
     * @type parameter
     */
    mainColor (clr, opt) {
        try {
	    return this.text().mainColor(clr,opt);
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
     * @param (key-value) style option
     * @return (mixed) button border color
     *                 null; not set yet
     * @type parameter
     */
    accentColor (clr, opt) {
        try {
	    if (undefined !== clr) {
                this.style(
		    { 'border-style' : (null === clr) ?  'none' : 'solid' },
		    opt
		);
	    }
	    return cmputl.color(this, 'border-color', clr, opt);
	} catch (e) {
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
        try {
	    this.status(false);
	} catch (e) {
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
        try {
	    this.status(true);
	} catch (e) {
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
                return ('disabled' === this.childDom().attrs('disabled')) ? false : true;
            }
            /* setter */
            if ('boolean' !== typeof sts) {
                throw new Error('invalid parameter');
            }
            this.childDom().attrs({
                'disabled' : (true === sts) ? null : 'disabled'
            });
	    this.childDom().style(
                { 'cursor' : (true === sts) ? 'pointer' : 'not-allowed' }
	    );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
