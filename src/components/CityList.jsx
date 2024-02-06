import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useCity } from "../contexts/CityContext";

function CityList() {
  const { cities, isLoading } = useCity();
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) return <Message />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
