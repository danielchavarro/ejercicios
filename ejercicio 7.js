enrutador . get ( ' / siete ' , ( req , res ) => {
    res . render ( ' siete ' );
});

enrutador . post ( ' / ejercicio7 ' , ( req , res ) => {

    var numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8
    var numeros = [];
    var suma =  0 ;

    numero1 =  parseInt ( req . body . num1 );
    numero2 =  parseInt ( req . body . num2 );
    numero3 =  parseInt ( req . body . num3 );
    numero4 =  parseInt ( req . body . num4 );
    numero5 =  parseInt ( req . body . num5 );
    numero6 =  parseInt ( req . body . num6 );
    numero7 =  parseInt ( req . body . num7 );
    numero8 =  parseInt ( req . body . num8 );

    numeros . push (numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8);
    
    for ( var i =  0 ; i <=  numeros . length - 1 ; i ++ ) {
        suma = suma + numeros [i];
    };

    res . render ( ' siete ' , {
        suma : suma
    });

});