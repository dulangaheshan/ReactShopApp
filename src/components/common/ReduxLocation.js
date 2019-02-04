import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getLocation } from "../../actions";
import changes from "../../actions/LocationAction";
import { change, formValueSelector } from "redux-form";
import { connect } from "react-redux";

const formSelector = formValueSelector("registershop");
class ReduxLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      markers: []
    };
  }

  componentDidMount() {
    this.props.getLocation();
  }

  // mapClicked = event => {
  //   const { markers } = this.state;
  //   this.setState({
  //     markers: [
  //       {
  //         position: event.latLng,
  //         key: Date.now(),
  //         defaultAnimation: 2
  //       },
  //       ...markers
  //     ]
  //   });
  //   console.log(markers);
  // };

  onMarkerDragEnd = (coord, t, map) => {
    // const { latLng } = coord;
    // const lat = latLng.lat();
    // const lng = latLng.lng();

    // this.setState({
    //   lat: lat,
    //   lng: lng
    // });
    this.props.changes(coord, t, map);

    //console.log(lat, lng);
    // this.setState(prevState => {
    //   // const markers = [...this.state.markers];
    //   // markers[index] = { ...markers[index], position: { lat, lng } };
    //   // return { markers };
    // });
  };
  onMakerPositionChanged(position) {
    this.props.dispatch(
      change("registershop", "lat", this.props.coords.coords.latitude)
    );
    this.props.dispatch(
      change("registershop", "lng", this.props.coords.coords.latitude)
    );
  }

  render() {
    // if (this.props.coords.dragged) {
    //   this.setState({
    //     lat: null,
    //     lng: null
    //   });
    // }

    // if (!this.props.coords.dragged) {
    //   this.setState({
    //     lat: this.props.coords.coords.latitude,
    //     lng: this.props.coords.coords.longitude
    //   });
    // }

    // if (this.props.coords.dragged) {
    //   this.props.coords.coords.latitude = this.props.coords.coords.position.lat,
    //     this.props.coords.coords.longitude = this.props.coords.coords.position.lng;
    // }
    //console.log(this.props.coords, "all");
    //console.log(this.props.coords.dragged, "dragged");
    //console.log(this.props.coords.coords.position, "dragged");
    const { latitude, longitude } = this.props.coords.coords;
    const { dragged } = this.props.coords;
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    const style = {
      marginTop: 10,
      width: "50%",
      height: "60%",
      marginBottom: 20
    };
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={style}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
        center={{
          lat: latitude,
          lng: longitude
        }}
        onMakerPositionChanged={this.onMakerPositionChanged}
      >
        <Marker
          title={"Geolocation"}
          position={{
            lat: latitude,
            lng: longitude
          }}
          draggable={true}
          onDragend={(t, map, coord) => this.onMarkerDragEnd(coord, t, map)}
        />
      </Map>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.location, "maptoprop drag");
  position: {
    lat: parseFloat(formSelector(state, "lat"));
    lng: parseFloat(formSelector(state, "lng"));
  }

  return {
    coords: state.location
  };
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCZ7rgMN34kWkGvr8Pzkf_8nkT7W6gowBA"
})(
  connect(
    mapStateToProps,
    { getLocation, changes }
  )(ReduxLocation)
);
