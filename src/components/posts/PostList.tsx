import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostListItem from 'src/components/posts/PostListItem';
import { useQuery } from '@apollo/client';
import { MEERKATS_QUERY, MeerkatsData } from '../../../lib/meerkats';
import { NextPage } from 'next';
interface PostListProps {}

const PostList: NextPage<PostListProps> = () => {
  const { loading, error, data } = useQuery<MeerkatsData>(MEERKATS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { allMeerkats } = data;

  if (!allMeerkats) return null;

  return (
    <div>
      <Grid container spacing={2}>
        {allMeerkats.map((meerkat) => {
          const href = `/posts/${meerkat.id}`;

          return (
            <Grid key={meerkat.id} item xs={12} sm={6} md={4} lg={3}>
              {/* <Paper className={classes.paper}>xs</Paper> */}
              <PostListItem
                {...meerkat}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PostList;
