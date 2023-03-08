import NavigationLink from './NavigationLink/NavigationLink';
import { Nav } from './AppBar.styled';

const AppBar = () => {
  return (
    <Nav>
      <NavigationLink text="Перевірити ТТН" navigate="/" />
      <NavigationLink text="Список відділеннь" navigate="/offices" />
    </Nav>
  );
};

export default AppBar;
