export default function PageLayout({ children }) {
    return (
        <div className="flex">  
            <main className="flex-1 p-4 pt-16">{children}</main>
        </div>
    );
}