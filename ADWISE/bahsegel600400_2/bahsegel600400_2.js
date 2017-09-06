(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bablo_03 = function() {
	this.initialize(img.bablo_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,37);


(lib.bablo_05 = function() {
	this.initialize(img.bablo_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,56);


(lib.bablo_08 = function() {
	this.initialize(img.bablo_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,71);


(lib.bablo_13 = function() {
	this.initialize(img.bablo_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,45);


(lib.bablo_16 = function() {
	this.initialize(img.bablo_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,42);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,146);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,374);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,76);


(lib.konf = function() {
	this.initialize(img.konf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,408);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,51);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,68);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,155);// helper functions:

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


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_03();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-23.5,-18.5,47,37), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_05();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-33.5,-28,67,56), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_08();
	this.instance.parent = this;
	this.instance.setTransform(-24,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-24,-35.5,48,71), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_13();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-16.5,-22.5,33,45), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_16();
	this.instance.parent = this;
	this.instance.setTransform(-29,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-29,-21,58,42), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.konf();
	this.instance.parent = this;
	this.instance.setTransform(-400,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-400,-204,800,408), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-34,-13.5,1,0.397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-34,-13.5,68,27), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(-48,-48,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-48,-48,96,96), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-8.9,-91.1,1,0.428,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-72.7,-91.1,145.4,182.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-152.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-152.5,-38,305,76), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwHANDIAA6FMBgPAAAIAAaFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-307.9,-83.5,616,167), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-74,-22.2,0.871,0.871);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.ten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-167,-53,4.902,1.409);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-167,-53,333.4,95.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-300,-200,600,400), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-300,-200,600,400), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.5,47,37);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:8.2},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:11},0).wait(1).to({rotation:12.3},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:16.4},0).wait(1).to({rotation:17.8},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:21.9},0).wait(1).to({rotation:23.3},0).wait(1).to({rotation:24.6},0).wait(1).to({rotation:26},0).wait(1).to({rotation:27.4},0).wait(1).to({rotation:28.7},0).wait(1).to({rotation:30.1},0).wait(1).to({rotation:31.5},0).wait(1).to({rotation:32.9},0).wait(1).to({rotation:34.2},0).wait(1).to({rotation:35.6},0).wait(1).to({rotation:37},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:39.7},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:43.8},0).wait(1).to({rotation:45.2},0).wait(1).to({rotation:46.5},0).wait(1).to({rotation:47.9},0).wait(1).to({rotation:49.3},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:52},0).wait(1).to({rotation:53.4},0).wait(1).to({rotation:54.8},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:58.9},0).wait(1).to({rotation:60.2},0).wait(1).to({rotation:61.6},0).wait(1).to({rotation:63},0).wait(1).to({rotation:64.3},0).wait(1).to({rotation:65.7},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:68.4},0).wait(1).to({rotation:69.8},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:72.5},0).wait(1).to({rotation:73.9},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:76.7},0).wait(1).to({rotation:78},0).wait(1).to({rotation:79.4},0).wait(1).to({rotation:80.8},0).wait(1).to({rotation:82.1},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.3},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.4},0).wait(1).to({rotation:95.8},0).wait(1).to({rotation:97.2},0).wait(1).to({rotation:98.6},0).wait(1).to({rotation:99.9},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:102.7},0).wait(1).to({rotation:104},0).wait(1).to({rotation:105.4},0).wait(1).to({rotation:106.8},0).wait(1).to({rotation:108.1},0).wait(1).to({rotation:109.5},0).wait(1).to({rotation:110.9},0).wait(1).to({rotation:112.2},0).wait(1).to({rotation:113.6},0).wait(1).to({rotation:115},0).wait(1).to({rotation:116.3},0).wait(1).to({rotation:117.7},0).wait(1).to({rotation:119.1},0).wait(1).to({rotation:120.5},0).wait(1).to({rotation:121.8},0).wait(1).to({rotation:123.2},0).wait(1).to({rotation:124.6},0).wait(1).to({rotation:125.9},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:128.7},0).wait(1).to({rotation:130},0).wait(1).to({rotation:131.4},0).wait(1).to({rotation:132.8},0).wait(1).to({rotation:134.1},0).wait(1).to({rotation:135.5},0).wait(1).to({rotation:136.9},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:139.6},0).wait(1).to({rotation:141},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:143.7},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.5},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:149.2},0).wait(1).to({rotation:150.6},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:153.3},0).wait(1).to({rotation:154.7},0).wait(1).to({rotation:156},0).wait(1).to({rotation:157.4},0).wait(1).to({rotation:158.8},0).wait(1).to({rotation:160.2},0).wait(1).to({rotation:161.5},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:164.3},0).wait(1).to({rotation:165.6},0).wait(1).to({rotation:167},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:169.7},0).wait(1).to({rotation:171.1},0).wait(1).to({rotation:172.5},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:175.2},0).wait(1).to({rotation:176.6},0).wait(1).to({rotation:177.9},0).wait(1).to({rotation:179.3},0).wait(1).to({rotation:180.7},0).wait(1).to({rotation:182.1},0).wait(1).to({rotation:183.4},0).wait(1).to({rotation:184.8},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:187.5},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.3},0).wait(1).to({rotation:191.6},0).wait(1).to({rotation:193},0).wait(1).to({rotation:194.4},0).wait(1).to({rotation:195.7},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:198.5},0).wait(1).to({rotation:199.8},0).wait(1).to({rotation:201.2},0).wait(1).to({rotation:202.6},0).wait(1).to({rotation:204},0).wait(1).to({rotation:205.3},0).wait(1).to({rotation:206.7},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:209.4},0).wait(1).to({rotation:210.8},0).wait(1).to({rotation:212.2},0).wait(1).to({rotation:213.5},0).wait(1).to({rotation:214.9},0).wait(1).to({rotation:216.3},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:219},0).wait(1).to({rotation:220.4},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223.1},0).wait(1).to({rotation:224.5},0).wait(1).to({rotation:225.9},0).wait(1).to({rotation:227.2},0).wait(1).to({rotation:228.6},0).wait(1).to({rotation:230},0).wait(1).to({rotation:231.3},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:234.1},0).wait(1).to({rotation:235.4},0).wait(1).to({rotation:236.8},0).wait(1).to({rotation:238.2},0).wait(1).to({rotation:239.5},0).wait(1).to({rotation:240.9},0).wait(1).to({rotation:242.3},0).wait(1).to({rotation:243.7},0).wait(1).to({rotation:245},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:247.8},0).wait(1).to({rotation:249.1},0).wait(1).to({rotation:250.5},0).wait(1).to({rotation:251.9},0).wait(1).to({rotation:253.2},0).wait(1).to({rotation:254.6},0).wait(1).to({rotation:256},0).wait(1).to({rotation:257.3},0).wait(1).to({rotation:258.7},0).wait(1).to({rotation:260.1},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.8},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:265.6},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:268.3},0).wait(1).to({rotation:269.7},0).wait(1).to({rotation:271},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:273.8},0).wait(1).to({rotation:275.1},0).wait(1).to({rotation:276.5},0).wait(1).to({rotation:277.9},0).wait(1).to({rotation:279.2},0).wait(1).to({rotation:280.6},0).wait(1).to({rotation:282},0).wait(1).to({rotation:283.3},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286.1},0).wait(1).to({rotation:287.5},0).wait(1).to({rotation:288.8},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.6},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:294.3},0).wait(1).to({rotation:295.7},0).wait(1).to({rotation:297},0).wait(1).to({rotation:298.4},0).wait(1).to({rotation:299.8},0).wait(1).to({rotation:301.1},0).wait(1).to({rotation:302.5},0).wait(1).to({rotation:303.9},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.6},0).wait(1).to({rotation:308},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:310.7},0).wait(1).to({rotation:312.1},0).wait(1).to({rotation:313.5},0).wait(1).to({rotation:314.8},0).wait(1).to({rotation:316.2},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:318.9},0).wait(1).to({rotation:320.3},0).wait(1).to({rotation:321.7},0).wait(1).to({rotation:323},0).wait(1).to({rotation:324.4},0).wait(1).to({rotation:325.8},0).wait(1).to({rotation:327.1},0).wait(1).to({rotation:328.5},0).wait(1).to({rotation:329.9},0).wait(1).to({rotation:331.3},0).wait(1).to({rotation:332.6},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.4},0).wait(1).to({rotation:336.7},0).wait(1).to({rotation:338.1},0).wait(1).to({rotation:339.5},0).wait(1).to({rotation:340.8},0).wait(1).to({rotation:342.2},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:344.9},0).wait(1).to({rotation:346.3},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:349},0).wait(1).to({rotation:350.4},0).wait(1).to({rotation:351.8},0).wait(1).to({rotation:353.2},0).wait(1).to({rotation:354.5},0).wait(1).to({rotation:355.9},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-28,67,56);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:5.6},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:8.3},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:13.9},0).wait(1).to({rotation:15.3},0).wait(1).to({rotation:16.7},0).wait(1).to({rotation:18.1},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:20.8},0).wait(1).to({rotation:22.2},0).wait(1).to({rotation:23.6},0).wait(1).to({rotation:25},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:27.8},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:32},0).wait(1).to({rotation:33.4},0).wait(1).to({rotation:34.7},0).wait(1).to({rotation:36.1},0).wait(1).to({rotation:37.5},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41.7},0).wait(1).to({rotation:43.1},0).wait(1).to({rotation:44.5},0).wait(1).to({rotation:45.9},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:50},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:52.8},0).wait(1).to({rotation:54.2},0).wait(1).to({rotation:55.6},0).wait(1).to({rotation:57},0).wait(1).to({rotation:58.4},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:61.2},0).wait(1).to({rotation:62.5},0).wait(1).to({rotation:63.9},0).wait(1).to({rotation:65.3},0).wait(1).to({rotation:66.7},0).wait(1).to({rotation:68.1},0).wait(1).to({rotation:69.5},0).wait(1).to({rotation:70.9},0).wait(1).to({rotation:72.3},0).wait(1).to({rotation:73.7},0).wait(1).to({rotation:75.1},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:77.8},0).wait(1).to({rotation:79.2},0).wait(1).to({rotation:80.6},0).wait(1).to({rotation:82},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:84.8},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.3},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:95.9},0).wait(1).to({rotation:97.3},0).wait(1).to({rotation:98.7},0).wait(1).to({rotation:100.1},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:104.2},0).wait(1).to({rotation:105.6},0).wait(1).to({rotation:107},0).wait(1).to({rotation:108.4},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:111.2},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:114},0).wait(1).to({rotation:115.4},0).wait(1).to({rotation:116.8},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:119.5},0).wait(1).to({rotation:120.9},0).wait(1).to({rotation:122.3},0).wait(1).to({rotation:123.7},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.5},0).wait(1).to({rotation:127.9},0).wait(1).to({rotation:129.3},0).wait(1).to({rotation:130.7},0).wait(1).to({rotation:132},0).wait(1).to({rotation:133.4},0).wait(1).to({rotation:134.8},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:137.6},0).wait(1).to({rotation:139},0).wait(1).to({rotation:140.4},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:144.6},0).wait(1).to({rotation:145.9},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:148.7},0).wait(1).to({rotation:150.1},0).wait(1).to({rotation:151.5},0).wait(1).to({rotation:152.9},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:157.1},0).wait(1).to({rotation:158.5},0).wait(1).to({rotation:159.8},0).wait(1).to({rotation:161.2},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:164},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168.2},0).wait(1).to({rotation:169.6},0).wait(1).to({rotation:171},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:173.7},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:176.5},0).wait(1).to({rotation:177.9},0).wait(1).to({rotation:179.3},0).wait(1).to({rotation:180.7},0).wait(1).to({rotation:182.1},0).wait(1).to({rotation:183.5},0).wait(1).to({rotation:184.9},0).wait(1).to({rotation:186.3},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:189},0).wait(1).to({rotation:190.4},0).wait(1).to({rotation:191.8},0).wait(1).to({rotation:193.2},0).wait(1).to({rotation:194.6},0).wait(1).to({rotation:196},0).wait(1).to({rotation:197.4},0).wait(1).to({rotation:198.8},0).wait(1).to({rotation:200.2},0).wait(1).to({rotation:201.5},0).wait(1).to({rotation:202.9},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:207.1},0).wait(1).to({rotation:208.5},0).wait(1).to({rotation:209.9},0).wait(1).to({rotation:211.3},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:214.1},0).wait(1).to({rotation:215.4},0).wait(1).to({rotation:216.8},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:219.6},0).wait(1).to({rotation:221},0).wait(1).to({rotation:222.4},0).wait(1).to({rotation:223.8},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:226.6},0).wait(1).to({rotation:228},0).wait(1).to({rotation:229.3},0).wait(1).to({rotation:230.7},0).wait(1).to({rotation:232.1},0).wait(1).to({rotation:233.5},0).wait(1).to({rotation:234.9},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:239.1},0).wait(1).to({rotation:240.5},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:243.2},0).wait(1).to({rotation:244.6},0).wait(1).to({rotation:246},0).wait(1).to({rotation:247.4},0).wait(1).to({rotation:248.8},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:251.6},0).wait(1).to({rotation:253},0).wait(1).to({rotation:254.4},0).wait(1).to({rotation:255.8},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:259.9},0).wait(1).to({rotation:261.3},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:264.1},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:268.3},0).wait(1).to({rotation:269.7},0).wait(1).to({rotation:271},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:273.8},0).wait(1).to({rotation:275.2},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:278},0).wait(1).to({rotation:279.4},0).wait(1).to({rotation:280.8},0).wait(1).to({rotation:282.2},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:284.9},0).wait(1).to({rotation:286.3},0).wait(1).to({rotation:287.7},0).wait(1).to({rotation:289.1},0).wait(1).to({rotation:290.5},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:293.3},0).wait(1).to({rotation:294.7},0).wait(1).to({rotation:296.1},0).wait(1).to({rotation:297.5},0).wait(1).to({rotation:298.8},0).wait(1).to({rotation:300.2},0).wait(1).to({rotation:301.6},0).wait(1).to({rotation:303},0).wait(1).to({rotation:304.4},0).wait(1).to({rotation:305.8},0).wait(1).to({rotation:307.2},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:310},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:314.1},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:316.9},0).wait(1).to({rotation:318.3},0).wait(1).to({rotation:319.7},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:322.5},0).wait(1).to({rotation:323.9},0).wait(1).to({rotation:325.3},0).wait(1).to({rotation:326.6},0).wait(1).to({rotation:328},0).wait(1).to({rotation:329.4},0).wait(1).to({rotation:330.8},0).wait(1).to({rotation:332.2},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335},0).wait(1).to({rotation:336.4},0).wait(1).to({rotation:337.8},0).wait(1).to({rotation:339.2},0).wait(1).to({rotation:340.5},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:343.3},0).wait(1).to({rotation:344.7},0).wait(1).to({rotation:346.1},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.9},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:351.7},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:355.8},0).wait(1).to({rotation:357.2},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-35.5,48,71);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:14.2},0).wait(1).to({rotation:16.3},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:20.3},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:28.5},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:32.5},0).wait(1).to({rotation:34.6},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:40.7},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:44.7},0).wait(1).to({rotation:46.8},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:50.8},0).wait(1).to({rotation:52.9},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:56.9},0).wait(1).to({rotation:59},0).wait(1).to({rotation:61},0).wait(1).to({rotation:63.1},0).wait(1).to({rotation:65.1},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:69.2},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:77.3},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:81.4},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:87.5},0).wait(1).to({rotation:89.5},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:93.6},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:99.7},0).wait(1).to({rotation:101.7},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:105.8},0).wait(1).to({rotation:107.8},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:118},0).wait(1).to({rotation:120},0).wait(1).to({rotation:122},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:126.1},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:144.4},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:150.5},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:154.6},0).wait(1).to({rotation:156.6},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:160.7},0).wait(1).to({rotation:162.7},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:172.9},0).wait(1).to({rotation:174.9},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:179},0).wait(1).to({rotation:181},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:187.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:191.2},0).wait(1).to({rotation:193.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:197.3},0).wait(1).to({rotation:199.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:203.4},0).wait(1).to({rotation:205.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:209.5},0).wait(1).to({rotation:211.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:215.6},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:227.8},0).wait(1).to({rotation:229.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:240},0).wait(1).to({rotation:242},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:246.1},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:252.2},0).wait(1).to({rotation:254.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:260.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:270.5},0).wait(1).to({rotation:272.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:278.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:288.8},0).wait(1).to({rotation:290.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:294.9},0).wait(1).to({rotation:296.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:301},0).wait(1).to({rotation:303.1},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:307.1},0).wait(1).to({rotation:309.2},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:313.2},0).wait(1).to({rotation:315.3},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:319.3},0).wait(1).to({rotation:321.4},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:325.4},0).wait(1).to({rotation:327.5},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:331.5},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:337.6},0).wait(1).to({rotation:339.7},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:343.7},0).wait(1).to({rotation:345.8},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:349.8},0).wait(1).to({rotation:351.9},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:355.9},0).wait(1).to({rotation:358},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.5,33,45);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:170.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:280},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,58,42);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(0,-206.5);

	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,206.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-400,-410.5,800,821), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(0,-206.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:205.5},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-616.9,800,821);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9.2},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:27.7},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:64.6},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:147.7},0).wait(1).to({rotation:156.9},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:175.4},0).wait(1).to({rotation:184.6},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:203.1},0).wait(1).to({rotation:212.3},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:230.8},0).wait(1).to({rotation:240},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:267.7},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:286.2},0).wait(1).to({rotation:295.4},0).wait(1).to({rotation:304.6},0).wait(1).to({rotation:313.8},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:350.8},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,96,96);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizGrQg+gUgvgrQgsgogXg7QgQgmgIhgIAAkHQAAhKAYg6QAXg7AsgoQAvgpA+gWQArgOBpgIQAzAABdAWQA/AWAvApQAqAoAYA7QAXA6AABKIAAEHQgGBggRAmQgYA7gqAoQgvArg/AUQhdAWgzAAQhpgIgrgOgAhujTQgcAYAAAtIAAEbQAAAtAcAaQAcAYAzABQAvgBAdgYQAcgaAAgtIAAkbQAAgtgcgYQgdgZgvAAQgzAAgcAZgAvIGrQg/gUgvgrQgsgogWg7QgRgmgIhgIAAkHQAAhKAZg6QAWg7AsgoQAvgpA/gWQAqgOBpgIQA1AABdAWQA+AWAvApQAqAoAZA7QAWA6AABKIAAEHQgGBggQAmQgZA7gqAoQgvArg+AUQhdAWg1AAQhpgIgqgOgAuEjTQgcAYAAAtIAAEbQAAAtAcAaQAdAYAyABQAxgBAcgYQAcgaAAgtIAAkbQAAgtgcgYQgcgZgxAAQgyAAgdAZgA6hG0Qg4gLgrgZQgsgYgfgmQgeglgUg1QgIgcAGgOQAIgMAagKICCgwQAagLAMAGQAOAHAKAaQAPAiAeATQAeAPAtAAQAsAAAWgWQAXgWAAgtQAAgqgZgUQgYgVgwAAIj9AAQghABgKgOQgMgPACgeIAnlpQAEgpAQgQQASgQArAAIG7AAQAeAAAMAMQAKAMAAAcIAABuQAAAcgKANQgMAKgegBIksAAIgKBYIBTAAQBNgBA9AVQA6AUArAmQAmAnAUA0QAVA0AABBQAACBhXBRQgtArg9AVQg8AVhNAAQhJAAg5gNgAV1GuQgeAAgKgMQgMgKAAgcIAAr4QAAgcAMgKQAKgMAeAAICKAAQAcAAAKAMQANAKAAAcIAAJXIEjAAQAcgBAMALQAKAMAAAcIAABvQAAAcgKAKQgMAMgcAAgANTGuQgcAAgMgMQgKgKAAgcIAApWIi0AAQgeABgLgMQgMgLAAgeIAAhuQAAgcAMgKQALgMAeAAIJXAAQAeAAAMAMQAKAKAAAcIAABuQAAAcgKANQgMAMgegBIiyAAIAAJWQAAAcgNAKQgMAMgcAAg");

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-270.5,-8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:277.5,y:-1},29).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-307.9,-83.5,616,167), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-38,305,76);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(1.4,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.txt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-201.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-341.8,-127.6,543.4,205.1), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.121},9,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-200,600,400);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.1,y:181.9},29).to({x:130,y:370},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.5,47,37);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.5,y:188.5},41).to({x:-51,y:370},48).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-28,67,56);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-203.7,y:183.6},74).to({x:-120.4,y:277.5},53).to({x:-238.9,y:437},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-35.5,48,71);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154,y:221.3},59).to({x:0,y:404},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.5,33,45);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59.6,y:201.9},49).to({x:21,y:408},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,58,42);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bablo_16.png
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(-357,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bablo_13.png
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bablo_08.png
	this.instance_2 = new lib.Символ79();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bablo_05.png
	this.instance_3 = new lib.Символ82();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bablo_03.png
	this.instance_4 = new lib.Символ85();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-272.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-386,-37,574,82), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.1,31,120.3,-145.5,257.6,48.4]}},14).to({guide:{path:[257.6,48.4,257.9,48.7,258.1,49.1,415.1,-144,598.7,45.4,598.7,45.4,598.7,45.4]}},16).to({guide:{path:[598.7,45.4,741.1,-151.1,839,31]}},14).wait(22).to({guide:{path:[839,31,741.1,-151.1,598.7,45.4]}},10).to({guide:{path:[598.7,45.4,598.7,45.4,598.7,45.4,415.1,-144,258.1,49.1,257.9,48.7,257.6,48.4]}},12).to({guide:{path:[257.6,48.4,120.3,-145.5,0.1,31]}},10).wait(37));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:1.71,scaleY:1.71,x:128.2,y:83.9,alpha:0.461},7).to({regX:0,regY:0,scaleX:1,scaleY:1,x:256,y:92.5,alpha:1},7).to({regX:0.1,regY:0.1,scaleX:1.78,scaleY:1.78,x:406.2,y:92.7,alpha:0.461},7).to({regX:0,regY:0,scaleX:1,scaleY:1,x:598.7,y:92.5,alpha:1},9).to({regX:0.1,scaleX:1.74,scaleY:1.74,x:702.2,y:84.6,alpha:0.461},6).to({regX:0,scaleX:1,scaleY:1,x:839.7,y:74,alpha:1},8).wait(22).to({regX:0.1,scaleX:1.74,scaleY:1.74,x:702.2,y:84.6,alpha:0.461},5).to({regX:0,scaleX:1,scaleY:1,x:598.7,y:92.5,alpha:1},5).to({regX:0.1,regY:0.1,scaleX:1.78,scaleY:1.78,x:406.2,y:92.7,alpha:0.461},5).to({regX:0,regY:0,scaleX:1,scaleY:1,x:256,y:92.5,alpha:1},7).to({regX:0.1,regY:0.1,scaleX:1.71,scaleY:1.71,x:128.2,y:83.9,alpha:0.461},4).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:75,alpha:1},6).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-17,96,105.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:1.6},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:1.5},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.03,scaleY:1.03},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:1.6},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:1.5},5,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.8,-126.1,543.4,205.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-152.5,-38,305,76), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08},24,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},25,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08},25,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-207.3,622,414.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-38,305,76);


// stage content:
(lib.bahsegel600400_2 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(300,51.2,1.405,1.405);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.5,326);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(230.3,160.4,1,1,0,0,0,-70.2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(301,178.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ70();
	this.instance_4.parent = this;
	this.instance_4.setTransform(584.4,-44.3,1.251,1.251,0,0,0,0.1,-0.1);

	this.instance_5 = new lib.Символ70();
	this.instance_5.parent = this;
	this.instance_5.setTransform(257.9,-56.9,1.251,1.251,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ55();
	this.instance_6.parent = this;
	this.instance_6.setTransform(317,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 8
	this.instance_7 = new lib.Символ17();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-108,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 1
	this.instance_8 = new lib.Символ4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(301,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.1,-200,1044.3,821);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bablo_03.png?1504712574489", id:"bablo_03"},
		{src:"images/bablo_05.png?1504712574489", id:"bablo_05"},
		{src:"images/bablo_08.png?1504712574489", id:"bablo_08"},
		{src:"images/bablo_13.png?1504712574489", id:"bablo_13"},
		{src:"images/bablo_16.png?1504712574489", id:"bablo_16"},
		{src:"images/ball.png?1504712574489", id:"ball"},
		{src:"images/bg.jpg?1504712574489", id:"bg"},
		{src:"images/blik.png?1504712574489", id:"blik"},
		{src:"images/btn.png?1504712574489", id:"btn"},
		{src:"images/konf.png?1504712574489", id:"konf"},
		{src:"images/logo.png?1504712574489", id:"logo"},
		{src:"images/ten.png?1504712574489", id:"ten"},
		{src:"images/txt.png?1504712574489", id:"txt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;