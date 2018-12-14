import settings from '../settings/convert/string_decimal';
import _isString from 'lodash/isString';
import _isNumber from 'lodash/isNumber';
import _round from 'lodash/round';

function convert(value = null, options = {}) {

	if (!value || !_isString(value)) return options.default;

	options = Object.assign(settings, options);

	if(options.min !== false){

		if(options.min >= 0){
			options.negative = false;
		}

		if(options.max !== false && options.min >= options.max){
			options.max = false;
		}

	}

	if(!_isNumber(options.precision)){
		options.precision = settings.precision;
	}

	if (value) {
		value.toString();

		if (!value) {
			return options.default;
		}

		let save_minus = false;

		// clean letter and spaces (trim)
		value = value.replace(/([^\d\W]+|[\s]+)/gi, '');

		if (value) {

			// wrong start
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

		if(options.min !== false){
			if(value < options.min){
				value = options.min;
			}
		}

		if(options.max !== false){
			if(value > options.max){
				value = options.max;
			}
		}

		value = _round(value, options.precision);

		return value;
	} else if (!value) {
		return options.default;
	}

}

export default convert;