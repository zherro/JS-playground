
'use client'
import React from "react";
import { FormControl, TextField } from '@mui/material';
import FormikContainer from "../../../components/forms/formik/formik.form";

const MuiCreatePage = () => {


    const handleSubmit = () => {
        
    }

    return (
        <>
            <FormikContainer
                initialValues={{ title: '', content: '' }}
                onSubmit={() => { }}
            >
                {(props: any) => (
                    <FormContainer editing={false} handleAction={handleSubmit} {...props} />
                )}
            </FormikContainer>
        </>
    );
}

const FormContainer = ({
    handleAction,
    isSubmitting,
    showError,
    setShowError,
    editing,

    // formik defaults
    values, // field values object, each id in config field is a key field in values
    handleChange, // handle change for all objects and updates values attribute
    handleSubmit,
    submitForm,
    errors,
    setValues,
    setFieldValue,
    resetForm,
}: FormProps) => {
    return (
        <FormControl>
            <TextField
                id="title"
                name="title"
                label="Titulo"
                value={values?.title || ''}
                onChange={handleChange}
            />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </FormControl>
    );
}

interface FormProps {
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

export default MuiCreatePage;