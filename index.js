/**
 * @file   mofron-comp-button/index.js
 * @author simpart
 */
const mf      = require('mofron');
const Text    = require("mofron-comp-text");
const Click   = require("mofron-event-click");
const Synchei = require('mofron-effect-synchei');
const Invclr  = require('mofron-effect-dev');
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
            this.addChild(this.text());
            
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
                return (null === this.event('Click')) ? null : this.event('Click').handler();
            }
            /* setter */
            this.event(new Click(func, prm));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button color setter / getter
     *
     * @param prm : (string) color
     * @return (null) no setting color
     * @return (string) setted color
     * @note do not specify parameters, if use as getter
     */
    mainColor (prm) {
        try {
            let tgt = 'background';
            return (undefined === prm) ? this.style(tgt) : mf.func.setColor(this, tgt, prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (prm) {
        try {
            let tgt = 'border-color';
            return (undefined === prm) ? this.style(tgt) : mf.func.setColor(this, tgt, prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if ('string' === typeof prm) {
                this.text().execOption({ text : prm });
                return;
            }
            if (true === mf.func.isInclude(prm, 'Text')) {
                prm.effect(new Synchei(this, '-0.12rem'));
            }
            
            return this.innerComp(prm, 'text', Text);
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
module.exports = mf.comp.Button;
/* end of file */
