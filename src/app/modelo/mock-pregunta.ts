import { Pregunta } from './pregunta';
//Completamos una lista con el contenido
export const PREGUNTAS: Pregunta[] = [
  {  pregunta: "¿Cómo se define TypeScript?", respuesta: " TypeScript es un lenguaje que agrega componentes de tipo estatico y otras funciones a JavaScript para ayudar al desarrollador para tener un código mas seguro,escalable y mantenible." },
  {  pregunta: "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?", respuesta: " La principal diferencia es que en TypeScript agrega tipado estático a JavaScript lo que le lleva  a ser mas seguro y mas facil de mantener en proyectos grandes y complejos" },
  {  pregunta: "Muestra la lista de tipos básicos de TypeScript.", respuesta: "string,number,boolean,array,null,undefined,object,void,any,tuple,enum,never" },
  {  pregunta: "¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?", respuesta: "interface,class,type" },
  {  pregunta: "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.", respuesta: "No puedes ejecutar directamente código TypeScript en un navegador web, los navegadores entienden JavaScript y no TypeScript.Escribe el codigo en TypeScript despues lo compila con el tsc lo transforma a .js se carga en el navegador y se ejecuta" },
  {  pregunta: "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?", respuesta: "El Source Maps sirve para facilitar la depuracion de código de TypeScript en el navegador ya que proporciona una relacion directa con el JS en ejecución" },
  {  pregunta: "¿Para qué sirve el archivo tsconfig.json?", respuesta: "Es un archivo de configuración en TypeScript que se utiliza para especificar como se compilará y se comportará un proyecto.Es fundamental para la personalizaciób y automatizar la compilación de TypeScript" }
];