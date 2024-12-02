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
          <div className="card">
            <span>
              <h1>{task.naam}</h1>
            </span>
            <ul>
              {task.klassen.map((klas, incex) => (
                <li>{klas}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
}
export default Leerlingen;
