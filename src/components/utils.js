function c_v2(e, classes = '') {
  let foo = document.createElement(e);
  foo.className = classes;
  return foo;
}

function g_v2(e, isClass = false, qAll = false, isTag = false, i = 0) {
  if (isClass) {
    return document.querySelectorAll('.' + e)[i];
  }
  else if (qAll) {
    return document.querySelectorAll('.' + e);
  }
  else if (isTag) {
    return document.getElementsByTagName(e)[i];
  }
  return document.getElementById(e);
}

function modal(id) {
  g_v2(id).classList.toggle('modal--is-visible')
}

function openModal(modal) {
  var event = new CustomEvent('openModal');
  modal.dispatchEvent(event);
}

function closeModal(element) {
  var event = new CustomEvent('closeModal');
  element.dispatchEvent(event);
}

export { c_v2, g_v2, modal, openModal, closeModal }