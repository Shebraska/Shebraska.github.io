function myMenu() {
  var item = document.querySelectorAll('.item');
  item.forEach(function(it) {
    if (it.classList.contains('active'))
    {it.classList.remove('active'), document.getElementById("menu").style.flexDirection = "row", document.getElementById("toggle").style.paddingRight = "3rem";}
    else {it.classList.add('active'), document.getElementById("menu").style.flexDirection = "column", document.getElementById("menu").style.backgroundColor = "#a1cae2", document.getElementById("toggle").style.paddingRight = "0";}
  })
};

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("menu").style.backgroundColor =  "#a1cae2", document.getElementById("wit").style.display = "inline-block", document.getElementById("bars").style.display = "inline-block";}
  else {
    document.getElementById("menu").style.backgroundColor = "transparent", document.getElementById("wit").style.display = "none", document.getElementById("bars").style.display = "none";}
}
