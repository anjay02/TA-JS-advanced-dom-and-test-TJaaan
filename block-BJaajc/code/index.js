// index.js

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function getCircumference(radius) {
  if (typeof radius !== 'number' || radius <= 0) return 'Invalid radius';
  const circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}

function getArea(radius) {
  if (typeof radius !== 'number' || radius <= 0) return 'Invalid radius';
  const area = Math.PI * radius * radius;
  return `The area is ${area}`;
}

module.exports = { getFullName, isPalindrome, getCircumference, getArea };
