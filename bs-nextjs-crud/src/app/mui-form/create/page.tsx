
'use client'
import React from "react";
import { Box, Container,  Grid } from '@mui/material';
import FormikContainer from "../../../components/forms/formik/FormikContainer";

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
        <Container fixed >
            <Grid item spacing={2}>
                
            </Grid>
        </Container>
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