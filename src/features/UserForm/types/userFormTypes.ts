import { RegisterOptions } from 'react-hook-form'

export enum EnumUserFormKeys {
    NAME = 'name',
    SURNAME = 'surname'
}

export type TUserData = {
    [EnumUserFormKeys.NAME]: string
    [EnumUserFormKeys.SURNAME]: string
}

export type TUserFormValidation = Record<EnumUserFormKeys, RegisterOptions>