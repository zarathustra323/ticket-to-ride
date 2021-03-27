const addListeners = (el) => {
  document.addEventListener('click', el.eventOnClick);
  document.addEventListener('touchstart', el.eventOnClick);
};
const removeListeners = (el) => {
  document.removeEventListener('click', el.eventOnClick);
  document.removeEventListener('touchstart', el.eventOnClick);
};

export default {
  bind(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.eventOnClick = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event);
      }
    };
    addListeners(el);
  },

  unbind(el) {
    removeListeners(el);
  },
};
