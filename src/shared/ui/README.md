# API для UI-кита

## Button

| Свойство | Допустимые значения                                                   | Значения по умолчанию | Описание свойства             |
| -------- | --------------------------------------------------------------------- | --------------------- | ----------------------------- |
| onClick  | MouseEventHandler<HTMLButtonElement> \| undefined                     | undefined             | Событие при нажатии на кнопку |
| children | ReactNode \| undefined                                                | undefined             | Дочерние элементы кнопки      |
| disabled | boolean \| undefined                                                  | undefined (=false)    | Активность кнопки             |
| variant  | 'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning' | 'default'             | Цветовой вариант кнопки       |
| size     | 'sm' \| 'md' \| 'lg' \| 'icon'                                        | 'md'                  | Размер кнопки                 |

## Input

| Свойство    | Допустимые значения                                                   | Значения по умолчанию | Описание свойства       |
| ----------- | --------------------------------------------------------------------- | --------------------- | ----------------------- |
| state       | [string, Dispatch<SetStateAction<string>>]                            | -                     | Состояние поля ввода    |
| disabled    | boolean \| undefined                                                  | undefined (=false)    | Активность кнопки       |
| variant     | 'default' \| 'primary' \| 'error' \| 'success' \| 'info' \| 'warning' | 'default'             | Цветовой вариант кнопки |
| placeholder | string \| undefined                                                   | undefined             | Текстовая подсказка     |
| name        | string \| undefined                                                   | undefined             | Название поля           |
