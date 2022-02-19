import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

function FormInput({ name, label}) {
  const { control } = useFormContext();
  const isError = false;

  return (

    <div item xs={12} sm={6} className="py-2">
      <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required
        error={isError}
      />
    </div>
  );
}

export default FormInput;