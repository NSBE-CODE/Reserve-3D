import React from 'react';

import './styles/profilePgs.css';


const StudentProfile = (props) => {

    return (
        <div className="student-profile">
            <div className="top-section">
                <div className="profile-icon-container">
                    <div className="profile-icon" />
                    <div id="user-name">name</div>
                </div>

                <div className="user-info-container">
                    <div className="info-input">row 1</div>
                    <div className="info-input">row 2</div>
                    <div className="info-input">row 3</div>
                    <div className="info-input">row 4</div>

                    <button className="confirm" type="submit">Confirm Changes</button>
                </div>
            </div>

            <div className="lab-history-container">
                Lab History
            </div>
        </div>
    )
};

export default StudentProfile;