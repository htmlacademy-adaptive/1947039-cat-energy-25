const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
let openNav;
function handleTabletChange(e) {
  let nav = document.querySelector('.main-nav');
  if(e.matches && nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    openNav = false;
  } else if(e.matches && !nav.classList.contains('main-nav--closed')) {
    openNav = true;
  } else {
    if (!openNav) {
      nav.classList.add('main-nav--closed');
    }
  }
}

mediaQueryTablet.addListener(handleTabletChange);
handleTabletChange(mediaQueryTablet);

