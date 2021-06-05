/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/client';
import { ALL_MEERKATS_QUERY, AllMeerkatsData } from '../../lib/all-meerkats';
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

MeerkatLinks.propTypes = {
  disableLinkId: PropTypes.number
}

function MeerkatLinks(props) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const { loading, error, data } = useQuery<AllMeerkatsData>(ALL_MEERKATS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { allMeerkats } = data;
  if (!allMeerkats) return null;

  var list = [];
  for(var i in allMeerkats){
    if (props.disableLinkId === allMeerkats[i].id) {
      list.push(
        <span style={{ color: 'red' }}>
          {allMeerkats[i].id}
        </span>
      );
      continue;
    }
    list.push(
      <Link key={`meerkats${allMeerkats[i].id}`} href={`/meerkats/${allMeerkats[i].id}`} onClick={preventDefault}>
        {allMeerkats[i].id}
      </Link>
    );
  }

  return (
    <Typography className={classes.root}>
      写真リンク
      {list}
    </Typography>
  );
}

export default MeerkatLinks
