import React, { useState, useEffect } from 'react';
import { Formik, FormikValues } from 'formik';

const FormikContainer = ({
  editable,
  children,
  initialValues,
  validations,
  handleSubmit
}: Props) => {
  // const validations =useYup(config?.fields); 
  const [showError, setShowError] = useState(false);
  const [values, setValues] = useState<any>();

  const submit = async (values: any, { setSubmitting, resetForm }: any) => {
    setValues(values);
    setSubmitting(true);
  };

  useEffect(() => {
    if (values) {
      const execute = async () => await handleSubmit(values);
      execute();
    }
  }, [values])

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={submit}
      validationSchema={validations || {}}
    >
      {children}
    </Formik>
  );
};

interface Props {
  editable?: boolean;
  children: React.ReactNode | any;
  initialValues: FormikValues;
  validations?: any;
  handleSubmit?: any;
}


export interface FormProps {
  handleAction: Function;
  editing: boolean;
  handleSubmitForm: any;

  // formik default properties
  handleChange: any;
  values: any | any[];
  showError: boolean;
  setShowError: Function;
  handleSubmit?: any;
  submitForm?: any;
  errors?: any;
  setValues?: any;
  setFieldValue?: any;
  isSubmitting?: boolean;
  resetForm?: any;
}

export default FormikContainer;
