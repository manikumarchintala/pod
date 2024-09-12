import tent from "../../assets/TRW Pitch A Tent.svg";
import "./landing.css";
export default function Landing() {
  return (
    <div className="landing">
      <div>
        <img src={tent} alt="camping" />
      </div>
      <div className="landingtext">
        <p>
          I'll develop User Interfaces and land it on the Inter-webs.And loves
          camping.
        </p>
      </div>
    </div>
  );
}
