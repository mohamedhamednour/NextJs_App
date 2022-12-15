import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [name, setname] = useState("hamed");

  useEffect(() => {
    console.log(name);
  }, []);
  return (
    <div>
  
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <Link href="/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap text-blue-500">M.H</span>
      </Link>
<div className="text-center">
<Link href='https://nextjs.org/docs'>NEXT JS</Link>

</div>  
  </div>
</nav>

    </div>
  );
}
