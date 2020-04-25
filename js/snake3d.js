window.addEventListener("load", () => {

    let espaciado = 40;

    let snake = new Cabeza(0, 0);
    let comida = new Comida();

    let xdir = 0;
    let ydir = 0;

    let ejex = true;
    let ejey = true;

    document.addEventListener("keydown", () => {

        let cod = event.keyCode;

        if (ejex) {

            if (cod == 38) {
                xdir = 0;
                ydir = -espaciado;
                ejex = false;
                ejey = true;
            }
            
            if (cod == 40) {
                xdir = 0;
                ydir = espaciado;
                ejex = false;
                ejey = true;
            }

        }

        if (ejey) {

            if (cod == 37) {
                xdir = -espaciado;
                ydir = 0;
                ejex = true;
                ejey = false;
            }

            if (cod == 39) {
                xdir = espaciado;
                ydir = 0;
                ejex = true;
                ejey = false;
            }

        }

    });

    function mover() {

        let nx = snake.x + xdir;
        let ny = snake.y + ydir;

        snake.mover(nx, ny);

    }

    function colisiones() {

        if (snake.choqueBloque(comida)) {
            snake.agregar();
            comida.colocar();
        }
        if (snake.x < 0 || snake.x > 360 || snake.y < 0 || snake.y > 360) {
            findejuego();
        }
        let temp = null;
        try {
            temp = snake.verSiguiente().verSiguiente();
        } catch (err) {
            temp = null;
        }

        while (temp != null) {

            if (snake.choqueBloque(temp)) {

                findejuego();

                temp = null;

            } else {

                temp = temp.verSiguiente();

            }

        }

    }

    function findejuego() {

        alert("Perdiste");

        document.location.reload();

    }

    function bucle() {

        mover();

        colisiones();

    }

    setInterval(bucle, 300);

});
