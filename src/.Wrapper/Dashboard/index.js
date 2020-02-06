import React from 'react';
import Card from '~/Components/Card';
import Pie from '~/Components/Chart';

const data = {
  labels: ['Red', 'Green'],
  datasets: [
    {
      data: [2, 1],
      backgroundColor: ['#FF6384', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB']
    }
  ]
};

const DashboardWrapper = () => {
  return (
    <Card>
      <Pie data={data} />
    </Card>
  );
};

export default DashboardWrapper;
