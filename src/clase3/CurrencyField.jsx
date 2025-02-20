const CurrencyField = (props) => {
    return (
        <div className="mb-3">
            <label className="form-label">{props.divisa.toUpperCase()}</label>
            <input type="text" className="form-control" value={props.value} onChange={(e) => {props.onChange(e.target.value)}} />
        </div>
    )
}

export default CurrencyField