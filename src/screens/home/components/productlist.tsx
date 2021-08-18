import React from 'react';
import {
    List, ListItem, ListItemIcon, ListItemText, Typography, makeStyles,
    createStyles, Theme, Paper, ListItemSecondaryAction
} from '@material-ui/core';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { formatCurrency } from '../../../utils/helper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        },
    }),
);

const Productlist = (props: any) => {
    const classes = useStyles();

    const [dense, setDense] = React.useState(false);

    const { products, setOpenModal, setSelectedProduct } = props;

    return <>
        <Paper className={classes.paper}>
            <List dense={dense}>
                {products && products.map((product: any) => (
                    <ListItem button key={Math.random()} onClick={() => { 
                        setOpenModal(true)
                        setSelectedProduct(product)
                    }}>
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
    </>
}

export default Productlist;