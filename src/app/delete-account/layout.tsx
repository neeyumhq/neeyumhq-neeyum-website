import "./style.css";

export default function DeleteAccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="delete-account-wrapper">
                <div className="top-bar">
                    <div className="logo">
                        Neeyum <span className="lab">LAB</span>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}
