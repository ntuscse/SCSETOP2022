import "./Description.css";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <>
      <h2 className="photoGalTitle">Photo Gallery</h2>
      <p className="photoGalDesc">
        Bringing TOP members, seniors and freshmen together.&nbsp;
        <Link to="/photos">
          <a className="vmLink">View More</a>
        </Link>
      </p>
    </>
  );
};

export default Description;
