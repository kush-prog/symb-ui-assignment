import Image from "next/image";
import "../../styles/hero.css";

export default function Grid() {
    return (
        <div className="student-left">

            <div className="col">
                <Image src="/images/students1.png" alt="student" width={140} height={180} />
            </div>

            <div className="col">
                <Image src="/images/students2.png" alt="student" width={140} height={180} />
            </div>

            <div className="col">
                <Image src="/images/students3.png" alt="student" width={140} height={180} />
            </div>

            <div className="col">
                <Image src="/images/students4.png" alt="student" width={140} height={180} />
            </div>

        </div>
    );
}