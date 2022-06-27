import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'

const SubComponent1: FC = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <Controller
        name='email'
        control={control}
        defaultValue='example@milos.test.com'
        render={({ field }) => (
          <TextField
            {...field}
            type='email'
            label='Email'
            variant='outlined'
            error={!!errors.email}
          />
        )}
      />
      <br />
      <br />
      <Controller
        name='password'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            type='password'
            label='Password'
            variant='outlined'
            error={!!errors.password}
          />
        )}
      />
    </>
  )
}

export default SubComponent1
