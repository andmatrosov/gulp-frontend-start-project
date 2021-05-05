import LazyLoad from 'vanilla-lazyload';
import canUseWebp from '../helpers/canUseWebp';

export default () => {
  if (canUseWebp() === false) {
    const laztBgItems = document.querySelectorAll('.lazy[data-bg-fallback]');
    laztBgItems.forEach((item) => {
      const srcFallBack = item.getAttribute('data-bg-fallback');
      item.setAttribute('data-bg', srcFallBack);
    })
  }

  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });
};