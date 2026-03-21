const display =
  typeof document !== "undefined" ? document.getElementById("display") : null;
let buffer = "";

function render() {
  if (display) display.value = buffer;
}

const operators = new Set(["+", "-", "*", "/"]);

function hasDecimalInCurrentNumber() {
  const tokens = buffer.split(/(?=[+\-*/])|(?<=[+\-*/])/); 
  const lastToken = tokens[tokens.length - 1];
  if (!lastToken) return false;
  if (operators.has(lastToken)) return false;
  return lastToken.includes(".");
}

function append(k) {
  // evita operadores consecutivos, e que comecem com +*\/
  if (operators.has(k)) {
    if (buffer === "" && k !== "-") {
      return;
    }
    if (buffer === "") {
      buffer = k; // permite iniciar com - para números negativos
      render();
      return;
    }
    const last = buffer.slice(-1);
    if (operators.has(last)) {
      return; 
    }
  }

  // evita múltiplos pontos no mesmo número
  if (k === ".") {
    if (hasDecimalInCurrentNumber()) {
      return;
    }
    if (buffer === "" || operators.has(buffer.slice(-1))) {
      // caso inicie número com '.', transforma em '0.'
      buffer += "0";
    }
  }

  buffer += k;
  render();
}

function clearAll() {
  buffer = "";
  render();
}

function equals() {
  try {
    const result = eval(buffer);
    buffer = String(result);
  } catch {
    buffer = "Erro";
  }
  render();
}

if (typeof document !== "undefined") {
  document.querySelectorAll("button[data-k]").forEach((b) => {
    b.addEventListener("click", () => append(b.dataset.k));
  });
  document.getElementById("clear").addEventListener("click", clearAll);
  document.getElementById("equals").addEventListener("click", equals);
}

module.exports = { append, clearAll, equals, _state: () => buffer };
