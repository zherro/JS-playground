import { Box, Button, Container, FormGroup, Grid, Stack, Switch, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FormProps } from '../../../forms/formik/FormikContainer';

const TodoForm = ({
    values,
    handleChange,
    handleSubmitForm,
    errors,
    isSubmitting
}: FormProps) => {

    const router = useRouter();

    return (
        <Container>
            <FormGroup>

                <input id="id" name="id" type="hidden" value={values?.id || ''} />

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
                 <Switch
                            id="done"
                            name="done"
                            value={values?.done}
                            checked={values?.done == true}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end" spacing={2}>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => router.push('/mui-form')}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleSubmitForm(values)}
                        >
                            {isSubmitting ? 'Salvando...' : 'Salvar'}
                        </Button>
                    </Stack>
                </Grid>
            </FormGroup>
        </Container>
    );
}

export default TodoForm;