
function remove() {
  tag_name = "a";
  child_name = "li";
  let els = document.getElementsByTagName(tag_name);
  Array.prototype.forEach.call(els, function(el) {
    if (el.href.includes("company")) {
      var art_el = el.closest(child_name);
      if(art_el != null) 
      {
        art_el.innerHTML = '';
        art_el.remove();
      }
    }
  });
}

window.addEventListener('load', function () {
  remove();
});
if ("onhashchange" in window) {
  remove();
}
window.onhashchange = remove;
