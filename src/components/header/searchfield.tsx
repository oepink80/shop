import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/system';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flexGrow: 1,
  width: '50%',
  marginLeft: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  transition: 'all 0.3s ease-in-out', // Или transition: `${theme.transitions.duration.short}ms linear`
  '& .MuiInputBase-input': {
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
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
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

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
