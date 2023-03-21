import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'


//Styles
import Layout from './components/Layout'
import GlobalStyle from './styles/global'
import themes from './styles/themes'

class App extends Component {

  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    console.log('handleToggleTheme executou');

    this.forceUpdate()
    // this.setState(prevState => ({theme: prevState.theme === 'dark' ? 'light' : 'dark'}))
    
  }

  render() {
    

    const {theme} = this.state

    console.log('<App /> renderizou');

    return (
      
    <ThemeProvider theme={themes[theme] || themes.dark}>
      <GlobalStyle />
      <Layout 
      selectedTheme={theme} 
      onToggleTheme={this.handleToggleTheme} />
    </ThemeProvider>

      )
  }
}




// function App() {

//   // const {theme, currentTheme} = useContext(GlobalContext)
//   const [theme, setTheme] = useState('dark')


//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark
//   }, [theme])

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
//   }


//   //função de efeito

//   //Primeiro caso de uso é executar na primeira renderização do component 
//   //Executar apenas uma vez depois do mount = API ARRAY VAZIO[]
//   //Executar sempre que um state ou prop mudar = ELE FICA MONITORANDO AS VARIAVÉIS


//   //unmont = quando eles desmonta

//   useState(() => {
//        console.debug('useEffect executou') 
//   }, [])

//   return (

//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout selectedTheme={theme} onToggleTheme={handleToggleTheme} />
//     </ThemeProvider>

//   )
// }

export default App
