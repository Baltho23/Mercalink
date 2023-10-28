import { useRouter } from "next/navigation";

export default function Authenticated({children}: any) {

    const router = useRouter();

    function isAuthenticated() {
        const token = localStorage.getItem('token');
        return token === "ADMIN";
    }    

    function unauthorized() {
        router.push('/login');
    }

    return (
        <>
            {isAuthenticated() ? children : unauthorized()}
        </>
    )
}
