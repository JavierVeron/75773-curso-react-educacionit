import BaseLayout from "./BaseLayout"

const Layout = ({children}) => {
    return (
        <BaseLayout clases={"col text-white bg-black p-5"}>
            {children}
        </BaseLayout>
    )
}

export default Layout