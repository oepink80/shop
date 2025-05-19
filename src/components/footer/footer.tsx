// src/components/footer.tsx

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      marginTop: '2rem', // выравнивание по верхней границе
      bgcolor: 'background.default',
      py: 2, // отступ сверху и снизу
      textAlign: 'center',
    }}
  >
    <Typography variant="body2" color="text.secondary">
      &copy; {new Date().getFullYear()} Магазин электроники. Все права защищены.
    </Typography>
  </Box>
);
