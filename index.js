/**
 * @file  mofron-comp-button/index.js
 * @brief button component for mofron
 * @author simpart
 */
const mf       = require('mofron');
const Text     = require("mofron-comp-text");
const Click    = require("mofron-event-click");
const Synchei  = require('mofron-effect-synchei');
const Invclr   = require('mofron-effect-invclr');
const evInvclr = require('mofron-event-invclr');
/**
 * @class Button
 * @brief button component class
 */
mf.comp.Button = class extends mf.Component {
    
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
     * @note private method
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
     * setter/getter for click event
     * 
     * @param func (function) callback function for click event
     * @param func (undefined) calls as getter
     * @param prm (mixed) function parameter (not required)
     * @return (array) [cb func, func param]
     * @return (null) not set yet
     */
    clickEvent (func, prm) {
        try {
            if (undefined === func) {
                /* getter */
                let ret_ev = this.event('Click');
                return (null === ret_ev) ? null : ret_ev.handler();
            }
            /* setter */
            this.event(new Click([func, prm]));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for background color
     *
     * @param clr (string) css 'background' value
     * @param clr (undefined) calls as getter
     * @return (string) css 'background' value
     * @return (null) not set yet
     */
    mainColor (clr) {
        try { return this.tgtColor('background', clr); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for border color
     *
     * @param clr (string) css 'border-color' value
     * @param clr (undefined) calls as getter
     * @return (string) css 'border-color' value
     * @return (null) not set yet
     */
    accentColor (clr) {
        try { return this.tgtColor('border-color', clr); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for button text
     *
     * @param txt (string) button text
     * @param txt (undefined) calls as getter
     * @return (string) button text
     */
    text (txt) {
        try {
            if ('string' === typeof txt) {
                this.text().execOption({ text : txt });
                return;
            } else if (true === mf.func.isInclude(txt, 'Text')) {
                txt.execOption({
                    effect : [
                        new Synchei(this, '-0.12rem'),
                        new Invclr(this, 'mainColor')
                    ]
                });
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
     */
    disabled () {
        try { this.status(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change enable mode
     */
    enabled () {
        try { this.status(true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter status
     *
     * @param sts (boolean) true : change enable mode
     * @param sts (boolean) false : change disable mode
     * @return (boolean) status
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
