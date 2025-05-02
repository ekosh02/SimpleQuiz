import { Theme } from '@/types'

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    background: {
      primary: '#e9eff8',
      white: '#fff',
    },
    primary: '#3d81e7',
    icon: {
      primary: '#222',
      secondary: '#9BA7B1',
      background: '#fff',
      shadow: '#000',
      border: '#9CA5AC',
    },
    border: '#dae1e7',
    input: {
      border: '#dae1e7',
      placeholder: '#9ca5ac',
      background: '#fff',
    },
    font: {
      primary: '#000',
      gray: '#60656C',
      white: '#fff',
    },
    button: {
      background: {
        primary: '#3D81E7',
        primaryDisabled: '#9EC0F3',
        grayDisabled: '#e7edf2',
        selected: '#eee',
        action: '#fff',
        underlay: '#ddd',
      },
      font: {
        primary: '#fff',
        disabled: '#000',
      },
    },
  },
}

export const DarkTheme: Theme = {
  dark: true,
  colors: DefaultTheme.colors,
}
