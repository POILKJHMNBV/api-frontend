import {PlusOutlined} from '@ant-design/icons';
import type {ProColumns} from '@ant-design/pro-components';
import {ActionType, FooterToolbar, PageContainer, ProTable,} from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import {Button, message} from 'antd';
import React, {useRef, useState} from 'react';
import {
  deleteUserInfoUsingDELETE, forbidUserUsingPUT,
  listUserInfoByPageUsingPOST,
  permitUserUsingPUT
} from "@/services/api-backend/userController";

const TableList: React.FC = () => {

  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.ApiUser[]>([]);
  const [pageSize, setPageSize] = useState(10);

  const intl = useIntl();

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (selectedRows: API.ApiUser[]) => {
    if (!selectedRows) return true;
    const hide = message.loading('正在删除');
    try {
      const res= await deleteUserInfoUsingDELETE({
        ids: selectedRows.map((row) => row.id),
      });
      hide();
      if (res?.code !== 200) {
        message.error('Delete failed, please try again');
        return false;
      }
      message.success('Deleted successfully and will refresh soon');
      return true;
    } catch (error) {
      hide();
      message.error('Delete failed, please try again');
      return false;
    }
  };

  /**
   * 启用用户
   * @param id
   */
  const handlePermit = async (id?: number) => {
    const hide = message.loading('启用发布');
    try {
      await permitUserUsingPUT({
        id
      });
      hide();

      message.success('启用成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('启用失败');
      return false;
    }
  };


  /**
   * 禁用用户
   * @param id
   */
  const handleForbid = async (id?: number) => {
    const hide = message.loading('正在禁用');
    try {
      await forbidUserUsingPUT({
        id
      });
      hide();

      message.success('禁用成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('禁用失败');
      return false;
    }
  };

  const columns: ProColumns<API.ApiUser>[] = [
    {
      title: '账户',
      dataIndex: 'userAccount',
      valueType: 'text'
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'text'
    },
    {
      title: '电话',
      dataIndex: 'userPhone',
      valueType: 'text'
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      valueType: 'text',
      valueEnum: {
        0: {
          text: '正常',
          status: 'Success',
        },
        1: {
          text: '禁用',
          status: 'Error',
        },
      },
    },
    {
      title: '邮箱',
      dataIndex: 'userEmail',
      valueType: 'text'
    },
    {
      title: '登录ip',
      dataIndex: 'userLoginIp',
      valueType: 'text'
    },
    {
      title: '登录时间',
      dataIndex: 'userLoginTime',
      valueType: 'dateTime'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime'
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        record.userStatus === 2 ? <a
          key="online"
          style={{color:'green'}}
          onClick={() => {
            handlePermit(record.id);
          }}
        >
          <FormattedMessage id="pages.searchTable.permission" defaultMessage="Configuration" />
        </a> : null,
        record.userStatus === 0 ? <a
          key="offline"
          style={{color:'red'}}
          onClick={() => {
            handleForbid(record.id);
          }}
        >
          <FormattedMessage id="pages.searchTable.forbidden" defaultMessage="Configuration" />
        </a> : null
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.ApiUser, API.PageParams>
        pagination={{
          pageSize: pageSize, showSizeChanger: true, onChange: (page, pageSize) => setPageSize(pageSize)
        }}
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
            <PlusOutlined key='primary'/>
        ]}
        request={async (params
        ) => {
          const res: any = await listUserInfoByPageUsingPOST({
            ...params
          });
          if (res?.data) {
            return {
              data: res.data.records || [],
              success: true,
              total: res.data.total
            }
          } else {
            return {
              data: [],
              success: false,
              total: 0
            }
          }
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            type="primary"
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
