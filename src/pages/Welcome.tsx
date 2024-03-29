import { PageContainer } from '@ant-design/pro-components';
import { List, message } from 'antd';
import React, {useEffect, useState} from 'react';
import {listInterfaceInfoByPageUsingPOST} from "@/services/api-backend/interfaceInfoController";
const Welcome: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.ApiInterfaceInfo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const loadData = async (current: number, pageSize: number) => {
    setLoading(true);
    try {
      const res = await listInterfaceInfoByPageUsingPOST({
        current,
        pageSize,
      });
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData(1, pageSize);
  }, []);

  return (
    <PageContainer title="API开放平台">
      <List
        className="my-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => {
          const apiLink = `/interface_info/${item.id}`;
          return (
            <List.Item actions={[<a key={item.id} href={apiLink}>查看</a>]}>
              <List.Item.Meta
                title={<a href={apiLink}>{item.interfaceName}</a>}
                description={item.interfaceDescription}
              />
            </List.Item>
          );
        }}
        pagination={{
          showTotal(total: number) {
            return '总数：' + total;
          },
          showSizeChanger: true,
          pageSize: pageSize,
          total,
          onChange(page, pageSize) {
            setPageSize(pageSize);
            loadData(page, pageSize);
          },
        }}
      />
    </PageContainer>
  );
};

export default Welcome;
