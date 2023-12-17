import { WildberriesModel } from "./wildberriesModel";
import { WildberriesView } from "./wildberriesView";
import { WildberriesController } from "./wildberriesController";

const model = new WildberriesModel();
const view = new WildberriesView();
const controller = new WildberriesController(model, view);

addEventListener("DOMContentLoaded", controller.start());
