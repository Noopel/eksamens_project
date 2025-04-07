import ScrollableContainer from "@/components/ui/scroll/ScrollableContainer";

const AdminPage = () => {
  return (
    <main className="flex-grow">
      <ScrollableContainer scrollbarClassName="opacity-50 hover:opacity-80 transition-all" className=" max-h-96 ">
        <div>
          <div className="h-60 bg-slate-700 bg-gradient-to-t to-green-400 from-yellow-400">This is content!</div>
          <div className="h-60 bg-gradient-to-t to-blue-400 from-red-400">This is content!</div>
          <div className="h-60 bg-gradient-to-t to-blue-400 from-red-400">This is content!</div>
          <div className=" bg-gradient-to-t to-blue-400 from-red-400">
            <p>This is content!</p>
            <p>This is content!</p>
            <p>This is content!</p>
            <p>This is content!</p>
            <p>This is content!</p>
            <p>This is content!</p>
          <ScrollableContainer className="pe-3 max-h-60 w-1/2">
            <div>
              <div className="h-60 bg-slate-700 bg-gradient-to-t to-green-400 from-yellow-400">This is content!</div>
              
            </div>
          </ScrollableContainer>
            <p>This is content!</p>
            <p>This is content!</p>
            <p>This is content!</p>
            <p>
              This is content!This is content!This is content!This is content!This is content!This is content!This is
              content!
            </p>
          </div>

        </div>
      </ScrollableContainer>
    </main>
  );
};

export default AdminPage;
