import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
class Header extends React.Component{
    render(){
        return(
            <div className="ui segment clearing">
                <div className=" ui right floated header">
                    <GoogleAuth  /> 
                    <Link to="/" className="left floated content">All streamers</Link>
                    
                </div>
                <Link to="/" className=" ui left floated header">Streamy</Link>
                
            </div>
            
            // <div class="ui clearing segment">
            //     <h3 class="ui right floated header">
            //         Go Forward
            //     </h3>
            //     <h3 class="ui left floated header">
            //         Go Back
            //     </h3>
            // </div>
            
        );
    }
}

export default Header;