import { createTheme } from "@mui/material";

export const ButtonInsertTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    paddingTop: '0.35rem', // Espaçamento superior
                    paddingBottom: '0.2rem', 
                    verticalAlign: 'middle', // Alinhamento vertical
                    color: '#ffffff', // Texto do botão
                    '&:hover': {
                      backgroundColor: '#cc0000', // Cor de fundo ao passar o mouse
                    },
                  },
                  contained: {
                    backgroundColor: '#228B22', // Cor de fundo padrão do botão
                  },
            },
        },
    },
});