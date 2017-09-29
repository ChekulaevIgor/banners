(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,56);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,55);


(lib.man1 = function() {
	this.initialize(img.man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,97);


(lib.man2 = function() {
	this.initialize(img.man2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,123);


(lib.man3 = function() {
	this.initialize(img.man3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,147);


(lib.man4 = function() {
	this.initialize(img.man4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,120);


(lib.man5 = function() {
	this.initialize(img.man5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,87);


(lib.ruka1 = function() {
	this.initialize(img.ruka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,16);


(lib.ruka3 = function() {
	this.initialize(img.ruka3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,106);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,58);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-23.7,-10,0.83,0.351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-23.7,-10,47.3,20), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man5();
	this.instance.parent = this;
	this.instance.setTransform(-24,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-24,-43.5,48,87), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-28.5,2.754,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-78.5,-28.5,157,57), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man4();
	this.instance.parent = this;
	this.instance.setTransform(-49.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-49.5,-60,99,120), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-28.5,-28.5,57,57), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-28.5,2.053,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-58.5,-28.5,117,57), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka3();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-12.5,-53,25,106), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man3();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-46.5,-73.5,93,147), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-28.5,3.175,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-90.5,-28.5,181,57), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man2();
	this.instance.parent = this;
	this.instance.setTransform(-41,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-41,-61.5,82,123), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka1();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-9.5,-8,19,16), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-30.5,-48.5,61,97), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-97.5,-28,195,56), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAkpIAAJT");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-1,-30.8,2,61.7), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4SF1IAArpMAwlAAAIAALpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-155.5,-37.3,311,74.7), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-62.5,-29,125,58), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-63.5,-27.5,127,55), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-23.7,-10,47.3,20), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.8,y:8.8},2,cjs.Ease.get(1)).to({scaleY:0.91,y:-6.2},10,cjs.Ease.get(1)).to({y:3.8},5,cjs.Ease.get(-1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.3,42);
	this.instance_1.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},2,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.68,scaleY:1.68,x:-9.4,alpha:0.559},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-9.3,alpha:0.891},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-43.5,57,95.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-78.5,-28.5,157,57), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-58.5,-28.5,117,57), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,38,1,1,0,0,0,-11.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,rotation:15,x:-11.6},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:-11.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-53,25,106);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka3.png
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(43.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// man3.png
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-56,-73.5,112,147), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.88,y:9.1},2,cjs.Ease.get(1)).to({scaleY:0.94,y:-11.1},10,cjs.Ease.get(1)).to({scaleY:1,y:0},7,cjs.Ease.get(-1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,71.5);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.74,scaleY:0.74,alpha:1},2,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.53,scaleY:1.53,alpha:0.422},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,alpha:0.762},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-73.5,117,173.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-90.5,-28.5,181,57), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-41,-61.5,82,123), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,6.5);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-29,-22,57,57), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(7,0,1,1,0,0,0,7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},3,cjs.Ease.get(1)).to({regY:-0.1,rotation:53.7,x:7.1,y:0.1},5,cjs.Ease.get(1)).to({regY:0,rotation:-15,x:7,y:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-8,19,16);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka1.png
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// man1.png
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-33,-48.5,66,97), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.91,y:4.4},3,cjs.Ease.get(1)).to({scaleY:1,y:-8.5},5,cjs.Ease.get(1)).to({y:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.2,41,1,0.288,-8.5);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,scaleX:0.85,scaleY:0.25,rotation:-8.4,x:-4.3,y:42.2,alpha:1},3,cjs.Ease.get(1)).to({regX:-0.2,regY:0,scaleX:1.55,scaleY:0.45,rotation:-0.9,alpha:0.488},5,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:0.85,scaleY:0.25,rotation:-8.4,alpha:1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-48.5,66.8,103.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-0.5,-30.3,1,60.7), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-155.5,-37.3,311,74.7), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-62.5,-29,125,58), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-63.5,-27.5,127,55), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,alpha:0.07},9,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,alpha:0.148},10,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,alpha:0.074},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05},9,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},10,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-28,195,56);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-155.5,-129.6,311,259.2), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-19.2,0,0.688,0.688);

	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,0,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-73.2,-19.6,146.5,39.2), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.9,x:1.4,y:14.4},6,cjs.Ease.get(-1)).to({scaleY:0.89,rotation:0,x:0.5,y:20.3},2,cjs.Ease.get(1)).to({scaleY:1,y:-1.5},7,cjs.Ease.get(1)).wait(1).to({rotation:-3.7,x:-3.5,y:10.4},6,cjs.Ease.get(-1)).to({scaleY:0.89,rotation:0,x:0.5,y:20.3},2,cjs.Ease.get(1)).to({scaleY:1,y:-1.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.4,73.5,1.327,1.327,0,0,0,-0.1,0);
	this.instance_1.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:1,scaleY:1,x:-14.2,alpha:0.801},6,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86,alpha:0.91},2,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.33,scaleY:1.33,x:-14.4,alpha:0.391},7,cjs.Ease.get(1)).wait(1).to({regX:0,scaleX:1,scaleY:1,x:-14.2,alpha:0.801},6,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86,alpha:0.91},2,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.33,scaleY:1.33,x:-14.4,alpha:0.391},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-61.5,194.4,161);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(6,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5,x:11.7,y:12.2},6,cjs.Ease.get(1)).to({scaleY:0.92,rotation:0,x:6,y:12.8},2,cjs.Ease.get(1)).to({scaleY:1,y:-19.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-4.5,x:1.1,y:5},6,cjs.Ease.get(1)).to({scaleY:0.92,rotation:0,x:6,y:12.8},2,cjs.Ease.get(1)).to({scaleY:1,y:-19.5},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.5,68.5);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,scaleX:0.5,scaleY:0.5,y:68.6,alpha:0.871},6,cjs.Ease.get(1)).to({scaleX:0.41,scaleY:0.41,alpha:0.961},2,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,y:68.5,alpha:0.488},5,cjs.Ease.get(1)).wait(1).to({regY:0.1,scaleX:0.5,scaleY:0.5,y:68.6,alpha:0.871},6,cjs.Ease.get(1)).to({scaleX:0.41,scaleY:0.41,alpha:0.961},2,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,y:68.5,alpha:0.488},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-81,181,178);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-97.5,-28,195,56), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn = new lib.Символ4();
	this.btn.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-28,195,56);


// stage content:
(lib._3_300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt.png
	this.txt = new lib.Символ8();
	this.txt.parent = this;
	this.txt.setTransform(223.5,36.9,0.982,0.982);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// logo.png
	this.logo = new lib.Символ6();
	this.logo.parent = this;
	this.logo.setTransform(79,36);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Слой 7
	this.white = new lib.Символ13();
	this.white.parent = this;
	this.white.setTransform(150,36.1);

	this.timeline.addTween(cjs.Tween.get(this.white).wait(1));

	// Слой 6
	this.dark = new lib.Символ12();
	this.dark.parent = this;
	this.dark.setTransform(150,32.7);

	this.timeline.addTween(cjs.Tween.get(this.dark).wait(1));

	// btn.png
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(150.5,213);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142,152,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 10
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(236,155.5,1.102,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 11
	this.instance_3 = new lib.Символ40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(278.5,161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 8
	this.instance_4 = new lib.Символ23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(65.5,168.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(40.5,168.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 2
	this.bg = new lib.Символ2();
	this.bg.parent = this;
	this.bg.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.5,120.4,334.9,270.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1506698919923", id:"bg"},
		{src:"images/btn.png?1506698919923", id:"btn"},
		{src:"images/logo.png?1506698919923", id:"logo"},
		{src:"images/man1.png?1506698919923", id:"man1"},
		{src:"images/man2.png?1506698919923", id:"man2"},
		{src:"images/man3.png?1506698919923", id:"man3"},
		{src:"images/man4.png?1506698919923", id:"man4"},
		{src:"images/man5.png?1506698919923", id:"man5"},
		{src:"images/ruka1.png?1506698919923", id:"ruka1"},
		{src:"images/ruka3.png?1506698919923", id:"ruka3"},
		{src:"images/ten.png?1506698919923", id:"ten"},
		{src:"images/txt.png?1506698919923", id:"txt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;