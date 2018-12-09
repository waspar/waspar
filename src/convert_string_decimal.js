import settings from './settings/convert_string_decimal';
import _isString from 'lodash/isString';

/**
 * Class representing a converter form string to decimal.
 */
class convertStringToDecimalNumber {

	/**
	 * Create a converter form string to decimal.
	 * @constructor
	 * @property {String} [value='0'] - string for convert
	 */
	constructor(value = '0') {

		if (value) {
			if (_isString(value)) {
				this.value = value;
			}
		}

		this.settings = settings;
	}

	convert(options = {}, value = null) {

		options = Object.assign(this.settings, options);

		if (!value || !_isString(value)) value = this.value;
		if (!value) return options.default;

		let fixed = false;
		let save_minus = false;


		if (value) {
			value.toString();

			if (!value) {
				return options.default;
			}

			// clean letter and spaces (trim)
			value = value.replace(/([^\d\W]+|[\s]+)/gi, '');

			if (value) {

				// wrong start (save minus)
				if (options.negative) {
					value = value.replace(/^(-)?([\W]+)*(.+)+/g, function (all, minus, clean, value) {
						if (minus) {
							save_minus = true;
							return minus + value;
						}
						else return value;
					});
				} else {
					save_minus = false;
					value = value.replace(/^([\W]+)/, '');
				}

				// wrong end
				value = value.replace(/[\W]+$/, '');

				// fix to decimal
				value = value.replace(/(.+)([\W])(\d+)$/, function (str, integer, delimiter, decimal) {
					fixed = true;
					if (integer) integer = integer.replace(/(\D)/g, ''); else integer = 0;
					if (!decimal) decimal = 0;
					return integer + '.' + decimal;
				});

				value = parseFloat(value); // ! 0.00 => 0
				if (save_minus && value > 0) {
					value *= -1;
				}

			}
		}

		if (value || (options.zero && value === 0)) {
			return value;
		} else if (!value) {
			return options.default;
		}

	}

}

export default convertStringToDecimalNumber;