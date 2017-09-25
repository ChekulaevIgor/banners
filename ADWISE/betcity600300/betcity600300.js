(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.atletico = function() {
	this.initialize(img.atletico);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


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
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.cska = function() {
	this.initialize(img.cska);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,177);


(lib.dzagoev = function() {
	this.initialize(img.dzagoev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,295);


(lib.griezmann = function() {
	this.initialize(img.griezmann);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,296);


(lib.koko = function() {
	this.initialize(img.koko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,300);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,44);


(lib.loverpool = function() {
	this.initialize(img.loverpool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,186);


(lib.mkhitaryan = function() {
	this.initialize(img.mkhitaryan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,329);


(lib.morata = function() {
	this.initialize(img.morata);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,386);


(lib.mu = function() {
	this.initialize(img.mu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,183);


(lib.promise = function() {
	this.initialize(img.promise);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,253);


(lib.reals = function() {
	this.initialize(img.reals);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,350);


(lib.rs = function() {
	this.initialize(img.rs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,247);


(lib.salah = function() {
	this.initialize(img.salah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,286);


(lib.spartak = function() {
	this.initialize(img.spartak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,105);


(lib.zenit = function() {
	this.initialize(img.zenit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,202);// helper functions:

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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBpQgGgGAAgIQAAgGADgFQACgFAFgEQAIgHANAAQAJAAAGAFQAFAFAAAIQAAAGgCAFQgDAFgEAEQgJAIgMAAQgJAAgGgFgABPBpQgOgFgIgKQgJgJgDgNQgEgOAEgRIAQhIQACgNALgUQAIgOANgJQAMgIAQgEQAOgEARAAQARAAANAFQANAEAJAKQAIAJADAOQAEANgEARIgPBIIgGASIgIAQQgIANgNAJQgMAIgQAFQgOADgRAAQgQAAgNgEgAB5g9QgGAEgEAFQgEAFgCAHIgTBVQAAAHADAEQACAFAEADQAIAGAOAAQAKAAAIgEQAIgDAFgGQAGgGADgJQADgHACgKIAPhFQAAgGgDgFQgCgFgEgCQgIgGgOAAQgPAAgKAHgAjBBoQgMgEgJgIQgIgIgFgKQgEgKAAgMQAAgKADgKQADgJAGgJQAGgIAJgGQAIgHALgGQgGgFgDgIQgDgIAAgJQAAgMAFgLQAGgMAKgJQALgJAOgFQAPgGASAAQANAAALAEQAKADAHAHQAHAGAEAJQADAIAAAKQAAAHgCAHQgCAHgEAGQgHALgOAJQALAIAFAKQAGAMAAANQAAAPgHAOQgGAOgNALQgSAOgMAEQgYAHgOAAQgQAAgNgFgAigAJQgIADgGAGQgFAFgEAHQgDAHAAAIQAAAMAIAHQAIAHANAAQAJAAAIgDQAIgDAGgFQAGgGADgHQAEgHAAgHQAAgMgIgIQgEgDgFgCQgGgCgHAAQgJAAgIADgAiLhGQgFACgFAEQgJAIAAALQAAAJAGAFQAGAFALAAQAGAAAGgCQAGgCAEgEQAKgIAAgLQAAgIgGgFQgHgGgKAAQgHAAgGACgAD8BpIBDhPQgIADgEAAQgOAAgLgDQgMgEgIgHQgIgGgEgJQgEgLAAgNQAAgKACgJQACgKAEgIQADgIAGgGIAMgMQAJgIAWgJQALgDAagCQAOAAAMAEQAMADAJAHQAJAHAFALQAFALAAANQAAAQgHAOQgGAOgOAQIhRBigAE9hEQgIADgGAFQgGAFgDAIQgDAHAAAJQAAANAIAHQAIAHANAAQAKAAAIgDQAIgDAGgFQAFgGADgHQADgIAAgJQAAgNgHgGQgIgHgOAAQgJAAgIADgAmYBpIACgJIBvh5QAIgLACgIQACgGgBgFQgBgFgCgDQgGgHgKAAQgKAAgJAGQgFAEgDAFQgEAGgBAHIgnAAQADgQAIgNQAGgMALgIQAKgIANgEQANgEAQAAQALAAAJADQAIACAHAFQAGAFAEAHQAEAHABAIQABAIgBAJQgCAKgEAKQgEAKgHALQgIAKgKAJIg6A+IBMgDIgJAng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-40.9,-10.9,81.8,22), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-169.7,-60.2,339.5,120.4), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dzagoev();
	this.instance.parent = this;
	this.instance.setTransform(-99,-83,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-99,-83,197.9,238.3), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mkhitaryan();
	this.instance.parent = this;
	this.instance.setTransform(-79.6,-141.4,0.918,0.918,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-111.4,-141.4,214.4,319.8), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmtJJQgNgFgIgJQgIgIgDgNQgCgNADgRIAfAAQgCAJACAIQABAHAEAFQAFAFAIADQAHACALAAQAKAAAKgDQAJgDAIgFQAHgGAEgIQAFgIAAgJQgBgHgDgGQgCgFgGgFQgEgDgIgDQgGgCgIAAIgPAAIAGgcIAOAAQAJAAAHgDQAIgCAGgFQAGgFAEgGQAEgHAAgHQAAgMgIgHQgJgGgOAAQgOAAgLAGQgFADgEAFQgEAFgCAHIggAAQACgOAJgKQAGgKAMgHQAKgHANgDQANgDANAAQAOAAALADQAKAEAIAGQAHAGAEAJQAEAJAAALQAAAJgDAIQgDAIgFAIQgFAHgGAFQgHAGgIADQANAGAHAKQAHALAAAPQAAAIgCAIQgCAIgDAHIgIANIgLALQgNAKgRAFQgYAFgOAAQgQAAgNgEgABtJJIAtjTIAiAAIggCNICdiNIANAAIgsDSIgjAAIAhiPIifCQgAF1JIIAmizIg9AAIAGgfICcAAIgGAfIg9AAIgmCzgAAWJIIAThdIhfAAIgUBdIgiAAIAsjSIAjAAIgSBVIBfAAIAThVIAjAAIgtDSgAkZJIIAtjSICAAAIgHAfIhdAAIgLA3IBYAAIgHAfIhYAAIgMA9IBeAAIgHAggAKOl1QgJgBgJgEQgHgDgHgEQgHgFgHgGQgFgGgFgIQgEgHgDgJIgDgTQgBgKABgMQABgOADgNQAEgMAFgLQAGgMAIgJQAIgKAJgIQAJgIALgGQAKgGALgEQAMgEAMgCQAMgCAMAAQALAAAXAGIAOAHIANAKQAGAFAFAHIAHAPIAFARQACAJAAAKQAAAOgCAOQgEANgEAMQgFALgIALQgHAKgJAJQgJAJgLAHQgLAGgMAFQgMAFgNACQgNADgOAAgAKpomQgUALgJAHQgHAGgFAIQgFAHgEAIQgEAJgDAKQgCAJAAALQgCAQAFAMQADALAIAHQAHAIALADQALAEANAAQALAAAXgHIAPgIIAPgKIALgNQAGgIAEgIQAEgJACgKQADgJgBgLQABgOgEgLQgDgLgIgIQgHgIgLgEQgLgEgNAAQgXACgLAEgAmql2IAHgcQAKABAGgBQAHgBAFgEQAFgFAIgUIAyiZICGAAIgsDSIgkAAIAnizIhFAAIgnB7QgFATgHAMQgHAMgKAHQgJAGgNACIgLABQgJAAgMgCgACXl2IAsjTIAjAAIggCNICdiNIANAAIgtDSIgiAAIAgiPIieCQgAICl3IgqhcQgHACgOABIgWABIgTBYIgjAAIAtjSIAjAAIgTBdIAXgBQAMgBAHgDQANgHAVgrQAFgKAHgIQAGgJAJgFQAKgFALgCQAMgBAPACIgFAZQgPgCgIAFQgJAFgIAQQgWArgRANIAwBkIgBAFgAAYl3IAnizIg9AAIAGgfICdAAIgHAfIg9AAIgmCzgAi6l3IAtjSICAAAIgIAfIhcAAIgLA3IBXAAIgGAfIhYAAIgNA9IBfAAIgIAggAoTl3IAnizIg9AAIAGgfICcAAIgHAfIg9AAIgmCzgAp3l3IgKgrIhiAAIgeArIglAAIABgEICNjPIAQAAIA1DPIgBAEgAqGnAIgVhUIg2BUIBLAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-80.7,-58.9,161.4,117.9), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-91.6,-58.8,183.3,117.7), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.morata();
	this.instance.parent = this;
	this.instance.setTransform(-66.7,-125.5,0.862,0.862,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-66.7,-127.7,175.9,335.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.griezmann();
	this.instance.parent = this;
	this.instance.setTransform(-86,-122,1.045,1.11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-86,-122,142.2,328.6), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-88.6,-43,177.3,86.1), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.salah();
	this.instance.parent = this;
	this.instance.setTransform(-157,-104,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-157,-104,318.4,215.8), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.promise();
	this.instance.parent = this;
	this.instance.setTransform(-183,-84,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-183,-84,308.8,200.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cska();
	this.instance.parent = this;
	this.instance.setTransform(-86,-109,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-86,-109,171.4,198.3), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mu();
	this.instance.parent = this;
	this.instance.setTransform(-80,-95,0.948,0.948);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-80,-95,158.3,173.5), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.reals();
	this.instance.parent = this;
	this.instance.setTransform(-80.4,-118.8,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-80.4,-118.8,161,237.7), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.atletico();
	this.instance.parent = this;
	this.instance.setTransform(-82,-82,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-82,-82,164.1,164.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chelsea();
	this.instance.parent = this;
	this.instance.setTransform(-92,-89,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-92,-89,183.8,183.8), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.loverpool();
	this.instance.parent = this;
	this.instance.setTransform(-69,-85,1.015,1.015);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-69,-85,138.1,188.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spartak();
	this.instance.parent = this;
	this.instance.setTransform(-83,-83,1.107,1.107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-83,-83,165,116.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BpQgFgGgBgIQAAgGADgFQACgFAFgEQAJgHAMAAQAJAAAGAFQAFAFAAAIQABAGgDAFQgDAFgEAEQgJAIgLAAQgKAAgGgFgABCBpQgNgFgJgKQgJgJgDgNQgEgOAEgRIAQhIQADgNAKgUQAJgOAMgJQAMgIAQgEQAOgEARAAQARAAANAFQANAEAJAKQAIAJADAOQAEANgEARIgPBIIgFASIgJAQQgIANgNAJQgMAIgPAFQgPADgRAAQgQAAgNgEgABsg9QgFAEgEAFQgEAFgDAHIgSBVQgBAHADAEQACAFAEADQAIAGAOAAQAKAAAIgEQAIgDAGgGQAFgGAEgJQACgHACgKIAPhFQAAgGgCgFQgDgFgEgCQgHgGgPAAQgPAAgKAHgADvBpIBDhPQgIADgEAAQgOAAgLgDQgLgEgJgHQgHgGgEgJQgFgLAAgNQAAgKACgJQACgKAEgIQADgIAGgGIAMgMQAJgIAWgJQAMgDAZgCQAOAAAMAEQAMADAJAHQAJAHAFALQAFALAAANQAAAQgGAOQgHAOgNAQIhSBigAEwhEQgIADgFAFQgHAFgCAIQgDAHAAAJQgBANAIAHQAIAHAOAAQAKAAAIgDQAHgDAGgFQAFgGADgHQADgIABgJQAAgNgIgGQgHgHgPAAQgJAAgIADgAjdBpIBzirIhdABIAIgnICWAAIgCAGIiFDLgAmLBpIACgJIBvh5QAHgLADgIQACgGgBgFQgBgFgDgDQgFgHgKAAQgKAAgKAGQgEAEgEAFQgDAGgBAHIgnAAQADgQAIgNQAGgMAKgIQALgIANgEQANgEAPAAQAMAAAIADQAJACAGAFQAHAFADAHQAFAHABAIQABAIgBAJQgCAKgEAKQgFAKgGALQgIAKgKAJIg7A+IBNgDIgJAng");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-38.6,-10.9,79.2,22), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.koko();
	this.instance.parent = this;
	this.instance.setTransform(-76,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-76,-122,152.1,244), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BpQgFgGgBgIQAAgGADgFQACgFAFgEQAJgHAMAAQAJAAAGAFQAFAFAAAIQABAGgDAFQgDAFgEAEQgJAIgLAAQgKAAgGgFgABCBpQgNgFgJgKQgJgJgDgNQgEgOAEgRIAQhIQADgNAKgUQAJgOAMgJQAMgIAQgEQAOgEARAAQARAAANAFQANAEAJAKQAIAJADAOQAEANgEARIgPBIIgFASIgJAQQgIANgNAJQgMAIgPAFQgPADgRAAQgQAAgNgEgABsg9QgFAEgEAFQgEAFgDAHIgSBVQgBAHADAEQACAFAEADQAIAGAOAAQAKAAAIgEQAIgDAGgGQAFgGAEgJQACgHACgKIAPhFQAAgGgCgFQgDgFgEgCQgHgGgPAAQgPAAgKAHgADvBpIBDhPQgIADgEAAQgOAAgLgDQgLgEgJgHQgHgGgEgJQgFgLAAgNQAAgKACgJQACgKAEgIQADgIAGgGIAMgMQAJgIAWgJQAMgDAZgCQAOAAAMAEQAMADAJAHQAJAHAFALQAFALAAANQAAAQgGAOQgHAOgNAQIhSBigAEwhEQgIADgFAFQgHAFgCAIQgDAHAAAJQgBANAIAHQAIAHAOAAQAKAAAIgDQAHgDAGgFQAFgGADgHQADgIABgJQAAgNgIgGQgHgHgPAAQgJAAgIADgAjdBpIBzirIhdABIAIgnICWAAIgCAGIiFDLgAmLBpIACgJIBvh5QAHgLADgIQACgGgBgFQgBgFgDgDQgFgHgKAAQgKAAgKAGQgEAEgEAFQgDAGgBAHIgnAAQADgQAIgNQAGgMAKgIQALgIANgEQANgEAPAAQAMAAAIADQAJACAGAFQAHAFADAHQAFAHABAIQABAIgBAJQgCAKgEAKQgFAKgGALQgIAKgKAJIg7A+IBNgDIgJAng");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-38.6,-10.9,79.2,22), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("AgPCaQgLgFgFgEIgGgIIgFgIIgDgKIgBgMQAAgJACgIQACgJADgHQADgHAFgGQAEgGAGgFIAMgJIAMgGIAOgEIAPgBQALAAAJADIAIAEIAIAGIAGAHQADAEACAFQACAFABAFQABAGAAAGQAAAJgCAIQgBAIgDAHIgHANQgEAGgGAFIgLAJQgGAEgIACIgPAEIgQABQgJAAgKgDgAAMA5QgIADgFAFQgHAFgEAIQgEAIgCAJQgBAIABAHQABAHADAFQAEAFAGADQAFADAJAAQAIAAAJgDQAIgDAHgGIAGgHIAEgIIADgKIABgLQAAgHgCgGQgCgGgEgEQgEgEgGgCQgFgCgGAAQgIAAgHADgAFNCbIAah7IAaAAIgaB7gADbCbIAah7IAaAAIgIAmIAaAAQAGAAAFACIAIADIAHAEIAFAGQADAHABAJQABAIgCAJQgDAJgEAHQgFAHgGAFQgHAEgJADQgIACgKAAgAD5CEIAWAAIAKgBIAHgDIAGgFIAEgIIABgIQAAgEgBgDQgCgDgDgCQgEgCgFAAIgaAAgACkCbIAVhjIgvAAIgVBjIgbAAIAbh7IBkAAIgbB7gAilCbIAah7IA1AAIAJABIAJADQAHADAEAHQAEAGABAIQABAIgBAJQgBAJgFAIQgEAIgHAGQgHAGgJADQgKADgKAAIgbAAIgHAjgAh/BiIAbAAIAIgCIAHgFIAFgGIADgJQACgJgEgGQgBgDgDgCQgEgCgEAAIgbAAgAkcCbIAbh7IA0AAQAHAAAGACQAGACAEAEQAFADACAGQACAFAAAHQAAAFgCAFQgBAEgCAEQgDAEgEADQgDAEgEACQAHADADAFQAEAFAAAIQAAAJgEAIQgDAHgHAGQgGAGgJADQgJADgKAAgAj8CEIAdAAQAHAAAEgDQAFgEACgGQABgEgBgEQgBgDgCgCQgDgDgHAAIgcAAgAjyBTIAYAAQAHAAAFgEQAFgEACgGQABgHgEgEQgDgEgHAAIgYAAgAmACbIAah7IBMAAIgFAXIgxAAIgFAZIAtAAIgFAXIgtAAIgGAcIAyAAIgFAYgAj3ggIAEgTQAGABADgBQAEgBADgCQADgDAEgLIAchXIBTAAIgaB7IgbAAIAWhkIgiAAIgUBBQgDAMgFAHQgEAIgGAEQgGAEgJABIgGAAIgOgBgAhrgfIAah8IAbAAIgPBGIBThHIAJAAIgaB8IgaAAIAPhGIhVBHgADHggIgEgUIgzAAIgOAUIgdAAIABgDIBSh5IAMAAIAfB5IgBADgAC+hKIgIgqIgZAqIAhAAgAAZggIAah7IBLAAIgFAYIgxAAIgVBjg");
	this.shape.setTransform(-24.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-63.4,-15.7,77.1,31.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("AFWCWQgLgFgFgEIgGgHIgEgIIgDgKIgBgMQAAgIACgJQABgHADgIQADgGAFgHIAKgKQAFgFAGgEIANgGIAOgDQAHgCAIAAQAKAAAJADIAIAFIAIAFIAGAHQADAEABAFIADAJIABAMQAAAJgBAHQgCAIgDAHQgCAHgEAGQgEAGgGAFIgLAIIgNAGIgPAFIgPABQgLAAgJgEgAFxA4QgIACgGAGQgGAEgEAIQgFAIgBAJQgCAHABAIQABAGAEAGQADAFAGADQAGACAJAAQAIAAAIgDQAJgDAGgGIAGgGIAEgJIADgJIABgLQAAgHgCgGQgCgGgEgEQgEgDgFgCQgFgCgGAAQgIAAgHADgABOCWQgLgFgFgEIgGgHIgEgIIgDgKIgBgMQAAgIACgJQABgHADgIQADgGAFgHIAKgKQAFgFAGgEIANgGIAOgDIAOgCQALAAAJADIAIAFIAIAFIAGAHQADAEABAFIADAJIABAMQAAAJgBAHQgCAIgDAHQgCAHgFAGIgJALIgLAIIgNAGIgPAFIgQABQgKAAgJgEgABpA4QgIACgGAGQgGAEgEAIQgFAIgBAJQgCAHABAIQABAGAEAGQADAFAGADQAGACAJAAQAIAAAIgDQAJgDAGgGIAGgGIAEgJIADgJIABgLQAAgHgCgGQgCgGgEgEQgEgDgFgCQgFgCgGAAQgIAAgHADgAhVCYIAZh5IAaAAIgOBFIBRhFIAIAAIgaB4IgYAAIANhEIhSBFgAG+CXIAZh4IAzAAQAHAAAGACQAGACAEAEQAEAEADAFQACAFAAAGQAAAFgCAFIgEAIIgGAHIgHAGQAHADADAFQADAFAAAHQAAAIgDAJQgDAHgHAFQgGAHgIACQgJADgKAAgAHcCBIAdAAQAGAAAFgDQAEgEACgGQABgDgBgEQgBgEgCgCQgDgDgGABIgcAAgAHmBSIAYAAQAGAAAFgFQAFgDACgHQABgGgDgEQgDgEgHgBIgYAAgAD9CXIALgyIguAAIgLAyIgZAAIAZh4IAaAAIgKAuIAuAAIAKguIAaAAIgaB4gAiLCXIAVhgIguAAIgVBgIgaAAIAah4IBiAAIgaB4gAkICXIAOhBIgmAmIgEAAIgWgmIgOBBIgaAAIAZh4IAKAAIAkA5IA9g5IAJAAIgZB4gAnECXIAZh4IBKAAIgFAXIgwAAIgFAYIAtAAIgFAXIgtAAIgFAbIAxAAIgFAXgAn6CXIAKgqIgRABQgHAAgGgBIgLgEQgEgCgDgDQgEgEgCgFQgCgEAAgGQgBgHABgIIACgRIAEgSIAaAAIgEASQgDAOAAAGQAAAJADADQADAEAIAAQAIACAOgCIALg2IAZAAIgZB4gAj0ggIAEgSIAJAAIAGgDQADgCAFgMIAbhUIBRAAIgaB4IgZAAIAVhiIghAAIgUA/QgDANgFAGQgEAIgGAEQgGAEgIAAIgFABIgPgCgAhrgfIAah4IAZAAIgOBEIBRhFIAIAAIgYB5IgaAAIAPhFIhTBFgADAgfIgEgUIgyAAIgOAUIgcAAIABgDIBQh2IAMAAIAeB2IgBADgAC3hJIgIgoIgYAoIAgAAgAAVgfIAah4IBJAAIgEAWIgwAAIgVBig");
	this.shape.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-55.4,-15.7,110.8,30.7), null);


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
	this.instance = new lib.rs();
	this.instance.parent = this;
	this.instance.setTransform(-70,-80.8,0.654,0.654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-70,-80.8,140,161.6), null);


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

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBpQgGgGAAgIQAAgGACgFQADgFAEgEQAJgHAMAAQAKAAAFAFQAGAFAAAIQAAAGgDAFQgCAFgEAEQgJAIgMAAQgJAAgGgFgABMBpQgNgFgIgKQgKgJgCgNQgEgOAEgRIAPhIQADgNALgUQAIgOAMgJQAMgIAQgEQAPgEARAAQARAAAMAFQANAEAKAKQAIAJADAOQAEANgEARIgQBIIgFASIgIAQQgJANgNAJQgMAIgPAFQgPADgQAAQgRAAgNgEgAB2g9QgFAEgEAFQgEAFgDAHIgSBVQAAAHADAEQACAFADADQAJAGAOAAQAKAAAIgEQAHgDAGgGQAFgGAEgJQADgHACgKIAOhFQAAgGgCgFQgCgFgFgCQgHgGgOAAQgPAAgLAHgAi+BpQgMgEgJgGQgJgIgEgKQgFgLgBgNQABgMAHgVQAHgOALgMIBShjIAxAAIhEBQQANgEAMAAQAJABAIADQAIADAGAFQAFAEAFAGQAEAHACAGQACAIAAAJQAAALgCAJQgCAJgEAIQgEAIgFAHQgFAHgHAFIgOAJIgQAHQgRAGgUAAQgPAAgMgEgAifAHQgIADgFAFQgHAFgCAIQgEAIAAAJQAAAMAIAHQAHAGAPAAQAJAAAIgCQAIgDAFgFQAGgFADgIQADgHAAgKQABgMgIgHQgIgHgNAAQgKAAgIADgAD6BpIBChPQgHADgEAAQgOAAgMgDQgLgEgIgHQgIgGgEgJQgEgLgBgNQAAgKACgJQADgKAEgIQADgIAGgGIALgMQAKgIAWgJQALgDAagCQAOAAAMAEQAMADAJAHQAIAHAGALQAEALAAANQAAAQgGAOQgGAOgOAQIhSBigAE7hEQgIADgGAFQgGAFgDAIQgDAHAAAJQAAANAIAHQAHAHAOAAQAKAAAIgDQAHgDAHgFQAFgGADgHQADgIAAgJQAAgNgIgGQgHgHgOAAQgKAAgHADgAmVBpIABgJIBvh5QAIgLACgIQADgGgBgFQgCgFgCgDQgGgHgKAAQgKAAgJAGQgFAEgDAFQgEAGgBAHIgmAAQADgQAHgNQAHgMAKgIQAKgIANgEQAOgEAPAAQALAAAJADQAIACAHAFQAGAFAEAHQAEAHABAIQACAIgCAJQgBAKgFAKQgEAKgHALQgHAKgLAJIg6A+IBMgDIgJAng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-40.7,-10.9,81.3,22), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zenit();
	this.instance.parent = this;
	this.instance.setTransform(-84,-56.5,0.56,0.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-84,-56.5,168,113.1), null);


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
p.nominalBounds = new cjs.Rectangle(-99,-83,197.9,238.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.7,y:-10.9},24,cjs.Ease.get(-1)).to({x:3.5,y:-22.3},25,cjs.Ease.get(1)).to({x:1.7,y:-10.7},26,cjs.Ease.get(-1)).to({x:0,y:0},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-141.4,214.4,319.8);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.4},19,cjs.Ease.get(-1)).to({y:13},20,cjs.Ease.get(1)).to({y:6.5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.4,-118.8,161,237.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.7},24,cjs.Ease.get(-1)).to({y:11.7},25,cjs.Ease.get(0.94)).to({y:5.9},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(0.94)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-122,142.2,328.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15.4},24,cjs.Ease.get(-1)).to({y:-23},25,cjs.Ease.get(1)).to({y:-15.6},25,cjs.Ease.get(-1)).to({y:-8.1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.2,-135.8,175.9,335);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.2},20,cjs.Ease.get(-1)).to({y:-3.2},24,cjs.Ease.get(1)).to({y:3.5},22,cjs.Ease.get(-1)).to({y:10.4},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-93.6,318.4,215.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.9},24,cjs.Ease.get(-1)).to({y:16},25,cjs.Ease.get(1)).to({y:8},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-84,308.8,200.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.3},19,cjs.Ease.get(-1)).to({y:15},20,cjs.Ease.get(1)).to({y:7.5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-122,152.1,244);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-40.7,-10.9,81.3,22), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-65.4,-43.7,130.8,84), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.1,0.72,0.72,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-58.1,-44.5,116.2,84.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.6,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-118,-43.4,236,83.7), null);


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
	this.instance_1.setTransform(202.5,37.8,0.05,1,0,0,180);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(253).to({_off:false},0).to({scaleX:1,skewY:0,alpha:1},5).wait(70).to({scaleX:0.05,skewY:180,alpha:0},5).wait(7));

	// Слой 4
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-216.9,32,0.17,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(70).to({scaleX:0.17,alpha:0},5).wait(7));

	// part.png
	this.instance_3 = new lib.Символ40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-204,36,0.191,0.862);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).to({scaleX:0.86,alpha:1},5).wait(82).to({scaleX:0.19,alpha:0},5).wait(87));

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

	// CL
	this.instance_21 = new lib.Символ17();
	this.instance_21.parent = this;
	this.instance_21.setTransform(65.6,41.7,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(56).to({scaleX:0.1,x:0.3,alpha:0},5,cjs.Ease.get(1)).to({scaleX:0.72,x:65.6,alpha:1},5,cjs.Ease.get(1)).wait(90).to({scaleX:0.1,x:0.3,alpha:0},5,cjs.Ease.get(1)).to({scaleX:0.72,x:65.6,alpha:1},5,cjs.Ease.get(0.98)).wait(82).to({scaleX:0.1,x:0.3,alpha:0},5,cjs.Ease.get(1)).wait(81).to({scaleX:0.72,x:65.6,alpha:1},5).wait(1));

	// date4
	this.instance_22 = new lib.Символ52();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-3.2,40.9,0.183,1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(253).to({_off:false},0).to({scaleX:1,x:-51.6,alpha:1},5,cjs.Ease.get(1)).wait(71).to({scaleX:0.18,x:-3.2,alpha:0},5).wait(6));

	// date3
	this.instance_23 = new lib.Символ22();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1.8,41.8,0.11,1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(161).to({_off:false},0).to({scaleX:1,x:-63.4,alpha:1},5).wait(82).to({scaleX:0.11,x:1.8,alpha:0},5).wait(87));

	// date2
	this.instance_24 = new lib.Символ20();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-1,41.8,0.148,1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(61).to({_off:false},0).to({scaleX:1,x:-63.4,alpha:1},5).wait(90).to({scaleX:0.1,x:1,alpha:0},5).wait(179));

	// date1
	this.instance_25 = new lib.Символ19();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-63.6,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(56).to({scaleX:0.19,x:-3,alpha:0},5).wait(273).to({scaleX:0.18,x:0.1},0).to({scaleX:1,x:-63.6,alpha:1},5).wait(1));

	// TXT4
	this.instance_26 = new lib.Символ38();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-3.4,-35.5,0.826,0.826);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(248).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(71).to({scaleX:0.83,scaleY:0.83,alpha:0},10).wait(1));

	// TXT3
	this.instance_27 = new lib.Символ10();
	this.instance_27.parent = this;
	this.instance_27.setTransform(0.8,-34.3,0.752,0.752);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(161).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(82).to({scaleX:0.75,scaleY:0.75,alpha:0},10,cjs.Ease.get(1)).wait(82));

	// TXT2
	this.instance_28 = new lib.Символ12();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,-34.4,0.751,0.751,0,0,0,0,-0.1);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(56).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-34.2,alpha:1},10,cjs.Ease.get(1)).wait(90).to({regY:-0.1,scaleX:0.75,scaleY:0.75,y:-34.4,alpha:0},10,cjs.Ease.get(1)).wait(174));

	// TXT1
	this.instance_29 = new lib.Символ13();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0.8,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(56).to({regX:0.1,regY:-0.1,scaleX:0.77,scaleY:0.77,x:0.9,y:-34.4,alpha:0},10,cjs.Ease.get(1)).wait(263).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.8,y:-34.3,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// bg1.jpg
	this.instance_30 = new lib.Символ2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(7,0,1.034,1.034);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(340));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380,-159.2,746.4,335.4);


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
p.nominalBounds = new cjs.Rectangle(220,140.8,746.4,335.4);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/atletico.png?1506341308055", id:"atletico"},
		{src:"images/bg.jpg?1506341308055", id:"bg"},
		{src:"images/btn1.png?1506341308055", id:"btn1"},
		{src:"images/chelsea.png?1506341308055", id:"chelsea"},
		{src:"images/cska.png?1506341308055", id:"cska"},
		{src:"images/dzagoev.png?1506341308055", id:"dzagoev"},
		{src:"images/griezmann.png?1506341308055", id:"griezmann"},
		{src:"images/koko.png?1506341308055", id:"koko"},
		{src:"images/logo.png?1506341308055", id:"logo"},
		{src:"images/loverpool.png?1506341308055", id:"loverpool"},
		{src:"images/mkhitaryan.png?1506341308055", id:"mkhitaryan"},
		{src:"images/morata.png?1506341308055", id:"morata"},
		{src:"images/mu.png?1506341308055", id:"mu"},
		{src:"images/promise.png?1506341308055", id:"promise"},
		{src:"images/reals.png?1506341308055", id:"reals"},
		{src:"images/rs.png?1506341308055", id:"rs"},
		{src:"images/salah.png?1506341308055", id:"salah"},
		{src:"images/spartak.png?1506341308055", id:"spartak"},
		{src:"images/zenit.png?1506341308055", id:"zenit"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;