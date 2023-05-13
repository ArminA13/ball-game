class Food {
    constructor (obj) {
        const rectangle = document.createElement("div");
        rectangle.classList.add("rectangle");

        rectangle.style.backgroundColor = obj.backgrondColor;
        this.top = 0;
        this.left = 0;
        this.initialPosition();
        rectangle.style.top = `${this.top}px`;
        rectangle.style.left = `${this.top}px`;
        document.body.appendChild(rectangle);


        
    }


    initialPosition () {
        this.top = Math.floor(1000 * Math.random());
        this.left = Math.floor(1000 * Math.random());
        this.food.style.left = `${this.left}px`;
        this.food.style.top = `${this.top}px`;

    }

};