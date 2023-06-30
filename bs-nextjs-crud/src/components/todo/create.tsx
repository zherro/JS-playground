import React , { useState, useEffect } from "react";
import FormikContainer from "../forms/formik/FormikContainer";

const CreateForm = ({id}: any) => {

    const [formData, setFormData] = useState<any>({title: '', content: ''});
    const [dataId, setDataId] = useState<any>();

    useEffect(() => {
        if(id != undefined) {
            setDataId(dataId);
            getDataById(id);
        }
    }, [id]);
    

    const postData = async (values: any, method: 'POST' | 'PUT') => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/todos${ method == 'PUT' ? `/${values.id}` : ''}`, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                // mode: "cors", // no-cors, *cors, same-origin
                // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(values)
            });
            console.log("send complete", response);
        } catch (error: any) {
            console.error(`send error: ${error?.message}`);
        }
    }

    const getDataById = async (id: any) => {
        try {
            const response = await (await fetch(`http://localhost:3000/api/v1/todos/${id}`));
            const result = await response.json();
            console.log("send complete", response);

            setFormData(result);
        } catch (error: any) {
            console.error(`send error: ${error?.message}`);
        }
    }

    const handleSubmit = (values: any) => {
        if(id !== undefined) {
            postData(values, 'PUT');
        } else {
            postData(values, 'POST');
        }
    }

    return (
        <FormikContainer initialValues={formData} >
            {(props: any) => (
                <FormFields editing={id != undefined} handleAction={handleSubmit} {...props} />
            )}
        </FormikContainer>
    );
}

const FormFields = ({
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
}: PropFormField) => {

    const onSubmit = async (values: any) => {
        console.log(values);
        submitForm(values);
    }


    useEffect(() => {
        console.log(values);
    }, [values]);

    return (
        <>
            <div className="container">

                <input type="hidden" id="id" name="id"  value={values?.id || ''} />

                <div className="form">
                    <input id="title" name="title" value={values?.title || ''} onChange={handleChange} type="text" className="input" placeholder="Descrição..." />
                </div>
                <div className="form">
                    <textarea id="content" name="content" value={values?.content || ''} onChange={handleChange} className="input" placeholder="Conteudo" rows={4}></textarea>
                </div>
                <div className="form">
                    <input type="submit" onClick={() => handleAction(values)} className="add" value={editing ? 'Update' : 'Save Item'} />
                </div>
                {/* <div className="tasks"></div>
                <div className="delete-all">Delete all</div> */}
            </div>
        </>
    );
}

interface PropFormField {
    handleAction: Function;
    editing: boolean;

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
export default CreateForm;