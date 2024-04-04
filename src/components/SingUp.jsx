import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import app from "../firebase/farebase.init";

const SignUpForm = () => {
  const auth = getAuth(app);

  //states
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [Checkbox, setCheckbox] = useState(false);
  const [checkboxData, setCheckboxData] = useState("");

  //validation functionality
  const { userName, email, password } = inputData;
  console.log(userName, email, password, Checkbox);

  const validationEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validationPassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    console.log(passwordRegex.test(password));
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShow = () => {
    setShowIcon(!showIcon);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setCheckboxData("");

    if (!Checkbox) {
      setCheckboxData("Please agree to terms and conditions");
      return;
    } else if (!validationEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else if (!validationPassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      //update profile
      updateProfile(user, {
        displayName: userName,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then(() => {
          console.log("Name Updated");
          sendEmailVerification(user).then(() => {
            alert("please varify your account");
          });
        })
        .catch((error) => error.message);
      setInputData({ email: "", password: "", userName: "" });
      setCheckbox(false);

      setShowSuccessModal(true);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Email is already in use by another account");
      }
    }
  };

  return (
    <div className="my-6 flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#2B3440] text-gray-100">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold">
              Sign up
            </h2>
          </div>
          <form className="mt-8 space-y-2" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="UserName" className="block text-gray-400">
                  User Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="userName"
                  id="name"
                  placeholder="User Name"
                  className="w-full px-4 py-3 rounded-md border-gray-700 border bg-gray-900 text-gray-100 focus:border-violet-400"
                  value={userName}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email address"
                  className="w-full px-4 py-3 rounded-md border-gray-700 border bg-gray-900 text-gray-100 focus:border-violet-400"
                  value={email}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-gray-400">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type={showIcon ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-700 border bg-gray-900 text-gray-100 focus:border-violet-400"
                  value={password}
                  required
                />
                <p onClick={handleShow} className="absolute top-10 right-4">
                  {showIcon ? <FaRegEye /> : <FaRegEyeSlash />}
                </p>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                onChange={(e) => setCheckbox(e.target.checked)}
                type="checkbox"
                name="checkbox"
                id="name"
                checked={Checkbox}
              />{" "}
              <p className="text-gray-100">
                please agree with terms and conditions
              </p>
            </div>
            {checkboxData && (
              <p className="text-red-500 text-xs mt-1">{checkboxData}</p>
            )}
            <div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-white  common-color font-bold"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Create new account
            <Link to="/login" className="underline text-gray-100">
              Login
            </Link>
          </p>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-3">Sign-up Successful!</h3>
            <p>Your account has been created successfully.</p>
            <button
              className="mt-4 px-4 py-2 common-color text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
