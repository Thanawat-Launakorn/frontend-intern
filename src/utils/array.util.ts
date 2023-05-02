export const _findObjectOfArrayById = (
  array: { id: string | number; [key: string]: any }[],
  id: number | string
): { [key: string]: any } | null => {
  const obj = array.find((x) => x.id.toString() === id.toString());
  return !!obj ? obj : null;
};
export const _findObjectOfArrayByKeyName = (
  array: { [key: string]: any }[],
  value: number | string,
  keyName: string
): { [key: string]: any } | null => {
  const obj = array.find((x) => x[keyName] === value);
  return !!obj ? obj : null;
};

export const _findIndexOfArrayById = (
  array: { id: string | number; [key: string]: any }[],
  id: number | string
): number => {
  const index = array
    .map((x) => {
      return x.id;
    })
    .indexOf(id);
  return index > 0 ? index : 0;
};

export const _removeObjectKeyOfArray = (options: {
  array: Array<{ [key: string]: any }> | [];
  key: string;
}): Array<object> => {
  const objRemove = options.array.map((obj) => {
    if (!!obj.children?.length) {
      return {
        ...obj,
        children: _removeObjectKeyOfArray({
          array: obj.children,
          key: options.key,
        }),
      };
    }
    const { [options.key]: _, ...newObj } = obj;
    return newObj;
  });
  return objRemove;
};

interface ArrayObj {
  [key: string]: any;
  children?: ArrayObj[];
}

export const _diffFilterArrayByKey = (options: {
  mainArray: Array<ArrayObj>;
  searchArray: Array<{ [key: string]: any }>;
  key: string;
}): Array<object> | [] => {
  const newArray = options.mainArray
    .filter((obj) => {
      return (
        !obj[options.key] ||
        !!_findObjectOfArrayByKeyName(
          options.searchArray,
          obj[options.key],
          options.key
        )
      );
    })
    .map((obj) => {
      const newObj = _diffFilterArrayByKey({
        mainArray: obj.children || [],
        searchArray: options.searchArray,
        key: options.key,
      });

      return !newObj.length
        ? { ...obj }
        : {
            ...obj,
            children: _diffFilterArrayByKey({
              mainArray: obj.children || [],
              searchArray: options.searchArray,
              key: options.key,
            }),
          };
    });
  return newArray;
};

export const filterUndefine = (values: any) => {
  let result = {};
  for (const [key, value] of Object.entries(values)) {
    if (value || value === false || value === 0) {
      result = { ...result, [key]: value };
    }
  }
  return result;
};
