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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,714,402);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,66);


(lib.gra = function() {
	this.initialize(img.gra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,921,215);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,72);// helper functions:

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
	this.shape.graphics.f("#00A6E2").s().p("AHHCIIgQgHIgNgKQgGgGgEgGQgFgHgDgHIgEgRIgCgTIAChHIAEgRQADgIAFgGQAEgHAGgFIANgKIAQgHQAMgEAbgCQARAAAPAEQANADALAGQALAHAIAKQAIAKAFANQADAGgCAEQgCAEgHACIggALQgHABgDgBQgEgBgCgHQgEgJgIgFQgIgFgMAAQgIAAgGACQgHABgEAEQgEAEgCAGQgBAGAAAHIAAA3QAAAIABAFQACAGAEAEQAEAEAHACQAGACAIAAQANAAAHgFQAIgFAEgKQACgHAEgCQADgBAHACIAgAMQAHACACADQACAEgDAHQgFANgIAKQgIAKgLAGQgLAHgNADQgPADgRAAQgbgCgMgDgAoRCIIgQgHIgNgKQgGgGgFgGQgEgHgDgHIgFgRIgBgTIABhHIAFgRQADgIAEgGQAFgHAGgFIANgKIAQgHQALgEAcgCQARAAAOAEQAOADALAGQALAHAIAKQAIAKAFANQACAGgCAEQgCAEgGACIghALQgHABgDgBQgDgBgDgHQgEgJgHgFQgIgFgMAAQgJAAgGACQgGABgEAEQgEAEgCAGQgCAGAAAHIAAA3QAAAIACAFQACAGAEAEQAEAEAGACQAGACAJAAQAMAAAIgFQAIgFADgKQADgHADgCQAEgBAGACIAhAMQAGACACADQACAEgCAHQgFANgIAKQgIAKgLAGQgLAHgOADQgOADgRAAQgcgCgLgDgAFjCJQgMAAgEgDQgFgDgCgHIgHgVIhAAAIgHAVQgDAHgEADQgEADgLAAIggAAQgGAAgCgDQgCgDACgHIBFi9QACgGAEgCQADgCAHAAIAiAAQAHAAADACQAEACACAGIBFC9QACAGgCAEQgCADgHAAgAE4A3IgLgjQgGgTAAgQIgBgGIgDAAIgFApIgMAjIAmAAgAB9CJQgHAAgDgDQgDgDAAgHIAAg6QgNACgSAAQgbgCgKgEIgPgGQgGgEgFgFQgFgFgEgHIgGgOQgEgQAAgUIAAgwQAAgHABgCQADgDAHAAIAiAAQAHAAADADQADACAAAHIAAAwQAAAHACAFQACAFAEADQAFADAGACQAGACAIAAQAOAAAIgCIAAhJQAAgHADgCQADgDAHAAIAiAAQAHAAADADQACACAAAHIAAC7QAAAHgCADQgDADgHAAgAhHCJQgHAAgDgDQgDgDAAgHIAAgzIABgYIACgSIAIggIgCAAIgNAiQgEAJgLASIgqBHQgDAGgJAAIgkAAQgIAAgCgDQgDgDAAgHIAAi7QAAgHADgCQACgDAIAAIAiAAQAHAAACADQADACAAAHIAAA0QAAAXgCANQgCAOgHAXIACAAQALgbASgjIAphGQAEgGAIAAIAkAAQAIAAACADQADADAAAHIAAC7QAAAHgDADQgDADgHAAgAlxCJQgIAAgCgDQgDgDAAgHIAAi7QAAgHADgCQACgDAIAAIB9AAQAIAAACADQADACAAAHIAAAbQAAAHgDADQgCADgIAAIhPAAIAAAaIA/AAQAIAAADADQACADAAAHIAAAbQAAAHgCADQgDACgIAAIg/AAIAAAdIBSAAQAHAAADADQADADAAAHIAAAbQAAAHgDADQgDADgHAAgAiHhYQgKgCgHgFQgIgEgFgGQgGgHgDgIQgDgIAJgDIAWgIQAGgCACABQADABACAEQADAFAFADQAFACAGAAQAGAAAFgCQAEgDADgFQADgEACgBQACgBAFACIAYAIQAKADgEAIQgDAIgGAHQgFAGgIAEQgHAFgKACQgJACgMAAQgMAAgJgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-58.3,-14.1,116.7,28.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF9BpIgQgHIgNgKQgGgFgFgGQgEgHgDgIIgFgQIgBgTIABhIIAFgQQADgIAEgHQAFgGAGgFIANgKIAQgHQALgEAcgCQAPAAAYAGIAQAHQAHAEAGAGQAGAFAEAGQAFAHADAIIAFAQIABBIIgBATIgFAQQgDAIgFAHQgEAGgGAFQgGAGgHAEIgQAHQgYAGgPAAQgcgCgLgEgAGWg4QgGACgEAEQgFAEgCAFQgCAFAAAHIAAA7QAAAHACAFQACAFAFAEQAEAEAGACQAGACAIgBQAIABAGgCQAGgCAEgEQAEgEADgFQACgFAAgHIAAg7QAAgHgCgFQgDgFgEgEQgEgEgGgCQgGgCgIAAQgIAAgGACgAEBBqQgHAAgDgCQgCgDAAgHIAAgrQAAgQADgUQADgSAHgXIgEAAIgkBSQgFAJgKAAIgUAAQgGAAgDgCQgDgCgCgFIgSghQgGgMgNglIgDAAIAKArQADAUAAAOIAAArQAAAHgDADQgDACgHAAIgfAAQgHAAgDgCQgDgDAAgHIAAi7QAAgHADgDQADgDAHAAIAcAAQAIAAADACQAEABADAHIAyBgIAxhgQADgHADgBQADgCAIAAIAeAAQAHAAADADQADADAAAHIAAC7QAAAHgDADQgDACgHAAgAAPBqQgHAAgCgDQgDgCAAgHIAAg7IgHAAQgKAAgFAEQgFADgDAJIgSArQgEAHgFADQgFACgNAAIggAAQgIABgCgEQgBgDADgIIAZg0IAIgOQgIgEgFgGQgGgGgEgHQgEgHgCgJQgCgKAAgKQAAgRAGgOQAFgNAJgJQAKgKAOgFQAOgEARAAIBUAAQAIAAACACQADADAAAHIAAC7QAAAHgDACQgCADgIAAgAgrgwQgFAFAAAKQAAAJAFAFQAFAFAKAAIAfAAIAAgnIgfAAQgKAAgFAFgAklBqQgHAAgDgDQgDgCAAgHIAAi7QAAgHADgDQADgCAHAAIBTAAQASAAAOAEQAOAGAKAKQAKAJAGAOQAFAOAAARQAAASgFANQgFANgKAKQgKAJgPAGQgOAEgRAAIglAAIAAA0QAAAHgDACQgDADgHAAgAj2gJIAdAAQALAAAGgGQAGgGAAgKQAAgKgGgGQgGgGgLAAIgdAAgAl/BqQgHAAgCgDQgDgCAAgHIAAiTIg5AAIAACTQAAAHgDACQgCADgHAAIgiAAQgIAAgCgDQgDgCAAgHIAAi7QAAgHADgDQACgCAIAAICWAAQAHAAACACQADADAAAHIAAC7QAAAHgDACQgCADgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-51.2,-11.1,102.5,22.2), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBVIgNgGIgKgIIgJgJIgGgMIgDgNIgCgPIACg6IADgNIAGgMIAJgKIAKgIIANgFQAKgDAWgCQAMAAATAFIAMAFQAGAEAFAEIAIAKIAGAMIAEANIACA6IgCAPIgEANIgGAMIgIAJQgFAFgGADIgMAGQgTAFgMAAQgWgCgKgDgAgZgtQgFABgEAEQgDACgCAFQgBAEAAAGIAAAvQAAAGABAEQACAEADADQAEADAFACQAFABAGAAQAGAAAFgBQAEgCAEgDQADgDACgEQACgEAAgGIAAgvQAAgGgCgEQgCgFgDgCQgEgEgEgBQgFgBgGAAQgGAAgFABgAnwBVIgNgGQgGgDgFgFIgIgJQgEgGgCgGIgEgNIgBg6IABgPIAEgNQACgHAEgFIAIgKQAFgEAGgEIANgFQAJgDAWgCQAMAAAUAFIANAFQAGAEAEAEIAJAKIAGAMIAEANIABA6IgBAPIgEANIgGAMIgJAJQgEAFgGADIgNAGQgUAFgMAAQgWgCgJgDgAncgtQgFABgDAEQgEACgCAFQgBAEAAAGIAAAvQAAAGABAEQACAEAEADQADADAFACQAFABAGAAQAHAAAEgBQAFgCAEgDQADgDACgEQACgEAAgGIAAgvQAAgGgCgEQgCgFgDgCQgEgEgFgBQgEgBgHAAQgGAAgFABgAIyBWQgGAAgCgCQgCgCAAgGIAAiXQAAgGACgCQACgCAGAAIAcAAQAFAAACACQADACAAAGIAAApIAeAAQAOAAALAFQAMAEAIAHQAIAIAEAKQAFALAAAOQAAAOgFAMQgEALgIAIQgIAIgMAEQgMAEgOAAgAJYAsIAYAAQAIAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgIAAIgYAAgAHFBWQgGAAgCgCQgCgCAAgGIAAh3IgkAAQgGAAgCgCQgDgCAAgGIAAgWQAAgGADgCQACgCAGAAIB4AAQAGAAACACQACACAAAGIAAAWQAAAFgCADQgCACgGAAIgkAAIAAB3QAAAGgCACQgDACgFAAgAFrBWQgJAAgEgCQgDgCgCgGIgGgSIg0AAIgFASQgCAGgEACQgDACgJAAIgaAAQgEAAgDgCQgBgDACgFIA4iZQABgFADgCQADgBAFAAIAcAAQAFAAADABQADACACAFIA4CZQABAFgBADQgCACgFAAgAFJAUIgJgbQgFgQAAgNIgBgFIgCAAIgEAiIgKAbIAfAAgABaBWQgGAAgCgCQgCgCAAgGIAAiXQAAgGACgCQACgDAGAAIBIAAQAMAAAKAEQAKADAHAFQAHAHADAIQAEAIAAALQAAAYgRAMIAAABIAKAGIAIAJIAFAMQABAGAAAIQAAALgEAJQgEAJgIAGQgJAGgKAEQgLADgOAAgACAAvIAcAAQAIAAAEgEQAEgEAAgHQAAgHgEgDQgEgEgIAAIgcAAgACAgUIAXAAQAIAAAEgDQADgDAAgHQAAgHgDgDQgEgDgIAAIgXAAgAjLBWQgGAAgCgCQgCgCAAgGIAAiXQAAgGACgCQACgCAGAAIBdAAQAHAAACACQACACAAAGIAAAWQAAAFgCADQgCACgHAAIg3AAIAAB3QAAAGgCACQgCACgGAAgAlnBWQgGAAgDgCQgCgCAAgGIAAiXQAAgGACgCQADgCAGAAIBCAAQAPAAALAEQAMAEAIAIQAIAIAFALQAEALAAAOQAAAPgEAKQgFALgIAHQgIAIgLAEQgMAEgOAAIgeAAIAAAqQAAAGgCACQgCACgGAAgAlCgHIAYAAQAJAAAEgFQAFgFAAgIQAAgIgFgFQgEgFgJAAIgYAAgAp6BWQgGAAgCgCQgCgCAAgGIAAh3IgkAAQgGAAgCgCQgDgCAAgGIAAgWQAAgGADgCQACgCAGAAIB4AAQAGAAACACQACACAAAGIAAAWQAAAFgCADQgCACgGAAIgkAAIAAB3QAAAGgCACQgDACgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-69.1,-9,138.4,18), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFuBWQgFAAgDgCQgCgCAAgGIAAgpIABgUIAIgoIgCAAIgLAbQgDAIgJAPIghA5QgDAEgHAAIgdAAQgHAAgCgCQgCgCAAgGIAAiXQAAgFACgCQACgDAHAAIAbAAQAGAAACADQACACAAAFIAAAqQAAATgBALQgCALgGASIACAAQAIgWAPgcIAhg4QADgFAHAAIAdAAQAGAAACACQADADAAAFIAACXQAAAGgDACQgCACgGAAgADDBWQgFAAgDgCQgCgCAAgGIAAg3IgvAAIAAA3QAAAGgDACQgCACgFAAIgcAAQgGAAgCgCQgCgCAAgGIAAiXQAAgFACgDQACgCAGAAIAcAAQAFAAACACQADADAAAFIAAA2IAvAAIAAg2QAAgFACgDQACgCAGAAIAcAAQAFAAADACQACADAAAFIAACXQAAAGgCACQgDACgFAAgAAcBWQgGAAgCgCQgCgCAAgGIAAgvQgLACgNAAQgWgCgJgDQgGgCgFgDQgGgDgEgEIgHgKIgFgKQgEgNAAgRIAAgnQAAgFACgCQADgDAFAAIAcAAQAFAAADADQACACAAAFIAAAnQAAAGACAEQABAEAEADQADADAFABIALABQALAAAHgBIAAg8QAAgFACgCQACgDAGAAIAbAAQAGAAACADQACACAAAFIAACXQAAAGgCACQgCACgGAAgAhvBWQgJAAgEgCQgEgCgBgGIgGgRIg0AAIgGARQgCAGgDACQgEACgJAAIgZAAQgFAAgCgCQgBgCABgGIA4iYQACgFADgCQACgCAGAAIAcAAQAFAAADACQADACABAEIA4CZQACAFgCADQgCACgFAAgAiSAVIgJgcQgEgPgBgOIAAgFIgCAAIgFAiIgJAcIAeAAgAkpBWQgGAAgCgCQgDgCAAgGIAAg3IgvAAIAAA3QAAAGgCACQgCACgGAAIgbAAQgGAAgCgCQgDgCAAgGIAAiXQAAgFADgDQACgCAGAAIAbAAQAGAAACACQACADAAAFIAAA2IAvAAIAAg2QAAgFADgDQACgCAGAAIAbAAQAGAAACACQADADAAAFIAACXQAAAGgDACQgCACgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-40.4,-8.6,80.8,17.3), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANbB6IgSgIIgQgMQgGgGgFgIQgGgHgDgJIgGgUIgCgVIAChTIAGgTQADgJAGgHQAFgIAGgGQAHgHAJgFIASgIQANgEAggCQASAAAbAGIATAIQAIAFAHAHQAHAGAEAIQAGAHADAJIAGATIACBTIgCAVIgGAUQgDAJgGAHQgEAIgHAGQgHAGgIAGIgTAIQgbAGgSAAQgggCgNgEgAN4hAQgHABgEAFQgGAEgCAGQgDAGABAJIAABDQgBAJADAFQACAHAGAEQAEAEAHACQAHACAJAAQAJAAAHgCQAHgCAFgEQAFgEADgHQACgFAAgJIAAhDQAAgJgCgGQgDgGgFgEQgFgFgHgBQgHgDgJAAQgJAAgHADgAoRB6IgTgIIgPgMQgHgGgFgIQgFgHgDgJIgGgUIgBgVIABhTIAGgTQADgJAFgHQAFgIAHgGQAHgHAIgFIATgIQANgEAggCQATAAARAEQAPADAOAIQAMAHAJAMQAJALAHAPQACAIgCAEQgCAEgIADIglANQgJACgDgBQgEgCgDgIQgFgLgIgGQgJgGgOAAQgKAAgHADQgHABgFAFQgFAFgCAHQgCAGAAAKIAAA+QAAAJACAGQACAHAFAFQAFAEAHACQAHACAKAAQAOAAAJgFQAJgGAEgLQADgIAEgCQAEgCAIADIAlANQAIACACAEQACAFgCAHQgHAPgJAMQgJAMgMAHQgOAIgPADQgRAEgTAAQgggCgNgEgAhsCAQgEgCgEgIIgUgjQgEgHACgFQACgEAHgEQAJgFAGgGQAGgFAFgKQAGgKADgRQADgPgBgYIAAhPQABgIADgDQADgDAJAAICSAAQAJAAAEADQACADAAAIIAADYQAAAJgCACQgEAEgJAAIgnAAQgIAAgDgEQgEgCAAgJIAAipIgoAAIAAAgQgCAsgEASIgGAZQgEALgFAJQgKARgMALQgMALgRAIQgFADgEAAIgDAAgALLB7QgIAAgDgEQgEgCAAgJIAAhPIhDAAIAABPQAAAJgEACQgCAEgJAAIgmAAQgJAAgDgEQgDgCgBgJIAAjYQABgIADgDQADgEAJAAIAmAAQAJAAACAEQAEADAAAIIAABNIBDAAIAAhNQAAgIAEgDQACgEAJAAIAnAAQAJAAADAEQADADAAAIIAADYQAAAJgDACQgDAEgJAAgAGoB7QgJAAgDgEQgDgCAAgJIAAipIg0AAQgIAAgDgEQgDgDAAgIIAAggQAAgIADgDQADgDAIAAICrAAQAKAAADADQACADABAIIAAAgQgBAIgCADQgDAEgKAAIgyAAIAACpQAAAJgEACQgDAEgIAAgAEnB7QgNAAgFgDQgFgDgDgJIgHgYIhLAAIgJAYQgCAJgGADQgEADgMAAIglAAQgHAAgDgEQgBgDABgIIBQjaQACgHAFgDQADgCAIAAIAoAAQAIAAADACQAEADADAGIBRDbQACAHgCAEQgEAEgHAAgAD2AdIgNgoQgHgWAAgTIAAgHIgEAAIgHAwIgMAoIArAAgAjTB7QgJAAgCgEQgEgCAAgJIAAipIhBAAIAACpQAAAJgDACQgDAEgJAAIgnAAQgIAAgDgEQgEgCAAgJIAAjYQAAgIAEgDQADgDAIAAICtAAQAIAAAEADQADADAAAIIAADYQAAAJgDACQgEAEgIAAgAsFB7QgJAAgDgEQgDgCAAgJIAAjYQAAgIADgDQADgDAJAAICRAAQAJAAADADQADADAAAIIAAAgQAAAIgDADQgDAEgJAAIhcAAIAAAfIBKAAQAIAAAEADQACADAAAIIAAAeQAAAIgCAEQgEADgIAAIhKAAIAAAhIBfAAQAJAAACADQAEAEAAAIIAAAfQAAAJgEACQgCAEgJAAgAvjB7QgJAAgCgEQgEgCAAgIIAAjZQAAgIAEgDQACgEAKAAICZAAQAHAAADAEQADADAAAIIAAAbQAAAJgDADQgDADgHAAIhkAAIAAAfIAxAAQATAAAOAFQAQAFAKALQALAKAFAOQAGAPAAATQAAASgFAOQgGAPgKALQgMAKgPAGQgOAFgTAAgAutBCIAjAAQAMAAAHgFQAGgGAAgMQAAgLgGgGQgHgGgMAAIgjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-101.1,-12.8,202.2,25.7), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A6E2").s().p("AA7BpQgQgEgLgLQgLgKgGgOQgEgKgCgYIAAhAQAAgSAGgPQAGgOALgKQALgKAQgFQAKgEAagCQANAAAXAGQAQAFALAKQALAKAGAOQAFAPAAASIAABAQgBAYgEAKQgGAOgLAKQgLALgQAEQgXAGgNAAQgagCgKgEgABMgzQgHAFAAAMIAABFQAAALAHAGQAHAHAMgBQAMABAHgHQAHgGAAgLIAAhFQAAgMgHgFQgHgHgMAAQgMAAgHAHgAiGBpQgQgEgLgLQgLgKgGgOQgEgKgCgYIAAhAQAAgSAGgPQAGgOALgKQALgKAQgFQAKgEAagCQANAAAXAGQAQAFALAKQALAKAGAOQAFAPAAASIAABAQgBAYgEAKQgGAOgLAKQgLALgQAEQgXAGgNAAQgagCgKgEgAh1gzQgHAFAAAMIAABFQAAALAHAGQAHAHAMgBQAMABAHgHQAHgGAAgLIAAhFQAAgMgHgFQgHgHgMAAQgMAAgHAHgAlJBpIgPgGQgHgEgFgFQgGgFgEgHIgHgNQgEgKgCgYIAAg9QAAgMAGgWIAHgNQAEgHAGgFQAFgFAHgEIAPgHQALgDAagCQBCAAASAvQADAIgCADQgCADgHADIgcALQgHACgDgBQgDgCgEgHQgDgIgIgDQgHgDgMgBQgPABgHAGQgGAHAAAOIAAAFQANgDASAAQAVAAAQAFQAQADAKAJQAKAJAFAMQAFANAAARQAAARgFANQgGANgMAKQgLAIgQAFQgQAFgVAAQgagCgLgEgAk/AZIAAAMQAAAYAbgBQAPAAAHgEQAGgGAAgKQAAgJgGgFQgGgEgQAAQgRAAgKADgADcBqQgIAAgCgDQgDgCAAgHIAAgKIgLAAIAAgfIALAAIAAiSQAAgHADgDQACgCAIAAIBSAAQASAAAOAEQAPAGAKAKQAKAJAFAOQAGAOAAARQAAASgGANQgFANgKAKQgKAJgOAGQgOAEgSAAIglAAIAAALIAvAAIAAAfIgvAAIAAAKQAAAHgDACQgCADgHAAgAEKgJIAeAAQAKAAAGgGQAGgGAAgKQAAgKgGgGQgGgGgKAAIgeAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-37.9,-11.1,76,22.2), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBtQgEgBgDgHIgRgfQgEgGACgEQABgDAHgEQAIgFAEgEQAGgFAEgJQAGgIACgPQACgNAAgUIAAhFQAAgHADgCQADgDAHAAIB/AAQAHAAADADQADACAAAHIAAC7QAAAHgDADQgDADgHAAIgiAAQgHAAgDgDQgDgDAAgHIAAiTIgjAAIAAAcQgBAngDAPIgFAWQgEAJgFAIQgJAPgKAJQgKAJgPAIQgEACgDAAIgDAAgAD/BpQgIAAgCgDQgEgDAAgHIAAgzIABgYIADgRIAIghIgDAAIgMAiQgEAJgMASIgpBHQgDAGgKAAIgkAAQgHAAgDgDQgCgDAAgHIAAi7QAAgHACgCQADgDAHAAIAiAAQAHAAADADQADACAAAHIAAA0QAAAYgCANQgDANgGAXIACAAQAKgbATgjIAohGQAEgGAJAAIAkAAQAIAAACADQADADAAAHIAAC7QAAAHgDADQgDADgHAAgAilBpQgHAAgDgDQgDgDAAgHIAAgzIABgYIACgRIAJghIgDAAIgNAiQgEAJgLASIgpBHQgEAGgJAAIgkAAQgIAAgCgDQgDgDAAgHIAAi7QAAgHADgCQACgDAIAAIAiAAQAHAAACADQAEACAAAHIAAA0QAAAYgDANQgCANgHAXIADAAQAKgbASgjIAphGQAEgGAJAAIAkAAQAHAAADADQACADAAAHIAAC7QAAAHgCADQgEADgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-30.1,-10.9,60.2,21.8), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A6E2").s().p("ACaB6QgHAAgCgDQgCgCAAgHIAAgKQgtgHgNgiQgCgGACgEQACgEAGgCIAcgKQAGgDAEACQAEABADAGQADAIAIADQAHAEALAAQAPAAAHgEQAHgDAAgHQAAgHgHgEQgHgDgPgBQgjgFgOgHQgIgEgGgFQgGgEgEgHQgEgHgCgIQgCgIAAgKQAAgMADgKQAEgKAHgHQAHgIALgFQALgFAOgCIAAgKQAAgHACgCQACgDAHAAIAfAAQAHAAACADQADACAAAHIAAAKQAJACAHADQAIADAHAEQAGAFAFAGQAFAGAEAIQADAGgBAEQgCADgHADIgdANQgGADgDgCQgDgBgEgGQgEgIgGgEQgGgDgLAAQgNAAgGADQgGADAAAIQAAAGAIAEQAHADAQACIAXADIANADQAQAGAGAEQAMAKADAIQAGASAAAMQAAAMgDAKQgEAKgHAIQgIAIgLAFQgKAFgOADIAAAKQAAAHgDACQgDADgGAAgAg8BqQgQgFgLgLQgLgKgGgOQgEgKgCgXIAAhBQAAgSAGgOQAGgPALgKQALgKAQgFQAKgEAagCQANAAAWAGQAQAFALAKQALAKAGAPQAFAOAAASIAABBQgBAXgEAKQgGAOgLAKQgLALgQAFQgWAFgNAAQgagCgKgDgAgrgzQgHAGAAALIAABFQAAALAHAHQAHAGAMAAQAMAAAHgGQAGgHAAgLIAAhFQAAgLgGgGQgHgGgMAAQgMAAgHAGgAi5BrQgHAAgDgDQgDgDAAgHIAAh8IgUALQgGAEgFgBQgFgBgDgHIgOgZQgDgHABgDQABgEAHgEIA6ghQAJgFAJAAIASAAQAHAAADADQADACAAAHIAAC7QAAAHgDADQgDADgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-25.4,-12.1,50.8,24.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhC8QgGgCgGgMIgcgzQgHgLADgHQACgFALgHQAOgIAIgIQAJgIAIgPQAIgOAFgZQADgXAAgiIAAh1QAAgMAFgEQAFgFAMAAIDaAAQANAAAFAFQAEAEAAAMIAAE/QAAAMgEAEQgFAFgNAAIg5AAQgNAAgEgFQgFgEAAgMIAAj7Ig+AAIAAAwQgCBCgFAaIgKAlQgFAQgIANQgPAZgSARQgRAPgaANQgHAEgFAAIgFgBgApBC0IgbgMQgMgIgJgJQgLgKgHgLQgIgLgFgNIgIgdIgDgfIADh6IAIgcQAFgOAIgLQAHgLALgKQAJgJAMgIIAbgMQAVgFAugEQAZAAAqAJIAaAMQANAIAKAJQAKAKAIALQAIALAEAOIAJAcIACAfIgCB6IgJAdQgEANgIALQgIALgKAKQgKAJgNAIIgaAMQgqAJgZAAQgugEgVgFgAoWhfQgKACgHAHQgHAGgEAKQgDAIAAANIAABjQAAANADAIQAEAKAHAGQAHAHAKACQALAEANAAQANAAALgEQAKgCAIgHQAGgGAFgKQADgIAAgNIAAhjQAAgNgDgIQgFgKgGgGQgIgHgKgCQgLgEgNAAQgNAAgLAEgAOiC1QgNAAgEgFQgFgEgBgNIAAhXQAAgcACgNIAShUIgEAAIgWA5QgHAQgTAfIhGB4QgHAKgPAAIg9AAQgNAAgEgFQgFgEgBgMIAAk/QABgMAFgEQAEgFANAAIA5AAQANAAAEAFQAFAEAAAMIAABYQAAApgEAWQgDAXgMAnIAEAAQARguAfg8IBGh3QAHgKAOAAIA9AAQANAAAEAFQAFAFABAMIAAE/QgBAMgFAEQgEAFgNAAgAI6C1QgNAAgEgFQgEgEgBgMIAAhkQgWAEgeAAQgugEgTgGQgNgEgLgGQgLgHgIgJQgJgIgHgLIgKgYQgIgbAAgjIAAhSQAAgMADgEQAGgFALAAIA7AAQALAAAFAFQAGAEAAAMIAABSQAAAMADAIQADAKAIAFQAHAGAKADQALADAOAAQAXAAAOgEIAAh9QABgMAEgEQAEgFANAAIA5AAQANAAAEAFQAEAEABAMIAAE/QgBAMgEAEQgEAFgNAAgABvC1QgVAAALgVIAlhWIhsjpQgKgVAXAAIA8AAQAUAAAHADQAHAEAFAMIAyBxIAvhxQAEgMAGgEQAHgDASAAIA9AAQAUAAgJAVIiHFBQgEAMgHAEQgIADgRAAgAsVC1QgMAAgEgFQgFgEAAgMIAAj7IhgAAIAAD7QgBAMgFAEQgDAFgNAAIg5AAQgNAAgFgFQgEgEgBgMIAAk/QABgMAEgEQAFgFANAAID+AAQAMAAAFAFQAFAEAAAMIAAE/QAAAMgFAEQgFAFgMAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-100.8,-18.9,201.7,37.8), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-73,-27.1,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-73,-27.1,146,54.2), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gra();
	this.instance.parent = this;
	this.instance.setTransform(-460.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-460.5,-107.5,921,215), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-101.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-101.5,-33,203,66), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-357,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-357,-201,714,402), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(49.1,-2.3,0.891,0.698);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).to({scaleY:0.89,y:10,alpha:1},7).wait(62).to({regX:0.1,regY:0.1,scaleX:0.71,scaleY:0.71,rotation:9,x:37.5,y:13.9},2).to({scaleX:1.23,scaleY:1.23,rotation:-8,x:69.2,y:4.5,alpha:0},5).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55,-0.2,0.891,0.698);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({scaleY:0.89,y:12.7,alpha:1},7).wait(65).to({regX:-0.1,regY:0.1,scaleX:0.71,scaleY:0.71,rotation:9,x:-45,y:3},2).to({scaleX:1.23,scaleY:1.23,rotation:-8,x:-72.6,y:28.2,alpha:0},5).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.2,-22.5,0.891,0.698);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({scaleY:0.89,y:-15.7,alpha:1},7).wait(68).to({regX:0.1,regY:-0.1,scaleX:0.71,scaleY:0.71,rotation:9,x:32.9,y:-7.7},2).to({scaleX:1.23,scaleY:1.23,rotation:-8,x:50.7,y:-28.8,alpha:0},5).wait(1));

	// Символ 17
	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-63.6,-22.5,0.891,0.698,0,0,0,-0.1,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({scaleY:0.89,y:-15.9,alpha:1},7).wait(71).to({scaleX:0.71,scaleY:0.71,rotation:9,x:-48.1,y:-20.6},2).to({scaleX:1.23,scaleY:1.23,rotation:-8,x:-89.7,y:-9.2,alpha:0},5).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,14.9,1,0.754);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({scaleY:1,y:36.3,alpha:1},7).wait(56).to({regX:-0.1,regY:0.1,scaleX:0.83,scaleY:0.83,rotation:-15,x:7.9,y:29},2).to({scaleX:1.2,scaleY:1.2,rotation:7,x:-5.4,y:43.4,alpha:0},6).to({_off:true},1).wait(85));

	// Символ 15
	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(63.2,-8.4,1,0.754);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({scaleY:1,y:5.3,alpha:1},7).wait(58).to({scaleX:0.83,scaleY:0.83,rotation:-15,x:52.1,y:-9.6},2).to({scaleX:1.2,scaleY:1.2,rotation:7,x:74.5,y:15.5,alpha:0},6).to({_off:true},1).wait(85));

	// Символ 14
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-12.9,-8.3,1,0.754);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleY:1,y:5.5,alpha:1},7).wait(60).to({regX:-0.1,regY:0.1,scaleX:0.83,scaleY:0.83,rotation:-15,x:-9,y:7},2).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,rotation:7,x:-16.2,y:4.7,alpha:0},6).to({_off:true},1).wait(85));

	// Символ 13
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-75.7,-8.5,1,0.754);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({scaleY:1,y:5.2,alpha:1},7).wait(62).to({regX:-0.1,regY:0.1,scaleX:0.83,scaleY:0.83,rotation:-15,x:-59.6,y:20.3},2).to({regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:7,x:-91.2,y:-4.8,alpha:0},6).to({_off:true},1).wait(85));

	// Символ 12
	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.2,-36.2,1,0.754,0,0,0,0,-0.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:0,scaleY:1,y:-31.5,alpha:1},7).wait(64).to({regY:-0.2,scaleX:0.83,scaleY:0.83,rotation:-15,x:-6.4,y:-25.7},2).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:7,x:4.8,y:-37.5,alpha:0},6).to({_off:true},1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.6,-50.4,201.7,28.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-601.1},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.5,-107.5,921,215);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.055},9,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,alpha:0.109},10,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,alpha:0.055},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},9,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},10,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-33,203,66);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-117.2,alpha:1},49).to({x:-239.2},51).to({x:-356.4},49).to({x:-473.6,alpha:0},49).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-237,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-594,-201,951,402);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-33,203,66);


// stage content:
(lib.binarium240400_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(121.9,162.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.4,329);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(445.5,216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(357,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,200,1143,402);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/gra.png", id:"gra"},
		{src:"images/logo.png", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;