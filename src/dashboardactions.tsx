import * as React from 'react'
import Button from 'react-bootstrap/esm/Button';

import * as react from 'react';

import Showimages from './chooseimage';
import { render } from '@testing-library/react';

import { Redirect } from 'react-router-dom'

function InvokeComponent(){

   console.log('calling invoke component.')
   return <Redirect to='/chooseimage' />

}
function DashboardActions(){

return(
<div className='buttonDiv'>
<Button className='BackButton' onClick={Showimages}>Back</Button>  
<Button className='ProceedButton' onClick={Showimages}>Proceed</Button>  
</div>
);

}
export default DashboardActions;