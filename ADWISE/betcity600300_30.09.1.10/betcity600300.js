(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,109);


(lib.chelsea = function() {
	this.initialize(img.chelsea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,229);


(lib.chelsealogo = function() {
	this.initialize(img.chelsealogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,146);


(lib.dm = function() {
	this.initialize(img.dm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,229);


(lib.dmlogo = function() {
	this.initialize(img.dmlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,293);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,44);


(lib.loko = function() {
	this.initialize(img.loko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,229);


(lib.lokologo = function() {
	this.initialize(img.lokologo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,186);


(lib.mancity = function() {
	this.initialize(img.mancity);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,228);


(lib.mclogo = function() {
	this.initialize(img.mclogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,181);


(lib.milan = function() {
	this.initialize(img.milan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,237);


(lib.milanlogo = function() {
	this.initialize(img.milanlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,190);


(lib.roma = function() {
	this.initialize(img.roma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,229);


(lib.romalogo = function() {
	this.initialize(img.romalogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,216);// helper functions:

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


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70C").s().p("AmQC8QgHgBgFgCQgHgCgFgEQgFgDgFgFIgHgLQgCgGgCgGQgCgIABgIQAAgIABgJQADgJADgJQADgIAEgHIALgNIALgLIANgIIAOgGQAJgCAUgCQALAAALADQAKADAIAGQAKAKADAHQACAFABAFIABAOIgeAAQgBgIgCgFQgDgEgEgDQgEgDgGgBIgNgBQgKABgJADQgJAEgGAGQgIAHgEAIQgFAJgCAKQgCAKABAHQABAJAEAGQAEAHAHADQAIADAKAAQAHAAAGgBQAHgCAFgDQAFgEAEgEQAFgGADgGIAgAAIgGANIgIAMQgNAMgGAFQgLAHgMADQgMADgLAAQgHAAgIgCgAglC9IAgiUIAeAAIgSBUIBkhUIALAAIggCTIgfAAIAShUIhlBVgAGfC8IgFgYIg+AAIgQAYIgiAAIABgEIBiiQIAOAAIAkCQIAAAEgAGUCKIgKgyIgeAyIAoAAgADIC8IAKgwIgaAAIgpAwIghAAIABgEIAsgzQgFgCgEgDQgEgEgCgEQgCgEgBgFIgBgKQAAgMAEgKQAEgLAIgIIAJgIIALgFQAGgDAGgBIAQgCIA+AAIgfCTgAC3BHQgFACgDAEQgEAEgCAFQgCAEAAAFQAAAIAEAGQAFAFAIAAIAfAAIALgtIggAAQgGAAgFACgAiuC8IAgiTIA+AAIAMABQAGABAEADQAIAEAFAIQAEAHACALQACAJgCAKQgCALgFAKQgFAJgIAHQgJAHgKAEQgMADgMABIgfAAIgJApgAiBB4IAhAAQAEAAAGgCQAEgCAEgEIAGgIQADgFABgFQABgKgDgHQgDgEgDgDQgEgCgFAAIghAAgAklC8IAfiTIBaAAIgGAcIg6AAIgHAeIA3AAIgFAcIg3AAIgIAhIA9AAIgHAcgAgbgpIAGgXQAGABAEgBQAFAAADgDQADgDAFgOIAhhnIBjAAIggCTIgeAAIAZh3IgpAAIgXBMQgEAPgGAJQgFAJgHAEQgHAFgKABIgGAAIgSgBgACLgoIAgiTIAgAAIgSBTIBkhUIAKAAIgfCUIggAAIAShUIhlBUgAmwgoIAgiTIAfAAIgSBTIBlhUIAKAAIggCUIgfAAIAShUIhmBUgAF5goIAKgxIgaAAIgpAxIghAAIABgFIAsgzQgEgCgFgEQgDgDgCgEQgCgEgCgFIgBgLQAAgLAFgKQAEgLAHgIIAJgHIALgHQAHgCAGgBIAPgBIA+AAIgeCTgAFpieQgGACgDAEQgDADgDAFQgBAFAAAGQAAAIADAEQAGAGAIAAIAfAAIAKgtIggAAQgFAAgFACgAg8goIgGgZIg9AAIgQAZIgiAAIABgFIBiiQIAOAAIAkCQIAAAFgAhHhcIgKgwIgeAwIAoAAgAj4goIAah4IgoAAIAGgbIBsAAIgGAbIgnAAIgZB4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-44.7,-19,89.5,38), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70C").s().p("AD4C8IAGgXQAGABAEgBQAEAAAEgDQADgDAGgOIAghnIBjAAIgfCTIgfAAIAZh3IgoAAIgYBNQgEAOgFAJQgGAJgGAFQgIAEgKABIgHABIgRgCgAGfC9IAfiTIAgAAIgRBTIBkhUIAKAAIggCUIgfAAIAShUIhlBUgAMNC9IgFgZIg9AAIgRAZIgiAAIABgEIBiiRIAPAAIAkCRIAAAEgAMCCKIgJgxIgeAxIAnAAgAI9C9IAgiTIBZAAIgGAcIg7AAIgYB3gAAaC9IAgiTIA+AAIAMABQAFABAEACQAJAEAFAIQAFAIABAKQABAJgBALQgBALgGAJQgFAJgJAHQgHAHgMAEQgLAEgMAAIgfAAIgJAqgABHB4IAgAAQAFAAAFgCQAFgCAEgEIAGgIQACgEABgGQACgKgDgHQgCgEgEgDQgEgCgGAAIgfAAgAhdC9IAgiTIBZAAIgGAbIg5AAIgGAeIA1AAIgGAcIg2AAIgHAhIA7AAIgFAdgAjlC9IAfiTIAfAAIgJAuIAfAAQALAAAHADQAJADAFAGQAFAFADAIQACAHAAAJIAAAMIgDALIgGAKIgIAJIgJAHIgLAGIgNAEIgNABgAjBChIAhAAIALgCIAIgGQAEgEACgFQACgFAAgFQAAgJgFgFQgEgFgJAAIggAAgAkmC9IAShQIgvAuIgEAAIgbguIgSBQIgfAAIAfiUIALAAIAsBGIBKhGIAMAAIggCUgAoLC9IAgiTIBaAAIgHAbIg5AAIgHAeIA2AAIgFAcIg3AAIgHAhIA8AAIgGAdgAqUC9IAgiTIA+AAIAMABQAGABAEACQAIAEAFAIQAEAIACAKQACAJgCALQgCALgFAJQgFAJgIAHQgJAHgKAEQgMAEgMAAIgfAAIgJAqgApnB4IAhAAQAEAAAGgCQAEgCAEgEIAGgIQADgEABgGQABgKgDgHQgDgEgDgDQgEgCgFAAIghAAgArVC9IAZh3Ig4AAIgZB3IggAAIAgiTIB3AAIggCTgACrCDIAFgZIBJAAIgFAZgAgdgpIAGgXQAGABAEgBQAFAAADgDQADgDAFgOIAghnIBjAAIgfCTIgfAAIAZh3IgoAAIgYBNQgEAOgFAJQgGAJgGAFQgIAEgJABIgHABIgRgCgACJgoIAfiTIAgAAIgRBTIBkhUIAKAAIggCUIgfAAIAShUIhlBUgAF2goIAKgxIgaAAIgoAxIgiAAIABgFIAtgzQgFgCgEgDQgEgEgBgEQgDgEgBgFIgBgKQAAgMAEgKQAEgKAIgJIAJgHIALgGQAGgDAGgBIAPgBIA/AAIgfCTgAFmieQgFACgEAEQgDAEgCAFQgCAFAAAFQAAAIAEAFQAFAFAIAAIAgAAIAKgtIghAAQgFAAgFACgAh9goIAfiTIBaAAIgGAcIg6AAIgaB3gAi+goIANg+Ig5AAIgNA+IgfAAIAfiTIAgAAIgMA4IA4AAIAMg4IAfAAIgeCTgAlFgoIgFgZIg9AAIgRAZIgjAAIABgEIBiiRIAPAAIAlCRIgBAEgAlQhbIgKgxIgeAxIAoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-81.4,-19,162.8,38), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.milan();
	this.instance.parent = this;
	this.instance.setTransform(-78,-102,1.122,1.122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-78,-102,150.4,266), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.roma();
	this.instance.parent = this;
	this.instance.setTransform(-88.1,-157.8,1.28,1.28,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-133.9,-157.8,249.4,321.8), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dm();
	this.instance.parent = this;
	this.instance.setTransform(-96,-117,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-96,-117,197.8,263.3), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.loko();
	this.instance.parent = this;
	this.instance.setTransform(-189,-111,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-189,-111,380.8,256.5), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mancity();
	this.instance.parent = this;
	this.instance.setTransform(-125,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-125,-126,246,228), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.chelsea();
	this.instance.parent = this;
	this.instance.setTransform(-86,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-86,-113,135,229), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.milanlogo();
	this.instance.parent = this;
	this.instance.setTransform(-46,-109,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-46,-109,105.3,212.9), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.romalogo();
	this.instance.parent = this;
	this.instance.setTransform(-75,-93,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-75,-93,147.4,191.7), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvC8QgKgEgGgGQgGgHgCgJQgCgKACgMIALgyQADgMAGgKQAGgJAJgHQAJgGALgEQAKgDAMAAQALAAAJADQAJAEAGAGQAHAHACAJQACAKgDAMIgKAyQgDAMgGAKQgGAJgJAHQgJAGgLAEQgKADgMAAQgLAAgJgDgADWA+IgKAEQgFADgEAEQgDAEgDAFIgFAOIgJAmQgCAGAAAIQAAAFACAEQACAEADADQADADAFABQAFABAFAAQAGAAAFgBQAGgBAEgDQAFgDADgEQAEgEACgFQAEgHABgHIAKgmIABgOQAAgFgBgEIgFgHIgIgEQgFgCgFAAQgGAAgFACgAAlC8QgJgEgGgGQgGgHgCgJQgDgKADgMIALgyQACgMAHgKQAGgJAJgHQAJgGAKgEQALgDALAAQAMAAAJADQAJAEAGAGQAGAHACAJQACAKgCAMIgLAyQgCAMgHAKQgGAJgJAHQgJAGgKAEQgLADgLAAQgMAAgJgDgABMA+IgKAEQgFADgDAEQgEAEgCAFIgFAOIgJAmQgCAGAAAIQAAAFACAEQABAEAEADQADADAFABQAEABAGAAQAGAAAFgBQAFgBAFgDQAEgDAEgEQAEgEACgFQADgHACgHIAJgmIACgOQAAgFgCgEIgFgHIgIgEQgEgCgGAAQgGAAgFACgAguC8QgDgDAAgFQAAgHAFgEQAFgEAHAAQAFAAADACQAEAEAAAEQAAAHgGAFQgFAEgGAAQgGAAgDgDgAiaC8IAxg5QgHADgIAAQgJAAgIgCQgIgDgFgFQgGgFgDgHQgDgHAAgJIABgNIAEgMQADgFAEgFIAIgIQAGgFAPgGQAMgEANAAQAKAAAJACQAIADAGAFQAGAFADAHQAEAHAAAKQAAALgFAKQgEAJgJALIg7BGgAhyA9QgHACgFAFQgFAEgDAGQgDAHAAAHQgBAGACAEQABAEAEADQADADAEACQAFABAGAAQAIAAAGgCQAHgDAFgEQAGgFADgGQADgGAAgIQAAgFgBgFQgCgEgDgDQgDgCgFgCQgFgBgFAAQgIAAgHACgAkQC8IAEgTIAbAAIAXhsIgXAAIAEgUIAvAAIgbCAIAbAAIgEATgAgfB4QgEgDAAgFQAAgGAGgFQAFgEAGAAQAGAAADADQADADAAAFQAAAGgFAFQgFAEgHAAQgFAAgDgDgAB0gpQgJgEgGgGQgGgHgCgJQgDgKADgMIALgyQACgMAHgKQAGgJAJgHQAJgGAKgEQALgDALAAQAMAAAJADQAJAEAGAGQAGAHACAJQACAKgCAMIgLAyQgCAMgHAKQgGAJgJAHQgJAGgKAEQgLADgLAAQgMAAgJgDgACbinIgKAEQgFADgDAEQgEAEgCAFIgFAOIgJAmQgCAGAAAIQAAAFACAEQABAEAEADQADADAFABQAEABAGAAQAGAAAFgBQAFgBAFgDQAEgDAEgEQAEgEACgFQADgHACgHIAJgmIACgOQAAgFgCgEIgFgHIgIgEQgEgCgGAAQgGAAgFACgAgNgpIAEgTIAaAAIAXhsIgXAAIAEgUIAvAAIgbCAIAbAAIgEATgAh8gpIBmiTIAXAAIhlCTgAjWgpIAEgTIAbAAIAXhsIgXAAIAEgUIAvAAIgbCAIAbAAIgEATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-27.3,-19.1,54.6,38.3), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lokologo();
	this.instance.parent = this;
	this.instance.setTransform(-62,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-62,-91,136,186), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dmlogo();
	this.instance.parent = this;
	this.instance.setTransform(-61,-102,0.649,0.649);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-61,-102,105.8,190.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mclogo();
	this.instance.parent = this;
	this.instance.setTransform(-82,-65,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-82,-65,161.8,161.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chelsealogo();
	this.instance.parent = this;
	this.instance.setTransform(-83,-82,1.107,1.107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-83,-82,161.7,161.7), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACmC8QgJgEgGgGQgGgHgCgJQgDgKADgMIALgyQACgMAHgKQAGgJAJgHQAJgGAKgEQALgDALAAQAMAAAJADQAJAEAGAGQAGAHACAJQACAKgCAMIgLAyQgCAMgHAKQgGAJgJAHQgJAGgKAEQgLADgLAAQgMAAgJgDgADNA+IgKAEQgFADgDAEQgEAEgCAFIgFAOIgJAmQgCAGAAAIQAAAFACAEQABAEAEADQADADAFABQAEABAGAAQAGAAAFgBQAFgBAFgDQAEgDAEgEQAEgEACgFQADgHACgHIAJgmIACgOQAAgFgCgEIgFgHIgIgEQgEgCgGAAQgGAAgFACgAAlC8QgIgDgFgGQgGgGgCgIQgCgIACgKIAUAAQAAAFABAFQABAEAEADQADADAEABQAFACAFAAQAIAAAHgDQAGgCAFgFQAEgEADgHQADgGAAgHQAAgHgEgFQgDgFgGgDQgGgCgHgBIgPACIABgEIAsgyIg7AAIAEgUIBdAAIgBAEIgwA3QAHAAAGADQAGADADAEQAEAEACAGQACAGAAAHIgBALIgEALQgEAKgIAIQgNAKgHADQgRAFgJAAQgKAAgIgDgAglC8QgDgDAAgFQAAgHAFgEQAFgEAHAAQAFAAADACQADAEAAAEQAAAHgFAFQgFAEgHAAQgFAAgDgDgAiIC8QgJgDgGgFQgGgEgDgIQgEgHAAgKQAAgIAFgOQAFgJAIgJIA7hHIAbAAIgwA6QAHgEAHAAQAKAAAHACQAIADAGAFQAFAFADAHQADAHAAAJQAAAHgBAGIgEAMIgHAKIgIAIQgNAJgIADQgMADgNAAQgKAAgIgCgAh0BzQgHADgFAEQgFAFgDAGQgDAGAAAIQgBAFACAFQACAEADADQADADAFABQAEACAGAAQAIAAAHgDQAHgCAFgEQAFgFADgGQADgHAAgHQABgGgCgEQgCgEgDgDIgIgEQgEgCgGAAQgIAAgHACgAkHC8IAEgTIAaAAIAYhsIgYAAIAEgUIAvAAIgbCAIAbAAIgEATgAgXB4QgDgDAAgFQAAgGAFgFQAFgEAHAAQAFAAADADQACADAAAFQAAAGgEAFQgFAEgGAAQgGAAgDgDgAB0gpQgJgEgGgGQgGgHgCgJQgDgKADgMIALgyQACgMAHgKQAGgJAJgHQAJgGAKgEQALgDALAAQAMAAAJADQAJAEAGAGQAGAHACAJQACAKgCAMIgLAyQgCAMgHAKQgGAJgJAHQgJAGgKAEQgLADgLAAQgMAAgJgDgACbinIgKAEQgFADgDAEQgEAEgCAFIgFAOIgJAmQgCAGAAAIQAAAFACAEQABAEAEADQADADAFABQAEABAGAAQAGAAAFgBQAFgBAFgDQAEgDAEgEQAEgEACgFQADgHACgHIAJgmIACgOQAAgFgCgEIgFgHIgIgEQgEgCgGAAQgGAAgFACgAgNgpIAEgTIAaAAIAXhsIgXAAIAEgUIAvAAIgbCAIAbAAIgEATgAh8gpIBmiTIAXAAIhlCTgAjWgpIAEgTIAbAAIAXhsIgXAAIAEgUIAvAAIgbCAIAbAAIgEATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-26.4,-19.1,52.9,38.3), null);


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


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.3,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-94.5,-44.1,189.7,84), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.7,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-70.4,-44.2,139.5,86.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACgC8QgKgDgGgHQgGgHgCgJQgCgKACgLIALgzQADgLAGgKQAGgJAJgHQAJgHALgDQAKgEAMAAQALAAAJAEQAJADAGAHQAHAHACAJQACAKgDALIgKAzQgDALgGAKQgGAJgJAHQgJAHgLADQgKAEgMAAQgLAAgJgEgADHA+IgKAEQgFADgEAEQgDAEgDAGIgFAOIgJAmQgCAFAAAIQAAAGACAEQACAEADACQADADAFABQAFACAFAAQAGAAAFgCQAGgBAEgDQAFgCADgEQAEgEACgGQAEgHABgGIAKgmIABgOQAAgGgBgEIgFgHIgIgEQgFgBgFAAQgGAAgFABgAAfC8QgIgDgGgFQgFgGgCgIQgDgIACgLIAVAAQgBAGACAEQABAEADADQADADAFACQAEABAGAAQAHAAAHgCQAGgDAFgEQAFgFACgGQADgGAAgHQAAgIgEgFQgDgFgGgCQgFgDgIAAIgOABIABgEIArgxIg7AAIAEgUIBdAAIAAAEIgxA3QAIAAAFADQAGACAEAFQAEAEACAGQACAGAAAGIgCAMIgDAKQgFALgIAIQgMAKgIACQgQAFgJAAQgKAAgIgDgAgsC8QgDgDAAgEQAAgHAFgFQAFgEAHAAQAFAAADADQAEADAAAFQAAAGgGAFQgFAEgGAAQgGAAgDgDgAiYC9IAxg6QgHAEgIAAQgJAAgIgDQgIgDgFgFQgGgFgDgHQgDgHAAgIIABgNIAEgMQADgGAEgEIAIgJQAGgFAPgGQAMgEANAAQAKAAAJADQAIACAGAFQAGAFADAHQAEAIAAAJQAAAMgFAJQgEAKgJAKIg7BHgAhwA9QgHADgFAEQgFAFgDAGQgDAGAAAIQgBAFACAFQABAEAEADQADADAEABQAFACAGAAQAIAAAGgDQAHgCAFgFQAGgEADgGQADgHAAgIQAAgFgBgEQgCgEgDgDQgDgDgFgBQgFgCgFAAQgIAAgHACgAkOC9IAEgTIAbAAIAXhtIgXAAIAEgTIAvAAIgbCAIAbAAIgEATgAgdB5QgEgDAAgFQAAgHAGgEQAFgFAGAAQAGAAADADQADADAAAFQAAAHgFAEQgFAFgHAAQgFAAgDgDgABUgpQgJgDgGgHQgGgHgCgJQgDgKADgLIALgzQACgLAHgKQAGgJAJgHQAJgHAKgDQALgEALAAQAMAAAJAEQAJADAGAHQAGAHACAJQACAKgCALIgLAzQgCALgHAKQgGAJgJAHQgJAHgKADQgLAEgLAAQgMAAgJgEgAB7inIgKAEQgFADgDAEQgEAEgCAGIgFAOIgJAmQgCAFAAAIQAAAGACAEQABAEAEACQADADAFABQAEACAGAAQAGAAAFgCQAFgBAFgDQAEgCAEgEQAEgEACgGQADgHACgGIAJgmIACgOQAAgGgCgEIgFgHIgIgEQgEgBgGAAQgGAAgFABgAihgpQgKgDgGgHQgGgHgCgJQgCgKACgLIALgzQADgLAGgKQAGgJAJgHQAJgHALgDQAKgEAMAAQALAAAJAEQAJADAGAHQAHAHACAJQACAKgDALIgKAzQgDALgGAKQgGAJgJAHQgJAHgLADQgKAEgMAAQgLAAgJgEgAh6inIgKAEQgFADgEAEQgDAEgDAGIgFAOIgJAmQgCAFAAAIQAAAGACAEQACAEADACQADADAFABQAFACAFAAQAGAAAFgCQAGgBAEgDQAFgCADgEQAEgEACgGQAEgHABgGIAKgmIABgOQAAgGgBgEIgFgHIgIgEQgFgBgFAAQgGAAgFABgAkigpQgIgDgGgFQgFgGgCgIQgDgIACgLIAVAAQgBAGACAEQABAEADADQADADAFACQAEABAGAAQAHAAAHgCQAGgDAFgEQAFgFACgGQADgGAAgHQAAgIgEgFQgDgFgGgCQgFgDgIAAIgOABIABgEIArgxIg7AAIAEgUIBdAAIAAAEIgxA3QAIAAAFADQAGACAEAFQAEAEACAGQACAGAAAGIgCAMIgDAKQgFALgIAIQgMAKgIACQgQAFgJAAQgKAAgIgDgADRgoIAyg6QgIAEgHAAQgJAAgIgDQgIgDgGgFQgFgFgDgHQgEgHAAgIQAAgHACgGIAEgMQACgGAEgEIAIgJQAGgFAPgGQAMgEAOAAQAKAAAIADQAIACAGAFQAHAFADAHQADAIAAAJQAAAMgEAJQgEAKgKAKIg7BHgAD6ioQgHADgFAEQgGAFgDAGQgDAGAAAIQAAAFABAFQACAEADADQADADAFABQAFACAFAAQAIAAAHgDQAHgCAFgFQAFgEADgGQADgHABgIQAAgFgCgEQgBgEgEgDQgDgDgEgBQgFgCgGAAQgIAAgGACgAhAgoIBliTIAYAAIhlCTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-31.3,-19.2,62.7,38.3), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-16,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-100,-16,200,31.7), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70C").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-81.4,-19,162.8,38.1), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5GjQgGgBgGgCQgFgCgGgEQgEgDgFgEIgGgKIgGgLQgCgGAAgHQgBgIABgIQAAgJADgJQADgJAEgIQADgIAGgHIAMgMIAOgKIAPgHIAQgEIAQgCQAKAAAPAEIAKAFIAJAHIAHAJIAGAKIADAMQABAHABAHQAAAKgCAJQgCAJgEAJQgEAIgFAHQgEAHgHAGQgHAHgHAEQgHAFgJADQgIAEgJABQgJACgKAAgAhmEnQgPAHgFAGIgIAJIgIALIgDANQgCAHgBAHQAAALADAJQACAIAGAFQAFAFAHACQAIADAJAAQAHAAAQgFIAMgFIAKgIIAIgJIAGgLIAFgNQABgHAAgHQABgKgDgIQgDgHgFgGQgFgFgHgDQgIgDgIAAQgRACgIACgAESGiIgIgfIhEAAIgVAfIgaAAIAAgDIBjiRIAMAAIAlCRIgBADgAEHFvIgPg7IglA7IA0AAgABtGiIAUhcIg3A2IgEAAIgeg2IgUBcIgYAAIAeiUIAJAAIArBMIBOhMIAJAAIggCUgAk2GiIAeiTIA9AAQANAAAIAEQAJAEAFAHQAFAGACAKQABAJAAALQgCAKgFAKQgFAJgIAHQgIAIgLAEQgPAEgIAAIgmAAIgKAsgAkRFgIAlAAQAHAAAHgDQAHgDAEgFQAFgFADgGQADgHAAgHIgBgJQgCgFgCgDQgCgDgFgCQgEgCgHAAIgkAAgAhIkPIAFgUIALABQAFgBADgDQAEgDAGgOIAihrIBdAAIgfCTIgZAAIAch9IgwAAIgaBWQgEANgFAIQgFAJgHAEQgGAFgJABIgJAAIgOgBgAFNkPIAOhCIhDAAIgOBCIgZAAIAgiTIAYAAIgNA7IBEAAIANg7IAYAAIggCTgADIkPIgIgfIhFAAIgUAfIgaAAIAAgDIBjiRIALAAIAlCRIgBADgAC8lCIgOg7IgmA7IA0AAgAh2kPIAYhkIhvBkIgJAAIAfiTIAZAAIgXBiIBuhjIAJAAIggCUgAkTkPIAUhcIg3A2IgDAAIgfg2IgUBcIgYAAIAfiUIAJAAIAqBMIBOhMIAJAAIgfCUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-38.9,-42,77.8,84.1), null);


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


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.3,y:-8.5},24,cjs.Ease.get(-1)).to({x:-2.8,y:-17.4},25,cjs.Ease.get(1)).to({x:-1.4,y:-8.7},25,cjs.Ease.get(-1)).to({x:0,y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-102,150.4,266);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.7,y:-10.9},24,cjs.Ease.get(-1)).to({x:3.5,y:-22.3},25,cjs.Ease.get(1)).to({x:1.7,y:-10.7},26,cjs.Ease.get(-1)).to({x:0,y:0},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.9,-157.8,249.4,321.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.6,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-21.9,-9.9,43.8,18.6), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.7},24,cjs.Ease.get(-1)).to({y:11.7},25,cjs.Ease.get(0.94)).to({y:5.9},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(0.94)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-111,380.8,256.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15.4},24,cjs.Ease.get(-1)).to({y:-23},25,cjs.Ease.get(1)).to({y:-15.6},25,cjs.Ease.get(-1)).to({y:-8.1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-125.1,197.8,263.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.2},20,cjs.Ease.get(-1)).to({y:-3.2},24,cjs.Ease.get(1)).to({y:3.5},22,cjs.Ease.get(-1)).to({y:10.4},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-115.6,246,228);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.9},24,cjs.Ease.get(-1)).to({y:16},25,cjs.Ease.get(1)).to({y:8},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-113,135,229);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(13,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-14.3,-19.1,54.6,38.3), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-12.4,-19.1,52.9,38.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(9.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-21.8,-19.2,62.7,38.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-0.7,0.733,0.733,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-72.9,-14.6,119.3,27.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-13.2,0.4,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-71.1,-13.1,115.9,27), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-38.9,-44.2,77.8,84.1), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-16,200,31.7);


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


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-71.1,-13.9,115.9,27), null);


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

	// Logo
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(269));

	// yellow |
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,41.8,1.676,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66).to({scaleX:0.24,scaleY:0.14,skewY:180,alpha:0},5).to({scaleX:1.68,scaleY:1,skewY:0,alpha:1},5).wait(90).to({scaleX:0.24,scaleY:0.14,skewY:180,alpha:0},5).to({scaleX:1.68,scaleY:1,skewY:0,alpha:1},5).wait(82).to({scaleX:0.24,scaleY:0.14,skewY:180,alpha:0},5).to({scaleX:1.68,scaleY:1,skewY:0,alpha:1},5).wait(1));

	// VS
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,-35.2,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({regX:0.1,regY:-0.1,scaleX:1.23,scaleY:1.23,x:0.7,y:-35.3,alpha:0},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:0.6,y:-35.2,alpha:1},5,cjs.Ease.get(1)).wait(90).to({regX:0.1,regY:-0.1,scaleX:1.23,scaleY:1.23,x:0.7,y:-35.3,alpha:0},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:0.6,y:-35.2,alpha:1},5,cjs.Ease.get(1)).wait(82).to({regX:0.1,regY:-0.1,scaleX:1.23,scaleY:1.23,x:0.7,y:-35.3,alpha:0},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:0.6,y:-35.2,alpha:1},5,cjs.Ease.get(1)).wait(1));

	// BTN
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(269));

	// part.png
	this.instance_4 = new lib.Символ40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-204,36,0.191,0.862);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171).to({_off:false},0).to({scaleX:0.86,alpha:1},5).wait(82).to({scaleX:0.19,alpha:0},5).to({_off:true},1).wait(5));

	// kiev.png
	this.instance_5 = new lib.Символ39();
	this.instance_5.parent = this;
	this.instance_5.setTransform(205.9,53.9,0.161,0.777,-8.7,0,0,-0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).to({regX:0.1,scaleX:0.78,x:206,alpha:1},5).wait(82).to({regX:-0.1,scaleX:0.16,x:205.9,alpha:0},5).to({_off:true},1).wait(5));

	// player4
	this.instance_6 = new lib.Символ35();
	this.instance_6.parent = this;
	this.instance_6.setTransform(192.5,50.5,0.161,0.876,0,0,0,0,-0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({regY:0,scaleX:0.88,y:50.6,alpha:1},5).wait(90).to({regY:-0.1,scaleX:0.16,y:50.5,alpha:0},5).wait(98));

	// player3
	this.instance_7 = new lib.Символ36();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-207.9,43.9,0.123,0.86,0,0,0,0,-0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({regY:0,scaleX:0.86,y:44,alpha:1},5).wait(90).to({regY:-0.1,scaleX:0.12,y:43.9,alpha:0},5).wait(98));

	// player2
	this.instance_8 = new lib.Символ34();
	this.instance_8.parent = this;
	this.instance_8.setTransform(205,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({scaleX:0.2,alpha:0},5).wait(192).to({scaleX:1,alpha:1},5).wait(1));

	// player1
	this.instance_9 = new lib.Символ32();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-197,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({scaleX:0.09,alpha:0},5).wait(192).to({scaleX:1,alpha:1},5).wait(1));

	// partizan.png
	this.instance_10 = new lib.Символ30();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-207.3,-36.7,0.102,1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(171).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(82).to({scaleX:0.1,alpha:0},5).wait(6));

	// dynamo.png
	this.instance_11 = new lib.Символ29();
	this.instance_11.parent = this;
	this.instance_11.setTransform(204.6,-38.3,0.119,1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(171).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(82).to({scaleX:0.12,alpha:0},5).wait(6));

	// shakhtar.png
	this.instance_12 = new lib.Символ25();
	this.instance_12.parent = this;
	this.instance_12.setTransform(204.6,-45.4,0.142,1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(71).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(90).to({scaleX:0.14,alpha:0},5).wait(98));

	// mc.png
	this.instance_13 = new lib.Символ26();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-207,-45,0.125,1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(90).to({scaleX:0.13,alpha:0},5).wait(98));

	// real
	this.instance_14 = new lib.Символ24();
	this.instance_14.parent = this;
	this.instance_14.setTransform(205,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(66).to({scaleX:0.05,alpha:0},5).wait(192).to({scaleX:1,alpha:1},5).wait(1));

	// borussia
	this.instance_15 = new lib.Символ23();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-206.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(66).to({scaleX:0.08,alpha:0},5).wait(192).to({scaleX:1,alpha:1},5).wait(1));

	// Слой 2
	this.instance_16 = new lib.Символ38();
	this.instance_16.parent = this;
	this.instance_16.setTransform(18.1,42.5,0.146,1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(171).to({_off:false},0).to({scaleX:1,x:56.6,alpha:1},5,cjs.Ease.get(1)).wait(82).to({scaleX:0.15,x:18.1,alpha:0},5).wait(6));

	// EL
	this.instance_17 = new lib.Символ18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-3.5,41.7,0.133,0.713);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(71).to({_off:false},0).to({scaleX:0.71,x:65.8,alpha:1},5).wait(90).to({scaleX:0.13,x:-3.5,alpha:0},5).to({_off:true},93).wait(5));

	// CL
	this.instance_18 = new lib.Символ17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(65.6,41.7,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(66).to({scaleX:0.1,x:0.3,alpha:0},5,cjs.Ease.get(1)).wait(192).to({scaleX:0.72,x:65.6,alpha:1},5).wait(1));

	// date4
	this.instance_19 = new lib.Символ22();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1.8,41.8,0.11,1);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(171).to({_off:false},0).to({scaleX:1,x:-63.4,alpha:1},5).wait(82).to({scaleX:0.11,x:1.8,alpha:0},5).wait(6));

	// date2
	this.instance_20 = new lib.Символ20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-1,41.8,0.148,1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(71).to({_off:false},0).to({scaleX:1,x:-63.4,alpha:1},5).wait(90).to({scaleX:0.1,x:1,alpha:0},5).wait(98));

	// date1
	this.instance_21 = new lib.Символ19();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-63.6,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(66).to({scaleX:0.19,x:-3,alpha:0},5).wait(192).to({scaleX:0.18,x:0.1},0).to({scaleX:1,x:-63.6,alpha:1},5).wait(1));

	// TXT4
	this.instance_22 = new lib.Символ10();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0.8,-34.3,0.752,0.752);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(171).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(82).to({scaleX:0.75,scaleY:0.75,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// TXT2
	this.instance_23 = new lib.Символ12();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,-34.4,0.751,0.751,0,0,0,0,-0.1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(66).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-34.2,alpha:1},10,cjs.Ease.get(1)).wait(90).to({regY:-0.1,scaleX:0.75,scaleY:0.75,y:-34.4,alpha:0},10,cjs.Ease.get(1)).wait(93));

	// TXT1
	this.instance_24 = new lib.Символ13();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0.8,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(66).to({regX:0.1,regY:-0.1,scaleX:0.77,scaleY:0.77,x:0.9,y:-34.4,alpha:0},10,cjs.Ease.get(1)).wait(182).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.8,y:-34.3,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// bg1.jpg
	this.instance_25 = new lib.Символ2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(7,0,1.034,1.034);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(269));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.8,-159.2,681.5,325.6);


// stage content:
(lib.betcity600300 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267.2,140.8,681.5,325.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1506500222827", id:"bg"},
		{src:"images/btn1.png?1506500222827", id:"btn1"},
		{src:"images/chelsea.png?1506500222827", id:"chelsea"},
		{src:"images/chelsealogo.png?1506500222827", id:"chelsealogo"},
		{src:"images/dm.png?1506500222827", id:"dm"},
		{src:"images/dmlogo.png?1506500222827", id:"dmlogo"},
		{src:"images/logo.png?1506500222827", id:"logo"},
		{src:"images/loko.png?1506500222827", id:"loko"},
		{src:"images/lokologo.png?1506500222827", id:"lokologo"},
		{src:"images/mancity.png?1506500222827", id:"mancity"},
		{src:"images/mclogo.png?1506500222827", id:"mclogo"},
		{src:"images/milan.png?1506500222827", id:"milan"},
		{src:"images/milanlogo.png?1506500222827", id:"milanlogo"},
		{src:"images/roma.png?1506500222827", id:"roma"},
		{src:"images/romalogo.png?1506500222827", id:"romalogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;