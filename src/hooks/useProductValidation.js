import { useState } from 'react';
import { validateProduct } from '../utils/validateProduct.js';

const INITIAL_VALUES = {
  name: '',
  description: '',
  price: '',
  tagInput: '',
  tags: [],
};

function useProductValidation(initialValues = INITIAL_VALUES) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const allErrors = validateProduct(values);

  const errors = Object.fromEntries(
    Object.entries(allErrors).filter(([field]) => touched[field])
  );

  const isFilled =
    values.name.trim() !== '' &&
    values.description.trim() !== '' &&
    values.price.trim() !== '' &&
    values.tags.length > 0;

  const isValid = Object.keys(allErrors).length === 0;

  const setValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const addTag = () => {
    const newTag = values.tagInput.trim();
    if (newTag === '' || allErrors.tagInput) return false;

    setValues((prev) => ({
      ...prev,
      tags: prev.tags.includes(newTag) ? prev.tags : [...prev.tags, newTag],
      tagInput: '',
    }));
    return true;
  };

  const removeTag = (tagToRemove) => {
    setValues((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return { values, errors, isFilled, isValid, setValue, addTag, removeTag };
}

export default useProductValidation;
