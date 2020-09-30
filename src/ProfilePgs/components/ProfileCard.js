import React from 'react';

import '../styles/profilePgs.css';


const ProfileCard = (props) => {

    return (
        <div className="student-profile">
            <div className="top-section">
                <div className="profile-icon-container">
                    <div className="profile-icon" />
                    <div id="user-name">name</div>
                </div>

                <div className="grid-section-break">&nbsp;</div>

                <div className="user-info-container">
                    <form>
                        <table id="profile-card-table">
                            <tr>
                                <td><label className="col-25" for="professor">Professor:</label></td>
                                <td><input className="col-75" type="text" id="professor" defaultValue="Dr. Dickrell" name="professor"/></td>
                            </tr>
                            <tr>
                                <td><label className="col-25" for="phoneNumber">Phone number:</label></td>
                                <td><input className="col-75" type="text" defaultValue="321-794-4144" id="phoneNumber" name="phoneNumber"/></td>
                            </tr>
                            <tr>
                                <td><label className="col-25" for="phoneNumber">Email:</label></td>
                                <td><input className="col-75" type="text" defaultValue="example@domain.com" id="phoneNumber" name="phoneNumber"/></td>
                            </tr>
                            <tr>
                                <td><label className="col-25" for="ufid">UFID:</label></td>
                                <td><div className="col-75 last">8875-3146</div></td>
                            </tr>
                        </table>
                        <button className="confirm" type="submit">Confirm Changes</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
};

export default ProfileCard;