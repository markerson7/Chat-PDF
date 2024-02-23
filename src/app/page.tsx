import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import {LogIn} from 'lucide-react'
import FileUpload from '@/components/FileUpload'


export default async function Home() {
  const {userId} =  await auth()
  const isAuth = !!userId
  return(
    <div className="w-screen min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex item-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl='/'/>
          </div>
          
<div className="flex mt-2">
  {isAuth && (<Button>Go to Chats</Button>)} 
</div>

<p className='max-w-xl mt-1 text-lg text-slate-320'>
  Join milloins of students, researchers and professional to
   instantly answer questions and understand research with AI
</p>

<div className='w-full mt-4 '>
  {isAuth ? (
  <FileUpload/>
  ):(
    <Link href="/sign-in">
    <Button>
      Login to get started!
      <LogIn className='w-4 h-4 ml-2'/>
    </Button>
    </Link>
  )}
</div>

        </div>
      </div>
    </div>
  )
}
