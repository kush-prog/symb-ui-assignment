import "../../styles/tools.css";

export default function Header() {
    return (
        <div className="tools-section1">
            <div className="tools-header d-flex flex-column align-items-center text-center">
                <h1>
                    All the <span className="highlight">tools</span> that you need
                </h1>
                <p>
                    Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse nec lorem mauris.
                    <br />
                    Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                </p>
            </div>

            <div className="tools-card">
                <img src="/images/Desktop.png" alt="desktop" className="desktop" />
            </div>
        </div>
    )
}