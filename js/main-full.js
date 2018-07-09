/*сохраняем введенные данные в локальном хранилище (http://simonenko.su/38146501854/improving-ux-for-web-form#)*/
if (window.localStorage) {
  var writeUsOpenRadio = document.getElementById('write-us-open-radio');
  var formFields = Array.prototype.slice.call(document.querySelector('.write-us-form').querySelectorAll('[name]'));
  
  writeUsOpenRadio.addEventListener('change', function() {
    if (writeUsOpenRadio.checked) {
      formFields.forEach(function(element) {
        var name = element.getAttribute('name');
        element.value = localStorage.getItem(name) || '';
        element.onkeyup = function() {
          localStorage.setItem(name, element.value);
        }
      });
    }
  }); 
}