import * as React from 'react';

function ChooseStorage() {

    return (
        <div>
            <div className='top-container'>
                <div className='network-container'>
                    <div className="row-network">
                        <div className="column-network" >
                            <h4>Type</h4>
                            <select >
                                <option value="SSD">SSD</option>
                            </select>

                        </div>
                        <div className="column-network">
                            <h4>Volume</h4>
                            <p>Root</p>
                        </div>
                        <div className="column-network">
                            <h4>Capacity</h4>
                            <p>120</p>
                        </div>
                        <div className="column-network">
                            <h4>Encryption</h4>
                            <p>Some text..</p>
                        </div>
                        <div className="column-network">
                            <h4>IOPS</h4>
                            <p>600</p>
                        </div>
                        <div className="column-network">
                            <h4>Backup Required</h4>
                            <p>Some text..</p>
                        </div>
                        <div className="column-network">
                            <h4>Remarks</h4>
                            <p>some remarks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='network-container-two'>
                <div className='network-container'>
                    <div className="row-network">
                        <div className="column-network" >
                            <h4>Type</h4>
                            <select >
                                <option value="SSD">Storage</option>
                            </select>

                        </div>
                        <div className="column-network">
                            <h4>Volume</h4>
                            <p>Exit</p>
                        </div>
                        <div className="column-network">
                            <h4>Capacity</h4>
                            <p>8</p>
                        </div>
                        <div className="column-network">
                            <h4>Encryption</h4>
                            <p>Some text..</p>
                        </div>
                        <div className="column-network">
                            <h4>IOPS</h4>
                            <p>100</p>
                        </div>
                        <div className="column-network">
                            <h4>Backup Required</h4>
                            <p>Some text..</p>
                        </div>
                        <div className="column-network">
                            <h4>Remarks</h4>
                            <p>some remarks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 >Network Bandwidth Configuration.</h2>

            </div>
        </div>


    )



}

export default ChooseStorage;