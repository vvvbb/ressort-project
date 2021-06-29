import React from "react";
import RoomsList from "./RoomList";
import RoomsFilter from "./RoomFilter";
// import { RoomConsumer } from "../context";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

/*
const RoomsContainers = () => {
  return (
    <RoomConsumer>
      {(value) => {
        //   console.log(value);
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            hello from RoomContainer
            <RoomsList rooms={rooms} />
            <RoomsFilter rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainers;
*/
