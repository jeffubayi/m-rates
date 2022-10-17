import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress'

const EmptyMovie = () => {
  return (
    <Grid item xs={12} md={12} sx={{ mt: 15 }}>
      <Stack
        direction="column-reverse"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        < CircularProgress />
      </Stack>
    </Grid>
  );
};
export default EmptyMovie;
