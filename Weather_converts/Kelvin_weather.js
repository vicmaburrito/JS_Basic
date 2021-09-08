const kelvin = 293 ;
//In the line above create a initial temperature in Kelvin.
const celsius = kelvin - 273;
//Celsius it's a new varible used for 273 degrees less kelvin
let fahrenheit = celsius * (9/5) + 32;
//Fahrenheit it's a result of the above equation 
fahrenheit = Math.floor(fahrenheit);
//In the previous variable it reassigns itself with a float value
let newton = celsius * (33/100);
// Convert to Newton
newton = Math.floor(newton);
// Round down
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);