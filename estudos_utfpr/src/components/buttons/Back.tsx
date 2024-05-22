import { Button } from "@mui/material";
import { Link } from "react-router-dom";


// Estilos para o botão "Voltar"
const backButtonStyles = {
    backgroundColor: '#E0B53F', // Cor de fundo do botão "Voltar"
    color: '#ffffff', // Cor do texto do botão "Voltar"
    '&:hover': {
        backgroundColor: '#966200', // Cor de fundo ao passar o mouse sobre o botão "Voltar"
    },
};

export function BackButton({to}: {to: string}) {
    return (
        <Button variant="contained" 
            component={Link} to="to"
            sx={backButtonStyles}>
            Voltar
        </Button>
    );
}