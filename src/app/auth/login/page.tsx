"use client"
import React from 'react'
import { Button, Input, InputGroup } from 'rsuite'
import EmailIcon from '@rsuite/icons/Email';
import Link from 'next/link';

const styles = {
    width: '100%',
    marginBottom: 16
};

const LoginPage = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-slate-100'>
            <div className='w-[450px] min-h-[300px] rounded-xl shadow-xl bg-white text-gray-700 text-center p-10' >
                <div className='w-full text-right'>
                    <Link href='/auth/signup' >Create new Account</Link>
                </div>
                <img width="50" height="50" src="https://img.icons8.com/374151/ios-filled/50/canva-app.png" alt="canva-app" />
                <div className='w-full text-left mt-2 font-extrabold text-2xl' >Welcome Back !</div>
                <div className='w-full text-left mb-8 tracking-wider' >Enter your details to get started.</div>
                <InputGroup size='lg' inside style={styles}>
                    <InputGroup.Addon>
                        <img width="20" height="20" src="https://img.icons8.com/717883/parakeet-line/48/new-post.png" alt="new-post" />
                    </InputGroup.Addon>
                    <Input placeholder='Email' />
                </InputGroup>
                <InputGroup size='lg' inside style={styles}>
                    <InputGroup.Addon>
                        <img width="20" height="20" src="https://img.icons8.com/717883/ios/48/key.png" alt="key" />
                    </InputGroup.Addon>
                    <Input placeholder='Password' />
                </InputGroup>
                <Button appearance='primary' style={styles} size='lg' >Login</Button>
                <div className='mb-4 text-sm'>or continue with</div>
                <Button appearance='ghost' size='lg' style={styles} startIcon={<img width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />} >Google</Button>
            </div>
        </div>
    )
}

export default LoginPage