import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className="shell" style={{display:'grid',placeItems:'center',minHeight:'100vh'}}>
      <div>
        <div className="eyebrow" style={{marginBottom:16}}>OCARINA · ACCESO PRIVADO</div>
        <SignIn />
      </div>
    </main>
  )
}
