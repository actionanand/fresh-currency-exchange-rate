import { ComponentChildren } from 'preact';
import { Head } from '$fresh/runtime.ts';

// export default function layout({children, title,}: {children: ComponentChildren; title: string}) {
//   return (
//     <div>
//       <Head>
//         <title>{title}</title>
//       </Head>

//       <nav class="w-full px-4 py-3 bg-yellow-800 text-white mb-10">
//         <a class="mx-4" href="/">Home</a>
//         <a class="mx-4" href="/api/joke">Joke</a>
//         <a class="mx-4" href="/users/github">Search Github Users</a>
//       </nav>
      
//       {children}
//     </div>
//   )
// }


export default function layout({title}: {title: string}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <nav class="w-full px-4 py-3 bg-yellow-800 text-white mb-10">
        <a class="mx-4" href="/">Home</a>
        <a class="mx-4" href="/api/joke">Joke</a>
        <a class="mx-4" href="/users/github">Search Github Users</a>
      </nav>
      
    </div>
  )
}