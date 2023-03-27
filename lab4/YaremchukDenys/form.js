function validateRegister() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let date = document.getElementById("date");
  let phone = document.getElementById("phone");
  let experience = document.getElementById("experience");
  let error = false;

  if (username.value.length < 6 || username.value.indexOf(" ") >= 0) {
    alert(
      "Enter correct username (must be equal or greater than 6 characters " +
        "and not contain white spaces)!!!"
    );
    error = true;
  } else if (password.value.length < 8) {
    alert(
      "Enter correct password (must be equal or greater " +
        "than 8 characters)!!!"
    );
    error = true;
  } else if (confirmPassword.value.length === 0) {
    alert("Confirm password!!!");
    error = true;
  } else if (confirmPassword.value !== password.value) {
    alert("Passwords do not match!!!");
    error = true;
  } else if (firstName.value.length === 0) {
    alert("Enter first name!!!");
    error = true;
  } else if (lastName.value.length === 0) {
    alert("Enter last name!!!");
    error = true;
  } else if (email.value.length === 0) {
    alert("Enter email!!!");
    error = true;
  } else if (!check_date(date.value)) {
    error = true;
  } else if (phone.value.length !== 0 && !check_phone(phone.value)) {
    alert("Enter phone number in correct format!!!");
    error = true;
  } else if (
    experience.value.length !== 0 &&
    !check_positive_integer(experience.value)
  ) {
    alert("Enter experience as positive integer!!!");
    error = true;
  }

  if (error === false) {
    alert("Registration complete!!!");
  }
  return !error;
}

function check_date(date) {
  let parts = date.split(".");
  if (parts.length !== 3) {
    alert("Enter date in correct format!!!");
    return false;
  }

  if (Number.isInteger(+parts[2])) {
    if (+parts[2] < 1900) {
      alert("Enter year in range from 1900 inclusively!!!");
      return false;
    }
  } else {
    alert("Enter year in correct format!!!");
    return false;
  }
  let year = +parts[2];

  if (
    parts[1].length == 2 &&
    ((parts[1].charAt(0) === "0" && Number.isInteger(+parts[1].charAt(1))) ||
      Number.isInteger(+parts[1]))
  ) {
    if (
      !(
        (parts[1].charAt(0) === "0" && +parts[1].charAt(1) > 0) ||
        (+parts[1] >= 10 && +parts[1] <= 12)
      )
    ) {
      alert("Enter month from 01 to 12!!!");
      return false;
    }
  } else {
    alert("Enter month in correct format!!!");
    return false;
  }
  let month = parts[1].charAt(0) === "0" ? +parts[1].charAt(1) : +parts[1];

  let max_days_in_month = new Date(year, month, 0).getDate();
  console.log(max_days_in_month);

  if (
    parts[0].length == 2 &&
    ((parts[0].charAt(0) === "0" && Number.isInteger(+parts[0].charAt(1))) ||
      Number.isInteger(+parts[0]))
  ) {
    if (
      !(
        (parts[0].charAt(0) === "0" && +parts[0].charAt(1) > 0) ||
        (+parts[0] >= 10 && +parts[0] <= max_days_in_month)
      )
    ) {
      alert("Enter correct day from 01 to " + max_days_in_month + "!!!");
      return false;
    }
  } else {
    alert("Enter day in correct format!!!");
    return false;
  }
  return true;
}

function check_phone(phone) {
  if (phone.charAt(0) !== "+") {
    return false;
  }
  let number_part = phone.slice(1);
  for (let i = 0; i < number_part.length; i++) {
    if (!Number.isInteger(+number_part.charAt(i))) {
      return false;
    }
  }
  return true;
}

function check_positive_integer(string) {
  if (Number.isInteger(+string)) {
    if (+string <= 0) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}
