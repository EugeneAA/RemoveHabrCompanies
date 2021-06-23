function remove() {
  tag_name = "a";
  let els = document.getElementsByTagName(tag_name);
  Array.prototype.forEach.call(els, function(el) {
    if (el.href.includes("company")) {
      var art_el = el.parentElement.parentElement;
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

// Выбираем целевой элемент
var target = document.getElementById('app');

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
    attributes: true,
    childList: true,
    subtree: true
};

// Колбэк-функция при срабатывании мутации
const callback = function(mutationsList, observer) {
  remove();
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(target, config);



window.onhashchange = remove;
