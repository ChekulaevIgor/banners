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
p.nominalBounds = new cjs.Rectangle(0,0,279,65);


(lib.cards = function() {
	this.initialize(img.cards);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,231);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,137);


(lib.iphone = function() {
	this.initialize(img.iphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,283);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,53);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,32);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,23);// helper functions:

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


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-54,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-54,-68.5,108,137), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-54,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-54,-68.5,108,137), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-54,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-54,-68.5,108,137), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-54,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-54,-68.5,108,137), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cards();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-126.5,-115.5,253,231), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone();
	this.instance.parent = this;
	this.instance.setTransform(-88,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-88,-143,173,283), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-125,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-125,-16,247,32), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-141,-15,1.26,1.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-141,-15,281,29), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-139.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-139.5,-32.5,279,65), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-124.5,-26.5,249,53), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-54,-68.5,108,137), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:66.4,x:9.9,y:-14},29,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:135,x:20,y:-28.4},30,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:67.7,x:10,y:-14.2},30,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-68.5,108,137);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:15.6,x:-15.7,y:-4.4},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:-30,y:-8.5},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.8,x:-15,y:-4.3},21,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-68.5,108,137);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-24.5,y:14.7},24,cjs.Ease.get(-1)).to({rotation:15,x:-50,y:30},25,cjs.Ease.get(1)).to({regX:0.2,regY:-0.1,rotation:144.8,x:-25.1,y:15.1},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:228.3,x:-5.8,y:3.7},13,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:360,x:0,y:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-68.5,108,137);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-20,110,1,1,0,0,0,-20,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.8,y:110.1},7,cjs.Ease.get(-1)).to({rotation:5.7,y:110},7,cjs.Ease.get(1)).to({regX:-19.9,rotation:3,x:-19.9},7,cjs.Ease.get(-1)).to({regX:-20,rotation:0,x:-20},8,cjs.Ease.get(1)).wait(1).to({rotation:2.8,y:110.1},7,cjs.Ease.get(-1)).to({rotation:5.7,y:110},7,cjs.Ease.get(1)).to({regX:-19.9,rotation:3,x:-19.9},7,cjs.Ease.get(-1)).to({regX:-20,rotation:0,x:-20},8,cjs.Ease.get(1)).wait(30).to({y:120},5,cjs.Ease.get(1)).to({y:110},5,cjs.Ease.get(1)).wait(1).to({y:120},5,cjs.Ease.get(1)).to({y:110},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-115.5,253,231);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.8},8,cjs.Ease.get(-1)).to({y:23.5},8,cjs.Ease.get(1)).to({y:11.8},9,cjs.Ease.get(-1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-143,173,283);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.6,y:-61},0).wait(32).to({y:-71},2).to({scaleY:1,y:0,alpha:1},4).wait(35).to({scaleY:0.6,y:-71,alpha:0},4).to({y:-61},2).wait(1));

	// txt1.png
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({y:-9.5},2).to({scaleY:0.71,y:26.6,alpha:0},4).wait(35).to({scaleY:1,y:-9.5,alpha:1},4).to({y:0.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-15.5,281,32);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-139.5,-32.5,279,65), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-126.5,-115.5,253,231), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-21.6,x:19.4,y:20.1},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-45,x:40,y:41.5},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-187.3,x:20.2,y:20.8},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-360,x:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-68.5,108,137);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-88,-143,173,283), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-141,-15.5,281,32), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97},3,cjs.Ease.get(-1)).to({scaleX:0.93,scaleY:0.93},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:0.97,scaleY:0.97},3,cjs.Ease.get(-1)).to({scaleX:0.93,scaleY:0.93},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(15).to({rotation:-2.5},3,cjs.Ease.get(1)).to({rotation:3},6,cjs.Ease.get(1)).to({rotation:-2.5},6,cjs.Ease.get(1)).to({rotation:3},6,cjs.Ease.get(1)).to({rotation:0},4,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-32.5,279,65);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-139.5,-32.5,279,65), null);


// stage content:
(lib.fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* --- Helper --- > 
		
			> РАЗМЕРЫ ОКНА БРАУЗЕРА И БАННЕРА
			
			w - Ширина окна браузера            |         bw - Ширина баннера
			h - Высота окна браузера            |         bр - Высота баннера
		
		    --------------------------------------------------------------------------
			
			> МИНИМАЛЬНЫЕ РАЗМЕРЫ
			
			min_w - Минимальная ширина          |         min_h - Минимальная высота
			
			--------------------------------------------------------------------------
			
			> ОРИЕНТАЦИЯ И УСТРОЙСТВО
			
			_port - Портретная ориентация       |         _land - Альбомная ориентация
			_mob - Смартфон                     |         !_mob - Планшет
			
			--------------------------------------------------------------------------
			
			> АДАПТАЦИЯ ПОД САЙТЫ БЕЗ МОБ ВЕРСТКИ
		
			cs(...) - Значения в пикселях "..." пишем только так ( пример - "cs(321)" )
			
		< --- Helper --- */
		var _this = this;
		window._setCanvasSize = function(){
			
			/* <------------------------ DO NOT EDIT ------------------------> */
			
			var s = _MBSTR.windowSize(), 
				
				w = s.iw, h = s.ih, bw = w * 0.94, bh = h * 0.7,
				stage_scale = _MBSTR.windowScale(),
				cs = function(size){ return size * stage_scale},
				
				_port = w < h, _land = w > h,
				_mob = w < h && w < cs(420) && h < cs(750) || w > h && h < cs(420) && w < cs(750);
				
			/* <------------------------ DO NOT EDIT ------------------------> */
				
			/* <-------------------------------------------------------------> */
			/* <-------------------------------------------------------------> */	
			/* <-------------------------------------------------------------> */	
			/* <-------------------------------------------------------------> */	
			
			/* <------------------------- EDIT THIS -------------------------> */
			
			var min_w = cs(600);
			var min_h = cs(600);
			
			var EL = {
				logo : {
					x : _mob && _port || !_mob && _port ? bw * 0.5 : bw * 0.27,
					y : _mob && _port || !_mob && _port ? bh * 0.13 : bh * 0.4,
					s : _mob && _port || !_mob && _port ? 1.6 : 1.3
				},
				
				btn : {
					x : _mob && _port || !_mob && _port ? bw * 0.5 : bw * 0.73,
					y : _mob && _port || !_mob && _port ? bh * 0.85 : bh * 0.8,
					s : _mob && _port || !_mob && _port ? 1.7 : 1.6,
				},
				
				
				txt1 : {
					x : _mob && _port || !_mob && _port ? bw * 0.5 : bw * 0.27,
					y : _mob && _port || !_mob && _port ? bh * 0.28 : bh * 0.6,
					s : _mob && _port || !_mob && _port ? 1.8 : 1.5,
				},
				
				cards : {
					x : _mob && _port || !_mob && _port ? bw * 0.4 : bw * 0.68,
					y : _mob && _port || !_mob && _port ? bh * 0.85 : bh * 0.8,
					s : 1.3,
				},
				
				chip1 : {
					x : _mob && _port || !_mob && _port ? 0 : 0,
					y : _mob && _port || !_mob && _port ? 0 : 0,
					s : 1.2,
				},
				
				chip2 : {
					x : _mob && _port || !_mob && _port ? bw : bw,
					y : _mob && _port || !_mob && _port ? bh * 0 : 0,
					s : 1,
				},
				
				chip3 : {
					x : _mob && _port || !_mob && _port ? 0 : 0,
					y : _mob && _port || !_mob && _port ? bh : bh,
					s : 1,
				},
				
				chip4 : {
					x : _mob && _port || !_mob && _port ? bw : bw,
					y : _mob && _port || !_mob && _port ? bh : bh,
					s : 1.5,
				},
				
				iphone : {
					x : _mob && _port || !_mob && _port ? bw * 0.6 : bw * 0.77,
					y : _mob && _port || !_mob && _port ? bh * 0.85 : bh * 0.85,
					s : 1.3,
				}
			};
			
			/* <------------------------- EDIT THIS -------------------------> */
			
			/* <-------------------------------------------------------------> */
			/* <-------------------------------------------------------------> */
			/* <-------------------------------------------------------------> */
			/* <-------------------------------------------------------------> */
			
			/* <------------------------ DO NOT EDIT ------------------------> */
			
			var new_scale = stage_scale * (w / min_w < 1 ? w / min_w : 1) * (h / min_h < 1 ? h / min_h : 1);
			Object.keys(EL).forEach(function(key){
				_this[key].x = EL[key].x; _this[key].y = EL[key].y;
				_this[key].scaleX = _this[key].scaleY = EL[key].s * stage_scale * new_scale;
				"c" in EL[key] ? (function(parent, value){
					Object.keys(value).forEach(function(key){
						parent[key] = value[key];
					});
				})(_this[key], EL[key].c) : false;
			});
			
			/* <------------------------ DO NOT EDIT ------------------------> */
		}
		
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn.png
	this.btn = new lib.Символ7();
	this.btn.parent = this;
	this.btn.setTransform(483.5,255.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// txt2.png
	this.txt1 = new lib.Символ1();
	this.txt1.parent = this;
	this.txt1.setTransform(482.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// logo.png
	this.logo = new lib.Символ2();
	this.logo.parent = this;
	this.logo.setTransform(483.5,255.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// iphone.png
	this.iphone = new lib.Символ3();
	this.iphone.parent = this;
	this.iphone.setTransform(483,324,1,1,0,0,0,0,143);

	this.timeline.addTween(cjs.Tween.get(this.iphone).wait(1));

	// cards.png
	this.cards = new lib.Символ6();
	this.cards.parent = this;
	this.cards.setTransform(483.5,371,1,1,0,0,0,0,115.5);

	this.timeline.addTween(cjs.Tween.get(this.cards).wait(1));

	// chips.png
	this.chip3 = new lib.Символ23();
	this.chip3.parent = this;
	this.chip3.setTransform(608,401.5);

	this.chip4 = new lib.Символ22();
	this.chip4.parent = this;
	this.chip4.setTransform(874,289.5);

	this.chip2 = new lib.Символ21();
	this.chip2.parent = this;
	this.chip2.setTransform(771,130.5);

	this.chip1 = new lib.Символ5();
	this.chip1.parent = this;
	this.chip1.setTransform(315,90,1,1,0,0,0,-4,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chip1},{t:this.chip2},{t:this.chip4},{t:this.chip3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747.5,214.5,663,510.5);
// library properties:
lib.properties = {
	width: 965,
	height: 510,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/btn.png", id:"btn"},
		{src:"images/cards.png", id:"cards"},
		{src:"images/chip.png", id:"chip"},
		{src:"images/iphone.png", id:"iphone"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;