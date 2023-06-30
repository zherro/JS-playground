import React, { useState } from "react";
import FormikContainer, { FormProps } from '../../../forms/formik/FormikContainer';
import TodoForm from './TodoForm';

const TodoFormContainer = ({
    values,
    handleChange,
}: FormProps) => {

    const [formData, setFormData] = useState<any>({title: '', content: ''});
    const [dataId, setDataId] = useState<any>();

    const handleSubmit = (values: any) => {
        if(dataId !== undefined ) {
            // postData(values, 'PUT');
        } else {
            // postData(values, 'POST');
        }
    }

    return (
        <FormikContainer initialValues={formData} >
            {(props: any) => (
                <TodoForm editing={dataId != undefined} handleAction={handleSubmit} {...props} />
            )}
        </FormikContainer>
    );
}

export default TodoFormContainer;