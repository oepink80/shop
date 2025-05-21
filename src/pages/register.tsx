import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserAction } from '@/store/slices/userSlice';

interface RegistrationFields {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const RegistrationPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [fields, setFields] = useState<RegistrationFields>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>(
    Object.create(null),
  );

  const validateFields = () => {
    const errorsObj: Record<string, string> = {};

    if (!fields.firstName.trim()) errorsObj.firstName = 'Укажите ваше имя.';
    if (!fields.lastName.trim()) errorsObj.lastName = 'Укажите вашу фамилию.';
    if (!fields.email.includes('@'))
      errorsObj.email = 'Укажите правильный e-mail.';
    if (!fields.username.trim()) errorsObj.username = 'Укажите ваш логин.';
    if (fields.password.length < 6)
      errorsObj.password = 'Минимальная длина пароля — 6 символов.';
    if (fields.confirmPassword !== fields.password)
      errorsObj.confirmPassword = 'Пароли не совпадают.';

    return Object.keys(errorsObj).length > 0 ? errorsObj : null;
  };

  const registerUser = () => {
    const token = Math.random().toString(36).substring(7); // Генерация случайного токена
    const userForStore = {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      username: fields.username,
      token,
      role: 'USER',
    };

    // Сохраняем пользователя в localStorage
    window.localStorage.setItem('user', JSON.stringify(userForStore));

    // Добавляем пользователя в Redux store
    dispatch(setUserAction(userForStore));

    // Чистка формы
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });

    // Уведомляем пользователя об успехе
    alert('Регистрация выполнена успешно!');
  };

  const handleChange =
    (field: keyof RegistrationFields) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFields((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationResult = validateFields();

    if (validationResult) {
      setErrors(validationResult);
      return;
    }

    setErrors(Object.create(null));
    setLoading(true);

    try {
      registerUser();
    } catch (error) {
      console.error('Ошибка:', error);
      setErrors({ server: 'Что-то пошло не так.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" gutterBottom>
          Регистрация
        </Typography>
        <TextField
          label="Имя"
          value={fields.firstName}
          onChange={handleChange('firstName')}
          helperText={errors.firstName}
          error={!!errors.firstName}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Фамилия"
          value={fields.lastName}
          onChange={handleChange('lastName')}
          helperText={errors.lastName}
          error={!!errors.lastName}
          margin="normal"
          fullWidth
        />
        <TextField
          label="E-mail"
          value={fields.email}
          onChange={handleChange('email')}
          helperText={errors.email}
          error={!!errors.email}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Логин"
          value={fields.username}
          onChange={handleChange('username')}
          helperText={errors.username}
          error={!!errors.username}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Пароль"
          type="password"
          value={fields.password}
          onChange={handleChange('password')}
          helperText={errors.password}
          error={!!errors.password}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Подтвердите пароль"
          type="password"
          value={fields.confirmPassword}
          onChange={handleChange('confirmPassword')}
          helperText={errors.confirmPassword}
          error={!!errors.confirmPassword}
          margin="normal"
          fullWidth
        />
        {errors.server && <Alert severity="error">{errors.server}</Alert>}
        <Button
          type="submit"
          disabled={loading}
          variant="contained"
          color="primary"
          endIcon={loading ? <CircularProgress size={24} /> : undefined}
          style={{ marginTop: theme.spacing(2) }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
