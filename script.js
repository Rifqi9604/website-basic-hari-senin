function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    const navLinks = document.querySelector(".nav-links"); // Pindahkan deklarasi ke dalam fungsi jika perlu
    navLinks.classList.toggle('top-[10%]');
  }
  