'use strinct'

window.onload = function () {
  
  function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-velocity')

      const x = (window.innerWidth - e.pageX * speed);
      const y = (window.innerWidth - e.pageY * speed);
      // image따라서 좀 다르다.
      layer.style.transform = `translateX(${x}) translateY(${y}px)`;
    });
  }
  document.addEventListener("mousemove", parallax);

}