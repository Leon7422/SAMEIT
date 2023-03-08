import { StatusContainer } from './StatusAreaTTN.styled';

const StatusAreaTTN = () => {
  return (
    <StatusContainer>
      <p>Статус доставки: Одержано</p>
      <p>Відправлено: Відділення №17 (до 30 кг): вул. Розумовська, 29 </p>
      <p>Отримано: Відділення №13 (до 30 кг): просп. Гагаріна, 43</p>
    </StatusContainer>
  );
};

export default StatusAreaTTN;
