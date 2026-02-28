const { add, subtract, multiply, divide } = require("../src/calc");

test("add soma números", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract subtrai números", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiply multiplica números", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide divide números", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divide por zero lança erro", () => {
  expect(() => divide(1, 0)).toThrow("Divisão por zero");
});

