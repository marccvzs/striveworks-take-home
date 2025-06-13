import SimpleForm from "./SimpleForm";

const Header = () => {
    return (
        <header className="w-full">
            <div className="bg-white p-8">
                {/* Only breaking out the form components to minimize client components to their smallest form */}
                <SimpleForm />
            </div>
        </header>
    )
};

export default Header;
