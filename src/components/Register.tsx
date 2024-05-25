import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Register = () => {
    return (
        <>
        <div className='flex flex-col items-between gap-5 font-caveat text-2xl w-full text-black'>
            <div className='flex flex-col gap-2 items-start w-full px-10'>
                <Label className='text-2xl'>Full Name</Label>
                <Input placeholder='Enter full name' type='name' id='name' />
            </div>
            <div className='flex flex-col gap-2 items-start w-full px-10'>
                <Label className='text-2xl'>Email</Label>
                <Input placeholder='Enter email' type='email' id='email'/>
            </div>
            <div className='flex flex-col gap-2 items-start w-full px-10'>
                <Label className='text-2xl'>Password</Label>
                <Input placeholder='Enter password' type='password' id='password' />
            </div>
            <h1 className='text-2xl flex self-center'>OR</h1>
        </div>
        <div className='flex justify-center w-full mt-2'>
            <Button type='button'className='text-xl font-caveat hover:text-white px-20 border border-violet-600 text-white bg-white text-black'><span className='mr-2 font-bold text-xl'>G</span>Continue with Google</Button>
        </div>
        </>
    )
}

export default Register
