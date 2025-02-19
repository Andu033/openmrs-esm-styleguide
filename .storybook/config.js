import { addDecorator, configure } from "@storybook/html";
import { withA11y } from "@storybook/addon-a11y";
import hljs from "highlight.js/lib/highlight";
import xmlLanguage from "highlight.js/lib/languages/xml";
import cssLanguage from "highlight.js/lib/languages/css";
import jsLanguage from "highlight.js/lib/languages/javascript";
import bashLanguage from "highlight.js/lib/languages/bash";
import "highlight.js/styles/a11y-dark.css";
import "highlight.js/styles/tomorrow-night.css";
import { withKnobs } from "@storybook/addon-knobs";

hljs.registerLanguage("xml", xmlLanguage);
hljs.registerLanguage("css", cssLanguage);
hljs.registerLanguage("js", jsLanguage);
hljs.registerLanguage("bash", bashLanguage);

addDecorator(withA11y);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
require("../src/intro.stories");
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
