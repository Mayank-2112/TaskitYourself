import React from 'react'
import { Button } from './ui/button'
import { MoonIcon } from '@radix-ui/react-icons'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Login from './Login'
import Register from './Register'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-4 w-full border-b-2 shadow-lg'>
      <div className='flex justify-center items-center'>
        <h1 className='font-caveat text-5xl italic'>#TaskItYourself</h1>
      </div>
      <div className='flex gap-5 justify-center items-center'>
        <MoonIcon className='h-5 w-5' />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button  variant='ghost' className='text-2xl font-caveat p-5'>Register</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <div className='flex flex-col items-center mb-5'>
                  <h1 className='font-caveat text-4xl'>Register</h1>
                  <p className='font-caveat text-xl'>Fill out the details carefully</p>
                </div>
              </AlertDialogTitle>
              <AlertDialogDescription>
                <Register/>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className='mt-5'>
              <AlertDialogCancel className='font-caveat text-xl'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='font-caveat text-xl'>Register</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className='text-2xl font-caveat p-5'>Login</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
              <div className='flex flex-col items-center mb-5'>
                  <h1 className='font-caveat text-4xl'>Login</h1>
                  <p className='font-caveat text-xl'>Fill out the details carefully</p>
                </div>
              </AlertDialogTitle>
              <AlertDialogDescription>
                <Login/>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className='mt-5'>
              <AlertDialogCancel className='font-caveat text-xl'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='font-caveat text-xl'>Login</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>


      </div>
    </div>
  )
}

export default Navbar
