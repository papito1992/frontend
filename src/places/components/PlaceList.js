import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './PlaceList.css';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from "@material-ui/core/ListSubheader";
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core/styles";
import PlaceItem from "./PlaceItem";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
const PlaceList = props => {
  const classes = useStyles();
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list" >
      <div>
      {/*<GridList cellHeight={500} className={classes.gridList}>*/}
      {/*<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>*/}
      {/*  <ListSubheader component="div">December</ListSubheader>*/}
      {/*</GridListTile>*/}
      <Grid container spacing={40} >

      {props.items.map(place => (
          // <GridListTile key={place.image}>
          //   <img src={place.image} alt={"test"} />
          //   <GridListTileBar
          //       title={place.title}
          //       subtitle={<span>Description: {place.description}</span>}
          //       actionIcon={
          //         <IconButton aria-label={`info about ${"tile.title"}`} className={"classes.icon"}>
          //           <InfoIcon />
          //         </IconButton>
          //       }
          //   />
          <Grid item md={4} style={{paddingRight: 10}}>

        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
          </Grid>
          // </GridListTile>
      ))}
      {/*// </GridList>*/}
      </Grid>

      </div>
    </ul>
  );
};

export default PlaceList;
