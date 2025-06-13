import UploadButton from "./UploadButton";
import SearchForm from "./SearchForm";

/**
 * This component take an input from a user. This input should be a file.
 * Submitting the input fires a server component that retrieves the image and displays
 * it to the user.
 * @returns void
 */

const SimpleForm = () => {
  // for demonstration purposes and the existing function of mock api, we can image id is the name

  return (
    <div className="flex flex-row justify-between">
        <SearchForm />
        <UploadButton />
    </div>
  );
};

export default SimpleForm;
