import Footer from "@/Components/Footer";
import GuestHeader from "@/Components/GuestHeader";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <GuestHeader />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
