import './style.css'

export const Banner = ({ children }) => {

    return (
        <section className="banner" id="banner">
            <div className="container">
                <div className="banner-text">
                    {children}
                </div>
            </div>
        </section>
    )
}
