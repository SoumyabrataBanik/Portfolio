import { Emails } from "resend/build/src/emails/emails";

export function validSenderDetails(value: unknown, type:string) {
    if (type === "message") {
        if (!value || typeof value !== "string") {
            return false;
        }
    }

    else if (type === "email") {
        if (!value || typeof value !== "string" || !value.includes("@") || !value.includes(".")) {
            return false;
        }
    }

    return true;
}

export function getErrorMessage(error: unknown): string {
    let errorMessage: string;

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = String(error.message)
    } else if (error && typeof error === "string") {
        errorMessage = error
    } else {
        errorMessage = "Unknown Error"
    }
    
    return errorMessage;
} 