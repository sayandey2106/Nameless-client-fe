import MainFrame from "./MainFrame";
import img1 from "../../images/Aaaj jaane ki.webp";

const item = {
  id: "1",
  poster: img1,
  title: "Aaj Jaane Ki Zid Na Karo",
  genre: "Romance",
  year: 2020,
  duration: "20min",
};

const ProdPage = () => {
  return (
    <>
      <MainFrame item={item} />
    </>
  );
};

export default ProdPage;
