'use strict';
var assert = require('assert');
var s = require('./to-single-quotes');

it('should convert matching double-quotes to single-quotes', function () {
	assert.equal(s(''), '');
	assert.equal(s('foo'), 'foo');
	assert.equal(s('\'\''), '\'\'');
	assert.equal(s('""'), '\'\'');
	assert.equal(s('\'foo\''), '\'foo\'');
	assert.equal(s('"foo"'), '\'foo\'');
	assert.equal(s('bar "foo" baz'), 'bar \'foo\' baz');
	assert.equal(s('\'bar\' "foo" \'baz\''), '\'bar\' \'foo\' \'baz\'');
	assert.equal(s('\\\"foo\\\"'), '\'foo\'');
});
