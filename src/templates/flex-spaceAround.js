const FlexSA = (props) => {
    return ( 
    <div className="flex justify-around h-full w-full">
        {props.children}
    </div> 
    );
}
 
export default FlexSA;