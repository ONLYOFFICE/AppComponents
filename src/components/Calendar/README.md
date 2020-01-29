# Calendar

Used to display custom calendar

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
| `locale`       | `string` |    -     |       -       | `User's browser settings` | Browser locale                                               |
| `maxDate`      |  `date`  |    -     |       -       | `new Date("3000/01/01")`  | Maximum date that the user can select.                       |
| `minDate`      |  `date`  |    -     |       -       | `new Date("1970/01/01")`  | Minimum date that the user can select.                       |
| `onChange`     |  `func`  |    -     |       -       |             -             | Function called when the user select a day                   |
| `openToDate`   |  `date`  |    -     |       -       |       `new Date()`        | The beginning of a period that shall be displayed by default |
| `selectedDate` |  `date`  |    -     |       -       |       `new Date()`        | Selected date value                                          |
| `size`         | `oneOf`  |    -     | `base`, `big` |          `base`           | Calendar size                                                |
