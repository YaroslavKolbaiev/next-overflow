'use client';

import React, { useState } from 'react';

import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import countries from '@/constants/countries.json';
import { UserInput } from '@/types/enums';

const SelectCountry = () => {
  const [open, setOpen] = useState(false);
  const [valuselectedCountry, setSelectedCountry] = useState('');
  const [alpha3, setAlpha3] = useState('');

  return (
    <>
      <input type="hidden" name={UserInput.COUNTRY} value={alpha3} />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="text-dark200_light800 w-[200px] justify-between capitalize"
          >
            {valuselectedCountry.length
              ? valuselectedCountry
              : 'Select country...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="max-h-[360px]">
              {countries.map((country) => (
                <CommandItem
                  key={country.alpha3}
                  onSelect={(currentValue) => {
                    setSelectedCountry(currentValue);
                    setAlpha3(country.alpha3);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      valuselectedCountry === country.name
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {country.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SelectCountry;
