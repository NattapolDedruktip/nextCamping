'use client'

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RotateCw } from 'lucide-react';

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
    className?: string
    size?: btnSize
    text?: string
}

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {

    const { pending } = useFormStatus()
    return <Button
        type="submit"
        size={size}
        className={`${className} capitalize`}>
        {
            pending
                ? <RotateCw className="animate-spin" />
                : <p>{text}</p>
        }
    </Button>

}