import * as React from 'react'
import 'react-dropdown/style.css';
 import DropdownButton from 'react-bootstrap/DropdownButton'
 import Dropdown from 'react-bootstrap/Dropdown'
 


function GetCpuInfo(){

return(
    <div>
    <h3 className='header'>Create Configuration.</h3>
    <select className='dropdown'>
    <option value="volvo">CPU Cores</option>
    <option value="saab">1 Core</option>
    <option value="fiat">2 Core</option>
    <option value="audi">4 Core</option>
    <option value="fiat">6 Core</option>
    <option value="audi">8 Core</option>
  </select>

  <select className='dropdown'>
    <option value="volvo">Memory </option>
    <option value="saab">256 MB</option>
    <option value="fiat">512 MB</option>
    <option value="audi">4 Core</option>
    <option value="fiat">6 Core</option>
    <option value="audi">8 Core</option>
  </select>
</div>
)
}

export default GetCpuInfo;