import * as React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import Card from "react-bootstrap/Card";
import {HandleOsConfig} from './handleosconfig'

function ChooseUbuntuOs() {

    return (
        <div className='card-item' >
            <div className='row'>
                <div className="column">
                    <h1>ChooseUbuntuOs</h1>
                    <p>Linux 2 comes with 5years of support. It provides linux kernal 4.14 turned for optimal performance.</p>
                </div>
                <div className="column">
                
              < HandleOsConfig/>
            </div>

            </div>

        </div>
    )
    
}

export default ChooseUbuntuOs;