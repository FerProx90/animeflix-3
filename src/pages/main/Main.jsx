import "./styles.css";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";

function Main() {
  return (
    <main>
      <Banner />
      <section>
        <Category />
        <Category />
      </section>
    </main>
  );
}

export default Main;
