import Image from "next/image";
import "../../styles/tools.css";

export default function Icons() {
    return (
        <div className="tools-bottom">
            <img src="/images/Lines.png" alt="lines" className="lines" />

            <div className="tools-icons-head d-flex align-items-center justify-content-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i: number) => (
                    <div className="tools-icon" key={i}>
                        <Image
                            src={`/images/icon${i}.png`}
                            alt={`tool ${i}`}
                            width={32}
                            height={32}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}