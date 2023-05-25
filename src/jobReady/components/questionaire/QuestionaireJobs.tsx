import QuestionaireJob from './QuestionaireJob'

export default function QuestionaireJobs() {
  return (
    <div className="mt-12 flex flex-col items-center gap-10">
      <h3 className="text-center text-sm sm:text-xl font-medium">Jobs found</h3>
      <div className="flex flex-col justify-center gap-6">
        <QuestionaireJob
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          img="https://plus.unsplash.com/premium_photo-1684164601795-690f2b348144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          offerLink="https://plus.unsplash.com/premium_photo-1684164601795-690f2b348144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </div>
  )
}
