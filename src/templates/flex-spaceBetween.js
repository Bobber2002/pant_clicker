const FlexSB = (props) => {
    return ( <div className="flex justify-between h-full w-full">
        {props.children}
    </div> );
}
 
export default FlexSB;