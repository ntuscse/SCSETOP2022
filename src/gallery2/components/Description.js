import './Description.css';
import { HashLink as Link } from "react-router-hash-link";

const Description = () => {
    return (
        <>
        <h2 className='photoGalTitle'>Photo Gallery</h2>
        <p className='photoGalDesc'>Bringing TOP members, seniors and freshmen together.&nbsp;
            <Link className='vmLink' to="/photos">View More</Link>  
        </p>
        </>
    );
}

export default Description;
