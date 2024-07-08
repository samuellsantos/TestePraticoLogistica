import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { Button, TextField } from '@mui/material';

const Edit = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR');
  const currentTime = new Date().toLocaleTimeString('pt-BR');
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [truck, setTruck] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/trucks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTruck(data);
        setValue('nome', data.nome);
        setValue('cpf', data.cpf);
        setValue('carga', data.carga);
        setValue('placa', data.placa);
        setValue('liberacao', data.liberacao);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    fetch(`http://localhost:3000/trucks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => {
      navigate('/home');
    });
  };
  return (
    <div>
      <div className="relative w-full h-screen flex items-center flex-col gap-10 p-12 bg-white">
        <Nav />
        <header className="flex items-center flex-col">
          <h1 className="font-bold text-4xl text-blue">Editar Cadastro</h1>
          <span className="font-bold">
            Registre as informações da carga e motorista
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={!!errors.cpf}
                helperText={errors.cpf ? errors.cpf.message : ''}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <TextField
                {...register('carga', { required: 'Carga é obrigatória' })}
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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
                value="Entrada"
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <Button type="submit" variant="contained" className="w-full">
              Confirmar Edição
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Edit;
