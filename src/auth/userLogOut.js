import { whateverAuth } from "../firebase/config";

let error = null;

const logOut = async () => {
  error = null;

  try {
    await whateverAuth.signOut();
  } catch (err) {
    error = err.message;
  }
};

const userLogOut = () => {
  return { error, logOut };
};

export default userLogOut;
