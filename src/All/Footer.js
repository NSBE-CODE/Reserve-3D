import React from 'react';

import '../../styles/all/footer.css';

import UF_Signature from '../../assets/landing/UF_Signature-white-800.png';



const Footer = (props) => {

    return (
        <div className = "footer" >
            <img src={UF_Signature} style={{height:"34px", marginTop:"17px"}}/>
        </div>
    )
};

export default Footer;