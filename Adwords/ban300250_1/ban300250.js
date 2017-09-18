(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



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


(lib.choco = function() {
	this.initialize(img.choco);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,163);


(lib.chocoten = function() {
	this.initialize(img.chocoten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,188);


(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,356);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,76);


(lib.muffin = function() {
	this.initialize(img.muffin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,168);


(lib.muffinten = function() {
	this.initialize(img.muffinten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);// helper functions:

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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ПОПРОБОВАТЬ", "19px 'Intro-Black-Alt'", "#FFFFFF");
	this.text.lineHeight = 21;
	this.text.lineWidth = 148;
	this.text.parent = this;
	this.text.setTransform(-74.5,-8.5);

	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-123,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-123,y:-21}},{t:this.text,p:{scaleX:1,scaleY:1,x:-74.5,y:-8.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.11,scaleY:1.11,x:-137,y:-23}},{t:this.text,p:{scaleX:1.11,scaleY:1.11,x:-82.6,y:-9.4}}]},1).to({state:[{t:this.instance,p:{scaleX:0.833,scaleY:0.833,x:-103,y:-17}},{t:this.text,p:{scaleX:0.833,scaleY:0.833,x:-62.2,y:-6.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-21,246,42);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ХУДЕЙ ВКУСНО!", "28px 'Intro-Black-Alt'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(-116.2,-14);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-118.2,-16,236.6,32), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ЛЮБИШЬ КЕКСЫ?", "23px 'Intro-Black-Alt'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 219;
	this.text.parent = this;
	this.text.setTransform(-109.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-111.5,-13.5,223.1,27), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ЛЮБИШЬ ШОКОЛАД?", "23px 'Intro-Black-Alt'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 257;
	this.text.parent = this;
	this.text.setTransform(-127,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-129,-16.5,260.6,27), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle();
	this.instance.parent = this;
	this.instance.setTransform(-178,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-178,-178,356,356), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muffinten();
	this.instance.parent = this;
	this.instance.setTransform(-98,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-98,-48,196,196), null);


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


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muffin();
	this.instance.parent = this;
	this.instance.setTransform(-98,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-98,-72,196,168), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.choco();
	this.instance.parent = this;
	this.instance.setTransform(-118,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-118,-81.5,236,163), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chocoten();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-125.5,-94,251,188), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-137,-23,273,46.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-118,-66.5,236,163), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-125.5,-79,251,188), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).wait(1).to({y:72},0).to({scaleY:0.89,y:132.6,alpha:1},5,cjs.Ease.get(1)).to({scaleY:1,y:122},2).wait(41).to({x:58},2).to({x:-62,alpha:0.199},4).to({x:-92,alpha:0},1).to({_off:true},1).wait(181));

	// Слой 9
	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(28,190.2,0.857,0.271,0,0,0,0,0.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({_off:false},0).wait(1).to({scaleX:1.58,scaleY:0.5,y:280.2},0).to({scaleX:0.86,scaleY:0.24,y:193.2,alpha:1},5,cjs.Ease.get(1)).to({scaleY:0.27,y:190.2},2).wait(41).to({x:58},2).to({x:-92,alpha:0},5).to({_off:true},1).wait(181));

	// Символ 7
	this.instance_8 = new lib.Символ7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(28,122.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:1.16,scaleY:1.16,y:72.5},0).to({scaleX:1,scaleY:0.9,y:133,alpha:1},5,cjs.Ease.get(1)).to({scaleY:1,y:122.5},2).wait(38).to({x:48},3).to({x:-72,alpha:0},5).to({_off:true},1).wait(236));

	// Символ 5
	this.instance_9 = new lib.Символ5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28.5,132);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:0.1,scaleX:2.03,scaleY:2.03,y:232.2},0).to({regY:0,scaleX:1,scaleY:0.9,y:141.5,alpha:1},5,cjs.Ease.get(1)).to({scaleY:1,y:132},2).wait(38).to({x:48.5},3).to({x:-71.5,alpha:0},5).to({_off:true},1).wait(236));

	// Символ 3
	this.instance_10 = new lib.Символ3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46).to({regX:0.1,regY:-0.3,scaleX:0.94,scaleY:0.94,x:83.6,y:-13.2},15,cjs.Ease.get(1)).wait(41).to({regX:0.2,regY:-0.4,scaleX:0.7,scaleY:0.7,x:103.7,y:-13.3},14,cjs.Ease.get(1)).wait(111).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-69},7,cjs.Ease.get(1)).wait(1).to({regX:0.2,regY:-0.4,scaleX:0.7,scaleY:0.7,x:103.7,y:-13.3},7).wait(41).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-69},7).wait(1));

	// Символ 2
	this.instance_11 = new lib.Символ2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(28,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(291));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-247,362.3,494);


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
p.nominalBounds = new cjs.Rectangle(94,-119,362.3,494);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/banka.png", id:"banka"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/choco.png", id:"choco"},
		{src:"images/chocoten.png", id:"chocoten"},
		{src:"images/circle.png", id:"circle"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/muffin.png", id:"muffin"},
		{src:"images/muffinten.png", id:"muffinten"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;