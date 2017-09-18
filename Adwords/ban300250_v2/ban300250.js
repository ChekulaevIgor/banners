(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,251);


(lib.baba2 = function() {
	this.initialize(img.baba2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,222);


(lib.banka = function() {
	this.initialize(img.banka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,125);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,42);


(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,356);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,76);// helper functions:

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


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba2();
	this.instance.parent = this;
	this.instance.setTransform(-168.5,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-168.5,-111,337,222), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba();
	this.instance.parent = this;
	this.instance.setTransform(-152,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-152,-125.5,304,251), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(btntxt, "bold 19px 'Intro Black Alt'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 241;
	this.text.parent = this;
	this.text.setTransform(0.3,-8.5);

	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-123,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-123,y:-21}},{t:this.text,p:{scaleX:1,scaleY:1,x:0.3,y:-8.5,textAlign:"center",lineWidth:241}}]}).to({state:[{t:this.instance,p:{scaleX:1.11,scaleY:1.11,x:-137,y:-23}},{t:this.text,p:{scaleX:1.11,scaleY:1.11,x:-82.6,y:-9.4,textAlign:"",lineWidth:148}}]},1).to({state:[{t:this.instance,p:{scaleX:0.833,scaleY:0.833,x:-103,y:-17}},{t:this.text,p:{scaleX:0.833,scaleY:0.833,x:-62.2,y:-6.9,textAlign:"",lineWidth:148}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-21,246,42);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(txt3, "bold 28px 'Intro Black Alt'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 374;
	this.text.parent = this;
	this.text.setTransform(-3,-14);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-191.8,-16,377.8,32), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(txt2, "bold 23px 'Intro Black Alt'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(-143.2,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-145.2,-13.5,217.2,52), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(txt2, "bold 23px 'Intro Black Alt'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 177;
	this.text.parent = this;
	this.text.setTransform(-29,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-31,-15.5,181,52), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle();
	this.instance.parent = this;
	this.instance.setTransform(-178,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-178,-178,356,356), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-51.5,-38,103,76), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-47.5,-62.5,95,125), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.7},16,cjs.Ease.get(-1)).to({y:10},18,cjs.Ease.get(1)).to({y:4.9},18,cjs.Ease.get(-1)).to({y:0},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-111,337,222);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5.5},14,cjs.Ease.get(-1)).to({y:-11.5},15,cjs.Ease.get(1)).to({y:-5.7},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-125.5,304,251);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-137,-23,273,46.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(104.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-64,-94,337,222), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-86,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-238,-108,304,251), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},24,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},25,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-178,356,356);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_234 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_281 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(234).call(this.frame_234).wait(47).call(this.frame_281).wait(10));

	// Слой 12
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(81.3,26.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({x:4.8,alpha:1},4).to({x:31.3},3).wait(110).to({x:4.8},3).to({x:81.3,alpha:0},5).wait(1).to({x:4.8,alpha:1},4).to({x:31.3},3).wait(40).to({x:4.8},3).to({x:81.3,alpha:0},5).wait(1));

	// Слой 11
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,23.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({x:6,alpha:1},5).to({x:31},4).wait(38).to({x:6},4).to({x:71,alpha:0},5).to({_off:true},1).wait(182));

	// Слой 10
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.8,25.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:12.8,alpha:1},5).to({x:27.8},3).wait(38).to({x:12.8},3).to({x:52.8,alpha:0},5).to({_off:true},1).wait(236));

	// Слой 1
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,220);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(108).to({_off:false},0).wait(1).to({y:280},0).to({y:210,alpha:1},5,cjs.Ease.get(1)).to({y:220},2).wait(111).to({y:210},2).to({y:280,alpha:0},5).wait(1).to({y:210,alpha:1},5,cjs.Ease.get(1)).to({y:220},2).wait(41).to({y:210},2).to({y:280,alpha:0},5).wait(1));

	// Символ 10
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(102,120);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(108).to({_off:false},0).wait(1).to({x:172},0).to({x:92,alpha:1},5,cjs.Ease.get(1)).to({x:102},2).wait(111).to({x:92},2).to({x:172,alpha:0},5).wait(1).to({x:92,alpha:1},5,cjs.Ease.get(1)).to({x:102},2).wait(41).to({x:92},2).to({x:172,alpha:0},5).wait(1));

	// Символ 9
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-48.5,122.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108).to({_off:false},0).wait(1).to({x:-118.5},0).to({x:-38.5,alpha:1},5,cjs.Ease.get(1)).to({x:-48.5},2).wait(111).to({x:-38.5},2).to({x:-118.5,alpha:0},5).wait(1).to({x:-38.5,alpha:1},5,cjs.Ease.get(1)).to({x:-48.5},2).wait(41).to({x:-38.5},2).to({x:-118.5,alpha:0},5).wait(1));

	// Символ 8
	this.instance_6 = new lib.Символ8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(28,122);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).wait(1).to({x:128},0).to({x:28,alpha:1},6).wait(42).to({x:128,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(181));

	// Символ 7
	this.instance_7 = new lib.Символ7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(28,122.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:202.5},0).to({y:122.5,alpha:1},5,cjs.Ease.get(1)).wait(43).to({y:202.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(236));

	// Символ 3
	this.instance_8 = new lib.Символ3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({x:-55,y:-67},15,cjs.Ease.get(1)).wait(41).to({scaleX:0.77,scaleY:0.77,x:80.2},14,cjs.Ease.get(1)).wait(111).to({scaleX:1,scaleY:1,x:120,y:-49},7,cjs.Ease.get(1)).wait(1).to({scaleX:0.77,scaleY:0.77,x:80.2,y:-67},7,cjs.Ease.get(1)).wait(41).to({scaleX:1,scaleY:1,x:120,y:-49},7,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_9 = new lib.Символ2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(291));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-227,508,492.5);


// stage content:
(lib.ban300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(235);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(282);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 10
	this.main = new lib.Символ11();
	this.main.parent = this;
	this.main.setTransform(122,3);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,-99,508,492.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/baba.png?1505749768130", id:"baba"},
		{src:"images/baba2.png?1505749768130", id:"baba2"},
		{src:"images/banka.png?1505749768130", id:"banka"},
		{src:"images/bg.jpg?1505749768130", id:"bg"},
		{src:"images/btn.png?1505749768130", id:"btn"},
		{src:"images/circle.png?1505749768130", id:"circle"},
		{src:"images/logo.png?1505749768130", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;