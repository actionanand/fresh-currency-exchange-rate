export default function layout({children}:any) {
  return (
    <div>
        <nav class="w-full px-4 py-3 bg-yellow-800 text-white mb-10">
            <a class="mx-4" href="/">Home</a>
            <a class="mx-4" href="/api/joke">Joke</a>
            <a class="mx-4" href="/users/github">Search Github Users</a>
        </nav>
        {children}
    </div>
  )
}
