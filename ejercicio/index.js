import * as math from './controller.js';
import chalk from 'chalk';

const a = math.suma(1, 2);
const b = math.suma(4, 5);
const x = math.multiplica(a, b);

console.log(chalk.green(x));