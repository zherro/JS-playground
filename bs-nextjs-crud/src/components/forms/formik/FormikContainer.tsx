import React, { useState } from 'react';
import { Formik, FormikValues } from 'formik';

const FormikContainer = ({
  editable,
  children,
  initialValues,
  validations
}: Props) => {
  // const validations =useYup(config?.fields); 
  const [showError, setShowError] = useState(false);

  // const submit = async (values, { setSubmitting, resetForm }) => {
  //   setShowError(true);
  //   handleAction(values);
  // };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={() => { }}
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
}


export interface FormProps {
  handleAction: Function;
  editing: boolean;

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
  isSubmitting?: any;
  resetForm?: any;
}

export default FormikContainer;
