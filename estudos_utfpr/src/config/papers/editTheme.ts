import { createTheme } from "@mui/material";

export const PaperTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#e4f8fc', // Cor de fundo
            // padding: '8px', // Padding padrão
            // Adicione mais estilos conforme necessário
          },
        },
      },
    },
});