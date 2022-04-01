import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';

import useStyles from './style';

export default function Cards({card}) {
    console.log(card);
    const classes = useStyles();
  return (
    <Card  className={classes.root} sx={{ maxWidth:"300px", maxHeight :"300px", margin:"auto" ,overflow:"auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={card.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {card.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.title}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
  
    </Card>
  );
}
