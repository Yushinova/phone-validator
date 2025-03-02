
export function validatePhone(number) {
    const regex = /\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    let isValid = regex.test(number);
    return isValid
  }