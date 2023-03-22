import Courses from '@/components/widgets/Courses'
import Intro from "@/components/widgets/Intro";
import Nutshell from "@/components/widgets/Nutshell";


export default function Home() {
  return (
    <>
      <main>
      {/* import Intro from "@/components/widgets/Intro"; */}
        <Intro />
        {/* import Nutshell from "@/components/widgets/Nutshell"; */}
        <Nutshell />
        {/* import Cources from "@/components/widgets/CoreCources"; */}
        <Courses />
      </main>
    </>
  )
}
