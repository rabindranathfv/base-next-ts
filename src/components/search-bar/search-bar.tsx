import React, { useState } from "react";

import { styled } from '@mui/material/styles';
import { FormControl, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { red } from "@mui/material/colors";

interface SearchTextProps {
  onSearch: (query: string) => void;
};

const SearchBarContainer = styled('div')(({ theme }) => ({
    flexGrow: 1,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
  }));

  const SearchBarTextField = styled(TextField)<{ fullWidth?: boolean }>(
    ({ theme }) => ({
      flexGrow: 1,
      width: '100%',
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    })
  );

const SearchText: React.FC<SearchTextProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSearch(query);
    };

    return (
        <SearchBarContainer>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={12} sm={8}>
                    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
                        <SearchBarTextField
                        label="  Search"
                        variant="standard"
                        fullWidth
                        value={query}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            sx: {
                              fontWeight: 'bold',
                              position: 'relative',
                            },
                          }}
                        InputProps={{
                            endAdornment: <SearchIcon />,
                        }}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </SearchBarContainer>
  );
};

export default SearchText;
