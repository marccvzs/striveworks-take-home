"use client";

import { useActionState, startTransition } from "react";
import { deleteAction } from "../action/deleteAction";

const DeleteButton = ({ id }: { id: number }) => {
  const [state, action, isPending] = useActionState(deleteAction, null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = window.confirm(
      "You are about to delete this image. Do you want to proceed?"
    );

    if (confirmed) {
        startTransition(() => {
            // for diversity, we will invoke a server action since this could conceivably be a mutation
            const payload = id.toString();
            
            // we should redirect if successful
            action(payload)
        })
    }

    // @ts-ignore
    if (state?.error) alert("Error deleting image!");
  };

  return (
    <button
      aria-label="Delete"
      onClick={handleClick}
      className="bg-company-purple uppercase p-4 w-fit flex-end hover:bg-red-600 font-semibold active:bg-red-700"
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteButton;
