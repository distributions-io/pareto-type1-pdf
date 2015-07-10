/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number pdf', function tests() {

	var alpha = 1,
		beta = 1;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Pareto probability density function', function test() {
		assert.closeTo( pdf( 2, alpha, beta), 0.25, 1e-7 );
		assert.closeTo( pdf( 20, alpha, beta), 1/400, 1e-7 );
		assert.closeTo( pdf( 200, alpha, beta), 1/40000, 1e-7 );

	});

});
