//  HOOKS
import UsePersonalsBestInNordschleife from "./hooks/usePersonalsBestInNordschleife";

function App() {

  const { personalsBestInNordschleife, haRecibidoPersonalBestInNordschleife } = UsePersonalsBestInNordschleife();

  function mostrarPersonalBest(value, index){
    return <li key={index}>
      <span>{value.nick} - {value.car} - {value.lapTime}</span>
    </li>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="m-5">The Nurburgringo</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul>
            {
              !haRecibidoPersonalBestInNordschleife ? (
                <></>
              ) : (
                personalsBestInNordschleife.map(mostrarPersonalBest)
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

