'use client';

import { useActionState } from 'react';
import { useFormStatus } from "react-dom";
import { searchAction } from "../action/searchAction";

const SearchForm = () => {
  const [state, action] = useActionState(searchAction, null);

  return (
    <form
      action={action}
      className="flex w-full gap-4"
    >
      <input
        type="text"
        className="border-4 text-xl text-black p-2 w-1/2"
        placeholder="Search images..."
        id="image"
        name="image"
      />
        <SubmitButton />
    </form>
  );
};

export default SearchForm;

const SubmitButton = () => {
    const status = useFormStatus();

    return (
        <button
        type="submit"
        aria-label="Search"
        className="bg-company-purple uppercase font-semibold p-2 text-white cursor-pointer hover:opacity-50 active:opacity-75"
      >
        {status.pending ? 'Searching...' : 'Search'}
      </button>
    )
}
