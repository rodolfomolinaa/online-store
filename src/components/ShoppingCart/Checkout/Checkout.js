function Checkout({ purchase }) {
    const products = JSON.parse(localStorage.getItem('cart'));
    let totalProducts = 0;
    let totalAmout = 0;
    products.map((item) => (totalProducts += item.quantity));
    products.map((item) => (totalAmout += item.price * item.quantity));

    return (
        <div className="mb-3">
            <div className="pt-4">
                <h5 className="mb-3">Products({totalProducts})</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                            <strong>The total amount of</strong>
                        </div>
                        <span>
                            <strong>${totalAmout.toFixed(2)}</strong>
                        </span>
                    </li>
                </ul>
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={purchase}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Checkout;
