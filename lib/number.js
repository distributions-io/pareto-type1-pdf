'use strict';

// FUNCTIONS //


// PDF //

/**
* FUNCTION: pdf( x, alpha, beta )
*	Evaluates the probability density function (PDF) for a Pareto distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, alpha, beta ) {
	var num, denom;
	if ( x >= beta ) {
		num = alpha * Math.pow( beta, alpha );
		denom = Math.pow( x, alpha + 1 );
		return num / denom;
	} else {
		return 0;
	}
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
