import Typography from '@/components/elements/Typography'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const router = useRouter()
    const windowHeight = window.innerHeight
    const navTolistpage = (name) => {

        router.push({
            pathname: "services/list",
            query: { name: name }
        })
    }
    const navbarheight = useSelector((state) => state.navbarReducer.navbarheight)
    console.log(navbarheight, "kundan")
    return (
        <div style={{ backgroundColor: "rgb(214, 245, 214)" }}>

            <img src='./images/imagebest.jpg' style={{ width: "100%", height: windowHeight - navbarheight }} />
            <div className='twobutton'>

                <button onClick={() => navTolistpage("Remodelling")} className='button'>Remodelling</button>
                <button onClick={() => navTolistpage("Landscaping")} className='button'>Landscaping</button>

            </div>

        </div >

    )
}

export default Homepage