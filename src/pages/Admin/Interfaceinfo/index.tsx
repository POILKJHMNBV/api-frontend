import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {FooterToolbar, PageContainer, ProDescriptions, ProTable,} from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import {Button, Drawer, message} from 'antd';
import React, {useRef, useState} from 'react';
import UpdateForm from './components/UpdateForm';
import {
  addInterfaceInfoUsingPOST, deleteInterfaceInfoUsingDELETE,
  listInterfaceInfoByPageUsingPOST,
  offlineInterfaceInfoUsingPUT,
  onlineInterfaceInfoUsingPUT, queryInterfaceInfoByIdUsingGET,
  updateInterfaceInfoUsingPUT
} from "@/services/api-backend/interfaceInfoController";
import CreateForm from "@/pages/Admin/Interfaceinfo/components/CreateForm";

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.ApiInterfaceInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.ApiInterfaceInfo[]>([]);
  const [pageSize, setPageSize] = useState(10);


  /**
   * @en-US Add node
   * @zh-CN 添加节点
   * @param fields
   */
  const handleAdd = async (fields: API.AddInterfaceInfoForm) => {
    const hide = message.loading('正在添加');
    try {
      const res = await addInterfaceInfoUsingPOST({ ...fields });
      hide();
      if (res?.code !== 200) {
        message.error('Adding failed, please try again!');
        return false;
      }
      message.success('Added successfully');
      handleModalOpen(false);
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('Adding failed, please try again!');
      return false;
    }
  };

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   * @param fields
   */
  const handleUpdate = async (fields: API.UpdateInterfaceInfoForm) => {
    if (!currentRow) {
      return;
    }
    const hide = message.loading('正在更新!');
    try {
      const res = await updateInterfaceInfoUsingPUT({
        id: currentRow.id,
        ...fields
      });
      hide();
      if (res?.code !== 200) {
        message.error('Configuration failed, please try again!');
        return false;
      }
      message.success('Configuration is successful');
      return true;
    } catch (error) {
      hide();
      message.error('Configuration failed, please try again!');
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (selectedRows: API.ApiInterfaceInfo[]) => {
    if (!selectedRows) return true;
    const hide = message.loading('正在删除');
    try {
      const res= await deleteInterfaceInfoUsingDELETE({
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
   * 发布接口
   * @param id
   */
  const handleOnline = async (id?: number) => {
    const hide = message.loading('正在发布');
    try {
      await onlineInterfaceInfoUsingPUT({
        id
      });
      hide();

      message.success('发布成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('发布失败');
      return false;
    }
  };


  /**
   * 下线接口
   * @param id
   */
  const handleOffline = async (id?: number) => {
    const hide = message.loading('正在下线');
    try {
      await offlineInterfaceInfoUsingPUT({
        id
      });
      hide();

      message.success('下线成功');
      actionRef.current?.reloadAndRest?.();
      return true;
    } catch (error) {
      hide();
      message.error('下线失败');
      return false;
    }
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const createOrUpdateColums: ProColumns<API.ApiInterfaceInfo>[] = [
    {
      title: '名称',
      dataIndex: 'interfaceName',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '提供系统',
      dataIndex: 'interfaceVendor',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '提供系统名',
      dataIndex: 'interfaceVendorName',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '描述',
      dataIndex: 'interfaceDescription',
      valueType: 'textarea',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '请求方法',
      dataIndex: 'interfaceRequestMethod',
      valueType: 'text',
      valueEnum: {
        0: {
          text: 'GET'
        },
        1: {
          text: 'POST'
        },
        2: {
          text: 'DELETE'
        },
        3: {
          text: 'PUT'
        },
        4: {
          text: 'PATCH'
        }
      },
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '访问主机',
      dataIndex: 'interfaceHost',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '访问路径',
      dataIndex: 'interfacePath',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '请求头',
      dataIndex: 'interfaceRequestHeader',
      valueType: 'jsonCode'
    },
    {
      title: '请求参数',
      dataIndex: 'interfaceRequestParams',
      valueType: 'jsonCode'
    },
    {
      title: '请求参数MIME类型',
      dataIndex: 'interfaceRequestParamsMime',
      valueType: 'text',
    },
    {
      title: '请求参数编码格式',
      dataIndex: 'interfaceRequestParamsCharset',
      valueType: 'text',
      valueEnum: {
        0: {
          text: 'GBK'
        },
        1: {
          text: 'UTF-8'
        }
      },
    },
    {
      title: '响应头',
      dataIndex: 'interfaceResponseHeader',
      valueType: 'jsonCode'
    }
  ]

  const columns: ProColumns<API.ApiInterfaceInfo>[] = [
    {
      title: '名称',
      dataIndex: 'interfaceName',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      },
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: '提供系统',
      dataIndex: 'interfaceVendor',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '提供系统名',
      dataIndex: 'interfaceVendorName',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '请求方法',
      dataIndex: 'interfaceRequestMethod',
      valueType: 'text',
      valueEnum: {
        0: {
          text: 'GET'
        },
        1: {
          text: 'POST'
        },
        2: {
          text: 'DELETE'
        },
        3: {
          text: 'PUT'
        },
        4: {
          text: 'PATCH'
        }
      },
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,
      dataIndex: 'interfaceStatus',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '开启',
          status: 'Processing',
        },
      },
    },
    {
      title: '访问主机',
      dataIndex: 'interfaceHost',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '访问路径',
      dataIndex: 'interfacePath',
      valueType: 'text',
      formItemProps: {
        rules:[{
          required: true
        }]
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'date',
      hideInForm: true
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'date',
      hideInForm: true
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={async () => {
            handleUpdateModalOpen(true);
            const res = await queryInterfaceInfoByIdUsingGET ({
              id: Number(record.id),
            });
            setCurrentRow(res.data);
          }}
        >
          <FormattedMessage id="pages.searchTable.config" defaultMessage="Configuration" />
        </a>,
        record.interfaceStatus === 0 ? <a
          key="online"
          style={{color:'green'}}
          onClick={() => {
            handleOnline(record.id);
          }}
        >
          <FormattedMessage id="pages.searchTable.online" defaultMessage="Configuration" />
        </a> : null,
        record.interfaceStatus === 1 ? <a
          key="offline"
          style={{color:'red'}}
          onClick={() => {
            handleOffline(record.id);
          }}
        >
          <FormattedMessage id="pages.searchTable.offline" defaultMessage="Configuration" />
        </a> : null
      ],
    },
  ];

  // @ts-ignore
  return (
    <PageContainer>
      <ProTable<API.ApiInterfaceInfo, API.PageParams>
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
          labelWidth: 130,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={async (params
        ) => {
            const res: any = await listInterfaceInfoByPageUsingPOST({
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
      <CreateForm
        columns={createOrUpdateColums}
        onCancel={() => {handleModalOpen(false)}}
        onSubmit={(values) => {handleAdd(values)}}
        visible={createModalOpen}/>
      <UpdateForm
        columns={createOrUpdateColums}
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          setCurrentRow(undefined);
        }}
        visible={updateModalOpen}
        data={currentRow || {}}
      />
      <Drawer
        width={800}
        open={showDetail}

        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.interfaceName && (
          <ProDescriptions<API.ApiInterfaceInfo>
            column={2}
            title={currentRow?.interfaceName}
            request={async () => {
              const res = await queryInterfaceInfoByIdUsingGET ({
                id: Number(currentRow.id),
              });
              return Promise.resolve({
                success: true,
                data: res.data || {},
              });
            }}
            columns={[
              {
                title: '名称',
                dataIndex: 'interfaceName',
                valueType: 'text',
              },
              {
                title: '提供系统',
                dataIndex: 'interfaceVendor',
                valueType: 'text',
              },
              {
                title: '提供系统名',
                dataIndex: 'interfaceVendorName',
                valueType: 'text',
              },
              {
                title: '描述',
                dataIndex: 'interfaceDescription',
                valueType: 'textarea',
              },
              {
                title: '请求方法',
                dataIndex: 'interfaceRequestMethod',
                valueType: 'text',
                valueEnum: {
                  0: {
                    text: 'GET'
                  },
                  1: {
                    text: 'POST'
                  },
                  2: {
                    text: 'DELETE'
                  },
                  3: {
                    text: 'PUT'
                  },
                  4: {
                    text: 'PATCH'
                  }
                },
              },
              {
                title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,
                dataIndex: 'interfaceStatus',
                valueEnum: {
                  0: {
                    text: '关闭',
                    status: 'Default',
                  },
                  1: {
                    text: '开启',
                    status: 'Processing',
                  },
                },
              },
              {
                title: '访问主机',
                dataIndex: 'interfaceHost',
                valueType: 'text',
              },
              {
                title: '访问路径',
                dataIndex: 'interfacePath',
                valueType: 'text',
              },
              {
                title: '请求头',
                dataIndex: 'interfaceRequestHeader',
                valueType: 'jsonCode',
              },
              {
                title: '请求参数',
                dataIndex: 'interfaceRequestParams',
                valueType: 'jsonCode'
              },
              {
                title: '请求参数MIME类型',
                dataIndex: 'interfaceRequestParamsMime',
                valueType: 'text',
              },
              {
                title: '请求参数编码格式',
                dataIndex: 'interfaceRequestParamsCharset',
                valueType: 'text',
                valueEnum: {
                  0: {
                    text: 'GBK'
                  },
                  1: {
                    text: 'UTF-8'
                  }
                },
              },
              {
                title: '响应头',
                dataIndex: 'interfaceResponseHeader',
                valueType: 'jsonCode'
              },
              {
                title: '创建时间',
                dataIndex: 'createTime',
                valueType: 'dateTime',
              },
              {
                title: '更新时间',
                dataIndex: 'updateTime',
                valueType: 'dateTime',
              },
              ]}
          >
          </ProDescriptions>
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
