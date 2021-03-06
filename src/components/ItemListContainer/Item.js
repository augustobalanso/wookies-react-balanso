import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography,CardActions, Button } from '@mui/material'

const Item = ({title,price,id,itemDesc,img,category}) => {

    return (
        <Card sx={{ maxWidth: 345, marginTop: '50px' }} variant={'outlined'}>
            <CardMedia
                component="img"
                height="100%"
                image={`/${img}`}
                alt={id}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    ${price}
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{ width : '100%', display : 'flex ', flexDirection : 'column'}}>  
                    <Link to={`/${category}/${id}`} style={{ textDecoration : 'none', color : '#125B50' }} >
                        <Button variant="outlined" sx={{ width: '100%',mb: '8px' }} >
                                VER MÁS
                        </Button>
                    </Link>
                    <Modal title={title} itemDesc={itemDesc} id={id} />
                </div>
            </CardActions>
        </Card>
    )
}

export default Item