import LoginForms from "../../forms/LoginForms/LoginForms";
import styles from "./style.module.css"

function Login() {
  return (
    <div className={styles.formContainer}>
      <LoginForms/>
    </div>
  );
}

export default Login;
