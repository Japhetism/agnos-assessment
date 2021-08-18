import React from 'react';
import {
    Grid, makeStyles, createStyles, Theme
} from '@material-ui/core';
import AppHeader from '../../components/app-bar';
import ModalComponent from '../../components/modal';
import Orderlist from './components/orderlist';
import Productlist from './components/productlist';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
        },
    })
);

const HomeView = (props: any) => {
    const classes = useStyles();
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const { products, orders, addToOrder, grandtotal, subtotal, discount, tax } = props;
    
    return (
        <>
            <AppHeader />
            <ModalComponent openModal={openModal} selectedProduct={selectedProduct} addToOrder={addToOrder} />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <Productlist 
                            products={products}
                            setOpenModal={setOpenModal}
                            setSelectedProduct={setSelectedProduct}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Orderlist 
                            orders={orders}
                            subtotal={subtotal}
                            discount={discount}
                            tax={tax}
                            grandtotal={grandtotal}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default HomeView;
