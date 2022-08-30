import Link from 'next/link'; 

import {FC} from 'react'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Post } from '../models/Post.interface'



const CardComponent: FC<{post: Post}> = ({post}: {post: Post}) => {
    const {slug, metaData} = post;
    const {title, dateString} = metaData;
    
    return (
        <div>
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: 2}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dateString}    
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blog/${slug}`} passHref>
            <Button size="small">Read More</Button>
        </Link>
      </CardActions>
    </Card>
        </div>
    )
}

export default CardComponent