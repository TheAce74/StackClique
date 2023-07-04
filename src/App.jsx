import { useEffect, useRef } from "react";
import video from "./assets/video.mp4";
import Swal from "sweetalert2";

let ignore = false;

function App() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  useEffect(() => {
    if (!ignore) {
      const input = document.querySelector("#telephone");
      window.intlTelInput(input, {
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
        <h2>Welcome Back</h2>
        <h3>What&apos;s your email?</h3>
        <p>We only ask for this to make sure everybody on the app is human</p>
        <form action="" onSubmit={handleSubmit}>
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
            id="telephone"
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
          <button className="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default App;
