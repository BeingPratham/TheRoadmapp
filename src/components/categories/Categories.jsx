import React from 'react';
import "./categories.css";
import { Link } from 'react-router-dom';
const Categories = () => {
    return ( 
        <div>
             
            <div className="category">
            
            <Link className="link" to="/webdev"><center><p className="linkname">Web Development</p></center></Link>
            <Link className="link" to="/appdev"><center><p className="linkname">Android Development</p></center></Link>
            <Link className="link" to="/iosdev"><center><p className="linkname">IOS Development</p></center></Link>
            <Link className="link" to="/gamedev"><center><p className="linkname">Game Development</p></center></Link>
            <Link className="link" to="/mldev"><center><p className="linkname">ML Development</p></center></Link>
            <Link className="link" to="/graphicdesigner"><center><p className="linkname">Graphic Designer</p></center></Link>
            <Link className="link" to="/datascientist"><center><p className="linkname">Data scientist</p></center></Link>
            <Link className="link" to="/ethical"><center><p className="linkname">Ethical Hacking</p></center></Link>
            </div>
            
        </div>
     );
}
 
export default Categories;