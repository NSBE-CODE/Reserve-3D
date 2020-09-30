import React from 'react';

import './styles/profilePgs.css';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const Upcoming = (props) => {

    return (
        <div className="profile-page-container">
            <div className="profile-page-title-container">
                <div className="profile-page-title">Upcoming</div>
                <div className="profile-page-title-hr"><hr/></div>
            </div>

            <form className="search-bar-container">
                <input className="profile-search-bar" type="text" id="labHistorySearch" placeholder="Search by professor, UFID, etc" name="labHistorySearch"/>
            </form>
            

            <div className="table-container">
                <table id="customers">
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Printer</th>
                        <th>Student Name</th>
                        <th>UFID</th>
                        <th>Email</th>
                        <th>Absences</th>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>10:30</td>
                        <td>Germany</td>
                        <td>Maria Anders</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Upcoming;