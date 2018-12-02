import {expect} from 'chai';
import waspar from '../src/index';
import convertStringToDecimalNumber from '../src/convertStringToDecimalNumber';

describe('Waspar', () => {

	describe('waspar.hello()', () => {

		it('should return welcome message for a guest user', () => {
			const greeting = new convertStringToDecimalNumber();
			console.log(greeting);
			const message = greeting.hello();
			expect(message).to.be.equal('Welcome!');
		});

		it('should return welcome message for a named user', () => {
			const greeting = new convertStringToDecimalNumber('John');
			const message = greeting.hello();
			expect(message).to.be.equal('Welcome, John!');
		});

	});

});
