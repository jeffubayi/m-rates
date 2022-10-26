import { TextField, Grid, Paper, Typography } from "@mui/material";
import { DebounceInput } from 'react-debounce-input';
interface inputType {
  handleChange: any;
}

const RateInput = ({ handleChange }: inputType) => {
  return (
    <Grid item xs={12} md={12} >
      <Typography variant="body2">Amount</Typography>
      <Paper sx={{ borderRadius: "0.5rem", }}>
        <DebounceInput
          style={{ width: "100%", border: "none", borderRadius: "0.5rem", height: "20%", padding: "0.5rem" }}
          minLength={2}
          debounceTimeout={300}
          onChange={handleChange}

        />
      </Paper>
    </Grid>
  );
};
export default RateInput;
