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



(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,557,525);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,99);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,99);


(lib.chelust = function() {
	this.initialize(img.chelust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,53);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,235);


(lib.shlyapa = function() {
	this.initialize(img.shlyapa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,77);


(lib.siski = function() {
	this.initialize(img.siski);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,317);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,563);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,119);// helper functions:

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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221615").s().p("AGzEyQhUgFhMgkQhLgkgqgaQgqgbgXguQgYgvBpgpQBpgqA1AiQA0AhA3A1QA3A0ANBFQAMBBhMAAIgIAAgAlLhIQhOgBgXgMIg1geQgegRAKgwQALgwAkgsQAkgtAzAQQAzARAUAmQAVAmANBFQAMBDhLAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-50.8,-30.6,101.7,61.2), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-90,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-90,-117.5,180,235), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shlyapa();
	this.instance.parent = this;
	this.instance.setTransform(-72,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-72,-38.5,144,77), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chelust();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-64.5,-26.5,129,53), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.siski();
	this.instance.parent = this;
	this.instance.setTransform(-221,-158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-221,-158.5,442,317), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-67.5,-281.5,135,563), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn2();
	this.instance.parent = this;
	this.instance.setTransform(-317,-104.6,2.113,2.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-317,-104.6,634,209.2), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(-317,-104.6,2.113,2.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-317,-104.6,634,209.2), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-389,-113,1.899,1.899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-389,-113,778.5,226), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-53,-33,106,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-54.8,-34.6,112,72), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},19,cjs.Ease.get(1)).to({alpha:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317,-104.6,634,209.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19,cjs.Ease.get(1)).to({alpha:0.199},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317,-104.6,634,209.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-348.2,-101.1,697,202.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_1 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_2 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_3 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_4 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_5 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_6 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_7 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_8 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_9 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_10 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_11 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_12 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_13 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_14 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_15 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_16 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_17 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_18 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_19 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_20 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_21 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_22 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_23 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_24 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");
	var mask_graphics_25 = new cjs.Graphics().p("As3gyIC2nUIW5I5Ii2HUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:20.2,y:-40.3}).wait(1).to({graphics:mask_graphics_1,x:17.6,y:-34.6}).wait(1).to({graphics:mask_graphics_2,x:15.1,y:-28.8}).wait(1).to({graphics:mask_graphics_3,x:12.5,y:-23.1}).wait(1).to({graphics:mask_graphics_4,x:10,y:-17.4}).wait(1).to({graphics:mask_graphics_5,x:7.4,y:-11.7}).wait(1).to({graphics:mask_graphics_6,x:4.9,y:-6}).wait(1).to({graphics:mask_graphics_7,x:7.4,y:-11.7}).wait(1).to({graphics:mask_graphics_8,x:10,y:-17.4}).wait(1).to({graphics:mask_graphics_9,x:12.5,y:-23.1}).wait(1).to({graphics:mask_graphics_10,x:15.1,y:-28.8}).wait(1).to({graphics:mask_graphics_11,x:17.6,y:-34.6}).wait(1).to({graphics:mask_graphics_12,x:20.2,y:-40.3}).wait(1).to({graphics:mask_graphics_13,x:20.2,y:-40.3}).wait(1).to({graphics:mask_graphics_14,x:17.6,y:-34.6}).wait(1).to({graphics:mask_graphics_15,x:15.1,y:-28.8}).wait(1).to({graphics:mask_graphics_16,x:12.5,y:-23.1}).wait(1).to({graphics:mask_graphics_17,x:10,y:-17.4}).wait(1).to({graphics:mask_graphics_18,x:7.4,y:-11.7}).wait(1).to({graphics:mask_graphics_19,x:4.9,y:-6}).wait(1).to({graphics:mask_graphics_20,x:7.4,y:-11.7}).wait(1).to({graphics:mask_graphics_21,x:10,y:-17.4}).wait(1).to({graphics:mask_graphics_22,x:12.5,y:-23.1}).wait(1).to({graphics:mask_graphics_23,x:15.1,y:-28.8}).wait(1).to({graphics:mask_graphics_24,x:17.6,y:-34.6}).wait(1).to({graphics:mask_graphics_25,x:20.2,y:-40.3}).wait(35));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-34.6,112,46.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-55,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.baba();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-278.5,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-278.5,-262.5,557,525), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tip.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-211.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// siski.png
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:29.9,y:120.6},14,cjs.Ease.get(-1)).to({x:4,y:119.5},15,cjs.Ease.get(1)).to({x:29,y:120.5},15,cjs.Ease.get(-1)).to({x:54,y:121.5},15,cjs.Ease.get(1)).wait(1));

	// chelust.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31,-178.5,1,1,0,0,0,64.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2,x:6,y:-177},14,cjs.Ease.get(-1)).to({rotation:-4.5,x:-20.9,y:-175.5},15,cjs.Ease.get(1)).to({regY:-0.1,rotation:-2.1,x:5.1,y:-177},15,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:31,y:-178.5},15,cjs.Ease.get(1)).wait(1));

	// baba.png
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(271.7,-31,1,1,0,0,0,242.2,186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-0.5,x:247.7,y:-31.9},14,cjs.Ease.get(-1)).to({regX:242.3,rotation:-1.2,x:221.8,y:-33},15,cjs.Ease.get(1)).to({rotation:-0.5,x:246.8,y:-32},15,cjs.Ease.get(-1)).to({regX:242.2,rotation:0,x:271.7,y:-31},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-196.1,-240.3,1,1,0,0,0,-67.1,-33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.3},14,cjs.Ease.get(-1)).to({regX:-67.2,regY:-33.9,rotation:9,x:-196.2,y:-240.4},15,cjs.Ease.get(1)).to({rotation:4.3,x:-196.1,y:-240.3},15,cjs.Ease.get(-1)).to({regX:-67.1,regY:-33.8,rotation:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_5 = new lib.Символ19();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-69,-190,1,1,0,0,0,90,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-91.7,y:-193.4},14,cjs.Ease.get(-1)).to({x:-116,y:-197},15,cjs.Ease.get(1)).to({x:-92.5,y:-193.5},15,cjs.Ease.get(-1)).to({x:-69,y:-190},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279,-480,587,761);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-384.5,462.7,1,1,0,0,0,-272.4,218.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-391.1,-235.6,587,761), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.86,scaleY:0.86},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87},10,cjs.Ease.get(-1)).to({scaleX:0.74,scaleY:0.74},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.9,-76.8,465.8,153.7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87},9,cjs.Ease.get(-1)).to({scaleX:0.72,scaleY:0.72},10,cjs.Ease.get(1)).to({scaleX:0.86,scaleY:0.86},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317,-104.6,634,209.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85},4,cjs.Ease.get(1)).to({scaleX:0.76,scaleY:0.76},4,cjs.Ease.get(1)).wait(1).to({scaleX:0.85,scaleY:0.85},4,cjs.Ease.get(1)).to({scaleX:0.76,scaleY:0.76},4,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.8,-76.9,530.1,153.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn22 = new lib.Символ9();
	this.btn22.parent = this;
	this.btn22.setTransform(0,0,0.957,0.957);

	this.timeline.addTween(cjs.Tween.get(this.btn22).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-222.9,-73.5,445.8,147.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn11 = new lib.Символ6();
	this.btn11.parent = this;
	this.btn11.setTransform(0,0,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get(this.btn11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-293.7,-96.9,587.4,193.8), null);


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
				minWidth = w > h ? ((w > 959) ? ((w > 1279) ? 1600 : 1400) : ((w < 481) ? 700 : 800)) : ((w > 599) ? 1400 : ((w < 361) ? 1000 : 1100)),
				minHeight = 550,
			
				/* Коэфициенты уменьшения */
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
			
			_this.btn1.x = w < h ? iw * 0.27 : ((w < 481) ? iw * 0.76 : ((w > 959) ? iw * 0.71 : iw * 0.74));
		    _this.btn1.y = w < h ? ((w > 767) ? ih * 0.32 : ih * 0.3) : ih * 0.5;
		    
			_this.btn2.x = w < h ? iw * 0.73 : ((w < 481) ? iw * 0.76 : ((w > 959) ? iw * 0.71 : iw * 0.74)); 
		    _this.btn2.y = w < h ? ((w > 767) ? ih * 0.32 : ih * 0.3) : ih * 0.83;
			
			_this.txt.x = w < h ? iw * 0.5 : ((w < 481) ? iw * 0.76 : ((w > 959) ? iw * 0.71 : iw * 0.74));
		    _this.txt.y = w < h ? ((w > 767) ? ih * 0.12 : ih * 0.13) : ih * 0.17;
			
			_this.bj.x = 0;
		    _this.bj.y = w < h ? ((w < 385) ? ((w < 321) ? ih * 1.33 : ih * 1.47) : ((w > 767) ? ih * 1.5 : ih * 1.3)) : ((w < 641) ? ih * 1.6 : ((w < 737) ? ih * 1.45 : ih * 1.16));
			/* Функция ресайза */
		    function setScale(scale) {
				
				_this.btn1.scaleX = _this.btn1.scaleY = w < 321 ? ((h < 481) ? scale * 1.3 : scale * 1.1) : scale;
				_this.btn2.scaleX = _this.btn2.scaleY = w < 321 ? ((h < 481) ? scale * 1.3 : scale * 1.1) : scale;
				_this.txt.scaleX = _this.txt.scaleY = w < h ? scale * 1.3 : scale;
				_this.bj.scaleX = _this.bj.scaleY = w < h ? ((w < 385) ? scale * 2.3 : ((w > 767) ? scale * 2 : ((w > 599) ? scale * 2.1 : scale * 1.8))) : ((w < 641) ? scale * 1.6 : scale * 1.2);
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
				//...///
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

	// Слой 5
	this.bj = new lib.Символ12();
	this.bj.parent = this;
	this.bj.setTransform(169.9,884.7,1,1,0,0,0,-377.6,504.2);

	this.timeline.addTween(cjs.Tween.get(this.bj).wait(1));

	// Символ 9
	this.btn2 = new lib.Символ11();
	this.btn2.parent = this;
	this.btn2.setTransform(1194,104.6);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// Символ 6
	this.btn1 = new lib.Символ10();
	this.btn1.parent = this;
	this.btn1.setTransform(459,104.6);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// Символ 3
	this.txt = new lib.Символ3();
	this.txt.parent = this;
	this.txt.setTransform(510,-112.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(668.4,194.1,1260.6,1095.8);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/baba.png", id:"baba"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/btn2.png", id:"btn2"},
		{src:"images/chelust.png", id:"chelust"},
		{src:"images/ruka.png", id:"ruka"},
		{src:"images/shlyapa.png", id:"shlyapa"},
		{src:"images/siski.png", id:"siski"},
		{src:"images/tip.png", id:"tip"},
		{src:"images/txt2.png", id:"txt2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;