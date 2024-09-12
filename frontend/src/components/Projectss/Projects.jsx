import "./projects.css";
import label from "../../assets/projectlabel.svg";
import coming from "../../assets/comingsoon.svg";
export default function Projects() {
  return (
    <div className="projects">
      <div className="projectlabel">
        <img src={label} alt="project label" />
        <br />
        <p>Will be Updated soon!!</p>
      </div>
      <div className="projectsgrid">
        <div className="childgrid">
          <div>
            <img src={coming} alt="coming soon" />
          </div>
          <div className="gridtextflex">
            <h4>Hello there</h4>
            <button className="blue" disabled>
              Code
            </button>
          </div>
        </div>
        <div className="childgrid">
          <div>
            <img src={coming} alt="coming soon" />
          </div>

          <div className="gridtextflex">
            <h4>Hope you are doing great</h4>
            <button className="pink" disabled>
              Code
            </button>
          </div>
        </div>
        <div className="childgrid">
          <div>
            <img src={coming} alt="coming soon" />
          </div>
          <div className="gridtextflex">
            <h4>looking for a job!</h4>
            <button className="yellow" disabled>
              Code
            </button>
          </div>
        </div>
        <div className="childgrid">
          <div>
            <img src={coming} alt="coming soon" />
          </div>
          <div className="gridtextflex">
            <h4>you will get it</h4>
            <button className="green" disabled>
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
