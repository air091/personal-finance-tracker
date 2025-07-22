import Expense from "./Expense";
const Modal = ({ setIsActive }) => {
    const handleBackgroundModal = (e) => {
        if (e.target === e.currentTarget) setIsActive(false);
    };

    return (
        <div
            className="absolute h-screen w-full flex items-center justify-center top-0 left-0 bg-red-200"
            onClick={handleBackgroundModal}
        >
            <div className="border">
                <header>
                    <ul className="flex gap-x-5">
                        <li>Gain</li>
                        <li>Expense</li>
                    </ul>
                </header>
                <main>
                    <Expense />
                </main>
                <footer>
                    <button className="border px-4" onClick={() => setIsActive(false)}>
                        Save
                    </button>
                    <button className="border px-4" onClick={() => setIsActive(false)}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
