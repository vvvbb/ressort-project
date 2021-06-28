import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
//give acces to Provider and Consumer
//<RoomContext.Provider value={}/>

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };
  //getData
  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    // console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images: images, id: id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      //   <RoomContext.Provider value={"hello"}>
      //  <RoomContext.Provider value={{greeting:this.this.state.greeting}}>
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
