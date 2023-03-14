import { useState } from "react";
import classNames from "classnames";

import styles from "./SortButton.module.scss";
import { IoShirtOutline } from "react-icons/io5";
import { TbArrowsMoveVertical } from "react-icons/tb";

const SortButton = ({
  options,
  handleOptionChange,
}: {
  options: string[];
  handleOptionChange: (option: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.btn} onClick={toggleDropdown}>
      <div className={styles["btn__icon"]}>
        <IoShirtOutline />
      </div>
      <span className={styles["btn__text"]}>Sort</span>
      <div className={styles["btn__arrow"]}>
        <TbArrowsMoveVertical />
      </div>

      <ul
        className={classNames(styles.dropdown, {
          [styles.dropdown__show]: isOpen,
        })}
      >
        {options.map((option) => (
          <li
            key={option}
            className={styles.dropdown__item}
            onClick={() => {
              handleOptionChange(option);
              setIsOpen(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortButton;
