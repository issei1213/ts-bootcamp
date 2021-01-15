import React, { ChangeEvent, FC, useCallback, useState } from "react";
import styles from "styles/utility/flex.module.scss";
import { SearchButton, TextInput } from "components/atoms";
import { useStringChangeEvent } from "lib/customHooks";
import { searchHotels } from "lib/hotels";

const SearchField: FC = React.memo(() => {
  const [keyword, setKeyword] = useState<string>("");

  // Hooks(useCallback)
  // const handleKeyword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   setKeyword(event.target.value);
  // }, [setKeyword]);

  // 通常
  // const handleKeyword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setKeyword(event.target.value)
  // }

  // カスタムHook
  const handleKeyword = useStringChangeEvent(setKeyword);

  return (
    <div className={styles.flex__row_center}>
      <TextInput onChange={handleKeyword} type={"text"} value={keyword} />
      <SearchButton label={"Search"} onClick={() => searchHotels(keyword)} />
    </div>
  );
});

export default SearchField;
