import * as yup from 'yup';

const todoValidationSchema = yup.object().shape({
    title: yup
        .string()
        .required('Titulo deve ser informado!')
  });

  export default todoValidationSchema;