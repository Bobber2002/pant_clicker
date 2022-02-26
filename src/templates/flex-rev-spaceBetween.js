const FlexReSB = (props) => {
    return ( 
        <div className="flex flex-row-reverse w-full h-full">
            {props.children}
        </div>
     );
}
 
export default FlexReSB;