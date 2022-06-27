import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'

const SubComponent2: FC = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            label='First Name'
            variant='outlined'
            error={!!errors.email}
          />
        )}
      />
      <br />
      <br />
      <Controller
        name='lastName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            label='Last Name'
            variant='outlined'
            error={!!errors.password}
          />
        )}
      />
    </>
  )
}

export default SubComponent2
