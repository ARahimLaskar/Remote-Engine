import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const DropdownCheckboxMenu = ({ selectedSkills, onChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Replace with your items

  useEffect(() => {
    // Update the parent component with the selected items whenever the selection changes
    onChange(selectedItems);
  }, [selectedItems, onChange]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        size="sm"
        textAlign="left"
        as={Button}
        rightIcon={<ChevronDownIcon fontSize="2xl" />}
        variant="outline"
      >
        {selectedItems.length > 0
          ? `${selectedItems.join(", ")}`
          : "Select Items"}
      </MenuButton>
      <MenuList>
        {items && items.length > 0 ? (
          items.map((item) => (
            <MenuItem key={item} size="sm">
              <Checkbox
                isChecked={selectedItems.includes(item)}
                onChange={() => handleItemClick(item)}
              >
                {item}
              </Checkbox>
            </MenuItem>
          ))
        ) : (
          <MenuItem>No items available</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default DropdownCheckboxMenu;
