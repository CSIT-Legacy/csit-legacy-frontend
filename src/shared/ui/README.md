# API для UI-кита

## Button

Удовлетворяет `ButtonHTMLAttributes<HTMLButtonElement>`

| Свойство   | Допустимые значения                                                     | Значения по умолчанию  | Описание свойства             |
| ---------- | ----------------------------------------------------------------------- | ---------------------- | ----------------------------- |
| `onClick`  | `MouseEventHandler<HTMLButtonElement> \| undefined`                     | `undefined`            | Событие при нажатии на кнопку |
| `children` | `ReactNode \| undefined`                                                | `undefined`            | Дочерние элементы кнопки      |
| `disabled` | `boolean \| undefined`                                                  | `undefined` (=`false`) | Активность кнопки             |
| `variant`  | `'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning'` | `'default'`            | Цветовой вариант кнопки       |
| `size`     | `'sm' \| 'md' \| 'lg' \| 'icon'`                                        | `'md'`                 | Размер кнопки                 |
| `customClassName` | `string \| undefined`                                                | `undefined`            | Кастомный класс   |

## Input

Удовлетворяет `InputHTMLAttributes<HTMLInputElement>`

| Свойство      | Допустимые значения                                                     | Значения по умолчанию  | Описание свойства       |
| ------------- | ----------------------------------------------------------------------- | ---------------------- | ----------------------- |
| `state`       | `[string, Dispatch<SetStateAction<string>>]`                            | -                      | Состояние поля ввода    |
| `disabled`    | `boolean \| undefined`                                                  | `undefined` (=`false`) | Активность кнопки       |
| `variant`     | `'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning'` | `'default'`            | Цветовой вариант кнопки |
| `placeholder` | `string \| undefined`                                                   | `undefined`            | Текстовая подсказка     |
| `name`        | `string \| undefined`                                                   | `undefined`            | Название поля           |
| `customClassName` | `string \| undefined`                                                | `undefined`            | Кастомный класс   |

## Radio-button

Удовлетворяет `InputHTMLAttributes<HTMLInputElement>`

| Свойство  | Допустимые значения                                                     | Значения по умолчанию  | Описание свойства           |
| --------- | ----------------------------------------------------------------------- | ---------------------- | --------------------------- |
| `variant` | `'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning'` | `'default'`            | Цветовой вариант компонента |
| `checked` | `boolean \| undefined`                                                  | `undefined` (=`false`) | Состояние                   |
| `label`   | `string \| undefined`                                                   | `undefined`            | Метка                       |
| `customClassName` | `string \| undefined`                                                | `undefined`            | Кастомный класс   |

## Checkbox

Удовлетворяет `InputHTMLAttributes<HTMLInputElement>`

| Свойство  | Допустимые значения                                                     | Значения по умолчанию  | Описание свойства           |
| --------- | ----------------------------------------------------------------------- | ---------------------- | --------------------------- |
| `variant` | `'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning'` | `'default'`            | Цветовой вариант компонента |
| `checked` | `boolean \| undefined`                                                  | `undefined` (=`false`) | Состояние                   |
| `label`   | `string \| undefined`                                                   | `undefined`            | Метка                       |
| `customClassName` | `string \| undefined`                                                | `undefined`            | Кастомный класс   |


## Box

| Свойство   | Допустимые значения                                                     | Значения по умолчанию  | Описание свойства           |
| ---------- | ----------------------------------------------------------------------- | ---------------------- | --------------------------- |
| `name`     | `string \| undefined`                                                   | `undefined`            | Текстовая метка коробки     |
| `variant` | `'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning'` | `'default'`            | Цветовой вариант компонента |
| `children` | `ReactNode \| undefined`                                                | `undefined`            | Дочерние элементы коробки   |
| `customClassName` | `string \| undefined`                                                | `undefined`            | Кастомный класс   |
