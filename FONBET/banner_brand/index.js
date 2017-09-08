
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
(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,102);
(lib.footb_05 = function() {
	this.initialize(img.footb_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,327);
(lib.footb_07 = function() {
	this.initialize(img.footb_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,327);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,89);
(lib.service = function() {
	this.initialize(img.service);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,105);
(lib.service1 = function() {
	this.initialize(img.service1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,105);
(lib.service2 = function() {
	this.initialize(img.service2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,107);
(lib.service3 = function() {
	this.initialize(img.service3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);
(lib.stad = function() {
	this.initialize(img.stad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,200);// helper functions:
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
(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.footb_07();
	this.instance.parent = this;
	this.instance.setTransform(-94,-163.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-94,-163.5,188,327), null);
(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.footb_05();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,-163.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-76.5,-163.5,153,327), null);
(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.stad();
	this.instance.parent = this;
	this.instance.setTransform(-1264,-157,1.316,1.316);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1264,-157,2527.5,263.3), null);
(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
}).prototype = getMCSymbolPrototype(lib.Символ14, null, null);
(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-201,-50,0.979,0.979);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-201,-50,315.4,99.9), null);
(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
}).prototype = getMCSymbolPrototype(lib.Символ6, null, null);
(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-153,-34.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-153,-34.5,294,89), null);
(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.service();
	this.instance.parent = this;
	this.instance.setTransform(-9,11,0.711,0.711);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-9,11,88.2,74.7), null);
(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.service1();
	this.instance.parent = this;
	this.instance.setTransform(12,8,0.745,0.745);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(12,8,80.5,78.2), null);
(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.service2();
	this.instance.parent = this;
	this.instance.setTransform(-10,-5,0.665,0.665);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-10,-5,77.8,71.2), null);
(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.service3();
	this.instance.parent = this;
	this.instance.setTransform(3,13,0.688,0.688);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(3,13,70.9,70.9), null);
(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ13, null, null);
(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ12, null, null);
(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},9,cjs.Ease.get(-1)).to({scaleX:0.8,scaleY:0.8},10,cjs.Ease.get(0.82)).to({scaleX:0.9,scaleY:0.9},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(0.82)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201,-50,315.4,99.9);
(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(-43.4,-0.1,1,1,0,0,0,-43.4,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-201,-50,315.4,99.9), null);
(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},23,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},25,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1264,-157,2527.5,263.3);
(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-12},28,cjs.Ease.get(-1)).to({y:-25},30,cjs.Ease.get(1)).to({y:-12},29,cjs.Ease.get(-1)).to({y:0},27,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-163.5,188,327);
(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-11.2},19,cjs.Ease.get(-1)).to({y:-23},20,cjs.Ease.get(1)).to({y:-11.5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-163.5,153,327);
(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.man2 = new lib.Символ8();
	this.man2.parent = this;
	this.man2.setTransform(-50.8,2);
	this.man3 = new lib.Символ9();
	this.man3.parent = this;
	this.man3.setTransform(53.7,2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.man3},{t:this.man2}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-127.3,-161.5,275,327), null);
(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(-200.6,268.4,1,1,0,0,0,33,32.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(-221.6,243.9,80.5,78.2), null);
(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-127.2,168.6,1,1,0,0,0,31,31.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-155.2,150.1,70.9,70.9), null);
(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-42.2,199.8,1.692,1.692,0,0,0,38,32);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-121.8,164.3,149.3,126.4), null);
(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(36.1,83,1.715,1.715,0,0,0,36,32.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-42.8,18.7,133.4,122), null);
(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.players = new lib.Символ5();
	this.players.parent = this;
	this.players.setTransform(-1.5,41.2,1,1,0,0,0,10.2,2);
	this.timeline.addTween(cjs.Tween.get(this.players).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-139,-122.3,275.1,327), null);
(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,0.73,0.73,45,0,0,-0.1,-0.1);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-3,-3,10,10), null);
(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.2,1.494,1.494,10.5,0,0,0.1,0.1);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-4,-4,12,12), null);
(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Symbol 46
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(1.9,-390.4,1.962,1.962,0,0,0,-182.1,285.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:3.2,y:-8.4,alpha:1},6).to({y:-13.4},3).wait(41).to({y:-23.4},3).to({x:1.9,y:97.1,alpha:0},6).wait(1));
	// Symbol 44
	this.instance_1 = new lib.Symbol44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88.3,-616.9,1.156,1.156,0,0,0,38,32.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({x:-87,y:-234.9,alpha:1},6).to({y:-239.9},3).wait(41).to({y:-249.9},3).to({x:-88.3,y:-129.4,alpha:0},6).wait(4));
	// Symbol 45
	this.instance_2 = new lib.Symbol45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.5,-21.7,2.043,2.043,0,0,0,-115.7,185.4);
	this.instance_2.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(3).to({_off:false,y:-204.7},0).to({y:-6.7,alpha:1},6).to({y:-21.7},3).wait(40).to({y:-26.7},3).to({y:84.3,alpha:0},6).wait(57));
	// Symbol 43
	this.instance_3 = new lib.Symbol43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-172.7,-78,1.156,1.156,0,0,0,36,32.6);
	this.instance_3.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:-257},0).to({y:-63,alpha:1},6).to({y:-78},3).wait(40).to({y:-83},3).to({y:32,alpha:0},6).wait(60));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.9,-94.1,339.7,145.2);
(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 12
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(59,74.4);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14.3,x:44.5,y:97.9},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:29,y:123},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.8,x:44,y:98.7},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:59,y:74.4},15,cjs.Ease.get(1)).wait(1));
	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.1,-48.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:14.3,x:56.5,y:-39.3},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:43,y:-29.8},15,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:14.8,x:56,y:-39.1},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:69.1,y:-48.1},15,cjs.Ease.get(1)).wait(1));
	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.7,40.5,1,1,90);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:68.4,x:-65.7,y:33.7},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:45,x:-48.6,y:26.5},15,cjs.Ease.get(1)).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:67.7,x:-65.3,y:33.5},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:90,x:-81.7,y:40.5},15,cjs.Ease.get(1)).wait(1));
	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:7.7},13,cjs.Ease.get(-1)).to({y:16},15,cjs.Ease.get(1)).to({y:8},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));
	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-61.7,-68.6);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-14.3,y:-49.8},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,y:-29.6},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,x:-61.6,y:-49.1},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-61.7,y:-68.6},15,cjs.Ease.get(1)).wait(1));
	// Символ 12
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(42,-120.3,0.73,0.73,90,0,0,-0.1,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-0.2,rotation:75.7,x:61.4,y:-91.5},13,cjs.Ease.get(-1)).to({regY:-0.1,rotation:60,x:82,y:-60.3},15,cjs.Ease.get(1)).to({regY:-0.2,rotation:75.2,x:62.1,y:-90.4},15,cjs.Ease.get(-1)).to({regY:-0.1,rotation:90,x:42,y:-120.3},15,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-71.6,131.7,154.1);
(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.tower2 = new lib.Символ17();
	this.tower2.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.tower2).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-139,-122.3,275.1,327), null);
// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
				var stageSize = getWindowSize();
				var w = stageSize.iw;
				var stageScale = 1;	
				var minWidth = 1650;
				var scaleW = w / minWidth;
				_this.logo.x = w * 0.12;
				_this.logo.y = 100;
				_this.btn.x = w * 0.88;
				_this.btn.y = 100;
				_this.bg.x = w * 0.5;
				_this.bg.y = 100;
				_this.tower.x = w * 0.68;
				_this.tower.y = 125;
				_this.txt.x = w * 0.4;
				_this.txt.y = 100;
			function setScale(scale) {
				_this.logo.scaleX = _this.logo.scaleY = scale * ((w < 551) ? 2 : 1);	
				_this.btn.scaleX = _this.btn.scaleY = scale * ((w < 551) ? 2.4 : w < 1000 ? 1.24 : 1);
				_this.tower.scaleX = _this.tower.scaleY = scale * ((w < 801) ? w > 299 ? w > 550 ? 2.7 : 4 : 2.8 : w > 551 ? 1.7 : 1);
				_this.txt.scaleX = _this.txt.scaleY = scale * ((w < 551) ? 2 : w < 1000 ? 1.5 : 1);
			}
			w < minWidth ? setScale(scaleW) : setScale(stageScale);
			if(w < 801){
				_this.logo.x = w * 0.15;
				_this.logo.y = 35;
				_this.btn.x = w * 0.84;
				_this.btn.y = 100;
				_this.bg.x = w * 0.5;
				_this.bg.y = 125;
				_this.tower.x = w * 0.59;
				_this.tower.y = 155;
				_this.txt.x = w * 0.2;
				_this.txt.y = 135;
			}
			if(w < 551){
				_this.logo.x = w * 0.24;
				_this.logo.y = 35;
				_this.btn.x = w * 0.76;
				_this.btn.y = 170;
				_this.bg.x = w * 0.5;
				_this.bg.y = 125;
				_this.tower.x = w * 0.83;
				_this.tower.y = w < 350 ? 100 : 125;
				_this.txt.x = w * 0.24;
				_this.txt.y = w > 299 ? 125 : 100;
			}
		}
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// Слой 3
	this.logo = new lib.Символ2();
	this.logo.parent = this;
	this.logo.setTransform(216.9,135,1,1,0,0,0,-6,10);
	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));
	// Слой 7
	this.tower1 = new lib.Символ5_1();
	this.tower1.parent = this;
	this.tower1.setTransform(-311.9,149.9);
	this.timeline.addTween(cjs.Tween.get(this.tower1).wait(1));
	// Слой 4
	this.btn = new lib.Символ3();
	this.btn.parent = this;
	this.btn.setTransform(1621.8,124.9,1,1,0,0,0,-43.4,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));
	// Слой 5
	this.txt = new lib.Символ7();
	this.txt.parent = this;
	this.txt.setTransform(705.8,103.4,1,1,0,0,0,-94.2,-21.6);
	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));
	// Слой 6
	this.tower = new lib.Символ4();
	this.tower.parent = this;
	this.tower.setTransform(1274.5,81.8,1,1,0,0,0,0,-41.1);
	this.timeline.addTween(cjs.Tween.get(this.tower).wait(1));
	// Слой 1
	this.bg = new lib.Символ1();
	this.bg.parent = this;
	this.bg.setTransform(960,100,1,1,0,0,0,0,-25);
	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(566.4,68,2617.1,359.6);
// library properties:
lib.properties = {
	width: 1920,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/btn.png", id:"btn"},
		{src:"images/footb_05.png", id:"footb_05"},
		{src:"images/footb_07.png", id:"footb_07"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/service.png", id:"service"},
		{src:"images/service1.png", id:"service1"},
		{src:"images/service2.png", id:"service2"},
		{src:"images/service3.png", id:"service3"},
		{src:"images/stad.jpg", id:"stad"}
	],
	preloads: []
};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
