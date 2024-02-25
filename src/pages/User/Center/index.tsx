import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import {Avatar, Card, Descriptions, message} from 'antd';
import { loadUserInfoUsingGET } from '@/services/api-backend/userController';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.LoginUserVO>();
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await loadUserInfoUsingGET({
        skipErrorHandler: true,
      });
      setData(res.data);
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageContainer title="用户中心" loading={loading}>
      <Card>
        <Avatar
          size={128}
          className="umi-plugin-layout-avatar"
          src={data? data.userAvatar : "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}
          alt="avatar"
        />
        <span style={{marginLeft: 20, fontSize: 30}}>{data ? data.userName : ""}</span>
        {data ? (
          <Descriptions style={{marginTop: 15}} column={1}>
            <Descriptions.Item label="用户公钥">{data.userPublickey}</Descriptions.Item>
            <Descriptions.Item label="用户访问密钥">{data.userAccesskey}</Descriptions.Item>
            <Descriptions.Item label="用户加密密钥">{data.userSecretkey}</Descriptions.Item>
          </Descriptions>
        ) : (
          <>用户信息不存在</>
        )}
      </Card>
    </PageContainer>
  );
};
export default Index;
