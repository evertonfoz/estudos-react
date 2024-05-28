import { Box, FormControl, FormControlLabel, FormGroup, Grid, Switch, TextField, ThemeProvider } from "@mui/material";
import { BackButton } from "../../../components/buttons/Back";
import { SaveButton } from "../../../components/buttons/Save";
import { TextFieldTheme } from "../../../config/textfields/editTheme";
import React from "react";
import { Category } from "../domain/model";

type Props = {
    category: Category;
    isDisabled?: boolean;
    isLoading?: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CategoryForm({
    category, 
    isDisabled = false,
    isLoading = false,
    handleSubmit: handleSubmit,
    handleChange,
    handleToggle,
}: Props) {
    return (
        <Box p={2} mt={2}>
            <form onSubmit={handleSubmit}>
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
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                            <SaveButton isdisabled={isDisabled}/>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}