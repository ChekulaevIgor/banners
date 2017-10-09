(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,664,415);


(lib.body1 = function() {
	this.initialize(img.body1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,233);


(lib.body2 = function() {
	this.initialize(img.body2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,240);


(lib.body3 = function() {
	this.initialize(img.body3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,228);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,116);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,53);


(lib.hand22 = function() {
	this.initialize(img.hand22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,140);


(lib.hand3 = function() {
	this.initialize(img.hand3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,37);


(lib.hand33 = function() {
	this.initialize(img.hand33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,309);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,59);


(lib.head11 = function() {
	this.initialize(img.head11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,56);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,76);


(lib.head22 = function() {
	this.initialize(img.head22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,64);


(lib.head3 = function() {
	this.initialize(img.head3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,64);


(lib.head33 = function() {
	this.initialize(img.head33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,45);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,75);


(lib.shpaga = function() {
	this.initialize(img.shpaga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,166);// helper functions:

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


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-120,-46.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-120,-46.4,240,92.8), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AmPQ0MAAAghnIMfAAMAAAAhng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AmPQ0MAAAghnIMfAAMAAAAhng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AmPQ0MAAAghnIMfAAMAAAAhng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgT/AgcMAAAhA3MAn/AAAMAAABA3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-128,-207.6,256,415.2), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shpaga();
	this.instance.parent = this;
	this.instance.setTransform(-45.5,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-45.5,-83,91,166), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AlsOwQiXmHAAopQAAopCXmHQCYmHDUAAQDWAACXGHQCXGHAAIpQAAIpiXGHQiXGIjWAAQjUAAiYmIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-51.6,-133.6,103.2,267.2), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAvB1QgPAAgHgEQgIgEgMgHQgKgIgQgSQgPgSgGgJIgVgeIgFgNIgHgGIgRAHIAAAZQAAAHgFAJQAFAHABAEIACAHQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAIAHABIAFABIAAAEIAAAFIgCAAIgEAAQgYAAglAKIgBAAIgCgBIgBgEIABgEIACgBIAHgCQADgBADgHIADgMIACglIABgEIgCgEIAAgkIACgCIACgEIACAAIgBgEIgCgDIgCAAIAAgMIgCgTQgCgEgCgBIgIgCIgDgBIgBgFIABgEIADAAIANAAIAUACIAIAEQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgCIAIAAIAHgBIADAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIgBAGQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgHABgCADQgDADAAAGIgCAvQACAFAEAAIAEgCQAHgDACgEIAXgWIAHgEIgCgEIAIgKIACgGQAAgEgDAAIgFgBIAAgEIAAgFIACgBIABAAIAKABIAIADQAWgCAGgCIACAAIACABIABAEIgBAFIgEACIgGABIgEADIgdAYQgFAGgLAQIApBJIgBACIgBABIADAGIACAEIAIACIASATQAIAKALADIANABIAIAAQAKgCAHgEIAHgDIADABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgEANIgPAEQgFACgRAAgAITBRIABAAQAUgGAAgKIABhsQgJgJgGgBIAAgDQABgDADAAIARACIApgCIAAAEQgLAAgGAQQgCAFAAAEIAAAQIgCAFQADABAAAEIAAAAQgDADAAABQADAAAAAGIABAAIAAAAIAWABQASABAMgVQADgNAAgIQgDgUgHgDIAAgBIAEgBIAEgCIgBABIgCgFIgEgCIgBADIgEAAIgBACIAAAAQgPgOgSAAQAAgBgLAAQgWAAgtAMIgEAAQgQgCAAgDIgJgVIABAAQAGAGAjACIA8gGIAUAAQAfAAAWAVQAJALAEAJQAHADAAACIgHAMQAAAWgYARQgXAMgPAAIgagCIgBAWIgCACIABAFQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAIABADIAAAAIADgCIACAAQACAYALABIADgBIAEAAIACAHIgHABIgZAAQgMAAgZAGQgFgFAAgCgAKeBWIgBAAIACgCIABgDIgCgCIAAgBIACgBIAXgHQACgDACgHIAHgNQAEgHAHgQQAGgTAGgPIALgcQADgMAFgGIABgFQAAgFgHgIIAIgLIATgCIACAAIACABIABADIAQAdIAHAWIgEgBIgCADIADAGIAHACIAIAWIANAEIgFASIgEAAIAHAVIABAHIgBAHIALALQACACAFABIADACIABAEQAAADgDACIg0AAIgJgBIAAgEIAAgDIADgBIAKgDQACgBAAgEIAAgEIgMglIgnAEIgBgEIgJAEIgKAkQAAAIANABIAFADIAAACIAAAEIgCABIgDAAIgDgBIgWAAIgGACIgJgBIgCgBIgHADIAAgBIgEABIgDABIgHABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBgALlAKIAggEIgFgRIAAgEQAAgFgCgCQgCgCgCgFIgEgLgApPBWQgRABgJgKIAAABIAAAFIgCABIgdgEIgDACIgFgCIgCACIgEgCIgEAAIgHABQgDACgEABIgHAAIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgFIABgEIADgBIAKgCQAFgBABgDQACgEABgPIAAgwIABgEIADgCIgEgIIABggIgyB1QgCACgDAAIgGAAQgJgDgCgCIghhQIgDgNIgEgEIAAgJIgFgLIAAAFIgBAEIABADIgCAKIABACIABACIgDAEIADADIgDAkIADAdQAAALACAFQACAGAFAAIALACQAEAAAAAEIgBAGQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgQAAQgDgBgBgFQgJACAAABIgCABQgBAAgDgEQgFAFgEABIgRAAIgCAAIAAgGIAAgEIADgBQAJgBADgCQAEgDACgFIAGgcIABhiQAAgFgDgHQgDgHgNgHQgIgEgHAAIgIABQAIgQAIgDIAGgBQAHAAAJAEQANAEANASQANAQALAaIACAKIgGAEIAHAIIAIAEIgBAHIAGAHIAAAFIAFAGIANAgIAzh4IABgDIACAAIALAAIABACIgBAAIADABIACgBIABgBIADgBIAGAAIAQAAIADAAIABAAIABADIAAAFIgBACIgBAAIgNADQgCACgBADIgCAJQAAAFgDAHIABAHIgBAHIADAIIgBA1IgBAIIABAEIgCAJQAEAIABAEQAAAEACADIAEADIAJABIABAAIAAAAIAAgDIADgBIAWACQALgBAIgIQAUgNAQgYIAIgLIgCAAIgQgaIABgTIgJgDIgCgIIgMgHQgPgdgPgHQgNgJgLAAIgCAAIgCAAIgFAAQABgLAPgGIAGgBQAfAAAdAdQAGAHAQAeQANAaAHAJIATgUQAVgiAAgFQAAgEgQgCIgBAAIAAgIQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAIA0ABIACACIAAACIABAAIAZACIArgCIADABIABAFIgBAEIgNADQgDABgCADIgCAHQAAABAAABQgBABAAAAQAAABgBAAQAAAAgBAAIABAJIgBAHIABAGQgEACAAACIAAAAIAFAFIAABFIACALIAfAEIAhgCIAAAAIABgCQACgJABgSIAAhVQgBgIgDgEQgEgEgGgCIgLgEQgFgBAAgCIAAgFIADgBIABAAIAdAGIALgBIABABIACACIABgBIADAAIAGgBIABgBIAYgBIADACIAAAEIAAAEIgOACQgDAAgCAEQgBAEgBAGIABByIAUgBIAkAAIADgLIAAhFIAEgFIAAAAQAAgCgEgCIABgGIgBgHIABgJQgCAAgBgEIgCgHQgCgDgCgBIgNgDIgBgEIAAgFIADgBIAIAAIAjACIAMAAIANgCIADAAIABABIABAFIgBAEIgFABIgIAAIgEADIgDAGIgBAJIAAALIAAAxQgBAIgEAGQACADAAACIgBADIAEAPIAAACQAAAFgBAAIgBAAQAAADADAGQABAHAEACQACACAIACIAEABIABADIAAAEQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAIgCAAIgPAAIgRAAIgIgBIgxgBIAAABIisABQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgEIABgDIADgBQAIgCADgCQADgCABgHQADgGAAgDIAAAAQgBAAAAgFIAAgCIADgPIgBgDQAAgCACgDQgDgGgCgIIAAg8IgBgJIgCgGIgFgDIgIAAIgEgBIgBgEIgKAFQgTAVgeAuIgUAgQgJAMgaAaQgSAUgXgBgADVBNQAJgFAKgIIgBhxIADgGIgCgMIgFAAQgPAAgEAFIgLAMIgEADIAAAQIgKgBIAIg1IAFgBIAFABIATAAQADADALAAQAPAAAdgDIAdgBQABAYAIAbIgIAGQgGgPgIgIQgHgKgGgCQgEgCgHgBIgDABIgDBVIgEAFIABALIAFAJQACAUAJAHIAIADIAAAKIgEAAQgQAAgMgCIgLgBIgHABQgEACgTABgAHMBSIgXgBIhxAAIABgIQALgBADgDQADgDACgFQACgFABgTIgBg0IAEgBIAAgDIACgCIACgBIABABIAEAAIABgBIAAgDIgMABIgCgUQgBgQgCgFQgCgFgEgDQgFgDgKgBIAFgKIBUABIAEADIAEgBIACAAQANgCAWgBIAAAPIABALIAFAVIgIAHQgLgSgHgGIgOgMQgHgGgSgCIgJACIgFAAIgDAFIAAADIgEAIIAEAPIAAAfIApABIAIgHIAEgIIAJAAIABAzIgKgBQgBgJgFgIQgFgGgLAAIgfAAIAAAxQACANADACIAJABIAVgCIAAADIgCADIAGABIABgEQARAAASACIAYACIAAAAQAGABAIgEIAEgBQAEAAAAAFIAAACQgBAIgDAAIgcADgACMBSIgGgCIgGABIhhAAIABgIQALgBADgDIAFgIQACgFABgTIgBg0IADgBIAAgDIADgCIACgBIABABIAEAAIABgBIAAgDIgMABIgCgUQgBgQgCgFQgCgFgEgDQgFgDgKgBIAEgKIBVABIAEADIAEgBIACAAQANgCAWgBIAAAPIABALIAEAVIgIAHQgKgSgHgGIgOgMQgHgGgSgCIgKACIgEAAIgEAFIAAADIgDAIIADAPIAAAfIAqABIAIgHIAEgIIAJAAIABAzIgKgBQgBgJgFgIQgFgGgLAAIggAAIAAAxQADANADACIAJABIATABIACABIADgBIAAAAIADAAIAHgDQAGgDAIgFQAHgHAKgSIAIAIIgFAUIgBAKIABAOgAGchhQgDgFAAgDIAAgDQADgHAFgBQAFAAAEAFQAAAGgBACIgCAGIgGABgAFvhhQgDgFAAgEIABgCQADgHAFgBQAFAAAEAFQAAAGgBACIgDAGIgGABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-84.2,-11.7,168.5,23.4), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AAvB1QgPAAgHgEQgIgEgMgHQgKgIgQgSQgPgSgGgJIgVgeIgFgNIgHgGIgRAHIAAAZQAAAHgFAJQAFAHABAEIACAHQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAIAHABIAFABIAAAEIAAAFIgCAAIgEAAQgYAAglAKIgBAAIgCgBIgBgEIABgEIACgBIAHgCQADgBADgHIADgMIACglIABgEIgCgEIAAgkIACgCIACgEIACAAIgBgEIgCgDIgCAAIAAgMIgCgTQgCgEgCgBIgIgCIgDgBIgBgFIABgEIADAAIANAAIAUACIAIAEQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgCIAIAAIAHgBIADAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIgBAGQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgHABgCADQgDADAAAGIgCAvQACAFAEAAIAEgCQAHgDACgEIAXgWIAHgEIgCgEIAIgKIACgGQAAgEgDAAIgFgBIAAgEIAAgFIACgBIABAAIAKABIAIADQAWgCAGgCIACAAIACABIABAEIgBAFIgEACIgGABIgEADIgdAYQgFAGgLAQIApBJIgBACIgBABIADAGIACAEIAIACIASATQAIAKALADIANABIAIAAQAKgCAHgEIAHgDIADABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgEANIgPAEQgFACgRAAgAITBRIABAAQAUgGAAgKIABhsQgJgJgGgBIAAgDQABgDADAAIARACIApgCIAAAEQgLAAgGAQQgCAFAAAEIAAAQIgCAFQADABAAAEIAAAAQgDADAAABQADAAAAAGIABAAIAAAAIAWABQASABAMgVQADgNAAgIQgDgUgHgDIAAgBIAEgBIAEgCIgBABIgCgFIgEgCIgBADIgEAAIgBACIAAAAQgPgOgSAAQAAgBgLAAQgWAAgtAMIgEAAQgQgCAAgDIgJgVIABAAQAGAGAjACIA8gGIAUAAQAfAAAWAVQAJALAEAJQAHADAAACIgHAMQAAAWgYARQgXAMgPAAIgagCIgBAWIgCACIABAFQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAIABADIAAAAIADgCIACAAQACAYALABIADgBIAEAAIACAHIgHABIgZAAQgMAAgZAGQgFgFAAgCgAKeBWIgBAAIACgCIABgDIgCgCIAAgBIACgBIAXgHQACgDACgHIAHgNQAEgHAHgQQAGgTAGgPIALgcQADgMAFgGIABgFQAAgFgHgIIAIgLIATgCIACAAIACABIABADIAQAdIAHAWIgEgBIgCADIADAGIAHACIAIAWIANAEIgFASIgEAAIAHAVIABAHIgBAHIALALQACACAFABIADACIABAEQAAADgDACIg0AAIgJgBIAAgEIAAgDIADgBIAKgDQACgBAAgEIAAgEIgMglIgnAEIgBgEIgJAEIgKAkQAAAIANABIAFADIAAACIAAAEIgCABIgDAAIgDgBIgWAAIgGACIgJgBIgCgBIgHADIAAgBIgEABIgDABIgHABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBgALlAKIAggEIgFgRIAAgEQAAgFgCgCQgCgCgCgFIgEgLgApPBWQgRABgJgKIAAABIAAAFIgCABIgdgEIgDACIgFgCIgCACIgEgCIgEAAIgHABQgDACgEABIgHAAIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgFIABgEIADgBIAKgCQAFgBABgDQACgEABgPIAAgwIABgEIADgCIgEgIIABggIgyB1QgCACgDAAIgGAAQgJgDgCgCIghhQIgDgNIgEgEIAAgJIgFgLIAAAFIgBAEIABADIgCAKIABACIABACIgDAEIADADIgDAkIADAdQAAALACAFQACAGAFAAIALACQAEAAAAAEIgBAGQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgQAAQgDgBgBgFQgJACAAABIgCABQgBAAgDgEQgFAFgEABIgRAAIgCAAIAAgGIAAgEIADgBQAJgBADgCQAEgDACgFIAGgcIABhiQAAgFgDgHQgDgHgNgHQgIgEgHAAIgIABQAIgQAIgDIAGgBQAHAAAJAEQANAEANASQANAQALAaIACAKIgGAEIAHAIIAIAEIgBAHIAGAHIAAAFIAFAGIANAgIAzh4IABgDIACAAIALAAIABACIgBAAIADABIACgBIABgBIADgBIAGAAIAQAAIADAAIABAAIABADIAAAFIgBACIgBAAIgNADQgCACgBADIgCAJQAAAFgDAHIABAHIgBAHIADAIIgBA1IgBAIIABAEIgCAJQAEAIABAEQAAAEACADIAEADIAJABIABAAIAAAAIAAgDIADgBIAWACQALgBAIgIQAUgNAQgYIAIgLIgCAAIgQgaIABgTIgJgDIgCgIIgMgHQgPgdgPgHQgNgJgLAAIgCAAIgCAAIgFAAQABgLAPgGIAGgBQAfAAAdAdQAGAHAQAeQANAaAHAJIATgUQAVgiAAgFQAAgEgQgCIgBAAIAAgIQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAIA0ABIACACIAAACIABAAIAZACIArgCIADABIABAFIgBAEIgNADQgDABgCADIgCAHQAAABAAABQgBABAAAAQAAABgBAAQAAAAgBAAIABAJIgBAHIABAGQgEACAAACIAAAAIAFAFIAABFIACALIAfAEIAhgCIAAAAIABgCQACgJABgSIAAhVQgBgIgDgEQgEgEgGgCIgLgEQgFgBAAgCIAAgFIADgBIABAAIAdAGIALgBIABABIACACIABgBIADAAIAGgBIABgBIAYgBIADACIAAAEIAAAEIgOACQgDAAgCAEQgBAEgBAGIABByIAUgBIAkAAIADgLIAAhFIAEgFIAAAAQAAgCgEgCIABgGIgBgHIABgJQgCAAgBgEIgCgHQgCgDgCgBIgNgDIgBgEIAAgFIADgBIAIAAIAjACIAMAAIANgCIADAAIABABIABAFIgBAEIgFABIgIAAIgEADIgDAGIgBAJIAAALIAAAxQgBAIgEAGQACADAAACIgBADIAEAPIAAACQAAAFgBAAIgBAAQAAADADAGQABAHAEACQACACAIACIAEABIABADIAAAEQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAIgCAAIgPAAIgRAAIgIgBIgxgBIAAABIisABQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgEIABgDIADgBQAIgCADgCQADgCABgHQADgGAAgDIAAAAQgBAAAAgFIAAgCIADgPIgBgDQAAgCACgDQgDgGgCgIIAAg8IgBgJIgCgGIgFgDIgIAAIgEgBIgBgEIgKAFQgTAVgeAuIgUAgQgJAMgaAaQgSAUgXgBgADVBNQAJgFAKgIIgBhxIADgGIgCgMIgFAAQgPAAgEAFIgLAMIgEADIAAAQIgKgBIAIg1IAFgBIAFABIATAAQADADALAAQAPAAAdgDIAdgBQABAYAIAbIgIAGQgGgPgIgIQgHgKgGgCQgEgCgHgBIgDABIgDBVIgEAFIABALIAFAJQACAUAJAHIAIADIAAAKIgEAAQgQAAgMgCIgLgBIgHABQgEACgTABgAHMBSIgXgBIhxAAIABgIQALgBADgDQADgDACgFQACgFABgTIgBg0IAEgBIAAgDIACgCIACgBIABABIAEAAIABgBIAAgDIgMABIgCgUQgBgQgCgFQgCgFgEgDQgFgDgKgBIAFgKIBUABIAEADIAEgBIACAAQANgCAWgBIAAAPIABALIAFAVIgIAHQgLgSgHgGIgOgMQgHgGgSgCIgJACIgFAAIgDAFIAAADIgEAIIAEAPIAAAfIApABIAIgHIAEgIIAJAAIABAzIgKgBQgBgJgFgIQgFgGgLAAIgfAAIAAAxQACANADACIAJABIAVgCIAAADIgCADIAGABIABgEQARAAASACIAYACIAAAAQAGABAIgEIAEgBQAEAAAAAFIAAACQgBAIgDAAIgcADgACMBSIgGgCIgGABIhhAAIABgIQALgBADgDIAFgIQACgFABgTIgBg0IADgBIAAgDIADgCIACgBIABABIAEAAIABgBIAAgDIgMABIgCgUQgBgQgCgFQgCgFgEgDQgFgDgKgBIAEgKIBVABIAEADIAEgBIACAAQANgCAWgBIAAAPIABALIAEAVIgIAHQgKgSgHgGIgOgMQgHgGgSgCIgKACIgEAAIgEAFIAAADIgDAIIADAPIAAAfIAqABIAIgHIAEgIIAJAAIABAzIgKgBQgBgJgFgIQgFgGgLAAIggAAIAAAxQADANADACIAJABIATABIACABIADgBIAAAAIADAAIAHgDQAGgDAIgFQAHgHAKgSIAIAIIgFAUIgBAKIABAOgAGchhQgDgFAAgDIAAgDQADgHAFgBQAFAAAEAFQAAAGgBACIgCAGIgGABgAFvhhQgDgFAAgEIABgCQADgHAFgBQAFAAAEAFQAAAGgBACIgDAGIgGABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-84.2,-11.7,168.5,23.4), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnBWIgEAAIgSAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIAAgEQAGgBAIgIIAAh4IAAgDIgBAAIABgBIAAgDQgBgHgOgBIgBAAIADgOQAVAFALAAIAYAAIADgBIA0ADQAJAAAKgDIAAAKIgDAJQgCAJgBAAIgegKQgHgCgOAAIgeACIgCANIgBAAIgCgCIgBAAIgBADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABABIgBAEIACADIAAAUIAZgBQAOgBAVALQAXAQAAAUIAAAIIAAAIQgEAIgJALQgUATgdAAgAA3gDIAAAAQAAAFgDAAQAAACADADIAAAAQAAABAAABQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAIAAArQAAAFACAEIACADIAFAAQATAAALgKIABAAIACABIACgBIABACIADgBIACgDIgCgBIgGAAIACgBQAGgDADgTQAAgHgDgNQgLgSgRgBgAjjBPQgKgDgHgFQgEgCAAgDIABgCIgLgDQgOgQgDgIQgEgIgCgJQgBgJAAgJIgJgIIAIgKQACgJAFgLQAGgKAKgMQAJgLALgFQAMgGAJgBIAagBQAMABAPgEIAAAXIACANIAEAJIgLAGQgBgIgCgHQgDgHgFgFQgFgEgFgCQgEgCgFAAIgEAAQgIABgJADQgKAEgBADQgBADgFgBIAAAHQgGAJgDAIQgDAGgBAIIAAATQAAAMABAKQACAKAHAIIAMAPQAFAHAJAEQAJADALACIAUAAQAJgCAFgCQAFgDAIgJQAAAKgDAEQgEAEgKADQgKADgKACIgVABQgKgBgKgDgAEEBSIgFgCIgGABIhaAAIAAgHQAKgCADgDQADgCACgFQACgEABgSIgBgxIADgBIAAgDIACgBIACAAIACAAIADAAIABgBIAAgDIgLAAIgCgSQgBgPgCgEQgCgFgEgDQgEgDgJgBIAEgJIBOABIAFADIADgBIACAAQAMgCAVgBIgBAOIABALIAFATIgIAHQgKgRgGgGIgNgLQgHgFgQgDIgJACIgEAAIgEAFIAAADIgDAHIADAOIAAAeIAnAAIAHgGIAEgIIAJAAIAAAwIgJgBQgBgJgEgGQgFgHgLAAIgdAAIAAAuQACANADABIAJABIARABIADABIACgBIAAAAIADAAIAGgDQAGgCAHgGQAHgGAJgRIAIAHIgFATIgBAJIABAOgAgnBSIgGgCIgFABIhbAAIABgHQAKgCADgDQADgCACgFQACgEABgSIgBgxIADgBIAAgDIACgBIACAAIABAAIAEAAIAAgBIAAgDIgLAAIgBgSQgCgPgBgEQgCgFgEgDQgEgDgKgBIAEgJIBPABIAEADIAEgBIABAAQANgCAUgBIAAAOIABALIAEATIgHAHQgKgRgHgGIgNgLQgGgFgRgDIgJACIgEAAIgDAFIAAADIgDAHIADAOIAAAeIAnAAIAHgGIADgIIAJAAIABAwIgKgBQAAgJgFgGQgEgHgLAAIgdAAIAAAuQACANADABIAIABIASABIACABIACgBIABAAIADAAIAGgDQAGgCAHgGQAGgGAKgRIAHAHIgEATIgBAJIABAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-29.1,-8.6,58.4,17.2), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AAnBWIgEAAIgSAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIAAgEQAGgBAIgIIAAh4IAAgDIgBAAIABgBIAAgDQgBgHgOgBIgBAAIADgOQAVAFALAAIAYAAIADgBIA0ADQAJAAAKgDIAAAKIgDAJQgCAJgBAAIgegKQgHgCgOAAIgeACIgCANIgBAAIgCgCIgBAAIgBADQAAAAAAAAQABABAAAAQABAAABAAQAAAAABABIgBAEIACADIAAAUIAZgBQAOgBAVALQAXAQAAAUIAAAIIAAAIQgEAIgJALQgUATgdAAgAA3gDIAAAAQAAAFgDAAQAAACADADIAAAAQAAABAAABQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAIAAArQAAAFACAEIACADIAFAAQATAAALgKIABAAIACABIACgBIABACIADgBIACgDIgCgBIgGAAIACgBQAGgDADgTQAAgHgDgNQgLgSgRgBgAjjBPQgKgDgHgFQgEgCAAgDIABgCIgLgDQgOgQgDgIQgEgIgCgJQgBgJAAgJIgJgIIAIgKQACgJAFgLQAGgKAKgMQAJgLALgFQAMgGAJgBIAagBQAMABAPgEIAAAXIACANIAEAJIgLAGQgBgIgCgHQgDgHgFgFQgFgEgFgCQgEgCgFAAIgEAAQgIABgJADQgKAEgBADQgBADgFgBIAAAHQgGAJgDAIQgDAGgBAIIAAATQAAAMABAKQACAKAHAIIAMAPQAFAHAJAEQAJADALACIAUAAQAJgCAFgCQAFgDAIgJQAAAKgDAEQgEAEgKADQgKADgKACIgVABQgKgBgKgDgAEEBSIgFgCIgGABIhaAAIAAgHQAKgCADgDQADgCACgFQACgEABgSIgBgxIADgBIAAgDIACgBIACAAIACAAIADAAIABgBIAAgDIgLAAIgCgSQgBgPgCgEQgCgFgEgDQgEgDgJgBIAEgJIBOABIAFADIADgBIACAAQAMgCAVgBIgBAOIABALIAFATIgIAHQgKgRgGgGIgNgLQgHgFgQgDIgJACIgEAAIgEAFIAAADIgDAHIADAOIAAAeIAnAAIAHgGIAEgIIAJAAIAAAwIgJgBQgBgJgEgGQgFgHgLAAIgdAAIAAAuQACANADABIAJABIARABIADABIACgBIAAAAIADAAIAGgDQAGgCAHgGQAHgGAJgRIAIAHIgFATIgBAJIABAOgAgnBSIgGgCIgFABIhbAAIABgHQAKgCADgDQADgCACgFQACgEABgSIgBgxIADgBIAAgDIACgBIACAAIABAAIAEAAIAAgBIAAgDIgLAAIgBgSQgCgPgBgEQgCgFgEgDQgEgDgKgBIAEgJIBPABIAEADIAEgBIABAAQANgCAUgBIAAAOIABALIAEATIgHAHQgKgRgHgGIgNgLQgGgFgRgDIgJACIgEAAIgDAFIAAADIgDAHIADAOIAAAeIAnAAIAHgGIADgIIAJAAIABAwIgKgBQAAgJgFgGQgEgHgLAAIgdAAIAAAuQACANADABIAIABIASABIACABIACgBIABAAIADAAIAGgDQAGgCAHgGQAGgGAKgRIAHAHIgEATIgBAJIABAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-29.1,-8.6,58.4,17.2), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADVBOIABAAQATgGAAgJIAAhlQgIgIgFgBIAAgDQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAQABIAmgBIABADQgKABgGAPQgCAEAAAEIAAAOIgCAFQABAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAAAQgCACgBADQADgBAAAGIABAAIAAAAIAUACQASgBAKgTQADgMAAgIQgDgSgGgDIgBgBIAFAAIADgDIgBABIgBgEIgEgBIgCACIgCAAIgBABIgBAAQgOgNgRABQAAgBgKAAQgUAAgqALIgEAAQgPgCAAgEIgCgGIgBAFIABAKIAEATIgHAHQgKgQgGgGIgOgLQgGgFgQgCIgJACIgFAAIgDADIAAAEIgDAHIADAOIAAAdIAnABIAHgGIADgIIAJAAIABAvIgKAAQAAgIgEgIQgFgGgLAAIgdABIAAAtQACAMADABIAIABIASACIADABIACgBIAAAAIADAAIAGgDQAGgCAHgGQAGgGAKgRIAHAIIgEASIgBAKIABANIgbgBIgFgBIgGABIhbAAIABgIQAKgBADgCQADgDACgFQACgFABgRIgBgxIADgBIAAgCIACgCIACgBIABABIAEAAIABgBIAAgDIgLAAIgCgSQgBgOgCgFQgCgFgEgDQgEgCgKgBIAEgKIBPABIAFADIADgBIABAAQAMgCARAAIgCgFIABAAQAGAGAhACIA4gGIATAAQAdABATATQAJALAEAIQAGADAAABIgGALQAAAVgXAQQgVALgOAAIgYgCIgBAVIgCABIABAFQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAIABADIAAAAIADgCIACAAQABAXALAAIADgBIAEAAIABAHIgHABIgWAAQgMAAgXAGQgFgFAAgCgAkkBTIgRACQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIAAgDQAGgCAHgHIAAiCQAAgKgTgGIAAAAIADgHQAYAHALAAIAeAAIgCAHIgDAAIgDAAQgLAAgCAWIgBAAIgCgBIgBAAIAAADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABIgBAEIACACIAAAVIAZgCQAOAAAVALQAXAPgBAWIAHAKQAAACgHACQgDAJgJALQgTATgjACgAkPgGIAAABQAAAFgDAAQABABACADIAAAAQAAABAAABQAAABgBAAQAAABAAAAQgBAAgBAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABIAAAsIABAGIAKABQARgBALgFIABAAIABACIABgBIABADIADgCIAAgCIABAAIgDgCIgBAAIAAgBQAHgEADgTQAAgHgCgMQgMgUgRABgAhDBTIgFAAIgRAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAgEQAGgBAIgIIAAh4IAAgEIgBAAIABAAIAAgDQgCgGgNgCIgBAAIACgOQAWAFALAAIAXAAIAEAAIAyACQAJAAALgCIAAAJIgEAJQgCAJAAAAIgegJQgGgCgOAAIgeABIgCAMIgBAAIgDgBIgBAAIAAADQAAAAAAAAQABABAAAAQABAAAAAAQABAAABABIgCAEIADACIAAAVIAZgCQANAAAVALQAXAPAAAWIAAAHIAAAHQgEAJgJALQgTATgdAAgAgzgGIAAABQAAAFgDAAQAAABADADIAAAAQAAABgBABQAAABAAAAQAAABgBAAQAAAAgBAAQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAAArQAAAFACAEIABADIAGAAQASABAMgLIAAAAIACABIACgBIACACIADgBIACgCIgCgCIgGAAIACgCQAFgCADgTQAAgHgCgMQgLgUgSABgAFtBOIgTAEIAAgJQAKgDADgDIADgFIAAhuQgCgPgDgCIgKgEIgBgHIA1AAIABAJQgLAAgDACQgCACgBAOIgBBLQAegpAkgpIAAAAIABgFIgEgFIAAAAIgHgDIgBgIIA9ABIgFAJQgOABgCACIABB1QADAOAEADQAEAEAIABIABAGQgdAAgKgEIgUAEIAAgIQALgEADgCQAEgDgBhWIAAgDQgvA9gMAXQgEAHgDADIABACQAEADAIACIABAGQgdgBgKgDgAnEBRIgCgEQAAgHANgDQAMgHAAgGIAAg2IACAAIAAgBIAAAAIAAgBIACgCIAAgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAAAIgEAAIAAgUQAAgSgHAAIgCgBIACgHQAMAFAJAAIAYgCIAAAHIgCAAQgLAAAAAMIAABCQAAAZAGAAQAHAEAIgBQAQABAKgNIAFgPIgDgDQAAgQgQgNQgPgIgHAAIgBAAIAAgBQADgOAGAAQAIAEADAAQALABADgXIACgDQgCgQgVgJQgMgDgQAAIgGABQgTAAgfAKIgIACIgJgBQgGgBgBgDIgIgTIABAAQAOAHAVAAQAMAAAagEQAYgFAJAAIACAAQArAAAPAkIABADQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAAACgFALQgGAKgIAEQgHADgDAAIAAACQALAHAEAFQAEAGAHAPIAFAKQgIAPAAAEQgKARgFAAIAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgEAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQgMADgSgBIgkgDQgLAAgQAFQAAABgBAAQAAAAAAAAQgBAAAAAAQgBABgBAAgAi2BPIgBgIQAIgBACgCQADgDAAgLIgBhqIgFgNQgCgEgIABIACgLIAhABIAGAFIAFgDIAQgBIgCAHQgIACgDADQgCAFgBAPIAAAXIgCAFIgDAAIgGAIIADAEIAAAEIAFACIADAAIABA3QABALAHAEIAIACIAAAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-49.8,-8.5,99.6,17), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("ADVBOIABAAQATgGAAgJIAAhlQgIgIgFgBIAAgDQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAQABIAmgBIABADQgKABgGAPQgCAEAAAEIAAAOIgCAFQABAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAAAQgCACgBADQADgBAAAGIABAAIAAAAIAUACQASgBAKgTQADgMAAgIQgDgSgGgDIgBgBIAFAAIADgDIgBABIgBgEIgEgBIgCACIgCAAIgBABIgBAAQgOgNgRABQAAgBgKAAQgUAAgqALIgEAAQgPgCAAgEIgCgGIgBAFIABAKIAEATIgHAHQgKgQgGgGIgOgLQgGgFgQgCIgJACIgFAAIgDADIAAAEIgDAHIADAOIAAAdIAnABIAHgGIADgIIAJAAIABAvIgKAAQAAgIgEgIQgFgGgLAAIgdABIAAAtQACAMADABIAIABIASACIADABIACgBIAAAAIADAAIAGgDQAGgCAHgGQAGgGAKgRIAHAIIgEASIgBAKIABANIgbgBIgFgBIgGABIhbAAIABgIQAKgBADgCQADgDACgFQACgFABgRIgBgxIADgBIAAgCIACgCIACgBIABABIAEAAIABgBIAAgDIgLAAIgCgSQgBgOgCgFQgCgFgEgDQgEgCgKgBIAEgKIBPABIAFADIADgBIABAAQAMgCARAAIgCgFIABAAQAGAGAhACIA4gGIATAAQAdABATATQAJALAEAIQAGADAAABIgGALQAAAVgXAQQgVALgOAAIgYgCIgBAVIgCABIABAFQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAIABADIAAAAIADgCIACAAQABAXALAAIADgBIAEAAIABAHIgHABIgWAAQgMAAgXAGQgFgFAAgCgAkkBTIgRACQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIAAgDQAGgCAHgHIAAiCQAAgKgTgGIAAAAIADgHQAYAHALAAIAeAAIgCAHIgDAAIgDAAQgLAAgCAWIgBAAIgCgBIgBAAIAAADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABIgBAEIACACIAAAVIAZgCQAOAAAVALQAXAPgBAWIAHAKQAAACgHACQgDAJgJALQgTATgjACgAkPgGIAAABQAAAFgDAAQABABACADIAAAAQAAABAAABQAAABgBAAQAAABAAAAQgBAAgBAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABIAAAsIABAGIAKABQARgBALgFIABAAIABACIABgBIABADIADgCIAAgCIABAAIgDgCIgBAAIAAgBQAHgEADgTQAAgHgCgMQgMgUgRABgAhDBTIgFAAIgRAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAgEQAGgBAIgIIAAh4IAAgEIgBAAIABAAIAAgDQgCgGgNgCIgBAAIACgOQAWAFALAAIAXAAIAEAAIAyACQAJAAALgCIAAAJIgEAJQgCAJAAAAIgegJQgGgCgOAAIgeABIgCAMIgBAAIgDgBIgBAAIAAADQAAAAAAAAQABABAAAAQABAAAAAAQABAAABABIgCAEIADACIAAAVIAZgCQANAAAVALQAXAPAAAWIAAAHIAAAHQgEAJgJALQgTATgdAAgAgzgGIAAABQAAAFgDAAQAAABADADIAAAAQAAABgBABQAAABAAAAQAAABgBAAQAAAAgBAAQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAAArQAAAFACAEIABADIAGAAQASABAMgLIAAAAIACABIACgBIACACIADgBIACgCIgCgCIgGAAIACgCQAFgCADgTQAAgHgCgMQgLgUgSABgAFtBOIgTAEIAAgJQAKgDADgDIADgFIAAhuQgCgPgDgCIgKgEIgBgHIA1AAIABAJQgLAAgDACQgCACgBAOIgBBLQAegpAkgpIAAAAIABgFIgEgFIAAAAIgHgDIgBgIIA9ABIgFAJQgOABgCACIABB1QADAOAEADQAEAEAIABIABAGQgdAAgKgEIgUAEIAAgIQALgEADgCQAEgDgBhWIAAgDQgvA9gMAXQgEAHgDADIABACQAEADAIACIABAGQgdgBgKgDgAnEBRIgCgEQAAgHANgDQAMgHAAgGIAAg2IACAAIAAgBIAAAAIAAgBIACgCIAAgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAAAIgEAAIAAgUQAAgSgHAAIgCgBIACgHQAMAFAJAAIAYgCIAAAHIgCAAQgLAAAAAMIAABCQAAAZAGAAQAHAEAIgBQAQABAKgNIAFgPIgDgDQAAgQgQgNQgPgIgHAAIgBAAIAAgBQADgOAGAAQAIAEADAAQALABADgXIACgDQgCgQgVgJQgMgDgQAAIgGABQgTAAgfAKIgIACIgJgBQgGgBgBgDIgIgTIABAAQAOAHAVAAQAMAAAagEQAYgFAJAAIACAAQArAAAPAkIABADQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAAACgFALQgGAKgIAEQgHADgDAAIAAACQALAHAEAFQAEAGAHAPIAFAKQgIAPAAAEQgKARgFAAIAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgEAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQgMADgSgBIgkgDQgLAAgQAFQAAABgBAAQAAAAAAAAQgBAAAAAAQgBABgBAAgAi2BPIgBgIQAIgBACgCQADgDAAgLIgBhqIgFgNQgCgEgIABIACgLIAhABIAGAFIAFgDIAQgBIgCAHQgIACgDADQgCAFgBAPIAAAXIgCAFIgDAAIgGAIIADAEIAAAEIAFACIADAAIABA3QABALAHAEIAIACIAAAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-49.8,-8.5,99.6,17), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand3();
	this.instance.parent = this;
	this.instance.setTransform(-18,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-18,-18.5,36,37), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand33();
	this.instance.parent = this;
	this.instance.setTransform(-19,-154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-19,-154.5,38,309), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head3();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-46.5,-32,93,64), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head33();
	this.instance.parent = this;
	this.instance.setTransform(-27,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-27,-22.5,54,45), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body2();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-47.5,-120,95,240), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head22();
	this.instance.parent = this;
	this.instance.setTransform(-34,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-34,-32,68,64), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand22();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-16.5,-70,33,140), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2();
	this.instance.parent = this;
	this.instance.setTransform(-15,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-15,-26.5,30,53), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-57.5,-37.5,115,75), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head11();
	this.instance.parent = this;
	this.instance.setTransform(-25,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-25,-28,50,56), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1();
	this.instance.parent = this;
	this.instance.setTransform(-72.5,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-72.5,-116.5,145,233), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head1();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-38.5,-29.5,77,59), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-332,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-332,-207.5,664,415), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.75,compositeOperation:NaN},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.57},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ65();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:0.89,scaleY:0.89},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-46.4,240,92.8);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-120,-46.4,240,92.8), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(61, 61, 1)];
	this.instance.cache(-54,-136,107,271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-82.6,-164.6,168,332), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-86,-14,173,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-85.2,-12.7,174,28), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-31,-11,62,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-30.1,-9.6,64,22), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-52,-10,104,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-50.8,-9.5,104,22), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-30.1,-8.6,64,22.8), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-50.8,-8.5,104,22.6), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-85.2,-11.7,174,29.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(179.6,186.1,1,1,0,0,0,38.6,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:60,x:171.4,y:173.7},0).to({rotation:0,x:-33,y:148.8},3).to({x:187.9,y:147.4},4).wait(1).to({regX:38.7,rotation:30,x:97.3,y:178.3},0).to({rotation:49.7,x:-183.2,y:178.7},3).wait(88));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AvKAVIdbguQB0AVh0AZQktAFnXAAQnWAAqBgFgABJAJIMpAAQB5gJh5gNg");
	this.shape.setTransform(-207.8,-12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AmyALIMogVQB6AMh6AJg");
	this.shape_1.setTransform(-157,-12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AgaACIAygDQAHABgHACg");
	this.shape_2.setTransform(-97.5,-10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("Ag8AEIB2gIQAHAEgHAEIgxABIhFgBgAAFACIAzAAQAHgCgHgCg");
	this.shape_3.setTransform(-100.7,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AlrAKILBgVQAtAKgtALQhwACixAAQiwAAjwgCg");
	this.shape_4.setTransform(-63.5,-11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AqbAPIUPggQBPAPhPARQjPADlEAAQlDAAm5gDg");
	this.shape_5.setTransform(-26.4,-11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("AmyALIMogVQB6AMh6AJg");
	this.shape_6.setTransform(61.5,-12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AvKAVIdbguQB0AVh0AZQktAFnXAAQnWAAqBgFgABJAJIMpAAQB5gJh5gNg");
	this.shape_7.setTransform(10.8,-12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3300").s().p("AgSABIAogEIgnAHQgHgBAGgCg");
	this.shape_8.setTransform(105.9,-3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AgtACQAegEA/gGIhcARQgGgCAFgFgAgrAEQgGACAGACIAogIg");
	this.shape_9.setTransform(108.4,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3300").s().p("Ah5ACIEGgMIkDAVQgqgEAngFg");
	this.shape_10.setTransform(44,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AkqAGQDGgNGegQIpdAvQgngFAggNgAkdALQgnAFAqAEIEEgWg");
	this.shape_11.setTransform(60.4,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF3300").s().p("AjgADIHjgUIndAkQhOgHBIgJg");
	this.shape_12.setTransform(-17.8,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AonAJQFtgVL9gaIxeBNQhHgIA7gWgAoPASQhHAIBOAHIHegkg");
	this.shape_13.setTransform(12.4,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF3300").s().p("AlHAFILBgeIq4AzQhygJBpgMg");
	this.shape_14.setTransform(-79.7,12.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AsjANQIUgeRbglI5eBsQhogMBXgdgAsAAZQhpAMByAIIK5gyg");
	this.shape_15.setTransform(-35.6,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).wait(87));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,2.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({y:-15.8,alpha:1},7,cjs.Ease.get(1)).wait(70).to({scaleX:1.07,scaleY:1.07,rotation:-6.2,x:58.7,y:-16.9},2).to({y:-6.3,alpha:0},4).wait(1));

	// Символ 40
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.4,3.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:-15.5,alpha:1},7,cjs.Ease.get(1)).wait(72).to({scaleX:1.07,scaleY:1.07,rotation:4,x:-36.6,y:-16.6},2).to({y:-6,alpha:0},4).wait(1));

	// Символ 39
	this.instance_3 = new lib.Символ39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,-5.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({y:13.4,alpha:1},7,cjs.Ease.get(1)).wait(74).to({regX:0.1,regY:0.1,scaleX:1.07,scaleY:1.07,rotation:2.7,x:0.2,y:14.3},2).to({y:24.9,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.8,-15.2,491.3,205.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand33.png
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(14.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.3,y:-6.3},14,cjs.Ease.get(-1)).to({x:18.1,y:-13.2},15,cjs.Ease.get(1)).to({x:16.3,y:-6.6},15,cjs.Ease.get(-1)).to({x:14.5,y:0},15,cjs.Ease.get(1)).wait(1));

	// hand3.png
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.7,-6,1,1,0,0,0,-15.2,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-9.5},14,cjs.Ease.get(-1)).to({regX:-15.3,scaleX:1,scaleY:1,rotation:-19.9,x:-30.8,y:-5.9},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-9.8},15,cjs.Ease.get(-1)).to({regX:-15.2,scaleX:1,scaleY:1,rotation:0,x:-30.7,y:-6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-154.5,67,309);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-46.5,-32,93,64), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(24.2,-9.8,1,1,0,0,0,24.2,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.88,rotation:-4.7},2).to({scaleY:1,rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-22.5,54,45);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(1.2,87.8,1,1,0,0,0,11.2,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8,y:87.9},12,cjs.Ease.get(-1)).to({rotation:3.7},12,cjs.Ease.get(1)).to({rotation:1.8},12,cjs.Ease.get(-1)).to({rotation:0,y:87.8},13,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.5,-88,1,1,0,0,0,15,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.6,y:-89.6},12,cjs.Ease.get(-1)).to({rotation:-9.5,y:-91.2},12,cjs.Ease.get(1)).to({regX:15.1,rotation:-4.8,x:26.6,y:-89.7},12,cjs.Ease.get(-1)).to({regX:15,rotation:0,x:26.5,y:-88},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-88,53,176);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(12,5.5,1,1,0,0,0,12,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.1,rotation:-3.4,x:12.2},2).to({regX:12,rotation:0,x:12},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-32,68,64);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head2.png
	this.instance = new lib.head2();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// head22.png
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-51.5,-38,103,76), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},24,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15},25,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-37.5,115,75);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(-22.6,-21.8,1,1,0,0,0,-22.6,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.2},2).to({rotation:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-28,50,56);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},24,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04},25,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332,-207.5,664,415);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},14,cjs.Ease.get(-1)).to({scaleX:1.18,scaleY:1.18},15,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-46.4,240,92.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(7.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-54,-32,108,64), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,22.5,1,1,0,0,0,0,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3,x:0.1},19,cjs.Ease.get(-1)).to({rotation:-6.2},20,cjs.Ease.get(1)).to({rotation:-3,y:22.6},20,cjs.Ease.get(-1)).to({rotation:0,x:0,y:22.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-38,103,76);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head22.png
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(12.1,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body2.png
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hand22.png
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53.7,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-80.2,-176.5,143.8,296.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-57.5,-37.5,115,75), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(27.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-52.5,-29.5,105,59), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(0,258.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-120,212,240,92.8), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(18.8,18.1,1,1,0,0,0,18.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.5,x:18.9,y:18.2},21,cjs.Ease.get(-1)).to({rotation:-3.5,x:18.8,y:18.1},23,cjs.Ease.get(1)).to({rotation:-1.5,x:18.9,y:18.2},24,cjs.Ease.get(-1)).to({rotation:0,x:18.8,y:18.1},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-32,108,64);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head3.png
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-2,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body3.png
	this.instance_1 = new lib.body3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hand33.png
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-57,-198.5,156.5,312), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(8.4,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:33.2},29,cjs.Ease.get(-1)).to({y:38.3},30,cjs.Ease.get(1)).to({y:33.3},30,cjs.Ease.get(-1)).to({y:28.3},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-148.2,143.8,296.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-36.2,21.2,1,1,0,0,0,-36.2,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:21.3,rotation:2.5,y:21.4},14,cjs.Ease.get(-1)).to({regX:-36.3,regY:21.2,rotation:5.5,x:-36.3,y:21.2},15,cjs.Ease.get(1)).to({rotation:2.8},15,cjs.Ease.get(-1)).to({regX:-36.2,rotation:0,x:-36.2},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-29.5,105,59);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head11.png
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(28.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body1.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-81,-137.5,162,275), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(-21.2,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:48.8},36,cjs.Ease.get(-1)).to({y:55.3},38,cjs.Ease.get(1)).to({y:49},37,cjs.Ease.get(-1)).to({y:42.5},38,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-156,156.5,312);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-71.9,-148.2,143.8,296.5), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.9},19,cjs.Ease.get(-1)).to({y:10},20,cjs.Ease.get(1)).to({y:5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-137.5,162,275);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-78.2,-156,156.5,312), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-81,-137.5,162,275), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(10).call(this.frame_30).wait(10).call(this.frame_40).wait(10).call(this.frame_50).wait(10));

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-10.6,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7,x:34.8,y:57.1},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-10.6,y:10.8},9,cjs.Ease.get(1)).wait(1).to({scaleX:1.2,scaleY:1.2},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.7,scaleY:0.7,x:-50.2,y:55.6},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-10.6,y:10.8},9,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:0.7,scaleY:0.7,x:84.7,y:69.6},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:60.5,y:28.5},9,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,x:60.6,y:28.6},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:60.5,y:28.5},9,cjs.Ease.get(1)).wait(1).to({scaleX:1.15,scaleY:1.15,x:48.3,y:7.7},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:60.5,y:28.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 37
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-63.2,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.08,scaleY:1.08,x:-41,y:-30.3},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-63.2,y:-10},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.72,scaleY:0.72,x:-68,y:26},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-63.2,y:-10},9,cjs.Ease.get(1)).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.7,scaleY:0.7,x:-86.9,y:41.1},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-63.2,y:-10},9,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-78.1,-3.4,0.488,0.488);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:-62.1,y:-19.4,alpha:1},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.49,scaleY:0.49,x:-78.1,y:-3.4,alpha:0},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.27,scaleY:0.27,x:-14.1,y:-19.4},0).to({scaleX:1,scaleY:1,x:-10.1,y:-27.4,alpha:1},9).wait(1).to({scaleX:0.27,scaleY:0.27,x:-14.1,y:-19.4,alpha:0},9).wait(1).to({scaleX:0.47,scaleY:0.47,x:69.9,y:-3.4},0).to({scaleX:1,scaleY:1,x:63.5,y:-27.4,alpha:1},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.47,scaleY:0.47,x:69.9,y:-3.4,alpha:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-166,283,332);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Слой 6
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(76.4,-231.6,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99,y:-217.2},6,cjs.Ease.get(1)).wait(1).to({scaleX:0.77,scaleY:0.77,y:-231.6},6,cjs.Ease.get(1)).wait(1));

	// txt
	this.txt = new lib.Символ38();
	this.txt.parent = this;
	this.txt.setTransform(76.1,-159.7,1.285,1.285);

	this.timeline.addTween(cjs.Tween.get(this.txt).to({alpha:0},6,cjs.Ease.get(1)).wait(1).to({alpha:1},6,cjs.Ease.get(1)).wait(1));

	// Символ 57
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.7,-208);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-168,alpha:1},6,cjs.Ease.get(1)).wait(1).to({y:-208,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// men
	this.men = new lib.Символ51();
	this.men.parent = this;
	this.men.setTransform(77.6,32.4);

	this.timeline.addTween(cjs.Tween.get(this.men).to({y:-14.8},6,cjs.Ease.get(1)).wait(1).to({y:32.4},6,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ59();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.1,-75.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.352},6).wait(1).to({alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.5,-283,631.1,481.4);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link, "_blank");
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
		    _this.main.gotoAndPlay(8);
		}
		
		///man1
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main.men.gotoAndPlay(1);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseout", fl_MouseOutHandler_22);
		
		function fl_MouseOutHandler_22()
		{
			_this.main.men.gotoAndPlay(11);
		}
		
		///man2
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_33);
		
		function fl_MouseOverHandler_33()
		{
			_this.main.men.gotoAndPlay(21);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseout", fl_MouseOutHandler_44);
		
		function fl_MouseOutHandler_44()
		{
			_this.main.men.gotoAndPlay(31);
		}
		
		///man3
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn3.addEventListener("mouseover", fl_MouseOverHandler_55);
		
		function fl_MouseOverHandler_55()
		{
			_this.main.men.gotoAndPlay(41);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn3.addEventListener("mouseout", fl_MouseOutHandler_66);
		
		function fl_MouseOutHandler_66()
		{
			_this.main.men.gotoAndPlay(51);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 62
	this.btn3 = new lib.Символ62();
	this.btn3.parent = this;
	this.btn3.setTransform(203.3,247.6,0.92,1.416);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.Символ62(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(1));

	// Символ 61
	this.btn2 = new lib.Символ61();
	this.btn2.parent = this;
	this.btn2.setTransform(120.1,247.6,0.89,1.416);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Символ61(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// Символ 60
	this.btn1 = new lib.Символ60();
	this.btn1.parent = this;
	this.btn1.setTransform(36,247.6,0.9,1.416);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Символ60(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// Слой 3
	this.main = new lib.Символ58();
	this.main.parent = this;
	this.main.setTransform(43.3,277.4);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(120,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.2,192,724.3,483.8);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507543094083", id:"bg"},
		{src:"images/body1.png?1507543094083", id:"body1"},
		{src:"images/body2.png?1507543094083", id:"body2"},
		{src:"images/body3.png?1507543094083", id:"body3"},
		{src:"images/btn.png?1507543094083", id:"btn"},
		{src:"images/hand2.png?1507543094083", id:"hand2"},
		{src:"images/hand22.png?1507543094083", id:"hand22"},
		{src:"images/hand3.png?1507543094083", id:"hand3"},
		{src:"images/hand33.png?1507543094083", id:"hand33"},
		{src:"images/head1.png?1507543094083", id:"head1"},
		{src:"images/head11.png?1507543094083", id:"head11"},
		{src:"images/head2.png?1507543094083", id:"head2"},
		{src:"images/head22.png?1507543094083", id:"head22"},
		{src:"images/head3.png?1507543094083", id:"head3"},
		{src:"images/head33.png?1507543094083", id:"head33"},
		{src:"images/logo.png?1507543094083", id:"logo"},
		{src:"images/shpaga.png?1507543094083", id:"shpaga"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;