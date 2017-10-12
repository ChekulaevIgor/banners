(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,410);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,69);


(lib.diz = function() {
	this.initialize(img.diz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,360);


(lib.diztxt = function() {
	this.initialize(img.diztxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,93);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,46);


(lib.oxy = function() {
	this.initialize(img.oxy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,361);


(lib.oxytxt = function() {
	this.initialize(img.oxytxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,93);


(lib.smoke1 = function() {
	this.initialize(img.smoke1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,361);// helper functions:

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


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTCHIAAggIhQAAIAAAgIgkAAIAAhCIAPAAQAEgFADgHIACgSIAIitIBpAAIAADLIAQAAIAABCgAjKAmQgCANgCAHQgCAHgFAEIAxAAIAAipIggAAgAKzBnIAAjtIAlAAIAABZIASAAQAOAAAKAEQALAEAHAHQAHAIADALQAEALAAANIAAAfQAAAOgEALQgDALgHAIQgHAHgLAEQgKAEgOAAgALYBFIASAAQAKAAAEgFQAFgFgBgMIAAgkQABgMgFgEQgEgGgKAAIgSAAgAHnBnIAAjtIAmAAIAADLIAgAAIAAjLIAlAAIAADLIAgAAIAAjLIAmAAIAADtgAGnBnIAAjtIAmAAIAADtgAEjBnIAAjtIAlAAIAABZIASAAQANAAALAEQAKAEAIAHQAGAIAEALQADALAAANIAAAfQAAAOgDALQgEALgGAIQgIAHgKAEQgLAEgNAAgAFIBFIASAAQAJAAAEgFQAFgFAAgMIAAgkQAAgMgFgEQgEgGgJAAIgSAAgADlBnIAAiqIgaCqIgkAAIgcioIAACoIggAAIAAjtIAzAAIAcCoIAaioIA0AAIAADtgAgEBnIAAinIgvCnIgnAAIAAjtIAiAAIAACVIAsiVIApAAIAADtgAl8BnIAAjtIBmAAIAAAiIhBAAIAABDIA0AAIAAAhIg0AAIAABFIBBAAIAAAigAoGBnIAAjtIA4AAQAPAAALAEQAKACAHAHQAGAIAEAKQADAKAAAOIAAAIQAAATgGAMQgGAMgMAFQAHADAFAFQAGAFADAGQAGAMABATIAAAUQAAAOgEAKQgDALgIAGQgHAHgLAFQgKADgOAAgAnhBFIAWAAQAKAAAEgFQAFgFABgNIAAgVQgBgQgFgHQgGgFgNAAIgRAAgAnhglIAPAAQALAAAFgFQAHgHgBgNIAAgOQAAgMgEgGQgEgGgLAAIgSAAgAo8BnIgHgrIguAAIgHArIgiAAIAnjtIA2AAIAmDtgApIAcIgTh4IgRB4IAkAAgArRBnIAAhmIgqAAIAABmIgmAAIAAjtIAmAAIAABmIAqAAIAAhmIAmAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-80.2,-13.5,160.4,27), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke1();
	this.instance.parent = this;
	this.instance.setTransform(-228.9,-275.5,1.526,1.526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-228.9,-275.5,457.9,551), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgxYAaCMAAAg0DMBixAAAMAAAA0Dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-316,-166.5,632.2,333.1), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oxy();
	this.instance.parent = this;
	this.instance.setTransform(-120.1,-147,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-120.1,-147,240.3,294), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.diz();
	this.instance.parent = this;
	this.instance.setTransform(-109,-136.2,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-109,-136.2,218,272.5), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-364,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-364,-205,728,410), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWB4IAAgkIAjAAIAAAkgAgUBEQgDgHABgIQgBgaAVgcQAJgPAEgKIAFgQIABgUQAAgMgEgGQgFgFgIAAQgJAAgFAFQgFAGAAAMIAAAaIgjAAIAAgYQAAgOAEgLQADgLAHgIQAHgIAKgDQAKgEANAAQANAAALAEQAKADAHAIQAHAIADALQAEALAAAOQAAALgCAKIgFARQgFAMgKAOQgWAdAAAVIABAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-5.5,-12,11,24.1), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcB3IgHgrIgtAAIgGArIgiAAIAmjtIA1AAIAmDtgAAQArIgRh3IgSB3IAjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-6.5,-11.9,13.1,23.8), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXB3IgjhfIgLAWIAABJIgmAAIAAjtIAmAAIAABoIAvhoIAmAAIg0BqIA0CDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-6.2,-11.9,12.4,23.8), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyB3IAAjtIBlAAIAAAiIhAAAIAABCIAzAAIAAAhIgzAAIAABGIBAAAIAAAig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-5.1,-11.9,10.2,23.8), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIA5AAQANAAALAEQAKACAHAIQAHAGADALQADAKAAANIAAAJQAAATgGAMQgGAMgMAFQAHADAGAEQAFAEAEAIQAGALAAAUIAAATQAAAOgEALQgDAKgHAHQgIAIgKADQgLAEgOAAgAgTBVIAUAAQAKAAAFgFQAFgGAAgNIAAgUQAAgRgGgGQgGgGgMAAIgQAAgAgTgVIAOAAQAKAAAGgGQAGgFAAgOIAAgNQAAgNgFgGQgEgGgJAAIgSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-5.7,-11.9,11.6,23.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyB3IAAjtIBlAAIAAAiIhAAAIAABCIAzAAIAAAhIgzAAIAABGIBAAAIAAAig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-5.1,-11.9,10.2,23.8), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDB3IAAgiQAOAAAEgEQAFgFABgPIAGizIBpAAIAADtIgmAAIAAjLIghAAIgDCPQgBAQgDALQgDAMgHAHQgHAHgKAEQgJADgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-6.7,-11.9,13.5,23.9), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB3IAAjLIgnAAIAAgiIBzAAIAAAiIgnAAIAADLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-5.8,-11.9,11.6,23.8), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcB3IgHgrIgtAAIgGArIgiAAIAmjtIA1AAIAmDtgAAQArIgRh3IgSB3IAjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-6.5,-11.9,13.1,23.8), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIBoAAIAAAiIhCAAIAAA9IAUAAQAOAAALADQAKAFAIAHQAHAIADAKQAEAKAAAOIAAAaQAAAOgEAMQgDALgHAHQgIAIgKADQgLAEgOAAgAgTBVIAUAAQAKAAAEgFQAFgFAAgNIAAgeQAAgMgFgGQgEgEgKAAIgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-5.8,-11.9,11.6,23.8), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIA5AAQANAAALAEQAKACAHAIQAHAGADALQADAKAAANIAAAJQAAATgGAMQgGAMgMAFQAHADAGAEQAFAEAEAIQAGALAAAUIAAATQAAAOgEALQgDAKgHAHQgIAIgKADQgLAEgOAAgAgTBVIAUAAQAKAAAFgFQAFgGAAgNIAAgUQAAgRgGgGQgGgGgMAAIgQAAgAgTgVIAOAAQAKAAAGgGQAGgFAAgOIAAgNQAAgNgFgGQgEgGgJAAIgSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-5.8,-11.9,11.6,23.8), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB3IAAjLIgnAAIAAgiIBzAAIAAAiIgnAAIAADLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-5.8,-11.9,11.6,23.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZB3IAAinIgtCnIgmAAIAAjtIAhAAIAACVIAriVIApAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-5.9,-11.9,11.9,23.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoCHIAAggIhPAAIAAAgIglAAIAAhCIAPAAQAEgFADgHIACgSIAJitIBnAAIAADLIARAAIAABCgAgPAmQgBANgDAHQgCAHgEAEIAwAAIAAipIggAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-7.6,-13.5,15.3,27), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyB3IAAjtIBlAAIAAAiIhAAAIAABCIAzAAIAAAhIgzAAIAABGIBAAAIAAAig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-5.1,-11.9,10.2,23.8), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIBoAAIAAAiIhCAAIAAA9IAUAAQAOAAALADQAKAFAIAHQAHAIADAKQAEAKAAAOIAAAaQAAAOgEAMQgDALgHAHQgIAIgKADQgLAEgOAAgAgTBVIAUAAQAKAAAEgFQAFgFAAgNIAAgeQAAgMgFgGQgEgEgKAAIgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-5.7,-11.9,11.6,23.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXB2QgLgEgHgIQgHgIgEgLQgEgLAAgOIAAh7QAAgOAEgLQAEgLAHgIQAHgIALgEQAKgEANAAQAOAAAKAEQALAEAHAIQAHAIAEALQAEALAAAOIAAB7QAAAOgEALQgEALgHAIQgHAIgLAEQgKADgOAAQgNAAgKgDgAgNhSQgFAGAAAMIAACAQAAAMAFAHQAFAFAIAAQAJAAAFgFQAFgHAAgMIAAiAQAAgMgFgGQgFgEgJAAQgIAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-5.7,-12.1,11.4,24.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVB3IAAjLIgqAAIAADLIglAAIAAjtIB1AAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-5.9,-11.9,11.8,23.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXB2QgLgEgHgIQgHgIgEgLQgEgLAAgOIAAh7QAAgOAEgLQAEgLAHgIQAHgIALgEQAKgEANAAQAOAAAKAEQALAEAHAIQAHAIAEALQAEALAAAOIAAB7QAAAOgEALQgEALgHAIQgHAIgLAEQgKADgOAAQgNAAgKgDgAgNhSQgFAGAAAMIAACAQAAAMAFAHQAFAFAIAAQAJAAAFgFQAFgHAAgMIAAiAQAAgMgFgGQgFgEgJAAQgIAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-5.7,-12.1,11.4,24.3), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB3IAAjLIgnAAIAAgiIBzAAIAAAiIgnAAIAADLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-5.8,-11.9,11.6,23.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXB3IgjhfIgLAWIAABJIgmAAIAAjtIAmAAIAABoIAvhoIAmAAIg0BqIA0CDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-6.2,-11.9,12.4,23.8), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-133,-41,1.177,1.177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-133,-41,266,81.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.diztxt();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-119.5,-46.5,239,93), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oxytxt();
	this.instance.parent = this;
	this.instance.setTransform(-172.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-172.5,-46.5,345,93), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoCUQgMgEgGgMQgFgKgBgRIgCg/QAEgGAGgDIAPgEIAcgEIAABMIABAJQACACAFAAIADABQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAhVIgCgDIgLgJIABgBIAkgSIAZALIABACIABACIABAEIABAEIAABgQAAANgEAJQgFAIgJAEQgIADgLABIgWACQgXgBgMgFgAhkCaQgBgBgCgFIgBgQIgBgkIACABIADABIA+AcIgCAZIgCADgAgoB2IgDgBIgEgBIg8gcIgEgVIAAgbIACgGIAEgEIAFgFQAMAEAIAIQAIAGADAMIAAgIIADAAIAEACIAaASIAEACIAAAFIAAACIgEAmQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgAhEAnIAAgGIAEgzIAqgxIADgCIAAASIgMBzgAhMAhIgHgEIgMgJIATgYIACAnIgCgCgAAOAcIANAAIgGAEIgHACgAhyAXIAAgIQAFABAEAFIgEAFIgEAFgAhlAPQgGABgGgGQgFgEAAgGIgHhIIAAgEIAqAAIAEADQADABAAAJIAAAvQAAAEgCAFIgHAJIgPANgAApABQgJgHgFgKIgJgUIgCgLIADAAIBQAmIgmATQgLAAgJgJgAB7gCIABgBIACABIgCABgAB5gEIgFgCIgDgDIADgBIAAAAIAEADIACADgABngMIhZgrIAAgXIA0gKIACAtQAAAEADAAIAHABIAOAHQAHAFAMAMIgEACgAg+hIIADgBIAdABIABADQACABgEAFIghAjgABugxIgbgrIAzgLIAAA2gABUgxIAAggIANAXIAEAEIABADIABACgAguhNIgOgCIgBguQABgLACgIQAEgIAHAAIAmAAIAAAHIgGA4IgBAGIgGAHgAh6hTIgEgDIgCgFIAtghIABAAIADArgAAOhVQgCgMAJgNQAJgMASgJIAEADIADAGIAFAGIAIANIAAABIgBAFIgBADIgtAJgABUhiQgBgJgFgDIgKgEIgKgHQgEgEAAgLIAAgCIAUgPIAdACQAKACAHAEQAGAFAEAJQAEAIAAAMIAAACIgCAAIgvALgAiDh9IgCgbIAyAAIAAANIABAEIAAADIguAhQgDgNAAgNgAAQh0IAFgUIAHgJQADgEAGAAIABACIAFAHIABABIAAABIgZAWgAAsiWIAAgBIAIgCIAMAAQgGAIgIAEQgGgDAAgGgAg5iYIABgBIABABIgBABIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-13.4,-15.3,26.8,30.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-91,-28,1.213,1.213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-91,-28,182,55.8), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.5,0.5,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-40.1,-6.7,80.2,13.5), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12.8,x:0.1,y:-54.5,alpha:0.551},49).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:26,x:0.2,y:-110,alpha:0},50).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-275.5,457.9,551);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.8},14,cjs.Ease.get(-1)).to({y:-10},15,cjs.Ease.get(1)).to({y:-5},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.1,-147,240.3,294);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.5},14,cjs.Ease.get(-1)).to({y:9.2},15,cjs.Ease.get(1)).to({y:4.6},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-136.2,218,272.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-337.9,104.6,0.839,1.149,-8.2,0,0,0.1,0.1);
	this.instance.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-420,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-464.3,-10.4,1.149,1.149,0,0,180);
	this.instance_2.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-727.4,-327,624.8,772.2), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(362.5,69.2,0.768,1.052,0,8.2,-171.8);
	this.instance.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(427.7,-13.4,1.052,1.052);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(478.1,-36,1.052,1.052);
	this.instance_2.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(147,-325.7,571.9,706.8), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.094},10,cjs.Ease.get(-1)).to({alpha:0.18},9,cjs.Ease.get(1)).to({alpha:0.09},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-41,266,81.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-133,-41,266,81.2), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.alpha = 0.18;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.09},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.082},7,cjs.Ease.get(-1)).to({alpha:0.18},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-46.5,239,93);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.09},7,cjs.Ease.get(-1)).to({alpha:0.18},7,cjs.Ease.get(1)).to({alpha:0.098},7,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-46.5,345,93);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.102},7,cjs.Ease.get(-1)).to({alpha:0.199},7,cjs.Ease.get(1)).to({alpha:0.105},7,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-205,728,410);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82},10,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-6.7,80.2,13.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85,y:0.1},9,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9,y:0},10,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85,y:0.1},10,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-33,214,65.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(0,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84));

	// Символ 35
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.8,18);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({y:42.2},0).to({y:16.2,alpha:1},4).to({y:18},2).wait(46).to({scaleX:0.86,scaleY:0.86,rotation:6,x:62.1,y:19.1},5,cjs.Ease.get(1)).to({y:42.5,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 34
	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.7,18.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(47).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:51},5,cjs.Ease.get(1)).to({y:41.5,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 33
	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(46.3,18.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(48).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:39.5,y:16.9},5,cjs.Ease.get(1)).to({y:40.3,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 32
	this.instance_4 = new lib.Символ32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(32.7,18.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(49).to({scaleX:0.86,scaleY:0.86,rotation:6,x:27.9,y:15.6},5,cjs.Ease.get(1)).to({y:39,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_5 = new lib.Символ31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.6,18.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(50).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:16.7,y:14.5},5,cjs.Ease.get(1)).to({y:37.9,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_6 = new lib.Символ30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.2,18.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(51).to({scaleX:0.86,scaleY:0.86,rotation:6,x:0.9,y:12.8},5,cjs.Ease.get(1)).to({y:36.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 29
	this.instance_7 = new lib.Символ29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-13.5,18.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(52).to({regX:-0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:-11.6,y:11.6},5,cjs.Ease.get(1)).to({y:35,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_8 = new lib.Символ28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-26.6,18.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(53).to({scaleX:0.86,scaleY:0.86,rotation:6,x:-22.7,y:10.3},5,cjs.Ease.get(1)).to({y:33.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 27
	this.instance_9 = new lib.Символ27();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-39.5,18.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(54).to({regX:-0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:-33.8,y:9.3},5,cjs.Ease.get(1)).to({y:32.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 26
	this.instance_10 = new lib.Символ26();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-53.4,18.1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(55).to({regX:-0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:-45.6,y:8},5,cjs.Ease.get(1)).to({y:31.4,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 25
	this.instance_11 = new lib.Символ25();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-72.5,18.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({y:42.3},0).to({y:16.3,alpha:1},4).to({y:18.1},2).wait(56).to({regX:-0.1,regY:0.1,scaleX:0.86,scaleY:0.86,rotation:6,x:-61.9,y:6.3},5,cjs.Ease.get(1)).to({y:29.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 24
	this.instance_12 = new lib.Символ24();
	this.instance_12.parent = this;
	this.instance_12.setTransform(64.8,-17.9);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(57).to({regX:0.1,regY:-0.1,scaleX:1.14,scaleY:1.14,rotation:-3.2,x:73.6,y:-27.7},5,cjs.Ease.get(1)).to({y:-4.3,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 23
	this.instance_13 = new lib.Символ23();
	this.instance_13.parent = this;
	this.instance_13.setTransform(51.6,-17.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(58).to({regX:0.1,regY:-0.1,scaleX:1.14,scaleY:1.14,rotation:-3.2,x:58.5,y:-26.8},5,cjs.Ease.get(1)).to({y:-3.4,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 22
	this.instance_14 = new lib.Символ22();
	this.instance_14.parent = this;
	this.instance_14.setTransform(35.9,-16.3);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({y:7.9},0).to({y:-18.1,alpha:1},4).to({y:-16.3},2).wait(59).to({regX:0.1,regY:-0.1,scaleX:1.14,scaleY:1.14,rotation:-3.2,x:40.8,y:-24},5,cjs.Ease.get(1)).to({y:-0.6,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 21
	this.instance_15 = new lib.Символ21();
	this.instance_15.parent = this;
	this.instance_15.setTransform(21.7,-17.9);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(60).to({scaleX:1.14,scaleY:1.14,rotation:-3.2,x:24.5,y:-24.8},5,cjs.Ease.get(1)).to({y:-1.4,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 20
	this.instance_16 = new lib.Символ20();
	this.instance_16.parent = this;
	this.instance_16.setTransform(8.3,-17.9);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(61).to({regX:0.1,regY:-0.1,scaleX:1.14,scaleY:1.14,rotation:-3.2,x:9.3,y:-24.1},5,cjs.Ease.get(1)).to({y:-0.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 19
	this.instance_17 = new lib.Символ19();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-5.6,-17.9);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(62).to({regX:-0.1,scaleX:1.14,scaleY:1.14,rotation:-3.2,x:-6.4,y:-23.1},5,cjs.Ease.get(1)).to({y:0.3,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_18 = new lib.Символ18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-19.6,-17.9);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(63).to({scaleX:1.14,scaleY:1.14,rotation:-3.2,x:-22.2,y:-22.2},5,cjs.Ease.get(1)).to({y:1.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_19 = new lib.Символ17();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-38.8,-17.9);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(64).to({regX:-0.1,regY:-0.1,scaleX:1.14,scaleY:1.14,rotation:-3.2,x:-44.1,y:-21.1},5,cjs.Ease.get(1)).to({y:2.3,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 16
	this.instance_20 = new lib.Символ16();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-51.6,-17.9);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(65).to({scaleX:1.14,scaleY:1.14,rotation:-3.2,x:-58.6,y:-20.1},5,cjs.Ease.get(1)).to({y:3.3,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 15
	this.instance_21 = new lib.Символ15();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-64.1,-17.9);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({y:6.3},0).to({y:-19.7,alpha:1},4).to({y:-17.9},2).wait(66).to({scaleX:1.14,scaleY:1.14,rotation:-3.2,x:-72.9,y:-19.3},5,cjs.Ease.get(1)).to({y:4.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-30,156.6,92.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(0,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:1.04,scaleY:1.04,rotation:-3.3,x:0.1,y:-16.4},299,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:-9.1},300,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-55.6,239,93);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(0,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,y:14.4},299,cjs.Ease.get(1)).to({rotation:0,y:8.3},300,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-38.2,345,93);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},24,cjs.Ease.get(-1)).to({scaleX:0.85,scaleY:0.85},25,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-205,728,410);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-29,188,57.4);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(0,3,0.904,0.904);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-93.5,-25.8,187.1,57.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
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

	// Символ 12
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(0,82.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-31.5,alpha:1},7,cjs.Ease.get(-1)).wait(1).to({y:82.5,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-110.5,1.667,1.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-60.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-110.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-147,0.062,0.062,-75,0,0,-0.2,-0.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:0,y:-174.6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regX:0.2,regY:-0.4,scaleX:0.18,scaleY:0.18,rotation:-75,y:-124.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30,-272.5,0.191,0.191,30,0,0,-0.1,-0.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,regY:-0.1,scaleX:0.91,scaleY:0.91,rotation:0,x:0.1,y:-249.3,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regY:0,scaleX:0.62,scaleY:0.62,x:-184.9,y:-235.6,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30,-64.3,0.191,0.191,-30,0,0,0.2,-0.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,regY:-0.1,scaleX:0.91,scaleY:0.91,rotation:0,x:0.1,y:-99.6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regY:0,scaleX:0.62,scaleY:0.62,x:161,y:-100.8,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_5 = new lib.Символ3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-366},7,cjs.Ease.get(1)).wait(1).to({y:-225.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_6 = new lib.Символ40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(208.1,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.1,scaleY:1.1,x:228.6,y:-101.9},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:208.1,y:-102},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_7 = new lib.Символ39();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-210,-113.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.1,scaleY:1.1,x:-229.5,y:-114.8},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-210,y:-113.7},7,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_8 = new lib.Символ45();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2.1,-135.9);
	this.instance_8.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0.09},7).wait(1).to({alpha:0.52},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.3,-439.5,1028.2,782.7);


// stage content:
(lib.diz_oxy_600_300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
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

	// Слой 8
	this.main = new lib.Символ37();
	this.main.parent = this;
	this.main.setTransform(300,286.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.7,-3,1028.2,782.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507822731047", id:"bg"},
		{src:"images/btn.png?1507822731047", id:"btn"},
		{src:"images/diz.png?1507822731047", id:"diz"},
		{src:"images/diztxt.png?1507822731047", id:"diztxt"},
		{src:"images/logo.png?1507822731047", id:"logo"},
		{src:"images/oxy.png?1507822731047", id:"oxy"},
		{src:"images/oxytxt.png?1507822731047", id:"oxytxt"},
		{src:"images/smoke1.png?1507822731047", id:"smoke1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;