class Comida {

    constructor() {

        this.cuadros = new Array();

        this.construirCuerpo();
        this.asignarClases();
        this.colocar();
        this.agregarElementos();

    }

    construirCuerpo() {

        for (var i = 0; i < 4; i++) {

            this.cuadros[i] = document.createElement("div");

        }

    }

    asignarClases() {

        this.cuadros[0].className = "snake comida";
        this.cuadros[1].className = "snake tapa comida";
        this.cuadros[2].className = "snake atras comida";
        this.cuadros[3].className = "snake alante comida";

    }

    posicionRandom() {

        return (Math.round(Math.random() * 9)) * 40;

    }

    colocar() {

        this.x = this.posicionRandom();
        this.y = this.posicionRandom();

        for (var i = 0; i < this.cuadros.length; i++) {

            this.cuadros[i].style.left = this.x + "px";
            this.cuadros[i].style.top = this.y + "px";

        }

    }

    agregarElementos() {

        let areaJ = document.querySelector("#areaJuego");
        
        for (var i = 0; i < this.cuadros.length; i++) {

            areaJ.appendChild(this.cuadros[i]);

        }

    }

}