import React from 'react';

import './styles/landing.css';


const Landing = (props) => {

    return (
        <div className="landing">
            <div className="reservation-form-container">
                <form>
                    <h3>Choose a Date</h3>
                    <input id="field" type="date" placeholder="Date MM/DD/YYYY" autocomplete="off"></input>
                    <input id="field" type="number" placeholder="Est. Required Time HH:MM" autocomplete="off"></input>
                    <select id="field">
                        <option>Select Printer Size</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <textarea id="field__text-area" type="text" placeholder="Comments..." autocomplete="off"></textarea>
                    <button className="confirm-reservation__button">Confirm Reservation</button>

                    <button className="search-times__button" type="submit">Search Times</button>
                </form>
            </div>

            <div className="time-selection-container">
                <h1>THIS IS THE TIME SELECTION COMPONENT</h1>
            </div>
        </div>
    )
};

export default Landing;