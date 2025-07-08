import { setProjBtn, loadPage, setSubmitBtn } from "./displayUI.js";
import { addNewItem, createNewProject } from "./listfunction.js";
import "./styles.css";

if (process.env.NODE_ENV != 'production') {
    console.log('Looks like we are in development mode');
}

setProjBtn();
setSubmitBtn();
loadPage();