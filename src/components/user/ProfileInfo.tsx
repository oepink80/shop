import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser, setUserAction } from '@/store/slices/userSlice';
import theme from '@/themes/theme';

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [fields, setFields] = useState({
    firstName: user?.firstName ?? '', // Получаем данные из Redux store
    lastName: user?.lastName ?? '',
    email: user?.email ?? '',
    username: user?.username ?? '',
    oldPassword: '', // Старый пароль нужен для подтверждения смены
    newPassword: '',
    confirmNewPassword: '',
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

    if (fields.newPassword.length > 0 && fields.newPassword.length < 6) {
      errorsObj.newPassword = 'Новый пароль должен быть минимум 6 символов.';
    }

    if (fields.confirmNewPassword !== fields.newPassword) {
      errorsObj.confirmNewPassword = 'Новые пароли не совпадают.';
    }

    return Object.keys(errorsObj).length > 0 ? errorsObj : null;
  };

  const updateUser = () => {
    const updatedUser = {
      ...user,
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      username: fields.username,
    };

    // Генерируем новый токен, если менялся пароль
    if (fields.newPassword) {
      updatedUser.token = Math.random().toString(36).substring(7);
    }

    // Сохраняем обновленного пользователя в localStorage
    window.localStorage.setItem('user', JSON.stringify(updatedUser));

    // Обновляем Redux store
    dispatch(setUserAction(updatedUser));

    // Оповещаем пользователя об успешном изменении
    alert('Профиль успешно обновлён!');
  };

  const handleChange =
    (field: keyof typeof fields) =>
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
      updateUser();
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
          Редактирование профиля
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
          label="Ваш старый пароль (при смене)"
          type="password"
          value={fields.oldPassword}
          onChange={handleChange('oldPassword')}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Новый пароль"
          type="password"
          value={fields.newPassword}
          onChange={handleChange('newPassword')}
          helperText={errors.newPassword}
          error={!!errors.newPassword}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Подтвердите новый пароль"
          type="password"
          value={fields.confirmNewPassword}
          onChange={handleChange('confirmNewPassword')}
          helperText={errors.confirmNewPassword}
          error={!!errors.confirmNewPassword}
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
          Сохранить изменения
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
