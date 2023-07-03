import { Box, Button, Container, FormControlLabel, FormGroup, Grid, Stack, Switch, TextField } from "@mui/material";
import React from "react";
import { FormProps } from '../../../forms/formik/FormikContainer';

const TodoForm = ({
    values,
    handleChange,
    handleSubmit,
    errors
}: FormProps) => {
    return (
        <Container>
            <FormGroup>
                <Grid item xs={12} mt={2}>
                    <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="Descrição"
                        value={values?.title || ''}
                        onChange={handleChange}
                        error={errors?.title}
                        helperText={errors.title}
                    />
                </Grid>


                <Grid item xs={12} mt={2}>
                    <TextField
                        fullWidth
                        id="content"
                        name="content"
                        label="Conteúdo"
                        value={values?.content || ''}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                </Grid>


                <Grid item xs={12} mt={2}>
                    <FormControlLabel
                        control={<Switch
                            checked={values?.done}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        }
                        label="DONE"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end" spacing={2}>
                        <Button variant="outlined" color="error">Cancelar</Button>
                        <Button variant="outlined" onClick={() => handleSubmit()} >Salvar</Button>
                    </Stack>
                </Grid>
            </FormGroup>
        </Container>
    );
}

export default TodoForm;