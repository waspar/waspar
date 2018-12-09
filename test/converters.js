import {expect} from 'chai';
import wps from '../src/index';

describe('Converters', () => {

	describe('#string to decimal number', () => {

		it('should convert string `1` to decimal number `1`', () => {
			const convert_string_decimal = new wps.convert.string.decimal('1');
			expect(convert_string_decimal.convert()).to.be.equal(1);
		});

	});

});
