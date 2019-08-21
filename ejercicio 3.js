enrutador . get ( ' / tres ' , ( req , res ) => {
    res . render ( ' tres ' );
});

enrutador . post ( ' / ejercicio3 ' , ( req , res ) => {
    var numero1, numero2, numero3;
    var resNum1, resNum2, resNum3;

    numero1 =  s . piso ( Math . random () * ( 1 + 100 ));
    numero2 =  s . piso ( Math . random () * ( 1 + 100 ));
    numero3 =  s . piso ( Math . random () * ( 1 + 100 ));

    if (numero1 >  50 ) {
        resNum1 =  ' es mayor a 50 ' ;
    } else  if (numero1 > =  0  && numero1 <=  20 ) {
        resNum1 =  ' menor de 20 ' ;
    } else  if (numero1 <  0 ) {
        resNum1 =  ' es negativo ' ;
    } más {
        resNum1 =  ' no cumple con las condiciones ' ;
    }

    if (numero2 >  50 ) {
        resNum2 =  ' es mayor a 50 ' ;
    } else  if (numero2 > =  0  && numero2 <=  20 ) {
        resNum2 =  ' menor de 20 ' ;
    } else  if (numero2 <  0 ) {
        resNum2 =  ' es negativo ' ;
    } más {
        resNum2 =  ' no cumple con las condiciones ' ;
    }

    if (numero3 >  50 ) {
        resNum3 =  ' es mayor a 50 ' ;
    } else  if (numero3 > =  0  && numero3 <=  20 ) {
        resNum3 =  ' menor de 20 ' ;
    } else  if (numero3 <  0 ) {
        resNum3 =  ' es negativo ' ;
    } más {
        resNum3 =  ' no cumple con las condiciones ' ;
    }

    res . render ( ' tres ' , {
        numero1 : numero1,
        numero2 : numero2,
        numero3 : numero3,
        resNum1 : resNum1,
        resNum2 : resNum2,
        resNum3 : resNum3
    });
});