import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import "@design/icon/caret-right";
import "@design/icon/caret-bottom";

type ItemType = {
  /**
   * 唯一id
   */
  id: string;
  /**
   * 面板头内容
   */
  label: string;
  children: React.ReactNode;
};

export interface CollapseProps {
  /**
   * 折叠项目内容
   */
  items: ItemType[];
}

const styles = stylex.create({
  root: {},
  item: {
    cursor: "pointer",
  },
  hidden: {
    display: "none",
  },
});

export const Collapse: React.FC<CollapseProps> = (props) => {
  const { items } = props;
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const handleItemClick = (id: string) => {
    const index = activeIds.findIndex((activeId) => activeId === id);
    if (index !== -1) {
      activeIds.splice(index, 1);
      setActiveIds([...activeIds]);
    } else {
      activeIds.push(id);
      setActiveIds([...activeIds]);
    }
  };

  return (
    <div {...stylex.props(styles.root)}>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            {...stylex.props(styles.item)}
            onClick={() => handleItemClick(item.id)}
          >
            <div>
              {activeIds.includes(item.id) ? (
                <is-caret-bottom />
              ) : (
                <is-caret-right />
              )}{" "}
              {item.label}
            </div>
            <div
              {...stylex.props(
                activeIds.includes(item.id) ? undefined : styles.hidden
              )}
            >
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};
