/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array pdf', function tests() {

	var alpha = 2,
		beta = 4;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Pareto pdf', function test() {
		var data, actual, expected, i;

		data = new Float64Array([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]);
		actual = new Float64Array( data.length );

		actual = pdf( actual, data, alpha, beta );

		// Evaluated on Wolfram Alpha:
		expected = new Float64Array([
			0,
			0,
			0,
			0,
			1/2,
			32/125,
			4/27,
			32/343,
			1/16
		]);

		for ( i = 0; i < actual.length; i++ ) {
			assert.closeTo( actual[ i ], expected[ i ], 1e-7 );
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( new Int8Array(), new Int8Array(), alpha, beta ), new Int8Array() );
	});

});
