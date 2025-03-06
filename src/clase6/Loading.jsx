const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading