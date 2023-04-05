
function App() {
  return (
    <div className="flex w-full min-h-screen bg-slate-50 justify-center items-center font-rubik">
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="flex flex-col items-center w-1/2">
          <div className="text-5xl text-primary-green font-bold ">
          Pick-Papers
          </div>
          <div className="text-3xl text-primary-blue mb-2">
            - YNCCC -
          </div>

          <div className="text-base text-primary-blue text-center">
          Pick Papers is a mobile application developed within YNCCC (The Youth Negotiation on Climate Change Convention) a youth group supported by Addis Ababa University. 
          This mobile application aims to recycle unused papers within the 4 Addis Ababa University Campuses.
          </div>
        </div>

        <div className="flex flex-row gap-4 w-full justify-center">
          <div className="flex flex-col gap-1 rounded-xl bg-white shadow-sm p-4 w-1/4">
            <div className="text-2xl text-primary-green font-bold ">
              Collectors
            </div>
            <div className="text-xl text-primary-blue mb-2">
              Pick-Papers
            </div>

            <div className="text-base text-primary-blue">
              This is a description about the collectors app of pick-papers. About the collectors app of pick-papers.
            </div>

            <div className="text-base text-primary-blue font-medium">
              Download Here: 
            </div>

            <div className="flex flex-row gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.ynccc.collector.app" className="rounded-lg bg-primary-green flex justify-center items-center px-3 py-2">
                <div className="text-base text-primary-blue">
                  Android
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.ynccc.collector.app" className="rounded-lg bg-primary-green flex justify-center items-center px-3 py-2">
                <div className="text-base text-primary-blue">
                  IOS
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1 rounded-xl bg-white shadow-sm p-4 w-1/4">
            <div className="text-2xl text-primary-green font-bold ">
              Users
            </div>
            <div className="text-xl text-primary-blue mb-2">
              Pick-Papers
            </div>

            <div className="text-base text-primary-blue">
              This is a description about the collectors app of pick-papers. About the collectors app of pick-papers.
            </div>

            <div className="text-base text-primary-blue font-medium">
              Download Here: 
            </div>

            <div className="flex flex-row gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.ynccc.collector.app" className="rounded-lg bg-primary-green flex justify-center items-center px-3 py-2">
                <div className="text-base text-primary-blue">
                  Android
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.ynccc.collector.app" className="rounded-lg bg-primary-green flex justify-center items-center px-3 py-2">
                <div className="text-base text-primary-blue">
                  IOS
                </div>
              </a>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default App;
