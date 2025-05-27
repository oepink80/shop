import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from '@mui/material';
import React from 'react';

const AdminPanel = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Пользователи системы">
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователя</TableCell>
            <TableCell>Роль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>Раздел в разработке</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPanel;
