import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import FormikContainer, { FormProps } from '../../../forms/formik/FormikContainer';
import TodoForm from './TodoForm';
import todoValidationSchema from "./TodoValidation";

const TodoFormContainer = () => {

    const [formData, setFormData] = useState<any>({title: '', content: ''});
    const [dataId, setDataId] = useState<any>();

    const handleSubmit = (values: any) => {
        if(dataId !== undefined ) {
            // postData(values, 'PUT');
        } else {
            const { isLoading, data, error } = useFetch("https://swapi.co/api/people/1");
        }
    }

    return (
        <FormikContainer initialValues={formData} validations={todoValidationSchema} >
            {(props: any) => (
                <TodoForm editing={dataId != undefined} handleSubmit={handleSubmit} {...props} />
            )}
        </FormikContainer>
    );
}

export default TodoFormContainer;