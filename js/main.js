/**
 * Krishna Infotech - Core Client Interactions & Page Transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initPageTransitions();
  initMobileNav();
  initHeaderScroll();
  initCopyButtons();
  initWhatsAppForm();
  initSpecTabs();
  highlightActiveNav();
});

// 1. Sleek Preloader Animation
function initPreloader() {
  const preloader = document.getElementById('page-preloader');
  if (!preloader) return;

  const bar = preloader.querySelector('.preloader-bar');
  if (bar) {
    bar.style.width = '100%';
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }, 450);
  });

  // Safety fallback if load event already fired
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('preloader-hidden')) {
      preloader.classList.add('preloader-hidden');
    }
  }, 1800);
}

// 2. Smooth Cross-Page Transition
function initPageTransitions() {
  document.body.classList.add('page-loaded');

  const links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([href^="javascript:"])');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // If same domain HTML page
      if (href && (href.endsWith('.html') || href === '/' || href.startsWith('./') || href.startsWith('../'))) {
        e.preventDefault();
        document.body.classList.remove('page-loaded');
        document.body.classList.add('page-exiting');

        setTimeout(() => {
          window.location.href = href;
        }, 280);
      }
    });
  });
}

// 3. Highlight Current Navigation Page
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;
    const targetFile = linkHref.split('#')[0].split('/').pop() || 'index.html';
    
    if (targetFile === currentPath || (currentPath === '' && targetFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 4. Mobile Menu Navigation
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-nav-panel');
  const overlay = document.querySelector('.nav-overlay');

  if (!toggleBtn || !mobileMenu) return;

  function toggleMenu(isOpen) {
    mobileMenu.classList.toggle('open', isOpen);
    if (overlay) overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    toggleMenu(!isOpen);
  });

  if (overlay) {
    overlay.addEventListener('click', () => toggleMenu(false));
  }

  const closeLinks = mobileMenu.querySelectorAll('a');
  closeLinks.forEach(l => l.addEventListener('click', () => toggleMenu(false)));
}

// 5. Header Scroll Visual Effects
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 6. 1-Click Copy to Clipboard & Toast
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied: "${textToCopy}"`);
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        btn.classList.add('btn-copied');
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.classList.remove('btn-copied');
        }, 2200);
      } catch (err) {
        showToast('Failed to copy to clipboard', true);
      }
    });
  });
}

function showToast(message, isError = false) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'site-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.toggle('toast-error', isError);
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// 7. Interactive WhatsApp Inquiry Form
function initWhatsAppForm() {
  const form = document.getElementById('whatsapp-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value.trim() || 'Valued Customer';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || 'Not specified';
    const service = form.querySelector('[name="service"]')?.value || 'General IT Inquiry';
    const message = form.querySelector('[name="message"]')?.value.trim() || 'Requesting information & quotation.';

    const fullMessage = `Hello Krishna Infotech,%0A%0A*New Inquiry from Website:*%0A• *Client Name:* ${encodeURIComponent(name)}%0A• *Phone:* ${encodeURIComponent(phone)}%0A• *Service Needed:* ${encodeURIComponent(service)}%0A• *Requirement Details:* ${encodeURIComponent(message)}%0A%0APlease get in touch with me. Thank you!`;

    const waUrl = `https://wa.me/919819557374?text=${fullMessage}`;
    window.open(waUrl, '_blank');
  });
}

// 8. Interactive Specification & Category Tabs
function initSpecTabs() {
  const tabContainers = document.querySelectorAll('.filter-tabs');
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab-btn');
    const targetGroupId = container.getAttribute('data-target-group');
    const targetCards = document.querySelectorAll(`[data-group="${targetGroupId}"] .spec-card, [data-group="${targetGroupId}"] .product-card`);

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        targetCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            card.classList.remove('card-hidden');
          } else {
            card.classList.add('card-hidden');
            setTimeout(() => {
              if (card.classList.contains('card-hidden')) {
                card.style.display = 'none';
              }
            }, 250);
          }
        });
      });
    });
  });
}

// 9. Global Modal & Quote Helpers
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.handleQuoteSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('q-name')?.value.trim() || 'Client';
  const phone = document.getElementById('q-phone')?.value.trim() || '';
  const service = document.getElementById('q-service')?.value || 'General';
  const msg = document.getElementById('q-msg')?.value.trim() || '';
  const text = `Hello Krishna Infotech,%0A%0A*New Inquiry:*%0A• Name: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Service: ${encodeURIComponent(service)}%0A• Requirement: ${encodeURIComponent(msg)}%0A%0APlease provide quote & turnaround.`;
  window.open(`https://wa.me/919819557374?text=${text}`, '_blank');
};

window.handleComplaintSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('comp-name')?.value.trim() || 'Client';
  const phone = document.getElementById('comp-phone')?.value.trim() || '';
  const desc = document.getElementById('comp-desc')?.value.trim() || '';
  const text = `Hello Vikrant,%0A%0A*PRIORITY SUPPORT TICKET:*%0A• Personnel: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Issue Description: ${encodeURIComponent(desc)}`;
  window.open(`https://wa.me/919819557374?text=${text}`, '_blank');
  window.closeModal('complaint-modal');
};
