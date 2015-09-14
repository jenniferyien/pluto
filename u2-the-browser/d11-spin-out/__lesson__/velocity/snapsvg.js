window.addEventListener('load', function() {
  var pig = new Pig("#pig");
  var fox = new Fox("#fox");
  var lion = new Lion("#lion");

  // Enables you to access animals from the console
  window.pig = pig;
  window.fox = fox;
  window.lion = lion;

  setInterval(function() { fox.look() }, 1000);
  setInterval(function() { lion.look() }, 2000);
  setInterval(function() { fox.wag() }, 1000);
  setInterval(function() { pig.wag() }, 1000);
  document.querySelector('a.snort').addEventListener('click',
    function() { pig.snort(); return false; }
  );
  pig.svg.hover(function() { pig.alert(); },
    function() { pig.relax(); }
  );
  fox.svg.hover(function() { fox.alert(); },
    function() { fox.relax(); }
  );
})