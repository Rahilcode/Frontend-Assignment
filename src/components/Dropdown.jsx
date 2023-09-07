// Dropdown.js
import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Dropdown = ({ categories, category, onChange }) => {
  return (
    <Select
      style={{ border: "2px solid black" }}
      bordered={false}
      value={category}
      onChange={onChange}
    >
      {categories.map((category) => (
        <Option key={category} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  );
};

export default Dropdown;
