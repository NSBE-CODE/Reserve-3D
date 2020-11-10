import React, {useState, useEffect} from 'react';
import ReservationSys from "../Landing/components/ReservationSys";
import './styles/landing.css';


const Landing = (props) => {
    
    const [submitClicked, setSubmitClicked] = useState(false); // controls whether the reservationTime components are clickable if the search times button was selected
    const [timeRequired,settimeRequired] = useState();
    const handleSubmit= (event) => {
            event.preventDefault();
           setSubmitClicked(true);
          
    }
    const onTimeChange= (e) => {
        settimeRequired(e.target.value)
        
    }
    return (
        <div className="landing">
            <div className="reservation-form-container">
                <form onSubmit = {handleSubmit}>
                    <h3>Choose a Date</h3>
                    <input id="field" type="date" placeholder="Date MM/DD/YYYY" autocomplete="off"></input>
                    <input id="field" type="number" placeholder="Est. Required Time HH:MM" autocomplete="off" min = "0.5" max = "4" step= "0.5" value = {timeRequired} onChange = {onTimeChange} ></input>
                    <select id="field">
                        <option>Select Printer Size</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <textarea id="field__text-area" type="text" placeholder="Comments..." autocomplete="off"></textarea>
                    

                    <button className="search-times__button" type="submit">Search Times</button>
                </form>
            </div>

            <ReservationSys submitClicked = {submitClicked}></ReservationSys>
        </div>
    )
};
// <button className="confirm-reservation__button">Confirm Reservation</button>
export default Landing;