import { createTheme } from "@mui/material";

export const TextFieldTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#2e0c9e', // Cor da borda padrão
              },
              '&:hover fieldset': {
                borderColor: '#3903fc', // Cor da borda ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: 'blue', // Cor da borda quando focado
              },
            },
            '& .MuiInputBase-root': {
              backgroundColor: 'white',
            },
          },
        },
      }
    },
});