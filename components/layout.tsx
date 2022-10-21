import { Main } from "../styles";
import { Toolbar } from '@mui/material';
import Header from "./header"

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <Main maxWidth="sm">
      <Header />
      {children}
      <Toolbar sx={{ mt: "2rem" }} />
    </Main>
  );
};

export default Layout;
