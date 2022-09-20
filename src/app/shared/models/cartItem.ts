
import { Foods } from "./food";

export class CartItem {
    price: any;
    constructor(food: Foods) {
        this.food = food;
    }
    food: Foods;
    quantity: number = 1;
    getPrice(): Number {
        return this.food.price * this.quantity;
    }
}