import React from 'react';

import './styles/profilePgs.css';
import ProfileCard from './components/ProfileCard.js';


const StudentProfile = (props) => {

    return (
        <div className="student-profile">
            <ProfileCard/>
            
            <div className="lab-history-container">
                <div className="lab-history-title">Print History</div>
                <table id="customers">
                    <tr>
                        <th>Date</th>
                        <th>Printer Used</th>
                        <th>Total Print Time (minutes)</th>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Philip Cramer</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default StudentProfile;