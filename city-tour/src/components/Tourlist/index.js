import React from "react";
import Tour from "../Tour";
import "./Tourlist.scss";
import { tourData } from "../../tourData";
export default class Tourlist extends React.Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    console.log(tours);
    return (
      <section className="tourList">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
