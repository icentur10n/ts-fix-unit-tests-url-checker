//Declare import function
import {calculatePasswordStrength} from '../src/pswStrength';
//Declare the test suite for function calculatePasswordStrength
describe('test function calculatePasswordStrength with different passwords', () => {
    //Test N1 Very Weak password
    test('should return Very Weak for password <=2', () => {
        expect(calculatePasswordStrength('b')).toBe('Very Weak');
    })
    //Test N2 Weak password
    test('should return Weak >=5', () => {
        expect(calculatePasswordStrength('DasolDDD')).toBe('Weak');
    })
    //Test N3 Moderate password
    test('should return Moderate >=5', () => {
        expect(calculatePasswordStrength('DasolDArthzhjas')).toBe('Moderate');
    })
    //Test N4 Strong password
    test('should return Strong >=5', () => {
        expect(calculatePasswordStrength('DasolDArthzhjas12314@#jsfasd')).toBe('Strong');
    })
})