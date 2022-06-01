import { ChangeEvent, useCallback, useState } from 'react';
import { Validation } from '../Models';

function useFormValidation<T extends Record<keyof T, any>>({
  validations,
  initial,
}: {
  validations: Partial<Record<keyof T, Validation>>;
  initial?: Partial<T>;
}) {
  const [data, setData] = useState<T>((initial || {}) as T);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const handleChange = (key: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
    delete errors[key];
    setData({
      ...data,
      [key]: e.target.value,
    });
  };
  const validate = useCallback((validation: any, value: any, newErrors: any, key: any) => {
    if (validation?.required?.value && !value) {
      newErrors[key] = validation?.required?.message;
    }
    const pattern = validation?.pattern;
    if (pattern?.value && !RegExp(pattern.value).test(value)) {
      newErrors[key] = pattern.message;
    }
    const custom = validation?.custom;
    if (custom?.isValid && !custom.isValid(value)) {
      newErrors[key] = custom.message;
    }
  }, []);
  const handleBlur = (key: keyof T) => () => {
    const newErrors: Partial<Record<keyof T, string>> = { ...errors };
    const value = data[key];
    const validation = validations[key];
    delete newErrors[key];
    validate(validation, value, newErrors, key);
    setErrors(newErrors);
  };

  const handleCheckEmpty = () => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    for (const key in data) {
      const value = data[key];
      const validation = validations[key];
      validate(validation, value, newErrors, key);
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return false;
    }
    return true;
  };

  return { data, handleChange, errors, setErrors, handleBlur, handleCheckEmpty };
}

export default useFormValidation;
