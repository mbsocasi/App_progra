import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Registro de Progreso</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              BIENVENIDO {user.username}
            </li>
            <li>
  <Link to="/diets" className="font-bold text-purple-500">Dietas</Link>
</li>
<li>
  <Link to="/tasks" className="font-bold text-purple-500">Ejercicios</Link>
</li>

            <li>
              <ButtonLink to="/add-task">Añadir Ejercicio</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/add-diet">Añadir Ingesta</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/calculo-calorias">Calcular Calorias</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
              Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Registrarse</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
