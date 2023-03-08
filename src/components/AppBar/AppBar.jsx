import NavigationLink from './NavigationLink/NavigationLink';

const AppBar = () => {
  return (
    <>
      <NavigationLink text="Перевірити ТТН" navigate="/" />
      <NavigationLink text="Список відділеннь" navigate="/offices" />
    </>
  );
};

export default AppBar;
