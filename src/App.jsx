import { useEffect, useRef, useState } from "react";
import video from "./assets/video.mp4";
import Swal from "sweetalert2";

let ignore = false;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);

  const handleReg = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      if (password1Ref.current.value !== password2Ref.current.value) {
        Swal.fire({
          title: "Error",
          text: "Password Mismatch",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "red",
        });
      } else {
        Swal.fire({
          title: "Success",
          text: "Signup Successful",
          icon: "success",
          confirmButtonText: "Continue to Login",
          confirmButtonColor: "green",
        }).then(() => setIsLogin(!isLogin));
      }
    } else {
      Swal.fire({
        title: "Success",
        text: "Login Successful",
        icon: "success",
        confirmButtonText: "Close",
        confirmButtonColor: "green",
      }).then(() => {
        input1Ref.current.value = "";
        input2Ref.current.value = "";
        input3Ref.current.value = "";
      });
    }
  };

  useEffect(() => {
    if (!ignore) {
      const input = document.querySelectorAll(".telephone");
      input.forEach((item) => {
        window.intlTelInput(item, {
          utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
          allowDropdown: true,
          autoInsertDialCode: true,
          autoPlaceholder: "polite",
          customPlaceholder: null,
          excludeCountries: [],
          formatOnDisplay: true,
          geoIpLookup: null,
          hiddenInput: "",
          initialCountry: "",
          localizedCountries: null,
          nationalMode: true,
          onlyCountries: [],
          placeholderNumberType: "MOBILE",
          preferredCountries: ["us", "gb"],
          separateDialCode: false,
          showFlags: true,
        });
      });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <div>
        <video src={video} loop autoPlay></video>
        <div>
          <h1>StackClique Commerce</h1>
          <p>
            Discover a world of endless possibilities at StackClique Commerce.
            Shop, explore, and indulge in a seamless online shopping experience
            like never before.
          </p>
        </div>
      </div>
      <section className="content">
        {isLogin ? (
          <h2>Welcome Back</h2>
        ) : (
          <>
            <h2>What&apos;s your email?</h2>
            <p>
              We only ask for this to make sure everybody on the app is human
            </p>
          </>
        )}
        <form action="" onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <input
                type="email"
                placeholder="Email Address"
                required
                key="1"
                ref={input1Ref}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="telephone"
                required
                key="2"
                ref={input2Ref}
              />
              <input
                type="password"
                placeholder="Password"
                required
                key="3"
                ref={input3Ref}
              />
            </>
          ) : (
            <>
              <input type="text" placeholder="First Name" required key="4" />
              <input type="text" placeholder="Last Name" required key="5" />
              <input
                type="email"
                placeholder="Email Address"
                required
                key="6"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="telephone"
                required
                key="7"
              />
              <input
                type="password"
                placeholder="Password"
                ref={password1Ref}
                required
                key="8"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                ref={password2Ref}
                required
                key="9"
              />
            </>
          )}
          <button className="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
        {isLogin ? (
          <p>
            Are you new here?{" "}
            <button onClick={handleReg} className="switch">
              Signup
            </button>
          </p>
        ) : (
          <p>
            Not your first time here?{" "}
            <button onClick={handleReg} className="switch">
              Login
            </button>
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
