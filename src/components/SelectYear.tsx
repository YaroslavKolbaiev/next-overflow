'use client';

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
import { UseSearchHandler } from '@/hooks/useSearchHandler';
import { years } from '@/constants/constants';

const SelectYear = () => {
  const { handleYearChange } = UseSearchHandler('year');
  return (
    <div className="mb-4 max-w-[160px] grow">
      <Select onValueChange={(value) => handleYearChange(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent className="text-dark200_light800">
          <SelectGroup>
            <SelectLabel>Select Year</SelectLabel>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectYear;
