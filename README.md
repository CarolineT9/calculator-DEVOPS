# Calculadora JS (Projeto Exemplo)

Projeto simples em JavaScript para demonstração de CI no GitLab.

## Rodando localmente
```bash
cd calculator
npm install
npm test
```

Para ver a UI, basta abrir `src/index.html` em um navegador.

## Estrutura
- `src/calc.js`: funções aritméticas.
- `src/main.js`: lógica da calculadora e UI.
- `src/index.html`: interface mínima.
- `tests/calc.test.js`: testes com Jest.

## CI no GitLab
O arquivo `.gitlab-ci.yml` executa `npm ci` e `npm test` usando Node 20.

