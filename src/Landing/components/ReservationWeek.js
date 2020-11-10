import React from 'react'; 
import './ReservationTime.js';
import '../styles/ReservationSys.css';

import useWindowDimensions from './useWindowDimensions.js';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image } from 'semantic-ui-react';
import ReservationTime from './ReservationTime.js';
const ReservationWeek = (props) => {
    let subClicked = props.submitClicked;
    const { height, width } = useWindowDimensions();
    const times = [
    { time: '09:00', HourValue: 9 },
    { time: '09:30', HourValue: 9.5 },
    { time: '10:00', HourValue: 10 },
    { time: '10:30', HourValue: 10.5 },
    { time: '11:00', HourValue: 11 },
    { time: '11:30', HourValue: 11.5 },
    { time: '12:00', HourValue: 12 },
    { time: '12:30', HourValue: 12.5 },
    { time: '01:00', HourValue: 13 },
    { time: '01:30', HourValue: 13.5 },
    { time: '02:00', HourValue: 14 },
    { time: '02:30', HourValue: 14.5 },
    { time: '03:00', HourValue: 15 },
    { time: '03:30', HourValue: 15.5 },
    { time: '04:00', HourValue: 16 },
    { time: '04:30', HourValue: 16.5 },
    ]
    let i = 0;
    const  getMonday = (d) => {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  } 
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  let thismonday = getMonday(new Date());
  let thistuesday = new Date(thismonday.valueOf() + 1*86400000);
  let thiswednesday = new Date(thismonday.valueOf() + 2*86400000);
  let thisthursday = new Date(thismonday.valueOf() + 3*86400000);
  let thisfriday = new Date(thismonday.valueOf() + 4*86400000);
  let thissaturday = new Date(thismonday.valueOf() + 5*86400000);
  let thissunday = new Date(thismonday.valueOf() + 6*86400000);

  let Monday = "" + days[thismonday.getDay()] + ", " +months[thismonday.getMonth()] + " " + thismonday.getDate(); 
  let Tuesday = "" + days[thistuesday.getDay()] + ", " +months[thistuesday.getMonth()] + " " + thistuesday.getDate(); 
  let Wednesday = "" + days[thiswednesday.getDay()] + ", " +months[thiswednesday.getMonth()] + " " + thiswednesday.getDate(); 
  let Thursday = "" + days[thisthursday.getDay()] + ", " +months[thisthursday.getMonth()] + " " + thisthursday.getDate(); 
  let Friday = "" + days[thisfriday.getDay()] + ", " +months[thisfriday.getMonth()] + " " + thisfriday.getDate(); 
  let Saturday = "" + days[thissaturday.getDay()] + ", " +months[thissaturday.getMonth()] + " " + thissaturday.getDate(); 
  let Sunday = "" + days[thissunday.getDay()] + ", " +months[thissunday.getMonth()] + " " + thissunday.getDate(); 
  let weekformat = (thismonday.getMonth()+1) + "/" + thismonday.getDate() + "/" + thismonday.getFullYear() + " - " + (thissunday.getMonth()+1) + "/" + thissunday.getDate() + "/" + thissunday.getFullYear();
  let Week = "Reserve a 3D Printer for " + weekformat; 
  //let subcheck = "The TILES ARE CLICKABLE: " + subClicked;
const timeSelector = times.map((block) => {
    i++;
    if( i %2 == 1){
        return (<div>
            <ReservationTime subClicked = {subClicked}> </ReservationTime>
        <p>{block.time}</p>
            </div>)
    }else{
        return (<ReservationTime subClicked = {subClicked} ></ReservationTime>)
        }}); 

    return (
            <div className="time-selection-container">
                <h1 className = "quando">{Week}</h1>
               
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026, marginTop: 20}}>
                <h3 className = "quando">{Monday}</h3>
                </div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "center",}}>
                    {timeSelector}
                </div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026, marginTop: 20}}>
                <h3 className = "quando">{Tuesday}</h3>
                </div>
                <div style = {{display: "flex", flexDirection: "row",justifyContent: "center"}}>
                    {timeSelector}
                </div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026,marginTop: 20}}>
                <h3 className = "quando">{Wednesday}</h3>
                </div>
                <div  style = {{display: "flex", flexDirection: "row",justifyContent: "center"}}>
                    {timeSelector}
                </div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026, marginTop: 20}}>
                <h3 className = "quando">{Thursday}</h3>
                </div>
                <div style = {{display: "flex", flexDirection: "row",justifyContent: "center"}}>
                    {timeSelector}
                    </div>
                    <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026, marginTop: 20}}>
                <h3 className = "quando">{Friday}</h3>
                </div>
                <div style = {{display: "flex", flexDirection: "row",justifyContent: "center"}}>
                    {timeSelector}
                </div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026, marginTop: 20}}>
                <h3 className = "quando">{Saturday}</h3>
                </div>
                <div style = {{display: "flex", flexDirection: "row",justifyContent: "center"}}>
                    {timeSelector}
                    </div>
                    <div style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: width*0.026, marginTop: 20}}>
                 <h3 className = "quando">{Sunday}</h3>
                 </div>
                <div style = {{display: "flex", flexDirection: "row",justifyContent: "center", marginBottom: 20}}>
                    {timeSelector}
                </div>
              
            </div> 
            
    )
}

export default ReservationWeek;