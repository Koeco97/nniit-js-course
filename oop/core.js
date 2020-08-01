// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y){
        this.x = typeof x !== 'undefined' ?  x : 0;
        this.y = typeof y !== 'undefined' ? y : 0;
    }
    getDistance(){
        return Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2));
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x,y,z){
        super(x, y);
        this.z = typeof z !== 'undefined' ? z : 0;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.queue = [];
    }
    
    add(item){
        this.queue.push(item);
    }
    peek(){
        return this.queue.shift();
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
