import React from 'react';

const AreaChart = () => {
    return(
        <div class= "col-xl-8 col-lg-7" >
        <div className='card shadow mb-4'>
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#!" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Dropdown Header:</div>
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!">Something else here</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="chart-area"><div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class="">
                        </div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class="">
                        </div>
                    </div>
                </div>
                    <canvas id="myAreaChart"
                        style={{ display: "block", height: "160px", width: "214px" }}
                        width="267" height="200" class="chartjs-render-monitor"></canvas>
                </div>
            </div>
        </div>
        </div >
    );
}


export default AreaChart;