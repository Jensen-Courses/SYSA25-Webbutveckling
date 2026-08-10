import { MyCar, NewCar } from './objects.js';
import { IVehicle } from './interfaces.js';

const initApp = () => {
    console.log(MyCar);
    console.log(NewCar);

    const ford: IVehicle = {
        options: {
            id: 1,
            manufacturer: "Ford",
            model: "Fusion",
            modelYear: 2008,
            mileage: 120000,
            color: "Brown Metallic",
        },
        startEngine() {
            return "Vrooom";
        }
    };

    // ford.options.id = 10;

    console.log(ford);
};

document.addEventListener("DOMContentLoaded", initApp);