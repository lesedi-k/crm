/* Pages */
import Landing from "./Landing/page";
import PageLayout from './components/pageLayout';
import { Andada_Pro } from "next/font/google";

export default function Home() {
  return (
    <main className="flex h-full flex-col gradient">
        <PageLayout Page={Landing}/> 
    </main>
  );
}
