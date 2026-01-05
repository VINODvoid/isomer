import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-lg">This is a test</p>
      <Button variant={"outline"}>Click me</Button>
    </div>
  )
}

export default Page;
