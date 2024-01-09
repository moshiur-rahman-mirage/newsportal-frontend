import CategoryList from "@/components/ui/CategoryList/CategoryList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import React from "react";

const CategoriesLayout = ({children}) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
           <CategoryList/>
          </Grid>
          <Grid item xs={9}>
           <h1>{children}</h1>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
