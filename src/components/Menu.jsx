import { DownOutlined } from "@ant-design/icons";

const Menu = (props) => {
  return (
    <li className="inline-flex items-center">
      {props.title}
      {props.icon && <DownOutlined className="text-xs ml-2 text-green-500" />}
    </li>
  );
};

export default Menu;
