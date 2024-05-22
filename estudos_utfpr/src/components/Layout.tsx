import { Box, Container } from "@mui/material";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <Box>
            <Container 
                maxWidth="lg"
                sx={{
                    mt:4, mb:4, bgcolor:"white", color:"indigo", 
                    backgroundColor: (theme) => theme.palette.secondary.main,
                }}>
                {children}
            </Container>
        </Box>
    );
}