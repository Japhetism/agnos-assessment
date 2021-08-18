import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const ModalComponent = (props: any) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);

    const { selectedProduct, addToOrder } = props;

    React.useEffect(() => {
        const { openModal } = props;
        setOpen(openModal);
    }, [props])

  
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <div>
                        <TextField id="outlined-basic" label="Enter Quantity" variant="outlined" onChange={event => setQuantity(parseInt(event.target.value))}  />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => {
                            addToOrder(selectedProduct, quantity)
                            handleClose()
                        }}>
                            Continue
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalComponent;