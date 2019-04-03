$(function(){
  var xData=[],
      yData=[];

  //create xData and yData
  for(var p=0;p<=1;p+=0.1){
    xData.push(p.toFixed(1));
    yData.push(h(p));
    //console.log(p,h(p));
  } 

  function h(p){
    if(p==0)  return 0;
    return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
  }
  var myChart = echarts.init($('.main')[0]);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
      data:['信息量']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      data: yData,
      smooth:true           
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
