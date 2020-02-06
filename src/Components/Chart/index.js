import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Pie = ({ data }) => {
  return <Doughnut data={data} height={70} width={100} />;
};

export default Pie;
