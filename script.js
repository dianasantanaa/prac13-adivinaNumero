let numeroAleatorio;//colocamos nuestras variables 
        let intentos = 0;
//agregamos una funcion para pensar un numero
        function pensarNumero() {
            //estara de entre el 1 al 50
            numeroAleatorio = Math.floor(Math.random() * 50) + 1;
            console.log(numeroAleatorio);
            intentos = 0;//nos arrojara el resultado
            document.getElementById("resultado").textContent = "";
        }
//damos la funcion para adivimnar
        function adivinarNumero() {
            //agregamos una variable con el numero que ingresaran
            let numeroUsuario = parseInt(document.getElementById("numero").value);
            intentos++;
//solo se t5endran 5 intentos para adivinar el numero random
            if (intentos > 5) {
                //si el numero no coincide despues de los intentos te dara el mensaje con el numero que realmente era
                document.getElementById("resultado").textContent = "Tonto El número era " + numeroAleatorio + ".";
            } else if (numeroUsuario === numeroAleatorio) {//si el numero coincide te dara el siguiente mensaje
                document.getElementById("resultado").textContent = "Adivinaste el numero!! :D en: " + intentos + " intentos.";
            } else {
                let diferencia = Math.abs(numeroUsuario - numeroAleatorio);
                let pista;//agregaremos las pistas
                if (diferencia < 5) {
                    //si son 5 numeros de diferencia te dira que es caliente (estas muy cerca)
                    pista = "Caliente";
                } else if (diferencia < 10) {
                    //si son 10 numeros de diferencia te dira que es tibio
                    pista = "Tibio";
                } else {
                    // si estas muy lejos te dira que es frio
                    pista = "Frío";
                }//cuando adivines te dira en cuantos intentos lo lograste
                document.getElementById("resultado").textContent = "Intento " + intentos + ": " + pista + ".";
            }
        }