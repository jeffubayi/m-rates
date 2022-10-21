import { TextField } from "@mui/material";

interface inputType {
  handleChange: any;
  name: any; type: any;
  label: any;
  placeholder: any;
}

const RateInput = ({ handleChange, name, type, label, placeholder }: inputType) => {
  return (
    <TextField
      size="small"
      label={label}
      onChange={handleChange}
      className="input"
      sx={{
        borderRadius: "10rem",
        boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
      }}
      type={type}
      name={name}
      placeholder={placeholder}
      fullWidth
    />
  );
};
export default RateInput;
