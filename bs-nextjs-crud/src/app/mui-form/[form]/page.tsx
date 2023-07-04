'use client';
import { useParams, useRouter } from "next/navigation";
import React from "react";
import TodoFormPage from '../../../components/modules/todo/form/index';

const MuiCreatePage = () => {

    const params = useParams();

    return (
        <TodoFormPage editable={params?.form !== 'new'} id={params?.form} />
    );

}


export default MuiCreatePage;