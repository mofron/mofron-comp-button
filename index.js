/**
 * @file  mofron-comp-button/index.js
 * @brief button component for mofron
 * @author simpart
 */
const mf    = require('mofron');
const Text  = require("mofron-comp-text");
const Click = require("mofron-event-click");

mf.comp.Button = class extends mf.Component {
    
    /**
     * constructor
     * 
     * @param (string) 'text' function parameter
     * @param (function) 'clickEvent' function parameter
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
     * @return (array) [function, parameter]
     * @return (null) not set
     * @type tag parameter
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
     * @param (string (size)) button color
     * @return (string (size)) button color 
     * @return (null) not set
     * @type tag parameter
     */
    mainColor (clr) {
        try { return this.tgtColor('background', clr); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button border color
     * 
     * @param (string (size)) button border color
     * @return (string (size)) button border color
     * @return (null) not set
     * @type tag parameter
     */
    accentColor (clr) {
        try { return this.tgtColor('border-color', clr); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text contents
     *
     * @param (string) button text contents
     * @return (string) button text
     * @type tag parameter
     */
    text (txt) {
        try {
            if ('string' === typeof txt) {
                this.text().execOption({ text : txt });
                return;
            }
            return this.innerComp('text', txt, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change disable mode
     * change this button to grayout and it will be can not click.
     *
     * @type private
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
     * @type private
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
     * @param (boolean (true/false)) change enable/disable mode
     * @return (boolean) current status
     * @type tag parameter
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
