import * as React from 'react';


import Button from "react-bootstrap/Button";
import {HandleClickEvent} from './maindashboard'



function HandleOsConfig() {

    return (

        <div className='toggle-button'>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male" checked

                />{" "}
            64-bit (x86)
          </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"

                />{" "}
           64-bit (x86)
          </label>
            <br />
            <Button onClick={HandleClickEvent} value="clear">C</Button>
        </div>
    );



}
export {
    HandleOsConfig
    
}