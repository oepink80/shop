import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';

import { setSearchQuery } from '@/store/actions/searchActions';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flexGrow: 1,
  width: '200px',
  marginRight: theme.spacing(10), // Используем функцию без фигурных скобок
  marginLeft: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  paddingLeft: theme.spacing(0.5),
  transition: 'all 0.3s ease-in-out',
  '& .MuiInputBase-input': {
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`, // Используем интерполяцию
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: theme.palette.text.primary,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface SearchFieldProps {
  onChange: (value: string) => void;
}

const SearchField = ({ onChange }: SearchFieldProps) => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledInputBase
        placeholder="Поиск..."
        onChange={handleSearchChange}
        fullWidth
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ color: '#fff' }} />
      </IconButton>
    </div>
  );
};

export default SearchField;
