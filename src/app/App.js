import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import Header from '../components/header/Header';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    width: '100%',
    paddingLeft: '320px',
  }
})

export default function App() {
  const classes = useStyles();

  return (
		<>
			<SideMenu />
			<div className={classes.appMain}>
				<Header />
			</div>
		</>
  );
};

