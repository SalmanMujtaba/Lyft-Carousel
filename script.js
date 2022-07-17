document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.getElementById('form');
  form.addEventListener("submit", (e) => {
    validateForm(e);
  });
});

function focusElement(e) {

  e.target.nextElementSibling.classList.remove('hide');
  e.target.previousElementSibling.classList.add('label-animate');

}

function blurElement(e) {
  e.target.nextElementSibling.classList.add('hide');
}

function remove(event) {
  console.log(event, "===");
  // event.target.previousElementSibling.value = "";
  // event.target.classList.remove('label-animate');
}

function validateForm(e) {
  const form = e.target;
  // console.log(form.checkValidity());
  if (form.checkValidity()) {
    // form is valid - make further checks
  } else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach(i => {
      console.log(i, i.checkValidity());
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