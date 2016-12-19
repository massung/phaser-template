(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var States = require("./states/states");
var game;
window.onload = main;
function main() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        preload: preload,
        create: create,
    });
}
function preload() {
}
function create() {
    game.state.add('boot', States.Boot);
    game.state.start('boot');
}

},{"./states/states":3}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        this.game.load.image('logo', 'data/phaser-logo-small.png');
    };
    Boot.prototype.create = function () {
        var x = this.game.world.centerX;
        var y = this.game.world.centerY;
        this.game.stage.backgroundColor = 0xB20059;
        this.logo = this.game.add.sprite(x, y, 'logo');
        this.logo.inputEnabled = true;
        this.logo.anchor.set(0.5, 0.5);
        this.logo.scale.set(0.5, 0.5);
    };
    Boot.prototype.update = function () {
        if (this.logo.input.justPressed()) {
            this.game.add.tween(this.logo.scale)
                .to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.InOut)
                .yoyo(true)
                .start();
        }
    };
    return Boot;
}(Phaser.State));
exports.Boot = Boot;

},{}],3:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./boot"));

},{"./boot":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2plZmYubWFzc3VuZy9BcHBEYXRhL1JvYW1pbmcvbnBtL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJnYW1lLmpzIiwic3RhdGVzL2Jvb3QuanMiLCJzdGF0ZXMvc3RhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgU3RhdGVzID0gcmVxdWlyZShcIi4vc3RhdGVzL3N0YXRlc1wiKTtcclxudmFyIGdhbWU7XHJcbndpbmRvdy5vbmxvYWQgPSBtYWluO1xyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICdjb250ZW50Jywge1xyXG4gICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXHJcbiAgICAgICAgY3JlYXRlOiBjcmVhdGUsXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBwcmVsb2FkKCkge1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICAgIGdhbWUuc3RhdGUuYWRkKCdib290JywgU3RhdGVzLkJvb3QpO1xyXG4gICAgZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdhbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn07XHJcbnZhciBCb290ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCb290LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQm9vdCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEJvb3QucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2xvZ28nLCAnZGF0YS9waGFzZXItbG9nby1zbWFsbC5wbmcnKTtcclxuICAgIH07XHJcbiAgICBCb290LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAweEIyMDA1OTtcclxuICAgICAgICB0aGlzLmxvZ28gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCAnbG9nbycpO1xyXG4gICAgICAgIHRoaXMubG9nby5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9nby5hbmNob3Iuc2V0KDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLmxvZ28uc2NhbGUuc2V0KDAuNSwgMC41KTtcclxuICAgIH07XHJcbiAgICBCb290LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9nby5pbnB1dC5qdXN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5sb2dvLnNjYWxlKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogMSwgeTogMSB9LCA1MDAsIFBoYXNlci5FYXNpbmcuQ3ViaWMuSW5PdXQpXHJcbiAgICAgICAgICAgICAgICAueW95byh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBCb290O1xyXG59KFBoYXNlci5TdGF0ZSkpO1xyXG5leHBvcnRzLkJvb3QgPSBCb290O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib290LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZShcIi4vYm9vdFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlcy5qcy5tYXAiXX0=
