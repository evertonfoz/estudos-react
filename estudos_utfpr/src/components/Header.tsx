import { AppBar, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" size="large"
                    sx={{mr:2}} >
                <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    CeliLac App - Admin Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
