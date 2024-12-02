import "bootstrap/dist/css/bootstrap.css";
import "./leerlingen.css";

interface start {
  naam: string;
  klassen: [];
}

interface Props {
  start: start[];
}

function Leerlingen({ start }: Props) {
  return (
    <>
      <ul>
        {start.map((task, index) => (
          <div className="card text-bg-primary mb-3">
            <span>
              <h1 className="card-title">{task.naam}</h1>
            </span>
            <div>
              <ul className="list-group list-group-horizontal-sm">
                {task.klassen.map((klas, index) => (
                  <li className="list-group-item list-group-item-secondary">
                    {klas}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
export default Leerlingen;
