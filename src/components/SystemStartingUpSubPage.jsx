import { useEffect } from "react";

export default function SystemStartingUpSubPage({setControlsSubPage, setSystemStartingUpSubPage}) {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setControlsSubPage(true);
      setSystemStartingUpSubPage(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

    return (
      <div className="SubPage" id="SystemStartingSubPage">
        <div className="CornerTitle">
          <h3>Sample Theater Name</h3>
          <p>Touch Panel Location</p>
        </div>
        <p className="SystemChangingText"> Please Wait {'\n'} System is Starting Up Now</p>
      </div>
    );
  }
  