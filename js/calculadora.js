/**Objeto para definir las propiedades d la calculadora */

var propCal = {
    teclado: document.querySelectorAll('#calculadora ul li'),
    accion: null,
    caja:document.querySelectorAll('#operaciones'),
    digito: 0,
    cantidadSigno:0,
    cantidadDecimal:false
}

/**Objeto para definir todos los metodos que vamos a definir en la calculadora */
var metCal = {
    inicio: function () {
        console.log(propCal.teclado);
        propCal.teclado.forEach(element => {
            element.addEventListener('click', metCal.oprimirTecla);
        });
    },
    oprimirTecla: function (tecla) { 
         console.log(tecla);
        propCal.accion=tecla.target.getAttribute('class');
        // console.log(propCal.accion);  
        propCal.digito=tecla.target.innerHTML;
        console.log(propCal.digito);
        metCal.calculadora(propCal.accion,propCal.digito);
    
    },
    calculadora:function(accion){
        switch (accion) {
            case 'numero':
            propCal.cantidadSigno=0;
            console.log(propCal.cantidadSigno);
            if (propCal.operaciones.innerHTML==0) {
                propCal.operaciones.innerHTML=digito;
            }
            else{
                // console.log(accion);
                propCal.operaciones.innerHTML+=digito;
            } 
                break;
            case 'signo':
            propCal.cantidadSigno++;
            if(propCal.cantidadSigno==1){
                propCal.operaciones.innerHTML+=digito;
            }
            
            console.log(accion);
            break;
            case 'decimal':
            if(!propCal.cantidadDecimal){
                propCal.operaciones.innerHTML+=digito;
            }
                console.log(accion)
                break;
            case 'igual':
                console.log(accion)
                break;
            default:
                break;
        }
    },
    borrar:function();
    propCal.operaciones.innerHTML=0;




metCal.inicio();
