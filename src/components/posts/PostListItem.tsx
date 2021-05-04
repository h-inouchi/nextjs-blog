import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PostType from 'src/types/Post';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props = PostType;

const PostListItem: React.FC<Props> = ({
  id,
  title,
  date,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={`/posts/${id}`}>
        <CardActionArea>
          <CardMedia className={classes.media} image="/images/profile.jpg" title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {contentHtml}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PostListItem;
