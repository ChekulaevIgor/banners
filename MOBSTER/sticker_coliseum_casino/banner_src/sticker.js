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



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,97);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,36);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,46);


(lib.slt1 = function() {
	this.initialize(img.slt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,113);


(lib.slt2 = function() {
	this.initialize(img.slt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,213);


(lib.slt3 = function() {
	this.initialize(img.slt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,213);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,87);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,75);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,102);// helper functions:

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


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-126.4,-43,2.608,2.608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-126.4,-43,263.4,93.9), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2.png - копия
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-101,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-101,-37,203,75), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(-91,-41,0.817,0.817);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-91,-41,181.3,83.3), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-168,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-168,-34,310,97), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-80,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-80,-43,159,87), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slt3();
	this.instance.parent = this;
	this.instance.setTransform(-56,-289,0.533,0.533);

	this.instance_1 = new lib.slt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-415,0.589,0.589);

	this.instance_2 = new lib.slt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-528);

	this.instance_3 = new lib.slt3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56,63,0.533,0.533);

	this.instance_4 = new lib.slt2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-56,-63,0.589,0.589);

	this.instance_5 = new lib.slt1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-56,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-56,-528,112,704.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slt3();
	this.instance.parent = this;
	this.instance.setTransform(-56,-528,0.533,0.533);

	this.instance_1 = new lib.slt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-415,0.589,0.589);

	this.instance_2 = new lib.slt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-289);

	this.instance_3 = new lib.slt3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56,-176,0.533,0.533);

	this.instance_4 = new lib.slt2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-56,-63,0.589,0.589);

	this.instance_5 = new lib.slt1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-56,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-56,-528,112,704), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slt3();
	this.instance.parent = this;
	this.instance.setTransform(-56,-505,0.533,0.533);

	this.instance_1 = new lib.slt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-290,0.589,0.589);

	this.instance_2 = new lib.slt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-391);

	this.instance_3 = new lib.slt3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56,-164,0.533,0.533);

	this.instance_4 = new lib.slt2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-56,51,0.589,0.589);

	this.instance_5 = new lib.slt1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-56,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-56,-505,112,681.6), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slt3();
	this.instance.parent = this;
	this.instance.setTransform(-56,-289,0.533,0.533);

	this.instance_1 = new lib.slt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-415,0.589,0.589);

	this.instance_2 = new lib.slt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-528);

	this.instance_3 = new lib.slt3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56,63,0.533,0.533);

	this.instance_4 = new lib.slt2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-56,-63,0.589,0.589);

	this.instance_5 = new lib.slt1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-56,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-56,-528,112,704.6), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-43,263.4,93.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt3.png
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(123.2,0,1.871,1.871);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({x:0,alpha:1},9,cjs.Ease.get(1)).wait(32).to({x:-104,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// txt2.png
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.3,5.8,1.945,1.945);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:-1.7,alpha:1},9,cjs.Ease.get(1)).wait(30).to({x:-73.7,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(42));

	// Слой 1
	this.txt1 = new lib.Символ10();
	this.txt1.parent = this;
	this.txt1.setTransform(0,1.2,1.905,1.905,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(24).to({x:-88,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(70).to({_off:false,x:160},0).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.3,-80.9,302.8,165.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,alpha:0.238},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,alpha:0},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.238},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,alpha:0},4,cjs.Ease.get(1)).wait(27));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-34,310,97);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(0,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:527.7},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-352.3,112,704.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(0,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:516.7},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-329.3,112,681.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(0,176);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:528},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-352,112,704);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:528},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-352.3,112,704.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(168,-175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-175.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 5
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-168,-175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-224,-528,448,704.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(1.5,-1.1,0.526,0.526,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-65,-23.6,138.6,49.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt4 = new lib.Символ19();
	this.txt4.parent = this;
	this.txt4.setTransform(-1.1,10.3,0.892,0.892,0,0,0,-2,16);

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-135.1,-76.1,270,147.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn1 = new lib.Символ16();
	this.btn1.parent = this;
	this.btn1.setTransform(0,0,1.662,1.662);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-279.1,-56.5,515.1,161.2), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo2.png
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(-224,296,1.561,1.561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo2.png
	this.instance_1 = new lib.logo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224,-57,1.561,1.561);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjgAbcMAAAg23MBHBAAAMAAAA23g");
	mask.setTransform(-0.3,156.3);

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,160.3);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-224,-57,448,424.8), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4,0.878,0.878,0,0,0,0,155.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-199.8,-458.8,399.1,645.8), null);


// stage content:
(lib.sticker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
			var /* Размер баннера */
				iw = window.innerWidth,
				ih = window.innerHeight,
			
				/* Размер окна браузера */
				w = window.innerWidth,
				h = window.innerHeight / 0.35,
			
				/* Размер по умолчанию */
				defaultScale = 1,
			
				/* Минимальные размеры для ресайза */
				minWidth = w < 321 ? 400 : w > 500 && w < h ? 700 : 460,
				minHeight = 300,
			
				/* Коэфициенты уменьшения */
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
		    
		    _this.btn.x = w < h ? ((w < 321) ? iw * 0.74 : iw * 0.76) : iw * 0.82;
		    _this.btn.y = w < h ? ih * 0.84 : ((w > 1020) ? ih * 0.65 : ih * 0.69);
			
			_this.slot.x = w < h ? iw * 0.27 : iw * 0.17;
		    _this.slot.y = ih * 0.5;
			
			_this.txt.x = w < h ? ((w < 321) ? iw * 0.74 : iw * 0.76) : ((w > 1020) ? iw * 0.48 : ((w > 959) ? iw * 0.51 : iw * 0.495));
		    _this.txt.y = w < h ? ih * 0.48 : ih * 0.5; 
			
			_this.logo.x = w < h ? ((w < 321) ? iw * 0.74 : iw * 0.76) : iw * 0.82;
		    _this.logo.y = w < h ? ih * 0.15 : ((w > 1020) ? ih * 0.3 : ih * 0.23);
			
		    
			/* Функция ресайза */
		    function setScale(scale) {
				
		        _this.btn.scaleX = _this.btn.scaleY = w < h ? ((w < 385) ? scale * 0.64 : scale * 0.56) : ((w > h && w < 481) ? scale * 0.95 : ((w > 959) ? scale * 0.8 : scale * 1.1));
				_this.slot.scaleX = _this.slot.scaleY = w < h ? ((w < 321) ? scale * 0.87 : scale * 0.85) : ((w > 1020) ? scale * 0.8 : scale * 1.35);
				_this.txt.scaleX = _this.txt.scaleY = w < h ? ((w < 361) ? scale * 0.9 : scale * 0.8) : ((w > 1020) ? scale * 1.1 : ((w < 481) ? scale * 1.2 : scale * 1.5));
				_this.logo.scaleX = _this.logo.scaleY = w < h ? ((w < 386) ? scale * 1.2 : scale) : ((w > 959) ? scale * 1.5 : scale * 2);
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

	// tors.png
	this.slot = new lib.Символ1();
	this.slot.parent = this;
	this.slot.setTransform(823.9,302.8);

	this.timeline.addTween(cjs.Tween.get(this.slot).wait(1));

	// btn.png
	this.btn = new lib.Символ20();
	this.btn.parent = this;
	this.btn.setTransform(371.6,659.5,1,1,0,0,0,-22.4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 19
	this.txt = new lib.Символ2();
	this.txt.parent = this;
	this.txt.setTransform(511.1,388.8);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// logo_gonzo.png
	this.logo = new lib.Символ3();
	this.logo.parent = this;
	this.logo.setTransform(442.7,254.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(626.9,227.9,908.4,922.8);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/logo2.png", id:"logo2"},
		{src:"images/slt1.png", id:"slt1"},
		{src:"images/slt2.png", id:"slt2"},
		{src:"images/slt3.png", id:"slt3"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;