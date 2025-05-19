import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import * as React from 'react';

type SortOption = 'asc' | 'desc';

interface FilterOptions {
  category?: string; // Категория фильтра
  sortBy?: 'price' | 'title'; // Поле для сортировки
  order?: SortOption; // Порядок сортировки
}

interface ProductFiltersProps {
  categories: string[];
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export default function ProductFilters(props: ProductFiltersProps): React.JSX.Element {
  const { categories, filterOptions, setFilterOptions } = props;

  return (
    <Box
      display="flex"
      flexWrap="wrap" // позволяет элементам переноситься на новую строку
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
      sx={{
        '& > div': {
          width: { xs: '100%', sm: 'initial' },
        },
      }}
    >
      <FormControl variant="standard" style={{ minWidth: 180 }}>
        <InputLabel id="category-filter-label">Фильтр по категории:</InputLabel>
        <Select
          labelId="category-filter-label"
          value={filterOptions.category ?? ''}
          label="Категория"
          onChange={(event) =>
            setFilterOptions({ ...filterOptions, category: event.target.value })
          }
        >
          <MenuItem value="">Все категории</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="standard" style={{ minWidth: 180 }}>
        <InputLabel id="sort-by-select-label">Сортировать по:</InputLabel>
        <Select
          labelId="sort-by-select-label"
          value={filterOptions.sortBy ?? ''}
          label="Сортировка"
          onChange={(event) =>
            setFilterOptions({ ...filterOptions, sortBy: event.target.value })
          }
        >
          <MenuItem value="">Без сортировки</MenuItem>
          <MenuItem value="price">По цене</MenuItem>
          <MenuItem value="title">По названию</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" style={{ minWidth: 180 }}>
        <InputLabel id="sort-order-select-label">Порядок сортировки:</InputLabel>
        <Select
          labelId="sort-order-select-label"
          value={filterOptions.order}
          label="Порядок"
          disabled={!filterOptions.sortBy}
          onChange={(event) =>
            setFilterOptions({
              ...filterOptions,
              order: event.target.value as SortOption,
            })
          }
        >
          <MenuItem value="asc">От меньшего к большему</MenuItem>
          <MenuItem value="desc">От большего к меньшему</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
