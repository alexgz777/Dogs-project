import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../redux/actions";
import Card from "./Card";
import FilterOrder from "./FilterOrder";
import "../styles/Home.css";

const Home = () => {
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  return (
    <div>
      <FilterOrder/>
      <div>
        {dogs?.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              image={e.image.url}
              name={e.name}
              temperament={e.temperament}
              weight={e.weight.metric}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
/* const mapStateToProps = (state) => ({ dogs: state.dogs });
const mapDispatchToProps = (dispatch) => {
  return (data) => {
    dispatch(getDogs(data));
  };
};

class Home extends Component { */
/* constructor(props) {
    super(props);
  } */
/*   componentDidMount() {
    this.props.getDogs();
  } */
/*   render() {
    return (
      <main>
        {this.props.dogs.map((e) => (
          <Card
            id={e.id}
            image={e.image.url}
            name={e.name}
            temperament={e.temperament.map((e) => e)}
            weight={e.weight.metric}
          />
        ))}
      </main>
    );
  }
}
const home = connect(mapStateToProps, mapDispatchToProps)(Home);
export default home;
 */
