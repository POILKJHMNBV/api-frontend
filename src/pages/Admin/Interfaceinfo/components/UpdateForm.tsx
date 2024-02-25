import { ProColumns, ProTable, ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
export type UpdateFormProps = {
  values:API.UpdateInterfaceInfoForm;
  columns: ProColumns<API.ApiInterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.UpdateInterfaceInfoForm) => Promise<void>;
  visible: boolean;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  useIntl();
  const {values, columns, visible, onCancel, onSubmit} = props;

  const formRef = useRef<ProFormInstance>();
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
