import { useGetHotelQuery } from "../../redux/features/hotelsApi";

export const App = () => {
  const { data: hotel } = useGetHotelQuery();

  return (
    <div className="App">
      <header className="App-header">
        <p>TEST</p>
      </header>
    </div>
  );
};
