# uberclass-clouseau [![NPM version](https://badge.fury.io/js/uberclass-clouseau.png)](http://badge.fury.io/js/uberclass-clouseau) [![Dependency Status](https://gemnasium.com/uber/uberclass-clouseau.png)](https://gemnasium.com/uber/uberclass-clouseau) [![Build Status](https://travis-ci.org/uber/uberclass-clouseau.png?branch=master)](https://travis-ci.org/uber/uberclass-clouseau)

A subclass of uberclass that adds profiling support.

## Install

    npm install uberclass-clouseau

## Usage

    var Class = require('uberclass-clouseau');

    var MyClass = Class.extend({
        init: function(arg1, arg2) {
            this.arg1 = arg1;
            this.arg2 = arg2;
            return this;
        },
        foo: function() {
            return 'bar';
        }
    });

## License (MIT)

Copyright (C) 2012-2013 by Uber Technologies, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

