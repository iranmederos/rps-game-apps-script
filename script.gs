var rondas = 1;
function evaluarResultados() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = sheet.getActiveSheet();
  var array_data = hoja.getDataRange().getValues();
  var cant_empates = 0;
  var cant_ganadores = 0;
  var array_empates = [];
  var array_ganadores = [];
  var array_perdedores = [];

  hoja.getRange("E2:E").clearContent();

  for (let fila = 1; fila < array_data.length; fila += 2) {
    var dato1 = array_data[fila][2];
    var dato2 = "";
    var ganador = "";
    var perdedor = "";

    if (fila + 1 < array_data.length) {
      dato2 = array_data[fila + 1][2];

      if (dato1 === "Piedra" && dato2 === "Tijeras") {
        ganador = array_data[fila][1];
        perdedor = array_data[fila + 1][1];
      } else if (dato1 === "Tijeras" && dato2 === "Piedra") {
        ganador = array_data[fila + 1][1];
        perdedor = array_data[fila][1];
      } else if (dato1 === "Tijeras" && dato2 === "Papel") {
        ganador = array_data[fila][1];
        perdedor = array_data[fila + 1][1];
      } else if (dato1 === "Papel" && dato2 === "Tijeras") {
        ganador = array_data[fila + 1][1];
        perdedor = array_data[fila][1];
      } else if (dato1 === "Papel" && dato2 === "Piedra") {
        ganador = array_data[fila][1];
        perdedor = array_data[fila + 1][1];
      } else if (dato1 === "Piedra" && dato2 === "Papel") {
        ganador = array_data[fila + 1][1];
        perdedor = array_data[fila][1];
      }
    } else {
      ganador = array_data[fila][1];
    }

    if (dato1 === dato2) {
      array_empates.push([array_data[fila][1] + " - " + dato1]);
      array_empates.push([array_data[fila + 1][1] + " - " + dato2]);
      cant_empates++;
    } else {
      array_ganadores.push([ganador]);
      array_perdedores.push([perdedor]);
      cant_ganadores++;
    }
  }
  if (cant_empates != 0){
    hoja.getRange(2, 5, array_empates.length).setValues(array_empates).setBackgroundRGB(255, 255, 0);
  }

  if (cant_ganadores != 0)
    hoja.getRange(2, 4, array_ganadores.length).setValues(array_ganadores).setBackgroundRGB(0, 255, 0);

  if (cant_ganadores != 0 && cant_empates === 0) {
    var nuevaHoja = sheet.insertSheet();
    nuevaHoja.setName("Ganador/es ronda " + rondas);
    nuevaHoja.getRange(1, 1, array_ganadores.length, 1).setValues(array_ganadores).setBackgroundRGB(0, 255, 0);
    nuevaHoja.getRange(1, 2, array_perdedores.length, 1).setValues(array_perdedores).setBackgroundRGB(255, 0, 0);
  }

  console.log("cantidad de empates: " + cant_empates);
  console.log("cantidad de ganadores: " + cant_ganadores);
}
