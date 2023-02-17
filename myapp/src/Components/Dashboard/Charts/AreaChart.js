import React from 'react';

const AreaChart = () => {


    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div class="card-body">
                <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                </div>
                <hr />
                Styling for the area chart can be found in the
                <code></code> file.
            </div>
        </div>
    );
};

export default AreaChart;