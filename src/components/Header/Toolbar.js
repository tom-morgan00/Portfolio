import {
  AppBar,
  IconButton,
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HideOnScroll from './HideOnScroll';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
});
export default function Header() {
  const classes = useStyles();
  const navLinks = [
    { title: 'home', path: '/#top' },
    { title: 'about', path: '/#about' },
    { title: 'skills', path: '/#skills' },
    { title: 'projects', path: '/#projects' },
    { title: 'contact', path: '/#contact' },
  ];
  return (
    <HideOnScroll>
      <AppBar id="navbar" position="fixed">
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <div className="brand">
              <a href="/">
                <IconButton
                  style={{ fontFamily: 'Pacifico' }}
                  edge="start"
                  color="inherit"
                  aria-label="home"
                >
                  {`<tm>`}
                </IconButton>
              </a>
            </div>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                  <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Hidden>

            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
