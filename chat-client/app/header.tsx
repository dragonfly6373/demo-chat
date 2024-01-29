import Link from "next/link";
// import { useRouter } from 'next/navigation'

export default function Header() {
    // const router = useRouter();

    return (
        <section className="header">
            <div className="app-icon">
                <Link href="/">App Icon</Link>
            </div>
            <div className="header-right-content">
                <ul className="header-menu">
                    <li><Link href="/dashboard">Setting</Link></li>
                </ul>
            </div>
        </section>
    );
}
