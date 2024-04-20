import GetPokemon from "../islands/GetPokemon.tsx";
import GetQuote from "../islands/getQuotes.tsx"
import GetUsers from "../islands/getUsers.tsx";
export default function Home() {
  return (
  <div class="container">
  <GetPokemon />
  <div class="derecha">
  <GetQuote />
  <GetUsers />
  </div>
  </div>
  );
}