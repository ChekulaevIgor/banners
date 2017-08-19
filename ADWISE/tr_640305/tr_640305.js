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



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,80);


(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,269);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,982,552);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,66);


(lib.horse = function() {
	this.initialize(img.horse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,44);


(lib.lizo = function() {
	this.initialize(img.lizo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,58);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,134);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,310);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,45);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,65);


(lib.unit = function() {
	this.initialize(img.unit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,25);// helper functions:

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


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mish();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24,1.394,1.394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-24,-24,48.8,48.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-110.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-110.5,-33,221,66), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("AgWAgIAtg/");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-3.3,-4.2,6.6,8.4), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-491,-276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-491,-276,982,552), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE300").s().p("AiDBMQgEgIgGgFQgGgFgIgCQgIgCgLAAIg0AAQgLAAgIACQgIACgGAFQgGAFgEAIQgEAHgDALIgDgBIADgtQAIAAAFgDQAFgDADgEIAGgMIAGgNIAGgWIAIgsIgBgPQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBvABIAOgBIAAADIgMACQgEACgCAEQgCADgBAHIgBAPIABBVQAAAFADAEQACADAFACIAOACIABAXIACAWIgDABQgDgLgEgHgAjZhNQgDADAAAGIgCATQgCAXgEAQIgLAlIgFAMIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACACADAAIARABIA1gCIAAh/IgngBQgGABgEAEgAMUA3IAAgDIANgCQAFgCACgEQACgDABgHIAAhmQgBgHgCgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgNACQgEACgDAEQgCADAAAHIgBAtIAcgFQAKAAAJAEQAJACAHAHQAHAFAFAIQAEAIAAAKQAAALgEAHQgFAHgHAGQgIAFgJACQgJACgIAAgANLgTIgMAEIAAA8IALAEIAKAAQAIAAAGgBQAHgCAFgFQAFgEADgGQACgHAAgJQAAgHgCgGQgCgGgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgDIAMgCQAFgCACgEQADgDAAgHIAAhmQAAgHgDgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgMACQgFACgCAEQgCADgBAHIgBAtIAdgFQAJAAAJAEQAJACAIAHQAHAFAEAIQAFAIAAAKQAAALgFAHQgFAHgHAGQgIAFgIACQgJACgIAAgAGMgTIgNAEIAAA8IALAEIAKAAQAIAAAHgBQAGgCAGgFQAFgEACgGQADgHAAgJQAAgHgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgDIAMgCQAEgCADgEQACgDAAgHIAAhmQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAOABIAygCQAJAAAKACQAKACAJAFQAJAEAFAJQAGAHAAAMQAAAKgGAIQgGAJgKACIAAABQAPAEAJALQAEAEACAGQACAHAAAIQAAALgEAGQgEAHgIAEQgHAEgJACQgJABgKAAgAoRAqQAAACAEABIAHADIATABQAIAAAHgCQAHgCAFgFQAKgJAAgSQAAgJgGgIQgGgIgHgFIgWADIgNgBQgHgBgGgDgAoHhTIgKACIAAA4QAGADAGAAIAMACQAOAAAKgIQAJgIAAgOQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAgAL1A2IjWABIAAgDIANgCQAFgCACgEQACgDABgHIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgDAEQgCADAAAHIgBByIAQABIAugBIgBhyQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAxABIARgBIAAADIgNACQgFACgCAEQgCADgBAHIgBAOIAABkIAQABIAQABIAegCIAAhkIAAgOQgBgHgCgDQgDgEgEgCIgMgCIAAgDIAPABIAhAAIARgBIAAADIgNACQgEACgDAEQgCADgBAHIAAAOIAABJIAAAPQABAHACADQACAEAFACIAMACIAAADIgOgBgAH/A2IgxABIAAgDIAMgCQAFgCACgEQACgDABgHIAAgPIAAhJIAAgOQgBgHgCgDQgCgEgFgCIgMgCIAAgDIASABIAgAAIAOgBIAAADIgMACQgEACgCAEQgDADAAAHIgBAOIAABJIABAPQAAAHADADQACAEAFACIAMACIAAADIgQgBgAE9A2IgiAAIgRABIAAgDIAJgCIAIgCQADgCABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBeIgLAgIgBAAQgKgigOgfIgcg/IgBAAIgKBhIABANQABAFADAEQADADAFACQAFACAIAAIAAADIg/AAIAAgDIAJgCIAIgDIAGgGQADgDABgEIAPhuQgFgEgGgDIgNgDIAAgDIBBAAIAAADIgIADQgDADAAAFIABAIIAhBSIAWguQAKgXAIgYIgFgGIgHgCIAAgDIAtABIAOgBIAAADQgJABgGAEQgGAEAAAKIAQBjIADAIIAEAGQACACAEABQAFACAHABIAAADIgRgBgAApA2IgvABIAAgDIALgCQAFgCACgEQACgDABgHIAAgPIAAhTIhQBlIACAGQACAEACABIAHADIAKABIAAADIhCAAIAAgDIANgCQAEgCACgEQADgDAAgHIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAABeIBPhkQgCgGgFgDQgFgCgJgBIAAgDIAyABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAOIAABJIABAPQAAAHACADQADAEAEACIANACIAAADIgRgBgAkxA2IhnAAIgNABIAAgDIANgCQAEgCACgEQACgDABgHIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIB7AAIABAnIgDABQgCgKgFgIQgFgGgGgEQgHgDgHgCIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgDQAJgHACgQIADAAIAAA+IgDAAQgCgHgDgGQgCgGgFgDQgEgEgGgBIgegBIAABEIAFABIAUACQANgBAKgCQALgCAJgFQAIgFAIgIQAIgHAIgLIACADIgUAsgApUA2IgyABIAAgDQAJgBAHgDQAGgEAAgGIgBgEIgPgrIguAAIgPAoIgBACIgBADQAAAEADADIAFAFIANAEIAAADIg1AAIAAgDQAHgCAEgCQAFgDADgFIAFgJIAshrIABgCIgBgEIgCgEIAKgCIAJgFIAuB9QADAJAGAFQAFAFALABIAAADIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgDIAMgCQAFgCACgEQACgDABgHIAAgPIAAgnIhRAAIAAA2QABAHACADQACAEAFACIANACIAAADIhCAAIAAgDIANgCQAEgCACgEQADgDAAgHIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAAApIBRAAIAAgbIAAgOQgBgHgCgDQgCgEgFgCIgNgCIAAgDIAzABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAOIAABJIABAPQAAAHACADQADAEAEACIANACIAAADIgRgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия: 2 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C0000").s().p("AiDBMQgEgIgGgFQgGgFgIgCQgIgCgLAAIg0AAQgLAAgIACQgIACgGAFQgGAFgEAIQgEAHgDALIgDgCIADgsQAIAAAFgDQAFgDADgEIAGgMIAGgNIAGgWIAIgsIgBgQQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBvABIAOgBIAAACIgMADQgEACgCADQgCAFgBAFIgBAQIABBVQAAAGADADQACADAFABIAOADIABAXIACAVIgDACQgDgLgEgHgAjZhOQgDAFAAAEIgCAUQgCAYgEAPIgLAlIgFALIgBADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABADAAIARABIA1gBIAAh/IgngBQgGABgEADgAMUA3IAAgCIANgDQAFgCACgEQACgEABgGIAAhnQgBgFgCgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgNADQgEACgDADQgCAFAAAFIgBAuIAcgFQAKAAAJADQAJAEAHAFQAHAGAFAJQAEAGAAALQAAALgEAHQgFAIgHAEQgIAFgJADQgJACgIAAgANLgTIgMAEIAAA8IALAEIAKABQAIAAAGgDQAHgBAFgFQAFgEADgGQACgHAAgJQAAgHgCgHQgCgFgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgCIAMgDQAFgCACgEQADgEAAgGIAAhnQAAgFgDgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgMADQgFACgCADQgCAFgBAFIgBAuIAdgFQAJAAAJADQAJAEAIAFQAHAGAEAJQAFAGAAALQAAALgFAHQgFAIgHAEQgIAFgIADQgJACgIAAgAGMgTIgNAEIAAA8IALAEIAKABQAIAAAHgDQAGgBAGgFQAFgEACgGQADgHAAgJQAAgHgDgHQgCgFgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgCIAMgDQAEgCADgEQACgEAAgGIAAhnQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAOABIAygCQAJAAAKACQAKACAJAFQAJAFAFAHQAGAJAAAMQAAAJgGAJQgGAHgKAEIAAAAQAPAFAJAKQAEAEACAHQACAGAAAIQAAAKgEAHQgEAHgIAEQgHAEgJABQgJACgKAAgAoRAqQAAACAEABIAHACIATADQAIAAAHgDQAHgCAFgEQAKgKAAgSQAAgKgGgGQgGgJgHgFIgWACIgNgBQgHAAgGgDgAoHhSIgKABIAAA3QAGADAGACIAMABQAOAAAKgIQAJgIAAgPQAAgHgDgGQgDgGgFgEQgFgEgHgDQgHgCgHAAgAL1A2IjWABIAAgCIANgDQAFgCACgEQACgEABgGIAAhnQgBgFgCgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgDADQgCAFAAAFIgBBzIAQABIAugBIgBhzQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAxABIARgBIAAACIgNADQgFACgCADQgCAFgBAFIgBAPIAABkIAQABIAQAAIAegBIAAhkIAAgPQgBgFgCgFQgDgDgEgCIgMgDIAAgCIAPABIAhAAIARgBIAAACIgNADQgEACgDADQgCAFgBAFIAAAPIAABJIAAAPQABAGACAEQACAEAFACIAMADIAAACIgOgBgAH/A2IgxABIAAgCIAMgDQAFgCACgEQACgEABgGIAAgPIAAhJIAAgPQgBgFgCgFQgCgDgFgCIgMgDIAAgCIASABIAgAAIAOgBIAAACIgMADQgEACgCADQgDAFAAAFIgBAPIAABJIABAPQAAAGADAEQACAEAFACIAMADIAAACIgQgBgAE9A2IgiAAIgRABIAAgCIAJgCIAIgEQADgBABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBeIgLAgIgBAAQgKgigOgeIgchAIgBAAIgKBiIABAMQABAFADAEQADADAFACQAFACAIABIAAACIg/AAIAAgCIAJgCIAIgEIAGgFQADgEABgEIAPhuQgFgEgGgCIgNgFIAAgCIBBAAIAAACIgIAFQgDACAAAGIABAHIAhBSIAWgtQAKgYAIgZIgFgEIgHgEIAAgCIAtABIAOgBIAAACQgJACgGAEQgGAEAAALIAQBiIADAIIAEAFQACADAEACQAFACAHABIAAACIgRgBgAApA2IgvABIAAgCIALgDQAFgCACgEQACgEABgGIAAgPIAAhTIhQBkIACAHQACADACACIAHADIAKACIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgGIAAhnQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAABfIBPhjQgCgHgFgCQgFgDgJgCIAAgCIAyABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAPQAAAGACAEQADAEAEACIANADIAAACIgRgBgAkxA2IhnAAIgNABIAAgCIANgDQAEgCACgEQACgEABgGIAAhnQgBgFgCgFQgCgDgFgCIgMgDIAAgCIB7AAIABAnIgDABQgCgLgFgGQgFgHgGgEQgHgDgHgCIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgEQAJgFACgQIADAAIAAA+IgDAAQgCgIgDgHQgCgFgFgEQgEgCgGgBIgegBIAABCIAFABIAUADQANAAAKgDQALgCAJgFQAIgFAIgIQAIgHAIgLIACACIgUAtgApUA2IgyABIAAgCQAJgCAHgEQAGgDAAgHIgBgDIgPgrIguAAIgPAoIgBADIgBACQAAAEADADIAFAFIANAFIAAACIg1AAIAAgCQAHgCAEgEQAFgDADgEIAFgJIAshrIABgDIgBgDIgCgEIAKgDIAJgDIAuB9QADAIAGAFQAFAFALACIAAACIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgCIAMgDQAFgCACgEQACgEABgGIAAgPIAAgmIhRAAIAAA1QABAGACAEQACAEAFACIANADIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgGIAAhnQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAAAqIBRAAIAAgbIAAgPQgBgFgCgFQgCgDgFgCIgNgDIAAgCIAzABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAPQAAAGACAEQADAEAEACIANADIAAACIgRgBg");
	this.shape_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C0000").s().p("AiDBMQgEgIgGgFQgGgEgIgDQgIgCgLAAIg0AAQgLAAgIACQgIADgGAEQgGAFgEAIQgEAHgDAKIgDAAIADgtQAIAAAFgDQAFgDADgEIAGgLIAGgOIAGgVIAIgtIgBgPQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBvABIAOgBIAAADIgMACQgEACgCAEQgCADgBAHIgBAPIABBVQAAAFADAEQACADAFACIAOACIABAYIACAVIgDAAQgDgKgEgHgAjZhNQgDAEAAAFIgCATQgCAXgEAQIgLAlIgFAMIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABADABIARABIA1gCIAAh/IgngBQgGABgEAEgAMUA3IAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgNACQgEACgDAEQgCADAAAHIgBAtIAcgFQAKABAJADQAJACAHAHQAHAFAFAIQAEAIAAAKQAAAKgEAIQgFAHgHAGQgIAEgJADQgJACgIAAgANLgTIgMAEIAAA8IALADIAKABQAIAAAGgBQAHgCAFgFQAFgEADgHQACgGAAgJQAAgHgCgGQgCgGgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgDIAMgCQAFgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgMACQgFACgCAEQgCADgBAHIgBAtIAdgFQAJABAJADQAJACAIAHQAHAFAEAIQAFAIAAAKQAAAKgFAIQgFAHgHAGQgIAEgIADQgJACgIAAgAGMgTIgNAEIAAA8IALADIAKABQAIAAAHgBQAGgCAGgFQAFgEACgHQADgGAAgJQAAgHgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgDIAMgCQAEgCADgDQACgFAAgGIAAhmQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAOABIAygCQAJAAAKACQAKACAJAFQAJAEAFAJQAGAHAAAMQAAALgGAHQgGAJgKACIAAABQAPAEAJAKQAEAFACAGQACAHAAAIQAAALgEAGQgEAHgIAEQgHAEgJACQgJABgKAAgAoRAqQAAACAEABIAHADIATABQAIABAHgDQAHgCAFgFQAKgJAAgSQAAgJgGgIQgGgHgHgGIgWADIgNgBQgHgBgGgDgAoHhTIgKADIAAA3QAGACAGABIAMACQAOAAAKgIQAJgIAAgOQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAgAL1A2IjWABIAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgDAEQgCADAAAHIgBByIAQABIAugBIgBhyQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAxABIARgBIAAADIgNACQgFACgCAEQgCADgBAHIgBAPIAABjIAQABIAQABIAegCIAAhjIAAgPQgBgHgCgDQgDgEgEgCIgMgCIAAgDIAPABIAhAAIARgBIAAADIgNACQgEACgDAEQgCADgBAHIAAAPIAABIIAAAPQABAGACAFQACADAFACIAMACIAAADIgOgBgAH/A2IgxABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAhIIAAgPQgBgHgCgDQgCgEgFgCIgMgCIAAgDIASABIAgAAIAOgBIAAADIgMACQgEACgCAEQgDADAAAHIgBAPIAABIIABAPQAAAGADAFQACADAFACIAMACIAAADIgQgBgAE9A2IgiAAIgRABIAAgDIAJgCIAIgCQADgCABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBdIgLAhIgBAAQgKgigOgfIgcg/IgBAAIgKBhIABANQABAFADAEQADADAFACQAFACAIAAIAAADIg/AAIAAgDIAJgCIAIgDIAGgGQADgDABgEIAPhvQgFgDgGgDIgNgDIAAgDIBBAAIAAADIgIADQgDADAAAFIABAHIAhBTIAWguQAKgXAIgYIgFgGIgHgCIAAgDIAtABIAOgBIAAADQgJABgGAEQgGAEAAAKIAQBjIADAHIAEAHQACACAEABQAFACAHABIAAADIgRgBgAApA2IgvABIAAgDIALgCQAFgCACgDQACgFABgGIAAgPIAAhTIhQBlIACAGQACAEACABIAHADIAKABIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAABeIBPhkQgCgGgFgDQgFgDgJAAIAAgDIAyABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBgAkxA2IhnAAIgNABIAAgDIANgCQAEgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIB7AAIABAnIgDABQgCgKgFgIQgFgGgGgEQgHgEgHgBIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgDQAJgGACgRIADAAIAAA+IgDAAQgCgHgDgGQgCgGgFgDQgEgEgGgBIgegBIAABEIAFABIAUABQANAAAKgCQALgCAJgFQAIgFAIgHQAIgIAIgKIACACIgUAsgApUA2IgyABIAAgDQAJgBAHgDQAGgEAAgGIgBgEIgPgqIguAAIgPAmIgBADIgBADQAAAEADADIAFAFIANAEIAAADIg1AAIAAgDQAHgCAEgCQAFgDADgFIAFgKIAshqIABgCIgBgEIgCgEIAKgCIAJgFIAuB9QADAJAGAFQAFAFALABIAAADIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAgnIhRAAIAAA2QABAGACAFQACADAFACIANACIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAAAqIBRAAIAAgbIAAgPQgBgHgCgDQgCgEgFgCIgNgCIAAgDIAzABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBg");
	this.shape_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 1 - копия: 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C0000").s().p("AiDBMQgEgIgGgFQgGgEgIgDQgIgCgLAAIg0AAQgLAAgIACQgIADgGAEQgGAFgEAIQgEAHgDAKIgDAAIADgtQAIAAAFgDQAFgDADgEIAGgLIAGgOIAGgVIAIgtIgBgPQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBvABIAOgBIAAADIgMACQgEACgCAEQgCADgBAHIgBAPIABBVQAAAFADAEQACADAFACIAOACIABAYIACAVIgDAAQgDgKgEgHgAjZhNQgDAEAAAFIgCATQgCAXgEAQIgLAlIgFAMIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACABADABIARABIA1gCIAAh/IgngBQgGABgEAEgAMUA3IAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgNACQgEACgDAEQgCADAAAHIgBAtIAcgFQAKABAJADQAJACAHAHQAHAFAFAIQAEAIAAAKQAAAKgEAIQgFAHgHAGQgIAEgJADQgJACgIAAgANLgTIgMAEIAAA8IALADIAKABQAIAAAGgBQAHgCAFgFQAFgEADgHQACgGAAgJQAAgHgCgGQgCgGgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgDIAMgCQAFgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgNgCIAAgDIBCAAIAAADIgMACQgFACgCAEQgCADgBAHIgBAtIAdgFQAJABAJADQAJACAIAHQAHAFAEAIQAFAIAAAKQAAAKgFAIQgFAHgHAGQgIAEgIADQgJACgIAAgAGMgTIgNAEIAAA8IALADIAKABQAIAAAHgBQAGgCAGgFQAFgEACgHQADgGAAgJQAAgHgDgGQgCgGgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgDIAMgCQAEgCADgDQACgFAAgGIAAhmQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAOABIAygCQAJAAAKACQAKACAJAFQAJAEAFAJQAGAHAAAMQAAALgGAHQgGAJgKACIAAABQAPAEAJAKQAEAFACAGQACAHAAAIQAAALgEAGQgEAHgIAEQgHAEgJACQgJABgKAAgAoRAqQAAACAEABIAHADIATABQAIABAHgDQAHgCAFgFQAKgJAAgSQAAgJgGgIQgGgHgHgGIgWADIgNgBQgHgBgGgDgAoHhTIgKADIAAA3QAGACAGABIAMACQAOAAAKgIQAJgIAAgOQAAgIgDgGQgDgGgFgEQgFgFgHgCQgHgCgHAAgAL1A2IjWABIAAgDIANgCQAFgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgDAEQgCADAAAHIgBByIAQABIAugBIgBhyQAAgHgDgDQgCgEgEgCIgNgCIAAgDIAxABIARgBIAAADIgNACQgFACgCAEQgCADgBAHIgBAPIAABjIAQABIAQABIAegCIAAhjIAAgPQgBgHgCgDQgDgEgEgCIgMgCIAAgDIAPABIAhAAIARgBIAAADIgNACQgEACgDAEQgCADgBAHIAAAPIAABIIAAAPQABAGACAFQACADAFACIAMACIAAADIgOgBgAH/A2IgxABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAhIIAAgPQgBgHgCgDQgCgEgFgCIgMgCIAAgDIASABIAgAAIAOgBIAAADIgMACQgEACgCAEQgDADAAAHIgBAPIAABIIABAPQAAAGADAFQACADAFACIAMACIAAADIgQgBgAE9A2IgiAAIgRABIAAgDIAJgCIAIgCQADgCABgEQACgDAAgGIAAgHIgQhiIgBAAIgnBdIgLAhIgBAAQgKgigOgfIgcg/IgBAAIgKBhIABANQABAFADAEQADADAFACQAFACAIAAIAAADIg/AAIAAgDIAJgCIAIgDIAGgGQADgDABgEIAPhvQgFgDgGgDIgNgDIAAgDIBBAAIAAADIgIADQgDADAAAFIABAHIAhBTIAWguQAKgXAIgYIgFgGIgHgCIAAgDIAtABIAOgBIAAADQgJABgGAEQgGAEAAAKIAQBjIADAHIAEAHQACACAEABQAFACAHABIAAADIgRgBgAApA2IgvABIAAgDIALgCQAFgCACgDQACgFABgGIAAgPIAAhTIhQBlIACAGQACAEACABIAHADIAKABIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAABeIBPhkQgCgGgFgDQgFgDgJAAIAAgDIAyABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBgAkxA2IhnAAIgNABIAAgDIANgCQAEgCACgDQACgFABgGIAAhmQgBgHgCgDQgCgEgFgCIgMgCIAAgDIB7AAIABAnIgDABQgCgKgFgIQgFgGgGgEQgHgEgHgBIgQgBIgfABIAAA3IARgBQAIAAAGgBQAGgBAEgDQAJgGACgRIADAAIAAA+IgDAAQgCgHgDgGQgCgGgFgDQgEgEgGgBIgegBIAABEIAFABIAUABQANAAAKgCQALgCAJgFQAIgFAIgHQAIgIAIgKIACACIgUAsgApUA2IgyABIAAgDQAJgBAHgDQAGgEAAgGIgBgEIgPgqIguAAIgPAmIgBADIgBADQAAAEADADIAFAFIANAEIAAADIg1AAIAAgDQAHgCAEgCQAFgDADgFIAFgKIAshqIABgCIgBgEIgCgEIAKgCIAJgFIAuB9QADAJAGAFQAFAFALABIAAADIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgDIAMgCQAFgCACgDQACgFABgGIAAgPIAAgnIhRAAIAAA2QABAGACAFQACADAFACIANACIAAADIhCAAIAAgDIANgCQAEgCACgDQADgFAAgGIAAhmQAAgHgDgDQgCgEgFgCIgMgCIAAgDIBBAAIAAADIgNACQgEACgCAEQgCADgBAHIAAAqIBRAAIAAgbIAAgPQgBgHgCgDQgCgEgFgCIgNgCIAAgDIAzABIAOgBIAAADIgMACQgFACgCAEQgCADAAAHIgBAPIAABIIABAPQAAAGACAFQADADAEACIANACIAAADIgRgBg");
	this.shape_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C0000").s().p("AiDBLQgEgHgGgFQgGgFgIgCQgIgCgLAAIg0AAQgLAAgIACQgIACgGAFQgGAFgEAHQgEAIgDAKIgDgBIADgsQAIAAAFgDQAFgDADgEIAGgMIAGgNIAGgWIAIgsIgBgQQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBvABIAOgBIAAACIgMADQgEACgCADQgCAFgBAFIgBAQIABBVQAAAGADADQACADAFABIAOADIABAYIACAUIgDABQgDgKgEgIgAjZhOQgDAFAAAEIgCAUQgCAYgEAQIgLAkIgFALIgBADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACACADgBIARABIA1gBIAAh/IgnAAQgGAAgEADgAMUA3IAAgCIANgDQAFgCACgEQACgEABgFIAAhoQgBgFgCgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgNADQgEACgDADQgCAFAAAFIgBAuIAcgEQAKAAAJACQAJADAHAGQAHAGAFAJQAEAHAAAKQAAALgEAHQgFAIgHAEQgIAFgJADQgJACgIAAgANLgTIgMAEIAAA8IALADIAKACQAIgBAGgCQAHgCAFgEQAFgEADgHQACgGAAgJQAAgHgCgHQgCgFgFgFQgEgFgGgDQgGgDgGAAgAFVA3IAAgCIAMgDQAFgCACgEQADgEAAgFIAAhoQAAgFgDgFQgCgDgFgCIgNgDIAAgCIBCAAIAAACIgMADQgFACgCADQgCAFgBAFIgBAuIAdgEQAJAAAJACQAJADAIAGQAHAGAEAJQAFAHAAAKQAAALgFAHQgFAIgHAEQgIAFgIADQgJACgIAAgAGMgTIgNAEIAAA8IALADIAKACQAIgBAHgCQAGgCAGgEQAFgEACgHQADgGAAgJQAAgHgDgHQgCgFgEgFQgEgFgGgDQgGgDgHAAgAo7A3IAAgCIAMgDQAEgCADgEQACgEAAgFIAAhoQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAOABIAygCQAJAAAKACQAKACAJAFQAJAFAFAHQAGAJAAAMQAAAJgGAJQgGAIgKADIAAAAQAPAFAJAJQAEAFACAHQACAGAAAIQAAAKgEAHQgEAHgIAEQgHAEgJABQgJACgKAAgAoRAqQAAACAEABIAHACIATADQAIAAAHgDQAHgCAFgEQAKgKAAgSQAAgKgGgGQgGgJgHgFIgWACIgNgBQgHAAgGgCgAoHhSIgKABIAAA3QAGADAGACIAMABQAOAAAKgIQAJgIAAgPQAAgHgDgGQgDgGgFgEQgFgEgHgDQgHgCgHAAgAL1A2IjWABIAAgCIANgDQAFgCACgEQACgEABgFIAAhoQgBgFgCgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgDADQgCAFAAAFIgBBzIAQABIAugBIgBhzQAAgFgDgFQgCgDgEgCIgNgDIAAgCIAxABIARgBIAAACIgNADQgFACgCADQgCAFgBAFIgBAPIAABkIAQABIAQAAIAegBIAAhkIAAgPQgBgFgCgFQgDgDgEgCIgMgDIAAgCIAPABIAhAAIARgBIAAACIgNADQgEACgDADQgCAFgBAFIAAAPIAABJIAAAQQABAFACAEQACAEAFACIAMADIAAACIgOgBgAH/A2IgxABIAAgCIAMgDQAFgCACgEQACgEABgFIAAgQIAAhJIAAgPQgBgFgCgFQgCgDgFgCIgMgDIAAgCIASABIAgAAIAOgBIAAACIgMADQgEACgCADQgDAFAAAFIgBAPIAABJIABAQQAAAFADAEQACAEAFACIAMADIAAACIgQgBgAE9A2IgiAAIgRABIAAgCIAJgCIAIgEQADgCABgDQACgDAAgGIAAgHIgQhiIgBAAIgnBdIgLAhIgBAAQgKgigOgeIgchAIgBAAIgKBiIABAMQABAFADAEQADAEAFABQAFACAIABIAAACIg/AAIAAgCIAJgCIAIgEIAGgFQADgEABgEIAPhvQgFgDgGgCIgNgFIAAgCIBBAAIAAACIgIAFQgDACAAAGIABAGIAhBTIAWgtQAKgYAIgZIgFgEIgHgEIAAgCIAtABIAOgBIAAACQgJACgGAEQgGAEAAALIAQBiIADAHIAEAGQACADAEACQAFACAHABIAAACIgRgBgAApA2IgvABIAAgCIALgDQAFgCACgEQACgEABgFIAAgQIAAhTIhQBkIACAIQACADACABIAHADIAKACIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgFIAAhoQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAABfIBPhjQgCgHgFgCQgFgDgJgCIAAgCIAyABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAQQAAAFACAEQADAEAEACIANADIAAACIgRgBgAkxA2IhnAAIgNABIAAgCIANgDQAEgCACgEQACgEABgFIAAhoQgBgFgCgFQgCgDgFgCIgMgDIAAgCIB7AAIABAnIgDABQgCgLgFgGQgFgHgGgEQgHgEgHgBIgQgBIgfABIAAA3IARAAQAIgBAGgBQAGgCAEgDQAJgFACgQIADAAIAAA+IgDAAQgCgIgDgHQgCgFgFgEQgEgCgGgBIgegBIAABCIAFABIAUACQANAAAKgCQALgCAJgFQAIgFAIgIQAIgHAIgKIACABIgUAtgApUA2IgyABIAAgCQAJgCAHgEQAGgDAAgHIgBgDIgPgrIguAAIgPAnIgBAEIgBACQAAAEADADIAFAFIANAFIAAACIg1AAIAAgCQAHgCAEgEQAFgDADgEIAFgKIAshqIABgDIgBgDIgCgEIAKgDIAJgDIAuB9QADAIAGAFQAFAFALACIAAACIgRgBgAqsgPIApAAIgTg4gAr3A2IgwABIAAgCIAMgDQAFgCACgEQACgEABgFIAAgQIAAgmIhRAAIAAA2QABAFACAEQACAEAFACIANADIAAACIhCAAIAAgCIANgDQAEgCACgEQADgEAAgFIAAhoQAAgFgDgFQgCgDgFgCIgMgDIAAgCIBBAAIAAACIgNADQgEACgCADQgCAFgBAFIAAAqIBRAAIAAgbIAAgPQgBgFgCgFQgCgDgFgCIgNgDIAAgCIAzABIAOgBIAAACIgMADQgFACgCADQgCAFAAAFIgBAPIAABJIABAQQAAAFACAEQADAEAEACIANADIAAACIgRgBg");
	this.shape_4.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-91,-9.3,182.1,20.2), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.red();
	this.instance.parent = this;
	this.instance.setTransform(-204,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-204,-153,410,310), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AozBoQjqgrAAg9QAAg8DqgrQDqgrFJgBQFKABDqArQDqArAAA8QAAA9jqArQjqAslKAAQlJAAjqgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-79.8,-14.7,159.6,29.5), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-155.5,0,155.5,0).s().p("A4SHvIAAvdMAwlAAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-155.5,-49.5,311.1,99.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-13.5,-40,27,80), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABEQQgeg7BDgLQBOAxhVAhQgGADgFAAQgMAAgHgPgAh4DdQgfg8BDgKQBPAwhVAiQgGACgFAAQgMAAgHgOgAjsCXQgfg7BEgLQBPAxhVAhQgGACgFAAQgMAAgIgOgABlCUQgfg7BDgLQBPAxhVAhQgGACgFAAQgMAAgHgOgAgeBhQgfg7BDgLQBOAxhUAhQgGACgFAAQgMAAgHgOgAlsBWQgfg8BEgLQBOAxhVAiQgGACgEAAQgNAAgHgOgADLAxQgfg6BEgLQBPAwhVAhQgGADgFAAQgMAAgIgPgAiMAVQgfg6BEgLQBOAwhUAhQgGADgFAAQgMAAgIgPgAA6gTQgfg7BEgLQBOAxhVAhQgGACgFAAQgMAAgHgOgAkOgXQgfg7BEgLQBOAxhVAhQgGADgFAAQgMAAgHgPgAEtgpQgfg8BDgKQBPAwhVAiQgGACgFAAQgMAAgHgOgAgnhcQgfg7BEgLQBNAxhTAhQgGADgFAAQgMAAgIgPgACnhsQgfg7BEgLQBOAxhVAhQgGADgFAAQgMAAgHgPgAi9iJQgfg7BEgLQBOAxhVAhQgGACgFAAQgMAAgHgOgAAxizQgfg8BEgKQBOAwhUAiQgGACgFAAQgMAAgIgOgAhFjXQgfg8BEgLQBNAxhUAiQgGACgEAAQgNAAgHgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-37.4,-28.6,74.9,57.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unit();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,11);

	this.instance_1 = new lib.unit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.5,16);

	this.instance_2 = new lib.unit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.5,23);

	this.instance_3 = new lib.unit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.5,29);

	this.instance_4 = new lib.unit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-42.5,-2);

	this.instance_5 = new lib.unit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-29.5,3);

	this.instance_6 = new lib.unit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-17.5,10);

	this.instance_7 = new lib.unit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-5.5,16);

	this.instance_8 = new lib.unit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-32.5,-13);

	this.instance_9 = new lib.unit();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-19.5,-8);

	this.instance_10 = new lib.unit();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-7.5,-1);

	this.instance_11 = new lib.unit();
	this.instance_11.parent = this;
	this.instance_11.setTransform(4.5,5);

	this.instance_12 = new lib.unit();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-22.5,-22);

	this.instance_13 = new lib.unit();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-9.5,-17);

	this.instance_14 = new lib.unit();
	this.instance_14.parent = this;
	this.instance_14.setTransform(2.5,-10);

	this.instance_15 = new lib.unit();
	this.instance_15.parent = this;
	this.instance_15.setTransform(14.5,-4);

	this.instance_16 = new lib.horse();
	this.instance_16.parent = this;
	this.instance_16.setTransform(15.5,-35);

	this.instance_17 = new lib.horse();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.5,-45);

	this.instance_18 = new lib.horse();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-17.5,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-52.5,-54,105,108), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-43.5,-22.5,87,45), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba();
	this.instance.parent = this;
	this.instance.setTransform(-72,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-72,-134.5,144,269), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lizo();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-25.5,-29,51,58), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.84,y:-8},4).to({scaleY:1,y:0},4).to({scaleY:0.84,y:-8},4).to({scaleY:1,y:0},4).to({rotation:10},6).to({rotation:-26.2},4).to({rotation:23},5).to({rotation:-26.2},5).to({rotation:23},5).to({rotation:0},6).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48.8,48.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.08,1.08);
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.08,scaleY:1.08,x:-119,y:-36},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-33,221,66);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-50.2,3.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:74.4,y:-241.9},5).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.2,35.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:82.4,y:-285.9},5).to({_off:true},1).wait(2));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.2,23.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:110.4,y:-261.9},5).to({_off:true},1).wait(4));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.2,15.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:134.4,y:-237.9},5).to({_off:true},1).wait(6));

	// Слой 1
	this.instance_4 = new lib.Символ32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:162.4,y:-221.9},5).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.5,5.6,7.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.379},6,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-153,410,310);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-79.8,-14.7,159.6,29.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-119.2,-36,238.9,71.7), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.92,y:10.5},6,cjs.Ease.get(-1)).to({scaleY:0.81,y:24.5},8,cjs.Ease.get(1)).to({scaleY:0.9,y:13.1},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-40,27,80);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,75.4,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.8,72.4,0.614,0.614,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.txt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-111.5,-32.5,217.1,120.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-37.4,-28.6,74.9,57.4), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(38.5,0,1,1,0,0,0,38.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:38.6,y:-4.8},14,cjs.Ease.get(-1)).to({regY:-0.1,rotation:10.5,x:38.5,y:-10.1},15,cjs.Ease.get(1)).to({rotation:5.1,x:38.6,y:-5},15,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:38.5,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-22.5,87,45);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(14.4,20.5,1,1,0,0,0,14.4,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.3,rotation:-1.5,y:21.2},19,cjs.Ease.get(-1)).to({regX:14.4,rotation:-3.2,x:14.5,y:22},20,cjs.Ease.get(1)).to({regX:14.3,regY:20.3,rotation:-1.5,x:14.4,y:21.4},20,cjs.Ease.get(-1)).to({regX:14.4,regY:20.2,rotation:0,y:20.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-28.7,51,58);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lizo.png
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(16,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// baba.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ruka.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-97.5,-140.2,195,280.7), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-82,-17,164,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-85.8,-20.7,174,44), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(0.4,-3.7);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:1.42,scaleY:1.78,x:0.5,y:-3.9,alpha:0.27},6,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.4,y:-3.7,alpha:0},6,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.42,scaleY:1.78,x:0.5,y:-3.9,alpha:0.27},6,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.4,y:-3.7,alpha:0},6,cjs.Ease.get(1)).wait(33));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:1.08},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-33,221,66);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(126.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(15.6,-33,221,66), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-39,-31,79,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-42.4,-33.6,88,70), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unit.png
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.9,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-91.3,-48,109.4,117.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.6},9,cjs.Ease.get(-1)).to({y:9.9},10,cjs.Ease.get(1)).to({y:4.9},10,cjs.Ease.get(-1)).to({y:-0.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-140.3,195,280.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,233.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-131.9,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-124.5,205.9,1,1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg.jpg
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-491,-276.1,982,561.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-97.5,-140.3,195,280.7), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// logo.png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-311,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:341.5,y:135.8,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:252.5,y:134.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-167.5,98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.9,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:98.9,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.5,93.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:49.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:79.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(113.1,92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:213.1,alpha:0},7).wait(1).to({x:113.1,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 15
	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.5,347.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:227.9},7,cjs.Ease.get(1)).wait(1).to({y:347.9},7,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_6 = new lib.Символ28();
	this.instance_6.parent = this;
	this.instance_6.setTransform(75.3,-83,1.575,1.575,0,0,0,0.1,-0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,regY:0,scaleX:1,scaleY:1,x:74.1,y:52.2,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.58,scaleY:1.58,x:75.3,y:-83,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 25
	this.instance_7 = new lib.Символ25();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.1,scaleX:0.66,scaleY:0.66,x:34,y:96.1},7).wait(1).to({regY:0,scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491,-323.9,982,704.8);


// stage content:
(lib.tr_640305 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// lizo.png
	this.main = new lib.Символ24();
	this.main.parent = this;
	this.main.setTransform(288,32.2);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117,-139.2,982,704.8);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/baba.png", id:"baba"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/horse.png", id:"horse"},
		{src:"images/lizo.png", id:"lizo"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mish.png", id:"mish"},
		{src:"images/red.png", id:"red"},
		{src:"images/ruka.png", id:"ruka"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/unit.png", id:"unit"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;