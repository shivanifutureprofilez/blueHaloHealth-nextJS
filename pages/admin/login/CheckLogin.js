import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { MyContext } from "@/pages/context/UserContext";
import AdminRoutes from "@/pages/api/AdminRoutes";

function CheckLogin({ children }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setUser, user, name, setName } = useContext(MyContext)
  // console.log("user ",user);
  //const navigate = useNavigate();
  const GetUser = () => {
    const data = new AdminRoutes()
    const fetch = data.adminprofile()
    fetch.then((res) => {
      if (res.data.status) {
        console.log("res.data.user ",res.data.user);
        setUser(res.data.user);
        setName("Shivani");
      } else {
            router.push("/admin/login");
            toast.error("You must have to login first.")
      }
    }).catch((err) => {
      console.log('err', err)
      //navigate('/login');
      router.push("/admin/login");
      toast.error("You must have to login first. Something went wrong")
    })
  }

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <></>
  );
}

export default CheckLogin;