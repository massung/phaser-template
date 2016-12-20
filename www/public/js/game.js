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
        this.logo.anchor.set(0.5);
        this.logo.scale.set(0.5);
    };
    Boot.prototype.update = function () {
        if (this.logo.input.justPressed()) {
            this.game.add.tween(this.logo.scale)
                .to({ x: 1, y: 1 }, 500, Phaser.Easing.Cubic.InOut)
                .yoyo(true)
                .start();
        }
    };
    Boot.prototype.render = function () {
        this.game.debug.spriteInfo(this.logo, 10, 18);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ2FtZS50cyIsInNyYy9zdGF0ZXMvYm9vdC50cyIsInNyYy9zdGF0ZXMvc3RhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0VBLHdDQUEwQztBQUkxQyxJQUFJLElBQWlCLENBQUM7QUFJdEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFJckI7SUFDSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7UUFDckQsT0FBTyxFQUFFLE9BQU87UUFDaEIsTUFBTSxFQUFFLE1BQU07S0FDakIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEO0FBRUEsQ0FBQztBQUlEO0lBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixDQUFDOzs7Ozs7OztBQzlCRDtJQUEwQix3QkFBWTtJQUF0Qzs7SUE2Q0EsQ0FBQztJQXhDRyxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFJRCxxQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUdoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBRzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFHL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRzlCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUlELHFCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMvQixFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNWLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBSUQscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0wsV0FBQztBQUFELENBN0NBLEFBNkNDLENBN0N5QixNQUFNLENBQUMsS0FBSyxHQTZDckM7QUE3Q1ksb0JBQUk7Ozs7OztBQ0FqQiw0QkFBdUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3BoYXNlci9waGFzZXIuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgKiBhcyBTdGF0ZXMgZnJvbSBcIi4vc3RhdGVzL3N0YXRlc1wiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIGdhbWU6IFBoYXNlci5HYW1lO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxud2luZG93Lm9ubG9hZCA9IG1haW47XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICdjb250ZW50Jywge1xyXG4gICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXHJcbiAgICAgICAgY3JlYXRlOiBjcmVhdGUsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gcHJlbG9hZCgpIHtcclxuICAgIC8vIFRPRE86IENvbW1vbiBzb3VyY2UgYXNzZXRzIGNhbiBiZSBsb2FkZWQgaGVyZS4uLlxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBnYW1lLnN0YXRlLmFkZCgnYm9vdCcsIFN0YXRlcy5Cb290KTtcclxuICAgIGdhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxufVxyXG4iLCIvLyBBIHNhbXBsZSBib290IHN0YXRlLlxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gICAgcHJpdmF0ZSBsb2dvOiBQaGFzZXIuU3ByaXRlO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdsb2dvJywgJ2RhdGEvcGhhc2VyLWxvZ28tc21hbGwucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7XHJcblxyXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAweEIyMDA1OTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgc2ltcGxlIHNwcml0ZVxyXG4gICAgICAgIHRoaXMubG9nbyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHgsIHksICdsb2dvJyk7XHJcblxyXG4gICAgICAgIC8vIHJlc3BvbmQgdG8gaW5wdXQgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5sb2dvLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHBpdm90IGFib3V0IHRoZSBjZW50ZXIgb2YgdGhlIHNwcml0ZVxyXG4gICAgICAgIHRoaXMubG9nby5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5sb2dvLnNjYWxlLnNldCgwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9nby5pbnB1dC5qdXN0UHJlc3NlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5sb2dvLnNjYWxlKVxyXG4gICAgICAgICAgICAgICAgLnRvKHt4OiAxLCB5OiAxfSwgNTAwLCBQaGFzZXIuRWFzaW5nLkN1YmljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5kZWJ1Zy5zcHJpdGVJbmZvKHRoaXMubG9nbywgMTAsIDE4KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBBZGQgYWxsIHlvdXIgZ2FtZSBzdGF0ZXMgaGVyZS4uLlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYm9vdFwiO1xyXG4iXX0=
