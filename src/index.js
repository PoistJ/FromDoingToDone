import { setTaskBtn } from "./displayUI.js";
import { addNewItem, createDefaultProject } from "./listfunction.js";
import "./styles.css";

if (process.env.NODE_ENV != 'production') {
    console.log('Looks like we are in development mode');
}

setTaskBtn();
createDefaultProject();