import { AuthContextProvider } from "../../context/AuthContext"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <AuthContextProvider>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
        </AuthContextProvider>
      </section>
    )
  }