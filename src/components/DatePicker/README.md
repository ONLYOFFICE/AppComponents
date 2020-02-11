# DatePicker

A component that allows to select a date or a range of dates using a calendar

### Usage

```js
import { DatePicker } from "app-components";
```

```jsx
<DatePicker
  onChange={date => {
    console.log("Selected date", date);
  }}
  selectedDate={new Date()}
  minDate={new Date("1970/01/01")}
  maxDate={new Date(new Date().getFullYear() + 1 + "/01/01")}
  locale="en"
/>
```

#### Properties

| Props          | Type     | Required | Values | Default                   | Description                                |
| -------------- | -------- | :------: | ------ | ------------------------- | ------------------------------------------ |
| `error`        | `bool`   |    -     |        | -                         | Indicates an error when the selected date is beyond the minimum and maximum dates                 |
| `disabled`     | `bool`   |    -     | -      | -                         | Disables the date input box - makes it impossible to enter or choose a date                 |
| `open`         | `bool`   |    -     |        | -                         | Opens a calendar on the selected web page                             |
| `readOnly`     | `bool`   |    -     |        | -                         | Makes the data in the input box read-only and impossible to edit                |
| `locale`       | `string` |    -     | -      | `User's browser settings` | If the language of the calendar is not set, it is selected using the browser locale                               |
| `maxDate`      | `date`   |    -     | -      | `new Date("3000/01/01")`  | Maximum date that the user can select.     |
| `minDate`      | `date`   |    -     | -      | `new Date("1970/01/01")`  | Minimum date that the user can select.     |
| `onChange`     | `func`   |    -     | -      | -                         | The function is called when the user selects a date |
| `openToDate`   | `date`   |    -     | -      | `(today)`                 | Month and year currently open on the calendar. Can be different from the selected date                         |
| `selectedDate` | `date`   |    -     | -      | `(today)`                 | Selected date value                        |
