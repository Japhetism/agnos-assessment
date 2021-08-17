import React from 'react';
import {
    List, ListItem, ListItemIcon, ListItemText, Typography, Grid, makeStyles,
    createStyles, Theme, Paper, ListItemSecondaryAction, Divider, Button, alpha
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import KitchenIcon from '@material-ui/icons/Kitchen';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AppHeader from '../../components/app-bar';
import { formatCurrency } from '../../utils/helper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cost: {
        marginTop: 30,
        marginBottom: 30,
    },
    figure: {
        marginTop: 5,
        marginBottom: 5,
    },
    leftAlign: {
        textAlign: 'left',
    },
    rightAlign: {
        textAlign: 'right',
    },
    total: {
        fontWeight: 'bold',
        fontSize: '30px',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '100ch',
        },
      },
  }),
);

const HomeView = (props: any) => {
    const classes = useStyles();

    const [dense, setDense] = React.useState(false);

    const { products } = props;

    return (
        <>
            <AppHeader />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <Paper className={classes.paper}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                            <List dense={dense}>
                                {products && products.map((product: any) => (
                                    <ListItem button key={Math.random()}>
                                        <ListItemIcon>
                                            {product.category === 'Beverages' ? <FreeBreakfastIcon /> : <KitchenIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={product.name} />
                                        <ListItemSecondaryAction>
                                            <Typography>{`$ ${formatCurrency(product.price)}`}</Typography>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            <Typography>Order Placement</Typography>
                            <Divider />
                            <List dense={dense}>
                                {products && products.map((product: any) => (
                                    <ListItem button key={Math.random()}>
                                        <ListItemIcon>
                                            1
                                        </ListItemIcon>
                                        <ListItemText primary={product.name} />
                                        <ListItemText style={{textAlign: 'right'}} primary={`$ ${formatCurrency(product.price)}`} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon style={{ fontSize: 15 }} />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <Grid className={classes.cost}>
                                <Grid container spacing={3} className={classes.figure}>
                                    <Grid item xs={3} className={classes.leftAlign}>Sub Total</Grid>
                                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(1000)}`}</Grid>
                                </Grid>
                                <Grid container spacing={3} className={classes.figure}>
                                    <Grid item xs={3} className={classes.leftAlign}>Tax</Grid>
                                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(1000)}`}</Grid>
                                </Grid>
                                <Grid container spacing={3} className={classes.figure}>
                                    <Grid item xs={3} className={classes.leftAlign}>Discount</Grid>
                                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(1000)}`}</Grid>
                                </Grid>
                                <Grid container spacing={3} className={`${classes.figure} ${classes.total}`}>
                                    <Grid item xs={3} className={classes.leftAlign}>Total</Grid>
                                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(1000)}`}</Grid>
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="primary" disableElevation>
                                Confirm Order
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default HomeView;
