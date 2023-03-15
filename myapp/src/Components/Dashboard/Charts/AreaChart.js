import React from 'react';
import { Link } from 'react-router-dom';

const AreaChart = () => {
    return (
        <div className="col-xl-8 col-lg-7" >
            <div classNameName='card shadow mb-4'>
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#!" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <Link className="dropdown-item" to="/action">Action</Link>
                            <Link className="dropdown-item" to="/anotheraction">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/something">Something else here</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-area"><div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                            <div classNameName="">
                            </div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                            <div className="">
                            </div>
                        </div>
                    </div>
                        <canvas id="myAreaChart"
                            style={{ display: "block", height: "160px", width: "214px" }}
                            width="267" height="200" className="chartjs-render-monitor"></canvas>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default AreaChart;