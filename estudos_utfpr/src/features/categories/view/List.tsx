import { Box, Button, IconButton, ThemeProvider, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteCategory, selectCategories } from "../redux/slice";
import { Link } from "react-router-dom";
import { ButtonInsertTheme } from "../../../config/buttons/insertTheme";
import { DataGrid, GridColDef, GridDeleteIcon, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';

  
export const CategoryList = ()  => {
    const categories = useAppSelector(selectCategories);
    const dispatch = useAppDispatch();

    const componentProps = {
        toolbar: {
            csvOptions: { disableToolbarButton: true },
            printOptions: { disableToolbarButton: true },
            showQuickFilter: true,
            quickFilterProps: { 
                placeholder: 'Filtrar', 
                debounceMs: 
                500
            },
            // components: {
            //     ColumnMenuIcon: GridDeleteIcon,
            // },
            // actions: [
            //     { icon: GridDeleteIcon, label: 'Excluir', onClick: () => console.log('Delete') },
            // ],
        },
    };

    const rows: GridRowsProp = categories.map((category) => {
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            is_active: category.is_active,
            created_at: new Date(category.created_at).toLocaleDateString('pt-BR'),
            id_to_delete: category.id,
        };
    });
    
    
    const columns: GridColDef[] = [
        { 
            field: 'id', 
            headerName: 'Id', 
            type: 'string',
            flex: 1
        },
        { 
            field: 'name', 
            headerName: 'Nome', 
            flex:2,
            renderCell :renderNameCell, 
        },
        { field: 'description', headerName: 'Descrição', flex:4 },
        { 
            field: 'is_active', 
            headerName: 'Ativo', 
            flex:1 ,
            type: 'boolean',
            renderCell :renderIsActiveCell,
        },
        { field: 'created_at', headerName: 'Criado em', flex:1 },
        { 
            field: 'id_to_delete', 
            headerName: 'Ações', 
            flex:1 ,
            renderCell :renderActionsCell,
        },
      ];

    function renderNameCell(rowData: GridRenderCellParams) {
        return (
            <Link 
                style={{ textDecoration: 'none'}}
                to={`/categories/edit/${rowData.id}`}>
                    <Typography color="primary">
                        {rowData.value}
                    </Typography>
            </Link>
        )
    }

    function renderIsActiveCell(rowData: GridRenderCellParams) {
        return (
            <Typography color={rowData.value ? 'green' : 'red'}>
                {rowData.value ? 'Sim' : 'Não'}
            </Typography>
    );
    }

    function renderActionsCell(rowData: GridRenderCellParams) {
        return (
            <IconButton
                style={{ color: 'red' }}
                onClick={( ) => handleDeleteCategory(rowData.value)}
                aria-label="delete">
                <GridDeleteIcon/>
             </IconButton>
        );
    }

    function handleDeleteCategory(id: string) {
        dispatch(deleteCategory(id));
    }

    return (
        <Box maxWidth="lg" sx={{
            mt:4, mb:4,
            color: (theme) => theme.palette.text.primary,
        }}
        >
            <Box
             display="flex" justifyContent="flex-end"
            >
                <ThemeProvider theme={ButtonInsertTheme}>
                    <Button
                        variant="contained" 
                        component={Link}
                        to="/categories/create"
                        >
                        Adicionar Nova
                    </Button>
                </ThemeProvider>
            </Box>

            <Typography variant="h5" component="h1" fontWeight="bold" >
                Lista de Categorias
                <Box sx={{display:"flex", height:600}}>
                    <DataGrid 
                        rows={rows}
                        columns={columns} 
                        density="compact"
                        disableColumnSelector={true}
                        disableColumnFilter={true}
                        disableDensitySelector={true}
                        // disableColumnResize={true}
                        disableRowSelectionOnClick={true}
                        slots={{
                            toolbar: GridToolbar
                        }}
                        slotProps={componentProps}
                    />
                </Box>
                {/* <Box  ml={0.5}>
                    {categories.map((category) => (
                        <Typography key={category.id} variant="h6" component="h2">              
                            {category.name}
                        </Typography>
                    ))}
                </Box> */}
            </Typography>
        </Box>
    );
}