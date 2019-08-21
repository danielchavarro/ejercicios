
enrutador . get ( ' / cuatro ' , ( req , res ) => {
    res . render ( ' cuatro ' );
});

enrutador . post ( ' / ejercicio4 ' , ( req , res ) => {
    var numero =  M . piso ( Math . random () * ( 1 + 100 ));
    var resNumero;
    if (numero %  2  ==  0 ) {
        resNumero =  ' Es par ' ;
    } más {
        resNumero =  ' Es impar ' ;
    }

    res . render ( ' cuatro ' , {
        numero : numero,
        resNumero : resNumero
    });
});
