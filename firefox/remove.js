
function remove() {
  tag_name = "a";
  child_name = "li";
  let els = document.getElementsByTagName(tag_name);
  Array.prototype.forEach.call(els, function(el) {
    if (el.href.includes("company")) {
      console.log(el.href);
      var art_el = el.closest(child_name);
      art_el.innerHTML = '';
      art_el.remove();
    } else {
      // console.log(el.href);
    }
  });
}
// remove("a", "article");

window.addEventListener('load', function () {
  remove();
});
if ("onhashchange" in window) {
  remove();
}
window.onhashchange = remove;
