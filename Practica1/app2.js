function operaciones(op)
{

    

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            console.log("ingrese el primer numero: ", n1);
            console.log("ingrese el segundo numero: ", n2);
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            console.log("ingrese el primer numero: ", n1);
            console.log("ingrese el segundo numero: ", n2);
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            console.log("ingrese el primer numero: ", n1);
            console.log("ingrese el segundo numero: ", n2);
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            console.log("ingrese el primer numero: ", n1);
            console.log("ingrese el segundo numero: ", n2);
            return (parseInt(n1) / parseInt(n2));
        }


    };

}