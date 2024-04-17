import * as Yup from 'yup';

export const createTextValidationSchema = (fieldName, minLength, maxLength) => {
    return Yup.object().shape({
        [fieldName]: Yup.string()
            .min(minLength, `Минимальное количество символов ${minLength}`)
            .max(maxLength, `Максимальное количество символов ${maxLength}`)
            .required(`Для отправки необходимо ввести сообщение от ${minLength} до ${maxLength} символов`)
    });
}
