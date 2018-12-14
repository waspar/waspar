/**
 * wsp tools.convert.string.decimal settings configuration interface.
 *
 * @typedef {Object}
 * @property {Boolean} [negative=false] - allow return negative values?
 * @property {Boolean} [zero=false] - allow return 0?
 * @property {String|Number|Float} [default=''] - return it, if convert fails
 * @property {Boolean|Number|Float} [min=false] - if `false` - no limit
 * @property {Boolean|Number|Float} [max=false] - if `false` - no limit
 * @property {Number} [precision=2] - number of decimal places to round the amount to (can be < 0)
 * @property {Number} [grouping=3] - digit grouping (not implemented yet)
 */
export default {
	'negative' : false,
	'zero' : false,
	'min' : false,
	'max' : false,
	'precision' : 2,
	'grouping' : 3,
};