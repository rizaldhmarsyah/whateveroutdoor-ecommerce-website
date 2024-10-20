import { whateverAuth } from "../firebase/config";

let error = null;

const login = async (email, password) => {
  error = null;

  try {
    const res = await whateverAuth.signInWithEmailAndPassword(email, password);
    error = null;
    console.log(res.user);
    localStorage.setItem("user", JSON.stringify(res.user));

    return res;
  } catch (err) {
    error = err.message;
  }
};

const userLogin = () => {
  return { error, login };
};

export default userLogin;
