// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
// import {renderBlogForm} from './src/controllers/blog.controller.js';
import { renderBlogForm } from "./src/controllers/blog.controller";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here


app.get('/createblog',renderBlogForm);

// app.use('src/views');


export default app;
