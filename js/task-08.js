const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Fill all the gaps in!");
  }

  const info = {
    email: email.value,
    password: password.value,
  };
  console.log(info);

  event.currentTarget.reset();
});
