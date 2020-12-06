import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  navbar: {
    color: '#fff',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav id="navbar" className={classes.navbar}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Skills" />
        <Tab label="Projects" />
        <Tab label="Contact" />
      </Tabs>
    </nav>
  );
}
