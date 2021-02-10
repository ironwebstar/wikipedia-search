import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    themes: {
      dark: {
        darkgrey: '#d1d1d1',
        font: '#444444',
        grey: '#f1f1f1',
        logo: '#242935',
        primary: '#dfdf9f',
        secondary: '#A2A5B2'
      },
      light: {
        darkgrey: '#353535',
        grey: '#f1f1f1',
        logo: '#242935',
        primary: '#dfdf9f',
        secondary: '#A2A5B2'
      }
    }
  }
})
