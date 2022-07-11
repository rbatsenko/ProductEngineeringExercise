import { PaperClipOutlined, UserOutlined } from "@ant-design/icons";
import { boards } from "./constants";

export const menuItems = [
  {
    key: boards["company"].id,
    icon: <PaperClipOutlined />,
    label: boards["company"].label,
  },
  {
    key: boards["people"].id,
    icon: <UserOutlined />,
    label: boards["people"].label,
  },
];
