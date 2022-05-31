import React, { useContext, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { productsContext } from '../../contexts/productsContext';

// title, description, price, image

const AddProductForm = () => {
    const { createProduct } = useContext(productsContext)
    console.log(createProduct)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    function handleValues (){
        let newProduct = {
            title,
            description,
            price,
            image
        }
        createProduct(newProduct)
        // console.log(newProduct)
    }
    return (
        <Container maxWidth="sm">
            <Box display={"flex"} flexDirection={"column"} padding={"30px"} textAlign={"center"}>
                <Typography variant="h4" component="h2">Add new product</Typography>
                <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="standard-basic" label="Title" variant="standard" style={{margin: "10px"}} />
                <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="standard-basic" label="Description" variant="standard" style={{margin: "10px"}}/>
                <TextField value={price} onChange={(e) => setPrice(e.target.value)} id="standard-basic" label="Price" variant="standard" style={{margin: "10px"}}/>
                <TextField value={image} onChange={(e) => setImage(e.target.value)} id="standard-basic" label="Image" variant="standard" style={{margin: "10px"}}/>
                <Button onClick={handleValues} style={{margin: "10px"}} variant="contained" color="success">Add product</Button>
            </Box>
        </Container>
    );
};

export default AddProductForm;