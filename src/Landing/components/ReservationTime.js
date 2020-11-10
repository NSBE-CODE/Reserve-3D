import React, {useState} from 'react'; 
import '../styles/ReservationTime.css';
import useWindowDimensions from './useWindowDimensions.js';
import 'semantic-ui-css/semantic.min.css';
const ReservationTime = (props) => {
    const { height, width } = useWindowDimensions();
  const[selected,setSelected] = useState(false); 
  const[color,setColor] = useState('white');
  let isClickable = props.subClicked;
const clickHandler = () => {
    if(isClickable == true){
        setSelected(!selected);
         console.log(selected);
         if(color == '#E0812E'){
             setColor('white');
         }else {
             setColor('#E0812E');
         }
    }
         
}
  
    return (
            <div>
                <button style = {{ width: width* 0.04,height: height * 0.05,
                    backgroundColor: color, border: '1px solid grey', borderRadius: 0 }} onClick = {clickHandler}>
                    
                </button>
                </div>
                
            
    )
}

export default ReservationTime;