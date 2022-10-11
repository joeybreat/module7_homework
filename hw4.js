'use strict'

function Device(name, type, ampere){
    this.name = name;
    this.type = type;
    this.wattage = ampere*220;
    this.isOn = false;
    this.deviceOn = function(){
        this.isOn = true;
    }
    this.deviceOff = function(){
        this.isOn = false;
    }
}

Device.prototype.getInfo = function(){
    let onOrOff;
    if (this.isOn === true){
        onOrOff = 'Прибор включен'
    }
    else{
        onOrOff = 'Прибор выключен'
    }
    console.log(`Название - ${this.name}, Вид - ${this.type}, Мощность - ${this.wattage}, ${onOrOff}`);
}

function MobileDevice(name, type, ampere){
    this.name = name;
    this.type = type;
    this.wattage = ampere*220;
    this.operator = "Оператор не установлен"
    this.setOperator = function(operator){
        this.operator = operator;
    }
    this.getOperator = function(){
        console.log(`Мобильный оператор - ${this.operator}`);
    }
}

MobileDevice.prototype = new Device();

let laptop = new Device("Asus", "Computer", 3);
laptop.deviceOn();
laptop.getInfo();

let smartphone5G = new MobileDevice("Samsung", "Smartphone", 1);
smartphone5G.deviceOff();
smartphone5G.getInfo();
smartphone5G.setOperator("Мегафон");
smartphone5G.getOperator();