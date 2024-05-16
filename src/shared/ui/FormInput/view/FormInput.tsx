import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import classnames from "classnames"
import styles from './FormInput.module.scss'


type Props = {
    error: FieldError | undefined
    register: ReturnType<UseFormRegister<any>>
    placeholder?: string
    className?: string
}


const FormInput: FC<Props> = (props) => {

    const {
        error,
        register,
        placeholder,
        className = ''
    } = props

    return (
        <label className={classnames(styles.formLabel)}>
            {error && <span>{error?.message || ''}</span>}
            <input
                {...register}
                type={'text'}
                placeholder={placeholder}
                className={classnames(
                    styles.formInput,
                    className,
                    {[styles.error]: error}
                )}
            />
        </label>
    )
}

export default FormInput