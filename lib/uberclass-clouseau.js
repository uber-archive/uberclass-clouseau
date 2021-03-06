var Class = require('uberclass');
var rubberduck = require('rubberduck');
var Profiler = global.Profiler = global.Profiler || require('clouseau'); // Must be a singleton, bootstrap Profiler if necessary
global.__f = global.__f || Profiler.__f;

function profilerEnabled() {
	return !!Profiler && Profiler.enabled;
}

var originalExtend = Class.Class.extend;

function newExtend(static, proto) {
	if(!static) static = {};
	if(!proto) proto = static, static = {};
	proto.ClassName = proto.ClassName || 'anonymous';

	var newObj = originalExtend.apply(this, [static, proto]);

	var staticEmitter = rubberduck.emitter(newObj).punch(Object.keys(static), null, true);
	var protoEmitter = rubberduck.emitter(newObj.prototype).punch(Object.keys(proto), null, true);
	
	function beforeHandler(args, instance, name) {
		if(profilerEnabled()) Profiler.enter(newObj.prototype.ClassName + "." + name);
	}

	function afterHandler(val, args, instance, name) {
		if(profilerEnabled()) Profiler.exit();
	}

	staticEmitter.on('before', beforeHandler);
	protoEmitter.on('before', beforeHandler);

	staticEmitter.on('after', afterHandler);
	protoEmitter.on('after', afterHandler);
	
	return newObj;
}

Class.Class.extend = newExtend;

module.exports = Class.extend({});
