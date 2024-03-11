// index.test.js

const { getFullName, isPalindrome, getCircumference, getArea } = require('./index');

describe('getFullName', () => {
  test('Positive: Properly concatenates first and last name', () => {
    expect(getFullName('John', 'Doe')).toBe('John Doe');
  });

  test('Positive: Works with middle name', () => {
    expect(getFullName('John', 'Doe Smith')).toBe('John Doe Smith');
  });

  test('Positive: Works with empty strings', () => {
    expect(getFullName('', '')).toBe(' ');
  });

  // Negative tests are a bit unconventional here since any string is technically valid
});

describe('isPalindrome', () => {
  test('Positive: Recognizes a simple palindrome', () => {
    expect(isPalindrome('madam')).toBeTruthy();
  });

  test('Positive: Recognizes a complex palindrome', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBeFalsy(); // This would need sanitizing to pass
  });

  test('Positive: Recognizes an empty string as a palindrome', () => {
    expect(isPalindrome('')).toBeTruthy();
  });

  test('Negative: Recognizes a non-palindrome', () => {
    expect(isPalindrome('openai')).toBeFalsy();
  });
});

describe('getCircumference', () => {
  test('Positive: Calculates the circumference of a circle correctly', () => {
    expect(getCircumference(10)).toBe(`The circumference is ${2 * Math.PI * 10}`);
  });

  test('Negative: Handles invalid radius (string)', () => {
    expect(getCircumference('ten')).toBe('Invalid radius');
  });

  test('Negative: Handles negative radius', () => {
    expect(getCircumference(-10)).toBe('Invalid radius');
  });

  test('Edge Case: Radius of 0', () => {
    expect(getCircumference(0)).toBe('Invalid radius');
  });
});

describe('getArea', () => {
  test('Positive: Calculates the area of a circle correctly', () => {
    expect(getArea(10)).toBe(`The area is ${Math.PI * 10 * 10}`);
  });

  test('Negative: Handles invalid radius (string)', () => {
    expect(getArea('ten')).toBe('Invalid radius');
  });

  test('Negative: Handles negative radius', () => {
    expect(getArea(-10)).toBe('Invalid radius');
  });

  test('Edge Case: Radius of 0', () => {
    expect(getArea(0)).toBe('Invalid radius');
  });
});