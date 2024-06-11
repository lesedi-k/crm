'use client'

/* Pages */
import Landing from "./Landing/page";
import PageLayout from './components/pageLayout';


export default function Home() {
  return (
    <main className="flex h-full flex-col gradient">
        <PageLayout Page={Landing}/> 
    </main>
  );
}
