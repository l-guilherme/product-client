import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';

export default function ProductItem({item}) {
    return (
        <>
            <ListItem alignItems="flex-center">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.img} />
                </ListItemAvatar>
                <ListItemText
                    primary={item.nome}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {item.preco}
                            </Typography>
                    </React.Fragment>
                }
                />
                <ListItemButton href={`/showProductDetails/${item.id}`}>Detalhes</ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}