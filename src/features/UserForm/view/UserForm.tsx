'use client'
// import { useEffect } from 'react'
import {
    // FieldError, // Тип, описывающий объект ошибки для поля формы
    SubmitHandler, // Тип, определяющий функции для отправки формы
    useForm, // Основной Хук для управления формой
    // RegisterOptions // Тип определяющий обьект опций в register
} from 'react-hook-form'

import { FormInput } from '../../../shared/ui/FormInput'
import classnames from 'classnames'
import styles from './UserForm.module.scss'
import { EnumUserFormKeys, TUserData } from '@/features/UserForm/types/userFormTypes'
import { userFormValidation } from '@/features/UserForm/model/userFormModel'



const UserForm = () => {

    const {
        register, // Функция регистрируяющая поля формы и применяющая правила валидации
        handleSubmit, // Функция, обрабатывающая отправку данных формы, вызывает нашу функцию Submit если все успешно
        reset, // Функция для сброса данных формы
        // getValues, // Получение значения у поля формы
        // getFieldState, // Получение состояния элемента поля формы
        // resetField, // Функция сброса значения для конкретного поля
        // watch, // Функция, которая позволяет отслеживать изменения значений определенных полей формы и получать их текущие значения
        formState: { errors } // это объект, он содержит различные свойства, связанные со состоянием формы
    } = useForm<TUserData>({
        mode: 'onChange', // Условие при каком событии будет срабатывать наша валидация
        // defaultValues: {} // это опция, которая позволяет установить дефолтные значения для полей формы
    }) // в хук также можно добавить опцию и параметры

    // Данная функция вызывается только при успешной валидации формы и в аргументах мы получаем данные из формы
    const handleFormSubmit: SubmitHandler<TUserData> = (data: TUserData) => {
        console.log('handleFormSubmit - data', data)
        // resetField(EnumUserFormKeys.NAME)
        reset()
    }

    // useEffect(() => {
    //     // При вызове функции мы получаем значение и информацию о полях формы
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type))
    //     return subscription.unsubscribe
    // }, [watch]) // callback в useEffect срабатывает каждый раз при изменении полей в форме

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={classnames(styles.reactHookForm)}>

            {Object.entries(userFormValidation).map(([key, value]) =>
                <FormInput
                    key={key}
                    error={errors[key as EnumUserFormKeys]}
                    register={{...register(key as EnumUserFormKeys, value)}}
                    placeholder={`Enter your ${key}`}
                />
            )}

            {/*<FormInput*/}
            {/*    error={errors?.name}*/}
            {/*    register={register}*/}
            {/*    registerName={EnumUserFormKeys.NAME}*/}
            {/*    registerValidation={userFormValidation.name}*/}
            {/*/>*/}

            {/*<FormInput*/}
            {/*    error={errors?.surname}*/}
            {/*    register={register}*/}
            {/*    registerName={EnumUserFormKeys.SURNAME}*/}
            {/*    registerValidation={userFormValidation.surname}*/}
            {/*/>*/}

            {/*<label>*/}
            {/*    {errors?.name && <span>{errors?.name?.message || ''}</span>}*/}
            {/*    <input*/}
            {/*        {...register(EnumUserFormKeys.NAME, userFormValidation.name)}*/}
            {/*        type={'text'}*/}
            {/*        placeholder={'Enter your name'}*/}
            {/*        className={classnames(*/}
            {/*            styles.formInput,*/}
            {/*            {[styles.error]: errors?.name}*/}
            {/*        )}*/}
            {/*    />*/}
            {/*</label>*/}

            <button>submit</button>
        </form>
    )
}

export default UserForm