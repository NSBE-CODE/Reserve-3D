import React from 'react';

import './styles/profilePgs.css';


const EditPersonnel = (props) => {

    return (
        <div className="profile-page-container">
            <div className="profile-page-title-container">
                <div className="profile-page-title">Edit Personnel</div>
                <div className="profile-page-title-hr"><hr/></div>
            </div>

            <form className="search-bar-container">
                <input className="profile-search-bar" type="text" id="labHistorySearch" placeholder="Search by professor, UFID, etc" name="labHistorySearch"/>
                <button className="profile-confirm-button">Confirm Changes</button>
            </form>
            
            <div className="table-container">
                <table id="customers">
                    <tr>
                        <th>T</th>
                        <th>Student Name</th>
                        <th>Professor</th>
                        <th>UFID</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td className="table-row-ufid">8875-3146</td>
                        <td>email@domain.com</td>
                        <td>
                            <select id="attendance" name="attendance">
                                <option value="student">Student</option>
                                <option value="peerMentor">Peer Mentor</option>
                                <option value="professor">Professor</option>
                                <option value="professor">Admin</option>
                                <option value="professor">Super Admin</option>
                            </select>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
    )
};

export default EditPersonnel;