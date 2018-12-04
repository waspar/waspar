import settings from './settings/convert_string_to_decimal_number';

class convertStringToDecimalNumber {

	constructor(name) {
		this.name = name || 'Guest';
		this._settings = settings;
	}

	hello() {
		return `Welcome, ${this.name}!`;
	}
}

export default convertStringToDecimalNumber;