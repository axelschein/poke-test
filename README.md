# PokeAPI
A journey into AppDirect - reactJS 

## Indice
* [Funcionalidades](#funcionalidades)
  * [Funcionalidades obligatorias](#funcionalidades-obligatorias)
  * [Funcionalidades extras](#funcionalidades-extras)
* [Notas](#notas)
* [Instalacion del proyecto](#instalación-del-proyecto)
  * [Iniciando la App](#iniciando-la-app)


## Funcionalidades

### Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del ejercicio y es fundamental que funcionen correctamente.
 
* La aplicación deberá contar con dos componentes:
  
  1 - Componente de detalle funcional
  
          * Este componente mostrá el detalle de el pokemon haciendo uso de hooks basicos del ciclo de vida de reactJS.
            * Se espera uso de useEffect para cuando se monta el componente
            * Se espera uso de useEffect para cuando se actualiza una variable o estado del componente
            * Se espera definicion y el uso de un estado de este componente con useState
            * Se espera uso de las props recibidas

  2 - Componente de detalle como clase

          * Este componente mostrá el detalle de el pokemon haciendo uso de clases y utilizando los metodos basicos del ciclo de vida de reactJS.
            * Se espera uso de componentDidMount
            * Se espera uso de componentDidUpdate
            * Se espera el uso de un constructor
            * Se espera definicion y el uso de un estado de este componente
            * Se espera uso de las props recibidas

* Comportamiento de la pagina definida en App.js 
        *  En App.js se hara la API call a PokeAPI y el resultado de la misma se deberá pasar a los componentes mencionados previamente.
        (Esta funcionalidad ya esta funcionando en el ejemplo)
    

### Funcionalidades extras

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta como `Nice to have`

    * Loading state
        * Seria de mucha ayuda indicarle al usuario que el componente de detalle esta cargando

    * Error state
        * Seria de mucha ayuda indicarle al usuario si hubo un error al conectar con la API o si fallo esta misma

    * Custom Hook
        * Como es el proceso para crear un hook nuevo ? Te animas a crear un custom hook ?


## Notas

    * La arquitectura presentada es un modelo, tanto nombres de componentes como la misma arquitectura puede ser cambiada a gusto del dev a cargo del desarrollo.

## Instalación del proyecto

### Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

Mucha suerte y éxitos! 
