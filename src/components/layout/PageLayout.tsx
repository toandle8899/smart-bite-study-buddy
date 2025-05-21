
import React from "react";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen bg-tutor-background">
      <Header title={title} />
      <main className="flex-1 pb-16">
        <div className="container px-4 py-4 mx-auto max-w-md">
          {children}
        </div>
      </main>
      <MobileNavbar />
    </div>
  );
};

export default PageLayout;
