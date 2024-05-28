import { Box, Paper, ThemeProvider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCategoryById, updateCategory } from "../redux/slice";
import { ChangeEvent, useState } from "react";
import { PaperTheme } from "../../../config/papers/editTheme";
import { CategoryForm } from "../components/Form";
import { Category } from "../domain/model";

export const CategoryEdit = () => {
    const id = useParams().id || "";
    const [isDisabled, setIsDisabled] = useState(false);
    const category = 
        useAppSelector((state) => selectCategoryById(state, id),
    );
    // const [category, setCategory] = useState(
    //     useAppSelector((state) => selectCategoryById(state, parseInt(id))),
    // );
    const [categoryState, setCategoryState] = useState<Category>(category);
    const dispatch = useAppDispatch();
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCategoryState({
            ...category,
            [name]: value,
        });
    };

    const handleToggle = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setCategoryState({
            ...category,
            [name]: checked,
        });};

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(updateCategory(categoryState));
        // setIsDisabled(true);
        // setCategoryState(categoryState);
    }
    
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

                    <CategoryForm 
                        category={categoryState}
                        isDisabled={isDisabled}
                        isLoading={false}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleToggle={handleToggle}/>
                </Paper>
            </ThemeProvider>
        </Box>
    )   
}