import { Grid, TextField } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system/styleFunctionSx";
import React from "react";

const InputText = ({
    id,
    label,
    columns,
    formikValues,
    handleChange
}: InputTextProps) => {
    return (
        <Grid container columns={columns || { xs: 12 }}>
            <TextField
                fullWidth
                id={id}
                name={id}
                label={label}
                value={formikValues?.[id] || ''}
                onChange={handleChange}
            />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </Grid>
    );
}

interface InputTextProps {
    id: string;
    label?: string;
    columns?: ResponsiveStyleValue<number>;   //  MUI size column object. EX: {{ xs: 4, sm: 8, md: 12 }}
    formikValues?: any;         // formik values
    handleChange?: any;         // formik onChange hanldler
}

export default InputText;