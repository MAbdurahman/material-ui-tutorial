import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
   sideMenu: {
      position: 'absolute',
      left: '0',
      width: '320px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#423E37',
      color: '#EDEBD7',
   }
})

export default function SideMenu() {
   const classes = useStyles();
   return (
      <div className={classes.sideMenu}>
         <h1>SideMenu</h1>
      </div>
   );
};
