function myMenu() {
  var item = document.querySelectorAll('.item');
  item.forEach(function(it) {
    if (it.classList.contains('active'))
    {it.classList.remove('active')}
    else {it.classList.add('active')}
  })
};
