# DatePicker

Base DatePicker component

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
| `error`        | `bool`   |    -     |        | -                         | Set error date-input style                 |
| `disabled`     | `bool`   |    -     | -      | -                         | Disabled react-calendar                    |
| `open`         | `bool`   |    -     |        | -                         | Opens calendar                             |
| `readOnly`     | `bool`   |    -     |        | -                         | Set input type is read only                |
| `locale`       | `string` |    -     | -      | `User's browser settings` | Browser locale                             |
| `maxDate`      | `date`   |    -     | -      | `new Date("3000/01/01")`  | Maximum date that the user can select.     |
| `minDate`      | `date`   |    -     | -      | `new Date("1970/01/01")`  | Minimum date that the user can select.     |
| `onChange`     | `func`   |    -     | -      | -                         | Function called when the user select a day |
| `openToDate`   | `date`   |    -     | -      | `(today)`                 | Opened date value                          |
| `selectedDate` | `date`   |    -     | -      | `(today)`                 | Selected date value                        |
