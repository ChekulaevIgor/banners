(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.banka = function() {
	this.initialize(img.banka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,192);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,47);


(lib.DiaVita = function() {
	this.initialize(img.DiaVita);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,37);


(lib.fat_wom = function() {
	this.initialize(img.fat_wom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,230);


(lib.fly_banka = function() {
	this.initialize(img.fly_banka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,262);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,87);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,54);


(lib.shake_banka = function() {
	this.initialize(img.shake_banka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,218);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,226);// helper functions:

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


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("shake-shake!", "21px 'Museo Cyrl 300'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 295;
	this.text.parent = this;
	this.text.setTransform(0,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-149.4,-14.6,299,29.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Enjoy health!", "27px 'Museo Cyrl 300'", "#87BB45");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(0,-16.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-118.9,-18.2,237.9,36.4), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("so\nbeautiful", "21px 'Museo Cyrl 300'", "#545454");
	this.text.lineHeight = 19;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(-54.8,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-56.8,-43.2,113.6,86.5), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("help\nto make\nyou", "21px 'Museo Cyrl 300'", "#545454");
	this.text.textAlign = "right";
	this.text.lineHeight = 19;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(54.8,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-56.8,-43.2,113.6,86.5), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("m-m!", "26px 'Museo Cyrl 300'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(-7.7,-13.6,1,1,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-73.1,-51.7,146.3,103.5), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("fruity!", "26px 'Museo Cyrl 300'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(5.7,-14.5,1,1,21.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-75.3,-43.5,150.6,87.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka();
	this.instance.parent = this;
	this.instance.setTransform(-72.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-72.5,-96,145,192), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("fat?", "26px 'Museo Cyrl 300'", "#545454");
	this.text.lineHeight = 33;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(-52.5,-15.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-54.5,-17.6,109,35.2), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("a little", "26px 'Museo Cyrl 300'", "#545454");
	this.text.textAlign = "right";
	this.text.lineHeight = 33;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(52.5,-15.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-54.5,-17.6,109,35.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-90.5,-23.5,181,47), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.DiaVita();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-83.5,-18.5,167,37), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fat_wom();
	this.instance.parent = this;
	this.instance.setTransform(-60,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-60,-115,120,230), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fly_banka();
	this.instance.parent = this;
	this.instance.setTransform(-81,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-81,-131,162,262), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo1();
	this.instance.parent = this;
	this.instance.setTransform(-58,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-58,-43.5,116,87), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(-27,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-27,-27,54,54), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shake_banka();
	this.instance.parent = this;
	this.instance.setTransform(-150,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-150,-109,300,218), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.woman();
	this.instance.parent = this;
	this.instance.setTransform(-48,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-48,-113,96,226), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("View products", "16px 'Museo Cyrl 300'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(19.5,-10.4);

	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-90.5,-23.5,181.1,47), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-150,-109,300,218), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-83.5,-18.5,167,37), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-60,-115,120,230), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-81,-131,162,262), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-58,-43.5,116,87), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-27,-27,54,54), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-150,-109,300,218), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-48,-113,96,226), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},11,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9},13,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-23.5,181.1,47);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-23.5,181.1,47);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-99.9,-25.9,200.1,52), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_379 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_429 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(379).call(this.frame_379).wait(50).call(this.frame_429).wait(16));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(63.8,27.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).to({x:43.8,alpha:1},5,cjs.Ease.get(1)).wait(51).to({x:23.8},2).to({x:113.8,alpha:0},6).wait(1).to({x:63.8},0).to({x:43.8,alpha:1},5,cjs.Ease.get(1)).wait(51).to({x:23.8},2).to({x:113.8,alpha:0},6).wait(1));

	// logo2.png
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.1,-75.8,0.305,0.305,-45,0,0,0.2,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).to({regX:0,scaleX:1.2,scaleY:1.2,rotation:15,x:45,y:-75.9,alpha:1},6).to({scaleX:1,scaleY:1,rotation:0},3).wait(53).to({x:25},2).to({x:115,alpha:0},6).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:15,x:45,alpha:1},0).to({scaleX:1,scaleY:1,rotation:0},3).wait(53).to({x:25},2).to({x:115,alpha:0},6).wait(1));

	// DiaVita.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45,-11.5,0.335,0.335);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(309).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(53).to({x:25},2).to({x:115,alpha:0},6).wait(1).to({scaleX:0.34,scaleY:0.34,x:45},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.get(1)).wait(53).to({x:25},2).to({x:115,alpha:0},6).wait(1));

	// btn.png
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45,148.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({_off:false},0).to({y:75.6,alpha:1},6).to({y:80.6},3).wait(53).to({x:25},2).to({x:115,alpha:0},6).wait(1).to({x:45,y:75.6,alpha:1},0).to({y:80.6},3).wait(53).to({x:25},2).to({x:115,alpha:0},6).wait(1));

	// Слой 17
	this.instance_4 = new lib.Символ37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,116.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171).to({_off:false},0).to({y:106.2,alpha:1},4,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({alpha:0},5,cjs.Ease.get(0.96)).wait(221));

	// shake_banka.png
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-16);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).to({alpha:1},4).wait(2).to({scaleX:0.74},0).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).wait(1).to({scaleX:1},0).to({scaleX:0.74},2).to({y:24,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(220));

	// fly_banka.png
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-170.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).to({y:0,alpha:1},4,cjs.Ease.get(0.99)).to({scaleY:0.85,y:20.3,alpha:0},2).wait(117).to({y:-226.7,alpha:1},5,cjs.Ease.get(1)).wait(203));

	// banka.png
	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.5,22);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({_off:false},0).to({regY:0.1,scaleY:0.82,y:39.7,alpha:0.5},2).to({regY:0,scaleY:0.91,y:30.1,alpha:1},2).wait(43).to({y:-3.4},5,cjs.Ease.get(1)).to({rotation:-15},2).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).wait(1).to({rotation:-15},0).to({rotation:9.7},2).to({rotation:0,y:30.1},5,cjs.Ease.get(1)).wait(10).to({regY:0.1,scaleY:0.78,y:43.2},2).to({scaleY:0.94,y:-2.8,alpha:0},3).wait(206));

	// Слой 14 - копия
	this.instance_8 = new lib.Символ27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(26.6,15.2,0.444,0.444,0,0,0,0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).wait(1).to({regX:0,scaleX:0.49,scaleY:0.49,x:34.7,y:11.2},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:42.2,y:7.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:49,y:4.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:55.2,y:1.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:60.7,y:-1.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:65.7,y:-4.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:70.1,y:-6.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:74.1,y:-8.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:77.6,y:-10},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:80.9,y:-11.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:83.8,y:-13},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:86.6,y:-14.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:89.1,y:-15.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:91.6,y:-16.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:93.9,y:-18},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:95.9,y:-19},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:97.7,y:-19.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:99.3,y:-20.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:100.7,y:-21.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:102,y:-22},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:103.1,y:-22.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:104.1,y:-23.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:105.1,y:-23.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:105.9,y:-23.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:106.7,y:-24.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:107.4,y:-24.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:108.1,y:-25},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:108.7,y:-25.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:109.3,y:-25.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:109.8,y:-25.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:110.4,y:-26.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:110.9,y:-26.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:111.4,y:-26.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:111.9,y:-26.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:112.5,y:-27.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:113,y:-27.4},0).wait(1).to({regX:0.1,scaleX:0.97,scaleY:0.97,x:113.7,y:-27.7},0).to({regY:-0.1,scaleX:1.23,scaleY:1.23,x:144,y:-29.4,alpha:0},6,cjs.Ease.get(1)).wait(280));

	// Слой 14
	this.instance_9 = new lib.Символ28();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-20.1,18.5,0.444,0.444,0,0,0,-0.1,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122).to({_off:false},0).wait(1).to({regX:0,scaleX:0.49,scaleY:0.49,x:-28.7,y:14.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-36.8,y:11.3},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-44.1,y:8.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-50.7,y:5.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-56.6,y:2.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-61.9,y:0.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-66.6,y:-1.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-70.9,y:-3.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-74.7,y:-5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-78.1,y:-6.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-81.3,y:-7.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-84.2,y:-9.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-87,y:-10.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-89.6,y:-11.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-92,y:-12.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-94.2,y:-13.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-96.1,y:-14.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-97.8,y:-14.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-99.3,y:-15.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-100.7,y:-16.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-101.9,y:-16.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-103,y:-17.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-104,y:-17.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-104.9,y:-18},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-105.8,y:-18.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-106.5,y:-18.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-107.2,y:-19},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-107.9,y:-19.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-108.5,y:-19.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-109.1,y:-19.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-109.7,y:-20},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-110.3,y:-20.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-110.8,y:-20.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-111.4,y:-20.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-111.9,y:-21},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-112.5,y:-21.2},0).wait(1).to({regX:-0.1,scaleX:0.97,scaleY:0.97,x:-113.1,y:-21.5},0).to({scaleX:1.23,scaleY:1.23,x:-144,alpha:0},6,cjs.Ease.get(1)).wait(280));

	// logo1.png
	this.instance_10 = new lib.Символ10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0.5,0.296,0.296,-45);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.16,scaleY:1.16,rotation:10.7,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},3).wait(36).to({scaleX:1.16,scaleY:1.16,rotation:10.7},3).to({scaleX:0.3,scaleY:0.3,rotation:-45,alpha:0},6).wait(391));

	// fat_wom.png
	this.instance_11 = new lib.Символ14();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,0);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({x:-20,alpha:1},5).to({x:0},2).wait(55).to({scaleY:0.72,y:32.8,alpha:0},4).wait(325));

	// woman.png
	this.instance_12 = new lib.Символ4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,40.6,1,0.642);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(237).to({_off:false},0).to({scaleY:1,y:0,alpha:1},5,cjs.Ease.get(1)).wait(66).to({x:-110},7,cjs.Ease.get(1)).wait(49).to({x:-100},2).to({x:-200,alpha:0},6).wait(8).to({x:-110,alpha:1},0).wait(49).to({x:-100},2).to({x:-200,alpha:0},6).wait(8));

	// Слой 16
	this.instance_13 = new lib.Символ30();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-47.4,37.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(252).to({_off:false},0).to({x:-92.4,alpha:1},9,cjs.Ease.get(1)).wait(41).to({x:-47.4,alpha:0},6,cjs.Ease.get(1)).wait(137));

	// Слой 15
	this.instance_14 = new lib.Символ31();
	this.instance_14.parent = this;
	this.instance_14.setTransform(38.6,37.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(261).to({_off:false},0).to({x:93.6,alpha:1},9,cjs.Ease.get(1)).wait(27).to({x:38.6,alpha:0},6,cjs.Ease.get(1)).wait(142));

	// Слой 13 - копия
	this.instance_15 = new lib.Символ24();
	this.instance_15.parent = this;
	this.instance_15.setTransform(55,17.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).to({x:100,alpha:1},9,cjs.Ease.get(0.84)).wait(31).to({y:7.2},3).to({y:57.2,alpha:0},6).wait(331));

	// Слой 13
	this.instance_16 = new lib.Символ23();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-55,17.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(61).to({_off:false},0).to({x:-95,alpha:1},9,cjs.Ease.get(0.84)).wait(32).to({y:7.2},3).to({y:57.2,alpha:0},6).wait(334));

	// bg1.jpg
	this.instance_17 = new lib.Символ22();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54).to({y:-259.5},7,cjs.Ease.get(1)).wait(52).to({y:0,alpha:0},0).to({alpha:1},7).wait(99).to({alpha:0},5,cjs.Ease.get(1)).wait(84).to({rotation:69.1,x:-303.2,y:125.1},0).to({x:-203.2,y:45.1,alpha:1},7,cjs.Ease.get(1)).wait(56).to({rotation:0,x:0,y:0},8,cjs.Ease.get(0.89)).wait(1).to({rotation:69.1,x:-203.2,y:45.1},0).wait(56).to({rotation:0,x:0,y:0},8,cjs.Ease.get(0.89)).wait(1));

	// bg2.jpg
	this.instance_18 = new lib.Символ20();
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(54).to({_off:false},0).wait(391));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


// stage content:
(lib.ban300250_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(381);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(431);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.main = new lib.Символ2();
	this.main.parent = this;
	this.main.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banka.png?1505822520469", id:"banka"},
		{src:"images/bg1.jpg?1505822520469", id:"bg1"},
		{src:"images/bg2.jpg?1505822520469", id:"bg2"},
		{src:"images/btn.png?1505822520469", id:"btn"},
		{src:"images/DiaVita.png?1505822520469", id:"DiaVita"},
		{src:"images/fat_wom.png?1505822520469", id:"fat_wom"},
		{src:"images/fly_banka.png?1505822520469", id:"fly_banka"},
		{src:"images/logo1.png?1505822520469", id:"logo1"},
		{src:"images/logo2.png?1505822520469", id:"logo2"},
		{src:"images/shake_banka.png?1505822520469", id:"shake_banka"},
		{src:"images/woman.png?1505822520469", id:"woman"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;