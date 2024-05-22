import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, ThemeProvider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectCategoryById } from "../redux/slice";
import { useState } from "react";
import { AppTheme } from "../../../config/appTheme";
import { PaperTheme } from "../../../config/papers/editTheme";
import { TextFieldTheme } from "../../../config/textfields/editTheme";
import { SaveButton } from "../../../components/buttons/Save";
import { BackButton } from "../../../components/buttons/Back";

export const CategoryEdit = () => {
    const id = useParams().id || "";
    const [isdisabled, setIsDisabled] = useState(false);
    const [category, setCategory] = useState(
        useAppSelector((state) => selectCategoryById(state, parseInt(id))),
    );
    
    const handleChange = (e:any) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
        });
    };

    const handleToggle = (e:any) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.checked,
        });};
    
    return (
        <Box>
            <ThemeProvider theme={PaperTheme}>
                <Paper>
                    <Box p={2}>
                        <Box>
                            <Typography variant="h4" component="h1">
                                Editar Categoria
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>

            <Box p={2} mt={2}>
                <form>
                    <Grid container spacing={3}>  
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <ThemeProvider theme={TextFieldTheme}>
                                    <TextField
                                        autoFocus
                                        required
                                        name="name"
                                        label="Nome"
                                        value={category.name}
                                        disabled={isdisabled}
                                        onChange={handleChange}
                                        color="secondary"
                                    />
                                </ThemeProvider>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <ThemeProvider theme={TextFieldTheme}>
                                    <TextField
                                        required
                                        name="description"
                                        label="Descrição"
                                        value={category.description}
                                        disabled={isdisabled}
                                        onChange={handleChange}
                                    />
                                </ThemeProvider>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={category.is_active}
                                            onChange={handleToggle}
                                            name="is_active"
                                            inputProps={{ 'aria-label': 'controlled' } }
                                        />
                                    }
                                    label="Ativo"
                                />
                            </FormGroup>
                        </Grid>

                        <Grid item xs={12}>
                            <Box display="flex" gap={2}>
                                <BackButton to={"/categories"}/>
                                <SaveButton isdisabled={isdisabled}/>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )   
}