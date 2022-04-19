import React, { useContext, useState } from 'react';
import {
  Box,
  Divider,
  Typography,
  DialogTitle,
  Dialog,
  Button,
  ButtonGroup,
  TextField,
  Rating,
} from '@mui/material';
import { CartContext } from '../App';

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const CartModal = () => {
  const [qty, setQty] = useState(0);
  const ctx = useContext(CartContext);
  const hasItems = !!ctx.items.length;

  const handleChangeQty = (type, item) => {
    if (type === 'plus') {
      setQty(qty + 1);
      ctx.handleAddItem({ ...item, amount: 1 });
    }
    if (type === 'minus') {
      setQty(qty - 1);
      ctx.handleRemoveItem(item.id);
    }
  };

  return (
    <Dialog onClose={ctx.handleCloseModal} open={ctx.openModal}>
      <DialogTitle>{hasItems ? 'Check out your cart' : 'Ooops!'}</DialogTitle>
      <Divider />
      {!hasItems && (
        <Box
          width='20rem'
          height='12rem'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          gap='1rem'
        >
          <ProductionQuantityLimitsIcon
            sx={{ fontSize: '5rem', color: '#dedede' }}
          />
          <Typography>Your cart is empty. </Typography>
        </Box>
      )}
      {ctx.items.map((item, index) => {
        return (
          <Box key={item.id + index + Math.random()} sx={{ width: '600px' }}>
            <Box mt={0} display='flex'>
              <Box>
                <img
                  src={item.imgUrl}
                  alt=''
                  style={{
                    width: '10rem',
                    height: '8rem',
                    objectFit: 'cover',
                    marginLeft: '0.3rem',
                  }}
                />
              </Box>

              <Box width='100%' m={2} mr={3}>
                <Box display='flex'>
                  <Typography flex='1'>{item.title}</Typography>
                  <Box marginLeft='4rem'>
                    <Rating
                      name='simple-controlled'
                      value={item.stars}
                      size='small'
                      readOnly={true}
                    />
                  </Box>
                </Box>

                <Typography variant='caption'>{item.description}</Typography>
                <Box display='flex' mt={2}>
                  <ButtonGroup>
                    <Button
                      variant='contained'
                      onClick={() => handleChangeQty('minus', item)}
                    >
                      -
                    </Button>
                    <TextField
                      size='small'
                      sx={{ width: '2.5rem' }}
                      value={item.amount}
                    />
                    <Button
                      variant='contained'
                      onClick={() => handleChangeQty('plus', item)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <Typography
                    flex='1'
                    textAlign='right'
                    variant='h5'
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    € {item.price.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        );
      })}
      <Divider />
      {hasItems && (
        <>
          <Box display='flex' mx={3} my={2}>
            <Button
              variant='contained'
              disabled={!ctx.items.length}
              onClick={() =>
                alert('Payment feature still needs to be implemented.')
              }
            >
              Payment
            </Button>

            <Box flex='1' />
            <Box display='flex' alignItems='center'>
              <Typography variant='h6' fontWeight={400}>
                Total: &nbsp;
              </Typography>
              <Typography variant='h5' fontWeight={600}>
                € {ctx.finalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Divider />
        </>
      )}
    </Dialog>
  );
};

export default CartModal;
