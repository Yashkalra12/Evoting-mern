import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const FinalPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your vote has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/')
    })

    return (
        <>

        </>
    )
}

export default FinalPage
