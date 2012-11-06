var Class = require('../lib/uberclass-clouseau');

exports.class = function(test) {
    test.expect(5);
    test.ok(Class instanceof Object, 'the Class object exists');
    test.ok(Class.extend instanceof Function, 'Class.extend is a function');
    var TestClass = Class.extend({ foo: "bar" });
    test.ok(TestClass instanceof Function, 'the test class constructor function created successfully');
    var testInstance = new TestClass();
    test.ok(testInstance instanceof Object, 'the test instance is an object');
    test.equal(testInstance.foo, 'bar', 'the property was added correctly');
    test.done();
};

exports.profile = function(test) {
    test.expect(4);
    test.ok(Profiler, 'the profiler global has been successfully created');
    test.ok(!Profiler.enabled, 'the profiler is turned off by default');
    Profiler.enabled = true;
    var TestClass = Class.extend({ foo: function() { return 'bar'; } });
    var testInstance = new TestClass();
    test.ok(testInstance.foo(), 'bar', 'the method returned correctly with profiling on');
    var profileResults = Profiler.getFormattedData();
    test.ok(typeof(profileResults) == 'string', 'the profile results are a string');
    // Visual inspection of the results
    console.log(profileResults);
    test.done();
};
