# rps-game-apps-script
Script evaluador de resultados para torneo del juego de piedra papel o tijeras.<br><br>
Se ingresan los datos a la hoja de google sheets y se ejecuta el script para saber los resultados de cada enfrentamiento, la evaluacion de los enfretamientos
es secuencial (1-2 | 3-4...).<br><br>
El script esta hecho en JS pero se ejecuta a travez de la extension de Apps Scripts para google sheets.

## Capturas
### Datos antes de ejecucion script:
![image](https://user-images.githubusercontent.com/55934667/233207633-7b5845ab-d2f0-46b5-a4a8-d3cce6168825.png)

### Datos luego de la ejecución:
![image](https://user-images.githubusercontent.com/55934667/233207905-1c52bb0d-6872-4739-9bc6-3040f052a036.png)

### Info desde Apps Script:
![image](https://user-images.githubusercontent.com/55934667/233208077-6768c3d8-9dbe-46f9-a796-8104c6273228.png)

### Sin empates:
![image](https://user-images.githubusercontent.com/55934667/233208331-b35698ef-35d3-4732-8bb9-815c8400b41e.png)
<br>
![image](https://user-images.githubusercontent.com/55934667/233208983-17ccd186-7568-4dcd-8ead-1ef07fb857e0.png)
<br>
El script creara una nueva hoja en caso de no haber empates.<br>
![image](https://user-images.githubusercontent.com/55934667/233208710-c6bcf896-9236-464c-bd53-e3ac8c4c44b3.png)
<br>
Se pueden ver los perdedores en rojo y los ganadores en verde, jugador sin adversario pasara automaticamente como ganador.
