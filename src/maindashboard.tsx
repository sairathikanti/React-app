import * as React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import ShowImages from './chooseimage';
import './App.scss';
import ChooseInstance from './chooseinstancetype'
import ChooseStorage from './choosestorageandnetwork'
import ShowConfig from './configsecurity'
import ReviewData from './reviewandlaunch'


function HandleClickEvent(el) {

  console.log("calling click event function.");
  let isdisable = true;

  let valuee = el.target.value;

  if(valuee === 'clear'){
     isdisable = false;
     console.log(valuee);
     console.log(isdisable);
}
     return isdisable;
     
}

function GetTabStatus(){

  let eventstatus = HandleClickEvent;

  console.log("event status "+eventstatus)
}


function ImageTab() {

  
  return (

    <Tabs >
      <div className="row">
  <div className="column" >
    <h2 className='header'>Choose Image</h2>
    
  </div>
  <div className="column1" >
  <select className='dropdown'>
    <option value="US-East-1">US-East-1</option>
    <option value="Mumbai">Mumbai</option>
    <option value="US-West-1">US-West-1</option>
   
  </select>
   
  </div>
 
</div>
      
      <TabList className='tab-list'>
        <Tab className='tab-list-item'>1.Choose Image</Tab>
        <Tab className='tab-list-item'>2.Choose Instance Type</Tab>
        <Tab className='tab-list-item'>3.Choose Store and Network</Tab>
        <Tab className='tab-list-item'>4.Config Security</Tab>
        <Tab className='tab-list-item'>4.Review & Launch</Tab>

      </TabList>

      <TabPanel >
        <ShowImages />
      </TabPanel>

      <TabPanel>
        <ChooseInstance />
      </TabPanel>

      <TabPanel>
        <ChooseStorage />
      </TabPanel>

      <TabPanel>
        <ShowConfig />
      </TabPanel>

      <TabPanel>
        <ReviewData />
      </TabPanel>
    </Tabs>
  )
}

export {
 
  ImageTab,
  HandleClickEvent
}