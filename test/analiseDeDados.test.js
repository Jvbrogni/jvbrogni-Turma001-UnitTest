const AnaliseDeDados = require('../src/analiseDeDados');

describe('Testes da classe analiseDeDados', () => {

  test('Deve criar uma instância com dados vazios', () => {
    const analise = new AnaliseDeDados();
    expect(analise.dados).toEqual([]);
  });

  test('Deve adicionar dados ao array', () => {
    const analise = new AnaliseDeDados();
    analise.adicionarDados([1, 2, 3]);
    expect(analise.dados).toEqual([1, 2, 3]);
  });

  test('Deve limpar os dados', () => {
    const analise = new AnaliseDeDados([1, 2, 3]);
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test('Deve ordenar os dados corretamente', () => {
    const analise = new AnaliseDeDados([3, 1, 2]);
    expect(analise.ordenarDados()).toEqual([1, 2, 3]);
  });

  test('Deve calcular a média corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularMedia()).toBe(3);
  });

  test('Deve calcular a mediana corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularMediana()).toBe(3);
  });

  test('Deve calcular a moda corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 2, 3, 3, 3, 4]);
    expect(analise.calcularModa()).toEqual([3]);
  });

  test('Deve calcular a variância corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularVariancia()).toBe(2.0);  
  });

  test('Deve calcular o desvio padrão corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularDesvioPadrao()).toBe(Math.sqrt(2.0));
  });

  test('Deve calcular o valor mínimo corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.encontrarMinimo()).toBe(1);
  });

  test('Deve calcular o valor máximo corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.encontrarMaximo()).toBe(5);
  });

  test('Deve normalizar os dados corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test('Deve calcular o percentil corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularPercentil(50)).toBe(3);
  });

  test('Deve calcular a soma corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularSoma()).toBe(15);
  });

  test('Deve calcular o produto corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularProduto()).toBe(120);
  });

  test('Deve calcular a amplitude corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    expect(analise.calcularAmplitude()).toBe(4);  // 5 - 1 = 4
  });

  test('Deve calcular o coeficiente de variação corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5]);
    const coeficienteVariacao = analise.calcularCoeficienteVariacao();
    expect(coeficienteVariacao).toBeCloseTo((Math.sqrt(2.0) / 3) * 100);
  });

  test('Deve remover os outliers corretamente', () => {
    const analise = new AnaliseDeDados([1, 2, 3, 4, 5, 100]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([1, 2, 3, 4, 5]);  
  });

  test('Deve calcular a correlação corretamente entre dois conjuntos de dados', () => {
    const analise1 = new AnaliseDeDados([1, 2, 3]);
    const analise2 = [4, 5, 6];
    expect(analise1.calcularCorrelacao(analise2)).toBeCloseTo(1 , 10);  
  });

  test('Deve retornar null para correlação quando os arrays têm tamanhos diferentes', () => {
    const analise1 = new AnaliseDeDados([1, 2, 3]);
    const analise2 = [4, 5];
    expect(analise1.calcularCorrelacao(analise2)).toBeNull();  
  });

});
