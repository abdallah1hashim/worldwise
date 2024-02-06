import { createContext, useContext, useEffect, useState } from "react";

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://mocki.io/v1/a4cdc8dc-8c1f-48fd-b2dd-850971ab4ad2`
        );
        const { cities } = await res.json();
        setCities(cities);
      } catch (error) {
        alert("There was an error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <CityContext.Provider value={{ cities, isLoading }}>
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("CityContext was used outside the context provider");
  return context;
}

export { CityProvider, useCity };
