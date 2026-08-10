import { MyCar, NewCar } from './objects.js';
const initApp = () => {
    console.log(MyCar);
    console.log(NewCar);
    const ford = {
        id: 1,
        color: "Brown Metallic",
        manufacturer: "Ford",
        model: "Fusion",
        modelYear: 2007,
        mileage: 120000,
    };
    console.log(ford);
};
document.addEventListener("DOMContentLoaded", initApp);
