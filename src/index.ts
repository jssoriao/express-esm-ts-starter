import "./pre-start";
import { sum } from "@/lib/math";

const v = sum(1, 2, 3, 4, 5);
const nodeEnv = process.env.NODE_ENV;

console.log(`sum(1, 2, 3, 4, 5) = ${v}`);
console.log(`NODE_ENV = ${nodeEnv}`);
