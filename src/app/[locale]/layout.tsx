import {ReactNode} from "react";

export default async function RootLayout({
    children,
}: {
    children: ReactNode,
}) {
    return (
        <html lang="en">
            <body className="bg-gray-50 dark:bg-gray-900">
                {children}
            </body>
        </html>
    )
}