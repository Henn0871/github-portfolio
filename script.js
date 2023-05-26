document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('change', function() {
      document.body.classList.toggle('blue');
    });
  });