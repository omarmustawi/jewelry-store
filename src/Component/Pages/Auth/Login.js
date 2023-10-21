import "./Auth.css";
import LoginFormAndUpdateAccount from "../../Components/LoginFormAndUpdateAccount";

export default function Login() {
  
  return (
    <div style={{ background: "#faf5f0", marginBottom: "-12px" }}>
      <LoginFormAndUpdateAccount typeComponent={"login"} />
    </div>
  );
}
