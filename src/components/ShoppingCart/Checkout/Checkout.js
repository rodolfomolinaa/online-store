function Checkout() {
    const products = JSON.parse(localStorage.getItem('cart'));
    // let total = products.reduce((a, b) => a.price + b.price);
    let sum = 0;
    products.map(item => sum += item.price)
    console.log('sum', sum)

    return (
        <div className="mb-3">
            <div className="pt-4">
                <h5 className="mb-3">Products({products.length})</h5>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Total before taxes
                                  <span>$25.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                            <strong>The total amount of</strong>
                        </div>
                        <span>
                            <strong>
                                $53.98
                            </strong>
                        </span>
                    </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block">Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
