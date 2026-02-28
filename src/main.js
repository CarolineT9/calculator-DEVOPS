const display = typeof document !== "undefined" ? document.getElementById("display") : null;
let buffer = "";

function render() {
  if (display) display.value = buffer;
}

function append(k) {
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
