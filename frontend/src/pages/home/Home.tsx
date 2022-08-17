import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { HomePresetsList } from "../../components/homePresetsList/HomePresetsList";

export const Home = () => {
  return (
    <>
      <Header />
      <HomePresetsList cols={5} rows={2} rowHeight={100}/>
      {/*<Footer />*/}
    </>
  );
};
