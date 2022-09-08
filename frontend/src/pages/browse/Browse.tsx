import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BrowsePresetsListContainer } from "../../components/presetsList/containers/BrowsePresetsListContainer";

export const Browse = () => {
  return (
    <>
      <Header />
      <BrowsePresetsListContainer prefetchAmount={10}/>
      <Footer />
    </>
  );
};
