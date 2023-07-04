import React, { useState, useEffect } from "react";
import FormikContainer from '../../../forms/formik/FormikContainer';
import TodoForm from './TodoForm';
import todoValidationSchema from "./TodoValidation";
import useFetchData from '../../../../hooks/useFetchData';
import { useRouter } from 'next/navigation';

const TodoFormContainer = (props: any) => {

    const router = useRouter();
    const fetchData = useFetchData();

    const [formData, setFormData] = useState<any>({ title: '', content: '' });
    const [formError, setFormError] = useState<any>();
    const [dataId, setDataId] = useState<any>();


    useEffect(() => {
        getData(props?.id);
    }, [props?.id]);

    const getData = async (id: any) => {
        const [loading, code, result, error] = await fetchData(`http://localhost:3000/api/v1/todos/${id}`);
        if (!loading && code && code < 300) {
            setFormData(result);
            setDataId(result?.id);
        }
    }

    const handleSubmit = async (values: any) => {

        if (dataId !== undefined) {            
            const [loading, code, result, error] = await fetchData(`http://localhost:3000/api/v1/todos/${dataId}`, 'PUT', values);
            
            if (!loading && code && code < 300) {
                setFormData(result);
            }
        } else {
            const [loading, code, result, error] = await fetchData("http://localhost:3000/api/v1/todos", 'POST', values);

            if (!loading && code && code < 300) {
                setFormData(result);
            }
        }

        router.push('/mui-form');
    }

    return (
        <FormikContainer
            initialValues={formData}
            validations={todoValidationSchema}
            editable={props?.editable}
        >
            {(props: any) => (
                <TodoForm handleSubmitForm={handleSubmit} editing={dataId != undefined} {...props} />
            )}
        </FormikContainer>
    );
}

export default TodoFormContainer;