import React from "react"
import MiniPalette from "./Components/MiniPalette"
import { withStyles } from "@material-ui/styles"

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
}

const PaletteList = ({ classes, palettes, history }) => {
  const handleClick = (id) => history.push(`/palette/${id}`)

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => {
            return (
              <MiniPalette
                {...palette}
                onClick={() => handleClick(palette.id)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(PaletteList)
