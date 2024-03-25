import { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../api/auth";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    loading,
    setLoading,
    signInWithGoogle,
    signInWithFacebook,
    createUser,
    updateUserProfile,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const image = event.target.image.files[0];

    // Validate image extension
    const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
    const imageExtension = image.name.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(imageExtension)) {
      toast.error(
        "Invalid image file type. Please upload a valid image (jpg, jpeg, png, gif)."
      );
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(name, imageUrl)
              .then(() => {
                toast.success("Signup successful");
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900">
          <div className="mb-8 text-center">
            <img
              src="https://i.ibb.co/dGL5trf/logos.png"
              className="mx-24 mb-4 w-40 h-10"
            />
            <h1 className="text-xl font-medium text-gray-400">
              Create an account
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  data-cy="error-name"
                  data-cyp="name-input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#57baea] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  data-cy="error-email"
                  data-cyp="email-input"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#57baea] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  data-cy="error-password"
                  data-cyp="password-input"
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#57baea] bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                data-cy="submit"
                type="submit"
                className="bg-[#57baea] w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center border m-3 py-2 border-gray-300 rounded-full cursor-pointer"
          >
            <FcGoogle size={32} />
            <p className="ml-10 mr-16">Continue with Google</p>
          </div>
          <div
            onClick={handleFacebookSignIn}
            className="flex justify-center items-center border m-3 py-2 border-gray-300 rounded-full cursor-pointer"
          >
            <FaFacebook size={32} />
            <p className="ml-9 mr-12">Continue with Facebook</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-sky-500 text-[#57baea]"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
