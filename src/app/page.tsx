"use client"



import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const Page = () => {
  const projects = useQuery(api.projects.get)
  const createProjects = useMutation(api.projects.create)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={()=> createProjects({
        name:"New Project"
      })}>
        Add Project
      </Button>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-lg">This is a test</p>
      <Button variant={"outline"}>Click me</Button>
      {projects?.map((project)=>(
        <div key={project._creationTime}>
        <div key={project._id}>{project.name}</div>
        <div key={project.ownerId}>{project.ownerId}</div>
        </div>

        ))}

    </div>
  )
}

export default Page;
