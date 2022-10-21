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
  console.log(`rateList`, amount, type, id)
  return (
    <>
      <Paper
        sx={{
          maxWidth: 936, borderRadius: "0.5rem",
          boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
        }}>
        <ListItem
          secondaryAction={
            <Typography
              sx={{ display: 'inline', fontWeight: "500" }}
              component="span"
              variant="button"
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

