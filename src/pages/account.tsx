// src/pages/account.tsx

import { Tab, Tabs, Box } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';

import AdminPanel from '@/components/admin/AdminPanel'; // Панель администратора
import MyOrders from '@/components/user/MyOrders'; // История заказов
import ProfileInfo from '@/components/user/ProfileInfo'; // Личные данные

// Типизация
enum TabValue {
  ORDERS = 'ORDERS',
  PROFILE = 'PROFILE',
  ADMIN = 'ADMIN',
}

export default function AccountPage() {
  const role = useSelector((state: any) => state.user.role); // предполагаемая структура ролей
  const [value, setValue] = React.useState<TabValue>(TabValue.PROFILE);

  const handleChange = (event: React.SyntheticEvent, value: any) => {
    setValue(value as TabValue);
  };

  return (
    <div className="account-page">
      <h1>Личный кабинет</h1>

      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Мои заказы" value={TabValue.ORDERS} />
          <Tab label="Личные данные" value={TabValue.PROFILE} />
          {role === 'ADMIN' && (
            <Tab label="Администрирование" value={TabValue.ADMIN} />
          )}
        </Tabs>
      </Box>

      {value === TabValue.ORDERS && <MyOrders />}
      {value === TabValue.PROFILE && <ProfileInfo />}
      {value === TabValue.ADMIN && <AdminPanel />}
    </div>
  );
}
