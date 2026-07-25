export default function FloatingSquares() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <ul className="relative w-full h-full">
                <li className="floating-square square-1"></li>
                <li className="floating-square square-2"></li>
                <li className="floating-square square-3"></li>
                <li className="floating-square square-4"></li>
                <li className="floating-square square-5"></li>
                <li className="floating-square square-6"></li>
                <li className="floating-square square-7"></li>
                <li className="floating-square square-8"></li>
                <li className="floating-square square-9"></li>
                <li className="floating-square square-10"></li>
            </ul>
        </div>
    );
}