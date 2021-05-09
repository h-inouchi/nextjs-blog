import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostListItem from 'src/components/posts/PostListItem';
import { useQuery } from '@apollo/client';
import { RANDOM_MEERKAT_QUERY, RandomMeerkatData } from '../../../lib/random-meerkat';
import { NextPage } from 'next';
interface PostListProps {}

const PostList: NextPage<PostListProps> = () => {
  const { loading, error, data } = useQuery<RandomMeerkatData>(RANDOM_MEERKAT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { randomMeerkat } = data;
  if (!randomMeerkat) return null;

  return (
    <div>
      <Grid key={randomMeerkat.id} item xs={12} sm={12} md={12} lg={12}>
        <PostListItem
          {...randomMeerkat}
        />
      </Grid>
    </div>
  );
};

export default PostList;
