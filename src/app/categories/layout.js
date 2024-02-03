import CategoryList from '@/components/ui/CategoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
            <Grid container spacing={8}>
        <Grid item xs={4}>
           <CategoryList/>
        </Grid>
        <Grid item xs={8}>
           {children}
        </Grid>
  
</Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;