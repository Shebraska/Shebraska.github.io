function myMenu() {
  var item = document.querySelectorAll('.item');
  item.forEach(function(it) {
    if (it.classList.contains('active')) {
      it.classList.remove('active'), document.getElementById("menu").style.flexDirection = "row", document.getElementById("toggle").style.paddingRight = "3rem";
    } else {
      it.classList.add('active'), document.getElementById("menu").style.flexDirection = "column", document.getElementById("toggle").style.paddingRight = "0";
    }
  })
};

function myItem() {
  var item2 = document.querySelectorAll('.item');
  item2.forEach(function(it2) {
    it2.classList.remove('active');
    document.getElementById("menu").style.flexDirection = "row";
    document.getElementById("toggle").style.paddingRight = "3rem";
  })
};

window.onscroll = function() {
  var media = window.matchMedia("(min-width: 1050px)");
  if (media.matches) {
    document.getElementById("boven").style.display = "none";
  } else {
    scrollFunction()
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("boven").style.display = "flex";
  } else {
    document.getElementById("boven").style.display = "none";
  }
};
