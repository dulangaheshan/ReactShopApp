import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./Location.css";
import { getLocation } from "../../actions";
import { change, formValueSelector } from "redux-form";
import { connect } from "react-redux";

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      markers: []
    };

    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    );
  }

  mapClicked = event => {
    const { markers } = this.state;
    this.setState({
      markers: [
        {
          position: event.latLng,
          key: Date.now(),
          defaultAnimation: 2
        },
        ...markers
      ]
    });
    console.log(markers);
  };

  onMarkerDragEnd = coord => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState({
      lat: lat,
      lng: lng
    });

    console.log(lat, lng);
    // this.setState(prevState => {
    //   // const markers = [...this.state.markers];
    //   // markers[index] = { ...markers[index], position: { lat, lng } };
    //   // return { markers };
    // });
  };

  setLocation() {
    const lat = this.state.lat;
    const lng = this.state.lng;
    const loc = [lat, lng];
    this.props.getLocation(loc);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    const style = {
      width: "50%",
      height: "50vh"
    };
    return (
      <div>
        <div>
          <Map
            google={this.props.google}
            zoom={11}
            style={style}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng
            }}
            center={{
              lat: this.state.lat,
              lng: this.state.lng
            }}
            onClick={this.mapClicked}
          >
            <Marker
              title={"Geolocation"}
              position={{
                lat: this.state.lat,
                lng: this.state.lng
              }}
              draggable={true}
              onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
            />
          </Map>
        </div>
        <div className="button">
          <button onClick={() => this.setLocation()}>sesdfght</button>
          <button onClick={this.props.triggerLocation}>sesdfght</button>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCZ7rgMN34kWkGvr8Pzkf_8nkT7W6gowBA"
})(
  connect(
    null,
    { getLocation }
  )(Location)
);
