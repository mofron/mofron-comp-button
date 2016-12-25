/**
 * @file   button.js
 * @author simpart
 */

/**
 * @class mofron.comp.Button
 * @brief base class of button component
 */
mofron.comp.Button = class extends mofron.comp.Base {
    
    /**
     * initialize DOM contents
     *
     * @param vd : (mofron.util.Vdom) vdom object
     * @param prm : (string,mofron.comp.Text) button contents
     */
    initContents (vd, prm) {
        try {
            var btn = new mofron.util.Vdom('button');
            if ('string' === (typeof prm)) {
                btn.addChild(new mofron.comp.Text(prm).getVdom());
            } else if ('object' === (typeof cnt)) {
                btn.addChild(prm.getVdom());
            } else {
                throw new Error('invalid parameter');
            }
            
            vd.addChild(btn);
            this.target = this.vdom.getChild(0);
            
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
            if (null === func) {
                throw new Error('invalid parameter');
            }
            var _prm  = (prm === undefined) ? null : prm;
            this.addEvent(new mofron.event.Click(func, _prm));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button width getter/setter
     * 
     * @param val : (number,string) button width (option)
     */
    width (val) {
        try {
            var _val = (val === undefined) ? null : val;
            var btn  = this.getStyleTgt();
            if (null === _val) {
                return btn.getStyle('width');
            }
            if ('number' === (typeof _val)) {
                btn.setStyle('width', _val + 'px');
            } else if ('string' === (typeof _val)) {
                btn.setStyle('width', _val);
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
     */
    height (val) {
        try {
            var _val = (val === undefined) ? null : val;
            var btn  = this.getStyleTgt();
            if (null === _val) {
                return btn.getStyle('height');
            }
            if ('number' === (typeof _val)) {
                btn.setStyle('height', _val + 'px');
            } else if ('string' === (typeof _val)) {
                btn.setStyle('height', _val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
