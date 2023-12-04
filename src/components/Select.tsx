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

const SelectMenu = () => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Chose a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="phones">Phones</SelectItem>
          <SelectItem value="tv-sets">TV-Sets</SelectItem>
          <SelectItem value="speakers">Speakers</SelectItem>
          <SelectItem value="laptops">Laptops</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
