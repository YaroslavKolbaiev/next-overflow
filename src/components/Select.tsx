import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AddProductInput, ProductCategory } from '@/types/enums';

const SelectMenu = () => {
  return (
    <Select name={AddProductInput.CATEGORY}>
      <SelectTrigger>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent className="text-dark200_light800">
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {Object.values(ProductCategory).map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
