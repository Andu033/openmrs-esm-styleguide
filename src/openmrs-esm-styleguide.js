import setPublicPath from "./set-public-path.js";

setPublicPath();
import(/* webpackChunkName: "styleguide-entry" */ "./styleguide-entry");

export { showToast } from "./toasts/toasts.js";
