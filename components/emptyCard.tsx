import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Skeleton
} from "@mui/material";


const emptyCard = () => {
  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 6].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  return (
    <>
      {generate(
        <Paper
          sx={{
            maxWidth: 936, borderRadius: "0.5rem",
            boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
            mb: 1.5
          }}>
          <ListItem
            secondaryAction={
              <Skeleton animation="wave" width={30} height={40} />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={
                <Skeleton animation="wave" width={200} height={40} />} />
            </ListItemButton>
          </ListItem>
        </Paper >
      )}
    </>
  );
};
export default emptyCard;

