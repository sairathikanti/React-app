import * as React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import ChooseLinuxOs from './linux';
import ChooseRedHat from './redhat';
import ChooseUbuntuOs from './ubuntu';




function Showimages() {
console.log('images tab')
    return (

        <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs" > 
            <TabList className="container">
                <ChooseLinuxOs />
               
                <ChooseRedHat />

                <ChooseUbuntuOs/>
            </TabList>
        </Tabs>


    )
}

export default Showimages;