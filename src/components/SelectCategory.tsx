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
import { ProductInput, ProductCategory } from '@/types/enums';

const SelectCategoryMenu = ({ defaultValue }: { defaultValue: string }) => {
  return (
    <Select defaultValue={defaultValue} name={ProductInput.CATEGORY}>
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

export default SelectCategoryMenu;
