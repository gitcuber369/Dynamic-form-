import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <main className="flex flex-col mx-auto mt-52">
        <div>
          <h1 className="text-3xl font-medium text-center mb-10 ">
            Select the Dynamic Form Level
          </h1>
          <nav className="flex justify-evenly">
            <Button>
              <Link className="w-full" to="/level-1">
                Level 1
              </Link>
            </Button>
            <Button>
              <Link className="w-full" to="/level-2">
                Level 2
              </Link>
            </Button>
          </nav>
        </div>
      </main>
    </>
  );
}
