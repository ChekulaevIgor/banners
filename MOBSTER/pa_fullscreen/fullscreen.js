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



(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,74);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,74);


(lib.btn3 = function() {
	this.initialize(img.btn3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,74);


(lib.card1 = function() {
	this.initialize(img.card1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,68);


(lib.card2 = function() {
	this.initialize(img.card2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,54);


(lib.kid = function() {
	this.initialize(img.kid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,241);


(lib.ktoti = function() {
	this.initialize(img.ktoti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,39);


(lib.ktoti1 = function() {
	this.initialize(img.ktoti1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,84);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,59);


(lib.profi = function() {
	this.initialize(img.profi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,284);


(lib.rukakid = function() {
	this.initialize(img.rukakid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,75);


(lib.rukaprofi = function() {
	this.initialize(img.rukaprofi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.stanprofi = function() {
	this.initialize(img.stanprofi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,104);


(lib.stuff = function() {
	this.initialize(img.stuff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,430);// helper functions:

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


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ktoti();
	this.instance.parent = this;
	this.instance.setTransform(-266.2,-38.1,1.957,1.957);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-266.2,-38.1,532.4,76.4), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ktoti1();
	this.instance.parent = this;
	this.instance.setTransform(-167.6,-107.5,2.56,2.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-167.6,-107.5,335.3,215), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A7xQ/QrgnCAAp9QAAp8LgnCQLhnDQQABQQRgBLhHDQLgHCAAJ8QAAJ9rgHCQrhHCwRAAQwQAArhnCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-251.4,-153.7,502.8,307.5), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stuff();
	this.instance.parent = this;
	this.instance.setTransform(-213.5,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-213.5,-215,427,430), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stanprofi();
	this.instance.parent = this;
	this.instance.setTransform(-254,-178,1.697,1.697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-254,-178,507.3,176.5), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.card1();
	this.instance.parent = this;
	this.instance.setTransform(-42.2,-47.9,1.408,1.408);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-42.2,-47.9,84.5,95.8), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.card2();
	this.instance.parent = this;
	this.instance.setTransform(-52.3,-47.9,1.773,1.773);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-52.3,-47.9,104.6,95.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rukaprofi();
	this.instance.parent = this;
	this.instance.setTransform(-75.7,-54.3,1.94,1.94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-75.7,-54.3,151.4,108.7), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.profi();
	this.instance.parent = this;
	this.instance.setTransform(-310.8,-301.2,2.121,2.121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-310.8,-301.2,621.6,602.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn2();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-155.5,-37,311,74), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn3();
	this.instance.parent = this;
	this.instance.setTransform(-272,-65,1.76,1.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-272,-65,547.4,130.3), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-155.5,-37,311,74), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-92,-36,1.244,1.244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-92,-36,182.9,73.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rukakid();
	this.instance.parent = this;
	this.instance.setTransform(-28,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-28,-37.5,56,75), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kid();
	this.instance.parent = this;
	this.instance.setTransform(-135.5,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-135.5,-120.5,271,241), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({y:30.8},0).to({y:0,alpha:1},10,cjs.Ease.get(1)).wait(50).to({scaleX:0.8,scaleY:0.8,y:32.8,alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.5,-65,547.4,130.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(215, 215, 1)];
	this.instance.cache(-253,-156,507,312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-359.4,-261.7,722,526), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-226.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({regX:-0.1,regY:-0.1,scaleX:0.34,scaleY:0.34,rotation:-15,x:-0.4,y:-226.8},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.3,y:-226.7,alpha:1},10,cjs.Ease.get(1)).wait(50).to({regX:-0.1,regY:-0.1,scaleX:0.34,scaleY:0.34,rotation:-15,x:-0.4,y:-226.8,alpha:0},10).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6.8,-332,0.357,0.276,0,0,0,-0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({regX:0,scaleX:1.3,scaleY:1,x:-6.6,alpha:0.738},10).wait(50).to({regX:-0.1,scaleX:0.36,scaleY:0.28,x:-6.8,alpha:0},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-24.4,-312,0.127,0.127,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,rotation:41.3,x:15.5,y:-332,alpha:1},10).to({regX:-0.1,regY:0.1,scaleX:2.18,scaleY:2.18,rotation:25.8,x:-24.8,y:-312},50).to({regX:0,regY:0,scaleX:2.51,scaleY:2.51,rotation:22.8,x:-24.7,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.3,-404.7,507.3,176.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3,x:-0.1},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2,y:-0.1},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:170.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5,x:0},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:280},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4,y:0},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-47.9,84.5,95.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:90.9,y:-0.1},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:170.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.7,y:0},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:280},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-47.9,104.6,95.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-140.4,127.4,1,1,0,0,0,-34.1,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:127.5},3,cjs.Ease.get(1)).to({rotation:0,y:127.4},7,cjs.Ease.get(1)).to({rotation:-15},50,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

	// card2.png
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55.6,59.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:89.2},3).to({scaleX:1.07,scaleY:1.07,x:-59.8,y:51.9,alpha:1},7).to({scaleX:1.55,scaleY:1.55,x:-90,y:-214.6},50).to({scaleX:1.64,scaleY:1.64,x:-96.1,y:-268,alpha:0},10).wait(1));

	// card1.png
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-77.6,47.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:77.9},3).to({scaleX:1.07,scaleY:1.07,x:-103,y:46.5,alpha:1},7).to({scaleX:1.55,scaleY:1.55,x:-284.2,y:-177.6},50).to({scaleX:1.64,scaleY:1.64,x:-320.5,y:-222.5,alpha:0},10).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310.8,-301.2,621.6,602.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:0.81,scaleY:0.81,y:32,alpha:0},10,cjs.Ease.get(1)).wait(110).to({scaleX:1,scaleY:1},0).to({y:0,alpha:1},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,32.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({y:0,alpha:1},10,cjs.Ease.get(1)).wait(50).to({scaleX:0.77,scaleY:0.77,y:32.1,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-37,311,74);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.837,1.837);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-169,-66.1,336,134.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.txt_hor = new lib.Символ32();
	this.txt_hor.parent = this;
	this.txt_hor.setTransform(2.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.txt_hor).wait(1));

	// Слой 1
	this.txt_vert = new lib.Символ33();
	this.txt_vert.parent = this;
	this.txt_vert.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt_vert).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-266,-107,532.4,215), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(21,25.6,1,1,0,0,0,21,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.3,y:25.7},24,cjs.Ease.get(-1)).to({rotation:-15,x:21.1},25,cjs.Ease.get(1)).to({rotation:-7.3},25,cjs.Ease.get(-1)).to({rotation:0,x:21,y:25.6},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-37.5,56,75);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(243.2,-103.3,2.222,2.222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.3,-143.2,2.222,2.222);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-305.4,-411,610.8,535.5), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.756,1.756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-273.1,-65,546.2,130), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-56.1);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,alpha:0.059},4,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11,alpha:0.129},5,cjs.Ease.get(1)).to({regX:0.1,scaleX:1.05,scaleY:1.05,alpha:0.066},5,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11},5,cjs.Ease.get(1)).to({regX:0.1,scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.8,-121.1,546.2,130);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt3 = new lib.Символ6();
	this.txt3.parent = this;
	this.txt3.setTransform(-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt3).to({scaleX:0.87,scaleY:0.87},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:0.87,scaleY:0.87},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.2,-107.1,532.4,215);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(2.8,-46.6,0.701,0.701);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({scaleX:1,scaleY:1,y:-144.7,alpha:1},10,cjs.Ease.get(1)).wait(50).to({scaleX:0.7,scaleY:0.7,y:-46.6,alpha:0},10).to({_off:true},1).wait(60));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({scaleX:0.75,scaleY:0.75,y:58.1,alpha:0},10,cjs.Ease.get(1)).wait(110).to({scaleX:1,scaleY:1,y:0,alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.4,-411,610.8,535.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt2 = new lib.Символ7();
	this.txt2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(109).to({scaleX:0.65,scaleY:0.65,rotation:-15,alpha:0},10,cjs.Ease.get(1)).wait(50).to({scaleX:1,scaleY:1,rotation:0,alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.2,-107.1,532.4,215);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt1 = new lib.Символ24();
	this.txt1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-266.2,-107.1,532.4,215), null);


// stage content:
(lib.fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var /* Размер баннера */
				iw = window.innerWidth * 0.94,
				ih = window.innerHeight * 0.7,
			
				/* Размер окна браузера */
				w = window.innerWidth,
				h = window.innerHeight,
			
				/* Размер по умолчанию */
				defaultScale = 1,
			
				/* Минимальные размеры для ресайза */
				minWidth = ((w < 481 && h < 321 || w < 321 && h < 481) ? 400 : ((w < h && w > 599) ? 800 : ((w < 321) ? 500 : 600))),
				minHeight = 600,
			
				/* Коэфициенты уменьшения */
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
		    
			_this.main.x = w > h ? iw * 0.7 : iw * 0.5;
		    _this.main.y = w > h ? ih * 0.83 : ih;
		    
			_this.txt.x = w > h ? iw * 0.25 : iw * 0.5;
		    _this.txt.y = w > h ? ih * 0.6 : ih * 0.3;
			
			_this.txt.txt1.txt2.txt3.txt_hor.visible = w < h ? false : true;
			_this.txt.txt1.txt2.txt3.txt_vert.visible = w < h ? true : false;
			
			_this.maintxt.x = w > h ? iw * 0.5 : iw * 0.5;
		    _this.maintxt.y = w > h ? ih * 0.45 : ih * 0.5;
			
			_this.logo.x = w > h ? iw * 0.5 : iw * 0.5;
		    _this.logo.y = w > h ? ih * 0.13 : ih * 0.13;
			
			_this.btn.x = w > h ? iw * 0.7 : iw * 0.5;
		    _this.btn.y = w > h ? ih * 0.83 : ih * 0.9;
			
			_this.mainbtn.x = w > h ? iw * 0.5 : iw * 0.5;
		    _this.mainbtn.y = w > h ? ih * 0.83 : ih * 0.9;
			
			/* Функция ресайза */
		    function setScale(scale) {
				
				_this.main.scaleX = _this.main.scaleY = w > h ? scale * 0.8 : scale;
				_this.logo.scaleX = _this.logo.scaleY = scale;
				_this.txt.scaleX = _this.txt.scaleY = scale;
				_this.btn.scaleX = _this.btn.scaleY = scale;
				_this.mainbtn.scaleX = _this.mainbtn.scaleY = scale;
				_this.maintxt.scaleX = _this.maintxt.scaleY = scale;
		    }
			
			/* Размер элементов по умолчанию */
		    setScale(defaultScale);
		
		    /* Ресайз */
		
		    if(iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(iw < minWidth && ih < minHeight) {
		        setScale(scaleWH);
		    }
		
		    /* Ориентация устройства */
		
		    if(w > h) {
		        /*......*/
		    }
					
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		
		//Actions
		
		
		
		//Переход
		
		var target = document.getElementById("content_box");
		target.addEventListener("click", function(){window.top.postMessage('_MRMN.click.' + getAdHash(), '*');console.log("click");});
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo = new lib.Символ10();
	this.logo.parent = this;
	this.logo.setTransform(513.5,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// txt
	this.txt = new lib.Символ8();
	this.txt.parent = this;
	this.txt.setTransform(511.2,68.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// mainbtn
	this.mainbtn = new lib.Символ30();
	this.mainbtn.parent = this;
	this.mainbtn.setTransform(510.2,868.3);

	this.timeline.addTween(cjs.Tween.get(this.mainbtn).wait(1));

	// button
	this.btn = new lib.Символ13();
	this.btn.parent = this;
	this.btn.setTransform(508.1,866.2,1,1,0,0,0,-1,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// maintxt
	this.maintxt = new lib.Символ25();
	this.maintxt.parent = this;
	this.maintxt.setTransform(109.1,40.8,1,1,0,0,0,-0.7,-315.8);

	this.timeline.addTween(cjs.Tween.get(this.maintxt).wait(1));

	// main
	this.main = new lib.Символ2();
	this.main.parent = this;
	this.main.setTransform(510,768,1,1,0,0,0,-0.5,119.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.5,253.4,960.5,1064.2);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/btn2.png", id:"btn2"},
		{src:"images/btn3.png", id:"btn3"},
		{src:"images/card1.png", id:"card1"},
		{src:"images/card2.png", id:"card2"},
		{src:"images/kid.png", id:"kid"},
		{src:"images/ktoti.png", id:"ktoti"},
		{src:"images/ktoti1.png", id:"ktoti1"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/profi.png", id:"profi"},
		{src:"images/rukakid.png", id:"rukakid"},
		{src:"images/rukaprofi.png", id:"rukaprofi"},
		{src:"images/stanprofi.png", id:"stanprofi"},
		{src:"images/stuff.png", id:"stuff"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;