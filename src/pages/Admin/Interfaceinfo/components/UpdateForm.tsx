import {ProColumns, ProFormInstance, ProTable} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

export type UpdateFormProps = {
  columns: ProColumns<API.ApiInterfaceInfo>[],
  data: API.ApiInterfaceInfo;
  onCancel: () => void;
  onSubmit: (values: API.UpdateInterfaceInfoForm) => Promise<void>;
  visible: boolean;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const {columns, data, visible, onCancel, onSubmit} = props;

  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(data);
    }
    setLoading(false);
  })

  return (
    <Modal footer={null} open={visible} onCancel={() => onCancel?.() }>
      <ProTable<API.ApiInterfaceInfo>
        loading={loading}
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
