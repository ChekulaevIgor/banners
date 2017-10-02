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
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,109);


(lib.cor = function() {
	this.initialize(img.cor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,202);


(lib.cro = function() {
	this.initialize(img.cro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,195);


(lib.engl = function() {
	this.initialize(img.engl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,203);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,44);


(lib.play1 = function() {
	this.initialize(img.play1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,229);


(lib.play2 = function() {
	this.initialize(img.play2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,228);


(lib.play3 = function() {
	this.initialize(img.play3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,229);


(lib.play4 = function() {
	this.initialize(img.play4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,229);


(lib.play5 = function() {
	this.initialize(img.play5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,237);


(lib.play6 = function() {
	this.initialize(img.play6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,229);


(lib.rus = function() {
	this.initialize(img.rus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,199);


(lib.slov = function() {
	this.initialize(img.slov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,202);


(lib.ukr = function() {
	this.initialize(img.ukr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,198);// helper functions:

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


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.play5();
	this.instance.parent = this;
	this.instance.setTransform(-137,-102,1.122,1.122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-137,-102,269.4,266), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.play6();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-160.4,1.28,1.28,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-151.3,-160.4,278.5,326.4), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.play4();
	this.instance.parent = this;
	this.instance.setTransform(-107,-117,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-107,-117,219.6,263.3), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.play3();
	this.instance.parent = this;
	this.instance.setTransform(-83,-111,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-83,-111,163.5,256.5), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("AApBVIAJgkIgWAVIgCAAIgMgVIgIAkIgOAAIAOhDIAFAAIAUAgIAiggIAFAAIgOBDgAgmBVIAGgYIgJABIgIgBQgDAAgDgBIgEgEIgEgEIgBgHIAAgIIABgJIADgKIAOAAIgCAKIgBALQAAAEABADQACACAFAAIALAAIAHgeIAOAAIgOBDgAEDgIIACgJIgwAAIAPhDIANAAIgLA3IAZAAIALg3IAPAAIgMA4IAIAAIgEAUgAjlgRIACgKQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIADgBIAEgIIAQgwIAtAAIgOBDIgPAAIAMg2IgTAAIgLAjQgBAHgCAEQgDAFgDACQgEABgFAAIgEABIgGgBgAGKgRIAFgVIgNAAIgSAVIgPAAIAAgBIAVgYIgFgCIgCgEIgCgEIAAgEQAAgGABgFQACgFAEgDIAEgEIAFgCIAGgCIAHgBIAcAAIgNBDgAGChGIgDACIgDAFIgBAEQAAAEACACQACADAEgBIAOAAIAFgUIgPAAIgFABgAFIgRIAIgmIguAmIgFAAIAPhDIAOAAIgIAnIAugnIAEAAIgOBDgADAgRIgDgKIgcAAIgIAKIgPAAIAAgBIAthDIAGAAIARBDIAAABgAC6goIgEgWIgOAWIASAAgAB6gRIgLgbQgEABgIAAIgGAaIgOAAIAOhDIAOAAIgFAcIAFAAIAGgBQACgCACgDIAFgKIAEgGQADgDADgBQADgCAFgBIAJABIgCAKIgHABQgDABgBAEIgGAKQgDAGgEACIAPAgIgBABgAAxgRIAIgmIguAmIgFAAIAPhDIAOAAIgIAnIAvgnIAEAAIgPBDgAgzgRIACgHIgLgBQgGgBgDgCQgEgEgCgDIgBgFIgBgFIABgIQAAgDACgDIAEgFIAFgFIAGgDIAGgDQAFgBAJgBIACgHIAOAAIgCAHQAGAAAFABQAFACAEADQADACACAEQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIACAGIgCAIIgBAGIgDAGIgGAEIgFAEIgHACIgPABIgBAHgAgjgjIAIgBIAHgDIAGgFQACgEAAgFIgBgGQgBgDgDgBIgEgBIgHgBgAgxhAIgHADQgDACgCAEQgCADAAAFQAAADABACQABABAAABQAAAAABABQAAAAABAAQAAABABAAQADACAIABIAGgeIgIABgAhugRIAIgmIguAmIgFAAIAPhDIAOAAIgIAnIAugnIAEAAIgOBDgAj1gRIgCgKIgcAAIgIAKIgQAAIABgBIAthDIAHAAIARBDIgBABgAj5goIgFgWIgOAWIATAAgAligRIAOhDIAdAAQAEAAADACIAFACIAEAGIABAGIgBAGIgCAEIgDAEIgFADQAFABABAEQACACAAAEQAAAFgCAEQgCAFgDACQgDAEgFACQgGABgFAAgAlRgdIAQAAQAEAAACgCQACgCABgDIABgFIgDgDQgBgBgDAAIgQAAgAlMg3IAOAAQADAAADgDQACgCABgDQABgEgBgDQgCgBgFAAIgMAAgAl7gRIgLgbQgDABgIAAIgHAaIgOAAIAOhDIAPAAIgGAcIAGAAIAFgBQADgCADgDIAEgKIAEgGIAFgEIAIgDIAJABIgCAKIgGABQgDABgCAEIgGAKQgDAGgDACIAOAgIgBABg");
	this.shape.setTransform(-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-42.3,-9,84.5,17.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-82.6,-63.3,165.3,122.1), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.play2();
	this.instance.parent = this;
	this.instance.setTransform(-76,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-76,-126,133,228), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.play1();
	this.instance.parent = this;
	this.instance.setTransform(-90,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-90,-113,166,229), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ukr();
	this.instance.parent = this;
	this.instance.setTransform(-55,-90,0.809,0.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-55,-90,110,160.2), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cro();
	this.instance.parent = this;
	this.instance.setTransform(-67,-87,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-67,-87,134,167.5), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-117,-61.3,234.1,120.3), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-75,-81,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-75,-81,149,160.3), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cor();
	this.instance.parent = this;
	this.instance.setTransform(-59,-78,0.776,0.776);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-59,-78,118,156.8), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slov();
	this.instance.parent = this;
	this.instance.setTransform(-64,-62,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-64,-62,128.3,164), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.engl();
	this.instance.parent = this;
	this.instance.setTransform(-57,-73,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-57,-73,114.6,165), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC6BpQgOgFgIgKQgJgJgDgNQgEgOAEgRIAQhIQACgNALgUQAIgNANgJQAMgJAQgEQAOgEARAAQARAAANAFQANAEAJAKQAIAJADAOQAEANgEARIgPBIIgGASIgIAQQgIANgNAJQgMAJgQAEQgOAEgRgBQgQABgNgFgADkg9QgGAEgEAFQgEAFgCAIIgTBUQAAAHADAEQACAGAEACQAIAHAOAAQAKAAAIgFQAIgDAFgGQAGgGADgIQADgIACgJIAPhGQAAgGgDgFQgCgEgEgDQgIgGgOAAQgPAAgKAHgAgCBqIAGgjIAjAAIAeiMIgfAAIAHgjIBLAAIgmCvIAkAAIgHAjgAk/BqIBDhPQgIACgEAAQgOABgLgEQgLgEgIgGQgIgHgEgJQgFgKAAgOQAAgKACgJQACgJAEgJQAEgHAFgHIAMgMQAJgIAWgJQAMgDAZgBQAPAAAMADQAMAEAIAGQAJAIAFAKQAFALAAANQAAAQgGAOQgGAOgOARIhSBigAj+hEQgHADgGAFQgGAGgDAHQgDAIAAAJQAAANAHAGQAIAHAOAAQAKAAAIgDQAHgDAGgFQAGgGADgHQADgHAAgKQAAgMgIgHQgHgGgOgBQgKABgIACgAirBpICSjRIAqAAIiRDRg");
	this.shape.setTransform(9.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-23.4,-10.9,65.2,21.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuBoQgNgFgJgJQgJgKgDgNQgDgOAEgRIAPhHQAEgRAJgNQAJgOANgJQAMgKAPgFQAQgFAQAAQAQAAANAFQANAFAJAKQAJAJADAOQADANgEARIgPBHQgEARgJAOQgIANgNAKQgNAJgPAFQgPAFgQAAQgRAAgNgFgADmhLIgOAGQgHAEgGAGQgFAGgDAHIgHAUIgNA1QgDAJAAALQAAAIADAFQACAGAFAEQAFAEAGACQAHACAIAAQAIAAAIgCQAHgCAHgEQAGgEAFgGQAGgFADgIQAFgKACgKIANg1QADgLAAgJQAAgHgDgGQgCgGgFgEQgEgEgHgCQgHgCgIAAQgIAAgHACgAgLBpIAGgbIAlAAIAhibIghAAIAGgbIBDAAIgnC2IAnAAIgGAbgAk5BpIB4i0IhiAAIAGgdICRAAIgBAFIiJDMgAipBoICSjQIAgAAIiRDQg");
	this.shape.setTransform(12.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-19.3,-10.5,62.9,21.8), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("AA6B2IAKgzIgdAdIgDAAIgRgdIgLAzIgTAAIAThdIAHAAIAcAsIAugsIAIAAIgUBdgAg0B2IAHgiIgMABIgKgBQgFAAgDgCQgEgCgDgDQgDgCgBgEIgCgIIAAgLIACgNIADgOIAUAAIgDAOIgCAPQAAAGACADQADADAGABIAQgBIAJgpIAUAAIgUBdgAFlgLIADgMIhDAAIAUhdIATAAIgPBLIAhAAIAQhLIAUAAIgQBMIALAAIgGAdgAk8gXIAEgPQAEABACgBIAFgCQACgCADgIIAWhCIA+AAIgUBdIgUAAIAQhLIgZAAIgPAwQgCAKgEAFQgEAGgEADQgFADgGAAIgFAAIgKAAgAIegXIAGgeIgQAAIgZAeIgWAAIABgDIAdggIgGgDIgEgFIgDgGIAAgGQAAgIACgGQADgHAFgFIAGgEIAHgEIAIgDIAKgBIAnAAIgUBdgAIUhhQgDABgCADIgEAFQgCADAAAEQAAAFAEADQACADAGAAIAUAAIAGgcIgVAAQgDAAgDABgAHDgXIAMg1IhAA1IgGAAIAThdIAUAAIgLA1IA/g1IAHAAIgUBdgAEIgXIgEgPIgmAAIgLAPIgWAAIABgCIA+hbIAJAAIAXBbIAAACgAEBg3IgHgfIgTAfIAaAAgACngXIgPgmQgEABgMAAIgIAlIgUAAIAUhdIAUAAIgIAnIAIAAIAHgCQADgCAEgFIAGgNIAGgIQADgEAFgCQAEgDAGAAIANAAIgDAOQgFAAgEABQgDACgDAGIgIAOQgEAGgFAEIATArIgBADgABEgXIAKg1Ig/A1IgGAAIAUhdIAUAAIgLA1IA/g1IAGAAIgUBdgAhHgXIADgJIgQgCQgGgCgFgEQgFgEgDgFIgCgGIgBgHIABgLIADgJIAGgHIAGgGIAIgFIAJgDQAGgCAOgBIACgKIATAAIgDAKQAJAAAGACQAIABAEAEQAGAEACAFIABAGIABAIIgBALIgDAJQgBAEgDADIgHAGIgIAFIgJADQgOADgGAAIgDAJgAgwgwIALgCQAGgBAEgDQAEgDADgFQADgFAAgHQAAgEgBgEQgCgDgDgCIgHgCIgIgBgAhDhZQgGACgEADQgEADgDAFQgDAFAAAGQAAAFACADQABADAEACQAEACALACIAIgqIgKABgAiYgXIALg1Ig/A1IgGAAIAThdIAUAAIgLA1IA/g1IAHAAIgUBdgAlRgXIgEgPIgmAAIgLAPIgVAAIABgCIA+hbIAJAAIAWBbIAAACgAlYg3IgGgfIgTAfIAZAAgAnogXIAThdIAoAAQAGAAAEACQAFACADACIAEAHQACAEAAAFQAAAEgCAEQAAADgCADIgFAFIgFAEQAFACADAFQACAEAAAFQAAAHgDAGQgCAGgFAEQgEAEgIADQgGACgIAAgAnRgoIAWAAQAFAAAEgDQADgDACgEIAAgGIgDgEQgCgCgFAAIgVAAgAnJhNIATAAQAEAAAEgDQAEgDABgFQABgFgCgDQgDgDgGAAIgSAAgAoKgXIgPgmQgFABgLAAIgIAlIgTAAIAThdIAUAAIgJAnIAJAAIAHgCQAEgCADgFIAGgNIAFgIIAIgGQAFgDAFAAIAOAAIgDAOQgGAAgDABQgEACgDAGQgEAJgDAFQgFAGgEAEIATArIgBADg");
	this.shape.setTransform(-13.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-71.3,-10.5,116.3,23.5), null);


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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-84.7,-60.2,169.4,119), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C70B").s().p("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");
	this.shape.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-81.4,-20.1,162.8,37.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC1BoQgNgFgJgJQgJgKgDgNQgDgOAEgRIAPhHQAEgRAJgNQAJgOANgJQAMgKAPgFQAQgFAQAAQAQAAANAFQANAFAJAKQAJAJADAOQADANgEARIgPBHQgEARgJAOQgIANgNAKQgNAJgPAFQgPAFgQAAQgRAAgNgFgADthLIgOAGQgHAEgGAGQgFAGgDAHIgHAUIgNA1QgDAJAAALQAAAIADAFQACAGAFAEQAFAEAGACQAHACAIAAQAIAAAIgCQAHgCAHgEQAGgEAFgGQAGgFADgIQAFgKACgKIANg1QADgLAAgJQAAgHgDgGQgCgGgFgEQgEgEgHgCQgHgCgIAAQgIAAgHACgAkhBoQgLgEgIgIQgIgIgDgLQgDgMACgOIAgAAQgBAIABAGQACAGAEAEQAEAEAGACQAHACAJAAQAIAAAIgCQAIgDAGgFQAIgFAFgIQAFgIACgLQACgKgBgIQgCgHgEgGQgEgFgGgCQgGgDgIgBQgOgCgUACQgOACgTADIAWhoIB8AAIgGAdIhgAAIgJAvQANgDAPAAQAPAAAMADQAMADAJAGQAJAHAFAKQAFAKAAAOQAAAKgCAIQgBAJgEAIQgDAIgFAHIgKAMIgOAKIgPAIQgYAGgNAAQgPAAgLgEgAgEBpIAFgbIAmAAIAhibIghAAIAGgbIBDAAIgnC2IAnAAIgGAbgAiiBoICSjQIAgAAIiRDQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-32.1,-10.9,64.3,21.8), null);


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
p.nominalBounds = new cjs.Rectangle(-137,-102,269.4,266);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.7,y:-10.9},24,cjs.Ease.get(-1)).to({x:3.5,y:-22.3},25,cjs.Ease.get(1)).to({x:1.7,y:-10.7},26,cjs.Ease.get(-1)).to({x:0,y:0},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.3,-160.4,278.5,326.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.7},24,cjs.Ease.get(-1)).to({y:11.7},25,cjs.Ease.get(0.94)).to({y:5.9},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(0.94)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-111,163.5,256.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15.4},24,cjs.Ease.get(-1)).to({y:-23},25,cjs.Ease.get(1)).to({y:-15.6},25,cjs.Ease.get(-1)).to({y:-8.1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-125.1,219.6,263.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.2},20,cjs.Ease.get(-1)).to({y:-3.2},24,cjs.Ease.get(1)).to({y:3.5},22,cjs.Ease.get(-1)).to({y:10.4},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-115.6,133,228);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.9},24,cjs.Ease.get(-1)).to({y:16},25,cjs.Ease.get(1)).to({y:8},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-113,166,229);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(9.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-23,-10.8,64.3,21.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-0.7,0.733,0.733,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-72.9,-15.4,119.3,27.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-71.3,-11.3,116.3,23.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.5,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-59.7,-43.9,119.4,83.9), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.5,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-81.5,-44.2,163.1,83.8), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-56.6,-44.1,113.3,83.7), null);


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
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/cor.png", id:"cor"},
		{src:"images/cro.png", id:"cro"},
		{src:"images/engl.png", id:"engl"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/play1.png", id:"play1"},
		{src:"images/play2.png", id:"play2"},
		{src:"images/play3.png", id:"play3"},
		{src:"images/play4.png", id:"play4"},
		{src:"images/play5.png", id:"play5"},
		{src:"images/play6.png", id:"play6"},
		{src:"images/rus.png", id:"rus"},
		{src:"images/slov.png", id:"slov"},
		{src:"images/ukr.png", id:"ukr"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;