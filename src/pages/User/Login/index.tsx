import Footer from '@/components/Footer';
import {getVerificationCodeUsingGET, userLoginUsingPOST} from '@/services/api-backend/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText, ProFormCaptcha } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { FormattedMessage, Helmet, history, useIntl, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import Settings from '../../../../config/defaultSettings';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

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

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };
  const handleSubmit = async (values: API.UserLoginForm) => {
    const defaultLoginFailureMessage = intl.formatMessage({
      id: 'pages.login.failure',
      defaultMessage: '登录失败，请重试！',
    });
    try {
      // 登录
      const res = await userLoginUsingPOST({ ...values });
      if (res.code === 200 && res.data) {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        localStorage.setItem('apiBackendToken', res.data);
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
      } else {
        message.error(res.message ? res.message : defaultLoginFailureMessage);
      }
    } catch (error) {
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '登录页',
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
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="Ant Design"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginForm);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码登录',
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
              defaultMessage: '用户名: admin or user',
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
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.captcha.placeholder',
              defaultMessage: '请输入验证码',
            })}
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${intl.formatMessage({
                  id: 'pages.getCaptchaSecondText',
                  defaultMessage: '获取验证码',
                })}`;
              }
              return intl.formatMessage({
                id: 'pages.login.phoneLogin.getVerificationCode',
                defaultMessage: '获取验证码',
              });
            }}
            name="verificationCode"
            phoneName="userAccount"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.captcha.required"
                    defaultMessage="请输入验证码！"
                  />
                ),
              },
            ]}
            onGetCaptcha={async (userAccount) => {
              const result = await getVerificationCodeUsingGET({
                userAccount: userAccount,
                operate: 1
              });
              if (result.code === 200 && result.data) {
                message.success('获取验证码成功！验证码为：'+ result.data);
              } else {
                message.error(result.message || '验证码获取失败，请稍后再试');
              }
            }}
          />

          <div
            style={{
              marginBottom: 50,
            }}
          >
            <a
              style={{
                float: 'left',
              }}
              onClick={() => {history.push('/user/register')}}
            >
              <FormattedMessage id="pages.login.register" defaultMessage="没有账号" />
            </a>

            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
