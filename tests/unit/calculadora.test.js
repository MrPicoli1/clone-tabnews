const calculadoora = require("../../models/calculadora");

test("Deve retornar a soma de dois números", () => {
  const resultado = calculadoora.somar(2, 3);
  expect(resultado).toBe(5);
});
