import React from 'react';
import {
    List, ListItem, ListItemIcon, ListItemText, Typography, Grid, makeStyles,
    createStyles, Theme, Paper, ListItemSecondaryAction, Divider, Button
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { formatCurrency } from '../../../utils/helper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
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
  }),
);

const Orderlist = (props: any) => {
    const classes = useStyles();

    const [dense, setDense] = React.useState(false);

    const { orders, subtotal, tax, discount, grandtotal} = props;

    return <>
        <Paper className={classes.paper}>
            <Typography>Order Placement</Typography>
            <Divider />
            <List dense={dense}>
                {orders && orders.map((order: any) => (
                    <ListItem button key={Math.random()}>
                        <ListItemIcon>
                            {order.quantity}
                        </ListItemIcon>
                        <ListItemText primary={order.name} />
                        <ListItemText style={{textAlign: 'right'}} primary={`$ ${formatCurrency(order.quantity * order.price)}`} />
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
                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(subtotal)}`}</Grid>
                </Grid>
                <Grid container spacing={3} className={classes.figure}>
                    <Grid item xs={3} className={classes.leftAlign}>Tax</Grid>
                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(tax)}`}</Grid>
                </Grid>
                <Grid container spacing={3} className={classes.figure}>
                    <Grid item xs={3} className={classes.leftAlign}>Discount</Grid>
                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(discount)}`}</Grid>
                </Grid>
                <Grid container spacing={3} className={`${classes.figure} ${classes.total}`}>
                    <Grid item xs={3} className={classes.leftAlign}>Total</Grid>
                    <Grid item xs={9} className={classes.rightAlign}>{`$ ${formatCurrency(grandtotal)}`}</Grid>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" disableElevation onClick={() => alert("Your order will be ready soon") }>
                Confirm Order
            </Button>
        </Paper>
    </>
}

export default Orderlist;