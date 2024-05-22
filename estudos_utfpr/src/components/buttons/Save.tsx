import { Button } from "@mui/material";

// Estilos para o botão "Gravar"
const saveButtonStyles = {
    backgroundColor: '#FFC43C', // Cor de fundo do botão "Gravar"
    color: '#ffffff', // Cor do texto do botão "Gravar"
    '&:hover': {
        backgroundColor: '#FFB400', // Cor de fundo ao passar o mouse sobre o botão "Gravar"
    },
};
export function SaveButton({isdisabled}: {isdisabled: boolean}) {
    return (
        <Button type="submit" variant="contained" 
            disabled={isdisabled}
            sx={saveButtonStyles}>
            Salvar
        </Button>
    );
}