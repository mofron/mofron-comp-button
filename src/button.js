/**
 * @file   Button.js
 * @author simpart
 */

/**
 * @class Button
 */
mofron.comp.Button = class extends mofron.comp.Base {
    
    getTarget () {
        try {
            return this.vdom.getChild(0);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
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
            
            this.style('cursor', 'pointer');
            this.width(50);
            this.height(25);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setClickEvent (func, prm) {
        try {
            if (null === func) {
                throw new Error('invalid parameter');
            }
            var _prm  = (prm === undefined) ? null : prm;
            var click = new mofron.event.Click();
            click.setCbfunc (func, _prm);
            this.addEvent(click);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            var _val = (val === undefined) ? null : val;
            var btn  = this.getTarget();
            if (null === _val) {
                return btn.getStyle('width');
            }
            if ('number' != (typeof _val)) {
                throw new Error('invalid parameter');
            }
            btn.setStyle('width', _val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            var _val = (val === undefined) ? null : val;
            var btn  = this.getTarget();
            if (null === _val) {
                return btn.getStyle('height');
            }
            if ('number' != (typeof _val)) {
                throw new Error('invalid parameter');
            }
            btn.setStyle('height', _val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
