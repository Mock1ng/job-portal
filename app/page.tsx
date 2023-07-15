import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <Main />
    </main>
  );
}
