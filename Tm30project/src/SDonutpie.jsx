import React from 'react'
import Chart from 'react-apexcharts'

function Donutpie() {
    const options = {
        Chart: {
            type: 'donut',
        },
        labels: ['Deposits', 'withdrawer','Bills Payment','Others'],
        colors: ['#1C1C1C', '#212224', '#d3d5d8','#d8dadd',],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position:'bottom'
                },
            }
        }],
        title: {
            text: "Traffic by Transaction Type"
          },
        plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: true
                  }
                }
              }
            }
          },
    };
    const series = [58, 34, 46, 13]
  return (
    <div className='w-[100%] border border-slate-200 pb-6 h-[23.4rem] '>
        <Chart options={options} series={series} type='donut' width='380'></Chart>
        <div className='p-4 bg-[#fffff '>
            <div className='mb-4'>Top transactions</div>
            <div className='flex gap-14  items-center'>
                <div className='border bg-#fafafa p-2 w-[12rem]'>
                    <div className='flex justify-start items-center gap-1'><div className='w-2 h-1 bg-color3 pr-2'></div><div>Deposits</div></div>
                    <div className='text-lg pl-3'>$721K</div>
                </div>
                <div className='border bg-#fafafa p-2 w-[12rem]'>
                    <div className='flex justify-start items-center gap-1'><div className='w-2 h-1 bg-color3 pr-2'></div><div>Withdrawer</div></div>
                    <div className='text-lg pl-3'>$504K</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donutpie