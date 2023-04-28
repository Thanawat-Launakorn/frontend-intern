import React from "react";

type Props<T> = {
  items: Array<T>;
  renderItem: (ItemProps: {
    item: T;
    idx: number;
    array: Array<T>;
    key: string | number;
  }) => React.ReactNode;
  className?: string;
};

export default function OptionalLayout({
  items,
  renderItem,
  className,
}: Props<any>) {
  return (
    <div className={`${className}`}>
      {items?.map((item, idx, array) => {
        return (
          <React.Fragment key={item.id}>
            {renderItem({ item, idx, array, key: item.id })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
