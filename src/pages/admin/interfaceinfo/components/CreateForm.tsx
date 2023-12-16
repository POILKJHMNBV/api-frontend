import { ProColumns, ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React from 'react';
export type CreateFormProps = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const intl = useIntl();
  const {columns, visible, onCancel, onSubmit} = props;
  return (
    <Modal footer={null} open={visible} onCancel={() => onCancel?.() }>
      <ProTable
        type="form"
        columns = {columns}
        onSubmit={
          async (values) => {
              onSubmit?.(values);
          }}
      />
    </Modal>
  );
};

export default CreateForm;
