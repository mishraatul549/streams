import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
class Header extends React.Component{
    render(){
        return(
            <div>
                <Link to="/" >Streamy</Link>
                <Link to="/">All streamers</Link>
                <GoogleAuth />
            </div>
        );
    }
}

export default Header;