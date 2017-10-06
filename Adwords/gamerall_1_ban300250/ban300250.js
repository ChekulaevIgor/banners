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
p.nominalBounds = new cjs.Rectangle(0,0,220,57);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,43);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,65);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,65);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,66);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,66);


(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,66);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,56);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,56);


(lib.w1 = function() {
	this.initialize(img.w1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,64);


(lib.w2 = function() {
	this.initialize(img.w2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,80);


(lib.w3 = function() {
	this.initialize(img.w3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,61);


(lib.w4 = function() {
	this.initialize(img.w4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,51);


(lib.w5 = function() {
	this.initialize(img.w5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,52);// helper functions:

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


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("A+TXDMAAAguFMA8nAAAMAAAAuFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-194,-147.5,388.1,295.1), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-76,-22,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-76,-22,149.8,42), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-15.5,-33,31,66), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-16,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-16,-33,32,66), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-15.5,-33,31,66), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-15.5,-32.5,31,65), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-16,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-16,-32.5,32,65), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-54.5,-21.5,109,43), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-75,-20,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-75,-20,148.2,41.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-110,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-110,-28.5,220,57), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(0,-28.2,1,1,-4.2,0,0,0,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:0.3},17,cjs.Ease.get(-1)).to({rotation:5.5,x:-0.1},19,cjs.Ease.get(1)).to({rotation:0.3},20,cjs.Ease.get(-1)).to({regX:0,rotation:-4.2,x:0},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-34.1,35.8,68.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(0,-27.1,1,1,-10.7,0,0,0,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.5,x:0.1},19,cjs.Ease.get(-1)).to({regY:-27.2,rotation:8.2,y:-27.2},20,cjs.Ease.get(1)).to({rotation:-1.3,x:0},20,cjs.Ease.get(-1)).to({regY:-27.1,rotation:-10.7,y:-27.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-35.9,43.7,70.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(0,-25.2,1,1,15,0,0,0,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:-4.3,x:0.1},22,cjs.Ease.get(-1)).to({regY:-25.3,rotation:-23.9,y:-25.3},22,cjs.Ease.get(1)).to({regY:-25.4,rotation:-4.8,y:-25.4},22,cjs.Ease.get(-1)).to({regX:0,regY:-25.2,rotation:15,x:0,y:-25.2},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-36.8,47,71.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AABCmQgIAAAAgIQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIAAgBQgIAFgDgFQgRAFgQgRQgYgbgMghQgJgagCgbQgBgagEgYQgCgNADgKQABgYAJgVQAJgVASgOQASgPAVgIQAmgRAqgGIAKgBIAFgBQAjAHgJAhQgDAMgLAHQgVAOgagDQgGAAgFABQgoAJgVAiQgCACABAEQADANgDAKIAAAJQgBARABAQQADAZAGAYQAEAPAMALQAQAPADAUQABAHgBAFQADAGABAIIAAABQAUABgHAOIgEADQgDADgDAAQgFAAgCgGgAAnCDQgJgBgGgHQgagfAggZQAHgGAJAAQAaAFAZAJQAHADACAHQAMAmgpAGQgNACgMAAIgNAAg");
	mask.setTransform(-0.5,-43.8);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AA0AnQgfBEgKAiQgygogWhEQgWhFAYg0QAYg0AlABQAmAAAXA0QAYA0gjBKg");
	this.shape.setTransform(-0.4,-41.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-27.2,1,1,15,0,0,0.1,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0},15,cjs.Ease.get(-1)).to({regX:0.2,rotation:-15},15,cjs.Ease.get(1)).to({rotation:-1.5,x:-0.2,y:-27.3},12,cjs.Ease.get(-1)).to({regX:0.1,rotation:15,x:-0.3,y:-27.2},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-56.4,46.7,90.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-25.6,1,1,18.5,0,0,-0.1,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,y:-25.5},21,cjs.Ease.get(-1)).to({regX:0.1,rotation:-15.8,x:0.1,y:-25.6},23,cjs.Ease.get(1)).to({regY:-25.6,rotation:1.6},23,cjs.Ease.get(-1)).to({regX:-0.1,regY:-25.5,rotation:18.5,x:-0.1},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-37.2,51,71.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al9GaIAAszIL7AAIAAMzgAgYknIg/ACQgPABgKAIQgLAJAQACQBQAMBKgSQAFgBgDgDQgSgQgcAAQgMAAgPAEg");
	mask.setTransform(-34.4,34.5);

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,33);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.w5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-137.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-137.5,-26,275,93), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmcGuIAAtbIM5AAIAANbgAgtkaQASAEACgOQADAAACgDQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQgkgIgnACQgFABgGAAQgZgEgLATQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQApAHArgEIAGAAIAIABg");
	mask.setTransform(-33.7,35);

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(-36,31.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.w4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-133,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-133,-25.5,266,92), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmmG+IAAt7IOfAAIAAN7gAhBk6QgEADgCAEQgFAKAGAHQAQASAYAKQATAGASAEQAYAFAZAAQALAAABgIQABgEgCgBQgcgLgegFQgFAAgEgEIgygmQgIAAgHAEg");
	mask.setTransform(50.5,31.8);

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(54.9,32.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.w3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90,-43.1,1,1,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-90,-52.3,163.3,119.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.w2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-125,-40,250,99.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqOG3IAAttIMIAAIAANtgAnXjUIBTgDQA/gDBgAEIAAgsQjKAFhFggQgOACgNAGQgUAJAAAVQAAAwAugZQAJAMAVAAg");
	mask.setTransform(-65.5,8.7);

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-91.9,12.8,1.114,1.114);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.w1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121,-30,1.114,1.114);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-129.2,-30,254.5,81.3), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(58,-67.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({y:-77.5,alpha:1},10,cjs.Ease.get(1)).wait(60).to({y:-92.5,alpha:0},10).wait(60).to({y:-67.5},0).to({y:-77.5,alpha:1},10,cjs.Ease.get(1)).wait(60).to({y:-92.5,alpha:0},10).wait(71));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.8,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({y:-98.5,alpha:0},10,cjs.Ease.get(1)).wait(60).to({y:-58.5},0).to({y:-78.5,alpha:1},10).wait(60).to({y:-98.5,alpha:0},10,cjs.Ease.get(1)).wait(60).to({y:-58.5},0).to({y:-78.5,alpha:1},10).wait(71));

	// w5.png
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(288.3,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(269).to({_off:false},0).to({x:-0.7,alpha:1},10,cjs.Ease.get(1)).wait(60).to({x:-289.3,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// w4.png
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(256,-0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).to({x:-1,alpha:1},10,cjs.Ease.get(1)).wait(60).to({x:-291,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// w3.png
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(235,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({x:-1,alpha:1},10).wait(60).to({x:-258,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(140));

	// w2.png
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(303.9,-1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({x:0.9,alpha:1},10,cjs.Ease.get(1)).wait(60).to({x:-235.1,alpha:0},10).to({_off:true},1).wait(210));

	// w1.png
	this.instance_6 = new lib.Символ13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({x:-242,alpha:0},10,cjs.Ease.get(1)).wait(270).to({x:243},0).to({x:-2,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-98.5,264,151.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,alpha:0.07},7,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06,alpha:0.141},7,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,alpha:0.074},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.03,scaleY:1.03},7,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06},7,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-28.5,220,57);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},19,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13},20,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-28.5,220,57);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-116,-30,232.1,60.2), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-82,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,87,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.87,scaleY:0.87},5,cjs.Ease.get(1)).wait(1).to({scaleX:0.83,scaleY:0.83},5,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

	// Слой 2
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.1,-0.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.25},5,cjs.Ease.get(1)).wait(1).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// bg.jpg
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.9,-148,388.1,295.1);


// stage content:
(lib.ban300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(7);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.main = new lib.Символ6();
	this.main.parent = this;
	this.main.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111.1,102,388.1,295.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507292677822", id:"bg"},
		{src:"images/btn.png?1507292677822", id:"btn"},
		{src:"images/logo.png?1507292677822", id:"logo"},
		{src:"images/p1.png?1507292677822", id:"p1"},
		{src:"images/p2.png?1507292677822", id:"p2"},
		{src:"images/p3.png?1507292677822", id:"p3"},
		{src:"images/p4.png?1507292677822", id:"p4"},
		{src:"images/p5.png?1507292677822", id:"p5"},
		{src:"images/txt1.png?1507292677822", id:"txt1"},
		{src:"images/txt2.png?1507292677822", id:"txt2"},
		{src:"images/w1.png?1507292677822", id:"w1"},
		{src:"images/w2.png?1507292677822", id:"w2"},
		{src:"images/w3.png?1507292677822", id:"w3"},
		{src:"images/w4.png?1507292677822", id:"w4"},
		{src:"images/w5.png?1507292677822", id:"w5"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;