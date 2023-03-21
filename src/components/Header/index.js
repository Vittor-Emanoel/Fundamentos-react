import React from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default class Header extends React.Component {
  render() {
    
    const {onToggleTheme, selectedTheme} = this.props;

    return (
      <ThemeContext.Consumer>
        {({theme, handleToggleTheme}) => (
            <Container>
            <h1>JStack's Blog</h1>
              <button type="button" onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌞' : '🌑'}
            </button>
          </Container>
        )}
    </ThemeContext.Consumer>
    )
  }
}


// export default function Header({ onToggleTheme, selectedTheme }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button type="button" onClick={onToggleTheme}>
//         {selectedTheme === 'dark' ? '🌞' : '🌑'}
//       </button>
//     </Container>
//   )
// }