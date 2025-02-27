const BaseLayout = ({clases, children}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className={clases}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout