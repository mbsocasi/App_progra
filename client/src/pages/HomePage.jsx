import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">Programaion integrativa</h1>
      <p className="text-md text-slate-400">
        experimenta una nueva porfa de mantener tu salud
        <br />
        V 1.0.1/login
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Iniciar
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
