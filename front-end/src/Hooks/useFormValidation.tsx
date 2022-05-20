import { ChangeEvent, useState } from 'react';
import { Validation } from '../Models';

function useFormValidation<T extends { a: string }>({
  validations,
}: {
  validations: Partial<Record<keyof T, Validation>>;
}) {
  const [data, setData] = useState<T>({} as T);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const handleChange = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };
  const handleBlur = () => () => {
    let valid = true;
    const newErrors: Partial<Record<keyof T, string>> = {};
    for (const key in validations) {
      const value = data[key];
      const validation = validations[key];
      if (validation?.required?.value && !value) {
        valid = false;
        newErrors[key] = validation?.required?.message;
      }

      const pattern = validation?.pattern;
      if (pattern?.value && !RegExp(pattern.value).test(value)) {
        valid = false;
        newErrors[key] = pattern.message;
      }

      const custom = validation?.custom;
      if (custom?.isValid && !custom.isValid(value)) {
        valid = false;
        newErrors[key] = custom.message;
      }
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }
  };
  return { data, handleChange, errors, handleBlur };
}

export default useFormValidation;
