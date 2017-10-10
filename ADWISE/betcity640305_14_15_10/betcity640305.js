(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.atletico = function() {
	this.initialize(img.atletico);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,194);


(lib.barca = function() {
	this.initialize(img.barca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,207);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.bonucci = function() {
	this.initialize(img.bonucci);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,350);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,109);


(lib.cska = function() {
	this.initialize(img.cska);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,245);


(lib.dzagoev = function() {
	this.initialize(img.dzagoev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,488);


(lib.griezmann = function() {
	this.initialize(img.griezmann);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,411);


(lib.icardi = function() {
	this.initialize(img.icardi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,297);


(lib.inter = function() {
	this.initialize(img.inter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,405);


(lib.krasnodar = function() {
	this.initialize(img.krasnodar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.liver = function() {
	this.initialize(img.liver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,195);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,44);


(lib.lukaku = function() {
	this.initialize(img.lukaku);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,326);


(lib.messi = function() {
	this.initialize(img.messi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,409);


(lib.milan = function() {
	this.initialize(img.milan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,379);


(lib.mu = function() {
	this.initialize(img.mu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,181);


(lib.salah = function() {
	this.initialize(img.salah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,253);


(lib.smolov = function() {
	this.initialize(img.smolov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,294);// helper functions:

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


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-320,-152.5,640,305), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(-113,-39,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-113,-39,224.9,77.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtDJQgEgEAAgHQAAgEACgEQACgEADgDQAHgGAJAAQAHAAAEAEQAFAEAAAHQAAAEgCAEQgCAEgDADQgHAGgJAAQgHAAgFgEgAC2DJQgJgEgGgGQgGgHgCgJQgDgJACgLIAeAAQgBAJAFAFQAGAFAKAAQAGAAAFgCQAFgBAEgEQADgDADgFIADgJQACgHgBgFQgBgGgDgDQgDgDgFgCIgKgDQgJgBgPABIgXADIAShTIBiAAIgGAcIhGAAIgGAdQAIgCAJAAQAMAAAJACQAJADAHAEQAHAFAEAIQAEAIAAALIgCAPIgEANIgGALIgIAKIgKAHIgMAHQgSAEgKAAQgLAAgJgDgABQDJIAGggIhLAAIADgPIBfhxIAjAAIgVBlIAPAAIgGAbIgPAAIgHAggAA4CPIAmAAIAPhAIAAAAgAieDJIAGgaIAbAAIAWhrIgXAAIAFgbIA5AAIgdCGIAcAAIgGAagAkcDJIABgHIBVhdQAGgIACgGQACgFgBgEQgBgEgCgCQgEgFgIAAQgIAAgGAEQgEADgDAEQgDAEgBAGIgdAAQACgMAGgKQAFgJAIgHQAIgGAKgDQAKgDAMAAQAIAAAHACQAHACAEAEQAFAEADAFQADAFABAGQABAHgBAHQgBAHgEAIQgDAIgFAIQgGAIgHAHIgtAwIA6gCIgGAdgAgdCBQgFgEAAgGQAAgFACgDIAFgHQAHgGAJAAQAHAAAEAEQAEAEAAAHQAAAEgCAEQgCAEgCACQgHAGgJAAQgHAAgEgEgAClgpQgKgEgGgHQgHgHgCgKQgDgLADgMIAMg4QACgKAIgQQAGgKAKgHQAJgHAMgDQALgDANAAQANAAAKAEQAKAEAHAHQAGAHADAKQACALgDANIgLA4IgFANIgGAMQgGAKgKAHQgJAGgMAEQgLADgNAAQgMAAgLgEgADGioQgFACgDAFQgDAEgBAFIgPBCQAAAFACADIAFAGQAGAFAKAAQAJAAAGgDQAGgDAEgFQAEgEACgHQADgFABgIIALg1QAAgFgBgEQgCgDgDgCQgGgFgLAAQgLAAgIAGgAgggpQgEgEAAgHQAAgEACgEIAFgGQAHgGAJAAQAHAAAEAEQAEAEAAAGQAAAEgCAEQgBAEgDADQgHAGgJAAQgHAAgFgEgAiMgpQgIgEgGgGQgHgGgCgJQgCgKACgLIAeAAQgCAJAGAGQAFAFAKAAQAGAAAFgCQAFgCAEgEQAEgDACgFQACgEABgFQACgHgBgFQgBgFgDgEQgDgDgEgCQgFgCgGAAQgJgCgPABIgWADIARhTIBjAAIgGAcIhHAAIgGAdIASgBQALAAAJACQAKACAHAEQAHAGADAHQAEAIAAALIgBAPIgEANIgHALIgIAKIgKAIIgMAGQgRAFgKAAQgMAAgJgEgAAVgoIAGgbIAbAAIAWhrIgXAAIAFgbIA5AAIgdCGIAcAAIgFAbgAkVgoIAFgbIAbAAIAXhrIgYAAIAGgbIA5AAIgdCGIAcAAIgGAbg");
	this.shape.setTransform(12.3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-16.2,-19.4,57.1,41), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.1,-1.2,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-93,-59.4,185.9,116.4), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.griezmann();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-77.5,-205.5,155,411), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.messi();
	this.instance.parent = this;
	this.instance.setTransform(-65.3,-148.1,1.168,1.168,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-144.4,-148.1,272.7,503.7), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-98,-58.9,196.3,120.3), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.9,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-176.5,-59.1,351.2,120.6), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dzagoev.png
	this.instance = new lib.dzagoev();
	this.instance.parent = this;
	this.instance.setTransform(-118,-128,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-118,-128,243.2,392.9), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smolov();
	this.instance.parent = this;
	this.instance.setTransform(-72,-123,0.851,0.904);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-72,-123,143,265.8), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("AhMA0IAEgQIAIAAQADAAACgCQADgCAEgKIAXhJIBGAAIgWBoIgWAAIARhUIgbAAIgRA2QgDAKgEAGQgEAHgFADQgFADgHABIgEAAIgOgBgAlGA0IAEgQIAHAAQAEAAACgCQADgCADgKIAYhJIBGAAIgWBoIgWAAIAShUIgdAAIgRA2QgDAKgDAGQgEAHgFADQgGADgHABIgDAAIgOgBgAArA1IAWhoIAXAAIgNA6IBIg7IAHAAIgXBpIgWAAIANg7IhJA7gAEwA1IgEgSIgsAAIgMASIgYAAIABgDIBGhmIAKAAIAaBmIAAADgAEoAQIgHgiIgWAiIAdAAgACbA1IAXhoIBAAAIgFAUIgpAAIgSBUgAiIA1IgEgSIgsAAIgMASIgYAAIABgDIBGhmIAKAAIAaBmIAAADgAiQAQIgHgiIgWAiIAdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-32.7,-5.3,65.5,10.6), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKGlIAEgVQAIABAFgBQAEAAAEgDQAEgDAGgPIAjhvIBhAAIggCYIgaAAIAciBIgyAAIgbBZQgEANgFAJQgFAJgHAFQgHAEgJACIgHAAIgQgBgAjdGlIAgiZIAZAAIgXBmIByhmIAJAAIggCYIgaAAIAYhnIhzBogAFZGkIAOhDIhGAAIgOBDIgZAAIAgiYIAaAAIgNA9IBFAAIANg9IAZAAIggCYgADOGkIgHgfIhHAAIgWAfIgbAAIABgDIBmiWIAMAAIAmCWIgBADgADDFwIgPg9IgnA9IA2AAgAkdGkIAWhfIg5A4IgEAAIggg4IgUBfIgZAAIAgiYIAJAAIAsBPIBQhPIAJAAIggCYgAlekMIAhiZIAZAAIgYBmIByhmIAJAAIggCYIgZAAIAYhnIhzBogADWkNIAhiYIA/AAQAMAAAJAEQAJAEAFAIQAFAHACAKQACAJgBALQgBALgGAKQgFAKgIAHQgJAHgLAEQgPAFgJAAIgoAAIgJAtgAD+lQIAmAAQAHAAAHgEQAGgCAGgGQAFgFADgHQACgHAAgHIgBgJQgBgFgCgDQgDgEgFgBQgFgDgGAAIgmAAgABZkNIAhiYIBcAAIgEAWIhEAAIgIApIA/AAIgEAWIhAAAIgJAsIBEAAIgFAXgAgBkNIAbiBIgsAAIAFgXIBwAAIgEAXIgtAAIgbCBgAhdkNIAPhDIhGAAIgOBDIgZAAIAgiYIAZAAIgNA9IBGAAIANg9IAZAAIggCYg");
	this.shape.setTransform(3.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-36.7,-43,80.5,84.5), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lukaku();
	this.instance.parent = this;
	this.instance.setTransform(-58,-101,0.647,0.647);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-58,-101,113.9,210.9), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.salah();
	this.instance.parent = this;
	this.instance.setTransform(-73,-95,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-73,-95,112.5,229.4), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.atletico();
	this.instance.parent = this;
	this.instance.setTransform(-63,-79,0.816,0.816);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-63,-79,123.2,158.3), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barca();
	this.instance.parent = this;
	this.instance.setTransform(-75,-80,0.731,0.731);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-75,-80,148.4,151.3), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bonucci();
	this.instance.parent = this;
	this.instance.setTransform(-64,-75,0.561,0.561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-64,-75,133,196.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.krasnodar();
	this.instance.parent = this;
	this.instance.setTransform(-82,-82,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-82,-82,164.1,164.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cska();
	this.instance.parent = this;
	this.instance.setTransform(-63,-98,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-63,-98,132.6,181.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mu();
	this.instance.parent = this;
	this.instance.setTransform(-80,-68,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-80,-68,161.7,161.7), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.liver();
	this.instance.parent = this;
	this.instance.setTransform(-72,-92,0.956,0.956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-72,-92,138.7,186.5), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC2DIQgJgDgHgHQgFgGgDgJQgCgKACgLIAeAAQgCAKAGAFQAEAFALAAQAGAAAFgCQAFgCAEgEQADgDADgEQACgEABgGQACgHgBgFQgBgFgDgDQgDgEgEgBQgFgCgGgBQgJgBgPABIgXACIAShSIBiAAIgFAcIhHAAIgGAdQAIgCAJAAQAMAAAIACQAKADAHAEQAHAFAEAIQAEAIAAALIgCAOIgEANIgGALIgIAKIgLAIIgLAGQgSAFgKAAQgKAAgJgEgAgsDIQgFgEAAgGQABgFABgEQACgEADgCQAHgGAJAAQAHAAAFAEQAEAEAAAGQAAAFgCAEQgCADgDADQgHAGgJAAQgHAAgEgEgABQDJIAGggIhKAAIACgPIBfhxIAjAAIgWBkIAQAAIgHAcIgOAAIgHAggAA4CPIAlAAIAQhAIAAAAgAieDJIAHgbIAaAAIAXhqIgYAAIAGgbIA4AAIgdCFIAcAAIgFAbgAkbDJIABgIIBWhcQAFgIACgHQABgEAAgEQgBgEgDgCQgEgFgHAAQgIAAgHAEIgFAHQgDAEgCAGIgdAAQADgNAFgJQAFgJAIgHQAIgGAKgCQAKgEAMAAQAIAAAHACQAGADAFADQAFAEADAFQADAFABAGQABAHgCAHQgBAHgDAIQgDAIgFAHQgGAIgIAIIgtAvIA7gCIgGAegAgdCBQgFgEAAgGQAAgFACgEIAFgGQAHgGAJAAQAHAAAEAEQAEAEAAAGQAAAFgCADQgCAEgCADQgHAGgJAAQgHAAgEgEgACngpQgKgDgHgHQgHgIgCgKQgCgKACgNIAMg3QACgLAIgPQAHgKAKgHQAIgHAMgDQAMgDANAAQAMAAAKAEQAKAEAHAHQAHAHABAKQADALgDANIgLA3IgFAOIgFALQgIALgJAHQgJAGgMADQgLADgMAAQgNAAgKgEgADHinQgFACgCAEQgDAEgCAGIgOBCQAAAEABAEQACADAEADQAFAEAKAAQAJAAAGgDQAGgCAEgFQAEgFADgGQACgGABgHIAMg2QgBgEgCgEQgBgDgDgCQgGgFgKAAQgMAAgIAGgAgegpQgEgEAAgGQAAgFACgEIAFgGQAHgGAJAAQAHAAAEAEQADAEAAAGQABAFgCAEQgCAEgDACQgGAGgJAAQgHAAgFgEgAAXgoIAGgaIAbAAIAWhrIgXAAIAFgbIA5AAIgdCGIAcAAIgGAagAhqgoIAHggIhLAAIADgPIBehxIAjAAIgVBlIAPAAIgGAbIgPAAIgHAggAiChiIAmAAIAPhAgAkWgoIAFgaIAbAAIAXhrIgYAAIAGgbIA4AAIgcCGIAbAAIgGAag");
	this.shape.setTransform(12.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-16,-20.1,56.8,40.8), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icardi();
	this.instance.parent = this;
	this.instance.setTransform(-52,-77,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-52,-77,124,203.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADDDIQgKgFgHgGQgHgIgCgJQgCgMACgMIAMg4QACgKAIgPQAGgKAKgHQAJgGAMgEQALgDANAAQANAAAKAEQAKAEAGAHQAHAIACAKQADAKgDAMIgMA4IgEAOIgGALQgGALgKAHQgJAGgMADQgLADgNAAQgMAAgKgDgADjBJQgEADgDAEQgDAEgCAFIgOBCQAAAEABAEQACADADADQAGAEALAAQAIAAAGgCQAGgDAEgFQAEgEACgHQADgGABgHIALg2QAAgEgBgEIgFgFQgGgFgLAAQgLAAgIAGgAAtDIQgKgFgGgGQgHgIgDgJQgCgMADgMIAMg4QACgKAIgPQAGgKAKgHQAJgGAMgEQALgDANAAQAMAAAKAEQAKAEAHAHQAHAIACAKQACAKgCAMIgMA4IgFAOIgFALQgHALgKAHQgJAGgLADQgMADgMAAQgNAAgKgDgABNBJQgEADgDAEQgDAEgCAFIgOBCQAAAEACAEQABADAEADQAFAEALAAQAIAAAGgCQAGgDAEgFQAEgEADgHQACgGACgHIALg2QAAgEgCgEIgFgFQgGgFgKAAQgLAAgJAGgAgyDIQgEgFAAgGQAAgFABgDIAGgHQAGgGAKAAQAHAAAEAEQAEAEAAAGQAAAFgCAEQgBAEgEADQgGAFgKAAQgHAAgEgDgAivDIIAzg9QgGAEgDAAQgLAAgIgEQgJgCgGgGQgGgFgDgHQgDgIAAgKQAAgHABgIQACgGADgHQACgGAEgFIAJgJQAHgFARgIQAJgCATgBQALgBAJADQAKADAGAFQAHAFADAJQAEAIAAALQAAAMgFAKQgEAKgLAOIg+BKgAh9BDQgGACgFAFQgEAEgCAFQgDAGAAAHQAAAJAGAGQAGAFAKAAQAIAAAGgCQAGgCAEgEQAEgFADgFQACgGAAgHQAAgKgGgEQgGgGgKAAQgHAAgGACgAktDIIAGgaIAbAAIAWhrIgXAAIAFgbIA5AAIgdCGIAcAAIgGAagAgjCAQgFgDAAgHQAAgEACgEQACgEAEgDQAHgGAJABQAHgBAEAEQAEAEAAAHQAAAEgCAEQgBAEgEADQgGAFgKABQgGgBgFgEgACpgpQgKgEgGgHQgHgHgCgKQgDgKADgNIAMg4QACgKAIgPQAGgKAKgHQAJgHAMgCQALgEANAAQAMABAKADQAKADAHAIQAHAHACAKQACAKgCANIgMA4IgFANIgFAMQgHALgKAGQgJAHgLADQgLADgNAAQgNAAgKgEgADKioQgFADgDAEIgFAKIgOBBQAAAFACADQABAEAEADQAFAEALAAQAIAAAGgDQAGgDAEgFQAEgEADgGQACgGACgIIALg0QAAgGgCgDQgCgDgDgDQgGgEgKAAQgLAAgIAFgAgbgpQgEgEAAgHQAAgEACgEIAFgGQAHgHAJABQAHgBADAFQAEAEAAAGQAAAEgBAEIgFAHQgGAGgJAAQgHAAgFgEgAAagpIAFgaIAbAAIAXhqIgYAAIAGgbIA4AAIgcCFIAbAAIgFAagAhogpIAHgfIhKAAIADgPIBehxIAjAAIgVBkIAPAAIgGAcIgPAAIgHAfgAh/hiIAmAAIAPhAgAkUgpIAGgaIAbAAIAXhqIgYAAIAGgbIA4AAIgcCFIAbAAIgFAag");
	this.shape.setTransform(10.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-19.6,-20,60.3,40.7), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("Al0BFQgHgBgFgDQgHgCgEgDQgGgDgEgFIgGgJQgDgGgBgHQgCgGAAgIQAAgHACgJQACgHAEgIIAHgPIAJgMIALgKIALgIIAOgFQAJgDASgBQAKAAALADQAJADAIAGQAIAJADAGIADAKIABAMIgcAAQAAgHgDgFQgCgEgFgCQgDgDgGAAQgFgCgGAAQgKAAgJAEQgHADgHAGQgGAGgFAJQgEAIgBAIQgDAJABAHQABAIAEAGQADAGAHADQAHADAKAAQAGAAAGgBQAGgBAFgEIAJgIQAEgEADgGIAeAAIgGAMIgIALQgLAMgHAEQgJAGgLADQgLADgLAAIgNgBgAgiBFIAeiJIAcAAIgRBNIBehNIAJAAIgeCJIgdAAIARhOIheBOgAGDBFIgFgXIg5AAIgQAXIggAAIABgEIBciGIANAAIAjCGIgBAEgAF4AVIgIgtIgdAtIAlAAgAC6BFIAJguIgYAAIgmAuIgfAAIABgFIApgvQgEgCgEgDIgFgHQgCgEgBgEIgCgKQABgKAEgJQADgLAHgHIAJgHIAKgGIAMgDQAGgCAIAAIA7AAIgeCJgACrgoQgFACgEAEQgDADgCAFIgBAJQAAAIADAEQAEAFAIAAIAeAAIAKgqIgfAAQgFAAgEACgAiiBFIAeiJIA6AAIALABIAJADQAJAEAEAIQAFAHAAAJQACAJgCAKQgBAKgFAIQgFAJgIAGQgHAGgLAEQgKADgLAAIgdAAIgJAogAh3AFIAdAAQAGAAAEgCIAIgFQADgDADgEIADgKQABgJgDgHQgCgEgDgCQgEgCgFAAIgeAAgAkRBFIAdiJIBUAAIgFAaIg2AAIgHAcIA0AAIgHAYIgyAAIgGAgIA3AAIgGAbg");
	this.shape.setTransform(-23.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-65.7,-6.9,83.5,14), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("AgeCbIAEgTQAFABAEgBQAEgBACgCQAEgCAEgMIAbhXIBTAAIgaB8IgbAAIAWhlIgiAAIgTBBQgEAMgFAIQgEAHgGAEQgGAEgIABIgEABIgQgCgAFACcIAQhHIhWBHIgHAAIAah8IAaAAIgOBGIBUhHIAJAAIgbB9gAC7CcIAQhHIhWBHIgHAAIAah8IAaAAIgOBGIBUhHIAIAAIgaB9gAhvCcIAbh8IBLAAIgFAYIgyAAIgUBkgAimCcIALg1IgvAAIgLA1IgaAAIAah8IAaAAIgKAvIAwAAIAKgvIAaAAIgaB8gAkYCcIgEgVIg0AAIgOAVIgdAAIABgEIBTh5IANAAIAeB5IgBAEgAkhBxIgIgqIgaAqIAiAAgADRgfIAEgTIAJAAQAEgBADgCQADgDAFgLIAchXIBSAAIgaB7IgaAAIAWhkIgiAAIgUBBQgEAMgEAHQgFAIgGAEQgGAEgIABIgGAAIgPgBgAFegeIAah8IAbAAIgPBGIBVhHIAIAAIgaB8IgbAAIAPhGIhVBHgAKTgfIgFgUIg0AAIgNAUIgdAAIABgDIBSh6IAMAAIAfB6IAAADgAKKhKIgJgpIgZApIAiAAgAHjgfIAah7IBMAAIgFAXIgyAAIgVBkgAAWgfIAbh8IA0AAIAKABIAIADQAHAEAFAHQADAGABAIQACAIgCAJQgBAJgEAIQgFAIgGAGQgIAGgJADQgJADgLAAIgaAAIgHAjgAA8hYIAbAAQAFAAADgCQAFgCADgDIAFgHQACgEABgEQABgJgDgGQgBgDgEgCQgDgCgFAAIgbAAgAhOgfIAbh7IBLAAIgGAXIgwAAIgFAZIAtAAIgFAXIgtAAIgGAcIAyAAIgFAYgAjBgfIAbh7IAZAAIgIAmIAbAAQAIAAAHADQAHADAFAFQAEAEACAHQADAGAAAHIgBAKIgDAJIgEAJIgHAHIgIAGIgJAFIgLADIgLABgAiig2IAaAAQAFAAAFgCQAEgCADgDIAFgHQACgFAAgEQAAgHgEgEQgEgFgIAAIgaAAgAj4gfIAPhDIgoAnIgDAAIgXgnIgPBDIgaAAIAah8IAKAAIAlA7IA/g7IAJAAIgaB8gAm5gfIAah7IBNAAIgGAXIgwAAIgGAZIAuAAIgFAXIguAAIgGAcIAyAAIgEAYgAotgfIAbh8IA0AAIAKABIAIADQAIAEAEAHQAEAGABAIQACAIgCAJQgBAJgFAIQgEAIgHAGQgHAGgJADQgKADgKAAIgbAAIgHAjgAoGhYIAbAAQAEAAAFgCQADgCADgDIAFgHIADgIQABgJgDgGQgBgDgDgCQgDgCgFAAIgaAAgApkgfIAWhjIgwAAIgVBjIgaAAIAah7IBkAAIgaB7gACQhPIAFgVIA+AAIgGAVg");
	this.shape.setTransform(0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-68.2,-16,137.2,31.3), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("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");
	this.shape.setTransform(1.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-47.8,-11.8,97.8,23.4), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70C").s().p("AgGDLIAAmVIANAAIAAGVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-0.7,-20.2,1.5,40.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70C").s().p("ABMBqQgQgFgLgHQgNgJgHgLQgEgGgCgHQgCgIAAgIIAjAAQAAAJAFAHQAEAGAHAEQAHADAJACQAJACAJAAIAQgBQAKgDAGgDQAIgEAEgGQAEgHAAgJQAAgKgFgHQgEgFgIgEQgHgDgKgBIgTgDQgPgBgNgDQgOgEgKgFQgMgHgGgKQgGgLAAgQQAAgKAGgRQAHgMALgIQALgIAOgEQAOgEAQAAQAPAAAOADQAOAFALAHQALAHAGAMQAHAMAAAPIghAAQAAgIgFgGQgEgGgGgDQgHgEgIgBIgQgCQgUACgJAFQgHAEgDAGQgFAGAAAJQAAAJAEAFQAEAFAHADQAJAFAYADQATACAMADQAQADAKAGQAMAGAGALIAFANQACAHAAAJQAAAIgCAJQgCAGgEAGQgGAMgNAJQgLAHgPAEQgOADgQAAQgQAAgOgDgAhiBrIhajOIAAgFIAmAAIA6CVIABAAIA6iVIAkAAIAAAFIhXDOg");
	this.shape.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-19,-10.8,37.8,21.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.milan();
	this.instance.parent = this;
	this.instance.setTransform(-51,-101,0.451,0.451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-51,-101,84.4,171.1), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-16,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-100,-16,200,31.7), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC6DJQgKgDgHgIQgGgHgDgKQgCgKACgOIAMg3QADgKAIgQQAGgLAKgGQAJgHAMgDQALgDANAAQAMAAAKAEQALAEAGAGQAHAJACAJQADALgDANIgMA3IgEAPIgGALQgHAKgKAHQgJAGgLAEQgLACgNAAQgNABgKgEgADaBKQgEADgDAEQgDAEgBAFIgEANIgLA1QAAAFACADQABAEAEACQAFAEALABQAIgBAGgCQAHgDADgEIAHgLIAEgOIALg2QAAgEgBgEIgFgFQgHgFgKAAQgLAAgJAGgAAtDJQgKgEgFgFQgHgIgBgJQgDgKACgKIAeAAQgBAKAEAHQADACADABQAFACAFAAQAGAAAFgCQAFgDAEgDQAEgEADgFQACgFABgFQACgKgCgFQgDgGgGgDQgFgCgJgBIgQABIABgEIApg2Ig5AAIAFgZIBnAAIgBAFIgvA4QAHACAGACQAFAEAEAFQADAFACAHQACAGAAAGQAAANgFAMQgFALgIAJIgKAIQgGAEgGADIgOAEQgHABgJAAQgMAAgIgDgAgpDJQgFgEAAgHIACgIIAFgHQAHgFAJgBQAHABAFAEQAEADAAAHQAAAFgCADQgCAEgDADQgHAGgJgBQgHABgEgEgAh3DJIAGggIhLAAIAEgOIBehyIAjAAIgVBkIAPAAIgGAcIgPAAIgHAggAiPCQIAmAAIAPhBIAAAAgAklDJIAGgaIAbAAIAXhrIgYAAIAGgbIA5AAIgdCGIAcAAIgGAagAgaCCQgFgFAAgFQAAgFACgEIAFgHQAHgGAKABQAGAAAEADQAEAEAAAHQAAAEgCAEQgCAEgDADQgGAGgJAAQgHAAgEgEgACqgpQgKgEgGgGQgHgIgCgKQgDgLADgNIAMg4QACgKAIgPQAGgKAKgIQAJgFAMgEQAMgDANABQAMAAAKADQAKADAHAIQAHAHACAKQACAKgCANIgMA4IgFAPIgFALQgHAKgKAHQgJAGgMAEQgLADgNAAQgMAAgLgEgADLioQgEACgEAFQgCAEgCAFIgOBCQAAAFABADQACAEADADQAGAEAKAAQAJAAAGgDQAGgDAEgEIAHgLIADgOIAMg1QAAgFgCgEQgCgEgDgBQgGgEgKgBQgMABgIAFgAgbgpQgEgEAAgGQAAgFACgEQACgEADgCQAHgGAJAAQAHAAADAEQAFADAAAHQAAAFgCADQgCAFgDACQgGAGgJAAQgHAAgFgEgAAagpIAGgaIAaAAIAXhrIgYAAIAGgbIA5AAIgdCGIAcAAIgFAagAhogpIAHgfIhLAAIADgPIBehyIAkAAIgVBlIAPAAIgGAcIgPAAIgHAfgAiAhjIAmAAIAQhAIgBAAgAkVgpIAGgaIAaAAIAYhrIgYAAIAFgbIA5AAIgdCGIAcAAIgFAag");
	this.shape.setTransform(14.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-14.5,-19.9,58.7,40.9), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.inter();
	this.instance.parent = this;
	this.instance.setTransform(-65,-103,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-65,-103,126.2,173.3), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-320,-152.5,640,305), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.alpha = 0.18;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14,cjs.Ease.get(1)).to({alpha:0.18},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-39,224.9,77.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.7,y:-10.9},24,cjs.Ease.get(-1)).to({x:3.5,y:-22.3},25,cjs.Ease.get(1)).to({x:1.7,y:-10.7},26,cjs.Ease.get(-1)).to({x:0,y:0},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.4,-148.1,272.7,503.7);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.4},19,cjs.Ease.get(-1)).to({y:13},20,cjs.Ease.get(1)).to({y:6.5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-75,133,196.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.7},24,cjs.Ease.get(-1)).to({y:11.7},25,cjs.Ease.get(0.94)).to({y:5.9},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(0.94)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-123,143,265.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15.4},24,cjs.Ease.get(-1)).to({y:-23},25,cjs.Ease.get(1)).to({y:-15.6},25,cjs.Ease.get(-1)).to({y:-8.1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-136.1,243.2,392.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.2},20,cjs.Ease.get(-1)).to({y:-3.2},24,cjs.Ease.get(1)).to({y:3.5},22,cjs.Ease.get(-1)).to({y:10.4},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-90.6,113.9,210.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.9},24,cjs.Ease.get(-1)).to({y:16},25,cjs.Ease.get(1)).to({y:8},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-95,112.5,229.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.3},19,cjs.Ease.get(-1)).to({y:15},20,cjs.Ease.get(1)).to({y:7.5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-77,124,203.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-14.5,-19.9,58.7,40.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-126,-43.9,250.7,86.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.1,0.72,0.72,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-70.5,-44.5,141.3,86.6), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.6,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-64.7,-42.9,129.2,80.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-16,200,31.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13.6},39,cjs.Ease.get(1)).to({y:0},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-205.5,155,411);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(0.9,3.1,1.03,1.03);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11,x:1},29,cjs.Ease.get(-1)).to({scaleX:1.19,scaleY:1.19,x:0.9},30,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11},30,cjs.Ease.get(-1)).to({scaleX:1.03,scaleY:1.03},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.8,-154,659.4,314.2);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-39,224.9,77.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-121,-41.7,240.8,82.8), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},7,cjs.Ease.get(-1)).to({scaleX:0.89,scaleY:0.89},7,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-39,224.9,77.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BTN
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(340));

	// Слой 5
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.5,37.8,0.068,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(253).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(70).to({scaleX:0.07,alpha:0},5).wait(7));

	// Слой 4
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-216.9,32,0.17,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(70).to({scaleX:0.17,alpha:0},5).wait(7));

	// Слой 6
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-206.5,143.5,0.091,1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(82).to({scaleX:0.09,alpha:0},5).wait(87));

	// kiev.png
	this.instance_4 = new lib.Символ39();
	this.instance_4.parent = this;
	this.instance_4.setTransform(205.9,53.9,0.161,0.777,-8.7,0,0,-0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(161).to({_off:false},0).to({regX:0.1,scaleX:0.78,x:206,alpha:1},5).wait(82).to({regX:-0.1,scaleX:0.16,x:205.9,alpha:0},5).wait(87));

	// player4
	this.instance_5 = new lib.Символ35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(192.5,50.5,0.161,0.876,0,0,0,0,-0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).to({regY:0,scaleX:0.88,y:50.6,alpha:1},5).wait(90).to({regY:-0.1,scaleX:0.16,y:50.5,alpha:0},5).wait(179));

	// player3
	this.instance_6 = new lib.Символ36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-207.9,43.9,0.123,0.86,0,0,0,0,-0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({regY:0,scaleX:0.86,y:44,alpha:1},5).wait(90).to({regY:-0.1,scaleX:0.12,y:43.9,alpha:0},5).wait(179));

	// player2
	this.instance_7 = new lib.Символ34();
	this.instance_7.parent = this;
	this.instance_7.setTransform(205,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56).to({scaleX:0.2,alpha:0},5).wait(273).to({scaleX:1,alpha:1},5).wait(1));

	// player1
	this.instance_8 = new lib.Символ32();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-197,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({scaleX:0.09,alpha:0},5).wait(273).to({scaleX:1,alpha:1},5).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(205,-37.2,0.114,1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(253).to({_off:false},0).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(70).to({scaleX:0.11,alpha:0},5).wait(7));

	// Слой 2
	this.instance_10 = new lib.Символ3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-190,-43.4,0.075,1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(253).to({_off:false},0).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(70).to({scaleX:0.08,alpha:0},5).wait(7));

	// partizan.png
	this.instance_11 = new lib.Символ30();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-207.3,-36.7,0.102,1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(161).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(82).to({scaleX:0.1,alpha:0},5).wait(87));

	// dynamo.png
	this.instance_12 = new lib.Символ29();
	this.instance_12.parent = this;
	this.instance_12.setTransform(204.6,-38.3,0.119,1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(161).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(82).to({scaleX:0.12,alpha:0},5).wait(87));

	// shakhtar.png
	this.instance_13 = new lib.Символ25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(204.6,-45.4,0.142,1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(61).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(90).to({scaleX:0.14,alpha:0},5).wait(179));

	// mc.png
	this.instance_14 = new lib.Символ26();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-207,-45,0.125,1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(61).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(90).to({scaleX:0.13,alpha:0},5).wait(179));

	// real
	this.instance_15 = new lib.Символ24();
	this.instance_15.parent = this;
	this.instance_15.setTransform(205,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56).to({scaleX:0.05,alpha:0},5).wait(273).to({scaleX:1,alpha:1},5).wait(1));

	// borussia
	this.instance_16 = new lib.Символ23();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-206.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(56).to({scaleX:0.08,alpha:0},5).wait(273).to({scaleX:1,alpha:1},5).wait(1));

	// Logo
	this.instance_17 = new lib.Символ7();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.5,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(340));

	// yellow |
	this.instance_18 = new lib.Символ15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,41.8,1.676,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(56).to({scaleX:0.24,scaleY:0.14,skewY:180,alpha:0},5).to({scaleX:1.68,scaleY:1,skewY:0,alpha:1},5).wait(90).to({scaleX:0.24,scaleY:0.14,skewY:180,alpha:0},5).to({scaleX:1.68,scaleY:1,skewY:0,alpha:1},5).wait(82).to({scaleX:0.24,scaleY:0.14,skewY:180,alpha:0},5).to({scaleX:1.68,scaleY:1,skewY:0,alpha:1},5).wait(82));

	// VS
	this.instance_19 = new lib.Символ14();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0.6,-35.2,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(56).to({regX:0.1,regY:-0.1,scaleX:1.23,scaleY:1.23,x:0.7,y:-35.3,alpha:0},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:0.6,y:-35.2,alpha:1},5,cjs.Ease.get(1)).wait(90).to({regX:0.1,regY:-0.1,scaleX:1.23,scaleY:1.23,x:0.7,y:-35.3,alpha:0},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:0.6,y:-35.2,alpha:1},5,cjs.Ease.get(1)).wait(82).to({regX:0.1,regY:-0.1,scaleX:1.23,scaleY:1.23,x:0.7,y:-35.3,alpha:0},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:0.6,y:-35.2,alpha:1},5,cjs.Ease.get(1)).wait(82));

	// EL
	this.instance_20 = new lib.Символ18();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-3.5,41.7,0.133,0.713);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(253).to({_off:false},0).to({scaleX:0.71,x:65.8,alpha:1},5).wait(71).to({scaleX:0.13,x:-3.5,alpha:0},5).wait(6));

	// Слой 8
	this.instance_21 = new lib.Символ40();
	this.instance_21.parent = this;
	this.instance_21.setTransform(12.9,41.6,0.218,1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(161).to({_off:false},0).to({scaleX:1,x:52.9,alpha:1},5).wait(82).to({scaleX:0.22,x:12.9,alpha:0},5).wait(87));

	// Слой 7
	this.instance_22 = new lib.Символ16();
	this.instance_22.parent = this;
	this.instance_22.setTransform(13.1,41.1,0.211,1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(61).to({_off:false},0).to({scaleX:1,x:65.9,y:41.4,alpha:1},5).wait(90).to({scaleX:0.21,x:13.1,y:41.1,alpha:0},5).wait(179));

	// CL
	this.instance_23 = new lib.Символ17();
	this.instance_23.parent = this;
	this.instance_23.setTransform(65.6,41.7,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(56).to({regX:0.1,regY:0.1,scaleX:0.3,x:18.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(278));

	// date4
	this.instance_24 = new lib.Символ52();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-3.2,40.9,0.183,1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(253).to({_off:false},0).to({scaleX:1,x:-51.6,alpha:1},5,cjs.Ease.get(1)).wait(71).to({scaleX:0.18,x:-3.2,alpha:0},5).wait(6));

	// date3
	this.instance_25 = new lib.Символ22();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1.8,41.8,0.11,1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(161).to({_off:false},0).to({scaleX:1,x:-63.4,alpha:1},5).wait(82).to({scaleX:0.11,x:1.8,alpha:0},5).wait(87));

	// date2
	this.instance_26 = new lib.Символ20();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-1,41.8,0.148,1);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(61).to({_off:false},0).to({scaleX:1,x:-63.4,alpha:1},5).wait(90).to({scaleX:0.1,x:1,alpha:0},5).wait(179));

	// date1
	this.instance_27 = new lib.Символ19();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-63.6,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(56).to({scaleX:0.19,x:-3,alpha:0},5).wait(273).to({scaleX:0.18,x:0.1},0).to({scaleX:1,x:-63.6,alpha:1},5).wait(1));

	// TXT4
	this.instance_28 = new lib.Символ38();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-3.4,-35.5,0.826,0.826);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(248).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(71).to({scaleX:0.83,scaleY:0.83,alpha:0},10).wait(1));

	// TXT3
	this.instance_29 = new lib.Символ10();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0.8,-34.3,0.752,0.752);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(161).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(82).to({scaleX:0.75,scaleY:0.75,alpha:0},10,cjs.Ease.get(1)).wait(82));

	// TXT2
	this.instance_30 = new lib.Символ12();
	this.instance_30.parent = this;
	this.instance_30.setTransform(0,-34.4,0.751,0.751,0,0,0,0,-0.1);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(56).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-34.2,alpha:1},10,cjs.Ease.get(1)).wait(90).to({regY:-0.1,scaleX:0.75,scaleY:0.75,y:-34.4,alpha:0},10,cjs.Ease.get(1)).wait(174));

	// TXT1
	this.instance_31 = new lib.Символ13();
	this.instance_31.parent = this;
	this.instance_31.setTransform(0.8,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(56).to({regX:0.1,regY:-0.1,scaleX:0.77,scaleY:0.77,x:0.9,y:-34.4,alpha:0},10,cjs.Ease.get(1)).wait(263).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.8,y:-34.3,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// bg1.jpg
	this.instance_32 = new lib.Символ2();
	this.instance_32.parent = this;
	this.instance_32.setTransform(7,0,1.034,1.034);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(340));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.8,-159.2,681.5,339.1);


// stage content:
(lib.betcity640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(330,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(317.2,143.3,681.5,339.1);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/atletico.png?1507649606235", id:"atletico"},
		{src:"images/barca.png?1507649606235", id:"barca"},
		{src:"images/bg.jpg?1507649606235", id:"bg"},
		{src:"images/bonucci.png?1507649606235", id:"bonucci"},
		{src:"images/btn1.png?1507649606235", id:"btn1"},
		{src:"images/cska.png?1507649606235", id:"cska"},
		{src:"images/dzagoev.png?1507649606235", id:"dzagoev"},
		{src:"images/griezmann.png?1507649606235", id:"griezmann"},
		{src:"images/icardi.png?1507649606235", id:"icardi"},
		{src:"images/inter.png?1507649606235", id:"inter"},
		{src:"images/krasnodar.png?1507649606235", id:"krasnodar"},
		{src:"images/liver.png?1507649606235", id:"liver"},
		{src:"images/logo.png?1507649606235", id:"logo"},
		{src:"images/lukaku.png?1507649606235", id:"lukaku"},
		{src:"images/messi.png?1507649606235", id:"messi"},
		{src:"images/milan.png?1507649606235", id:"milan"},
		{src:"images/mu.png?1507649606235", id:"mu"},
		{src:"images/salah.png?1507649606235", id:"salah"},
		{src:"images/smolov.png?1507649606235", id:"smolov"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;