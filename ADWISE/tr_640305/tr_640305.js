(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,80);


(lib.atack = function() {
	this.initialize(img.atack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,116);


(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,269);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,982,552);


(lib.horse = function() {
	this.initialize(img.horse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,44);


(lib.krepost = function() {
	this.initialize(img.krepost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,17);


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


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,45);


(lib.sward = function() {
	this.initialize(img.sward);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,63);


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


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgMJeQhahAALhwQAbkQARkPQiTAChCiHQgfhAAUhGQAfhrBEhWQAug5BNgCQAxgBAwgDQDXgPAMDJQANDogcDtQgXDHgDDHQgCBgg8BHQguA2g1AAQgpAAgsggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-27.9,-63.8,55.9,127.6), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiRGUIAYluQi/hSBPjVQAihdA1hWQAfgyAmguQApgzBAAAQDvgggLDUQgCA1gGAzQgMBvAABxQADFQiSElQgRAggmACIgRAAQiyAAAMi4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-25.7,-58.8,51.4,117.7), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkQGFQgdh9AFiAQAIjnA4jdIADgMQhCh7CDhpQAzgqBDgGICagQQCmAbgYCHQAjA+AFBdQAVFjggFdQgSDLjBAPQgXACgVAAQjzAAg1jog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-29.8,-62.1,59.6,124.3), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABfJyQgtg7gDhOQgDh4ACh4QhSgIhigNIgVgDQACC6h3B8QgZAbgmgFQiugXgsizQgdhyAihyQANgsgOgsQhbkTBkj6QANggAKgkQAzi8DfAlQA8ALAvAoQAHgCAGgGQAmgnA1gKIAYgCQDcgsB3CeIAoA1QBABVBrA2QAtAXAFAzQAMCKhMB/QgoBBAEBPQANENgiEHQgKBHhGAZQg7AUgyAAQhwAAhLhig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-59.3,-72.3,118.7,144.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah5IQIgGgNQgngbgTgvQgyh6AvhWQg0hWAThsQAcidhchwQgaghAJgqQA3kgE1gyQD1AMgYDlQgCAagPAWQBfCbiDCPQgKALACAVQAgErgsEiQgEAegeAOQhGAjg6AAQhpAAhAh0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-30.5,-64.4,61.1,128.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sward();
	this.instance.parent = this;
	this.instance.setTransform(-25,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-25,-31.5,50,63), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3,1,1).p("AHyAAIvjAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#01FE00").ss(3,1,1).p("AnwAAIPhAA");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#02FD00").ss(3,1,1).p("AnuAAIPdAA");
	this.shape_2.setTransform(-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#02FD00").ss(3,1,1).p("AnsAAIPZAA");
	this.shape_3.setTransform(-0.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#03FC00").ss(3,1,1).p("AnrAAIPXAA");
	this.shape_4.setTransform(-0.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#04FB00").ss(3,1,1).p("AnpAAIPTAA");
	this.shape_5.setTransform(-0.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#05FA00").ss(3,1,1).p("AnoAAIPRAA");
	this.shape_6.setTransform(-0.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#06F900").ss(3,1,1).p("AnmAAIPNAA");
	this.shape_7.setTransform(-1.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#07F800").ss(3,1,1).p("AnlAAIPLAA");
	this.shape_8.setTransform(-1.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#07F800").ss(3,1,1).p("AnjAAIPHAA");
	this.shape_9.setTransform(-1.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#08F700").ss(3,1,1).p("AniAAIPFAA");
	this.shape_10.setTransform(-1.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#09F600").ss(3,1,1).p("AngAAIPBAA");
	this.shape_11.setTransform(-1.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0AF500").ss(3,1,1).p("AnfAAIO/AA");
	this.shape_12.setTransform(-1.8,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0BF400").ss(3,1,1).p("AndAAIO7AA");
	this.shape_13.setTransform(-2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0CF300").ss(3,1,1).p("AnbAAIO3AA");
	this.shape_14.setTransform(-2.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0CF300").ss(3,1,1).p("AnaAAIO1AA");
	this.shape_15.setTransform(-2.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0DF200").ss(3,1,1).p("AnYAAIOxAA");
	this.shape_16.setTransform(-2.5,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0EF100").ss(3,1,1).p("AnXAAIOvAA");
	this.shape_17.setTransform(-2.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0FF000").ss(3,1,1).p("AnVAAIOrAA");
	this.shape_18.setTransform(-2.8,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#10EF00").ss(3,1,1).p("AnTAAIOnAA");
	this.shape_19.setTransform(-2.9,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#11EE00").ss(3,1,1).p("AnSAAIOlAA");
	this.shape_20.setTransform(-3.1,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#11EE00").ss(3,1,1).p("AnRAAIOjAA");
	this.shape_21.setTransform(-3.2,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#12ED00").ss(3,1,1).p("AnPAAIOfAA");
	this.shape_22.setTransform(-3.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#13EC00").ss(3,1,1).p("AnOAAIOdAA");
	this.shape_23.setTransform(-3.5,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#14EB00").ss(3,1,1).p("AnMAAIOZAA");
	this.shape_24.setTransform(-3.7,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#15EA00").ss(3,1,1).p("AnKAAIOVAA");
	this.shape_25.setTransform(-3.9,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#15EA00").ss(3,1,1).p("AnJAAIOTAA");
	this.shape_26.setTransform(-4,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#16E900").ss(3,1,1).p("AnHAAIOPAA");
	this.shape_27.setTransform(-4.2,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#17E800").ss(3,1,1).p("AnGAAIONAA");
	this.shape_28.setTransform(-4.3,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#18E700").ss(3,1,1).p("AnEAAIOJAA");
	this.shape_29.setTransform(-4.5,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#19E600").ss(3,1,1).p("AnDAAIOHAA");
	this.shape_30.setTransform(-4.6,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1AE500").ss(3,1,1).p("AnBAAIODAA");
	this.shape_31.setTransform(-4.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1AE500").ss(3,1,1).p("Am/AAIN/AA");
	this.shape_32.setTransform(-4.9,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1BE400").ss(3,1,1).p("Am+AAIN9AA");
	this.shape_33.setTransform(-5.1,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1CE300").ss(3,1,1).p("Am9AAIN7AA");
	this.shape_34.setTransform(-5.2,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1DE200").ss(3,1,1).p("Am7AAIN3AA");
	this.shape_35.setTransform(-5.4,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1EE100").ss(3,1,1).p("Am5AAINzAA");
	this.shape_36.setTransform(-5.6,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1FE000").ss(3,1,1).p("Am4AAINxAA");
	this.shape_37.setTransform(-5.7,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1FE000").ss(3,1,1).p("Am2AAINtAA");
	this.shape_38.setTransform(-5.9,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#20DF00").ss(3,1,1).p("Am1AAINrAA");
	this.shape_39.setTransform(-6,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#21DE00").ss(3,1,1).p("AmzAAINnAA");
	this.shape_40.setTransform(-6.2,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#22DD00").ss(3,1,1).p("AmyAAINlAA");
	this.shape_41.setTransform(-6.3,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#23DC00").ss(3,1,1).p("AmwAAINhAA");
	this.shape_42.setTransform(-6.5,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#23DC00").ss(3,1,1).p("AmvAAINfAA");
	this.shape_43.setTransform(-6.6,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#24DB00").ss(3,1,1).p("AmtAAINbAA");
	this.shape_44.setTransform(-6.8,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#25DA00").ss(3,1,1).p("AmrAAINXAA");
	this.shape_45.setTransform(-6.9,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#26D900").ss(3,1,1).p("AmqAAINVAA");
	this.shape_46.setTransform(-7.1,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#27D800").ss(3,1,1).p("AmoAAINRAA");
	this.shape_47.setTransform(-7.3,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#28D700").ss(3,1,1).p("AmnAAINPAA");
	this.shape_48.setTransform(-7.4,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#28D700").ss(3,1,1).p("AmlAAINLAA");
	this.shape_49.setTransform(-7.6,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#29D600").ss(3,1,1).p("AmkAAINJAA");
	this.shape_50.setTransform(-7.7,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#2AD500").ss(3,1,1).p("AmiAAINFAA");
	this.shape_51.setTransform(-7.9,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#2BD400").ss(3,1,1).p("AmhAAINDAA");
	this.shape_52.setTransform(-8,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#2CD300").ss(3,1,1).p("AmfAAIM/AA");
	this.shape_53.setTransform(-8.2,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#2DD200").ss(3,1,1).p("AmeAAIM9AA");
	this.shape_54.setTransform(-8.3,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#2DD200").ss(3,1,1).p("AmcAAIM5AA");
	this.shape_55.setTransform(-8.5,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#2ED100").ss(3,1,1).p("AmaAAIM1AA");
	this.shape_56.setTransform(-8.7,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#2FD000").ss(3,1,1).p("AmZAAIMzAA");
	this.shape_57.setTransform(-8.8,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#30CF00").ss(3,1,1).p("AmXAAIMvAA");
	this.shape_58.setTransform(-9,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#31CE00").ss(3,1,1).p("AmWAAIMtAA");
	this.shape_59.setTransform(-9.1,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#32CD00").ss(3,1,1).p("AmUAAIMpAA");
	this.shape_60.setTransform(-9.3,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#32CD00").ss(3,1,1).p("AmTAAIMnAA");
	this.shape_61.setTransform(-9.4,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#33CC00").ss(3,1,1).p("AmRAAIMjAA");
	this.shape_62.setTransform(-9.6,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#34CB00").ss(3,1,1).p("AmQAAIMhAA");
	this.shape_63.setTransform(-9.7,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#35CA00").ss(3,1,1).p("AmOAAIMdAA");
	this.shape_64.setTransform(-9.9,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#36C900").ss(3,1,1).p("AmNAAIMbAA");
	this.shape_65.setTransform(-10,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#36C900").ss(3,1,1).p("AmLAAIMXAA");
	this.shape_66.setTransform(-10.2,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#37C800").ss(3,1,1).p("AmJAAIMTAA");
	this.shape_67.setTransform(-10.4,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#38C700").ss(3,1,1).p("AmIAAIMRAA");
	this.shape_68.setTransform(-10.5,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#39C600").ss(3,1,1).p("AmGAAIMNAA");
	this.shape_69.setTransform(-10.7,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#3AC500").ss(3,1,1).p("AmFAAIMLAA");
	this.shape_70.setTransform(-10.8,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#3BC400").ss(3,1,1).p("AmDAAIMHAA");
	this.shape_71.setTransform(-11,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#3BC400").ss(3,1,1).p("AmCAAIMFAA");
	this.shape_72.setTransform(-11.1,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#3CC300").ss(3,1,1).p("AmAAAIMBAA");
	this.shape_73.setTransform(-11.3,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#3DC200").ss(3,1,1).p("Al+AAIL9AA");
	this.shape_74.setTransform(-11.4,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#3EC100").ss(3,1,1).p("Al9AAIL7AA");
	this.shape_75.setTransform(-11.6,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#3FC000").ss(3,1,1).p("Al8AAIL5AA");
	this.shape_76.setTransform(-11.7,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#40BF00").ss(3,1,1).p("Al6AAIL1AA");
	this.shape_77.setTransform(-11.9,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#40BF00").ss(3,1,1).p("Al4AAILxAA");
	this.shape_78.setTransform(-12.1,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#41BE00").ss(3,1,1).p("Al3AAILvAA");
	this.shape_79.setTransform(-12.2,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#42BD00").ss(3,1,1).p("Al1AAILrAA");
	this.shape_80.setTransform(-12.4,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#43BC00").ss(3,1,1).p("Al0AAILpAA");
	this.shape_81.setTransform(-12.5,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#44BB00").ss(3,1,1).p("AlyAAILlAA");
	this.shape_82.setTransform(-12.7,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#44BB00").ss(3,1,1).p("AlxAAILjAA");
	this.shape_83.setTransform(-12.8,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#45BA00").ss(3,1,1).p("AlvAAILfAA");
	this.shape_84.setTransform(-13,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#46B900").ss(3,1,1).p("AluAAILdAA");
	this.shape_85.setTransform(-13.1,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#47B800").ss(3,1,1).p("AlsAAILZAA");
	this.shape_86.setTransform(-13.3,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#48B700").ss(3,1,1).p("AlqAAILVAA");
	this.shape_87.setTransform(-13.4,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#49B600").ss(3,1,1).p("AlpAAILTAA");
	this.shape_88.setTransform(-13.6,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#49B600").ss(3,1,1).p("AlnAAILPAA");
	this.shape_89.setTransform(-13.8,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#4AB500").ss(3,1,1).p("AlmAAILNAA");
	this.shape_90.setTransform(-13.9,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#4BB400").ss(3,1,1).p("AlkAAILJAA");
	this.shape_91.setTransform(-14.1,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#4CB300").ss(3,1,1).p("AljAAILHAA");
	this.shape_92.setTransform(-14.2,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#4DB200").ss(3,1,1).p("AlhAAILDAA");
	this.shape_93.setTransform(-14.4,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#4EB100").ss(3,1,1).p("AlgAAILBAA");
	this.shape_94.setTransform(-14.5,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#4EB100").ss(3,1,1).p("AleAAIK9AA");
	this.shape_95.setTransform(-14.7,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#4FB000").ss(3,1,1).p("AldAAIK7AA");
	this.shape_96.setTransform(-14.8,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#50AF00").ss(3,1,1).p("AlbAAIK3AA");
	this.shape_97.setTransform(-15,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#51AE00").ss(3,1,1).p("AlaAAIK1AA");
	this.shape_98.setTransform(-15.1,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#52AD00").ss(3,1,1).p("AlYAAIKxAA");
	this.shape_99.setTransform(-15.3,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#53AC00").ss(3,1,1).p("AlWAAIKtAA");
	this.shape_100.setTransform(-15.5,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#53AC00").ss(3,1,1).p("AlVAAIKrAA");
	this.shape_101.setTransform(-15.6,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#54AB00").ss(3,1,1).p("AlTAAIKnAA");
	this.shape_102.setTransform(-15.8,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#55AA00").ss(3,1,1).p("AlSAAIKlAA");
	this.shape_103.setTransform(-15.9,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#56A900").ss(3,1,1).p("AlQAAIKhAA");
	this.shape_104.setTransform(-16.1,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#57A800").ss(3,1,1).p("AlPAAIKfAA");
	this.shape_105.setTransform(-16.2,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#57A800").ss(3,1,1).p("AlNAAIKbAA");
	this.shape_106.setTransform(-16.4,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#58A700").ss(3,1,1).p("AlMAAIKZAA");
	this.shape_107.setTransform(-16.5,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#59A600").ss(3,1,1).p("AlKAAIKVAA");
	this.shape_108.setTransform(-16.7,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#5AA500").ss(3,1,1).p("AlJAAIKTAA");
	this.shape_109.setTransform(-16.8,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5BA400").ss(3,1,1).p("AlHAAIKPAA");
	this.shape_110.setTransform(-17,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#5CA300").ss(3,1,1).p("AlFAAIKLAA");
	this.shape_111.setTransform(-17.2,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#5CA300").ss(3,1,1).p("AlEAAIKJAA");
	this.shape_112.setTransform(-17.3,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#5DA200").ss(3,1,1).p("AlCAAIKFAA");
	this.shape_113.setTransform(-17.5,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#5EA100").ss(3,1,1).p("AlBAAIKDAA");
	this.shape_114.setTransform(-17.6,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#5FA000").ss(3,1,1).p("Ak/AAIJ/AA");
	this.shape_115.setTransform(-17.8,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#609F00").ss(3,1,1).p("Ak+AAIJ9AA");
	this.shape_116.setTransform(-17.9,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#619E00").ss(3,1,1).p("Ak8AAIJ5AA");
	this.shape_117.setTransform(-18.1,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#619E00").ss(3,1,1).p("Ak7AAIJ3AA");
	this.shape_118.setTransform(-18.2,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#629D00").ss(3,1,1).p("Ak5AAIJzAA");
	this.shape_119.setTransform(-18.4,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#639C00").ss(3,1,1).p("Ak3AAIJvAA");
	this.shape_120.setTransform(-18.6,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#649B00").ss(3,1,1).p("Ak2AAIJtAA");
	this.shape_121.setTransform(-18.7,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#659A00").ss(3,1,1).p("Ak0AAIJpAA");
	this.shape_122.setTransform(-18.9,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#669900").ss(3,1,1).p("AkzAAIJnAA");
	this.shape_123.setTransform(-19,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#669900").ss(3,1,1).p("AkxAAIJjAA");
	this.shape_124.setTransform(-19.2,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#679800").ss(3,1,1).p("AkwAAIJhAA");
	this.shape_125.setTransform(-19.3,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#689700").ss(3,1,1).p("AkuAAIJdAA");
	this.shape_126.setTransform(-19.5,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#699600").ss(3,1,1).p("AktAAIJbAA");
	this.shape_127.setTransform(-19.6,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#6A9500").ss(3,1,1).p("AkrAAIJXAA");
	this.shape_128.setTransform(-19.8,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#6A9500").ss(3,1,1).p("AkqAAIJVAA");
	this.shape_129.setTransform(-19.9,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#6B9400").ss(3,1,1).p("AkoAAIJRAA");
	this.shape_130.setTransform(-20.1,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#6C9300").ss(3,1,1).p("AkmAAIJNAA");
	this.shape_131.setTransform(-20.3,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#6D9200").ss(3,1,1).p("AklAAIJLAA");
	this.shape_132.setTransform(-20.4,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#6E9100").ss(3,1,1).p("AkjAAIJHAA");
	this.shape_133.setTransform(-20.6,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#6F9000").ss(3,1,1).p("AkiAAIJFAA");
	this.shape_134.setTransform(-20.7,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#6F9000").ss(3,1,1).p("AkgAAIJBAA");
	this.shape_135.setTransform(-20.9,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#708F00").ss(3,1,1).p("AkfAAII+AA");
	this.shape_136.setTransform(-21,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#718E00").ss(3,1,1).p("AkdAAII7AA");
	this.shape_137.setTransform(-21.2,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#728D00").ss(3,1,1).p("AkcAAII4AA");
	this.shape_138.setTransform(-21.3,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#738C00").ss(3,1,1).p("AkaAAII1AA");
	this.shape_139.setTransform(-21.5,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#748B00").ss(3,1,1).p("AkZAAIIzAA");
	this.shape_140.setTransform(-21.6,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#748B00").ss(3,1,1).p("AkXAAIIvAA");
	this.shape_141.setTransform(-21.8,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#758A00").ss(3,1,1).p("AkVAAIIrAA");
	this.shape_142.setTransform(-22,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#768900").ss(3,1,1).p("AkUAAIIpAA");
	this.shape_143.setTransform(-22.1,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#778800").ss(3,1,1).p("AkSAAIIlAA");
	this.shape_144.setTransform(-22.3,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#788700").ss(3,1,1).p("AkRAAIIjAA");
	this.shape_145.setTransform(-22.4,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#788700").ss(3,1,1).p("AkPAAIIfAA");
	this.shape_146.setTransform(-22.6,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#798600").ss(3,1,1).p("AkOAAIIdAA");
	this.shape_147.setTransform(-22.7,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#7A8500").ss(3,1,1).p("AkMAAIIZAA");
	this.shape_148.setTransform(-22.9,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#7B8400").ss(3,1,1).p("AkLAAIIWAA");
	this.shape_149.setTransform(-23,0);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#7C8300").ss(3,1,1).p("AkJAAIITAA");
	this.shape_150.setTransform(-23.2,0);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#7D8200").ss(3,1,1).p("AkIAAIIRAA");
	this.shape_151.setTransform(-23.3,0);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#7D8200").ss(3,1,1).p("AkGAAIINAA");
	this.shape_152.setTransform(-23.5,0);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#7E8100").ss(3,1,1).p("AkEAAIIJAA");
	this.shape_153.setTransform(-23.7,0);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#7F8000").ss(3,1,1).p("AkDAAIIHAA");
	this.shape_154.setTransform(-23.8,0);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#807F00").ss(3,1,1).p("AkBAAIIDAA");
	this.shape_155.setTransform(-24,0);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#817E00").ss(3,1,1).p("AkAAAIIBAA");
	this.shape_156.setTransform(-24.1,0);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#827D00").ss(3,1,1).p("Aj+AAIH9AA");
	this.shape_157.setTransform(-24.3,0);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#827D00").ss(3,1,1).p("Aj8AAIH5AA");
	this.shape_158.setTransform(-24.4,0);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#837C00").ss(3,1,1).p("Aj7AAIH3AA");
	this.shape_159.setTransform(-24.6,0);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#847B00").ss(3,1,1).p("Aj5AAIH0AA");
	this.shape_160.setTransform(-24.7,0);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#857A00").ss(3,1,1).p("Aj4AAIHxAA");
	this.shape_161.setTransform(-24.9,0);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#867900").ss(3,1,1).p("Aj3AAIHuAA");
	this.shape_162.setTransform(-25,0);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#877800").ss(3,1,1).p("Aj1AAIHrAA");
	this.shape_163.setTransform(-25.2,0);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#877800").ss(3,1,1).p("AjzAAIHnAA");
	this.shape_164.setTransform(-25.4,0);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#887700").ss(3,1,1).p("AjyAAIHlAA");
	this.shape_165.setTransform(-25.5,0);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#897600").ss(3,1,1).p("AjwAAIHhAA");
	this.shape_166.setTransform(-25.7,0);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#8A7500").ss(3,1,1).p("AjvAAIHfAA");
	this.shape_167.setTransform(-25.8,0);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#8B7400").ss(3,1,1).p("AjtAAIHbAA");
	this.shape_168.setTransform(-26,0);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#8B7400").ss(3,1,1).p("AjsAAIHZAA");
	this.shape_169.setTransform(-26.1,0);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#8C7300").ss(3,1,1).p("AjqAAIHVAA");
	this.shape_170.setTransform(-26.3,0);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#8D7200").ss(3,1,1).p("AjoAAIHRAA");
	this.shape_171.setTransform(-26.4,0);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#8E7100").ss(3,1,1).p("AjnAAIHPAA");
	this.shape_172.setTransform(-26.6,0);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#8F7000").ss(3,1,1).p("AjlAAIHMAA");
	this.shape_173.setTransform(-26.7,0);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#906F00").ss(3,1,1).p("AjkAAIHJAA");
	this.shape_174.setTransform(-26.9,0);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#906F00").ss(3,1,1).p("AjiAAIHFAA");
	this.shape_175.setTransform(-27.1,0);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#916E00").ss(3,1,1).p("AjhAAIHDAA");
	this.shape_176.setTransform(-27.2,0);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#926D00").ss(3,1,1).p("AjfAAIG/AA");
	this.shape_177.setTransform(-27.4,0);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#936C00").ss(3,1,1).p("AjeAAIG9AA");
	this.shape_178.setTransform(-27.5,0);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#946B00").ss(3,1,1).p("AjcAAIG5AA");
	this.shape_179.setTransform(-27.7,0);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#956A00").ss(3,1,1).p("AjbAAIG2AA");
	this.shape_180.setTransform(-27.8,0);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#956A00").ss(3,1,1).p("AjZAAIGzAA");
	this.shape_181.setTransform(-28,0);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#966900").ss(3,1,1).p("AjYAAIGxAA");
	this.shape_182.setTransform(-28.1,0);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#976800").ss(3,1,1).p("AjWAAIGtAA");
	this.shape_183.setTransform(-28.3,0);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#986700").ss(3,1,1).p("AjUAAIGpAA");
	this.shape_184.setTransform(-28.5,0);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#996600").ss(3,1,1).p("AjTAAIGnAA");
	this.shape_185.setTransform(-28.6,0);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#996600").ss(3,1,1).p("AjRAAIGjAA");
	this.shape_186.setTransform(-28.8,0);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#9A6500").ss(3,1,1).p("AjQAAIGhAA");
	this.shape_187.setTransform(-28.9,0);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#9B6400").ss(3,1,1).p("AjOAAIGdAA");
	this.shape_188.setTransform(-29.1,0);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#9C6300").ss(3,1,1).p("AjNAAIGbAA");
	this.shape_189.setTransform(-29.2,0);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#9D6200").ss(3,1,1).p("AjLAAIGXAA");
	this.shape_190.setTransform(-29.4,0);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#9E6100").ss(3,1,1).p("AjKAAIGUAA");
	this.shape_191.setTransform(-29.5,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#9E6100").ss(3,1,1).p("AjIAAIGRAA");
	this.shape_192.setTransform(-29.7,0);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#9F6000").ss(3,1,1).p("AjHAAIGOAA");
	this.shape_193.setTransform(-29.8,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#A05F00").ss(3,1,1).p("AjFAAIGLAA");
	this.shape_194.setTransform(-30,0);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#A15E00").ss(3,1,1).p("AjDAAIGHAA");
	this.shape_195.setTransform(-30.2,0);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#A25D00").ss(3,1,1).p("AjCAAIGFAA");
	this.shape_196.setTransform(-30.3,0);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#A35C00").ss(3,1,1).p("AjAAAIGBAA");
	this.shape_197.setTransform(-30.5,0);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#A35C00").ss(3,1,1).p("Ai/AAIF/AA");
	this.shape_198.setTransform(-30.6,0);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#A45B00").ss(3,1,1).p("Ai9AAIF7AA");
	this.shape_199.setTransform(-30.8,0);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#A55A00").ss(3,1,1).p("Ai7AAIF4AA");
	this.shape_200.setTransform(-30.9,0);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#A65900").ss(3,1,1).p("Ai6AAIF1AA");
	this.shape_201.setTransform(-31.1,0);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#A75800").ss(3,1,1).p("Ai4AAIFyAA");
	this.shape_202.setTransform(-31.2,0);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#A85700").ss(3,1,1).p("Ai3AAIFvAA");
	this.shape_203.setTransform(-31.4,0);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#A85700").ss(3,1,1).p("Ai2AAIFsAA");
	this.shape_204.setTransform(-31.5,0);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#A95600").ss(3,1,1).p("Ai0AAIFpAA");
	this.shape_205.setTransform(-31.7,0);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#AA5500").ss(3,1,1).p("AiyAAIFlAA");
	this.shape_206.setTransform(-31.9,0);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#AB5400").ss(3,1,1).p("AixAAIFjAA");
	this.shape_207.setTransform(-32,0);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#AC5300").ss(3,1,1).p("AivAAIFfAA");
	this.shape_208.setTransform(-32.2,0);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#AC5300").ss(3,1,1).p("AiuAAIFdAA");
	this.shape_209.setTransform(-32.3,0);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#AD5200").ss(3,1,1).p("AisAAIFZAA");
	this.shape_210.setTransform(-32.5,0);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#AE5100").ss(3,1,1).p("AirAAIFXAA");
	this.shape_211.setTransform(-32.6,0);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#AF5000").ss(3,1,1).p("AipAAIFTAA");
	this.shape_212.setTransform(-32.8,0);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#B04F00").ss(3,1,1).p("AinAAIFQAA");
	this.shape_213.setTransform(-32.9,0);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#B14E00").ss(3,1,1).p("AimAAIFNAA");
	this.shape_214.setTransform(-33.1,0);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#B14E00").ss(3,1,1).p("AikAAIFKAA");
	this.shape_215.setTransform(-33.2,0);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#B24D00").ss(3,1,1).p("AijAAIFHAA");
	this.shape_216.setTransform(-33.4,0);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#B34C00").ss(3,1,1).p("AihAAIFDAA");
	this.shape_217.setTransform(-33.6,0);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#B44B00").ss(3,1,1).p("AigAAIFBAA");
	this.shape_218.setTransform(-33.7,0);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#B54A00").ss(3,1,1).p("AieAAIE9AA");
	this.shape_219.setTransform(-33.9,0);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#B64900").ss(3,1,1).p("AidAAIE7AA");
	this.shape_220.setTransform(-34,0);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#B64900").ss(3,1,1).p("AibAAIE3AA");
	this.shape_221.setTransform(-34.2,0);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#B74800").ss(3,1,1).p("AiaAAIE0AA");
	this.shape_222.setTransform(-34.3,0);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#B84700").ss(3,1,1).p("AiYAAIExAA");
	this.shape_223.setTransform(-34.5,0);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#B94600").ss(3,1,1).p("AiXAAIEvAA");
	this.shape_224.setTransform(-34.6,0);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#BA4500").ss(3,1,1).p("AiVAAIErAA");
	this.shape_225.setTransform(-34.8,0);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#BB4400").ss(3,1,1).p("AiTAAIEoAA");
	this.shape_226.setTransform(-34.9,0);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#BB4400").ss(3,1,1).p("AiSAAIElAA");
	this.shape_227.setTransform(-35.1,0);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#BC4300").ss(3,1,1).p("AiQAAIEhAA");
	this.shape_228.setTransform(-35.3,0);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#BD4200").ss(3,1,1).p("AiPAAIEfAA");
	this.shape_229.setTransform(-35.4,0);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#BE4100").ss(3,1,1).p("AiNAAIEbAA");
	this.shape_230.setTransform(-35.6,0);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#BF4000").ss(3,1,1).p("AiMAAIEZAA");
	this.shape_231.setTransform(-35.7,0);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#BF4000").ss(3,1,1).p("AiKAAIEVAA");
	this.shape_232.setTransform(-35.9,0);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#C03F00").ss(3,1,1).p("AiJAAIESAA");
	this.shape_233.setTransform(-36,0);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#C13E00").ss(3,1,1).p("AiHAAIEPAA");
	this.shape_234.setTransform(-36.2,0);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#C23D00").ss(3,1,1).p("AiGAAIEMAA");
	this.shape_235.setTransform(-36.3,0);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#C33C00").ss(3,1,1).p("AiEAAIEJAA");
	this.shape_236.setTransform(-36.5,0);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#C43B00").ss(3,1,1).p("AiDAAIEHAA");
	this.shape_237.setTransform(-36.6,0);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#C43B00").ss(3,1,1).p("AiBAAIEDAA");
	this.shape_238.setTransform(-36.8,0);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#C53A00").ss(3,1,1).p("Ah/AAID/AA");
	this.shape_239.setTransform(-37,0);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#C63900").ss(3,1,1).p("Ah+AAID9AA");
	this.shape_240.setTransform(-37.1,0);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#C73800").ss(3,1,1).p("Ah8AAID5AA");
	this.shape_241.setTransform(-37.3,0);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#C83700").ss(3,1,1).p("Ah7AAID3AA");
	this.shape_242.setTransform(-37.4,0);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#C93600").ss(3,1,1).p("Ah5AAIDzAA");
	this.shape_243.setTransform(-37.6,0);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#C93600").ss(3,1,1).p("Ah3AAIDwAA");
	this.shape_244.setTransform(-37.7,0);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#CA3500").ss(3,1,1).p("Ah2AAIDtAA");
	this.shape_245.setTransform(-37.9,0);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#CB3400").ss(3,1,1).p("Ah1AAIDqAA");
	this.shape_246.setTransform(-38,0);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#CC3300").ss(3,1,1).p("AhzAAIDnAA");
	this.shape_247.setTransform(-38.2,0);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#CD3200").ss(3,1,1).p("AhxAAIDjAA");
	this.shape_248.setTransform(-38.4,0);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#CD3200").ss(3,1,1).p("AhwAAIDhAA");
	this.shape_249.setTransform(-38.5,0);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#CE3100").ss(3,1,1).p("AhuAAIDdAA");
	this.shape_250.setTransform(-38.7,0);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#CF3000").ss(3,1,1).p("AhtAAIDbAA");
	this.shape_251.setTransform(-38.8,0);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#D02F00").ss(3,1,1).p("AhrAAIDXAA");
	this.shape_252.setTransform(-39,0);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#D12E00").ss(3,1,1).p("AhqAAIDVAA");
	this.shape_253.setTransform(-39.1,0);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#D22D00").ss(3,1,1).p("AhoAAIDRAA");
	this.shape_254.setTransform(-39.3,0);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#D22D00").ss(3,1,1).p("AhmAAIDOAA");
	this.shape_255.setTransform(-39.4,0);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#D32C00").ss(3,1,1).p("AhlAAIDLAA");
	this.shape_256.setTransform(-39.6,0);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#D42B00").ss(3,1,1).p("AhjAAIDIAA");
	this.shape_257.setTransform(-39.7,0);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#D52A00").ss(3,1,1).p("AhiAAIDFAA");
	this.shape_258.setTransform(-39.9,0);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#D62900").ss(3,1,1).p("AhgAAIDBAA");
	this.shape_259.setTransform(-40.1,0);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#D72800").ss(3,1,1).p("AhfAAIC/AA");
	this.shape_260.setTransform(-40.2,0);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#D72800").ss(3,1,1).p("AhdAAIC7AA");
	this.shape_261.setTransform(-40.4,0);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#D82700").ss(3,1,1).p("AhcAAIC5AA");
	this.shape_262.setTransform(-40.5,0);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#D92600").ss(3,1,1).p("AhaAAIC1AA");
	this.shape_263.setTransform(-40.7,0);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#DA2500").ss(3,1,1).p("AhZAAICyAA");
	this.shape_264.setTransform(-40.8,0);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#DB2400").ss(3,1,1).p("AhXAAICvAA");
	this.shape_265.setTransform(-41,0);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#DC2300").ss(3,1,1).p("AhVAAICrAA");
	this.shape_266.setTransform(-41.1,0);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#DC2300").ss(3,1,1).p("AhUAAICpAA");
	this.shape_267.setTransform(-41.3,0);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#DD2200").ss(3,1,1).p("AhSAAICmAA");
	this.shape_268.setTransform(-41.4,0);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#DE2100").ss(3,1,1).p("AhRAAICjAA");
	this.shape_269.setTransform(-41.6,0);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#DF2000").ss(3,1,1).p("AhPAAICfAA");
	this.shape_270.setTransform(-41.8,0);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#E01F00").ss(3,1,1).p("AhOAAICdAA");
	this.shape_271.setTransform(-41.9,0);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#E01F00").ss(3,1,1).p("AhMAAICZAA");
	this.shape_272.setTransform(-42.1,0);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#E11E00").ss(3,1,1).p("AhLAAICXAA");
	this.shape_273.setTransform(-42.2,0);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#E21D00").ss(3,1,1).p("AhJAAICTAA");
	this.shape_274.setTransform(-42.4,0);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#E31C00").ss(3,1,1).p("AhIAAICRAA");
	this.shape_275.setTransform(-42.5,0);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#E41B00").ss(3,1,1).p("AhGAAICNAA");
	this.shape_276.setTransform(-42.7,0);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#E51A00").ss(3,1,1).p("AhFAAICKAA");
	this.shape_277.setTransform(-42.8,0);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#E51A00").ss(3,1,1).p("AhDAAICHAA");
	this.shape_278.setTransform(-43,0);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#E61900").ss(3,1,1).p("AhBAAICDAA");
	this.shape_279.setTransform(-43.1,0);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#E71800").ss(3,1,1).p("AhAAAICBAA");
	this.shape_280.setTransform(-43.3,0);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#E81700").ss(3,1,1).p("Ag+AAIB9AA");
	this.shape_281.setTransform(-43.5,0);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#E91600").ss(3,1,1).p("Ag9AAIB7AA");
	this.shape_282.setTransform(-43.6,0);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#EA1500").ss(3,1,1).p("Ag7AAIB3AA");
	this.shape_283.setTransform(-43.8,0);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#EA1500").ss(3,1,1).p("Ag6AAIB1AA");
	this.shape_284.setTransform(-43.9,0);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#EB1400").ss(3,1,1).p("Ag4AAIBxAA");
	this.shape_285.setTransform(-44.1,0);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#EC1300").ss(3,1,1).p("Ag2AAIBtAA");
	this.shape_286.setTransform(-44.2,0);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#ED1200").ss(3,1,1).p("Ag1AAIBrAA");
	this.shape_287.setTransform(-44.4,0);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#EE1100").ss(3,1,1).p("Ag0AAIBpAA");
	this.shape_288.setTransform(-44.5,0);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#EE1100").ss(3,1,1).p("AgyAAIBlAA");
	this.shape_289.setTransform(-44.7,0);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#EF1000").ss(3,1,1).p("AgxAAIBiAA");
	this.shape_290.setTransform(-44.8,0);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#F00F00").ss(3,1,1).p("AgvAAIBfAA");
	this.shape_291.setTransform(-45,0);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#F10E00").ss(3,1,1).p("AgtAAIBbAA");
	this.shape_292.setTransform(-45.2,0);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#F20D00").ss(3,1,1).p("AgsAAIBZAA");
	this.shape_293.setTransform(-45.3,0);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#F30C00").ss(3,1,1).p("AgqAAIBVAA");
	this.shape_294.setTransform(-45.5,0);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#F30C00").ss(3,1,1).p("AgpAAIBTAA");
	this.shape_295.setTransform(-45.6,0);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#F40B00").ss(3,1,1).p("AgnAAIBPAA");
	this.shape_296.setTransform(-45.8,0);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#F50A00").ss(3,1,1).p("AglAAIBMAA");
	this.shape_297.setTransform(-45.9,0);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#F60900").ss(3,1,1).p("AgkAAIBJAA");
	this.shape_298.setTransform(-46.1,0);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#F70800").ss(3,1,1).p("AgiAAIBFAA");
	this.shape_299.setTransform(-46.2,0);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#F80700").ss(3,1,1).p("AghAAIBDAA");
	this.shape_300.setTransform(-46.4,0);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#F80700").ss(3,1,1).p("AggAAIBBAA");
	this.shape_301.setTransform(-46.5,0);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#F90600").ss(3,1,1).p("AgeAAIA9AA");
	this.shape_302.setTransform(-46.7,0);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FA0500").ss(3,1,1).p("AgcAAIA5AA");
	this.shape_303.setTransform(-46.9,0);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FB0400").ss(3,1,1).p("AgbAAIA3AA");
	this.shape_304.setTransform(-47,0);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FC0300").ss(3,1,1).p("AgZAAIAzAA");
	this.shape_305.setTransform(-47.2,0);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FD0200").ss(3,1,1).p("AgYAAIAxAA");
	this.shape_306.setTransform(-47.3,0);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FD0200").ss(3,1,1).p("AgWAAIAtAA");
	this.shape_307.setTransform(-47.5,0);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FE0100").ss(3,1,1).p("AgUAAIApAA");
	this.shape_308.setTransform(-47.6,0);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FF0000").ss(3,1,1).p("AAUAAIgnAA");
	this.shape_309.setTransform(-47.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-1.5,102.6,3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.atack();
	this.instance.parent = this;
	this.instance.setTransform(-100,-51,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-100,-51,234,100.6), null);


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


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(23, 23, 1)];
	this.instance.cache(-30,-66,60,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-39.9,-75.8,82,154), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(31, 31, 1)];
	this.instance.cache(-28,-61,55,122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-41.7,-74.8,86,152), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(44, 44, 1)];
	this.instance.cache(-32,-64,64,128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-51.8,-84.1,106,172), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(32, 32, 1)];
	this.instance.cache(-61,-74,123,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-75.3,-88.3,154,180), null);


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
	this.instance.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance.cache(-32,-66,65,133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-44.5,-78.4,92,160), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(12.8,20.8,1,1,0,0,0,12.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},3,cjs.Ease.get(1)).to({regY:20.9,rotation:-25.5,x:13,y:20.9},6,cjs.Ease.get(1)).to({rotation:19.5,x:12.8,y:21.1},4,cjs.Ease.get(1)).to({regY:20.8,rotation:0,y:20.8},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-31.5,50,63);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-216.2,128);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDE123").ss(1,1,1).p("AvoAAIfRAA");
	this.shape.setTransform(-165.9,123.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.krepost();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-266,108,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-267.5,108,202.7,21.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.92,y:10.5},6,cjs.Ease.get(-1)).to({scaleY:0.81,y:24.5},8,cjs.Ease.get(1)).to({scaleY:0.9,y:13.1},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-40,27,80);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(113.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:0.84,scaleY:0.84},6,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:0.91,scaleY:0.91,x:113.6,y:2.9},6,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:113.5,y:2.8},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.5,-48.2,234,100.6);


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


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.699},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-75.8,82,154);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.691},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.7,-74.8,86,152);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.691},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-84.1,106,172);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(3,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.699},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-88.3,154,180);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:0.699},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-78.4,92,160);


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


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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

	// Слой 14
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(107.9,-47.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.7,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:-47.5,alpha:0},7).wait(1));

	// logo.png
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-311,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(252.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:341.5,y:135.8,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:252.5,y:134.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-167.5,98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:58.9,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:98.9,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 14
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79.5,93.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:49.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:79.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_5 = new lib.Символ18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(113.1,92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:213.1,alpha:0},7).wait(1).to({x:113.1,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 15
	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.5,347.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:203.9},7,cjs.Ease.get(1)).wait(1).to({y:347.9},7,cjs.Ease.get(1)).wait(1));

	// Символ 25
	this.instance_7 = new lib.Символ25();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.1,scaleX:0.66,scaleY:0.66,x:34,y:96.1},7).wait(1).to({regY:0,scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491,-276.1,982,676.3);


// stage content:
(lib.tr_640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.curs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.curs.x = stage.mouseX/window.devicePixelRatio;
			this.curs.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.curs.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.curs.gotoAndStop(0);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.castle_btn.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.curs.gotoAndStop(2);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.castle_btn.addEventListener("mouseout", fl_MouseOutHandler_33);
		
		function fl_MouseOutHandler_33()
		{
			_this.curs.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 46
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(518,39.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ47(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 43
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(482,95.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ48(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 40
	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(430.9,165.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ49(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 36
	this.instance_3 = new lib.Символ50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(309.7,120.7);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ50(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 33
	this.instance_4 = new lib.Символ51();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200.7,82.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ51(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 14
	this.curs = new lib.Символ38();
	this.curs.parent = this;
	this.curs.setTransform(309.2,469.2);

	this.timeline.addTween(cjs.Tween.get(this.curs).wait(1));

	// lizo.png
	this.main = new lib.Символ24();
	this.main.parent = this;
	this.main.setTransform(288,32.2);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117,-91.5,982,676.3);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1503144121410", id:"arrow"},
		{src:"images/atack.png?1503144121410", id:"atack"},
		{src:"images/baba.png?1503144121410", id:"baba"},
		{src:"images/bg.jpg?1503144121410", id:"bg"},
		{src:"images/horse.png?1503144121410", id:"horse"},
		{src:"images/krepost.png?1503144121410", id:"krepost"},
		{src:"images/lizo.png?1503144121410", id:"lizo"},
		{src:"images/logo.png?1503144121410", id:"logo"},
		{src:"images/mish.png?1503144121410", id:"mish"},
		{src:"images/ruka.png?1503144121410", id:"ruka"},
		{src:"images/sward.png?1503144121410", id:"sward"},
		{src:"images/txt.png?1503144121410", id:"txt"},
		{src:"images/unit.png?1503144121410", id:"unit"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;