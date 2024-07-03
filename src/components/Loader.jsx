import React from 'react'
import { CgSpinner } from "react-icons/cg";

function Loader() {
  return (
    <div className=' w-full flex justify-center items-center'>
        <CgSpinner className=' mt-3 text-4xl animate-spin' />
    </div>
  )
}

export default Loader