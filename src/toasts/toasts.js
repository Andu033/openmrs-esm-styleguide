export function showToast(description) {
  var toast = document.createElement("DIV");
  var divider = document.createElement("DIV");
  var innerDiv = document.createElement("p");
  var textnode = document.createTextNode(description);
  var button = document.createElement("button");

  button.setAttribute("id", "omrs-toast-btn");
  toast.setAttribute("id", "omrs-toast");
  divider.setAttribute("id", "divider");
  innerDiv.setAttribute("id", "text");

  innerDiv.appendChild(textnode);
  toast.appendChild(innerDiv);
  toast.append(divider);
  toast.append(button);

  var timeout = setTimeout(function() {
    document.body.removeChild(toast);
  }, 10000);

  button.onclick = function() {
    document.body.removeChild(toast);
    clearTimeout(timeout);
  };

  toast.className = "show";

  document.body.appendChild(toast);
}
