import { FC } from "react";

interface Props {}

export const Content: FC<Props> = () => (
  <ul className="menu p-4 w-80 text-base-content">
    <li>
      <a>메뉴1</a>
    </li>
    <li>
      <a>메뉴2</a>
    </li>
    <li>
      <a>메뉴3</a>
    </li>
    <li>
      <a>메뉴4</a>
    </li>
    <li>
      <a>메뉴5</a>
    </li>
  </ul>
);
