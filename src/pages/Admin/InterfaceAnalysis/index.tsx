import React, {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';
import {PageContainer} from "@ant-design/pro-components";
import {message} from "antd";
import {interfaceAnalysisUsingGET} from "@/services/api-backend/analysisController";

const InterfaceAnalysis: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceAnalysisVo[]>([]);
  const loadData = async () => {
    setLoading(true);
    try {
      interfaceAnalysisUsingGET().then((res) => {
        setData(res.data || []);
      })
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const chartData = data.map(item => {
    return {
      name: item.interfaceName,
      value: item.invokeNum
    }
  })

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'invokeNum',
        type: 'pie',
        radius: '90%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <PageContainer title='接口调用次数TOP5' loading={loading}>
      <ReactECharts option={option}/>
    </PageContainer>
  )
}

export default InterfaceAnalysis;
