(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);// helper functions:

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


(lib.inky_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoPGlIAAtJIQfAAIAANJg");
	mask.setTransform(52.8,42.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE8423").s().p("AGTE6QgDhJAQhRQAHghgRgQQgNgNgugOQilgyhog4Qg2gehUhDQg0gqADAUQAJAtgBANQAAAWgUgzQgchEglgzQgtg/gtgQQgngNg8AdIgjASQgMAGABgGQAKgfAegbQAYgUgEgHQgIgMgegMQgegMgigEQgagDgTANQgLAHgHAKQAYgpAGgFQAiAAA9AaQB7AzCMCEQCtCiCHA1QCSA5DTgWIgDAWQgLAkgrBJQgoBFAABXQAABJAUAWQgsgIgDhjg");
	this.shape.setTransform(52.8,42.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_97, new cjs.Rectangle(0.2,0,105.4,84.2), null);


(lib.inky_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao2JoIAAzQIRtAAIAATQg");
	mask.setTransform(56.7,61.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE8423").s().p("AHqIoQghgtgpjTQgpjpgNg9QgQhLhjgyQh3gvgwgZQg1gbgzgyIgYgXQgHgFABAKQADAcgGAGQgIAIgRgsQgRgugSgGQgTgIAPAgQAOAeAIAqQAKAxgCAyQgEBVgmAmQgJAJgMAIQgGAGAHAEQAQAMAQAWQAQAXgUgVQgTgVgbgNQgegOgaABQgwABgjAcQgSAOgJAOQgbgagpgQIgjgJQgVgrgkgUQgfgRglABQgChrAKhuQASjBAyhGIANgXQAOgZAGgEQAigBA9AaQB7A0CMCDQCtCjCHA1QCSA6DTgWIgDAVQgLAkgrBJQgsBLgGA8QgCAcAJAqIAKAQQANAWAKAfQAjBkAECcIgNAqQgLAvAJAXgAnMmxQAXALAHAVQADAKAHgFIATgTQAkgnAqgHQA0gIAlARQAaAMAdAfQALANgBgNQgCgMgMgUQgjg6gwgDQgjgCgdAPQgPAHgRAQQgKAIgJABQgLACADgMQAOguAdgYQALgJABgCQACgEgJgHQgYgUgpgGQgxgHgUAbQgHAJADAFQADAEAPAHQAZAKALAYQAJAXgGAYQgEARgMgNQgXgZgRgIQgbgNgIAfQgDALADAKQAEAJAJAAIAGgBQARAAARAIg");
	this.shape.setTransform(56.6,61.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_78, new cjs.Rectangle(0,0,113.3,123.3), null);


(lib.inky_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSArQgEgBgBgCQgJgEgDgMQgGgVAKgTQAKgVAVgFQAFgBAEAAIALABQAOACADAMQAEAKgFANQgFAOgQAPQgIAMgKAEIgFABIgEACIgDABIgDgBg");
	this.shape.setTransform(3.9,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_38, new cjs.Rectangle(0,0.1,7.8,8.8), null);


(lib.inky_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAfIgEgDQgGgFAAgKQgCgQALgOQALgOAPAAIAIAAIAIADQAKAEABAKQAAAIgFAIQgHAMgNAIQgIAIgIABIgEAAIgDABIgBAAIgDgBg");
	this.shape.setTransform(3.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_37, new cjs.Rectangle(0.1,0,6.3,6.5), null);


(lib.inky_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6A72F").s().p("AhhBaQgIgEABgGQADgSATgNQAbgQARgMQBghDAlgnQAYgZgfAuQggAvgsAyQgvA5gnAEIgGABQgKAAgHgFg");
	this.shape.setTransform(10.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_36, new cjs.Rectangle(0,-0.2,21.1,19), null);


(lib.inky_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AhxDTQgOgIAxgwQBihhANhPQALhGg1g/QgngvASgIQARgIAoAcQAuAfAZAuQAeA5gRA6QgQA2g0A3QgrAug0AfQgnAXgQAAQgEAAgCgBg");
	this.shape.setTransform(11.7,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_35, new cjs.Rectangle(0,0,23.5,42.4), null);


(lib.inky_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("ABWC3Qg7gOg2geQhEgkgfgvQgigyALg/QAKgzAigsQAfgoATADQAUADgYA4QggBMAgA+QAlBJB6A+QA+AfgLALQgEAFgOAAQgRAAgegHg");
	this.shape.setTransform(15.3,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_34, new cjs.Rectangle(0,0,30.6,38.1), null);


(lib.inky_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE8F23").s().p("AmFMHQARitA+jZQBAjhBijYQDloAEkjiIATgOIgTAXQhBBMhBBdQkGF2jWIkQg/Cgg/DuIgbBjQgCAGgBAAQgDAAADgig");
	this.shape.setTransform(39.2,80.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_33, new cjs.Rectangle(0,0,78.4,161.8), null);


(lib.inky_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("ABhCxQg9gHg5gZQhHgdgkgrQgngvAGhAQAEg0AdgvQAbgqATAAQAUABgSA6QgYBQAmA6QAsBFCBAxQBAAYgJANQgGAHgXAAQgPAAgVgDg");
	this.shape.setTransform(16.3,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_32, new cjs.Rectangle(0.1,0,32.6,36), null);


(lib.inky_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AobMRQhcgpgIhzQgHhrBDiGQCmlMDpkLQEblGFhjEQCChIAoACQAsAChZBfQhOBLg4A4QhpBphSBsQj7FJh/HLQhCDwiFBbQhEAvhDAAQgsAAgrgTg");
	this.shape.setTransform(64,80.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_31, new cjs.Rectangle(0,0,128.1,160.9), null);


(lib.inky_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AihCtQgJgNBAgYQCAgxAshFQAng7gZhPQgSg6AUgBQATAAAbAqQAeAvAEA0QAFBAgnAuQgkArhGAeQg6AYg8AIQgVADgPAAQgXAAgGgHg");
	this.shape.setTransform(16.3,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_30, new cjs.Rectangle(0.1,0,32.6,36), null);


(lib.inky_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AjVHfQgBhXAniEQBMj/B1jzQBYi1BWh/QAdgqgKAkIgwCLQhpEtgcDYQghEBgUBEQghBuhOAaQgOAFgMAAQgzAAgChbg");
	this.shape.setTransform(21.4,57.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_29, new cjs.Rectangle(0,0.2,42.8,113.9), null);


(lib.inky_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AgPCsQhmgJhZgyQgLgGADgDQADgCARgCQA6gFAfgIQCagqAbioQAHgBAHAFQAMAKgEAWQgFAbADAIQAKAVAMgcQAOgkACgBQADgBAJAEQAIADADgEQAGgIACgSQACgVADgHQAFgLAJgHQAIgGAKAAQgHAfAEAlQACASADANQAJAXACAhQAEBBgkAxQg3BMhwAAIgfgBg");
	this.shape.setTransform(21.5,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_28, new cjs.Rectangle(0,0,43.2,34.7), null);


(lib.inky_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("Ai2BhQgkgyAEhAQACghAJgXQAEgNABgSQAEglgGgfQAJAAAJAGQAIAHAFALQAEAHACAVQACASAGAIQADAEAHgDQAJgDADAAQACABAPAkQALAcAKgVQADgIgEgbQgEgWAMgKQAGgFAHABQAbCoCaAqQAfAIA7AFQAQACADACQADADgLAGQhZAyhlAJIgfABQhxAAg3hMg");
	this.shape.setTransform(21.5,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_27, new cjs.Rectangle(0,0,43.1,34.7), null);


(lib.inky_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AhIB2QhegohFhLQgIgJAEgBQADgBAQAEQA5AMAhABQCfAJBOiXQAHABAEAHQAJANgLAUQgNAYABAJQACAXAUgXQAageACAAQADAAAHAGQAGAGAEgDQAIgGAIgRQAIgTAGgGQAIgJAKgDQALgEAIADQgQAcgHAkQgEASgBANQACAZgJAeQgRBAgxAkQgvAig6AAQgxAAg6gZg");
	this.shape.setTransform(24.2,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_26, new cjs.Rectangle(0,0,48.3,28.7), null);


(lib.inky_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8124").s().p("AhYAqIACgLIABAAIAAAAIAFgJIAPgWQAMgOAPgLQATgNARgDQAHgCAKACIARAFIAOAGIANAIIAUARIAHAHIADgBQABAIgBAEIgDABIgIgIIgTgQIgNgIIgPgGIgRgFQgJgCgIACQgQACgUAOQgNAJgNAPQgHAIgIAPIgFAJg");
	this.shape.setTransform(8.9,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_25, new cjs.Rectangle(0,0,17.9,8.6), null);


(lib.inky_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8124").s().p("ACOBdQgGgZgJgYQgMgkgSgcQgYgogcgTQgQgLgSgFIgRgCIgRgBQgPAAgSAFQgNADgRAIIgZAMIgjAXIgCgDIAGgLIAjgVQAIgGARgHQAMgGARgFQAUgFANAAIASABQAHAAAKADQASAEAQAMQAcATAYAnQARAdANAjIAPAxIADAfIgDABg");
	this.shape.setTransform(14.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_24, new cjs.Rectangle(0,0,29.9,22.4), null);


(lib.inky_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7733").s().p("AgKBCIgugGIgVgFIgVgHQgLgEgJgFQgGgDgLgIQgOgJgOgQIgLgMIgHgNQgGgOgDgJIgDgPIgBgFQACAHAGAMIAKAVIATAXQAQAMAMAIIARAJIATAHIATAGIAWAFIArAFQAcABAPgBQAYgCASgDQAVgFAQgGIARgHIAQgIQANgIAKgKIAJgIIAMgQIADgFIABgFIgCALIgEAIIgKAOIgEAFQgIAKgQAMIgOAKIgRAIQgUAJgUAFIgWAEIgWACIgYABIgVAAg");
	this.shape.setTransform(19.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_23, new cjs.Rectangle(0,0,38.9,13.3), null);


(lib.inky_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C29B49").s().p("AgvAgQgJgbAOgaQANgbAcgHQAIgDAEACQAHgBAJACQASADAFAPQAEAOgFAQQgMAggiAXQgOAKgLAAQgSAAgHgag");
	this.shape.setTransform(5.1,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_22, new cjs.Rectangle(0,0,10.4,11.6), null);


(lib.inky_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C29B49").s().p("AgpASQgBgWAOgSQAPgTAUgBQAGAAAEABIALAEQANAFABANQABAMgHAKQgNAXgcANQgKAEgHAAQgRAAgCgZg");
	this.shape.setTransform(4.2,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_21, new cjs.Rectangle(0,0,8.4,8.6), null);


(lib.inky_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("ABFDVQAIg5gOgxQgPg4glgUQhHgnhAg2QhMhCgqhEIAEAAQADgTADgKQAFgSASACQACABAVAjQARAdAOgTQAEgFgFgOQgEgNAGgGQAJgJAUAIQAMAEAQAJIAOAFQAiAgAxAaQAYANASAGIAYgEQAdgCAbAFQBWAQAaBVQATA6gYBCQgUA4gqAvQgnArgfAJQgHACgFAAQgTAAADgdg");
	this.shape.setTransform(24.3,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_20, new cjs.Rectangle(0,0.1,48.5,48.4), null);


(lib.inky_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AhDD6Qg3gggkgvQgrg4gBg+QgBhYBNgqQAmgUAngDQAPgMATgTQAngoAWgpIAMgJIAWgVQARgOAMAGQAHAEAAANQAAAPAFAEQATAOAHghQAJgoACgBQAQgIALAQQAGAJAIARIAEgBQgSBNg1BWQgsBHg5A8QgdAeADA6QACAzAYAzQAQAighABIgCAAQgfAAgwgcg");
	this.shape.setTransform(20.3,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_19, new cjs.Rectangle(0,0,40.6,55.6), null);


(lib.inky_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F39C2C").s().p("AiWRFQiHg1iuijQiMiDh7g0QgmgQgggGIgZgDQgGAFgOAYIgNAXQgSAGgWACQgtACgXgZQgbgeAdgvQAcgvAwgGQAVhQAqhsQBUjYBpiNQA2hTBOhuQCbjbB4h/IAwgrIAigkQAtguBnhMQB5hYCJhQQF0jXElgoQAkgFAEAMQAEALgTAcIgsA+QggAtgQAiQiGEThKEEQiZIYCNE5QAOAggIANQgGAKggAHQgwAIgiAIQg+APg8AaIgSAdQgVAlgOApQgtCFAsCBIA3gDQA5AFALAkQANArhRAxQhRAxh7AXQg7AGg1AAQiLAAhpgqgAszKEQB7ABBkBLIBmBSQBJA7BDAsQCUBhBag4QAjgWAFgkQAGglgbgcQgqgtALhXQAIhCBGkAQB6m9DAlLQC1k2EOj+QBxhpgLgOQgJgMiGA0QnnC8lDE4QiDB+h9ClQhUBwh9C+QhUCChXDEQhHChgHAmQgBAIgfAKQgkALgRAbQgqBDBBAEQgNgTAMgNQARgTBGAAIAHAAgAL1t4QhuCGiJDvQjgGGhuGFQhEDtAOA6QANA2BjhGQA5goBDgSQAlgLA3gKQAogLALgbQANgfgPhMQghirA9kbQA/kkCWlZQBNixgEgGIAAAAQgCAAg2BDg");
	this.shape.setTransform(97.2,113.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_18, new cjs.Rectangle(0,0,194.5,226.9), null);


(lib.inky_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AggEIQg6gagogrQgwgzgHg9QgKhYBIgxQAkgZAmgGQAOgNARgWQAigrASgrIALgKIAUgYQAQgQAMAFQAIADABAOQABAOAGAEQAUAMAEghQAFgpACgCQAPgJAMAPQAHAIAKAQIAEgCQgLBQgsBaQgkBLgzBBQgZAiAIA5QAHAyAeAxQATAgghAEIgKAAQgeAAgsgUg");
	this.shape.setTransform(18.8,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_17, new cjs.Rectangle(0.1,0,37.5,56.9), null);


(lib.inky_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF6F24").s().p("AhrC+Qg4hGgIhqQgIhoAthOQAthPBHgGQBGgGA4BGQA4BHAIBpQAHBogsBPQgtBOhHAGIgLABQhAAAgzhBg");
	this.shape.setTransform(17.3,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_16, new cjs.Rectangle(0,0,34.6,50.9), null);


(lib.inky_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF6F24").s().p("AgbDIQg1gIgehAQgeg/AMhSQALhTAug1QAug1A0AHQA2AIAeBAQAeA/gMBSQgLBTguA1QgpAvgtAAIgNgBg");
	this.shape.setTransform(13.2,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_15, new cjs.Rectangle(0,0,26.5,40.2), null);


(lib.inky_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F39C2C").s().p("AjQDcQghg7ANgvQACgIAzgdQBJgqBRhLQB0htCKh4Qh4B/iaDaQhOBug2BUQgTgUgQgegAA2heIhMBDQg5AwguAjQglAbgmARQgTAMACApQABAXAOAZQAOAZAMAAQAKgBAmg4IBQh4QAXghBBhTQAZghgDAAQgCAAgGAGg");
	this.shape.setTransform(23.3,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_14, new cjs.Rectangle(0,0,46.6,54), null);


(lib.inky_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED9D37").s().p("ApkK2QAGggAIgcQAPg3ANglQAXhFAVgwQAJgWAUgsIBJiMIArhIQA+hhAmgxIA4hHIA8hGIB+iDICEh1IBCg1IC9iBQBWgzAWgMQBLgoAKgEIBMgkIhIArIhRAzIgxAgIg2AkIhYBAIgeAXIgfAYQgVAQgLAKIhAA1Ih/B2Ig/BAIgfAhIgeAhQgsAygPATIhsCLQgJAMgQAYIgYAjIgtBGIgoBFQguBRgXAwQgcA5gXA4QgQAmgSAzQgOAmgGAVIgGATg");
	this.shape.setTransform(61.7,71.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_13, new cjs.Rectangle(0.1,0,123.3,142.9), null);


(lib.inky_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7733").s().p("AhYAzIACgLIALgaQAKgTAOgNQARgTAYgIQAOgFAMgBIANABIANADQANAFAJAIQAIAGAGALQAJAPACANQABAGgBAFIAAgCQgCgOgJgOQgFgJgJgIQgJgIgNgFIgNgDIgNgBQgNABgNAFQgYAIgRATQgOANgKATQgHAOgEANIAAABg");
	this.shape.setTransform(8.9,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_12, new cjs.Rectangle(0,0,17.9,10.3), null);


(lib.inky_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7733").s().p("ACQBxIAAgBQgCgTgHggQgKgogPgdQgUgrgggbQgUgQgVgIQgIgEgNgDQgNgCgKAAQgVAAgWAIQgQAHgRALQgJAHgOAOIgPASIgGAIIgBgBQADgHAHgLQAGgHAJgLQAMgMAMgIQAPgLASgHQATgHAXgCQAKABANACIAWAGQAWAJASAQQAhAaAUArQAPAgAJAmQAIAfABAUIACAUIgDAAg");
	this.shape.setTransform(14.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_11, new cjs.Rectangle(0,0,29.9,24.5), null);


(lib.inky_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#100F18","#6E3220","#CC5423"],[0,0.541,0.996],8.8,-17.3,-7,13.8).s().p("AhDB+QglgrgHhEQgHhCAcg1QAcg0AugGQAugHAlAsQAmArAHBEQAHBCgdA1QgcA0guAGIgMABQgmAAghgmgAhaglIgHAYQgDAgARAyQAUA8A3AOQA1ANAjgvQAdgoAAg8QAAgUgDgBQgDgBgCAaQgCA4goAdQgmAcglgQQghgOgTgvQgPgoAEgbQADgSgGgCg");
	this.shape.setTransform(11.3,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_10, new cjs.Rectangle(0,0,22.7,32.8), null);


(lib.inky_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCCCC").s().p("AhfCwQgzhCgJhiQgIhiAohIQAohJBBgFQA/gFAzBCQAzBCAIBiQAJBhgoBJQgoBJhBAFIgJABQg5AAgwg+gAgCDaQBQAJAuhoQAOgfAFgcQAIgrgLAtQgGAbgRAaQghA2g1ADQgrACgmglQgagZgSgkQgZB+B1AMgAgXjUQg/AIgVBhQgHAhAEAQQADARAKgcQAchSA2gZQBBgeA9BcQAVApAAgBQABgBgRgsQgKgagXgZQgngrgyAAIgRABg");
	this.shape.setTransform(15.7,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_9, new cjs.Rectangle(0,0,31.4,47.6), null);


(lib.inky_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#100F18","#6E3220","#CC5423"],[0,0.541,0.996],9.6,-11.7,-7.7,9.4).s().p("AgOCBQgjgDgUgoQgVgnAGg1QAGg1AdglQAegjAhADQAkADAUAoQAVAogGA0QgGA1gdAlQgbAggfAAIgGAAgAhFgaQgIAZAEAoQAGAyAmAUQAlATAhgeQAdgaAJgvQAEgQgCgBQgDgCgFAWQgLAqgiAQQggAQgagUQgWgQgGgnQgEghAHgVQAGgOgFgCIgGAAg");
	this.shape.setTransform(8.7,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_8, new cjs.Rectangle(0,0,17.3,25.8), null);


(lib.inky_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCCCC").s().p("AgXC7QgxgHgbg8Qgbg8AKhMQAKhOAqgxQApgyAvAHQAxAHAbA8QAbA8gKBMQgKBOgqAxQgkAsgoAAIgMgBgAhgAxQgEAQADAVQAHBAA1ASQA7AVAxhLQAQgYAFgTQAFgTgNASQgKAVgQATQghAmgegHQghgHgagjQgTgagHgcQgBgEgBAAQgCAAgCAIgABfhBQAJAjACgDQACgEgGglQgCgWgMgWQgYgtgvgFQgvgFgfBIQgLAYAAANQAAAOAMgUQAig6AogIIAMgBQArAAAaBIg");
	this.shape.setTransform(11.9,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_7, new cjs.Rectangle(0,0,23.9,37.6), null);


(lib.inky_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED9D37").s().p("AjOHyQABgTAFgoQAEgkAIgnIAHgrIAkiPIAOgzIAkhoIBtj6IAwhZIAthOIAohAIAhgxIAfgpIh7D2QgOAcgcA+IhnD5IgTA0IhCDDIgYBVIgUBJIgYBrg");
	this.shape.setTransform(21.1,54.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_6, new cjs.Rectangle(0,0,42.2,109.8), null);


(lib.inky_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECE30").s().p("AgzEcQghgEATggQAegxAHgyQAIg6gZghQgyhAglhMQgshbgLhPIAEACQALgQAGgIQAMgPAPAJQACACAFApQAEAhAUgMQAGgEABgOQABgOAIgDQAMgFAQAQQAJAIALAQIALAJQASAsAiArQARAVAOANIAYAHQAcAJAWAQQBIAxgKBYQgGA9gxAzQgoArg6AaQgsAUgeAAIgKAAg");
	this.shape.setTransform(18.8,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_5, new cjs.Rectangle(0,0,37.5,56.9), null);


(lib.inky_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F29866","rgba(195,124,90,0)"],[0,1],-0.9,-7.2,0.5,3.9).s().p("AgHBEQgjgEgXgYQgXgXADgbQADgdAcgQQAbgRAjAFQAjAEAXAYQAXAXgDAbQgDAdgcAQQgVANgaAAIgPgBgAgeg5QgIABgGAGQgFAFABAGQABAFAGADQAHADAJgCQAIgBAGgFQAGgGgBgGQgBgFgHgDQgEgCgFAAIgHABgAAMgyQgEADgBAEQAAAFADAEQADAEAFAAQAGABADgDQAEgDABgFQAAgFgDgDQgDgEgFgBIgCAAQgEAAgDADg");
	this.shape.setTransform(8.6,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_4, new cjs.Rectangle(0,0,17.3,13.9), null);


(lib.inky_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F29866","rgba(195,124,90,0)"],[0,1],-0.9,-10.3,0.6,6.8).s().p("AhRBIQgigcgCgqQAAgoAigeQAigeAxgBQAvgBAjAdQAjAcAAApQABApgiAeQgiAegxABIgCAAQguAAgigcgAAbhPQgJADgCAIQgCAIAGAJQAHAIAMAEQAMAEAJgDQAKgDACgIQACgIgHgJQgGgIgMgEQgGgCgGAAQgFAAgFABgAgghLQgFAFAAAHQAAAHAFAFQAFAEAHAAQAHABAFgFQAEgFAAgHQAAgHgEgFQgFgFgHAAQgHAAgFAFg");
	this.shape.setTransform(11.8,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_3, new cjs.Rectangle(0,0.1,23.5,20), null);


(lib.inky_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED475").s().p("AgFA2QgMAAgGgSQgHgQADgXQADgWAKgPQAKgPALABQALACAHARQAGARgDAWQgCAWgKAPQgKAOgJAAIgCgBg");
	this.shape.setTransform(24.1,71.5,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED475").s().p("AgDAXQgLgFABgVQABgXANACIAAAAQAQABgDAaQgCAWgKAAQgCAAgDgCg");
	this.shape_1.setTransform(36.2,85.7,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED475").s().p("AgGARQgKgGADgQQAEgQAMAEIABAAQAPADgGATQgEAOgIAAQgDAAgEgCg");
	this.shape_2.setTransform(28.2,77,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FED475").s().p("AgJAYQgPgJAFgXQAFgYATAGIAAAAQAXAEgJAdQgGAVgMAAQgEAAgGgEg");
	this.shape_3.setTransform(19.5,75.7,0.4,0.4);

	this.instance = new lib.inky_6();
	this.instance.parent = this;
	this.instance.setTransform(55.9,40.5,0.4,0.4,0,0,0,21.2,55);

	this.instance_1 = new lib.inky_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.2,35.4,0.4,0.4,0,0,0,61.9,71.5);

	this.instance_2 = new lib.inky_36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17,37.9,0.4,0.4,0,0,0,10.9,9.5);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.inky_14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.2,35.7,0.4,0.4,0,0,0,23.4,27.3);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.inky_29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55.7,41.5,0.4,0.4,0,0,0,21.4,57.4);
	this.instance_4.alpha = 0.602;

	this.instance_5 = new lib.inky_31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(36.2,38.8,0.4,0.4,0,0,0,64.2,80.8);
	this.instance_5.alpha = 0.602;

	this.instance_6 = new lib.inky_33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(56.2,39.3,0.4,0.4,0,0,0,39.3,81.2);
	this.instance_6.alpha = 0.898;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF5623").s().p("AlLPgQhogShfg2IApAPQAyARA3ALQCtAjCcglQBVgVgXgvQgWgvhhgJQg6gFALhAQAJgxAwhPQASgegKgKQgKgKgbAKQhFAYguBEQgWAhgJgDQgJgCAHgcQAThKBCg7QBWhMBRgqQBQgoB2gbQBkgXAKg6QAEgZgIgyIgShwQgbiqA7kvQBJl2CnkEQiKEshBEYQhoHEB8ETQAOAggIANQgGAKggAHQgwAIgiAIQg+APg8AaQgIAKgKATQgVAlgOApQgtCFAsCBIA3gDQA5AFALAkQANArhRAxQhRAxh6AXQg+AGg2AAQhEAAg5gKg");
	this.shape_4.setTransform(51.4,50.6,0.4,0.4);

	this.instance_7 = new lib.inky_18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(39.5,45.2,0.4,0.4,0,0,0,97.3,113.3);
	this.instance_7.alpha = 0.602;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED475").s().p("AgkBmQgUgIgFgjQgEgjAQgpQAPgqAZgZQAZgYAVAHQAUAIAEAjQAEAjgOApQgQArgaAYQgSATgRAAQgFAAgFgCg");
	this.shape_5.setTransform(14.7,51.9,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED475").s().p("AgXBCQgNgFgDgXQgCgWAJgbQAKgbAQgQQAQgQANAFQAOAFACAXQADAXgKAaQgJAbgRAQQgMAMgKAAIgHgBg");
	this.shape_6.setTransform(10.7,63.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FED475").s().p("AgGARQgKgHADgPQAEgQAMAEIABAAQAPADgGATQgEAOgJAAQgCAAgEgCg");
	this.shape_7.setTransform(38.1,69.6,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FED475").s().p("AgJAYQgPgJAFgXQAFgYATAGIAAAAQAXAEgJAdQgGAVgMAAQgEAAgGgEg");
	this.shape_8.setTransform(27.1,65.9,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FED475").s().p("AgIAZQgEgBgBgCQgGgMACgMQADgNAJgIQACgCAFACQAFABABACIABAAQAOAIgGAPQgGAOgMAIIgDAAIgEAAg");
	this.shape_9.setTransform(14.7,69.2,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FED475").s().p("AgaAcQgMgOANgSQAJgOARgNQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAOgJAKAKQAJAIgFARQgFAMgKAMQgPARgLAAQgJAAgHgIg");
	this.shape_10.setTransform(29.2,33.4,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FED475").s().p("AgEAWQgOgGAEgSQAHgXANADIADADQAKAIgEAPQgCAIgFAGQgEAFgEAAIgEgBg");
	this.shape_11.setTransform(33.4,45.7,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FED475").s().p("AgQAnQgNgGgCgRQgCgPAGgOQAFgPAKgIQAMgIAOAEIADABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBABQAZANgPAmQgLAdgRAAQgHAAgHgEg");
	this.shape_12.setTransform(32.1,53.2,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FED475").s().p("AgPAaQgHgFABgOQAAgOAFgKQAHgNALABQAGAAAEAEIADABQALAGgFATQgFASgKAIQgFADgFAAQgFAAgGgEg");
	this.shape_13.setTransform(18.4,59.3,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FED475").s().p("AgGATQgHgBgCgIQgBgFADgHQAFgPALgBIACAAQARgBgKAUIgHAMQgFAGgFAAIgBAAg");
	this.shape_14.setTransform(22.6,52.2,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FED475").s().p("AgMAYQgGgDAAgKQgBgJAHgKQAHgLAHgFIACAAQAEgBADABQAHABABAJQADAYgUAMQgEAEgFAAIgFgCg");
	this.shape_15.setTransform(20.8,42.3,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FED475").s().p("AgmAzQgIgSAFgWQAGgaANgVQARgaAWgEIADABIABACQAEAAAEACQASAMgDAZQgEAbgMAYQgPAegUAIQgGACgFAAQgOAAgGgQg");
	this.shape_16.setTransform(28.8,41.3,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FED475").s().p("AgOAvQgNgDgDgPQgFgcAVghQACgDADgBQAJgNAPACQAPADABAQQACARgJAYQgHAUgJAIQgHAHgIAAIgHgBg");
	this.shape_17.setTransform(22,47.2,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FED475").s().p("AgUAxQgOgMACgXQAEgrAWgNQAHgKAOAAQAHABAFAFQAEAFABAHQACAVgHAWQgIAbgOAMQgEAEgIABIgBAAQgIAAgEgEg");
	this.shape_18.setTransform(25.4,58,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AjeB/IAGgJIAQgWIAXgaQALgLAVgQQASgQASgNQAngbAtgaIAsgYQAVgLAYgKQAPgHAbgLIAngOIAhgLIAygLIh2AsIgpATQgyAZgmAWQgaAOgRAMIgpAZQgtAfgYAVIgaAYQgKALgHAJIgFAIIgHAMg");
	this.shape_19.setTransform(50.4,71.9,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A74A20").s().p("AlrLPQAIg5AGgeQALg8ANg0QAPhBAThBQAPg0AghbQAghaAZg8QAchDAphUIAlhLIAmhJIB6jMQANgWAbgnIApg6IAlg1IBGhaQAogzAPgRIAyg6IgwA8Ig2BFIhDBcIglA1IgUAcIgTAdQgeAugzBRIh1DUIglBLQgrBbgZA7QgaA9ghBYQgfBYgQA3QgTA6gSBHQgLApgOBGQgMA0gEAiIgLBMQABgcAHgwg");
	this.shape_20.setTransform(56.1,39.3,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AjVQrQhRgshyhkQiHh1g1gkQhMg0gjgTQBfAuB0BkIBzBkQBCA3A5AiQBwBECAAWQCHAYB5ggQBIgTAlgPQBBgZAfgjQAngrgfgfQgfgfhBAKQgJAAAAgDQgzixBUifQAUgmA1gUQAWgIBIgOQA7gMAPgOQAXgVgTgzQgehSgPhaQgWiMAVirQAmk2CMlXQAvhzAnhPQAZgzAGgLIA0hOQAphJgjACIgCAAQlBAylxDdQiNBVg5AnQhuBLhEBJQjiDziIC0Qi8D5hhDlQg3CDgfBoIgDAOQgCALgDADIhFApQhDBYCXANQAKgDALgbQAKgZAPABQAdADAcAKQg2gPgVAjQgRAegiAFQggAEgbgTQgcgTgBgfQgCgjAlgmQAJgJAZgLQARgHAGgVQAXhIARgwQBQjVBTh9QCHjJA5hQQBvibBjhwQDkkBE+i1QFHi8FGgyIADgBQAbgBALADQAVAHgOAXIhIBzQgsBFgXAyQiXFLg7EZQgyDwALCnQAIB9AbBSQAEAPAVAqQASAogDASQgHAnhrAMQg/AIgRAEQgpAJgMASQgpA8gPA6QgKAjgFBkQgGBwATgDQAigGAcAEQAkAFAUATQAhAggrAsQgeAfgtAVQiNBBifABIgFAAQijAAiChHg");
	this.shape_21.setTransform(39.7,45.4,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6A72F").s().p("AiWRFQiHg1iuijQiMiDh7g0QgmgQgggGIgZgDQgGAFgOAYIgNAXQgSAGgWACQgtACgXgZQgbgeAdgvQAcgvAwgGQAVhQAqhsQBUjYBpiNICEjBQCbjbB4h/IAwgrIAigkQAtguBnhMQB5hYCJhQQF0jXElgoQAkgFAEAMQAEALgTAcIgsA+QggAtgQAiQiGEThKEEQiZIYCNE5QAOAggIANQgGAKggAHQgwAIgiAIQg+APg8AaQgIAKgKATQgVAlgOApQgtCFAsCBIA3gDQA5AFALAkQANArhRAxQhRAxh7AXQg7AGg1AAQiLAAhpgqg");
	this.shape_22.setTransform(39.5,45.3,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AiwEOQgfgigUguQgchAAegXQAZgUBNgyQBAgpAjggIABgBQB4hxCFh0QABgCAGABQABAAABAAQABAAABABQAAAAAAAAQAAABAAAAQjGDWjPFFQgCACgEAAQgEAAgCgCgACYi+QhTBLhSBMIAAAAIAAABQgsAmgeAYQgqAggnAWQglAUgKANQgQAWAMAlQASA3AeAkIACgDIBAhgQCUjZBnh5QAbgfAoglg");
	this.shape_23.setTransform(21.2,35.8,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6A72F").s().p("AjQDcQghg7ANgvQACgIAzgdQBJgqBRhKQB0huCKh4Qh4B/iaDaIiEDCQgTgUgQgeg");
	this.shape_24.setTransform(21.3,35.7,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_7},{t:this.shape_4},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_head, new cjs.Rectangle(0,-0.1,78.7,91.2), null);


(lib.inky_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF5623").s().p("AjeL4QgjgxADhCIALg4QgihJABhkQADjHCziGQDLiWg2iOQgRgtgngmIglgdQjBjJAqixQAOg3AjguQARgYAPgMICXAKQhDB4AqBkQAgBLB4BkIAQALQATAOAQAUQA1A/AEBgQgWhRgigMQgngOgDB7QgCBJgfA7QgeA7hEA7QgiAfg/AuQg6ArgZAYQhPBNgHCNQgFAnAMAzQAGAdARA+QgfBZAxBEQA3BMB5gLQA6gFAhgJQAlgJATgRQASACADACQAEACgLAGQhZAzhlAJIggABQhxAAg3hNg");
	this.shape_1.setTransform(0.2,1,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AE31").s().p("AgCAGQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBgCACgDIADgDQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAAQACADgCADIgDADIgBABIgCgBg");
	this.shape_2.setTransform(8.9,-0.1,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AE31").s().p("AgDAKQgDgCgBgFQAAgDADgEQACgDADgCQAEgBACAEIAAABQACAFgCAEQgBADgDACIgDABIgDAAg");
	this.shape_3.setTransform(6.1,0.2,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AE31").s().p("AgFAPQgGgDAAgHQAAgGAEgGQAEgGAFgBQAGgCACAHIAAABQAEAIgEAGQgCAFgEADQgEACgBAAIgEgBg");
	this.shape_4.setTransform(5.3,4.1,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AE31").s().p("AgDAKQgEgCAAgFQAAgEACgEQADgEADgBQAEAAACAEIAAAAQADAGgDAEQgBAEgDACIgEABIgCgBg");
	this.shape_5.setTransform(0.8,4.9,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7AE31").s().p("AgGAQQgGgDAAgIQAAgGAEgHQAEgGAGgCQAGgBADAHIAAABQAEAIgEAHQgCAGgFADQgDACgCAAIgFgBg");
	this.shape_6.setTransform(-6.1,13.3,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7AE31").s().p("AgUATQgIgLAJgMQAIgMALgGQAHgDAHACIACAAQAJABgBAKQAAAFgDAGIgHAJQgIALgJAEIgHACQgGAAgEgGg");
	this.shape_7.setTransform(-1.5,10.1,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AE31").s().p("AgHAeQgRgEABgQQAAgOAKgMQAHgHAHgDIACgBQAMgFAGAIQADADAAAIQABAGgBAGQgCAOgIAJQgHAIgJAAIgFAAg");
	this.shape_8.setTransform(-5.2,15.5,0.4,0.4);

	this.instance = new lib.inky_27();
	this.instance.parent = this;
	this.instance.setTransform(-1.3,27.4,0.4,0.4,0,0,0,21.7,17.4);
	this.instance.alpha = 0.699;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgbAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIADgBQAZgEAVgGIAEABIABAAIAAABIAAABQgLAQgPAEIgHACQgNAAgJgNgAgRAAQAIAHAKgCQALgDAGgJQgSAFgRACg");
	this.shape_9.setTransform(2.1,33.9,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgXgBQAYgDAXgGQgLAUgRABQgMAAgHgMg");
	this.shape_10.setTransform(2.1,33.9,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AAQAvQghAAgFgnQgGgmAdgPQAFgDAAADQAEAuAOAqQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBABIgDAAIgCAAgAgGggQgFAEgDAKQgFATAKAUQAJARAPAEIgLgqIgEgYQAAgKgEAAIgCACg");
	this.shape_11.setTransform(-10.9,20.7,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgSAIQgIgnAcgNQADAuAPArIgDAAQgcAAgHglg");
	this.shape_12.setTransform(-10.9,20.7,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgUAMQgGgOAGgNQAGgMAOgIIACgCQABAAABAAQABAAABAAQAAAAABAAQAAAAAAABQABAmAPAhQACADgHAAIgEAAQgVAAgNgagAgNADQACANAJAJQAHAIAJABQgNgegBgiQgQANADAUg");
	this.shape_13.setTransform(-10,29,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AAJAkQgIgBgGgJQgGgHgEgJQgGgOAFgNQAFgMANgGQABAlAQAiIgFAAIgFAAg");
	this.shape_14.setTransform(-10,29,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgTAWQgXgRAMgeIAEgEQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQAYAdAhASQAAABAAAAQAAAAAAABQAAAAgBABQAAABgBAAIgDACQgNAHgLAAQgNAAgMgJgAgOAPQAQARAXgKQgcgQgWgZQgFAUAQAOg");
	this.shape_15.setTransform(-7.5,32.8,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgPAVQgLgHgDgOQgDgOAGgNIACACQAXAbAgATQgKAHgMAAQgMAAgMgHg");
	this.shape_16.setTransform(-7.5,32.8,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AgYAJQgDgBAHgEQAWgHAUgJIACAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQgDANgOAIIgEABQgGADgHAAQgJAAgHgEgAgOAGQALAFAKgFIAIgLg");
	this.shape_17.setTransform(5,32.9,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgVAGQAVgGAWgKQAAALgPAGQgHAEgGAAQgIAAgHgFg");
	this.shape_18.setTransform(5.1,32.9,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AgMAMIAAgBQgNgEgFgIQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAABAAIAEgCQAXAAAcgFQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQgOAVgYAAIgFAAgAAHgDIgbACQAEAEAHADQgCgCAQgEQAOgEgGAAIgGABg");
	this.shape_19.setTransform(-0.8,34.7,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgJAJQgMgCgFgLQAZAAAcgFQgFAJgKAFQgIAFgHAAIgGgBg");
	this.shape_20.setTransform(-0.8,34.7,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AACAmQgXgSABgWQABgYAbgKQABgBABAAQABAAAAAAQABAAAAAAQAAAAABABIAGALQAEAHgCAFQgIAUgDAcIAAAAIAAABIgDACIgEAAIgBAAgAgCgZQgIAFgCAJQgGAUAVAUIAGgdQAFgNgBgBIgDgHQgDgGgEAAQgDAAgCACg");
	this.shape_21.setTransform(-10.2,25.1,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AgRgDQAAgOAIgIQAFgGANgEIAJAUIgFAOQgFASgCATQgXgRAAgWg");
	this.shape_22.setTransform(-10.2,25.1,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AghgLIAAgBQgBAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAdAKAeACQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgKAPgUAFIgBAAIAAAAIgCAAQgbAAgHgcgAAHAMQAYgNgTAAIgOgCIgWgFQAJAVAWgBg");
	this.shape_23.setTransform(-4.2,34.6,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgRAHQgKgHgDgOQAeALAeABQgGAOgTADIgFAAQgJAAgIgIg");
	this.shape_24.setTransform(-4.2,34.6,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AABAnQgRgUgCgRIAAgBIAAAAQACgdAcgKIAEgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQgIAlgBAlIAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgCAAIgDgBgAgJAAQACAOAJANQABgbAGggQgRAJgBAXg");
	this.shape_25.setTransform(-11,16.1,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgHAWQgGgLgBgLQAAgcAdgJQgJAngBAkQgJgMgDgEg");
	this.shape_26.setTransform(-11,16.1,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A74A20").s().p("AgjAiQgEggAWgWQAWgXAeAOIABAAQAAAAAAAAQAAAAAAAAQABAAgBABQAAAAAAAAQgLAOgUARIgfAeIgFACIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBgAgOgOQgOASACAWIAZgXQARgQALgOQgIgDgIAAQgOAAgLAQg");
	this.shape_27.setTransform(-1.7,2.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8B430").s().p("AgOgSQAVgXAZAOQgKAOgUARIggAeQgGgfAWgVg");
	this.shape_28.setTransform(-1.7,2.5,0.4,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A74A20").s().p("AgiAjQgEggAVgWQAVgZAeAOIABABIgBABQghAcgbAgQgFAEgBAAIgCgBgAgPgPQgMASABAWQAXgaAdgZQgJgEgIAAQgOAAgKAPg");
	this.shape_29.setTransform(-6.4,6.8,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8B430").s().p("AgPgTQAUgWAaAOQggAbgcAiQgGgfAUgWg");
	this.shape_30.setTransform(-6.4,6.8,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A74A20").s().p("AgPAqQgQgcALgbQAMgeAgABIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgWApgKAmIgEADIgCABIgCgBgAgQgIQgEATAJATQALgjARggIACAAIAGgEQgBgBgGAEIgBABIAAAAQgcAAgFAdg");
	this.shape_31.setTransform(-9.7,11.9,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8B430").s().p("AgRgNQALgeAcAEQgWAogLAnQgQgaAKgbg");
	this.shape_32.setTransform(-9.8,11.8,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A74A20").s().p("AirMuQg4gYgXg+QgUg3ALhAQAEgYgLgmQgPg4gBgHQgViBBAhyQA2hfBzhbQBohRAOhrQAOh0hthGIgBgBIgBAAQhvhtgkhrQgtiFBNhzQAUgeAbgOQh0BnAqCbQAiCAB3B2QBGAsAXBHQAXBIgkBLQgdA9hYBJQhnBXgdAmQgwBBgOBXQgNBPARBVQAEARALAeQAIAbgFAUQgvCuCrAjQBDANBSgNQBNgMA4geQgMAGg8gTQgvgOgdgMQhugugcihQgYiOBsiAQAjgpBFhAQBRhKAagcQBMhPAWhrQAWhvgwhfQgVgpg2guQg+gygagaQg4g2gVg+QgVhCAShHQAUgqACgKQAEgMgsgDIg0gGQgZgCgKAAQAPgFAQgBQAhgBBTANQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQhSCNBaB1QAYAgBGBCQBDBAAdAoQBPBtgvCPQgoB2hrBjQhUBKgnAnQhBBDgfBDQglBPAPBgQAQBgA7A/QAhAlA4ASQAqANA/AGIARACQANADgJAHQhCAzhmAMQgaAEgaAAQhFAAg3gZg");
	this.shape_33.setTransform(0.5,0.9,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EB6E2D").s().p("AjiL3QgkgyAEhBIALg4QgihJABhkQACjIC0iGQDLiWg2iOQgRgtgngmIglgdQjMjAAtizQAOg4AmgwQASgXAQgNICXAKQhSB8BHB4QAgA2BsBdIAeAZQAjAhAVAqQBFCGhZCqQgeA6hIBCQhVBKgoAnQhGBEgdBBQgnBTANBmQAXCyCdAsQAhAJA7AFQARACADACQADADgLAGQhZAyhkAJIggABQhwAAg4hMg");
	this.shape_34.setTransform(0.4,1,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-32.6,23.9,67.9);


(lib.inky_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF5623").s().p("AjpMUQhegohFhMQgJgJAFgBQADgBASAEQANAWAgAUQAdASA1AXQBxAwBLg2QBDgxgBhfQARgcAhgzQAbgtAHgnQAmiIg0hiQgQgfgqg6QguhAgWgnQguhOgLhBQgLhCAVhGQAjh2goABQglABguBHQAihaBGgsQAjgXAcgEQCQg6A2g9QBHhSgbiHICTAmIAUArQATA3gEA5QgPC2j2CDQhNARgvA7QhfB3CSDOQCBC3g7C+QgeBgg4A6IgHA5QgRBAgwAjQgvAjg7AAQgxAAg6gZg");
	this.shape_1.setTransform(16.5,36.8,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AE31").s().p("AgEABQAAgDACgCIAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABACABADQABACgBADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBAAQgDAAgBgGg");
	this.shape_2.setTransform(8.7,32.4,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AE31").s().p("AgEAIQgCgCgBgEQAAgFAEgEIAAAAQADgEACACQAEADABAEQACAEgDAEQgBAEgEABIgBAAQgCAAgCgDg");
	this.shape_3.setTransform(11.3,33.6,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AE31").s().p("AgGAMQgEgEAAgGQgBgHAGgGIAAgBQAFgFAEADQAFADACAHQABAGgCAGQgDAHgFABIgCAAQgDAAgDgEg");
	this.shape_4.setTransform(10.8,37.5,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AE31").s().p("AgEAJQgDgEAAgDQgBgFAFgEIAAgBQADgDACACQAEACABAEQACAFgCAEQgBAEgFABIgBAAQgCAAgCgCg");
	this.shape_5.setTransform(14.9,39.7,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7AE31").s().p("AgHANQgEgFAAgFQgBgJAGgGIAAgBQAGgGAEAEQAFADADAHQABAIgCAGQgCAHgHABIgCABQgDAAgEgFg");
	this.shape_6.setTransform(18.8,49.8,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7AE31").s().p("AgDAXQgIgGgFgNIgDgLQgBgHABgFQADgJAJABIABABQAGABAGAFQAKAIAEANQAEAQgLAIQgEADgEAAQgEAAgEgFg");
	this.shape_7.setTransform(15.4,45.3,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AE31").s().p("AAAAgQgNgCgGgNQgEgLACgNIAEgMQACgHAFgCQAIgGAJAJIABABQAHAFAEAJQAGAOgEAOQgEAOgOAAIgDAAg");
	this.shape_8.setTransform(17.2,51.6,0.4,0.4);

	this.instance = new lib.inky_26();
	this.instance.parent = this;
	this.instance.setTransform(10,63.4,0.4,0.4,0,0,0,24.3,14.4);
	this.instance.alpha = 0.699;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgHANQgNgJgEgTIAAgBIAAAAIABgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIApAXQAHADgDABQgKAHgIAAQgHAAgHgFgAgEAHQAJAGAKgFIgfgRQADAKAJAGg");
	this.shape_9.setTransform(4.7,66.7,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AAAAOQgJgDgFgJQgEgFgDgLQAUAMAXALQgIAGgIAAIgGgBg");
	this.shape_10.setTransform(4.6,66.7,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AgZAqIgBAAIgCgCQgDgDABgCQAagiASgsQAAAAAAAAQAAAAABAAQAAgBAAABQABAAAAAAIACACQAYAYgSAiQgNAcgWAAQgHAAgHgDgAANgVQgGAOgGAIQgJATgNARQAQACANgOQAQgPABgVQABgJgEgGQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQgCAAgEAHg");
	this.shape_11.setTransform(20.9,58.3,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgcAnQAagkASgrQAYAVgUAiQgPAagTAAQgHAAgHgCg");
	this.shape_12.setTransform(20.9,58.3,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgYAgQgGgCACgCQAagcALgiQABAAAAgBQAAAAABAAQAAAAABABQABAAABAAIACACIAAABQALAMACANQACAOgLAMQgQAQgOAAQgHAAgHgEgAgSAeQAIACAKgFQALgGAFgMQALgSgMgRQgMAggVAYg");
	this.shape_13.setTransform(17.5,65.9,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AgPAhIgJgDQAZgcAMgjQALALABANQACANgLANQgOARgNAAIgEgBg");
	this.shape_14.setTransform(17.5,65.9,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgjAJIgCgDQAAAAAAgBQgBgBAAAAQAAAAABgBQAAAAAAAAQAlgGAhgVQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIACAEQADAggcAJQgHACgGAAQgTAAgQgQgAgdAKQAUAQAUgKQAUgKABgUQgcAQghAIg");
	this.shape_15.setTransform(14,68.9,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgjAGQAkgGAfgUIADgBQACAOgHALQgIANgNAEIgLABQgTAAgOgQg");
	this.shape_16.setTransform(14,68.9,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AgJAJIgCgBQgLgMACgNQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIABACQAUARAPALIADADQAAABAAABQABAAAAAAQAAABgBAAQAAAAAAAAIgGABQgNAAgLgKgAgIAFIAAABQAJAIALgCIgYgTg");
	this.shape_17.setTransform(2.1,64.9,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgJAGQgMgJAEgLQAPAOAVAPIgIAAQgLAAgJgJg");
	this.shape_18.setTransform(2.1,64.9,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AAHASIgBAAIgBgBQgagHgGgZQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIABABQAXAMAZAIIADADQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgJAIgLAAIgBAAgAgGAAQANAKgBABQAHAAAFgEIgYgJIgIgDQgCAAAKAFg");
	this.shape_19.setTransform(7.2,68.4,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AAFAOQgLgCgIgIQgJgHgBgLQAYAOAZAHQgIAIgJAAIgDgBg");
	this.shape_20.setTransform(7.2,68.4,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AgQAlIgCgBIAAAAIgCgDIAAgBQAGgegBgTQgBgFAGgGIAKgIQAAgBAAAAQAAAAAAAAQAAABABAAQABAAABABQAYASgHAWQgGAWgbAKIAAABIgBAAIgCgBgAgDgVIgFAFQgBABAAAHIABAIQgBANgCAPQAZgMACgUQAAgKgGgHQgDgEgEAAQgDAAgDAEg");
	this.shape_21.setTransform(19.1,62.3,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AgNgCIAAgQIAOgQQALAJAEAHQAFAJgEAOQgHAWgbAIQAEgTAAgSg");
	this.shape_22.setTransform(19.1,62.2,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AgKAOIgBgBQgRgKgFgSQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAfAIAdAAIAAAAQACAAADACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgNATgSAAQgFAAgIgDgAgLAIQAUAIAOgSQgKAAgLgBIgPgDIgGgBQgHAAAPAPg");
	this.shape_23.setTransform(10.5,69.5,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgLALQgRgJgCgPQAfAJAegBQgHALgLAFQgGADgGAAQgFAAgHgDg");
	this.shape_24.setTransform(10.5,69.5,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AgQAnQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAKgiAFgoQAAgCAFADQAZATgHAbIgBABIAAAAQgIARgVAMIAAABIAAgBIgBABIgBAAIgDgBgAgIAcIAHgFQAHgHAFgKQAFgWgOgPQgDAegHAdg");
	this.shape_25.setTransform(22.6,53.9,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgBglQAZARgKAcQgDAKgKAIIgRAMQALgiAEgpg");
	this.shape_26.setTransform(22.6,53.9,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A74A20").s().p("AARAqIgEgEQgegxgKgcIAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAggDAPAdQAOAbgOAeIgCAAIgCAAgAgTgkQAGAQANAWIAQAeQAIgWgHgVQgIgZgYAAIgEAAg");
	this.shape_27.setTransform(18.1,38.3,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8B430").s().p("AgEABQgOgXgGgQQAcgFAOAcQANAbgOAcIgVgng");
	this.shape_28.setTransform(18.1,38.2,0.4,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A74A20").s().p("AAPApIgDgEQgNglgYgnIgBgCIABAAQAggEAOAeQAMAcgOAdIgBAAIgDgBgAgSgjQAUAiANAfQAIgVgGgUQgHgYgXAAIgFAAg");
	this.shape_29.setTransform(21.2,43.9,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8B430").s().p("AgXgmQAcgFANAcQAMAbgPAbQgPgngXgmg");
	this.shape_30.setTransform(21.2,43.8,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A74A20").s().p("AgHAtQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIAAAAQABgqgIgrIABgBIABgBQAfAKACAgQACAcgXAWIgBABIgBAAIgCgCgAgDAiQAMgQAEgTQAEgdgbgIQAGAlABAjg");
	this.shape_31.setTransform(23,49.5,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8B430").s().p("AgOgrQAcAHABAeQABAdgYAUQACgpgIgtg");
	this.shape_32.setTransform(23,49.5,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A74A20").s().p("AkKMKQhegsgvhFQgGgJANABIASADQA9AOAsABQA8AAArgYQBLgqAthWQAshXgKhWQgJhKgqhUIhSiSQhGh+gBh+QgBiXBthOQAogdBSgoQBYgpAhgXQB6hTgjigQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABABQAtALBGAOQAQAGAMAKQgJgDgagGIgzgMQgrgLgBAOQAAAKAGAuQgJCPiSBIIhqAtQhCAbghAgQhLBLgNByQgNBsAvBkQAQAhA2BfQAvBTAUAxQA+CchCCAQhMCQh5AKQghACgvgBQg/gCgJgJQAsAuBFAkQBLAmBEAIQCtAUAJi0QABgUAQgXIAdgpQAqhMANhPQANhXgZhMQgPgthIhzQg8hhgJhDQgLhSAsg+QArg8BRgUQCXhLBIhvQBYiHhPiGQAWAVAKAkQAlCFhUBxQhEBaiLBGIgBAAQiAAggVBzQgUBqBJBuQBSB6AVBqQAZCBg7B0IgkA3QgWAhgDAYQgKBAgkAuQgoAzg9AGIgbACQhGAAhNgkg");
	this.shape_33.setTransform(16.5,36.6,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EB6E2D").s().p("AjsMSQhegphEhLQgJgJAEgBQAEgBAQADQA7AOAhABQCkAHBNiiQAshcgLhbQgIhHguhWQg5higbgxQgwhUgKhBQgfi+BqhqQA2g1A7gPQCDg3AwgpQBqhcgpiQICTAmIAWAtQAUA6gDA5QgNC4j9B4QhNARgwA7QheB2CRDOQCCC3g8C/QgeBgg3A6IgHA5QgRBAgwAjQgwAjg6AAQgyAAg6gZg");
	this.shape_34.setTransform(16.6,36.7,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_11_1, new cjs.Rectangle(0.2,4.1,32.8,66.1), null);


(lib.inky_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF5623").s().p("AAXNEQhkgJhZgyQgLgHADgCQADgCASgCQAUARAlAJQAhAJA5AFQB6ALA2hMQAxhEgfhZQARg+AHgdQALgzgFgnQgHiNhPhNQgZgYg6grQg/gugigfQhEg7geg7Qgfg7gChJQgDh7gmAOQgjAMgWBRQAFhgA0g/QAaggAagNQB3hkAhhLQAphjhDh5ICXgKIAhAkQAjAuANA3QAqCxjADJQgRAKgUATQgoAmgRAtQg2CODLCWQC0CGACDHQACBkgjBJIALA4QAEBCgkAxQg3BNhxAAIgggBg");
	this.shape_1.setTransform(12,32.9,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7AE31").s().p("AAAAGIgDgDQgCgDACgDIAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQABAAAAAAIAEADIABAFQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgCABIgBgBg");
	this.shape_2.setTransform(3.2,31.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7AE31").s().p("AgBAJQgEgCgBgDQgCgEACgFIAAgBQACgEAEABQADABACAEQAEAEgBADQAAAEgEADIgCAAIgDgBg");
	this.shape_3.setTransform(6.1,32.1,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7AE31").s().p("AgCAOQgFgDgCgFQgEgHAEgHIAAgBQADgHAGACQAFABAEAGQAEAGgBAGQgBAIgEACIgEABQgDAAgCgCg");
	this.shape_4.setTransform(6.9,35.9,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AE31").s().p("AgCAKQgDgCgBgEQgDgEADgGIAAAAQABgEAFAAQADABACAEQADAEAAAEQgBAFgDACIgCABIgEgBg");
	this.shape_5.setTransform(11.4,36.7,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7AE31").s().p("AgDAPQgFgDgCgGQgEgHAEgIIAAgBQADgHAGABQAGACAEAGQAEAIAAAFQgBAJgFACIgEABQgDAAgDgCg");
	this.shape_6.setTransform(18.3,45.1,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7AE31").s().p("AAEAXQgJgEgIgLQgFgFgCgEQgEgHABgEQgBgKAJgBIABAAQAHgCAHADQAMAGAHAMQAJAMgHALQgEAGgGAAIgHgCg");
	this.shape_7.setTransform(13.6,41.9,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AE31").s().p("AgNAWQgIgJgCgOIgBgMQAAgIAEgDQAGgIAMAFIACABQAHADAHAHQAKANAAANQABAQgRAEIgFAAQgJAAgHgIg");
	this.shape_8.setTransform(17.3,47.3,0.4,0.4);

	this.instance = new lib.inky_28();
	this.instance.parent = this;
	this.instance.setTransform(13.4,59.3,0.4,0.4,0,0,0,21.5,17.4);
	this.instance.alpha = 0.699;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgCALQgPgEgKgQIAAgBIAAgBIAAAAIAEAAIAuAJIADABQABAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQgKANgMAAIgIgCgAgBAFQALACAIgHQgQgCgUgFQAHAJAKADg");
	this.shape_9.setTransform(10,65.7,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgXgKQAXAGAYADQgHAMgMAAQgRgBgLgUg");
	this.shape_10.setTransform(10,65.7,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AgPAvIACgFQAOgEAJgRQALgUgGgTQgCgJgFgFQgGgFgCANQAAALgDANQgEAWgGAUIgIABIgCAAQAPgrADgtQAAgBAAAAQABgBAAAAQABAAABABQABAAABABQAdAPgGAmQgFAngiABIABgBg");
	this.shape_11.setTransform(23.1,52.5,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgTAtQAOgpAEgwQAcANgIAmQgIAmgbAAIgDAAg");
	this.shape_12.setTransform(23.1,52.5,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgSAmQgFgBAAgCQAQghABgmQAAgBABAAQAAAAAAAAQABAAABAAQABAAABAAIABABIABABQANAIAGAMQAHANgHAOQgMAagUAAIgGAAgAgNAiQAJgBAGgIQAKgJACgNQAEgUgQgNQgCAhgNAfg");
	this.shape_13.setTransform(22.2,60.8,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AgSAkQAQgjAAgkQANAGAGAMQAFANgGAOQgDAJgHAHQgGAJgIABIgFAAIgFAAg");
	this.shape_14.setTransform(22.2,60.8,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgeAYIAAgBIgCgBQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAAAABgBQAhgSAYgdQAAAAAAgBQABAAAAAAQABAAAAABQABAAABAAIADAEQAMAegXARQgMAJgNAAQgMAAgNgHgAgYAWQAXAKARgRQAPgOgFgUQgWAZgcAQg");
	this.shape_15.setTransform(19.6,64.6,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgeAVQAfgSAZgcIABgCQAHANgDAOQgEAOgLAHQgLAHgMAAQgNAAgKgHg");
	this.shape_16.setTransform(19.6,64.6,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AgEAKQgBABAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgOgIgDgNQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAQAUAJAWAHQAHAEgDABQgHAEgJAAQgHAAgGgDgAgGAGIABABQAKADAKgEIgdgLg");
	this.shape_17.setTransform(7.1,64.7,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgHAHQgOgGAAgLQAXAKAUAGQgHAFgIAAQgHAAgHgEg");
	this.shape_18.setTransform(7.1,64.7,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AgegJQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAcAFAXAAIAEACQABAAABAAQAAABAAAAQABABAAAAQAAAAgBABQgFAJgMADIAAABIgBAAIgEAAQgYAAgOgVgAgFAAQARAEgCACQAHgCAEgFIgbgCIgHgBQgFAAANAEg");
	this.shape_19.setTransform(12.9,66.5,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgKAFQgLgFgFgJQAdAFAYAAQgFALgMACIgGABQgHAAgHgFg");
	this.shape_20.setTransform(12.9,66.5,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AgEAmQgEgBgBgCQgDgegIgTQgBgEADgIIAGgLQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAbAKABAYQABAWgWASQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgCgBgAgJgVIgDAGQgBADAFAMQAEAOACAOQAVgUgFgTQgDgJgIgFQgDgCgBAAQgFAAgDAGg");
	this.shape_21.setTransform(22.3,57,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AgMgBIgFgOIAJgUQAMAEAGAGQAHAHABAPQAAAVgXASQgCgTgFgSg");
	this.shape_22.setTransform(22.3,57,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AgCARIgCAAQgTgFgKgPQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAfgCAcgKQACgBADACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQgHAdgbAAIgCAAgAgGAMQAVABAJgVIgVAFIgOACIgBAAQgRAAAXANg");
	this.shape_23.setTransform(16.3,66.4,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgDAPQgUgDgGgOQAegBAegLQgDAOgJAHQgIAIgLAAIgDAAg");
	this.shape_24.setTransform(16.3,66.4,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AgFAoQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAAAQgCgmgIgkQAAgEAHADQAcAKACAdIAAABQgCARgRAUIAAAAIgDABIgCAAgAAAAbQAJgOACgNQgDgXgQgJQAFAdADAeg");
	this.shape_25.setTransform(23.2,47.9,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgOglQAdAJgBAcQAAALgGALIgNAQQgBgmgIglg");
	this.shape_26.setTransform(23.2,47.9,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A74A20").s().p("AAgAjIgEgCIgBAAQgrglgTgXIAAgBQAAAAAAAAQgBAAABgBQAAAAAAAAQAAAAAAAAQAfgOAWAXQAWAWgEAgQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAgAgagbQALAOASAQIAZAXQABgWgNgSQgMgQgOAAQgIAAgIADg");
	this.shape_27.setTransform(13.8,34.3,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8B430").s().p("AgBAEQgUgRgKgOQAZgOAVAXQAWAVgGAfIgggeg");
	this.shape_28.setTransform(13.9,34.3,0.4,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A74A20").s().p("AAbAgQgbggghgcQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIgBgBQAfgOAVAZQAVAWgEAgIgBABQgCAAgFgEgAgZgaQAcAZAYAaQABgXgMgRQgKgPgPAAQgHAAgJAEg");
	this.shape_29.setTransform(18.5,38.7,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8B430").s().p("AgegbQAZgOAUAWQAVAWgGAfQgaghgigcg");
	this.shape_30.setTransform(18.5,38.7,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A74A20").s().p("AALAqIgDgDQgLgngVgoIAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAhgBAMAeQALAbgQAcIgCABIgDgBgAgQglQARAjALAgQAIgTgDgTQgFgdgcAAIAAAAg");
	this.shape_31.setTransform(21.9,43.7,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8B430").s().p("AgVgnQAcgEALAeQAKAbgRAaQgLgogVgng");
	this.shape_32.setTransform(21.9,43.7,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A74A20").s().p("AgENDQhmgMhCgzQgJgHANgDIARgCQA/gGAqgNQA4gSAhglQA7g/APhgQAQhgglhPQgfhDhBhDIh7hxQhrhjgoh2QgviPBPhtQAdgnBDhBQBGhCAYggQBah1hSiNQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAtgDBHgJQAQABAPAFQgKAAgaACIg0AGQgrADAEAMQACAKATAqQATBHgWBCQgUA+g4A2IhYBMQg2AugVApQgwBfAWBvQAWBrBMBPQAaAcBRBKQBFBAAiApQBtCAgYCOQgbChhwAuQgdAMguAOQg8ATgMgGQA4AdBNANQBSANBDgNQCrgjgviuQgFgUAIgbQALgeAEgRQAQhVgMhPQgPhXgwhBQgcgmhnhXQhZhKgdg8QgjhLAXhIQAXhHBFgsQB4h2AiiAQApibh0hnQAcANAUAfQBNBygtCGQgkBrhvBtIgBAAIgBABQhuBFAPB1QAOBrBoBRQB0BbA1BfQBABygVCBIgRA/QgKAmAEAYQALBAgUA3QgXA+g4AYQg3AZhFAAQgaAAgagEg");
	this.shape_33.setTransform(11.7,32.8,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EB6E2D").s().p("AAbNCQhkgJhagyQgLgGAEgDQADgCARgCQA7gFAhgJQCcgsAXiyQAOhmgnhTQgehBhFhEQhVhLgpgmQhHhCgfg6QhYiqBEiGQAWgqAighQARgRANgIQBshcAhg3QBHh4hSh8ICXgKIAiAkQAmAwAOA4QAtCzjMDAQgRAKgUATQgnAngRAsQg2CODLCWQCzCGADDIQABBkgiBJIALA4QADBCgjAxQg4BMhwAAIgggBg");
	this.shape_34.setTransform(11.7,32.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_10_1, new cjs.Rectangle(0.2,-0.7,23.9,67.9), null);


(lib.inky_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.inky_30();
	this.instance.parent = this;
	this.instance.setTransform(16.2,49.7,0.4,0.4,0,0,0,16.4,18.2);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A74A20").s().p("AABAbQgJgXgIgYIAAAAIAIACIALAfQARgOgSgMQgCgDgIgCIgDgIIAAgBQAZAEADASQACANgOARIgDADIgBgBg");
	this.shape_1.setTransform(7.2,70.4,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8B430").s().p("AgOgXQAKABAIAGQAJAGABAIQADAMgOAOQgLgZgGgWg");
	this.shape_2.setTransform(7.3,70.4,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74A20").s().p("AgSAgQAHgiAUgeQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAIACABQALAUgHATQgIAWgaAHIAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAgJAOIgCAIQAkgWgQgZQgKARgIAWg");
	this.shape_3.setTransform(6.8,64.6,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B430").s().p("AAEgXIAFgHQAPAYgMAPQgMAUgQACQAGgfAOgXg");
	this.shape_4.setTransform(6.9,64.6,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A74A20").s().p("AAVATQgTgFgJgCIgBAAIgRgRQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIACgDQATgNAPAKQAOAKAAASIgBADQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAgAgRgIIAOANIAXAFQgCgKgJgGQgHgGgGAAQgGAAgHAEg");
	this.shape_5.setTransform(10.5,74.3,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B430").s().p("AACAKIgIgCIgQgQQAHgHAMABQALAAAHAHQAKAIgCAPIgVgGg");
	this.shape_6.setTransform(10.5,74.3,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A74A20").s().p("AgZAVQgCgBAFgFQAWgPAQgUIABgBIABgBIACgBQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQALAUgQAQQgKAMgNAAQgJAAgKgEgAgPAPQAPAFALgLQALgLgFgNQgOAQgSAOg");
	this.shape_7.setTransform(13.2,86.3,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B430").s().p("AgWARQAWgPASgWQAIAKgEALQgDAMgNAGQgGACgGAAQgIAAgIgEg");
	this.shape_8.setTransform(13.2,86.3,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AghAHQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIBAgQQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABQgCARgWALIgBABIgKABQgPAAgSgKgAAKgDIgeAHQARAIAOgEIABAAQAJgEABgEQABgEgFAAIgIABg");
	this.shape_9.setTransform(16.5,59.1,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgfADIA/gPQABAHgHAGQgHAHgJADQgGACgFAAQgOAAgQgKg");
	this.shape_10.setTransform(16.5,59.2,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AANAZQgOgYgYgPQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAPgEAIABQALABAJAIIAAABIABABQAKAUgQAQIgDACIgBAAgAgOgRIANAKIAKALQAJAKABgIQABgGgDgIQgMgKgNAAIgGABg");
	this.shape_11.setTransform(14.2,76.9,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgXgRQAMgFALABQANABAGAJQAFAIAAAJQgBALgHAFQgOgXgZgQg");
	this.shape_12.setTransform(14.3,76.8,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgiAIQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIADgDQAXgIAqgNQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAABQgGAagYAKIgCABIgDAAQgQAAgSgNgAADgDIgaAIIAKAGQAJADAKgBIAAAAQAQgGAAgQg");
	this.shape_13.setTransform(12.5,60.3,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AggAEQAYgJApgLQgCAKgIAJQgJALgKACIgFABQgOAAgRgNg");
	this.shape_14.setTransform(12.5,60.3,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgdAMQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQACgCACgBQAcgJAYgOIADAAQAGATgaAPIgBAAQgHADgHAAQgMAAgMgHgAAAACIgRAGQAGADAFABQAHABALgDIAFgRg");
	this.shape_15.setTransform(10.1,88.6,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgJAQQgHgBgLgGQAegJAXgPQAEAIgFAHQgFAJgJAEQgIADgHAAIgFAAg");
	this.shape_16.setTransform(10.1,88.6,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AgYAfQgCAAACgFQAVgaAGgZIACgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAMAIAEALQAEALgEAKIgCADQgPASgbAAIgEAAgAgRAYQAYAAAMgOQAHgRgUgOQgGAVgRAYg");
	this.shape_17.setTransform(15.2,83.6,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgWAbQAWgbAFgbQAMAFAEANQAFALgFAIQgLASgYAAIgIgBg");
	this.shape_18.setTransform(15.2,83.6,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AgPAfQAEgggIgZIABgEQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAeAGAEAXQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgFAZgdALIAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAgJgEIABAPQgCAPALgIQALgHADgKQgFgSgWgHIADAUg");
	this.shape_19.setTransform(16.2,80.7,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgQgdQAMABAKAKQALAJAAAJQAAAWgeAIQAFgigIgZg");
	this.shape_20.setTransform(16.1,80.7,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AggAZQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAIACgEQAYgXAngVQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQADAYgQARIgBABIgBAAQgPAJgSAAQgJAAgJgCgAAFgEQgPAIgPAOQAZAFAUgNIADgYg");
	this.shape_21.setTransform(9.1,61.8,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AgfAVQAYgZAmgSQADAKgDAKQgDAJgIAHQgJAGgOACIgMABQgJAAgHgCg");
	this.shape_22.setTransform(9.1,61.8,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AAJAYIAAAAQgNgSgOgWQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAUgFAIARQAIAOgHAOQAAABAAAAQgBAAAAABQAAAAgBABQAAABgBAAIgDACIgBAAgAAMANQACgIgFgJQgGgMgLAAIAUAdg");
	this.shape_23.setTransform(8.7,72.9,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgPgSQAPgGALAQQAKAQgJANQgQgVgLgSg");
	this.shape_24.setTransform(8.7,72.9,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AgJAiQgHgiAEgeIABgDQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAPAIAGALQAEAJgCANIgBADQgGAQgOALIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAgJgBIACAPQgCAUASgZIAAgBQACgMgEgIQgFgHgKgGIgBAYg");
	this.shape_25.setTransform(6.7,67.6,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgKgfQAOAHAFAJQAGAJgEAQQgFAPgNAHQgHggAEgfg");
	this.shape_26.setTransform(6.7,67.6,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DF5623").s().p("Ak7RCQgfgHASgaQAegpAFg3QAGg9gegtQg8hYghhNQAaA3AuBEQAPAgAaAjQASAegBAsQAAAbgVAzQgNAgATADQAdAFBBgoQBLgwALg7QAQhdg9gvQgTgPgYgIIgVgGQhRhggVglQg6hkAphIQAqhIBHglQAwgaBYgSQBlgWAggMQBGgbAmg1QBah9hYigQgdg0g0hBIhChRQhKhuAdh3QAfiECZhiQCdhkBQhaQBMhVgIg7QASA0gmBXQgTAsgXAhQgLANggAcQhBA3hrBKQiBBZgOCFQgPCBBfB9IAgArQAkA1AXA2QBLCrhQBsQgnA2hNAjQgwAWhgAbQhjAbglARQhDAdgYAtQguBUA8BkQAeAyAnAiIAZAJQAcAMAXAQQBKAzgNBFQgbCTiFA0QgjAOgaAAQgKAAgJgDgAmkKbQgYg3gEg1QAIA9AeBGIgKgXgAnDICQAChxBbhSQAxgtCKgyQB8guAng1QAog4gLhAQgJgzgthEIhbh5Qg4hKgWgzQgthxBbiaQBQiGCWh0QBPg8AjgrQgYAggoAmQhwBhgxAuQhZBSguBkQg3B5AkBjIATAmQAWArAVAZIAmAtQAmAvAaAtQBSCMgwBYQgeA6hBAjQgbAPhiAkQhSAegrAhQg/AvgeBRQgWA5AFA9QgDgXAAgWgADawMQAAgHABAAIAUgEIgQADQgDANgHAOQAEgKABgJg");
	this.shape_27.setTransform(18.6,45.8,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A74A20").s().p("AgvB6IAcgsIAWgsIATgoQAJgWAEgRIAHghQACgKAAgQQgBgJgCgHIgBgGIACAGQADAFACALQABATAAAIQAAAOgEAUQgEAUgHATIgRAqQgJATgNAaIgbAsg");
	this.shape_28.setTransform(34.8,6.9,0.4,0.4);

	this.instance_1 = new lib.inky_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.1,78.1,0.4,0.4,0,0,0,18.9,28.5);
	this.instance_1.alpha = 0.699;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7AE31").s().p("AACAWQgIgCgJgNQgGgKAHgJQAEgGAHgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAAAQAKACAFAJQAEAHAAAHQAAAIgEAGQgEAGgGAAIgDgBg");
	this.shape_29.setTransform(15.6,33.7,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7AE31").s().p("AgDAHQgDgBAAgDQgBgDADgDQAEgEACAAQAEAAABAFIABABQAAAHgHACIgBAAIgDgBg");
	this.shape_30.setTransform(3.9,64.7,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7AE31").s().p("AgFAHQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBgCACgCQADgEAFgBQAGgCADABQADACgDAEIAAABQgHAGgEAAIgDAAg");
	this.shape_31.setTransform(5.9,58.3,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7AE31").s().p("AgFAHQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBgCACgCQADgDAFgCQAGgCADABQADADgDADIgBABQgHAGgEAAIgCAAg");
	this.shape_32.setTransform(18.3,53.1,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7AE31").s().p("AgQAOQgGgCgBgFQgCgGAGgEQAIgHAOgDQAOgCAFAEQAGAFgJAIIgBACQgRALgKAAIgHgBg");
	this.shape_33.setTransform(14.1,57,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7AE31").s().p("AgIALQgEgDABgEQAAgFAHgGQAGgGAFABQAGACgBAGIAAACQgEANgJACIgBAAQgDAAgDgCg");
	this.shape_34.setTransform(22.6,51.1,0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7AE31").s().p("AgJAQQgIgIAAgMQAAgMAHgDQAJgFAHAKIACABQAQATgKALQgEAEgHAAIgBAAQgGAAgFgFg");
	this.shape_35.setTransform(21.1,46.2,0.4,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7AE31").s().p("AAAAOQgHAAgFgIQgFgGADgGQADgIAKABIABgBQAHABAFAEQAFAFgBAFQgBAFgEAEQgEAFgGAAIgBgBg");
	this.shape_36.setTransform(17.3,37.2,0.4,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7AE31").s().p("AgOAPQgMgMADgLQADgKALgEIADgBIAHABQAVAGACAQQABAIgFAHQgFAJgKAAIAAAAQgJAAgKgJg");
	this.shape_37.setTransform(21.3,37.6,0.4,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7AE31").s().p("AgKAOQgJgCABgHQAAgFAHgGQAEgDAHgCQADgCAEAAQAJgBACAFQACAFgDAEQgDAIgIADQgFADgFAAIgGAAg");
	this.shape_38.setTransform(26.4,10.9,0.4,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A74A20").s().p("AjWQxQgIgHgCgDQgCgFABgIQAThbABglQADhIghg0QhUiHgVhuQgeidBlhWQAygrCDg2QBqgsAzgnQg4AwhjAkQjbBQgOC8QgMCaB4CyIAbAoQAMAXgBAWQgBAIgPBRQgLBNAXgCQBJgDA3gzQAyguAQhCQARhDgcg0Qgeg5hNgQQgcgFghg/QgcgzgGgfQgOhBAXg2QAbg9BGgdQAtgSBNgVQBigaAcgJQDFhAgRiuQgLh4hviiQgCgCADgGQADgFABACQBjCPAVBhQAeCJhlBmQgsAthiAdQhyAcgxAPQhrAeghBVQgfBPAvBUQALAVAPAUQAYAjAPADQB4AZALBnQAJBahFBQQgaAdg+AiQgwAagdAAQgQAAgKgIgABPiJQgegyg+hTQhAhUgQgZQg9hlBdidQBFh4B3hkIBhhRQA4gvAkgmQAEgFAEgJQAIgTgBgYIAGAUQADAXgRAXQguA8iBBqQh8BlgvBFQhLBpAGBkQAGBbBKBtIA8BXQAlA0AWAkQA3BdgrBMQAlhQhNiAg");
	this.shape_39.setTransform(14.1,46.7,0.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A74A20").s().p("AhiFIQiLjWBWiPQAphGB0hUQCIhjAngsQADgEABAFQAAAFgCACIgGAAIgBACQgGAMgFAEQgcAchAAxQhKA2gjAbQg+AwgiAtQg+BRAWBqQAPBQBCBkQABACgDAFQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAIgCgBg");
	this.shape_40.setTransform(26.7,23.6,0.4,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB6E2D").s().p("Ak5ReQghgEATggQAegwAHgzQAIg5gZghQhiiBgiiDQgsiuBnhfQAygvBCggQAfgPBQgdQA/gXAfgTQAsgdAVgvQAXgwgJgxQgIgogig4QhwiWhDhzQgthwBeiYQBMh+CXh/QBrhaAegwQAPgYgHgGIATgVQAXgZAXgRQBLg4AwAjIAQAHQARALAHAWQAXBEhWCRQgLANggAcQhBA3hrBKQiCBagPB8QgPB6BhCMQBdCFAYBYQAlCChQBfQgoAvhIAdQgrAShdAXQhaAXgnARQhAAcgcAtQgzBRA7BqQAeA1AnAlIAYAGQAcAKAWAPQBIAxgKBZQgGA9gxA0QgoArg6AaQgtAUgeAAIgKgBg");
	this.shape_41.setTransform(18.6,44.8,0.4,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A74A20").s().p("AAQAiIgvg+IAAgBIAAAAIABgDQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAggBATAYQATAYgZAUgAAGAJIALANQAKAIAAgSQABgQgUgMQgOgKgRgCg");
	this.shape_42.setTransform(23.7,37.3,0.4,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8B430").s().p("AgTgSIgKgNQAegCAUAZQAUAZgXAPQgQgYgVgag");
	this.shape_43.setTransform(23.7,37.3,0.4,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A74A20").s().p("AACAgQgFgggSgZIABgDIAAgBIABgBIABgBQAigFAFAbQAGAZgYAQIgBABIAAgBgAgOgaQALASAFAUQAGARAFgSQAGgSgGgJQgHgKgPAAIgFAAg");
	this.shape_44.setTransform(28,47.2,0.4,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8B430").s().p("AgUgbQAdgIAKAaQAJAZgZAOQgEgggTgZg");
	this.shape_45.setTransform(28,47.2,0.4,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A74A20").s().p("AAGAjQgKgggUggIAAAAIABgCIAAgBIABgBQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAfgBAKAbQAJAZgWARIgCABIgBAAgAgBAAIAGAOQAEAVAMgeQgBgNgNgLQgKgIgNgCIAPAdg");
	this.shape_46.setTransform(25.6,40.3,0.4,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F8B430").s().p("AgWgfQAagDAOAZQAPAagZAQQgJgfgVghg");
	this.shape_47.setTransform(25.6,40.3,0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A74A20").s().p("AgQAVQAOgTAJgUIABgCQAEgDAAABIAAAAQAKARgHAMQgIAMgWAEQgBAAAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBgAgBAFQgIAFAEAHQASgEABgMQAAgGgFgKIgKAUg");
	this.shape_48.setTransform(27,52.9,0.4,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8B430").s().p("AAJgUQAEAHACAHQABAIgCAFQgHALgWADQAPgVAJgUg");
	this.shape_49.setTransform(27,52.9,0.4,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A74A20").s().p("AggA6QAEg7Acg3QAAgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAnAcgLAsIAAAAIgBABQgQAmgtAHIgBABIAAgCgAgBgxIgNAfQgIAWgFAiQgBALAEACQAFACAMgEQAWgHAMgcIAAAAQAGgZgOgXQgBgDgIgHQgGgGgEAAIgBABg");
	this.shape_50.setTransform(20.5,25,0.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8B430").s().p("AABg4QATAMAIAUQAHATgGATQgOAmgtAFQADg7Acg2g");
	this.shape_51.setTransform(20.5,25,0.4,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A74A20").s().p("AgDAyQgRgxgDgvIABgCQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAmAKAEAjQAFAhgcAWIgCABIgBgBgAABAsQAZgTgIgeQgHgcgdgKQADAsAQArg");
	this.shape_52.setTransform(20.1,29.9,0.4,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8B430").s().p("AgVgvQAjAHAHAkQAGAhgbATQgTgxgCgug");
	this.shape_53.setTransform(20.1,29.9,0.4,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8B430").s().p("AgWgfQANAAAMAIQAMAIAEAJQAJARgPAVQgVgggOgfg");
	this.shape_54.setTransform(21.2,33.7,0.4,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A74A20").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_55.setTransform(18.5,58.5,0.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F8B430").s().p("AgZACQAZgFAWgLQAMASgaAJQgIACgGAAQgOAAgFgNg");
	this.shape_56.setTransform(19.7,58.4,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A74A20").s().p("AAEAiIgBAAQgKghgQgeQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAfAFAJAXQAKAWgZARIgCAAIAAAAgAgOgZQALAUALAhQALgHAAgKQABgIgGgLQgFgIgJgFQgEgFgHAAIgDABg");
	this.shape_57.setTransform(27.2,43.6,0.4,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B430").s().p("AgVgfQAeADAKAYQAKAXgXANQgMglgPgag");
	this.shape_58.setTransform(27.3,43.6,0.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A74A20").s().p("AgKASQgIgCgKgHQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgCQAZgHAcgOQAAAAAAgBQABAAAAABQAAAAAAAAQAAAAAAABQADAUgXANIgBAAQgHACgEAAIgHgBgAAIgDIgRAGQgOAGANACQAKACAKgCIAAAAQAKgNAAgEQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgDAAgHAEg");
	this.shape_59.setTransform(22.3,57.2,0.4,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8B430").s().p("AgbAGQAbgGAbgPQADAHgHAJQgGAKgIADQgGACgFAAQgMAAgNgKg");
	this.shape_60.setTransform(22.3,57.2,0.4,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A74A20").s().p("AgNAcQAHgcgBgZIABgCQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAVAOgFAVIAAACQgIARgRAFIAAAAIgBgCgAgEgNIAAAJIgCAPQgCANAIgFQAGgFAEgIQADgPgNgKIgBgBQgCAAgBAHg");
	this.shape_61.setTransform(28.2,50,0.4,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8B430").s().p("AgFgaQAXAMgGAUQgGARgSAEQAIgagBgbg");
	this.shape_62.setTransform(28.2,50,0.4,0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A74A20").s().p("AgWATQgDAAAFgFQAUgOAVgTQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQADANgMARIgCACQgHAGgHACIgFAAQgHAAgIgCgAAHgCIgVARQAIABAEAAQAHgBAHgGIADgSg");
	this.shape_63.setTransform(24.8,55.4,0.4,0.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8B430").s().p("AgVAQQAVgPAVgTQAFALgOAQQgHAKgMAAQgGAAgIgDg");
	this.shape_64.setTransform(24.8,55.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_9_1, new cjs.Rectangle(0.3,0.1,36.5,89.9), null);


(lib.inky_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.inky_34();
	this.instance.parent = this;
	this.instance.setTransform(15.5,50.4,0.4,0.4,0,0,0,15.3,19.2);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A74A20").s().p("AgIAZQgMgTAEgNQAEgRAZgCQADAAACAEIAAADQgMAagKAUIgBAAIgDgCgAgBgNQgSAKAOAPQAHgNAHgQQgHABgDADg");
	this.shape_1.setTransform(22.7,71.8,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8B430").s().p("AgOgEQACgHAKgGQAIgFAKAAQgJAWgNAXQgMgPAEgMg");
	this.shape_2.setTransform(22.6,71.8,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74A20").s().p("AAQAkQgZgJgGgXQgFgTAOgUIABAAQAAAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAQAgAEAjIAAACIgBAAgAAMAWIgCgIQgFgVgIgTQgUAYAjAYg");
	this.shape_3.setTransform(23.6,66,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B430").s().p("AgLAHQgKgQARgWIAEAHQANAbACAdQgPgDgLgWg");
	this.shape_4.setTransform(23.5,66,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A74A20").s().p("AgZAQQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQACgRAPgJQAQgIASAOQADAGgBABIgSAOIgBABIgBAAQgKAAgSAEIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAgAgGgGQgKAGgDAJQALgCAMgBIAPgMQgHgEgHAAQgFAAgGAEg");
	this.shape_5.setTransform(18.9,75.3,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B430").s().p("AgNgIQAIgGALABQAMABAGAHIgSAPQgMAAgSAEQAAgOALgIg");
	this.shape_6.setTransform(18.9,75.3,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A74A20").s().p("AgRAMQgOgSANgTIABAAIADACIAAABIACACQAOAUATARQAGAGgDAAQgIADgIAAQgPAAgKgOgAgKAIQAKANAPgEQgPgPgOgSQgHANALALg");
	this.shape_7.setTransform(15.1,86.9,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B430").s().p("AgGASQgNgHgCgLQgBgMAIgKQAOAXAWATQgHADgHAAQgIAAgGgFg");
	this.shape_8.setTransform(15.1,86.9,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgLAQIgBgBQgVgNAAgRQAAgBAAgBQABAAAAAAQAAgBAAAAQAAAAABAAIA9AWIAAAAIAAAAIAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQABABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgPAHgNAAQgHAAgIgDgAgVgBQABAEAIAFIAAAAQAOAGASgGIgdgKIgJgDQgEAAABAEg");
	this.shape_9.setTransform(14.6,59.5,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgLAMQgJgFgFgHQgHgHACgHIA9AVQgPAIgMAAQgIAAgHgDg");
	this.shape_10.setTransform(14.5,59.6,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AgSAYIgBgCQgOgRAMgUIAAgBIABAAQAJgHALgBQAJAAAPAGQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAgBABQAAAAAAAAQgbANgQAWIAAABIgCgBgAgPgJQgFAHAAAHQAAAIAKgJIAMgKIAOgJIgKgBQgKAAgLAHg");
	this.shape_11.setTransform(15,77.4,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgYAEQABgIAFgIQAHgIANAAQALAAAMAGQgbANgQAWQgHgGABgLg");
	this.shape_12.setTransform(15,77.4,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgFAWIgBgBQgXgMgEgbQAAgBAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAmAQAZALQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgLAGgHACIgMACIgIgBgAgGAOIAAAAQAKACAIgDIALgEIgsgTQgBARAQAHg");
	this.shape_13.setTransform(18.4,61.1,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AgFARQgKgDgIgMQgHgKgBgKQAmAPAYAMQgQAKgMAAQgEAAgEgCg");
	this.shape_14.setTransform(18.4,61.1,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgKAQIgBgBIAAAAQgXgQAHgTIADAAQAVAQAcANIAEADQAAABAAABQABAAAAABQAAAAgBAAQAAABAAAAQgMAFgIAAQgJAAgKgFgAgMAJQAKAFAIgBQAFAAAGgCIgQgJIgQgKg");
	this.shape_15.setTransform(17.9,89.5,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgLAMQgKgFgDgIQgEgIAEgIQAXARAcAMQgLAFgIABIgBAAQgIAAgKgGg");
	this.shape_16.setTransform(17.9,89.5,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AAXAhQgdgCgPgVIgBgDQgHgYAagOQABgBAAAAQAAABABAAQAAAAABAAQAAABAAABIABADQAEAaASAcQADAFgCAAIgBAAgAARAZQgPgZgEgWQgUAMAEARQALAQAYACIAAAAg");
	this.shape_17.setTransform(13.3,84.1,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgTAHQgEgHAGgMQAGgMALgEQACAaAUAfQgfAAgKgWg");
	this.shape_18.setTransform(13.3,84.1,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AAKAhQgcgNgCgZIABgCQAHgWAdgEQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIABAFQgLAYABAgIAAADIgBgBgAgPgCQAAAJALAJQAKAKAAgPIACgQIAGgTQgWAEgHASg");
	this.shape_19.setTransform(12.8,81.2,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgLAQQgIgJABgKQABgJAMgIQALgJANAAQgMAaACAhQgMgGgIgIg");
	this.shape_20.setTransform(12.8,81.1,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AgCgCIAFAAIAAAGIgFgGg");
	this.shape_21.setTransform(22.7,63.9,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AACAXQgOgDgIgIQgHgHgCgKQgCgKAEgKQAkAXAWAbIgLABQgIAAgKgDg");
	this.shape_22.setTransform(21.6,63,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AgPAVIgCgDIAAAAQgGgQAKgNQAKgQATAGQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgQAUgPAQIAAABIgBAAIgDgCgAgIgFQgFAIAAAJQAMgMALgPIgBAAQgKAAgHAKg");
	this.shape_23.setTransform(21,74.1,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgJgJQALgPAQAIQgPASgQASQgJgPANgOg");
	this.shape_24.setTransform(20.9,74.1,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AAEAjQgMgLgGgPIAAgBIAAgCIAAgCQgBgNAFgJQAGgKAQgHQACgBABAHQAAAhgJAeIgBACIgBgBgAgFgOQgGAIABANIAAAAQAPAcABgVQACgJABgGIACgYQgLAFgFAGg");
	this.shape_25.setTransform(23.4,69.1,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgMAHQgCgPAHgJQAGgIAPgGQAAAfgKAgQgNgKgDgPg");
	this.shape_26.setTransform(23.4,69.1,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DF5623").s().p("ABjRQQh+hBgMiVQgGhGBNgrQAogWAogHIAZgVQAegaAWgdQBGheglhZQgUgvg/gkQgkgUhgglQhdgkgtgbQhIgrgig5QhEh0BbiiQAuhSA8g6QBrhzgBiCQgBiIh3hjQhohXg8hGIgng0QgSgfgNgoQgbhSAXgyQgOA6BDBcQBHBiCTBzQCNBwATCIQAQB5hVBlIhJBLQg7A7ghAwQhpCXBOCGQAgA4BDAhQAeAQBjAgQBVAbAtAeQBDAtAjBMQAiBLhEBfQgaAjhaBWQgiACggAUQhAApAHBeQADA8BGA3QA8AuAegBQATgBgJghQgQg1ACgcQADgrAWgcIAwg/IAqg5QAZggARgbQgpBJhFBTQgiAqAAA9QgBA3AZAsQAQAcggAEIgJABQgdAAgogVgAFrJfQALg7gQg6QgWhTg6g2QgngmhOgmQhegugZgRQg8gqgag8QgnhdBgiDQAxhDBDg7QAkgjAkg/QAuhfgrh+QgjhohQhbQhkhqgug1QgkgqgVghQAgAuBHBDQCJCCBCCOQBMCig5BsQgbAxg/BEIhnBwQgzA/gOAxQgSA/AkA8QAgA4B2A6QCFBAAsAyQBTBagLByQgCAVgFAVQgJA1gdA1IgMAVQAlhDANg8gAiOweIgFgCIAIADQACAAgBAHQAAAHACAKQgFgNgBgMg");
	this.shape_27.setTransform(14.8,45.8,0.4,0.4);

	this.instance_1 = new lib.inky_19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.3,79.7,0.4,0.4,0,0,0,20.4,27.9);
	this.instance_1.alpha = 0.699;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7AE31").s().p("AgQAPQgDgGABgHQABgHAFgHQAGgIAIgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAABABQAIADADAGQAGAKgIAJQgKAMgIABIgCAAQgHAAgEgHg");
	this.shape_28.setTransform(18,34.4,0.4,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7AE31").s().p("AgBAIQgGgCABgIIABgBQABgEAEAAQACAAADAEQADAEgBADQgBAEgEAAIgDAAg");
	this.shape_29.setTransform(26.5,66.4,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7AE31").s().p("AgIAAIAAAAQgDgFAEgBQADgCAFADQAGACACADQACADgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAIgBAAQgFAAgHgIg");
	this.shape_30.setTransform(25.1,59.8,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7AE31").s().p("AgHAAIgBAAQgDgEAEgCQADgBAFACQAGACACADQACADgBACQgCACgDABIgCAAQgEAAgGgIg");
	this.shape_31.setTransform(13.4,53.4,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7AE31").s().p("AgRACIgBgCQgJgIAHgFQAFgEAOAEQANAEAIAIQAFAFgCAFQgBAFgGACIgFAAQgMAAgQgOg");
	this.shape_32.setTransform(17.1,57.7,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7AE31").s().p("AABANQgJgCgDgOIABgBQgBgIAHAAQAEAAAGAGQAGAGAAAFQAAAFgEACIgFABIgCAAg");
	this.shape_33.setTransform(9.2,51,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7AE31").s().p("AgEAVQgHgBgEgFQgIgLARgSIADgBQAIgIAJAFQAGAEgBAMQgCAMgIAHQgFAEgFAAIgDAAg");
	this.shape_34.setTransform(11.3,46.3,0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7AE31").s().p("AgBAOQgGAAgEgFQgEgFAAgEQgBgMASgCIACABQAJAAADAJQACAFgGAHQgGAHgGAAIgBgBg");
	this.shape_35.setTransform(15.9,37.7,0.4,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7AE31").s().p("AgHAYQgJgCgFgJQgEgIACgGQAEgRAUgEIAIgBIADACQAKAFADAKQACAMgOAKQgMAIgHAAIgBAAg");
	this.shape_36.setTransform(11.9,37.7,0.4,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7AE31").s().p("AgHALQgHgFgDgGQgCgGADgEQADgFAIABQAEABABACQAIADAEAEQAGAEAAAHQAAAHgJABIgDAAQgGAAgHgEg");
	this.shape_37.setTransform(9.5,10.6,0.4,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A74A20").s().p("AAfQsQg4gngYghQg9hWAShZQAUhlB7gNQAOgBAcggQAUgWAKgRQA4hPgXhSQgYhXhogpQhpglg1gWQhfgngngxQhZhwAriFQAfheBwiFQACgCACAGQADAFgCACQh/CWgYB2QgiCsC9BUQAaALBgAkQBLAdArAXQBCAjAVBAQASA3gVBAQgJAeghAwQgnA7gcADQhNAIglA2QghAwAKBFQAJBDAuAzQAxA4BIALQAXADgDhNQgIhSABgIQABgWAOgVQAEgHAbgfQCKilADibQAFi8jShlQhdgugzg0QAvArBkA2QB8BDAtAvQBdBhguCYQghBshhB+QglAwgFBIQgCAkAJBdQABAJgDAEQgDADgIAGQgJAFgNAAQgeAAgxghgAhFhlQAZgiAqgwIBFhQQBVhlAOhaQAQhjg/hwQgqhJhvhyQh2h2gohAQgPgZAGgXIAIgSQgEAXAHATQADAKAEAFQAgAqAyA0IBZBaQBrBwA6B+QBLCmhGBeQgSAYhJBNQhGBMgjAvQhYB4AcBTQgjhQBAhXg");
	this.shape_38.setTransform(17.1,47.2,0.4,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A74A20").s().p("AA1FdQgCgGABgCQBLheAYhNQAghog1hWQgdgwg5g2QhDg8ghggQg7g4gZgdQgXgcgDgPIgCgJIAOAXQAjAwB9BxQBrBfAiBJQAnBUggBkQgaBQhGBWIgCABQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_39.setTransform(8.3,22.6,0.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EB6E2D").s().p("ABbRfQg3gggkgvQgqg4AAg9QgBhaBLgpQAngVAmgDIAagWQAfgdAVgfQBGhkgqhWQgYgvg9giQglgVhYggQhZgggpgWQhFglgjgzQhGhmAxh9QAihWBph7QBviBgCh7QgCh9h5hnQhjhUg7g+IgmgsQhHiZAdhCQAJgVASgJQAKgFAHgBQA0gdBEA/QAiAfAYAmIgCAGQAAAJAIAQQAYAyBiBlQCJCNA/CFQBOChg4BrQgtA+hEBNQhNBXgPATQgnA1gMAnQgOAwASAyQARAxAoAhQAcAWA+AeQBMAkAdATQA/AmAtAzQBcBqg9CoQgvCAhuB1QgdAfACA5QACA0AZAzQAQAhgiABIgBAAQggAAgxgcg");
	this.shape_40.setTransform(14.9,45,0.4,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A74A20").s().p("AgWAgQgWgWAVgWQAWgXAfAEQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABABIABADIAAAAIgBABQgrAtgKAMIAAAAIgCAAgAgGgRQgVAKgCAQQgBATALgIQAFgEAHgIIAggiQgRAAgOAJg");
	this.shape_41.setTransform(9.7,37.2,0.4,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8B430").s().p("AgUgKQAWgXAeAFIgLAMQgaAagQAUQgWgRAXgXg");
	this.shape_42.setTransform(9.6,37.1,0.4,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A74A20").s().p("AgGAgQgWgTAIgZQAIgaAhAKQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAAIAAACIAAABQgUAWgIAfIgBABIAAAAgAgLgSQgHAJAEASQAEAUAHgRQAGgSAOgSIgLgBQgKAAgHAHg");
	this.shape_43.setTransform(4.4,46.6,0.4,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8B430").s().p("AgRgLQALgZAdALQgVAXgIAfQgXgQAMgYg");
	this.shape_44.setTransform(4.3,46.6,0.4,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A74A20").s().p("AgMAhQgVgUAMgYQAMgaAgAFIAAAAQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABIABABIAAABQgXAdgOAgIAAAAIgCgBgAgFgUQgOAKgCANQAIAgAGgVIAIgOIASgbQgNAAgLAHg");
	this.shape_45.setTransform(7.4,40,0.4,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8B430").s().p("AgRgLQARgYAZAGQgWAbgOAhQgXgTARgXg");
	this.shape_46.setTransform(7.4,40,0.4,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A74A20").s().p("AAPAZQgWgHgGgNQgGgMALgQIACAAIADADQAHAWAMAUQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAgAAFARQAGgFgIgHIgIgUQgQAYAaAIg");
	this.shape_47.setTransform(4.7,52.4,0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F8B430").s().p("AgMAFQgDgFADgIQACgHAFgGQAHAYAMATQgUgEgGgNg");
	this.shape_48.setTransform(4.7,52.4,0.4,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A74A20").s().p("AgcAKIAAgCQgHgsApgYQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIABACQAXA5gCA8IgBABQgtgMgMgngAgCguQgIAGgCADQgQAVADAaIAAAAQAJAdAWAKQAMAFAEgCQAEgCAAgKQAAgggHgZQgEgTgGgNQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgDAAgGAFg");
	this.shape_49.setTransform(13.9,25.3,0.4,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8B430").s().p("AgaAKQgEgUAJgSQAJgTAUgKQAXA4gDA7QgsgKgKgmg");
	this.shape_50.setTransform(13.9,25.3,0.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A74A20").s().p("AgFAxQgbgZAIggQAIgjAngGQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABADQgHAugXAvIgBABIAAAAIgBgBgAgTgHQgKAcAXAWQAUgrAHgqQgeAHgKAcg");
	this.shape_51.setTransform(14,30.2,0.4,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8B430").s().p("AgVgIQALgiAjgEQgGAugXAvQgbgWAKghg");
	this.shape_52.setTransform(14,30.2,0.4,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A74A20").s().p("AgTAdQgLgXAJgRQAPgVAcAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIABAEQgSAbgXAfIAAABIgEgEgAAEgVQgPAIgGAHIAAABQgNAPARAKIAaglQAFgHgEAAQgDAAgHADg");
	this.shape_53.setTransform(12.5,33.9,0.4,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8B430").s().p("AgSgIQAFgJAMgGQANgHANABQgSAegXAdQgNgWALgQg");
	this.shape_54.setTransform(12.5,33.9,0.4,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A74A20").s().p("AgKAOQgXgOALgTIABAAQAUAMAZAKIAAAAIACABIAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAIAAAAIAAABQgIALgMAAQgHAAgJgGgAgNACQgCAIANACQAJABAFgBQAFgCAEgDQgVgIgNgHQADACgDAIg");
	this.shape_55.setTransform(11.5,58.5,0.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F8B430").s().p("AgIANQgZgMANgRQAXAQAXAGQgGALgMAAQgIAAgIgEg");
	this.shape_56.setTransform(11.5,58.5,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A74A20").s().p("AgKAgIAAAAQgWgUALgUQAMgWAfgCQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgSAbgPAhIgBAAIAAAAIgCgBgAACgWQgJAEgGAIQgPAVARAPQAOgfANgTIgFgBQgFAAgEADg");
	this.shape_57.setTransform(5.5,43.1,0.4,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B430").s().p("AgSgHQAMgXAeABQgTAbgOAgQgWgPANgWg");
	this.shape_58.setTransform(5.4,43.1,0.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A74A20").s().p("AgJASIgBgBQgVgPAEgUQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAXAQAbALIADACQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQgLAHgMAAQgGAAgHgCgAgKAMIAAAAQAKADAKgBQANgBgOgHQgJgEgHgEQgHgFgCAAQgFAAALATg");
	this.shape_59.setTransform(9,57,0.4,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8B430").s().p("AgJAOQgIgEgFgKQgFgJADgHQAYAQAbAKQgMAHgKAAQgHAAgHgDg");
	this.shape_60.setTransform(9,57.1,0.4,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A74A20").s().p("AALAeQgQgHgGgSIAAgBIgBAAQAAgLAEgIQAFgIAMgGQACgBAAAFQgDAaAFAbQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAAAAAIgBAAgAAEgUQgOAJACAQQADAIAFAFQAIAGgBgNIAAgPQACgRgDAAIgCABg");
	this.shape_61.setTransform(3.7,49.3,0.4,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8B430").s().p("AgKAEQgEgTAYgLQgDAaAEAbQgRgFgEgSg");
	this.shape_62.setTransform(3.7,49.3,0.4,0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A74A20").s().p("AABAWQgGgCgHgIIgCgCQgKgSAEgNQAAgBABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAUAWASAQIABACQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgLABIgJgBgAgMAHQAGAIAHABQAFACAJgBIgVgTIgGgIg");
	this.shape_63.setTransform(6.6,55,0.4,0.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8B430").s().p("AgMAJQgLgSAGgKQASAWAUAQIgKABQgQAAgHgLg");
	this.shape_64.setTransform(6.6,55,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_8_1, new cjs.Rectangle(0,-0.9,30.1,92.2), null);


(lib.inky_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.inky_34();
	this.instance.parent = this;
	this.instance.setTransform(16.2,50.1,0.4,0.4,0,0,0,15.3,19.2);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A74A20").s().p("AgIAZQgMgTAEgNQAEgRAZgCQADAAACAEIAAADQgMAagKAUIgBAAIgDgCgAgBgNQgSAKAOAPQAHgNAHgQQgHABgDADg");
	this.shape_1.setTransform(23.3,71.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8B430").s().p("AgOgEQACgHAKgGQAIgFAKAAQgJAWgNAXQgMgPAEgMg");
	this.shape_2.setTransform(23.3,71.5,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74A20").s().p("AAQAkQgZgJgGgXQgFgTAOgUIABAAQAAAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAQAgAEAjIAAACIgBAAgAAMAWIgCgIQgFgVgIgTQgUAYAjAYg");
	this.shape_3.setTransform(24.2,65.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B430").s().p("AgLAHQgKgQARgWIAEAHQANAbACAdQgPgDgLgWg");
	this.shape_4.setTransform(24.2,65.7,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A74A20").s().p("AgZAQQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQACgRAPgJQAQgIASAOQADAGgBABIgSAOIgBABIgBAAQgKAAgSAEIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAgAgGgGQgKAGgDAJQALgCAMgBIAPgMQgHgEgHAAQgFAAgGAEg");
	this.shape_5.setTransform(19.6,75,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B430").s().p("AgNgIQAIgGALABQAMABAGAHIgSAPQgMAAgSAEQAAgOALgIg");
	this.shape_6.setTransform(19.6,75,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A74A20").s().p("AgRAMQgOgSANgTIABAAIADACIAAABIACACQAOAUATARQAGAGgDAAQgIADgIAAQgPAAgKgOgAgKAIQAKANAPgEQgPgPgOgSQgHANALALg");
	this.shape_7.setTransform(15.7,86.6,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B430").s().p("AgGASQgNgHgCgLQgBgMAIgKQAOAXAWATQgHADgHAAQgIAAgGgFg");
	this.shape_8.setTransform(15.7,86.6,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgLAQIgBgBQgVgNAAgRQAAgBAAgBQABAAAAAAQAAgBAAAAQAAAAABAAIA9AWIAAAAIAAAAIAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQABABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgPAHgNAAQgHAAgIgDgAgVgBQABAEAIAFIAAAAQAOAGASgGIgdgKIgJgDQgEAAABAEg");
	this.shape_9.setTransform(15.2,59.2,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgLAMQgJgFgFgHQgHgHACgHIA9AVQgPAIgMAAQgIAAgHgDg");
	this.shape_10.setTransform(15.2,59.3,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AgSAYIgBgCQgOgRAMgUIAAgBIABAAQAJgHALgBQAJAAAPAGQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAgBABQAAAAAAAAQgbANgQAWIAAABIgCgBgAgPgJQgFAHAAAHQAAAIAKgJIAMgKIAOgJIgKgBQgKAAgLAHg");
	this.shape_11.setTransform(15.7,77.1,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgYAEQABgIAFgIQAHgIANAAQALAAAMAGQgbANgQAWQgHgGABgLg");
	this.shape_12.setTransform(15.7,77.1,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgFAWIgBgBQgXgMgEgbQAAgBAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAmAQAZALQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgLAGgHACIgMACIgIgBgAgGAOIAAAAQAKACAIgDIALgEIgsgTQgBARAQAHg");
	this.shape_13.setTransform(19,60.8,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AgFARQgKgDgIgMQgHgKgBgKQAmAPAYAMQgQAKgMAAQgEAAgEgCg");
	this.shape_14.setTransform(19,60.8,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgKAQIgBgBIAAAAQgXgQAHgTIADAAQAVAQAcANIAEADQAAABAAABQABAAAAABQAAAAgBAAQAAABAAAAQgMAFgIAAQgJAAgKgFgAgMAJQAKAFAIgBQAFAAAGgCIgQgJIgQgKg");
	this.shape_15.setTransform(18.5,89.2,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgLAMQgKgFgDgIQgEgIAEgIQAXARAcAMQgLAFgIABIgBAAQgIAAgKgGg");
	this.shape_16.setTransform(18.5,89.2,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AAXAhQgdgCgPgVIgBgDQgHgYAagOQABgBAAAAQAAABABAAQAAAAABAAQAAABAAABIABADQAEAaASAcQADAFgCAAIgBAAgAARAZQgPgZgEgWQgUAMAEARQALAQAYACIAAAAg");
	this.shape_17.setTransform(13.9,83.8,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgTAHQgEgHAGgMQAGgMALgEQACAaAUAfQgfAAgKgWg");
	this.shape_18.setTransform(13.9,83.8,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AAKAhQgcgNgCgZIABgCQAHgWAdgEQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIABAFQgLAYABAgIAAADIgBgBgAgPgCQAAAJALAJQAKAKAAgPIACgQIAGgTQgWAEgHASg");
	this.shape_19.setTransform(13.4,80.9,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgLAQQgIgJABgKQABgJAMgIQALgJANAAQgMAaACAhQgMgGgIgIg");
	this.shape_20.setTransform(13.4,80.8,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AgCgCIAFAAIAAAGIgFgGg");
	this.shape_21.setTransform(23.4,63.6,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AACAXQgOgDgIgIQgHgHgCgKQgCgKAEgKQAkAXAWAbIgLABQgIAAgKgDg");
	this.shape_22.setTransform(22.3,62.7,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AgPAVIgCgDIAAAAQgGgQAKgNQAKgQATAGQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgQAUgPAQIAAABIgBAAIgDgCgAgIgFQgFAIAAAJQAMgMALgPIgBAAQgKAAgHAKg");
	this.shape_23.setTransform(21.6,73.8,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgJgJQALgPAQAIQgPASgQASQgJgPANgOg");
	this.shape_24.setTransform(21.6,73.8,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AAEAjQgMgLgGgPIAAgBIAAgCIAAgCQgBgNAFgJQAGgKAQgHQACgBABAHQAAAhgJAeIgBACIgBgBgAgFgOQgGAIABANIAAAAQAPAcABgVQACgJABgGIACgYQgLAFgFAGg");
	this.shape_25.setTransform(24.1,68.8,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgMAHQgCgPAHgJQAGgIAPgGQAAAfgKAgQgNgKgDgPg");
	this.shape_26.setTransform(24.1,68.8,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DF5623").s().p("ABjRQQh+hBgMiVQgGhGBNgrQAogWAogHIAZgVQAegaAWgdQBGheglhZQgUgvg/gkQgkgUhgglQhdgkgtgbQhIgrgig5QhEh0BbiiQAuhSA8g6QBrhzgBiCQgBiIh3hjQhohXg8hGIgng0QgSgfgNgoQgbhSAXgyQgOA6BDBcQBHBiCTBzQCNBwATCIQAQB5hVBlIhJBLQg7A7ghAwQhpCXBOCGQAgA4BDAhQAeAQBjAgQBVAbAtAeQBDAtAjBMQAiBLhEBfQgaAjhaBWQgiACggAUQhAApAHBeQADA8BGA3QA8AuAegBQATgBgJghQgQg1ACgcQADgrAWgcIAwg/IAqg5QAZggARgbQgpBJhFBTQgiAqAAA9QgBA3AZAsQAQAcggAEIgJABQgdAAgogVgAFrJfQALg7gQg6QgWhTg6g2QgngmhOgmQhegugZgRQg8gqgag8QgnhdBgiDQAxhDBDg7QAkgjAkg/QAuhfgrh+QgjhohQhbQhkhqgug1QgkgqgVghQAgAuBHBDQCJCCBCCOQBMCig5BsQgbAxg/BEIhnBwQgzA/gOAxQgSA/AkA8QAgA4B2A6QCFBAAsAyQBTBagLByQgCAVgFAVQgJA1gdA1IgMAVQAlhDANg8gAiOweIgFgCIAIADQACAAgBAHQAAAHACAKQgFgNgBgMg");
	this.shape_27.setTransform(15.5,45.5,0.4,0.4);

	this.instance_1 = new lib.inky_19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22,79.4,0.4,0.4,0,0,0,20.4,27.9);
	this.instance_1.alpha = 0.699;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7AE31").s().p("AgQAPQgDgGABgHQABgHAFgHQAGgIAIgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAABABQAIADADAGQAGAKgIAJQgKAMgIABIgCAAQgHAAgEgHg");
	this.shape_28.setTransform(18.7,34.1,0.4,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7AE31").s().p("AgBAIQgGgCABgIIABgBQABgEAEAAQACAAADAEQADAEgBADQgBAEgEAAIgDAAg");
	this.shape_29.setTransform(27.2,66.1,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7AE31").s().p("AgIAAIAAAAQgDgFAEgBQADgCAFADQAGACACADQACADgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAIgBAAQgFAAgHgIg");
	this.shape_30.setTransform(25.8,59.5,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7AE31").s().p("AgHAAIgBAAQgDgEAEgCQADgBAFACQAGACACADQACADgBACQgCACgDABIgCAAQgEAAgGgIg");
	this.shape_31.setTransform(14,53.1,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7AE31").s().p("AgRACIgBgCQgJgIAHgFQAFgEAOAEQANAEAIAIQAFAFgCAFQgBAFgGACIgFAAQgMAAgQgOg");
	this.shape_32.setTransform(17.8,57.4,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7AE31").s().p("AABANQgJgCgDgOIABgBQgBgIAHAAQAEAAAGAGQAGAGAAAFQAAAFgEACIgFABIgCAAg");
	this.shape_33.setTransform(9.9,50.7,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7AE31").s().p("AgEAVQgHgBgEgFQgIgLARgSIADgBQAIgIAJAFQAGAEgBAMQgCAMgIAHQgFAEgFAAIgDAAg");
	this.shape_34.setTransform(11.9,46,0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7AE31").s().p("AgBAOQgGAAgEgFQgEgFAAgEQgBgMASgCIACABQAJAAADAJQACAFgGAHQgGAHgGAAIgBgBg");
	this.shape_35.setTransform(16.6,37.4,0.4,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7AE31").s().p("AgHAYQgJgCgFgJQgEgIACgGQAEgRAUgEIAIgBIADACQAKAFADAKQACAMgOAKQgMAIgHAAIgBAAg");
	this.shape_36.setTransform(12.6,37.4,0.4,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7AE31").s().p("AgHALQgHgFgDgGQgCgGADgEQADgFAIABQAEABABACQAIADAEAEQAGAEAAAHQAAAHgJABIgDAAQgGAAgHgEg");
	this.shape_37.setTransform(10.2,10.3,0.4,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A74A20").s().p("AAfQsQg4gngYghQg9hWAShZQAUhlB7gNQAOgBAcggQAUgWAKgRQA4hPgXhSQgYhXhogpQhpglg1gWQhfgngngxQhZhwAriFQAfheBwiFQACgCACAGQADAFgCACQh/CWgYB2QgiCsC9BUQAaALBgAkQBLAdArAXQBCAjAVBAQASA3gVBAQgJAeghAwQgnA7gcADQhNAIglA2QghAwAKBFQAJBDAuAzQAxA4BIALQAXADgDhNQgIhSABgIQABgWAOgVQAEgHAbgfQCKilADibQAFi8jShlQhdgugzg0QAvArBkA2QB8BDAtAvQBdBhguCYQghBshhB+QglAwgFBIQgCAkAJBdQABAJgDAEQgDADgIAGQgJAFgNAAQgeAAgxghgAhFhlQAZgiAqgwIBFhQQBVhlAOhaQAQhjg/hwQgqhJhvhyQh2h2gohAQgPgZAGgXIAIgSQgEAXAHATQADAKAEAFQAgAqAyA0IBZBaQBrBwA6B+QBLCmhGBeQgSAYhJBNQhGBMgjAvQhYB4AcBTQgjhQBAhXg");
	this.shape_38.setTransform(17.7,46.9,0.4,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A74A20").s().p("AA1FdQgCgGABgCQBLheAYhNQAghog1hWQgdgwg5g2QhDg8ghggQg7g4gZgdQgXgcgDgPIgCgJIAOAXQAjAwB9BxQBrBfAiBJQAnBUggBkQgaBQhGBWIgCABQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_39.setTransform(8.9,22.3,0.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EB6E2D").s().p("ABbRfQg3gggkgvQgqg4AAg9QgBhaBLgpQAngVAmgDIAagWQAfgdAVgfQBGhkgqhWQgYgvg9giQglgVhYggQhZgggpgWQhFglgjgzQhGhmAxh9QAihWBph7QBviBgCh7QgCh9h5hnQhjhUg7g+IgmgsQhHiZAdhCQAJgVASgJQAKgFAHgBQA0gdBEA/QAiAfAYAmIgCAGQAAAJAIAQQAYAyBiBlQCJCNA/CFQBOChg4BrQgtA+hEBNQhNBXgPATQgnA1gMAnQgOAwASAyQARAxAoAhQAcAWA+AeQBMAkAdATQA/AmAtAzQBcBqg9CoQgvCAhuB1QgdAfACA5QACA0AZAzQAQAhgiABIgBAAQggAAgxgcg");
	this.shape_40.setTransform(15.6,44.7,0.4,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A74A20").s().p("AgWAgQgWgWAVgWQAWgXAfAEQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABABIABADIAAAAIgBABQgrAtgKAMIAAAAIgCAAgAgGgRQgVAKgCAQQgBATALgIQAFgEAHgIIAggiQgRAAgOAJg");
	this.shape_41.setTransform(10.3,36.9,0.4,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8B430").s().p("AgUgKQAWgXAeAFIgLAMQgaAagQAUQgWgRAXgXg");
	this.shape_42.setTransform(10.3,36.8,0.4,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A74A20").s().p("AgGAgQgWgTAIgZQAIgaAhAKQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAAIAAACIAAABQgUAWgIAfIgBABIAAAAgAgLgSQgHAJAEASQAEAUAHgRQAGgSAOgSIgLgBQgKAAgHAHg");
	this.shape_43.setTransform(5,46.3,0.4,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8B430").s().p("AgRgLQALgZAdALQgVAXgIAfQgXgQAMgYg");
	this.shape_44.setTransform(5,46.3,0.4,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A74A20").s().p("AgMAhQgVgUAMgYQAMgaAgAFIAAAAQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABIABABIAAABQgXAdgOAgIAAAAIgCgBgAgFgUQgOAKgCANQAIAgAGgVIAIgOIASgbQgNAAgLAHg");
	this.shape_45.setTransform(8.1,39.7,0.4,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8B430").s().p("AgRgLQARgYAZAGQgWAbgOAhQgXgTARgXg");
	this.shape_46.setTransform(8.1,39.7,0.4,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A74A20").s().p("AAPAZQgWgHgGgNQgGgMALgQIACAAIADADQAHAWAMAUQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAgAAFARQAGgFgIgHIgIgUQgQAYAaAIg");
	this.shape_47.setTransform(5.3,52.1,0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F8B430").s().p("AgMAFQgDgFADgIQACgHAFgGQAHAYAMATQgUgEgGgNg");
	this.shape_48.setTransform(5.3,52.1,0.4,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A74A20").s().p("AgcAKIAAgCQgHgsApgYQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIABACQAXA5gCA8IgBABQgtgMgMgngAgCguQgIAGgCADQgQAVADAaIAAAAQAJAdAWAKQAMAFAEgCQAEgCAAgKQAAgggHgZQgEgTgGgNQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgDAAgGAFg");
	this.shape_49.setTransform(14.6,25,0.4,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8B430").s().p("AgaAKQgEgUAJgSQAJgTAUgKQAXA4gDA7QgsgKgKgmg");
	this.shape_50.setTransform(14.6,25,0.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A74A20").s().p("AgFAxQgbgZAIggQAIgjAngGQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABADQgHAugXAvIgBABIAAAAIgBgBgAgTgHQgKAcAXAWQAUgrAHgqQgeAHgKAcg");
	this.shape_51.setTransform(14.6,29.9,0.4,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8B430").s().p("AgVgIQALgiAjgEQgGAugXAvQgbgWAKghg");
	this.shape_52.setTransform(14.6,29.9,0.4,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A74A20").s().p("AgTAdQgLgXAJgRQAPgVAcAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIABAEQgSAbgXAfIAAABIgEgEgAAEgVQgPAIgGAHIAAABQgNAPARAKIAaglQAFgHgEAAQgDAAgHADg");
	this.shape_53.setTransform(13.1,33.6,0.4,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8B430").s().p("AgSgIQAFgJAMgGQANgHANABQgSAegXAdQgNgWALgQg");
	this.shape_54.setTransform(13.1,33.6,0.4,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A74A20").s().p("AgKAOQgXgOALgTIABAAQAUAMAZAKIAAAAIACABIAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAIAAAAIAAABQgIALgMAAQgHAAgJgGgAgNACQgCAIANACQAJABAFgBQAFgCAEgDQgVgIgNgHQADACgDAIg");
	this.shape_55.setTransform(12.2,58.2,0.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F8B430").s().p("AgIANQgZgMANgRQAXAQAXAGQgGALgMAAQgIAAgIgEg");
	this.shape_56.setTransform(12.1,58.2,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A74A20").s().p("AgKAgIAAAAQgWgUALgUQAMgWAfgCQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgSAbgPAhIgBAAIAAAAIgCgBgAACgWQgJAEgGAIQgPAVARAPQAOgfANgTIgFgBQgFAAgEADg");
	this.shape_57.setTransform(6.1,42.8,0.4,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B430").s().p("AgSgHQAMgXAeABQgTAbgOAgQgWgPANgWg");
	this.shape_58.setTransform(6.1,42.8,0.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A74A20").s().p("AgJASIgBgBQgVgPAEgUQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAXAQAbALIADACQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQgLAHgMAAQgGAAgHgCgAgKAMIAAAAQAKADAKgBQANgBgOgHQgJgEgHgEQgHgFgCAAQgFAAALATg");
	this.shape_59.setTransform(9.6,56.7,0.4,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8B430").s().p("AgJAOQgIgEgFgKQgFgJADgHQAYAQAbAKQgMAHgKAAQgHAAgHgDg");
	this.shape_60.setTransform(9.6,56.8,0.4,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A74A20").s().p("AALAeQgQgHgGgSIAAgBIgBAAQAAgLAEgIQAFgIAMgGQACgBAAAFQgDAaAFAbQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAAAAAIgBAAgAAEgUQgOAJACAQQADAIAFAFQAIAGgBgNIAAgPQACgRgDAAIgCABg");
	this.shape_61.setTransform(4.4,49,0.4,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8B430").s().p("AgKAEQgEgTAYgLQgDAaAEAbQgRgFgEgSg");
	this.shape_62.setTransform(4.4,49,0.4,0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A74A20").s().p("AABAWQgGgCgHgIIgCgCQgKgSAEgNQAAgBABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAUAWASAQIABACQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgLABIgJgBgAgMAHQAGAIAHABQAFACAJgBIgVgTIgGgIg");
	this.shape_63.setTransform(7.3,54.7,0.4,0.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8B430").s().p("AgMAJQgLgSAGgKQASAWAUAQIgKABQgQAAgHgLg");
	this.shape_64.setTransform(7.3,54.7,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_7_1, new cjs.Rectangle(0.7,-1.2,30.1,92.2), null);


(lib.inky_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.inky_32();
	this.instance.parent = this;
	this.instance.setTransform(20.5,49.5,0.4,0.4,0,0,0,16.4,18.2);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A74A20").s().p("AgEAaQgPgRADgOQADgSAZgEQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABIAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAABQgHAYgKAXIgBABIgDgCgAgCgNQgRALARAPIALgfQgJADgCACg");
	this.shape_1.setTransform(29.3,70.2,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8B430").s().p("AgNgCQABgHAJgHQAIgGAKgBQgGAXgLAYQgOgOADgMg");
	this.shape_2.setTransform(29.3,70.2,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74A20").s().p("AASAjQgagHgIgWQgHgTALgUIABgBQABAAAAAAQAAAAABABQAAAAABAAQAAABAAABQAUAdAHAiIAAADIgBAAgAAMAWIgCgIQgHgVgLgRQgRAYAlAWg");
	this.shape_3.setTransform(29.7,64.3,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B430").s().p("AgLAJQgMgQAPgXIAFAHQAPAYAFAeQgQgCgMgUg");
	this.shape_4.setTransform(29.7,64.3,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A74A20").s().p("AgYARIgBgEQAAgSAOgJQAPgKATANQAFADgCADIgRAQIAAABQgJABgUAGIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBgAgIgHQgJAHgCAKIAXgGIAOgNQgHgDgGAAQgGAAgHAFg");
	this.shape_5.setTransform(26,74.1,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B430").s().p("AgOgHQAHgHALAAQAMgBAHAHIgQAQQgMACgRAGQgCgPAKgIg");
	this.shape_6.setTransform(26,74.1,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A74A20").s().p("AgQANQgQgQALgUQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABIABABIABABIACACQAPATAWAPIACADQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgKAEgJAAQgNAAgKgMgAgJAJQAKAMAQgGQgSgOgOgQQgGANAMALg");
	this.shape_7.setTransform(23.4,86,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B430").s().p("AgFATQgNgGgDgMQgEgKAIgLQARAWAXAPQgIAEgIAAQgHAAgFgCg");
	this.shape_8.setTransform(23.4,86,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgIAQIgBAAQgXgMgCgRQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIBAAQQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgSAKgPAAIgJgBgAgVAAQACAEAJAEIAAAAQAOADARgHIgegGIgIgCQgFAAABAEg");
	this.shape_9.setTransform(20.1,58.9,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgJALQgJgDgHgHQgHgGABgHIA/APQgRAKgNAAQgGAAgFgCg");
	this.shape_10.setTransform(20.1,58.9,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AgOAZIgCgCQgQgQAKgUIABgBQAJgJALgBQAIgBAPAEQABAAAAAAQABAAAAABQAAAAABABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQgYAPgOAYIgBAAIgBAAgAgQgIQgDAIABAGQABAIAJgKIAKgLIANgKIgGAAQgNAAgMAJg");
	this.shape_11.setTransform(22.3,76.6,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgXAGQAAgJAFgHQALgRAfAKQgZAQgOAXQgIgFAAgLg");
	this.shape_12.setTransform(22.3,76.6,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgCAUIgBAAQgZgKgHgbQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAiAJAfALIAEAEQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQgLAHgHADQgHADgJAAIgDgBgAgEANQAJABAJgEIALgFIgbgJIgUgGQAAARASAGg");
	this.shape_13.setTransform(24,60.1,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AgDAQQgKgCgJgLQgIgJgCgKQAqAMAXAIQgSANgNAAIgFgBg");
	this.shape_14.setTransform(24,60.1,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgIAQIgBAAQgagPAGgTQAAAAAAgBQABAAAAAAQAAAAABAAQAAABABAAQAYAPAcAJIAEADQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBAAQgLAHgIABIgDAAQgIAAgIgEgAgLAKQALADAHgBIALgDIgRgHIgRgJg");
	this.shape_15.setTransform(26.4,88.3,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgKAMQgKgEgEgIQgFgIADgHQAZAPAdAIQgLAHgHABIgEAAQgHAAgJgEg");
	this.shape_16.setTransform(26.4,88.3,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AgVANIAAgBIgCgCQgJgXAZgRQACgBADAGQAGAZAVAaQADAFgDAAIgEAAQgbAAgPgSgAgSAKQAMAOAYAAQgRgXgGgWQgUAOAHARg");
	this.shape_17.setTransform(21.3,83.4,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgUAKQgFgIAFgLQAFgNAKgFQAGAbAWAbIgIABQgYAAgLgSg");
	this.shape_18.setTransform(21.3,83.4,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AAPAiQgegLgEgZQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAEgXAegGQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIABAEQgIAaAEAfQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIAAAAgAgOABQADAKALAHQALAJgBgQQgBgIABgHQABgLACgJQgWAHgFASg");
	this.shape_19.setTransform(20.4,80.5,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgQAAQgBgJALgKQALgJANgBQgKAZAFAiQgdgIAAgWg");
	this.shape_20.setTransform(20.4,80.5,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AgSASIgBgBIgBAAQgQgRADgZQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAkASAbAaIACADQABABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgJACgJAAQgRAAgQgJgAgTALQAUAMAYgFQgQgPgNgHIgSgKg");
	this.shape_21.setTransform(27.5,61.5,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AAEAXQgOgDgJgGQgIgHgDgJQgDgKADgKQAmASAYAZQgIACgJAAIgLAAg");
	this.shape_22.setTransform(27.5,61.5,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AgDADIADgFIAEAFIgHAAg");
	this.shape_23.setTransform(28.4,71.9,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgKgIQAKgQAQAGQgNAVgOASQgJgNAKgQg");
	this.shape_24.setTransform(27.9,72.7,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AAIAkQgOgLgGgPIgBgDQgCgOAFgJQAFgKAPgJQACgBACAHQADAfgGAhIgCABIgBAAgAgFgLQgGAIADANQASAYgCgUQACgHAAgIIgBgYQgKAGgEAIg");
	this.shape_25.setTransform(29.9,67.4,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgKAJQgEgPAGgJQAFgJAOgHQAEAegHAhQgNgHgFgQg");
	this.shape_26.setTransform(29.8,67.4,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DF5623").s().p("ADrQ3QiFg0gbiTQgNhFBKgzQAkgZAogMIAXgXQAbgdATggQA8hkguhUQgYgthDgdQglgRhjgbQhggbgwgWQhNgjgng2QhQhsBLirQAXg2Akg1QASgbAOgQQBfh9gPiBQgOiFiBhZQhrhKg2gvIghgfQgagkgXguQgvhdALg3IABABQgFA5BKBSQBQBaCdBkQCZBiAfCEQAdB4hKBtIhCBSQg0BBgcAzQhZCgBaB+QAmA0BGAbQAgAMBlAWQBYATAwAZQBHAlAqBIQApBIg5BlQgWAmhRBeQgiAFgeAYQg9AvAQBdQALA7BLAwQBBAoAdgFQATgDgNgfQgVgzAAgcQgBgrASgeIAphEQAvhGAbg6QghBPg+BcQgeAsAGA9QAFA3AeApQASAagfAIQgJACgJAAQgaAAgkgOgAHAIwQAFg9gWg5QgehRg/gwQgrghhSgeQhigkgbgPQhBgjgeg6QgwhYBSiMQAqhIA8hBQAhgnAdhDQAkhjg3h5QguhjhZhTQhuhggzgvQgqgogZghQAkAsBRA+QCVB0BRCGQBbCagtBxQgWAzg4BKIhbB6QgtBEgJAyQgLBAAoA5QAnA0B8AuQCKAyAxAtQBbBSACByQAAAWgDAXQgEA0gYA3IgIASQAchDAIg6gAjfwTIAEAAQABAAAAAHQABAJAFALQgIgPgDgMgAm/w/IABgFIDfAwIAAABgAm/w/g");
	this.shape_27.setTransform(18,45.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A74A20").s().p("AB/GxQgDgFACgCQBBhlAQhQQAVhqg+hSQghgsg+gvQhJg1gkgdIgwgiQgdgVgagcIgPgTIgMgSQgJgQgIgTIgRgrQgHgTgEgUQgEgUAAgOQAAgLACgQQABgKADgGIACgGIgBAGQgCAHgBAJQAAAQACAKIAHAhQAEAQAJAXQADAJAGALIAKAWIAXArIATAeQAfAfCJBmQBrBNApBFQBVCQiLDVIgCACQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAgBg");
	this.shape_28.setTransform(8.5,19.1,0.4,0.4);

	this.instance_1 = new lib.inky_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,77.9,0.4,0.4,0,0,0,18.9,28.5);
	this.instance_1.alpha = 0.699;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7AE31").s().p("AgOARQgEgGAAgHQAAgIAEgHQAFgJAJgCQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAHACAEAGQAHAKgGAJQgJAOgIABIgDABQgGAAgEgGg");
	this.shape_29.setTransform(21,33.4,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7AE31").s().p("AAAAIQgHgCAAgIIABgBQABgEAEAAQACAAAEAEQADADgBADQAAADgDABIgDABIgBAAg");
	this.shape_30.setTransform(32.7,64.5,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7AE31").s().p("AgIABIAAgBQgDgEADgCQADgBAFACQAGABADAEQACACgBACQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDAAQgEAAgHgGg");
	this.shape_31.setTransform(30.6,58,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7AE31").s().p("AgHAAIgBAAQgDgEADgCQADgBAFABQAGACADAEQAEAEgHADIgDAAQgEAAgGgHg");
	this.shape_32.setTransform(18.3,52.9,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7AE31").s().p("AgRADIgBgCQgJgHAGgFQAFgEAOACQAOACAIAHQAGAFgCAFQgBAFgGACQgDACgEAAQgLAAgQgMg");
	this.shape_33.setTransform(22.4,56.8,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7AE31").s().p("AACANQgJgCgEgNIAAgBQgBgHAGgCQAFgBAGAGQAHAGAAAFQABAEgEADQgCACgEAAIgBAAg");
	this.shape_34.setTransform(13.9,50.9,0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7AE31").s().p("AgNARQgFgGACgJQACgHAHgIIACgBQAHgKAKAFQAGADAAANQAAALgIAIQgFAGgHAAQgHgBgEgEg");
	this.shape_35.setTransform(15.5,45.9,0.4,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7AE31").s().p("AgKAKQgEgEgBgFQgCgLARgEIACABQAKgBADAIQADAGgFAGQgFAIgIAAIAAABQgGAAgEgFg");
	this.shape_36.setTransform(19.3,37,0.4,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7AE31").s().p("AgFAYQgJAAgGgJQgFgHABgIQADgQAUgGIAIgBIADABQALAEADAKQADALgMAMQgLAJgHAAIgCAAg");
	this.shape_37.setTransform(15.2,37.4,0.4,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7AE31").s().p("AgFALQgIgEgDgGQgDgGACgEQACgFAJABQAEAAACACQAGABAGAEQAHAFAAAFQABAIgJABIgGABQgFAAgFgDg");
	this.shape_38.setTransform(10.2,10.7,0.4,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A74A20").s().p("ABvQeQg9ghgageQhFhQAJhaQAKhmB5gZQAWgFArhKQAuhUgehPQghhVhrgfQhsgZg4gRQhhgdgtgtQhkhnAeiJQAVhhBiiPQABgBADAFQADAFgBACQhvCigMB4QgQCvDEBAQAbAIBjAbQBNAUAuATQBFAcAbA9QAYA2gOBCQgHAegbAzQgiA/gbAGQhNAQgeA5QgcA0AQBDQARBBAyAvQA3AyBIAEQAYABgLhMQgQhRAAgJQgCgVANgXIAagoQB5iygMibQgPi8jahPQhjglg5gwQAzAnBrAtQCCA2AyAqQBmBXgeCdQgWBuhUCHQggAzADBJQABAkASBcQACAIgDAFIgJAJQgKAJgRAAQgdAAgwgbgAhqhiQAVgkAlg0IA9hXQBKhuAFhaQAGhkhKhqQgwhEh7hlQiBhqgug8QgSgXADgYIAHgTQgCAYAIASQAEAKAFAEQAkAnA3AvIBiBQQB3BlBFB3QBcCeg9BlQgPAZhBBUQg+BSgeAzQhMCCAlBPQgshMA4heg");
	this.shape_39.setTransform(22.4,46.5,0.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EB6E2D").s().p("ADlRLQg6gagpgrQgwg0gHg9QgKhZBIgxQAkgYAmgHIAYgZQAbggATghQA7hqgzhRQgcgthAgcQgogRhagXQhdgXgqgRQhIgegogvQhQhfAkiCQAZhYBciFQBiiMgPh6QgPh8iChaQhrhKhBg3IgrgpQhWiQAXhFQAHgWARgLQAIgGAHgBQAxgjBLA4QAlAcAbAjIgBAGQAAAJAKAPQAeAwBrBaQCWB/BNB+QBdCZgtBvQgnBDg7BTQhEBfgMAUQgjA4gIAoQgJAxAXAwQAVAvAtAdQAeATBAAXQBPAdAgAPQBBAgAzAvQBmBfgsCuQghCEhiCAQgaAhAJA5QAHAzAdAwQAUAggiAEIgJABQgfAAgsgUg");
	this.shape_40.setTransform(18,44.5,0.4,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A74A20").s().p("AgSAiQgYgUATgYQATgYAgAAIABABIACACIABAAIAAACQglAvgKAQIgBABIgCgBgAgHgRQgUANAAAQQABASAJgIQAFgEAGgKIAdgkQgQACgOAJg");
	this.shape_41.setTransform(12.9,37.1,0.4,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8B430").s().p("AgUgIQAUgZAeACIgKANQgVAagQAYQgXgPAUgZg");
	this.shape_42.setTransform(12.9,37.1,0.4,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A74A20").s().p("AgCAgQgYgQAGgZQAFgcAiAHQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAABIAAABQgSAZgFAgIAAABIgBgBgAgMgQQgGAJAGASQAFATAGgSQAFgTALgTIgFAAQgPAAgHAKg");
	this.shape_43.setTransform(8.6,47,0.4,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8B430").s().p("AgSgJQAKgaAdAIQgTAZgEAgQgZgPAJgYg");
	this.shape_44.setTransform(8.5,47,0.4,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A74A20").s().p("AgIAiQgWgRAJgZQAJgbAhABIAAAAIACABIAAABIABABIABACIgBAAIAAAAQgTAggLAgIAAAAIgCgBgAgGgTQgNALgBANQALAeAFgUIAGgPQAHgPAIgNQgNABgKAIg");
	this.shape_45.setTransform(11,40.1,0.4,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8B430").s().p("AgRgIQAOgaAaADQgVAhgJAfQgZgQAPgZg");
	this.shape_46.setTransform(10.9,40.1,0.4,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A74A20").s().p("AARAXQgXgEgHgMQgIgMAKgRIABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABAAIAAACQAJATAOAUIABABIgBABIAAAAgAAGARQAFgGgIgGIgLgUQgNAaAbAGg");
	this.shape_47.setTransform(9.6,52.7,0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F8B430").s().p("AgMAHQgEgFACgHQABgJAFgGQAIAUAQAVQgVgCgHgMg");
	this.shape_48.setTransform(9.6,52.7,0.4,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A74A20").s().p("AgdAOIAAAAQABABABABQAAABABAAQAAAAABAAQAAgBAAAAQALAaAWAHQAMAEAFgCQAEgCgBgLQgFgigIgWQgHgTgGgLQgCgFgJAJQgIAHgBADQgOAZAHAYIAAABIgBgCIgCgCQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAABABIgBgBQgLgsAngcIADADQAdA4ADA6QAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgtgHgQgngAgZAQIAAAAg");
	this.shape_49.setTransform(16.1,24.7,0.4,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8B430").s().p("AgcAOQgGgSAIgUQAHgUATgMQAcA1ADA8QgtgGgOglg");
	this.shape_50.setTransform(16.1,24.7,0.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A74A20").s().p("AADAzIgCgBQgcgWAFghQAEgjAmgKQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABABIABADQgCAtgSAyIgBABIAAAAgAgRgEQgIAdAZAUQAQgtADgrQgdAKgHAdg");
	this.shape_51.setTransform(16.5,29.7,0.4,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8B430").s().p("AgUgEQAHgkAjgHQgCAvgTAwQgbgTAGghg");
	this.shape_52.setTransform(16.5,29.7,0.4,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A74A20").s().p("AgPAgQgOgVAIgTQANgXAcgCQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQgPAfgUAfIAAAAIgEgCgAADgVQgOAKgFAHIgBABQgMARATAHIAWgmQAEgIgDAAQgDAAgHAEg");
	this.shape_53.setTransform(15.4,33.5,0.4,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8B430").s().p("AgSgFQADgKANgHQAMgJAMAAQgPAggUAfQgOgVAJgQg");
	this.shape_54.setTransform(15.4,33.5,0.4,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A74A20").s().p("AgIAOQgZgMAJgTIACAAQAYALAXAGIgBAAIgDAEQgVgFgNgHQADACgCAJQgBAIANAAQAOABAHgIIAFABIABAAQgIANgNAAQgGAAgIgEgAAaABIgBgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIgBgBgAAZAAIAAAAIAAAAgAAZAAIAAAAIAAAAg");
	this.shape_55.setTransform(16.9,58.1,0.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F8B430").s().p("AgHANQgagJAMgSQAVALAaAFQgFANgOAAQgHAAgHgCg");
	this.shape_56.setTransform(16.9,58.1,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A74A20").s().p("AgDAiIgCAAQgZgRAKgWQAJgXAfgFQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgQAegKAhIgBAAIAAAAgAABgVQgIAFgGAIQgMAWASAPQAKghAMgVIgEAAQgFAAgFAEg");
	this.shape_57.setTransform(9.3,43.4,0.4,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B430").s().p("AgSgEQAKgYAegDQgOAYgNAnQgXgNAKgXg");
	this.shape_58.setTransform(9.3,43.4,0.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A74A20").s().p("AgHARIgBAAQgXgNADgUQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAZANAcAIIADACQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgKAHgHACIgIAAIgLgBgAgJALIAAAAQAJADAMgDQANgCgPgFIgRgHQgHgEgDAAQgGAAAOASg");
	this.shape_59.setTransform(14.3,57,0.4,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8B430").s().p("AgIAOQgIgDgGgKQgHgJADgHQAZAOAdAHQgNAKgMAAQgFAAgGgCg");
	this.shape_60.setTransform(14.3,57,0.4,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A74A20").s().p("AANAeQgRgFgIgRIAAgCQgEgVAUgOQACgBACAFQgBAZAHAcIgBACIAAAAgAABgTQgNAKADAQQAEAIAGAEQAIAFgCgMIgCgQQABgQgEAAIgBABg");
	this.shape_61.setTransform(8.3,49.7,0.4,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8B430").s().p("AgLAGQgGgSAXgOQgBAcAIAZQgSgEgGgRg");
	this.shape_62.setTransform(8.3,49.7,0.4,0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A74A20").s().p("AADAVQgHgCgIgHIAAAAIgBgBQgMgRADgNQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAVATAUAOQAFAFgDAAQgIACgHAAIgFAAgAgLAJQAHAGAHABIAMgBIgVgRIgHgHg");
	this.shape_63.setTransform(11.8,55.2,0.4,0.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8B430").s().p("AgLAKQgOgRAFgLQATASAXAQQgIADgHAAQgLAAgHgJg");
	this.shape_64.setTransform(11.7,55.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_6_1, new cjs.Rectangle(-0.2,-0.2,36.6,89.9), null);


(lib.inky_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.inky_35();
	this.instance.parent = this;
	this.instance.setTransform(17.6,53.4,0.4,0.4,0,0,0,11.8,21.3);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A74A20").s().p("AAPAXQgUgTgOgQIgBgBQgBgBACgEIAAgCIACgBQAYgGAKAOQAIANgHAUIgBACIgBACIgBgBgAgLgOQALANAMAKQAJgTgVgEIgFAAIgGAAg");
	this.shape_1.setTransform(16.3,75.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8B430").s().p("AgTgQQAKgEAKADQAKACAFAGQAIALgIASQgTgSgQgSg");
	this.shape_2.setTransform(16.3,75.5,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74A20").s().p("AgIAlIAAgBQgHgkAGgiQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIABAAQASAOABAWQACAWgVAQIgBABIgBgBgAgHAPIABAIQAYgigYgQQgEAVADAVg");
	this.shape_3.setTransform(13.8,70.3,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B430").s().p("AgJgZIACgIQAWAQgEASQgEAYgOAJQgGgfAEgcg");
	this.shape_4.setTransform(13.9,70.3,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A74A20").s().p("AgEAQIgWgJQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgEQAMgSASADQARADAHAQIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQgTACgJADIgBAAgAgUAAIASAIIAAAAIAXgEQgGgIgLgDIgGgBQgKAAgIAIg");
	this.shape_5.setTransform(21,77.6,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B430").s().p("AgZADQAEgIALgEQAKgFAJAEQANAEAEANQgLABgLADIgHACg");
	this.shape_6.setTransform(21,77.6,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A74A20").s().p("AgSAbIABgDQANgWAHgZIABgCIAAAAIABgDQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQASAOgHAWQgIAXgbAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBABgBgAgLAWQAPgCAGgPQAGgOgKgKQgGAUgLAVg");
	this.shape_7.setTransform(28.3,87.5,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B430").s().p("AgRAaQAPgYAHgbQALAHABALQACAMgJAKQgJALgPAAIgDAAg");
	this.shape_8.setTransform(28.3,87.5,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A74A20").s().p("AgaAYQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAAAAIAzgoQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABABIABABQAFASgQASIgBABIAAAAQgNAKgSAAIgLgBgAAJgCIgYASQARABANgKQAGgHAAgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgDAAgGAFg");
	this.shape_9.setTransform(20.3,61.2,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B430").s().p("AgaAUIAzgoQAEAHgDAJQgEAIgHAHQgKAKgTAAIgMgBg");
	this.shape_10.setTransform(20.3,61.2,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AAYAVQgXgQgcgFQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAMgJAJgDQAJgDAMAEIABAAIAAAAQASAQgIAUIgBACIgBABIgBAAgAgSgGIAQAFIAOAFQANAGgDgIQgCgHgGgFQgHgCgGAAQgKAAgJAGg");
	this.shape_11.setTransform(25.3,78.4,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B430").s().p("AgbgCQAKgJAKgEQAMgFAKAGQAHAFAEAJQAEAJgFAJQgWgRgegDg");
	this.shape_12.setTransform(25.3,78.4,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A74A20").s().p("AgaAaQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAZgXAagWQACgCAAAFQAFAbgRASIgCABQgJAGgKAAQgHAAgNgCgAADAAIgVATIAMABQAIAAAKgGQANgLgHgPg");
	this.shape_13.setTransform(17.1,63.9,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B430").s().p("AgZAVQAUgUAegYQADAKgEAMQgDAMgIAHQgIAGgMAAQgIAAgKgDg");
	this.shape_14.setTransform(17.1,63.9,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A74A20").s().p("AgXAaQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAABgBQAVgTARgXIACgBQANAQgRAVIgBACQgIAJgIACQgGABgHAAIgIAAgAAAAFIgNANQAHAAAFgBQAHgCAIgIIgCgRQgHAJgFAGg");
	this.shape_15.setTransform(26.3,90.8,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B430").s().p("AgWAWQAXgVAQgXQAGAGgBAKQgBAIgHAIQgIAJgJACIgJACIgKgBg");
	this.shape_16.setTransform(26.3,90.8,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A74A20").s().p("AgSAeQAIghgEgZQABgHACABQAcAEACAbIAAADQgHAYgcALIgBAAQgBAAAAgFgAgNAaQAXgKAFgSQgCgSgWgFQACAYgGAbg");
	this.shape_17.setTransform(29.3,84.5,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8B430").s().p("AgMgeQAMABAJAJQAJAJgBAKQgEAWgdAKQAJgigFgbg");
	this.shape_18.setTransform(29.3,84.5,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A74A20").s().p("AAEAfIgBgBQgHgegSgVIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAdgGAOASIABACQAGAZgYAVIAAABIgBgBgAgPgWQAHAJAEAIIAGAOQAFAOAHgMQAIgLgDgJQgJgNgRAAIgIAAg");
	this.shape_19.setTransform(28.5,81.5,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B430").s().p("AgWgYQAMgEANAEQAOADADAJQAFAKgFALQgFAKgLAJQgGgegUgWg");
	this.shape_20.setTransform(28.5,81.5,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A74A20").s().p("AgZAjIAAgFQANggAbghQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQANAWgJAVIAAABIAAAAQgQAXgdAFIAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAgAAAgFQgKAOgIATQAYgGANgTIAAAAIgIgYIgLAQg");
	this.shape_21.setTransform(14.7,66.8,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8B430").s().p("AARggQAGAJABAKQABAKgEAIQgFAKgOAIQgNAIgMACQALggAdghg");
	this.shape_22.setTransform(14.7,66.8,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A74A20").s().p("AAUAUIgBAAQgPgIgZgRQgBAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQASgMANAMQANAKgBAPIAAAFQgBAAAAABQAAABgBAAQAAABAAAAQgBAAAAAAIAAAAgAASAJQgCgJgIgFQgJgJgMAFIgFgEIgCAIIAHgEIAfASIAAAAg");
	this.shape_23.setTransform(18.6,77.1,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8B430").s().p("AgUgJQAMgMAQALQAQAKgDAQQgZgPgQgKg");
	this.shape_24.setTransform(18.7,77.1,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A74A20").s().p("AAJAgQgSgcgKgeIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQASABAIAIQAIAHAEAOIAAABIAAADQgBARgIANIgBABIgBgBgAgEgBIAGANQAIASAGgeIAAAAQgDgMgIgFQgGgFgNgBIAKAWg");
	this.shape_25.setTransform(14.6,73.3,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8B430").s().p("AgSgcQARABAHAGQAKAGACAPQACAQgKANQgSgcgKgdg");
	this.shape_26.setTransform(14.6,73.3,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DF5623").s().p("ACwRnQALgxgRg1QgUg6gtgdQhXg4g7g3QAsAnBCAqQAbAXAmAWQAdAUAQAoQAKAaACA3QABAiASgFQAdgHArg/QAyhJgOg7QgWhchLgTQgXgGgaACIgVAEQhwg3gjgaQhdhFAKhSQAJhTAyg/QAhgqBJg0QBVg9AYgYQA2g0AOhAQAgiWiRhwQgvgkhKgmIhcgxQhxhGgVh5QgYiGBliXQBpiaAkhzQAkhtgfgyQAlAoAABgQAAAwgIAnIgYA2QgkBMhEBvQhSCFAoCBQAmB7CIBNIAuAaQA2AjArAoQCKB+geCDQgOBCg4A+QgkAohOA/QhQBBgcAeQgwA1gEAzQgJBgBfBDQAvAiAyAPIAagBQAfgBAbAGQBYARAQBEQAiCShlBlQglAlggAGIgJAAQgVAAAFgagAhAMnQgsgqgZgvQAhA2A7A3IgXgUgAiZKnQgshoAzhwQAbg9BqhlQBfhcAOg/QAPhEgkg3QgcgrhFgsIiDhKQhSgugogmQhXhVAWiyQAUibBcimQAyhcAPg3QgKAogYA4QgbBAg/CFQgxBvgCBtQgDCFBKBMIAgAcQAmAeAdAPIA1AZQA1AcArAfQCDBfgJBkQgFBBguA7QgTAYhKBJQg/A8gaAvQgmBFAEBXQADA8AcA1QgMgTgIgUgAihvyQgCgGABgBIAIgGIgFAEQADAOgCASQABgOgEgJg");
	this.shape_27.setTransform(14.8,47.2,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A74A20").s().p("AAACDIAGg0QAEgiAAgPIAAgtQAAgQgCgYIgEgSIgEgPQgBgNgHgLQgFgKgDgFIgEgFIAEAFQAGAFAFAIQAIAQADAIQAFANAFAUQADASACAWIgBBgQgCAKgGAQIgLAcg");
	this.shape_28.setTransform(16.5,6.2,0.4,0.4);

	this.instance_1 = new lib.inky_20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.1,83.8,0.4,0.4,0,0,0,24.4,24.4);
	this.instance_1.alpha = 0.699;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7AE31").s().p("AgMANQgKgGADgLQABgHAHgFQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAJgCAIAGQAHAEAEAIQACAGgBAHQgCAJgHABIgEABQgHAAgMgIg");
	this.shape_29.setTransform(9.3,38.4,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7AE31").s().p("AgFAGQgCgDACgEQACgFADgBQADgCACAEIABAAQADAIgFAEIgFACQgCAAgCgDg");
	this.shape_30.setTransform(11,71.6,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7AE31").s().p("AgGAIQgCgCABgDQABgDAFgEQAEgFADABQAEAAgCAGIAAABQgEAKgFAAIgCAAIgDgBg");
	this.shape_31.setTransform(10.3,64.8,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7AE31").s().p("AgGAIQgCgCAAgDQABgEAFgEQAEgEADABQAEAAgBAFIAAABQgEAKgFABIgCAAIgDgBg");
	this.shape_32.setTransform(19.6,55.2,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7AE31").s().p("AgSAQQgDgFADgHQAFgJAMgIQALgIAGACQAIACgFAMIAAACQgOAWgNABQgHAAgDgEg");
	this.shape_33.setTransform(17.3,60.4,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7AE31").s().p("AgDAOQgEgBgCgEQgBgGAEgHQAEgIADgBQAHgBABAHIABABQACAOgJAFIgFABIgBAAg");
	this.shape_34.setTransform(22.8,51.6,0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7AE31").s().p("AgCASQgKgEgFgMQgFgKAEgGQAGgHAMAFIACAAQAJAFAGAHQAFAGgCAHQgCAGgHADIgHABIgGgBg");
	this.shape_35.setTransform(19.4,47.7,0.4,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7AE31").s().p("AgIALQgIgEABgHQAAgHAJgEIACgBQARgEADALQABAFgCAFQgDAGgFACIgGABQgEAAgFgDg");
	this.shape_36.setTransform(12.3,41,0.4,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7AE31").s().p("AgHATQgQgFgBgNQgCgJAJgIQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAEgCIAFAAQATgEAKAPQAEAHgCAIQgCAKgIAEQgEACgFAAQgGAAgHgDg");
	this.shape_37.setTransform(16.2,39.8,0.4,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7AE31").s().p("AgPANQgCgGAFgHQACgFAHgFIAEgEQAIgEAEADQAEADgBAHQAAAHgFAHQgGAGgIACIgEABQgGAAgCgFg");
	this.shape_38.setTransform(10.1,13.3,0.4,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A74A20").s().p("ADERHQgKgDgCgCQgFgDgCgIQgThcgOgiQgahDgygiQiDhbg/hcQhbiDA7h4QAdg7BihmQBShWAfg5QAKgXAGgXQADgMABgMQABhXh4hYQgwgihbgyQhdg0gYgRQhghEAVi1QARiKBFiLIA5hxQAghBARgyQACgGAAgKQAAgVgLgVIAOAPQANAVgHAcQgTBJhLCVQhJCOgRBSQgaB/AtBZQAqBRBwBGIBaA3QA4AiAgAYQBYA/gIBXQgBAbgMAbIgHAQQggBEhPBLQioChA9CyQAzCSC1BzQAiAVAGAFQAVAQAHAUQADAIASBRQAVBKAVgLQBBggAehEQAcg/gLhDQgMhEgugkQgzgohNAQQgcAGg4gsQgugkgRgZQgng3ABg7QAAhCAzg2QAigjBAgzQBPg/AWgTQCaiJhViZQg6hqinhoQgCgBAAgGQABgGACABQCTBcA6BQQBTBygzCGQgXA7hNBCQheBHgoAhQhVBHAEBbQADBUBLA7QBHAzAVgFQB5gaAzBaQAsBPggBmQgMAlgrA3QguA8ghAAIgJgCg");
	this.shape_39.setTransform(14.7,49.9,0.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A74A20").s().p("ABfFlQjUiMAVimQAKhQBJh8QBUiRASg4QACgFACAFQACAEgBACIgFAEIgBABQAAANgDAHQgOAigoBIQguBQgVAnQgmBFgNA1QgXBkA+BZQAuBDBjBBQACACAAAGQgBAEgCAAIgBAAg");
	this.shape_40.setTransform(13.3,24.1,0.4,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB6E2D").s().p("ACtRwQAHg5gNgxQgPg4glgUQiMhOhThrQhviOA4iAQAcg/Avg4QAXgaA9g6QAwgvAUgeQAdgsACgzQACg2gcgpQgYgig2glQiihchshPQhVhUAYiyQAUiSBYixQA+h9AIg4QADgSgDgIIgEgFIAIgbQAMgfAOgaQAuhQA6AMIARAAQAUADAPARQAwA2gVCoIgXA2QgkBMhFBvQhTCGAkB4QAjB2CQBZQCKBVA7BIQBVBogjB2QgSA7g2A4QggAihNA6QhKA5gcAfQgvAzgIA1QgOBeBgBKQAwAlAzASIAYgEQAegCAbAFQBVAQAbBVQASA7gYBCQgTA4grAvQgmArggAJQgGACgGAAQgTAAAEgdg");
	this.shape_41.setTransform(14.9,46.9,0.4,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8B430").s().p("AgWgHIgOgIQAbgPAcAQQAdAOgQAXQgagRgcgNg");
	this.shape_42.setTransform(18.1,38.5,0.4,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A74A20").s().p("AASAdQgRgagbgQIAAgDIAAAAIAAgBIAAgCIABgBQAcgTAQAXQAQAVgPAYIgBABIgBgBgAgUgQQARALAOAQQAMAOgDgUQgDgTgJgFQgFgDgFAAQgIAAgKAGg");
	this.shape_43.setTransform(25.9,45.9,0.4,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8B430").s().p("AgagQQAZgTASAUQATATgSAXQgRgbgbgQg");
	this.shape_44.setTransform(26,45.8,0.4,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A74A20").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(19.8,39.8,0.4,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8B430").s().p("AgegUQAYgNAWARQAYASgQAYQgXgZgfgVg");
	this.shape_46.setTransform(21,40.5,0.4,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A74A20").s().p("AgLAZQAFgYABgVQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAQAMgCAOQgCAOgTANIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAgEAFQgFAIAHAEQAXgQgXgSIgCAWg");
	this.shape_47.setTransform(27.7,51.6,0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F8B430").s().p("AgEgXQAFAEAFAGQAFAIgBAFQgCAMgSAMQAGgYAAgXg");
	this.shape_48.setTransform(27.7,51.6,0.4,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A74A20").s().p("AgLA9QgUg4AEg+QAAgBAAgBQAAgBAAAAQAAAAABgBQAAAAABABQAuAJAIAuIAAABQAAAqgmAYIgBAAIgBgBgAgZgyIABAiQABAYAKAgQADAKAEAAQAFABAJgJQASgPAAgdQgEgbgWgPIgMgGIgJgCQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_49.setTransform(10.5,28.7,0.4,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8B430").s().p("Agag6QAXAEAOAPQAOAOADAWQACAmgnAXQgVg3AEg9g");
	this.shape_50.setTransform(10.5,28.7,0.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A74A20").s().p("AAXArQgigkgWgrIAAgDQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAmgGATAeQARAcgRAgIgBABIgBABIgBgBgAgcgkQAVAmAgAjQAPgdgTgXQgQgVgaAAIgHAAg");
	this.shape_51.setTransform(11.7,33.4,0.4,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8B430").s().p("AgggmQAigIAVAeQAUAcgTAdQglgngTgog");
	this.shape_52.setTransform(11.7,33.3,0.4,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A74A20").s().p("AAbAbQgggWgZgVQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAbgKAVAQIAAAAQAOAPgEAYQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgBAAgAgOgLIAUAQIAQAKQANgPgRgKIgBAAQgGgFgSgDIgIgBQgIAAAJAIg");
	this.shape_53.setTransform(14.3,36.2,0.4,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8B430").s().p("AgdgTQAMgGAPADQANACAHAHQAQANgFAYQghgWgZgVg");
	this.shape_54.setTransform(14.4,36.2,0.4,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A74A20").s().p("AgWASIgBgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAUgQAPgSIACAAQAQAPgSATQgKAMgKAAQgIAAgIgGgAgRAPQAFACAEAAQAGAAAIgEQAMgGgFgHQgFgHACgDQgMANgPAMg");
	this.shape_55.setTransform(22.9,59.4,0.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F8B430").s().p("AgWAOQAVgPAPgTQATANgVARQgLALgJAAQgIAAgGgHg");
	this.shape_56.setTransform(23,59.4,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A74A20").s().p("AAVAcIAAAAQgcgdgWgRIAAgDIACgDQAegJASASQARAQgPAaIgBABIgBAAgAgTgTQASAOAYAaQAGgLgDgJQgDgHgKgIQgIgGgKgBIgEgBQgFAAgFADg");
	this.shape_57.setTransform(23.8,43,0.4,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8B430").s().p("AgcgVQAcgKATASQATARgRAVQgYgbgZgTg");
	this.shape_58.setTransform(23.9,42.9,0.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A74A20").s().p("AgWAXQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDQAWgSASgXIACABQAKASgPAUIgBABQgJAGgIACIgGABIgNgCgAAGgCIgNANQgLALANgDQALgDAHgGQAEgQgCgEIgBgBQgDAAgFAJg");
	this.shape_59.setTransform(24.9,57.2,0.4,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8B430").s().p("AgWAUQAVgQATgZQAGAGgCALQgCAKgGAGQgJAKgOAAQgGAAgHgCg");
	this.shape_60.setTransform(24.9,57.2,0.4,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A74A20").s().p("AAAAdIAAgCQgEgbgLgYQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAYAEAFAVIABACQgBATgOALIAAAAIgBAAgAgIgOIAEAJIAEAOQACANAGgIQAFgHAAgIQgEgRgQgDIgBAAQgCAAACAHg");
	this.shape_61.setTransform(27.4,48.5,0.4,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8B430").s().p("AgOgZQAbADACAUQABARgPALQgDgagMgZg");
	this.shape_62.setTransform(27.4,48.5,0.4,0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A74A20").s().p("AgPAZIAAgDQAOgWAKgZIACgBQAIALgEAUIAAABQgEAKgHAFQgGAEgMACIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBgAADgEIgNAZQAJgCADgDQAHgEADgIIgFgRg");
	this.shape_63.setTransform(26.6,54.6,0.4,0.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8B430").s().p("AAJgYQAJAJgFAUQgEAQgXAEQAOgZAJgYg");
	this.shape_64.setTransform(26.6,54.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_5_1, new cjs.Rectangle(0.6,0.3,29.5,93.5), null);


(lib.inky_121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.inky_78();
	this.instance.parent = this;
	this.instance.setTransform(56.6,61.6,1,1,0,0,0,56.6,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_121, new cjs.Rectangle(0,0,113.4,123.3), null);


(lib.inky_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.inky_97();
	this.instance.parent = this;
	this.instance.setTransform(52.8,42.1,1,1,0,0,0,52.8,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_117, new cjs.Rectangle(0,0,105.6,84.2), null);


(lib.inky_right_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.inky_38();
	this.instance.parent = this;
	this.instance.setTransform(32,35.6,1,1,0,0,0,3.9,4.4);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.inky_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.8,36.5,1,1,0,0,0,5.1,5.8);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.inky_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.7,37.1,1,1,0,0,0,11.3,16.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F1A14").s().p("AgnBLQgWgagEgoQgEgnAQgfQARgfAbgEQAbgEAWAaQAWAaAEAoQAEAngQAfQgRAfgbAEIgIAAQgWAAgTgWg");
	this.shape.setTransform(29,36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#100F18","#962B1B","#E26422"],[0,0.541,0.996],7.5,10.9,-7.6,-13.9).s().p("AhDB+QglgrgHhEQgHhCAcg1QAcg0AugGQAugHAlAsQAmArAHBEQAHBCgdA1QgcA0guAGIgMABQgmAAghgmg");
	this.shape_1.setTransform(25.7,37.1);

	this.instance_3 = new lib.inky_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.7,37.1,1,1,0,0,0,15.7,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#793216").s().p("AhvCnQgphDgKhWIAAgBQgEhbAehCQAlhSBQgOQBMgNA4BXQAvBKADBQQAEBbgeBCQglBRhQAOQgLACgJAAQhAAAgvhLgAhzihQgkBKAEBhQAJBHAXA0QAfBFA1AVQBfAmA0hkQArhSgLhZQgJhHgXgzQgfhFg1gVQgcgLgXAAQg9AAgjBIg");
	this.shape_2.setTransform(22.6,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfCwQgzhCgJhiQgIhiAohIQAohJBBgFQA/gFAzBCQAzBCAIBiQAJBhgoBJQgoBJhBAFIgJABQg5AAgwg+g");
	this.shape_3.setTransform(22.6,37.1);

	this.instance_4 = new lib.inky_16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.7,36.4,1,1,0,0,0,17.3,25.4);
	this.instance_4.alpha = 0.699;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSArQgEgBgBgCQgJgEgDgMQgGgVAKgTQAKgVAVgFQAFgBAEAAIALABQAOACADAMQAEAKgFANQgFAOgQAPQgIAMgKAEIgFABIgEACIgDABIgDgBg");
	this.shape_4.setTransform(18,36,1,1,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C29B49").s().p("AgvAgQgJgbAOgaQANgbAcgHQAIgDAEACQAHgBAJACQASADAFAPQAEAOgFAQQgMAggiAXQgOAKgLAAQgSAAgHgag");
	this.shape_5.setTransform(19.2,36.3,1,1,-30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#100F18","#6E3220","#CC5423"],[0,0.541,0.996],8.8,-17.3,-7,13.8).s().p("AhDB+QglgrgHhEQgHhCAcg1QAcg0AugGQAugHAlAsQAmArAHBEQAHBCgdA1QgcA0guAGIgMABQgmAAghgmgAhaglIgHAYQgDAgARAyQAUA8A3AOQA1ANAjgvQAdgoAAg8QAAgUgDgBQgDgBgCAaQgCA4goAdQgmAcglgQQghgOgTgvQgPgoAEgbQADgSgGgCg");
	this.shape_6.setTransform(25.7,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CDCCCC").s().p("AhfCwQgzhCgJhiQgIhiAohIQAohJBBgFQA/gFAzBCQAzBCAIBiQAJBhgoBJQgoBJhBAFIgJABQg5AAgwg+gAgCDaQBQAJAuhoQAOgfAFgcQAIgrgLAtQgGAbgRAaQghA2g1ADQgrACgmglQgagZgSgkQgZB+B1AMgAgXjUQg/AIgVBhQgHAhAEAQQADARAKgcQAchSA2gZQBBgeA9BcQAVApAAgBQABgBgRgsQgKgagXgZQgngrgyAAIgRABg");
	this.shape_7.setTransform(22.6,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CF6F24").s().p("AhrC+Qg4hGgIhqQgIhoAthOQAthPBHgGQBGgGA4BGQA4BHAIBpQAHBogsBPQgtBOhHAGIgLABQhAAAgzhBg");
	this.shape_8.setTransform(22.7,36.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#100F18","#962B1B","#E26422"],[0,0.541,0.996],7.5,10.9,-7.6,-13.9).s().p("AhDB+QglgrgHhEQgHhCAcg1QAcg0AugGQAugHAlAsQAmArAHBEQAHBCgdA1QgcA0guAGIgMABQgmAAghgmgAAXhiQgbAEgQAfQgRAfAEAnQAEAoAWAaQAWAaAbgEQAcgEAQgfQARgfgEgnQgEgogXgaQgTgXgYAAIgGABg");
	this.shape_9.setTransform(25.7,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_9},{t:this.shape},{t:this.shape_8},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,11,34.6,51);


(lib.inky_left_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.inky_37();
	this.instance.parent = this;
	this.instance.setTransform(23.5,29.8,1,1,0,0,0,3.2,3.2);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.inky_21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,30.7,1,1,0,0,0,4.2,4.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.inky_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.8,30,1,1,0,0,0,8.7,12.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F1A14").s().p("AgHBNQgVgCgNgYQgMgXAEgfQADggARgVQASgVAUABQAVACAMAYQAMAYgDAeQgEAggRAVQgQAUgSAAIgDAAg");
	this.shape.setTransform(22.1,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#100F18","#962B1B","#E26422"],[0,0.541,0.996],4,9.6,-3.5,-12.1).s().p("AgNCBQgkgDgUgoQgVgnAGg1QAGg1AdglQAegjAhADQAkADAUAoQAVAogGA0QgGA1gdAlQgbAggfAAIgFAAg");
	this.shape_1.setTransform(19.7,30);

	this.instance_3 = new lib.inky_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.5,29.8,1,1,0,0,0,11.9,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#793216").s().p("AgMC+QhEgDgchIQgWg4AHhKIAAgBQALhAAdgwQAnhAA3ADQBDADAeBIQAaA+gMBFQgMBAgcAwQgmA9gzAAIgFAAgAg8iQQgmAygNBNIAAABQgFA2AJAsQAMA6AkAaQBGAzA3hRQAthCABhKQABh7g3gmQgcgUgZAAQgjAAgeApg");
	this.shape_2.setTransform(18.6,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXC7QgxgHgbg8Qgbg8AKhMQAKhOAqgxQApgyAvAHQAxAHAbA8QAbA8gKBMQgKBOgqAxQgkAsgoAAIgMgBg");
	this.shape_3.setTransform(18.5,29.7);

	this.instance_4 = new lib.inky_15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18.6,29.2,1,1,0,0,0,13.2,20);
	this.instance_4.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1,p:{regX:4.2,regY:4.3,rotation:0,x:24,y:30.7}},{t:this.instance,p:{regX:3.2,regY:3.2,rotation:0,x:23.5,y:29.8}}]}).to({state:[{t:this.instance_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1,p:{regX:4.3,regY:4.4,rotation:-15,x:14.1,y:29.1}},{t:this.instance,p:{regX:3.3,regY:3.5,rotation:-15,x:13.9,y:30.2}}]},10).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,9.2,26.5,40.2);


(lib.inky_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.inky_23();
	this.instance.parent = this;
	this.instance.setTransform(13,31.5,0.39,0.39,0,0,0,19.5,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF5623").s().p("AHqIoQghgtgpjUQgpjogNg9QgQhLhjgyQh3gvgwgZQg1gbgzgyIgYgXQgHgFABAJQADAdgGAGQgIAHgRgrQgRgugSgHQgTgHAPAgQAOAeAIAqQAKAxgCAyQgEBVgmAlIgVASQgGAFAHAFQAQALAQAWQAQAXgUgUQgTgVgbgNQgegOgaAAQgwACgjAcIgbAcQgbgagpgQIgjgJQgVgrgkgUQgfgRglABQgChrAKhuQASjBAyhGIANgYQAOgYAGgEIAZACQAgAHAmAQQB7AzCMCEQCtCjCHA1QCSA6DTgXIgDAWQgLAkgrBJQgsBKgGA9QgCAbAJAqIAKAQQANAWAKAgQAjBkAECcIgNAqQgLAvAJAWgAnMmxQAXALAHAVQADAKAHgGIATgSQAkgnAqgHQA0gJAlASQAaAMAdAfQALAMgBgMQgCgMgMgUQgjg6gwgDQgjgCgdAPQgPAHgRAQQgKAHgJACQgLACADgNQAOgtAdgYQALgJABgCQACgEgJgIQgYgTgpgHQgxgGgUAbQgHAJADAFQADAEAQAHQAYAKAKAYQAKAXgGAYQgEARgMgNQgXgZgRgJQgbgMgIAeQgDAMADAJQAEAKAJgBIAGAAQARAAARAIg");
	this.shape.setTransform(29.2,24.3,0.39,0.39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A74A20").s().p("AA5AIIgYgOIgQgEIgQgDIgHgBIgEAAIgjAGIgGADIgPAIIgEAEIgIAJIABgCIADgGIABgEIADgEIAJgIIANgIIAPgFIASgEIARgBIASAEIARAGQAOAIAKAKQAGAGAIALIAEAHQgJgIgNgKg");
	this.shape_1.setTransform(8.1,21.8,0.39,0.39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A74A20").s().p("AhnAeQAGgOAJgLIANgOIASgOQAMgHAKgDIAPgFIAJgBQAMgCAMACQALAAANAEQATAGAUAKQAVAMALALQgOgHgVgKQgagJgNgDIgWgDQgMgBgJACIgLACIgLADQgMAEgIAFIgJAFQgFADgEADIgOAMQgKAJgIANIgGAJIAEgLg");
	this.shape_2.setTransform(19.9,25.2,0.39,0.39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A74A20").s().p("AANBJQgHgEgJgJIgJgKQgDgDgCgEIgEgIQgDgIgBgJQgCgJACgJQABgJADgIIAIgQQAIgNAJgLQANgNAKgGIgRAXQgIALgGAOQgHAQgCANQgCAHABAJIADAOIAGAOIAGALIATAVg");
	this.shape_3.setTransform(46.6,29,0.39,0.39);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A74A20").s().p("AAIATIgIgFIgEgDIgDgEIgDgFIgDgEIgCgJQgBgEABgDIAAgCIAJAKIANAQIADAEIACADIAFAIg");
	this.shape_4.setTransform(5.5,25.4,0.39,0.39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AE31").s().p("AgDAHQgGgHAHgGQACgCACAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAAAIAAAFQgCAEgCABIgCABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_5.setTransform(5.4,34.6,0.39,0.39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7AE31").s().p("AAAAJQgDgCgCgEQgBgDABgDQABgDACgBQACgCADACIABADIACAFQABADgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_6.setTransform(27.1,32.3,0.39,0.39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7AE31").s().p("AACAQQgGgCgEgGQgEgGAAgGQABgGADgDQAEgEAEADQADACABACQAFAEACAFQADAGgCAGQgCAFgGAAIgCAAg");
	this.shape_7.setTransform(25.2,39.7,0.39,0.39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AE31").s().p("AAAAPQgFgCgDgHQgDgGABgFQACgGAEgCQAEgDADAEIADAEQAEAGABACQABAHgDAFQgCADgEAAIgDAAg");
	this.shape_8.setTransform(36.7,25.5,0.39,0.39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB6E2D").s().p("AHzKtQgwgngigkQgmgpgHgYQgFgRAAghIABhBQAAgbgGghQgJg3gTgUQgEAAihCWIgggcIhgACQgEAIgRAEQghAIhDgVQgTgGgsgYIgngXIhgBJQiAgrhLgOQgKgCACgHQADgGgBAAQgPADACA+QADA8gOABQhoACgLhGIgIgpQgFgcABgSQAHhkAuiZIAsiDQgGgIgEgNQgIgaALgaQALgZAXgHQAMgDAJABQgChcAIhrQARjWA1hKIANgXQAOgYAGgFIAZADQAgAGAmAQQB7A0CMCDQCtCjCHA1QCSA6DTgWIgDAVQgLAkgrBJQguBPgBA/QgBA0AXALQBCCZgICVQgEBLgRAsIgMAPIgRBdQgTA/gaAAQgKAAgLgJg");
	this.shape_9.setTransform(26.4,27.3,0.39,0.39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A74A20").s().p("ABgARIhBgcIgZgHIgYgHQgNgDgNgBIgXgDIgLgBIg3ACIAagFIASgBIALgBIALAAQAQAAAIACIAaAEIAZAGQAHABATAHIAYAKIAoAVIAbASIAJAIg");
	this.shape_10.setTransform(13.3,1.5,0.39,0.39);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A74A20").s().p("AAVAuIgFgBIgHgDIgIgGIgFgIIgGgJIgGgKQgIgTgBgSIAAgTIAdBFIAKAOIAEAFIAFADIADAEg");
	this.shape_11.setTransform(57.5,9.9,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9B127").s().p("AgDAHQgDgDABgEQAAgDADgDQACgCACAAQADgBABAEQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAIAAAFQgCAEgCABIgCABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_12.setTransform(4,35.5,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9B127").s().p("AAAAIQgDgBgCgEQgBgDABgDQABgDACgCQACgCADAEIABACIACAEQABAFgCACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_13.setTransform(26.2,33.2,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9B127").s().p("AACAQQgGgCgEgGQgEgGAAgGQABgGADgDQAEgEAEADQADACABACQAFAEACAFQADAGgCAGQgCAFgGAAIgCAAg");
	this.shape_14.setTransform(24.3,40.8,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AA4F27").s().p("AhYA1IgDgBIgBgBQAJgrAdgbQAdgdApgEQAfgEAYAYQAYAXgCAeQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgDABIgBAAQgEABgBgBQgTgTgKgGQgSgNgSgDQgegGgdAXQgXATgQAhQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBgAgNgqQgfAMgRAcQgOAUgEAPIgCAFQAPgYAOgLQAlgdAkAHQAgAGAiAgQAEgHgPgWQgTgcgKgEQgOgHgQAAQgPAAgPAHg");
	this.shape_15.setTransform(7.6,5.4,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED712B").s().p("AhYAzIACgLIALgaQAKgTAOgOQARgSAYgJQAOgEAMgBIANABIANADQANAEAJAJQAIAGAGAKQAJAQACAMQABAHgBAFIgDABIgIgIIgTgQIgNgIIgbgKIgFgBQgJgCgIACQgQACgUAOQgNAIgNAQQgHAIgIAPIgFAJg");
	this.shape_16.setTransform(7.6,5.4,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AA4F27").s().p("ACOB5QgShggpg0Qgtg6hBAEQg2ACg9AqQgDACgEgCIgCgCIgBAAIAAgCQAZgxAxgVQAegNAfACQgRAAgRAGQg+AUgeA2IAegSQAigSAFgCQAqgOAaAFQBTAOApBhQAUAsAIAmQgOhLgOgeQgZg7gmggQgXgTgXgHIAOAEQA+AVAjBNQAcA7AFBPQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgDAAQgGAAAAgCg");
	this.shape_17.setTransform(19.4,7.5,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ED712B").s().p("ACOBoQgGgagJgYQgMgjgSgdQgXgmgdgUQgQgLgSgFIgRgDIgRAAQgPAAgSAEQgNADgRAIIgZANIgjAWIgCgCQADgHAHgLQAGgIAJgJQAMgMAMgJQAPgLASgHQATgHAXgBQAKgBANADIAWAHQAWAIASAPQAhAaAUAsQAPAgAJAmQAIAfABAUIACAUIgDAAg");
	this.shape_18.setTransform(19.4,7.4,0.4,0.4);

	this.instance_1 = new lib.inky_117();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,17.2,0.4,0.4,0,0,0,52.6,42.1);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.inky_121();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.4,25,0.4,0.4,0,0,0,56.6,61.6);
	this.instance_2.alpha = 0.699;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AA4F27").s().p("AA5AHIgZgMIgPgGIgPgCIgIgBIgEAAIgUADIgPAEIgMAFIgJAFIgEADIgHAJIAAgCIACgFIACgEIAEgEIAJgIIAMgHIAQgHIARgCIARgBIATADIAQAHQAOAHAKALQAGAEAIANIADAHQgHgKgOgKg");
	this.shape_19.setTransform(6.7,22.5,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AA4F27").s().p("AhnAeQAGgOAJgLIANgOIASgOQAMgHAKgDIAPgFIAJgBQAMgCAMACQALAAANAEQATAGAUAKQAVAMALALQgOgHgVgJQgXgJgQgEIgWgDQgMgBgJACIgLACIgLADQgMAEgIAFIgJAFQgFADgEADIgOAMQgKAJgIANIgGAJIAEgLg");
	this.shape_20.setTransform(18.8,25.9,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AA4F27").s().p("AANBJQgHgEgJgJIgJgKQgDgDgCgEIgEgIQgDgIgBgJQgCgJACgJQABgJADgIIAIgQQAIgNAJgLQAIgIAIgGIAHgFIgRAXQgIALgGAOQgHAQgCANQgCAHABAJIADAOIAGAOIAGALIATAVg");
	this.shape_21.setTransform(46.3,29.8,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AA4F27").s().p("AAIATIgIgFIgEgDIgDgEIgDgFIgDgEIgCgJQgBgEABgDIAAgCIAWAaIADAEIACADIAFAIIgJgCg");
	this.shape_22.setTransform(4.1,26.1,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AA4F27").s().p("AAVAWIgLgCIgKgDIgJgFIgKgGIgOgLQgFgHgCgFIgCgEIAVAPIAIAEIAbALIAJACIAIACQADAAACgCQACgCAAgDIAAgFIgBgEIADADIACAGQABAFgBAEQgDAGgHABIgIAAIgDAAg");
	this.shape_23.setTransform(20.8,30.4,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AA4F27").s().p("Ag3BoQgrgLgmgaQgogagXgkQgagpATgVQALgLAWgEQAVgDAJgHQAMgJABgSQAAgDAGAAQAGAAAAACQgBAhgnAJIgcAGQgPAHAAAQQAAATAIAPQASAfAhAaQAeAZAkANQA9AYA7gJQBLgMArgcQA4gmgUg6QgBgCAGAAQAGgBABADQALAfgMAaQgLAageARQgxAdg8AKQgaAFgYAAQghAAgfgJg");
	this.shape_24.setTransform(11.9,31.6,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9B127").s().p("AAAAPQgGgCgCgHQgDgGABgFQACgGAEgCQADgDAEAEIADAEQAEAGABACQABAHgDAFQgCADgEAAIgDAAg");
	this.shape_25.setTransform(36.1,26.3,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ED712B").s().p("ADIESQgUgQgTgYIgPgTQk3Apg7g7QgWgCgEgZIgDgRQgCgLABgHQACgoATg9IARg0QgCgDgCgGQgDgKAEgKQAFgLAJgCQAFgCADABQAAglADgrQAHhVAVgeIAFgJQAGgKACgCIAKABQANADAPAGQAxAVA4A1QBFBBA2AVQA6AXBVgJIgBAJQgFAOgRAdQgSAggBAYQAAAVAJAFQAaA9gDA8QgBAdgHASIgFAGIgHAlQgIAagKAAQgEAAgEgEgACRDTIACABIAAgBIgCgBIgCgBIACACg");
	this.shape_26.setTransform(25.5,28.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AA4F27").s().p("AA3gCIgYgJIgZgHIgYgHQgNgDgNgBIgXgDIgLgBIg3ACIAagFIASgBIALgBIALAAQAQAAAIACIAaAEIAZAGIAaAIIAYAKIAoAVIAbASIAJAIg");
	this.shape_27.setTransform(12.1,1.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_2},{t:this.instance_1},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_face, new cjs.Rectangle(0,0,58.6,55.9), null);


(lib.inky_1_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.inky_25();
	this.instance.parent = this;
	this.instance.setTransform(5.4,2.5,0.39,0.39,0,0,0,9.8,5.5);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.inky_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.4,2.2,0.39,0.39,0,0,0,9.8,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A74A20").s().p("AhYA1IgDgBIgBgBQAJgrAdgbQAdgdApgEQAfgEAYAYQAYAXgCAeQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgDABIgBAAQgEABgBgBQgTgTgKgGQgSgNgSgDQgegGgdAXQgXATgQAhQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBgAgNgqQgfAMgRAcQgOAUgEAPIgCAFQAPgYAOgLQAlgdAkAHQAgAGAiAgQAEgHgPgWQgTgcgKgEQgOgHgQAAQgPAAgPAHg");
	this.shape.setTransform(5.8,2.5,0.39,0.39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB6E2D").s().p("AhYAzIACgLIALgaQAKgTAOgOQARgSAYgJQAOgEAMgBIANABIANADQANAEAJAJQAIAGAGAKQAJAQACAMQABAHgBAFIgDABIgIgIIgTgQIgNgIIgPgGIgRgFQgJgCgIACQgQACgUAOQgNAIgNAQQgHAIgIAPIgFAJg");
	this.shape_1.setTransform(5.8,2.5,0.39,0.39);

	this.instance_2 = new lib.inky_24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17,4.5,0.39,0.39,0,0,0,16.3,12.3);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.inky_11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17,4.1,0.39,0.39,0,0,0,16.3,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A74A20").s().p("ACOB5QgShggpg0Qgtg6hBAEQg2ACg9AqQgDACgEgCIgCgCIgBAAIAAgCQAZgxAxgVQAegMAfABQgRAAgRAGQg+AUgeA2IAegSQAigSAFgCQAqgOAaAFQBTAOApBhQAUAuAJAnIgKgxQgJgkgKgXQgZg7gmggQgXgTgXgHIAOAEQA+AVAjBNQAcA7AFBPIgCABIgDAAQgGAAAAgCg");
	this.shape_2.setTransform(17.4,4.6,0.39,0.39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB6E2D").s().p("ACOBnQgGgZgJgYQgMgjgSgcQgYgogcgTQgQgMgSgEIgRgDIgRgBQgPABgSAFQgNADgRAHIgZAMIgjAXIgCgCIAKgSQAGgHAJgLQAMgLAMgJQAPgMASgGQATgIAXgBQAKABANACIAWAGQAWAJASAQQAhAZAUAtQAPAeAJAnQAIAfABAUIACAUIgDAAg");
	this.shape_3.setTransform(17.4,4.5,0.39,0.39);

	this.instance_4 = new lib.inky_right_eye();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.5,11.1,0.39,0.39,0,0,0,23.9,32);

	this.instance_5 = new lib.inky_left_eye();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.2,10.2,0.39,0.39,0,0,0,19.3,25.7);

	this.instance_6 = new lib.inky_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(16.7,25,0.39,0.39,0,0,0,13,11.7);

	this.instance_7 = new lib.inky_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(4.6,20.9,0.39,0.39,0,0,0,9.6,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A74A20").s().p("AAVAWIgLgCIgKgDIgJgFIgKgGIgOgLQgFgHgCgFIgCgEIAVAPIAIAEIAbALIAJACIAIACQADAAACgCQACgCAAgDIAAgFIgBgEIADADIACAGQABAFgBAEQgDAGgHABIgIAAIgDAAg");
	this.shape_4.setTransform(18.7,26.9,0.39,0.39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A74A20").s().p("AAZBDQgNgBgKgMQgFgGgJgRQgMgXgUgOQgUgQgYgEQgFgBAAgCQAAgDAFABIABAAQBVAJBVgrQACgBAFABQAFACgBACQgTAagRA5QgHAWgDAGQgJARgNAAIgBAAgAgxgRQAcAQALAPIAKAWQAIAOAGAGQALAJAJgNQAFgJADgMIAQgxQAIgUAJgOQhCAcg8AAQgJAAgKgDIgIgCQASAGALAGg");
	this.shape_5.setTransform(12.6,33.5,0.39,0.39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#721713").s().p("AgGAfQgPgfgjgSIgfgLQAsAGArgKQA0gLAkgTIgMAWQgPAcgJAjQgKAmgPAEIgDAAQgPAAgPghg");
	this.shape_6.setTransform(12.6,33.5,0.39,0.39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A74A20").s().p("Ag3BoQgrgLgmgaQgogagXgkQgagpATgVQALgLAWgEQAVgDAJgHQAMgJABgSQAAgDAGAAQAGAAAAACQgBAhgnAJIgcAGQgPAHAAAQQAAATAIAPQASAfAhAaQAeAZAkANQA9AYA7gJQBLgMArgcQA4gmgUg6QgBgCAGAAQAGgBABADQALAfgMAaQgLAageARQgxAdg8AKQgaAFgYAAQghAAgfgJg");
	this.shape_7.setTransform(10,28.1,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-1.2,23.7,37.3);


(lib.inky_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.inky_5_1();
	this.instance.parent = this;
	this.instance.setTransform(384.1,68,1,1,0,0,0,11.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({rotation:-15},6,cjs.Ease.get(1)).to({rotation:0},6,cjs.Ease.get(1)).wait(1));

	// head
	this.instance_1 = new lib.inky_6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(393.4,73.3,1,1,0,0,0,4.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regX:4.4,rotation:-40.9,x:393.3,y:73.2},10,cjs.Ease.get(1)).to({regX:4.3,rotation:0,x:393.4,y:73.3},6,cjs.Ease.get(-1)).wait(1));

	// p3
	this.instance_2 = new lib.inky_7_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(371.8,68.8,1,1,0,0,0,4.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({regY:3.4,rotation:13.7,x:371.9,y:68.9},8,cjs.Ease.get(1)).to({regY:3.3,rotation:0,x:371.8,y:68.8},6,cjs.Ease.get(-1)).wait(1));

	// p4
	this.instance_3 = new lib.inky_8_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359.8,70.3,1,1,0,0,0,5.3,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({regX:5.4,rotation:32.5},11,cjs.Ease.get(1)).to({regX:5.3,rotation:0},6,cjs.Ease.get(-1)).wait(1));

	// p5
	this.instance_4 = new lib.inky_9_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(354.8,68.4,1,1,0,0,0,32.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:28.5,x:354.7},16,cjs.Ease.get(1)).to({rotation:0,x:354.8},6,cjs.Ease.get(-1)).wait(1));

	// p6
	this.instance_5 = new lib.inky_10_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(357.6,73,1,1,0,0,0,13.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({rotation:56.7},9,cjs.Ease.get(1)).to({rotation:0},6,cjs.Ease.get(-1)).wait(1));

	// p7
	this.instance_6 = new lib.inky_11_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(353,71.6,1,1,0,0,0,28.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({rotation:49},12,cjs.Ease.get(1)).to({rotation:0},6,cjs.Ease.get(-1)).wait(1));

	// p8
	this.instance_7 = new lib.inky_14_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(393.6,78.1,1,1,0,0,0,-2.3,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-45},16,cjs.Ease.get(1)).to({rotation:0},6,cjs.Ease.get(1)).wait(1));

	// p1
	this.instance_8 = new lib.inky_1_move();
	this.instance_8.parent = this;
	this.instance_8.setTransform(362.8,45.9,1,1,0,0,0,11.8,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23));

	// p2
	this.instance_9 = new lib.inky_head();
	this.instance_9.parent = this;
	this.instance_9.setTransform(392,-1.5,1,1,0,0,0,39,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23));

	// p9
	this.instance_10 = new lib.inky_face();
	this.instance_10.parent = this;
	this.instance_10.setTransform(349.1,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.4,-47.1,109.3,207);


(lib.inky_still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p1
	this.instance = new lib.inky_5_1();
	this.instance.parent = this;
	this.instance.setTransform(384.1,68,1,1,0,0,0,11.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// p2
	this.instance_1 = new lib.inky_6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(393.4,73.3,1,1,0,0,0,4.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// p3
	this.instance_2 = new lib.inky_7_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(371.8,68.8,1,1,0,0,0,4.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// p4
	this.instance_3 = new lib.inky_8_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359.8,70.3,1,1,0,0,0,5.3,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// p5
	this.instance_4 = new lib.inky_9_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(354.8,68.4,1,1,0,0,0,32.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// p6
	this.instance_5 = new lib.inky_10_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(357.6,73,1,1,0,0,0,13.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// p7
	this.instance_6 = new lib.inky_11_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(353,71.6,1,1,0,0,0,28.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// p8
	this.instance_7 = new lib.inky_14_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(393.6,78.1,1,1,0,0,0,-2.3,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// main
	this.instance_8 = new lib.inky_1_move();
	this.instance_8.parent = this;
	this.instance_8.setTransform(362.8,45.9,1,1,0,0,0,11.8,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// t8
	this.instance_9 = new lib.inky_head();
	this.instance_9.parent = this;
	this.instance_9.setTransform(392,-1.5,1,1,0,0,0,39,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// t9
	this.instance_10 = new lib.inky_face();
	this.instance_10.parent = this;
	this.instance_10.setTransform(349.1,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.inky_still, new cjs.Rectangle(322.4,-47.1,109.3,207), null);


// stage content:
(lib.inky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end_enter:91,dive1:92,end_dive1:103,dive2:104,end_dive2:115,dive3:116,end_dive3:128,no_prize:129,end_dive4:155});

	// timeline functions:
	this.frame_0 = function() {
		//this.gotoAndPlay('dive1');
	}
	this.frame_91 = function() {
		this.stop();
		eventFromFlash("startTurn");
	}
	this.frame_103 = function() {
		this.stop();
		eventFromFlash("startPrize");
	}
	this.frame_115 = function() {
		this.stop();
		eventFromFlash("startPrize");
	}
	this.frame_128 = function() {
		this.stop();
		eventFromFlash("startPrize");
	}
	this.frame_155 = function() {
		this.stop();
		eventFromFlash("startPrize");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91).call(this.frame_91).wait(12).call(this.frame_103).wait(12).call(this.frame_115).wait(13).call(this.frame_128).wait(27).call(this.frame_155).wait(1));

	// Layer 1
	this.instance = new lib.inky_1();
	this.instance.parent = this;
	this.instance.setTransform(-59.2,160.2,0.83,0.831,0,0,0,376,57);

	this.instance_1 = new lib.inky_still();
	this.instance_1.parent = this;
	this.instance_1.setTransform(489.5,107.4,0.82,0.82,175,0,0,375.8,55.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:376.3,regY:56.9,scaleX:0.82,scaleY:0.82,x:28.2,y:196.3},16).to({regX:376.7,regY:56.6,x:93,y:158.6},6).to({regX:376.6,x:142.7,y:217.8},17).to({regX:376.7,regY:56.7,x:182.7,y:165.7},6).to({regX:376.6,regY:56.8,x:223.7,y:201.6},17).to({regX:376.7,regY:56.7,x:253.7,y:151.7},6).to({regY:56.8,x:252.7,y:180.5},17).to({regX:376.9,x:276.5,y:163.4},6).wait(1).to({regX:473.1,regY:-4,x:353.4,y:146.6},0).to({regX:465.3,regY:-25.3,scaleX:0.82,scaleY:0.82,rotation:29.8,x:348.7,y:130.5},1).to({regX:455.7,regY:-32.2,rotation:60.2,x:444.5,y:101},1).to({regX:462.2,regY:-8,scaleX:0.82,scaleY:0.82,rotation:99.8,x:409.6,y:156.4},2).to({_off:true,regX:375.8,regY:55.6,rotation:175,x:489.5,y:107.4},1).wait(7).to({_off:false,regX:376.8,regY:56.7,rotation:0,x:274.5,y:196.4},0).to({regX:465.2,regY:-15.4,scaleX:0.82,scaleY:0.82,rotation:29.8,x:335.6,y:113.4},2).to({regX:469.4,regY:-24.4,rotation:60.2,x:369.5,y:129.3},2).to({regX:469.7,regY:-21.6,scaleX:0.82,scaleY:0.82,rotation:99.8,x:324.6,y:182.4},1).to({_off:true,regX:428.6,regY:-42.9,scaleX:0.82,scaleY:0.82,rotation:219.8,x:426.9,y:129},2).wait(5).to({_off:false,regX:376.8,regY:56.7,scaleX:0.82,scaleY:0.82,rotation:360,x:274.5,y:196.4},0).to({regX:469.4,regY:-10.7,scaleX:0.82,scaleY:0.82,rotation:389.8,x:327.7,y:126.5},4).to({regX:469,regY:-23.6,rotation:420.2,x:342.7,y:154.5},3).to({_off:true,regX:429.9,regY:-44.4,rotation:479.9,x:390.4,y:184.9},3).wait(2).to({_off:false,regX:376.9,regY:56.8,scaleX:0.82,scaleY:0.82,rotation:360,x:274.5,y:166.4},1).to({regX:376.7,regY:56.9,x:328.6,y:221.3},16).to({regX:376.9,regY:56.5,scaleX:0.82,scaleY:0.82,rotation:407.2,x:379.6,y:183.1},6).to({regY:56.6,scaleX:0.82,scaleY:0.82,x:696.5,y:70.6},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},1).to({regX:376.9,regY:56.5,scaleX:0.82,scaleY:0.82,rotation:217.3,x:519.9,y:95.8},2).to({regX:377,regY:56.3,rotation:219.9,x:88.7,y:351.1},4).to({_off:true},1).wait(5).to({_off:false,regX:428.6,regY:-42.9,rotation:219.8,x:426.9,y:129},2).to({regX:432,regY:-45,rotation:220.1,x:233.4,y:298.6},4).to({_off:true},1).wait(7).to({_off:false,regX:429.9,regY:-44.4,rotation:119.9,x:390.4,y:184.9},3).to({regX:430.5,regY:-49.4,scaleX:0.82,scaleY:0.82,rotation:119.8,x:573.9,y:400.6},2).to({_off:true,regX:376.9,regY:56.8,scaleX:0.82,scaleY:0.82,rotation:0,x:274.5,y:166.4},1).wait(27));

	// Layer 2
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.4,200,703.7,400);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#FF0000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1487864175364", id:"bg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;