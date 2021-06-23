import "./year.css"

function Year(props) {
    const prevClick = () => {
        props.onYearChange(props.number - 1);
    }
    const nextClick = () => {
        props.onYearChange(props.number + 1);
    }
   
    return (
        <div className='year'>
       <button onClick={prevClick}>{"<"}</button>
       <div>{props.number}</div>
       <button onClick={nextClick}>{">"}</button>
        </div>
    )
  };
  
  export default Year;
  