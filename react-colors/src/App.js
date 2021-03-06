import "./App.css"
import Pallete from "./Pallete"
import seedColors from "./seedColors"
import PaletteList from "./PaletteList"
import SingleColorPalette from "./SingleColorPalette"
import { generatePallete } from "./colorHelpers"
import { Route, Switch } from "react-router-dom"

function App() {
  const findPalette = (id) => seedColors.find((palette) => palette.id === id)

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={({ match }) => (
          <Pallete palette={generatePallete(findPalette(match.params.id))} />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={({ match }) => (
          <SingleColorPalette
            colorId={match.params.colorId}
            palette={generatePallete(findPalette(match.params.paletteId))}
          />
        )}
      />
    </Switch>
  )
}

export default App
