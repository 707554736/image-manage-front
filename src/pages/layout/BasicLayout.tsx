import React, { useState } from 'react';
import { Button, Result, Avatar, Tag, Input, Space, Select } from 'antd';
import {
  CrownOutlined,
  UserOutlined,
  SmileOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import ProLayout, {
  BasicLayoutProps,
  PageContainer,
} from '@ant-design/pro-layout';
import { ProFormSelect } from '@ant-design/pro-form';

const defaultProps = {
  routes: [
    {
      path: '/welcome',
      name: '欢迎',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page2',
      name: '二级页面',
      icon: <UserOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page3',
      name: '三级页面',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

export const BasicLayout = (props: BasicLayoutProps) => {
  const [pathname, setPathname] = useState('/welcome');
  return (
    <>
      <ProLayout
        {...props}
        route={defaultProps}
        location={{
          pathname,
        }}
        navTheme="light"
        fixSiderbar
        headerRender={false}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <PageContainer
          tags={<Tag color="blue">not safe for work</Tag>}
          header={{
            style: {
              padding: '4px 16px',
              position: 'fixed',
              top: 0,
              width: '100%',
              left: 0,
              zIndex: 999,
              boxShadow: '0 2px 8px #f0f1f2',
            },
          }}
          style={{
            paddingTop: 48,
            height: '100vh',
          }}
          extra={[
            <Space align="center">
              <Select
                style={{
                  width: 240,
                }}
              ></Select>
              <Input.Search
                key="search"
                style={{
                  width: 240,
                }}
              />
              <Button
                key="3"
                type="primary"
                shape="round"
                icon={<CloudUploadOutlined />}
              >
                上传
              </Button>
            </Space>,
          ]}
        >
          <div
            style={{
              height: '120vh',
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
    </>
  );
};
