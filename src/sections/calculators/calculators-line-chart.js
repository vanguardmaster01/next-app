import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
import { red } from '@mui/material/colors';

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    title:{
      text: 'Energy',
      style:{
        // color: '#247BA0'
      }
    },
    colors: [theme.palette.success.main, alpha(theme.palette.primary.main, 0.3)],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right'
    },
    plotOptions: {
      line: {
        columnWidth: '10%'
      }
    },
    stroke: {
      show: true,
      width: [2,2]
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return (value / 5 * 7000).toLocaleString() + 'kwh'
        },
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };
};

export const CalculatorsLineChart = (props) => {
  const { chartSeries} = props;
  const chartOptions = useChartOptions();

  return (
    <Card borderColor={red}>
      <CardContent>
        <Chart
          height={250}
          options={chartOptions}
          series={chartSeries}
          type="line"
          width="100%"
        />
      </CardContent>
    </Card>
  );
};

CalculatorsLineChart.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
