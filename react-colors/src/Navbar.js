import React, { useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./Navbar.css"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import { Link } from "react-router-dom"

const Navbar = ({
  level,
  changeLevel,
  handleChange,
  showingAllColors = true,
}) => {
  const [colorFormat, setColorFormat] = useState("hex")

  const [open, setOpen] = useState(false)

  const onChange = (e) => {
    setColorFormat(e.target.value)
    setOpen(true)
    handleChange(e.target.value)
  }

  const closeSnackbar = () => setOpen(false)

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showingAllColors && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select value={colorFormat} onChange={onChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">
            Format Changed to {colorFormat.toLocaleUpperCase()}
          </span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  )
}

export default Navbar
