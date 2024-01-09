import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="max-w-7xl mx-auto">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
         <Sidebar/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;