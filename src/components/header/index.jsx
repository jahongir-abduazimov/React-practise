import "./style.scss";
import {Container} from "../containers"

const index = () => {
    return (
        <>
            <header className="bg-[#222956]">
                <Container>
                    <nav className="h-[70px] flex items-center justify-between">
                        <div>
                            <a className="text-white font-bold text-[30px]" href="/">LOGO</a>
                        </div>
                        <ul className="flex gap-[30px]">
                            <li><a className="text-[18px] text-white font-medium" href="/">Home</a></li>
                            <li><a className="text-[18px] text-white font-medium" href="/">About</a></li>
                            <li><a className="text-[18px] text-white font-medium" href="/">Contact</a></li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    );
};

export default index;