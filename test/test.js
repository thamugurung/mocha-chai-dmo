var expect = require('chai').expect;
var abc = "Check String thamu"
describe('A basic test',  function(){
	it('It should pass when everything is ok', function (){
		expect(true).to.be.true;
		
	})
})

describe('String Check',  function(){
	it('Should check if the string is there or not', function (){
		expect(abc).to.string("thamu");		
	})
})

describe('addition check', function(){
	it('check addition of two numbers', function(){
		expect(2+1).to.equal(3);
	})
})