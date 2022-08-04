import toast from "react-hot-toast"

export const SucccessToast = (message : string) => {
    toast.success(message)
}

export const ErrorToast = (message: string) => {
    toast.error(message)
}