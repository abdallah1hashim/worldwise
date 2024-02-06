import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useCity } from "../contexts/CityContext";

function CountryList() {
  const { cities, isLoading } = useCity();
  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return [...acc];
    }
  }, []);
  console.log(cities);
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) return <Message />;
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  );
}

export default CountryList;
