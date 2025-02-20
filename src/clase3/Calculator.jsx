import { useState } from "react"
import CurrencyField from "./CurrencyField"

const Calculator = () => {
    const [divisa, setDivisa] = useState("");
    const [value, setValue] = useState(0);
    const valorBlue = 1200;

    const USDChange = (value) => {
        setDivisa("USD");
        setValue(value);
    }

    const PesosChange = (value) => {
        setDivisa("ARS");
        setValue(value);
    }

    const USDValue = divisa == "ARS" ? value / valorBlue : value;
    const PesosValue = divisa == "USD" ? value * valorBlue : value;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Calculator</h1>
                    <CurrencyField divisa={"USD"} value={USDValue} onChange={USDChange} />
                    <CurrencyField divisa={"ARS"} value={PesosValue} onChange={PesosChange} />
                </div>
            </div>
        </div>
    )
}

export default Calculator