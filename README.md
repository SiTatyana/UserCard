Це міні-проект є компонентом React, який відображає профіль, схожий на Twitter. Компонент містить зображення аватара, зображення фону, деякі статистичні дані про обліковий запис користувача та кнопку, яка дозволяє користувачу стежити/не стежити за обліковим записом.
Репозиторій прокету створювався за шаблоном репозиторію організації GoIT.

Початок роботи.
Щоб використати цей компонент, ви можете імпортувати його у свій React проект та рендерити його, як будь-який інший компонент React. Ось приклад:
import { App } from './path/to/App';

function MyComponent() {
  return (
    <div>
      <App />
    </div>
  );
}


Методи.
Цей компонент містить один метод:
handleSubscription: функція, яка перемикає стан subscribed та відповідно оновлює стан subscriberCount. Вона викликається при натисканні кнопки стежити/не стежити.

Стилізація.
Цей компонент використовує стилізовані компоненти для визначення своїх стилів. Стилізовані компоненти визначені в файлі App.styled.js.

Залежності.
Цей компонент використовує такі залежності:
React
styled-components
Переконайтеся, що ви встановили ці залежності в свій проект, перш ніж використовувати цей компонент.

Автор.
Цей проект був створений Тетяною Сіянко в якості міні-проекту для навчальних цілей. Ви можете зв'язатися з нею за адресою tetiana.siyanko@gmail.com.
