# Calendar

A custom calendar

### Usage

```js
import { Calendar } from "app-components";
```

```jsx
<Calendar
  onChange={date => {
    console.log("Selected date:", date);
  }}
  selectedDate={new Date()}
  openToDate={new Date()}
  minDate={new Date("1970/01/01")}
  maxDate={new Date("3000/01/01")}
  locale="ru"
  size="big"
/>
```

#### Properties

| Props          |   Type   | Required |    Values     |          Default          | Description                                                  |
| -------------- | :------: | :------: | :-----------: | :-----------------------: | ------------------------------------------------------------ |
| `locale`       | `string` |    -     |       -       | `User's browser settings` | If the language of the calendar is not set, it is selected automatically using the browser locale.                 |
| `maxDate`      |  `date`  |    -     |       -       | `new Date("3000/01/01")`  | Maximum date that the user can select.                       |
| `minDate`      |  `date`  |    -     |       -       | `new Date("1970/01/01")`  | Minimum date that the user can select.                       |
| `onChange`     |  `func`  |    -     |       -       |             -             | The function returns the value of the date selected by the user.                  |
| `openToDate`   |  `date`  |    -     |       -       |       `new Date()`        | Month and year currently open on the calendar. Can be different from the selected date |
| `selectedDate` |  `date`  |    -     |       -       |       `new Date()`        | Selected date value                                          |
| `size`         | `oneOf`  |    -     | `base`, `big` |          `base`           | Calendar size                                                |
