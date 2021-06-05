/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/client';
import { ALL_MOVIES_QUERY, AllMoviesData } from '../../lib/all-meerkats';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word'
      },
    },
  }),
);

MovieLinks.propTypes = {
  disableLinkId: PropTypes.number
}

function MovieLinks(props) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const { loading, error, data } = useQuery<AllMoviesData>(ALL_MOVIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { allMovies } = data;
  if (!allMovies) return null;

  var list = [];
  for(var i in allMovies){
    if (props.disableLinkId === allMovies[i].id) {
      list.push(
        <span style={{ color: 'red' }}>
          {allMovies[i].id}
        </span>
      );
      continue;
    }
    list.push(
      <Link key={`movies${allMovies[i].id}`} href={`/movies/${allMovies[i].id}`} onClick={preventDefault}>
        {allMovies[i].id}
      </Link>
    );
  }

  return (
    <Typography className={classes.root}>
      動画リンク
      {list}
    </Typography>
  );
}

export default MovieLinks
