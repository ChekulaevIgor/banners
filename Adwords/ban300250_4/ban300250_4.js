(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,273);


(lib.banka_c = function() {
	this.initialize(img.banka_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,124);


(lib.banka_v = function() {
	this.initialize(img.banka_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,122);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bluecircle = function() {
	this.initialize(img.bluecircle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,204);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,51);


(lib.gantelya1 = function() {
	this.initialize(img.gantelya1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,52);


(lib.gantelya2 = function() {
	this.initialize(img.gantelya2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,54);


(lib.greencircle = function() {
	this.initialize(img.greencircle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,206);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,77);


(lib.lokot1 = function() {
	this.initialize(img.lokot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,137);


(lib.lokot2 = function() {
	this.initialize(img.lokot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,130);


(lib.plecho1 = function() {
	this.initialize(img.plecho1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,86);


(lib.plecho2 = function() {
	this.initialize(img.plecho2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,87);// helper functions:

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


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(txt2, txt2styles, "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 293;
	this.text.parent = this;
	this.text.setTransform(0,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-148.4,-28.5,296.8,57.1), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka_v();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-46.5,-61,93,122), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka_c();
	this.instance.parent = this;
	this.instance.setTransform(-47,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-47,-62,94,124), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka_c();
	this.instance.parent = this;
	this.instance.setTransform(-47,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-47,-62,94,124), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka_v();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-46.5,-61,93,122), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-51.5,-38.5,103,77), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.greencircle();
	this.instance.parent = this;
	this.instance.setTransform(-102,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-102,-103,204,206), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bluecircle();
	this.instance.parent = this;
	this.instance.setTransform(-102,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-102,-102,204,204), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290800").s().p("Ah7AWQgQgDAEgJQAEgIALgHQALgIAMABQALABAKAGQAKAGAKAKQAJALgTACIgeABQgLAAgQgDgABDAMQgTgCAJgKQAKgKAKgHQAKgGALgBQAMgBALAIQALAIAEAIQAEAIgQADQgQADgLAAIgegBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-13.6,-2.5,27.4,5.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gantelya1();
	this.instance.parent = this;
	this.instance.setTransform(-31,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-31,-26,62,52), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lokot1();
	this.instance.parent = this;
	this.instance.setTransform(-29,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-29,-68.5,58,137), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(txtbtn, txtbtnstyles, "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(-0.1,-11.1);

	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-87,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-87,-25.5,174,51), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(txt1, txt1styles, "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.lineWidth = 289;
	this.text.parent = this;
	this.text.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-146.7,-11,293.5,22), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho1();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-56.5,-43,113,86), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho2();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-58.5,-43.5,117,87), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lokot2();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-26.5,-65,53,130), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gantelya2();
	this.instance.parent = this;
	this.instance.setTransform(-24,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-24,-27,48,54), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.1,y:-11.4},19,cjs.Ease.get(-1)).to({x:59.6,y:-23.3},20,cjs.Ease.get(1)).to({x:29.8,y:-11.6},20,cjs.Ease.get(-1)).to({x:0,y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-62,94,124);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.9,y:7},19,cjs.Ease.get(-1)).to({x:8,y:14.4},20,cjs.Ease.get(1)).to({x:4,y:7.2},20,cjs.Ease.get(-1)).to({x:0,y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-62,94,124);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-46.5,-61,93,122), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.1},17,cjs.Ease.get(-1)).to({rotation:8.4},17,cjs.Ease.get(1)).to({rotation:4.3},17,cjs.Ease.get(-1)).to({rotation:0},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-61,93,122);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-16,-4,31,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-14.6,-3.5,32,10), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-26.6,21.8,1,1,0,0,0,-26.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-26.7,rotation:4,x:-26.7},9,cjs.Ease.get(-1)).to({regX:-26.6,rotation:8.7,x:-26.6,y:21.9},10,cjs.Ease.get(1)).to({rotation:4.3,y:21.8},10,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-26,62,52);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-29,-68.5,58,137), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-87,-26.7,174,51), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-102,-103,204,206), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-56.5,-43,113,86), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-58.5,-43.5,117,87), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-26.5,-65,53,130), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(21.2,21.9,1,1,0,0,0,21.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.8,x:21.3,y:22},9,cjs.Ease.get(-1)).to({rotation:-12.5,y:21.9},10,cjs.Ease.get(1)).to({regX:21.1,rotation:-6.1,x:21.2,y:21.8},10,cjs.Ease.get(-1)).to({regX:21.2,rotation:0,y:21.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-27,48,54);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.725,0.725,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,scaleY:0.72,rotation:14.8,x:-9.6,y:5.1},34,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,rotation:15,x:-19.6,y:10.4},35,cjs.Ease.get(1)).to({scaleX:0.72,scaleY:0.72,rotation:14.8,x:-9.5,y:5.1},36,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,rotation:15,x:0,y:0},34,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-51.4,88,102.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.3},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:21.2},25,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:10.5},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-62,94,124);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-29.4},29,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-60},30,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-29.9},30,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-62,94,124);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.5,y:6.7},24,cjs.Ease.get(-1)).to({x:-7.6,y:14.4},28,cjs.Ease.get(1)).to({x:-3.7,y:7.1},29,cjs.Ease.get(-1)).to({x:0,y:0},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-61,93,122);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AipgoIFOgVIAFBSIlOAVg");
	var mask_graphics_1 = new cjs.Graphics().p("AipggIFOgVIAFBSIlOAUg");
	var mask_graphics_2 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAVg");
	var mask_graphics_3 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAUg");
	var mask_graphics_4 = new cjs.Graphics().p("AipgeIFOgUIAFBRIlOAUg");
	var mask_graphics_5 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAUg");
	var mask_graphics_6 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAVg");
	var mask_graphics_7 = new cjs.Graphics().p("AipggIFOgVIAFBSIlOAUg");
	var mask_graphics_8 = new cjs.Graphics().p("AipgoIFOgVIAFBSIlOAVg");
	var mask_graphics_9 = new cjs.Graphics().p("AipggIFOgVIAFBSIlOAUg");
	var mask_graphics_10 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAVg");
	var mask_graphics_11 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAUg");
	var mask_graphics_12 = new cjs.Graphics().p("AipgeIFOgUIAFBRIlOAUg");
	var mask_graphics_13 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAUg");
	var mask_graphics_14 = new cjs.Graphics().p("AipgeIFOgVIAFBSIlOAVg");
	var mask_graphics_15 = new cjs.Graphics().p("AipggIFOgVIAFBSIlOAUg");
	var mask_graphics_16 = new cjs.Graphics().p("AipgoIFOgVIAFBSIlOAVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.4,y:-6.1}).wait(1).to({graphics:mask_graphics_1,x:-0.4,y:-5.4}).wait(1).to({graphics:mask_graphics_2,x:-0.3,y:-4.1}).wait(1).to({graphics:mask_graphics_3,x:-0.2,y:-2.6}).wait(1).to({graphics:mask_graphics_4,x:-0.1,y:-1.1}).wait(1).to({graphics:mask_graphics_5,x:-0.2,y:-2.6}).wait(1).to({graphics:mask_graphics_6,x:-0.3,y:-4.1}).wait(1).to({graphics:mask_graphics_7,x:-0.4,y:-5.4}).wait(1).to({graphics:mask_graphics_8,x:-0.4,y:-6.1}).wait(1).to({graphics:mask_graphics_9,x:-0.4,y:-5.4}).wait(1).to({graphics:mask_graphics_10,x:-0.3,y:-4.1}).wait(1).to({graphics:mask_graphics_11,x:-0.2,y:-2.6}).wait(1).to({graphics:mask_graphics_12,x:-0.1,y:-1.1}).wait(1).to({graphics:mask_graphics_13,x:-0.2,y:-2.6}).wait(1).to({graphics:mask_graphics_14,x:-0.3,y:-4.1}).wait(1).to({graphics:mask_graphics_15,x:-0.4,y:-5.4}).wait(1).to({graphics:mask_graphics_16,x:-0.4,y:-6.1}).wait(17));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-3.5,31.2,1.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(1.4,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.baba();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.2,-78,0.572,0.572);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-63.2,-78,126.4,156.1), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(5,22.5);

	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-31.5,-87.5,63,175), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,23);

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-31.5,-91.5,63,183), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},9,cjs.Ease.get(-1)).to({scaleX:0.89,scaleY:0.89},10,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-26.7,174,51);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},9,cjs.Ease.get(-1)).to({scaleX:0.89,scaleY:0.89},10,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-103,204,206);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-22.3},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-45},22,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-22.8},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-51.4,88,102.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(27,86.8,1,1,0,0,0,27,86.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.9,rotation:-2.5,x:26.9},9,cjs.Ease.get(-1)).to({regX:27,rotation:-5.5,x:27.1,y:86.9},10,cjs.Ease.get(1)).to({regX:26.9,rotation:-2.6,x:26.9,y:86.8},10,cjs.Ease.get(-1)).to({regX:27,rotation:0,x:27},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-87.5,63,175);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-11.3,89.8,1,1,0,0,0,-11.3,89.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5},9,cjs.Ease.get(-1)).to({regX:-11.2,regY:89.9,rotation:7.5,x:-11.2,y:90},10,cjs.Ease.get(1)).to({regY:89.8,rotation:3.6,x:-11.3,y:89.9},10,cjs.Ease.get(-1)).to({regX:-11.3,rotation:0,y:89.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-91.5,63,183);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-60,-101.5,120,203), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(9.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-66,-101.5,132,203), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,15.2,1,1,0,0,0,-59.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5},9,cjs.Ease.get(-1)).to({regY:15.1,rotation:10.9},10,cjs.Ease.get(1)).to({rotation:5.3},10,cjs.Ease.get(-1)).to({regY:15.2,rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-101.5,120,203);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(66,14.2,1,1,0,0,0,66,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4},9,cjs.Ease.get(-1)).to({rotation:-8.7,x:66.1,y:14.3},10,cjs.Ease.get(1)).to({rotation:-4.3},10,cjs.Ease.get(-1)).to({rotation:0,x:66,y:14.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-101.5,132,203);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baba.png
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-2.8,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// plecho2.png
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87,-16.2,0.572,0.572);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// plecho1.png
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-96.5,-14.8,0.572,0.572,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-134.2,-79,255.5,156.1), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.1},24,cjs.Ease.get(-1)).to({y:11.2},25,cjs.Ease.get(1)).to({y:7.2},25,cjs.Ease.get(-1)).to({y:3.2},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.2,-75.8,255.5,156.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_186 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_207 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(186).call(this.frame_186).wait(21).call(this.frame_207).wait(28));

	// Символ 16
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:0},7,cjs.Ease.get(1)).wait(113).to({alpha:1},7,cjs.Ease.get(1)).wait(1).to({alpha:0},0).wait(40).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({scaleX:1.17,scaleY:1.17},7,cjs.Ease.get(1)).wait(113).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(40).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

	// baba
	this.baba = new lib.Символ1();
	this.baba.parent = this;
	this.baba.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(59).to({regX:0.2,scaleX:0.26,scaleY:0.26,x:0.5,y:56.9,alpha:0},7,cjs.Ease.get(1)).wait(113).to({regX:0,scaleX:1,scaleY:1,x:0.4,y:0,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regX:0.2,scaleX:0.26,scaleY:0.26,x:0.5,y:56.9,alpha:0},0).wait(40).to({regX:0,scaleX:1,scaleY:1,x:0.4,y:0,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.instance_2 = new lib.Символ53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,-74.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({y:-90.1,alpha:1},8).wait(97).to({y:-74.1,alpha:0},8).wait(8).to({y:-90.1,alpha:1},8).wait(24).to({y:-74.1,alpha:0},8).wait(8));

	// Слой 9
	this.instance_3 = new lib.Символ39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-7.5,0.285,0.285);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(169));

	// banka_v.png - копия
	this.instance_4 = new lib.Символ41();
	this.instance_4.parent = this;
	this.instance_4.setTransform(224.9,27.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({x:106.5,y:21,alpha:1},9).wait(77).to({x:224.9,y:27.8,alpha:0},9,cjs.Ease.get(1)).wait(16).to({_off:true},1).wait(9).to({_off:false},0).to({x:106.5,y:21,alpha:1},9).wait(4).to({x:224.9,y:27.8,alpha:0},9,cjs.Ease.get(1)).wait(17));

	// banka_v.png
	this.instance_5 = new lib.Символ51();
	this.instance_5.parent = this;
	this.instance_5.setTransform(219.7,-87.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({x:106.5,y:-39,alpha:1},9).wait(83).to({x:219.7,y:-87.4,alpha:0},9,cjs.Ease.get(1)).wait(13).to({_off:true},1).wait(6).to({_off:false},0).to({x:106.5,y:-39,alpha:1},9).wait(10).to({x:219.7,y:-87.4,alpha:0},9,cjs.Ease.get(1)).wait(14));

	// banka_c.png - копия
	this.instance_6 = new lib.Символ48();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-202,22.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).to({x:-100.1,y:16,alpha:1},9).wait(89).to({x:-202,y:22.4,alpha:0},9,cjs.Ease.get(1)).wait(10).to({_off:true},1).wait(3).to({_off:false},0).to({x:-100.1,y:16,alpha:1},9).wait(16).to({x:-202,y:22.4,alpha:0},9,cjs.Ease.get(1)).wait(11));

	// banka_c.png
	this.instance_7 = new lib.Символ47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-194.6,-102.5,0.651,0.651,24.7,0,0,-0.1,-0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).to({x:-141,y:-28.5,alpha:1},9).wait(95).to({x:-194.6,y:-102.5,alpha:0},9,cjs.Ease.get(1)).wait(8).to({x:-141,y:-28.5,alpha:1},9).wait(22).to({x:-194.6,y:-102.5,alpha:0},9,cjs.Ease.get(1)).wait(8));

	// Символ 13
	this.instance_8 = new lib.Символ13();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({alpha:0},7,cjs.Ease.get(1)).wait(113).to({alpha:1},7,cjs.Ease.get(1)).wait(1).to({alpha:0},0).wait(40).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_9 = new lib.Символ37();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.8,0.8,1.051,1.051);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({alpha:1},7,cjs.Ease.get(1)).wait(113).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({alpha:1},0).wait(40).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_10 = new lib.Символ36();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,1.033,1.033);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({alpha:1},7,cjs.Ease.get(1)).wait(113).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({alpha:1},0).wait(40).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_11 = new lib.Символ11();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-129.1,310,258.3);


// stage content:
(lib.ban300250_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(188);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(209);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.main = new lib.Символ35();
	this.main.parent = this;
	this.main.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,120.9,310,258.3);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/baba.png?1505983124087", id:"baba"},
		{src:"images/banka_c.png?1505983124087", id:"banka_c"},
		{src:"images/banka_v.png?1505983124087", id:"banka_v"},
		{src:"images/bg1.jpg?1505983124087", id:"bg1"},
		{src:"images/bg2.jpg?1505983124087", id:"bg2"},
		{src:"images/bluecircle.png?1505983124087", id:"bluecircle"},
		{src:"images/btn.png?1505983124087", id:"btn"},
		{src:"images/gantelya1.png?1505983124087", id:"gantelya1"},
		{src:"images/gantelya2.png?1505983124087", id:"gantelya2"},
		{src:"images/greencircle.png?1505983124087", id:"greencircle"},
		{src:"images/logo.png?1505983124087", id:"logo"},
		{src:"images/lokot1.png?1505983124087", id:"lokot1"},
		{src:"images/lokot2.png?1505983124087", id:"lokot2"},
		{src:"images/plecho1.png?1505983124087", id:"plecho1"},
		{src:"images/plecho2.png?1505983124087", id:"plecho2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;