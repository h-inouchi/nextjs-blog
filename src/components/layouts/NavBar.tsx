import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    appBarMenuItem: {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    appBarMenuItemLink: {
      color: 'white',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const MENU_LIST = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    title: 'Movie',
    icon: <MovieIcon />,
    href: '/movies',
  },
];

export default function NavBar(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {MENU_LIST.map(({ title, icon, href }, index) => (
          <ListItem
            button
            key={title}
            onClick={() => {
              setMobileOpen(false);
              router.push(href);
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            onClick={() => {
              router.push('/');
            }}
          >
            ??????????????????????????????
          </Typography>
          {MENU_LIST.map(({ title, icon, href }) => {
            return (
              <Typography className={classes.appBarMenuItem} key={title} noWrap>
                <Link href={href}>
                  <span className={classes.appBarMenuItemLink}>{title}</span>
                </Link>
              </Typography>
            );
          })}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.toolbar} />
    </>
  );
}
