export default function createObserver(inViewCallback = noop, newOptions = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  return new IntersectionObserver(inViewCallback, Object.assign(defaultOptions, newOptions));
}
