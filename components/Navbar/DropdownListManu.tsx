import { AlignLeft } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/link';
import SignoutLinks from './SignoutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';




const DropdownListManu = () => {
    return (


        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'}>
                    <AlignLeft />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* what you see when logout */}
                <SignedOut>
                    <DropdownMenuItem >
                        <SignInButton mode='modal'>
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SignUpButton mode='modal'>
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                {/* what you see when login */}
                <SignedIn>
                    {
                        links.map((item, index) => {
                            return <DropdownMenuItem key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </DropdownMenuItem>
                        })
                    }

                    <DropdownMenuItem>
                        <SignoutLinks />
                    </DropdownMenuItem>

                </SignedIn>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>


    )
}
export default DropdownListManu