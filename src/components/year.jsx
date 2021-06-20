export default function Year(props) {
    const prevClick = () => {
        props.onPrevClick(props.number);
    }
    const nextClick = () => {
        props.onNextClick(props.number);
    }
   
    return (
        <div className='year'>
       <button onClick={prevClick}>{"<"}</button>
       <div>{props.number}</div>
       <button onClick={nextClick}>{">"}</button>
        </div>
    )
};
