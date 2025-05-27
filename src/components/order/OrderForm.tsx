import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';

import type { OrderInputData } from '@/types/types';

// Валидаторы Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Имя обязательно'),
  lastName: Yup.string().required('Фамилия обязательна'),
  email: Yup.string().email('Некорректный адрес').required('Email обязателен'),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Телефон должен содержать цифры')
    .min(10, 'Минимум 10 цифр')
    .max(15, 'Максимум 15 цифр')
    .required('Телефон обязателен'),
  address: Yup.string().required('Адрес обязателен'),
  paymentMethod: Yup.string()
    .oneOf(
      ['card', 'cash'],
      'Метод оплаты обязателен, выберите один из вариантов',
    )
    .required('Метод оплаты обязателен'),
});

interface Props {
  onSubmit: (data: OrderInputData) => void;
}

export default function OrderForm({ onSubmit }: Props) {
  const formMethods = useForm<OrderInputData>({
    resolver: yupResolver(validationSchema),
  });

  const { control, handleSubmit } = formMethods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Поля формы */}
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Имя"
            fullWidth
            margin="normal"
            error={!!formMethods.formState.errors.firstName}
            helperText={formMethods.formState.errors.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Фамилия"
            fullWidth
            margin="normal"
            error={!!formMethods.formState.errors.lastName}
            helperText={formMethods.formState.errors.lastName?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            margin="normal"
            error={!!formMethods.formState.errors.email}
            helperText={formMethods.formState.errors.email?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Телефон"
            fullWidth
            margin="normal"
            error={!!formMethods.formState.errors.phoneNumber}
            helperText={formMethods.formState.errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Адрес доставки"
            multiline
            rows={3}
            fullWidth
            margin="normal"
            error={!!formMethods.formState.errors.address}
            helperText={formMethods.formState.errors.address?.message}
          />
        )}
      />

      <Box display="flex" flexDirection="column" width="100%" my={2}>
        <Typography variant="subtitle1">Способ оплаты:</Typography>
        <Controller
          name="paymentMethod"
          control={control}
          defaultValue="card"
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Банковская карта"
              />
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Наличные при получении"
              />
            </RadioGroup>
          )}
        />
      </Box>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        fullWidth
      >
        Оформить заказ
      </Button>
    </form>
  );
}
