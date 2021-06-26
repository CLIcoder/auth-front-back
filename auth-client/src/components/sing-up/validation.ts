const validation = ({ email, password, confirm_password, confirm }) => {
  const error: any = {};
  if (!/\S+@\S+\.\S+/.test(email) || email.length > 100)
    error.email = "Please type a valide mail";
  if (password !== confirm_password) error.password = "password does not match";

  if (password.length <= 5)
    error.password = "You should have at least 6 caracter";

  if (!confirm) error.confirm = "You should agree to terms";

  if (Object.entries(error).length === 0) return false;

  return error;
};

export default validation;
