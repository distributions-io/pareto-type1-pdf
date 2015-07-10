'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies shape parameter `alpha` and scale parameter `beta` and returns a function for evaluating the probability density function (PDF) for a Pareto distribution.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Function} PDF
*/
function partial( alpha, beta ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Pareto distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var num, denom;
		if ( x >= beta ) {
			num = alpha * Math.pow( beta, alpha );
			denom = Math.pow( x, alpha + 1 );
			return num / denom;
		} else {
			return 0;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
