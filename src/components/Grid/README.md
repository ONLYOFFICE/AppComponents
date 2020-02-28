# Grid 

A container that lays out its contents in a 2-dimensional grid system. Use Box components to define rows and columns.

### Usage

```js
import { Grid } from "app-components";
```

```jsx
<Grid />
```

### Properties

| Props            |      Type         | Required | Values | Default | Description                                           |
| :--------------: | :---------------: | :------: | :----: | :-----: | ----------------------------------------------------- |
| `alignContent`   | `string`          |    -     |   -    |    -    | Sets the distribution of space between and around content items along a Flexbox's cross-axis or a Grid's block axis |
| `alignItems`     | `string`          |    -     |   -    |    -    | In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area. The prop sets the align-self value on all direct children as a group. |
| `alignSelf`      | `string`          |    -     |   -    |    -    | In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis. The prop overrides a grid or flex item's align-items value. |
| `areasProp`      | `array`           |    -     | `[["header","header"],["navbar","main"]]`, `[{ name: "header", start: [0, 0], end: [1, 0] }, { name: "navbar", start: [0, 1], end: [0, 1] }, { name: "main", start: [1, 1], end: [1, 1] }]` |    -    | Specifies named grid areas. Takes value as string arrays that specify named grid areas. Or an array of objects that contains names and coordinates of areas. |
| `columnsProp`    | `string`,`array`,`object` |    -     | `"25%"`, `["200px", ["100px","1fr"], "auto"]`, `{ count: 3, size: "100px" }` |    -    | Defines the sizing of the grid columns. It is possible to create several columns of a certain size with a single string. The property defines a grid object by setting the number of column repetitions and their size. It also allows to set column sizes. The column size can be specified as an array of minimum and maximum widths. |
| `gridArea`       | `string`          |    -     |   -    |    -    | A shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end. It specifies a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area. |
| `gridColumnGap`  | `string`          |    -     |   -    |    -    | Sets the size of the gap (gutter) between an element's columns. |
| `gridGap`        | `string`          |    -     |   -    |    -    | Sets the size of the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap. |
| `gridRowGap`     | `string`          |    -     |   -    |    -    | Sets the size of the gap (gutter) between an element's grid rows. |
| `heightProp`     | `string`          |    -     |   -    | `100%`  | Defines the height of the border of the element area. |
| `justifyContent` | `string`          |    -     |   -    |    -    | Defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container. |
| `justifyItems`   | `string`          |    -     |   -    |    -    | Defines the default justify-self prop for all items of the box, giving them all a default way of justifying each box along the appropriate axis. |
| `justifySelf`    | `string`          |    -     |   -    |    -    | Sets the way a box is justified inside its alignment container along the appropriate axis.For more details see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self |
| `marginProp`     | `string`          |    -     |   -    |    -    | Sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left. |
| `paddingProp`    | `string`          |    -     |   -    |    -    | Sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left |
| `rowsProp`       | `string`,`array`  |    -     |   `"50px"`, `["100px", ["100px","1fr"], "auto"]`   |    -    | Defines the sizing of the grid rows. It is possible to create several rows of a certain size with a single string. The property defines a grid object by setting the number of row repetitions and their size. It also allows to set row sizes. The row size can be specified as an array of minimum and maximum widths. |
| `widthProp`      | `string`          |    -     |   -    | `100%`  | Defines the width of the border of the element area. |
