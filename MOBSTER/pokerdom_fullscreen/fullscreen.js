(function (lib, img, cjs, ss, an) {

Object.keys(images).forEach(function(key){
            (lib[key] = function() {
            this.initialize(images[key]);
            }).prototype = p = new createjs.Bitmap();
            p.nominalBounds = new createjs.Rectangle(0,0,images[key].width,images[key].height);
        });
    
    // helper functions:

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


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-174,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-174,-18.5,348,37), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-127,-50,1.37,1.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-127,-50,254.9,100.1), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9.6,1,1).p("AAAmPQCmAAB1B1QB1B1AAClQAACmh1B1Qh1B1imAAIAABkAAAmPIAACaIAAB0AAAj1QBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIQhIhIAAhmQAAhlBIhIQBIhIBlAAgAAAnzIAABkAAACIIAABuIAACaQilAAh1h1Qh1h1AAimQAAilB1h1QB1h1ClAAAGQAAIiaAAIhPAAAH0AAIhkAAAiUAAIhhAAIiaAAIhkAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-54.8,-54.8,109.6,109.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boshka();
	this.instance.parent = this;
	this.instance.setTransform(-70.6,-89.4,1.503,1.503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-70.6,-89.4,141.3,178.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jopa();
	this.instance.parent = this;
	this.instance.setTransform(-159.3,-148,1.503,1.503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-159.3,-148,318.7,296.1), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-76.5,-250,153,500), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stol();
	this.instance.parent = this;
	this.instance.setTransform(-340,-98,1.36,1.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-340,-98,680,155.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-174,-18.5,348,37), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-57,-57,114,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-57.8,-57.8,118,118), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.txt_land = new lib.Символ20();
	this.txt_land.parent = this;
	this.txt_land.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt_land).wait(1));

	// Слой 1
	this.txt_port = new lib.Символ22();
	this.txt_port.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.txt_port).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-174,-50.2,348,100.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD400").ss(4,1,1).p("AD2AAQAABmhIBIQhIBIhmAAQhlAAhIhIQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFD400").ss(6.1,1,1).p("AAAmPQCmAAB1B1QB1B1AAClQAACmh1B1Qh1B1imAAIAABkAAAmPIAACaIAAB0AAAnzIAABkAmPAAQAAilB1h1QB1h1ClAAAAACIIAABuIAACaQilAAh1h1Qh1h1AAimAGQAAIiaAAIhPAAAH0AAIhkAAAiUAAIhhAAIiaAAIhkAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-57.8,-57.8,118,118), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(70,80,1,1,0,0,0,70,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.5,x:55.1,y:87.5},12,cjs.Ease.get(-1)).to({rotation:-4.7,x:50,y:90},12,cjs.Ease.get(1)).to({regY:80.1,rotation:-1.3,x:64.4,y:82.9},12,cjs.Ease.get(-1)).to({regY:80,rotation:0,x:70,y:80},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-89.4,141.3,178.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(0,148.1,1,1,0,0,0,0,148.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,y:148.2},11,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:148.1},13,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.3,-148,318.7,296.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-39.9,120.1,0.784,0.784,-38.5,0,0,-51,153.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:153,scaleX:0.78,scaleY:0.78,rotation:-33.8,y:120.2},7,cjs.Ease.get(-1)).to({scaleX:0.78,scaleY:0.78,rotation:-27.8,x:-40,y:120.1},9,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.78,rotation:-33.1,x:-39.9,y:120.2},9,cjs.Ease.get(-1)).to({regY:153.1,scaleX:0.78,scaleY:0.78,rotation:-38.5,y:120.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.3,-189.6,337.9,381.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-60,90,1,1,0,0,0,-60,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-252.3,-189.6,337.9,381.7), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt1 = new lib.Символ17();
	this.txt1.parent = this;
	this.txt1.setTransform(0,0,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get(this.txt1).to({scaleX:0.97,scaleY:0.97},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},3,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-43.3,300,86.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:12.1},0).wait(1).to({rotation:24},0).wait(1).to({rotation:35.7},0).wait(1).to({rotation:47.2},0).wait(1).to({rotation:58.4},0).wait(1).to({rotation:69.5},0).wait(1).to({rotation:80.4},0).wait(1).to({rotation:91},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:111.7},0).wait(1).to({rotation:121.7},0).wait(1).to({rotation:131.5},0).wait(1).to({rotation:141.2},0).wait(1).to({rotation:150.6},0).wait(1).to({rotation:159.8},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:177.6},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:194.5},0).wait(1).to({rotation:202.7},0).wait(1).to({rotation:210.7},0).wait(1).to({rotation:218.4},0).wait(1).to({rotation:226},0).wait(1).to({rotation:233.3},0).wait(1).to({rotation:240.4},0).wait(1).to({rotation:247.4},0).wait(1).to({rotation:254.1},0).wait(1).to({rotation:260.6},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:273},0).wait(1).to({rotation:278.9},0).wait(1).to({rotation:284.6},0).wait(1).to({rotation:290.1},0).wait(1).to({rotation:295.4},0).wait(1).to({rotation:300.4},0).wait(1).to({rotation:305.3},0).wait(1).to({rotation:309.9},0).wait(1).to({rotation:314.4},0).wait(1).to({rotation:318.6},0).wait(1).to({rotation:322.7},0).wait(1).to({rotation:326.5},0).wait(1).to({rotation:330.1},0).wait(1).to({rotation:333.5},0).wait(1).to({rotation:336.7},0).wait(1).to({rotation:339.7},0).wait(1).to({rotation:342.5},0).wait(1).to({rotation:345.1},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:349.7},0).wait(1).to({rotation:351.6},0).wait(1).to({rotation:353.4},0).wait(1).to({rotation:354.9},0).wait(1).to({rotation:356.3},0).wait(1).to({rotation:357.4},0).wait(1).to({rotation:358.3},0).wait(1).to({rotation:359.1},0).wait(1).to({rotation:359.6},0).wait(1).to({rotation:359.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.8,-57.8,118,118);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-60,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-262.7},14,cjs.Ease.get(-1)).to({x:-480},15,cjs.Ease.get(0.94)).to({x:-270},15,cjs.Ease.get(-1)).to({x:-60},15,cjs.Ease.get(0.94)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.8,-57.8,119,118);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.4,-89.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-159.3,-179,318.7,358.1), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.8},10,cjs.Ease.get(-1)).to({y:50},11,cjs.Ease.get(1)).to({y:21.8},13,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.8,-57.8,119,118);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(0,179.1,1,1,0,0,0,0,179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.3,x:0.1,y:179.2},8,cjs.Ease.get(-1)).to({rotation:-5.5,y:179.1},11,cjs.Ease.get(1)).to({rotation:-2.5,x:0,y:179.2},9,cjs.Ease.get(-1)).to({regX:0.1,rotation:0.8,x:0.1,y:179.1},11,cjs.Ease.get(1)).to({rotation:3.8,y:179.2},10,cjs.Ease.get(-1)).to({regX:0,rotation:7.2,x:0},10,cjs.Ease.get(1)).to({rotation:3.5,y:179.1},10,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.3,-179,318.7,358.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(280,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// jopa.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.3,-159.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:27.3},12,cjs.Ease.get(-1)).to({x:54.3},12,cjs.Ease.get(1)).to({x:28.4},12,cjs.Ease.get(-1)).to({x:0.3},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-339,440.2,358.1);


// stage content:
(lib.fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function(){
			
			var s = _MBSTR.windowSize(), 
				
				w = s.iw, h = s.ih, bw = w * 0.94, bh = h * 0.7,
				stage_scale = _MBSTR.windowScale(),
				cs = size => size * stage_scale,
				
				_port = w < h, _land = w > h,
				_mob = w < h && w < cs(420) && h < cs(750) || w > h && h < cs(420) && w < cs(750);
				
			var min_w = cs(600);
			var min_h = cs(600);
			
			var EL = {
				
				ruka : {
					x : _port ? bw : bw * 0.6,
					y : _port ? bh : bh * 1.2,
					s : _port ? 1 : 1
				},
				
				baba : {
					x : _port ? bw * 0.5 : bw * 0.3,
					y : _port ? bh * 0.76 : _mob ? bh * 0.86 : bh * 0.78,
					s : _port ? _mob ? 1 : w > cs(1020) ? 1.4 : 1 : _mob ? 1 : w < cs(961) ? 1 : 1.3
				},
				
				txt : {
					x : _port ? bw * 0.5 : bw * 0.78,
					y : _port ? bh * 0.12 : bh * 0.4,
					s : _port ? 1.4 : 1.3,
					
				},
				
				stol : {
					x : _port ? bw * 0.5 : bw * 0.3,
					y : _port ? bh : _mob ? bh * 1.2 : bw > cs(1300) ? bh : bh * 1.1,
					s : _port ? _mob ? 1.3 : w > cs(1020) ? 1.6 : w > cs(799) ? 1.5 : 1.3 : _mob ? 1.2 : w > cs(1300) ? 1.8 : w < cs(961) ? 1.2 : 1.4
				}
			};
			
			_this.txt.txt1.txt_port.visible = _port ? true : false,
			_this.txt.txt1.txt_land.visible = _land ? true : false;
			
			
			
			
			/* ============== DO NOT EDIT ============ > */
			
			var new_scale = stage_scale * (w / min_w < 1 ? w / min_w : 1) * (h / min_h < 1 ? h / min_h : 1);
			Object.keys(EL).forEach(key => {
				_this[key].x = EL[key].x; _this[key].y = EL[key].y;
				_this[key].scaleX = _this[key].scaleY = EL[key].s * stage_scale * new_scale;
				"c" in EL[key] && ((parent, value) => {
					Object.keys(value).forEach(key => {
						parent[key] = value[key];
					});
				})(_this[key], EL[key].c);
			});
			
			/* < ============ DO NOT EDIT ============== */
		}
		
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ruka.png
	this.ruka = new lib.Символ5();
	this.ruka.parent = this;
	this.ruka.setTransform(708.8,498.9,1,1,0,0,0,-40,115);

	this.timeline.addTween(cjs.Tween.get(this.ruka).wait(1));

	// txt.png
	this.txt = new lib.Символ2();
	this.txt.parent = this;
	this.txt.setTransform(483,-164.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// stol.png
	this.stol = new lib.Символ3();
	this.stol.parent = this;
	this.stol.setTransform(483,462,1,1,0,0,0,0,57);

	this.timeline.addTween(cjs.Tween.get(this.stol).wait(1));

	// jopa.png
	this.baba = new lib.Символ1();
	this.baba.parent = this;
	this.baba.setTransform(483.3,274.6,1,1,0,0,0,0.3,19.1);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(625.5,47.2,691.4,783.8);
// library properties:
lib.properties = {
	width: 965,
	height: 510,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/boshka.png", id:"boshka"},
		{src:"images/jopa.png", id:"jopa"},
		{src:"images/ruka.png", id:"ruka"},
		{src:"images/stol.png", id:"stol"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/txt2.png", id:"txt2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;