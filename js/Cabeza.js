class Cabeza {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        
        this.cuadros = new Array();
        
        this.siguiente = null;
        
        this.construirCuerpo();
        this.asignarClases();

        this.mover(this.x, this.y);
        
        this.agregarElementos();
    
    }

    construirCuerpo() {

        for (var i = 0; i < 4; i++) {

            this.cuadros[i] = document.createElement("div");

        }

    }

    asignarClases() {

        this.cuadros[0].className = "snake";
        this.cuadros[1].className = "snake tapa";
        this.cuadros[2].className = "snake atras";
        this.cuadros[3].className = "snake alante";

    }

    mover(x, y) {

        if (this.siguiente != null) {

            this.siguiente.mover(this.x, this.y);

        }

        this.x = x;
        this.y = y;

        for (var i = 0; i < this.cuadros.length; i++) {

            this.cuadros[i].style.left = this.x + "px";
            this.cuadros[i].style.top = this.y + "px";

        }

    }
    agregar() {

        if (this.siguiente == null) {

            this.siguiente = new Cabeza(this.x, this.y);

        } else {

            this.siguiente.agregar();

        }

    }
    agregarElementos() {

        let areaJ = document.querySelector("#areaJuego");
        
        for (var i = 0; i < this.cuadros.length; i++) {

            areaJ.appendChild(this.cuadros[i]);

        }

    }

    choqueBloque(otro) {

        var difx = Math.abs(this.x - otro.x);
        var dify = Math.abs(this.y - otro.y);

        if (difx < 40 && dify < 40) {

            return true;

        } else {

            return false;

        }

    }

    verSiguiente() {

        return this.siguiente;

    }

}