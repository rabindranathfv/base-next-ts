import { useState } from 'react';

import { TextField, Button, Box, Alert } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { Router, useRouter } from 'next/router';

type FormLoginValues = {
    username: string;
    password: string;
  };

export const LoginSection = () => {
    const router = useRouter()
    const [loginState, setLoginState] = useState({
        error: '',
    })

    const showAuthError = (error: string) => error === 'CredentialsSignin' ? `Por favor revisar sus credenciales, existe un error en ellas` : 'Ups error inesperado al iniciar sesion'
    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange', defaultValues: { username: '', password: '' } })

    const onSubmit: SubmitHandler<FormLoginValues> = async (data) => {
        try {
            setLoginState(state => ({ ...state, error: '' }))
            console.log("FORM DATA************",data);
            const { username, password } = data

            const authResp = await signIn('credentials', { ...data, redirect: false })
            console.log('🚀 ~ file: login-section.tsx:28 ~ constonSubmit:SubmitHandler<FormLoginValues>= ~ authResp:', authResp)

            if (authResp?.ok) {
                reset()
                router.push('dashboard')
            } else {
                setLoginState(state => ({ ...state, error: `${authResp?.error}` }))
            }
        } catch (error) {
            console.log('🚀 ~ file: login-section.tsx:36 ~ constonSubmit:SubmitHandler<FormLoginValues>= ~ error:', error)
            setLoginState(state => ({ ...state, error: `${error}` ?? 'Something went wrong!' }))
        }
      };

    return (<>
        <div>
            { loginState.error !== '' && <Alert severity="error">{showAuthError(loginState.error)}</Alert> }
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
          >
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              {...register('username', { required: { value: true, message: 'El campo del usuario es requerido' }})}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              InputProps={{
                startAdornment: (
                  <AccountCircle
                    sx={{
                      color: 'grey.500',
                    }}
                  />
                ),
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              {...register('password', { required: { value: true, message: 'El campo Contraseña es requerido' }, minLength: { value: 6, message: 'La contrasena debe tener almenos 6 caracteres' } })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: (
                  <Lock
                    sx={{
                      color: 'grey.500',
                    }}
                  />
                ),
              }}
            />
            <Button variant="contained" type="submit" disabled={!isDirty || !isValid}>
              Entrar
            </Button>
          </Box>
        </form>
        </>
      );
}
