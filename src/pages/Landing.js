import React from 'react';

import '../styles/landing/landing.css';


const Landing = (props) => {

    return (
        <div className="landing">
            <div className="reservation-form-container">
                <form>
                    <h3>Choose a Date</h3>
                    <input id="field" type="date" placeholder="Date MM/DD/YYYY"></input>
                    <input id="field" type="number" placeholder="Est. Required Time HH:MM"></input>
                    <select id="field" placeholder="jdisoafh">
                        <option>Select Printer Size</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <input id="field" type="text" placeholder="Comments..."></input>

                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="time-selection-container">
                <h1>THIS IS THE TIME SELECTION COMPONENT</h1>
            </div>
        </div>
    )
};

export default Landing;