export type Colors = {
  background: {
    primary: string
    white: string
  }
  primary: string
  icon: {
    primary: string
    secondary: string
    background: string
    shadow: string
    border: string
  }
  border: string
  input: {
    border: string
    placeholder: string
    background: string
  }
  font: {
    primary: string
    gray: string
    white: string
  }
  button: {
    background: {
      primary: string
      primaryDisabled: string
      grayDisabled: string
      selected: string
      action: string
      underlay: string
    }
    font: {
      primary: string
      disabled: string
    }
  }
}

export type Theme = {
  dark: boolean
  colors: Colors
}
