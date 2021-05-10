import React from 'react';
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
    height: "70vh",
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
      <CardMedia className={classes.media} image={image} title={description} />
    </Card>
  );
};

export default PostListItem;
