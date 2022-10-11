'use strict'

class Device{
    constructor (name, type, ampere){
        this.name = name;
        this.type = type;
        this.wattage = ampere*220;
        this.isOn = false;
    }

        deviceOn() {
            this.isOn = true;
        }
        deviceOff(){
            this.isOn = false;
        }
        getInfo(){
            let onOrOff;
            if (this.isOn === true){
                onOrOff = 'Прибор включен'
            }
            else{
                onOrOff = 'Прибор выключен'
            }
            console.log(`Название - ${this.name}, Вид - ${this.type}, Мощность - ${this.wattage}, ${onOrOff}`);
        }
}



class MobileDevice extends Device{
        constructor (name, type, ampere){
        super(name, type, ampere);
        this.operator = "Оператор не установлен"
        }
        setOperator(operator){
            this.operator = operator;
        }
        getOperator(){
            console.log(`Мобильный оператор - ${this.operator}`);
        }
    }



let laptop = new Device("Asus", "Computer", 3);
laptop.deviceOn();
laptop.getInfo();

let smartphone5G = new MobileDevice("Samsung", "Smartphone", 1);
smartphone5G.deviceOff();
smartphone5G.getInfo();
smartphone5G.setOperator("Мегафон");
smartphone5G.getOperator();


console.log(laptop);
console.log(smartphone5G);