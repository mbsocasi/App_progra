import React, { useState } from "react";

const CalculoCalorias = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("22");
  const [input3, setInput3] = useState("");
  const [resultado, setResultado] = useState(0);

  const handleInputChange = (e, setInput) => {
    const inputValue = e.target.value;
    const validNumber = /^-?\d*\.?\d*$/.test(inputValue); // Expresión regular para validar números enteros y decimales
    if (validNumber) {
      setInput(inputValue);
    }
  };

  const calcularResultado = () => {
    const resultadoCalculado = parseFloat(input1) * parseFloat(input2) * parseFloat(input3);
    setResultado(resultadoCalculado);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-700 p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-black-500">Calculadora de Calorías</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Peso en kilogramos</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => handleInputChange(e, setInput1)}
            className="mt-1 p-2 w-full border rounded-md bg-zinc-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Valor 2:</label>
          <input
            type="text"
            disabled
            value={input2}
            onChange={(e) => handleInputChange(e, setInput2)}
            className="mt-1 p-2 w-full border rounded-md bg-zinc-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Valor 3:</label>
          <input
            type="text"
            value={input3}
            onChange={(e) => handleInputChange(e, setInput3)}
            className="mt-1 p-2 w-full border rounded-md bg-zinc-700"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={calcularResultado}
            className="bg-purple-500 text-white p-2 rounded-md"
          >
            Calcular
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-100 text-center">
            Resultado:
          </label>
          <div className="mt-1 p-2 w-full border rounded-md bg-zinc-700">
            {resultado}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculoCalorias;
