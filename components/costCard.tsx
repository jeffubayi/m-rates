import {
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

interface rateProps {
  amount: number;
  type: string;
  id: string;
}

const CostCard = ({ amount, type, id }: rateProps) => {
  return (
    <>
      <Paper
        sx={{
          maxWidth: 936, borderRadius: "0.5rem",
          boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
          mb: 1.5,
          p:1
        }}>
        <ListItem
          secondaryAction={
            <Typography
              sx={{ display: 'inline', fontWeight: "bold" }}
              variant="subtitle1"
              color="primary"
            >
              {amount}
            </Typography>
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemText id={id} primary={
              <Typography
                component="span"
                variant="body2"
              >
                {type}
              </Typography>} />
          </ListItemButton>
        </ListItem>
      </Paper >
    </>
  );
};
export default CostCard;

