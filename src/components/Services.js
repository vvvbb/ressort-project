import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cockails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo!",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quo!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
