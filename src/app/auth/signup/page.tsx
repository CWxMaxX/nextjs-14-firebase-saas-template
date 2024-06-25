"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Input, InputGroup } from 'rsuite'

const styles = {
  width: '100%',
  marginBottom: 16
}

const SignUpPage = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-slate-100'>
            <div className='sm:max-w-[450px] w-full h-screen sm:h-fit min-h-[300px] rounded-xl shadow-xl bg-white text-gray-700 text-center pt-32 sm:p-10 p-10 items-center flex flex-col' >
                <div className='w-full text-right'>
                    <Link href='/auth/login' className='hover:text-black' >Login existing Account</Link>
                </div>
                <div className='w-full' >
                    <Image width={50} height={50} src="https://img.icons8.com/374151/ios-filled/50/canva-app.png" alt="canva-app" />
                </div>
                <div className='w-full text-left mt-2 font-extrabold text-2xl' >Welcome !</div>
                <div className='w-full text-left mb-8 tracking-widest' >Enter your details to get started.</div>
                <InputGroup size='lg' inside style={styles}>
                    <InputGroup.Addon>
                        <Image width="20" height="20" src="https://img.icons8.com/717883/parakeet-line/50/badge" alt="badge" />
                    </InputGroup.Addon>
                    <Input placeholder='Name' />
                </InputGroup>
                <InputGroup size='lg' inside style={styles}>
                    <InputGroup.Addon>
                        <Image width="20" height="20" src="https://img.icons8.com/717883/parakeet-line/48/new-post.png" alt="new-post" />
                    </InputGroup.Addon>
                    <Input placeholder='Email' />
                </InputGroup>
                <InputGroup size='lg' inside style={styles}>
                    <InputGroup.Addon>
                        <Image width="20" height="20" src="https://img.icons8.com/717883/ios/48/key.png" alt="key" />
                    </InputGroup.Addon>
                    <Input type='password' placeholder='Password' />
                </InputGroup>
                <InputGroup size='lg' inside style={styles}>
                    <InputGroup.Addon>
                        <Image width="20" height="20" src="https://img.icons8.com/717883/ios/48/key.png" alt="key" />
                    </InputGroup.Addon>
                    <Input type='password' placeholder='Confirm Password' />
                </InputGroup>
                <Button appearance='primary' style={styles} size='lg' >Sign Up</Button>
                <div className='w-full border-t pt-2 border-slate-200 mb-4 text-sm text-slate-400'>or continue with</div>
                <Button appearance='ghost' size='lg' style={styles} startIcon={<Image width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />} >Google</Button>
            </div>
        </div>
  )
}

export default SignUpPage