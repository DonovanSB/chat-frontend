import { useState } from 'react';

export function useForm<S>(
  initialState: S
): [
  values: S,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  reset: () => void
] {
  const [values, setValues] = useState<S>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange, reset];
}
