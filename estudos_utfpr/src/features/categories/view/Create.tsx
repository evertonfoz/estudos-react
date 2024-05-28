import { Box } from "@mui/material";
import { CategoryForm } from "../components/Form";
import { useState } from "react";
import { Category } from "../domain/model";
import { PaperHeaderForm } from "../components/Paper";
import { createCategory } from "../redux/slice";
import { useAppDispatch } from "../../../app/hooks";

export const CategoryCreate = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [categoryState, setCategoryState] = useState<Category>(
        {
            id: uuidv4(),
            name: '',
            description: '',
            is_active: false,
            created_at: '',
            updated_at: '',
            deleted_at: '',
        }
    );
    const dispatch = useAppDispatch();
    
    const handleChange = (e:any) => {
        setCategoryState({
            ...categoryState,
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
        });
    };

    const handleToggle = (e:any) => {
        setCategoryState({
            ...categoryState,
            [e.target.name]: e.target.checked,
        });};

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(createCategory(categoryState));
        // setIsDisabled(true);
        // setCategoryState(categoryState);
    }

    return (
        <Box>
            <PaperHeaderForm header="Criar Categoria">
                <CategoryForm 
                    category={categoryState}
                    isDisabled={isDisabled}
                    isLoading={false}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleToggle={handleToggle}/>
            </PaperHeaderForm>
        </Box>
    )   
}

function uuidv4(): string {
    throw new Error("Function not implemented.");
}
