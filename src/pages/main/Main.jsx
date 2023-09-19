import "./styles.css";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import useUser from "./../../hooks/UseUser";

function Main() {
  const { categories } = useUser();

  return (
    <main className="main">
      <Banner />
      <section>
        {categories.map((cat) => {
          return (
            <Category
              key={cat.id}
              categoryName={cat.name}
              categoryColor={cat.color}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
