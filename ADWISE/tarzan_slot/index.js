(function (lib, img, cjs, ss, an) {

Object.keys(img).forEach(function(key){
    (lib[key] = function() {
    this.initialize(img[key]);
    }).prototype = p = new createjs.Bitmap();
    p.nominalBounds = new createjs.Rectangle(0,0,img[key].width,img[key].height);
});

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


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-147.6,-56.3,1,1,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel_1, new cjs.Rectangle(-147.6,-147.8,295.4,295.8), null);


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.239)").s().p("AikjSIFJDdIlJDHg");
	this.shape.setTransform(-0.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.triangle, new cjs.Rectangle(-17,-22.2,33,42.1), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bonus();
	this.instance.parent = this;
	this.instance.setTransform(-29,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-29,-10,58,20), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yatırma();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-38.5,-9.5,77,19), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.para();
	this.instance.parent = this;
	this.instance.setTransform(-22,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-22,-9.5,44,19), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ilk();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-13.5,-9.5,27,19), null);


(lib.k1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thiusand();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k1, new cjs.Rectangle(-93.5,-53,187,106), null);


(lib.girl_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_in, new cjs.Rectangle(-53.5,-87,107,174), null);


(lib.frame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame();
	this.instance.parent = this;
	this.instance.setTransform(-124,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame_1, new cjs.Rectangle(-124,-119.5,248,239), null);


(lib.btn_norm_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn_active();
	this.instance.parent = this;
	this.instance.setTransform(-40,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_norm_in, new cjs.Rectangle(-40,-42,80,84), null);


(lib.btn_active_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn_norm();
	this.instance.parent = this;
	this.instance.setTransform(-40,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_active_1, new cjs.Rectangle(-40,-42,80,84), null);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var EL = ['k1','t1','t2','t3','t4'];
		
		
		this.Show = function(){
			var _delay = 1;
			for(var i = 0; i < EL.length; i++){
				cjs.Tween.get(_this[EL[i]], {loop: false}).wait(_delay).to({x : -60}, 700, createjs.Ease.elasticOut);
				_delay = _delay + 100;
			}
		}
		
		this.Hide = function(){
			var _delay = 1;
			for(var i = 0; i < EL.length; i++){
				cjs.Tween.get(_this[EL[i]], {loop: false}).wait(_delay).to({x : -200}, 700, createjs.Ease.elasticIn);
				_delay = _delay + 100;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.parent = this;
	this.t4.setTransform(-61,80,1,1,0,0,0,-29.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(-60,52,1,1,0,0,0,-38,1);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(-61,23,1,1,0,0,0,-22.5,0);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(-61,-5,1,1,0,0,0,-14,0);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// k1
	this.k1 = new lib.k1();
	this.k1.parent = this;
	this.k1.setTransform(-60,-44,1,1,0,0,0,-60,0.5);

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-93.5,-97.5,187,187), null);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cjs.Tween.get(this.girl_in, {loop:true}).to({y: 20}, 1000, cjs.Ease.quadInOut).to({y: 0}, 1000, cjs.Ease.quadInOut);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// girl_in
	this.girl_in = new lib.girl_in();
	this.girl_in.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.girl_in).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(-53.5,-87,107,174), null);


(lib.btn_norm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cjs.Tween.get(this.btn_norm_in, {loop: true}).to({scaleX: 1.2, scaleY: 1.2}, 400, cjs.Ease.quadInOut).to({scaleX: 1, scaleY: 1}, 400, cjs.Ease.quadInOut);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// in
	this.btn_norm_in = new lib.btn_norm_in();
	this.btn_norm_in.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btn_norm_in).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_norm_1, new cjs.Rectangle(-40,-42,80,84), null);


(lib.wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.btn_norm.alpha = 0;
		
		cjs.Tween.get(_this.triangle, {loop: true}).to({alpha: 0}, 300).to({alpha: 1}, 300);
		
		
		var wheel = new cjs.Tween.get(_this.wheel, {loop: true}).to({rotation: 1080}, 4000, createjs.Ease.quartInOut).call(function(){
				_this.parent.txt.Show();
				_this.parent.Hide();
				cjs.Tween.get(_this.btn_norm, {loop: false}).to({alpha: 1}, 200);
				cjs.Tween.get(_this.btn_active, {loop: false}).to({alpha: 0}, 200);
		}).wait(4000).call(function(){
				_this.parent.txt.Hide();
				_this.parent.Show();
				cjs.Tween.get(_this.btn_norm, {loop: false}).to({alpha: 0}, 200);
				cjs.Tween.get(_this.btn_active, {loop: false}).to({alpha: 1}, 200);
		});
		
		var wheel2 = new cjs.Tween.get(_this.wheel, {loop: true}).to({rotation: 1080}, 4000);
		wheel2._paused = true;
		
		var container = document.getElementById('container');
		
		container.addEventListener('mouseover', function(){
			wheel._paused = true;
			wheel2._paused = false;
			cjs.Tween.get(_this.btn_norm, {loop: false}).to({alpha: 1}, 200);
			cjs.Tween.get(_this.btn_active, {loop: false}).to({alpha: 0}, 200);
		});
		
		container.addEventListener('mouseout', function(){
			wheel._paused = false;
			wheel2._paused = true;
			cjs.Tween.get(_this.btn_norm, {loop: false}).to({alpha: 0}, 200);
			cjs.Tween.get(_this.btn_active, {loop: false}).to({alpha: 1}, 200);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// triangle
	this.triangle = new lib.triangle();
	this.triangle.parent = this;
	this.triangle.setTransform(-103,0.3);
	this.triangle.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.triangle).wait(1));

	// btn_active
	this.btn_active = new lib.btn_active_1();
	this.btn_active.parent = this;
	this.btn_active.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.btn_active).wait(1));

	// btn_norm
	this.btn_norm = new lib.btn_norm_1();
	this.btn_norm.parent = this;
	this.btn_norm.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.btn_norm).wait(1));

	// frame
	this.instance = new lib.frame_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wheel
	this.wheel = new lib.wheel_1();
	this.wheel.parent = this;
	this.wheel.setTransform(6.5,0);

	this.timeline.addTween(cjs.Tween.get(this.wheel).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel_mc, new cjs.Rectangle(-141.1,-147.8,295.4,295.8), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		var EL = ['t1','t2','t3','t4','k1'];
		
		for(var i = 0; i < EL.length; i++){
			_this.txt[EL[i]].x = -200;
		}
		
		this.Hide = function(){
			cjs.Tween.get(_this.girl, {loop:false}).to({y: 500}, 500, cjs.Ease.quadIn);
		}
		
		this.Show = function(){
			cjs.Tween.get(_this.girl, {loop:false}).wait(600).to({y: 123}, 800);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// girl
	this.girl = new lib.girl_1();
	this.girl.parent = this;
	this.girl.setTransform(42,123);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.parent = this;
	this.txt.setTransform(72.5,80.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// wheel
	this.instance = new lib.wheel_mc();
	this.instance.parent = this;
	this.instance.setTransform(215,133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114,75,390.2,298);
// library properties:
lib.properties = {
	width: 270,
	height: 184,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;