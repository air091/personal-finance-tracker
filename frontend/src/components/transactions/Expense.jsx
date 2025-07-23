import { useState } from "react";

const Expense = () => {
    const [items, setItems] = useState([]);

    const handleAdd = () => {
        setItems([...items, { id: Date.now() }]);
    }

    const InputPair = () => {
        return (
            <div className="flex">
                <div>
                    <label className="block">Category:</label>
                    <input type="text" className="border" />
                </div>
                <div>
                    <label className="block">Amount:</label>
                    <div>
                        <span>$</span>
                        <input type="text" className="border" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                {/******* COLUMN 1 *******/}
                <div>
                    <div>
                        <InputPair />
                        {items.map((item) => (
                            <InputPair key={item.id} />
                        ))}
                    </div>
                    <div className="text-end">
                        <span>Total: $1200</span>
                        <button onClick={handleAdd} className="border px-4">Add</button>
                    </div>
                </div>
            </div>

            {/******* COLUMN 2 *******/}
            <div className="flex">
                <div>
                    <label htmlFor="account" className="block">Account:</label>
                    <input id="account" type="text" className="border" />
                </div>
                <div>
                    <label htmlFor="date" className="block">Date:</label>
                    <input id="date" type="date" className="border" />
                </div>
            </div>

            {/******* COLUMN 3 *******/}
            <div>
                <label htmlFor="description" className="block">Description:</label>
                <textarea name="description" id="description" className="border"></textarea>
            </div>
        </div>
    );
}

export default Expense