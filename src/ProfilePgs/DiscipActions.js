import React from 'react';

import './styles/profilePgs.css';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



const DiscipActions = (props) => {

    return (
        <div className="profile-page-container">
            <div className="profile-page-title-container">
                <div className="profile-page-title">Disicplinary Actions</div>
                <div className="profile-page-title-hr"><hr/></div>
            </div>

            <form className="search-bar-container">
                <input className="profile-search-bar" type="text" id="labHistorySearch" placeholder="Search by professor, UFID, etc" name="labHistorySearch"/>
                <button className="profile-confirm-button">Confirm Changes</button>
            </form>
            

            <div className="table-container">
                <table id="customers">
                    <tr>
                        <th>Date</th>
                        <th>Student Name</th>
                        <th>Printer Used</th>
                        <th>UFID</th>
                        <th>Email</th>
                        <th>Attendance</th>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>08/12/20</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="-">-</option>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default DiscipActions;