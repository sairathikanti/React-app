import * as React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import GetCpuInfo from './cpuoptimisations'

import DashboardActions from './dashboardactions'

function ChooseInstance() {

    return (
        <Tabs >
        
            <TabList className='tab-list'>
                <Tab className='tab-list-item'>General Purpose</Tab>
                <Tab className='tab-list-item'>Cpu Optimised</Tab>
                <Tab className='tab-list-item'>Storage Optimised</Tab>
                <Tab className='tab-list-item' >Network Optimised</Tab>


            </TabList>

            <TabPanel >

                <GetCpuInfo />
                <DashboardActions />
            </TabPanel>

            <TabPanel >

                <DashboardActions />
            </TabPanel>




        </Tabs>
    )

}

export default ChooseInstance;