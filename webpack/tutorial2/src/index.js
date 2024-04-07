import { generateId } from "./generateId";
import webpack from "./asset/webpack.svg"
console.log(generateId(100))
const webpackImg = document.getElementById('webpackImg')
webpackImg.src = webpack