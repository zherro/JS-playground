import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import { FormProps } from '../../../forms/formik/FormikContainer';

const TodoForm = ({
    values,
    handleChange,
}: FormProps) => {
    return (
        <Container>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Descrição"
                    value={values?.title || ''}
                    onChange={handleChange}
                />
            </Grid>
            
        </Container>
    );
}

export default TodoForm;