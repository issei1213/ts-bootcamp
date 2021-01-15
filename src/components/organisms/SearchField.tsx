import React, { ChangeEvent, FC, useCallback, useState } from "react";
import styles from "styles/utility/flex.module.scss";
import { SearchButton, TextInput } from "components/atoms";
import { useStringChangeEvent } from "lib/customHooks";

const SearchField: FC = React.memo(() => {
  const [keyword, setKeyword] = useState<string>("");

  // 標準
  // const handleKeyword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   setKeyword(event.target.value);
  // }, [setKeyword]);

  // カスタムHook
  const handleKeyword = useStringChangeEvent(setKeyword);

  return (
    <div className={styles.flex__row_center}>
      <TextInput onChange={handleKeyword} type={"text"} value={keyword} />
      <SearchButton label={"Search"} onClick={() => null} />
    </div>
  );
});

export default SearchField;
