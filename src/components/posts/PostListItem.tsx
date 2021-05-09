import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Meerkat from 'src/types/Meerkat';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props = Meerkat;

const PostListItem: React.FC<Props> = ({
  id,
  image,
  description,
  photoDate,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={`/posts/${id}`}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={description} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {photoDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PostListItem;
