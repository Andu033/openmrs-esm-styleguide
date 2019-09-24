import { storiesOf } from "@storybook/html";
import html from "./toasts.stories.html";
import "./toasts.css";
import ejs from "ejs";

import { htmlStory } from "../story-helpers";
import { showToast } from "./toasts.js";
// storiesOf("OpenMRS Styleguide", module).add(
//   "Toasts",
//   () => htmlStory(html)
// );

storiesOf("OpenMRS Styleguide", module).add("MyState", () => {
  function init() {
    var button = document.querySelector(".js-toggle");
    button.addEventListener("click", showToast("This is a toast"));
  }

  document.addEventListener("DOMContentLoaded", init);
  return '<button class="js-toggle">Toggle</button>';
});
