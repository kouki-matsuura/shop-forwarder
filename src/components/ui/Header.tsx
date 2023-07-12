'use client';
import MuiBox from './MuiBox';
import MuiMenuIcon from './MuiMenuIcon';
import MuiAppBar from './MuiAppBar';
import MuiToolbar from './MuiToolbar';
import MuiIconButton from './MuiIconButton';
import MuiTypography from './MuiTypography';
import MuiButton from './MuiButton';

const Header: React.FC = ({}) => {
  return (
    <MuiBox>
      <MuiAppBar>
        <MuiToolbar>
          <MuiIconButton>
            <MuiMenuIcon />
          </MuiIconButton>
          <MuiTypography>News</MuiTypography>
          <MuiButton>Login</MuiButton>
        </MuiToolbar>
      </MuiAppBar>
    </MuiBox>
  );
};

export default Header;
