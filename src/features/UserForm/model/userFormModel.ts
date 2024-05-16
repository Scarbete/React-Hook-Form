import { EnumUserFormKeys, TUserFormValidation } from '@/features/UserForm/types/userFormTypes'

export const userFormValidation: TUserFormValidation = {
    [EnumUserFormKeys.NAME]: {
        required: 'Name is required file', // Правило которое указывает является ли поле обьязательным (принимает Boolean либо Текст ошибки)
        pattern: { // Это правило для проверки валидации поля формы по определенному регулярному выражению
            value: /[a-zA-Z]{3,}/, // проверка значения на валидацию по регулярному выражению
            message: 'Min 3 characters long', // текст ошибки при условии не соответствии значения с регулярноми выражениями
        }
    },
    [EnumUserFormKeys.SURNAME]: {
        required: 'Surname is required field'
    }
}