import React, { useState } from 'react';
import { Formik, FormikValues } from 'formik';

const FormikContainer = ({
  editable,
  children,
  onSubmit,
  initialValues
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
      onSubmit={() => onSubmit()}
    // validationSchema={validations}
    >
      {children}
    </Formik>
  );
};

interface Props {
  editable?: boolean;
  children: React.ReactNode | any;
  onSubmit: Function;
  initialValues: FormikValues;
}

export default FormikContainer;
