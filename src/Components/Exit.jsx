import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import Nav from './Nav';
import { Navigate, useNavigate } from 'react-router-dom';

const Enter = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR');
  const currentTime = new Date().toLocaleTimeString('pt-BR');
  const navigate = useNavigate();

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Inclua a data e a hora nos dados do formulário
    data.data = `${formattedDate} - ${currentTime}`;

    try {
      const response = await fetch('http://localhost:3000/trucks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate('/home');
      } else {
        console.error('Erro ao enviar dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center flex-col gap-10 p-12 bg-white">
      <Nav />
      <header>
        <h1 className="font-bold text-center text-blue text-4xl">
          Liberar Saída
        </h1>
        <span className="font-bold text-center">
          Registre as informações da carga e motorista que irá ser liberado
        </span>
      </header>

      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 shadow-xl px-20 py-10 rounded-lg shadow-black"
        >
          <div className="flex items-center justify-between gap-4">
            <TextField
              {...register('nome', { required: 'Nome é obrigatório' })}
              id="outlined-basic"
              label="Nome"
              inputProps={{
                maxLength: 20,
              }}
              variant="outlined"
              error={!!errors.nome}
              helperText={errors.nome ? errors.nome.message : ''}
            />
            <TextField
              {...register('cpf', { required: 'CPF é obrigatório' })}
              id="outlined-basic"
              label="CPF"
              inputProps={{
                maxLength: 11,
              }}
              variant="outlined"
              error={!!errors.cpf}
              helperText={errors.cpf ? errors.cpf.message : ''}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <TextField
              {...register('carga', { required: 'Carga é obrigatória' })}
              className="w-full"
              color={''}
              id="outlined-basic"
              label="Carga transportada"
              inputProps={{
                maxLength: 10,
              }}
              variant="outlined"
              error={!!errors.carga}
              helperText={errors.carga ? errors.carga.message : ''}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <TextField
              {...register('placa', { required: 'Placa é obrigatória' })}
              id="outlined-basic"
              label="Placa"
              inputProps={{
                maxLength: 7,
              }}
              variant="outlined"
              error={!!errors.placa}
              helperText={errors.placa ? errors.placa.message : ''}
            />

            <TextField
              {...register('data')}
              id="outlined-basic"
              variant="outlined"
              value={`${formattedDate} - ${currentTime}`}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <TextField
              {...register('liberacao', {
                required: 'Liberação é obrigatória',
              })}
              fullWidth
              id="outlined-basic"
              variant="outlined"
              label="Liberado por"
              error={!!errors.liberacao}
              helperText={errors.liberacao ? errors.liberacao.message : ''}
            />

            <TextField
              {...register('tipo')}
              id="outlined-basic"
              variant="outlined"
              value="Saída"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div>
            <Button type="submit" variant="contained" className="w-full">
              Liberar
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Enter;
