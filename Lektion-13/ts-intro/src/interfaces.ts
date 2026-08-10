import { Vehicle, FixedVehicles } from './objects.js';

export interface IVehicle {
    options: FixedVehicles;
    startEngine(): string;
}

// export interface IVehicle extends IColor {
//     options: Vehicle;
//     startEngine(): string;
// }

// export interface IColor {
//     color: string;
// }