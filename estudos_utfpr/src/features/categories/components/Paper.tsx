import { Paper, Box, Typography } from "@mui/material";

export function PaperHeaderForm({children , header}: {
        children: React.ReactNode, header: string}) {
    return (
        <Paper sx={{ backgroundColor: '#f5f5f5' }}>
            <Box p={2}>
                <Box>
                    <Typography variant="h4" component="h1">
                        {header}
                    </Typography>
                </Box>
            </Box>
            {children}
        </Paper>
    );
      
}