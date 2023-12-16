import { ProColumns, ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
export type UpdateFormProps = {
  values:API.InterfaceInfo;
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visible: boolean;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  const {values, columns, visible, onCancel, onSubmit} = props;

  const formRef = useRef();
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  })

  return (
    <Modal footer={null} open={visible} onCancel={() => onCancel?.() }>
      <ProTable
        type="form"
        columns = {columns}
        formRef={formRef}
        onSubmit={
          async (values) => {
            onSubmit?.(values);
          }}
      />
    </Modal>
  );
};

export default UpdateForm;
