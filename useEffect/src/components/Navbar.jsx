import React, { useEffect } from "react";


const Navbar = ({first}) => {

    // run when first changes

    useEffect(() => {
      alert(`First updated ${first}`);

      return () => {
        
      }
    }, [first])
    
        

    return (
        <div>Navbar is changed = {first}</div>
    )};
    
    export default Navbar;