document.addEventListener('DOMContentLoaded', function() {

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const closeMenu = document.querySelector('.close-menu');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', openMobileMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  const hasSubmenu = document.querySelectorAll('.has-submenu > a');
  hasSubmenu.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      const icon = this.querySelector('i');

      if (submenu) {
        submenu.classList.toggle('open');
        if (icon) {
          icon.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const cartCount = document.querySelector('.cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  let count = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      count++;
      if (cartCount) {
        cartCount.textContent = count;
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
          cartCount.style.transform = 'scale(1)';
        }, 300);
      }
    });
  });

  const quickViewBtns = document.querySelectorAll('.quick-view');
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Quick View - Product details coming soon!');
    });
  });

  const wishlistBtns = document.querySelectorAll('.add-wishlist');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      icon.classList.toggle('fas');
      icon.classList.toggle('far');
      this.style.color = icon.classList.contains('fas') ? '#000' : '';
    });
  });

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        alert('Thank you for subscribing! You\'ll hear from us soon.');
        this.querySelector('input[type="email"]').value = '';
      }
    });
  }

  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

});
