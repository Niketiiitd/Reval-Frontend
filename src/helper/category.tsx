'use client'

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categories = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "fashion",
    label: "Fashion",
  },
  {
    value: "home-appliances",
    label: "Home Appliances",
  },
  {
    value: "beauty",
    label: "Beauty & Health",
  },
  {
    value: "sports",
    label: "Sports & Outdoors",
  },
  {
    value: "automobile",
    label: "Automobile",
  },
  {
    value: "toys",
    label: "Toys & Games",
  },
]

const conditions = [
  {
    value: "new-with-box",
    label: "New with box",
  },
  {
    value: "new-without-box",
    label: "New without box",
  },
  {
    value: "new-with-defects",
    label: "New with defects",
  },
  {
    value: "pre-owned",
    label: "Pre-owned",
  },
]

export function CategoryAndCondition({ type, value, onChange }) {
  const [open, setOpen] = React.useState(false)
  const options = type === "category" ? categories : conditions

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : `Select ${type}...`}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 mt-2">
        <Command>
          <CommandInput placeholder={`Search ${type}...`} className="h-9" />
          <CommandList>
            <CommandEmpty>No {type} found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}