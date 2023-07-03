import { useRef, useState } from "react";
import video from "./assets/video.mp4";
import Swal from "sweetalert2";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
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
      });
    }
  };

  return (
    <main>
      <div>
        <video src={video} loop autoPlay></video>
        <h1>StackClique Commerce</h1>
        <p>
          Discover a world of endless possibilities at StackClique Commerce.
          Shop, explore, and indulge in a seamless online shopping experience
          like never before.
        </p>
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
                type="password"
                placeholder="Password"
                required
                key="2"
                ref={input2Ref}
              />
            </>
          ) : (
            <>
              <input type="text" placeholder="First Name" required key="3" />
              <input type="text" placeholder="Last Name" required key="4" />
              <input
                type="email"
                placeholder="Email Address"
                required
                key="5"
              />
              <input
                type="password"
                placeholder="Password"
                ref={password1Ref}
                required
                key="6"
              />
              <input
                type="password"
                placeholder="Retype Password"
                ref={password2Ref}
                required
                key="7"
              />
            </>
          )}
          <button className="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
        {isLogin ? (
          <p>
            Are you new here? <button onClick={handleReg}>Signup</button>
          </p>
        ) : (
          <p>
            Not your first time here? <button onClick={handleReg}>Login</button>
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
