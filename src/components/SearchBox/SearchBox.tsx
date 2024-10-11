import { changeFilter } from "../../redux/filtersSlice";
import { ChangeEvent, useId } from "react";
import { selectNameFilter } from "../../redux/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectNameFilter);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        className={css.searchInput}
        id={searchId}
        onChange={handleFilterChange}
        aria-label="Search contacts by name"
      />
    </form>
  );
}
