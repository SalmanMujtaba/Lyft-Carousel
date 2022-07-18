document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.getElementById('form');
  form.addEventListener("submit", (e) => {
    validateForm(e);
  });
  document.getAnimations()
});

function focusElement(e) {
  e.target.parentElement.classList.remove("invalid");
  e.target.nextElementSibling.classList.remove('hide');
  e.target.previousElementSibling.classList.add('label-animate');

}

function blurElement(e) {
  if (e.target.value.trim().length === 0) {
    e.target.previousElementSibling.classList.remove('label-animate');
    e.target.nextElementSibling.classList.add('hide');
  }
  if (e.target.checkValidity()) {
    e.target.classList.remove("invalid");
    e.target.setAttribute("aria-invalid", "false");
  } else {
    e.target.setAttribute("aria-invalid", "true");
    e.target.parentElement.classList.add("invalid");

  }
}

function remove(event) {
  let input = event.target.parentElement.previousElementSibling
  input.value = "";
  input.previousElementSibling.classList.remove('label-animate');
  input.nextElementSibling.classList.add('hide');
  input.setAttribute("aria-invalid", "true");
  input.parentElement.classList.add("invalid");

}

function validateForm(e) {
  const form = e.target;
  if (form.checkValidity()) {
    // form is valid - make further checks
  } else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach(i => {
      if (i.type === "text" || i.type === "email") {
        if (i.checkValidity()) {
          i.parentElement.classList.remove('invalid');
        } else {

          // field is invalid - add class
          i.parentElement.classList.add('invalid');
        }
      }
    });
  }
};