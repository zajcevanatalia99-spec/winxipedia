document.addEventListener('DOMContentLoaded', function() {
  var next = document.querySelector('.next');
  var prev = document.querySelector('.prev');
  
  if (!next || !prev) return;

  next.addEventListener('click', function() {
    var items = document.querySelectorAll('.slide .item');
    if (items.length === 0) return;
    document.querySelector('.slide').appendChild(items[0]);
  });

  prev.addEventListener('click', function() {
    var items = document.querySelectorAll('.slide .item');
    if (items.length === 0) return;
    document.querySelector('.slide').prepend(items[items.length - 1]);
  });
});
