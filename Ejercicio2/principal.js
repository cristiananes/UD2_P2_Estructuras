import Instituto from "./instituto.js";
//crear una clase llamada Instituto: esta clase va a permitir crear objetos de este tipo.
//Un instituto necesita obligatoriamente el codigoInstituto y su nombre. 
//Además, almacenará grupos (una array simple que contiene objetos de tipo Grupo), 
//representan cada grupo que tiene el instituto. Cada grupo almacenara un codigo de grupo y un numero de alumnos
//el programa necesita gestionar la informacion necesaria para poder:
//conocer el codigo del instituto
//conocer el numero total de alunos del centro
//añadir nuevos grupos al instituto

var miInstituto = new Instituto(1, "Fleming");
miInstituto.agregarGrupo(19, "2ºDAW");
miInstituto.agregarGrupo(15, "2ºDAM");

console.log("codigo del insti: ", miInstituto.Codigo);
console.log("Numero total de alumnos: ", miInstituto.TotalAlumnos);

