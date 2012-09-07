var Class = require('uberclass');
var rubberduck = require('rubberduck');
var profiler = require('profiler');

function profilerEnabled() {
	return !!profiler && profiler.enabled;
}

function attachProfiler() {
	var self = this;
	var localMethods = [], prototypeMethods = [];
	for(var method in this) {
		if(this[method] instanceof Function) {
			localMethods.push(method);
		}
	}
	for(var method in this.prototype) {
		if(this.prototype[method] instanceof Function) {
			prototypeMethods.push(method);
		}
	}

	var localEmitter, prototypeEmitter;
	localEmitter = rubberduck.emitter(this).punch(localMethods);
	prototypeEmitter = rubberduck.emitter(this.prototype).punch(prototypeMethods);
	
	function beforeHandler() {
		if(profilerEnabled()) profiler.enter(self.ClassName + "." + name);
	}

	function afterHandler() {
		if(profilerEnabled()) profiler.exit();
	}

	function extendHandler(newClass) {
		attachProfiler(newClass);
	}

	localEmitter.on('before', beforeHandler);
	prototypeEmitter.on('before', beforeHandler);

	localEmitter.on('after', afterHandler);
	prototypeEmitter.on('after', afterHandler);

	localEmitter.on('afterExtend', extendHandler);
}

module.exports = Class.extend({
	init: function() {
		attachProfiler.apply(this);
	}
});


module.exports.profiler = profiler;
