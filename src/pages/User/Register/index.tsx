import React from 'react';
import { ProFormText } from '@ant-design/pro-form';
import { FormattedMessage, Helmet, history, useIntl } from '@@/exports';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { userRegisterUsingPOST } from '@/services/api-backend/userController';
import { message, Tabs } from 'antd';
import Settings from '../../../../config/defaultSettings';
import { LoginForm } from '@ant-design/pro-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Footer from '@/components/Footer';

const Register: React.FC = () => {
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const intl = useIntl();

  const handleSubmit = async (values: API.UserRegisterForm) => {
    const defaultRegisterFailureMessage = intl.formatMessage({
      id: 'pages.register.failure',
      defaultMessage: '注册失败，请重试！',
    });
    try {
      // 登录
      const res = await userRegisterUsingPOST({ ...values });
      if (res.code === 200) {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.register.success',
          defaultMessage: '注册成功！',
        });
        message.success(defaultLoginSuccessMessage);
        history.push('/user/login');
      } else {
        message.error(res.message ? res.message : defaultRegisterFailureMessage);
      }
    } catch (error) {
      message.error(defaultRegisterFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.register',
            defaultMessage: '注册页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{ searchConfig: { submitText: '注册'}}}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="Ant Design"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserRegisterForm);
          }}
        >
          <Tabs
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.register.tab',
                  defaultMessage: '注册',
                }),
              },
            ]}
          />
          <ProFormText
            name="userAccount"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.username.placeholder',
              defaultMessage: '请输入用户名',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.username.required"
                    defaultMessage="请输入用户名!"
                  />
                ),
              },
            ]}
          />
          <ProFormText.Password
            name="userPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.password.placeholder',
              defaultMessage: '密码: ant.design',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.password.required"
                    defaultMessage="请输入密码！"
                  />
                ),
              },
            ]}
          />
          <ProFormText.Password
            name="checkPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.checkPassword.placeholder',
              defaultMessage: '确认密码',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.checkPassword.required"
                    defaultMessage="请输入密码！"
                  />
                ),
              },
            ]}
          />
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
