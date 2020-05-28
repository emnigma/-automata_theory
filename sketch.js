let input = document.getElementById("display")

let active = true
let result = [2]

function num_insert(value) {
  if (active) {
    if (!(value == 0 && !input.value) && input.value + value < 1000)
      input.value = input.value + value
  }
}

function cls() {
  input.value = ""
  active = true
  input.style.color = "ForestGreen"
  changeLampColor("lightgrey")
}

function answer() {
  if (active && input.value) {
    if (input.value < 28 || input.value > 117) {
      changeLampColor("Brown")
      writeToInput("Err", "Brown")
    }
    else {
      result = (input.value - 18).toString()
      changeLampColor("LimeGreen")
      writeToInput(result[0] + "  " + result[1], "ForestGreen")
    }
    active = false
  }
}

function writeToInput(text, color) {
  input.value = text
  input.style.color = color
}

function changeLampColor(color) {
  document.getElementById('lamp').style.background = color
}