function calculate(e) {
    e.preventDefault();
    let N, M, C, I;
    // Número de años
    N = document.getElementById("months").value / 12;
    // Capital inicial
    C = parseFloat(document.getElementById("ci").value);
    // APR
    I = document.getElementById("apr").value / 100;
    // Capital final
    M = C * Math.pow(1 + I, N);
    console.log(N, M, C, I);
    putText("Capital: " + M + "\nGanancias totales: " + (M - C));
  }

  function putText(texto) {
    document.querySelector("p").setAttribute("title" , texto);
  }