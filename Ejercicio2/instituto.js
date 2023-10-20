export default class Instituto {

    //creamos el constructor para cuardar los datos del instituto
    constructor(cod, name){
        this.codigo = cod;
        this.nombre = name;
        this.grupos = [];
    }
    //vamos a crear el método para obtener el codigo del intstituto
    get Codigo(){
        return this.codigo;
    }
    //metodo para obtener el numero total de alumnos
    get TotalAlumnos(){
        let numeroTotal = 0;
        for (var grupo of this.grupos){
            numeroTotal += grupo.numeroAlumnos;
        }
        return numeroTotal;
    }
    //nos faltaría poder añadir nuevos grupos
    agregarGrupo (numeroAlumnos, codGrupo){
        this.grupos.push({numeroAlumnos, codGrupo});
    }

    
}